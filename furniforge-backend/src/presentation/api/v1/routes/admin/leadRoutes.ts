import { Router } from "express";
import { container } from "../../../../../infrastructure/di/container.js";
import { TYPES } from "../../../../../infrastructure/di/types.js";
import { LeadController } from "../../controllers/admin/LeadController.js";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler.js";
import { validateQuery } from "../../../middlewares/validationMiddleware.js";
import { GetAllLeadsQuerySchema } from "../../../../../application/dtos/lead/GetAllLeadsDTO.js";

const router = Router();

const controller = container.get<LeadController>( TYPES.LeadController );

router.get("/", validateQuery(GetAllLeadsQuerySchema), asyncHandler(controller.getAllLeads));

export default router;