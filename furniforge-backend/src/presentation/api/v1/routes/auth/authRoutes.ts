import express from "express";
import { AuthController } from "@presentation/api/v1/controllers/auth/AuthController.js";
import { validateBody } from "@presentation/api/middlewares/validationMiddleware.js";
import { RegisterSchema } from "@application/dtos/auth/RegisterUserDTO.js";
import { RegisterUserUseCase } from "@application/use-cases/auth/RegisterUserUseCase.js";
import { UserRepository } from "@infrastructure/database/prisma/repositories/UserRepository.js";
import { BcryptPasswordService } from "@shared/utils/passwordHasher.js";
import { UserMapper } from "@application/mappers/UserMapper.js";
import { OtpService } from "@infrastructure/external-services/OtpService.js";

const router = express.Router();
const userMapper = new UserMapper();

const controller = new AuthController(
  new RegisterUserUseCase(
    new UserRepository(userMapper),
    new BcryptPasswordService(),
    userMapper,
    new OtpService(),
  ),
);

router.post("/register", validateBody(RegisterSchema), controller.register.bind(controller));

export default router;
