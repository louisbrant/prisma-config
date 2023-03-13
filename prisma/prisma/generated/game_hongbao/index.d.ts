
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Downcoinlog
 * 
 */
export type Downcoinlog = {
  id: number
  userId: number
  MatchId: number
  callBet: number
  selectBet: number
  severBet: number
  winCoin: number
  tax: number
  isBanker: number
  serverId: number
  tableid: number
  Adddate: Date
  mark: number
}

/**
 * Model Matchlog
 * 
 */
export type Matchlog = {
  matchId: number
  open11: string
  open12: string
  open13: string
  open14: string
  open15: string
  open21: string
  open22: string
  open23: string
  open24: string
  open25: string
  open31: string
  open32: string
  open33: string
  open34: string
  open35: string
  open41: string
  open42: string
  open43: string
  open44: string
  open45: string
  open51: string
  open52: string
  open53: string
  open54: string
  open55: string
  open1winbet: number
  open2winbet: number
  open3winbet: number
  open4winbet: number
  open5winbet: number
  tableId: number
  serveId: number
  adddate: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Downcoinlogs
 * const downcoinlogs = await prisma.downcoinlog.findMany()
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
   * // Fetch zero or more Downcoinlogs
   * const downcoinlogs = await prisma.downcoinlog.findMany()
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
   * `prisma.downcoinlog`: Exposes CRUD operations for the **Downcoinlog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Downcoinlogs
    * const downcoinlogs = await prisma.downcoinlog.findMany()
    * ```
    */
  get downcoinlog(): Prisma.DowncoinlogDelegate<GlobalReject>;

  /**
   * `prisma.matchlog`: Exposes CRUD operations for the **Matchlog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matchlogs
    * const matchlogs = await prisma.matchlog.findMany()
    * ```
    */
  get matchlog(): Prisma.MatchlogDelegate<GlobalReject>;
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
    Downcoinlog: 'Downcoinlog',
    Matchlog: 'Matchlog'
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
   * Model Downcoinlog
   */


  export type AggregateDowncoinlog = {
    _count: DowncoinlogCountAggregateOutputType | null
    _avg: DowncoinlogAvgAggregateOutputType | null
    _sum: DowncoinlogSumAggregateOutputType | null
    _min: DowncoinlogMinAggregateOutputType | null
    _max: DowncoinlogMaxAggregateOutputType | null
  }

  export type DowncoinlogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    MatchId: number | null
    callBet: number | null
    selectBet: number | null
    severBet: number | null
    winCoin: number | null
    tax: number | null
    isBanker: number | null
    serverId: number | null
    tableid: number | null
    mark: number | null
  }

  export type DowncoinlogSumAggregateOutputType = {
    id: number | null
    userId: number | null
    MatchId: number | null
    callBet: number | null
    selectBet: number | null
    severBet: number | null
    winCoin: number | null
    tax: number | null
    isBanker: number | null
    serverId: number | null
    tableid: number | null
    mark: number | null
  }

  export type DowncoinlogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    MatchId: number | null
    callBet: number | null
    selectBet: number | null
    severBet: number | null
    winCoin: number | null
    tax: number | null
    isBanker: number | null
    serverId: number | null
    tableid: number | null
    Adddate: Date | null
    mark: number | null
  }

  export type DowncoinlogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    MatchId: number | null
    callBet: number | null
    selectBet: number | null
    severBet: number | null
    winCoin: number | null
    tax: number | null
    isBanker: number | null
    serverId: number | null
    tableid: number | null
    Adddate: Date | null
    mark: number | null
  }

  export type DowncoinlogCountAggregateOutputType = {
    id: number
    userId: number
    MatchId: number
    callBet: number
    selectBet: number
    severBet: number
    winCoin: number
    tax: number
    isBanker: number
    serverId: number
    tableid: number
    Adddate: number
    mark: number
    _all: number
  }


  export type DowncoinlogAvgAggregateInputType = {
    id?: true
    userId?: true
    MatchId?: true
    callBet?: true
    selectBet?: true
    severBet?: true
    winCoin?: true
    tax?: true
    isBanker?: true
    serverId?: true
    tableid?: true
    mark?: true
  }

  export type DowncoinlogSumAggregateInputType = {
    id?: true
    userId?: true
    MatchId?: true
    callBet?: true
    selectBet?: true
    severBet?: true
    winCoin?: true
    tax?: true
    isBanker?: true
    serverId?: true
    tableid?: true
    mark?: true
  }

  export type DowncoinlogMinAggregateInputType = {
    id?: true
    userId?: true
    MatchId?: true
    callBet?: true
    selectBet?: true
    severBet?: true
    winCoin?: true
    tax?: true
    isBanker?: true
    serverId?: true
    tableid?: true
    Adddate?: true
    mark?: true
  }

  export type DowncoinlogMaxAggregateInputType = {
    id?: true
    userId?: true
    MatchId?: true
    callBet?: true
    selectBet?: true
    severBet?: true
    winCoin?: true
    tax?: true
    isBanker?: true
    serverId?: true
    tableid?: true
    Adddate?: true
    mark?: true
  }

  export type DowncoinlogCountAggregateInputType = {
    id?: true
    userId?: true
    MatchId?: true
    callBet?: true
    selectBet?: true
    severBet?: true
    winCoin?: true
    tax?: true
    isBanker?: true
    serverId?: true
    tableid?: true
    Adddate?: true
    mark?: true
    _all?: true
  }

  export type DowncoinlogAggregateArgs = {
    /**
     * Filter which Downcoinlog to aggregate.
     */
    where?: DowncoinlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Downcoinlogs to fetch.
     */
    orderBy?: Enumerable<DowncoinlogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DowncoinlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Downcoinlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Downcoinlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Downcoinlogs
    **/
    _count?: true | DowncoinlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DowncoinlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DowncoinlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DowncoinlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DowncoinlogMaxAggregateInputType
  }

  export type GetDowncoinlogAggregateType<T extends DowncoinlogAggregateArgs> = {
        [P in keyof T & keyof AggregateDowncoinlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDowncoinlog[P]>
      : GetScalarType<T[P], AggregateDowncoinlog[P]>
  }




  export type DowncoinlogGroupByArgs = {
    where?: DowncoinlogWhereInput
    orderBy?: Enumerable<DowncoinlogOrderByWithAggregationInput>
    by: DowncoinlogScalarFieldEnum[]
    having?: DowncoinlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DowncoinlogCountAggregateInputType | true
    _avg?: DowncoinlogAvgAggregateInputType
    _sum?: DowncoinlogSumAggregateInputType
    _min?: DowncoinlogMinAggregateInputType
    _max?: DowncoinlogMaxAggregateInputType
  }


  export type DowncoinlogGroupByOutputType = {
    id: number
    userId: number
    MatchId: number
    callBet: number
    selectBet: number
    severBet: number
    winCoin: number
    tax: number
    isBanker: number
    serverId: number
    tableid: number
    Adddate: Date
    mark: number
    _count: DowncoinlogCountAggregateOutputType | null
    _avg: DowncoinlogAvgAggregateOutputType | null
    _sum: DowncoinlogSumAggregateOutputType | null
    _min: DowncoinlogMinAggregateOutputType | null
    _max: DowncoinlogMaxAggregateOutputType | null
  }

  type GetDowncoinlogGroupByPayload<T extends DowncoinlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DowncoinlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DowncoinlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DowncoinlogGroupByOutputType[P]>
            : GetScalarType<T[P], DowncoinlogGroupByOutputType[P]>
        }
      >
    >


  export type DowncoinlogSelect = {
    id?: boolean
    userId?: boolean
    MatchId?: boolean
    callBet?: boolean
    selectBet?: boolean
    severBet?: boolean
    winCoin?: boolean
    tax?: boolean
    isBanker?: boolean
    serverId?: boolean
    tableid?: boolean
    Adddate?: boolean
    mark?: boolean
  }


  export type DowncoinlogGetPayload<S extends boolean | null | undefined | DowncoinlogArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Downcoinlog :
    S extends undefined ? never :
    S extends { include: any } & (DowncoinlogArgs | DowncoinlogFindManyArgs)
    ? Downcoinlog 
    : S extends { select: any } & (DowncoinlogArgs | DowncoinlogFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Downcoinlog ? Downcoinlog[P] : never
  } 
      : Downcoinlog


  type DowncoinlogCountArgs = 
    Omit<DowncoinlogFindManyArgs, 'select' | 'include'> & {
      select?: DowncoinlogCountAggregateInputType | true
    }

  export interface DowncoinlogDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Downcoinlog that matches the filter.
     * @param {DowncoinlogFindUniqueArgs} args - Arguments to find a Downcoinlog
     * @example
     * // Get one Downcoinlog
     * const downcoinlog = await prisma.downcoinlog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DowncoinlogFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DowncoinlogFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Downcoinlog'> extends True ? Prisma__DowncoinlogClient<DowncoinlogGetPayload<T>> : Prisma__DowncoinlogClient<DowncoinlogGetPayload<T> | null, null>

    /**
     * Find one Downcoinlog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DowncoinlogFindUniqueOrThrowArgs} args - Arguments to find a Downcoinlog
     * @example
     * // Get one Downcoinlog
     * const downcoinlog = await prisma.downcoinlog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DowncoinlogFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DowncoinlogFindUniqueOrThrowArgs>
    ): Prisma__DowncoinlogClient<DowncoinlogGetPayload<T>>

    /**
     * Find the first Downcoinlog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DowncoinlogFindFirstArgs} args - Arguments to find a Downcoinlog
     * @example
     * // Get one Downcoinlog
     * const downcoinlog = await prisma.downcoinlog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DowncoinlogFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DowncoinlogFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Downcoinlog'> extends True ? Prisma__DowncoinlogClient<DowncoinlogGetPayload<T>> : Prisma__DowncoinlogClient<DowncoinlogGetPayload<T> | null, null>

    /**
     * Find the first Downcoinlog that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DowncoinlogFindFirstOrThrowArgs} args - Arguments to find a Downcoinlog
     * @example
     * // Get one Downcoinlog
     * const downcoinlog = await prisma.downcoinlog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DowncoinlogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DowncoinlogFindFirstOrThrowArgs>
    ): Prisma__DowncoinlogClient<DowncoinlogGetPayload<T>>

    /**
     * Find zero or more Downcoinlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DowncoinlogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Downcoinlogs
     * const downcoinlogs = await prisma.downcoinlog.findMany()
     * 
     * // Get first 10 Downcoinlogs
     * const downcoinlogs = await prisma.downcoinlog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const downcoinlogWithIdOnly = await prisma.downcoinlog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DowncoinlogFindManyArgs>(
      args?: SelectSubset<T, DowncoinlogFindManyArgs>
    ): Prisma.PrismaPromise<Array<DowncoinlogGetPayload<T>>>

    /**
     * Create a Downcoinlog.
     * @param {DowncoinlogCreateArgs} args - Arguments to create a Downcoinlog.
     * @example
     * // Create one Downcoinlog
     * const Downcoinlog = await prisma.downcoinlog.create({
     *   data: {
     *     // ... data to create a Downcoinlog
     *   }
     * })
     * 
    **/
    create<T extends DowncoinlogCreateArgs>(
      args: SelectSubset<T, DowncoinlogCreateArgs>
    ): Prisma__DowncoinlogClient<DowncoinlogGetPayload<T>>

    /**
     * Create many Downcoinlogs.
     *     @param {DowncoinlogCreateManyArgs} args - Arguments to create many Downcoinlogs.
     *     @example
     *     // Create many Downcoinlogs
     *     const downcoinlog = await prisma.downcoinlog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DowncoinlogCreateManyArgs>(
      args?: SelectSubset<T, DowncoinlogCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Downcoinlog.
     * @param {DowncoinlogDeleteArgs} args - Arguments to delete one Downcoinlog.
     * @example
     * // Delete one Downcoinlog
     * const Downcoinlog = await prisma.downcoinlog.delete({
     *   where: {
     *     // ... filter to delete one Downcoinlog
     *   }
     * })
     * 
    **/
    delete<T extends DowncoinlogDeleteArgs>(
      args: SelectSubset<T, DowncoinlogDeleteArgs>
    ): Prisma__DowncoinlogClient<DowncoinlogGetPayload<T>>

    /**
     * Update one Downcoinlog.
     * @param {DowncoinlogUpdateArgs} args - Arguments to update one Downcoinlog.
     * @example
     * // Update one Downcoinlog
     * const downcoinlog = await prisma.downcoinlog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DowncoinlogUpdateArgs>(
      args: SelectSubset<T, DowncoinlogUpdateArgs>
    ): Prisma__DowncoinlogClient<DowncoinlogGetPayload<T>>

    /**
     * Delete zero or more Downcoinlogs.
     * @param {DowncoinlogDeleteManyArgs} args - Arguments to filter Downcoinlogs to delete.
     * @example
     * // Delete a few Downcoinlogs
     * const { count } = await prisma.downcoinlog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DowncoinlogDeleteManyArgs>(
      args?: SelectSubset<T, DowncoinlogDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Downcoinlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DowncoinlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Downcoinlogs
     * const downcoinlog = await prisma.downcoinlog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DowncoinlogUpdateManyArgs>(
      args: SelectSubset<T, DowncoinlogUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Downcoinlog.
     * @param {DowncoinlogUpsertArgs} args - Arguments to update or create a Downcoinlog.
     * @example
     * // Update or create a Downcoinlog
     * const downcoinlog = await prisma.downcoinlog.upsert({
     *   create: {
     *     // ... data to create a Downcoinlog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Downcoinlog we want to update
     *   }
     * })
    **/
    upsert<T extends DowncoinlogUpsertArgs>(
      args: SelectSubset<T, DowncoinlogUpsertArgs>
    ): Prisma__DowncoinlogClient<DowncoinlogGetPayload<T>>

    /**
     * Count the number of Downcoinlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DowncoinlogCountArgs} args - Arguments to filter Downcoinlogs to count.
     * @example
     * // Count the number of Downcoinlogs
     * const count = await prisma.downcoinlog.count({
     *   where: {
     *     // ... the filter for the Downcoinlogs we want to count
     *   }
     * })
    **/
    count<T extends DowncoinlogCountArgs>(
      args?: Subset<T, DowncoinlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DowncoinlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Downcoinlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DowncoinlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DowncoinlogAggregateArgs>(args: Subset<T, DowncoinlogAggregateArgs>): Prisma.PrismaPromise<GetDowncoinlogAggregateType<T>>

    /**
     * Group by Downcoinlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DowncoinlogGroupByArgs} args - Group by arguments.
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
      T extends DowncoinlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DowncoinlogGroupByArgs['orderBy'] }
        : { orderBy?: DowncoinlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DowncoinlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDowncoinlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Downcoinlog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DowncoinlogClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Downcoinlog base type for findUnique actions
   */
  export type DowncoinlogFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Downcoinlog
     */
    select?: DowncoinlogSelect | null
    /**
     * Filter, which Downcoinlog to fetch.
     */
    where: DowncoinlogWhereUniqueInput
  }

  /**
   * Downcoinlog findUnique
   */
  export interface DowncoinlogFindUniqueArgs extends DowncoinlogFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Downcoinlog findUniqueOrThrow
   */
  export type DowncoinlogFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Downcoinlog
     */
    select?: DowncoinlogSelect | null
    /**
     * Filter, which Downcoinlog to fetch.
     */
    where: DowncoinlogWhereUniqueInput
  }


  /**
   * Downcoinlog base type for findFirst actions
   */
  export type DowncoinlogFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Downcoinlog
     */
    select?: DowncoinlogSelect | null
    /**
     * Filter, which Downcoinlog to fetch.
     */
    where?: DowncoinlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Downcoinlogs to fetch.
     */
    orderBy?: Enumerable<DowncoinlogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Downcoinlogs.
     */
    cursor?: DowncoinlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Downcoinlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Downcoinlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Downcoinlogs.
     */
    distinct?: Enumerable<DowncoinlogScalarFieldEnum>
  }

  /**
   * Downcoinlog findFirst
   */
  export interface DowncoinlogFindFirstArgs extends DowncoinlogFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Downcoinlog findFirstOrThrow
   */
  export type DowncoinlogFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Downcoinlog
     */
    select?: DowncoinlogSelect | null
    /**
     * Filter, which Downcoinlog to fetch.
     */
    where?: DowncoinlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Downcoinlogs to fetch.
     */
    orderBy?: Enumerable<DowncoinlogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Downcoinlogs.
     */
    cursor?: DowncoinlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Downcoinlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Downcoinlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Downcoinlogs.
     */
    distinct?: Enumerable<DowncoinlogScalarFieldEnum>
  }


  /**
   * Downcoinlog findMany
   */
  export type DowncoinlogFindManyArgs = {
    /**
     * Select specific fields to fetch from the Downcoinlog
     */
    select?: DowncoinlogSelect | null
    /**
     * Filter, which Downcoinlogs to fetch.
     */
    where?: DowncoinlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Downcoinlogs to fetch.
     */
    orderBy?: Enumerable<DowncoinlogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Downcoinlogs.
     */
    cursor?: DowncoinlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Downcoinlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Downcoinlogs.
     */
    skip?: number
    distinct?: Enumerable<DowncoinlogScalarFieldEnum>
  }


  /**
   * Downcoinlog create
   */
  export type DowncoinlogCreateArgs = {
    /**
     * Select specific fields to fetch from the Downcoinlog
     */
    select?: DowncoinlogSelect | null
    /**
     * The data needed to create a Downcoinlog.
     */
    data: XOR<DowncoinlogCreateInput, DowncoinlogUncheckedCreateInput>
  }


  /**
   * Downcoinlog createMany
   */
  export type DowncoinlogCreateManyArgs = {
    /**
     * The data used to create many Downcoinlogs.
     */
    data: Enumerable<DowncoinlogCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Downcoinlog update
   */
  export type DowncoinlogUpdateArgs = {
    /**
     * Select specific fields to fetch from the Downcoinlog
     */
    select?: DowncoinlogSelect | null
    /**
     * The data needed to update a Downcoinlog.
     */
    data: XOR<DowncoinlogUpdateInput, DowncoinlogUncheckedUpdateInput>
    /**
     * Choose, which Downcoinlog to update.
     */
    where: DowncoinlogWhereUniqueInput
  }


  /**
   * Downcoinlog updateMany
   */
  export type DowncoinlogUpdateManyArgs = {
    /**
     * The data used to update Downcoinlogs.
     */
    data: XOR<DowncoinlogUpdateManyMutationInput, DowncoinlogUncheckedUpdateManyInput>
    /**
     * Filter which Downcoinlogs to update
     */
    where?: DowncoinlogWhereInput
  }


  /**
   * Downcoinlog upsert
   */
  export type DowncoinlogUpsertArgs = {
    /**
     * Select specific fields to fetch from the Downcoinlog
     */
    select?: DowncoinlogSelect | null
    /**
     * The filter to search for the Downcoinlog to update in case it exists.
     */
    where: DowncoinlogWhereUniqueInput
    /**
     * In case the Downcoinlog found by the `where` argument doesn't exist, create a new Downcoinlog with this data.
     */
    create: XOR<DowncoinlogCreateInput, DowncoinlogUncheckedCreateInput>
    /**
     * In case the Downcoinlog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DowncoinlogUpdateInput, DowncoinlogUncheckedUpdateInput>
  }


  /**
   * Downcoinlog delete
   */
  export type DowncoinlogDeleteArgs = {
    /**
     * Select specific fields to fetch from the Downcoinlog
     */
    select?: DowncoinlogSelect | null
    /**
     * Filter which Downcoinlog to delete.
     */
    where: DowncoinlogWhereUniqueInput
  }


  /**
   * Downcoinlog deleteMany
   */
  export type DowncoinlogDeleteManyArgs = {
    /**
     * Filter which Downcoinlogs to delete
     */
    where?: DowncoinlogWhereInput
  }


  /**
   * Downcoinlog without action
   */
  export type DowncoinlogArgs = {
    /**
     * Select specific fields to fetch from the Downcoinlog
     */
    select?: DowncoinlogSelect | null
  }



  /**
   * Model Matchlog
   */


  export type AggregateMatchlog = {
    _count: MatchlogCountAggregateOutputType | null
    _avg: MatchlogAvgAggregateOutputType | null
    _sum: MatchlogSumAggregateOutputType | null
    _min: MatchlogMinAggregateOutputType | null
    _max: MatchlogMaxAggregateOutputType | null
  }

  export type MatchlogAvgAggregateOutputType = {
    matchId: number | null
    open1winbet: number | null
    open2winbet: number | null
    open3winbet: number | null
    open4winbet: number | null
    open5winbet: number | null
    tableId: number | null
    serveId: number | null
  }

  export type MatchlogSumAggregateOutputType = {
    matchId: number | null
    open1winbet: number | null
    open2winbet: number | null
    open3winbet: number | null
    open4winbet: number | null
    open5winbet: number | null
    tableId: number | null
    serveId: number | null
  }

  export type MatchlogMinAggregateOutputType = {
    matchId: number | null
    open11: string | null
    open12: string | null
    open13: string | null
    open14: string | null
    open15: string | null
    open21: string | null
    open22: string | null
    open23: string | null
    open24: string | null
    open25: string | null
    open31: string | null
    open32: string | null
    open33: string | null
    open34: string | null
    open35: string | null
    open41: string | null
    open42: string | null
    open43: string | null
    open44: string | null
    open45: string | null
    open51: string | null
    open52: string | null
    open53: string | null
    open54: string | null
    open55: string | null
    open1winbet: number | null
    open2winbet: number | null
    open3winbet: number | null
    open4winbet: number | null
    open5winbet: number | null
    tableId: number | null
    serveId: number | null
    adddate: Date | null
  }

  export type MatchlogMaxAggregateOutputType = {
    matchId: number | null
    open11: string | null
    open12: string | null
    open13: string | null
    open14: string | null
    open15: string | null
    open21: string | null
    open22: string | null
    open23: string | null
    open24: string | null
    open25: string | null
    open31: string | null
    open32: string | null
    open33: string | null
    open34: string | null
    open35: string | null
    open41: string | null
    open42: string | null
    open43: string | null
    open44: string | null
    open45: string | null
    open51: string | null
    open52: string | null
    open53: string | null
    open54: string | null
    open55: string | null
    open1winbet: number | null
    open2winbet: number | null
    open3winbet: number | null
    open4winbet: number | null
    open5winbet: number | null
    tableId: number | null
    serveId: number | null
    adddate: Date | null
  }

  export type MatchlogCountAggregateOutputType = {
    matchId: number
    open11: number
    open12: number
    open13: number
    open14: number
    open15: number
    open21: number
    open22: number
    open23: number
    open24: number
    open25: number
    open31: number
    open32: number
    open33: number
    open34: number
    open35: number
    open41: number
    open42: number
    open43: number
    open44: number
    open45: number
    open51: number
    open52: number
    open53: number
    open54: number
    open55: number
    open1winbet: number
    open2winbet: number
    open3winbet: number
    open4winbet: number
    open5winbet: number
    tableId: number
    serveId: number
    adddate: number
    _all: number
  }


  export type MatchlogAvgAggregateInputType = {
    matchId?: true
    open1winbet?: true
    open2winbet?: true
    open3winbet?: true
    open4winbet?: true
    open5winbet?: true
    tableId?: true
    serveId?: true
  }

  export type MatchlogSumAggregateInputType = {
    matchId?: true
    open1winbet?: true
    open2winbet?: true
    open3winbet?: true
    open4winbet?: true
    open5winbet?: true
    tableId?: true
    serveId?: true
  }

  export type MatchlogMinAggregateInputType = {
    matchId?: true
    open11?: true
    open12?: true
    open13?: true
    open14?: true
    open15?: true
    open21?: true
    open22?: true
    open23?: true
    open24?: true
    open25?: true
    open31?: true
    open32?: true
    open33?: true
    open34?: true
    open35?: true
    open41?: true
    open42?: true
    open43?: true
    open44?: true
    open45?: true
    open51?: true
    open52?: true
    open53?: true
    open54?: true
    open55?: true
    open1winbet?: true
    open2winbet?: true
    open3winbet?: true
    open4winbet?: true
    open5winbet?: true
    tableId?: true
    serveId?: true
    adddate?: true
  }

  export type MatchlogMaxAggregateInputType = {
    matchId?: true
    open11?: true
    open12?: true
    open13?: true
    open14?: true
    open15?: true
    open21?: true
    open22?: true
    open23?: true
    open24?: true
    open25?: true
    open31?: true
    open32?: true
    open33?: true
    open34?: true
    open35?: true
    open41?: true
    open42?: true
    open43?: true
    open44?: true
    open45?: true
    open51?: true
    open52?: true
    open53?: true
    open54?: true
    open55?: true
    open1winbet?: true
    open2winbet?: true
    open3winbet?: true
    open4winbet?: true
    open5winbet?: true
    tableId?: true
    serveId?: true
    adddate?: true
  }

  export type MatchlogCountAggregateInputType = {
    matchId?: true
    open11?: true
    open12?: true
    open13?: true
    open14?: true
    open15?: true
    open21?: true
    open22?: true
    open23?: true
    open24?: true
    open25?: true
    open31?: true
    open32?: true
    open33?: true
    open34?: true
    open35?: true
    open41?: true
    open42?: true
    open43?: true
    open44?: true
    open45?: true
    open51?: true
    open52?: true
    open53?: true
    open54?: true
    open55?: true
    open1winbet?: true
    open2winbet?: true
    open3winbet?: true
    open4winbet?: true
    open5winbet?: true
    tableId?: true
    serveId?: true
    adddate?: true
    _all?: true
  }

  export type MatchlogAggregateArgs = {
    /**
     * Filter which Matchlog to aggregate.
     */
    where?: MatchlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matchlogs to fetch.
     */
    orderBy?: Enumerable<MatchlogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matchlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matchlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matchlogs
    **/
    _count?: true | MatchlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchlogMaxAggregateInputType
  }

  export type GetMatchlogAggregateType<T extends MatchlogAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchlog[P]>
      : GetScalarType<T[P], AggregateMatchlog[P]>
  }




  export type MatchlogGroupByArgs = {
    where?: MatchlogWhereInput
    orderBy?: Enumerable<MatchlogOrderByWithAggregationInput>
    by: MatchlogScalarFieldEnum[]
    having?: MatchlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchlogCountAggregateInputType | true
    _avg?: MatchlogAvgAggregateInputType
    _sum?: MatchlogSumAggregateInputType
    _min?: MatchlogMinAggregateInputType
    _max?: MatchlogMaxAggregateInputType
  }


  export type MatchlogGroupByOutputType = {
    matchId: number
    open11: string
    open12: string
    open13: string
    open14: string
    open15: string
    open21: string
    open22: string
    open23: string
    open24: string
    open25: string
    open31: string
    open32: string
    open33: string
    open34: string
    open35: string
    open41: string
    open42: string
    open43: string
    open44: string
    open45: string
    open51: string
    open52: string
    open53: string
    open54: string
    open55: string
    open1winbet: number
    open2winbet: number
    open3winbet: number
    open4winbet: number
    open5winbet: number
    tableId: number
    serveId: number
    adddate: Date
    _count: MatchlogCountAggregateOutputType | null
    _avg: MatchlogAvgAggregateOutputType | null
    _sum: MatchlogSumAggregateOutputType | null
    _min: MatchlogMinAggregateOutputType | null
    _max: MatchlogMaxAggregateOutputType | null
  }

  type GetMatchlogGroupByPayload<T extends MatchlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MatchlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchlogGroupByOutputType[P]>
            : GetScalarType<T[P], MatchlogGroupByOutputType[P]>
        }
      >
    >


  export type MatchlogSelect = {
    matchId?: boolean
    open11?: boolean
    open12?: boolean
    open13?: boolean
    open14?: boolean
    open15?: boolean
    open21?: boolean
    open22?: boolean
    open23?: boolean
    open24?: boolean
    open25?: boolean
    open31?: boolean
    open32?: boolean
    open33?: boolean
    open34?: boolean
    open35?: boolean
    open41?: boolean
    open42?: boolean
    open43?: boolean
    open44?: boolean
    open45?: boolean
    open51?: boolean
    open52?: boolean
    open53?: boolean
    open54?: boolean
    open55?: boolean
    open1winbet?: boolean
    open2winbet?: boolean
    open3winbet?: boolean
    open4winbet?: boolean
    open5winbet?: boolean
    tableId?: boolean
    serveId?: boolean
    adddate?: boolean
  }


  export type MatchlogGetPayload<S extends boolean | null | undefined | MatchlogArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Matchlog :
    S extends undefined ? never :
    S extends { include: any } & (MatchlogArgs | MatchlogFindManyArgs)
    ? Matchlog 
    : S extends { select: any } & (MatchlogArgs | MatchlogFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Matchlog ? Matchlog[P] : never
  } 
      : Matchlog


  type MatchlogCountArgs = 
    Omit<MatchlogFindManyArgs, 'select' | 'include'> & {
      select?: MatchlogCountAggregateInputType | true
    }

  export interface MatchlogDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Matchlog that matches the filter.
     * @param {MatchlogFindUniqueArgs} args - Arguments to find a Matchlog
     * @example
     * // Get one Matchlog
     * const matchlog = await prisma.matchlog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MatchlogFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MatchlogFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Matchlog'> extends True ? Prisma__MatchlogClient<MatchlogGetPayload<T>> : Prisma__MatchlogClient<MatchlogGetPayload<T> | null, null>

    /**
     * Find one Matchlog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MatchlogFindUniqueOrThrowArgs} args - Arguments to find a Matchlog
     * @example
     * // Get one Matchlog
     * const matchlog = await prisma.matchlog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MatchlogFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MatchlogFindUniqueOrThrowArgs>
    ): Prisma__MatchlogClient<MatchlogGetPayload<T>>

    /**
     * Find the first Matchlog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchlogFindFirstArgs} args - Arguments to find a Matchlog
     * @example
     * // Get one Matchlog
     * const matchlog = await prisma.matchlog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MatchlogFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MatchlogFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Matchlog'> extends True ? Prisma__MatchlogClient<MatchlogGetPayload<T>> : Prisma__MatchlogClient<MatchlogGetPayload<T> | null, null>

    /**
     * Find the first Matchlog that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchlogFindFirstOrThrowArgs} args - Arguments to find a Matchlog
     * @example
     * // Get one Matchlog
     * const matchlog = await prisma.matchlog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MatchlogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MatchlogFindFirstOrThrowArgs>
    ): Prisma__MatchlogClient<MatchlogGetPayload<T>>

    /**
     * Find zero or more Matchlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchlogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matchlogs
     * const matchlogs = await prisma.matchlog.findMany()
     * 
     * // Get first 10 Matchlogs
     * const matchlogs = await prisma.matchlog.findMany({ take: 10 })
     * 
     * // Only select the `matchId`
     * const matchlogWithMatchIdOnly = await prisma.matchlog.findMany({ select: { matchId: true } })
     * 
    **/
    findMany<T extends MatchlogFindManyArgs>(
      args?: SelectSubset<T, MatchlogFindManyArgs>
    ): Prisma.PrismaPromise<Array<MatchlogGetPayload<T>>>

    /**
     * Create a Matchlog.
     * @param {MatchlogCreateArgs} args - Arguments to create a Matchlog.
     * @example
     * // Create one Matchlog
     * const Matchlog = await prisma.matchlog.create({
     *   data: {
     *     // ... data to create a Matchlog
     *   }
     * })
     * 
    **/
    create<T extends MatchlogCreateArgs>(
      args: SelectSubset<T, MatchlogCreateArgs>
    ): Prisma__MatchlogClient<MatchlogGetPayload<T>>

    /**
     * Create many Matchlogs.
     *     @param {MatchlogCreateManyArgs} args - Arguments to create many Matchlogs.
     *     @example
     *     // Create many Matchlogs
     *     const matchlog = await prisma.matchlog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MatchlogCreateManyArgs>(
      args?: SelectSubset<T, MatchlogCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Matchlog.
     * @param {MatchlogDeleteArgs} args - Arguments to delete one Matchlog.
     * @example
     * // Delete one Matchlog
     * const Matchlog = await prisma.matchlog.delete({
     *   where: {
     *     // ... filter to delete one Matchlog
     *   }
     * })
     * 
    **/
    delete<T extends MatchlogDeleteArgs>(
      args: SelectSubset<T, MatchlogDeleteArgs>
    ): Prisma__MatchlogClient<MatchlogGetPayload<T>>

    /**
     * Update one Matchlog.
     * @param {MatchlogUpdateArgs} args - Arguments to update one Matchlog.
     * @example
     * // Update one Matchlog
     * const matchlog = await prisma.matchlog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MatchlogUpdateArgs>(
      args: SelectSubset<T, MatchlogUpdateArgs>
    ): Prisma__MatchlogClient<MatchlogGetPayload<T>>

    /**
     * Delete zero or more Matchlogs.
     * @param {MatchlogDeleteManyArgs} args - Arguments to filter Matchlogs to delete.
     * @example
     * // Delete a few Matchlogs
     * const { count } = await prisma.matchlog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MatchlogDeleteManyArgs>(
      args?: SelectSubset<T, MatchlogDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matchlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matchlogs
     * const matchlog = await prisma.matchlog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MatchlogUpdateManyArgs>(
      args: SelectSubset<T, MatchlogUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Matchlog.
     * @param {MatchlogUpsertArgs} args - Arguments to update or create a Matchlog.
     * @example
     * // Update or create a Matchlog
     * const matchlog = await prisma.matchlog.upsert({
     *   create: {
     *     // ... data to create a Matchlog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matchlog we want to update
     *   }
     * })
    **/
    upsert<T extends MatchlogUpsertArgs>(
      args: SelectSubset<T, MatchlogUpsertArgs>
    ): Prisma__MatchlogClient<MatchlogGetPayload<T>>

    /**
     * Count the number of Matchlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchlogCountArgs} args - Arguments to filter Matchlogs to count.
     * @example
     * // Count the number of Matchlogs
     * const count = await prisma.matchlog.count({
     *   where: {
     *     // ... the filter for the Matchlogs we want to count
     *   }
     * })
    **/
    count<T extends MatchlogCountArgs>(
      args?: Subset<T, MatchlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matchlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchlogAggregateArgs>(args: Subset<T, MatchlogAggregateArgs>): Prisma.PrismaPromise<GetMatchlogAggregateType<T>>

    /**
     * Group by Matchlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchlogGroupByArgs} args - Group by arguments.
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
      T extends MatchlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchlogGroupByArgs['orderBy'] }
        : { orderBy?: MatchlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Matchlog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MatchlogClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Matchlog base type for findUnique actions
   */
  export type MatchlogFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Matchlog
     */
    select?: MatchlogSelect | null
    /**
     * Filter, which Matchlog to fetch.
     */
    where: MatchlogWhereUniqueInput
  }

  /**
   * Matchlog findUnique
   */
  export interface MatchlogFindUniqueArgs extends MatchlogFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Matchlog findUniqueOrThrow
   */
  export type MatchlogFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Matchlog
     */
    select?: MatchlogSelect | null
    /**
     * Filter, which Matchlog to fetch.
     */
    where: MatchlogWhereUniqueInput
  }


  /**
   * Matchlog base type for findFirst actions
   */
  export type MatchlogFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Matchlog
     */
    select?: MatchlogSelect | null
    /**
     * Filter, which Matchlog to fetch.
     */
    where?: MatchlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matchlogs to fetch.
     */
    orderBy?: Enumerable<MatchlogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matchlogs.
     */
    cursor?: MatchlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matchlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matchlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matchlogs.
     */
    distinct?: Enumerable<MatchlogScalarFieldEnum>
  }

  /**
   * Matchlog findFirst
   */
  export interface MatchlogFindFirstArgs extends MatchlogFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Matchlog findFirstOrThrow
   */
  export type MatchlogFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Matchlog
     */
    select?: MatchlogSelect | null
    /**
     * Filter, which Matchlog to fetch.
     */
    where?: MatchlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matchlogs to fetch.
     */
    orderBy?: Enumerable<MatchlogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matchlogs.
     */
    cursor?: MatchlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matchlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matchlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matchlogs.
     */
    distinct?: Enumerable<MatchlogScalarFieldEnum>
  }


  /**
   * Matchlog findMany
   */
  export type MatchlogFindManyArgs = {
    /**
     * Select specific fields to fetch from the Matchlog
     */
    select?: MatchlogSelect | null
    /**
     * Filter, which Matchlogs to fetch.
     */
    where?: MatchlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matchlogs to fetch.
     */
    orderBy?: Enumerable<MatchlogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matchlogs.
     */
    cursor?: MatchlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matchlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matchlogs.
     */
    skip?: number
    distinct?: Enumerable<MatchlogScalarFieldEnum>
  }


  /**
   * Matchlog create
   */
  export type MatchlogCreateArgs = {
    /**
     * Select specific fields to fetch from the Matchlog
     */
    select?: MatchlogSelect | null
    /**
     * The data needed to create a Matchlog.
     */
    data: XOR<MatchlogCreateInput, MatchlogUncheckedCreateInput>
  }


  /**
   * Matchlog createMany
   */
  export type MatchlogCreateManyArgs = {
    /**
     * The data used to create many Matchlogs.
     */
    data: Enumerable<MatchlogCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Matchlog update
   */
  export type MatchlogUpdateArgs = {
    /**
     * Select specific fields to fetch from the Matchlog
     */
    select?: MatchlogSelect | null
    /**
     * The data needed to update a Matchlog.
     */
    data: XOR<MatchlogUpdateInput, MatchlogUncheckedUpdateInput>
    /**
     * Choose, which Matchlog to update.
     */
    where: MatchlogWhereUniqueInput
  }


  /**
   * Matchlog updateMany
   */
  export type MatchlogUpdateManyArgs = {
    /**
     * The data used to update Matchlogs.
     */
    data: XOR<MatchlogUpdateManyMutationInput, MatchlogUncheckedUpdateManyInput>
    /**
     * Filter which Matchlogs to update
     */
    where?: MatchlogWhereInput
  }


  /**
   * Matchlog upsert
   */
  export type MatchlogUpsertArgs = {
    /**
     * Select specific fields to fetch from the Matchlog
     */
    select?: MatchlogSelect | null
    /**
     * The filter to search for the Matchlog to update in case it exists.
     */
    where: MatchlogWhereUniqueInput
    /**
     * In case the Matchlog found by the `where` argument doesn't exist, create a new Matchlog with this data.
     */
    create: XOR<MatchlogCreateInput, MatchlogUncheckedCreateInput>
    /**
     * In case the Matchlog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchlogUpdateInput, MatchlogUncheckedUpdateInput>
  }


  /**
   * Matchlog delete
   */
  export type MatchlogDeleteArgs = {
    /**
     * Select specific fields to fetch from the Matchlog
     */
    select?: MatchlogSelect | null
    /**
     * Filter which Matchlog to delete.
     */
    where: MatchlogWhereUniqueInput
  }


  /**
   * Matchlog deleteMany
   */
  export type MatchlogDeleteManyArgs = {
    /**
     * Filter which Matchlogs to delete
     */
    where?: MatchlogWhereInput
  }


  /**
   * Matchlog without action
   */
  export type MatchlogArgs = {
    /**
     * Select specific fields to fetch from the Matchlog
     */
    select?: MatchlogSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DowncoinlogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    MatchId: 'MatchId',
    callBet: 'callBet',
    selectBet: 'selectBet',
    severBet: 'severBet',
    winCoin: 'winCoin',
    tax: 'tax',
    isBanker: 'isBanker',
    serverId: 'serverId',
    tableid: 'tableid',
    Adddate: 'Adddate',
    mark: 'mark'
  };

  export type DowncoinlogScalarFieldEnum = (typeof DowncoinlogScalarFieldEnum)[keyof typeof DowncoinlogScalarFieldEnum]


  export const MatchlogScalarFieldEnum: {
    matchId: 'matchId',
    open11: 'open11',
    open12: 'open12',
    open13: 'open13',
    open14: 'open14',
    open15: 'open15',
    open21: 'open21',
    open22: 'open22',
    open23: 'open23',
    open24: 'open24',
    open25: 'open25',
    open31: 'open31',
    open32: 'open32',
    open33: 'open33',
    open34: 'open34',
    open35: 'open35',
    open41: 'open41',
    open42: 'open42',
    open43: 'open43',
    open44: 'open44',
    open45: 'open45',
    open51: 'open51',
    open52: 'open52',
    open53: 'open53',
    open54: 'open54',
    open55: 'open55',
    open1winbet: 'open1winbet',
    open2winbet: 'open2winbet',
    open3winbet: 'open3winbet',
    open4winbet: 'open4winbet',
    open5winbet: 'open5winbet',
    tableId: 'tableId',
    serveId: 'serveId',
    adddate: 'adddate'
  };

  export type MatchlogScalarFieldEnum = (typeof MatchlogScalarFieldEnum)[keyof typeof MatchlogScalarFieldEnum]


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


  /**
   * Deep Input Types
   */


  export type DowncoinlogWhereInput = {
    AND?: Enumerable<DowncoinlogWhereInput>
    OR?: Enumerable<DowncoinlogWhereInput>
    NOT?: Enumerable<DowncoinlogWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    MatchId?: IntFilter | number
    callBet?: IntFilter | number
    selectBet?: IntFilter | number
    severBet?: IntFilter | number
    winCoin?: IntFilter | number
    tax?: IntFilter | number
    isBanker?: IntFilter | number
    serverId?: IntFilter | number
    tableid?: IntFilter | number
    Adddate?: DateTimeFilter | Date | string
    mark?: IntFilter | number
  }

  export type DowncoinlogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    MatchId?: SortOrder
    callBet?: SortOrder
    selectBet?: SortOrder
    severBet?: SortOrder
    winCoin?: SortOrder
    tax?: SortOrder
    isBanker?: SortOrder
    serverId?: SortOrder
    tableid?: SortOrder
    Adddate?: SortOrder
    mark?: SortOrder
  }

  export type DowncoinlogWhereUniqueInput = {
    id?: number
  }

  export type DowncoinlogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    MatchId?: SortOrder
    callBet?: SortOrder
    selectBet?: SortOrder
    severBet?: SortOrder
    winCoin?: SortOrder
    tax?: SortOrder
    isBanker?: SortOrder
    serverId?: SortOrder
    tableid?: SortOrder
    Adddate?: SortOrder
    mark?: SortOrder
    _count?: DowncoinlogCountOrderByAggregateInput
    _avg?: DowncoinlogAvgOrderByAggregateInput
    _max?: DowncoinlogMaxOrderByAggregateInput
    _min?: DowncoinlogMinOrderByAggregateInput
    _sum?: DowncoinlogSumOrderByAggregateInput
  }

  export type DowncoinlogScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DowncoinlogScalarWhereWithAggregatesInput>
    OR?: Enumerable<DowncoinlogScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DowncoinlogScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    MatchId?: IntWithAggregatesFilter | number
    callBet?: IntWithAggregatesFilter | number
    selectBet?: IntWithAggregatesFilter | number
    severBet?: IntWithAggregatesFilter | number
    winCoin?: IntWithAggregatesFilter | number
    tax?: IntWithAggregatesFilter | number
    isBanker?: IntWithAggregatesFilter | number
    serverId?: IntWithAggregatesFilter | number
    tableid?: IntWithAggregatesFilter | number
    Adddate?: DateTimeWithAggregatesFilter | Date | string
    mark?: IntWithAggregatesFilter | number
  }

  export type MatchlogWhereInput = {
    AND?: Enumerable<MatchlogWhereInput>
    OR?: Enumerable<MatchlogWhereInput>
    NOT?: Enumerable<MatchlogWhereInput>
    matchId?: IntFilter | number
    open11?: StringFilter | string
    open12?: StringFilter | string
    open13?: StringFilter | string
    open14?: StringFilter | string
    open15?: StringFilter | string
    open21?: StringFilter | string
    open22?: StringFilter | string
    open23?: StringFilter | string
    open24?: StringFilter | string
    open25?: StringFilter | string
    open31?: StringFilter | string
    open32?: StringFilter | string
    open33?: StringFilter | string
    open34?: StringFilter | string
    open35?: StringFilter | string
    open41?: StringFilter | string
    open42?: StringFilter | string
    open43?: StringFilter | string
    open44?: StringFilter | string
    open45?: StringFilter | string
    open51?: StringFilter | string
    open52?: StringFilter | string
    open53?: StringFilter | string
    open54?: StringFilter | string
    open55?: StringFilter | string
    open1winbet?: IntFilter | number
    open2winbet?: IntFilter | number
    open3winbet?: IntFilter | number
    open4winbet?: IntFilter | number
    open5winbet?: IntFilter | number
    tableId?: IntFilter | number
    serveId?: IntFilter | number
    adddate?: DateTimeFilter | Date | string
  }

  export type MatchlogOrderByWithRelationInput = {
    matchId?: SortOrder
    open11?: SortOrder
    open12?: SortOrder
    open13?: SortOrder
    open14?: SortOrder
    open15?: SortOrder
    open21?: SortOrder
    open22?: SortOrder
    open23?: SortOrder
    open24?: SortOrder
    open25?: SortOrder
    open31?: SortOrder
    open32?: SortOrder
    open33?: SortOrder
    open34?: SortOrder
    open35?: SortOrder
    open41?: SortOrder
    open42?: SortOrder
    open43?: SortOrder
    open44?: SortOrder
    open45?: SortOrder
    open51?: SortOrder
    open52?: SortOrder
    open53?: SortOrder
    open54?: SortOrder
    open55?: SortOrder
    open1winbet?: SortOrder
    open2winbet?: SortOrder
    open3winbet?: SortOrder
    open4winbet?: SortOrder
    open5winbet?: SortOrder
    tableId?: SortOrder
    serveId?: SortOrder
    adddate?: SortOrder
  }

  export type MatchlogWhereUniqueInput = {
    matchId?: number
  }

  export type MatchlogOrderByWithAggregationInput = {
    matchId?: SortOrder
    open11?: SortOrder
    open12?: SortOrder
    open13?: SortOrder
    open14?: SortOrder
    open15?: SortOrder
    open21?: SortOrder
    open22?: SortOrder
    open23?: SortOrder
    open24?: SortOrder
    open25?: SortOrder
    open31?: SortOrder
    open32?: SortOrder
    open33?: SortOrder
    open34?: SortOrder
    open35?: SortOrder
    open41?: SortOrder
    open42?: SortOrder
    open43?: SortOrder
    open44?: SortOrder
    open45?: SortOrder
    open51?: SortOrder
    open52?: SortOrder
    open53?: SortOrder
    open54?: SortOrder
    open55?: SortOrder
    open1winbet?: SortOrder
    open2winbet?: SortOrder
    open3winbet?: SortOrder
    open4winbet?: SortOrder
    open5winbet?: SortOrder
    tableId?: SortOrder
    serveId?: SortOrder
    adddate?: SortOrder
    _count?: MatchlogCountOrderByAggregateInput
    _avg?: MatchlogAvgOrderByAggregateInput
    _max?: MatchlogMaxOrderByAggregateInput
    _min?: MatchlogMinOrderByAggregateInput
    _sum?: MatchlogSumOrderByAggregateInput
  }

  export type MatchlogScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MatchlogScalarWhereWithAggregatesInput>
    OR?: Enumerable<MatchlogScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MatchlogScalarWhereWithAggregatesInput>
    matchId?: IntWithAggregatesFilter | number
    open11?: StringWithAggregatesFilter | string
    open12?: StringWithAggregatesFilter | string
    open13?: StringWithAggregatesFilter | string
    open14?: StringWithAggregatesFilter | string
    open15?: StringWithAggregatesFilter | string
    open21?: StringWithAggregatesFilter | string
    open22?: StringWithAggregatesFilter | string
    open23?: StringWithAggregatesFilter | string
    open24?: StringWithAggregatesFilter | string
    open25?: StringWithAggregatesFilter | string
    open31?: StringWithAggregatesFilter | string
    open32?: StringWithAggregatesFilter | string
    open33?: StringWithAggregatesFilter | string
    open34?: StringWithAggregatesFilter | string
    open35?: StringWithAggregatesFilter | string
    open41?: StringWithAggregatesFilter | string
    open42?: StringWithAggregatesFilter | string
    open43?: StringWithAggregatesFilter | string
    open44?: StringWithAggregatesFilter | string
    open45?: StringWithAggregatesFilter | string
    open51?: StringWithAggregatesFilter | string
    open52?: StringWithAggregatesFilter | string
    open53?: StringWithAggregatesFilter | string
    open54?: StringWithAggregatesFilter | string
    open55?: StringWithAggregatesFilter | string
    open1winbet?: IntWithAggregatesFilter | number
    open2winbet?: IntWithAggregatesFilter | number
    open3winbet?: IntWithAggregatesFilter | number
    open4winbet?: IntWithAggregatesFilter | number
    open5winbet?: IntWithAggregatesFilter | number
    tableId?: IntWithAggregatesFilter | number
    serveId?: IntWithAggregatesFilter | number
    adddate?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DowncoinlogCreateInput = {
    userId: number
    MatchId: number
    callBet: number
    selectBet: number
    severBet: number
    winCoin: number
    tax: number
    isBanker: number
    serverId: number
    tableid: number
    Adddate?: Date | string
    mark: number
  }

  export type DowncoinlogUncheckedCreateInput = {
    id?: number
    userId: number
    MatchId: number
    callBet: number
    selectBet: number
    severBet: number
    winCoin: number
    tax: number
    isBanker: number
    serverId: number
    tableid: number
    Adddate?: Date | string
    mark: number
  }

  export type DowncoinlogUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    MatchId?: IntFieldUpdateOperationsInput | number
    callBet?: IntFieldUpdateOperationsInput | number
    selectBet?: IntFieldUpdateOperationsInput | number
    severBet?: IntFieldUpdateOperationsInput | number
    winCoin?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    isBanker?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    tableid?: IntFieldUpdateOperationsInput | number
    Adddate?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
  }

  export type DowncoinlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    MatchId?: IntFieldUpdateOperationsInput | number
    callBet?: IntFieldUpdateOperationsInput | number
    selectBet?: IntFieldUpdateOperationsInput | number
    severBet?: IntFieldUpdateOperationsInput | number
    winCoin?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    isBanker?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    tableid?: IntFieldUpdateOperationsInput | number
    Adddate?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
  }

  export type DowncoinlogCreateManyInput = {
    id?: number
    userId: number
    MatchId: number
    callBet: number
    selectBet: number
    severBet: number
    winCoin: number
    tax: number
    isBanker: number
    serverId: number
    tableid: number
    Adddate?: Date | string
    mark: number
  }

  export type DowncoinlogUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    MatchId?: IntFieldUpdateOperationsInput | number
    callBet?: IntFieldUpdateOperationsInput | number
    selectBet?: IntFieldUpdateOperationsInput | number
    severBet?: IntFieldUpdateOperationsInput | number
    winCoin?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    isBanker?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    tableid?: IntFieldUpdateOperationsInput | number
    Adddate?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
  }

  export type DowncoinlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    MatchId?: IntFieldUpdateOperationsInput | number
    callBet?: IntFieldUpdateOperationsInput | number
    selectBet?: IntFieldUpdateOperationsInput | number
    severBet?: IntFieldUpdateOperationsInput | number
    winCoin?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    isBanker?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    tableid?: IntFieldUpdateOperationsInput | number
    Adddate?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
  }

  export type MatchlogCreateInput = {
    open11: string
    open12: string
    open13: string
    open14: string
    open15: string
    open21: string
    open22: string
    open23: string
    open24: string
    open25: string
    open31: string
    open32: string
    open33: string
    open34: string
    open35: string
    open41: string
    open42: string
    open43: string
    open44: string
    open45: string
    open51: string
    open52: string
    open53: string
    open54: string
    open55: string
    open1winbet: number
    open2winbet: number
    open3winbet: number
    open4winbet: number
    open5winbet: number
    tableId: number
    serveId: number
    adddate?: Date | string
  }

  export type MatchlogUncheckedCreateInput = {
    matchId?: number
    open11: string
    open12: string
    open13: string
    open14: string
    open15: string
    open21: string
    open22: string
    open23: string
    open24: string
    open25: string
    open31: string
    open32: string
    open33: string
    open34: string
    open35: string
    open41: string
    open42: string
    open43: string
    open44: string
    open45: string
    open51: string
    open52: string
    open53: string
    open54: string
    open55: string
    open1winbet: number
    open2winbet: number
    open3winbet: number
    open4winbet: number
    open5winbet: number
    tableId: number
    serveId: number
    adddate?: Date | string
  }

  export type MatchlogUpdateInput = {
    open11?: StringFieldUpdateOperationsInput | string
    open12?: StringFieldUpdateOperationsInput | string
    open13?: StringFieldUpdateOperationsInput | string
    open14?: StringFieldUpdateOperationsInput | string
    open15?: StringFieldUpdateOperationsInput | string
    open21?: StringFieldUpdateOperationsInput | string
    open22?: StringFieldUpdateOperationsInput | string
    open23?: StringFieldUpdateOperationsInput | string
    open24?: StringFieldUpdateOperationsInput | string
    open25?: StringFieldUpdateOperationsInput | string
    open31?: StringFieldUpdateOperationsInput | string
    open32?: StringFieldUpdateOperationsInput | string
    open33?: StringFieldUpdateOperationsInput | string
    open34?: StringFieldUpdateOperationsInput | string
    open35?: StringFieldUpdateOperationsInput | string
    open41?: StringFieldUpdateOperationsInput | string
    open42?: StringFieldUpdateOperationsInput | string
    open43?: StringFieldUpdateOperationsInput | string
    open44?: StringFieldUpdateOperationsInput | string
    open45?: StringFieldUpdateOperationsInput | string
    open51?: StringFieldUpdateOperationsInput | string
    open52?: StringFieldUpdateOperationsInput | string
    open53?: StringFieldUpdateOperationsInput | string
    open54?: StringFieldUpdateOperationsInput | string
    open55?: StringFieldUpdateOperationsInput | string
    open1winbet?: IntFieldUpdateOperationsInput | number
    open2winbet?: IntFieldUpdateOperationsInput | number
    open3winbet?: IntFieldUpdateOperationsInput | number
    open4winbet?: IntFieldUpdateOperationsInput | number
    open5winbet?: IntFieldUpdateOperationsInput | number
    tableId?: IntFieldUpdateOperationsInput | number
    serveId?: IntFieldUpdateOperationsInput | number
    adddate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchlogUncheckedUpdateInput = {
    matchId?: IntFieldUpdateOperationsInput | number
    open11?: StringFieldUpdateOperationsInput | string
    open12?: StringFieldUpdateOperationsInput | string
    open13?: StringFieldUpdateOperationsInput | string
    open14?: StringFieldUpdateOperationsInput | string
    open15?: StringFieldUpdateOperationsInput | string
    open21?: StringFieldUpdateOperationsInput | string
    open22?: StringFieldUpdateOperationsInput | string
    open23?: StringFieldUpdateOperationsInput | string
    open24?: StringFieldUpdateOperationsInput | string
    open25?: StringFieldUpdateOperationsInput | string
    open31?: StringFieldUpdateOperationsInput | string
    open32?: StringFieldUpdateOperationsInput | string
    open33?: StringFieldUpdateOperationsInput | string
    open34?: StringFieldUpdateOperationsInput | string
    open35?: StringFieldUpdateOperationsInput | string
    open41?: StringFieldUpdateOperationsInput | string
    open42?: StringFieldUpdateOperationsInput | string
    open43?: StringFieldUpdateOperationsInput | string
    open44?: StringFieldUpdateOperationsInput | string
    open45?: StringFieldUpdateOperationsInput | string
    open51?: StringFieldUpdateOperationsInput | string
    open52?: StringFieldUpdateOperationsInput | string
    open53?: StringFieldUpdateOperationsInput | string
    open54?: StringFieldUpdateOperationsInput | string
    open55?: StringFieldUpdateOperationsInput | string
    open1winbet?: IntFieldUpdateOperationsInput | number
    open2winbet?: IntFieldUpdateOperationsInput | number
    open3winbet?: IntFieldUpdateOperationsInput | number
    open4winbet?: IntFieldUpdateOperationsInput | number
    open5winbet?: IntFieldUpdateOperationsInput | number
    tableId?: IntFieldUpdateOperationsInput | number
    serveId?: IntFieldUpdateOperationsInput | number
    adddate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchlogCreateManyInput = {
    matchId?: number
    open11: string
    open12: string
    open13: string
    open14: string
    open15: string
    open21: string
    open22: string
    open23: string
    open24: string
    open25: string
    open31: string
    open32: string
    open33: string
    open34: string
    open35: string
    open41: string
    open42: string
    open43: string
    open44: string
    open45: string
    open51: string
    open52: string
    open53: string
    open54: string
    open55: string
    open1winbet: number
    open2winbet: number
    open3winbet: number
    open4winbet: number
    open5winbet: number
    tableId: number
    serveId: number
    adddate?: Date | string
  }

  export type MatchlogUpdateManyMutationInput = {
    open11?: StringFieldUpdateOperationsInput | string
    open12?: StringFieldUpdateOperationsInput | string
    open13?: StringFieldUpdateOperationsInput | string
    open14?: StringFieldUpdateOperationsInput | string
    open15?: StringFieldUpdateOperationsInput | string
    open21?: StringFieldUpdateOperationsInput | string
    open22?: StringFieldUpdateOperationsInput | string
    open23?: StringFieldUpdateOperationsInput | string
    open24?: StringFieldUpdateOperationsInput | string
    open25?: StringFieldUpdateOperationsInput | string
    open31?: StringFieldUpdateOperationsInput | string
    open32?: StringFieldUpdateOperationsInput | string
    open33?: StringFieldUpdateOperationsInput | string
    open34?: StringFieldUpdateOperationsInput | string
    open35?: StringFieldUpdateOperationsInput | string
    open41?: StringFieldUpdateOperationsInput | string
    open42?: StringFieldUpdateOperationsInput | string
    open43?: StringFieldUpdateOperationsInput | string
    open44?: StringFieldUpdateOperationsInput | string
    open45?: StringFieldUpdateOperationsInput | string
    open51?: StringFieldUpdateOperationsInput | string
    open52?: StringFieldUpdateOperationsInput | string
    open53?: StringFieldUpdateOperationsInput | string
    open54?: StringFieldUpdateOperationsInput | string
    open55?: StringFieldUpdateOperationsInput | string
    open1winbet?: IntFieldUpdateOperationsInput | number
    open2winbet?: IntFieldUpdateOperationsInput | number
    open3winbet?: IntFieldUpdateOperationsInput | number
    open4winbet?: IntFieldUpdateOperationsInput | number
    open5winbet?: IntFieldUpdateOperationsInput | number
    tableId?: IntFieldUpdateOperationsInput | number
    serveId?: IntFieldUpdateOperationsInput | number
    adddate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchlogUncheckedUpdateManyInput = {
    matchId?: IntFieldUpdateOperationsInput | number
    open11?: StringFieldUpdateOperationsInput | string
    open12?: StringFieldUpdateOperationsInput | string
    open13?: StringFieldUpdateOperationsInput | string
    open14?: StringFieldUpdateOperationsInput | string
    open15?: StringFieldUpdateOperationsInput | string
    open21?: StringFieldUpdateOperationsInput | string
    open22?: StringFieldUpdateOperationsInput | string
    open23?: StringFieldUpdateOperationsInput | string
    open24?: StringFieldUpdateOperationsInput | string
    open25?: StringFieldUpdateOperationsInput | string
    open31?: StringFieldUpdateOperationsInput | string
    open32?: StringFieldUpdateOperationsInput | string
    open33?: StringFieldUpdateOperationsInput | string
    open34?: StringFieldUpdateOperationsInput | string
    open35?: StringFieldUpdateOperationsInput | string
    open41?: StringFieldUpdateOperationsInput | string
    open42?: StringFieldUpdateOperationsInput | string
    open43?: StringFieldUpdateOperationsInput | string
    open44?: StringFieldUpdateOperationsInput | string
    open45?: StringFieldUpdateOperationsInput | string
    open51?: StringFieldUpdateOperationsInput | string
    open52?: StringFieldUpdateOperationsInput | string
    open53?: StringFieldUpdateOperationsInput | string
    open54?: StringFieldUpdateOperationsInput | string
    open55?: StringFieldUpdateOperationsInput | string
    open1winbet?: IntFieldUpdateOperationsInput | number
    open2winbet?: IntFieldUpdateOperationsInput | number
    open3winbet?: IntFieldUpdateOperationsInput | number
    open4winbet?: IntFieldUpdateOperationsInput | number
    open5winbet?: IntFieldUpdateOperationsInput | number
    tableId?: IntFieldUpdateOperationsInput | number
    serveId?: IntFieldUpdateOperationsInput | number
    adddate?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DowncoinlogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    MatchId?: SortOrder
    callBet?: SortOrder
    selectBet?: SortOrder
    severBet?: SortOrder
    winCoin?: SortOrder
    tax?: SortOrder
    isBanker?: SortOrder
    serverId?: SortOrder
    tableid?: SortOrder
    Adddate?: SortOrder
    mark?: SortOrder
  }

  export type DowncoinlogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    MatchId?: SortOrder
    callBet?: SortOrder
    selectBet?: SortOrder
    severBet?: SortOrder
    winCoin?: SortOrder
    tax?: SortOrder
    isBanker?: SortOrder
    serverId?: SortOrder
    tableid?: SortOrder
    mark?: SortOrder
  }

  export type DowncoinlogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    MatchId?: SortOrder
    callBet?: SortOrder
    selectBet?: SortOrder
    severBet?: SortOrder
    winCoin?: SortOrder
    tax?: SortOrder
    isBanker?: SortOrder
    serverId?: SortOrder
    tableid?: SortOrder
    Adddate?: SortOrder
    mark?: SortOrder
  }

  export type DowncoinlogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    MatchId?: SortOrder
    callBet?: SortOrder
    selectBet?: SortOrder
    severBet?: SortOrder
    winCoin?: SortOrder
    tax?: SortOrder
    isBanker?: SortOrder
    serverId?: SortOrder
    tableid?: SortOrder
    Adddate?: SortOrder
    mark?: SortOrder
  }

  export type DowncoinlogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    MatchId?: SortOrder
    callBet?: SortOrder
    selectBet?: SortOrder
    severBet?: SortOrder
    winCoin?: SortOrder
    tax?: SortOrder
    isBanker?: SortOrder
    serverId?: SortOrder
    tableid?: SortOrder
    mark?: SortOrder
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

  export type MatchlogCountOrderByAggregateInput = {
    matchId?: SortOrder
    open11?: SortOrder
    open12?: SortOrder
    open13?: SortOrder
    open14?: SortOrder
    open15?: SortOrder
    open21?: SortOrder
    open22?: SortOrder
    open23?: SortOrder
    open24?: SortOrder
    open25?: SortOrder
    open31?: SortOrder
    open32?: SortOrder
    open33?: SortOrder
    open34?: SortOrder
    open35?: SortOrder
    open41?: SortOrder
    open42?: SortOrder
    open43?: SortOrder
    open44?: SortOrder
    open45?: SortOrder
    open51?: SortOrder
    open52?: SortOrder
    open53?: SortOrder
    open54?: SortOrder
    open55?: SortOrder
    open1winbet?: SortOrder
    open2winbet?: SortOrder
    open3winbet?: SortOrder
    open4winbet?: SortOrder
    open5winbet?: SortOrder
    tableId?: SortOrder
    serveId?: SortOrder
    adddate?: SortOrder
  }

  export type MatchlogAvgOrderByAggregateInput = {
    matchId?: SortOrder
    open1winbet?: SortOrder
    open2winbet?: SortOrder
    open3winbet?: SortOrder
    open4winbet?: SortOrder
    open5winbet?: SortOrder
    tableId?: SortOrder
    serveId?: SortOrder
  }

  export type MatchlogMaxOrderByAggregateInput = {
    matchId?: SortOrder
    open11?: SortOrder
    open12?: SortOrder
    open13?: SortOrder
    open14?: SortOrder
    open15?: SortOrder
    open21?: SortOrder
    open22?: SortOrder
    open23?: SortOrder
    open24?: SortOrder
    open25?: SortOrder
    open31?: SortOrder
    open32?: SortOrder
    open33?: SortOrder
    open34?: SortOrder
    open35?: SortOrder
    open41?: SortOrder
    open42?: SortOrder
    open43?: SortOrder
    open44?: SortOrder
    open45?: SortOrder
    open51?: SortOrder
    open52?: SortOrder
    open53?: SortOrder
    open54?: SortOrder
    open55?: SortOrder
    open1winbet?: SortOrder
    open2winbet?: SortOrder
    open3winbet?: SortOrder
    open4winbet?: SortOrder
    open5winbet?: SortOrder
    tableId?: SortOrder
    serveId?: SortOrder
    adddate?: SortOrder
  }

  export type MatchlogMinOrderByAggregateInput = {
    matchId?: SortOrder
    open11?: SortOrder
    open12?: SortOrder
    open13?: SortOrder
    open14?: SortOrder
    open15?: SortOrder
    open21?: SortOrder
    open22?: SortOrder
    open23?: SortOrder
    open24?: SortOrder
    open25?: SortOrder
    open31?: SortOrder
    open32?: SortOrder
    open33?: SortOrder
    open34?: SortOrder
    open35?: SortOrder
    open41?: SortOrder
    open42?: SortOrder
    open43?: SortOrder
    open44?: SortOrder
    open45?: SortOrder
    open51?: SortOrder
    open52?: SortOrder
    open53?: SortOrder
    open54?: SortOrder
    open55?: SortOrder
    open1winbet?: SortOrder
    open2winbet?: SortOrder
    open3winbet?: SortOrder
    open4winbet?: SortOrder
    open5winbet?: SortOrder
    tableId?: SortOrder
    serveId?: SortOrder
    adddate?: SortOrder
  }

  export type MatchlogSumOrderByAggregateInput = {
    matchId?: SortOrder
    open1winbet?: SortOrder
    open2winbet?: SortOrder
    open3winbet?: SortOrder
    open4winbet?: SortOrder
    open5winbet?: SortOrder
    tableId?: SortOrder
    serveId?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
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