import { Router } from "express";
import { AuthController } from "../../../../../presentation/api/v1/controllers/auth/AuthController";
import { validateBody } from "../../../../../presentation/api/middlewares/validationMiddleware";
import { RegisterSchema } from "../../../../../application/dtos/auth/RegisterUserDTO";
import { VerifyOtpSchema } from "../../../../../application/dtos/auth/VerifyOtpDTO";
import { container } from "../../../../../infrastructure/di/container";
import { TYPES } from "../../../../../infrastructure/di/types";
import { ResendOtpSchema } from "../../../../../application/dtos/auth/ResendOtpDTO";
import { otpLimiter, authLimiter } from "../../../../../infrastructure/security/rateLimiter";
import { authMiddleware } from "../../../../../presentation/api/middlewares/authMiddleware";
import { LoginSchema } from "../../../../../application/dtos/auth/LoginUserDTO";
import { asyncHandler } from "../../../../../shared/utils/asyncHandler";
import { ForgotPasswordSchema } from "../../../../../application/dtos/auth/ForgotPasswordDTO";
import { ResetPasswordSchema, VerifyResetOtpSchema, ResendForgotPasswordOtpSchema } from "../../../../../application/dtos/auth/ForgotPasswordDTO";
import { GoogleAuthSchema } from "../../../../../application/dtos/auth/GoogleAuthDTO";
import { VerifyEmailRequestSchema } from "../../../../../application/dtos/auth/VerifyEmailDTO";

const router = Router();

//di activation
const controller = container.get<AuthController>(TYPES.AuthController);

router.post("/register", otpLimiter, validateBody(RegisterSchema), asyncHandler(controller.register));
router.post("/verify-otp", otpLimiter, validateBody(VerifyOtpSchema), asyncHandler(controller.verifyOtp));
router.post("/resend-otp", otpLimiter, validateBody(ResendOtpSchema), asyncHandler(controller.resendOtp));
router.post("/login", authLimiter, validateBody(LoginSchema), asyncHandler(controller.login));
router.post("/forgot-password", otpLimiter, validateBody(ForgotPasswordSchema), asyncHandler(controller.forgotPassword));
router.post("/verify-reset-otp", otpLimiter, validateBody(VerifyResetOtpSchema), asyncHandler(controller.verifyResetOtp))
router.post("/reset-password", otpLimiter, validateBody(ResetPasswordSchema), asyncHandler(controller.resetPassword));
router.post("/resend-forgot-password-otp", otpLimiter, validateBody(ResendForgotPasswordOtpSchema), asyncHandler(controller.resendForgotPasswordOtp));
router.post("/google", authLimiter, validateBody(GoogleAuthSchema), asyncHandler(controller.googleAuth));
router.post("/verify-email", authLimiter, validateBody(VerifyEmailRequestSchema), asyncHandler(controller.verifyEmail))


router.get('/me', authMiddleware, asyncHandler(controller.me));
router.post("/refresh-token", authLimiter, asyncHandler(controller.refreshToken));
router.post('/logout', authMiddleware, asyncHandler(controller.logout));
router.post('/logout-all', authMiddleware, asyncHandler(controller.logoutAll));

export default router;
