
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Apply_club
 * 
 */
export type Apply_club = {
  id: number
  club_id: string
  apply_user: number
  apply_user_name: string
  apply_time: Date
  apply_result: number
  apply_user_head_url: string
}

/**
 * Model Club_list
 * 
 */
export type Club_list = {
  id: number
  club_name: string
  create_user: number
  content: string
  club_manage: number
  club_id: string
  user_num: number
  create_user_name: string
  create_user_head_url: string
  club_manage_name: string
  club_manage_head_url: string
  table_info: string
}

/**
 * Model Club_user_list
 * 
 */
export type Club_user_list = {
  id: number
  club_id: string
  user_id: number
  user_name: string
  user_head_url: string
}

/**
 * Model User_club_num_list
 * 
 */
export type User_club_num_list = {
  user_id: number
  club_num: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Apply_clubs
 * const apply_clubs = await prisma.apply_club.findMany()
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
   * // Fetch zero or more Apply_clubs
   * const apply_clubs = await prisma.apply_club.findMany()
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
   * `prisma.apply_club`: Exposes CRUD operations for the **Apply_club** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apply_clubs
    * const apply_clubs = await prisma.apply_club.findMany()
    * ```
    */
  get apply_club(): Prisma.Apply_clubDelegate<GlobalReject>;

  /**
   * `prisma.club_list`: Exposes CRUD operations for the **Club_list** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Club_lists
    * const club_lists = await prisma.club_list.findMany()
    * ```
    */
  get club_list(): Prisma.Club_listDelegate<GlobalReject>;

  /**
   * `prisma.club_user_list`: Exposes CRUD operations for the **Club_user_list** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Club_user_lists
    * const club_user_lists = await prisma.club_user_list.findMany()
    * ```
    */
  get club_user_list(): Prisma.Club_user_listDelegate<GlobalReject>;

  /**
   * `prisma.user_club_num_list`: Exposes CRUD operations for the **User_club_num_list** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_club_num_lists
    * const user_club_num_lists = await prisma.user_club_num_list.findMany()
    * ```
    */
  get user_club_num_list(): Prisma.User_club_num_listDelegate<GlobalReject>;
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
    Apply_club: 'Apply_club',
    Club_list: 'Club_list',
    Club_user_list: 'Club_user_list',
    User_club_num_list: 'User_club_num_list'
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
   * Models
   */

  /**
   * Model Apply_club
   */


  export type AggregateApply_club = {
    _count: Apply_clubCountAggregateOutputType | null
    _avg: Apply_clubAvgAggregateOutputType | null
    _sum: Apply_clubSumAggregateOutputType | null
    _min: Apply_clubMinAggregateOutputType | null
    _max: Apply_clubMaxAggregateOutputType | null
  }

  export type Apply_clubAvgAggregateOutputType = {
    id: number | null
    apply_user: number | null
    apply_result: number | null
  }

  export type Apply_clubSumAggregateOutputType = {
    id: number | null
    apply_user: number | null
    apply_result: number | null
  }

  export type Apply_clubMinAggregateOutputType = {
    id: number | null
    club_id: string | null
    apply_user: number | null
    apply_user_name: string | null
    apply_time: Date | null
    apply_result: number | null
    apply_user_head_url: string | null
  }

  export type Apply_clubMaxAggregateOutputType = {
    id: number | null
    club_id: string | null
    apply_user: number | null
    apply_user_name: string | null
    apply_time: Date | null
    apply_result: number | null
    apply_user_head_url: string | null
  }

  export type Apply_clubCountAggregateOutputType = {
    id: number
    club_id: number
    apply_user: number
    apply_user_name: number
    apply_time: number
    apply_result: number
    apply_user_head_url: number
    _all: number
  }


  export type Apply_clubAvgAggregateInputType = {
    id?: true
    apply_user?: true
    apply_result?: true
  }

  export type Apply_clubSumAggregateInputType = {
    id?: true
    apply_user?: true
    apply_result?: true
  }

  export type Apply_clubMinAggregateInputType = {
    id?: true
    club_id?: true
    apply_user?: true
    apply_user_name?: true
    apply_time?: true
    apply_result?: true
    apply_user_head_url?: true
  }

  export type Apply_clubMaxAggregateInputType = {
    id?: true
    club_id?: true
    apply_user?: true
    apply_user_name?: true
    apply_time?: true
    apply_result?: true
    apply_user_head_url?: true
  }

  export type Apply_clubCountAggregateInputType = {
    id?: true
    club_id?: true
    apply_user?: true
    apply_user_name?: true
    apply_time?: true
    apply_result?: true
    apply_user_head_url?: true
    _all?: true
  }

  export type Apply_clubAggregateArgs = {
    /**
     * Filter which Apply_club to aggregate.
     */
    where?: Apply_clubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apply_clubs to fetch.
     */
    orderBy?: Enumerable<Apply_clubOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Apply_clubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apply_clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apply_clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apply_clubs
    **/
    _count?: true | Apply_clubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Apply_clubAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Apply_clubSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Apply_clubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Apply_clubMaxAggregateInputType
  }

  export type GetApply_clubAggregateType<T extends Apply_clubAggregateArgs> = {
        [P in keyof T & keyof AggregateApply_club]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApply_club[P]>
      : GetScalarType<T[P], AggregateApply_club[P]>
  }




  export type Apply_clubGroupByArgs = {
    where?: Apply_clubWhereInput
    orderBy?: Enumerable<Apply_clubOrderByWithAggregationInput>
    by: Apply_clubScalarFieldEnum[]
    having?: Apply_clubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Apply_clubCountAggregateInputType | true
    _avg?: Apply_clubAvgAggregateInputType
    _sum?: Apply_clubSumAggregateInputType
    _min?: Apply_clubMinAggregateInputType
    _max?: Apply_clubMaxAggregateInputType
  }


  export type Apply_clubGroupByOutputType = {
    id: number
    club_id: string
    apply_user: number
    apply_user_name: string
    apply_time: Date
    apply_result: number
    apply_user_head_url: string
    _count: Apply_clubCountAggregateOutputType | null
    _avg: Apply_clubAvgAggregateOutputType | null
    _sum: Apply_clubSumAggregateOutputType | null
    _min: Apply_clubMinAggregateOutputType | null
    _max: Apply_clubMaxAggregateOutputType | null
  }

  type GetApply_clubGroupByPayload<T extends Apply_clubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Apply_clubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Apply_clubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Apply_clubGroupByOutputType[P]>
            : GetScalarType<T[P], Apply_clubGroupByOutputType[P]>
        }
      >
    >


  export type Apply_clubSelect = {
    id?: boolean
    club_id?: boolean
    apply_user?: boolean
    apply_user_name?: boolean
    apply_time?: boolean
    apply_result?: boolean
    apply_user_head_url?: boolean
  }


  export type Apply_clubGetPayload<S extends boolean | null | undefined | Apply_clubArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Apply_club :
    S extends undefined ? never :
    S extends { include: any } & (Apply_clubArgs | Apply_clubFindManyArgs)
    ? Apply_club 
    : S extends { select: any } & (Apply_clubArgs | Apply_clubFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Apply_club ? Apply_club[P] : never
  } 
      : Apply_club


  type Apply_clubCountArgs = 
    Omit<Apply_clubFindManyArgs, 'select' | 'include'> & {
      select?: Apply_clubCountAggregateInputType | true
    }

  export interface Apply_clubDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Apply_club that matches the filter.
     * @param {Apply_clubFindUniqueArgs} args - Arguments to find a Apply_club
     * @example
     * // Get one Apply_club
     * const apply_club = await prisma.apply_club.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Apply_clubFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Apply_clubFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Apply_club'> extends True ? Prisma__Apply_clubClient<Apply_clubGetPayload<T>> : Prisma__Apply_clubClient<Apply_clubGetPayload<T> | null, null>

    /**
     * Find one Apply_club that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Apply_clubFindUniqueOrThrowArgs} args - Arguments to find a Apply_club
     * @example
     * // Get one Apply_club
     * const apply_club = await prisma.apply_club.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Apply_clubFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Apply_clubFindUniqueOrThrowArgs>
    ): Prisma__Apply_clubClient<Apply_clubGetPayload<T>>

    /**
     * Find the first Apply_club that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Apply_clubFindFirstArgs} args - Arguments to find a Apply_club
     * @example
     * // Get one Apply_club
     * const apply_club = await prisma.apply_club.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Apply_clubFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Apply_clubFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Apply_club'> extends True ? Prisma__Apply_clubClient<Apply_clubGetPayload<T>> : Prisma__Apply_clubClient<Apply_clubGetPayload<T> | null, null>

    /**
     * Find the first Apply_club that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Apply_clubFindFirstOrThrowArgs} args - Arguments to find a Apply_club
     * @example
     * // Get one Apply_club
     * const apply_club = await prisma.apply_club.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Apply_clubFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Apply_clubFindFirstOrThrowArgs>
    ): Prisma__Apply_clubClient<Apply_clubGetPayload<T>>

    /**
     * Find zero or more Apply_clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Apply_clubFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apply_clubs
     * const apply_clubs = await prisma.apply_club.findMany()
     * 
     * // Get first 10 Apply_clubs
     * const apply_clubs = await prisma.apply_club.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apply_clubWithIdOnly = await prisma.apply_club.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Apply_clubFindManyArgs>(
      args?: SelectSubset<T, Apply_clubFindManyArgs>
    ): Prisma.PrismaPromise<Array<Apply_clubGetPayload<T>>>

    /**
     * Create a Apply_club.
     * @param {Apply_clubCreateArgs} args - Arguments to create a Apply_club.
     * @example
     * // Create one Apply_club
     * const Apply_club = await prisma.apply_club.create({
     *   data: {
     *     // ... data to create a Apply_club
     *   }
     * })
     * 
    **/
    create<T extends Apply_clubCreateArgs>(
      args: SelectSubset<T, Apply_clubCreateArgs>
    ): Prisma__Apply_clubClient<Apply_clubGetPayload<T>>

    /**
     * Create many Apply_clubs.
     *     @param {Apply_clubCreateManyArgs} args - Arguments to create many Apply_clubs.
     *     @example
     *     // Create many Apply_clubs
     *     const apply_club = await prisma.apply_club.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Apply_clubCreateManyArgs>(
      args?: SelectSubset<T, Apply_clubCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Apply_club.
     * @param {Apply_clubDeleteArgs} args - Arguments to delete one Apply_club.
     * @example
     * // Delete one Apply_club
     * const Apply_club = await prisma.apply_club.delete({
     *   where: {
     *     // ... filter to delete one Apply_club
     *   }
     * })
     * 
    **/
    delete<T extends Apply_clubDeleteArgs>(
      args: SelectSubset<T, Apply_clubDeleteArgs>
    ): Prisma__Apply_clubClient<Apply_clubGetPayload<T>>

    /**
     * Update one Apply_club.
     * @param {Apply_clubUpdateArgs} args - Arguments to update one Apply_club.
     * @example
     * // Update one Apply_club
     * const apply_club = await prisma.apply_club.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Apply_clubUpdateArgs>(
      args: SelectSubset<T, Apply_clubUpdateArgs>
    ): Prisma__Apply_clubClient<Apply_clubGetPayload<T>>

    /**
     * Delete zero or more Apply_clubs.
     * @param {Apply_clubDeleteManyArgs} args - Arguments to filter Apply_clubs to delete.
     * @example
     * // Delete a few Apply_clubs
     * const { count } = await prisma.apply_club.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Apply_clubDeleteManyArgs>(
      args?: SelectSubset<T, Apply_clubDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apply_clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Apply_clubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apply_clubs
     * const apply_club = await prisma.apply_club.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Apply_clubUpdateManyArgs>(
      args: SelectSubset<T, Apply_clubUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Apply_club.
     * @param {Apply_clubUpsertArgs} args - Arguments to update or create a Apply_club.
     * @example
     * // Update or create a Apply_club
     * const apply_club = await prisma.apply_club.upsert({
     *   create: {
     *     // ... data to create a Apply_club
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apply_club we want to update
     *   }
     * })
    **/
    upsert<T extends Apply_clubUpsertArgs>(
      args: SelectSubset<T, Apply_clubUpsertArgs>
    ): Prisma__Apply_clubClient<Apply_clubGetPayload<T>>

    /**
     * Count the number of Apply_clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Apply_clubCountArgs} args - Arguments to filter Apply_clubs to count.
     * @example
     * // Count the number of Apply_clubs
     * const count = await prisma.apply_club.count({
     *   where: {
     *     // ... the filter for the Apply_clubs we want to count
     *   }
     * })
    **/
    count<T extends Apply_clubCountArgs>(
      args?: Subset<T, Apply_clubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Apply_clubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apply_club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Apply_clubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Apply_clubAggregateArgs>(args: Subset<T, Apply_clubAggregateArgs>): Prisma.PrismaPromise<GetApply_clubAggregateType<T>>

    /**
     * Group by Apply_club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Apply_clubGroupByArgs} args - Group by arguments.
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
      T extends Apply_clubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Apply_clubGroupByArgs['orderBy'] }
        : { orderBy?: Apply_clubGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Apply_clubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApply_clubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Apply_club.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Apply_clubClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Apply_club base type for findUnique actions
   */
  export type Apply_clubFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Apply_club
     */
    select?: Apply_clubSelect | null
    /**
     * Filter, which Apply_club to fetch.
     */
    where: Apply_clubWhereUniqueInput
  }

  /**
   * Apply_club findUnique
   */
  export interface Apply_clubFindUniqueArgs extends Apply_clubFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Apply_club findUniqueOrThrow
   */
  export type Apply_clubFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Apply_club
     */
    select?: Apply_clubSelect | null
    /**
     * Filter, which Apply_club to fetch.
     */
    where: Apply_clubWhereUniqueInput
  }


  /**
   * Apply_club base type for findFirst actions
   */
  export type Apply_clubFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Apply_club
     */
    select?: Apply_clubSelect | null
    /**
     * Filter, which Apply_club to fetch.
     */
    where?: Apply_clubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apply_clubs to fetch.
     */
    orderBy?: Enumerable<Apply_clubOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apply_clubs.
     */
    cursor?: Apply_clubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apply_clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apply_clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apply_clubs.
     */
    distinct?: Enumerable<Apply_clubScalarFieldEnum>
  }

  /**
   * Apply_club findFirst
   */
  export interface Apply_clubFindFirstArgs extends Apply_clubFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Apply_club findFirstOrThrow
   */
  export type Apply_clubFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Apply_club
     */
    select?: Apply_clubSelect | null
    /**
     * Filter, which Apply_club to fetch.
     */
    where?: Apply_clubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apply_clubs to fetch.
     */
    orderBy?: Enumerable<Apply_clubOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apply_clubs.
     */
    cursor?: Apply_clubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apply_clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apply_clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apply_clubs.
     */
    distinct?: Enumerable<Apply_clubScalarFieldEnum>
  }


  /**
   * Apply_club findMany
   */
  export type Apply_clubFindManyArgs = {
    /**
     * Select specific fields to fetch from the Apply_club
     */
    select?: Apply_clubSelect | null
    /**
     * Filter, which Apply_clubs to fetch.
     */
    where?: Apply_clubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apply_clubs to fetch.
     */
    orderBy?: Enumerable<Apply_clubOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apply_clubs.
     */
    cursor?: Apply_clubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apply_clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apply_clubs.
     */
    skip?: number
    distinct?: Enumerable<Apply_clubScalarFieldEnum>
  }


  /**
   * Apply_club create
   */
  export type Apply_clubCreateArgs = {
    /**
     * Select specific fields to fetch from the Apply_club
     */
    select?: Apply_clubSelect | null
    /**
     * The data needed to create a Apply_club.
     */
    data: XOR<Apply_clubCreateInput, Apply_clubUncheckedCreateInput>
  }


  /**
   * Apply_club createMany
   */
  export type Apply_clubCreateManyArgs = {
    /**
     * The data used to create many Apply_clubs.
     */
    data: Enumerable<Apply_clubCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Apply_club update
   */
  export type Apply_clubUpdateArgs = {
    /**
     * Select specific fields to fetch from the Apply_club
     */
    select?: Apply_clubSelect | null
    /**
     * The data needed to update a Apply_club.
     */
    data: XOR<Apply_clubUpdateInput, Apply_clubUncheckedUpdateInput>
    /**
     * Choose, which Apply_club to update.
     */
    where: Apply_clubWhereUniqueInput
  }


  /**
   * Apply_club updateMany
   */
  export type Apply_clubUpdateManyArgs = {
    /**
     * The data used to update Apply_clubs.
     */
    data: XOR<Apply_clubUpdateManyMutationInput, Apply_clubUncheckedUpdateManyInput>
    /**
     * Filter which Apply_clubs to update
     */
    where?: Apply_clubWhereInput
  }


  /**
   * Apply_club upsert
   */
  export type Apply_clubUpsertArgs = {
    /**
     * Select specific fields to fetch from the Apply_club
     */
    select?: Apply_clubSelect | null
    /**
     * The filter to search for the Apply_club to update in case it exists.
     */
    where: Apply_clubWhereUniqueInput
    /**
     * In case the Apply_club found by the `where` argument doesn't exist, create a new Apply_club with this data.
     */
    create: XOR<Apply_clubCreateInput, Apply_clubUncheckedCreateInput>
    /**
     * In case the Apply_club was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Apply_clubUpdateInput, Apply_clubUncheckedUpdateInput>
  }


  /**
   * Apply_club delete
   */
  export type Apply_clubDeleteArgs = {
    /**
     * Select specific fields to fetch from the Apply_club
     */
    select?: Apply_clubSelect | null
    /**
     * Filter which Apply_club to delete.
     */
    where: Apply_clubWhereUniqueInput
  }


  /**
   * Apply_club deleteMany
   */
  export type Apply_clubDeleteManyArgs = {
    /**
     * Filter which Apply_clubs to delete
     */
    where?: Apply_clubWhereInput
  }


  /**
   * Apply_club without action
   */
  export type Apply_clubArgs = {
    /**
     * Select specific fields to fetch from the Apply_club
     */
    select?: Apply_clubSelect | null
  }



  /**
   * Model Club_list
   */


  export type AggregateClub_list = {
    _count: Club_listCountAggregateOutputType | null
    _avg: Club_listAvgAggregateOutputType | null
    _sum: Club_listSumAggregateOutputType | null
    _min: Club_listMinAggregateOutputType | null
    _max: Club_listMaxAggregateOutputType | null
  }

  export type Club_listAvgAggregateOutputType = {
    id: number | null
    create_user: number | null
    club_manage: number | null
    user_num: number | null
  }

  export type Club_listSumAggregateOutputType = {
    id: number | null
    create_user: number | null
    club_manage: number | null
    user_num: number | null
  }

  export type Club_listMinAggregateOutputType = {
    id: number | null
    club_name: string | null
    create_user: number | null
    content: string | null
    club_manage: number | null
    club_id: string | null
    user_num: number | null
    create_user_name: string | null
    create_user_head_url: string | null
    club_manage_name: string | null
    club_manage_head_url: string | null
    table_info: string | null
  }

  export type Club_listMaxAggregateOutputType = {
    id: number | null
    club_name: string | null
    create_user: number | null
    content: string | null
    club_manage: number | null
    club_id: string | null
    user_num: number | null
    create_user_name: string | null
    create_user_head_url: string | null
    club_manage_name: string | null
    club_manage_head_url: string | null
    table_info: string | null
  }

  export type Club_listCountAggregateOutputType = {
    id: number
    club_name: number
    create_user: number
    content: number
    club_manage: number
    club_id: number
    user_num: number
    create_user_name: number
    create_user_head_url: number
    club_manage_name: number
    club_manage_head_url: number
    table_info: number
    _all: number
  }


  export type Club_listAvgAggregateInputType = {
    id?: true
    create_user?: true
    club_manage?: true
    user_num?: true
  }

  export type Club_listSumAggregateInputType = {
    id?: true
    create_user?: true
    club_manage?: true
    user_num?: true
  }

  export type Club_listMinAggregateInputType = {
    id?: true
    club_name?: true
    create_user?: true
    content?: true
    club_manage?: true
    club_id?: true
    user_num?: true
    create_user_name?: true
    create_user_head_url?: true
    club_manage_name?: true
    club_manage_head_url?: true
    table_info?: true
  }

  export type Club_listMaxAggregateInputType = {
    id?: true
    club_name?: true
    create_user?: true
    content?: true
    club_manage?: true
    club_id?: true
    user_num?: true
    create_user_name?: true
    create_user_head_url?: true
    club_manage_name?: true
    club_manage_head_url?: true
    table_info?: true
  }

  export type Club_listCountAggregateInputType = {
    id?: true
    club_name?: true
    create_user?: true
    content?: true
    club_manage?: true
    club_id?: true
    user_num?: true
    create_user_name?: true
    create_user_head_url?: true
    club_manage_name?: true
    club_manage_head_url?: true
    table_info?: true
    _all?: true
  }

  export type Club_listAggregateArgs = {
    /**
     * Filter which Club_list to aggregate.
     */
    where?: Club_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Club_lists to fetch.
     */
    orderBy?: Enumerable<Club_listOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Club_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Club_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Club_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Club_lists
    **/
    _count?: true | Club_listCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Club_listAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Club_listSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Club_listMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Club_listMaxAggregateInputType
  }

  export type GetClub_listAggregateType<T extends Club_listAggregateArgs> = {
        [P in keyof T & keyof AggregateClub_list]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClub_list[P]>
      : GetScalarType<T[P], AggregateClub_list[P]>
  }




  export type Club_listGroupByArgs = {
    where?: Club_listWhereInput
    orderBy?: Enumerable<Club_listOrderByWithAggregationInput>
    by: Club_listScalarFieldEnum[]
    having?: Club_listScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Club_listCountAggregateInputType | true
    _avg?: Club_listAvgAggregateInputType
    _sum?: Club_listSumAggregateInputType
    _min?: Club_listMinAggregateInputType
    _max?: Club_listMaxAggregateInputType
  }


  export type Club_listGroupByOutputType = {
    id: number
    club_name: string
    create_user: number
    content: string
    club_manage: number
    club_id: string
    user_num: number
    create_user_name: string
    create_user_head_url: string
    club_manage_name: string
    club_manage_head_url: string
    table_info: string
    _count: Club_listCountAggregateOutputType | null
    _avg: Club_listAvgAggregateOutputType | null
    _sum: Club_listSumAggregateOutputType | null
    _min: Club_listMinAggregateOutputType | null
    _max: Club_listMaxAggregateOutputType | null
  }

  type GetClub_listGroupByPayload<T extends Club_listGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Club_listGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Club_listGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Club_listGroupByOutputType[P]>
            : GetScalarType<T[P], Club_listGroupByOutputType[P]>
        }
      >
    >


  export type Club_listSelect = {
    id?: boolean
    club_name?: boolean
    create_user?: boolean
    content?: boolean
    club_manage?: boolean
    club_id?: boolean
    user_num?: boolean
    create_user_name?: boolean
    create_user_head_url?: boolean
    club_manage_name?: boolean
    club_manage_head_url?: boolean
    table_info?: boolean
  }


  export type Club_listGetPayload<S extends boolean | null | undefined | Club_listArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Club_list :
    S extends undefined ? never :
    S extends { include: any } & (Club_listArgs | Club_listFindManyArgs)
    ? Club_list 
    : S extends { select: any } & (Club_listArgs | Club_listFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Club_list ? Club_list[P] : never
  } 
      : Club_list


  type Club_listCountArgs = 
    Omit<Club_listFindManyArgs, 'select' | 'include'> & {
      select?: Club_listCountAggregateInputType | true
    }

  export interface Club_listDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Club_list that matches the filter.
     * @param {Club_listFindUniqueArgs} args - Arguments to find a Club_list
     * @example
     * // Get one Club_list
     * const club_list = await prisma.club_list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Club_listFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Club_listFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Club_list'> extends True ? Prisma__Club_listClient<Club_listGetPayload<T>> : Prisma__Club_listClient<Club_listGetPayload<T> | null, null>

    /**
     * Find one Club_list that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Club_listFindUniqueOrThrowArgs} args - Arguments to find a Club_list
     * @example
     * // Get one Club_list
     * const club_list = await prisma.club_list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Club_listFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Club_listFindUniqueOrThrowArgs>
    ): Prisma__Club_listClient<Club_listGetPayload<T>>

    /**
     * Find the first Club_list that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Club_listFindFirstArgs} args - Arguments to find a Club_list
     * @example
     * // Get one Club_list
     * const club_list = await prisma.club_list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Club_listFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Club_listFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Club_list'> extends True ? Prisma__Club_listClient<Club_listGetPayload<T>> : Prisma__Club_listClient<Club_listGetPayload<T> | null, null>

    /**
     * Find the first Club_list that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Club_listFindFirstOrThrowArgs} args - Arguments to find a Club_list
     * @example
     * // Get one Club_list
     * const club_list = await prisma.club_list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Club_listFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Club_listFindFirstOrThrowArgs>
    ): Prisma__Club_listClient<Club_listGetPayload<T>>

    /**
     * Find zero or more Club_lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Club_listFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Club_lists
     * const club_lists = await prisma.club_list.findMany()
     * 
     * // Get first 10 Club_lists
     * const club_lists = await prisma.club_list.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const club_listWithIdOnly = await prisma.club_list.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Club_listFindManyArgs>(
      args?: SelectSubset<T, Club_listFindManyArgs>
    ): Prisma.PrismaPromise<Array<Club_listGetPayload<T>>>

    /**
     * Create a Club_list.
     * @param {Club_listCreateArgs} args - Arguments to create a Club_list.
     * @example
     * // Create one Club_list
     * const Club_list = await prisma.club_list.create({
     *   data: {
     *     // ... data to create a Club_list
     *   }
     * })
     * 
    **/
    create<T extends Club_listCreateArgs>(
      args: SelectSubset<T, Club_listCreateArgs>
    ): Prisma__Club_listClient<Club_listGetPayload<T>>

    /**
     * Create many Club_lists.
     *     @param {Club_listCreateManyArgs} args - Arguments to create many Club_lists.
     *     @example
     *     // Create many Club_lists
     *     const club_list = await prisma.club_list.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Club_listCreateManyArgs>(
      args?: SelectSubset<T, Club_listCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Club_list.
     * @param {Club_listDeleteArgs} args - Arguments to delete one Club_list.
     * @example
     * // Delete one Club_list
     * const Club_list = await prisma.club_list.delete({
     *   where: {
     *     // ... filter to delete one Club_list
     *   }
     * })
     * 
    **/
    delete<T extends Club_listDeleteArgs>(
      args: SelectSubset<T, Club_listDeleteArgs>
    ): Prisma__Club_listClient<Club_listGetPayload<T>>

    /**
     * Update one Club_list.
     * @param {Club_listUpdateArgs} args - Arguments to update one Club_list.
     * @example
     * // Update one Club_list
     * const club_list = await prisma.club_list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Club_listUpdateArgs>(
      args: SelectSubset<T, Club_listUpdateArgs>
    ): Prisma__Club_listClient<Club_listGetPayload<T>>

    /**
     * Delete zero or more Club_lists.
     * @param {Club_listDeleteManyArgs} args - Arguments to filter Club_lists to delete.
     * @example
     * // Delete a few Club_lists
     * const { count } = await prisma.club_list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Club_listDeleteManyArgs>(
      args?: SelectSubset<T, Club_listDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Club_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Club_listUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Club_lists
     * const club_list = await prisma.club_list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Club_listUpdateManyArgs>(
      args: SelectSubset<T, Club_listUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Club_list.
     * @param {Club_listUpsertArgs} args - Arguments to update or create a Club_list.
     * @example
     * // Update or create a Club_list
     * const club_list = await prisma.club_list.upsert({
     *   create: {
     *     // ... data to create a Club_list
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Club_list we want to update
     *   }
     * })
    **/
    upsert<T extends Club_listUpsertArgs>(
      args: SelectSubset<T, Club_listUpsertArgs>
    ): Prisma__Club_listClient<Club_listGetPayload<T>>

    /**
     * Count the number of Club_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Club_listCountArgs} args - Arguments to filter Club_lists to count.
     * @example
     * // Count the number of Club_lists
     * const count = await prisma.club_list.count({
     *   where: {
     *     // ... the filter for the Club_lists we want to count
     *   }
     * })
    **/
    count<T extends Club_listCountArgs>(
      args?: Subset<T, Club_listCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Club_listCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Club_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Club_listAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Club_listAggregateArgs>(args: Subset<T, Club_listAggregateArgs>): Prisma.PrismaPromise<GetClub_listAggregateType<T>>

    /**
     * Group by Club_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Club_listGroupByArgs} args - Group by arguments.
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
      T extends Club_listGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Club_listGroupByArgs['orderBy'] }
        : { orderBy?: Club_listGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Club_listGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClub_listGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Club_list.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Club_listClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Club_list base type for findUnique actions
   */
  export type Club_listFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Club_list
     */
    select?: Club_listSelect | null
    /**
     * Filter, which Club_list to fetch.
     */
    where: Club_listWhereUniqueInput
  }

  /**
   * Club_list findUnique
   */
  export interface Club_listFindUniqueArgs extends Club_listFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Club_list findUniqueOrThrow
   */
  export type Club_listFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Club_list
     */
    select?: Club_listSelect | null
    /**
     * Filter, which Club_list to fetch.
     */
    where: Club_listWhereUniqueInput
  }


  /**
   * Club_list base type for findFirst actions
   */
  export type Club_listFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Club_list
     */
    select?: Club_listSelect | null
    /**
     * Filter, which Club_list to fetch.
     */
    where?: Club_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Club_lists to fetch.
     */
    orderBy?: Enumerable<Club_listOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Club_lists.
     */
    cursor?: Club_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Club_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Club_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Club_lists.
     */
    distinct?: Enumerable<Club_listScalarFieldEnum>
  }

  /**
   * Club_list findFirst
   */
  export interface Club_listFindFirstArgs extends Club_listFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Club_list findFirstOrThrow
   */
  export type Club_listFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Club_list
     */
    select?: Club_listSelect | null
    /**
     * Filter, which Club_list to fetch.
     */
    where?: Club_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Club_lists to fetch.
     */
    orderBy?: Enumerable<Club_listOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Club_lists.
     */
    cursor?: Club_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Club_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Club_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Club_lists.
     */
    distinct?: Enumerable<Club_listScalarFieldEnum>
  }


  /**
   * Club_list findMany
   */
  export type Club_listFindManyArgs = {
    /**
     * Select specific fields to fetch from the Club_list
     */
    select?: Club_listSelect | null
    /**
     * Filter, which Club_lists to fetch.
     */
    where?: Club_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Club_lists to fetch.
     */
    orderBy?: Enumerable<Club_listOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Club_lists.
     */
    cursor?: Club_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Club_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Club_lists.
     */
    skip?: number
    distinct?: Enumerable<Club_listScalarFieldEnum>
  }


  /**
   * Club_list create
   */
  export type Club_listCreateArgs = {
    /**
     * Select specific fields to fetch from the Club_list
     */
    select?: Club_listSelect | null
    /**
     * The data needed to create a Club_list.
     */
    data: XOR<Club_listCreateInput, Club_listUncheckedCreateInput>
  }


  /**
   * Club_list createMany
   */
  export type Club_listCreateManyArgs = {
    /**
     * The data used to create many Club_lists.
     */
    data: Enumerable<Club_listCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Club_list update
   */
  export type Club_listUpdateArgs = {
    /**
     * Select specific fields to fetch from the Club_list
     */
    select?: Club_listSelect | null
    /**
     * The data needed to update a Club_list.
     */
    data: XOR<Club_listUpdateInput, Club_listUncheckedUpdateInput>
    /**
     * Choose, which Club_list to update.
     */
    where: Club_listWhereUniqueInput
  }


  /**
   * Club_list updateMany
   */
  export type Club_listUpdateManyArgs = {
    /**
     * The data used to update Club_lists.
     */
    data: XOR<Club_listUpdateManyMutationInput, Club_listUncheckedUpdateManyInput>
    /**
     * Filter which Club_lists to update
     */
    where?: Club_listWhereInput
  }


  /**
   * Club_list upsert
   */
  export type Club_listUpsertArgs = {
    /**
     * Select specific fields to fetch from the Club_list
     */
    select?: Club_listSelect | null
    /**
     * The filter to search for the Club_list to update in case it exists.
     */
    where: Club_listWhereUniqueInput
    /**
     * In case the Club_list found by the `where` argument doesn't exist, create a new Club_list with this data.
     */
    create: XOR<Club_listCreateInput, Club_listUncheckedCreateInput>
    /**
     * In case the Club_list was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Club_listUpdateInput, Club_listUncheckedUpdateInput>
  }


  /**
   * Club_list delete
   */
  export type Club_listDeleteArgs = {
    /**
     * Select specific fields to fetch from the Club_list
     */
    select?: Club_listSelect | null
    /**
     * Filter which Club_list to delete.
     */
    where: Club_listWhereUniqueInput
  }


  /**
   * Club_list deleteMany
   */
  export type Club_listDeleteManyArgs = {
    /**
     * Filter which Club_lists to delete
     */
    where?: Club_listWhereInput
  }


  /**
   * Club_list without action
   */
  export type Club_listArgs = {
    /**
     * Select specific fields to fetch from the Club_list
     */
    select?: Club_listSelect | null
  }



  /**
   * Model Club_user_list
   */


  export type AggregateClub_user_list = {
    _count: Club_user_listCountAggregateOutputType | null
    _avg: Club_user_listAvgAggregateOutputType | null
    _sum: Club_user_listSumAggregateOutputType | null
    _min: Club_user_listMinAggregateOutputType | null
    _max: Club_user_listMaxAggregateOutputType | null
  }

  export type Club_user_listAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Club_user_listSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Club_user_listMinAggregateOutputType = {
    id: number | null
    club_id: string | null
    user_id: number | null
    user_name: string | null
    user_head_url: string | null
  }

  export type Club_user_listMaxAggregateOutputType = {
    id: number | null
    club_id: string | null
    user_id: number | null
    user_name: string | null
    user_head_url: string | null
  }

  export type Club_user_listCountAggregateOutputType = {
    id: number
    club_id: number
    user_id: number
    user_name: number
    user_head_url: number
    _all: number
  }


  export type Club_user_listAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Club_user_listSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Club_user_listMinAggregateInputType = {
    id?: true
    club_id?: true
    user_id?: true
    user_name?: true
    user_head_url?: true
  }

  export type Club_user_listMaxAggregateInputType = {
    id?: true
    club_id?: true
    user_id?: true
    user_name?: true
    user_head_url?: true
  }

  export type Club_user_listCountAggregateInputType = {
    id?: true
    club_id?: true
    user_id?: true
    user_name?: true
    user_head_url?: true
    _all?: true
  }

  export type Club_user_listAggregateArgs = {
    /**
     * Filter which Club_user_list to aggregate.
     */
    where?: Club_user_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Club_user_lists to fetch.
     */
    orderBy?: Enumerable<Club_user_listOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Club_user_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Club_user_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Club_user_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Club_user_lists
    **/
    _count?: true | Club_user_listCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Club_user_listAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Club_user_listSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Club_user_listMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Club_user_listMaxAggregateInputType
  }

  export type GetClub_user_listAggregateType<T extends Club_user_listAggregateArgs> = {
        [P in keyof T & keyof AggregateClub_user_list]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClub_user_list[P]>
      : GetScalarType<T[P], AggregateClub_user_list[P]>
  }




  export type Club_user_listGroupByArgs = {
    where?: Club_user_listWhereInput
    orderBy?: Enumerable<Club_user_listOrderByWithAggregationInput>
    by: Club_user_listScalarFieldEnum[]
    having?: Club_user_listScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Club_user_listCountAggregateInputType | true
    _avg?: Club_user_listAvgAggregateInputType
    _sum?: Club_user_listSumAggregateInputType
    _min?: Club_user_listMinAggregateInputType
    _max?: Club_user_listMaxAggregateInputType
  }


  export type Club_user_listGroupByOutputType = {
    id: number
    club_id: string
    user_id: number
    user_name: string
    user_head_url: string
    _count: Club_user_listCountAggregateOutputType | null
    _avg: Club_user_listAvgAggregateOutputType | null
    _sum: Club_user_listSumAggregateOutputType | null
    _min: Club_user_listMinAggregateOutputType | null
    _max: Club_user_listMaxAggregateOutputType | null
  }

  type GetClub_user_listGroupByPayload<T extends Club_user_listGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Club_user_listGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Club_user_listGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Club_user_listGroupByOutputType[P]>
            : GetScalarType<T[P], Club_user_listGroupByOutputType[P]>
        }
      >
    >


  export type Club_user_listSelect = {
    id?: boolean
    club_id?: boolean
    user_id?: boolean
    user_name?: boolean
    user_head_url?: boolean
  }


  export type Club_user_listGetPayload<S extends boolean | null | undefined | Club_user_listArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Club_user_list :
    S extends undefined ? never :
    S extends { include: any } & (Club_user_listArgs | Club_user_listFindManyArgs)
    ? Club_user_list 
    : S extends { select: any } & (Club_user_listArgs | Club_user_listFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Club_user_list ? Club_user_list[P] : never
  } 
      : Club_user_list


  type Club_user_listCountArgs = 
    Omit<Club_user_listFindManyArgs, 'select' | 'include'> & {
      select?: Club_user_listCountAggregateInputType | true
    }

  export interface Club_user_listDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Club_user_list that matches the filter.
     * @param {Club_user_listFindUniqueArgs} args - Arguments to find a Club_user_list
     * @example
     * // Get one Club_user_list
     * const club_user_list = await prisma.club_user_list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Club_user_listFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Club_user_listFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Club_user_list'> extends True ? Prisma__Club_user_listClient<Club_user_listGetPayload<T>> : Prisma__Club_user_listClient<Club_user_listGetPayload<T> | null, null>

    /**
     * Find one Club_user_list that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Club_user_listFindUniqueOrThrowArgs} args - Arguments to find a Club_user_list
     * @example
     * // Get one Club_user_list
     * const club_user_list = await prisma.club_user_list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Club_user_listFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Club_user_listFindUniqueOrThrowArgs>
    ): Prisma__Club_user_listClient<Club_user_listGetPayload<T>>

    /**
     * Find the first Club_user_list that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Club_user_listFindFirstArgs} args - Arguments to find a Club_user_list
     * @example
     * // Get one Club_user_list
     * const club_user_list = await prisma.club_user_list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Club_user_listFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Club_user_listFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Club_user_list'> extends True ? Prisma__Club_user_listClient<Club_user_listGetPayload<T>> : Prisma__Club_user_listClient<Club_user_listGetPayload<T> | null, null>

    /**
     * Find the first Club_user_list that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Club_user_listFindFirstOrThrowArgs} args - Arguments to find a Club_user_list
     * @example
     * // Get one Club_user_list
     * const club_user_list = await prisma.club_user_list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Club_user_listFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Club_user_listFindFirstOrThrowArgs>
    ): Prisma__Club_user_listClient<Club_user_listGetPayload<T>>

    /**
     * Find zero or more Club_user_lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Club_user_listFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Club_user_lists
     * const club_user_lists = await prisma.club_user_list.findMany()
     * 
     * // Get first 10 Club_user_lists
     * const club_user_lists = await prisma.club_user_list.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const club_user_listWithIdOnly = await prisma.club_user_list.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Club_user_listFindManyArgs>(
      args?: SelectSubset<T, Club_user_listFindManyArgs>
    ): Prisma.PrismaPromise<Array<Club_user_listGetPayload<T>>>

    /**
     * Create a Club_user_list.
     * @param {Club_user_listCreateArgs} args - Arguments to create a Club_user_list.
     * @example
     * // Create one Club_user_list
     * const Club_user_list = await prisma.club_user_list.create({
     *   data: {
     *     // ... data to create a Club_user_list
     *   }
     * })
     * 
    **/
    create<T extends Club_user_listCreateArgs>(
      args: SelectSubset<T, Club_user_listCreateArgs>
    ): Prisma__Club_user_listClient<Club_user_listGetPayload<T>>

    /**
     * Create many Club_user_lists.
     *     @param {Club_user_listCreateManyArgs} args - Arguments to create many Club_user_lists.
     *     @example
     *     // Create many Club_user_lists
     *     const club_user_list = await prisma.club_user_list.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Club_user_listCreateManyArgs>(
      args?: SelectSubset<T, Club_user_listCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Club_user_list.
     * @param {Club_user_listDeleteArgs} args - Arguments to delete one Club_user_list.
     * @example
     * // Delete one Club_user_list
     * const Club_user_list = await prisma.club_user_list.delete({
     *   where: {
     *     // ... filter to delete one Club_user_list
     *   }
     * })
     * 
    **/
    delete<T extends Club_user_listDeleteArgs>(
      args: SelectSubset<T, Club_user_listDeleteArgs>
    ): Prisma__Club_user_listClient<Club_user_listGetPayload<T>>

    /**
     * Update one Club_user_list.
     * @param {Club_user_listUpdateArgs} args - Arguments to update one Club_user_list.
     * @example
     * // Update one Club_user_list
     * const club_user_list = await prisma.club_user_list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Club_user_listUpdateArgs>(
      args: SelectSubset<T, Club_user_listUpdateArgs>
    ): Prisma__Club_user_listClient<Club_user_listGetPayload<T>>

    /**
     * Delete zero or more Club_user_lists.
     * @param {Club_user_listDeleteManyArgs} args - Arguments to filter Club_user_lists to delete.
     * @example
     * // Delete a few Club_user_lists
     * const { count } = await prisma.club_user_list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Club_user_listDeleteManyArgs>(
      args?: SelectSubset<T, Club_user_listDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Club_user_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Club_user_listUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Club_user_lists
     * const club_user_list = await prisma.club_user_list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Club_user_listUpdateManyArgs>(
      args: SelectSubset<T, Club_user_listUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Club_user_list.
     * @param {Club_user_listUpsertArgs} args - Arguments to update or create a Club_user_list.
     * @example
     * // Update or create a Club_user_list
     * const club_user_list = await prisma.club_user_list.upsert({
     *   create: {
     *     // ... data to create a Club_user_list
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Club_user_list we want to update
     *   }
     * })
    **/
    upsert<T extends Club_user_listUpsertArgs>(
      args: SelectSubset<T, Club_user_listUpsertArgs>
    ): Prisma__Club_user_listClient<Club_user_listGetPayload<T>>

    /**
     * Count the number of Club_user_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Club_user_listCountArgs} args - Arguments to filter Club_user_lists to count.
     * @example
     * // Count the number of Club_user_lists
     * const count = await prisma.club_user_list.count({
     *   where: {
     *     // ... the filter for the Club_user_lists we want to count
     *   }
     * })
    **/
    count<T extends Club_user_listCountArgs>(
      args?: Subset<T, Club_user_listCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Club_user_listCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Club_user_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Club_user_listAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Club_user_listAggregateArgs>(args: Subset<T, Club_user_listAggregateArgs>): Prisma.PrismaPromise<GetClub_user_listAggregateType<T>>

    /**
     * Group by Club_user_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Club_user_listGroupByArgs} args - Group by arguments.
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
      T extends Club_user_listGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Club_user_listGroupByArgs['orderBy'] }
        : { orderBy?: Club_user_listGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Club_user_listGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClub_user_listGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Club_user_list.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Club_user_listClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Club_user_list base type for findUnique actions
   */
  export type Club_user_listFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Club_user_list
     */
    select?: Club_user_listSelect | null
    /**
     * Filter, which Club_user_list to fetch.
     */
    where: Club_user_listWhereUniqueInput
  }

  /**
   * Club_user_list findUnique
   */
  export interface Club_user_listFindUniqueArgs extends Club_user_listFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Club_user_list findUniqueOrThrow
   */
  export type Club_user_listFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Club_user_list
     */
    select?: Club_user_listSelect | null
    /**
     * Filter, which Club_user_list to fetch.
     */
    where: Club_user_listWhereUniqueInput
  }


  /**
   * Club_user_list base type for findFirst actions
   */
  export type Club_user_listFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Club_user_list
     */
    select?: Club_user_listSelect | null
    /**
     * Filter, which Club_user_list to fetch.
     */
    where?: Club_user_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Club_user_lists to fetch.
     */
    orderBy?: Enumerable<Club_user_listOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Club_user_lists.
     */
    cursor?: Club_user_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Club_user_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Club_user_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Club_user_lists.
     */
    distinct?: Enumerable<Club_user_listScalarFieldEnum>
  }

  /**
   * Club_user_list findFirst
   */
  export interface Club_user_listFindFirstArgs extends Club_user_listFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Club_user_list findFirstOrThrow
   */
  export type Club_user_listFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Club_user_list
     */
    select?: Club_user_listSelect | null
    /**
     * Filter, which Club_user_list to fetch.
     */
    where?: Club_user_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Club_user_lists to fetch.
     */
    orderBy?: Enumerable<Club_user_listOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Club_user_lists.
     */
    cursor?: Club_user_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Club_user_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Club_user_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Club_user_lists.
     */
    distinct?: Enumerable<Club_user_listScalarFieldEnum>
  }


  /**
   * Club_user_list findMany
   */
  export type Club_user_listFindManyArgs = {
    /**
     * Select specific fields to fetch from the Club_user_list
     */
    select?: Club_user_listSelect | null
    /**
     * Filter, which Club_user_lists to fetch.
     */
    where?: Club_user_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Club_user_lists to fetch.
     */
    orderBy?: Enumerable<Club_user_listOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Club_user_lists.
     */
    cursor?: Club_user_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Club_user_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Club_user_lists.
     */
    skip?: number
    distinct?: Enumerable<Club_user_listScalarFieldEnum>
  }


  /**
   * Club_user_list create
   */
  export type Club_user_listCreateArgs = {
    /**
     * Select specific fields to fetch from the Club_user_list
     */
    select?: Club_user_listSelect | null
    /**
     * The data needed to create a Club_user_list.
     */
    data: XOR<Club_user_listCreateInput, Club_user_listUncheckedCreateInput>
  }


  /**
   * Club_user_list createMany
   */
  export type Club_user_listCreateManyArgs = {
    /**
     * The data used to create many Club_user_lists.
     */
    data: Enumerable<Club_user_listCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Club_user_list update
   */
  export type Club_user_listUpdateArgs = {
    /**
     * Select specific fields to fetch from the Club_user_list
     */
    select?: Club_user_listSelect | null
    /**
     * The data needed to update a Club_user_list.
     */
    data: XOR<Club_user_listUpdateInput, Club_user_listUncheckedUpdateInput>
    /**
     * Choose, which Club_user_list to update.
     */
    where: Club_user_listWhereUniqueInput
  }


  /**
   * Club_user_list updateMany
   */
  export type Club_user_listUpdateManyArgs = {
    /**
     * The data used to update Club_user_lists.
     */
    data: XOR<Club_user_listUpdateManyMutationInput, Club_user_listUncheckedUpdateManyInput>
    /**
     * Filter which Club_user_lists to update
     */
    where?: Club_user_listWhereInput
  }


  /**
   * Club_user_list upsert
   */
  export type Club_user_listUpsertArgs = {
    /**
     * Select specific fields to fetch from the Club_user_list
     */
    select?: Club_user_listSelect | null
    /**
     * The filter to search for the Club_user_list to update in case it exists.
     */
    where: Club_user_listWhereUniqueInput
    /**
     * In case the Club_user_list found by the `where` argument doesn't exist, create a new Club_user_list with this data.
     */
    create: XOR<Club_user_listCreateInput, Club_user_listUncheckedCreateInput>
    /**
     * In case the Club_user_list was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Club_user_listUpdateInput, Club_user_listUncheckedUpdateInput>
  }


  /**
   * Club_user_list delete
   */
  export type Club_user_listDeleteArgs = {
    /**
     * Select specific fields to fetch from the Club_user_list
     */
    select?: Club_user_listSelect | null
    /**
     * Filter which Club_user_list to delete.
     */
    where: Club_user_listWhereUniqueInput
  }


  /**
   * Club_user_list deleteMany
   */
  export type Club_user_listDeleteManyArgs = {
    /**
     * Filter which Club_user_lists to delete
     */
    where?: Club_user_listWhereInput
  }


  /**
   * Club_user_list without action
   */
  export type Club_user_listArgs = {
    /**
     * Select specific fields to fetch from the Club_user_list
     */
    select?: Club_user_listSelect | null
  }



  /**
   * Model User_club_num_list
   */


  export type AggregateUser_club_num_list = {
    _count: User_club_num_listCountAggregateOutputType | null
    _avg: User_club_num_listAvgAggregateOutputType | null
    _sum: User_club_num_listSumAggregateOutputType | null
    _min: User_club_num_listMinAggregateOutputType | null
    _max: User_club_num_listMaxAggregateOutputType | null
  }

  export type User_club_num_listAvgAggregateOutputType = {
    user_id: number | null
    club_num: number | null
  }

  export type User_club_num_listSumAggregateOutputType = {
    user_id: number | null
    club_num: number | null
  }

  export type User_club_num_listMinAggregateOutputType = {
    user_id: number | null
    club_num: number | null
  }

  export type User_club_num_listMaxAggregateOutputType = {
    user_id: number | null
    club_num: number | null
  }

  export type User_club_num_listCountAggregateOutputType = {
    user_id: number
    club_num: number
    _all: number
  }


  export type User_club_num_listAvgAggregateInputType = {
    user_id?: true
    club_num?: true
  }

  export type User_club_num_listSumAggregateInputType = {
    user_id?: true
    club_num?: true
  }

  export type User_club_num_listMinAggregateInputType = {
    user_id?: true
    club_num?: true
  }

  export type User_club_num_listMaxAggregateInputType = {
    user_id?: true
    club_num?: true
  }

  export type User_club_num_listCountAggregateInputType = {
    user_id?: true
    club_num?: true
    _all?: true
  }

  export type User_club_num_listAggregateArgs = {
    /**
     * Filter which User_club_num_list to aggregate.
     */
    where?: User_club_num_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_club_num_lists to fetch.
     */
    orderBy?: Enumerable<User_club_num_listOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_club_num_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_club_num_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_club_num_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_club_num_lists
    **/
    _count?: true | User_club_num_listCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_club_num_listAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_club_num_listSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_club_num_listMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_club_num_listMaxAggregateInputType
  }

  export type GetUser_club_num_listAggregateType<T extends User_club_num_listAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_club_num_list]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_club_num_list[P]>
      : GetScalarType<T[P], AggregateUser_club_num_list[P]>
  }




  export type User_club_num_listGroupByArgs = {
    where?: User_club_num_listWhereInput
    orderBy?: Enumerable<User_club_num_listOrderByWithAggregationInput>
    by: User_club_num_listScalarFieldEnum[]
    having?: User_club_num_listScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_club_num_listCountAggregateInputType | true
    _avg?: User_club_num_listAvgAggregateInputType
    _sum?: User_club_num_listSumAggregateInputType
    _min?: User_club_num_listMinAggregateInputType
    _max?: User_club_num_listMaxAggregateInputType
  }


  export type User_club_num_listGroupByOutputType = {
    user_id: number
    club_num: number
    _count: User_club_num_listCountAggregateOutputType | null
    _avg: User_club_num_listAvgAggregateOutputType | null
    _sum: User_club_num_listSumAggregateOutputType | null
    _min: User_club_num_listMinAggregateOutputType | null
    _max: User_club_num_listMaxAggregateOutputType | null
  }

  type GetUser_club_num_listGroupByPayload<T extends User_club_num_listGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<User_club_num_listGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_club_num_listGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_club_num_listGroupByOutputType[P]>
            : GetScalarType<T[P], User_club_num_listGroupByOutputType[P]>
        }
      >
    >


  export type User_club_num_listSelect = {
    user_id?: boolean
    club_num?: boolean
  }


  export type User_club_num_listGetPayload<S extends boolean | null | undefined | User_club_num_listArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User_club_num_list :
    S extends undefined ? never :
    S extends { include: any } & (User_club_num_listArgs | User_club_num_listFindManyArgs)
    ? User_club_num_list 
    : S extends { select: any } & (User_club_num_listArgs | User_club_num_listFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof User_club_num_list ? User_club_num_list[P] : never
  } 
      : User_club_num_list


  type User_club_num_listCountArgs = 
    Omit<User_club_num_listFindManyArgs, 'select' | 'include'> & {
      select?: User_club_num_listCountAggregateInputType | true
    }

  export interface User_club_num_listDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User_club_num_list that matches the filter.
     * @param {User_club_num_listFindUniqueArgs} args - Arguments to find a User_club_num_list
     * @example
     * // Get one User_club_num_list
     * const user_club_num_list = await prisma.user_club_num_list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends User_club_num_listFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, User_club_num_listFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User_club_num_list'> extends True ? Prisma__User_club_num_listClient<User_club_num_listGetPayload<T>> : Prisma__User_club_num_listClient<User_club_num_listGetPayload<T> | null, null>

    /**
     * Find one User_club_num_list that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {User_club_num_listFindUniqueOrThrowArgs} args - Arguments to find a User_club_num_list
     * @example
     * // Get one User_club_num_list
     * const user_club_num_list = await prisma.user_club_num_list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends User_club_num_listFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, User_club_num_listFindUniqueOrThrowArgs>
    ): Prisma__User_club_num_listClient<User_club_num_listGetPayload<T>>

    /**
     * Find the first User_club_num_list that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_club_num_listFindFirstArgs} args - Arguments to find a User_club_num_list
     * @example
     * // Get one User_club_num_list
     * const user_club_num_list = await prisma.user_club_num_list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends User_club_num_listFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, User_club_num_listFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User_club_num_list'> extends True ? Prisma__User_club_num_listClient<User_club_num_listGetPayload<T>> : Prisma__User_club_num_listClient<User_club_num_listGetPayload<T> | null, null>

    /**
     * Find the first User_club_num_list that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_club_num_listFindFirstOrThrowArgs} args - Arguments to find a User_club_num_list
     * @example
     * // Get one User_club_num_list
     * const user_club_num_list = await prisma.user_club_num_list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends User_club_num_listFindFirstOrThrowArgs>(
      args?: SelectSubset<T, User_club_num_listFindFirstOrThrowArgs>
    ): Prisma__User_club_num_listClient<User_club_num_listGetPayload<T>>

    /**
     * Find zero or more User_club_num_lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_club_num_listFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_club_num_lists
     * const user_club_num_lists = await prisma.user_club_num_list.findMany()
     * 
     * // Get first 10 User_club_num_lists
     * const user_club_num_lists = await prisma.user_club_num_list.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_club_num_listWithUser_idOnly = await prisma.user_club_num_list.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends User_club_num_listFindManyArgs>(
      args?: SelectSubset<T, User_club_num_listFindManyArgs>
    ): Prisma.PrismaPromise<Array<User_club_num_listGetPayload<T>>>

    /**
     * Create a User_club_num_list.
     * @param {User_club_num_listCreateArgs} args - Arguments to create a User_club_num_list.
     * @example
     * // Create one User_club_num_list
     * const User_club_num_list = await prisma.user_club_num_list.create({
     *   data: {
     *     // ... data to create a User_club_num_list
     *   }
     * })
     * 
    **/
    create<T extends User_club_num_listCreateArgs>(
      args: SelectSubset<T, User_club_num_listCreateArgs>
    ): Prisma__User_club_num_listClient<User_club_num_listGetPayload<T>>

    /**
     * Create many User_club_num_lists.
     *     @param {User_club_num_listCreateManyArgs} args - Arguments to create many User_club_num_lists.
     *     @example
     *     // Create many User_club_num_lists
     *     const user_club_num_list = await prisma.user_club_num_list.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends User_club_num_listCreateManyArgs>(
      args?: SelectSubset<T, User_club_num_listCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_club_num_list.
     * @param {User_club_num_listDeleteArgs} args - Arguments to delete one User_club_num_list.
     * @example
     * // Delete one User_club_num_list
     * const User_club_num_list = await prisma.user_club_num_list.delete({
     *   where: {
     *     // ... filter to delete one User_club_num_list
     *   }
     * })
     * 
    **/
    delete<T extends User_club_num_listDeleteArgs>(
      args: SelectSubset<T, User_club_num_listDeleteArgs>
    ): Prisma__User_club_num_listClient<User_club_num_listGetPayload<T>>

    /**
     * Update one User_club_num_list.
     * @param {User_club_num_listUpdateArgs} args - Arguments to update one User_club_num_list.
     * @example
     * // Update one User_club_num_list
     * const user_club_num_list = await prisma.user_club_num_list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends User_club_num_listUpdateArgs>(
      args: SelectSubset<T, User_club_num_listUpdateArgs>
    ): Prisma__User_club_num_listClient<User_club_num_listGetPayload<T>>

    /**
     * Delete zero or more User_club_num_lists.
     * @param {User_club_num_listDeleteManyArgs} args - Arguments to filter User_club_num_lists to delete.
     * @example
     * // Delete a few User_club_num_lists
     * const { count } = await prisma.user_club_num_list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends User_club_num_listDeleteManyArgs>(
      args?: SelectSubset<T, User_club_num_listDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_club_num_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_club_num_listUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_club_num_lists
     * const user_club_num_list = await prisma.user_club_num_list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends User_club_num_listUpdateManyArgs>(
      args: SelectSubset<T, User_club_num_listUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_club_num_list.
     * @param {User_club_num_listUpsertArgs} args - Arguments to update or create a User_club_num_list.
     * @example
     * // Update or create a User_club_num_list
     * const user_club_num_list = await prisma.user_club_num_list.upsert({
     *   create: {
     *     // ... data to create a User_club_num_list
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_club_num_list we want to update
     *   }
     * })
    **/
    upsert<T extends User_club_num_listUpsertArgs>(
      args: SelectSubset<T, User_club_num_listUpsertArgs>
    ): Prisma__User_club_num_listClient<User_club_num_listGetPayload<T>>

    /**
     * Count the number of User_club_num_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_club_num_listCountArgs} args - Arguments to filter User_club_num_lists to count.
     * @example
     * // Count the number of User_club_num_lists
     * const count = await prisma.user_club_num_list.count({
     *   where: {
     *     // ... the filter for the User_club_num_lists we want to count
     *   }
     * })
    **/
    count<T extends User_club_num_listCountArgs>(
      args?: Subset<T, User_club_num_listCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_club_num_listCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_club_num_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_club_num_listAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_club_num_listAggregateArgs>(args: Subset<T, User_club_num_listAggregateArgs>): Prisma.PrismaPromise<GetUser_club_num_listAggregateType<T>>

    /**
     * Group by User_club_num_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_club_num_listGroupByArgs} args - Group by arguments.
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
      T extends User_club_num_listGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_club_num_listGroupByArgs['orderBy'] }
        : { orderBy?: User_club_num_listGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, User_club_num_listGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_club_num_listGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User_club_num_list.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__User_club_num_listClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * User_club_num_list base type for findUnique actions
   */
  export type User_club_num_listFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User_club_num_list
     */
    select?: User_club_num_listSelect | null
    /**
     * Filter, which User_club_num_list to fetch.
     */
    where: User_club_num_listWhereUniqueInput
  }

  /**
   * User_club_num_list findUnique
   */
  export interface User_club_num_listFindUniqueArgs extends User_club_num_listFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User_club_num_list findUniqueOrThrow
   */
  export type User_club_num_listFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User_club_num_list
     */
    select?: User_club_num_listSelect | null
    /**
     * Filter, which User_club_num_list to fetch.
     */
    where: User_club_num_listWhereUniqueInput
  }


  /**
   * User_club_num_list base type for findFirst actions
   */
  export type User_club_num_listFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User_club_num_list
     */
    select?: User_club_num_listSelect | null
    /**
     * Filter, which User_club_num_list to fetch.
     */
    where?: User_club_num_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_club_num_lists to fetch.
     */
    orderBy?: Enumerable<User_club_num_listOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_club_num_lists.
     */
    cursor?: User_club_num_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_club_num_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_club_num_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_club_num_lists.
     */
    distinct?: Enumerable<User_club_num_listScalarFieldEnum>
  }

  /**
   * User_club_num_list findFirst
   */
  export interface User_club_num_listFindFirstArgs extends User_club_num_listFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User_club_num_list findFirstOrThrow
   */
  export type User_club_num_listFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User_club_num_list
     */
    select?: User_club_num_listSelect | null
    /**
     * Filter, which User_club_num_list to fetch.
     */
    where?: User_club_num_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_club_num_lists to fetch.
     */
    orderBy?: Enumerable<User_club_num_listOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_club_num_lists.
     */
    cursor?: User_club_num_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_club_num_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_club_num_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_club_num_lists.
     */
    distinct?: Enumerable<User_club_num_listScalarFieldEnum>
  }


  /**
   * User_club_num_list findMany
   */
  export type User_club_num_listFindManyArgs = {
    /**
     * Select specific fields to fetch from the User_club_num_list
     */
    select?: User_club_num_listSelect | null
    /**
     * Filter, which User_club_num_lists to fetch.
     */
    where?: User_club_num_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_club_num_lists to fetch.
     */
    orderBy?: Enumerable<User_club_num_listOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_club_num_lists.
     */
    cursor?: User_club_num_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_club_num_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_club_num_lists.
     */
    skip?: number
    distinct?: Enumerable<User_club_num_listScalarFieldEnum>
  }


  /**
   * User_club_num_list create
   */
  export type User_club_num_listCreateArgs = {
    /**
     * Select specific fields to fetch from the User_club_num_list
     */
    select?: User_club_num_listSelect | null
    /**
     * The data needed to create a User_club_num_list.
     */
    data: XOR<User_club_num_listCreateInput, User_club_num_listUncheckedCreateInput>
  }


  /**
   * User_club_num_list createMany
   */
  export type User_club_num_listCreateManyArgs = {
    /**
     * The data used to create many User_club_num_lists.
     */
    data: Enumerable<User_club_num_listCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User_club_num_list update
   */
  export type User_club_num_listUpdateArgs = {
    /**
     * Select specific fields to fetch from the User_club_num_list
     */
    select?: User_club_num_listSelect | null
    /**
     * The data needed to update a User_club_num_list.
     */
    data: XOR<User_club_num_listUpdateInput, User_club_num_listUncheckedUpdateInput>
    /**
     * Choose, which User_club_num_list to update.
     */
    where: User_club_num_listWhereUniqueInput
  }


  /**
   * User_club_num_list updateMany
   */
  export type User_club_num_listUpdateManyArgs = {
    /**
     * The data used to update User_club_num_lists.
     */
    data: XOR<User_club_num_listUpdateManyMutationInput, User_club_num_listUncheckedUpdateManyInput>
    /**
     * Filter which User_club_num_lists to update
     */
    where?: User_club_num_listWhereInput
  }


  /**
   * User_club_num_list upsert
   */
  export type User_club_num_listUpsertArgs = {
    /**
     * Select specific fields to fetch from the User_club_num_list
     */
    select?: User_club_num_listSelect | null
    /**
     * The filter to search for the User_club_num_list to update in case it exists.
     */
    where: User_club_num_listWhereUniqueInput
    /**
     * In case the User_club_num_list found by the `where` argument doesn't exist, create a new User_club_num_list with this data.
     */
    create: XOR<User_club_num_listCreateInput, User_club_num_listUncheckedCreateInput>
    /**
     * In case the User_club_num_list was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_club_num_listUpdateInput, User_club_num_listUncheckedUpdateInput>
  }


  /**
   * User_club_num_list delete
   */
  export type User_club_num_listDeleteArgs = {
    /**
     * Select specific fields to fetch from the User_club_num_list
     */
    select?: User_club_num_listSelect | null
    /**
     * Filter which User_club_num_list to delete.
     */
    where: User_club_num_listWhereUniqueInput
  }


  /**
   * User_club_num_list deleteMany
   */
  export type User_club_num_listDeleteManyArgs = {
    /**
     * Filter which User_club_num_lists to delete
     */
    where?: User_club_num_listWhereInput
  }


  /**
   * User_club_num_list without action
   */
  export type User_club_num_listArgs = {
    /**
     * Select specific fields to fetch from the User_club_num_list
     */
    select?: User_club_num_listSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Apply_clubScalarFieldEnum: {
    id: 'id',
    club_id: 'club_id',
    apply_user: 'apply_user',
    apply_user_name: 'apply_user_name',
    apply_time: 'apply_time',
    apply_result: 'apply_result',
    apply_user_head_url: 'apply_user_head_url'
  };

  export type Apply_clubScalarFieldEnum = (typeof Apply_clubScalarFieldEnum)[keyof typeof Apply_clubScalarFieldEnum]


  export const Club_listScalarFieldEnum: {
    id: 'id',
    club_name: 'club_name',
    create_user: 'create_user',
    content: 'content',
    club_manage: 'club_manage',
    club_id: 'club_id',
    user_num: 'user_num',
    create_user_name: 'create_user_name',
    create_user_head_url: 'create_user_head_url',
    club_manage_name: 'club_manage_name',
    club_manage_head_url: 'club_manage_head_url',
    table_info: 'table_info'
  };

  export type Club_listScalarFieldEnum = (typeof Club_listScalarFieldEnum)[keyof typeof Club_listScalarFieldEnum]


  export const Club_user_listScalarFieldEnum: {
    id: 'id',
    club_id: 'club_id',
    user_id: 'user_id',
    user_name: 'user_name',
    user_head_url: 'user_head_url'
  };

  export type Club_user_listScalarFieldEnum = (typeof Club_user_listScalarFieldEnum)[keyof typeof Club_user_listScalarFieldEnum]


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


  export const User_club_num_listScalarFieldEnum: {
    user_id: 'user_id',
    club_num: 'club_num'
  };

  export type User_club_num_listScalarFieldEnum = (typeof User_club_num_listScalarFieldEnum)[keyof typeof User_club_num_listScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type Apply_clubWhereInput = {
    AND?: Enumerable<Apply_clubWhereInput>
    OR?: Enumerable<Apply_clubWhereInput>
    NOT?: Enumerable<Apply_clubWhereInput>
    id?: IntFilter | number
    club_id?: StringFilter | string
    apply_user?: IntFilter | number
    apply_user_name?: StringFilter | string
    apply_time?: DateTimeFilter | Date | string
    apply_result?: IntFilter | number
    apply_user_head_url?: StringFilter | string
  }

  export type Apply_clubOrderByWithRelationInput = {
    id?: SortOrder
    club_id?: SortOrder
    apply_user?: SortOrder
    apply_user_name?: SortOrder
    apply_time?: SortOrder
    apply_result?: SortOrder
    apply_user_head_url?: SortOrder
  }

  export type Apply_clubWhereUniqueInput = {
    id?: number
  }

  export type Apply_clubOrderByWithAggregationInput = {
    id?: SortOrder
    club_id?: SortOrder
    apply_user?: SortOrder
    apply_user_name?: SortOrder
    apply_time?: SortOrder
    apply_result?: SortOrder
    apply_user_head_url?: SortOrder
    _count?: Apply_clubCountOrderByAggregateInput
    _avg?: Apply_clubAvgOrderByAggregateInput
    _max?: Apply_clubMaxOrderByAggregateInput
    _min?: Apply_clubMinOrderByAggregateInput
    _sum?: Apply_clubSumOrderByAggregateInput
  }

  export type Apply_clubScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Apply_clubScalarWhereWithAggregatesInput>
    OR?: Enumerable<Apply_clubScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Apply_clubScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    club_id?: StringWithAggregatesFilter | string
    apply_user?: IntWithAggregatesFilter | number
    apply_user_name?: StringWithAggregatesFilter | string
    apply_time?: DateTimeWithAggregatesFilter | Date | string
    apply_result?: IntWithAggregatesFilter | number
    apply_user_head_url?: StringWithAggregatesFilter | string
  }

  export type Club_listWhereInput = {
    AND?: Enumerable<Club_listWhereInput>
    OR?: Enumerable<Club_listWhereInput>
    NOT?: Enumerable<Club_listWhereInput>
    id?: IntFilter | number
    club_name?: StringFilter | string
    create_user?: IntFilter | number
    content?: StringFilter | string
    club_manage?: IntFilter | number
    club_id?: StringFilter | string
    user_num?: IntFilter | number
    create_user_name?: StringFilter | string
    create_user_head_url?: StringFilter | string
    club_manage_name?: StringFilter | string
    club_manage_head_url?: StringFilter | string
    table_info?: StringFilter | string
  }

  export type Club_listOrderByWithRelationInput = {
    id?: SortOrder
    club_name?: SortOrder
    create_user?: SortOrder
    content?: SortOrder
    club_manage?: SortOrder
    club_id?: SortOrder
    user_num?: SortOrder
    create_user_name?: SortOrder
    create_user_head_url?: SortOrder
    club_manage_name?: SortOrder
    club_manage_head_url?: SortOrder
    table_info?: SortOrder
  }

  export type Club_listWhereUniqueInput = {
    id?: number
  }

  export type Club_listOrderByWithAggregationInput = {
    id?: SortOrder
    club_name?: SortOrder
    create_user?: SortOrder
    content?: SortOrder
    club_manage?: SortOrder
    club_id?: SortOrder
    user_num?: SortOrder
    create_user_name?: SortOrder
    create_user_head_url?: SortOrder
    club_manage_name?: SortOrder
    club_manage_head_url?: SortOrder
    table_info?: SortOrder
    _count?: Club_listCountOrderByAggregateInput
    _avg?: Club_listAvgOrderByAggregateInput
    _max?: Club_listMaxOrderByAggregateInput
    _min?: Club_listMinOrderByAggregateInput
    _sum?: Club_listSumOrderByAggregateInput
  }

  export type Club_listScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Club_listScalarWhereWithAggregatesInput>
    OR?: Enumerable<Club_listScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Club_listScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    club_name?: StringWithAggregatesFilter | string
    create_user?: IntWithAggregatesFilter | number
    content?: StringWithAggregatesFilter | string
    club_manage?: IntWithAggregatesFilter | number
    club_id?: StringWithAggregatesFilter | string
    user_num?: IntWithAggregatesFilter | number
    create_user_name?: StringWithAggregatesFilter | string
    create_user_head_url?: StringWithAggregatesFilter | string
    club_manage_name?: StringWithAggregatesFilter | string
    club_manage_head_url?: StringWithAggregatesFilter | string
    table_info?: StringWithAggregatesFilter | string
  }

  export type Club_user_listWhereInput = {
    AND?: Enumerable<Club_user_listWhereInput>
    OR?: Enumerable<Club_user_listWhereInput>
    NOT?: Enumerable<Club_user_listWhereInput>
    id?: IntFilter | number
    club_id?: StringFilter | string
    user_id?: IntFilter | number
    user_name?: StringFilter | string
    user_head_url?: StringFilter | string
  }

  export type Club_user_listOrderByWithRelationInput = {
    id?: SortOrder
    club_id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    user_head_url?: SortOrder
  }

  export type Club_user_listWhereUniqueInput = {
    id?: number
  }

  export type Club_user_listOrderByWithAggregationInput = {
    id?: SortOrder
    club_id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    user_head_url?: SortOrder
    _count?: Club_user_listCountOrderByAggregateInput
    _avg?: Club_user_listAvgOrderByAggregateInput
    _max?: Club_user_listMaxOrderByAggregateInput
    _min?: Club_user_listMinOrderByAggregateInput
    _sum?: Club_user_listSumOrderByAggregateInput
  }

  export type Club_user_listScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Club_user_listScalarWhereWithAggregatesInput>
    OR?: Enumerable<Club_user_listScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Club_user_listScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    club_id?: StringWithAggregatesFilter | string
    user_id?: IntWithAggregatesFilter | number
    user_name?: StringWithAggregatesFilter | string
    user_head_url?: StringWithAggregatesFilter | string
  }

  export type User_club_num_listWhereInput = {
    AND?: Enumerable<User_club_num_listWhereInput>
    OR?: Enumerable<User_club_num_listWhereInput>
    NOT?: Enumerable<User_club_num_listWhereInput>
    user_id?: IntFilter | number
    club_num?: IntFilter | number
  }

  export type User_club_num_listOrderByWithRelationInput = {
    user_id?: SortOrder
    club_num?: SortOrder
  }

  export type User_club_num_listWhereUniqueInput = {
    user_id?: number
  }

  export type User_club_num_listOrderByWithAggregationInput = {
    user_id?: SortOrder
    club_num?: SortOrder
    _count?: User_club_num_listCountOrderByAggregateInput
    _avg?: User_club_num_listAvgOrderByAggregateInput
    _max?: User_club_num_listMaxOrderByAggregateInput
    _min?: User_club_num_listMinOrderByAggregateInput
    _sum?: User_club_num_listSumOrderByAggregateInput
  }

  export type User_club_num_listScalarWhereWithAggregatesInput = {
    AND?: Enumerable<User_club_num_listScalarWhereWithAggregatesInput>
    OR?: Enumerable<User_club_num_listScalarWhereWithAggregatesInput>
    NOT?: Enumerable<User_club_num_listScalarWhereWithAggregatesInput>
    user_id?: IntWithAggregatesFilter | number
    club_num?: IntWithAggregatesFilter | number
  }

  export type Apply_clubCreateInput = {
    club_id: string
    apply_user: number
    apply_user_name: string
    apply_time: Date | string
    apply_result: number
    apply_user_head_url: string
  }

  export type Apply_clubUncheckedCreateInput = {
    id?: number
    club_id: string
    apply_user: number
    apply_user_name: string
    apply_time: Date | string
    apply_result: number
    apply_user_head_url: string
  }

  export type Apply_clubUpdateInput = {
    club_id?: StringFieldUpdateOperationsInput | string
    apply_user?: IntFieldUpdateOperationsInput | number
    apply_user_name?: StringFieldUpdateOperationsInput | string
    apply_time?: DateTimeFieldUpdateOperationsInput | Date | string
    apply_result?: IntFieldUpdateOperationsInput | number
    apply_user_head_url?: StringFieldUpdateOperationsInput | string
  }

  export type Apply_clubUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    club_id?: StringFieldUpdateOperationsInput | string
    apply_user?: IntFieldUpdateOperationsInput | number
    apply_user_name?: StringFieldUpdateOperationsInput | string
    apply_time?: DateTimeFieldUpdateOperationsInput | Date | string
    apply_result?: IntFieldUpdateOperationsInput | number
    apply_user_head_url?: StringFieldUpdateOperationsInput | string
  }

  export type Apply_clubCreateManyInput = {
    id?: number
    club_id: string
    apply_user: number
    apply_user_name: string
    apply_time: Date | string
    apply_result: number
    apply_user_head_url: string
  }

  export type Apply_clubUpdateManyMutationInput = {
    club_id?: StringFieldUpdateOperationsInput | string
    apply_user?: IntFieldUpdateOperationsInput | number
    apply_user_name?: StringFieldUpdateOperationsInput | string
    apply_time?: DateTimeFieldUpdateOperationsInput | Date | string
    apply_result?: IntFieldUpdateOperationsInput | number
    apply_user_head_url?: StringFieldUpdateOperationsInput | string
  }

  export type Apply_clubUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    club_id?: StringFieldUpdateOperationsInput | string
    apply_user?: IntFieldUpdateOperationsInput | number
    apply_user_name?: StringFieldUpdateOperationsInput | string
    apply_time?: DateTimeFieldUpdateOperationsInput | Date | string
    apply_result?: IntFieldUpdateOperationsInput | number
    apply_user_head_url?: StringFieldUpdateOperationsInput | string
  }

  export type Club_listCreateInput = {
    club_name: string
    create_user: number
    content: string
    club_manage: number
    club_id: string
    user_num: number
    create_user_name: string
    create_user_head_url: string
    club_manage_name: string
    club_manage_head_url: string
    table_info: string
  }

  export type Club_listUncheckedCreateInput = {
    id?: number
    club_name: string
    create_user: number
    content: string
    club_manage: number
    club_id: string
    user_num: number
    create_user_name: string
    create_user_head_url: string
    club_manage_name: string
    club_manage_head_url: string
    table_info: string
  }

  export type Club_listUpdateInput = {
    club_name?: StringFieldUpdateOperationsInput | string
    create_user?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    club_manage?: IntFieldUpdateOperationsInput | number
    club_id?: StringFieldUpdateOperationsInput | string
    user_num?: IntFieldUpdateOperationsInput | number
    create_user_name?: StringFieldUpdateOperationsInput | string
    create_user_head_url?: StringFieldUpdateOperationsInput | string
    club_manage_name?: StringFieldUpdateOperationsInput | string
    club_manage_head_url?: StringFieldUpdateOperationsInput | string
    table_info?: StringFieldUpdateOperationsInput | string
  }

  export type Club_listUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    club_name?: StringFieldUpdateOperationsInput | string
    create_user?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    club_manage?: IntFieldUpdateOperationsInput | number
    club_id?: StringFieldUpdateOperationsInput | string
    user_num?: IntFieldUpdateOperationsInput | number
    create_user_name?: StringFieldUpdateOperationsInput | string
    create_user_head_url?: StringFieldUpdateOperationsInput | string
    club_manage_name?: StringFieldUpdateOperationsInput | string
    club_manage_head_url?: StringFieldUpdateOperationsInput | string
    table_info?: StringFieldUpdateOperationsInput | string
  }

  export type Club_listCreateManyInput = {
    id?: number
    club_name: string
    create_user: number
    content: string
    club_manage: number
    club_id: string
    user_num: number
    create_user_name: string
    create_user_head_url: string
    club_manage_name: string
    club_manage_head_url: string
    table_info: string
  }

  export type Club_listUpdateManyMutationInput = {
    club_name?: StringFieldUpdateOperationsInput | string
    create_user?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    club_manage?: IntFieldUpdateOperationsInput | number
    club_id?: StringFieldUpdateOperationsInput | string
    user_num?: IntFieldUpdateOperationsInput | number
    create_user_name?: StringFieldUpdateOperationsInput | string
    create_user_head_url?: StringFieldUpdateOperationsInput | string
    club_manage_name?: StringFieldUpdateOperationsInput | string
    club_manage_head_url?: StringFieldUpdateOperationsInput | string
    table_info?: StringFieldUpdateOperationsInput | string
  }

  export type Club_listUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    club_name?: StringFieldUpdateOperationsInput | string
    create_user?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    club_manage?: IntFieldUpdateOperationsInput | number
    club_id?: StringFieldUpdateOperationsInput | string
    user_num?: IntFieldUpdateOperationsInput | number
    create_user_name?: StringFieldUpdateOperationsInput | string
    create_user_head_url?: StringFieldUpdateOperationsInput | string
    club_manage_name?: StringFieldUpdateOperationsInput | string
    club_manage_head_url?: StringFieldUpdateOperationsInput | string
    table_info?: StringFieldUpdateOperationsInput | string
  }

  export type Club_user_listCreateInput = {
    club_id: string
    user_id: number
    user_name: string
    user_head_url: string
  }

  export type Club_user_listUncheckedCreateInput = {
    id?: number
    club_id: string
    user_id: number
    user_name: string
    user_head_url: string
  }

  export type Club_user_listUpdateInput = {
    club_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_head_url?: StringFieldUpdateOperationsInput | string
  }

  export type Club_user_listUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    club_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_head_url?: StringFieldUpdateOperationsInput | string
  }

  export type Club_user_listCreateManyInput = {
    id?: number
    club_id: string
    user_id: number
    user_name: string
    user_head_url: string
  }

  export type Club_user_listUpdateManyMutationInput = {
    club_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_head_url?: StringFieldUpdateOperationsInput | string
  }

  export type Club_user_listUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    club_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_head_url?: StringFieldUpdateOperationsInput | string
  }

  export type User_club_num_listCreateInput = {
    user_id: number
    club_num: number
  }

  export type User_club_num_listUncheckedCreateInput = {
    user_id: number
    club_num: number
  }

  export type User_club_num_listUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    club_num?: IntFieldUpdateOperationsInput | number
  }

  export type User_club_num_listUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    club_num?: IntFieldUpdateOperationsInput | number
  }

  export type User_club_num_listCreateManyInput = {
    user_id: number
    club_num: number
  }

  export type User_club_num_listUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    club_num?: IntFieldUpdateOperationsInput | number
  }

  export type User_club_num_listUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    club_num?: IntFieldUpdateOperationsInput | number
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

  export type Apply_clubCountOrderByAggregateInput = {
    id?: SortOrder
    club_id?: SortOrder
    apply_user?: SortOrder
    apply_user_name?: SortOrder
    apply_time?: SortOrder
    apply_result?: SortOrder
    apply_user_head_url?: SortOrder
  }

  export type Apply_clubAvgOrderByAggregateInput = {
    id?: SortOrder
    apply_user?: SortOrder
    apply_result?: SortOrder
  }

  export type Apply_clubMaxOrderByAggregateInput = {
    id?: SortOrder
    club_id?: SortOrder
    apply_user?: SortOrder
    apply_user_name?: SortOrder
    apply_time?: SortOrder
    apply_result?: SortOrder
    apply_user_head_url?: SortOrder
  }

  export type Apply_clubMinOrderByAggregateInput = {
    id?: SortOrder
    club_id?: SortOrder
    apply_user?: SortOrder
    apply_user_name?: SortOrder
    apply_time?: SortOrder
    apply_result?: SortOrder
    apply_user_head_url?: SortOrder
  }

  export type Apply_clubSumOrderByAggregateInput = {
    id?: SortOrder
    apply_user?: SortOrder
    apply_result?: SortOrder
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

  export type Club_listCountOrderByAggregateInput = {
    id?: SortOrder
    club_name?: SortOrder
    create_user?: SortOrder
    content?: SortOrder
    club_manage?: SortOrder
    club_id?: SortOrder
    user_num?: SortOrder
    create_user_name?: SortOrder
    create_user_head_url?: SortOrder
    club_manage_name?: SortOrder
    club_manage_head_url?: SortOrder
    table_info?: SortOrder
  }

  export type Club_listAvgOrderByAggregateInput = {
    id?: SortOrder
    create_user?: SortOrder
    club_manage?: SortOrder
    user_num?: SortOrder
  }

  export type Club_listMaxOrderByAggregateInput = {
    id?: SortOrder
    club_name?: SortOrder
    create_user?: SortOrder
    content?: SortOrder
    club_manage?: SortOrder
    club_id?: SortOrder
    user_num?: SortOrder
    create_user_name?: SortOrder
    create_user_head_url?: SortOrder
    club_manage_name?: SortOrder
    club_manage_head_url?: SortOrder
    table_info?: SortOrder
  }

  export type Club_listMinOrderByAggregateInput = {
    id?: SortOrder
    club_name?: SortOrder
    create_user?: SortOrder
    content?: SortOrder
    club_manage?: SortOrder
    club_id?: SortOrder
    user_num?: SortOrder
    create_user_name?: SortOrder
    create_user_head_url?: SortOrder
    club_manage_name?: SortOrder
    club_manage_head_url?: SortOrder
    table_info?: SortOrder
  }

  export type Club_listSumOrderByAggregateInput = {
    id?: SortOrder
    create_user?: SortOrder
    club_manage?: SortOrder
    user_num?: SortOrder
  }

  export type Club_user_listCountOrderByAggregateInput = {
    id?: SortOrder
    club_id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    user_head_url?: SortOrder
  }

  export type Club_user_listAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type Club_user_listMaxOrderByAggregateInput = {
    id?: SortOrder
    club_id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    user_head_url?: SortOrder
  }

  export type Club_user_listMinOrderByAggregateInput = {
    id?: SortOrder
    club_id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    user_head_url?: SortOrder
  }

  export type Club_user_listSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type User_club_num_listCountOrderByAggregateInput = {
    user_id?: SortOrder
    club_num?: SortOrder
  }

  export type User_club_num_listAvgOrderByAggregateInput = {
    user_id?: SortOrder
    club_num?: SortOrder
  }

  export type User_club_num_listMaxOrderByAggregateInput = {
    user_id?: SortOrder
    club_num?: SortOrder
  }

  export type User_club_num_listMinOrderByAggregateInput = {
    user_id?: SortOrder
    club_num?: SortOrder
  }

  export type User_club_num_listSumOrderByAggregateInput = {
    user_id?: SortOrder
    club_num?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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