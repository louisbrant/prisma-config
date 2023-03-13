
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Config
 * 
 */
export type Config = {
  id: number
  flag: string
  value: number
  type: number
  award: number
}

/**
 * Model Downcoinlog
 * 
 */
export type Downcoinlog = {
  id: number
  userId: number
  MatchId: number
  downCoin: number
  winCoin: number
  open2: number
  open3: number
  open4: number
  tax: number
  isBanker: number
  serverId: number
  tableid: number
  Adddate: Date
  mark: number
}

/**
 * Model Log_baoming
 * 
 */
export type Log_baoming = {
  uid: number
  allc: number
  lostc: number
  play: number
  win_all: number
  dizhu_num: number
  win_dizhu: number
  bm_score: number
  result: number
}

/**
 * Model Log_baoming_save
 * 
 */
export type Log_baoming_save = {
  id: number
  uid: number
  allc: number
  play: number
  win_all: number
  dizhu_num: number
  win_dizhu: number
  bm_score: number
  result: number
  result_res: string
  is_send_win: number
  create_time: string
  nick_name: string
  head_url: string
}

/**
 * Model Log_temp
 * 
 */
export type Log_temp = {
  id: number
  uid: number
  nick_name: string
  head_url: string
  createtime: string
  isdizhu: number
  iswin: number
  game_dict: string
}

/**
 * Model Log_total
 * 
 */
export type Log_total = {
  id: number
  uid: number
  play: number
  win_all: number
  dizhu_num: number
  win_dizhu: number
  bm_score: number
}

/**
 * Model Matchlog
 * 
 */
export type Matchlog = {
  matchId: number
  open11: string
  open12: string
  open21: string
  open22: string
  open31: string
  open32: string
  open41: string
  open42: string
  open2winbet: number
  open3winbet: number
  open4winbet: number
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
 * // Fetch zero or more Configs
 * const configs = await prisma.config.findMany()
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
   * // Fetch zero or more Configs
   * const configs = await prisma.config.findMany()
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
   * `prisma.config`: Exposes CRUD operations for the **Config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configs
    * const configs = await prisma.config.findMany()
    * ```
    */
  get config(): Prisma.ConfigDelegate<GlobalReject>;

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
   * `prisma.log_baoming`: Exposes CRUD operations for the **Log_baoming** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Log_baomings
    * const log_baomings = await prisma.log_baoming.findMany()
    * ```
    */
  get log_baoming(): Prisma.Log_baomingDelegate<GlobalReject>;

  /**
   * `prisma.log_baoming_save`: Exposes CRUD operations for the **Log_baoming_save** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Log_baoming_saves
    * const log_baoming_saves = await prisma.log_baoming_save.findMany()
    * ```
    */
  get log_baoming_save(): Prisma.Log_baoming_saveDelegate<GlobalReject>;

  /**
   * `prisma.log_temp`: Exposes CRUD operations for the **Log_temp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Log_temps
    * const log_temps = await prisma.log_temp.findMany()
    * ```
    */
  get log_temp(): Prisma.Log_tempDelegate<GlobalReject>;

  /**
   * `prisma.log_total`: Exposes CRUD operations for the **Log_total** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Log_totals
    * const log_totals = await prisma.log_total.findMany()
    * ```
    */
  get log_total(): Prisma.Log_totalDelegate<GlobalReject>;

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
    Config: 'Config',
    Downcoinlog: 'Downcoinlog',
    Log_baoming: 'Log_baoming',
    Log_baoming_save: 'Log_baoming_save',
    Log_temp: 'Log_temp',
    Log_total: 'Log_total',
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
   * Model Config
   */


  export type AggregateConfig = {
    _count: ConfigCountAggregateOutputType | null
    _avg: ConfigAvgAggregateOutputType | null
    _sum: ConfigSumAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  export type ConfigAvgAggregateOutputType = {
    id: number | null
    value: number | null
    type: number | null
    award: number | null
  }

  export type ConfigSumAggregateOutputType = {
    id: number | null
    value: number | null
    type: number | null
    award: number | null
  }

  export type ConfigMinAggregateOutputType = {
    id: number | null
    flag: string | null
    value: number | null
    type: number | null
    award: number | null
  }

  export type ConfigMaxAggregateOutputType = {
    id: number | null
    flag: string | null
    value: number | null
    type: number | null
    award: number | null
  }

  export type ConfigCountAggregateOutputType = {
    id: number
    flag: number
    value: number
    type: number
    award: number
    _all: number
  }


  export type ConfigAvgAggregateInputType = {
    id?: true
    value?: true
    type?: true
    award?: true
  }

  export type ConfigSumAggregateInputType = {
    id?: true
    value?: true
    type?: true
    award?: true
  }

  export type ConfigMinAggregateInputType = {
    id?: true
    flag?: true
    value?: true
    type?: true
    award?: true
  }

  export type ConfigMaxAggregateInputType = {
    id?: true
    flag?: true
    value?: true
    type?: true
    award?: true
  }

  export type ConfigCountAggregateInputType = {
    id?: true
    flag?: true
    value?: true
    type?: true
    award?: true
    _all?: true
  }

  export type ConfigAggregateArgs = {
    /**
     * Filter which Config to aggregate.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: Enumerable<ConfigOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configs
    **/
    _count?: true | ConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigMaxAggregateInputType
  }

  export type GetConfigAggregateType<T extends ConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfig[P]>
      : GetScalarType<T[P], AggregateConfig[P]>
  }




  export type ConfigGroupByArgs = {
    where?: ConfigWhereInput
    orderBy?: Enumerable<ConfigOrderByWithAggregationInput>
    by: ConfigScalarFieldEnum[]
    having?: ConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigCountAggregateInputType | true
    _avg?: ConfigAvgAggregateInputType
    _sum?: ConfigSumAggregateInputType
    _min?: ConfigMinAggregateInputType
    _max?: ConfigMaxAggregateInputType
  }


  export type ConfigGroupByOutputType = {
    id: number
    flag: string
    value: number
    type: number
    award: number
    _count: ConfigCountAggregateOutputType | null
    _avg: ConfigAvgAggregateOutputType | null
    _sum: ConfigSumAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  type GetConfigGroupByPayload<T extends ConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigGroupByOutputType[P]>
        }
      >
    >


  export type ConfigSelect = {
    id?: boolean
    flag?: boolean
    value?: boolean
    type?: boolean
    award?: boolean
  }


  export type ConfigGetPayload<S extends boolean | null | undefined | ConfigArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Config :
    S extends undefined ? never :
    S extends { include: any } & (ConfigArgs | ConfigFindManyArgs)
    ? Config 
    : S extends { select: any } & (ConfigArgs | ConfigFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Config ? Config[P] : never
  } 
      : Config


  type ConfigCountArgs = 
    Omit<ConfigFindManyArgs, 'select' | 'include'> & {
      select?: ConfigCountAggregateInputType | true
    }

  export interface ConfigDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Config that matches the filter.
     * @param {ConfigFindUniqueArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConfigFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ConfigFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Config'> extends True ? Prisma__ConfigClient<ConfigGetPayload<T>> : Prisma__ConfigClient<ConfigGetPayload<T> | null, null>

    /**
     * Find one Config that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConfigFindUniqueOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConfigFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ConfigFindUniqueOrThrowArgs>
    ): Prisma__ConfigClient<ConfigGetPayload<T>>

    /**
     * Find the first Config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConfigFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ConfigFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Config'> extends True ? Prisma__ConfigClient<ConfigGetPayload<T>> : Prisma__ConfigClient<ConfigGetPayload<T> | null, null>

    /**
     * Find the first Config that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConfigFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ConfigFindFirstOrThrowArgs>
    ): Prisma__ConfigClient<ConfigGetPayload<T>>

    /**
     * Find zero or more Configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configs
     * const configs = await prisma.config.findMany()
     * 
     * // Get first 10 Configs
     * const configs = await prisma.config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configWithIdOnly = await prisma.config.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConfigFindManyArgs>(
      args?: SelectSubset<T, ConfigFindManyArgs>
    ): Prisma.PrismaPromise<Array<ConfigGetPayload<T>>>

    /**
     * Create a Config.
     * @param {ConfigCreateArgs} args - Arguments to create a Config.
     * @example
     * // Create one Config
     * const Config = await prisma.config.create({
     *   data: {
     *     // ... data to create a Config
     *   }
     * })
     * 
    **/
    create<T extends ConfigCreateArgs>(
      args: SelectSubset<T, ConfigCreateArgs>
    ): Prisma__ConfigClient<ConfigGetPayload<T>>

    /**
     * Create many Configs.
     *     @param {ConfigCreateManyArgs} args - Arguments to create many Configs.
     *     @example
     *     // Create many Configs
     *     const config = await prisma.config.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ConfigCreateManyArgs>(
      args?: SelectSubset<T, ConfigCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Config.
     * @param {ConfigDeleteArgs} args - Arguments to delete one Config.
     * @example
     * // Delete one Config
     * const Config = await prisma.config.delete({
     *   where: {
     *     // ... filter to delete one Config
     *   }
     * })
     * 
    **/
    delete<T extends ConfigDeleteArgs>(
      args: SelectSubset<T, ConfigDeleteArgs>
    ): Prisma__ConfigClient<ConfigGetPayload<T>>

    /**
     * Update one Config.
     * @param {ConfigUpdateArgs} args - Arguments to update one Config.
     * @example
     * // Update one Config
     * const config = await prisma.config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConfigUpdateArgs>(
      args: SelectSubset<T, ConfigUpdateArgs>
    ): Prisma__ConfigClient<ConfigGetPayload<T>>

    /**
     * Delete zero or more Configs.
     * @param {ConfigDeleteManyArgs} args - Arguments to filter Configs to delete.
     * @example
     * // Delete a few Configs
     * const { count } = await prisma.config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConfigDeleteManyArgs>(
      args?: SelectSubset<T, ConfigDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConfigUpdateManyArgs>(
      args: SelectSubset<T, ConfigUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Config.
     * @param {ConfigUpsertArgs} args - Arguments to update or create a Config.
     * @example
     * // Update or create a Config
     * const config = await prisma.config.upsert({
     *   create: {
     *     // ... data to create a Config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Config we want to update
     *   }
     * })
    **/
    upsert<T extends ConfigUpsertArgs>(
      args: SelectSubset<T, ConfigUpsertArgs>
    ): Prisma__ConfigClient<ConfigGetPayload<T>>

    /**
     * Count the number of Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigCountArgs} args - Arguments to filter Configs to count.
     * @example
     * // Count the number of Configs
     * const count = await prisma.config.count({
     *   where: {
     *     // ... the filter for the Configs we want to count
     *   }
     * })
    **/
    count<T extends ConfigCountArgs>(
      args?: Subset<T, ConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfigAggregateArgs>(args: Subset<T, ConfigAggregateArgs>): Prisma.PrismaPromise<GetConfigAggregateType<T>>

    /**
     * Group by Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigGroupByArgs} args - Group by arguments.
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
      T extends ConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigGroupByArgs['orderBy'] }
        : { orderBy?: ConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ConfigClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Config base type for findUnique actions
   */
  export type ConfigFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findUnique
   */
  export interface ConfigFindUniqueArgs extends ConfigFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Config findUniqueOrThrow
   */
  export type ConfigFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }


  /**
   * Config base type for findFirst actions
   */
  export type ConfigFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: Enumerable<ConfigOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: Enumerable<ConfigScalarFieldEnum>
  }

  /**
   * Config findFirst
   */
  export interface ConfigFindFirstArgs extends ConfigFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Config findFirstOrThrow
   */
  export type ConfigFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: Enumerable<ConfigOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: Enumerable<ConfigScalarFieldEnum>
  }


  /**
   * Config findMany
   */
  export type ConfigFindManyArgs = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect | null
    /**
     * Filter, which Configs to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: Enumerable<ConfigOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    distinct?: Enumerable<ConfigScalarFieldEnum>
  }


  /**
   * Config create
   */
  export type ConfigCreateArgs = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect | null
    /**
     * The data needed to create a Config.
     */
    data: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
  }


  /**
   * Config createMany
   */
  export type ConfigCreateManyArgs = {
    /**
     * The data used to create many Configs.
     */
    data: Enumerable<ConfigCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Config update
   */
  export type ConfigUpdateArgs = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect | null
    /**
     * The data needed to update a Config.
     */
    data: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
    /**
     * Choose, which Config to update.
     */
    where: ConfigWhereUniqueInput
  }


  /**
   * Config updateMany
   */
  export type ConfigUpdateManyArgs = {
    /**
     * The data used to update Configs.
     */
    data: XOR<ConfigUpdateManyMutationInput, ConfigUncheckedUpdateManyInput>
    /**
     * Filter which Configs to update
     */
    where?: ConfigWhereInput
  }


  /**
   * Config upsert
   */
  export type ConfigUpsertArgs = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect | null
    /**
     * The filter to search for the Config to update in case it exists.
     */
    where: ConfigWhereUniqueInput
    /**
     * In case the Config found by the `where` argument doesn't exist, create a new Config with this data.
     */
    create: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
    /**
     * In case the Config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
  }


  /**
   * Config delete
   */
  export type ConfigDeleteArgs = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect | null
    /**
     * Filter which Config to delete.
     */
    where: ConfigWhereUniqueInput
  }


  /**
   * Config deleteMany
   */
  export type ConfigDeleteManyArgs = {
    /**
     * Filter which Configs to delete
     */
    where?: ConfigWhereInput
  }


  /**
   * Config without action
   */
  export type ConfigArgs = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect | null
  }



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
    downCoin: number | null
    winCoin: number | null
    open2: number | null
    open3: number | null
    open4: number | null
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
    downCoin: number | null
    winCoin: number | null
    open2: number | null
    open3: number | null
    open4: number | null
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
    downCoin: number | null
    winCoin: number | null
    open2: number | null
    open3: number | null
    open4: number | null
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
    downCoin: number | null
    winCoin: number | null
    open2: number | null
    open3: number | null
    open4: number | null
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
    downCoin: number
    winCoin: number
    open2: number
    open3: number
    open4: number
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
    downCoin?: true
    winCoin?: true
    open2?: true
    open3?: true
    open4?: true
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
    downCoin?: true
    winCoin?: true
    open2?: true
    open3?: true
    open4?: true
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
    downCoin?: true
    winCoin?: true
    open2?: true
    open3?: true
    open4?: true
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
    downCoin?: true
    winCoin?: true
    open2?: true
    open3?: true
    open4?: true
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
    downCoin?: true
    winCoin?: true
    open2?: true
    open3?: true
    open4?: true
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
    downCoin: number
    winCoin: number
    open2: number
    open3: number
    open4: number
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
    downCoin?: boolean
    winCoin?: boolean
    open2?: boolean
    open3?: boolean
    open4?: boolean
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
   * Model Log_baoming
   */


  export type AggregateLog_baoming = {
    _count: Log_baomingCountAggregateOutputType | null
    _avg: Log_baomingAvgAggregateOutputType | null
    _sum: Log_baomingSumAggregateOutputType | null
    _min: Log_baomingMinAggregateOutputType | null
    _max: Log_baomingMaxAggregateOutputType | null
  }

  export type Log_baomingAvgAggregateOutputType = {
    uid: number | null
    allc: number | null
    lostc: number | null
    play: number | null
    win_all: number | null
    dizhu_num: number | null
    win_dizhu: number | null
    bm_score: number | null
    result: number | null
  }

  export type Log_baomingSumAggregateOutputType = {
    uid: number | null
    allc: number | null
    lostc: number | null
    play: number | null
    win_all: number | null
    dizhu_num: number | null
    win_dizhu: number | null
    bm_score: number | null
    result: number | null
  }

  export type Log_baomingMinAggregateOutputType = {
    uid: number | null
    allc: number | null
    lostc: number | null
    play: number | null
    win_all: number | null
    dizhu_num: number | null
    win_dizhu: number | null
    bm_score: number | null
    result: number | null
  }

  export type Log_baomingMaxAggregateOutputType = {
    uid: number | null
    allc: number | null
    lostc: number | null
    play: number | null
    win_all: number | null
    dizhu_num: number | null
    win_dizhu: number | null
    bm_score: number | null
    result: number | null
  }

  export type Log_baomingCountAggregateOutputType = {
    uid: number
    allc: number
    lostc: number
    play: number
    win_all: number
    dizhu_num: number
    win_dizhu: number
    bm_score: number
    result: number
    _all: number
  }


  export type Log_baomingAvgAggregateInputType = {
    uid?: true
    allc?: true
    lostc?: true
    play?: true
    win_all?: true
    dizhu_num?: true
    win_dizhu?: true
    bm_score?: true
    result?: true
  }

  export type Log_baomingSumAggregateInputType = {
    uid?: true
    allc?: true
    lostc?: true
    play?: true
    win_all?: true
    dizhu_num?: true
    win_dizhu?: true
    bm_score?: true
    result?: true
  }

  export type Log_baomingMinAggregateInputType = {
    uid?: true
    allc?: true
    lostc?: true
    play?: true
    win_all?: true
    dizhu_num?: true
    win_dizhu?: true
    bm_score?: true
    result?: true
  }

  export type Log_baomingMaxAggregateInputType = {
    uid?: true
    allc?: true
    lostc?: true
    play?: true
    win_all?: true
    dizhu_num?: true
    win_dizhu?: true
    bm_score?: true
    result?: true
  }

  export type Log_baomingCountAggregateInputType = {
    uid?: true
    allc?: true
    lostc?: true
    play?: true
    win_all?: true
    dizhu_num?: true
    win_dizhu?: true
    bm_score?: true
    result?: true
    _all?: true
  }

  export type Log_baomingAggregateArgs = {
    /**
     * Filter which Log_baoming to aggregate.
     */
    where?: Log_baomingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_baomings to fetch.
     */
    orderBy?: Enumerable<Log_baomingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Log_baomingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_baomings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_baomings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Log_baomings
    **/
    _count?: true | Log_baomingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Log_baomingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Log_baomingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Log_baomingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Log_baomingMaxAggregateInputType
  }

  export type GetLog_baomingAggregateType<T extends Log_baomingAggregateArgs> = {
        [P in keyof T & keyof AggregateLog_baoming]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog_baoming[P]>
      : GetScalarType<T[P], AggregateLog_baoming[P]>
  }




  export type Log_baomingGroupByArgs = {
    where?: Log_baomingWhereInput
    orderBy?: Enumerable<Log_baomingOrderByWithAggregationInput>
    by: Log_baomingScalarFieldEnum[]
    having?: Log_baomingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Log_baomingCountAggregateInputType | true
    _avg?: Log_baomingAvgAggregateInputType
    _sum?: Log_baomingSumAggregateInputType
    _min?: Log_baomingMinAggregateInputType
    _max?: Log_baomingMaxAggregateInputType
  }


  export type Log_baomingGroupByOutputType = {
    uid: number
    allc: number
    lostc: number
    play: number
    win_all: number
    dizhu_num: number
    win_dizhu: number
    bm_score: number
    result: number
    _count: Log_baomingCountAggregateOutputType | null
    _avg: Log_baomingAvgAggregateOutputType | null
    _sum: Log_baomingSumAggregateOutputType | null
    _min: Log_baomingMinAggregateOutputType | null
    _max: Log_baomingMaxAggregateOutputType | null
  }

  type GetLog_baomingGroupByPayload<T extends Log_baomingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Log_baomingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Log_baomingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Log_baomingGroupByOutputType[P]>
            : GetScalarType<T[P], Log_baomingGroupByOutputType[P]>
        }
      >
    >


  export type Log_baomingSelect = {
    uid?: boolean
    allc?: boolean
    lostc?: boolean
    play?: boolean
    win_all?: boolean
    dizhu_num?: boolean
    win_dizhu?: boolean
    bm_score?: boolean
    result?: boolean
  }


  export type Log_baomingGetPayload<S extends boolean | null | undefined | Log_baomingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Log_baoming :
    S extends undefined ? never :
    S extends { include: any } & (Log_baomingArgs | Log_baomingFindManyArgs)
    ? Log_baoming 
    : S extends { select: any } & (Log_baomingArgs | Log_baomingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Log_baoming ? Log_baoming[P] : never
  } 
      : Log_baoming


  type Log_baomingCountArgs = 
    Omit<Log_baomingFindManyArgs, 'select' | 'include'> & {
      select?: Log_baomingCountAggregateInputType | true
    }

  export interface Log_baomingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Log_baoming that matches the filter.
     * @param {Log_baomingFindUniqueArgs} args - Arguments to find a Log_baoming
     * @example
     * // Get one Log_baoming
     * const log_baoming = await prisma.log_baoming.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Log_baomingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Log_baomingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Log_baoming'> extends True ? Prisma__Log_baomingClient<Log_baomingGetPayload<T>> : Prisma__Log_baomingClient<Log_baomingGetPayload<T> | null, null>

    /**
     * Find one Log_baoming that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Log_baomingFindUniqueOrThrowArgs} args - Arguments to find a Log_baoming
     * @example
     * // Get one Log_baoming
     * const log_baoming = await prisma.log_baoming.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Log_baomingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Log_baomingFindUniqueOrThrowArgs>
    ): Prisma__Log_baomingClient<Log_baomingGetPayload<T>>

    /**
     * Find the first Log_baoming that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_baomingFindFirstArgs} args - Arguments to find a Log_baoming
     * @example
     * // Get one Log_baoming
     * const log_baoming = await prisma.log_baoming.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Log_baomingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Log_baomingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Log_baoming'> extends True ? Prisma__Log_baomingClient<Log_baomingGetPayload<T>> : Prisma__Log_baomingClient<Log_baomingGetPayload<T> | null, null>

    /**
     * Find the first Log_baoming that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_baomingFindFirstOrThrowArgs} args - Arguments to find a Log_baoming
     * @example
     * // Get one Log_baoming
     * const log_baoming = await prisma.log_baoming.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Log_baomingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Log_baomingFindFirstOrThrowArgs>
    ): Prisma__Log_baomingClient<Log_baomingGetPayload<T>>

    /**
     * Find zero or more Log_baomings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_baomingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Log_baomings
     * const log_baomings = await prisma.log_baoming.findMany()
     * 
     * // Get first 10 Log_baomings
     * const log_baomings = await prisma.log_baoming.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const log_baomingWithUidOnly = await prisma.log_baoming.findMany({ select: { uid: true } })
     * 
    **/
    findMany<T extends Log_baomingFindManyArgs>(
      args?: SelectSubset<T, Log_baomingFindManyArgs>
    ): Prisma.PrismaPromise<Array<Log_baomingGetPayload<T>>>

    /**
     * Create a Log_baoming.
     * @param {Log_baomingCreateArgs} args - Arguments to create a Log_baoming.
     * @example
     * // Create one Log_baoming
     * const Log_baoming = await prisma.log_baoming.create({
     *   data: {
     *     // ... data to create a Log_baoming
     *   }
     * })
     * 
    **/
    create<T extends Log_baomingCreateArgs>(
      args: SelectSubset<T, Log_baomingCreateArgs>
    ): Prisma__Log_baomingClient<Log_baomingGetPayload<T>>

    /**
     * Create many Log_baomings.
     *     @param {Log_baomingCreateManyArgs} args - Arguments to create many Log_baomings.
     *     @example
     *     // Create many Log_baomings
     *     const log_baoming = await prisma.log_baoming.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Log_baomingCreateManyArgs>(
      args?: SelectSubset<T, Log_baomingCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log_baoming.
     * @param {Log_baomingDeleteArgs} args - Arguments to delete one Log_baoming.
     * @example
     * // Delete one Log_baoming
     * const Log_baoming = await prisma.log_baoming.delete({
     *   where: {
     *     // ... filter to delete one Log_baoming
     *   }
     * })
     * 
    **/
    delete<T extends Log_baomingDeleteArgs>(
      args: SelectSubset<T, Log_baomingDeleteArgs>
    ): Prisma__Log_baomingClient<Log_baomingGetPayload<T>>

    /**
     * Update one Log_baoming.
     * @param {Log_baomingUpdateArgs} args - Arguments to update one Log_baoming.
     * @example
     * // Update one Log_baoming
     * const log_baoming = await prisma.log_baoming.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Log_baomingUpdateArgs>(
      args: SelectSubset<T, Log_baomingUpdateArgs>
    ): Prisma__Log_baomingClient<Log_baomingGetPayload<T>>

    /**
     * Delete zero or more Log_baomings.
     * @param {Log_baomingDeleteManyArgs} args - Arguments to filter Log_baomings to delete.
     * @example
     * // Delete a few Log_baomings
     * const { count } = await prisma.log_baoming.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Log_baomingDeleteManyArgs>(
      args?: SelectSubset<T, Log_baomingDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_baomings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_baomingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Log_baomings
     * const log_baoming = await prisma.log_baoming.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Log_baomingUpdateManyArgs>(
      args: SelectSubset<T, Log_baomingUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log_baoming.
     * @param {Log_baomingUpsertArgs} args - Arguments to update or create a Log_baoming.
     * @example
     * // Update or create a Log_baoming
     * const log_baoming = await prisma.log_baoming.upsert({
     *   create: {
     *     // ... data to create a Log_baoming
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log_baoming we want to update
     *   }
     * })
    **/
    upsert<T extends Log_baomingUpsertArgs>(
      args: SelectSubset<T, Log_baomingUpsertArgs>
    ): Prisma__Log_baomingClient<Log_baomingGetPayload<T>>

    /**
     * Count the number of Log_baomings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_baomingCountArgs} args - Arguments to filter Log_baomings to count.
     * @example
     * // Count the number of Log_baomings
     * const count = await prisma.log_baoming.count({
     *   where: {
     *     // ... the filter for the Log_baomings we want to count
     *   }
     * })
    **/
    count<T extends Log_baomingCountArgs>(
      args?: Subset<T, Log_baomingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Log_baomingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log_baoming.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_baomingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Log_baomingAggregateArgs>(args: Subset<T, Log_baomingAggregateArgs>): Prisma.PrismaPromise<GetLog_baomingAggregateType<T>>

    /**
     * Group by Log_baoming.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_baomingGroupByArgs} args - Group by arguments.
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
      T extends Log_baomingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Log_baomingGroupByArgs['orderBy'] }
        : { orderBy?: Log_baomingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Log_baomingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLog_baomingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Log_baoming.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Log_baomingClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Log_baoming base type for findUnique actions
   */
  export type Log_baomingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Log_baoming
     */
    select?: Log_baomingSelect | null
    /**
     * Filter, which Log_baoming to fetch.
     */
    where: Log_baomingWhereUniqueInput
  }

  /**
   * Log_baoming findUnique
   */
  export interface Log_baomingFindUniqueArgs extends Log_baomingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Log_baoming findUniqueOrThrow
   */
  export type Log_baomingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Log_baoming
     */
    select?: Log_baomingSelect | null
    /**
     * Filter, which Log_baoming to fetch.
     */
    where: Log_baomingWhereUniqueInput
  }


  /**
   * Log_baoming base type for findFirst actions
   */
  export type Log_baomingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Log_baoming
     */
    select?: Log_baomingSelect | null
    /**
     * Filter, which Log_baoming to fetch.
     */
    where?: Log_baomingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_baomings to fetch.
     */
    orderBy?: Enumerable<Log_baomingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Log_baomings.
     */
    cursor?: Log_baomingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_baomings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_baomings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Log_baomings.
     */
    distinct?: Enumerable<Log_baomingScalarFieldEnum>
  }

  /**
   * Log_baoming findFirst
   */
  export interface Log_baomingFindFirstArgs extends Log_baomingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Log_baoming findFirstOrThrow
   */
  export type Log_baomingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Log_baoming
     */
    select?: Log_baomingSelect | null
    /**
     * Filter, which Log_baoming to fetch.
     */
    where?: Log_baomingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_baomings to fetch.
     */
    orderBy?: Enumerable<Log_baomingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Log_baomings.
     */
    cursor?: Log_baomingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_baomings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_baomings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Log_baomings.
     */
    distinct?: Enumerable<Log_baomingScalarFieldEnum>
  }


  /**
   * Log_baoming findMany
   */
  export type Log_baomingFindManyArgs = {
    /**
     * Select specific fields to fetch from the Log_baoming
     */
    select?: Log_baomingSelect | null
    /**
     * Filter, which Log_baomings to fetch.
     */
    where?: Log_baomingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_baomings to fetch.
     */
    orderBy?: Enumerable<Log_baomingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Log_baomings.
     */
    cursor?: Log_baomingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_baomings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_baomings.
     */
    skip?: number
    distinct?: Enumerable<Log_baomingScalarFieldEnum>
  }


  /**
   * Log_baoming create
   */
  export type Log_baomingCreateArgs = {
    /**
     * Select specific fields to fetch from the Log_baoming
     */
    select?: Log_baomingSelect | null
    /**
     * The data needed to create a Log_baoming.
     */
    data: XOR<Log_baomingCreateInput, Log_baomingUncheckedCreateInput>
  }


  /**
   * Log_baoming createMany
   */
  export type Log_baomingCreateManyArgs = {
    /**
     * The data used to create many Log_baomings.
     */
    data: Enumerable<Log_baomingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Log_baoming update
   */
  export type Log_baomingUpdateArgs = {
    /**
     * Select specific fields to fetch from the Log_baoming
     */
    select?: Log_baomingSelect | null
    /**
     * The data needed to update a Log_baoming.
     */
    data: XOR<Log_baomingUpdateInput, Log_baomingUncheckedUpdateInput>
    /**
     * Choose, which Log_baoming to update.
     */
    where: Log_baomingWhereUniqueInput
  }


  /**
   * Log_baoming updateMany
   */
  export type Log_baomingUpdateManyArgs = {
    /**
     * The data used to update Log_baomings.
     */
    data: XOR<Log_baomingUpdateManyMutationInput, Log_baomingUncheckedUpdateManyInput>
    /**
     * Filter which Log_baomings to update
     */
    where?: Log_baomingWhereInput
  }


  /**
   * Log_baoming upsert
   */
  export type Log_baomingUpsertArgs = {
    /**
     * Select specific fields to fetch from the Log_baoming
     */
    select?: Log_baomingSelect | null
    /**
     * The filter to search for the Log_baoming to update in case it exists.
     */
    where: Log_baomingWhereUniqueInput
    /**
     * In case the Log_baoming found by the `where` argument doesn't exist, create a new Log_baoming with this data.
     */
    create: XOR<Log_baomingCreateInput, Log_baomingUncheckedCreateInput>
    /**
     * In case the Log_baoming was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Log_baomingUpdateInput, Log_baomingUncheckedUpdateInput>
  }


  /**
   * Log_baoming delete
   */
  export type Log_baomingDeleteArgs = {
    /**
     * Select specific fields to fetch from the Log_baoming
     */
    select?: Log_baomingSelect | null
    /**
     * Filter which Log_baoming to delete.
     */
    where: Log_baomingWhereUniqueInput
  }


  /**
   * Log_baoming deleteMany
   */
  export type Log_baomingDeleteManyArgs = {
    /**
     * Filter which Log_baomings to delete
     */
    where?: Log_baomingWhereInput
  }


  /**
   * Log_baoming without action
   */
  export type Log_baomingArgs = {
    /**
     * Select specific fields to fetch from the Log_baoming
     */
    select?: Log_baomingSelect | null
  }



  /**
   * Model Log_baoming_save
   */


  export type AggregateLog_baoming_save = {
    _count: Log_baoming_saveCountAggregateOutputType | null
    _avg: Log_baoming_saveAvgAggregateOutputType | null
    _sum: Log_baoming_saveSumAggregateOutputType | null
    _min: Log_baoming_saveMinAggregateOutputType | null
    _max: Log_baoming_saveMaxAggregateOutputType | null
  }

  export type Log_baoming_saveAvgAggregateOutputType = {
    id: number | null
    uid: number | null
    allc: number | null
    play: number | null
    win_all: number | null
    dizhu_num: number | null
    win_dizhu: number | null
    bm_score: number | null
    result: number | null
    is_send_win: number | null
  }

  export type Log_baoming_saveSumAggregateOutputType = {
    id: number | null
    uid: number | null
    allc: number | null
    play: number | null
    win_all: number | null
    dizhu_num: number | null
    win_dizhu: number | null
    bm_score: number | null
    result: number | null
    is_send_win: number | null
  }

  export type Log_baoming_saveMinAggregateOutputType = {
    id: number | null
    uid: number | null
    allc: number | null
    play: number | null
    win_all: number | null
    dizhu_num: number | null
    win_dizhu: number | null
    bm_score: number | null
    result: number | null
    result_res: string | null
    is_send_win: number | null
    create_time: string | null
    nick_name: string | null
    head_url: string | null
  }

  export type Log_baoming_saveMaxAggregateOutputType = {
    id: number | null
    uid: number | null
    allc: number | null
    play: number | null
    win_all: number | null
    dizhu_num: number | null
    win_dizhu: number | null
    bm_score: number | null
    result: number | null
    result_res: string | null
    is_send_win: number | null
    create_time: string | null
    nick_name: string | null
    head_url: string | null
  }

  export type Log_baoming_saveCountAggregateOutputType = {
    id: number
    uid: number
    allc: number
    play: number
    win_all: number
    dizhu_num: number
    win_dizhu: number
    bm_score: number
    result: number
    result_res: number
    is_send_win: number
    create_time: number
    nick_name: number
    head_url: number
    _all: number
  }


  export type Log_baoming_saveAvgAggregateInputType = {
    id?: true
    uid?: true
    allc?: true
    play?: true
    win_all?: true
    dizhu_num?: true
    win_dizhu?: true
    bm_score?: true
    result?: true
    is_send_win?: true
  }

  export type Log_baoming_saveSumAggregateInputType = {
    id?: true
    uid?: true
    allc?: true
    play?: true
    win_all?: true
    dizhu_num?: true
    win_dizhu?: true
    bm_score?: true
    result?: true
    is_send_win?: true
  }

  export type Log_baoming_saveMinAggregateInputType = {
    id?: true
    uid?: true
    allc?: true
    play?: true
    win_all?: true
    dizhu_num?: true
    win_dizhu?: true
    bm_score?: true
    result?: true
    result_res?: true
    is_send_win?: true
    create_time?: true
    nick_name?: true
    head_url?: true
  }

  export type Log_baoming_saveMaxAggregateInputType = {
    id?: true
    uid?: true
    allc?: true
    play?: true
    win_all?: true
    dizhu_num?: true
    win_dizhu?: true
    bm_score?: true
    result?: true
    result_res?: true
    is_send_win?: true
    create_time?: true
    nick_name?: true
    head_url?: true
  }

  export type Log_baoming_saveCountAggregateInputType = {
    id?: true
    uid?: true
    allc?: true
    play?: true
    win_all?: true
    dizhu_num?: true
    win_dizhu?: true
    bm_score?: true
    result?: true
    result_res?: true
    is_send_win?: true
    create_time?: true
    nick_name?: true
    head_url?: true
    _all?: true
  }

  export type Log_baoming_saveAggregateArgs = {
    /**
     * Filter which Log_baoming_save to aggregate.
     */
    where?: Log_baoming_saveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_baoming_saves to fetch.
     */
    orderBy?: Enumerable<Log_baoming_saveOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Log_baoming_saveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_baoming_saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_baoming_saves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Log_baoming_saves
    **/
    _count?: true | Log_baoming_saveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Log_baoming_saveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Log_baoming_saveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Log_baoming_saveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Log_baoming_saveMaxAggregateInputType
  }

  export type GetLog_baoming_saveAggregateType<T extends Log_baoming_saveAggregateArgs> = {
        [P in keyof T & keyof AggregateLog_baoming_save]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog_baoming_save[P]>
      : GetScalarType<T[P], AggregateLog_baoming_save[P]>
  }




  export type Log_baoming_saveGroupByArgs = {
    where?: Log_baoming_saveWhereInput
    orderBy?: Enumerable<Log_baoming_saveOrderByWithAggregationInput>
    by: Log_baoming_saveScalarFieldEnum[]
    having?: Log_baoming_saveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Log_baoming_saveCountAggregateInputType | true
    _avg?: Log_baoming_saveAvgAggregateInputType
    _sum?: Log_baoming_saveSumAggregateInputType
    _min?: Log_baoming_saveMinAggregateInputType
    _max?: Log_baoming_saveMaxAggregateInputType
  }


  export type Log_baoming_saveGroupByOutputType = {
    id: number
    uid: number
    allc: number
    play: number
    win_all: number
    dizhu_num: number
    win_dizhu: number
    bm_score: number
    result: number
    result_res: string
    is_send_win: number
    create_time: string
    nick_name: string
    head_url: string
    _count: Log_baoming_saveCountAggregateOutputType | null
    _avg: Log_baoming_saveAvgAggregateOutputType | null
    _sum: Log_baoming_saveSumAggregateOutputType | null
    _min: Log_baoming_saveMinAggregateOutputType | null
    _max: Log_baoming_saveMaxAggregateOutputType | null
  }

  type GetLog_baoming_saveGroupByPayload<T extends Log_baoming_saveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Log_baoming_saveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Log_baoming_saveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Log_baoming_saveGroupByOutputType[P]>
            : GetScalarType<T[P], Log_baoming_saveGroupByOutputType[P]>
        }
      >
    >


  export type Log_baoming_saveSelect = {
    id?: boolean
    uid?: boolean
    allc?: boolean
    play?: boolean
    win_all?: boolean
    dizhu_num?: boolean
    win_dizhu?: boolean
    bm_score?: boolean
    result?: boolean
    result_res?: boolean
    is_send_win?: boolean
    create_time?: boolean
    nick_name?: boolean
    head_url?: boolean
  }


  export type Log_baoming_saveGetPayload<S extends boolean | null | undefined | Log_baoming_saveArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Log_baoming_save :
    S extends undefined ? never :
    S extends { include: any } & (Log_baoming_saveArgs | Log_baoming_saveFindManyArgs)
    ? Log_baoming_save 
    : S extends { select: any } & (Log_baoming_saveArgs | Log_baoming_saveFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Log_baoming_save ? Log_baoming_save[P] : never
  } 
      : Log_baoming_save


  type Log_baoming_saveCountArgs = 
    Omit<Log_baoming_saveFindManyArgs, 'select' | 'include'> & {
      select?: Log_baoming_saveCountAggregateInputType | true
    }

  export interface Log_baoming_saveDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Log_baoming_save that matches the filter.
     * @param {Log_baoming_saveFindUniqueArgs} args - Arguments to find a Log_baoming_save
     * @example
     * // Get one Log_baoming_save
     * const log_baoming_save = await prisma.log_baoming_save.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Log_baoming_saveFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Log_baoming_saveFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Log_baoming_save'> extends True ? Prisma__Log_baoming_saveClient<Log_baoming_saveGetPayload<T>> : Prisma__Log_baoming_saveClient<Log_baoming_saveGetPayload<T> | null, null>

    /**
     * Find one Log_baoming_save that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Log_baoming_saveFindUniqueOrThrowArgs} args - Arguments to find a Log_baoming_save
     * @example
     * // Get one Log_baoming_save
     * const log_baoming_save = await prisma.log_baoming_save.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Log_baoming_saveFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Log_baoming_saveFindUniqueOrThrowArgs>
    ): Prisma__Log_baoming_saveClient<Log_baoming_saveGetPayload<T>>

    /**
     * Find the first Log_baoming_save that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_baoming_saveFindFirstArgs} args - Arguments to find a Log_baoming_save
     * @example
     * // Get one Log_baoming_save
     * const log_baoming_save = await prisma.log_baoming_save.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Log_baoming_saveFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Log_baoming_saveFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Log_baoming_save'> extends True ? Prisma__Log_baoming_saveClient<Log_baoming_saveGetPayload<T>> : Prisma__Log_baoming_saveClient<Log_baoming_saveGetPayload<T> | null, null>

    /**
     * Find the first Log_baoming_save that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_baoming_saveFindFirstOrThrowArgs} args - Arguments to find a Log_baoming_save
     * @example
     * // Get one Log_baoming_save
     * const log_baoming_save = await prisma.log_baoming_save.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Log_baoming_saveFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Log_baoming_saveFindFirstOrThrowArgs>
    ): Prisma__Log_baoming_saveClient<Log_baoming_saveGetPayload<T>>

    /**
     * Find zero or more Log_baoming_saves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_baoming_saveFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Log_baoming_saves
     * const log_baoming_saves = await prisma.log_baoming_save.findMany()
     * 
     * // Get first 10 Log_baoming_saves
     * const log_baoming_saves = await prisma.log_baoming_save.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const log_baoming_saveWithIdOnly = await prisma.log_baoming_save.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Log_baoming_saveFindManyArgs>(
      args?: SelectSubset<T, Log_baoming_saveFindManyArgs>
    ): Prisma.PrismaPromise<Array<Log_baoming_saveGetPayload<T>>>

    /**
     * Create a Log_baoming_save.
     * @param {Log_baoming_saveCreateArgs} args - Arguments to create a Log_baoming_save.
     * @example
     * // Create one Log_baoming_save
     * const Log_baoming_save = await prisma.log_baoming_save.create({
     *   data: {
     *     // ... data to create a Log_baoming_save
     *   }
     * })
     * 
    **/
    create<T extends Log_baoming_saveCreateArgs>(
      args: SelectSubset<T, Log_baoming_saveCreateArgs>
    ): Prisma__Log_baoming_saveClient<Log_baoming_saveGetPayload<T>>

    /**
     * Create many Log_baoming_saves.
     *     @param {Log_baoming_saveCreateManyArgs} args - Arguments to create many Log_baoming_saves.
     *     @example
     *     // Create many Log_baoming_saves
     *     const log_baoming_save = await prisma.log_baoming_save.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Log_baoming_saveCreateManyArgs>(
      args?: SelectSubset<T, Log_baoming_saveCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log_baoming_save.
     * @param {Log_baoming_saveDeleteArgs} args - Arguments to delete one Log_baoming_save.
     * @example
     * // Delete one Log_baoming_save
     * const Log_baoming_save = await prisma.log_baoming_save.delete({
     *   where: {
     *     // ... filter to delete one Log_baoming_save
     *   }
     * })
     * 
    **/
    delete<T extends Log_baoming_saveDeleteArgs>(
      args: SelectSubset<T, Log_baoming_saveDeleteArgs>
    ): Prisma__Log_baoming_saveClient<Log_baoming_saveGetPayload<T>>

    /**
     * Update one Log_baoming_save.
     * @param {Log_baoming_saveUpdateArgs} args - Arguments to update one Log_baoming_save.
     * @example
     * // Update one Log_baoming_save
     * const log_baoming_save = await prisma.log_baoming_save.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Log_baoming_saveUpdateArgs>(
      args: SelectSubset<T, Log_baoming_saveUpdateArgs>
    ): Prisma__Log_baoming_saveClient<Log_baoming_saveGetPayload<T>>

    /**
     * Delete zero or more Log_baoming_saves.
     * @param {Log_baoming_saveDeleteManyArgs} args - Arguments to filter Log_baoming_saves to delete.
     * @example
     * // Delete a few Log_baoming_saves
     * const { count } = await prisma.log_baoming_save.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Log_baoming_saveDeleteManyArgs>(
      args?: SelectSubset<T, Log_baoming_saveDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_baoming_saves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_baoming_saveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Log_baoming_saves
     * const log_baoming_save = await prisma.log_baoming_save.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Log_baoming_saveUpdateManyArgs>(
      args: SelectSubset<T, Log_baoming_saveUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log_baoming_save.
     * @param {Log_baoming_saveUpsertArgs} args - Arguments to update or create a Log_baoming_save.
     * @example
     * // Update or create a Log_baoming_save
     * const log_baoming_save = await prisma.log_baoming_save.upsert({
     *   create: {
     *     // ... data to create a Log_baoming_save
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log_baoming_save we want to update
     *   }
     * })
    **/
    upsert<T extends Log_baoming_saveUpsertArgs>(
      args: SelectSubset<T, Log_baoming_saveUpsertArgs>
    ): Prisma__Log_baoming_saveClient<Log_baoming_saveGetPayload<T>>

    /**
     * Count the number of Log_baoming_saves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_baoming_saveCountArgs} args - Arguments to filter Log_baoming_saves to count.
     * @example
     * // Count the number of Log_baoming_saves
     * const count = await prisma.log_baoming_save.count({
     *   where: {
     *     // ... the filter for the Log_baoming_saves we want to count
     *   }
     * })
    **/
    count<T extends Log_baoming_saveCountArgs>(
      args?: Subset<T, Log_baoming_saveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Log_baoming_saveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log_baoming_save.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_baoming_saveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Log_baoming_saveAggregateArgs>(args: Subset<T, Log_baoming_saveAggregateArgs>): Prisma.PrismaPromise<GetLog_baoming_saveAggregateType<T>>

    /**
     * Group by Log_baoming_save.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_baoming_saveGroupByArgs} args - Group by arguments.
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
      T extends Log_baoming_saveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Log_baoming_saveGroupByArgs['orderBy'] }
        : { orderBy?: Log_baoming_saveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Log_baoming_saveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLog_baoming_saveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Log_baoming_save.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Log_baoming_saveClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Log_baoming_save base type for findUnique actions
   */
  export type Log_baoming_saveFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Log_baoming_save
     */
    select?: Log_baoming_saveSelect | null
    /**
     * Filter, which Log_baoming_save to fetch.
     */
    where: Log_baoming_saveWhereUniqueInput
  }

  /**
   * Log_baoming_save findUnique
   */
  export interface Log_baoming_saveFindUniqueArgs extends Log_baoming_saveFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Log_baoming_save findUniqueOrThrow
   */
  export type Log_baoming_saveFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Log_baoming_save
     */
    select?: Log_baoming_saveSelect | null
    /**
     * Filter, which Log_baoming_save to fetch.
     */
    where: Log_baoming_saveWhereUniqueInput
  }


  /**
   * Log_baoming_save base type for findFirst actions
   */
  export type Log_baoming_saveFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Log_baoming_save
     */
    select?: Log_baoming_saveSelect | null
    /**
     * Filter, which Log_baoming_save to fetch.
     */
    where?: Log_baoming_saveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_baoming_saves to fetch.
     */
    orderBy?: Enumerable<Log_baoming_saveOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Log_baoming_saves.
     */
    cursor?: Log_baoming_saveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_baoming_saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_baoming_saves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Log_baoming_saves.
     */
    distinct?: Enumerable<Log_baoming_saveScalarFieldEnum>
  }

  /**
   * Log_baoming_save findFirst
   */
  export interface Log_baoming_saveFindFirstArgs extends Log_baoming_saveFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Log_baoming_save findFirstOrThrow
   */
  export type Log_baoming_saveFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Log_baoming_save
     */
    select?: Log_baoming_saveSelect | null
    /**
     * Filter, which Log_baoming_save to fetch.
     */
    where?: Log_baoming_saveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_baoming_saves to fetch.
     */
    orderBy?: Enumerable<Log_baoming_saveOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Log_baoming_saves.
     */
    cursor?: Log_baoming_saveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_baoming_saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_baoming_saves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Log_baoming_saves.
     */
    distinct?: Enumerable<Log_baoming_saveScalarFieldEnum>
  }


  /**
   * Log_baoming_save findMany
   */
  export type Log_baoming_saveFindManyArgs = {
    /**
     * Select specific fields to fetch from the Log_baoming_save
     */
    select?: Log_baoming_saveSelect | null
    /**
     * Filter, which Log_baoming_saves to fetch.
     */
    where?: Log_baoming_saveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_baoming_saves to fetch.
     */
    orderBy?: Enumerable<Log_baoming_saveOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Log_baoming_saves.
     */
    cursor?: Log_baoming_saveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_baoming_saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_baoming_saves.
     */
    skip?: number
    distinct?: Enumerable<Log_baoming_saveScalarFieldEnum>
  }


  /**
   * Log_baoming_save create
   */
  export type Log_baoming_saveCreateArgs = {
    /**
     * Select specific fields to fetch from the Log_baoming_save
     */
    select?: Log_baoming_saveSelect | null
    /**
     * The data needed to create a Log_baoming_save.
     */
    data: XOR<Log_baoming_saveCreateInput, Log_baoming_saveUncheckedCreateInput>
  }


  /**
   * Log_baoming_save createMany
   */
  export type Log_baoming_saveCreateManyArgs = {
    /**
     * The data used to create many Log_baoming_saves.
     */
    data: Enumerable<Log_baoming_saveCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Log_baoming_save update
   */
  export type Log_baoming_saveUpdateArgs = {
    /**
     * Select specific fields to fetch from the Log_baoming_save
     */
    select?: Log_baoming_saveSelect | null
    /**
     * The data needed to update a Log_baoming_save.
     */
    data: XOR<Log_baoming_saveUpdateInput, Log_baoming_saveUncheckedUpdateInput>
    /**
     * Choose, which Log_baoming_save to update.
     */
    where: Log_baoming_saveWhereUniqueInput
  }


  /**
   * Log_baoming_save updateMany
   */
  export type Log_baoming_saveUpdateManyArgs = {
    /**
     * The data used to update Log_baoming_saves.
     */
    data: XOR<Log_baoming_saveUpdateManyMutationInput, Log_baoming_saveUncheckedUpdateManyInput>
    /**
     * Filter which Log_baoming_saves to update
     */
    where?: Log_baoming_saveWhereInput
  }


  /**
   * Log_baoming_save upsert
   */
  export type Log_baoming_saveUpsertArgs = {
    /**
     * Select specific fields to fetch from the Log_baoming_save
     */
    select?: Log_baoming_saveSelect | null
    /**
     * The filter to search for the Log_baoming_save to update in case it exists.
     */
    where: Log_baoming_saveWhereUniqueInput
    /**
     * In case the Log_baoming_save found by the `where` argument doesn't exist, create a new Log_baoming_save with this data.
     */
    create: XOR<Log_baoming_saveCreateInput, Log_baoming_saveUncheckedCreateInput>
    /**
     * In case the Log_baoming_save was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Log_baoming_saveUpdateInput, Log_baoming_saveUncheckedUpdateInput>
  }


  /**
   * Log_baoming_save delete
   */
  export type Log_baoming_saveDeleteArgs = {
    /**
     * Select specific fields to fetch from the Log_baoming_save
     */
    select?: Log_baoming_saveSelect | null
    /**
     * Filter which Log_baoming_save to delete.
     */
    where: Log_baoming_saveWhereUniqueInput
  }


  /**
   * Log_baoming_save deleteMany
   */
  export type Log_baoming_saveDeleteManyArgs = {
    /**
     * Filter which Log_baoming_saves to delete
     */
    where?: Log_baoming_saveWhereInput
  }


  /**
   * Log_baoming_save without action
   */
  export type Log_baoming_saveArgs = {
    /**
     * Select specific fields to fetch from the Log_baoming_save
     */
    select?: Log_baoming_saveSelect | null
  }



  /**
   * Model Log_temp
   */


  export type AggregateLog_temp = {
    _count: Log_tempCountAggregateOutputType | null
    _avg: Log_tempAvgAggregateOutputType | null
    _sum: Log_tempSumAggregateOutputType | null
    _min: Log_tempMinAggregateOutputType | null
    _max: Log_tempMaxAggregateOutputType | null
  }

  export type Log_tempAvgAggregateOutputType = {
    id: number | null
    uid: number | null
    isdizhu: number | null
    iswin: number | null
  }

  export type Log_tempSumAggregateOutputType = {
    id: number | null
    uid: number | null
    isdizhu: number | null
    iswin: number | null
  }

  export type Log_tempMinAggregateOutputType = {
    id: number | null
    uid: number | null
    nick_name: string | null
    head_url: string | null
    createtime: string | null
    isdizhu: number | null
    iswin: number | null
    game_dict: string | null
  }

  export type Log_tempMaxAggregateOutputType = {
    id: number | null
    uid: number | null
    nick_name: string | null
    head_url: string | null
    createtime: string | null
    isdizhu: number | null
    iswin: number | null
    game_dict: string | null
  }

  export type Log_tempCountAggregateOutputType = {
    id: number
    uid: number
    nick_name: number
    head_url: number
    createtime: number
    isdizhu: number
    iswin: number
    game_dict: number
    _all: number
  }


  export type Log_tempAvgAggregateInputType = {
    id?: true
    uid?: true
    isdizhu?: true
    iswin?: true
  }

  export type Log_tempSumAggregateInputType = {
    id?: true
    uid?: true
    isdizhu?: true
    iswin?: true
  }

  export type Log_tempMinAggregateInputType = {
    id?: true
    uid?: true
    nick_name?: true
    head_url?: true
    createtime?: true
    isdizhu?: true
    iswin?: true
    game_dict?: true
  }

  export type Log_tempMaxAggregateInputType = {
    id?: true
    uid?: true
    nick_name?: true
    head_url?: true
    createtime?: true
    isdizhu?: true
    iswin?: true
    game_dict?: true
  }

  export type Log_tempCountAggregateInputType = {
    id?: true
    uid?: true
    nick_name?: true
    head_url?: true
    createtime?: true
    isdizhu?: true
    iswin?: true
    game_dict?: true
    _all?: true
  }

  export type Log_tempAggregateArgs = {
    /**
     * Filter which Log_temp to aggregate.
     */
    where?: Log_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_temps to fetch.
     */
    orderBy?: Enumerable<Log_tempOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Log_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Log_temps
    **/
    _count?: true | Log_tempCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Log_tempAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Log_tempSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Log_tempMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Log_tempMaxAggregateInputType
  }

  export type GetLog_tempAggregateType<T extends Log_tempAggregateArgs> = {
        [P in keyof T & keyof AggregateLog_temp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog_temp[P]>
      : GetScalarType<T[P], AggregateLog_temp[P]>
  }




  export type Log_tempGroupByArgs = {
    where?: Log_tempWhereInput
    orderBy?: Enumerable<Log_tempOrderByWithAggregationInput>
    by: Log_tempScalarFieldEnum[]
    having?: Log_tempScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Log_tempCountAggregateInputType | true
    _avg?: Log_tempAvgAggregateInputType
    _sum?: Log_tempSumAggregateInputType
    _min?: Log_tempMinAggregateInputType
    _max?: Log_tempMaxAggregateInputType
  }


  export type Log_tempGroupByOutputType = {
    id: number
    uid: number
    nick_name: string
    head_url: string
    createtime: string
    isdizhu: number
    iswin: number
    game_dict: string
    _count: Log_tempCountAggregateOutputType | null
    _avg: Log_tempAvgAggregateOutputType | null
    _sum: Log_tempSumAggregateOutputType | null
    _min: Log_tempMinAggregateOutputType | null
    _max: Log_tempMaxAggregateOutputType | null
  }

  type GetLog_tempGroupByPayload<T extends Log_tempGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Log_tempGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Log_tempGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Log_tempGroupByOutputType[P]>
            : GetScalarType<T[P], Log_tempGroupByOutputType[P]>
        }
      >
    >


  export type Log_tempSelect = {
    id?: boolean
    uid?: boolean
    nick_name?: boolean
    head_url?: boolean
    createtime?: boolean
    isdizhu?: boolean
    iswin?: boolean
    game_dict?: boolean
  }


  export type Log_tempGetPayload<S extends boolean | null | undefined | Log_tempArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Log_temp :
    S extends undefined ? never :
    S extends { include: any } & (Log_tempArgs | Log_tempFindManyArgs)
    ? Log_temp 
    : S extends { select: any } & (Log_tempArgs | Log_tempFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Log_temp ? Log_temp[P] : never
  } 
      : Log_temp


  type Log_tempCountArgs = 
    Omit<Log_tempFindManyArgs, 'select' | 'include'> & {
      select?: Log_tempCountAggregateInputType | true
    }

  export interface Log_tempDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Log_temp that matches the filter.
     * @param {Log_tempFindUniqueArgs} args - Arguments to find a Log_temp
     * @example
     * // Get one Log_temp
     * const log_temp = await prisma.log_temp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Log_tempFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Log_tempFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Log_temp'> extends True ? Prisma__Log_tempClient<Log_tempGetPayload<T>> : Prisma__Log_tempClient<Log_tempGetPayload<T> | null, null>

    /**
     * Find one Log_temp that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Log_tempFindUniqueOrThrowArgs} args - Arguments to find a Log_temp
     * @example
     * // Get one Log_temp
     * const log_temp = await prisma.log_temp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Log_tempFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Log_tempFindUniqueOrThrowArgs>
    ): Prisma__Log_tempClient<Log_tempGetPayload<T>>

    /**
     * Find the first Log_temp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_tempFindFirstArgs} args - Arguments to find a Log_temp
     * @example
     * // Get one Log_temp
     * const log_temp = await prisma.log_temp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Log_tempFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Log_tempFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Log_temp'> extends True ? Prisma__Log_tempClient<Log_tempGetPayload<T>> : Prisma__Log_tempClient<Log_tempGetPayload<T> | null, null>

    /**
     * Find the first Log_temp that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_tempFindFirstOrThrowArgs} args - Arguments to find a Log_temp
     * @example
     * // Get one Log_temp
     * const log_temp = await prisma.log_temp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Log_tempFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Log_tempFindFirstOrThrowArgs>
    ): Prisma__Log_tempClient<Log_tempGetPayload<T>>

    /**
     * Find zero or more Log_temps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_tempFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Log_temps
     * const log_temps = await prisma.log_temp.findMany()
     * 
     * // Get first 10 Log_temps
     * const log_temps = await prisma.log_temp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const log_tempWithIdOnly = await prisma.log_temp.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Log_tempFindManyArgs>(
      args?: SelectSubset<T, Log_tempFindManyArgs>
    ): Prisma.PrismaPromise<Array<Log_tempGetPayload<T>>>

    /**
     * Create a Log_temp.
     * @param {Log_tempCreateArgs} args - Arguments to create a Log_temp.
     * @example
     * // Create one Log_temp
     * const Log_temp = await prisma.log_temp.create({
     *   data: {
     *     // ... data to create a Log_temp
     *   }
     * })
     * 
    **/
    create<T extends Log_tempCreateArgs>(
      args: SelectSubset<T, Log_tempCreateArgs>
    ): Prisma__Log_tempClient<Log_tempGetPayload<T>>

    /**
     * Create many Log_temps.
     *     @param {Log_tempCreateManyArgs} args - Arguments to create many Log_temps.
     *     @example
     *     // Create many Log_temps
     *     const log_temp = await prisma.log_temp.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Log_tempCreateManyArgs>(
      args?: SelectSubset<T, Log_tempCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log_temp.
     * @param {Log_tempDeleteArgs} args - Arguments to delete one Log_temp.
     * @example
     * // Delete one Log_temp
     * const Log_temp = await prisma.log_temp.delete({
     *   where: {
     *     // ... filter to delete one Log_temp
     *   }
     * })
     * 
    **/
    delete<T extends Log_tempDeleteArgs>(
      args: SelectSubset<T, Log_tempDeleteArgs>
    ): Prisma__Log_tempClient<Log_tempGetPayload<T>>

    /**
     * Update one Log_temp.
     * @param {Log_tempUpdateArgs} args - Arguments to update one Log_temp.
     * @example
     * // Update one Log_temp
     * const log_temp = await prisma.log_temp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Log_tempUpdateArgs>(
      args: SelectSubset<T, Log_tempUpdateArgs>
    ): Prisma__Log_tempClient<Log_tempGetPayload<T>>

    /**
     * Delete zero or more Log_temps.
     * @param {Log_tempDeleteManyArgs} args - Arguments to filter Log_temps to delete.
     * @example
     * // Delete a few Log_temps
     * const { count } = await prisma.log_temp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Log_tempDeleteManyArgs>(
      args?: SelectSubset<T, Log_tempDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_temps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_tempUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Log_temps
     * const log_temp = await prisma.log_temp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Log_tempUpdateManyArgs>(
      args: SelectSubset<T, Log_tempUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log_temp.
     * @param {Log_tempUpsertArgs} args - Arguments to update or create a Log_temp.
     * @example
     * // Update or create a Log_temp
     * const log_temp = await prisma.log_temp.upsert({
     *   create: {
     *     // ... data to create a Log_temp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log_temp we want to update
     *   }
     * })
    **/
    upsert<T extends Log_tempUpsertArgs>(
      args: SelectSubset<T, Log_tempUpsertArgs>
    ): Prisma__Log_tempClient<Log_tempGetPayload<T>>

    /**
     * Count the number of Log_temps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_tempCountArgs} args - Arguments to filter Log_temps to count.
     * @example
     * // Count the number of Log_temps
     * const count = await prisma.log_temp.count({
     *   where: {
     *     // ... the filter for the Log_temps we want to count
     *   }
     * })
    **/
    count<T extends Log_tempCountArgs>(
      args?: Subset<T, Log_tempCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Log_tempCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log_temp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_tempAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Log_tempAggregateArgs>(args: Subset<T, Log_tempAggregateArgs>): Prisma.PrismaPromise<GetLog_tempAggregateType<T>>

    /**
     * Group by Log_temp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_tempGroupByArgs} args - Group by arguments.
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
      T extends Log_tempGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Log_tempGroupByArgs['orderBy'] }
        : { orderBy?: Log_tempGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Log_tempGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLog_tempGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Log_temp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Log_tempClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Log_temp base type for findUnique actions
   */
  export type Log_tempFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Log_temp
     */
    select?: Log_tempSelect | null
    /**
     * Filter, which Log_temp to fetch.
     */
    where: Log_tempWhereUniqueInput
  }

  /**
   * Log_temp findUnique
   */
  export interface Log_tempFindUniqueArgs extends Log_tempFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Log_temp findUniqueOrThrow
   */
  export type Log_tempFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Log_temp
     */
    select?: Log_tempSelect | null
    /**
     * Filter, which Log_temp to fetch.
     */
    where: Log_tempWhereUniqueInput
  }


  /**
   * Log_temp base type for findFirst actions
   */
  export type Log_tempFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Log_temp
     */
    select?: Log_tempSelect | null
    /**
     * Filter, which Log_temp to fetch.
     */
    where?: Log_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_temps to fetch.
     */
    orderBy?: Enumerable<Log_tempOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Log_temps.
     */
    cursor?: Log_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Log_temps.
     */
    distinct?: Enumerable<Log_tempScalarFieldEnum>
  }

  /**
   * Log_temp findFirst
   */
  export interface Log_tempFindFirstArgs extends Log_tempFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Log_temp findFirstOrThrow
   */
  export type Log_tempFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Log_temp
     */
    select?: Log_tempSelect | null
    /**
     * Filter, which Log_temp to fetch.
     */
    where?: Log_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_temps to fetch.
     */
    orderBy?: Enumerable<Log_tempOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Log_temps.
     */
    cursor?: Log_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Log_temps.
     */
    distinct?: Enumerable<Log_tempScalarFieldEnum>
  }


  /**
   * Log_temp findMany
   */
  export type Log_tempFindManyArgs = {
    /**
     * Select specific fields to fetch from the Log_temp
     */
    select?: Log_tempSelect | null
    /**
     * Filter, which Log_temps to fetch.
     */
    where?: Log_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_temps to fetch.
     */
    orderBy?: Enumerable<Log_tempOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Log_temps.
     */
    cursor?: Log_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_temps.
     */
    skip?: number
    distinct?: Enumerable<Log_tempScalarFieldEnum>
  }


  /**
   * Log_temp create
   */
  export type Log_tempCreateArgs = {
    /**
     * Select specific fields to fetch from the Log_temp
     */
    select?: Log_tempSelect | null
    /**
     * The data needed to create a Log_temp.
     */
    data: XOR<Log_tempCreateInput, Log_tempUncheckedCreateInput>
  }


  /**
   * Log_temp createMany
   */
  export type Log_tempCreateManyArgs = {
    /**
     * The data used to create many Log_temps.
     */
    data: Enumerable<Log_tempCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Log_temp update
   */
  export type Log_tempUpdateArgs = {
    /**
     * Select specific fields to fetch from the Log_temp
     */
    select?: Log_tempSelect | null
    /**
     * The data needed to update a Log_temp.
     */
    data: XOR<Log_tempUpdateInput, Log_tempUncheckedUpdateInput>
    /**
     * Choose, which Log_temp to update.
     */
    where: Log_tempWhereUniqueInput
  }


  /**
   * Log_temp updateMany
   */
  export type Log_tempUpdateManyArgs = {
    /**
     * The data used to update Log_temps.
     */
    data: XOR<Log_tempUpdateManyMutationInput, Log_tempUncheckedUpdateManyInput>
    /**
     * Filter which Log_temps to update
     */
    where?: Log_tempWhereInput
  }


  /**
   * Log_temp upsert
   */
  export type Log_tempUpsertArgs = {
    /**
     * Select specific fields to fetch from the Log_temp
     */
    select?: Log_tempSelect | null
    /**
     * The filter to search for the Log_temp to update in case it exists.
     */
    where: Log_tempWhereUniqueInput
    /**
     * In case the Log_temp found by the `where` argument doesn't exist, create a new Log_temp with this data.
     */
    create: XOR<Log_tempCreateInput, Log_tempUncheckedCreateInput>
    /**
     * In case the Log_temp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Log_tempUpdateInput, Log_tempUncheckedUpdateInput>
  }


  /**
   * Log_temp delete
   */
  export type Log_tempDeleteArgs = {
    /**
     * Select specific fields to fetch from the Log_temp
     */
    select?: Log_tempSelect | null
    /**
     * Filter which Log_temp to delete.
     */
    where: Log_tempWhereUniqueInput
  }


  /**
   * Log_temp deleteMany
   */
  export type Log_tempDeleteManyArgs = {
    /**
     * Filter which Log_temps to delete
     */
    where?: Log_tempWhereInput
  }


  /**
   * Log_temp without action
   */
  export type Log_tempArgs = {
    /**
     * Select specific fields to fetch from the Log_temp
     */
    select?: Log_tempSelect | null
  }



  /**
   * Model Log_total
   */


  export type AggregateLog_total = {
    _count: Log_totalCountAggregateOutputType | null
    _avg: Log_totalAvgAggregateOutputType | null
    _sum: Log_totalSumAggregateOutputType | null
    _min: Log_totalMinAggregateOutputType | null
    _max: Log_totalMaxAggregateOutputType | null
  }

  export type Log_totalAvgAggregateOutputType = {
    id: number | null
    uid: number | null
    play: number | null
    win_all: number | null
    dizhu_num: number | null
    win_dizhu: number | null
    bm_score: number | null
  }

  export type Log_totalSumAggregateOutputType = {
    id: number | null
    uid: number | null
    play: number | null
    win_all: number | null
    dizhu_num: number | null
    win_dizhu: number | null
    bm_score: number | null
  }

  export type Log_totalMinAggregateOutputType = {
    id: number | null
    uid: number | null
    play: number | null
    win_all: number | null
    dizhu_num: number | null
    win_dizhu: number | null
    bm_score: number | null
  }

  export type Log_totalMaxAggregateOutputType = {
    id: number | null
    uid: number | null
    play: number | null
    win_all: number | null
    dizhu_num: number | null
    win_dizhu: number | null
    bm_score: number | null
  }

  export type Log_totalCountAggregateOutputType = {
    id: number
    uid: number
    play: number
    win_all: number
    dizhu_num: number
    win_dizhu: number
    bm_score: number
    _all: number
  }


  export type Log_totalAvgAggregateInputType = {
    id?: true
    uid?: true
    play?: true
    win_all?: true
    dizhu_num?: true
    win_dizhu?: true
    bm_score?: true
  }

  export type Log_totalSumAggregateInputType = {
    id?: true
    uid?: true
    play?: true
    win_all?: true
    dizhu_num?: true
    win_dizhu?: true
    bm_score?: true
  }

  export type Log_totalMinAggregateInputType = {
    id?: true
    uid?: true
    play?: true
    win_all?: true
    dizhu_num?: true
    win_dizhu?: true
    bm_score?: true
  }

  export type Log_totalMaxAggregateInputType = {
    id?: true
    uid?: true
    play?: true
    win_all?: true
    dizhu_num?: true
    win_dizhu?: true
    bm_score?: true
  }

  export type Log_totalCountAggregateInputType = {
    id?: true
    uid?: true
    play?: true
    win_all?: true
    dizhu_num?: true
    win_dizhu?: true
    bm_score?: true
    _all?: true
  }

  export type Log_totalAggregateArgs = {
    /**
     * Filter which Log_total to aggregate.
     */
    where?: Log_totalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_totals to fetch.
     */
    orderBy?: Enumerable<Log_totalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Log_totalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_totals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_totals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Log_totals
    **/
    _count?: true | Log_totalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Log_totalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Log_totalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Log_totalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Log_totalMaxAggregateInputType
  }

  export type GetLog_totalAggregateType<T extends Log_totalAggregateArgs> = {
        [P in keyof T & keyof AggregateLog_total]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog_total[P]>
      : GetScalarType<T[P], AggregateLog_total[P]>
  }




  export type Log_totalGroupByArgs = {
    where?: Log_totalWhereInput
    orderBy?: Enumerable<Log_totalOrderByWithAggregationInput>
    by: Log_totalScalarFieldEnum[]
    having?: Log_totalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Log_totalCountAggregateInputType | true
    _avg?: Log_totalAvgAggregateInputType
    _sum?: Log_totalSumAggregateInputType
    _min?: Log_totalMinAggregateInputType
    _max?: Log_totalMaxAggregateInputType
  }


  export type Log_totalGroupByOutputType = {
    id: number
    uid: number
    play: number
    win_all: number
    dizhu_num: number
    win_dizhu: number
    bm_score: number
    _count: Log_totalCountAggregateOutputType | null
    _avg: Log_totalAvgAggregateOutputType | null
    _sum: Log_totalSumAggregateOutputType | null
    _min: Log_totalMinAggregateOutputType | null
    _max: Log_totalMaxAggregateOutputType | null
  }

  type GetLog_totalGroupByPayload<T extends Log_totalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Log_totalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Log_totalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Log_totalGroupByOutputType[P]>
            : GetScalarType<T[P], Log_totalGroupByOutputType[P]>
        }
      >
    >


  export type Log_totalSelect = {
    id?: boolean
    uid?: boolean
    play?: boolean
    win_all?: boolean
    dizhu_num?: boolean
    win_dizhu?: boolean
    bm_score?: boolean
  }


  export type Log_totalGetPayload<S extends boolean | null | undefined | Log_totalArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Log_total :
    S extends undefined ? never :
    S extends { include: any } & (Log_totalArgs | Log_totalFindManyArgs)
    ? Log_total 
    : S extends { select: any } & (Log_totalArgs | Log_totalFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Log_total ? Log_total[P] : never
  } 
      : Log_total


  type Log_totalCountArgs = 
    Omit<Log_totalFindManyArgs, 'select' | 'include'> & {
      select?: Log_totalCountAggregateInputType | true
    }

  export interface Log_totalDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Log_total that matches the filter.
     * @param {Log_totalFindUniqueArgs} args - Arguments to find a Log_total
     * @example
     * // Get one Log_total
     * const log_total = await prisma.log_total.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Log_totalFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Log_totalFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Log_total'> extends True ? Prisma__Log_totalClient<Log_totalGetPayload<T>> : Prisma__Log_totalClient<Log_totalGetPayload<T> | null, null>

    /**
     * Find one Log_total that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Log_totalFindUniqueOrThrowArgs} args - Arguments to find a Log_total
     * @example
     * // Get one Log_total
     * const log_total = await prisma.log_total.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Log_totalFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Log_totalFindUniqueOrThrowArgs>
    ): Prisma__Log_totalClient<Log_totalGetPayload<T>>

    /**
     * Find the first Log_total that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_totalFindFirstArgs} args - Arguments to find a Log_total
     * @example
     * // Get one Log_total
     * const log_total = await prisma.log_total.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Log_totalFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Log_totalFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Log_total'> extends True ? Prisma__Log_totalClient<Log_totalGetPayload<T>> : Prisma__Log_totalClient<Log_totalGetPayload<T> | null, null>

    /**
     * Find the first Log_total that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_totalFindFirstOrThrowArgs} args - Arguments to find a Log_total
     * @example
     * // Get one Log_total
     * const log_total = await prisma.log_total.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Log_totalFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Log_totalFindFirstOrThrowArgs>
    ): Prisma__Log_totalClient<Log_totalGetPayload<T>>

    /**
     * Find zero or more Log_totals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_totalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Log_totals
     * const log_totals = await prisma.log_total.findMany()
     * 
     * // Get first 10 Log_totals
     * const log_totals = await prisma.log_total.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const log_totalWithIdOnly = await prisma.log_total.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Log_totalFindManyArgs>(
      args?: SelectSubset<T, Log_totalFindManyArgs>
    ): Prisma.PrismaPromise<Array<Log_totalGetPayload<T>>>

    /**
     * Create a Log_total.
     * @param {Log_totalCreateArgs} args - Arguments to create a Log_total.
     * @example
     * // Create one Log_total
     * const Log_total = await prisma.log_total.create({
     *   data: {
     *     // ... data to create a Log_total
     *   }
     * })
     * 
    **/
    create<T extends Log_totalCreateArgs>(
      args: SelectSubset<T, Log_totalCreateArgs>
    ): Prisma__Log_totalClient<Log_totalGetPayload<T>>

    /**
     * Create many Log_totals.
     *     @param {Log_totalCreateManyArgs} args - Arguments to create many Log_totals.
     *     @example
     *     // Create many Log_totals
     *     const log_total = await prisma.log_total.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Log_totalCreateManyArgs>(
      args?: SelectSubset<T, Log_totalCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log_total.
     * @param {Log_totalDeleteArgs} args - Arguments to delete one Log_total.
     * @example
     * // Delete one Log_total
     * const Log_total = await prisma.log_total.delete({
     *   where: {
     *     // ... filter to delete one Log_total
     *   }
     * })
     * 
    **/
    delete<T extends Log_totalDeleteArgs>(
      args: SelectSubset<T, Log_totalDeleteArgs>
    ): Prisma__Log_totalClient<Log_totalGetPayload<T>>

    /**
     * Update one Log_total.
     * @param {Log_totalUpdateArgs} args - Arguments to update one Log_total.
     * @example
     * // Update one Log_total
     * const log_total = await prisma.log_total.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Log_totalUpdateArgs>(
      args: SelectSubset<T, Log_totalUpdateArgs>
    ): Prisma__Log_totalClient<Log_totalGetPayload<T>>

    /**
     * Delete zero or more Log_totals.
     * @param {Log_totalDeleteManyArgs} args - Arguments to filter Log_totals to delete.
     * @example
     * // Delete a few Log_totals
     * const { count } = await prisma.log_total.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Log_totalDeleteManyArgs>(
      args?: SelectSubset<T, Log_totalDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_totals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_totalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Log_totals
     * const log_total = await prisma.log_total.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Log_totalUpdateManyArgs>(
      args: SelectSubset<T, Log_totalUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log_total.
     * @param {Log_totalUpsertArgs} args - Arguments to update or create a Log_total.
     * @example
     * // Update or create a Log_total
     * const log_total = await prisma.log_total.upsert({
     *   create: {
     *     // ... data to create a Log_total
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log_total we want to update
     *   }
     * })
    **/
    upsert<T extends Log_totalUpsertArgs>(
      args: SelectSubset<T, Log_totalUpsertArgs>
    ): Prisma__Log_totalClient<Log_totalGetPayload<T>>

    /**
     * Count the number of Log_totals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_totalCountArgs} args - Arguments to filter Log_totals to count.
     * @example
     * // Count the number of Log_totals
     * const count = await prisma.log_total.count({
     *   where: {
     *     // ... the filter for the Log_totals we want to count
     *   }
     * })
    **/
    count<T extends Log_totalCountArgs>(
      args?: Subset<T, Log_totalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Log_totalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log_total.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_totalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Log_totalAggregateArgs>(args: Subset<T, Log_totalAggregateArgs>): Prisma.PrismaPromise<GetLog_totalAggregateType<T>>

    /**
     * Group by Log_total.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_totalGroupByArgs} args - Group by arguments.
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
      T extends Log_totalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Log_totalGroupByArgs['orderBy'] }
        : { orderBy?: Log_totalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Log_totalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLog_totalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Log_total.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Log_totalClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Log_total base type for findUnique actions
   */
  export type Log_totalFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Log_total
     */
    select?: Log_totalSelect | null
    /**
     * Filter, which Log_total to fetch.
     */
    where: Log_totalWhereUniqueInput
  }

  /**
   * Log_total findUnique
   */
  export interface Log_totalFindUniqueArgs extends Log_totalFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Log_total findUniqueOrThrow
   */
  export type Log_totalFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Log_total
     */
    select?: Log_totalSelect | null
    /**
     * Filter, which Log_total to fetch.
     */
    where: Log_totalWhereUniqueInput
  }


  /**
   * Log_total base type for findFirst actions
   */
  export type Log_totalFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Log_total
     */
    select?: Log_totalSelect | null
    /**
     * Filter, which Log_total to fetch.
     */
    where?: Log_totalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_totals to fetch.
     */
    orderBy?: Enumerable<Log_totalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Log_totals.
     */
    cursor?: Log_totalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_totals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_totals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Log_totals.
     */
    distinct?: Enumerable<Log_totalScalarFieldEnum>
  }

  /**
   * Log_total findFirst
   */
  export interface Log_totalFindFirstArgs extends Log_totalFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Log_total findFirstOrThrow
   */
  export type Log_totalFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Log_total
     */
    select?: Log_totalSelect | null
    /**
     * Filter, which Log_total to fetch.
     */
    where?: Log_totalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_totals to fetch.
     */
    orderBy?: Enumerable<Log_totalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Log_totals.
     */
    cursor?: Log_totalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_totals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_totals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Log_totals.
     */
    distinct?: Enumerable<Log_totalScalarFieldEnum>
  }


  /**
   * Log_total findMany
   */
  export type Log_totalFindManyArgs = {
    /**
     * Select specific fields to fetch from the Log_total
     */
    select?: Log_totalSelect | null
    /**
     * Filter, which Log_totals to fetch.
     */
    where?: Log_totalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_totals to fetch.
     */
    orderBy?: Enumerable<Log_totalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Log_totals.
     */
    cursor?: Log_totalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_totals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_totals.
     */
    skip?: number
    distinct?: Enumerable<Log_totalScalarFieldEnum>
  }


  /**
   * Log_total create
   */
  export type Log_totalCreateArgs = {
    /**
     * Select specific fields to fetch from the Log_total
     */
    select?: Log_totalSelect | null
    /**
     * The data needed to create a Log_total.
     */
    data: XOR<Log_totalCreateInput, Log_totalUncheckedCreateInput>
  }


  /**
   * Log_total createMany
   */
  export type Log_totalCreateManyArgs = {
    /**
     * The data used to create many Log_totals.
     */
    data: Enumerable<Log_totalCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Log_total update
   */
  export type Log_totalUpdateArgs = {
    /**
     * Select specific fields to fetch from the Log_total
     */
    select?: Log_totalSelect | null
    /**
     * The data needed to update a Log_total.
     */
    data: XOR<Log_totalUpdateInput, Log_totalUncheckedUpdateInput>
    /**
     * Choose, which Log_total to update.
     */
    where: Log_totalWhereUniqueInput
  }


  /**
   * Log_total updateMany
   */
  export type Log_totalUpdateManyArgs = {
    /**
     * The data used to update Log_totals.
     */
    data: XOR<Log_totalUpdateManyMutationInput, Log_totalUncheckedUpdateManyInput>
    /**
     * Filter which Log_totals to update
     */
    where?: Log_totalWhereInput
  }


  /**
   * Log_total upsert
   */
  export type Log_totalUpsertArgs = {
    /**
     * Select specific fields to fetch from the Log_total
     */
    select?: Log_totalSelect | null
    /**
     * The filter to search for the Log_total to update in case it exists.
     */
    where: Log_totalWhereUniqueInput
    /**
     * In case the Log_total found by the `where` argument doesn't exist, create a new Log_total with this data.
     */
    create: XOR<Log_totalCreateInput, Log_totalUncheckedCreateInput>
    /**
     * In case the Log_total was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Log_totalUpdateInput, Log_totalUncheckedUpdateInput>
  }


  /**
   * Log_total delete
   */
  export type Log_totalDeleteArgs = {
    /**
     * Select specific fields to fetch from the Log_total
     */
    select?: Log_totalSelect | null
    /**
     * Filter which Log_total to delete.
     */
    where: Log_totalWhereUniqueInput
  }


  /**
   * Log_total deleteMany
   */
  export type Log_totalDeleteManyArgs = {
    /**
     * Filter which Log_totals to delete
     */
    where?: Log_totalWhereInput
  }


  /**
   * Log_total without action
   */
  export type Log_totalArgs = {
    /**
     * Select specific fields to fetch from the Log_total
     */
    select?: Log_totalSelect | null
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
    open2winbet: number | null
    open3winbet: number | null
    open4winbet: number | null
    tableId: number | null
    serveId: number | null
  }

  export type MatchlogSumAggregateOutputType = {
    matchId: number | null
    open2winbet: number | null
    open3winbet: number | null
    open4winbet: number | null
    tableId: number | null
    serveId: number | null
  }

  export type MatchlogMinAggregateOutputType = {
    matchId: number | null
    open11: string | null
    open12: string | null
    open21: string | null
    open22: string | null
    open31: string | null
    open32: string | null
    open41: string | null
    open42: string | null
    open2winbet: number | null
    open3winbet: number | null
    open4winbet: number | null
    tableId: number | null
    serveId: number | null
    adddate: Date | null
  }

  export type MatchlogMaxAggregateOutputType = {
    matchId: number | null
    open11: string | null
    open12: string | null
    open21: string | null
    open22: string | null
    open31: string | null
    open32: string | null
    open41: string | null
    open42: string | null
    open2winbet: number | null
    open3winbet: number | null
    open4winbet: number | null
    tableId: number | null
    serveId: number | null
    adddate: Date | null
  }

  export type MatchlogCountAggregateOutputType = {
    matchId: number
    open11: number
    open12: number
    open21: number
    open22: number
    open31: number
    open32: number
    open41: number
    open42: number
    open2winbet: number
    open3winbet: number
    open4winbet: number
    tableId: number
    serveId: number
    adddate: number
    _all: number
  }


  export type MatchlogAvgAggregateInputType = {
    matchId?: true
    open2winbet?: true
    open3winbet?: true
    open4winbet?: true
    tableId?: true
    serveId?: true
  }

  export type MatchlogSumAggregateInputType = {
    matchId?: true
    open2winbet?: true
    open3winbet?: true
    open4winbet?: true
    tableId?: true
    serveId?: true
  }

  export type MatchlogMinAggregateInputType = {
    matchId?: true
    open11?: true
    open12?: true
    open21?: true
    open22?: true
    open31?: true
    open32?: true
    open41?: true
    open42?: true
    open2winbet?: true
    open3winbet?: true
    open4winbet?: true
    tableId?: true
    serveId?: true
    adddate?: true
  }

  export type MatchlogMaxAggregateInputType = {
    matchId?: true
    open11?: true
    open12?: true
    open21?: true
    open22?: true
    open31?: true
    open32?: true
    open41?: true
    open42?: true
    open2winbet?: true
    open3winbet?: true
    open4winbet?: true
    tableId?: true
    serveId?: true
    adddate?: true
  }

  export type MatchlogCountAggregateInputType = {
    matchId?: true
    open11?: true
    open12?: true
    open21?: true
    open22?: true
    open31?: true
    open32?: true
    open41?: true
    open42?: true
    open2winbet?: true
    open3winbet?: true
    open4winbet?: true
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
    open21: string
    open22: string
    open31: string
    open32: string
    open41: string
    open42: string
    open2winbet: number
    open3winbet: number
    open4winbet: number
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
    open21?: boolean
    open22?: boolean
    open31?: boolean
    open32?: boolean
    open41?: boolean
    open42?: boolean
    open2winbet?: boolean
    open3winbet?: boolean
    open4winbet?: boolean
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

  export const ConfigScalarFieldEnum: {
    id: 'id',
    flag: 'flag',
    value: 'value',
    type: 'type',
    award: 'award'
  };

  export type ConfigScalarFieldEnum = (typeof ConfigScalarFieldEnum)[keyof typeof ConfigScalarFieldEnum]


  export const DowncoinlogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    MatchId: 'MatchId',
    downCoin: 'downCoin',
    winCoin: 'winCoin',
    open2: 'open2',
    open3: 'open3',
    open4: 'open4',
    tax: 'tax',
    isBanker: 'isBanker',
    serverId: 'serverId',
    tableid: 'tableid',
    Adddate: 'Adddate',
    mark: 'mark'
  };

  export type DowncoinlogScalarFieldEnum = (typeof DowncoinlogScalarFieldEnum)[keyof typeof DowncoinlogScalarFieldEnum]


  export const Log_baomingScalarFieldEnum: {
    uid: 'uid',
    allc: 'allc',
    lostc: 'lostc',
    play: 'play',
    win_all: 'win_all',
    dizhu_num: 'dizhu_num',
    win_dizhu: 'win_dizhu',
    bm_score: 'bm_score',
    result: 'result'
  };

  export type Log_baomingScalarFieldEnum = (typeof Log_baomingScalarFieldEnum)[keyof typeof Log_baomingScalarFieldEnum]


  export const Log_baoming_saveScalarFieldEnum: {
    id: 'id',
    uid: 'uid',
    allc: 'allc',
    play: 'play',
    win_all: 'win_all',
    dizhu_num: 'dizhu_num',
    win_dizhu: 'win_dizhu',
    bm_score: 'bm_score',
    result: 'result',
    result_res: 'result_res',
    is_send_win: 'is_send_win',
    create_time: 'create_time',
    nick_name: 'nick_name',
    head_url: 'head_url'
  };

  export type Log_baoming_saveScalarFieldEnum = (typeof Log_baoming_saveScalarFieldEnum)[keyof typeof Log_baoming_saveScalarFieldEnum]


  export const Log_tempScalarFieldEnum: {
    id: 'id',
    uid: 'uid',
    nick_name: 'nick_name',
    head_url: 'head_url',
    createtime: 'createtime',
    isdizhu: 'isdizhu',
    iswin: 'iswin',
    game_dict: 'game_dict'
  };

  export type Log_tempScalarFieldEnum = (typeof Log_tempScalarFieldEnum)[keyof typeof Log_tempScalarFieldEnum]


  export const Log_totalScalarFieldEnum: {
    id: 'id',
    uid: 'uid',
    play: 'play',
    win_all: 'win_all',
    dizhu_num: 'dizhu_num',
    win_dizhu: 'win_dizhu',
    bm_score: 'bm_score'
  };

  export type Log_totalScalarFieldEnum = (typeof Log_totalScalarFieldEnum)[keyof typeof Log_totalScalarFieldEnum]


  export const MatchlogScalarFieldEnum: {
    matchId: 'matchId',
    open11: 'open11',
    open12: 'open12',
    open21: 'open21',
    open22: 'open22',
    open31: 'open31',
    open32: 'open32',
    open41: 'open41',
    open42: 'open42',
    open2winbet: 'open2winbet',
    open3winbet: 'open3winbet',
    open4winbet: 'open4winbet',
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


  export type ConfigWhereInput = {
    AND?: Enumerable<ConfigWhereInput>
    OR?: Enumerable<ConfigWhereInput>
    NOT?: Enumerable<ConfigWhereInput>
    id?: IntFilter | number
    flag?: StringFilter | string
    value?: IntFilter | number
    type?: IntFilter | number
    award?: IntFilter | number
  }

  export type ConfigOrderByWithRelationInput = {
    id?: SortOrder
    flag?: SortOrder
    value?: SortOrder
    type?: SortOrder
    award?: SortOrder
  }

  export type ConfigWhereUniqueInput = {
    id?: number
  }

  export type ConfigOrderByWithAggregationInput = {
    id?: SortOrder
    flag?: SortOrder
    value?: SortOrder
    type?: SortOrder
    award?: SortOrder
    _count?: ConfigCountOrderByAggregateInput
    _avg?: ConfigAvgOrderByAggregateInput
    _max?: ConfigMaxOrderByAggregateInput
    _min?: ConfigMinOrderByAggregateInput
    _sum?: ConfigSumOrderByAggregateInput
  }

  export type ConfigScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ConfigScalarWhereWithAggregatesInput>
    OR?: Enumerable<ConfigScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ConfigScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    flag?: StringWithAggregatesFilter | string
    value?: IntWithAggregatesFilter | number
    type?: IntWithAggregatesFilter | number
    award?: IntWithAggregatesFilter | number
  }

  export type DowncoinlogWhereInput = {
    AND?: Enumerable<DowncoinlogWhereInput>
    OR?: Enumerable<DowncoinlogWhereInput>
    NOT?: Enumerable<DowncoinlogWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    MatchId?: IntFilter | number
    downCoin?: IntFilter | number
    winCoin?: IntFilter | number
    open2?: IntFilter | number
    open3?: IntFilter | number
    open4?: IntFilter | number
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
    downCoin?: SortOrder
    winCoin?: SortOrder
    open2?: SortOrder
    open3?: SortOrder
    open4?: SortOrder
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
    downCoin?: SortOrder
    winCoin?: SortOrder
    open2?: SortOrder
    open3?: SortOrder
    open4?: SortOrder
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
    downCoin?: IntWithAggregatesFilter | number
    winCoin?: IntWithAggregatesFilter | number
    open2?: IntWithAggregatesFilter | number
    open3?: IntWithAggregatesFilter | number
    open4?: IntWithAggregatesFilter | number
    tax?: IntWithAggregatesFilter | number
    isBanker?: IntWithAggregatesFilter | number
    serverId?: IntWithAggregatesFilter | number
    tableid?: IntWithAggregatesFilter | number
    Adddate?: DateTimeWithAggregatesFilter | Date | string
    mark?: IntWithAggregatesFilter | number
  }

  export type Log_baomingWhereInput = {
    AND?: Enumerable<Log_baomingWhereInput>
    OR?: Enumerable<Log_baomingWhereInput>
    NOT?: Enumerable<Log_baomingWhereInput>
    uid?: IntFilter | number
    allc?: IntFilter | number
    lostc?: IntFilter | number
    play?: IntFilter | number
    win_all?: IntFilter | number
    dizhu_num?: IntFilter | number
    win_dizhu?: IntFilter | number
    bm_score?: IntFilter | number
    result?: IntFilter | number
  }

  export type Log_baomingOrderByWithRelationInput = {
    uid?: SortOrder
    allc?: SortOrder
    lostc?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
    result?: SortOrder
  }

  export type Log_baomingWhereUniqueInput = {
    uid?: number
  }

  export type Log_baomingOrderByWithAggregationInput = {
    uid?: SortOrder
    allc?: SortOrder
    lostc?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
    result?: SortOrder
    _count?: Log_baomingCountOrderByAggregateInput
    _avg?: Log_baomingAvgOrderByAggregateInput
    _max?: Log_baomingMaxOrderByAggregateInput
    _min?: Log_baomingMinOrderByAggregateInput
    _sum?: Log_baomingSumOrderByAggregateInput
  }

  export type Log_baomingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Log_baomingScalarWhereWithAggregatesInput>
    OR?: Enumerable<Log_baomingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Log_baomingScalarWhereWithAggregatesInput>
    uid?: IntWithAggregatesFilter | number
    allc?: IntWithAggregatesFilter | number
    lostc?: IntWithAggregatesFilter | number
    play?: IntWithAggregatesFilter | number
    win_all?: IntWithAggregatesFilter | number
    dizhu_num?: IntWithAggregatesFilter | number
    win_dizhu?: IntWithAggregatesFilter | number
    bm_score?: IntWithAggregatesFilter | number
    result?: IntWithAggregatesFilter | number
  }

  export type Log_baoming_saveWhereInput = {
    AND?: Enumerable<Log_baoming_saveWhereInput>
    OR?: Enumerable<Log_baoming_saveWhereInput>
    NOT?: Enumerable<Log_baoming_saveWhereInput>
    id?: IntFilter | number
    uid?: IntFilter | number
    allc?: IntFilter | number
    play?: IntFilter | number
    win_all?: IntFilter | number
    dizhu_num?: IntFilter | number
    win_dizhu?: IntFilter | number
    bm_score?: IntFilter | number
    result?: IntFilter | number
    result_res?: StringFilter | string
    is_send_win?: IntFilter | number
    create_time?: StringFilter | string
    nick_name?: StringFilter | string
    head_url?: StringFilter | string
  }

  export type Log_baoming_saveOrderByWithRelationInput = {
    id?: SortOrder
    uid?: SortOrder
    allc?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
    result?: SortOrder
    result_res?: SortOrder
    is_send_win?: SortOrder
    create_time?: SortOrder
    nick_name?: SortOrder
    head_url?: SortOrder
  }

  export type Log_baoming_saveWhereUniqueInput = {
    id?: number
  }

  export type Log_baoming_saveOrderByWithAggregationInput = {
    id?: SortOrder
    uid?: SortOrder
    allc?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
    result?: SortOrder
    result_res?: SortOrder
    is_send_win?: SortOrder
    create_time?: SortOrder
    nick_name?: SortOrder
    head_url?: SortOrder
    _count?: Log_baoming_saveCountOrderByAggregateInput
    _avg?: Log_baoming_saveAvgOrderByAggregateInput
    _max?: Log_baoming_saveMaxOrderByAggregateInput
    _min?: Log_baoming_saveMinOrderByAggregateInput
    _sum?: Log_baoming_saveSumOrderByAggregateInput
  }

  export type Log_baoming_saveScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Log_baoming_saveScalarWhereWithAggregatesInput>
    OR?: Enumerable<Log_baoming_saveScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Log_baoming_saveScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    uid?: IntWithAggregatesFilter | number
    allc?: IntWithAggregatesFilter | number
    play?: IntWithAggregatesFilter | number
    win_all?: IntWithAggregatesFilter | number
    dizhu_num?: IntWithAggregatesFilter | number
    win_dizhu?: IntWithAggregatesFilter | number
    bm_score?: IntWithAggregatesFilter | number
    result?: IntWithAggregatesFilter | number
    result_res?: StringWithAggregatesFilter | string
    is_send_win?: IntWithAggregatesFilter | number
    create_time?: StringWithAggregatesFilter | string
    nick_name?: StringWithAggregatesFilter | string
    head_url?: StringWithAggregatesFilter | string
  }

  export type Log_tempWhereInput = {
    AND?: Enumerable<Log_tempWhereInput>
    OR?: Enumerable<Log_tempWhereInput>
    NOT?: Enumerable<Log_tempWhereInput>
    id?: IntFilter | number
    uid?: IntFilter | number
    nick_name?: StringFilter | string
    head_url?: StringFilter | string
    createtime?: StringFilter | string
    isdizhu?: IntFilter | number
    iswin?: IntFilter | number
    game_dict?: StringFilter | string
  }

  export type Log_tempOrderByWithRelationInput = {
    id?: SortOrder
    uid?: SortOrder
    nick_name?: SortOrder
    head_url?: SortOrder
    createtime?: SortOrder
    isdizhu?: SortOrder
    iswin?: SortOrder
    game_dict?: SortOrder
  }

  export type Log_tempWhereUniqueInput = {
    id?: number
  }

  export type Log_tempOrderByWithAggregationInput = {
    id?: SortOrder
    uid?: SortOrder
    nick_name?: SortOrder
    head_url?: SortOrder
    createtime?: SortOrder
    isdizhu?: SortOrder
    iswin?: SortOrder
    game_dict?: SortOrder
    _count?: Log_tempCountOrderByAggregateInput
    _avg?: Log_tempAvgOrderByAggregateInput
    _max?: Log_tempMaxOrderByAggregateInput
    _min?: Log_tempMinOrderByAggregateInput
    _sum?: Log_tempSumOrderByAggregateInput
  }

  export type Log_tempScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Log_tempScalarWhereWithAggregatesInput>
    OR?: Enumerable<Log_tempScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Log_tempScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    uid?: IntWithAggregatesFilter | number
    nick_name?: StringWithAggregatesFilter | string
    head_url?: StringWithAggregatesFilter | string
    createtime?: StringWithAggregatesFilter | string
    isdizhu?: IntWithAggregatesFilter | number
    iswin?: IntWithAggregatesFilter | number
    game_dict?: StringWithAggregatesFilter | string
  }

  export type Log_totalWhereInput = {
    AND?: Enumerable<Log_totalWhereInput>
    OR?: Enumerable<Log_totalWhereInput>
    NOT?: Enumerable<Log_totalWhereInput>
    id?: IntFilter | number
    uid?: IntFilter | number
    play?: IntFilter | number
    win_all?: IntFilter | number
    dizhu_num?: IntFilter | number
    win_dizhu?: IntFilter | number
    bm_score?: IntFilter | number
  }

  export type Log_totalOrderByWithRelationInput = {
    id?: SortOrder
    uid?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
  }

  export type Log_totalWhereUniqueInput = {
    id?: number
  }

  export type Log_totalOrderByWithAggregationInput = {
    id?: SortOrder
    uid?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
    _count?: Log_totalCountOrderByAggregateInput
    _avg?: Log_totalAvgOrderByAggregateInput
    _max?: Log_totalMaxOrderByAggregateInput
    _min?: Log_totalMinOrderByAggregateInput
    _sum?: Log_totalSumOrderByAggregateInput
  }

  export type Log_totalScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Log_totalScalarWhereWithAggregatesInput>
    OR?: Enumerable<Log_totalScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Log_totalScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    uid?: IntWithAggregatesFilter | number
    play?: IntWithAggregatesFilter | number
    win_all?: IntWithAggregatesFilter | number
    dizhu_num?: IntWithAggregatesFilter | number
    win_dizhu?: IntWithAggregatesFilter | number
    bm_score?: IntWithAggregatesFilter | number
  }

  export type MatchlogWhereInput = {
    AND?: Enumerable<MatchlogWhereInput>
    OR?: Enumerable<MatchlogWhereInput>
    NOT?: Enumerable<MatchlogWhereInput>
    matchId?: IntFilter | number
    open11?: StringFilter | string
    open12?: StringFilter | string
    open21?: StringFilter | string
    open22?: StringFilter | string
    open31?: StringFilter | string
    open32?: StringFilter | string
    open41?: StringFilter | string
    open42?: StringFilter | string
    open2winbet?: IntFilter | number
    open3winbet?: IntFilter | number
    open4winbet?: IntFilter | number
    tableId?: IntFilter | number
    serveId?: IntFilter | number
    adddate?: DateTimeFilter | Date | string
  }

  export type MatchlogOrderByWithRelationInput = {
    matchId?: SortOrder
    open11?: SortOrder
    open12?: SortOrder
    open21?: SortOrder
    open22?: SortOrder
    open31?: SortOrder
    open32?: SortOrder
    open41?: SortOrder
    open42?: SortOrder
    open2winbet?: SortOrder
    open3winbet?: SortOrder
    open4winbet?: SortOrder
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
    open21?: SortOrder
    open22?: SortOrder
    open31?: SortOrder
    open32?: SortOrder
    open41?: SortOrder
    open42?: SortOrder
    open2winbet?: SortOrder
    open3winbet?: SortOrder
    open4winbet?: SortOrder
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
    open21?: StringWithAggregatesFilter | string
    open22?: StringWithAggregatesFilter | string
    open31?: StringWithAggregatesFilter | string
    open32?: StringWithAggregatesFilter | string
    open41?: StringWithAggregatesFilter | string
    open42?: StringWithAggregatesFilter | string
    open2winbet?: IntWithAggregatesFilter | number
    open3winbet?: IntWithAggregatesFilter | number
    open4winbet?: IntWithAggregatesFilter | number
    tableId?: IntWithAggregatesFilter | number
    serveId?: IntWithAggregatesFilter | number
    adddate?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ConfigCreateInput = {
    flag: string
    value: number
    type: number
    award: number
  }

  export type ConfigUncheckedCreateInput = {
    id?: number
    flag: string
    value: number
    type: number
    award: number
  }

  export type ConfigUpdateInput = {
    flag?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    award?: IntFieldUpdateOperationsInput | number
  }

  export type ConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    award?: IntFieldUpdateOperationsInput | number
  }

  export type ConfigCreateManyInput = {
    id?: number
    flag: string
    value: number
    type: number
    award: number
  }

  export type ConfigUpdateManyMutationInput = {
    flag?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    award?: IntFieldUpdateOperationsInput | number
  }

  export type ConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    award?: IntFieldUpdateOperationsInput | number
  }

  export type DowncoinlogCreateInput = {
    userId: number
    MatchId: number
    downCoin: number
    winCoin: number
    open2: number
    open3: number
    open4: number
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
    downCoin: number
    winCoin: number
    open2: number
    open3: number
    open4: number
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
    downCoin?: IntFieldUpdateOperationsInput | number
    winCoin?: IntFieldUpdateOperationsInput | number
    open2?: IntFieldUpdateOperationsInput | number
    open3?: IntFieldUpdateOperationsInput | number
    open4?: IntFieldUpdateOperationsInput | number
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
    downCoin?: IntFieldUpdateOperationsInput | number
    winCoin?: IntFieldUpdateOperationsInput | number
    open2?: IntFieldUpdateOperationsInput | number
    open3?: IntFieldUpdateOperationsInput | number
    open4?: IntFieldUpdateOperationsInput | number
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
    downCoin: number
    winCoin: number
    open2: number
    open3: number
    open4: number
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
    downCoin?: IntFieldUpdateOperationsInput | number
    winCoin?: IntFieldUpdateOperationsInput | number
    open2?: IntFieldUpdateOperationsInput | number
    open3?: IntFieldUpdateOperationsInput | number
    open4?: IntFieldUpdateOperationsInput | number
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
    downCoin?: IntFieldUpdateOperationsInput | number
    winCoin?: IntFieldUpdateOperationsInput | number
    open2?: IntFieldUpdateOperationsInput | number
    open3?: IntFieldUpdateOperationsInput | number
    open4?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    isBanker?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    tableid?: IntFieldUpdateOperationsInput | number
    Adddate?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
  }

  export type Log_baomingCreateInput = {
    uid: number
    allc: number
    lostc: number
    play: number
    win_all: number
    dizhu_num: number
    win_dizhu: number
    bm_score: number
    result: number
  }

  export type Log_baomingUncheckedCreateInput = {
    uid: number
    allc: number
    lostc: number
    play: number
    win_all: number
    dizhu_num: number
    win_dizhu: number
    bm_score: number
    result: number
  }

  export type Log_baomingUpdateInput = {
    uid?: IntFieldUpdateOperationsInput | number
    allc?: IntFieldUpdateOperationsInput | number
    lostc?: IntFieldUpdateOperationsInput | number
    play?: IntFieldUpdateOperationsInput | number
    win_all?: IntFieldUpdateOperationsInput | number
    dizhu_num?: IntFieldUpdateOperationsInput | number
    win_dizhu?: IntFieldUpdateOperationsInput | number
    bm_score?: IntFieldUpdateOperationsInput | number
    result?: IntFieldUpdateOperationsInput | number
  }

  export type Log_baomingUncheckedUpdateInput = {
    uid?: IntFieldUpdateOperationsInput | number
    allc?: IntFieldUpdateOperationsInput | number
    lostc?: IntFieldUpdateOperationsInput | number
    play?: IntFieldUpdateOperationsInput | number
    win_all?: IntFieldUpdateOperationsInput | number
    dizhu_num?: IntFieldUpdateOperationsInput | number
    win_dizhu?: IntFieldUpdateOperationsInput | number
    bm_score?: IntFieldUpdateOperationsInput | number
    result?: IntFieldUpdateOperationsInput | number
  }

  export type Log_baomingCreateManyInput = {
    uid: number
    allc: number
    lostc: number
    play: number
    win_all: number
    dizhu_num: number
    win_dizhu: number
    bm_score: number
    result: number
  }

  export type Log_baomingUpdateManyMutationInput = {
    uid?: IntFieldUpdateOperationsInput | number
    allc?: IntFieldUpdateOperationsInput | number
    lostc?: IntFieldUpdateOperationsInput | number
    play?: IntFieldUpdateOperationsInput | number
    win_all?: IntFieldUpdateOperationsInput | number
    dizhu_num?: IntFieldUpdateOperationsInput | number
    win_dizhu?: IntFieldUpdateOperationsInput | number
    bm_score?: IntFieldUpdateOperationsInput | number
    result?: IntFieldUpdateOperationsInput | number
  }

  export type Log_baomingUncheckedUpdateManyInput = {
    uid?: IntFieldUpdateOperationsInput | number
    allc?: IntFieldUpdateOperationsInput | number
    lostc?: IntFieldUpdateOperationsInput | number
    play?: IntFieldUpdateOperationsInput | number
    win_all?: IntFieldUpdateOperationsInput | number
    dizhu_num?: IntFieldUpdateOperationsInput | number
    win_dizhu?: IntFieldUpdateOperationsInput | number
    bm_score?: IntFieldUpdateOperationsInput | number
    result?: IntFieldUpdateOperationsInput | number
  }

  export type Log_baoming_saveCreateInput = {
    uid: number
    allc: number
    play: number
    win_all: number
    dizhu_num: number
    win_dizhu: number
    bm_score: number
    result: number
    result_res: string
    is_send_win: number
    create_time: string
    nick_name: string
    head_url: string
  }

  export type Log_baoming_saveUncheckedCreateInput = {
    id?: number
    uid: number
    allc: number
    play: number
    win_all: number
    dizhu_num: number
    win_dizhu: number
    bm_score: number
    result: number
    result_res: string
    is_send_win: number
    create_time: string
    nick_name: string
    head_url: string
  }

  export type Log_baoming_saveUpdateInput = {
    uid?: IntFieldUpdateOperationsInput | number
    allc?: IntFieldUpdateOperationsInput | number
    play?: IntFieldUpdateOperationsInput | number
    win_all?: IntFieldUpdateOperationsInput | number
    dizhu_num?: IntFieldUpdateOperationsInput | number
    win_dizhu?: IntFieldUpdateOperationsInput | number
    bm_score?: IntFieldUpdateOperationsInput | number
    result?: IntFieldUpdateOperationsInput | number
    result_res?: StringFieldUpdateOperationsInput | string
    is_send_win?: IntFieldUpdateOperationsInput | number
    create_time?: StringFieldUpdateOperationsInput | string
    nick_name?: StringFieldUpdateOperationsInput | string
    head_url?: StringFieldUpdateOperationsInput | string
  }

  export type Log_baoming_saveUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: IntFieldUpdateOperationsInput | number
    allc?: IntFieldUpdateOperationsInput | number
    play?: IntFieldUpdateOperationsInput | number
    win_all?: IntFieldUpdateOperationsInput | number
    dizhu_num?: IntFieldUpdateOperationsInput | number
    win_dizhu?: IntFieldUpdateOperationsInput | number
    bm_score?: IntFieldUpdateOperationsInput | number
    result?: IntFieldUpdateOperationsInput | number
    result_res?: StringFieldUpdateOperationsInput | string
    is_send_win?: IntFieldUpdateOperationsInput | number
    create_time?: StringFieldUpdateOperationsInput | string
    nick_name?: StringFieldUpdateOperationsInput | string
    head_url?: StringFieldUpdateOperationsInput | string
  }

  export type Log_baoming_saveCreateManyInput = {
    id?: number
    uid: number
    allc: number
    play: number
    win_all: number
    dizhu_num: number
    win_dizhu: number
    bm_score: number
    result: number
    result_res: string
    is_send_win: number
    create_time: string
    nick_name: string
    head_url: string
  }

  export type Log_baoming_saveUpdateManyMutationInput = {
    uid?: IntFieldUpdateOperationsInput | number
    allc?: IntFieldUpdateOperationsInput | number
    play?: IntFieldUpdateOperationsInput | number
    win_all?: IntFieldUpdateOperationsInput | number
    dizhu_num?: IntFieldUpdateOperationsInput | number
    win_dizhu?: IntFieldUpdateOperationsInput | number
    bm_score?: IntFieldUpdateOperationsInput | number
    result?: IntFieldUpdateOperationsInput | number
    result_res?: StringFieldUpdateOperationsInput | string
    is_send_win?: IntFieldUpdateOperationsInput | number
    create_time?: StringFieldUpdateOperationsInput | string
    nick_name?: StringFieldUpdateOperationsInput | string
    head_url?: StringFieldUpdateOperationsInput | string
  }

  export type Log_baoming_saveUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: IntFieldUpdateOperationsInput | number
    allc?: IntFieldUpdateOperationsInput | number
    play?: IntFieldUpdateOperationsInput | number
    win_all?: IntFieldUpdateOperationsInput | number
    dizhu_num?: IntFieldUpdateOperationsInput | number
    win_dizhu?: IntFieldUpdateOperationsInput | number
    bm_score?: IntFieldUpdateOperationsInput | number
    result?: IntFieldUpdateOperationsInput | number
    result_res?: StringFieldUpdateOperationsInput | string
    is_send_win?: IntFieldUpdateOperationsInput | number
    create_time?: StringFieldUpdateOperationsInput | string
    nick_name?: StringFieldUpdateOperationsInput | string
    head_url?: StringFieldUpdateOperationsInput | string
  }

  export type Log_tempCreateInput = {
    uid: number
    nick_name: string
    head_url: string
    createtime: string
    isdizhu: number
    iswin: number
    game_dict: string
  }

  export type Log_tempUncheckedCreateInput = {
    id?: number
    uid: number
    nick_name: string
    head_url: string
    createtime: string
    isdizhu: number
    iswin: number
    game_dict: string
  }

  export type Log_tempUpdateInput = {
    uid?: IntFieldUpdateOperationsInput | number
    nick_name?: StringFieldUpdateOperationsInput | string
    head_url?: StringFieldUpdateOperationsInput | string
    createtime?: StringFieldUpdateOperationsInput | string
    isdizhu?: IntFieldUpdateOperationsInput | number
    iswin?: IntFieldUpdateOperationsInput | number
    game_dict?: StringFieldUpdateOperationsInput | string
  }

  export type Log_tempUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: IntFieldUpdateOperationsInput | number
    nick_name?: StringFieldUpdateOperationsInput | string
    head_url?: StringFieldUpdateOperationsInput | string
    createtime?: StringFieldUpdateOperationsInput | string
    isdizhu?: IntFieldUpdateOperationsInput | number
    iswin?: IntFieldUpdateOperationsInput | number
    game_dict?: StringFieldUpdateOperationsInput | string
  }

  export type Log_tempCreateManyInput = {
    id?: number
    uid: number
    nick_name: string
    head_url: string
    createtime: string
    isdizhu: number
    iswin: number
    game_dict: string
  }

  export type Log_tempUpdateManyMutationInput = {
    uid?: IntFieldUpdateOperationsInput | number
    nick_name?: StringFieldUpdateOperationsInput | string
    head_url?: StringFieldUpdateOperationsInput | string
    createtime?: StringFieldUpdateOperationsInput | string
    isdizhu?: IntFieldUpdateOperationsInput | number
    iswin?: IntFieldUpdateOperationsInput | number
    game_dict?: StringFieldUpdateOperationsInput | string
  }

  export type Log_tempUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: IntFieldUpdateOperationsInput | number
    nick_name?: StringFieldUpdateOperationsInput | string
    head_url?: StringFieldUpdateOperationsInput | string
    createtime?: StringFieldUpdateOperationsInput | string
    isdizhu?: IntFieldUpdateOperationsInput | number
    iswin?: IntFieldUpdateOperationsInput | number
    game_dict?: StringFieldUpdateOperationsInput | string
  }

  export type Log_totalCreateInput = {
    uid: number
    play: number
    win_all: number
    dizhu_num: number
    win_dizhu: number
    bm_score: number
  }

  export type Log_totalUncheckedCreateInput = {
    id?: number
    uid: number
    play: number
    win_all: number
    dizhu_num: number
    win_dizhu: number
    bm_score: number
  }

  export type Log_totalUpdateInput = {
    uid?: IntFieldUpdateOperationsInput | number
    play?: IntFieldUpdateOperationsInput | number
    win_all?: IntFieldUpdateOperationsInput | number
    dizhu_num?: IntFieldUpdateOperationsInput | number
    win_dizhu?: IntFieldUpdateOperationsInput | number
    bm_score?: IntFieldUpdateOperationsInput | number
  }

  export type Log_totalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: IntFieldUpdateOperationsInput | number
    play?: IntFieldUpdateOperationsInput | number
    win_all?: IntFieldUpdateOperationsInput | number
    dizhu_num?: IntFieldUpdateOperationsInput | number
    win_dizhu?: IntFieldUpdateOperationsInput | number
    bm_score?: IntFieldUpdateOperationsInput | number
  }

  export type Log_totalCreateManyInput = {
    id?: number
    uid: number
    play: number
    win_all: number
    dizhu_num: number
    win_dizhu: number
    bm_score: number
  }

  export type Log_totalUpdateManyMutationInput = {
    uid?: IntFieldUpdateOperationsInput | number
    play?: IntFieldUpdateOperationsInput | number
    win_all?: IntFieldUpdateOperationsInput | number
    dizhu_num?: IntFieldUpdateOperationsInput | number
    win_dizhu?: IntFieldUpdateOperationsInput | number
    bm_score?: IntFieldUpdateOperationsInput | number
  }

  export type Log_totalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: IntFieldUpdateOperationsInput | number
    play?: IntFieldUpdateOperationsInput | number
    win_all?: IntFieldUpdateOperationsInput | number
    dizhu_num?: IntFieldUpdateOperationsInput | number
    win_dizhu?: IntFieldUpdateOperationsInput | number
    bm_score?: IntFieldUpdateOperationsInput | number
  }

  export type MatchlogCreateInput = {
    open11: string
    open12: string
    open21: string
    open22: string
    open31: string
    open32: string
    open41: string
    open42: string
    open2winbet: number
    open3winbet: number
    open4winbet: number
    tableId: number
    serveId: number
    adddate?: Date | string
  }

  export type MatchlogUncheckedCreateInput = {
    matchId?: number
    open11: string
    open12: string
    open21: string
    open22: string
    open31: string
    open32: string
    open41: string
    open42: string
    open2winbet: number
    open3winbet: number
    open4winbet: number
    tableId: number
    serveId: number
    adddate?: Date | string
  }

  export type MatchlogUpdateInput = {
    open11?: StringFieldUpdateOperationsInput | string
    open12?: StringFieldUpdateOperationsInput | string
    open21?: StringFieldUpdateOperationsInput | string
    open22?: StringFieldUpdateOperationsInput | string
    open31?: StringFieldUpdateOperationsInput | string
    open32?: StringFieldUpdateOperationsInput | string
    open41?: StringFieldUpdateOperationsInput | string
    open42?: StringFieldUpdateOperationsInput | string
    open2winbet?: IntFieldUpdateOperationsInput | number
    open3winbet?: IntFieldUpdateOperationsInput | number
    open4winbet?: IntFieldUpdateOperationsInput | number
    tableId?: IntFieldUpdateOperationsInput | number
    serveId?: IntFieldUpdateOperationsInput | number
    adddate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchlogUncheckedUpdateInput = {
    matchId?: IntFieldUpdateOperationsInput | number
    open11?: StringFieldUpdateOperationsInput | string
    open12?: StringFieldUpdateOperationsInput | string
    open21?: StringFieldUpdateOperationsInput | string
    open22?: StringFieldUpdateOperationsInput | string
    open31?: StringFieldUpdateOperationsInput | string
    open32?: StringFieldUpdateOperationsInput | string
    open41?: StringFieldUpdateOperationsInput | string
    open42?: StringFieldUpdateOperationsInput | string
    open2winbet?: IntFieldUpdateOperationsInput | number
    open3winbet?: IntFieldUpdateOperationsInput | number
    open4winbet?: IntFieldUpdateOperationsInput | number
    tableId?: IntFieldUpdateOperationsInput | number
    serveId?: IntFieldUpdateOperationsInput | number
    adddate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchlogCreateManyInput = {
    matchId?: number
    open11: string
    open12: string
    open21: string
    open22: string
    open31: string
    open32: string
    open41: string
    open42: string
    open2winbet: number
    open3winbet: number
    open4winbet: number
    tableId: number
    serveId: number
    adddate?: Date | string
  }

  export type MatchlogUpdateManyMutationInput = {
    open11?: StringFieldUpdateOperationsInput | string
    open12?: StringFieldUpdateOperationsInput | string
    open21?: StringFieldUpdateOperationsInput | string
    open22?: StringFieldUpdateOperationsInput | string
    open31?: StringFieldUpdateOperationsInput | string
    open32?: StringFieldUpdateOperationsInput | string
    open41?: StringFieldUpdateOperationsInput | string
    open42?: StringFieldUpdateOperationsInput | string
    open2winbet?: IntFieldUpdateOperationsInput | number
    open3winbet?: IntFieldUpdateOperationsInput | number
    open4winbet?: IntFieldUpdateOperationsInput | number
    tableId?: IntFieldUpdateOperationsInput | number
    serveId?: IntFieldUpdateOperationsInput | number
    adddate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchlogUncheckedUpdateManyInput = {
    matchId?: IntFieldUpdateOperationsInput | number
    open11?: StringFieldUpdateOperationsInput | string
    open12?: StringFieldUpdateOperationsInput | string
    open21?: StringFieldUpdateOperationsInput | string
    open22?: StringFieldUpdateOperationsInput | string
    open31?: StringFieldUpdateOperationsInput | string
    open32?: StringFieldUpdateOperationsInput | string
    open41?: StringFieldUpdateOperationsInput | string
    open42?: StringFieldUpdateOperationsInput | string
    open2winbet?: IntFieldUpdateOperationsInput | number
    open3winbet?: IntFieldUpdateOperationsInput | number
    open4winbet?: IntFieldUpdateOperationsInput | number
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

  export type ConfigCountOrderByAggregateInput = {
    id?: SortOrder
    flag?: SortOrder
    value?: SortOrder
    type?: SortOrder
    award?: SortOrder
  }

  export type ConfigAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    type?: SortOrder
    award?: SortOrder
  }

  export type ConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    flag?: SortOrder
    value?: SortOrder
    type?: SortOrder
    award?: SortOrder
  }

  export type ConfigMinOrderByAggregateInput = {
    id?: SortOrder
    flag?: SortOrder
    value?: SortOrder
    type?: SortOrder
    award?: SortOrder
  }

  export type ConfigSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    type?: SortOrder
    award?: SortOrder
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
    downCoin?: SortOrder
    winCoin?: SortOrder
    open2?: SortOrder
    open3?: SortOrder
    open4?: SortOrder
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
    downCoin?: SortOrder
    winCoin?: SortOrder
    open2?: SortOrder
    open3?: SortOrder
    open4?: SortOrder
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
    downCoin?: SortOrder
    winCoin?: SortOrder
    open2?: SortOrder
    open3?: SortOrder
    open4?: SortOrder
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
    downCoin?: SortOrder
    winCoin?: SortOrder
    open2?: SortOrder
    open3?: SortOrder
    open4?: SortOrder
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
    downCoin?: SortOrder
    winCoin?: SortOrder
    open2?: SortOrder
    open3?: SortOrder
    open4?: SortOrder
    tax?: SortOrder
    isBanker?: SortOrder
    serverId?: SortOrder
    tableid?: SortOrder
    mark?: SortOrder
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

  export type Log_baomingCountOrderByAggregateInput = {
    uid?: SortOrder
    allc?: SortOrder
    lostc?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
    result?: SortOrder
  }

  export type Log_baomingAvgOrderByAggregateInput = {
    uid?: SortOrder
    allc?: SortOrder
    lostc?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
    result?: SortOrder
  }

  export type Log_baomingMaxOrderByAggregateInput = {
    uid?: SortOrder
    allc?: SortOrder
    lostc?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
    result?: SortOrder
  }

  export type Log_baomingMinOrderByAggregateInput = {
    uid?: SortOrder
    allc?: SortOrder
    lostc?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
    result?: SortOrder
  }

  export type Log_baomingSumOrderByAggregateInput = {
    uid?: SortOrder
    allc?: SortOrder
    lostc?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
    result?: SortOrder
  }

  export type Log_baoming_saveCountOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    allc?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
    result?: SortOrder
    result_res?: SortOrder
    is_send_win?: SortOrder
    create_time?: SortOrder
    nick_name?: SortOrder
    head_url?: SortOrder
  }

  export type Log_baoming_saveAvgOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    allc?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
    result?: SortOrder
    is_send_win?: SortOrder
  }

  export type Log_baoming_saveMaxOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    allc?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
    result?: SortOrder
    result_res?: SortOrder
    is_send_win?: SortOrder
    create_time?: SortOrder
    nick_name?: SortOrder
    head_url?: SortOrder
  }

  export type Log_baoming_saveMinOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    allc?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
    result?: SortOrder
    result_res?: SortOrder
    is_send_win?: SortOrder
    create_time?: SortOrder
    nick_name?: SortOrder
    head_url?: SortOrder
  }

  export type Log_baoming_saveSumOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    allc?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
    result?: SortOrder
    is_send_win?: SortOrder
  }

  export type Log_tempCountOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    nick_name?: SortOrder
    head_url?: SortOrder
    createtime?: SortOrder
    isdizhu?: SortOrder
    iswin?: SortOrder
    game_dict?: SortOrder
  }

  export type Log_tempAvgOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    isdizhu?: SortOrder
    iswin?: SortOrder
  }

  export type Log_tempMaxOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    nick_name?: SortOrder
    head_url?: SortOrder
    createtime?: SortOrder
    isdizhu?: SortOrder
    iswin?: SortOrder
    game_dict?: SortOrder
  }

  export type Log_tempMinOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    nick_name?: SortOrder
    head_url?: SortOrder
    createtime?: SortOrder
    isdizhu?: SortOrder
    iswin?: SortOrder
    game_dict?: SortOrder
  }

  export type Log_tempSumOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    isdizhu?: SortOrder
    iswin?: SortOrder
  }

  export type Log_totalCountOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
  }

  export type Log_totalAvgOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
  }

  export type Log_totalMaxOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
  }

  export type Log_totalMinOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
  }

  export type Log_totalSumOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    play?: SortOrder
    win_all?: SortOrder
    dizhu_num?: SortOrder
    win_dizhu?: SortOrder
    bm_score?: SortOrder
  }

  export type MatchlogCountOrderByAggregateInput = {
    matchId?: SortOrder
    open11?: SortOrder
    open12?: SortOrder
    open21?: SortOrder
    open22?: SortOrder
    open31?: SortOrder
    open32?: SortOrder
    open41?: SortOrder
    open42?: SortOrder
    open2winbet?: SortOrder
    open3winbet?: SortOrder
    open4winbet?: SortOrder
    tableId?: SortOrder
    serveId?: SortOrder
    adddate?: SortOrder
  }

  export type MatchlogAvgOrderByAggregateInput = {
    matchId?: SortOrder
    open2winbet?: SortOrder
    open3winbet?: SortOrder
    open4winbet?: SortOrder
    tableId?: SortOrder
    serveId?: SortOrder
  }

  export type MatchlogMaxOrderByAggregateInput = {
    matchId?: SortOrder
    open11?: SortOrder
    open12?: SortOrder
    open21?: SortOrder
    open22?: SortOrder
    open31?: SortOrder
    open32?: SortOrder
    open41?: SortOrder
    open42?: SortOrder
    open2winbet?: SortOrder
    open3winbet?: SortOrder
    open4winbet?: SortOrder
    tableId?: SortOrder
    serveId?: SortOrder
    adddate?: SortOrder
  }

  export type MatchlogMinOrderByAggregateInput = {
    matchId?: SortOrder
    open11?: SortOrder
    open12?: SortOrder
    open21?: SortOrder
    open22?: SortOrder
    open31?: SortOrder
    open32?: SortOrder
    open41?: SortOrder
    open42?: SortOrder
    open2winbet?: SortOrder
    open3winbet?: SortOrder
    open4winbet?: SortOrder
    tableId?: SortOrder
    serveId?: SortOrder
    adddate?: SortOrder
  }

  export type MatchlogSumOrderByAggregateInput = {
    matchId?: SortOrder
    open2winbet?: SortOrder
    open3winbet?: SortOrder
    open4winbet?: SortOrder
    tableId?: SortOrder
    serveId?: SortOrder
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