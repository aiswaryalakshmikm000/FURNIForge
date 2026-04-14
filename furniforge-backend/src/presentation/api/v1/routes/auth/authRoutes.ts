import express from "express";
import { AuthController } from "@presentation/api/v1/controllers/auth/AuthController.js";
import { validateBody } from "@presentation/api/middlewares/validationMiddleware.js";
import { RegisterSchema } from "@application/dtos/auth/RegisterUserDTO.js";
import { VerifyOtpSchema } from "@application/dtos/auth/VerifyOtpDTO.js";
import { container } from "@infrastructure/di/container.js";
import { TYPES } from "@infrastructure/di/types.js";
import { ResendOtpSchema } from "@application/dtos/auth/ResendOtpDTO.js";
import { otpLimiter, authLimiter } from "@infrastructure/security/rateLimiter.js";
import { authMiddleware } from "@presentation/api/middlewares/authMiddleware.js";
import { LoginSchema } from "@application/dtos/auth/LoginUserDTO.js";

const router = express.Router();

//di activation
const controller = container.get<AuthController>(TYPES.AuthController);

router.post("/register", otpLimiter, validateBody(RegisterSchema), controller.register.bind(controller));
router.post("/verify-otp", otpLimiter, validateBody(VerifyOtpSchema), controller.verifyOtp.bind(controller));
router.post("/resend-otp", otpLimiter, validateBody(ResendOtpSchema), controller.resendOtp.bind(controller))
router.post("/refresh-token", authLimiter, controller.refreshToken.bind(controller))
router.post('/logout', authMiddleware, controller.logout.bind(controller))
router.post("/login", authLimiter, validateBody(LoginSchema), controller.login.bind(controller))
// router.post("/forgot-password", )
// router.post("/verify-reset-password", )

export default router;
