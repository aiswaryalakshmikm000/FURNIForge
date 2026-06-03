import { Router } from "express";
import { container } from "../../../../../infrastructure/di/container";
import { TYPES } from "../../../../../infrastructure/di/types";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler";
import { validateBody, validateParams, validateQuery } from "../../../middlewares/validationMiddleware";
import { authMiddleware } from "../../../middlewares/authMiddleware";
import { authorizeRoles } from "../../../middlewares/roleGuardMiddleware";
import { UserRole } from "../../../../../domain/enums/UserRole";
import { GetAllDesignersQuerySchema } from "../../../../../application/dtos/designer/GetAllDesignersDTO";
import { DesignerController } from "../../controllers/admin/DesignerController";
import { CreateDesignerDTOSchema } from "../../../../../application/dtos/designer/CreateDesignerDTO";
import { UpdateDesignerDTOSchema } from "../../../../../application/dtos/designer/UpdateDesignerDTO";
import { DesignerCommandParamsSchema } from "../../../../../application/dtos/designer/DesignerCommandDTO";

const router = Router();

const controller = container.get<DesignerController>( TYPES.DesignerController );

router.get("/designers", authMiddleware, authorizeRoles(UserRole.ADMIN), validateQuery(GetAllDesignersQuerySchema), asyncHandler(controller.getAllDesigners));
router.post("/designers", authMiddleware, authorizeRoles(UserRole.ADMIN), validateBody(CreateDesignerDTOSchema), asyncHandler(controller.createDesigner) );
router.patch("/designers/:id", authMiddleware, authorizeRoles(UserRole.ADMIN), validateParams(DesignerCommandParamsSchema), validateBody(UpdateDesignerDTOSchema), asyncHandler(controller.updateDesigner) );
router.patch("/designers/:id/block", authMiddleware, authorizeRoles(UserRole.ADMIN), validateParams(DesignerCommandParamsSchema), asyncHandler(controller.toggleDesignerBlock) );

export default router;