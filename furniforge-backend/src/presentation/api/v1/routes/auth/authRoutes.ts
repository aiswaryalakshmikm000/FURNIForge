import express from "express";
import { AuthController } from "@presentation/api/v1/controllers/auth/AuthController.js";
import { validateBody } from "@presentation/api/middlewares/validationMiddleware.js";
import { RegisterSchema } from "@application/dtos/auth/RegisterUserDTO.js";
import { VerifyOtpSchema } from "@application/dtos/auth/VerifyOtpDTO.js";
import { container } from "@infrastructure/di/container.js";
import { TYPES } from "@infrastructure/di/types.js";
import { ResendOtpSchema } from "@application/dtos/auth/ResendOtpDTO.js";
import { otpLimiter, authLimiter } from "@infrastructure/security/rateLimiter.js";

const router = express.Router();

const controller = container.get<AuthController>(TYPES.AuthController);

router.post("/register", otpLimiter, validateBody(RegisterSchema), controller.register.bind(controller));
router.post("/verify-otp", authLimiter, validateBody(VerifyOtpSchema), controller.verifyOtp.bind(controller));
router.post("/resend-otp", otpLimiter, validateBody(ResendOtpSchema), controller.resendOtp.bind(controller))

export default router;
