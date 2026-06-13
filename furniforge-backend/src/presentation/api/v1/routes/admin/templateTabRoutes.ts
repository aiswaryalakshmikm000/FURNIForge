import { Router } from "express";
import { container } from "../../../../../infrastructure/di/container";
import { authMiddleware } from "../../../middlewares/authMiddleware";
import { authorizeRoles } from "../../../middlewares/roleGuardMiddleware";
import { UserRole } from "../../../../../domain/enums/UserRole";
import { validateBody } from "../../../middlewares/validationMiddleware";
import { TYPES } from "../../../../../infrastructure/di/types";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler";
import { TemplateTabFormDTOSchema } from "../../../../../application/dtos/templateTabs/templateTabFormDTO";
import { TemplateTabController } from "../../controllers/admin/TemplateTabController";

const router = Router();

const controller = container.get<TemplateTabController>( TYPES.TemplateTabController );

router.post("/tabs", authMiddleware, authorizeRoles(UserRole.ADMIN), validateBody(TemplateTabFormDTOSchema), asyncHandler(controller.createTab) );

export default router;