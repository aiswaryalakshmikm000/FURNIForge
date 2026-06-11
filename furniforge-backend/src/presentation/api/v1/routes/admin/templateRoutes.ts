import { Router } from "express";
import { container } from "../../../../../infrastructure/di/container";
import { TemplateController } from "../../controllers/admin/TemplateController";
import { TYPES } from "../../../../../infrastructure/di/types";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler";
import { CreateTemplateDTOSchema } from "../../../../../application/dtos/templates/CreateTemplateDTO";
import { validateBody, validateParams } from "../../../middlewares/validationMiddleware";
import { UserRole } from "../../../../../domain/enums/UserRole";
import { authorizeRoles } from "../../../middlewares/roleGuardMiddleware";
import { authMiddleware } from "../../../middlewares/authMiddleware";
import { TemplateCommandParamsSchema } from "../../../../../application/dtos/templates/templateCommandDTO";
import { UpdateTemplateDTOSchema } from "../../../../../application/dtos/templates/UpdateTemplateDTO";

const router = Router();

const controller = container.get<TemplateController>( TYPES.TemplateController );

router.post("/templates", authMiddleware, authorizeRoles(UserRole.ADMIN), validateBody(CreateTemplateDTOSchema), asyncHandler(controller.createTemplate) );
router.put("/templates/:id", authMiddleware, authorizeRoles(UserRole.ADMIN), validateParams(TemplateCommandParamsSchema), validateBody(UpdateTemplateDTOSchema), asyncHandler(controller.updateTemplate));
router.delete("/templates/:id", authMiddleware, authorizeRoles(UserRole.ADMIN), validateParams(TemplateCommandParamsSchema), asyncHandler(controller.deleteTemplate) );

export default router;