
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model Deliverable
 * 
 */
export type Deliverable = $Result.DefaultSelection<Prisma.$DeliverablePayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model TemplateTab
 * 
 */
export type TemplateTab = $Result.DefaultSelection<Prisma.$TemplateTabPayload>
/**
 * Model TemplateField
 * 
 */
export type TemplateField = $Result.DefaultSelection<Prisma.$TemplateFieldPayload>
/**
 * Model RequestFieldValue
 * 
 */
export type RequestFieldValue = $Result.DefaultSelection<Prisma.$RequestFieldValuePayload>
/**
 * Model Counter
 * 
 */
export type Counter = $Result.DefaultSelection<Prisma.$CounterPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  CLIENT: 'CLIENT',
  DESIGNER: 'DESIGNER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const LeadStatus: {
  UNASSIGNED: 'UNASSIGNED',
  ASSIGNED: 'ASSIGNED',
  DESIGNING: 'DESIGNING',
  PROPOSAL_SENT: 'PROPOSAL_SENT',
  CONVERTED: 'CONVERTED',
  LOST: 'LOST'
};

export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus]


export const LeadSource: {
  EXTERNAL: 'EXTERNAL',
  REFERRAL: 'REFERRAL',
  SELF_REGISTERED: 'SELF_REGISTERED'
};

export type LeadSource = (typeof LeadSource)[keyof typeof LeadSource]


export const PackageType: {
  BASIC: 'BASIC',
  STANDARD: 'STANDARD',
  PREMIUM: 'PREMIUM'
};

export type PackageType = (typeof PackageType)[keyof typeof PackageType]


export const FieldType: {
  TEXT: 'TEXT',
  TEXTAREA: 'TEXTAREA',
  NUMBER: 'NUMBER',
  SELECT: 'SELECT',
  MULTI_SELECT: 'MULTI_SELECT',
  CHECKBOX: 'CHECKBOX',
  RADIO: 'RADIO',
  DATE: 'DATE',
  FILE: 'FILE',
  IMAGE: 'IMAGE',
  EMAIL: 'EMAIL',
  PHONE: 'PHONE'
};

export type FieldType = (typeof FieldType)[keyof typeof FieldType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type LeadStatus = $Enums.LeadStatus

export const LeadStatus: typeof $Enums.LeadStatus

export type LeadSource = $Enums.LeadSource

export const LeadSource: typeof $Enums.LeadSource

export type PackageType = $Enums.PackageType

export const PackageType: typeof $Enums.PackageType

export type FieldType = $Enums.FieldType

export const FieldType: typeof $Enums.FieldType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliverable`: Exposes CRUD operations for the **Deliverable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliverables
    * const deliverables = await prisma.deliverable.findMany()
    * ```
    */
  get deliverable(): Prisma.DeliverableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.templateTab`: Exposes CRUD operations for the **TemplateTab** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateTabs
    * const templateTabs = await prisma.templateTab.findMany()
    * ```
    */
  get templateTab(): Prisma.TemplateTabDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.templateField`: Exposes CRUD operations for the **TemplateField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateFields
    * const templateFields = await prisma.templateField.findMany()
    * ```
    */
  get templateField(): Prisma.TemplateFieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestFieldValue`: Exposes CRUD operations for the **RequestFieldValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestFieldValues
    * const requestFieldValues = await prisma.requestFieldValue.findMany()
    * ```
    */
  get requestFieldValue(): Prisma.RequestFieldValueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.counter`: Exposes CRUD operations for the **Counter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Counters
    * const counters = await prisma.counter.findMany()
    * ```
    */
  get counter(): Prisma.CounterDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Lead: 'Lead',
    Deliverable: 'Deliverable',
    Template: 'Template',
    TemplateTab: 'TemplateTab',
    TemplateField: 'TemplateField',
    RequestFieldValue: 'RequestFieldValue',
    Counter: 'Counter'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "lead" | "deliverable" | "template" | "templateTab" | "templateField" | "requestFieldValue" | "counter"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      Deliverable: {
        payload: Prisma.$DeliverablePayload<ExtArgs>
        fields: Prisma.DeliverableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliverableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliverableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>
          }
          findFirst: {
            args: Prisma.DeliverableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliverableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>
          }
          findMany: {
            args: Prisma.DeliverableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>[]
          }
          create: {
            args: Prisma.DeliverableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>
          }
          createMany: {
            args: Prisma.DeliverableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliverableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>[]
          }
          delete: {
            args: Prisma.DeliverableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>
          }
          update: {
            args: Prisma.DeliverableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>
          }
          deleteMany: {
            args: Prisma.DeliverableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliverableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliverableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>[]
          }
          upsert: {
            args: Prisma.DeliverableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>
          }
          aggregate: {
            args: Prisma.DeliverableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliverable>
          }
          groupBy: {
            args: Prisma.DeliverableGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliverableGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliverableCountArgs<ExtArgs>
            result: $Utils.Optional<DeliverableCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      TemplateTab: {
        payload: Prisma.$TemplateTabPayload<ExtArgs>
        fields: Prisma.TemplateTabFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateTabFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTabPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateTabFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTabPayload>
          }
          findFirst: {
            args: Prisma.TemplateTabFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTabPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateTabFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTabPayload>
          }
          findMany: {
            args: Prisma.TemplateTabFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTabPayload>[]
          }
          create: {
            args: Prisma.TemplateTabCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTabPayload>
          }
          createMany: {
            args: Prisma.TemplateTabCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateTabCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTabPayload>[]
          }
          delete: {
            args: Prisma.TemplateTabDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTabPayload>
          }
          update: {
            args: Prisma.TemplateTabUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTabPayload>
          }
          deleteMany: {
            args: Prisma.TemplateTabDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateTabUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateTabUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTabPayload>[]
          }
          upsert: {
            args: Prisma.TemplateTabUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTabPayload>
          }
          aggregate: {
            args: Prisma.TemplateTabAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplateTab>
          }
          groupBy: {
            args: Prisma.TemplateTabGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateTabGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateTabCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateTabCountAggregateOutputType> | number
          }
        }
      }
      TemplateField: {
        payload: Prisma.$TemplateFieldPayload<ExtArgs>
        fields: Prisma.TemplateFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          findFirst: {
            args: Prisma.TemplateFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          findMany: {
            args: Prisma.TemplateFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>[]
          }
          create: {
            args: Prisma.TemplateFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          createMany: {
            args: Prisma.TemplateFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>[]
          }
          delete: {
            args: Prisma.TemplateFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          update: {
            args: Prisma.TemplateFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          deleteMany: {
            args: Prisma.TemplateFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>[]
          }
          upsert: {
            args: Prisma.TemplateFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          aggregate: {
            args: Prisma.TemplateFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplateField>
          }
          groupBy: {
            args: Prisma.TemplateFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateFieldCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateFieldCountAggregateOutputType> | number
          }
        }
      }
      RequestFieldValue: {
        payload: Prisma.$RequestFieldValuePayload<ExtArgs>
        fields: Prisma.RequestFieldValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFieldValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFieldValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFieldValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFieldValuePayload>
          }
          findFirst: {
            args: Prisma.RequestFieldValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFieldValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFieldValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFieldValuePayload>
          }
          findMany: {
            args: Prisma.RequestFieldValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFieldValuePayload>[]
          }
          create: {
            args: Prisma.RequestFieldValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFieldValuePayload>
          }
          createMany: {
            args: Prisma.RequestFieldValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestFieldValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFieldValuePayload>[]
          }
          delete: {
            args: Prisma.RequestFieldValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFieldValuePayload>
          }
          update: {
            args: Prisma.RequestFieldValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFieldValuePayload>
          }
          deleteMany: {
            args: Prisma.RequestFieldValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestFieldValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestFieldValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFieldValuePayload>[]
          }
          upsert: {
            args: Prisma.RequestFieldValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFieldValuePayload>
          }
          aggregate: {
            args: Prisma.RequestFieldValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestFieldValue>
          }
          groupBy: {
            args: Prisma.RequestFieldValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestFieldValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestFieldValueCountArgs<ExtArgs>
            result: $Utils.Optional<RequestFieldValueCountAggregateOutputType> | number
          }
        }
      }
      Counter: {
        payload: Prisma.$CounterPayload<ExtArgs>
        fields: Prisma.CounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          findFirst: {
            args: Prisma.CounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          findMany: {
            args: Prisma.CounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>[]
          }
          create: {
            args: Prisma.CounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          createMany: {
            args: Prisma.CounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CounterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>[]
          }
          delete: {
            args: Prisma.CounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          update: {
            args: Prisma.CounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          deleteMany: {
            args: Prisma.CounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CounterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>[]
          }
          upsert: {
            args: Prisma.CounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          aggregate: {
            args: Prisma.CounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCounter>
          }
          groupBy: {
            args: Prisma.CounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CounterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CounterCountArgs<ExtArgs>
            result: $Utils.Optional<CounterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    lead?: LeadOmit
    deliverable?: DeliverableOmit
    template?: TemplateOmit
    templateTab?: TemplateTabOmit
    templateField?: TemplateFieldOmit
    requestFieldValue?: RequestFieldValueOmit
    counter?: CounterOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    leads: number
    assignedLeads: number
    createdDeliverables: number
    templates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | UserCountOutputTypeCountLeadsArgs
    assignedLeads?: boolean | UserCountOutputTypeCountAssignedLeadsArgs
    createdDeliverables?: boolean | UserCountOutputTypeCountCreatedDeliverablesArgs
    templates?: boolean | UserCountOutputTypeCountTemplatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedDeliverablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliverableWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }


  /**
   * Count Type DeliverableCountOutputType
   */

  export type DeliverableCountOutputType = {
    templates: number
  }

  export type DeliverableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templates?: boolean | DeliverableCountOutputTypeCountTemplatesArgs
  }

  // Custom InputTypes
  /**
   * DeliverableCountOutputType without action
   */
  export type DeliverableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliverableCountOutputType
     */
    select?: DeliverableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeliverableCountOutputType without action
   */
  export type DeliverableCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    tabs: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tabs?: boolean | TemplateCountOutputTypeCountTabsArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountTabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateTabWhereInput
  }


  /**
   * Count Type TemplateTabCountOutputType
   */

  export type TemplateTabCountOutputType = {
    fields: number
  }

  export type TemplateTabCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | TemplateTabCountOutputTypeCountFieldsArgs
  }

  // Custom InputTypes
  /**
   * TemplateTabCountOutputType without action
   */
  export type TemplateTabCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTabCountOutputType
     */
    select?: TemplateTabCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateTabCountOutputType without action
   */
  export type TemplateTabCountOutputTypeCountFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateFieldWhereInput
  }


  /**
   * Count Type TemplateFieldCountOutputType
   */

  export type TemplateFieldCountOutputType = {
    requestValues: number
  }

  export type TemplateFieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestValues?: boolean | TemplateFieldCountOutputTypeCountRequestValuesArgs
  }

  // Custom InputTypes
  /**
   * TemplateFieldCountOutputType without action
   */
  export type TemplateFieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateFieldCountOutputType
     */
    select?: TemplateFieldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateFieldCountOutputType without action
   */
  export type TemplateFieldCountOutputTypeCountRequestValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestFieldValueWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    projectCount: number | null
    totalRevenue: Decimal | null
    rating: number | null
  }

  export type UserSumAggregateOutputType = {
    projectCount: number | null
    totalRevenue: Decimal | null
    rating: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clientRegNo: string | null
    designerRegNo: string | null
    role: $Enums.Role | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    passwordHash: string | null
    isVerified: boolean | null
    oauthProvider: string | null
    oauthId: string | null
    occupation: string | null
    education: string | null
    projectCount: number | null
    totalRevenue: Decimal | null
    rating: number | null
    isBlocked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clientRegNo: string | null
    designerRegNo: string | null
    role: $Enums.Role | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    passwordHash: string | null
    isVerified: boolean | null
    oauthProvider: string | null
    oauthId: string | null
    occupation: string | null
    education: string | null
    projectCount: number | null
    totalRevenue: Decimal | null
    rating: number | null
    isBlocked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clientRegNo: number
    designerRegNo: number
    role: number
    firstName: number
    lastName: number
    email: number
    phone: number
    avatar: number
    passwordHash: number
    isVerified: number
    oauthProvider: number
    oauthId: number
    address: number
    occupation: number
    education: number
    projectCount: number
    totalRevenue: number
    rating: number
    isBlocked: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    projectCount?: true
    totalRevenue?: true
    rating?: true
  }

  export type UserSumAggregateInputType = {
    projectCount?: true
    totalRevenue?: true
    rating?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clientRegNo?: true
    designerRegNo?: true
    role?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    avatar?: true
    passwordHash?: true
    isVerified?: true
    oauthProvider?: true
    oauthId?: true
    occupation?: true
    education?: true
    projectCount?: true
    totalRevenue?: true
    rating?: true
    isBlocked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clientRegNo?: true
    designerRegNo?: true
    role?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    avatar?: true
    passwordHash?: true
    isVerified?: true
    oauthProvider?: true
    oauthId?: true
    occupation?: true
    education?: true
    projectCount?: true
    totalRevenue?: true
    rating?: true
    isBlocked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clientRegNo?: true
    designerRegNo?: true
    role?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    avatar?: true
    passwordHash?: true
    isVerified?: true
    oauthProvider?: true
    oauthId?: true
    address?: true
    occupation?: true
    education?: true
    projectCount?: true
    totalRevenue?: true
    rating?: true
    isBlocked?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clientRegNo: string | null
    designerRegNo: string | null
    role: $Enums.Role
    firstName: string
    lastName: string
    email: string
    phone: string
    avatar: string | null
    passwordHash: string | null
    isVerified: boolean
    oauthProvider: string | null
    oauthId: string | null
    address: JsonValue | null
    occupation: string | null
    education: string | null
    projectCount: number
    totalRevenue: Decimal
    rating: number
    isBlocked: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientRegNo?: boolean
    designerRegNo?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    passwordHash?: boolean
    isVerified?: boolean
    oauthProvider?: boolean
    oauthId?: boolean
    address?: boolean
    occupation?: boolean
    education?: boolean
    projectCount?: boolean
    totalRevenue?: boolean
    rating?: boolean
    isBlocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    leads?: boolean | User$leadsArgs<ExtArgs>
    assignedLeads?: boolean | User$assignedLeadsArgs<ExtArgs>
    createdDeliverables?: boolean | User$createdDeliverablesArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientRegNo?: boolean
    designerRegNo?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    passwordHash?: boolean
    isVerified?: boolean
    oauthProvider?: boolean
    oauthId?: boolean
    address?: boolean
    occupation?: boolean
    education?: boolean
    projectCount?: boolean
    totalRevenue?: boolean
    rating?: boolean
    isBlocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientRegNo?: boolean
    designerRegNo?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    passwordHash?: boolean
    isVerified?: boolean
    oauthProvider?: boolean
    oauthId?: boolean
    address?: boolean
    occupation?: boolean
    education?: boolean
    projectCount?: boolean
    totalRevenue?: boolean
    rating?: boolean
    isBlocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clientRegNo?: boolean
    designerRegNo?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    passwordHash?: boolean
    isVerified?: boolean
    oauthProvider?: boolean
    oauthId?: boolean
    address?: boolean
    occupation?: boolean
    education?: boolean
    projectCount?: boolean
    totalRevenue?: boolean
    rating?: boolean
    isBlocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientRegNo" | "designerRegNo" | "role" | "firstName" | "lastName" | "email" | "phone" | "avatar" | "passwordHash" | "isVerified" | "oauthProvider" | "oauthId" | "address" | "occupation" | "education" | "projectCount" | "totalRevenue" | "rating" | "isBlocked" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | User$leadsArgs<ExtArgs>
    assignedLeads?: boolean | User$assignedLeadsArgs<ExtArgs>
    createdDeliverables?: boolean | User$createdDeliverablesArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      leads: Prisma.$LeadPayload<ExtArgs>[]
      assignedLeads: Prisma.$LeadPayload<ExtArgs>[]
      createdDeliverables: Prisma.$DeliverablePayload<ExtArgs>[]
      templates: Prisma.$TemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientRegNo: string | null
      designerRegNo: string | null
      role: $Enums.Role
      firstName: string
      lastName: string
      email: string
      phone: string
      avatar: string | null
      passwordHash: string | null
      isVerified: boolean
      oauthProvider: string | null
      oauthId: string | null
      address: Prisma.JsonValue | null
      occupation: string | null
      education: string | null
      projectCount: number
      totalRevenue: Prisma.Decimal
      rating: number
      isBlocked: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leads<T extends User$leadsArgs<ExtArgs> = {}>(args?: Subset<T, User$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedLeads<T extends User$assignedLeadsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedLeadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdDeliverables<T extends User$createdDeliverablesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdDeliverablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templates<T extends User$templatesArgs<ExtArgs> = {}>(args?: Subset<T, User$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clientRegNo: FieldRef<"User", 'String'>
    readonly designerRegNo: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly oauthProvider: FieldRef<"User", 'String'>
    readonly oauthId: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'Json'>
    readonly occupation: FieldRef<"User", 'String'>
    readonly education: FieldRef<"User", 'String'>
    readonly projectCount: FieldRef<"User", 'Int'>
    readonly totalRevenue: FieldRef<"User", 'Decimal'>
    readonly rating: FieldRef<"User", 'Float'>
    readonly isBlocked: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.leads
   */
  export type User$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * User.assignedLeads
   */
  export type User$assignedLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * User.createdDeliverables
   */
  export type User$createdDeliverablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    where?: DeliverableWhereInput
    orderBy?: DeliverableOrderByWithRelationInput | DeliverableOrderByWithRelationInput[]
    cursor?: DeliverableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliverableScalarFieldEnum | DeliverableScalarFieldEnum[]
  }

  /**
   * User.templates
   */
  export type User$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    leadRegNo: string | null
    name: string | null
    email: string | null
    phone: string | null
    location: string | null
    source: $Enums.LeadSource | null
    status: $Enums.LeadStatus | null
    packageType: $Enums.PackageType | null
    clientId: string | null
    assignedDesignerId: string | null
    assignedAt: Date | null
    convertedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    leadRegNo: string | null
    name: string | null
    email: string | null
    phone: string | null
    location: string | null
    source: $Enums.LeadSource | null
    status: $Enums.LeadStatus | null
    packageType: $Enums.PackageType | null
    clientId: string | null
    assignedDesignerId: string | null
    assignedAt: Date | null
    convertedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    leadRegNo: number
    name: number
    email: number
    phone: number
    location: number
    source: number
    status: number
    projectsInterestedIn: number
    packageType: number
    clientId: number
    assignedDesignerId: number
    assignedAt: number
    convertedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeadMinAggregateInputType = {
    id?: true
    leadRegNo?: true
    name?: true
    email?: true
    phone?: true
    location?: true
    source?: true
    status?: true
    packageType?: true
    clientId?: true
    assignedDesignerId?: true
    assignedAt?: true
    convertedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    leadRegNo?: true
    name?: true
    email?: true
    phone?: true
    location?: true
    source?: true
    status?: true
    packageType?: true
    clientId?: true
    assignedDesignerId?: true
    assignedAt?: true
    convertedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    leadRegNo?: true
    name?: true
    email?: true
    phone?: true
    location?: true
    source?: true
    status?: true
    projectsInterestedIn?: true
    packageType?: true
    clientId?: true
    assignedDesignerId?: true
    assignedAt?: true
    convertedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: string
    leadRegNo: string
    name: string
    email: string
    phone: string
    location: string | null
    source: $Enums.LeadSource
    status: $Enums.LeadStatus
    projectsInterestedIn: string[]
    packageType: $Enums.PackageType | null
    clientId: string | null
    assignedDesignerId: string | null
    assignedAt: Date | null
    convertedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadRegNo?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    source?: boolean
    status?: boolean
    projectsInterestedIn?: boolean
    packageType?: boolean
    clientId?: boolean
    assignedDesignerId?: boolean
    assignedAt?: boolean
    convertedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | Lead$clientArgs<ExtArgs>
    assignedDesigner?: boolean | Lead$assignedDesignerArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadRegNo?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    source?: boolean
    status?: boolean
    projectsInterestedIn?: boolean
    packageType?: boolean
    clientId?: boolean
    assignedDesignerId?: boolean
    assignedAt?: boolean
    convertedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | Lead$clientArgs<ExtArgs>
    assignedDesigner?: boolean | Lead$assignedDesignerArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadRegNo?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    source?: boolean
    status?: boolean
    projectsInterestedIn?: boolean
    packageType?: boolean
    clientId?: boolean
    assignedDesignerId?: boolean
    assignedAt?: boolean
    convertedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | Lead$clientArgs<ExtArgs>
    assignedDesigner?: boolean | Lead$assignedDesignerArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    leadRegNo?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    source?: boolean
    status?: boolean
    projectsInterestedIn?: boolean
    packageType?: boolean
    clientId?: boolean
    assignedDesignerId?: boolean
    assignedAt?: boolean
    convertedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadRegNo" | "name" | "email" | "phone" | "location" | "source" | "status" | "projectsInterestedIn" | "packageType" | "clientId" | "assignedDesignerId" | "assignedAt" | "convertedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["lead"]>
  export type LeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Lead$clientArgs<ExtArgs>
    assignedDesigner?: boolean | Lead$assignedDesignerArgs<ExtArgs>
  }
  export type LeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Lead$clientArgs<ExtArgs>
    assignedDesigner?: boolean | Lead$assignedDesignerArgs<ExtArgs>
  }
  export type LeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Lead$clientArgs<ExtArgs>
    assignedDesigner?: boolean | Lead$assignedDesignerArgs<ExtArgs>
  }

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {
      client: Prisma.$UserPayload<ExtArgs> | null
      assignedDesigner: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leadRegNo: string
      name: string
      email: string
      phone: string
      location: string | null
      source: $Enums.LeadSource
      status: $Enums.LeadStatus
      projectsInterestedIn: string[]
      packageType: $Enums.PackageType | null
      clientId: string | null
      assignedDesignerId: string | null
      assignedAt: Date | null
      convertedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends Lead$clientArgs<ExtArgs> = {}>(args?: Subset<T, Lead$clientArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedDesigner<T extends Lead$assignedDesignerArgs<ExtArgs> = {}>(args?: Subset<T, Lead$assignedDesignerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lead model
   */
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'String'>
    readonly leadRegNo: FieldRef<"Lead", 'String'>
    readonly name: FieldRef<"Lead", 'String'>
    readonly email: FieldRef<"Lead", 'String'>
    readonly phone: FieldRef<"Lead", 'String'>
    readonly location: FieldRef<"Lead", 'String'>
    readonly source: FieldRef<"Lead", 'LeadSource'>
    readonly status: FieldRef<"Lead", 'LeadStatus'>
    readonly projectsInterestedIn: FieldRef<"Lead", 'String[]'>
    readonly packageType: FieldRef<"Lead", 'PackageType'>
    readonly clientId: FieldRef<"Lead", 'String'>
    readonly assignedDesignerId: FieldRef<"Lead", 'String'>
    readonly assignedAt: FieldRef<"Lead", 'DateTime'>
    readonly convertedAt: FieldRef<"Lead", 'DateTime'>
    readonly createdAt: FieldRef<"Lead", 'DateTime'>
    readonly updatedAt: FieldRef<"Lead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead updateManyAndReturn
   */
  export type LeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Lead.client
   */
  export type Lead$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Lead.assignedDesigner
   */
  export type Lead$assignedDesignerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
  }


  /**
   * Model Deliverable
   */

  export type AggregateDeliverable = {
    _count: DeliverableCountAggregateOutputType | null
    _min: DeliverableMinAggregateOutputType | null
    _max: DeliverableMaxAggregateOutputType | null
  }

  export type DeliverableMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    isActive: boolean | null
    createdById: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliverableMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    isActive: boolean | null
    createdById: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliverableCountAggregateOutputType = {
    id: number
    name: number
    description: number
    icon: number
    isActive: number
    createdById: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeliverableMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    isActive?: true
    createdById?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliverableMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    isActive?: true
    createdById?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliverableCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    isActive?: true
    createdById?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeliverableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliverable to aggregate.
     */
    where?: DeliverableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliverables to fetch.
     */
    orderBy?: DeliverableOrderByWithRelationInput | DeliverableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliverableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliverables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliverables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliverables
    **/
    _count?: true | DeliverableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliverableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliverableMaxAggregateInputType
  }

  export type GetDeliverableAggregateType<T extends DeliverableAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliverable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliverable[P]>
      : GetScalarType<T[P], AggregateDeliverable[P]>
  }




  export type DeliverableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliverableWhereInput
    orderBy?: DeliverableOrderByWithAggregationInput | DeliverableOrderByWithAggregationInput[]
    by: DeliverableScalarFieldEnum[] | DeliverableScalarFieldEnum
    having?: DeliverableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliverableCountAggregateInputType | true
    _min?: DeliverableMinAggregateInputType
    _max?: DeliverableMaxAggregateInputType
  }

  export type DeliverableGroupByOutputType = {
    id: string
    name: string
    description: string
    icon: string
    isActive: boolean
    createdById: string
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DeliverableCountAggregateOutputType | null
    _min: DeliverableMinAggregateOutputType | null
    _max: DeliverableMaxAggregateOutputType | null
  }

  type GetDeliverableGroupByPayload<T extends DeliverableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliverableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliverableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliverableGroupByOutputType[P]>
            : GetScalarType<T[P], DeliverableGroupByOutputType[P]>
        }
      >
    >


  export type DeliverableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    isActive?: boolean
    createdById?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    templates?: boolean | Deliverable$templatesArgs<ExtArgs>
    _count?: boolean | DeliverableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliverable"]>

  export type DeliverableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    isActive?: boolean
    createdById?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliverable"]>

  export type DeliverableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    isActive?: boolean
    createdById?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliverable"]>

  export type DeliverableSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    isActive?: boolean
    createdById?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeliverableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "icon" | "isActive" | "createdById" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["deliverable"]>
  export type DeliverableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    templates?: boolean | Deliverable$templatesArgs<ExtArgs>
    _count?: boolean | DeliverableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeliverableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeliverableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeliverablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deliverable"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      templates: Prisma.$TemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      icon: string
      isActive: boolean
      createdById: string
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deliverable"]>
    composites: {}
  }

  type DeliverableGetPayload<S extends boolean | null | undefined | DeliverableDefaultArgs> = $Result.GetResult<Prisma.$DeliverablePayload, S>

  type DeliverableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliverableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliverableCountAggregateInputType | true
    }

  export interface DeliverableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deliverable'], meta: { name: 'Deliverable' } }
    /**
     * Find zero or one Deliverable that matches the filter.
     * @param {DeliverableFindUniqueArgs} args - Arguments to find a Deliverable
     * @example
     * // Get one Deliverable
     * const deliverable = await prisma.deliverable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliverableFindUniqueArgs>(args: SelectSubset<T, DeliverableFindUniqueArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deliverable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliverableFindUniqueOrThrowArgs} args - Arguments to find a Deliverable
     * @example
     * // Get one Deliverable
     * const deliverable = await prisma.deliverable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliverableFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliverableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliverable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverableFindFirstArgs} args - Arguments to find a Deliverable
     * @example
     * // Get one Deliverable
     * const deliverable = await prisma.deliverable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliverableFindFirstArgs>(args?: SelectSubset<T, DeliverableFindFirstArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliverable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverableFindFirstOrThrowArgs} args - Arguments to find a Deliverable
     * @example
     * // Get one Deliverable
     * const deliverable = await prisma.deliverable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliverableFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliverableFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliverables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliverables
     * const deliverables = await prisma.deliverable.findMany()
     * 
     * // Get first 10 Deliverables
     * const deliverables = await prisma.deliverable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliverableWithIdOnly = await prisma.deliverable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliverableFindManyArgs>(args?: SelectSubset<T, DeliverableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deliverable.
     * @param {DeliverableCreateArgs} args - Arguments to create a Deliverable.
     * @example
     * // Create one Deliverable
     * const Deliverable = await prisma.deliverable.create({
     *   data: {
     *     // ... data to create a Deliverable
     *   }
     * })
     * 
     */
    create<T extends DeliverableCreateArgs>(args: SelectSubset<T, DeliverableCreateArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliverables.
     * @param {DeliverableCreateManyArgs} args - Arguments to create many Deliverables.
     * @example
     * // Create many Deliverables
     * const deliverable = await prisma.deliverable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliverableCreateManyArgs>(args?: SelectSubset<T, DeliverableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deliverables and returns the data saved in the database.
     * @param {DeliverableCreateManyAndReturnArgs} args - Arguments to create many Deliverables.
     * @example
     * // Create many Deliverables
     * const deliverable = await prisma.deliverable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deliverables and only return the `id`
     * const deliverableWithIdOnly = await prisma.deliverable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliverableCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliverableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deliverable.
     * @param {DeliverableDeleteArgs} args - Arguments to delete one Deliverable.
     * @example
     * // Delete one Deliverable
     * const Deliverable = await prisma.deliverable.delete({
     *   where: {
     *     // ... filter to delete one Deliverable
     *   }
     * })
     * 
     */
    delete<T extends DeliverableDeleteArgs>(args: SelectSubset<T, DeliverableDeleteArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deliverable.
     * @param {DeliverableUpdateArgs} args - Arguments to update one Deliverable.
     * @example
     * // Update one Deliverable
     * const deliverable = await prisma.deliverable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliverableUpdateArgs>(args: SelectSubset<T, DeliverableUpdateArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliverables.
     * @param {DeliverableDeleteManyArgs} args - Arguments to filter Deliverables to delete.
     * @example
     * // Delete a few Deliverables
     * const { count } = await prisma.deliverable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliverableDeleteManyArgs>(args?: SelectSubset<T, DeliverableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliverables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliverables
     * const deliverable = await prisma.deliverable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliverableUpdateManyArgs>(args: SelectSubset<T, DeliverableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliverables and returns the data updated in the database.
     * @param {DeliverableUpdateManyAndReturnArgs} args - Arguments to update many Deliverables.
     * @example
     * // Update many Deliverables
     * const deliverable = await prisma.deliverable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deliverables and only return the `id`
     * const deliverableWithIdOnly = await prisma.deliverable.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliverableUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliverableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deliverable.
     * @param {DeliverableUpsertArgs} args - Arguments to update or create a Deliverable.
     * @example
     * // Update or create a Deliverable
     * const deliverable = await prisma.deliverable.upsert({
     *   create: {
     *     // ... data to create a Deliverable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deliverable we want to update
     *   }
     * })
     */
    upsert<T extends DeliverableUpsertArgs>(args: SelectSubset<T, DeliverableUpsertArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliverables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverableCountArgs} args - Arguments to filter Deliverables to count.
     * @example
     * // Count the number of Deliverables
     * const count = await prisma.deliverable.count({
     *   where: {
     *     // ... the filter for the Deliverables we want to count
     *   }
     * })
    **/
    count<T extends DeliverableCountArgs>(
      args?: Subset<T, DeliverableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliverableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deliverable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliverableAggregateArgs>(args: Subset<T, DeliverableAggregateArgs>): Prisma.PrismaPromise<GetDeliverableAggregateType<T>>

    /**
     * Group by Deliverable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliverableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliverableGroupByArgs['orderBy'] }
        : { orderBy?: DeliverableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliverableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliverableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deliverable model
   */
  readonly fields: DeliverableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deliverable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliverableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    templates<T extends Deliverable$templatesArgs<ExtArgs> = {}>(args?: Subset<T, Deliverable$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deliverable model
   */
  interface DeliverableFieldRefs {
    readonly id: FieldRef<"Deliverable", 'String'>
    readonly name: FieldRef<"Deliverable", 'String'>
    readonly description: FieldRef<"Deliverable", 'String'>
    readonly icon: FieldRef<"Deliverable", 'String'>
    readonly isActive: FieldRef<"Deliverable", 'Boolean'>
    readonly createdById: FieldRef<"Deliverable", 'String'>
    readonly deletedAt: FieldRef<"Deliverable", 'DateTime'>
    readonly createdAt: FieldRef<"Deliverable", 'DateTime'>
    readonly updatedAt: FieldRef<"Deliverable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deliverable findUnique
   */
  export type DeliverableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * Filter, which Deliverable to fetch.
     */
    where: DeliverableWhereUniqueInput
  }

  /**
   * Deliverable findUniqueOrThrow
   */
  export type DeliverableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * Filter, which Deliverable to fetch.
     */
    where: DeliverableWhereUniqueInput
  }

  /**
   * Deliverable findFirst
   */
  export type DeliverableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * Filter, which Deliverable to fetch.
     */
    where?: DeliverableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliverables to fetch.
     */
    orderBy?: DeliverableOrderByWithRelationInput | DeliverableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliverables.
     */
    cursor?: DeliverableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliverables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliverables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliverables.
     */
    distinct?: DeliverableScalarFieldEnum | DeliverableScalarFieldEnum[]
  }

  /**
   * Deliverable findFirstOrThrow
   */
  export type DeliverableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * Filter, which Deliverable to fetch.
     */
    where?: DeliverableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliverables to fetch.
     */
    orderBy?: DeliverableOrderByWithRelationInput | DeliverableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliverables.
     */
    cursor?: DeliverableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliverables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliverables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliverables.
     */
    distinct?: DeliverableScalarFieldEnum | DeliverableScalarFieldEnum[]
  }

  /**
   * Deliverable findMany
   */
  export type DeliverableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * Filter, which Deliverables to fetch.
     */
    where?: DeliverableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliverables to fetch.
     */
    orderBy?: DeliverableOrderByWithRelationInput | DeliverableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliverables.
     */
    cursor?: DeliverableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliverables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliverables.
     */
    skip?: number
    distinct?: DeliverableScalarFieldEnum | DeliverableScalarFieldEnum[]
  }

  /**
   * Deliverable create
   */
  export type DeliverableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * The data needed to create a Deliverable.
     */
    data: XOR<DeliverableCreateInput, DeliverableUncheckedCreateInput>
  }

  /**
   * Deliverable createMany
   */
  export type DeliverableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliverables.
     */
    data: DeliverableCreateManyInput | DeliverableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deliverable createManyAndReturn
   */
  export type DeliverableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * The data used to create many Deliverables.
     */
    data: DeliverableCreateManyInput | DeliverableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deliverable update
   */
  export type DeliverableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * The data needed to update a Deliverable.
     */
    data: XOR<DeliverableUpdateInput, DeliverableUncheckedUpdateInput>
    /**
     * Choose, which Deliverable to update.
     */
    where: DeliverableWhereUniqueInput
  }

  /**
   * Deliverable updateMany
   */
  export type DeliverableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliverables.
     */
    data: XOR<DeliverableUpdateManyMutationInput, DeliverableUncheckedUpdateManyInput>
    /**
     * Filter which Deliverables to update
     */
    where?: DeliverableWhereInput
    /**
     * Limit how many Deliverables to update.
     */
    limit?: number
  }

  /**
   * Deliverable updateManyAndReturn
   */
  export type DeliverableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * The data used to update Deliverables.
     */
    data: XOR<DeliverableUpdateManyMutationInput, DeliverableUncheckedUpdateManyInput>
    /**
     * Filter which Deliverables to update
     */
    where?: DeliverableWhereInput
    /**
     * Limit how many Deliverables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deliverable upsert
   */
  export type DeliverableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * The filter to search for the Deliverable to update in case it exists.
     */
    where: DeliverableWhereUniqueInput
    /**
     * In case the Deliverable found by the `where` argument doesn't exist, create a new Deliverable with this data.
     */
    create: XOR<DeliverableCreateInput, DeliverableUncheckedCreateInput>
    /**
     * In case the Deliverable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliverableUpdateInput, DeliverableUncheckedUpdateInput>
  }

  /**
   * Deliverable delete
   */
  export type DeliverableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * Filter which Deliverable to delete.
     */
    where: DeliverableWhereUniqueInput
  }

  /**
   * Deliverable deleteMany
   */
  export type DeliverableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliverables to delete
     */
    where?: DeliverableWhereInput
    /**
     * Limit how many Deliverables to delete.
     */
    limit?: number
  }

  /**
   * Deliverable.templates
   */
  export type Deliverable$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Deliverable without action
   */
  export type DeliverableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    deliverableId: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    deliverableId: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    deliverableId: number
    name: number
    description: number
    isActive: number
    createdById: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TemplateMinAggregateInputType = {
    id?: true
    deliverableId?: true
    name?: true
    description?: true
    isActive?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    deliverableId?: true
    name?: true
    description?: true
    isActive?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    deliverableId?: true
    name?: true
    description?: true
    isActive?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    deliverableId: string
    name: string
    description: string
    isActive: boolean
    createdById: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deliverableId?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deliverable?: boolean | DeliverableDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    tabs?: boolean | Template$tabsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deliverableId?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deliverable?: boolean | DeliverableDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deliverableId?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deliverable?: boolean | DeliverableDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    deliverableId?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deliverableId" | "name" | "description" | "isActive" | "createdById" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliverable?: boolean | DeliverableDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    tabs?: boolean | Template$tabsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliverable?: boolean | DeliverableDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliverable?: boolean | DeliverableDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      deliverable: Prisma.$DeliverablePayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      tabs: Prisma.$TemplateTabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deliverableId: string
      name: string
      description: string
      isActive: boolean
      createdById: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deliverable<T extends DeliverableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeliverableDefaultArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tabs<T extends Template$tabsArgs<ExtArgs> = {}>(args?: Subset<T, Template$tabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateTabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly deliverableId: FieldRef<"Template", 'String'>
    readonly name: FieldRef<"Template", 'String'>
    readonly description: FieldRef<"Template", 'String'>
    readonly isActive: FieldRef<"Template", 'Boolean'>
    readonly createdById: FieldRef<"Template", 'String'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
    readonly updatedAt: FieldRef<"Template", 'DateTime'>
    readonly deletedAt: FieldRef<"Template", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template.tabs
   */
  export type Template$tabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTab
     */
    select?: TemplateTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTab
     */
    omit?: TemplateTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTabInclude<ExtArgs> | null
    where?: TemplateTabWhereInput
    orderBy?: TemplateTabOrderByWithRelationInput | TemplateTabOrderByWithRelationInput[]
    cursor?: TemplateTabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateTabScalarFieldEnum | TemplateTabScalarFieldEnum[]
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model TemplateTab
   */

  export type AggregateTemplateTab = {
    _count: TemplateTabCountAggregateOutputType | null
    _avg: TemplateTabAvgAggregateOutputType | null
    _sum: TemplateTabSumAggregateOutputType | null
    _min: TemplateTabMinAggregateOutputType | null
    _max: TemplateTabMaxAggregateOutputType | null
  }

  export type TemplateTabAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type TemplateTabSumAggregateOutputType = {
    displayOrder: number | null
  }

  export type TemplateTabMinAggregateOutputType = {
    id: string | null
    templateId: string | null
    name: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateTabMaxAggregateOutputType = {
    id: string | null
    templateId: string | null
    name: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateTabCountAggregateOutputType = {
    id: number
    templateId: number
    name: number
    displayOrder: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateTabAvgAggregateInputType = {
    displayOrder?: true
  }

  export type TemplateTabSumAggregateInputType = {
    displayOrder?: true
  }

  export type TemplateTabMinAggregateInputType = {
    id?: true
    templateId?: true
    name?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateTabMaxAggregateInputType = {
    id?: true
    templateId?: true
    name?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateTabCountAggregateInputType = {
    id?: true
    templateId?: true
    name?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateTabAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateTab to aggregate.
     */
    where?: TemplateTabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateTabs to fetch.
     */
    orderBy?: TemplateTabOrderByWithRelationInput | TemplateTabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateTabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateTabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateTabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateTabs
    **/
    _count?: true | TemplateTabCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateTabAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateTabSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateTabMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateTabMaxAggregateInputType
  }

  export type GetTemplateTabAggregateType<T extends TemplateTabAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateTab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateTab[P]>
      : GetScalarType<T[P], AggregateTemplateTab[P]>
  }




  export type TemplateTabGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateTabWhereInput
    orderBy?: TemplateTabOrderByWithAggregationInput | TemplateTabOrderByWithAggregationInput[]
    by: TemplateTabScalarFieldEnum[] | TemplateTabScalarFieldEnum
    having?: TemplateTabScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateTabCountAggregateInputType | true
    _avg?: TemplateTabAvgAggregateInputType
    _sum?: TemplateTabSumAggregateInputType
    _min?: TemplateTabMinAggregateInputType
    _max?: TemplateTabMaxAggregateInputType
  }

  export type TemplateTabGroupByOutputType = {
    id: string
    templateId: string
    name: string
    displayOrder: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TemplateTabCountAggregateOutputType | null
    _avg: TemplateTabAvgAggregateOutputType | null
    _sum: TemplateTabSumAggregateOutputType | null
    _min: TemplateTabMinAggregateOutputType | null
    _max: TemplateTabMaxAggregateOutputType | null
  }

  type GetTemplateTabGroupByPayload<T extends TemplateTabGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateTabGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateTabGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateTabGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateTabGroupByOutputType[P]>
        }
      >
    >


  export type TemplateTabSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    name?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    fields?: boolean | TemplateTab$fieldsArgs<ExtArgs>
    _count?: boolean | TemplateTabCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateTab"]>

  export type TemplateTabSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    name?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateTab"]>

  export type TemplateTabSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    name?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateTab"]>

  export type TemplateTabSelectScalar = {
    id?: boolean
    templateId?: boolean
    name?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateTabOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateId" | "name" | "displayOrder" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["templateTab"]>
  export type TemplateTabInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    fields?: boolean | TemplateTab$fieldsArgs<ExtArgs>
    _count?: boolean | TemplateTabCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateTabIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }
  export type TemplateTabIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }

  export type $TemplateTabPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateTab"
    objects: {
      template: Prisma.$TemplatePayload<ExtArgs>
      fields: Prisma.$TemplateFieldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      templateId: string
      name: string
      displayOrder: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["templateTab"]>
    composites: {}
  }

  type TemplateTabGetPayload<S extends boolean | null | undefined | TemplateTabDefaultArgs> = $Result.GetResult<Prisma.$TemplateTabPayload, S>

  type TemplateTabCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateTabFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateTabCountAggregateInputType | true
    }

  export interface TemplateTabDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateTab'], meta: { name: 'TemplateTab' } }
    /**
     * Find zero or one TemplateTab that matches the filter.
     * @param {TemplateTabFindUniqueArgs} args - Arguments to find a TemplateTab
     * @example
     * // Get one TemplateTab
     * const templateTab = await prisma.templateTab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateTabFindUniqueArgs>(args: SelectSubset<T, TemplateTabFindUniqueArgs<ExtArgs>>): Prisma__TemplateTabClient<$Result.GetResult<Prisma.$TemplateTabPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemplateTab that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateTabFindUniqueOrThrowArgs} args - Arguments to find a TemplateTab
     * @example
     * // Get one TemplateTab
     * const templateTab = await prisma.templateTab.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateTabFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateTabFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateTabClient<$Result.GetResult<Prisma.$TemplateTabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateTab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateTabFindFirstArgs} args - Arguments to find a TemplateTab
     * @example
     * // Get one TemplateTab
     * const templateTab = await prisma.templateTab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateTabFindFirstArgs>(args?: SelectSubset<T, TemplateTabFindFirstArgs<ExtArgs>>): Prisma__TemplateTabClient<$Result.GetResult<Prisma.$TemplateTabPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateTab that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateTabFindFirstOrThrowArgs} args - Arguments to find a TemplateTab
     * @example
     * // Get one TemplateTab
     * const templateTab = await prisma.templateTab.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateTabFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateTabFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateTabClient<$Result.GetResult<Prisma.$TemplateTabPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemplateTabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateTabFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateTabs
     * const templateTabs = await prisma.templateTab.findMany()
     * 
     * // Get first 10 TemplateTabs
     * const templateTabs = await prisma.templateTab.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateTabWithIdOnly = await prisma.templateTab.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateTabFindManyArgs>(args?: SelectSubset<T, TemplateTabFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateTabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemplateTab.
     * @param {TemplateTabCreateArgs} args - Arguments to create a TemplateTab.
     * @example
     * // Create one TemplateTab
     * const TemplateTab = await prisma.templateTab.create({
     *   data: {
     *     // ... data to create a TemplateTab
     *   }
     * })
     * 
     */
    create<T extends TemplateTabCreateArgs>(args: SelectSubset<T, TemplateTabCreateArgs<ExtArgs>>): Prisma__TemplateTabClient<$Result.GetResult<Prisma.$TemplateTabPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemplateTabs.
     * @param {TemplateTabCreateManyArgs} args - Arguments to create many TemplateTabs.
     * @example
     * // Create many TemplateTabs
     * const templateTab = await prisma.templateTab.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateTabCreateManyArgs>(args?: SelectSubset<T, TemplateTabCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplateTabs and returns the data saved in the database.
     * @param {TemplateTabCreateManyAndReturnArgs} args - Arguments to create many TemplateTabs.
     * @example
     * // Create many TemplateTabs
     * const templateTab = await prisma.templateTab.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplateTabs and only return the `id`
     * const templateTabWithIdOnly = await prisma.templateTab.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateTabCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateTabCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateTabPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TemplateTab.
     * @param {TemplateTabDeleteArgs} args - Arguments to delete one TemplateTab.
     * @example
     * // Delete one TemplateTab
     * const TemplateTab = await prisma.templateTab.delete({
     *   where: {
     *     // ... filter to delete one TemplateTab
     *   }
     * })
     * 
     */
    delete<T extends TemplateTabDeleteArgs>(args: SelectSubset<T, TemplateTabDeleteArgs<ExtArgs>>): Prisma__TemplateTabClient<$Result.GetResult<Prisma.$TemplateTabPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemplateTab.
     * @param {TemplateTabUpdateArgs} args - Arguments to update one TemplateTab.
     * @example
     * // Update one TemplateTab
     * const templateTab = await prisma.templateTab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateTabUpdateArgs>(args: SelectSubset<T, TemplateTabUpdateArgs<ExtArgs>>): Prisma__TemplateTabClient<$Result.GetResult<Prisma.$TemplateTabPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemplateTabs.
     * @param {TemplateTabDeleteManyArgs} args - Arguments to filter TemplateTabs to delete.
     * @example
     * // Delete a few TemplateTabs
     * const { count } = await prisma.templateTab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateTabDeleteManyArgs>(args?: SelectSubset<T, TemplateTabDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateTabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateTabUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateTabs
     * const templateTab = await prisma.templateTab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateTabUpdateManyArgs>(args: SelectSubset<T, TemplateTabUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateTabs and returns the data updated in the database.
     * @param {TemplateTabUpdateManyAndReturnArgs} args - Arguments to update many TemplateTabs.
     * @example
     * // Update many TemplateTabs
     * const templateTab = await prisma.templateTab.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TemplateTabs and only return the `id`
     * const templateTabWithIdOnly = await prisma.templateTab.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateTabUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateTabUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateTabPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TemplateTab.
     * @param {TemplateTabUpsertArgs} args - Arguments to update or create a TemplateTab.
     * @example
     * // Update or create a TemplateTab
     * const templateTab = await prisma.templateTab.upsert({
     *   create: {
     *     // ... data to create a TemplateTab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateTab we want to update
     *   }
     * })
     */
    upsert<T extends TemplateTabUpsertArgs>(args: SelectSubset<T, TemplateTabUpsertArgs<ExtArgs>>): Prisma__TemplateTabClient<$Result.GetResult<Prisma.$TemplateTabPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemplateTabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateTabCountArgs} args - Arguments to filter TemplateTabs to count.
     * @example
     * // Count the number of TemplateTabs
     * const count = await prisma.templateTab.count({
     *   where: {
     *     // ... the filter for the TemplateTabs we want to count
     *   }
     * })
    **/
    count<T extends TemplateTabCountArgs>(
      args?: Subset<T, TemplateTabCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateTabCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateTab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateTabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateTabAggregateArgs>(args: Subset<T, TemplateTabAggregateArgs>): Prisma.PrismaPromise<GetTemplateTabAggregateType<T>>

    /**
     * Group by TemplateTab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateTabGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateTabGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateTabGroupByArgs['orderBy'] }
        : { orderBy?: TemplateTabGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateTabGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateTabGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateTab model
   */
  readonly fields: TemplateTabFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateTab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateTabClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends TemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateDefaultArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fields<T extends TemplateTab$fieldsArgs<ExtArgs> = {}>(args?: Subset<T, TemplateTab$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TemplateTab model
   */
  interface TemplateTabFieldRefs {
    readonly id: FieldRef<"TemplateTab", 'String'>
    readonly templateId: FieldRef<"TemplateTab", 'String'>
    readonly name: FieldRef<"TemplateTab", 'String'>
    readonly displayOrder: FieldRef<"TemplateTab", 'Int'>
    readonly isActive: FieldRef<"TemplateTab", 'Boolean'>
    readonly createdAt: FieldRef<"TemplateTab", 'DateTime'>
    readonly updatedAt: FieldRef<"TemplateTab", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemplateTab findUnique
   */
  export type TemplateTabFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTab
     */
    select?: TemplateTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTab
     */
    omit?: TemplateTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTabInclude<ExtArgs> | null
    /**
     * Filter, which TemplateTab to fetch.
     */
    where: TemplateTabWhereUniqueInput
  }

  /**
   * TemplateTab findUniqueOrThrow
   */
  export type TemplateTabFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTab
     */
    select?: TemplateTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTab
     */
    omit?: TemplateTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTabInclude<ExtArgs> | null
    /**
     * Filter, which TemplateTab to fetch.
     */
    where: TemplateTabWhereUniqueInput
  }

  /**
   * TemplateTab findFirst
   */
  export type TemplateTabFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTab
     */
    select?: TemplateTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTab
     */
    omit?: TemplateTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTabInclude<ExtArgs> | null
    /**
     * Filter, which TemplateTab to fetch.
     */
    where?: TemplateTabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateTabs to fetch.
     */
    orderBy?: TemplateTabOrderByWithRelationInput | TemplateTabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateTabs.
     */
    cursor?: TemplateTabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateTabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateTabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateTabs.
     */
    distinct?: TemplateTabScalarFieldEnum | TemplateTabScalarFieldEnum[]
  }

  /**
   * TemplateTab findFirstOrThrow
   */
  export type TemplateTabFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTab
     */
    select?: TemplateTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTab
     */
    omit?: TemplateTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTabInclude<ExtArgs> | null
    /**
     * Filter, which TemplateTab to fetch.
     */
    where?: TemplateTabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateTabs to fetch.
     */
    orderBy?: TemplateTabOrderByWithRelationInput | TemplateTabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateTabs.
     */
    cursor?: TemplateTabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateTabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateTabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateTabs.
     */
    distinct?: TemplateTabScalarFieldEnum | TemplateTabScalarFieldEnum[]
  }

  /**
   * TemplateTab findMany
   */
  export type TemplateTabFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTab
     */
    select?: TemplateTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTab
     */
    omit?: TemplateTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTabInclude<ExtArgs> | null
    /**
     * Filter, which TemplateTabs to fetch.
     */
    where?: TemplateTabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateTabs to fetch.
     */
    orderBy?: TemplateTabOrderByWithRelationInput | TemplateTabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateTabs.
     */
    cursor?: TemplateTabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateTabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateTabs.
     */
    skip?: number
    distinct?: TemplateTabScalarFieldEnum | TemplateTabScalarFieldEnum[]
  }

  /**
   * TemplateTab create
   */
  export type TemplateTabCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTab
     */
    select?: TemplateTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTab
     */
    omit?: TemplateTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTabInclude<ExtArgs> | null
    /**
     * The data needed to create a TemplateTab.
     */
    data: XOR<TemplateTabCreateInput, TemplateTabUncheckedCreateInput>
  }

  /**
   * TemplateTab createMany
   */
  export type TemplateTabCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateTabs.
     */
    data: TemplateTabCreateManyInput | TemplateTabCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateTab createManyAndReturn
   */
  export type TemplateTabCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTab
     */
    select?: TemplateTabSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTab
     */
    omit?: TemplateTabOmit<ExtArgs> | null
    /**
     * The data used to create many TemplateTabs.
     */
    data: TemplateTabCreateManyInput | TemplateTabCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTabIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateTab update
   */
  export type TemplateTabUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTab
     */
    select?: TemplateTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTab
     */
    omit?: TemplateTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTabInclude<ExtArgs> | null
    /**
     * The data needed to update a TemplateTab.
     */
    data: XOR<TemplateTabUpdateInput, TemplateTabUncheckedUpdateInput>
    /**
     * Choose, which TemplateTab to update.
     */
    where: TemplateTabWhereUniqueInput
  }

  /**
   * TemplateTab updateMany
   */
  export type TemplateTabUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateTabs.
     */
    data: XOR<TemplateTabUpdateManyMutationInput, TemplateTabUncheckedUpdateManyInput>
    /**
     * Filter which TemplateTabs to update
     */
    where?: TemplateTabWhereInput
    /**
     * Limit how many TemplateTabs to update.
     */
    limit?: number
  }

  /**
   * TemplateTab updateManyAndReturn
   */
  export type TemplateTabUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTab
     */
    select?: TemplateTabSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTab
     */
    omit?: TemplateTabOmit<ExtArgs> | null
    /**
     * The data used to update TemplateTabs.
     */
    data: XOR<TemplateTabUpdateManyMutationInput, TemplateTabUncheckedUpdateManyInput>
    /**
     * Filter which TemplateTabs to update
     */
    where?: TemplateTabWhereInput
    /**
     * Limit how many TemplateTabs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTabIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateTab upsert
   */
  export type TemplateTabUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTab
     */
    select?: TemplateTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTab
     */
    omit?: TemplateTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTabInclude<ExtArgs> | null
    /**
     * The filter to search for the TemplateTab to update in case it exists.
     */
    where: TemplateTabWhereUniqueInput
    /**
     * In case the TemplateTab found by the `where` argument doesn't exist, create a new TemplateTab with this data.
     */
    create: XOR<TemplateTabCreateInput, TemplateTabUncheckedCreateInput>
    /**
     * In case the TemplateTab was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateTabUpdateInput, TemplateTabUncheckedUpdateInput>
  }

  /**
   * TemplateTab delete
   */
  export type TemplateTabDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTab
     */
    select?: TemplateTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTab
     */
    omit?: TemplateTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTabInclude<ExtArgs> | null
    /**
     * Filter which TemplateTab to delete.
     */
    where: TemplateTabWhereUniqueInput
  }

  /**
   * TemplateTab deleteMany
   */
  export type TemplateTabDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateTabs to delete
     */
    where?: TemplateTabWhereInput
    /**
     * Limit how many TemplateTabs to delete.
     */
    limit?: number
  }

  /**
   * TemplateTab.fields
   */
  export type TemplateTab$fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    where?: TemplateFieldWhereInput
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    cursor?: TemplateFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateFieldScalarFieldEnum | TemplateFieldScalarFieldEnum[]
  }

  /**
   * TemplateTab without action
   */
  export type TemplateTabDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTab
     */
    select?: TemplateTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTab
     */
    omit?: TemplateTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTabInclude<ExtArgs> | null
  }


  /**
   * Model TemplateField
   */

  export type AggregateTemplateField = {
    _count: TemplateFieldCountAggregateOutputType | null
    _min: TemplateFieldMinAggregateOutputType | null
    _max: TemplateFieldMaxAggregateOutputType | null
  }

  export type TemplateFieldMinAggregateOutputType = {
    id: string | null
    tabId: string | null
    label: string | null
    fieldKey: string | null
    fieldType: $Enums.FieldType | null
    defaultValue: string | null
    isActive: boolean | null
    isRequired: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateFieldMaxAggregateOutputType = {
    id: string | null
    tabId: string | null
    label: string | null
    fieldKey: string | null
    fieldType: $Enums.FieldType | null
    defaultValue: string | null
    isActive: boolean | null
    isRequired: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateFieldCountAggregateOutputType = {
    id: number
    tabId: number
    label: number
    fieldKey: number
    fieldType: number
    options: number
    defaultValue: number
    isActive: number
    isRequired: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateFieldMinAggregateInputType = {
    id?: true
    tabId?: true
    label?: true
    fieldKey?: true
    fieldType?: true
    defaultValue?: true
    isActive?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateFieldMaxAggregateInputType = {
    id?: true
    tabId?: true
    label?: true
    fieldKey?: true
    fieldType?: true
    defaultValue?: true
    isActive?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateFieldCountAggregateInputType = {
    id?: true
    tabId?: true
    label?: true
    fieldKey?: true
    fieldType?: true
    options?: true
    defaultValue?: true
    isActive?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateField to aggregate.
     */
    where?: TemplateFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateFields to fetch.
     */
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateFields
    **/
    _count?: true | TemplateFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateFieldMaxAggregateInputType
  }

  export type GetTemplateFieldAggregateType<T extends TemplateFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateField[P]>
      : GetScalarType<T[P], AggregateTemplateField[P]>
  }




  export type TemplateFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateFieldWhereInput
    orderBy?: TemplateFieldOrderByWithAggregationInput | TemplateFieldOrderByWithAggregationInput[]
    by: TemplateFieldScalarFieldEnum[] | TemplateFieldScalarFieldEnum
    having?: TemplateFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateFieldCountAggregateInputType | true
    _min?: TemplateFieldMinAggregateInputType
    _max?: TemplateFieldMaxAggregateInputType
  }

  export type TemplateFieldGroupByOutputType = {
    id: string
    tabId: string
    label: string
    fieldKey: string
    fieldType: $Enums.FieldType
    options: string[]
    defaultValue: string | null
    isActive: boolean
    isRequired: boolean
    createdAt: Date
    updatedAt: Date
    _count: TemplateFieldCountAggregateOutputType | null
    _min: TemplateFieldMinAggregateOutputType | null
    _max: TemplateFieldMaxAggregateOutputType | null
  }

  type GetTemplateFieldGroupByPayload<T extends TemplateFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateFieldGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateFieldGroupByOutputType[P]>
        }
      >
    >


  export type TemplateFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabId?: boolean
    label?: boolean
    fieldKey?: boolean
    fieldType?: boolean
    options?: boolean
    defaultValue?: boolean
    isActive?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tab?: boolean | TemplateTabDefaultArgs<ExtArgs>
    requestValues?: boolean | TemplateField$requestValuesArgs<ExtArgs>
    _count?: boolean | TemplateFieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateField"]>

  export type TemplateFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabId?: boolean
    label?: boolean
    fieldKey?: boolean
    fieldType?: boolean
    options?: boolean
    defaultValue?: boolean
    isActive?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tab?: boolean | TemplateTabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateField"]>

  export type TemplateFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabId?: boolean
    label?: boolean
    fieldKey?: boolean
    fieldType?: boolean
    options?: boolean
    defaultValue?: boolean
    isActive?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tab?: boolean | TemplateTabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateField"]>

  export type TemplateFieldSelectScalar = {
    id?: boolean
    tabId?: boolean
    label?: boolean
    fieldKey?: boolean
    fieldType?: boolean
    options?: boolean
    defaultValue?: boolean
    isActive?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tabId" | "label" | "fieldKey" | "fieldType" | "options" | "defaultValue" | "isActive" | "isRequired" | "createdAt" | "updatedAt", ExtArgs["result"]["templateField"]>
  export type TemplateFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab?: boolean | TemplateTabDefaultArgs<ExtArgs>
    requestValues?: boolean | TemplateField$requestValuesArgs<ExtArgs>
    _count?: boolean | TemplateFieldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab?: boolean | TemplateTabDefaultArgs<ExtArgs>
  }
  export type TemplateFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab?: boolean | TemplateTabDefaultArgs<ExtArgs>
  }

  export type $TemplateFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateField"
    objects: {
      tab: Prisma.$TemplateTabPayload<ExtArgs>
      requestValues: Prisma.$RequestFieldValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tabId: string
      label: string
      fieldKey: string
      fieldType: $Enums.FieldType
      options: string[]
      defaultValue: string | null
      isActive: boolean
      isRequired: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["templateField"]>
    composites: {}
  }

  type TemplateFieldGetPayload<S extends boolean | null | undefined | TemplateFieldDefaultArgs> = $Result.GetResult<Prisma.$TemplateFieldPayload, S>

  type TemplateFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateFieldCountAggregateInputType | true
    }

  export interface TemplateFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateField'], meta: { name: 'TemplateField' } }
    /**
     * Find zero or one TemplateField that matches the filter.
     * @param {TemplateFieldFindUniqueArgs} args - Arguments to find a TemplateField
     * @example
     * // Get one TemplateField
     * const templateField = await prisma.templateField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFieldFindUniqueArgs>(args: SelectSubset<T, TemplateFieldFindUniqueArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemplateField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFieldFindUniqueOrThrowArgs} args - Arguments to find a TemplateField
     * @example
     * // Get one TemplateField
     * const templateField = await prisma.templateField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldFindFirstArgs} args - Arguments to find a TemplateField
     * @example
     * // Get one TemplateField
     * const templateField = await prisma.templateField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFieldFindFirstArgs>(args?: SelectSubset<T, TemplateFieldFindFirstArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldFindFirstOrThrowArgs} args - Arguments to find a TemplateField
     * @example
     * // Get one TemplateField
     * const templateField = await prisma.templateField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemplateFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateFields
     * const templateFields = await prisma.templateField.findMany()
     * 
     * // Get first 10 TemplateFields
     * const templateFields = await prisma.templateField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateFieldWithIdOnly = await prisma.templateField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFieldFindManyArgs>(args?: SelectSubset<T, TemplateFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemplateField.
     * @param {TemplateFieldCreateArgs} args - Arguments to create a TemplateField.
     * @example
     * // Create one TemplateField
     * const TemplateField = await prisma.templateField.create({
     *   data: {
     *     // ... data to create a TemplateField
     *   }
     * })
     * 
     */
    create<T extends TemplateFieldCreateArgs>(args: SelectSubset<T, TemplateFieldCreateArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemplateFields.
     * @param {TemplateFieldCreateManyArgs} args - Arguments to create many TemplateFields.
     * @example
     * // Create many TemplateFields
     * const templateField = await prisma.templateField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateFieldCreateManyArgs>(args?: SelectSubset<T, TemplateFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplateFields and returns the data saved in the database.
     * @param {TemplateFieldCreateManyAndReturnArgs} args - Arguments to create many TemplateFields.
     * @example
     * // Create many TemplateFields
     * const templateField = await prisma.templateField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplateFields and only return the `id`
     * const templateFieldWithIdOnly = await prisma.templateField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TemplateField.
     * @param {TemplateFieldDeleteArgs} args - Arguments to delete one TemplateField.
     * @example
     * // Delete one TemplateField
     * const TemplateField = await prisma.templateField.delete({
     *   where: {
     *     // ... filter to delete one TemplateField
     *   }
     * })
     * 
     */
    delete<T extends TemplateFieldDeleteArgs>(args: SelectSubset<T, TemplateFieldDeleteArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemplateField.
     * @param {TemplateFieldUpdateArgs} args - Arguments to update one TemplateField.
     * @example
     * // Update one TemplateField
     * const templateField = await prisma.templateField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateFieldUpdateArgs>(args: SelectSubset<T, TemplateFieldUpdateArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemplateFields.
     * @param {TemplateFieldDeleteManyArgs} args - Arguments to filter TemplateFields to delete.
     * @example
     * // Delete a few TemplateFields
     * const { count } = await prisma.templateField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateFieldDeleteManyArgs>(args?: SelectSubset<T, TemplateFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateFields
     * const templateField = await prisma.templateField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateFieldUpdateManyArgs>(args: SelectSubset<T, TemplateFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateFields and returns the data updated in the database.
     * @param {TemplateFieldUpdateManyAndReturnArgs} args - Arguments to update many TemplateFields.
     * @example
     * // Update many TemplateFields
     * const templateField = await prisma.templateField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TemplateFields and only return the `id`
     * const templateFieldWithIdOnly = await prisma.templateField.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TemplateField.
     * @param {TemplateFieldUpsertArgs} args - Arguments to update or create a TemplateField.
     * @example
     * // Update or create a TemplateField
     * const templateField = await prisma.templateField.upsert({
     *   create: {
     *     // ... data to create a TemplateField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateField we want to update
     *   }
     * })
     */
    upsert<T extends TemplateFieldUpsertArgs>(args: SelectSubset<T, TemplateFieldUpsertArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemplateFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldCountArgs} args - Arguments to filter TemplateFields to count.
     * @example
     * // Count the number of TemplateFields
     * const count = await prisma.templateField.count({
     *   where: {
     *     // ... the filter for the TemplateFields we want to count
     *   }
     * })
    **/
    count<T extends TemplateFieldCountArgs>(
      args?: Subset<T, TemplateFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateFieldAggregateArgs>(args: Subset<T, TemplateFieldAggregateArgs>): Prisma.PrismaPromise<GetTemplateFieldAggregateType<T>>

    /**
     * Group by TemplateField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateFieldGroupByArgs['orderBy'] }
        : { orderBy?: TemplateFieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateField model
   */
  readonly fields: TemplateFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tab<T extends TemplateTabDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateTabDefaultArgs<ExtArgs>>): Prisma__TemplateTabClient<$Result.GetResult<Prisma.$TemplateTabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requestValues<T extends TemplateField$requestValuesArgs<ExtArgs> = {}>(args?: Subset<T, TemplateField$requestValuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestFieldValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TemplateField model
   */
  interface TemplateFieldFieldRefs {
    readonly id: FieldRef<"TemplateField", 'String'>
    readonly tabId: FieldRef<"TemplateField", 'String'>
    readonly label: FieldRef<"TemplateField", 'String'>
    readonly fieldKey: FieldRef<"TemplateField", 'String'>
    readonly fieldType: FieldRef<"TemplateField", 'FieldType'>
    readonly options: FieldRef<"TemplateField", 'String[]'>
    readonly defaultValue: FieldRef<"TemplateField", 'String'>
    readonly isActive: FieldRef<"TemplateField", 'Boolean'>
    readonly isRequired: FieldRef<"TemplateField", 'Boolean'>
    readonly createdAt: FieldRef<"TemplateField", 'DateTime'>
    readonly updatedAt: FieldRef<"TemplateField", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemplateField findUnique
   */
  export type TemplateFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateField to fetch.
     */
    where: TemplateFieldWhereUniqueInput
  }

  /**
   * TemplateField findUniqueOrThrow
   */
  export type TemplateFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateField to fetch.
     */
    where: TemplateFieldWhereUniqueInput
  }

  /**
   * TemplateField findFirst
   */
  export type TemplateFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateField to fetch.
     */
    where?: TemplateFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateFields to fetch.
     */
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateFields.
     */
    cursor?: TemplateFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateFields.
     */
    distinct?: TemplateFieldScalarFieldEnum | TemplateFieldScalarFieldEnum[]
  }

  /**
   * TemplateField findFirstOrThrow
   */
  export type TemplateFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateField to fetch.
     */
    where?: TemplateFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateFields to fetch.
     */
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateFields.
     */
    cursor?: TemplateFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateFields.
     */
    distinct?: TemplateFieldScalarFieldEnum | TemplateFieldScalarFieldEnum[]
  }

  /**
   * TemplateField findMany
   */
  export type TemplateFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateFields to fetch.
     */
    where?: TemplateFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateFields to fetch.
     */
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateFields.
     */
    cursor?: TemplateFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateFields.
     */
    skip?: number
    distinct?: TemplateFieldScalarFieldEnum | TemplateFieldScalarFieldEnum[]
  }

  /**
   * TemplateField create
   */
  export type TemplateFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a TemplateField.
     */
    data: XOR<TemplateFieldCreateInput, TemplateFieldUncheckedCreateInput>
  }

  /**
   * TemplateField createMany
   */
  export type TemplateFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateFields.
     */
    data: TemplateFieldCreateManyInput | TemplateFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateField createManyAndReturn
   */
  export type TemplateFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * The data used to create many TemplateFields.
     */
    data: TemplateFieldCreateManyInput | TemplateFieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateField update
   */
  export type TemplateFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a TemplateField.
     */
    data: XOR<TemplateFieldUpdateInput, TemplateFieldUncheckedUpdateInput>
    /**
     * Choose, which TemplateField to update.
     */
    where: TemplateFieldWhereUniqueInput
  }

  /**
   * TemplateField updateMany
   */
  export type TemplateFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateFields.
     */
    data: XOR<TemplateFieldUpdateManyMutationInput, TemplateFieldUncheckedUpdateManyInput>
    /**
     * Filter which TemplateFields to update
     */
    where?: TemplateFieldWhereInput
    /**
     * Limit how many TemplateFields to update.
     */
    limit?: number
  }

  /**
   * TemplateField updateManyAndReturn
   */
  export type TemplateFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * The data used to update TemplateFields.
     */
    data: XOR<TemplateFieldUpdateManyMutationInput, TemplateFieldUncheckedUpdateManyInput>
    /**
     * Filter which TemplateFields to update
     */
    where?: TemplateFieldWhereInput
    /**
     * Limit how many TemplateFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateField upsert
   */
  export type TemplateFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the TemplateField to update in case it exists.
     */
    where: TemplateFieldWhereUniqueInput
    /**
     * In case the TemplateField found by the `where` argument doesn't exist, create a new TemplateField with this data.
     */
    create: XOR<TemplateFieldCreateInput, TemplateFieldUncheckedCreateInput>
    /**
     * In case the TemplateField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateFieldUpdateInput, TemplateFieldUncheckedUpdateInput>
  }

  /**
   * TemplateField delete
   */
  export type TemplateFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter which TemplateField to delete.
     */
    where: TemplateFieldWhereUniqueInput
  }

  /**
   * TemplateField deleteMany
   */
  export type TemplateFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateFields to delete
     */
    where?: TemplateFieldWhereInput
    /**
     * Limit how many TemplateFields to delete.
     */
    limit?: number
  }

  /**
   * TemplateField.requestValues
   */
  export type TemplateField$requestValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFieldValue
     */
    select?: RequestFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestFieldValue
     */
    omit?: RequestFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFieldValueInclude<ExtArgs> | null
    where?: RequestFieldValueWhereInput
    orderBy?: RequestFieldValueOrderByWithRelationInput | RequestFieldValueOrderByWithRelationInput[]
    cursor?: RequestFieldValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestFieldValueScalarFieldEnum | RequestFieldValueScalarFieldEnum[]
  }

  /**
   * TemplateField without action
   */
  export type TemplateFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
  }


  /**
   * Model RequestFieldValue
   */

  export type AggregateRequestFieldValue = {
    _count: RequestFieldValueCountAggregateOutputType | null
    _min: RequestFieldValueMinAggregateOutputType | null
    _max: RequestFieldValueMaxAggregateOutputType | null
  }

  export type RequestFieldValueMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    fieldId: string | null
    createdAt: Date | null
  }

  export type RequestFieldValueMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    fieldId: string | null
    createdAt: Date | null
  }

  export type RequestFieldValueCountAggregateOutputType = {
    id: number
    requestId: number
    fieldId: number
    value: number
    createdAt: number
    _all: number
  }


  export type RequestFieldValueMinAggregateInputType = {
    id?: true
    requestId?: true
    fieldId?: true
    createdAt?: true
  }

  export type RequestFieldValueMaxAggregateInputType = {
    id?: true
    requestId?: true
    fieldId?: true
    createdAt?: true
  }

  export type RequestFieldValueCountAggregateInputType = {
    id?: true
    requestId?: true
    fieldId?: true
    value?: true
    createdAt?: true
    _all?: true
  }

  export type RequestFieldValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestFieldValue to aggregate.
     */
    where?: RequestFieldValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestFieldValues to fetch.
     */
    orderBy?: RequestFieldValueOrderByWithRelationInput | RequestFieldValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestFieldValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestFieldValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestFieldValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestFieldValues
    **/
    _count?: true | RequestFieldValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestFieldValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestFieldValueMaxAggregateInputType
  }

  export type GetRequestFieldValueAggregateType<T extends RequestFieldValueAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestFieldValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestFieldValue[P]>
      : GetScalarType<T[P], AggregateRequestFieldValue[P]>
  }




  export type RequestFieldValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestFieldValueWhereInput
    orderBy?: RequestFieldValueOrderByWithAggregationInput | RequestFieldValueOrderByWithAggregationInput[]
    by: RequestFieldValueScalarFieldEnum[] | RequestFieldValueScalarFieldEnum
    having?: RequestFieldValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestFieldValueCountAggregateInputType | true
    _min?: RequestFieldValueMinAggregateInputType
    _max?: RequestFieldValueMaxAggregateInputType
  }

  export type RequestFieldValueGroupByOutputType = {
    id: string
    requestId: string
    fieldId: string
    value: JsonValue
    createdAt: Date
    _count: RequestFieldValueCountAggregateOutputType | null
    _min: RequestFieldValueMinAggregateOutputType | null
    _max: RequestFieldValueMaxAggregateOutputType | null
  }

  type GetRequestFieldValueGroupByPayload<T extends RequestFieldValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestFieldValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestFieldValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestFieldValueGroupByOutputType[P]>
            : GetScalarType<T[P], RequestFieldValueGroupByOutputType[P]>
        }
      >
    >


  export type RequestFieldValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    fieldId?: boolean
    value?: boolean
    createdAt?: boolean
    field?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestFieldValue"]>

  export type RequestFieldValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    fieldId?: boolean
    value?: boolean
    createdAt?: boolean
    field?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestFieldValue"]>

  export type RequestFieldValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    fieldId?: boolean
    value?: boolean
    createdAt?: boolean
    field?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestFieldValue"]>

  export type RequestFieldValueSelectScalar = {
    id?: boolean
    requestId?: boolean
    fieldId?: boolean
    value?: boolean
    createdAt?: boolean
  }

  export type RequestFieldValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "fieldId" | "value" | "createdAt", ExtArgs["result"]["requestFieldValue"]>
  export type RequestFieldValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }
  export type RequestFieldValueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }
  export type RequestFieldValueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }

  export type $RequestFieldValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestFieldValue"
    objects: {
      field: Prisma.$TemplateFieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      fieldId: string
      value: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["requestFieldValue"]>
    composites: {}
  }

  type RequestFieldValueGetPayload<S extends boolean | null | undefined | RequestFieldValueDefaultArgs> = $Result.GetResult<Prisma.$RequestFieldValuePayload, S>

  type RequestFieldValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestFieldValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestFieldValueCountAggregateInputType | true
    }

  export interface RequestFieldValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestFieldValue'], meta: { name: 'RequestFieldValue' } }
    /**
     * Find zero or one RequestFieldValue that matches the filter.
     * @param {RequestFieldValueFindUniqueArgs} args - Arguments to find a RequestFieldValue
     * @example
     * // Get one RequestFieldValue
     * const requestFieldValue = await prisma.requestFieldValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestFieldValueFindUniqueArgs>(args: SelectSubset<T, RequestFieldValueFindUniqueArgs<ExtArgs>>): Prisma__RequestFieldValueClient<$Result.GetResult<Prisma.$RequestFieldValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequestFieldValue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestFieldValueFindUniqueOrThrowArgs} args - Arguments to find a RequestFieldValue
     * @example
     * // Get one RequestFieldValue
     * const requestFieldValue = await prisma.requestFieldValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestFieldValueFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestFieldValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestFieldValueClient<$Result.GetResult<Prisma.$RequestFieldValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestFieldValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFieldValueFindFirstArgs} args - Arguments to find a RequestFieldValue
     * @example
     * // Get one RequestFieldValue
     * const requestFieldValue = await prisma.requestFieldValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestFieldValueFindFirstArgs>(args?: SelectSubset<T, RequestFieldValueFindFirstArgs<ExtArgs>>): Prisma__RequestFieldValueClient<$Result.GetResult<Prisma.$RequestFieldValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestFieldValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFieldValueFindFirstOrThrowArgs} args - Arguments to find a RequestFieldValue
     * @example
     * // Get one RequestFieldValue
     * const requestFieldValue = await prisma.requestFieldValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestFieldValueFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestFieldValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestFieldValueClient<$Result.GetResult<Prisma.$RequestFieldValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestFieldValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFieldValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestFieldValues
     * const requestFieldValues = await prisma.requestFieldValue.findMany()
     * 
     * // Get first 10 RequestFieldValues
     * const requestFieldValues = await prisma.requestFieldValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestFieldValueWithIdOnly = await prisma.requestFieldValue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestFieldValueFindManyArgs>(args?: SelectSubset<T, RequestFieldValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestFieldValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequestFieldValue.
     * @param {RequestFieldValueCreateArgs} args - Arguments to create a RequestFieldValue.
     * @example
     * // Create one RequestFieldValue
     * const RequestFieldValue = await prisma.requestFieldValue.create({
     *   data: {
     *     // ... data to create a RequestFieldValue
     *   }
     * })
     * 
     */
    create<T extends RequestFieldValueCreateArgs>(args: SelectSubset<T, RequestFieldValueCreateArgs<ExtArgs>>): Prisma__RequestFieldValueClient<$Result.GetResult<Prisma.$RequestFieldValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequestFieldValues.
     * @param {RequestFieldValueCreateManyArgs} args - Arguments to create many RequestFieldValues.
     * @example
     * // Create many RequestFieldValues
     * const requestFieldValue = await prisma.requestFieldValue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestFieldValueCreateManyArgs>(args?: SelectSubset<T, RequestFieldValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequestFieldValues and returns the data saved in the database.
     * @param {RequestFieldValueCreateManyAndReturnArgs} args - Arguments to create many RequestFieldValues.
     * @example
     * // Create many RequestFieldValues
     * const requestFieldValue = await prisma.requestFieldValue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequestFieldValues and only return the `id`
     * const requestFieldValueWithIdOnly = await prisma.requestFieldValue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestFieldValueCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestFieldValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestFieldValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequestFieldValue.
     * @param {RequestFieldValueDeleteArgs} args - Arguments to delete one RequestFieldValue.
     * @example
     * // Delete one RequestFieldValue
     * const RequestFieldValue = await prisma.requestFieldValue.delete({
     *   where: {
     *     // ... filter to delete one RequestFieldValue
     *   }
     * })
     * 
     */
    delete<T extends RequestFieldValueDeleteArgs>(args: SelectSubset<T, RequestFieldValueDeleteArgs<ExtArgs>>): Prisma__RequestFieldValueClient<$Result.GetResult<Prisma.$RequestFieldValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequestFieldValue.
     * @param {RequestFieldValueUpdateArgs} args - Arguments to update one RequestFieldValue.
     * @example
     * // Update one RequestFieldValue
     * const requestFieldValue = await prisma.requestFieldValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestFieldValueUpdateArgs>(args: SelectSubset<T, RequestFieldValueUpdateArgs<ExtArgs>>): Prisma__RequestFieldValueClient<$Result.GetResult<Prisma.$RequestFieldValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequestFieldValues.
     * @param {RequestFieldValueDeleteManyArgs} args - Arguments to filter RequestFieldValues to delete.
     * @example
     * // Delete a few RequestFieldValues
     * const { count } = await prisma.requestFieldValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestFieldValueDeleteManyArgs>(args?: SelectSubset<T, RequestFieldValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestFieldValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFieldValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestFieldValues
     * const requestFieldValue = await prisma.requestFieldValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestFieldValueUpdateManyArgs>(args: SelectSubset<T, RequestFieldValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestFieldValues and returns the data updated in the database.
     * @param {RequestFieldValueUpdateManyAndReturnArgs} args - Arguments to update many RequestFieldValues.
     * @example
     * // Update many RequestFieldValues
     * const requestFieldValue = await prisma.requestFieldValue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequestFieldValues and only return the `id`
     * const requestFieldValueWithIdOnly = await prisma.requestFieldValue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestFieldValueUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestFieldValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestFieldValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequestFieldValue.
     * @param {RequestFieldValueUpsertArgs} args - Arguments to update or create a RequestFieldValue.
     * @example
     * // Update or create a RequestFieldValue
     * const requestFieldValue = await prisma.requestFieldValue.upsert({
     *   create: {
     *     // ... data to create a RequestFieldValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestFieldValue we want to update
     *   }
     * })
     */
    upsert<T extends RequestFieldValueUpsertArgs>(args: SelectSubset<T, RequestFieldValueUpsertArgs<ExtArgs>>): Prisma__RequestFieldValueClient<$Result.GetResult<Prisma.$RequestFieldValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequestFieldValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFieldValueCountArgs} args - Arguments to filter RequestFieldValues to count.
     * @example
     * // Count the number of RequestFieldValues
     * const count = await prisma.requestFieldValue.count({
     *   where: {
     *     // ... the filter for the RequestFieldValues we want to count
     *   }
     * })
    **/
    count<T extends RequestFieldValueCountArgs>(
      args?: Subset<T, RequestFieldValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestFieldValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestFieldValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFieldValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestFieldValueAggregateArgs>(args: Subset<T, RequestFieldValueAggregateArgs>): Prisma.PrismaPromise<GetRequestFieldValueAggregateType<T>>

    /**
     * Group by RequestFieldValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFieldValueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestFieldValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestFieldValueGroupByArgs['orderBy'] }
        : { orderBy?: RequestFieldValueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestFieldValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestFieldValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestFieldValue model
   */
  readonly fields: RequestFieldValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestFieldValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestFieldValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    field<T extends TemplateFieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateFieldDefaultArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RequestFieldValue model
   */
  interface RequestFieldValueFieldRefs {
    readonly id: FieldRef<"RequestFieldValue", 'String'>
    readonly requestId: FieldRef<"RequestFieldValue", 'String'>
    readonly fieldId: FieldRef<"RequestFieldValue", 'String'>
    readonly value: FieldRef<"RequestFieldValue", 'Json'>
    readonly createdAt: FieldRef<"RequestFieldValue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RequestFieldValue findUnique
   */
  export type RequestFieldValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFieldValue
     */
    select?: RequestFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestFieldValue
     */
    omit?: RequestFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFieldValueInclude<ExtArgs> | null
    /**
     * Filter, which RequestFieldValue to fetch.
     */
    where: RequestFieldValueWhereUniqueInput
  }

  /**
   * RequestFieldValue findUniqueOrThrow
   */
  export type RequestFieldValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFieldValue
     */
    select?: RequestFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestFieldValue
     */
    omit?: RequestFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFieldValueInclude<ExtArgs> | null
    /**
     * Filter, which RequestFieldValue to fetch.
     */
    where: RequestFieldValueWhereUniqueInput
  }

  /**
   * RequestFieldValue findFirst
   */
  export type RequestFieldValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFieldValue
     */
    select?: RequestFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestFieldValue
     */
    omit?: RequestFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFieldValueInclude<ExtArgs> | null
    /**
     * Filter, which RequestFieldValue to fetch.
     */
    where?: RequestFieldValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestFieldValues to fetch.
     */
    orderBy?: RequestFieldValueOrderByWithRelationInput | RequestFieldValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestFieldValues.
     */
    cursor?: RequestFieldValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestFieldValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestFieldValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestFieldValues.
     */
    distinct?: RequestFieldValueScalarFieldEnum | RequestFieldValueScalarFieldEnum[]
  }

  /**
   * RequestFieldValue findFirstOrThrow
   */
  export type RequestFieldValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFieldValue
     */
    select?: RequestFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestFieldValue
     */
    omit?: RequestFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFieldValueInclude<ExtArgs> | null
    /**
     * Filter, which RequestFieldValue to fetch.
     */
    where?: RequestFieldValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestFieldValues to fetch.
     */
    orderBy?: RequestFieldValueOrderByWithRelationInput | RequestFieldValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestFieldValues.
     */
    cursor?: RequestFieldValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestFieldValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestFieldValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestFieldValues.
     */
    distinct?: RequestFieldValueScalarFieldEnum | RequestFieldValueScalarFieldEnum[]
  }

  /**
   * RequestFieldValue findMany
   */
  export type RequestFieldValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFieldValue
     */
    select?: RequestFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestFieldValue
     */
    omit?: RequestFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFieldValueInclude<ExtArgs> | null
    /**
     * Filter, which RequestFieldValues to fetch.
     */
    where?: RequestFieldValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestFieldValues to fetch.
     */
    orderBy?: RequestFieldValueOrderByWithRelationInput | RequestFieldValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestFieldValues.
     */
    cursor?: RequestFieldValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestFieldValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestFieldValues.
     */
    skip?: number
    distinct?: RequestFieldValueScalarFieldEnum | RequestFieldValueScalarFieldEnum[]
  }

  /**
   * RequestFieldValue create
   */
  export type RequestFieldValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFieldValue
     */
    select?: RequestFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestFieldValue
     */
    omit?: RequestFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFieldValueInclude<ExtArgs> | null
    /**
     * The data needed to create a RequestFieldValue.
     */
    data: XOR<RequestFieldValueCreateInput, RequestFieldValueUncheckedCreateInput>
  }

  /**
   * RequestFieldValue createMany
   */
  export type RequestFieldValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestFieldValues.
     */
    data: RequestFieldValueCreateManyInput | RequestFieldValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestFieldValue createManyAndReturn
   */
  export type RequestFieldValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFieldValue
     */
    select?: RequestFieldValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestFieldValue
     */
    omit?: RequestFieldValueOmit<ExtArgs> | null
    /**
     * The data used to create many RequestFieldValues.
     */
    data: RequestFieldValueCreateManyInput | RequestFieldValueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFieldValueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestFieldValue update
   */
  export type RequestFieldValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFieldValue
     */
    select?: RequestFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestFieldValue
     */
    omit?: RequestFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFieldValueInclude<ExtArgs> | null
    /**
     * The data needed to update a RequestFieldValue.
     */
    data: XOR<RequestFieldValueUpdateInput, RequestFieldValueUncheckedUpdateInput>
    /**
     * Choose, which RequestFieldValue to update.
     */
    where: RequestFieldValueWhereUniqueInput
  }

  /**
   * RequestFieldValue updateMany
   */
  export type RequestFieldValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestFieldValues.
     */
    data: XOR<RequestFieldValueUpdateManyMutationInput, RequestFieldValueUncheckedUpdateManyInput>
    /**
     * Filter which RequestFieldValues to update
     */
    where?: RequestFieldValueWhereInput
    /**
     * Limit how many RequestFieldValues to update.
     */
    limit?: number
  }

  /**
   * RequestFieldValue updateManyAndReturn
   */
  export type RequestFieldValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFieldValue
     */
    select?: RequestFieldValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestFieldValue
     */
    omit?: RequestFieldValueOmit<ExtArgs> | null
    /**
     * The data used to update RequestFieldValues.
     */
    data: XOR<RequestFieldValueUpdateManyMutationInput, RequestFieldValueUncheckedUpdateManyInput>
    /**
     * Filter which RequestFieldValues to update
     */
    where?: RequestFieldValueWhereInput
    /**
     * Limit how many RequestFieldValues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFieldValueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestFieldValue upsert
   */
  export type RequestFieldValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFieldValue
     */
    select?: RequestFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestFieldValue
     */
    omit?: RequestFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFieldValueInclude<ExtArgs> | null
    /**
     * The filter to search for the RequestFieldValue to update in case it exists.
     */
    where: RequestFieldValueWhereUniqueInput
    /**
     * In case the RequestFieldValue found by the `where` argument doesn't exist, create a new RequestFieldValue with this data.
     */
    create: XOR<RequestFieldValueCreateInput, RequestFieldValueUncheckedCreateInput>
    /**
     * In case the RequestFieldValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestFieldValueUpdateInput, RequestFieldValueUncheckedUpdateInput>
  }

  /**
   * RequestFieldValue delete
   */
  export type RequestFieldValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFieldValue
     */
    select?: RequestFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestFieldValue
     */
    omit?: RequestFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFieldValueInclude<ExtArgs> | null
    /**
     * Filter which RequestFieldValue to delete.
     */
    where: RequestFieldValueWhereUniqueInput
  }

  /**
   * RequestFieldValue deleteMany
   */
  export type RequestFieldValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestFieldValues to delete
     */
    where?: RequestFieldValueWhereInput
    /**
     * Limit how many RequestFieldValues to delete.
     */
    limit?: number
  }

  /**
   * RequestFieldValue without action
   */
  export type RequestFieldValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFieldValue
     */
    select?: RequestFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestFieldValue
     */
    omit?: RequestFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFieldValueInclude<ExtArgs> | null
  }


  /**
   * Model Counter
   */

  export type AggregateCounter = {
    _count: CounterCountAggregateOutputType | null
    _avg: CounterAvgAggregateOutputType | null
    _sum: CounterSumAggregateOutputType | null
    _min: CounterMinAggregateOutputType | null
    _max: CounterMaxAggregateOutputType | null
  }

  export type CounterAvgAggregateOutputType = {
    value: number | null
  }

  export type CounterSumAggregateOutputType = {
    value: number | null
  }

  export type CounterMinAggregateOutputType = {
    id: string | null
    value: number | null
  }

  export type CounterMaxAggregateOutputType = {
    id: string | null
    value: number | null
  }

  export type CounterCountAggregateOutputType = {
    id: number
    value: number
    _all: number
  }


  export type CounterAvgAggregateInputType = {
    value?: true
  }

  export type CounterSumAggregateInputType = {
    value?: true
  }

  export type CounterMinAggregateInputType = {
    id?: true
    value?: true
  }

  export type CounterMaxAggregateInputType = {
    id?: true
    value?: true
  }

  export type CounterCountAggregateInputType = {
    id?: true
    value?: true
    _all?: true
  }

  export type CounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Counter to aggregate.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Counters
    **/
    _count?: true | CounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CounterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CounterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CounterMaxAggregateInputType
  }

  export type GetCounterAggregateType<T extends CounterAggregateArgs> = {
        [P in keyof T & keyof AggregateCounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCounter[P]>
      : GetScalarType<T[P], AggregateCounter[P]>
  }




  export type CounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CounterWhereInput
    orderBy?: CounterOrderByWithAggregationInput | CounterOrderByWithAggregationInput[]
    by: CounterScalarFieldEnum[] | CounterScalarFieldEnum
    having?: CounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CounterCountAggregateInputType | true
    _avg?: CounterAvgAggregateInputType
    _sum?: CounterSumAggregateInputType
    _min?: CounterMinAggregateInputType
    _max?: CounterMaxAggregateInputType
  }

  export type CounterGroupByOutputType = {
    id: string
    value: number
    _count: CounterCountAggregateOutputType | null
    _avg: CounterAvgAggregateOutputType | null
    _sum: CounterSumAggregateOutputType | null
    _min: CounterMinAggregateOutputType | null
    _max: CounterMaxAggregateOutputType | null
  }

  type GetCounterGroupByPayload<T extends CounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CounterGroupByOutputType[P]>
            : GetScalarType<T[P], CounterGroupByOutputType[P]>
        }
      >
    >


  export type CounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
  }, ExtArgs["result"]["counter"]>

  export type CounterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
  }, ExtArgs["result"]["counter"]>

  export type CounterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
  }, ExtArgs["result"]["counter"]>

  export type CounterSelectScalar = {
    id?: boolean
    value?: boolean
  }

  export type CounterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value", ExtArgs["result"]["counter"]>

  export type $CounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Counter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: number
    }, ExtArgs["result"]["counter"]>
    composites: {}
  }

  type CounterGetPayload<S extends boolean | null | undefined | CounterDefaultArgs> = $Result.GetResult<Prisma.$CounterPayload, S>

  type CounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CounterCountAggregateInputType | true
    }

  export interface CounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Counter'], meta: { name: 'Counter' } }
    /**
     * Find zero or one Counter that matches the filter.
     * @param {CounterFindUniqueArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CounterFindUniqueArgs>(args: SelectSubset<T, CounterFindUniqueArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Counter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CounterFindUniqueOrThrowArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CounterFindUniqueOrThrowArgs>(args: SelectSubset<T, CounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Counter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterFindFirstArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CounterFindFirstArgs>(args?: SelectSubset<T, CounterFindFirstArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Counter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterFindFirstOrThrowArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CounterFindFirstOrThrowArgs>(args?: SelectSubset<T, CounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Counters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Counters
     * const counters = await prisma.counter.findMany()
     * 
     * // Get first 10 Counters
     * const counters = await prisma.counter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const counterWithIdOnly = await prisma.counter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CounterFindManyArgs>(args?: SelectSubset<T, CounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Counter.
     * @param {CounterCreateArgs} args - Arguments to create a Counter.
     * @example
     * // Create one Counter
     * const Counter = await prisma.counter.create({
     *   data: {
     *     // ... data to create a Counter
     *   }
     * })
     * 
     */
    create<T extends CounterCreateArgs>(args: SelectSubset<T, CounterCreateArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Counters.
     * @param {CounterCreateManyArgs} args - Arguments to create many Counters.
     * @example
     * // Create many Counters
     * const counter = await prisma.counter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CounterCreateManyArgs>(args?: SelectSubset<T, CounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Counters and returns the data saved in the database.
     * @param {CounterCreateManyAndReturnArgs} args - Arguments to create many Counters.
     * @example
     * // Create many Counters
     * const counter = await prisma.counter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Counters and only return the `id`
     * const counterWithIdOnly = await prisma.counter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CounterCreateManyAndReturnArgs>(args?: SelectSubset<T, CounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Counter.
     * @param {CounterDeleteArgs} args - Arguments to delete one Counter.
     * @example
     * // Delete one Counter
     * const Counter = await prisma.counter.delete({
     *   where: {
     *     // ... filter to delete one Counter
     *   }
     * })
     * 
     */
    delete<T extends CounterDeleteArgs>(args: SelectSubset<T, CounterDeleteArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Counter.
     * @param {CounterUpdateArgs} args - Arguments to update one Counter.
     * @example
     * // Update one Counter
     * const counter = await prisma.counter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CounterUpdateArgs>(args: SelectSubset<T, CounterUpdateArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Counters.
     * @param {CounterDeleteManyArgs} args - Arguments to filter Counters to delete.
     * @example
     * // Delete a few Counters
     * const { count } = await prisma.counter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CounterDeleteManyArgs>(args?: SelectSubset<T, CounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Counters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Counters
     * const counter = await prisma.counter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CounterUpdateManyArgs>(args: SelectSubset<T, CounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Counters and returns the data updated in the database.
     * @param {CounterUpdateManyAndReturnArgs} args - Arguments to update many Counters.
     * @example
     * // Update many Counters
     * const counter = await prisma.counter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Counters and only return the `id`
     * const counterWithIdOnly = await prisma.counter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CounterUpdateManyAndReturnArgs>(args: SelectSubset<T, CounterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Counter.
     * @param {CounterUpsertArgs} args - Arguments to update or create a Counter.
     * @example
     * // Update or create a Counter
     * const counter = await prisma.counter.upsert({
     *   create: {
     *     // ... data to create a Counter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Counter we want to update
     *   }
     * })
     */
    upsert<T extends CounterUpsertArgs>(args: SelectSubset<T, CounterUpsertArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Counters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterCountArgs} args - Arguments to filter Counters to count.
     * @example
     * // Count the number of Counters
     * const count = await prisma.counter.count({
     *   where: {
     *     // ... the filter for the Counters we want to count
     *   }
     * })
    **/
    count<T extends CounterCountArgs>(
      args?: Subset<T, CounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Counter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CounterAggregateArgs>(args: Subset<T, CounterAggregateArgs>): Prisma.PrismaPromise<GetCounterAggregateType<T>>

    /**
     * Group by Counter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CounterGroupByArgs['orderBy'] }
        : { orderBy?: CounterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Counter model
   */
  readonly fields: CounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Counter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Counter model
   */
  interface CounterFieldRefs {
    readonly id: FieldRef<"Counter", 'String'>
    readonly value: FieldRef<"Counter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Counter findUnique
   */
  export type CounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter findUniqueOrThrow
   */
  export type CounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter findFirst
   */
  export type CounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Counters.
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Counters.
     */
    distinct?: CounterScalarFieldEnum | CounterScalarFieldEnum[]
  }

  /**
   * Counter findFirstOrThrow
   */
  export type CounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Counters.
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Counters.
     */
    distinct?: CounterScalarFieldEnum | CounterScalarFieldEnum[]
  }

  /**
   * Counter findMany
   */
  export type CounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counters to fetch.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Counters.
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    distinct?: CounterScalarFieldEnum | CounterScalarFieldEnum[]
  }

  /**
   * Counter create
   */
  export type CounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * The data needed to create a Counter.
     */
    data: XOR<CounterCreateInput, CounterUncheckedCreateInput>
  }

  /**
   * Counter createMany
   */
  export type CounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Counters.
     */
    data: CounterCreateManyInput | CounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Counter createManyAndReturn
   */
  export type CounterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * The data used to create many Counters.
     */
    data: CounterCreateManyInput | CounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Counter update
   */
  export type CounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * The data needed to update a Counter.
     */
    data: XOR<CounterUpdateInput, CounterUncheckedUpdateInput>
    /**
     * Choose, which Counter to update.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter updateMany
   */
  export type CounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Counters.
     */
    data: XOR<CounterUpdateManyMutationInput, CounterUncheckedUpdateManyInput>
    /**
     * Filter which Counters to update
     */
    where?: CounterWhereInput
    /**
     * Limit how many Counters to update.
     */
    limit?: number
  }

  /**
   * Counter updateManyAndReturn
   */
  export type CounterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * The data used to update Counters.
     */
    data: XOR<CounterUpdateManyMutationInput, CounterUncheckedUpdateManyInput>
    /**
     * Filter which Counters to update
     */
    where?: CounterWhereInput
    /**
     * Limit how many Counters to update.
     */
    limit?: number
  }

  /**
   * Counter upsert
   */
  export type CounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * The filter to search for the Counter to update in case it exists.
     */
    where: CounterWhereUniqueInput
    /**
     * In case the Counter found by the `where` argument doesn't exist, create a new Counter with this data.
     */
    create: XOR<CounterCreateInput, CounterUncheckedCreateInput>
    /**
     * In case the Counter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CounterUpdateInput, CounterUncheckedUpdateInput>
  }

  /**
   * Counter delete
   */
  export type CounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter which Counter to delete.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter deleteMany
   */
  export type CounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Counters to delete
     */
    where?: CounterWhereInput
    /**
     * Limit how many Counters to delete.
     */
    limit?: number
  }

  /**
   * Counter without action
   */
  export type CounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clientRegNo: 'clientRegNo',
    designerRegNo: 'designerRegNo',
    role: 'role',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    avatar: 'avatar',
    passwordHash: 'passwordHash',
    isVerified: 'isVerified',
    oauthProvider: 'oauthProvider',
    oauthId: 'oauthId',
    address: 'address',
    occupation: 'occupation',
    education: 'education',
    projectCount: 'projectCount',
    totalRevenue: 'totalRevenue',
    rating: 'rating',
    isBlocked: 'isBlocked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    leadRegNo: 'leadRegNo',
    name: 'name',
    email: 'email',
    phone: 'phone',
    location: 'location',
    source: 'source',
    status: 'status',
    projectsInterestedIn: 'projectsInterestedIn',
    packageType: 'packageType',
    clientId: 'clientId',
    assignedDesignerId: 'assignedDesignerId',
    assignedAt: 'assignedAt',
    convertedAt: 'convertedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const DeliverableScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    icon: 'icon',
    isActive: 'isActive',
    createdById: 'createdById',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeliverableScalarFieldEnum = (typeof DeliverableScalarFieldEnum)[keyof typeof DeliverableScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    deliverableId: 'deliverableId',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const TemplateTabScalarFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    name: 'name',
    displayOrder: 'displayOrder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateTabScalarFieldEnum = (typeof TemplateTabScalarFieldEnum)[keyof typeof TemplateTabScalarFieldEnum]


  export const TemplateFieldScalarFieldEnum: {
    id: 'id',
    tabId: 'tabId',
    label: 'label',
    fieldKey: 'fieldKey',
    fieldType: 'fieldType',
    options: 'options',
    defaultValue: 'defaultValue',
    isActive: 'isActive',
    isRequired: 'isRequired',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateFieldScalarFieldEnum = (typeof TemplateFieldScalarFieldEnum)[keyof typeof TemplateFieldScalarFieldEnum]


  export const RequestFieldValueScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    fieldId: 'fieldId',
    value: 'value',
    createdAt: 'createdAt'
  };

  export type RequestFieldValueScalarFieldEnum = (typeof RequestFieldValueScalarFieldEnum)[keyof typeof RequestFieldValueScalarFieldEnum]


  export const CounterScalarFieldEnum: {
    id: 'id',
    value: 'value'
  };

  export type CounterScalarFieldEnum = (typeof CounterScalarFieldEnum)[keyof typeof CounterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LeadSource'
   */
  export type EnumLeadSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadSource'>
    


  /**
   * Reference to a field of type 'LeadSource[]'
   */
  export type ListEnumLeadSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadSource[]'>
    


  /**
   * Reference to a field of type 'LeadStatus'
   */
  export type EnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus'>
    


  /**
   * Reference to a field of type 'LeadStatus[]'
   */
  export type ListEnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus[]'>
    


  /**
   * Reference to a field of type 'PackageType'
   */
  export type EnumPackageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackageType'>
    


  /**
   * Reference to a field of type 'PackageType[]'
   */
  export type ListEnumPackageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackageType[]'>
    


  /**
   * Reference to a field of type 'FieldType'
   */
  export type EnumFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FieldType'>
    


  /**
   * Reference to a field of type 'FieldType[]'
   */
  export type ListEnumFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FieldType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clientRegNo?: StringNullableFilter<"User"> | string | null
    designerRegNo?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    oauthProvider?: StringNullableFilter<"User"> | string | null
    oauthId?: StringNullableFilter<"User"> | string | null
    address?: JsonNullableFilter<"User">
    occupation?: StringNullableFilter<"User"> | string | null
    education?: StringNullableFilter<"User"> | string | null
    projectCount?: IntFilter<"User"> | number
    totalRevenue?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    rating?: FloatFilter<"User"> | number
    isBlocked?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    leads?: LeadListRelationFilter
    assignedLeads?: LeadListRelationFilter
    createdDeliverables?: DeliverableListRelationFilter
    templates?: TemplateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clientRegNo?: SortOrderInput | SortOrder
    designerRegNo?: SortOrderInput | SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    oauthProvider?: SortOrderInput | SortOrder
    oauthId?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    projectCount?: SortOrder
    totalRevenue?: SortOrder
    rating?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    leads?: LeadOrderByRelationAggregateInput
    assignedLeads?: LeadOrderByRelationAggregateInput
    createdDeliverables?: DeliverableOrderByRelationAggregateInput
    templates?: TemplateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clientRegNo?: string
    designerRegNo?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    oauthProvider?: StringNullableFilter<"User"> | string | null
    oauthId?: StringNullableFilter<"User"> | string | null
    address?: JsonNullableFilter<"User">
    occupation?: StringNullableFilter<"User"> | string | null
    education?: StringNullableFilter<"User"> | string | null
    projectCount?: IntFilter<"User"> | number
    totalRevenue?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    rating?: FloatFilter<"User"> | number
    isBlocked?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    leads?: LeadListRelationFilter
    assignedLeads?: LeadListRelationFilter
    createdDeliverables?: DeliverableListRelationFilter
    templates?: TemplateListRelationFilter
  }, "id" | "clientRegNo" | "designerRegNo" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clientRegNo?: SortOrderInput | SortOrder
    designerRegNo?: SortOrderInput | SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    oauthProvider?: SortOrderInput | SortOrder
    oauthId?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    projectCount?: SortOrder
    totalRevenue?: SortOrder
    rating?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clientRegNo?: StringNullableWithAggregatesFilter<"User"> | string | null
    designerRegNo?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    oauthProvider?: StringNullableWithAggregatesFilter<"User"> | string | null
    oauthId?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: JsonNullableWithAggregatesFilter<"User">
    occupation?: StringNullableWithAggregatesFilter<"User"> | string | null
    education?: StringNullableWithAggregatesFilter<"User"> | string | null
    projectCount?: IntWithAggregatesFilter<"User"> | number
    totalRevenue?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    rating?: FloatWithAggregatesFilter<"User"> | number
    isBlocked?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: StringFilter<"Lead"> | string
    leadRegNo?: StringFilter<"Lead"> | string
    name?: StringFilter<"Lead"> | string
    email?: StringFilter<"Lead"> | string
    phone?: StringFilter<"Lead"> | string
    location?: StringNullableFilter<"Lead"> | string | null
    source?: EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    projectsInterestedIn?: StringNullableListFilter<"Lead">
    packageType?: EnumPackageTypeNullableFilter<"Lead"> | $Enums.PackageType | null
    clientId?: StringNullableFilter<"Lead"> | string | null
    assignedDesignerId?: StringNullableFilter<"Lead"> | string | null
    assignedAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    convertedAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    client?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assignedDesigner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    leadRegNo?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrderInput | SortOrder
    source?: SortOrder
    status?: SortOrder
    projectsInterestedIn?: SortOrder
    packageType?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    assignedDesignerId?: SortOrderInput | SortOrder
    assignedAt?: SortOrderInput | SortOrder
    convertedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: UserOrderByWithRelationInput
    assignedDesigner?: UserOrderByWithRelationInput
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    leadRegNo?: string
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    name?: StringFilter<"Lead"> | string
    email?: StringFilter<"Lead"> | string
    phone?: StringFilter<"Lead"> | string
    location?: StringNullableFilter<"Lead"> | string | null
    source?: EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    projectsInterestedIn?: StringNullableListFilter<"Lead">
    packageType?: EnumPackageTypeNullableFilter<"Lead"> | $Enums.PackageType | null
    clientId?: StringNullableFilter<"Lead"> | string | null
    assignedDesignerId?: StringNullableFilter<"Lead"> | string | null
    assignedAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    convertedAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    client?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assignedDesigner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "leadRegNo">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    leadRegNo?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrderInput | SortOrder
    source?: SortOrder
    status?: SortOrder
    projectsInterestedIn?: SortOrder
    packageType?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    assignedDesignerId?: SortOrderInput | SortOrder
    assignedAt?: SortOrderInput | SortOrder
    convertedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lead"> | string
    leadRegNo?: StringWithAggregatesFilter<"Lead"> | string
    name?: StringWithAggregatesFilter<"Lead"> | string
    email?: StringWithAggregatesFilter<"Lead"> | string
    phone?: StringWithAggregatesFilter<"Lead"> | string
    location?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    source?: EnumLeadSourceWithAggregatesFilter<"Lead"> | $Enums.LeadSource
    status?: EnumLeadStatusWithAggregatesFilter<"Lead"> | $Enums.LeadStatus
    projectsInterestedIn?: StringNullableListFilter<"Lead">
    packageType?: EnumPackageTypeNullableWithAggregatesFilter<"Lead"> | $Enums.PackageType | null
    clientId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    assignedDesignerId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    assignedAt?: DateTimeNullableWithAggregatesFilter<"Lead"> | Date | string | null
    convertedAt?: DateTimeNullableWithAggregatesFilter<"Lead"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
  }

  export type DeliverableWhereInput = {
    AND?: DeliverableWhereInput | DeliverableWhereInput[]
    OR?: DeliverableWhereInput[]
    NOT?: DeliverableWhereInput | DeliverableWhereInput[]
    id?: StringFilter<"Deliverable"> | string
    name?: StringFilter<"Deliverable"> | string
    description?: StringFilter<"Deliverable"> | string
    icon?: StringFilter<"Deliverable"> | string
    isActive?: BoolFilter<"Deliverable"> | boolean
    createdById?: StringFilter<"Deliverable"> | string
    deletedAt?: DateTimeNullableFilter<"Deliverable"> | Date | string | null
    createdAt?: DateTimeFilter<"Deliverable"> | Date | string
    updatedAt?: DateTimeFilter<"Deliverable"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    templates?: TemplateListRelationFilter
  }

  export type DeliverableOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    templates?: TemplateOrderByRelationAggregateInput
  }

  export type DeliverableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DeliverableWhereInput | DeliverableWhereInput[]
    OR?: DeliverableWhereInput[]
    NOT?: DeliverableWhereInput | DeliverableWhereInput[]
    description?: StringFilter<"Deliverable"> | string
    icon?: StringFilter<"Deliverable"> | string
    isActive?: BoolFilter<"Deliverable"> | boolean
    createdById?: StringFilter<"Deliverable"> | string
    deletedAt?: DateTimeNullableFilter<"Deliverable"> | Date | string | null
    createdAt?: DateTimeFilter<"Deliverable"> | Date | string
    updatedAt?: DateTimeFilter<"Deliverable"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    templates?: TemplateListRelationFilter
  }, "id" | "name">

  export type DeliverableOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeliverableCountOrderByAggregateInput
    _max?: DeliverableMaxOrderByAggregateInput
    _min?: DeliverableMinOrderByAggregateInput
  }

  export type DeliverableScalarWhereWithAggregatesInput = {
    AND?: DeliverableScalarWhereWithAggregatesInput | DeliverableScalarWhereWithAggregatesInput[]
    OR?: DeliverableScalarWhereWithAggregatesInput[]
    NOT?: DeliverableScalarWhereWithAggregatesInput | DeliverableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deliverable"> | string
    name?: StringWithAggregatesFilter<"Deliverable"> | string
    description?: StringWithAggregatesFilter<"Deliverable"> | string
    icon?: StringWithAggregatesFilter<"Deliverable"> | string
    isActive?: BoolWithAggregatesFilter<"Deliverable"> | boolean
    createdById?: StringWithAggregatesFilter<"Deliverable"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Deliverable"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Deliverable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deliverable"> | Date | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<"Template"> | string
    deliverableId?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    description?: StringFilter<"Template"> | string
    isActive?: BoolFilter<"Template"> | boolean
    createdById?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Template"> | Date | string | null
    deliverable?: XOR<DeliverableScalarRelationFilter, DeliverableWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    tabs?: TemplateTabListRelationFilter
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    deliverableId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deliverable?: DeliverableOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    tabs?: TemplateTabOrderByRelationAggregateInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    deliverableId_name?: TemplateDeliverableIdNameCompoundUniqueInput
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    deliverableId?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    description?: StringFilter<"Template"> | string
    isActive?: BoolFilter<"Template"> | boolean
    createdById?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Template"> | Date | string | null
    deliverable?: XOR<DeliverableScalarRelationFilter, DeliverableWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    tabs?: TemplateTabListRelationFilter
  }, "id" | "deliverableId_name">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    deliverableId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Template"> | string
    deliverableId?: StringWithAggregatesFilter<"Template"> | string
    name?: StringWithAggregatesFilter<"Template"> | string
    description?: StringWithAggregatesFilter<"Template"> | string
    isActive?: BoolWithAggregatesFilter<"Template"> | boolean
    createdById?: StringWithAggregatesFilter<"Template"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Template"> | Date | string | null
  }

  export type TemplateTabWhereInput = {
    AND?: TemplateTabWhereInput | TemplateTabWhereInput[]
    OR?: TemplateTabWhereInput[]
    NOT?: TemplateTabWhereInput | TemplateTabWhereInput[]
    id?: StringFilter<"TemplateTab"> | string
    templateId?: StringFilter<"TemplateTab"> | string
    name?: StringFilter<"TemplateTab"> | string
    displayOrder?: IntFilter<"TemplateTab"> | number
    isActive?: BoolFilter<"TemplateTab"> | boolean
    createdAt?: DateTimeFilter<"TemplateTab"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateTab"> | Date | string
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
    fields?: TemplateFieldListRelationFilter
  }

  export type TemplateTabOrderByWithRelationInput = {
    id?: SortOrder
    templateId?: SortOrder
    name?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    template?: TemplateOrderByWithRelationInput
    fields?: TemplateFieldOrderByRelationAggregateInput
  }

  export type TemplateTabWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    templateId_name?: TemplateTabTemplateIdNameCompoundUniqueInput
    AND?: TemplateTabWhereInput | TemplateTabWhereInput[]
    OR?: TemplateTabWhereInput[]
    NOT?: TemplateTabWhereInput | TemplateTabWhereInput[]
    templateId?: StringFilter<"TemplateTab"> | string
    name?: StringFilter<"TemplateTab"> | string
    displayOrder?: IntFilter<"TemplateTab"> | number
    isActive?: BoolFilter<"TemplateTab"> | boolean
    createdAt?: DateTimeFilter<"TemplateTab"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateTab"> | Date | string
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
    fields?: TemplateFieldListRelationFilter
  }, "id" | "templateId_name">

  export type TemplateTabOrderByWithAggregationInput = {
    id?: SortOrder
    templateId?: SortOrder
    name?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateTabCountOrderByAggregateInput
    _avg?: TemplateTabAvgOrderByAggregateInput
    _max?: TemplateTabMaxOrderByAggregateInput
    _min?: TemplateTabMinOrderByAggregateInput
    _sum?: TemplateTabSumOrderByAggregateInput
  }

  export type TemplateTabScalarWhereWithAggregatesInput = {
    AND?: TemplateTabScalarWhereWithAggregatesInput | TemplateTabScalarWhereWithAggregatesInput[]
    OR?: TemplateTabScalarWhereWithAggregatesInput[]
    NOT?: TemplateTabScalarWhereWithAggregatesInput | TemplateTabScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TemplateTab"> | string
    templateId?: StringWithAggregatesFilter<"TemplateTab"> | string
    name?: StringWithAggregatesFilter<"TemplateTab"> | string
    displayOrder?: IntWithAggregatesFilter<"TemplateTab"> | number
    isActive?: BoolWithAggregatesFilter<"TemplateTab"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TemplateTab"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TemplateTab"> | Date | string
  }

  export type TemplateFieldWhereInput = {
    AND?: TemplateFieldWhereInput | TemplateFieldWhereInput[]
    OR?: TemplateFieldWhereInput[]
    NOT?: TemplateFieldWhereInput | TemplateFieldWhereInput[]
    id?: StringFilter<"TemplateField"> | string
    tabId?: StringFilter<"TemplateField"> | string
    label?: StringFilter<"TemplateField"> | string
    fieldKey?: StringFilter<"TemplateField"> | string
    fieldType?: EnumFieldTypeFilter<"TemplateField"> | $Enums.FieldType
    options?: StringNullableListFilter<"TemplateField">
    defaultValue?: StringNullableFilter<"TemplateField"> | string | null
    isActive?: BoolFilter<"TemplateField"> | boolean
    isRequired?: BoolFilter<"TemplateField"> | boolean
    createdAt?: DateTimeFilter<"TemplateField"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateField"> | Date | string
    tab?: XOR<TemplateTabScalarRelationFilter, TemplateTabWhereInput>
    requestValues?: RequestFieldValueListRelationFilter
  }

  export type TemplateFieldOrderByWithRelationInput = {
    id?: SortOrder
    tabId?: SortOrder
    label?: SortOrder
    fieldKey?: SortOrder
    fieldType?: SortOrder
    options?: SortOrder
    defaultValue?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tab?: TemplateTabOrderByWithRelationInput
    requestValues?: RequestFieldValueOrderByRelationAggregateInput
  }

  export type TemplateFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tabId_label?: TemplateFieldTabIdLabelCompoundUniqueInput
    tabId_fieldKey?: TemplateFieldTabIdFieldKeyCompoundUniqueInput
    AND?: TemplateFieldWhereInput | TemplateFieldWhereInput[]
    OR?: TemplateFieldWhereInput[]
    NOT?: TemplateFieldWhereInput | TemplateFieldWhereInput[]
    tabId?: StringFilter<"TemplateField"> | string
    label?: StringFilter<"TemplateField"> | string
    fieldKey?: StringFilter<"TemplateField"> | string
    fieldType?: EnumFieldTypeFilter<"TemplateField"> | $Enums.FieldType
    options?: StringNullableListFilter<"TemplateField">
    defaultValue?: StringNullableFilter<"TemplateField"> | string | null
    isActive?: BoolFilter<"TemplateField"> | boolean
    isRequired?: BoolFilter<"TemplateField"> | boolean
    createdAt?: DateTimeFilter<"TemplateField"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateField"> | Date | string
    tab?: XOR<TemplateTabScalarRelationFilter, TemplateTabWhereInput>
    requestValues?: RequestFieldValueListRelationFilter
  }, "id" | "tabId_label" | "tabId_fieldKey">

  export type TemplateFieldOrderByWithAggregationInput = {
    id?: SortOrder
    tabId?: SortOrder
    label?: SortOrder
    fieldKey?: SortOrder
    fieldType?: SortOrder
    options?: SortOrder
    defaultValue?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateFieldCountOrderByAggregateInput
    _max?: TemplateFieldMaxOrderByAggregateInput
    _min?: TemplateFieldMinOrderByAggregateInput
  }

  export type TemplateFieldScalarWhereWithAggregatesInput = {
    AND?: TemplateFieldScalarWhereWithAggregatesInput | TemplateFieldScalarWhereWithAggregatesInput[]
    OR?: TemplateFieldScalarWhereWithAggregatesInput[]
    NOT?: TemplateFieldScalarWhereWithAggregatesInput | TemplateFieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TemplateField"> | string
    tabId?: StringWithAggregatesFilter<"TemplateField"> | string
    label?: StringWithAggregatesFilter<"TemplateField"> | string
    fieldKey?: StringWithAggregatesFilter<"TemplateField"> | string
    fieldType?: EnumFieldTypeWithAggregatesFilter<"TemplateField"> | $Enums.FieldType
    options?: StringNullableListFilter<"TemplateField">
    defaultValue?: StringNullableWithAggregatesFilter<"TemplateField"> | string | null
    isActive?: BoolWithAggregatesFilter<"TemplateField"> | boolean
    isRequired?: BoolWithAggregatesFilter<"TemplateField"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TemplateField"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TemplateField"> | Date | string
  }

  export type RequestFieldValueWhereInput = {
    AND?: RequestFieldValueWhereInput | RequestFieldValueWhereInput[]
    OR?: RequestFieldValueWhereInput[]
    NOT?: RequestFieldValueWhereInput | RequestFieldValueWhereInput[]
    id?: StringFilter<"RequestFieldValue"> | string
    requestId?: StringFilter<"RequestFieldValue"> | string
    fieldId?: StringFilter<"RequestFieldValue"> | string
    value?: JsonFilter<"RequestFieldValue">
    createdAt?: DateTimeFilter<"RequestFieldValue"> | Date | string
    field?: XOR<TemplateFieldScalarRelationFilter, TemplateFieldWhereInput>
  }

  export type RequestFieldValueOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    fieldId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    field?: TemplateFieldOrderByWithRelationInput
  }

  export type RequestFieldValueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestFieldValueWhereInput | RequestFieldValueWhereInput[]
    OR?: RequestFieldValueWhereInput[]
    NOT?: RequestFieldValueWhereInput | RequestFieldValueWhereInput[]
    requestId?: StringFilter<"RequestFieldValue"> | string
    fieldId?: StringFilter<"RequestFieldValue"> | string
    value?: JsonFilter<"RequestFieldValue">
    createdAt?: DateTimeFilter<"RequestFieldValue"> | Date | string
    field?: XOR<TemplateFieldScalarRelationFilter, TemplateFieldWhereInput>
  }, "id">

  export type RequestFieldValueOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    fieldId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    _count?: RequestFieldValueCountOrderByAggregateInput
    _max?: RequestFieldValueMaxOrderByAggregateInput
    _min?: RequestFieldValueMinOrderByAggregateInput
  }

  export type RequestFieldValueScalarWhereWithAggregatesInput = {
    AND?: RequestFieldValueScalarWhereWithAggregatesInput | RequestFieldValueScalarWhereWithAggregatesInput[]
    OR?: RequestFieldValueScalarWhereWithAggregatesInput[]
    NOT?: RequestFieldValueScalarWhereWithAggregatesInput | RequestFieldValueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RequestFieldValue"> | string
    requestId?: StringWithAggregatesFilter<"RequestFieldValue"> | string
    fieldId?: StringWithAggregatesFilter<"RequestFieldValue"> | string
    value?: JsonWithAggregatesFilter<"RequestFieldValue">
    createdAt?: DateTimeWithAggregatesFilter<"RequestFieldValue"> | Date | string
  }

  export type CounterWhereInput = {
    AND?: CounterWhereInput | CounterWhereInput[]
    OR?: CounterWhereInput[]
    NOT?: CounterWhereInput | CounterWhereInput[]
    id?: StringFilter<"Counter"> | string
    value?: IntFilter<"Counter"> | number
  }

  export type CounterOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type CounterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CounterWhereInput | CounterWhereInput[]
    OR?: CounterWhereInput[]
    NOT?: CounterWhereInput | CounterWhereInput[]
    value?: IntFilter<"Counter"> | number
  }, "id">

  export type CounterOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    _count?: CounterCountOrderByAggregateInput
    _avg?: CounterAvgOrderByAggregateInput
    _max?: CounterMaxOrderByAggregateInput
    _min?: CounterMinOrderByAggregateInput
    _sum?: CounterSumOrderByAggregateInput
  }

  export type CounterScalarWhereWithAggregatesInput = {
    AND?: CounterScalarWhereWithAggregatesInput | CounterScalarWhereWithAggregatesInput[]
    OR?: CounterScalarWhereWithAggregatesInput[]
    NOT?: CounterScalarWhereWithAggregatesInput | CounterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Counter"> | string
    value?: IntWithAggregatesFilter<"Counter"> | number
  }

  export type UserCreateInput = {
    id?: string
    clientRegNo?: string | null
    designerRegNo?: string | null
    role: $Enums.Role
    firstName: string
    lastName: string
    email: string
    phone: string
    avatar?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    oauthProvider?: string | null
    oauthId?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: string | null
    education?: string | null
    projectCount?: number
    totalRevenue?: Decimal | DecimalJsLike | number | string
    rating?: number
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutClientInput
    assignedLeads?: LeadCreateNestedManyWithoutAssignedDesignerInput
    createdDeliverables?: DeliverableCreateNestedManyWithoutCreatedByInput
    templates?: TemplateCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clientRegNo?: string | null
    designerRegNo?: string | null
    role: $Enums.Role
    firstName: string
    lastName: string
    email: string
    phone: string
    avatar?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    oauthProvider?: string | null
    oauthId?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: string | null
    education?: string | null
    projectCount?: number
    totalRevenue?: Decimal | DecimalJsLike | number | string
    rating?: number
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutClientInput
    assignedLeads?: LeadUncheckedCreateNestedManyWithoutAssignedDesignerInput
    createdDeliverables?: DeliverableUncheckedCreateNestedManyWithoutCreatedByInput
    templates?: TemplateUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    designerRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    projectCount?: IntFieldUpdateOperationsInput | number
    totalRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: FloatFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutClientNestedInput
    assignedLeads?: LeadUpdateManyWithoutAssignedDesignerNestedInput
    createdDeliverables?: DeliverableUpdateManyWithoutCreatedByNestedInput
    templates?: TemplateUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    designerRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    projectCount?: IntFieldUpdateOperationsInput | number
    totalRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: FloatFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutClientNestedInput
    assignedLeads?: LeadUncheckedUpdateManyWithoutAssignedDesignerNestedInput
    createdDeliverables?: DeliverableUncheckedUpdateManyWithoutCreatedByNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clientRegNo?: string | null
    designerRegNo?: string | null
    role: $Enums.Role
    firstName: string
    lastName: string
    email: string
    phone: string
    avatar?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    oauthProvider?: string | null
    oauthId?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: string | null
    education?: string | null
    projectCount?: number
    totalRevenue?: Decimal | DecimalJsLike | number | string
    rating?: number
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    designerRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    projectCount?: IntFieldUpdateOperationsInput | number
    totalRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: FloatFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    designerRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    projectCount?: IntFieldUpdateOperationsInput | number
    totalRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: FloatFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateInput = {
    id?: string
    leadRegNo: string
    name: string
    email: string
    phone: string
    location?: string | null
    source: $Enums.LeadSource
    status: $Enums.LeadStatus
    projectsInterestedIn?: LeadCreateprojectsInterestedInInput | string[]
    packageType?: $Enums.PackageType | null
    assignedAt?: Date | string | null
    convertedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: UserCreateNestedOneWithoutLeadsInput
    assignedDesigner?: UserCreateNestedOneWithoutAssignedLeadsInput
  }

  export type LeadUncheckedCreateInput = {
    id?: string
    leadRegNo: string
    name: string
    email: string
    phone: string
    location?: string | null
    source: $Enums.LeadSource
    status: $Enums.LeadStatus
    projectsInterestedIn?: LeadCreateprojectsInterestedInInput | string[]
    packageType?: $Enums.PackageType | null
    clientId?: string | null
    assignedDesignerId?: string | null
    assignedAt?: Date | string | null
    convertedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadRegNo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    projectsInterestedIn?: LeadUpdateprojectsInterestedInInput | string[]
    packageType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    convertedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutLeadsNestedInput
    assignedDesigner?: UserUpdateOneWithoutAssignedLeadsNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadRegNo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    projectsInterestedIn?: LeadUpdateprojectsInterestedInInput | string[]
    packageType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedDesignerId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    convertedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateManyInput = {
    id?: string
    leadRegNo: string
    name: string
    email: string
    phone: string
    location?: string | null
    source: $Enums.LeadSource
    status: $Enums.LeadStatus
    projectsInterestedIn?: LeadCreateprojectsInterestedInInput | string[]
    packageType?: $Enums.PackageType | null
    clientId?: string | null
    assignedDesignerId?: string | null
    assignedAt?: Date | string | null
    convertedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadRegNo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    projectsInterestedIn?: LeadUpdateprojectsInterestedInInput | string[]
    packageType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    convertedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadRegNo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    projectsInterestedIn?: LeadUpdateprojectsInterestedInInput | string[]
    packageType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedDesignerId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    convertedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliverableCreateInput = {
    id?: string
    name: string
    description: string
    icon: string
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedDeliverablesInput
    templates?: TemplateCreateNestedManyWithoutDeliverableInput
  }

  export type DeliverableUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    icon: string
    isActive?: boolean
    createdById: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    templates?: TemplateUncheckedCreateNestedManyWithoutDeliverableInput
  }

  export type DeliverableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedDeliverablesNestedInput
    templates?: TemplateUpdateManyWithoutDeliverableNestedInput
  }

  export type DeliverableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUncheckedUpdateManyWithoutDeliverableNestedInput
  }

  export type DeliverableCreateManyInput = {
    id?: string
    name: string
    description: string
    icon: string
    isActive?: boolean
    createdById: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliverableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliverableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateInput = {
    id?: string
    name: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deliverable: DeliverableCreateNestedOneWithoutTemplatesInput
    createdBy: UserCreateNestedOneWithoutTemplatesInput
    tabs?: TemplateTabCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    deliverableId: string
    name: string
    description: string
    isActive?: boolean
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tabs?: TemplateTabUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverable?: DeliverableUpdateOneRequiredWithoutTemplatesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTemplatesNestedInput
    tabs?: TemplateTabUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliverableId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tabs?: TemplateTabUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    id?: string
    deliverableId: string
    name: string
    description: string
    isActive?: boolean
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliverableId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TemplateTabCreateInput = {
    id?: string
    name: string
    displayOrder: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    template: TemplateCreateNestedOneWithoutTabsInput
    fields?: TemplateFieldCreateNestedManyWithoutTabInput
  }

  export type TemplateTabUncheckedCreateInput = {
    id?: string
    templateId: string
    name: string
    displayOrder: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: TemplateFieldUncheckedCreateNestedManyWithoutTabInput
  }

  export type TemplateTabUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: TemplateUpdateOneRequiredWithoutTabsNestedInput
    fields?: TemplateFieldUpdateManyWithoutTabNestedInput
  }

  export type TemplateTabUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: TemplateFieldUncheckedUpdateManyWithoutTabNestedInput
  }

  export type TemplateTabCreateManyInput = {
    id?: string
    templateId: string
    name: string
    displayOrder: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateTabUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateTabUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateFieldCreateInput = {
    id?: string
    label: string
    fieldKey: string
    fieldType: $Enums.FieldType
    options?: TemplateFieldCreateoptionsInput | string[]
    defaultValue?: string | null
    isActive?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tab: TemplateTabCreateNestedOneWithoutFieldsInput
    requestValues?: RequestFieldValueCreateNestedManyWithoutFieldInput
  }

  export type TemplateFieldUncheckedCreateInput = {
    id?: string
    tabId: string
    label: string
    fieldKey: string
    fieldType: $Enums.FieldType
    options?: TemplateFieldCreateoptionsInput | string[]
    defaultValue?: string | null
    isActive?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    requestValues?: RequestFieldValueUncheckedCreateNestedManyWithoutFieldInput
  }

  export type TemplateFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldKey?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    options?: TemplateFieldUpdateoptionsInput | string[]
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tab?: TemplateTabUpdateOneRequiredWithoutFieldsNestedInput
    requestValues?: RequestFieldValueUpdateManyWithoutFieldNestedInput
  }

  export type TemplateFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldKey?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    options?: TemplateFieldUpdateoptionsInput | string[]
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestValues?: RequestFieldValueUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type TemplateFieldCreateManyInput = {
    id?: string
    tabId: string
    label: string
    fieldKey: string
    fieldType: $Enums.FieldType
    options?: TemplateFieldCreateoptionsInput | string[]
    defaultValue?: string | null
    isActive?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldKey?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    options?: TemplateFieldUpdateoptionsInput | string[]
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldKey?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    options?: TemplateFieldUpdateoptionsInput | string[]
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestFieldValueCreateInput = {
    id?: string
    requestId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    field: TemplateFieldCreateNestedOneWithoutRequestValuesInput
  }

  export type RequestFieldValueUncheckedCreateInput = {
    id?: string
    requestId: string
    fieldId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RequestFieldValueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: TemplateFieldUpdateOneRequiredWithoutRequestValuesNestedInput
  }

  export type RequestFieldValueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestFieldValueCreateManyInput = {
    id?: string
    requestId: string
    fieldId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RequestFieldValueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestFieldValueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CounterCreateInput = {
    id: string
    value: number
  }

  export type CounterUncheckedCreateInput = {
    id: string
    value: number
  }

  export type CounterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type CounterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type CounterCreateManyInput = {
    id: string
    value: number
  }

  export type CounterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type CounterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LeadListRelationFilter = {
    every?: LeadWhereInput
    some?: LeadWhereInput
    none?: LeadWhereInput
  }

  export type DeliverableListRelationFilter = {
    every?: DeliverableWhereInput
    some?: DeliverableWhereInput
    none?: DeliverableWhereInput
  }

  export type TemplateListRelationFilter = {
    every?: TemplateWhereInput
    some?: TemplateWhereInput
    none?: TemplateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeliverableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clientRegNo?: SortOrder
    designerRegNo?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    passwordHash?: SortOrder
    isVerified?: SortOrder
    oauthProvider?: SortOrder
    oauthId?: SortOrder
    address?: SortOrder
    occupation?: SortOrder
    education?: SortOrder
    projectCount?: SortOrder
    totalRevenue?: SortOrder
    rating?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    projectCount?: SortOrder
    totalRevenue?: SortOrder
    rating?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clientRegNo?: SortOrder
    designerRegNo?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    passwordHash?: SortOrder
    isVerified?: SortOrder
    oauthProvider?: SortOrder
    oauthId?: SortOrder
    occupation?: SortOrder
    education?: SortOrder
    projectCount?: SortOrder
    totalRevenue?: SortOrder
    rating?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clientRegNo?: SortOrder
    designerRegNo?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    passwordHash?: SortOrder
    isVerified?: SortOrder
    oauthProvider?: SortOrder
    oauthId?: SortOrder
    occupation?: SortOrder
    education?: SortOrder
    projectCount?: SortOrder
    totalRevenue?: SortOrder
    rating?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    projectCount?: SortOrder
    totalRevenue?: SortOrder
    rating?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumLeadSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadSourceFilter<$PrismaModel> | $Enums.LeadSource
  }

  export type EnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPackageTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageType | EnumPackageTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PackageType[] | ListEnumPackageTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PackageType[] | ListEnumPackageTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPackageTypeNullableFilter<$PrismaModel> | $Enums.PackageType | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    leadRegNo?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    source?: SortOrder
    status?: SortOrder
    projectsInterestedIn?: SortOrder
    packageType?: SortOrder
    clientId?: SortOrder
    assignedDesignerId?: SortOrder
    assignedAt?: SortOrder
    convertedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    leadRegNo?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    source?: SortOrder
    status?: SortOrder
    packageType?: SortOrder
    clientId?: SortOrder
    assignedDesignerId?: SortOrder
    assignedAt?: SortOrder
    convertedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    leadRegNo?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    source?: SortOrder
    status?: SortOrder
    packageType?: SortOrder
    clientId?: SortOrder
    assignedDesignerId?: SortOrder
    assignedAt?: SortOrder
    convertedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLeadSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadSourceWithAggregatesFilter<$PrismaModel> | $Enums.LeadSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadSourceFilter<$PrismaModel>
    _max?: NestedEnumLeadSourceFilter<$PrismaModel>
  }

  export type EnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type EnumPackageTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageType | EnumPackageTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PackageType[] | ListEnumPackageTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PackageType[] | ListEnumPackageTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPackageTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.PackageType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPackageTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumPackageTypeNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DeliverableCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliverableMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliverableMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliverableScalarRelationFilter = {
    is?: DeliverableWhereInput
    isNot?: DeliverableWhereInput
  }

  export type TemplateTabListRelationFilter = {
    every?: TemplateTabWhereInput
    some?: TemplateTabWhereInput
    none?: TemplateTabWhereInput
  }

  export type TemplateTabOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateDeliverableIdNameCompoundUniqueInput = {
    deliverableId: string
    name: string
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    deliverableId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    deliverableId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    deliverableId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TemplateScalarRelationFilter = {
    is?: TemplateWhereInput
    isNot?: TemplateWhereInput
  }

  export type TemplateFieldListRelationFilter = {
    every?: TemplateFieldWhereInput
    some?: TemplateFieldWhereInput
    none?: TemplateFieldWhereInput
  }

  export type TemplateFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateTabTemplateIdNameCompoundUniqueInput = {
    templateId: string
    name: string
  }

  export type TemplateTabCountOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    name?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateTabAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type TemplateTabMaxOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    name?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateTabMinOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    name?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateTabSumOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type EnumFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeFilter<$PrismaModel> | $Enums.FieldType
  }

  export type TemplateTabScalarRelationFilter = {
    is?: TemplateTabWhereInput
    isNot?: TemplateTabWhereInput
  }

  export type RequestFieldValueListRelationFilter = {
    every?: RequestFieldValueWhereInput
    some?: RequestFieldValueWhereInput
    none?: RequestFieldValueWhereInput
  }

  export type RequestFieldValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateFieldTabIdLabelCompoundUniqueInput = {
    tabId: string
    label: string
  }

  export type TemplateFieldTabIdFieldKeyCompoundUniqueInput = {
    tabId: string
    fieldKey: string
  }

  export type TemplateFieldCountOrderByAggregateInput = {
    id?: SortOrder
    tabId?: SortOrder
    label?: SortOrder
    fieldKey?: SortOrder
    fieldType?: SortOrder
    options?: SortOrder
    defaultValue?: SortOrder
    isActive?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    tabId?: SortOrder
    label?: SortOrder
    fieldKey?: SortOrder
    fieldType?: SortOrder
    defaultValue?: SortOrder
    isActive?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateFieldMinOrderByAggregateInput = {
    id?: SortOrder
    tabId?: SortOrder
    label?: SortOrder
    fieldKey?: SortOrder
    fieldType?: SortOrder
    defaultValue?: SortOrder
    isActive?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.FieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumFieldTypeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TemplateFieldScalarRelationFilter = {
    is?: TemplateFieldWhereInput
    isNot?: TemplateFieldWhereInput
  }

  export type RequestFieldValueCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    fieldId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestFieldValueMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestFieldValueMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type CounterCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type CounterAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type CounterMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type CounterMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type CounterSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type LeadCreateNestedManyWithoutClientInput = {
    create?: XOR<LeadCreateWithoutClientInput, LeadUncheckedCreateWithoutClientInput> | LeadCreateWithoutClientInput[] | LeadUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutClientInput | LeadCreateOrConnectWithoutClientInput[]
    createMany?: LeadCreateManyClientInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type LeadCreateNestedManyWithoutAssignedDesignerInput = {
    create?: XOR<LeadCreateWithoutAssignedDesignerInput, LeadUncheckedCreateWithoutAssignedDesignerInput> | LeadCreateWithoutAssignedDesignerInput[] | LeadUncheckedCreateWithoutAssignedDesignerInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutAssignedDesignerInput | LeadCreateOrConnectWithoutAssignedDesignerInput[]
    createMany?: LeadCreateManyAssignedDesignerInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type DeliverableCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DeliverableCreateWithoutCreatedByInput, DeliverableUncheckedCreateWithoutCreatedByInput> | DeliverableCreateWithoutCreatedByInput[] | DeliverableUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DeliverableCreateOrConnectWithoutCreatedByInput | DeliverableCreateOrConnectWithoutCreatedByInput[]
    createMany?: DeliverableCreateManyCreatedByInputEnvelope
    connect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
  }

  export type TemplateCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput> | TemplateCreateWithoutCreatedByInput[] | TemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutCreatedByInput | TemplateCreateOrConnectWithoutCreatedByInput[]
    createMany?: TemplateCreateManyCreatedByInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<LeadCreateWithoutClientInput, LeadUncheckedCreateWithoutClientInput> | LeadCreateWithoutClientInput[] | LeadUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutClientInput | LeadCreateOrConnectWithoutClientInput[]
    createMany?: LeadCreateManyClientInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutAssignedDesignerInput = {
    create?: XOR<LeadCreateWithoutAssignedDesignerInput, LeadUncheckedCreateWithoutAssignedDesignerInput> | LeadCreateWithoutAssignedDesignerInput[] | LeadUncheckedCreateWithoutAssignedDesignerInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutAssignedDesignerInput | LeadCreateOrConnectWithoutAssignedDesignerInput[]
    createMany?: LeadCreateManyAssignedDesignerInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type DeliverableUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DeliverableCreateWithoutCreatedByInput, DeliverableUncheckedCreateWithoutCreatedByInput> | DeliverableCreateWithoutCreatedByInput[] | DeliverableUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DeliverableCreateOrConnectWithoutCreatedByInput | DeliverableCreateOrConnectWithoutCreatedByInput[]
    createMany?: DeliverableCreateManyCreatedByInputEnvelope
    connect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
  }

  export type TemplateUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput> | TemplateCreateWithoutCreatedByInput[] | TemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutCreatedByInput | TemplateCreateOrConnectWithoutCreatedByInput[]
    createMany?: TemplateCreateManyCreatedByInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LeadUpdateManyWithoutClientNestedInput = {
    create?: XOR<LeadCreateWithoutClientInput, LeadUncheckedCreateWithoutClientInput> | LeadCreateWithoutClientInput[] | LeadUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutClientInput | LeadCreateOrConnectWithoutClientInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutClientInput | LeadUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: LeadCreateManyClientInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutClientInput | LeadUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutClientInput | LeadUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type LeadUpdateManyWithoutAssignedDesignerNestedInput = {
    create?: XOR<LeadCreateWithoutAssignedDesignerInput, LeadUncheckedCreateWithoutAssignedDesignerInput> | LeadCreateWithoutAssignedDesignerInput[] | LeadUncheckedCreateWithoutAssignedDesignerInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutAssignedDesignerInput | LeadCreateOrConnectWithoutAssignedDesignerInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutAssignedDesignerInput | LeadUpsertWithWhereUniqueWithoutAssignedDesignerInput[]
    createMany?: LeadCreateManyAssignedDesignerInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutAssignedDesignerInput | LeadUpdateWithWhereUniqueWithoutAssignedDesignerInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutAssignedDesignerInput | LeadUpdateManyWithWhereWithoutAssignedDesignerInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type DeliverableUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DeliverableCreateWithoutCreatedByInput, DeliverableUncheckedCreateWithoutCreatedByInput> | DeliverableCreateWithoutCreatedByInput[] | DeliverableUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DeliverableCreateOrConnectWithoutCreatedByInput | DeliverableCreateOrConnectWithoutCreatedByInput[]
    upsert?: DeliverableUpsertWithWhereUniqueWithoutCreatedByInput | DeliverableUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DeliverableCreateManyCreatedByInputEnvelope
    set?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    disconnect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    delete?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    connect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    update?: DeliverableUpdateWithWhereUniqueWithoutCreatedByInput | DeliverableUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DeliverableUpdateManyWithWhereWithoutCreatedByInput | DeliverableUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DeliverableScalarWhereInput | DeliverableScalarWhereInput[]
  }

  export type TemplateUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput> | TemplateCreateWithoutCreatedByInput[] | TemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutCreatedByInput | TemplateCreateOrConnectWithoutCreatedByInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutCreatedByInput | TemplateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TemplateCreateManyCreatedByInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutCreatedByInput | TemplateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutCreatedByInput | TemplateUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<LeadCreateWithoutClientInput, LeadUncheckedCreateWithoutClientInput> | LeadCreateWithoutClientInput[] | LeadUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutClientInput | LeadCreateOrConnectWithoutClientInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutClientInput | LeadUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: LeadCreateManyClientInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutClientInput | LeadUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutClientInput | LeadUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutAssignedDesignerNestedInput = {
    create?: XOR<LeadCreateWithoutAssignedDesignerInput, LeadUncheckedCreateWithoutAssignedDesignerInput> | LeadCreateWithoutAssignedDesignerInput[] | LeadUncheckedCreateWithoutAssignedDesignerInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutAssignedDesignerInput | LeadCreateOrConnectWithoutAssignedDesignerInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutAssignedDesignerInput | LeadUpsertWithWhereUniqueWithoutAssignedDesignerInput[]
    createMany?: LeadCreateManyAssignedDesignerInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutAssignedDesignerInput | LeadUpdateWithWhereUniqueWithoutAssignedDesignerInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutAssignedDesignerInput | LeadUpdateManyWithWhereWithoutAssignedDesignerInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type DeliverableUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DeliverableCreateWithoutCreatedByInput, DeliverableUncheckedCreateWithoutCreatedByInput> | DeliverableCreateWithoutCreatedByInput[] | DeliverableUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DeliverableCreateOrConnectWithoutCreatedByInput | DeliverableCreateOrConnectWithoutCreatedByInput[]
    upsert?: DeliverableUpsertWithWhereUniqueWithoutCreatedByInput | DeliverableUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DeliverableCreateManyCreatedByInputEnvelope
    set?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    disconnect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    delete?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    connect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    update?: DeliverableUpdateWithWhereUniqueWithoutCreatedByInput | DeliverableUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DeliverableUpdateManyWithWhereWithoutCreatedByInput | DeliverableUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DeliverableScalarWhereInput | DeliverableScalarWhereInput[]
  }

  export type TemplateUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput> | TemplateCreateWithoutCreatedByInput[] | TemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutCreatedByInput | TemplateCreateOrConnectWithoutCreatedByInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutCreatedByInput | TemplateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TemplateCreateManyCreatedByInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutCreatedByInput | TemplateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutCreatedByInput | TemplateUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type LeadCreateprojectsInterestedInInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutLeadsInput = {
    create?: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeadsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedLeadsInput = {
    create?: XOR<UserCreateWithoutAssignedLeadsInput, UserUncheckedCreateWithoutAssignedLeadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedLeadsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumLeadSourceFieldUpdateOperationsInput = {
    set?: $Enums.LeadSource
  }

  export type EnumLeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadStatus
  }

  export type LeadUpdateprojectsInterestedInInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableEnumPackageTypeFieldUpdateOperationsInput = {
    set?: $Enums.PackageType | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeadsInput
    upsert?: UserUpsertWithoutLeadsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeadsInput, UserUpdateWithoutLeadsInput>, UserUncheckedUpdateWithoutLeadsInput>
  }

  export type UserUpdateOneWithoutAssignedLeadsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedLeadsInput, UserUncheckedCreateWithoutAssignedLeadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedLeadsInput
    upsert?: UserUpsertWithoutAssignedLeadsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedLeadsInput, UserUpdateWithoutAssignedLeadsInput>, UserUncheckedUpdateWithoutAssignedLeadsInput>
  }

  export type UserCreateNestedOneWithoutCreatedDeliverablesInput = {
    create?: XOR<UserCreateWithoutCreatedDeliverablesInput, UserUncheckedCreateWithoutCreatedDeliverablesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedDeliverablesInput
    connect?: UserWhereUniqueInput
  }

  export type TemplateCreateNestedManyWithoutDeliverableInput = {
    create?: XOR<TemplateCreateWithoutDeliverableInput, TemplateUncheckedCreateWithoutDeliverableInput> | TemplateCreateWithoutDeliverableInput[] | TemplateUncheckedCreateWithoutDeliverableInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutDeliverableInput | TemplateCreateOrConnectWithoutDeliverableInput[]
    createMany?: TemplateCreateManyDeliverableInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type TemplateUncheckedCreateNestedManyWithoutDeliverableInput = {
    create?: XOR<TemplateCreateWithoutDeliverableInput, TemplateUncheckedCreateWithoutDeliverableInput> | TemplateCreateWithoutDeliverableInput[] | TemplateUncheckedCreateWithoutDeliverableInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutDeliverableInput | TemplateCreateOrConnectWithoutDeliverableInput[]
    createMany?: TemplateCreateManyDeliverableInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedDeliverablesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedDeliverablesInput, UserUncheckedCreateWithoutCreatedDeliverablesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedDeliverablesInput
    upsert?: UserUpsertWithoutCreatedDeliverablesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedDeliverablesInput, UserUpdateWithoutCreatedDeliverablesInput>, UserUncheckedUpdateWithoutCreatedDeliverablesInput>
  }

  export type TemplateUpdateManyWithoutDeliverableNestedInput = {
    create?: XOR<TemplateCreateWithoutDeliverableInput, TemplateUncheckedCreateWithoutDeliverableInput> | TemplateCreateWithoutDeliverableInput[] | TemplateUncheckedCreateWithoutDeliverableInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutDeliverableInput | TemplateCreateOrConnectWithoutDeliverableInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutDeliverableInput | TemplateUpsertWithWhereUniqueWithoutDeliverableInput[]
    createMany?: TemplateCreateManyDeliverableInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutDeliverableInput | TemplateUpdateWithWhereUniqueWithoutDeliverableInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutDeliverableInput | TemplateUpdateManyWithWhereWithoutDeliverableInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type TemplateUncheckedUpdateManyWithoutDeliverableNestedInput = {
    create?: XOR<TemplateCreateWithoutDeliverableInput, TemplateUncheckedCreateWithoutDeliverableInput> | TemplateCreateWithoutDeliverableInput[] | TemplateUncheckedCreateWithoutDeliverableInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutDeliverableInput | TemplateCreateOrConnectWithoutDeliverableInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutDeliverableInput | TemplateUpsertWithWhereUniqueWithoutDeliverableInput[]
    createMany?: TemplateCreateManyDeliverableInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutDeliverableInput | TemplateUpdateWithWhereUniqueWithoutDeliverableInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutDeliverableInput | TemplateUpdateManyWithWhereWithoutDeliverableInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type DeliverableCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<DeliverableCreateWithoutTemplatesInput, DeliverableUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: DeliverableCreateOrConnectWithoutTemplatesInput
    connect?: DeliverableWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type TemplateTabCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateTabCreateWithoutTemplateInput, TemplateTabUncheckedCreateWithoutTemplateInput> | TemplateTabCreateWithoutTemplateInput[] | TemplateTabUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateTabCreateOrConnectWithoutTemplateInput | TemplateTabCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateTabCreateManyTemplateInputEnvelope
    connect?: TemplateTabWhereUniqueInput | TemplateTabWhereUniqueInput[]
  }

  export type TemplateTabUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateTabCreateWithoutTemplateInput, TemplateTabUncheckedCreateWithoutTemplateInput> | TemplateTabCreateWithoutTemplateInput[] | TemplateTabUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateTabCreateOrConnectWithoutTemplateInput | TemplateTabCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateTabCreateManyTemplateInputEnvelope
    connect?: TemplateTabWhereUniqueInput | TemplateTabWhereUniqueInput[]
  }

  export type DeliverableUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<DeliverableCreateWithoutTemplatesInput, DeliverableUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: DeliverableCreateOrConnectWithoutTemplatesInput
    upsert?: DeliverableUpsertWithoutTemplatesInput
    connect?: DeliverableWhereUniqueInput
    update?: XOR<XOR<DeliverableUpdateToOneWithWhereWithoutTemplatesInput, DeliverableUpdateWithoutTemplatesInput>, DeliverableUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    upsert?: UserUpsertWithoutTemplatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTemplatesInput, UserUpdateWithoutTemplatesInput>, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type TemplateTabUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateTabCreateWithoutTemplateInput, TemplateTabUncheckedCreateWithoutTemplateInput> | TemplateTabCreateWithoutTemplateInput[] | TemplateTabUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateTabCreateOrConnectWithoutTemplateInput | TemplateTabCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateTabUpsertWithWhereUniqueWithoutTemplateInput | TemplateTabUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateTabCreateManyTemplateInputEnvelope
    set?: TemplateTabWhereUniqueInput | TemplateTabWhereUniqueInput[]
    disconnect?: TemplateTabWhereUniqueInput | TemplateTabWhereUniqueInput[]
    delete?: TemplateTabWhereUniqueInput | TemplateTabWhereUniqueInput[]
    connect?: TemplateTabWhereUniqueInput | TemplateTabWhereUniqueInput[]
    update?: TemplateTabUpdateWithWhereUniqueWithoutTemplateInput | TemplateTabUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateTabUpdateManyWithWhereWithoutTemplateInput | TemplateTabUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateTabScalarWhereInput | TemplateTabScalarWhereInput[]
  }

  export type TemplateTabUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateTabCreateWithoutTemplateInput, TemplateTabUncheckedCreateWithoutTemplateInput> | TemplateTabCreateWithoutTemplateInput[] | TemplateTabUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateTabCreateOrConnectWithoutTemplateInput | TemplateTabCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateTabUpsertWithWhereUniqueWithoutTemplateInput | TemplateTabUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateTabCreateManyTemplateInputEnvelope
    set?: TemplateTabWhereUniqueInput | TemplateTabWhereUniqueInput[]
    disconnect?: TemplateTabWhereUniqueInput | TemplateTabWhereUniqueInput[]
    delete?: TemplateTabWhereUniqueInput | TemplateTabWhereUniqueInput[]
    connect?: TemplateTabWhereUniqueInput | TemplateTabWhereUniqueInput[]
    update?: TemplateTabUpdateWithWhereUniqueWithoutTemplateInput | TemplateTabUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateTabUpdateManyWithWhereWithoutTemplateInput | TemplateTabUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateTabScalarWhereInput | TemplateTabScalarWhereInput[]
  }

  export type TemplateCreateNestedOneWithoutTabsInput = {
    create?: XOR<TemplateCreateWithoutTabsInput, TemplateUncheckedCreateWithoutTabsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutTabsInput
    connect?: TemplateWhereUniqueInput
  }

  export type TemplateFieldCreateNestedManyWithoutTabInput = {
    create?: XOR<TemplateFieldCreateWithoutTabInput, TemplateFieldUncheckedCreateWithoutTabInput> | TemplateFieldCreateWithoutTabInput[] | TemplateFieldUncheckedCreateWithoutTabInput[]
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutTabInput | TemplateFieldCreateOrConnectWithoutTabInput[]
    createMany?: TemplateFieldCreateManyTabInputEnvelope
    connect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
  }

  export type TemplateFieldUncheckedCreateNestedManyWithoutTabInput = {
    create?: XOR<TemplateFieldCreateWithoutTabInput, TemplateFieldUncheckedCreateWithoutTabInput> | TemplateFieldCreateWithoutTabInput[] | TemplateFieldUncheckedCreateWithoutTabInput[]
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutTabInput | TemplateFieldCreateOrConnectWithoutTabInput[]
    createMany?: TemplateFieldCreateManyTabInputEnvelope
    connect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
  }

  export type TemplateUpdateOneRequiredWithoutTabsNestedInput = {
    create?: XOR<TemplateCreateWithoutTabsInput, TemplateUncheckedCreateWithoutTabsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutTabsInput
    upsert?: TemplateUpsertWithoutTabsInput
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutTabsInput, TemplateUpdateWithoutTabsInput>, TemplateUncheckedUpdateWithoutTabsInput>
  }

  export type TemplateFieldUpdateManyWithoutTabNestedInput = {
    create?: XOR<TemplateFieldCreateWithoutTabInput, TemplateFieldUncheckedCreateWithoutTabInput> | TemplateFieldCreateWithoutTabInput[] | TemplateFieldUncheckedCreateWithoutTabInput[]
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutTabInput | TemplateFieldCreateOrConnectWithoutTabInput[]
    upsert?: TemplateFieldUpsertWithWhereUniqueWithoutTabInput | TemplateFieldUpsertWithWhereUniqueWithoutTabInput[]
    createMany?: TemplateFieldCreateManyTabInputEnvelope
    set?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    disconnect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    delete?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    connect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    update?: TemplateFieldUpdateWithWhereUniqueWithoutTabInput | TemplateFieldUpdateWithWhereUniqueWithoutTabInput[]
    updateMany?: TemplateFieldUpdateManyWithWhereWithoutTabInput | TemplateFieldUpdateManyWithWhereWithoutTabInput[]
    deleteMany?: TemplateFieldScalarWhereInput | TemplateFieldScalarWhereInput[]
  }

  export type TemplateFieldUncheckedUpdateManyWithoutTabNestedInput = {
    create?: XOR<TemplateFieldCreateWithoutTabInput, TemplateFieldUncheckedCreateWithoutTabInput> | TemplateFieldCreateWithoutTabInput[] | TemplateFieldUncheckedCreateWithoutTabInput[]
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutTabInput | TemplateFieldCreateOrConnectWithoutTabInput[]
    upsert?: TemplateFieldUpsertWithWhereUniqueWithoutTabInput | TemplateFieldUpsertWithWhereUniqueWithoutTabInput[]
    createMany?: TemplateFieldCreateManyTabInputEnvelope
    set?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    disconnect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    delete?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    connect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    update?: TemplateFieldUpdateWithWhereUniqueWithoutTabInput | TemplateFieldUpdateWithWhereUniqueWithoutTabInput[]
    updateMany?: TemplateFieldUpdateManyWithWhereWithoutTabInput | TemplateFieldUpdateManyWithWhereWithoutTabInput[]
    deleteMany?: TemplateFieldScalarWhereInput | TemplateFieldScalarWhereInput[]
  }

  export type TemplateFieldCreateoptionsInput = {
    set: string[]
  }

  export type TemplateTabCreateNestedOneWithoutFieldsInput = {
    create?: XOR<TemplateTabCreateWithoutFieldsInput, TemplateTabUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: TemplateTabCreateOrConnectWithoutFieldsInput
    connect?: TemplateTabWhereUniqueInput
  }

  export type RequestFieldValueCreateNestedManyWithoutFieldInput = {
    create?: XOR<RequestFieldValueCreateWithoutFieldInput, RequestFieldValueUncheckedCreateWithoutFieldInput> | RequestFieldValueCreateWithoutFieldInput[] | RequestFieldValueUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: RequestFieldValueCreateOrConnectWithoutFieldInput | RequestFieldValueCreateOrConnectWithoutFieldInput[]
    createMany?: RequestFieldValueCreateManyFieldInputEnvelope
    connect?: RequestFieldValueWhereUniqueInput | RequestFieldValueWhereUniqueInput[]
  }

  export type RequestFieldValueUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<RequestFieldValueCreateWithoutFieldInput, RequestFieldValueUncheckedCreateWithoutFieldInput> | RequestFieldValueCreateWithoutFieldInput[] | RequestFieldValueUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: RequestFieldValueCreateOrConnectWithoutFieldInput | RequestFieldValueCreateOrConnectWithoutFieldInput[]
    createMany?: RequestFieldValueCreateManyFieldInputEnvelope
    connect?: RequestFieldValueWhereUniqueInput | RequestFieldValueWhereUniqueInput[]
  }

  export type EnumFieldTypeFieldUpdateOperationsInput = {
    set?: $Enums.FieldType
  }

  export type TemplateFieldUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TemplateTabUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: XOR<TemplateTabCreateWithoutFieldsInput, TemplateTabUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: TemplateTabCreateOrConnectWithoutFieldsInput
    upsert?: TemplateTabUpsertWithoutFieldsInput
    connect?: TemplateTabWhereUniqueInput
    update?: XOR<XOR<TemplateTabUpdateToOneWithWhereWithoutFieldsInput, TemplateTabUpdateWithoutFieldsInput>, TemplateTabUncheckedUpdateWithoutFieldsInput>
  }

  export type RequestFieldValueUpdateManyWithoutFieldNestedInput = {
    create?: XOR<RequestFieldValueCreateWithoutFieldInput, RequestFieldValueUncheckedCreateWithoutFieldInput> | RequestFieldValueCreateWithoutFieldInput[] | RequestFieldValueUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: RequestFieldValueCreateOrConnectWithoutFieldInput | RequestFieldValueCreateOrConnectWithoutFieldInput[]
    upsert?: RequestFieldValueUpsertWithWhereUniqueWithoutFieldInput | RequestFieldValueUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: RequestFieldValueCreateManyFieldInputEnvelope
    set?: RequestFieldValueWhereUniqueInput | RequestFieldValueWhereUniqueInput[]
    disconnect?: RequestFieldValueWhereUniqueInput | RequestFieldValueWhereUniqueInput[]
    delete?: RequestFieldValueWhereUniqueInput | RequestFieldValueWhereUniqueInput[]
    connect?: RequestFieldValueWhereUniqueInput | RequestFieldValueWhereUniqueInput[]
    update?: RequestFieldValueUpdateWithWhereUniqueWithoutFieldInput | RequestFieldValueUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: RequestFieldValueUpdateManyWithWhereWithoutFieldInput | RequestFieldValueUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: RequestFieldValueScalarWhereInput | RequestFieldValueScalarWhereInput[]
  }

  export type RequestFieldValueUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<RequestFieldValueCreateWithoutFieldInput, RequestFieldValueUncheckedCreateWithoutFieldInput> | RequestFieldValueCreateWithoutFieldInput[] | RequestFieldValueUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: RequestFieldValueCreateOrConnectWithoutFieldInput | RequestFieldValueCreateOrConnectWithoutFieldInput[]
    upsert?: RequestFieldValueUpsertWithWhereUniqueWithoutFieldInput | RequestFieldValueUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: RequestFieldValueCreateManyFieldInputEnvelope
    set?: RequestFieldValueWhereUniqueInput | RequestFieldValueWhereUniqueInput[]
    disconnect?: RequestFieldValueWhereUniqueInput | RequestFieldValueWhereUniqueInput[]
    delete?: RequestFieldValueWhereUniqueInput | RequestFieldValueWhereUniqueInput[]
    connect?: RequestFieldValueWhereUniqueInput | RequestFieldValueWhereUniqueInput[]
    update?: RequestFieldValueUpdateWithWhereUniqueWithoutFieldInput | RequestFieldValueUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: RequestFieldValueUpdateManyWithWhereWithoutFieldInput | RequestFieldValueUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: RequestFieldValueScalarWhereInput | RequestFieldValueScalarWhereInput[]
  }

  export type TemplateFieldCreateNestedOneWithoutRequestValuesInput = {
    create?: XOR<TemplateFieldCreateWithoutRequestValuesInput, TemplateFieldUncheckedCreateWithoutRequestValuesInput>
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutRequestValuesInput
    connect?: TemplateFieldWhereUniqueInput
  }

  export type TemplateFieldUpdateOneRequiredWithoutRequestValuesNestedInput = {
    create?: XOR<TemplateFieldCreateWithoutRequestValuesInput, TemplateFieldUncheckedCreateWithoutRequestValuesInput>
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutRequestValuesInput
    upsert?: TemplateFieldUpsertWithoutRequestValuesInput
    connect?: TemplateFieldWhereUniqueInput
    update?: XOR<XOR<TemplateFieldUpdateToOneWithWhereWithoutRequestValuesInput, TemplateFieldUpdateWithoutRequestValuesInput>, TemplateFieldUncheckedUpdateWithoutRequestValuesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumLeadSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadSourceFilter<$PrismaModel> | $Enums.LeadSource
  }

  export type NestedEnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type NestedEnumPackageTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageType | EnumPackageTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PackageType[] | ListEnumPackageTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PackageType[] | ListEnumPackageTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPackageTypeNullableFilter<$PrismaModel> | $Enums.PackageType | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumLeadSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadSourceWithAggregatesFilter<$PrismaModel> | $Enums.LeadSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadSourceFilter<$PrismaModel>
    _max?: NestedEnumLeadSourceFilter<$PrismaModel>
  }

  export type NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type NestedEnumPackageTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageType | EnumPackageTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PackageType[] | ListEnumPackageTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PackageType[] | ListEnumPackageTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPackageTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.PackageType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPackageTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumPackageTypeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeFilter<$PrismaModel> | $Enums.FieldType
  }

  export type NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.FieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumFieldTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LeadCreateWithoutClientInput = {
    id?: string
    leadRegNo: string
    name: string
    email: string
    phone: string
    location?: string | null
    source: $Enums.LeadSource
    status: $Enums.LeadStatus
    projectsInterestedIn?: LeadCreateprojectsInterestedInInput | string[]
    packageType?: $Enums.PackageType | null
    assignedAt?: Date | string | null
    convertedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedDesigner?: UserCreateNestedOneWithoutAssignedLeadsInput
  }

  export type LeadUncheckedCreateWithoutClientInput = {
    id?: string
    leadRegNo: string
    name: string
    email: string
    phone: string
    location?: string | null
    source: $Enums.LeadSource
    status: $Enums.LeadStatus
    projectsInterestedIn?: LeadCreateprojectsInterestedInInput | string[]
    packageType?: $Enums.PackageType | null
    assignedDesignerId?: string | null
    assignedAt?: Date | string | null
    convertedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadCreateOrConnectWithoutClientInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutClientInput, LeadUncheckedCreateWithoutClientInput>
  }

  export type LeadCreateManyClientInputEnvelope = {
    data: LeadCreateManyClientInput | LeadCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type LeadCreateWithoutAssignedDesignerInput = {
    id?: string
    leadRegNo: string
    name: string
    email: string
    phone: string
    location?: string | null
    source: $Enums.LeadSource
    status: $Enums.LeadStatus
    projectsInterestedIn?: LeadCreateprojectsInterestedInInput | string[]
    packageType?: $Enums.PackageType | null
    assignedAt?: Date | string | null
    convertedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: UserCreateNestedOneWithoutLeadsInput
  }

  export type LeadUncheckedCreateWithoutAssignedDesignerInput = {
    id?: string
    leadRegNo: string
    name: string
    email: string
    phone: string
    location?: string | null
    source: $Enums.LeadSource
    status: $Enums.LeadStatus
    projectsInterestedIn?: LeadCreateprojectsInterestedInInput | string[]
    packageType?: $Enums.PackageType | null
    clientId?: string | null
    assignedAt?: Date | string | null
    convertedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadCreateOrConnectWithoutAssignedDesignerInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutAssignedDesignerInput, LeadUncheckedCreateWithoutAssignedDesignerInput>
  }

  export type LeadCreateManyAssignedDesignerInputEnvelope = {
    data: LeadCreateManyAssignedDesignerInput | LeadCreateManyAssignedDesignerInput[]
    skipDuplicates?: boolean
  }

  export type DeliverableCreateWithoutCreatedByInput = {
    id?: string
    name: string
    description: string
    icon: string
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    templates?: TemplateCreateNestedManyWithoutDeliverableInput
  }

  export type DeliverableUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    description: string
    icon: string
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    templates?: TemplateUncheckedCreateNestedManyWithoutDeliverableInput
  }

  export type DeliverableCreateOrConnectWithoutCreatedByInput = {
    where: DeliverableWhereUniqueInput
    create: XOR<DeliverableCreateWithoutCreatedByInput, DeliverableUncheckedCreateWithoutCreatedByInput>
  }

  export type DeliverableCreateManyCreatedByInputEnvelope = {
    data: DeliverableCreateManyCreatedByInput | DeliverableCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TemplateCreateWithoutCreatedByInput = {
    id?: string
    name: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deliverable: DeliverableCreateNestedOneWithoutTemplatesInput
    tabs?: TemplateTabCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutCreatedByInput = {
    id?: string
    deliverableId: string
    name: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tabs?: TemplateTabUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutCreatedByInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput>
  }

  export type TemplateCreateManyCreatedByInputEnvelope = {
    data: TemplateCreateManyCreatedByInput | TemplateCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type LeadUpsertWithWhereUniqueWithoutClientInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutClientInput, LeadUncheckedUpdateWithoutClientInput>
    create: XOR<LeadCreateWithoutClientInput, LeadUncheckedCreateWithoutClientInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutClientInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutClientInput, LeadUncheckedUpdateWithoutClientInput>
  }

  export type LeadUpdateManyWithWhereWithoutClientInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutClientInput>
  }

  export type LeadScalarWhereInput = {
    AND?: LeadScalarWhereInput | LeadScalarWhereInput[]
    OR?: LeadScalarWhereInput[]
    NOT?: LeadScalarWhereInput | LeadScalarWhereInput[]
    id?: StringFilter<"Lead"> | string
    leadRegNo?: StringFilter<"Lead"> | string
    name?: StringFilter<"Lead"> | string
    email?: StringFilter<"Lead"> | string
    phone?: StringFilter<"Lead"> | string
    location?: StringNullableFilter<"Lead"> | string | null
    source?: EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    projectsInterestedIn?: StringNullableListFilter<"Lead">
    packageType?: EnumPackageTypeNullableFilter<"Lead"> | $Enums.PackageType | null
    clientId?: StringNullableFilter<"Lead"> | string | null
    assignedDesignerId?: StringNullableFilter<"Lead"> | string | null
    assignedAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    convertedAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
  }

  export type LeadUpsertWithWhereUniqueWithoutAssignedDesignerInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutAssignedDesignerInput, LeadUncheckedUpdateWithoutAssignedDesignerInput>
    create: XOR<LeadCreateWithoutAssignedDesignerInput, LeadUncheckedCreateWithoutAssignedDesignerInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutAssignedDesignerInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutAssignedDesignerInput, LeadUncheckedUpdateWithoutAssignedDesignerInput>
  }

  export type LeadUpdateManyWithWhereWithoutAssignedDesignerInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutAssignedDesignerInput>
  }

  export type DeliverableUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DeliverableWhereUniqueInput
    update: XOR<DeliverableUpdateWithoutCreatedByInput, DeliverableUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DeliverableCreateWithoutCreatedByInput, DeliverableUncheckedCreateWithoutCreatedByInput>
  }

  export type DeliverableUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DeliverableWhereUniqueInput
    data: XOR<DeliverableUpdateWithoutCreatedByInput, DeliverableUncheckedUpdateWithoutCreatedByInput>
  }

  export type DeliverableUpdateManyWithWhereWithoutCreatedByInput = {
    where: DeliverableScalarWhereInput
    data: XOR<DeliverableUpdateManyMutationInput, DeliverableUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type DeliverableScalarWhereInput = {
    AND?: DeliverableScalarWhereInput | DeliverableScalarWhereInput[]
    OR?: DeliverableScalarWhereInput[]
    NOT?: DeliverableScalarWhereInput | DeliverableScalarWhereInput[]
    id?: StringFilter<"Deliverable"> | string
    name?: StringFilter<"Deliverable"> | string
    description?: StringFilter<"Deliverable"> | string
    icon?: StringFilter<"Deliverable"> | string
    isActive?: BoolFilter<"Deliverable"> | boolean
    createdById?: StringFilter<"Deliverable"> | string
    deletedAt?: DateTimeNullableFilter<"Deliverable"> | Date | string | null
    createdAt?: DateTimeFilter<"Deliverable"> | Date | string
    updatedAt?: DateTimeFilter<"Deliverable"> | Date | string
  }

  export type TemplateUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutCreatedByInput, TemplateUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutCreatedByInput, TemplateUncheckedUpdateWithoutCreatedByInput>
  }

  export type TemplateUpdateManyWithWhereWithoutCreatedByInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TemplateScalarWhereInput = {
    AND?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    OR?: TemplateScalarWhereInput[]
    NOT?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    id?: StringFilter<"Template"> | string
    deliverableId?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    description?: StringFilter<"Template"> | string
    isActive?: BoolFilter<"Template"> | boolean
    createdById?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Template"> | Date | string | null
  }

  export type UserCreateWithoutLeadsInput = {
    id?: string
    clientRegNo?: string | null
    designerRegNo?: string | null
    role: $Enums.Role
    firstName: string
    lastName: string
    email: string
    phone: string
    avatar?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    oauthProvider?: string | null
    oauthId?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: string | null
    education?: string | null
    projectCount?: number
    totalRevenue?: Decimal | DecimalJsLike | number | string
    rating?: number
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedLeads?: LeadCreateNestedManyWithoutAssignedDesignerInput
    createdDeliverables?: DeliverableCreateNestedManyWithoutCreatedByInput
    templates?: TemplateCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutLeadsInput = {
    id?: string
    clientRegNo?: string | null
    designerRegNo?: string | null
    role: $Enums.Role
    firstName: string
    lastName: string
    email: string
    phone: string
    avatar?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    oauthProvider?: string | null
    oauthId?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: string | null
    education?: string | null
    projectCount?: number
    totalRevenue?: Decimal | DecimalJsLike | number | string
    rating?: number
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedLeads?: LeadUncheckedCreateNestedManyWithoutAssignedDesignerInput
    createdDeliverables?: DeliverableUncheckedCreateNestedManyWithoutCreatedByInput
    templates?: TemplateUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutLeadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
  }

  export type UserCreateWithoutAssignedLeadsInput = {
    id?: string
    clientRegNo?: string | null
    designerRegNo?: string | null
    role: $Enums.Role
    firstName: string
    lastName: string
    email: string
    phone: string
    avatar?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    oauthProvider?: string | null
    oauthId?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: string | null
    education?: string | null
    projectCount?: number
    totalRevenue?: Decimal | DecimalJsLike | number | string
    rating?: number
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutClientInput
    createdDeliverables?: DeliverableCreateNestedManyWithoutCreatedByInput
    templates?: TemplateCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAssignedLeadsInput = {
    id?: string
    clientRegNo?: string | null
    designerRegNo?: string | null
    role: $Enums.Role
    firstName: string
    lastName: string
    email: string
    phone: string
    avatar?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    oauthProvider?: string | null
    oauthId?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: string | null
    education?: string | null
    projectCount?: number
    totalRevenue?: Decimal | DecimalJsLike | number | string
    rating?: number
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutClientInput
    createdDeliverables?: DeliverableUncheckedCreateNestedManyWithoutCreatedByInput
    templates?: TemplateUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAssignedLeadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedLeadsInput, UserUncheckedCreateWithoutAssignedLeadsInput>
  }

  export type UserUpsertWithoutLeadsInput = {
    update: XOR<UserUpdateWithoutLeadsInput, UserUncheckedUpdateWithoutLeadsInput>
    create: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeadsInput, UserUncheckedUpdateWithoutLeadsInput>
  }

  export type UserUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    designerRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    projectCount?: IntFieldUpdateOperationsInput | number
    totalRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: FloatFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedLeads?: LeadUpdateManyWithoutAssignedDesignerNestedInput
    createdDeliverables?: DeliverableUpdateManyWithoutCreatedByNestedInput
    templates?: TemplateUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    designerRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    projectCount?: IntFieldUpdateOperationsInput | number
    totalRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: FloatFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedLeads?: LeadUncheckedUpdateManyWithoutAssignedDesignerNestedInput
    createdDeliverables?: DeliverableUncheckedUpdateManyWithoutCreatedByNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUpsertWithoutAssignedLeadsInput = {
    update: XOR<UserUpdateWithoutAssignedLeadsInput, UserUncheckedUpdateWithoutAssignedLeadsInput>
    create: XOR<UserCreateWithoutAssignedLeadsInput, UserUncheckedCreateWithoutAssignedLeadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedLeadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedLeadsInput, UserUncheckedUpdateWithoutAssignedLeadsInput>
  }

  export type UserUpdateWithoutAssignedLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    designerRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    projectCount?: IntFieldUpdateOperationsInput | number
    totalRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: FloatFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutClientNestedInput
    createdDeliverables?: DeliverableUpdateManyWithoutCreatedByNestedInput
    templates?: TemplateUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    designerRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    projectCount?: IntFieldUpdateOperationsInput | number
    totalRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: FloatFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutClientNestedInput
    createdDeliverables?: DeliverableUncheckedUpdateManyWithoutCreatedByNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutCreatedDeliverablesInput = {
    id?: string
    clientRegNo?: string | null
    designerRegNo?: string | null
    role: $Enums.Role
    firstName: string
    lastName: string
    email: string
    phone: string
    avatar?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    oauthProvider?: string | null
    oauthId?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: string | null
    education?: string | null
    projectCount?: number
    totalRevenue?: Decimal | DecimalJsLike | number | string
    rating?: number
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutClientInput
    assignedLeads?: LeadCreateNestedManyWithoutAssignedDesignerInput
    templates?: TemplateCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedDeliverablesInput = {
    id?: string
    clientRegNo?: string | null
    designerRegNo?: string | null
    role: $Enums.Role
    firstName: string
    lastName: string
    email: string
    phone: string
    avatar?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    oauthProvider?: string | null
    oauthId?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: string | null
    education?: string | null
    projectCount?: number
    totalRevenue?: Decimal | DecimalJsLike | number | string
    rating?: number
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutClientInput
    assignedLeads?: LeadUncheckedCreateNestedManyWithoutAssignedDesignerInput
    templates?: TemplateUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedDeliverablesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedDeliverablesInput, UserUncheckedCreateWithoutCreatedDeliverablesInput>
  }

  export type TemplateCreateWithoutDeliverableInput = {
    id?: string
    name: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy: UserCreateNestedOneWithoutTemplatesInput
    tabs?: TemplateTabCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutDeliverableInput = {
    id?: string
    name: string
    description: string
    isActive?: boolean
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tabs?: TemplateTabUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutDeliverableInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutDeliverableInput, TemplateUncheckedCreateWithoutDeliverableInput>
  }

  export type TemplateCreateManyDeliverableInputEnvelope = {
    data: TemplateCreateManyDeliverableInput | TemplateCreateManyDeliverableInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedDeliverablesInput = {
    update: XOR<UserUpdateWithoutCreatedDeliverablesInput, UserUncheckedUpdateWithoutCreatedDeliverablesInput>
    create: XOR<UserCreateWithoutCreatedDeliverablesInput, UserUncheckedCreateWithoutCreatedDeliverablesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedDeliverablesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedDeliverablesInput, UserUncheckedUpdateWithoutCreatedDeliverablesInput>
  }

  export type UserUpdateWithoutCreatedDeliverablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    designerRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    projectCount?: IntFieldUpdateOperationsInput | number
    totalRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: FloatFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutClientNestedInput
    assignedLeads?: LeadUpdateManyWithoutAssignedDesignerNestedInput
    templates?: TemplateUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedDeliverablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    designerRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    projectCount?: IntFieldUpdateOperationsInput | number
    totalRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: FloatFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutClientNestedInput
    assignedLeads?: LeadUncheckedUpdateManyWithoutAssignedDesignerNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type TemplateUpsertWithWhereUniqueWithoutDeliverableInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutDeliverableInput, TemplateUncheckedUpdateWithoutDeliverableInput>
    create: XOR<TemplateCreateWithoutDeliverableInput, TemplateUncheckedCreateWithoutDeliverableInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutDeliverableInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutDeliverableInput, TemplateUncheckedUpdateWithoutDeliverableInput>
  }

  export type TemplateUpdateManyWithWhereWithoutDeliverableInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutDeliverableInput>
  }

  export type DeliverableCreateWithoutTemplatesInput = {
    id?: string
    name: string
    description: string
    icon: string
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedDeliverablesInput
  }

  export type DeliverableUncheckedCreateWithoutTemplatesInput = {
    id?: string
    name: string
    description: string
    icon: string
    isActive?: boolean
    createdById: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliverableCreateOrConnectWithoutTemplatesInput = {
    where: DeliverableWhereUniqueInput
    create: XOR<DeliverableCreateWithoutTemplatesInput, DeliverableUncheckedCreateWithoutTemplatesInput>
  }

  export type UserCreateWithoutTemplatesInput = {
    id?: string
    clientRegNo?: string | null
    designerRegNo?: string | null
    role: $Enums.Role
    firstName: string
    lastName: string
    email: string
    phone: string
    avatar?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    oauthProvider?: string | null
    oauthId?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: string | null
    education?: string | null
    projectCount?: number
    totalRevenue?: Decimal | DecimalJsLike | number | string
    rating?: number
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutClientInput
    assignedLeads?: LeadCreateNestedManyWithoutAssignedDesignerInput
    createdDeliverables?: DeliverableCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutTemplatesInput = {
    id?: string
    clientRegNo?: string | null
    designerRegNo?: string | null
    role: $Enums.Role
    firstName: string
    lastName: string
    email: string
    phone: string
    avatar?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    oauthProvider?: string | null
    oauthId?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: string | null
    education?: string | null
    projectCount?: number
    totalRevenue?: Decimal | DecimalJsLike | number | string
    rating?: number
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutClientInput
    assignedLeads?: LeadUncheckedCreateNestedManyWithoutAssignedDesignerInput
    createdDeliverables?: DeliverableUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
  }

  export type TemplateTabCreateWithoutTemplateInput = {
    id?: string
    name: string
    displayOrder: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: TemplateFieldCreateNestedManyWithoutTabInput
  }

  export type TemplateTabUncheckedCreateWithoutTemplateInput = {
    id?: string
    name: string
    displayOrder: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: TemplateFieldUncheckedCreateNestedManyWithoutTabInput
  }

  export type TemplateTabCreateOrConnectWithoutTemplateInput = {
    where: TemplateTabWhereUniqueInput
    create: XOR<TemplateTabCreateWithoutTemplateInput, TemplateTabUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateTabCreateManyTemplateInputEnvelope = {
    data: TemplateTabCreateManyTemplateInput | TemplateTabCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type DeliverableUpsertWithoutTemplatesInput = {
    update: XOR<DeliverableUpdateWithoutTemplatesInput, DeliverableUncheckedUpdateWithoutTemplatesInput>
    create: XOR<DeliverableCreateWithoutTemplatesInput, DeliverableUncheckedCreateWithoutTemplatesInput>
    where?: DeliverableWhereInput
  }

  export type DeliverableUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: DeliverableWhereInput
    data: XOR<DeliverableUpdateWithoutTemplatesInput, DeliverableUncheckedUpdateWithoutTemplatesInput>
  }

  export type DeliverableUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedDeliverablesNestedInput
  }

  export type DeliverableUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutTemplatesInput = {
    update: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    designerRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    projectCount?: IntFieldUpdateOperationsInput | number
    totalRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: FloatFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutClientNestedInput
    assignedLeads?: LeadUpdateManyWithoutAssignedDesignerNestedInput
    createdDeliverables?: DeliverableUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    designerRegNo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    projectCount?: IntFieldUpdateOperationsInput | number
    totalRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: FloatFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutClientNestedInput
    assignedLeads?: LeadUncheckedUpdateManyWithoutAssignedDesignerNestedInput
    createdDeliverables?: DeliverableUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type TemplateTabUpsertWithWhereUniqueWithoutTemplateInput = {
    where: TemplateTabWhereUniqueInput
    update: XOR<TemplateTabUpdateWithoutTemplateInput, TemplateTabUncheckedUpdateWithoutTemplateInput>
    create: XOR<TemplateTabCreateWithoutTemplateInput, TemplateTabUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateTabUpdateWithWhereUniqueWithoutTemplateInput = {
    where: TemplateTabWhereUniqueInput
    data: XOR<TemplateTabUpdateWithoutTemplateInput, TemplateTabUncheckedUpdateWithoutTemplateInput>
  }

  export type TemplateTabUpdateManyWithWhereWithoutTemplateInput = {
    where: TemplateTabScalarWhereInput
    data: XOR<TemplateTabUpdateManyMutationInput, TemplateTabUncheckedUpdateManyWithoutTemplateInput>
  }

  export type TemplateTabScalarWhereInput = {
    AND?: TemplateTabScalarWhereInput | TemplateTabScalarWhereInput[]
    OR?: TemplateTabScalarWhereInput[]
    NOT?: TemplateTabScalarWhereInput | TemplateTabScalarWhereInput[]
    id?: StringFilter<"TemplateTab"> | string
    templateId?: StringFilter<"TemplateTab"> | string
    name?: StringFilter<"TemplateTab"> | string
    displayOrder?: IntFilter<"TemplateTab"> | number
    isActive?: BoolFilter<"TemplateTab"> | boolean
    createdAt?: DateTimeFilter<"TemplateTab"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateTab"> | Date | string
  }

  export type TemplateCreateWithoutTabsInput = {
    id?: string
    name: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deliverable: DeliverableCreateNestedOneWithoutTemplatesInput
    createdBy: UserCreateNestedOneWithoutTemplatesInput
  }

  export type TemplateUncheckedCreateWithoutTabsInput = {
    id?: string
    deliverableId: string
    name: string
    description: string
    isActive?: boolean
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TemplateCreateOrConnectWithoutTabsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutTabsInput, TemplateUncheckedCreateWithoutTabsInput>
  }

  export type TemplateFieldCreateWithoutTabInput = {
    id?: string
    label: string
    fieldKey: string
    fieldType: $Enums.FieldType
    options?: TemplateFieldCreateoptionsInput | string[]
    defaultValue?: string | null
    isActive?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    requestValues?: RequestFieldValueCreateNestedManyWithoutFieldInput
  }

  export type TemplateFieldUncheckedCreateWithoutTabInput = {
    id?: string
    label: string
    fieldKey: string
    fieldType: $Enums.FieldType
    options?: TemplateFieldCreateoptionsInput | string[]
    defaultValue?: string | null
    isActive?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    requestValues?: RequestFieldValueUncheckedCreateNestedManyWithoutFieldInput
  }

  export type TemplateFieldCreateOrConnectWithoutTabInput = {
    where: TemplateFieldWhereUniqueInput
    create: XOR<TemplateFieldCreateWithoutTabInput, TemplateFieldUncheckedCreateWithoutTabInput>
  }

  export type TemplateFieldCreateManyTabInputEnvelope = {
    data: TemplateFieldCreateManyTabInput | TemplateFieldCreateManyTabInput[]
    skipDuplicates?: boolean
  }

  export type TemplateUpsertWithoutTabsInput = {
    update: XOR<TemplateUpdateWithoutTabsInput, TemplateUncheckedUpdateWithoutTabsInput>
    create: XOR<TemplateCreateWithoutTabsInput, TemplateUncheckedCreateWithoutTabsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutTabsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutTabsInput, TemplateUncheckedUpdateWithoutTabsInput>
  }

  export type TemplateUpdateWithoutTabsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverable?: DeliverableUpdateOneRequiredWithoutTemplatesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type TemplateUncheckedUpdateWithoutTabsInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliverableId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TemplateFieldUpsertWithWhereUniqueWithoutTabInput = {
    where: TemplateFieldWhereUniqueInput
    update: XOR<TemplateFieldUpdateWithoutTabInput, TemplateFieldUncheckedUpdateWithoutTabInput>
    create: XOR<TemplateFieldCreateWithoutTabInput, TemplateFieldUncheckedCreateWithoutTabInput>
  }

  export type TemplateFieldUpdateWithWhereUniqueWithoutTabInput = {
    where: TemplateFieldWhereUniqueInput
    data: XOR<TemplateFieldUpdateWithoutTabInput, TemplateFieldUncheckedUpdateWithoutTabInput>
  }

  export type TemplateFieldUpdateManyWithWhereWithoutTabInput = {
    where: TemplateFieldScalarWhereInput
    data: XOR<TemplateFieldUpdateManyMutationInput, TemplateFieldUncheckedUpdateManyWithoutTabInput>
  }

  export type TemplateFieldScalarWhereInput = {
    AND?: TemplateFieldScalarWhereInput | TemplateFieldScalarWhereInput[]
    OR?: TemplateFieldScalarWhereInput[]
    NOT?: TemplateFieldScalarWhereInput | TemplateFieldScalarWhereInput[]
    id?: StringFilter<"TemplateField"> | string
    tabId?: StringFilter<"TemplateField"> | string
    label?: StringFilter<"TemplateField"> | string
    fieldKey?: StringFilter<"TemplateField"> | string
    fieldType?: EnumFieldTypeFilter<"TemplateField"> | $Enums.FieldType
    options?: StringNullableListFilter<"TemplateField">
    defaultValue?: StringNullableFilter<"TemplateField"> | string | null
    isActive?: BoolFilter<"TemplateField"> | boolean
    isRequired?: BoolFilter<"TemplateField"> | boolean
    createdAt?: DateTimeFilter<"TemplateField"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateField"> | Date | string
  }

  export type TemplateTabCreateWithoutFieldsInput = {
    id?: string
    name: string
    displayOrder: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    template: TemplateCreateNestedOneWithoutTabsInput
  }

  export type TemplateTabUncheckedCreateWithoutFieldsInput = {
    id?: string
    templateId: string
    name: string
    displayOrder: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateTabCreateOrConnectWithoutFieldsInput = {
    where: TemplateTabWhereUniqueInput
    create: XOR<TemplateTabCreateWithoutFieldsInput, TemplateTabUncheckedCreateWithoutFieldsInput>
  }

  export type RequestFieldValueCreateWithoutFieldInput = {
    id?: string
    requestId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RequestFieldValueUncheckedCreateWithoutFieldInput = {
    id?: string
    requestId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RequestFieldValueCreateOrConnectWithoutFieldInput = {
    where: RequestFieldValueWhereUniqueInput
    create: XOR<RequestFieldValueCreateWithoutFieldInput, RequestFieldValueUncheckedCreateWithoutFieldInput>
  }

  export type RequestFieldValueCreateManyFieldInputEnvelope = {
    data: RequestFieldValueCreateManyFieldInput | RequestFieldValueCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type TemplateTabUpsertWithoutFieldsInput = {
    update: XOR<TemplateTabUpdateWithoutFieldsInput, TemplateTabUncheckedUpdateWithoutFieldsInput>
    create: XOR<TemplateTabCreateWithoutFieldsInput, TemplateTabUncheckedCreateWithoutFieldsInput>
    where?: TemplateTabWhereInput
  }

  export type TemplateTabUpdateToOneWithWhereWithoutFieldsInput = {
    where?: TemplateTabWhereInput
    data: XOR<TemplateTabUpdateWithoutFieldsInput, TemplateTabUncheckedUpdateWithoutFieldsInput>
  }

  export type TemplateTabUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: TemplateUpdateOneRequiredWithoutTabsNestedInput
  }

  export type TemplateTabUncheckedUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestFieldValueUpsertWithWhereUniqueWithoutFieldInput = {
    where: RequestFieldValueWhereUniqueInput
    update: XOR<RequestFieldValueUpdateWithoutFieldInput, RequestFieldValueUncheckedUpdateWithoutFieldInput>
    create: XOR<RequestFieldValueCreateWithoutFieldInput, RequestFieldValueUncheckedCreateWithoutFieldInput>
  }

  export type RequestFieldValueUpdateWithWhereUniqueWithoutFieldInput = {
    where: RequestFieldValueWhereUniqueInput
    data: XOR<RequestFieldValueUpdateWithoutFieldInput, RequestFieldValueUncheckedUpdateWithoutFieldInput>
  }

  export type RequestFieldValueUpdateManyWithWhereWithoutFieldInput = {
    where: RequestFieldValueScalarWhereInput
    data: XOR<RequestFieldValueUpdateManyMutationInput, RequestFieldValueUncheckedUpdateManyWithoutFieldInput>
  }

  export type RequestFieldValueScalarWhereInput = {
    AND?: RequestFieldValueScalarWhereInput | RequestFieldValueScalarWhereInput[]
    OR?: RequestFieldValueScalarWhereInput[]
    NOT?: RequestFieldValueScalarWhereInput | RequestFieldValueScalarWhereInput[]
    id?: StringFilter<"RequestFieldValue"> | string
    requestId?: StringFilter<"RequestFieldValue"> | string
    fieldId?: StringFilter<"RequestFieldValue"> | string
    value?: JsonFilter<"RequestFieldValue">
    createdAt?: DateTimeFilter<"RequestFieldValue"> | Date | string
  }

  export type TemplateFieldCreateWithoutRequestValuesInput = {
    id?: string
    label: string
    fieldKey: string
    fieldType: $Enums.FieldType
    options?: TemplateFieldCreateoptionsInput | string[]
    defaultValue?: string | null
    isActive?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tab: TemplateTabCreateNestedOneWithoutFieldsInput
  }

  export type TemplateFieldUncheckedCreateWithoutRequestValuesInput = {
    id?: string
    tabId: string
    label: string
    fieldKey: string
    fieldType: $Enums.FieldType
    options?: TemplateFieldCreateoptionsInput | string[]
    defaultValue?: string | null
    isActive?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateFieldCreateOrConnectWithoutRequestValuesInput = {
    where: TemplateFieldWhereUniqueInput
    create: XOR<TemplateFieldCreateWithoutRequestValuesInput, TemplateFieldUncheckedCreateWithoutRequestValuesInput>
  }

  export type TemplateFieldUpsertWithoutRequestValuesInput = {
    update: XOR<TemplateFieldUpdateWithoutRequestValuesInput, TemplateFieldUncheckedUpdateWithoutRequestValuesInput>
    create: XOR<TemplateFieldCreateWithoutRequestValuesInput, TemplateFieldUncheckedCreateWithoutRequestValuesInput>
    where?: TemplateFieldWhereInput
  }

  export type TemplateFieldUpdateToOneWithWhereWithoutRequestValuesInput = {
    where?: TemplateFieldWhereInput
    data: XOR<TemplateFieldUpdateWithoutRequestValuesInput, TemplateFieldUncheckedUpdateWithoutRequestValuesInput>
  }

  export type TemplateFieldUpdateWithoutRequestValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldKey?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    options?: TemplateFieldUpdateoptionsInput | string[]
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tab?: TemplateTabUpdateOneRequiredWithoutFieldsNestedInput
  }

  export type TemplateFieldUncheckedUpdateWithoutRequestValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldKey?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    options?: TemplateFieldUpdateoptionsInput | string[]
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateManyClientInput = {
    id?: string
    leadRegNo: string
    name: string
    email: string
    phone: string
    location?: string | null
    source: $Enums.LeadSource
    status: $Enums.LeadStatus
    projectsInterestedIn?: LeadCreateprojectsInterestedInInput | string[]
    packageType?: $Enums.PackageType | null
    assignedDesignerId?: string | null
    assignedAt?: Date | string | null
    convertedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadCreateManyAssignedDesignerInput = {
    id?: string
    leadRegNo: string
    name: string
    email: string
    phone: string
    location?: string | null
    source: $Enums.LeadSource
    status: $Enums.LeadStatus
    projectsInterestedIn?: LeadCreateprojectsInterestedInInput | string[]
    packageType?: $Enums.PackageType | null
    clientId?: string | null
    assignedAt?: Date | string | null
    convertedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliverableCreateManyCreatedByInput = {
    id?: string
    name: string
    description: string
    icon: string
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateCreateManyCreatedByInput = {
    id?: string
    deliverableId: string
    name: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LeadUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadRegNo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    projectsInterestedIn?: LeadUpdateprojectsInterestedInInput | string[]
    packageType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    convertedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedDesigner?: UserUpdateOneWithoutAssignedLeadsNestedInput
  }

  export type LeadUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadRegNo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    projectsInterestedIn?: LeadUpdateprojectsInterestedInInput | string[]
    packageType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    assignedDesignerId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    convertedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadRegNo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    projectsInterestedIn?: LeadUpdateprojectsInterestedInInput | string[]
    packageType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    assignedDesignerId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    convertedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUpdateWithoutAssignedDesignerInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadRegNo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    projectsInterestedIn?: LeadUpdateprojectsInterestedInInput | string[]
    packageType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    convertedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutLeadsNestedInput
  }

  export type LeadUncheckedUpdateWithoutAssignedDesignerInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadRegNo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    projectsInterestedIn?: LeadUpdateprojectsInterestedInInput | string[]
    packageType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    convertedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyWithoutAssignedDesignerInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadRegNo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    projectsInterestedIn?: LeadUpdateprojectsInterestedInInput | string[]
    packageType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    convertedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliverableUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUpdateManyWithoutDeliverableNestedInput
  }

  export type DeliverableUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUncheckedUpdateManyWithoutDeliverableNestedInput
  }

  export type DeliverableUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverable?: DeliverableUpdateOneRequiredWithoutTemplatesNestedInput
    tabs?: TemplateTabUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliverableId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tabs?: TemplateTabUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliverableId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TemplateCreateManyDeliverableInput = {
    id?: string
    name: string
    description: string
    isActive?: boolean
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TemplateUpdateWithoutDeliverableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneRequiredWithoutTemplatesNestedInput
    tabs?: TemplateTabUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutDeliverableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tabs?: TemplateTabUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateManyWithoutDeliverableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TemplateTabCreateManyTemplateInput = {
    id?: string
    name: string
    displayOrder: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateTabUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: TemplateFieldUpdateManyWithoutTabNestedInput
  }

  export type TemplateTabUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: TemplateFieldUncheckedUpdateManyWithoutTabNestedInput
  }

  export type TemplateTabUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateFieldCreateManyTabInput = {
    id?: string
    label: string
    fieldKey: string
    fieldType: $Enums.FieldType
    options?: TemplateFieldCreateoptionsInput | string[]
    defaultValue?: string | null
    isActive?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateFieldUpdateWithoutTabInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldKey?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    options?: TemplateFieldUpdateoptionsInput | string[]
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestValues?: RequestFieldValueUpdateManyWithoutFieldNestedInput
  }

  export type TemplateFieldUncheckedUpdateWithoutTabInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldKey?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    options?: TemplateFieldUpdateoptionsInput | string[]
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestValues?: RequestFieldValueUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type TemplateFieldUncheckedUpdateManyWithoutTabInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldKey?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    options?: TemplateFieldUpdateoptionsInput | string[]
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestFieldValueCreateManyFieldInput = {
    id?: string
    requestId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RequestFieldValueUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestFieldValueUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestFieldValueUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}