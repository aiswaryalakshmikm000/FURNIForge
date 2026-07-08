import prisma from "../client";
import { injectable } from "inversify";
import { BaseRepository } from "./BaseRepository";
import { Prisma, User as PrismaUser } from "../../../../generated/prisma";
import { handlePrismaError } from "../errors/handlePrismaError";
import type { IDesignerRepository } from "../../../../domain/repositories/IDesignerRepository";
import { PrismaUserMapper } from "../mapper/PrismaUserMapper";
import { DesignerListItem } from "../../../../domain/read-models/designer/DesignerListItem";
import { User } from "../../../../domain/entities/User";
import { InternalServerError } from "../../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../config/messages";

@injectable()
export class DesignerRepository extends BaseRepository< User, PrismaUser, Prisma.UserCreateInput, Prisma.UserUpdateInput > implements IDesignerRepository {
  protected model = prisma.user;

  protected toDomain(raw: PrismaUser): User {
    return PrismaUserMapper.toDomain(raw);
  }

  protected toCreate(entity: User): Prisma.UserCreateInput {
    return PrismaUserMapper.toCreatePersistence(entity);
  }

  protected toUpdate(entity: User): Prisma.UserUpdateInput {
    return PrismaUserMapper.toUpdatePersistence(entity);
  }

  async getNextDesignerSequence(): Promise<number> {
    try {
      const counter = await prisma.counter.update({
        where: { id: "designer" },
        data: { value: { increment: 1 } },
      });

      return counter.value;
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async countDesigners(filters?: {
    search?: string;
    status?: "ACTIVE" | "BLOCKED" | "PENDING";
  }): Promise<number> {
    try {
      const where: Prisma.UserWhereInput = { role: "DESIGNER" };

      if (filters?.search) {
        where.OR = [
          { firstName: { contains: filters.search, mode: "insensitive" } },
          { lastName: { contains: filters.search, mode: "insensitive" } },
          { email: { contains: filters.search, mode: "insensitive" } },
          { phone: { contains: filters.search } },
        ] };

      if (filters?.status === "ACTIVE") {
        where.isVerified  = true;
        where.isBlocked = false;
      }
      if (filters?.status === "BLOCKED") {
        where.isBlocked = true;
      }
      if (filters?.status === "PENDING") {
        where.isVerified  = false;
        where.isBlocked = false;
      }

      return await this.model.count({ where });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findAllDesignerRows(params: {
    skip: number;
    take: number;
    search?: string;
    status?: "ACTIVE" | "BLOCKED" | "PENDING";
    sortBy: "rating" | "projects" | "revenue" | "createdAt";
    sortOrder: "asc" | "desc";
  }): Promise<DesignerListItem[]> {
    try {
      const where: Prisma.UserWhereInput = { role: "DESIGNER" };

      if (params.search) {
        where.OR = [
          { firstName: { contains: params.search, mode: "insensitive" } },
          { lastName: { contains: params.search, mode: "insensitive" } },
          { email: { contains: params.search, mode: "insensitive" } },
          { phone: { contains: params.search } },
        ];
      }

      if (params.status === "ACTIVE") {
        where.isVerified = true;
        where.isBlocked = false;
      }

      if (params.status === "BLOCKED") {
        where.isBlocked = true;
      }

      if (params.status === "PENDING") {
        where.isVerified = false;
        where.isBlocked = false;
      }

      let orderBy: Prisma.UserOrderByWithRelationInput = {
        createdAt: params.sortOrder,
      };

      switch (params.sortBy) {
        case "rating":
          orderBy = { rating: params.sortOrder };
          break;

        case "projects":
          orderBy = { projectCount: params.sortOrder };
          break;

        case "createdAt":
          orderBy = { createdAt: params.sortOrder };
          break;

        case "revenue":
          orderBy = { totalRevenue: params.sortOrder };
          break;
      }

      const raws = await this.model.findMany({
        where,
        skip: params.skip,
        take: params.take,
        orderBy,
        select: {
          id: true,
          designerRegNo: true,
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
          avatar: true,
          education: true,
          address: true,
          rating: true,
          projectCount: true,
          totalRevenue: true,
          isBlocked: true,
          isVerified: true,
          createdAt: true,
        },
      });

      return raws.map((raw) => {
        if (!raw.designerRegNo)
          throw new InternalServerError(
            ERROR_MESSAGES.ADMIN.DESIGNER_REG_NO_MISSING,
          );
        let location: string | null = null;

        if (
          raw.address &&
          typeof raw.address === "object" &&
          !Array.isArray(raw.address)
        ) {
          location = (raw.address as { city?: string }).city ?? null;
        }

        return {
          id: raw.id,
          designerRegNo: raw.designerRegNo,
          firstName: raw.firstName,
          lastName: raw.lastName,
          email: raw.email,
          phone: raw.phone,
          avatar: raw.avatar,
          location,
          education: raw.education,
          rating: raw.rating,
          projectCount: raw.projectCount,
          totalRevenue: raw.totalRevenue ? Number(raw.totalRevenue) : 0,
          isBlocked: raw.isBlocked,
          isVerified: raw.isVerified,
          createdAt: raw.createdAt,
        };
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

}
