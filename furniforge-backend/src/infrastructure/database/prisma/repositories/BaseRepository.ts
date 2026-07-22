import type { IBaseRepository } from "../../../../domain/repositories/IBaseRepository";
import { handlePrismaError } from "../errors/handlePrismaError";

export abstract class BaseRepository <TDomain, TPrisma, TCreateInput, TUpdateInput, TFindFirstArgs, TFindManyArgs, TWhereInput> implements IBaseRepository <TDomain, TWhereInput, TFindManyArgs> {
  protected abstract model: {
    create(args: { data: TCreateInput }): Promise<TPrisma>;

    findUnique(args: {
        where: { id: string };
    }): Promise<TPrisma | null>;

    findFirst(args?: TFindFirstArgs): Promise<TPrisma | null>;

    findMany(args?: TFindManyArgs): Promise<TPrisma[]>;

    update(args: {
        where: { id: string };
        data: TUpdateInput;
    }): Promise<TPrisma>;

    delete(args: {
        where: { id: string };
    }): Promise<TPrisma>;

    count(args: {
        where?: TWhereInput;
    }): Promise<number>;
};

  protected abstract toDomain(raw: TPrisma): TDomain;
  protected abstract toCreate(entity: TDomain): TCreateInput;
  protected abstract toUpdate(entity: TDomain): TUpdateInput;

  async create(entity: TDomain): Promise<TDomain> {
    try {
      const raw = await this.model.create({ data: this.toCreate(entity)});
      return this.toDomain(raw);

    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findById(id: string): Promise<TDomain | null> {
    try {
      const raw = await this.model.findUnique({ where: { id }});
      return raw ? this.toDomain(raw) : null;

    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findFirst(params?: TFindFirstArgs): Promise<TDomain | null> {
    try {
      const raw = await this.model.findFirst(params);
      return raw ? this.toDomain(raw) : null;
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findAll(params?: TFindManyArgs): Promise<TDomain[]> {
    try {
      const raws = await this.model.findMany(params);
      return raws.map((raw) => this.toDomain(raw));
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async update(id: string, entity: TDomain): Promise<TDomain> {
    try {
      const raw = await this.model.update({ where: { id }, data: this.toUpdate(entity) });
      return this.toDomain(raw);

    } catch (error) {
      handlePrismaError(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.model.delete({ where: { id } });

    } catch (error) {
      handlePrismaError(error);
    }
  }

  async exists(where: TWhereInput): Promise<boolean> {
    try {
      const count = await this.model.count({ where });
      return count > 0;
    } catch (error) {
      handlePrismaError(error);
    }
  }
  
}