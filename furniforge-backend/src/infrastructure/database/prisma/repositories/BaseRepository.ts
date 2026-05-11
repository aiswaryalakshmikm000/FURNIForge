import { IBaseRepository } from "../../../../domain/repositories/IBaseRepository.js";

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
    const raw = await this.model.create({
      data: this.toCreate(entity),
    });
    return this.toDomain(raw);
  }

  async findById(id: string): Promise<TDomain | null> {
    const raw = await this.model.findUnique({ where: { id } });
    return raw ? this.toDomain(raw) : null;
  }

  async findAll(params?: any): Promise<TDomain[]> {
    const raws = await this.model.findMany(params);
    return raws.map((raw) => this.toDomain(raw));
  }

  async update(id: string, entity: Partial<TDomain>): Promise<TDomain> {
    const raw = await this.model.update({
      where: { id },
      data: this.toUpdate(entity),
    });
    return this.toDomain(raw);
  }

  async delete(id: string): Promise<void> {
    await this.model.delete({ where: { id } });
  }

  async exists(where: any): Promise<boolean> {
    const count = await this.model.count({ where });
    return count > 0;
  }
}