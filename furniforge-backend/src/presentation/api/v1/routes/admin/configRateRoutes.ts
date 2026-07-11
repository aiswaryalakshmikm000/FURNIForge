import { Router } from "express";
import { container } from "../../../../../infrastructure/di/container";
import { TYPES } from "../../../../../infrastructure/di/types";
import { authMiddleware } from "../../../middlewares/authMiddleware";
import { authorizeRoles } from "../../../middlewares/roleGuardMiddleware";
import { UserRole } from "../../../../../domain/enums/UserRole";
import { validateQuery } from "../../../middlewares/validationMiddleware";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler";
import { ConfigRateController } from "../../controllers/admin/ConfigRateController";
import { GetAllConfigRatesQuerySchema } from "../../../../../application/dtos/configRates/GetAllConfigRatesDTO";

const router = Router();

const controller = container.get<ConfigRateController>( TYPES.ConfigRateController );

router.get("/config-rates", authMiddleware, authorizeRoles(UserRole.ADMIN), validateQuery(GetAllConfigRatesQuerySchema), asyncHandler(controller.getAllConfigRates))

export default router;