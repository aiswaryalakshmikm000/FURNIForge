export interface IBaseRepository<T, Where = Partial<T>, OrderBy = unknown> {
  create(entity: T): Promise<T>;
  findById(id: string): Promise<T | null>;
  findAll(params?: {
    skip?: number;
    take?: number;
    orderBy?: OrderBy;
    where?: Where;
  }): Promise<T[]>;
  update(id: string, entity: T): Promise<T>;
  delete(id: string): Promise<void>;
  exists(where: Where): Promise<boolean>;
}