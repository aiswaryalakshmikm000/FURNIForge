import { Router } from "express";
import { container } from "../../../../../infrastructure/di/container";
import { authMiddleware } from "../../../middlewares/authMiddleware";
import { authorizeRoles } from "../../../middlewares/roleGuardMiddleware";
import { UserRole } from "../../../../../domain/enums/UserRole";
import { validateBody, validateParams } from "../../../middlewares/validationMiddleware";
import { TYPES } from "../../../../../infrastructure/di/types";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler";
import { TabController } from "../../controllers/admin/TabController";
import { CreateTabDTOSchema } from "../../../../../application/dtos/templateTabs/CreateTabDTO";
import { TabCommandParamsSchema } from "../../../../../application/dtos/templateTabs/TabCommandDTO";
import { UpdateTabDTOSchema } from "../../../../../application/dtos/templateTabs/UpdateTabDTO";

const router = Router();

const controller = container.get<TabController>( TYPES.TabController );

router.post("/tabs", authMiddleware, authorizeRoles(UserRole.ADMIN), validateBody(CreateTabDTOSchema), asyncHandler(controller.createTab));
router.patch("/tabs/:id", authMiddleware, authorizeRoles(UserRole.ADMIN), validateParams(TabCommandParamsSchema), validateBody(UpdateTabDTOSchema), asyncHandler(controller.updateTab));
router.delete("/tabs/:id", authMiddleware, authorizeRoles(UserRole.ADMIN), validateParams(TabCommandParamsSchema), asyncHandler(controller.deleteTab));
router.patch("/tabs/:id/toggle-status", authMiddleware, authorizeRoles(UserRole.ADMIN), validateParams(TabCommandParamsSchema), asyncHandler(controller.toggleStatus));

export default router;