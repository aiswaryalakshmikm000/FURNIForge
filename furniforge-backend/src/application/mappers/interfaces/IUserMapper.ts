import { User } from "@domain/entities/User.js";
import { UserResponseDTO } from "@application/dtos/user/userResponseDTO.js";
import {User as PrismaUser, Prisma} from "../../../generated/prisma/index.js"
import { RegisterResponseDTO } from "@application/dtos/auth/RegisterResponseDTO.js";

export interface IUserMapper {
  toResponse(user: User): UserResponseDTO;
  toPersistence(user: User): Prisma.UserCreateInput;
  toDomain(raw: PrismaUser): User;
  toRegisterResponse(user: User): RegisterResponseDTO,
}