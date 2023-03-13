
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model admin_role
 * 
 */
export type admin_role = {
  id: number
  name: string
  can_get_user: boolean
  can_create_user: boolean
  can_create_admin: boolean
  can_delete_user: boolean
  can_alter_user: boolean
  can_search_users: boolean
  can_batch_alter_users: boolean
  can_set_perms: boolean
  bypass_auth: boolean
  active: boolean
  superuser: boolean
  updated_at: Date
  can_list_users: boolean
}

/**
 * Model admin_user
 * 
 */
export type admin_user = {
  id: number
  email: string
  password: string
  name: string
  role_id: number
  active: boolean
  token: string | null
  created_at: Date
  updated_at: Date | null
  access_token: string | null
  id_token: string | null
}

/**
 * Model user
 * 
 */
export type user = {
  id: number
  email: string
  password: string
  username: string
  name: string
  score: number
  diamond: number
  login_count: number
  phone_number: string
  head_image: string
  sex: boolean | null
  bankPwd: string
  bankScore: number
  is_vip: boolean
  access_token: number | null
  id_token: number | null
  active: boolean
  created_at: Date
  updated_at: Date | null
  qa_bypass: string | null
  created_by_id: number
  is_robot: boolean
  passval: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admin_roles
 * const admin_roles = await prisma.admin_role.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admin_roles
   * const admin_roles = await prisma.admin_role.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.admin_role`: Exposes CRUD operations for the **admin_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_roles
    * const admin_roles = await prisma.admin_role.findMany()
    * ```
    */
  get admin_role(): Prisma.admin_roleDelegate<GlobalReject>;

  /**
   * `prisma.admin_user`: Exposes CRUD operations for the **admin_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_users
    * const admin_users = await prisma.admin_user.findMany()
    * ```
    */
  get admin_user(): Prisma.admin_userDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    admin_role: 'admin_role',
    admin_user: 'admin_user',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Admin_roleCountOutputType
   */


  export type Admin_roleCountOutputType = {
    admin_user: number
  }

  export type Admin_roleCountOutputTypeSelect = {
    admin_user?: boolean
  }

  export type Admin_roleCountOutputTypeGetPayload<S extends boolean | null | undefined | Admin_roleCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Admin_roleCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Admin_roleCountOutputTypeArgs)
    ? Admin_roleCountOutputType 
    : S extends { select: any } & (Admin_roleCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Admin_roleCountOutputType ? Admin_roleCountOutputType[P] : never
  } 
      : Admin_roleCountOutputType




  // Custom InputTypes

  /**
   * Admin_roleCountOutputType without action
   */
  export type Admin_roleCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Admin_roleCountOutputType
     */
    select?: Admin_roleCountOutputTypeSelect | null
  }



  /**
   * Count Type Admin_userCountOutputType
   */


  export type Admin_userCountOutputType = {
    user: number
  }

  export type Admin_userCountOutputTypeSelect = {
    user?: boolean
  }

  export type Admin_userCountOutputTypeGetPayload<S extends boolean | null | undefined | Admin_userCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Admin_userCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Admin_userCountOutputTypeArgs)
    ? Admin_userCountOutputType 
    : S extends { select: any } & (Admin_userCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Admin_userCountOutputType ? Admin_userCountOutputType[P] : never
  } 
      : Admin_userCountOutputType




  // Custom InputTypes

  /**
   * Admin_userCountOutputType without action
   */
  export type Admin_userCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Admin_userCountOutputType
     */
    select?: Admin_userCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model admin_role
   */


  export type AggregateAdmin_role = {
    _count: Admin_roleCountAggregateOutputType | null
    _avg: Admin_roleAvgAggregateOutputType | null
    _sum: Admin_roleSumAggregateOutputType | null
    _min: Admin_roleMinAggregateOutputType | null
    _max: Admin_roleMaxAggregateOutputType | null
  }

  export type Admin_roleAvgAggregateOutputType = {
    id: number | null
  }

  export type Admin_roleSumAggregateOutputType = {
    id: number | null
  }

  export type Admin_roleMinAggregateOutputType = {
    id: number | null
    name: string | null
    can_get_user: boolean | null
    can_create_user: boolean | null
    can_create_admin: boolean | null
    can_delete_user: boolean | null
    can_alter_user: boolean | null
    can_search_users: boolean | null
    can_batch_alter_users: boolean | null
    can_set_perms: boolean | null
    bypass_auth: boolean | null
    active: boolean | null
    superuser: boolean | null
    updated_at: Date | null
    can_list_users: boolean | null
  }

  export type Admin_roleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    can_get_user: boolean | null
    can_create_user: boolean | null
    can_create_admin: boolean | null
    can_delete_user: boolean | null
    can_alter_user: boolean | null
    can_search_users: boolean | null
    can_batch_alter_users: boolean | null
    can_set_perms: boolean | null
    bypass_auth: boolean | null
    active: boolean | null
    superuser: boolean | null
    updated_at: Date | null
    can_list_users: boolean | null
  }

  export type Admin_roleCountAggregateOutputType = {
    id: number
    name: number
    can_get_user: number
    can_create_user: number
    can_create_admin: number
    can_delete_user: number
    can_alter_user: number
    can_search_users: number
    can_batch_alter_users: number
    can_set_perms: number
    bypass_auth: number
    active: number
    superuser: number
    updated_at: number
    can_list_users: number
    _all: number
  }


  export type Admin_roleAvgAggregateInputType = {
    id?: true
  }

  export type Admin_roleSumAggregateInputType = {
    id?: true
  }

  export type Admin_roleMinAggregateInputType = {
    id?: true
    name?: true
    can_get_user?: true
    can_create_user?: true
    can_create_admin?: true
    can_delete_user?: true
    can_alter_user?: true
    can_search_users?: true
    can_batch_alter_users?: true
    can_set_perms?: true
    bypass_auth?: true
    active?: true
    superuser?: true
    updated_at?: true
    can_list_users?: true
  }

  export type Admin_roleMaxAggregateInputType = {
    id?: true
    name?: true
    can_get_user?: true
    can_create_user?: true
    can_create_admin?: true
    can_delete_user?: true
    can_alter_user?: true
    can_search_users?: true
    can_batch_alter_users?: true
    can_set_perms?: true
    bypass_auth?: true
    active?: true
    superuser?: true
    updated_at?: true
    can_list_users?: true
  }

  export type Admin_roleCountAggregateInputType = {
    id?: true
    name?: true
    can_get_user?: true
    can_create_user?: true
    can_create_admin?: true
    can_delete_user?: true
    can_alter_user?: true
    can_search_users?: true
    can_batch_alter_users?: true
    can_set_perms?: true
    bypass_auth?: true
    active?: true
    superuser?: true
    updated_at?: true
    can_list_users?: true
    _all?: true
  }

  export type Admin_roleAggregateArgs = {
    /**
     * Filter which admin_role to aggregate.
     */
    where?: admin_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_roles to fetch.
     */
    orderBy?: Enumerable<admin_roleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admin_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admin_roles
    **/
    _count?: true | Admin_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Admin_roleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Admin_roleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_roleMaxAggregateInputType
  }

  export type GetAdmin_roleAggregateType<T extends Admin_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_role[P]>
      : GetScalarType<T[P], AggregateAdmin_role[P]>
  }




  export type Admin_roleGroupByArgs = {
    where?: admin_roleWhereInput
    orderBy?: Enumerable<admin_roleOrderByWithAggregationInput>
    by: Admin_roleScalarFieldEnum[]
    having?: admin_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_roleCountAggregateInputType | true
    _avg?: Admin_roleAvgAggregateInputType
    _sum?: Admin_roleSumAggregateInputType
    _min?: Admin_roleMinAggregateInputType
    _max?: Admin_roleMaxAggregateInputType
  }


  export type Admin_roleGroupByOutputType = {
    id: number
    name: string
    can_get_user: boolean
    can_create_user: boolean
    can_create_admin: boolean
    can_delete_user: boolean
    can_alter_user: boolean
    can_search_users: boolean
    can_batch_alter_users: boolean
    can_set_perms: boolean
    bypass_auth: boolean
    active: boolean
    superuser: boolean
    updated_at: Date
    can_list_users: boolean
    _count: Admin_roleCountAggregateOutputType | null
    _avg: Admin_roleAvgAggregateOutputType | null
    _sum: Admin_roleSumAggregateOutputType | null
    _min: Admin_roleMinAggregateOutputType | null
    _max: Admin_roleMaxAggregateOutputType | null
  }

  type GetAdmin_roleGroupByPayload<T extends Admin_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Admin_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_roleGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_roleGroupByOutputType[P]>
        }
      >
    >


  export type admin_roleSelect = {
    id?: boolean
    name?: boolean
    can_get_user?: boolean
    can_create_user?: boolean
    can_create_admin?: boolean
    can_delete_user?: boolean
    can_alter_user?: boolean
    can_search_users?: boolean
    can_batch_alter_users?: boolean
    can_set_perms?: boolean
    bypass_auth?: boolean
    active?: boolean
    superuser?: boolean
    updated_at?: boolean
    can_list_users?: boolean
    admin_user?: boolean | admin_role$admin_userArgs
    _count?: boolean | Admin_roleCountOutputTypeArgs
  }


  export type admin_roleInclude = {
    admin_user?: boolean | admin_role$admin_userArgs
    _count?: boolean | Admin_roleCountOutputTypeArgs
  }

  export type admin_roleGetPayload<S extends boolean | null | undefined | admin_roleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? admin_role :
    S extends undefined ? never :
    S extends { include: any } & (admin_roleArgs | admin_roleFindManyArgs)
    ? admin_role  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'admin_user' ? Array < admin_userGetPayload<S['include'][P]>>  :
        P extends '_count' ? Admin_roleCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (admin_roleArgs | admin_roleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'admin_user' ? Array < admin_userGetPayload<S['select'][P]>>  :
        P extends '_count' ? Admin_roleCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof admin_role ? admin_role[P] : never
  } 
      : admin_role


  type admin_roleCountArgs = 
    Omit<admin_roleFindManyArgs, 'select' | 'include'> & {
      select?: Admin_roleCountAggregateInputType | true
    }

  export interface admin_roleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Admin_role that matches the filter.
     * @param {admin_roleFindUniqueArgs} args - Arguments to find a Admin_role
     * @example
     * // Get one Admin_role
     * const admin_role = await prisma.admin_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends admin_roleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, admin_roleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'admin_role'> extends True ? Prisma__admin_roleClient<admin_roleGetPayload<T>> : Prisma__admin_roleClient<admin_roleGetPayload<T> | null, null>

    /**
     * Find one Admin_role that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {admin_roleFindUniqueOrThrowArgs} args - Arguments to find a Admin_role
     * @example
     * // Get one Admin_role
     * const admin_role = await prisma.admin_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends admin_roleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, admin_roleFindUniqueOrThrowArgs>
    ): Prisma__admin_roleClient<admin_roleGetPayload<T>>

    /**
     * Find the first Admin_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_roleFindFirstArgs} args - Arguments to find a Admin_role
     * @example
     * // Get one Admin_role
     * const admin_role = await prisma.admin_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends admin_roleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, admin_roleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'admin_role'> extends True ? Prisma__admin_roleClient<admin_roleGetPayload<T>> : Prisma__admin_roleClient<admin_roleGetPayload<T> | null, null>

    /**
     * Find the first Admin_role that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_roleFindFirstOrThrowArgs} args - Arguments to find a Admin_role
     * @example
     * // Get one Admin_role
     * const admin_role = await prisma.admin_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends admin_roleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, admin_roleFindFirstOrThrowArgs>
    ): Prisma__admin_roleClient<admin_roleGetPayload<T>>

    /**
     * Find zero or more Admin_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_roleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_roles
     * const admin_roles = await prisma.admin_role.findMany()
     * 
     * // Get first 10 Admin_roles
     * const admin_roles = await prisma.admin_role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admin_roleWithIdOnly = await prisma.admin_role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends admin_roleFindManyArgs>(
      args?: SelectSubset<T, admin_roleFindManyArgs>
    ): Prisma.PrismaPromise<Array<admin_roleGetPayload<T>>>

    /**
     * Create a Admin_role.
     * @param {admin_roleCreateArgs} args - Arguments to create a Admin_role.
     * @example
     * // Create one Admin_role
     * const Admin_role = await prisma.admin_role.create({
     *   data: {
     *     // ... data to create a Admin_role
     *   }
     * })
     * 
    **/
    create<T extends admin_roleCreateArgs>(
      args: SelectSubset<T, admin_roleCreateArgs>
    ): Prisma__admin_roleClient<admin_roleGetPayload<T>>

    /**
     * Create many Admin_roles.
     *     @param {admin_roleCreateManyArgs} args - Arguments to create many Admin_roles.
     *     @example
     *     // Create many Admin_roles
     *     const admin_role = await prisma.admin_role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends admin_roleCreateManyArgs>(
      args?: SelectSubset<T, admin_roleCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin_role.
     * @param {admin_roleDeleteArgs} args - Arguments to delete one Admin_role.
     * @example
     * // Delete one Admin_role
     * const Admin_role = await prisma.admin_role.delete({
     *   where: {
     *     // ... filter to delete one Admin_role
     *   }
     * })
     * 
    **/
    delete<T extends admin_roleDeleteArgs>(
      args: SelectSubset<T, admin_roleDeleteArgs>
    ): Prisma__admin_roleClient<admin_roleGetPayload<T>>

    /**
     * Update one Admin_role.
     * @param {admin_roleUpdateArgs} args - Arguments to update one Admin_role.
     * @example
     * // Update one Admin_role
     * const admin_role = await prisma.admin_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends admin_roleUpdateArgs>(
      args: SelectSubset<T, admin_roleUpdateArgs>
    ): Prisma__admin_roleClient<admin_roleGetPayload<T>>

    /**
     * Delete zero or more Admin_roles.
     * @param {admin_roleDeleteManyArgs} args - Arguments to filter Admin_roles to delete.
     * @example
     * // Delete a few Admin_roles
     * const { count } = await prisma.admin_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends admin_roleDeleteManyArgs>(
      args?: SelectSubset<T, admin_roleDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_roles
     * const admin_role = await prisma.admin_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends admin_roleUpdateManyArgs>(
      args: SelectSubset<T, admin_roleUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin_role.
     * @param {admin_roleUpsertArgs} args - Arguments to update or create a Admin_role.
     * @example
     * // Update or create a Admin_role
     * const admin_role = await prisma.admin_role.upsert({
     *   create: {
     *     // ... data to create a Admin_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_role we want to update
     *   }
     * })
    **/
    upsert<T extends admin_roleUpsertArgs>(
      args: SelectSubset<T, admin_roleUpsertArgs>
    ): Prisma__admin_roleClient<admin_roleGetPayload<T>>

    /**
     * Count the number of Admin_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_roleCountArgs} args - Arguments to filter Admin_roles to count.
     * @example
     * // Count the number of Admin_roles
     * const count = await prisma.admin_role.count({
     *   where: {
     *     // ... the filter for the Admin_roles we want to count
     *   }
     * })
    **/
    count<T extends admin_roleCountArgs>(
      args?: Subset<T, admin_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Admin_roleAggregateArgs>(args: Subset<T, Admin_roleAggregateArgs>): Prisma.PrismaPromise<GetAdmin_roleAggregateType<T>>

    /**
     * Group by Admin_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_roleGroupByArgs} args - Group by arguments.
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
      T extends Admin_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Admin_roleGroupByArgs['orderBy'] }
        : { orderBy?: Admin_roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Admin_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for admin_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__admin_roleClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    admin_user<T extends admin_role$admin_userArgs= {}>(args?: Subset<T, admin_role$admin_userArgs>): Prisma.PrismaPromise<Array<admin_userGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * admin_role base type for findUnique actions
   */
  export type admin_roleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_roleInclude | null
    /**
     * Filter, which admin_role to fetch.
     */
    where: admin_roleWhereUniqueInput
  }

  /**
   * admin_role findUnique
   */
  export interface admin_roleFindUniqueArgs extends admin_roleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * admin_role findUniqueOrThrow
   */
  export type admin_roleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_roleInclude | null
    /**
     * Filter, which admin_role to fetch.
     */
    where: admin_roleWhereUniqueInput
  }


  /**
   * admin_role base type for findFirst actions
   */
  export type admin_roleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_roleInclude | null
    /**
     * Filter, which admin_role to fetch.
     */
    where?: admin_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_roles to fetch.
     */
    orderBy?: Enumerable<admin_roleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_roles.
     */
    cursor?: admin_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_roles.
     */
    distinct?: Enumerable<Admin_roleScalarFieldEnum>
  }

  /**
   * admin_role findFirst
   */
  export interface admin_roleFindFirstArgs extends admin_roleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * admin_role findFirstOrThrow
   */
  export type admin_roleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_roleInclude | null
    /**
     * Filter, which admin_role to fetch.
     */
    where?: admin_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_roles to fetch.
     */
    orderBy?: Enumerable<admin_roleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_roles.
     */
    cursor?: admin_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_roles.
     */
    distinct?: Enumerable<Admin_roleScalarFieldEnum>
  }


  /**
   * admin_role findMany
   */
  export type admin_roleFindManyArgs = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_roleInclude | null
    /**
     * Filter, which admin_roles to fetch.
     */
    where?: admin_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_roles to fetch.
     */
    orderBy?: Enumerable<admin_roleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admin_roles.
     */
    cursor?: admin_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_roles.
     */
    skip?: number
    distinct?: Enumerable<Admin_roleScalarFieldEnum>
  }


  /**
   * admin_role create
   */
  export type admin_roleCreateArgs = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_roleInclude | null
    /**
     * The data needed to create a admin_role.
     */
    data: XOR<admin_roleCreateInput, admin_roleUncheckedCreateInput>
  }


  /**
   * admin_role createMany
   */
  export type admin_roleCreateManyArgs = {
    /**
     * The data used to create many admin_roles.
     */
    data: Enumerable<admin_roleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * admin_role update
   */
  export type admin_roleUpdateArgs = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_roleInclude | null
    /**
     * The data needed to update a admin_role.
     */
    data: XOR<admin_roleUpdateInput, admin_roleUncheckedUpdateInput>
    /**
     * Choose, which admin_role to update.
     */
    where: admin_roleWhereUniqueInput
  }


  /**
   * admin_role updateMany
   */
  export type admin_roleUpdateManyArgs = {
    /**
     * The data used to update admin_roles.
     */
    data: XOR<admin_roleUpdateManyMutationInput, admin_roleUncheckedUpdateManyInput>
    /**
     * Filter which admin_roles to update
     */
    where?: admin_roleWhereInput
  }


  /**
   * admin_role upsert
   */
  export type admin_roleUpsertArgs = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_roleInclude | null
    /**
     * The filter to search for the admin_role to update in case it exists.
     */
    where: admin_roleWhereUniqueInput
    /**
     * In case the admin_role found by the `where` argument doesn't exist, create a new admin_role with this data.
     */
    create: XOR<admin_roleCreateInput, admin_roleUncheckedCreateInput>
    /**
     * In case the admin_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admin_roleUpdateInput, admin_roleUncheckedUpdateInput>
  }


  /**
   * admin_role delete
   */
  export type admin_roleDeleteArgs = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_roleInclude | null
    /**
     * Filter which admin_role to delete.
     */
    where: admin_roleWhereUniqueInput
  }


  /**
   * admin_role deleteMany
   */
  export type admin_roleDeleteManyArgs = {
    /**
     * Filter which admin_roles to delete
     */
    where?: admin_roleWhereInput
  }


  /**
   * admin_role.admin_user
   */
  export type admin_role$admin_userArgs = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_userInclude | null
    where?: admin_userWhereInput
    orderBy?: Enumerable<admin_userOrderByWithRelationInput>
    cursor?: admin_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Admin_userScalarFieldEnum>
  }


  /**
   * admin_role without action
   */
  export type admin_roleArgs = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_roleInclude | null
  }



  /**
   * Model admin_user
   */


  export type AggregateAdmin_user = {
    _count: Admin_userCountAggregateOutputType | null
    _avg: Admin_userAvgAggregateOutputType | null
    _sum: Admin_userSumAggregateOutputType | null
    _min: Admin_userMinAggregateOutputType | null
    _max: Admin_userMaxAggregateOutputType | null
  }

  export type Admin_userAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type Admin_userSumAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type Admin_userMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role_id: number | null
    active: boolean | null
    token: string | null
    created_at: Date | null
    updated_at: Date | null
    access_token: string | null
    id_token: string | null
  }

  export type Admin_userMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role_id: number | null
    active: boolean | null
    token: string | null
    created_at: Date | null
    updated_at: Date | null
    access_token: string | null
    id_token: string | null
  }

  export type Admin_userCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role_id: number
    active: number
    token: number
    created_at: number
    updated_at: number
    access_token: number
    id_token: number
    _all: number
  }


  export type Admin_userAvgAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type Admin_userSumAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type Admin_userMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role_id?: true
    active?: true
    token?: true
    created_at?: true
    updated_at?: true
    access_token?: true
    id_token?: true
  }

  export type Admin_userMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role_id?: true
    active?: true
    token?: true
    created_at?: true
    updated_at?: true
    access_token?: true
    id_token?: true
  }

  export type Admin_userCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role_id?: true
    active?: true
    token?: true
    created_at?: true
    updated_at?: true
    access_token?: true
    id_token?: true
    _all?: true
  }

  export type Admin_userAggregateArgs = {
    /**
     * Filter which admin_user to aggregate.
     */
    where?: admin_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_users to fetch.
     */
    orderBy?: Enumerable<admin_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admin_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admin_users
    **/
    _count?: true | Admin_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Admin_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Admin_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_userMaxAggregateInputType
  }

  export type GetAdmin_userAggregateType<T extends Admin_userAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_user[P]>
      : GetScalarType<T[P], AggregateAdmin_user[P]>
  }




  export type Admin_userGroupByArgs = {
    where?: admin_userWhereInput
    orderBy?: Enumerable<admin_userOrderByWithAggregationInput>
    by: Admin_userScalarFieldEnum[]
    having?: admin_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_userCountAggregateInputType | true
    _avg?: Admin_userAvgAggregateInputType
    _sum?: Admin_userSumAggregateInputType
    _min?: Admin_userMinAggregateInputType
    _max?: Admin_userMaxAggregateInputType
  }


  export type Admin_userGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    role_id: number
    active: boolean
    token: string | null
    created_at: Date
    updated_at: Date | null
    access_token: string | null
    id_token: string | null
    _count: Admin_userCountAggregateOutputType | null
    _avg: Admin_userAvgAggregateOutputType | null
    _sum: Admin_userSumAggregateOutputType | null
    _min: Admin_userMinAggregateOutputType | null
    _max: Admin_userMaxAggregateOutputType | null
  }

  type GetAdmin_userGroupByPayload<T extends Admin_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Admin_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_userGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_userGroupByOutputType[P]>
        }
      >
    >


  export type admin_userSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role_id?: boolean
    active?: boolean
    token?: boolean
    created_at?: boolean
    updated_at?: boolean
    access_token?: boolean
    id_token?: boolean
    admin_role?: boolean | admin_roleArgs
    user?: boolean | admin_user$userArgs
    _count?: boolean | Admin_userCountOutputTypeArgs
  }


  export type admin_userInclude = {
    admin_role?: boolean | admin_roleArgs
    user?: boolean | admin_user$userArgs
    _count?: boolean | Admin_userCountOutputTypeArgs
  }

  export type admin_userGetPayload<S extends boolean | null | undefined | admin_userArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? admin_user :
    S extends undefined ? never :
    S extends { include: any } & (admin_userArgs | admin_userFindManyArgs)
    ? admin_user  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'admin_role' ? admin_roleGetPayload<S['include'][P]> :
        P extends 'user' ? Array < userGetPayload<S['include'][P]>>  :
        P extends '_count' ? Admin_userCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (admin_userArgs | admin_userFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'admin_role' ? admin_roleGetPayload<S['select'][P]> :
        P extends 'user' ? Array < userGetPayload<S['select'][P]>>  :
        P extends '_count' ? Admin_userCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof admin_user ? admin_user[P] : never
  } 
      : admin_user


  type admin_userCountArgs = 
    Omit<admin_userFindManyArgs, 'select' | 'include'> & {
      select?: Admin_userCountAggregateInputType | true
    }

  export interface admin_userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Admin_user that matches the filter.
     * @param {admin_userFindUniqueArgs} args - Arguments to find a Admin_user
     * @example
     * // Get one Admin_user
     * const admin_user = await prisma.admin_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends admin_userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, admin_userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'admin_user'> extends True ? Prisma__admin_userClient<admin_userGetPayload<T>> : Prisma__admin_userClient<admin_userGetPayload<T> | null, null>

    /**
     * Find one Admin_user that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {admin_userFindUniqueOrThrowArgs} args - Arguments to find a Admin_user
     * @example
     * // Get one Admin_user
     * const admin_user = await prisma.admin_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends admin_userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, admin_userFindUniqueOrThrowArgs>
    ): Prisma__admin_userClient<admin_userGetPayload<T>>

    /**
     * Find the first Admin_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_userFindFirstArgs} args - Arguments to find a Admin_user
     * @example
     * // Get one Admin_user
     * const admin_user = await prisma.admin_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends admin_userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, admin_userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'admin_user'> extends True ? Prisma__admin_userClient<admin_userGetPayload<T>> : Prisma__admin_userClient<admin_userGetPayload<T> | null, null>

    /**
     * Find the first Admin_user that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_userFindFirstOrThrowArgs} args - Arguments to find a Admin_user
     * @example
     * // Get one Admin_user
     * const admin_user = await prisma.admin_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends admin_userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, admin_userFindFirstOrThrowArgs>
    ): Prisma__admin_userClient<admin_userGetPayload<T>>

    /**
     * Find zero or more Admin_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_users
     * const admin_users = await prisma.admin_user.findMany()
     * 
     * // Get first 10 Admin_users
     * const admin_users = await prisma.admin_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admin_userWithIdOnly = await prisma.admin_user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends admin_userFindManyArgs>(
      args?: SelectSubset<T, admin_userFindManyArgs>
    ): Prisma.PrismaPromise<Array<admin_userGetPayload<T>>>

    /**
     * Create a Admin_user.
     * @param {admin_userCreateArgs} args - Arguments to create a Admin_user.
     * @example
     * // Create one Admin_user
     * const Admin_user = await prisma.admin_user.create({
     *   data: {
     *     // ... data to create a Admin_user
     *   }
     * })
     * 
    **/
    create<T extends admin_userCreateArgs>(
      args: SelectSubset<T, admin_userCreateArgs>
    ): Prisma__admin_userClient<admin_userGetPayload<T>>

    /**
     * Create many Admin_users.
     *     @param {admin_userCreateManyArgs} args - Arguments to create many Admin_users.
     *     @example
     *     // Create many Admin_users
     *     const admin_user = await prisma.admin_user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends admin_userCreateManyArgs>(
      args?: SelectSubset<T, admin_userCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin_user.
     * @param {admin_userDeleteArgs} args - Arguments to delete one Admin_user.
     * @example
     * // Delete one Admin_user
     * const Admin_user = await prisma.admin_user.delete({
     *   where: {
     *     // ... filter to delete one Admin_user
     *   }
     * })
     * 
    **/
    delete<T extends admin_userDeleteArgs>(
      args: SelectSubset<T, admin_userDeleteArgs>
    ): Prisma__admin_userClient<admin_userGetPayload<T>>

    /**
     * Update one Admin_user.
     * @param {admin_userUpdateArgs} args - Arguments to update one Admin_user.
     * @example
     * // Update one Admin_user
     * const admin_user = await prisma.admin_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends admin_userUpdateArgs>(
      args: SelectSubset<T, admin_userUpdateArgs>
    ): Prisma__admin_userClient<admin_userGetPayload<T>>

    /**
     * Delete zero or more Admin_users.
     * @param {admin_userDeleteManyArgs} args - Arguments to filter Admin_users to delete.
     * @example
     * // Delete a few Admin_users
     * const { count } = await prisma.admin_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends admin_userDeleteManyArgs>(
      args?: SelectSubset<T, admin_userDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_users
     * const admin_user = await prisma.admin_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends admin_userUpdateManyArgs>(
      args: SelectSubset<T, admin_userUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin_user.
     * @param {admin_userUpsertArgs} args - Arguments to update or create a Admin_user.
     * @example
     * // Update or create a Admin_user
     * const admin_user = await prisma.admin_user.upsert({
     *   create: {
     *     // ... data to create a Admin_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_user we want to update
     *   }
     * })
    **/
    upsert<T extends admin_userUpsertArgs>(
      args: SelectSubset<T, admin_userUpsertArgs>
    ): Prisma__admin_userClient<admin_userGetPayload<T>>

    /**
     * Count the number of Admin_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_userCountArgs} args - Arguments to filter Admin_users to count.
     * @example
     * // Count the number of Admin_users
     * const count = await prisma.admin_user.count({
     *   where: {
     *     // ... the filter for the Admin_users we want to count
     *   }
     * })
    **/
    count<T extends admin_userCountArgs>(
      args?: Subset<T, admin_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Admin_userAggregateArgs>(args: Subset<T, Admin_userAggregateArgs>): Prisma.PrismaPromise<GetAdmin_userAggregateType<T>>

    /**
     * Group by Admin_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_userGroupByArgs} args - Group by arguments.
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
      T extends Admin_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Admin_userGroupByArgs['orderBy'] }
        : { orderBy?: Admin_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Admin_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for admin_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__admin_userClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    admin_role<T extends admin_roleArgs= {}>(args?: Subset<T, admin_roleArgs>): Prisma__admin_roleClient<admin_roleGetPayload<T> | Null>;

    user<T extends admin_user$userArgs= {}>(args?: Subset<T, admin_user$userArgs>): Prisma.PrismaPromise<Array<userGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * admin_user base type for findUnique actions
   */
  export type admin_userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_userInclude | null
    /**
     * Filter, which admin_user to fetch.
     */
    where: admin_userWhereUniqueInput
  }

  /**
   * admin_user findUnique
   */
  export interface admin_userFindUniqueArgs extends admin_userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * admin_user findUniqueOrThrow
   */
  export type admin_userFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_userInclude | null
    /**
     * Filter, which admin_user to fetch.
     */
    where: admin_userWhereUniqueInput
  }


  /**
   * admin_user base type for findFirst actions
   */
  export type admin_userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_userInclude | null
    /**
     * Filter, which admin_user to fetch.
     */
    where?: admin_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_users to fetch.
     */
    orderBy?: Enumerable<admin_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_users.
     */
    cursor?: admin_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_users.
     */
    distinct?: Enumerable<Admin_userScalarFieldEnum>
  }

  /**
   * admin_user findFirst
   */
  export interface admin_userFindFirstArgs extends admin_userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * admin_user findFirstOrThrow
   */
  export type admin_userFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_userInclude | null
    /**
     * Filter, which admin_user to fetch.
     */
    where?: admin_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_users to fetch.
     */
    orderBy?: Enumerable<admin_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_users.
     */
    cursor?: admin_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_users.
     */
    distinct?: Enumerable<Admin_userScalarFieldEnum>
  }


  /**
   * admin_user findMany
   */
  export type admin_userFindManyArgs = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_userInclude | null
    /**
     * Filter, which admin_users to fetch.
     */
    where?: admin_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_users to fetch.
     */
    orderBy?: Enumerable<admin_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admin_users.
     */
    cursor?: admin_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_users.
     */
    skip?: number
    distinct?: Enumerable<Admin_userScalarFieldEnum>
  }


  /**
   * admin_user create
   */
  export type admin_userCreateArgs = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_userInclude | null
    /**
     * The data needed to create a admin_user.
     */
    data: XOR<admin_userCreateInput, admin_userUncheckedCreateInput>
  }


  /**
   * admin_user createMany
   */
  export type admin_userCreateManyArgs = {
    /**
     * The data used to create many admin_users.
     */
    data: Enumerable<admin_userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * admin_user update
   */
  export type admin_userUpdateArgs = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_userInclude | null
    /**
     * The data needed to update a admin_user.
     */
    data: XOR<admin_userUpdateInput, admin_userUncheckedUpdateInput>
    /**
     * Choose, which admin_user to update.
     */
    where: admin_userWhereUniqueInput
  }


  /**
   * admin_user updateMany
   */
  export type admin_userUpdateManyArgs = {
    /**
     * The data used to update admin_users.
     */
    data: XOR<admin_userUpdateManyMutationInput, admin_userUncheckedUpdateManyInput>
    /**
     * Filter which admin_users to update
     */
    where?: admin_userWhereInput
  }


  /**
   * admin_user upsert
   */
  export type admin_userUpsertArgs = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_userInclude | null
    /**
     * The filter to search for the admin_user to update in case it exists.
     */
    where: admin_userWhereUniqueInput
    /**
     * In case the admin_user found by the `where` argument doesn't exist, create a new admin_user with this data.
     */
    create: XOR<admin_userCreateInput, admin_userUncheckedCreateInput>
    /**
     * In case the admin_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admin_userUpdateInput, admin_userUncheckedUpdateInput>
  }


  /**
   * admin_user delete
   */
  export type admin_userDeleteArgs = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_userInclude | null
    /**
     * Filter which admin_user to delete.
     */
    where: admin_userWhereUniqueInput
  }


  /**
   * admin_user deleteMany
   */
  export type admin_userDeleteManyArgs = {
    /**
     * Filter which admin_users to delete
     */
    where?: admin_userWhereInput
  }


  /**
   * admin_user.user
   */
  export type admin_user$userArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    where?: userWhereInput
    orderBy?: Enumerable<userOrderByWithRelationInput>
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * admin_user without action
   */
  export type admin_userArgs = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: admin_userInclude | null
  }



  /**
   * Model user
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    score: number | null
    diamond: number | null
    login_count: number | null
    bankScore: number | null
    access_token: number | null
    id_token: number | null
    created_by_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    score: number | null
    diamond: number | null
    login_count: number | null
    bankScore: number | null
    access_token: number | null
    id_token: number | null
    created_by_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    name: string | null
    score: number | null
    diamond: number | null
    login_count: number | null
    phone_number: string | null
    head_image: string | null
    sex: boolean | null
    bankPwd: string | null
    bankScore: number | null
    is_vip: boolean | null
    access_token: number | null
    id_token: number | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    qa_bypass: string | null
    created_by_id: number | null
    is_robot: boolean | null
    passval: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    name: string | null
    score: number | null
    diamond: number | null
    login_count: number | null
    phone_number: string | null
    head_image: string | null
    sex: boolean | null
    bankPwd: string | null
    bankScore: number | null
    is_vip: boolean | null
    access_token: number | null
    id_token: number | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    qa_bypass: string | null
    created_by_id: number | null
    is_robot: boolean | null
    passval: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    username: number
    name: number
    score: number
    diamond: number
    login_count: number
    phone_number: number
    head_image: number
    sex: number
    bankPwd: number
    bankScore: number
    is_vip: number
    access_token: number
    id_token: number
    active: number
    created_at: number
    updated_at: number
    qa_bypass: number
    created_by_id: number
    is_robot: number
    passval: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    score?: true
    diamond?: true
    login_count?: true
    bankScore?: true
    access_token?: true
    id_token?: true
    created_by_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    score?: true
    diamond?: true
    login_count?: true
    bankScore?: true
    access_token?: true
    id_token?: true
    created_by_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    name?: true
    score?: true
    diamond?: true
    login_count?: true
    phone_number?: true
    head_image?: true
    sex?: true
    bankPwd?: true
    bankScore?: true
    is_vip?: true
    access_token?: true
    id_token?: true
    active?: true
    created_at?: true
    updated_at?: true
    qa_bypass?: true
    created_by_id?: true
    is_robot?: true
    passval?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    name?: true
    score?: true
    diamond?: true
    login_count?: true
    phone_number?: true
    head_image?: true
    sex?: true
    bankPwd?: true
    bankScore?: true
    is_vip?: true
    access_token?: true
    id_token?: true
    active?: true
    created_at?: true
    updated_at?: true
    qa_bypass?: true
    created_by_id?: true
    is_robot?: true
    passval?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    name?: true
    score?: true
    diamond?: true
    login_count?: true
    phone_number?: true
    head_image?: true
    sex?: true
    bankPwd?: true
    bankScore?: true
    is_vip?: true
    access_token?: true
    id_token?: true
    active?: true
    created_at?: true
    updated_at?: true
    qa_bypass?: true
    created_by_id?: true
    is_robot?: true
    passval?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
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




  export type UserGroupByArgs = {
    where?: userWhereInput
    orderBy?: Enumerable<userOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    username: string
    name: string
    score: number
    diamond: number
    login_count: number
    phone_number: string
    head_image: string
    sex: boolean | null
    bankPwd: string
    bankScore: number
    is_vip: boolean
    access_token: number | null
    id_token: number | null
    active: boolean
    created_at: Date
    updated_at: Date | null
    qa_bypass: string | null
    created_by_id: number
    is_robot: boolean
    passval: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    name?: boolean
    score?: boolean
    diamond?: boolean
    login_count?: boolean
    phone_number?: boolean
    head_image?: boolean
    sex?: boolean
    bankPwd?: boolean
    bankScore?: boolean
    is_vip?: boolean
    access_token?: boolean
    id_token?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    qa_bypass?: boolean
    created_by_id?: boolean
    is_robot?: boolean
    passval?: boolean
    admin_user?: boolean | admin_userArgs
  }


  export type userInclude = {
    admin_user?: boolean | admin_userArgs
  }

  export type userGetPayload<S extends boolean | null | undefined | userArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? user :
    S extends undefined ? never :
    S extends { include: any } & (userArgs | userFindManyArgs)
    ? user  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'admin_user' ? admin_userGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (userArgs | userFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'admin_user' ? admin_userGetPayload<S['select'][P]> :  P extends keyof user ? user[P] : never
  } 
      : user


  type userCountArgs = 
    Omit<userFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user'> extends True ? Prisma__userClient<userGetPayload<T>> : Prisma__userClient<userGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user'> extends True ? Prisma__userClient<userGetPayload<T>> : Prisma__userClient<userGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends userFindManyArgs>(
      args?: SelectSubset<T, userFindManyArgs>
    ): Prisma.PrismaPromise<Array<userGetPayload<T>>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs>(
      args: SelectSubset<T, userCreateArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs>(
      args?: SelectSubset<T, userCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs>(
      args: SelectSubset<T, userDeleteArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    **/
    update<T extends userUpdateArgs>(
      args: SelectSubset<T, userUpdateArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs>(
      args?: SelectSubset<T, userDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    **/
    updateMany<T extends userUpdateManyArgs>(
      args: SelectSubset<T, userUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    **/
    upsert<T extends userUpsertArgs>(
      args: SelectSubset<T, userUpsertArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__userClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    admin_user<T extends admin_userArgs= {}>(args?: Subset<T, admin_userArgs>): Prisma__admin_userClient<admin_userGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * user base type for findUnique actions
   */
  export type userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUnique
   */
  export interface userFindUniqueArgs extends userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user base type for findFirst actions
   */
  export type userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * user findFirst
   */
  export interface userFindFirstArgs extends userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user findMany
   */
  export type userFindManyArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user create
   */
  export type userCreateArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs = {
    /**
     * The data used to create many users.
     */
    data: Enumerable<userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user update
   */
  export type userUpdateArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user without action
   */
  export type userArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Admin_roleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    can_get_user: 'can_get_user',
    can_create_user: 'can_create_user',
    can_create_admin: 'can_create_admin',
    can_delete_user: 'can_delete_user',
    can_alter_user: 'can_alter_user',
    can_search_users: 'can_search_users',
    can_batch_alter_users: 'can_batch_alter_users',
    can_set_perms: 'can_set_perms',
    bypass_auth: 'bypass_auth',
    active: 'active',
    superuser: 'superuser',
    updated_at: 'updated_at',
    can_list_users: 'can_list_users'
  };

  export type Admin_roleScalarFieldEnum = (typeof Admin_roleScalarFieldEnum)[keyof typeof Admin_roleScalarFieldEnum]


  export const Admin_userScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role_id: 'role_id',
    active: 'active',
    token: 'token',
    created_at: 'created_at',
    updated_at: 'updated_at',
    access_token: 'access_token',
    id_token: 'id_token'
  };

  export type Admin_userScalarFieldEnum = (typeof Admin_userScalarFieldEnum)[keyof typeof Admin_userScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    username: 'username',
    name: 'name',
    score: 'score',
    diamond: 'diamond',
    login_count: 'login_count',
    phone_number: 'phone_number',
    head_image: 'head_image',
    sex: 'sex',
    bankPwd: 'bankPwd',
    bankScore: 'bankScore',
    is_vip: 'is_vip',
    access_token: 'access_token',
    id_token: 'id_token',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at',
    qa_bypass: 'qa_bypass',
    created_by_id: 'created_by_id',
    is_robot: 'is_robot',
    passval: 'passval'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type admin_roleWhereInput = {
    AND?: Enumerable<admin_roleWhereInput>
    OR?: Enumerable<admin_roleWhereInput>
    NOT?: Enumerable<admin_roleWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    can_get_user?: BoolFilter | boolean
    can_create_user?: BoolFilter | boolean
    can_create_admin?: BoolFilter | boolean
    can_delete_user?: BoolFilter | boolean
    can_alter_user?: BoolFilter | boolean
    can_search_users?: BoolFilter | boolean
    can_batch_alter_users?: BoolFilter | boolean
    can_set_perms?: BoolFilter | boolean
    bypass_auth?: BoolFilter | boolean
    active?: BoolFilter | boolean
    superuser?: BoolFilter | boolean
    updated_at?: DateTimeFilter | Date | string
    can_list_users?: BoolFilter | boolean
    admin_user?: Admin_userListRelationFilter
  }

  export type admin_roleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    can_get_user?: SortOrder
    can_create_user?: SortOrder
    can_create_admin?: SortOrder
    can_delete_user?: SortOrder
    can_alter_user?: SortOrder
    can_search_users?: SortOrder
    can_batch_alter_users?: SortOrder
    can_set_perms?: SortOrder
    bypass_auth?: SortOrder
    active?: SortOrder
    superuser?: SortOrder
    updated_at?: SortOrder
    can_list_users?: SortOrder
    admin_user?: admin_userOrderByRelationAggregateInput
  }

  export type admin_roleWhereUniqueInput = {
    id?: number
  }

  export type admin_roleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    can_get_user?: SortOrder
    can_create_user?: SortOrder
    can_create_admin?: SortOrder
    can_delete_user?: SortOrder
    can_alter_user?: SortOrder
    can_search_users?: SortOrder
    can_batch_alter_users?: SortOrder
    can_set_perms?: SortOrder
    bypass_auth?: SortOrder
    active?: SortOrder
    superuser?: SortOrder
    updated_at?: SortOrder
    can_list_users?: SortOrder
    _count?: admin_roleCountOrderByAggregateInput
    _avg?: admin_roleAvgOrderByAggregateInput
    _max?: admin_roleMaxOrderByAggregateInput
    _min?: admin_roleMinOrderByAggregateInput
    _sum?: admin_roleSumOrderByAggregateInput
  }

  export type admin_roleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<admin_roleScalarWhereWithAggregatesInput>
    OR?: Enumerable<admin_roleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<admin_roleScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    can_get_user?: BoolWithAggregatesFilter | boolean
    can_create_user?: BoolWithAggregatesFilter | boolean
    can_create_admin?: BoolWithAggregatesFilter | boolean
    can_delete_user?: BoolWithAggregatesFilter | boolean
    can_alter_user?: BoolWithAggregatesFilter | boolean
    can_search_users?: BoolWithAggregatesFilter | boolean
    can_batch_alter_users?: BoolWithAggregatesFilter | boolean
    can_set_perms?: BoolWithAggregatesFilter | boolean
    bypass_auth?: BoolWithAggregatesFilter | boolean
    active?: BoolWithAggregatesFilter | boolean
    superuser?: BoolWithAggregatesFilter | boolean
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    can_list_users?: BoolWithAggregatesFilter | boolean
  }

  export type admin_userWhereInput = {
    AND?: Enumerable<admin_userWhereInput>
    OR?: Enumerable<admin_userWhereInput>
    NOT?: Enumerable<admin_userWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    name?: StringFilter | string
    role_id?: IntFilter | number
    active?: BoolFilter | boolean
    token?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    access_token?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    admin_role?: XOR<Admin_roleRelationFilter, admin_roleWhereInput>
    user?: UserListRelationFilter
  }

  export type admin_userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role_id?: SortOrder
    active?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    access_token?: SortOrder
    id_token?: SortOrder
    admin_role?: admin_roleOrderByWithRelationInput
    user?: userOrderByRelationAggregateInput
  }

  export type admin_userWhereUniqueInput = {
    id?: number
    id_email_name?: admin_userIdEmailNameCompoundUniqueInput
  }

  export type admin_userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role_id?: SortOrder
    active?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    access_token?: SortOrder
    id_token?: SortOrder
    _count?: admin_userCountOrderByAggregateInput
    _avg?: admin_userAvgOrderByAggregateInput
    _max?: admin_userMaxOrderByAggregateInput
    _min?: admin_userMinOrderByAggregateInput
    _sum?: admin_userSumOrderByAggregateInput
  }

  export type admin_userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<admin_userScalarWhereWithAggregatesInput>
    OR?: Enumerable<admin_userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<admin_userScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    role_id?: IntWithAggregatesFilter | number
    active?: BoolWithAggregatesFilter | boolean
    token?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    access_token?: StringNullableWithAggregatesFilter | string | null
    id_token?: StringNullableWithAggregatesFilter | string | null
  }

  export type userWhereInput = {
    AND?: Enumerable<userWhereInput>
    OR?: Enumerable<userWhereInput>
    NOT?: Enumerable<userWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    username?: StringFilter | string
    name?: StringFilter | string
    score?: IntFilter | number
    diamond?: IntFilter | number
    login_count?: IntFilter | number
    phone_number?: StringFilter | string
    head_image?: StringFilter | string
    sex?: BoolNullableFilter | boolean | null
    bankPwd?: StringFilter | string
    bankScore?: IntFilter | number
    is_vip?: BoolFilter | boolean
    access_token?: IntNullableFilter | number | null
    id_token?: IntNullableFilter | number | null
    active?: BoolFilter | boolean
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    qa_bypass?: StringNullableFilter | string | null
    created_by_id?: IntFilter | number
    is_robot?: BoolFilter | boolean
    passval?: StringFilter | string
    admin_user?: XOR<Admin_userRelationFilter, admin_userWhereInput>
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    name?: SortOrder
    score?: SortOrder
    diamond?: SortOrder
    login_count?: SortOrder
    phone_number?: SortOrder
    head_image?: SortOrder
    sex?: SortOrder
    bankPwd?: SortOrder
    bankScore?: SortOrder
    is_vip?: SortOrder
    access_token?: SortOrder
    id_token?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    qa_bypass?: SortOrder
    created_by_id?: SortOrder
    is_robot?: SortOrder
    passval?: SortOrder
    admin_user?: admin_userOrderByWithRelationInput
  }

  export type userWhereUniqueInput = {
    id_email_username_phone_number?: userIdEmailUsernamePhone_numberCompoundUniqueInput
  }

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    name?: SortOrder
    score?: SortOrder
    diamond?: SortOrder
    login_count?: SortOrder
    phone_number?: SortOrder
    head_image?: SortOrder
    sex?: SortOrder
    bankPwd?: SortOrder
    bankScore?: SortOrder
    is_vip?: SortOrder
    access_token?: SortOrder
    id_token?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    qa_bypass?: SortOrder
    created_by_id?: SortOrder
    is_robot?: SortOrder
    passval?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<userScalarWhereWithAggregatesInput>
    OR?: Enumerable<userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<userScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    score?: IntWithAggregatesFilter | number
    diamond?: IntWithAggregatesFilter | number
    login_count?: IntWithAggregatesFilter | number
    phone_number?: StringWithAggregatesFilter | string
    head_image?: StringWithAggregatesFilter | string
    sex?: BoolNullableWithAggregatesFilter | boolean | null
    bankPwd?: StringWithAggregatesFilter | string
    bankScore?: IntWithAggregatesFilter | number
    is_vip?: BoolWithAggregatesFilter | boolean
    access_token?: IntNullableWithAggregatesFilter | number | null
    id_token?: IntNullableWithAggregatesFilter | number | null
    active?: BoolWithAggregatesFilter | boolean
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    qa_bypass?: StringNullableWithAggregatesFilter | string | null
    created_by_id?: IntWithAggregatesFilter | number
    is_robot?: BoolWithAggregatesFilter | boolean
    passval?: StringWithAggregatesFilter | string
  }

  export type admin_roleCreateInput = {
    name: string
    can_get_user: boolean
    can_create_user: boolean
    can_create_admin: boolean
    can_delete_user: boolean
    can_alter_user: boolean
    can_search_users: boolean
    can_batch_alter_users: boolean
    can_set_perms: boolean
    bypass_auth: boolean
    active: boolean
    superuser: boolean
    updated_at?: Date | string
    can_list_users: boolean
    admin_user?: admin_userCreateNestedManyWithoutAdmin_roleInput
  }

  export type admin_roleUncheckedCreateInput = {
    id?: number
    name: string
    can_get_user: boolean
    can_create_user: boolean
    can_create_admin: boolean
    can_delete_user: boolean
    can_alter_user: boolean
    can_search_users: boolean
    can_batch_alter_users: boolean
    can_set_perms: boolean
    bypass_auth: boolean
    active: boolean
    superuser: boolean
    updated_at?: Date | string
    can_list_users: boolean
    admin_user?: admin_userUncheckedCreateNestedManyWithoutAdmin_roleInput
  }

  export type admin_roleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    can_get_user?: BoolFieldUpdateOperationsInput | boolean
    can_create_user?: BoolFieldUpdateOperationsInput | boolean
    can_create_admin?: BoolFieldUpdateOperationsInput | boolean
    can_delete_user?: BoolFieldUpdateOperationsInput | boolean
    can_alter_user?: BoolFieldUpdateOperationsInput | boolean
    can_search_users?: BoolFieldUpdateOperationsInput | boolean
    can_batch_alter_users?: BoolFieldUpdateOperationsInput | boolean
    can_set_perms?: BoolFieldUpdateOperationsInput | boolean
    bypass_auth?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    superuser?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    can_list_users?: BoolFieldUpdateOperationsInput | boolean
    admin_user?: admin_userUpdateManyWithoutAdmin_roleNestedInput
  }

  export type admin_roleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    can_get_user?: BoolFieldUpdateOperationsInput | boolean
    can_create_user?: BoolFieldUpdateOperationsInput | boolean
    can_create_admin?: BoolFieldUpdateOperationsInput | boolean
    can_delete_user?: BoolFieldUpdateOperationsInput | boolean
    can_alter_user?: BoolFieldUpdateOperationsInput | boolean
    can_search_users?: BoolFieldUpdateOperationsInput | boolean
    can_batch_alter_users?: BoolFieldUpdateOperationsInput | boolean
    can_set_perms?: BoolFieldUpdateOperationsInput | boolean
    bypass_auth?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    superuser?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    can_list_users?: BoolFieldUpdateOperationsInput | boolean
    admin_user?: admin_userUncheckedUpdateManyWithoutAdmin_roleNestedInput
  }

  export type admin_roleCreateManyInput = {
    id?: number
    name: string
    can_get_user: boolean
    can_create_user: boolean
    can_create_admin: boolean
    can_delete_user: boolean
    can_alter_user: boolean
    can_search_users: boolean
    can_batch_alter_users: boolean
    can_set_perms: boolean
    bypass_auth: boolean
    active: boolean
    superuser: boolean
    updated_at?: Date | string
    can_list_users: boolean
  }

  export type admin_roleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    can_get_user?: BoolFieldUpdateOperationsInput | boolean
    can_create_user?: BoolFieldUpdateOperationsInput | boolean
    can_create_admin?: BoolFieldUpdateOperationsInput | boolean
    can_delete_user?: BoolFieldUpdateOperationsInput | boolean
    can_alter_user?: BoolFieldUpdateOperationsInput | boolean
    can_search_users?: BoolFieldUpdateOperationsInput | boolean
    can_batch_alter_users?: BoolFieldUpdateOperationsInput | boolean
    can_set_perms?: BoolFieldUpdateOperationsInput | boolean
    bypass_auth?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    superuser?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    can_list_users?: BoolFieldUpdateOperationsInput | boolean
  }

  export type admin_roleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    can_get_user?: BoolFieldUpdateOperationsInput | boolean
    can_create_user?: BoolFieldUpdateOperationsInput | boolean
    can_create_admin?: BoolFieldUpdateOperationsInput | boolean
    can_delete_user?: BoolFieldUpdateOperationsInput | boolean
    can_alter_user?: BoolFieldUpdateOperationsInput | boolean
    can_search_users?: BoolFieldUpdateOperationsInput | boolean
    can_batch_alter_users?: BoolFieldUpdateOperationsInput | boolean
    can_set_perms?: BoolFieldUpdateOperationsInput | boolean
    bypass_auth?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    superuser?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    can_list_users?: BoolFieldUpdateOperationsInput | boolean
  }

  export type admin_userCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    active?: boolean
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    access_token?: string | null
    id_token?: string | null
    admin_role: admin_roleCreateNestedOneWithoutAdmin_userInput
    user?: userCreateNestedManyWithoutAdmin_userInput
  }

  export type admin_userUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    role_id: number
    active?: boolean
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    access_token?: string | null
    id_token?: string | null
    user?: userUncheckedCreateNestedManyWithoutAdmin_userInput
  }

  export type admin_userUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    admin_role?: admin_roleUpdateOneRequiredWithoutAdmin_userNestedInput
    user?: userUpdateManyWithoutAdmin_userNestedInput
  }

  export type admin_userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUncheckedUpdateManyWithoutAdmin_userNestedInput
  }

  export type admin_userCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    role_id: number
    active?: boolean
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    access_token?: string | null
    id_token?: string | null
  }

  export type admin_userUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type admin_userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateInput = {
    id?: number
    email: string
    password: string
    username: string
    name: string
    score: number
    diamond: number
    login_count?: number
    phone_number: string
    head_image: string
    sex?: boolean | null
    bankPwd: string
    bankScore: number
    is_vip: boolean
    access_token?: number | null
    id_token?: number | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    qa_bypass?: string | null
    is_robot?: boolean
    passval: string
    admin_user: admin_userCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    username: string
    name: string
    score: number
    diamond: number
    login_count?: number
    phone_number: string
    head_image: string
    sex?: boolean | null
    bankPwd: string
    bankScore: number
    is_vip: boolean
    access_token?: number | null
    id_token?: number | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    qa_bypass?: string | null
    created_by_id: number
    is_robot?: boolean
    passval: string
  }

  export type userUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    diamond?: IntFieldUpdateOperationsInput | number
    login_count?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    head_image?: StringFieldUpdateOperationsInput | string
    sex?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bankPwd?: StringFieldUpdateOperationsInput | string
    bankScore?: IntFieldUpdateOperationsInput | number
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    access_token?: NullableIntFieldUpdateOperationsInput | number | null
    id_token?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qa_bypass?: NullableStringFieldUpdateOperationsInput | string | null
    is_robot?: BoolFieldUpdateOperationsInput | boolean
    passval?: StringFieldUpdateOperationsInput | string
    admin_user?: admin_userUpdateOneRequiredWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    diamond?: IntFieldUpdateOperationsInput | number
    login_count?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    head_image?: StringFieldUpdateOperationsInput | string
    sex?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bankPwd?: StringFieldUpdateOperationsInput | string
    bankScore?: IntFieldUpdateOperationsInput | number
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    access_token?: NullableIntFieldUpdateOperationsInput | number | null
    id_token?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qa_bypass?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: IntFieldUpdateOperationsInput | number
    is_robot?: BoolFieldUpdateOperationsInput | boolean
    passval?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateManyInput = {
    id?: number
    email: string
    password: string
    username: string
    name: string
    score: number
    diamond: number
    login_count?: number
    phone_number: string
    head_image: string
    sex?: boolean | null
    bankPwd: string
    bankScore: number
    is_vip: boolean
    access_token?: number | null
    id_token?: number | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    qa_bypass?: string | null
    created_by_id: number
    is_robot?: boolean
    passval: string
  }

  export type userUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    diamond?: IntFieldUpdateOperationsInput | number
    login_count?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    head_image?: StringFieldUpdateOperationsInput | string
    sex?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bankPwd?: StringFieldUpdateOperationsInput | string
    bankScore?: IntFieldUpdateOperationsInput | number
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    access_token?: NullableIntFieldUpdateOperationsInput | number | null
    id_token?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qa_bypass?: NullableStringFieldUpdateOperationsInput | string | null
    is_robot?: BoolFieldUpdateOperationsInput | boolean
    passval?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    diamond?: IntFieldUpdateOperationsInput | number
    login_count?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    head_image?: StringFieldUpdateOperationsInput | string
    sex?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bankPwd?: StringFieldUpdateOperationsInput | string
    bankScore?: IntFieldUpdateOperationsInput | number
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    access_token?: NullableIntFieldUpdateOperationsInput | number | null
    id_token?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qa_bypass?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: IntFieldUpdateOperationsInput | number
    is_robot?: BoolFieldUpdateOperationsInput | boolean
    passval?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type Admin_userListRelationFilter = {
    every?: admin_userWhereInput
    some?: admin_userWhereInput
    none?: admin_userWhereInput
  }

  export type admin_userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type admin_roleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    can_get_user?: SortOrder
    can_create_user?: SortOrder
    can_create_admin?: SortOrder
    can_delete_user?: SortOrder
    can_alter_user?: SortOrder
    can_search_users?: SortOrder
    can_batch_alter_users?: SortOrder
    can_set_perms?: SortOrder
    bypass_auth?: SortOrder
    active?: SortOrder
    superuser?: SortOrder
    updated_at?: SortOrder
    can_list_users?: SortOrder
  }

  export type admin_roleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type admin_roleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    can_get_user?: SortOrder
    can_create_user?: SortOrder
    can_create_admin?: SortOrder
    can_delete_user?: SortOrder
    can_alter_user?: SortOrder
    can_search_users?: SortOrder
    can_batch_alter_users?: SortOrder
    can_set_perms?: SortOrder
    bypass_auth?: SortOrder
    active?: SortOrder
    superuser?: SortOrder
    updated_at?: SortOrder
    can_list_users?: SortOrder
  }

  export type admin_roleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    can_get_user?: SortOrder
    can_create_user?: SortOrder
    can_create_admin?: SortOrder
    can_delete_user?: SortOrder
    can_alter_user?: SortOrder
    can_search_users?: SortOrder
    can_batch_alter_users?: SortOrder
    can_set_perms?: SortOrder
    bypass_auth?: SortOrder
    active?: SortOrder
    superuser?: SortOrder
    updated_at?: SortOrder
    can_list_users?: SortOrder
  }

  export type admin_roleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type Admin_roleRelationFilter = {
    is?: admin_roleWhereInput
    isNot?: admin_roleWhereInput
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type admin_userIdEmailNameCompoundUniqueInput = {
    id: number
    email: string
    name: string
  }

  export type admin_userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role_id?: SortOrder
    active?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    access_token?: SortOrder
    id_token?: SortOrder
  }

  export type admin_userAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type admin_userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role_id?: SortOrder
    active?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    access_token?: SortOrder
    id_token?: SortOrder
  }

  export type admin_userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role_id?: SortOrder
    active?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    access_token?: SortOrder
    id_token?: SortOrder
  }

  export type admin_userSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type Admin_userRelationFilter = {
    is?: admin_userWhereInput
    isNot?: admin_userWhereInput
  }

  export type userIdEmailUsernamePhone_numberCompoundUniqueInput = {
    id: number
    email: string
    username: string
    phone_number: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    name?: SortOrder
    score?: SortOrder
    diamond?: SortOrder
    login_count?: SortOrder
    phone_number?: SortOrder
    head_image?: SortOrder
    sex?: SortOrder
    bankPwd?: SortOrder
    bankScore?: SortOrder
    is_vip?: SortOrder
    access_token?: SortOrder
    id_token?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    qa_bypass?: SortOrder
    created_by_id?: SortOrder
    is_robot?: SortOrder
    passval?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    diamond?: SortOrder
    login_count?: SortOrder
    bankScore?: SortOrder
    access_token?: SortOrder
    id_token?: SortOrder
    created_by_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    name?: SortOrder
    score?: SortOrder
    diamond?: SortOrder
    login_count?: SortOrder
    phone_number?: SortOrder
    head_image?: SortOrder
    sex?: SortOrder
    bankPwd?: SortOrder
    bankScore?: SortOrder
    is_vip?: SortOrder
    access_token?: SortOrder
    id_token?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    qa_bypass?: SortOrder
    created_by_id?: SortOrder
    is_robot?: SortOrder
    passval?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    name?: SortOrder
    score?: SortOrder
    diamond?: SortOrder
    login_count?: SortOrder
    phone_number?: SortOrder
    head_image?: SortOrder
    sex?: SortOrder
    bankPwd?: SortOrder
    bankScore?: SortOrder
    is_vip?: SortOrder
    access_token?: SortOrder
    id_token?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    qa_bypass?: SortOrder
    created_by_id?: SortOrder
    is_robot?: SortOrder
    passval?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    diamond?: SortOrder
    login_count?: SortOrder
    bankScore?: SortOrder
    access_token?: SortOrder
    id_token?: SortOrder
    created_by_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type admin_userCreateNestedManyWithoutAdmin_roleInput = {
    create?: XOR<Enumerable<admin_userCreateWithoutAdmin_roleInput>, Enumerable<admin_userUncheckedCreateWithoutAdmin_roleInput>>
    connectOrCreate?: Enumerable<admin_userCreateOrConnectWithoutAdmin_roleInput>
    createMany?: admin_userCreateManyAdmin_roleInputEnvelope
    connect?: Enumerable<admin_userWhereUniqueInput>
  }

  export type admin_userUncheckedCreateNestedManyWithoutAdmin_roleInput = {
    create?: XOR<Enumerable<admin_userCreateWithoutAdmin_roleInput>, Enumerable<admin_userUncheckedCreateWithoutAdmin_roleInput>>
    connectOrCreate?: Enumerable<admin_userCreateOrConnectWithoutAdmin_roleInput>
    createMany?: admin_userCreateManyAdmin_roleInputEnvelope
    connect?: Enumerable<admin_userWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type admin_userUpdateManyWithoutAdmin_roleNestedInput = {
    create?: XOR<Enumerable<admin_userCreateWithoutAdmin_roleInput>, Enumerable<admin_userUncheckedCreateWithoutAdmin_roleInput>>
    connectOrCreate?: Enumerable<admin_userCreateOrConnectWithoutAdmin_roleInput>
    upsert?: Enumerable<admin_userUpsertWithWhereUniqueWithoutAdmin_roleInput>
    createMany?: admin_userCreateManyAdmin_roleInputEnvelope
    set?: Enumerable<admin_userWhereUniqueInput>
    disconnect?: Enumerable<admin_userWhereUniqueInput>
    delete?: Enumerable<admin_userWhereUniqueInput>
    connect?: Enumerable<admin_userWhereUniqueInput>
    update?: Enumerable<admin_userUpdateWithWhereUniqueWithoutAdmin_roleInput>
    updateMany?: Enumerable<admin_userUpdateManyWithWhereWithoutAdmin_roleInput>
    deleteMany?: Enumerable<admin_userScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type admin_userUncheckedUpdateManyWithoutAdmin_roleNestedInput = {
    create?: XOR<Enumerable<admin_userCreateWithoutAdmin_roleInput>, Enumerable<admin_userUncheckedCreateWithoutAdmin_roleInput>>
    connectOrCreate?: Enumerable<admin_userCreateOrConnectWithoutAdmin_roleInput>
    upsert?: Enumerable<admin_userUpsertWithWhereUniqueWithoutAdmin_roleInput>
    createMany?: admin_userCreateManyAdmin_roleInputEnvelope
    set?: Enumerable<admin_userWhereUniqueInput>
    disconnect?: Enumerable<admin_userWhereUniqueInput>
    delete?: Enumerable<admin_userWhereUniqueInput>
    connect?: Enumerable<admin_userWhereUniqueInput>
    update?: Enumerable<admin_userUpdateWithWhereUniqueWithoutAdmin_roleInput>
    updateMany?: Enumerable<admin_userUpdateManyWithWhereWithoutAdmin_roleInput>
    deleteMany?: Enumerable<admin_userScalarWhereInput>
  }

  export type admin_roleCreateNestedOneWithoutAdmin_userInput = {
    create?: XOR<admin_roleCreateWithoutAdmin_userInput, admin_roleUncheckedCreateWithoutAdmin_userInput>
    connectOrCreate?: admin_roleCreateOrConnectWithoutAdmin_userInput
    connect?: admin_roleWhereUniqueInput
  }

  export type userCreateNestedManyWithoutAdmin_userInput = {
    create?: XOR<Enumerable<userCreateWithoutAdmin_userInput>, Enumerable<userUncheckedCreateWithoutAdmin_userInput>>
    connectOrCreate?: Enumerable<userCreateOrConnectWithoutAdmin_userInput>
    createMany?: userCreateManyAdmin_userInputEnvelope
    connect?: Enumerable<userWhereUniqueInput>
  }

  export type userUncheckedCreateNestedManyWithoutAdmin_userInput = {
    create?: XOR<Enumerable<userCreateWithoutAdmin_userInput>, Enumerable<userUncheckedCreateWithoutAdmin_userInput>>
    connectOrCreate?: Enumerable<userCreateOrConnectWithoutAdmin_userInput>
    createMany?: userCreateManyAdmin_userInputEnvelope
    connect?: Enumerable<userWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type admin_roleUpdateOneRequiredWithoutAdmin_userNestedInput = {
    create?: XOR<admin_roleCreateWithoutAdmin_userInput, admin_roleUncheckedCreateWithoutAdmin_userInput>
    connectOrCreate?: admin_roleCreateOrConnectWithoutAdmin_userInput
    upsert?: admin_roleUpsertWithoutAdmin_userInput
    connect?: admin_roleWhereUniqueInput
    update?: XOR<admin_roleUpdateWithoutAdmin_userInput, admin_roleUncheckedUpdateWithoutAdmin_userInput>
  }

  export type userUpdateManyWithoutAdmin_userNestedInput = {
    create?: XOR<Enumerable<userCreateWithoutAdmin_userInput>, Enumerable<userUncheckedCreateWithoutAdmin_userInput>>
    connectOrCreate?: Enumerable<userCreateOrConnectWithoutAdmin_userInput>
    upsert?: Enumerable<userUpsertWithWhereUniqueWithoutAdmin_userInput>
    createMany?: userCreateManyAdmin_userInputEnvelope
    set?: Enumerable<userWhereUniqueInput>
    disconnect?: Enumerable<userWhereUniqueInput>
    delete?: Enumerable<userWhereUniqueInput>
    connect?: Enumerable<userWhereUniqueInput>
    update?: Enumerable<userUpdateWithWhereUniqueWithoutAdmin_userInput>
    updateMany?: Enumerable<userUpdateManyWithWhereWithoutAdmin_userInput>
    deleteMany?: Enumerable<userScalarWhereInput>
  }

  export type userUncheckedUpdateManyWithoutAdmin_userNestedInput = {
    create?: XOR<Enumerable<userCreateWithoutAdmin_userInput>, Enumerable<userUncheckedCreateWithoutAdmin_userInput>>
    connectOrCreate?: Enumerable<userCreateOrConnectWithoutAdmin_userInput>
    upsert?: Enumerable<userUpsertWithWhereUniqueWithoutAdmin_userInput>
    createMany?: userCreateManyAdmin_userInputEnvelope
    set?: Enumerable<userWhereUniqueInput>
    disconnect?: Enumerable<userWhereUniqueInput>
    delete?: Enumerable<userWhereUniqueInput>
    connect?: Enumerable<userWhereUniqueInput>
    update?: Enumerable<userUpdateWithWhereUniqueWithoutAdmin_userInput>
    updateMany?: Enumerable<userUpdateManyWithWhereWithoutAdmin_userInput>
    deleteMany?: Enumerable<userScalarWhereInput>
  }

  export type admin_userCreateNestedOneWithoutUserInput = {
    create?: XOR<admin_userCreateWithoutUserInput, admin_userUncheckedCreateWithoutUserInput>
    connectOrCreate?: admin_userCreateOrConnectWithoutUserInput
    connect?: admin_userWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type admin_userUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<admin_userCreateWithoutUserInput, admin_userUncheckedCreateWithoutUserInput>
    connectOrCreate?: admin_userCreateOrConnectWithoutUserInput
    upsert?: admin_userUpsertWithoutUserInput
    connect?: admin_userWhereUniqueInput
    update?: XOR<admin_userUpdateWithoutUserInput, admin_userUncheckedUpdateWithoutUserInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type admin_userCreateWithoutAdmin_roleInput = {
    id?: number
    email: string
    password: string
    name: string
    active?: boolean
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    access_token?: string | null
    id_token?: string | null
    user?: userCreateNestedManyWithoutAdmin_userInput
  }

  export type admin_userUncheckedCreateWithoutAdmin_roleInput = {
    id?: number
    email: string
    password: string
    name: string
    active?: boolean
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    access_token?: string | null
    id_token?: string | null
    user?: userUncheckedCreateNestedManyWithoutAdmin_userInput
  }

  export type admin_userCreateOrConnectWithoutAdmin_roleInput = {
    where: admin_userWhereUniqueInput
    create: XOR<admin_userCreateWithoutAdmin_roleInput, admin_userUncheckedCreateWithoutAdmin_roleInput>
  }

  export type admin_userCreateManyAdmin_roleInputEnvelope = {
    data: Enumerable<admin_userCreateManyAdmin_roleInput>
    skipDuplicates?: boolean
  }

  export type admin_userUpsertWithWhereUniqueWithoutAdmin_roleInput = {
    where: admin_userWhereUniqueInput
    update: XOR<admin_userUpdateWithoutAdmin_roleInput, admin_userUncheckedUpdateWithoutAdmin_roleInput>
    create: XOR<admin_userCreateWithoutAdmin_roleInput, admin_userUncheckedCreateWithoutAdmin_roleInput>
  }

  export type admin_userUpdateWithWhereUniqueWithoutAdmin_roleInput = {
    where: admin_userWhereUniqueInput
    data: XOR<admin_userUpdateWithoutAdmin_roleInput, admin_userUncheckedUpdateWithoutAdmin_roleInput>
  }

  export type admin_userUpdateManyWithWhereWithoutAdmin_roleInput = {
    where: admin_userScalarWhereInput
    data: XOR<admin_userUpdateManyMutationInput, admin_userUncheckedUpdateManyWithoutAdmin_userInput>
  }

  export type admin_userScalarWhereInput = {
    AND?: Enumerable<admin_userScalarWhereInput>
    OR?: Enumerable<admin_userScalarWhereInput>
    NOT?: Enumerable<admin_userScalarWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    name?: StringFilter | string
    role_id?: IntFilter | number
    active?: BoolFilter | boolean
    token?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    access_token?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
  }

  export type admin_roleCreateWithoutAdmin_userInput = {
    name: string
    can_get_user: boolean
    can_create_user: boolean
    can_create_admin: boolean
    can_delete_user: boolean
    can_alter_user: boolean
    can_search_users: boolean
    can_batch_alter_users: boolean
    can_set_perms: boolean
    bypass_auth: boolean
    active: boolean
    superuser: boolean
    updated_at?: Date | string
    can_list_users: boolean
  }

  export type admin_roleUncheckedCreateWithoutAdmin_userInput = {
    id?: number
    name: string
    can_get_user: boolean
    can_create_user: boolean
    can_create_admin: boolean
    can_delete_user: boolean
    can_alter_user: boolean
    can_search_users: boolean
    can_batch_alter_users: boolean
    can_set_perms: boolean
    bypass_auth: boolean
    active: boolean
    superuser: boolean
    updated_at?: Date | string
    can_list_users: boolean
  }

  export type admin_roleCreateOrConnectWithoutAdmin_userInput = {
    where: admin_roleWhereUniqueInput
    create: XOR<admin_roleCreateWithoutAdmin_userInput, admin_roleUncheckedCreateWithoutAdmin_userInput>
  }

  export type userCreateWithoutAdmin_userInput = {
    id?: number
    email: string
    password: string
    username: string
    name: string
    score: number
    diamond: number
    login_count?: number
    phone_number: string
    head_image: string
    sex?: boolean | null
    bankPwd: string
    bankScore: number
    is_vip: boolean
    access_token?: number | null
    id_token?: number | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    qa_bypass?: string | null
    is_robot?: boolean
    passval: string
  }

  export type userUncheckedCreateWithoutAdmin_userInput = {
    id?: number
    email: string
    password: string
    username: string
    name: string
    score: number
    diamond: number
    login_count?: number
    phone_number: string
    head_image: string
    sex?: boolean | null
    bankPwd: string
    bankScore: number
    is_vip: boolean
    access_token?: number | null
    id_token?: number | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    qa_bypass?: string | null
    is_robot?: boolean
    passval: string
  }

  export type userCreateOrConnectWithoutAdmin_userInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAdmin_userInput, userUncheckedCreateWithoutAdmin_userInput>
  }

  export type userCreateManyAdmin_userInputEnvelope = {
    data: Enumerable<userCreateManyAdmin_userInput>
    skipDuplicates?: boolean
  }

  export type admin_roleUpsertWithoutAdmin_userInput = {
    update: XOR<admin_roleUpdateWithoutAdmin_userInput, admin_roleUncheckedUpdateWithoutAdmin_userInput>
    create: XOR<admin_roleCreateWithoutAdmin_userInput, admin_roleUncheckedCreateWithoutAdmin_userInput>
  }

  export type admin_roleUpdateWithoutAdmin_userInput = {
    name?: StringFieldUpdateOperationsInput | string
    can_get_user?: BoolFieldUpdateOperationsInput | boolean
    can_create_user?: BoolFieldUpdateOperationsInput | boolean
    can_create_admin?: BoolFieldUpdateOperationsInput | boolean
    can_delete_user?: BoolFieldUpdateOperationsInput | boolean
    can_alter_user?: BoolFieldUpdateOperationsInput | boolean
    can_search_users?: BoolFieldUpdateOperationsInput | boolean
    can_batch_alter_users?: BoolFieldUpdateOperationsInput | boolean
    can_set_perms?: BoolFieldUpdateOperationsInput | boolean
    bypass_auth?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    superuser?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    can_list_users?: BoolFieldUpdateOperationsInput | boolean
  }

  export type admin_roleUncheckedUpdateWithoutAdmin_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    can_get_user?: BoolFieldUpdateOperationsInput | boolean
    can_create_user?: BoolFieldUpdateOperationsInput | boolean
    can_create_admin?: BoolFieldUpdateOperationsInput | boolean
    can_delete_user?: BoolFieldUpdateOperationsInput | boolean
    can_alter_user?: BoolFieldUpdateOperationsInput | boolean
    can_search_users?: BoolFieldUpdateOperationsInput | boolean
    can_batch_alter_users?: BoolFieldUpdateOperationsInput | boolean
    can_set_perms?: BoolFieldUpdateOperationsInput | boolean
    bypass_auth?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    superuser?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    can_list_users?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userUpsertWithWhereUniqueWithoutAdmin_userInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutAdmin_userInput, userUncheckedUpdateWithoutAdmin_userInput>
    create: XOR<userCreateWithoutAdmin_userInput, userUncheckedCreateWithoutAdmin_userInput>
  }

  export type userUpdateWithWhereUniqueWithoutAdmin_userInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutAdmin_userInput, userUncheckedUpdateWithoutAdmin_userInput>
  }

  export type userUpdateManyWithWhereWithoutAdmin_userInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutUserInput>
  }

  export type userScalarWhereInput = {
    AND?: Enumerable<userScalarWhereInput>
    OR?: Enumerable<userScalarWhereInput>
    NOT?: Enumerable<userScalarWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    username?: StringFilter | string
    name?: StringFilter | string
    score?: IntFilter | number
    diamond?: IntFilter | number
    login_count?: IntFilter | number
    phone_number?: StringFilter | string
    head_image?: StringFilter | string
    sex?: BoolNullableFilter | boolean | null
    bankPwd?: StringFilter | string
    bankScore?: IntFilter | number
    is_vip?: BoolFilter | boolean
    access_token?: IntNullableFilter | number | null
    id_token?: IntNullableFilter | number | null
    active?: BoolFilter | boolean
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    qa_bypass?: StringNullableFilter | string | null
    created_by_id?: IntFilter | number
    is_robot?: BoolFilter | boolean
    passval?: StringFilter | string
  }

  export type admin_userCreateWithoutUserInput = {
    id?: number
    email: string
    password: string
    name: string
    active?: boolean
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    access_token?: string | null
    id_token?: string | null
    admin_role: admin_roleCreateNestedOneWithoutAdmin_userInput
  }

  export type admin_userUncheckedCreateWithoutUserInput = {
    id?: number
    email: string
    password: string
    name: string
    role_id: number
    active?: boolean
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    access_token?: string | null
    id_token?: string | null
  }

  export type admin_userCreateOrConnectWithoutUserInput = {
    where: admin_userWhereUniqueInput
    create: XOR<admin_userCreateWithoutUserInput, admin_userUncheckedCreateWithoutUserInput>
  }

  export type admin_userUpsertWithoutUserInput = {
    update: XOR<admin_userUpdateWithoutUserInput, admin_userUncheckedUpdateWithoutUserInput>
    create: XOR<admin_userCreateWithoutUserInput, admin_userUncheckedCreateWithoutUserInput>
  }

  export type admin_userUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    admin_role?: admin_roleUpdateOneRequiredWithoutAdmin_userNestedInput
  }

  export type admin_userUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type admin_userCreateManyAdmin_roleInput = {
    id?: number
    email: string
    password: string
    name: string
    active?: boolean
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    access_token?: string | null
    id_token?: string | null
  }

  export type admin_userUpdateWithoutAdmin_roleInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateManyWithoutAdmin_userNestedInput
  }

  export type admin_userUncheckedUpdateWithoutAdmin_roleInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUncheckedUpdateManyWithoutAdmin_userNestedInput
  }

  export type admin_userUncheckedUpdateManyWithoutAdmin_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateManyAdmin_userInput = {
    id?: number
    email: string
    password: string
    username: string
    name: string
    score: number
    diamond: number
    login_count?: number
    phone_number: string
    head_image: string
    sex?: boolean | null
    bankPwd: string
    bankScore: number
    is_vip: boolean
    access_token?: number | null
    id_token?: number | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    qa_bypass?: string | null
    is_robot?: boolean
    passval: string
  }

  export type userUpdateWithoutAdmin_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    diamond?: IntFieldUpdateOperationsInput | number
    login_count?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    head_image?: StringFieldUpdateOperationsInput | string
    sex?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bankPwd?: StringFieldUpdateOperationsInput | string
    bankScore?: IntFieldUpdateOperationsInput | number
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    access_token?: NullableIntFieldUpdateOperationsInput | number | null
    id_token?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qa_bypass?: NullableStringFieldUpdateOperationsInput | string | null
    is_robot?: BoolFieldUpdateOperationsInput | boolean
    passval?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateWithoutAdmin_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    diamond?: IntFieldUpdateOperationsInput | number
    login_count?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    head_image?: StringFieldUpdateOperationsInput | string
    sex?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bankPwd?: StringFieldUpdateOperationsInput | string
    bankScore?: IntFieldUpdateOperationsInput | number
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    access_token?: NullableIntFieldUpdateOperationsInput | number | null
    id_token?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qa_bypass?: NullableStringFieldUpdateOperationsInput | string | null
    is_robot?: BoolFieldUpdateOperationsInput | boolean
    passval?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    diamond?: IntFieldUpdateOperationsInput | number
    login_count?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    head_image?: StringFieldUpdateOperationsInput | string
    sex?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bankPwd?: StringFieldUpdateOperationsInput | string
    bankScore?: IntFieldUpdateOperationsInput | number
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    access_token?: NullableIntFieldUpdateOperationsInput | number | null
    id_token?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qa_bypass?: NullableStringFieldUpdateOperationsInput | string | null
    is_robot?: BoolFieldUpdateOperationsInput | boolean
    passval?: StringFieldUpdateOperationsInput | string
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