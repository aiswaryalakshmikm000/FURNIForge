import { Router } from "express";
import { UserRole } from "../../../../../domain/enums/UserRole";
import { container } from "../../../../../infrastructure/di/container";
import { TYPES } from "../../../../../infrastructure/di/types";
import { authMiddleware } from "../../../middlewares/authMiddleware";
import { authorizeRoles } from "../../../middlewares/roleGuardMiddleware";
import { RequirementFieldController } from "../../controllers/admin/requirementFieldController";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler";
import { validateQuery } from "../../../middlewares/validationMiddleware";
import { GetRequirementFieldDeliverablesQuerySchema } from "../../../../../application/dtos/requirementFields/GetRequirementFieldDeliverablesDTO";
import { GetTemplatesByDeliverableQuerySchema } from "../../../../../application/dtos/requirementFields/GetTemplatesByDeliverableDTO";

const router = Router();

const controller = container.get<RequirementFieldController>( TYPES.RequirementFieldController );

router.get("/requirement-fields/deliverables", authMiddleware, authorizeRoles(UserRole.ADMIN), validateQuery(GetRequirementFieldDeliverablesQuerySchema), asyncHandler(controller.getDeliverables))
router.get("/requirement-fields/templates", authMiddleware, authorizeRoles(UserRole.ADMIN), validateQuery(GetTemplatesByDeliverableQuerySchema), asyncHandler(controller.getTemplates))


export default router;