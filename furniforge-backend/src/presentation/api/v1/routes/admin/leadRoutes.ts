import { Router } from "express";
import { container } from "../../../../../infrastructure/di/container.js";
import { TYPES } from "../../../../../infrastructure/di/types.js";
import { LeadController } from "../../controllers/admin/LeadController.js";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler.js";
import { validateQuery } from "../../../middlewares/validationMiddleware.js";
import { GetAllLeadsQuerySchema } from "../../../../../application/dtos/lead/GetAllLeadsDTO.js";
import { authMiddleware } from "../../../middlewares/authMiddleware.js";
import { authorizeRoles } from "../../../middlewares/roleGuardMiddleware.js";
import { UserRole } from "../../../../../domain/enums/UserRole.js";

const router = Router();

const controller = container.get<LeadController>( TYPES.LeadController );

router.get("/leads", authMiddleware, authorizeRoles(UserRole.ADMIN), validateQuery(GetAllLeadsQuerySchema), asyncHandler(controller.getAllLeads));

export default router;