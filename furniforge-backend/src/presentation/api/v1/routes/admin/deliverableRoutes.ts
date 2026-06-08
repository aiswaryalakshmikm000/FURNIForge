import { Router } from "express";
import { container } from "../../../../../infrastructure/di/container";
import { TYPES } from "../../../../../infrastructure/di/types";
import { authMiddleware } from "../../../middlewares/authMiddleware";
import { authorizeRoles } from "../../../middlewares/roleGuardMiddleware";
import { UserRole } from "../../../../../domain/enums/UserRole";
import { validateBody, validateParams, validateQuery } from "../../../middlewares/validationMiddleware";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler";
import { GetAllDeliverablesQuerySchema } from "../../../../../application/dtos/deliverables/GetAllDeliverablesDTO";
import { DeliverableController } from "../../controllers/admin/DeliverableController";
import { DeliverableFormDTOSchema } from "../../../../../application/dtos/deliverables/deliverableFormDTO";
import { DeliverableCommandParamsSchema } from "../../../../../application/dtos/deliverables/deliverableCommandDTO";

const router = Router();

const controller = container.get<DeliverableController>( TYPES.DeliverableController );

router.get("/deliverables", authMiddleware, authorizeRoles(UserRole.ADMIN), validateQuery(GetAllDeliverablesQuerySchema), asyncHandler(controller.getAllDeliverables))
router.post("/deliverables", authMiddleware, authorizeRoles(UserRole.ADMIN), validateBody(DeliverableFormDTOSchema), asyncHandler(controller.createDeliverable) );
router.patch("/deliverables/:id", authMiddleware, authorizeRoles(UserRole.ADMIN), validateParams(DeliverableCommandParamsSchema), validateBody(DeliverableFormDTOSchema), asyncHandler(controller.updateDeliverable) );
router.patch("/deliverables/:id/toggle-status", authMiddleware, authorizeRoles(UserRole.ADMIN), validateParams(DeliverableCommandParamsSchema), asyncHandler(controller.toggleDeliverableStatus) );
router.patch("/deliverables/:id/soft-delete", authMiddleware, authorizeRoles(UserRole.ADMIN), validateParams(DeliverableCommandParamsSchema), asyncHandler(controller.softDeleteDeliverable) );
router.delete( "/deliverables/:id", authMiddleware, authorizeRoles(UserRole.ADMIN), validateParams(DeliverableCommandParamsSchema), asyncHandler(controller.deleteDeliverable) );

export default router;