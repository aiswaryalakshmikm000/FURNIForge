import { Router } from "express";
import { container } from "../../../../../infrastructure/di/container";
import { TYPES } from "../../../../../infrastructure/di/types";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler";
import { validateQuery } from "../../../middlewares/validationMiddleware";
import { authMiddleware } from "../../../middlewares/authMiddleware";
import { authorizeRoles } from "../../../middlewares/roleGuardMiddleware";
import { UserRole } from "../../../../../domain/enums/UserRole";
import { GetAllDesignersQuerySchema } from "../../../../../application/dtos/designer/GetAllDesignersDTO";
import { DesignerController } from "../../controllers/admin/DesignerController";

const router = Router();

const controller = container.get<DesignerController>( TYPES.DesignerController );

router.get("/designers", authMiddleware, authorizeRoles(UserRole.ADMIN), validateQuery(GetAllDesignersQuerySchema), asyncHandler(controller.getAllDesigners));

export default router;