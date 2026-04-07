import prisma from "../client.js";
import { IUserRepository } from "@domain/repositories/IUserRepository.js";
import { User } from "@domain/entities/User.js";
import { IUserMapper } from "@application/mappers/interfaces/IUserMapper.js";
import { injectable, inject } from "inversify";
import { TYPES } from "@infrastructure/di/types.js";

@injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @inject(TYPES.IUserMapper) private userMapper: IUserMapper
  ) {}

  async findByEmail(email: string) {
    const raw = await prisma.user.findUnique({ where: { email } });
    return raw ? this.userMapper.toDomain(raw) : null;
  }

  async findByPhone(phone: string) {
  const raw = await prisma.user.findUnique({ where: { phone } });
  return raw ? this.userMapper.toDomain(raw) : null;
}

  async create(user: User) {
    const raw = await prisma.user.create({
      data: this.userMapper.toPersistence(user),
    });

    return this.userMapper.toDomain(raw);
  }
}
