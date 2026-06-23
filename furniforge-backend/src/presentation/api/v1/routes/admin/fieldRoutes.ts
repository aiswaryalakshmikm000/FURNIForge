import { Router } from "express";
import { container } from "../../../../../infrastructure/di/container";
import { TYPES } from "../../../../../infrastructure/di/types";
import { UserRole } from "../../../../../domain/enums/UserRole";
import { authMiddleware } from "../../../middlewares/authMiddleware";
import { authorizeRoles } from "../../../middlewares/roleGuardMiddleware";
import { validateBody, validateParams } from "../../../middlewares/validationMiddleware";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler";
import { FieldController } from "../../controllers/admin/FieldController";
import { CreateFieldDTOSchema } from "../../../../../application/dtos/fields/CreateFieldDTO";
import { FieldCommandParamsSchema } from "../../../../../application/dtos/fields/FieldCommandDTO";
import { UpdateFieldDTOSchema } from "../../../../../application/dtos/fields/UpdateFieldDTO";

const router = Router();

const controller = container.get<FieldController>( TYPES.FieldController );

router.post("/fields", authMiddleware, authorizeRoles(UserRole.ADMIN), validateBody(CreateFieldDTOSchema), asyncHandler(controller.createField));
router.put("/fields/:id", authMiddleware, authorizeRoles(UserRole.ADMIN), validateParams(FieldCommandParamsSchema), validateBody(UpdateFieldDTOSchema), asyncHandler(controller.updateField) );
router.patch("/fields/:id/soft-delete", authMiddleware, authorizeRoles(UserRole.ADMIN), validateParams(FieldCommandParamsSchema), asyncHandler(controller.softDelete));

export default router;