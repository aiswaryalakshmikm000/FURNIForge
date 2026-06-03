import { Router } from "express";
import { container } from "../../../../../infrastructure/di/container";
import { TYPES } from "../../../../../infrastructure/di/types";
import { LeadController } from "../../controllers/admin/LeadController";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler";
import { validateBody, validateParams, validateQuery } from "../../../middlewares/validationMiddleware";
import { GetAllLeadsQuerySchema } from "../../../../../application/dtos/lead/GetAllLeadsDTO";
import { authMiddleware } from "../../../middlewares/authMiddleware";
import { authorizeRoles } from "../../../middlewares/roleGuardMiddleware";
import { UserRole } from "../../../../../domain/enums/UserRole";
import { CreateLeadDTOSchema } from "../../../../../application/dtos/lead/CreateLeadDTO";
import { UpdateLeadDTOSchema } from "../../../../../application/dtos/lead/UpdateLeadDTO";
import { LeadCommandParamsSchema } from "../../../../../application/dtos/lead/LeadCommandResponseDTO";
import { AssignDesignerSchema } from "../../../../../application/dtos/lead/AssignDesignerDTO";

const router = Router();

const controller = container.get<LeadController>( TYPES.LeadController );

router.get("/leads", authMiddleware, authorizeRoles(UserRole.ADMIN), validateQuery(GetAllLeadsQuerySchema), asyncHandler(controller.getAllLeads));
router.patch("/leads/:id/assign-designer", authMiddleware, authorizeRoles(UserRole.ADMIN), validateParams(LeadCommandParamsSchema), validateBody(AssignDesignerSchema), asyncHandler(controller.assignDesigner))
router.get("/leads/designers-options", authMiddleware, authorizeRoles(UserRole.ADMIN), asyncHandler(controller.getDesignerOptions))
router.post("/leads", authMiddleware, authorizeRoles(UserRole.ADMIN), validateBody(CreateLeadDTOSchema), asyncHandler(controller.createManualLead))
router.delete("/leads/:id", authMiddleware, authorizeRoles(UserRole.ADMIN), validateParams(LeadCommandParamsSchema), asyncHandler(controller.deleteLead));
router.patch("/leads/:id", authMiddleware, authorizeRoles(UserRole.ADMIN), validateParams(LeadCommandParamsSchema), validateBody(UpdateLeadDTOSchema), asyncHandler(controller.updateLead ));

export default router;