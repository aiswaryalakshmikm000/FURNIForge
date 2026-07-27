export interface IBaseRepository< T, TWhereInput, TFindManyArgs = unknown > {
  create(entity: T): Promise<T>;

  findById(id: string): Promise<T | null>;

  findAll(params?: TFindManyArgs): Promise<T[]>;

  update(id: string, entity: T): Promise<T>;

  delete(id: string): Promise<void>;

  exists(where: TWhereInput): Promise<boolean>;
}