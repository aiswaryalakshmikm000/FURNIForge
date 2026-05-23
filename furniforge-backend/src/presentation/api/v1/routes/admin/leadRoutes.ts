import { Router } from "express";
import { container } from "../../../../../infrastructure/di/container";
import { TYPES } from "../../../../../infrastructure/di/types";
import { LeadController } from "../../controllers/admin/LeadController";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler";
import { validateBody, validateQuery } from "../../../middlewares/validationMiddleware";
import { GetAllLeadsQuerySchema } from "../../../../../application/dtos/lead/GetAllLeadsDTO";
import { authMiddleware } from "../../../middlewares/authMiddleware";
import { authorizeRoles } from "../../../middlewares/roleGuardMiddleware";
import { UserRole } from "../../../../../domain/enums/UserRole";
import { AssignDesignerSchema } from "../../../../../application/dtos/lead/AssignDesignerDTO";

const router = Router();

const controller = container.get<LeadController>( TYPES.LeadController );

router.get("/leads", authMiddleware, authorizeRoles(UserRole.ADMIN), validateQuery(GetAllLeadsQuerySchema), asyncHandler(controller.getAllLeads));
router.patch("/leads/:id/assign-designer", authMiddleware, authorizeRoles(UserRole.ADMIN), validateBody(AssignDesignerSchema), asyncHandler(controller.assignDesigner))
router.get("/designers/options", authMiddleware, authorizeRoles(UserRole.ADMIN), asyncHandler(controller.getDesignerOptions))

export default router;