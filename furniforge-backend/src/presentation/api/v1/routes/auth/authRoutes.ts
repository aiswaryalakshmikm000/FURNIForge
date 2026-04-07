import express from "express";
import { AuthController } from "@presentation/api/v1/controllers/auth/AuthController.js";
import { validateBody } from "@presentation/api/middlewares/validationMiddleware.js";
import { RegisterSchema } from "@application/dtos/auth/RegisterUserDTO.js";
import { VerifyOtpSchema } from "@application/dtos/auth/VerifyOtpDTO.js";
import { container } from "@infrastructure/di/container.js";
import { TYPES } from "@infrastructure/di/types.js";

const router = express.Router();

const controller = container.get<AuthController>(TYPES.AuthController);

router.post("/register", validateBody(RegisterSchema), controller.register.bind(controller));
router.post("/verify-otp", validateBody(VerifyOtpSchema), controller.verifyOtp.bind(controller));

export default router;
