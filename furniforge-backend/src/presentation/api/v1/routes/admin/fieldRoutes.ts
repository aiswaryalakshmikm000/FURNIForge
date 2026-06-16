import { Router } from "express";
import { container } from "../../../../../infrastructure/di/container";
import { TYPES } from "../../../../../infrastructure/di/types";
import { UserRole } from "../../../../../domain/enums/UserRole";
import { authMiddleware } from "../../../middlewares/authMiddleware";
import { authorizeRoles } from "../../../middlewares/roleGuardMiddleware";
import { validateBody } from "../../../middlewares/validationMiddleware";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler";
import { FieldController } from "../../controllers/admin/FieldController";
import { CreateFieldDTOSchema } from "../../../../../application/dtos/fields/createFieldDTO";

const router = Router();

const controller = container.get<FieldController>( TYPES.FieldController );

router.post("/fields", authMiddleware, authorizeRoles(UserRole.ADMIN), validateBody(CreateFieldDTOSchema), asyncHandler(controller.createField));

export default router;