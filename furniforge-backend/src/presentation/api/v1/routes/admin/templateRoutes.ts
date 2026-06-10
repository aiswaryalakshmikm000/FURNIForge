import { Router } from "express";
import { container } from "../../../../../infrastructure/di/container";
import { TemplateController } from "../../controllers/admin/TemplateController";
import { TYPES } from "../../../../../infrastructure/di/types";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler";
import { CreateTemplateDTOSchema } from "../../../../../application/dtos/templates/CreateTemplateDTO";
import { validateBody } from "../../../middlewares/validationMiddleware";
import { UserRole } from "../../../../../domain/enums/UserRole";
import { authorizeRoles } from "../../../middlewares/roleGuardMiddleware";
import { authMiddleware } from "../../../middlewares/authMiddleware";

const router = Router();

const controller = container.get<TemplateController>( TYPES.TemplateController );

router.post("/templates", authMiddleware, authorizeRoles(UserRole.ADMIN), validateBody(CreateTemplateDTOSchema), asyncHandler(controller.createTemplate) );

export default router;