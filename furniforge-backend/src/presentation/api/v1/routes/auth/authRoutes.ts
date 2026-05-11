import { Router } from "express";
import { AuthController } from "../../../../../presentation/api/v1/controllers/auth/AuthController.js";
import { validateBody } from "../../../../../presentation/api/middlewares/validationMiddleware.js";
import { RegisterSchema } from "../../../../../application/dtos/auth/RegisterUserDTO.js";
import { VerifyOtpSchema } from "../../../../../application/dtos/auth/VerifyOtpDTO.js";
import { container } from "../../../../../infrastructure/di/container.js";
import { TYPES } from "../../../../../infrastructure/di/types.js";
import { ResendOtpSchema } from "../../../../../application/dtos/auth/ResendOtpDTO.js";
import { otpLimiter, authLimiter } from "../../../../../infrastructure/security/rateLimiter.js";
import { authMiddleware } from "../../../../../presentation/api/middlewares/authMiddleware.js";
import { LoginSchema } from "../../../../../application/dtos/auth/LoginUserDTO.js";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler.js";
import { ForgotPasswordSchema } from "../../../../../application/dtos/auth/ForgotPasswordDTO.js";
import { ResetPasswordSchema, VerifyResetOtpSchema, ResendForgotPasswordOtpSchema } from "../../../../../application/dtos/auth/ForgotPasswordDTO.js";

const router = Router();

//di activation
const controller = container.get<AuthController>(TYPES.AuthController);

router.post("/register", otpLimiter, validateBody(RegisterSchema), asyncHandler(controller.register));
router.post("/verify-otp", otpLimiter, validateBody(VerifyOtpSchema), asyncHandler(controller.verifyOtp));
router.post("/resend-otp", otpLimiter, validateBody(ResendOtpSchema), asyncHandler(controller.resendOtp));
router.post("/refresh-token", authLimiter, asyncHandler(controller.refreshToken));
router.post('/logout', authMiddleware, asyncHandler(controller.logout));
router.post('/logout-all', authMiddleware, asyncHandler(controller.logoutAll));
router.post("/login", authLimiter, validateBody(LoginSchema), asyncHandler(controller.login));
router.get('/me', authMiddleware, asyncHandler(controller.me));
router.post("/forgot-password", otpLimiter, validateBody(ForgotPasswordSchema), asyncHandler(controller.forgotPassword));
router.post("/verify-reset-otp", otpLimiter, validateBody(VerifyResetOtpSchema), asyncHandler(controller.verifyResetOtp))
router.post("/reset-password", otpLimiter, validateBody(ResetPasswordSchema), asyncHandler(controller.resetPassword));
router.post("/resend-forgot-password-otp", otpLimiter, validateBody(ResendForgotPasswordOtpSchema), asyncHandler(controller.resendForgotPasswordOtp));


export default router;
