import { Router } from "express";
import { container } from "../../../../../infrastructure/di/container";
import { TYPES } from "../../../../../infrastructure/di/types";
import { authMiddleware } from "../../../middlewares/authMiddleware";
import { authorizeRoles } from "../../../middlewares/roleGuardMiddleware";
import { UserRole } from "../../../../../domain/enums/UserRole";
import { validateQuery } from "../../../middlewares/validationMiddleware";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler";
import { GetAllDeliverablesQuerySchema } from "../../../../../application/dtos/deliverables/GetAllDeliverablesDTO";
import { DeliverableController } from "../../controllers/admin/DeliverableController";

const router = Router();

const controller = container.get<DeliverableController>( TYPES.DeliverableController );

router.get("/deliverables", authMiddleware, authorizeRoles(UserRole.ADMIN), validateQuery(GetAllDeliverablesQuerySchema), asyncHandler(controller.getAllDeliverables))


export default router;