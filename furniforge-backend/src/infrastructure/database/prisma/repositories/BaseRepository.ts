import { IBaseRepository } from "../../../../domain/repositories/IBaseRepository.js";
import { handlePrismaError } from "../errors/handlePrismaError.js";

export abstract class BaseRepository <TDomain, TPrisma, TCreateInput, TUpdateInput> implements IBaseRepository <TDomain> {
  protected abstract model: {
    create(args: { data: TCreateInput }): Promise<TPrisma>;
    findUnique(args: any): Promise<TPrisma | null>; 
    findMany(args?: any): Promise<TPrisma[]>; 
    update(args: { where: any; data: TUpdateInput }): Promise<TPrisma>;
    delete(args: { where: any }): Promise<TPrisma>;
    count(args: { where?: any }): Promise<number>;
  };

  protected abstract toDomain(raw: TPrisma): TDomain;
  protected abstract toCreate(entity: TDomain): TCreateInput;
  protected abstract toUpdate(entity: Partial<TDomain>): TUpdateInput;

  async create(entity: TDomain): Promise<TDomain> {
    try {
      const raw = await this.model.create({
        data: this.toCreate(entity),
      });
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

  async findAll(params?: any): Promise<TDomain[]> {
    try {
      const raws = await this.model.findMany(params);
      return raws.map((raw) => this.toDomain(raw));

    } catch (error) {
      handlePrismaError(error);
    }
  }

  async update(id: string, entity: Partial<TDomain>): Promise<TDomain> {
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

  async exists(where: any): Promise<boolean> {
    try {
      const count = await this.model.count({ where });
      return count > 0;

    } catch (error) {
      handlePrismaError(error);
    }
  }
}