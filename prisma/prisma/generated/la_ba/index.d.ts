
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Gambling_game_list
 * 
 */
export type Gambling_game_list = {
  nGameID: number
  strGameName: string
  nGameType: number
  nGamblingWaterLevelGold: number
  nGamblingBalanceGold: number
  nGamblingWinPool: number
  nGamblingUpdateBalanceGold: number
  nGamblingBigWinLevel: string
  nGamblingBigWinLuck: string
  expectRTP: number
}

/**
 * Model Lotterylog
 * 
 */
export type Lotterylog = {
  id: number
  userid: number
  bet: number
  line_s: number
  score_before: number
  score_linescore: number
  score_win: number
  score_current: number
  free_count_before: number
  free_count_win: number
  free_count_current: number
  result_array: string
  lotteryTime: Date
  mark: number
}

/**
 * Model Score_pool
 * 
 */
export type Score_pool = {
  id: number
  score_pool: number
  change_time: Date
}

/**
 * Model Scoretotal
 * 
 */
export type Scoretotal = {
  serve_id: number
  winScoreTotal: number
  lotteryTotal: number
  updateTime: Date
}

/**
 * Model Scoretotallog
 * 
 */
export type Scoretotallog = {
  id: number
  serve_id: number
  winscore: number
  lotteryCount: number
  CreateTime: Date
}

/**
 * Model Useraccounts
 * 
 */
export type Useraccounts = {
  Id: number
  freeCount: number
  freeType: number
  AddDate: Date
  LotteryCount: number
  nFreeIndex: string
  gameDict: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Gambling_game_lists
 * const gambling_game_lists = await prisma.gambling_game_list.findMany()
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
   * // Fetch zero or more Gambling_game_lists
   * const gambling_game_lists = await prisma.gambling_game_list.findMany()
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
   * `prisma.gambling_game_list`: Exposes CRUD operations for the **Gambling_game_list** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gambling_game_lists
    * const gambling_game_lists = await prisma.gambling_game_list.findMany()
    * ```
    */
  get gambling_game_list(): Prisma.Gambling_game_listDelegate<GlobalReject>;

  /**
   * `prisma.lotterylog`: Exposes CRUD operations for the **Lotterylog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lotterylogs
    * const lotterylogs = await prisma.lotterylog.findMany()
    * ```
    */
  get lotterylog(): Prisma.LotterylogDelegate<GlobalReject>;

  /**
   * `prisma.score_pool`: Exposes CRUD operations for the **Score_pool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Score_pools
    * const score_pools = await prisma.score_pool.findMany()
    * ```
    */
  get score_pool(): Prisma.Score_poolDelegate<GlobalReject>;

  /**
   * `prisma.scoretotal`: Exposes CRUD operations for the **Scoretotal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scoretotals
    * const scoretotals = await prisma.scoretotal.findMany()
    * ```
    */
  get scoretotal(): Prisma.ScoretotalDelegate<GlobalReject>;

  /**
   * `prisma.scoretotallog`: Exposes CRUD operations for the **Scoretotallog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scoretotallogs
    * const scoretotallogs = await prisma.scoretotallog.findMany()
    * ```
    */
  get scoretotallog(): Prisma.ScoretotallogDelegate<GlobalReject>;

  /**
   * `prisma.useraccounts`: Exposes CRUD operations for the **Useraccounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Useraccounts
    * const useraccounts = await prisma.useraccounts.findMany()
    * ```
    */
  get useraccounts(): Prisma.UseraccountsDelegate<GlobalReject>;
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
    Gambling_game_list: 'Gambling_game_list',
    Lotterylog: 'Lotterylog',
    Score_pool: 'Score_pool',
    Scoretotal: 'Scoretotal',
    Scoretotallog: 'Scoretotallog',
    Useraccounts: 'Useraccounts'
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
   * Model Gambling_game_list
   */


  export type AggregateGambling_game_list = {
    _count: Gambling_game_listCountAggregateOutputType | null
    _avg: Gambling_game_listAvgAggregateOutputType | null
    _sum: Gambling_game_listSumAggregateOutputType | null
    _min: Gambling_game_listMinAggregateOutputType | null
    _max: Gambling_game_listMaxAggregateOutputType | null
  }

  export type Gambling_game_listAvgAggregateOutputType = {
    nGameID: number | null
    nGameType: number | null
    nGamblingWaterLevelGold: number | null
    nGamblingBalanceGold: number | null
    nGamblingWinPool: number | null
    nGamblingUpdateBalanceGold: number | null
    expectRTP: number | null
  }

  export type Gambling_game_listSumAggregateOutputType = {
    nGameID: number | null
    nGameType: number | null
    nGamblingWaterLevelGold: number | null
    nGamblingBalanceGold: number | null
    nGamblingWinPool: number | null
    nGamblingUpdateBalanceGold: number | null
    expectRTP: number | null
  }

  export type Gambling_game_listMinAggregateOutputType = {
    nGameID: number | null
    strGameName: string | null
    nGameType: number | null
    nGamblingWaterLevelGold: number | null
    nGamblingBalanceGold: number | null
    nGamblingWinPool: number | null
    nGamblingUpdateBalanceGold: number | null
    nGamblingBigWinLevel: string | null
    nGamblingBigWinLuck: string | null
    expectRTP: number | null
  }

  export type Gambling_game_listMaxAggregateOutputType = {
    nGameID: number | null
    strGameName: string | null
    nGameType: number | null
    nGamblingWaterLevelGold: number | null
    nGamblingBalanceGold: number | null
    nGamblingWinPool: number | null
    nGamblingUpdateBalanceGold: number | null
    nGamblingBigWinLevel: string | null
    nGamblingBigWinLuck: string | null
    expectRTP: number | null
  }

  export type Gambling_game_listCountAggregateOutputType = {
    nGameID: number
    strGameName: number
    nGameType: number
    nGamblingWaterLevelGold: number
    nGamblingBalanceGold: number
    nGamblingWinPool: number
    nGamblingUpdateBalanceGold: number
    nGamblingBigWinLevel: number
    nGamblingBigWinLuck: number
    expectRTP: number
    _all: number
  }


  export type Gambling_game_listAvgAggregateInputType = {
    nGameID?: true
    nGameType?: true
    nGamblingWaterLevelGold?: true
    nGamblingBalanceGold?: true
    nGamblingWinPool?: true
    nGamblingUpdateBalanceGold?: true
    expectRTP?: true
  }

  export type Gambling_game_listSumAggregateInputType = {
    nGameID?: true
    nGameType?: true
    nGamblingWaterLevelGold?: true
    nGamblingBalanceGold?: true
    nGamblingWinPool?: true
    nGamblingUpdateBalanceGold?: true
    expectRTP?: true
  }

  export type Gambling_game_listMinAggregateInputType = {
    nGameID?: true
    strGameName?: true
    nGameType?: true
    nGamblingWaterLevelGold?: true
    nGamblingBalanceGold?: true
    nGamblingWinPool?: true
    nGamblingUpdateBalanceGold?: true
    nGamblingBigWinLevel?: true
    nGamblingBigWinLuck?: true
    expectRTP?: true
  }

  export type Gambling_game_listMaxAggregateInputType = {
    nGameID?: true
    strGameName?: true
    nGameType?: true
    nGamblingWaterLevelGold?: true
    nGamblingBalanceGold?: true
    nGamblingWinPool?: true
    nGamblingUpdateBalanceGold?: true
    nGamblingBigWinLevel?: true
    nGamblingBigWinLuck?: true
    expectRTP?: true
  }

  export type Gambling_game_listCountAggregateInputType = {
    nGameID?: true
    strGameName?: true
    nGameType?: true
    nGamblingWaterLevelGold?: true
    nGamblingBalanceGold?: true
    nGamblingWinPool?: true
    nGamblingUpdateBalanceGold?: true
    nGamblingBigWinLevel?: true
    nGamblingBigWinLuck?: true
    expectRTP?: true
    _all?: true
  }

  export type Gambling_game_listAggregateArgs = {
    /**
     * Filter which Gambling_game_list to aggregate.
     */
    where?: Gambling_game_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gambling_game_lists to fetch.
     */
    orderBy?: Enumerable<Gambling_game_listOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Gambling_game_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gambling_game_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gambling_game_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gambling_game_lists
    **/
    _count?: true | Gambling_game_listCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Gambling_game_listAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Gambling_game_listSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Gambling_game_listMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Gambling_game_listMaxAggregateInputType
  }

  export type GetGambling_game_listAggregateType<T extends Gambling_game_listAggregateArgs> = {
        [P in keyof T & keyof AggregateGambling_game_list]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGambling_game_list[P]>
      : GetScalarType<T[P], AggregateGambling_game_list[P]>
  }




  export type Gambling_game_listGroupByArgs = {
    where?: Gambling_game_listWhereInput
    orderBy?: Enumerable<Gambling_game_listOrderByWithAggregationInput>
    by: Gambling_game_listScalarFieldEnum[]
    having?: Gambling_game_listScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Gambling_game_listCountAggregateInputType | true
    _avg?: Gambling_game_listAvgAggregateInputType
    _sum?: Gambling_game_listSumAggregateInputType
    _min?: Gambling_game_listMinAggregateInputType
    _max?: Gambling_game_listMaxAggregateInputType
  }


  export type Gambling_game_listGroupByOutputType = {
    nGameID: number
    strGameName: string
    nGameType: number
    nGamblingWaterLevelGold: number
    nGamblingBalanceGold: number
    nGamblingWinPool: number
    nGamblingUpdateBalanceGold: number
    nGamblingBigWinLevel: string
    nGamblingBigWinLuck: string
    expectRTP: number
    _count: Gambling_game_listCountAggregateOutputType | null
    _avg: Gambling_game_listAvgAggregateOutputType | null
    _sum: Gambling_game_listSumAggregateOutputType | null
    _min: Gambling_game_listMinAggregateOutputType | null
    _max: Gambling_game_listMaxAggregateOutputType | null
  }

  type GetGambling_game_listGroupByPayload<T extends Gambling_game_listGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Gambling_game_listGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Gambling_game_listGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Gambling_game_listGroupByOutputType[P]>
            : GetScalarType<T[P], Gambling_game_listGroupByOutputType[P]>
        }
      >
    >


  export type Gambling_game_listSelect = {
    nGameID?: boolean
    strGameName?: boolean
    nGameType?: boolean
    nGamblingWaterLevelGold?: boolean
    nGamblingBalanceGold?: boolean
    nGamblingWinPool?: boolean
    nGamblingUpdateBalanceGold?: boolean
    nGamblingBigWinLevel?: boolean
    nGamblingBigWinLuck?: boolean
    expectRTP?: boolean
  }


  export type Gambling_game_listGetPayload<S extends boolean | null | undefined | Gambling_game_listArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Gambling_game_list :
    S extends undefined ? never :
    S extends { include: any } & (Gambling_game_listArgs | Gambling_game_listFindManyArgs)
    ? Gambling_game_list 
    : S extends { select: any } & (Gambling_game_listArgs | Gambling_game_listFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Gambling_game_list ? Gambling_game_list[P] : never
  } 
      : Gambling_game_list


  type Gambling_game_listCountArgs = 
    Omit<Gambling_game_listFindManyArgs, 'select' | 'include'> & {
      select?: Gambling_game_listCountAggregateInputType | true
    }

  export interface Gambling_game_listDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Gambling_game_list that matches the filter.
     * @param {Gambling_game_listFindUniqueArgs} args - Arguments to find a Gambling_game_list
     * @example
     * // Get one Gambling_game_list
     * const gambling_game_list = await prisma.gambling_game_list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Gambling_game_listFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Gambling_game_listFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Gambling_game_list'> extends True ? Prisma__Gambling_game_listClient<Gambling_game_listGetPayload<T>> : Prisma__Gambling_game_listClient<Gambling_game_listGetPayload<T> | null, null>

    /**
     * Find one Gambling_game_list that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Gambling_game_listFindUniqueOrThrowArgs} args - Arguments to find a Gambling_game_list
     * @example
     * // Get one Gambling_game_list
     * const gambling_game_list = await prisma.gambling_game_list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Gambling_game_listFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Gambling_game_listFindUniqueOrThrowArgs>
    ): Prisma__Gambling_game_listClient<Gambling_game_listGetPayload<T>>

    /**
     * Find the first Gambling_game_list that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gambling_game_listFindFirstArgs} args - Arguments to find a Gambling_game_list
     * @example
     * // Get one Gambling_game_list
     * const gambling_game_list = await prisma.gambling_game_list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Gambling_game_listFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Gambling_game_listFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Gambling_game_list'> extends True ? Prisma__Gambling_game_listClient<Gambling_game_listGetPayload<T>> : Prisma__Gambling_game_listClient<Gambling_game_listGetPayload<T> | null, null>

    /**
     * Find the first Gambling_game_list that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gambling_game_listFindFirstOrThrowArgs} args - Arguments to find a Gambling_game_list
     * @example
     * // Get one Gambling_game_list
     * const gambling_game_list = await prisma.gambling_game_list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Gambling_game_listFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Gambling_game_listFindFirstOrThrowArgs>
    ): Prisma__Gambling_game_listClient<Gambling_game_listGetPayload<T>>

    /**
     * Find zero or more Gambling_game_lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gambling_game_listFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gambling_game_lists
     * const gambling_game_lists = await prisma.gambling_game_list.findMany()
     * 
     * // Get first 10 Gambling_game_lists
     * const gambling_game_lists = await prisma.gambling_game_list.findMany({ take: 10 })
     * 
     * // Only select the `nGameID`
     * const gambling_game_listWithNGameIDOnly = await prisma.gambling_game_list.findMany({ select: { nGameID: true } })
     * 
    **/
    findMany<T extends Gambling_game_listFindManyArgs>(
      args?: SelectSubset<T, Gambling_game_listFindManyArgs>
    ): Prisma.PrismaPromise<Array<Gambling_game_listGetPayload<T>>>

    /**
     * Create a Gambling_game_list.
     * @param {Gambling_game_listCreateArgs} args - Arguments to create a Gambling_game_list.
     * @example
     * // Create one Gambling_game_list
     * const Gambling_game_list = await prisma.gambling_game_list.create({
     *   data: {
     *     // ... data to create a Gambling_game_list
     *   }
     * })
     * 
    **/
    create<T extends Gambling_game_listCreateArgs>(
      args: SelectSubset<T, Gambling_game_listCreateArgs>
    ): Prisma__Gambling_game_listClient<Gambling_game_listGetPayload<T>>

    /**
     * Create many Gambling_game_lists.
     *     @param {Gambling_game_listCreateManyArgs} args - Arguments to create many Gambling_game_lists.
     *     @example
     *     // Create many Gambling_game_lists
     *     const gambling_game_list = await prisma.gambling_game_list.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Gambling_game_listCreateManyArgs>(
      args?: SelectSubset<T, Gambling_game_listCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gambling_game_list.
     * @param {Gambling_game_listDeleteArgs} args - Arguments to delete one Gambling_game_list.
     * @example
     * // Delete one Gambling_game_list
     * const Gambling_game_list = await prisma.gambling_game_list.delete({
     *   where: {
     *     // ... filter to delete one Gambling_game_list
     *   }
     * })
     * 
    **/
    delete<T extends Gambling_game_listDeleteArgs>(
      args: SelectSubset<T, Gambling_game_listDeleteArgs>
    ): Prisma__Gambling_game_listClient<Gambling_game_listGetPayload<T>>

    /**
     * Update one Gambling_game_list.
     * @param {Gambling_game_listUpdateArgs} args - Arguments to update one Gambling_game_list.
     * @example
     * // Update one Gambling_game_list
     * const gambling_game_list = await prisma.gambling_game_list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Gambling_game_listUpdateArgs>(
      args: SelectSubset<T, Gambling_game_listUpdateArgs>
    ): Prisma__Gambling_game_listClient<Gambling_game_listGetPayload<T>>

    /**
     * Delete zero or more Gambling_game_lists.
     * @param {Gambling_game_listDeleteManyArgs} args - Arguments to filter Gambling_game_lists to delete.
     * @example
     * // Delete a few Gambling_game_lists
     * const { count } = await prisma.gambling_game_list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Gambling_game_listDeleteManyArgs>(
      args?: SelectSubset<T, Gambling_game_listDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gambling_game_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gambling_game_listUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gambling_game_lists
     * const gambling_game_list = await prisma.gambling_game_list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Gambling_game_listUpdateManyArgs>(
      args: SelectSubset<T, Gambling_game_listUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gambling_game_list.
     * @param {Gambling_game_listUpsertArgs} args - Arguments to update or create a Gambling_game_list.
     * @example
     * // Update or create a Gambling_game_list
     * const gambling_game_list = await prisma.gambling_game_list.upsert({
     *   create: {
     *     // ... data to create a Gambling_game_list
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gambling_game_list we want to update
     *   }
     * })
    **/
    upsert<T extends Gambling_game_listUpsertArgs>(
      args: SelectSubset<T, Gambling_game_listUpsertArgs>
    ): Prisma__Gambling_game_listClient<Gambling_game_listGetPayload<T>>

    /**
     * Count the number of Gambling_game_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gambling_game_listCountArgs} args - Arguments to filter Gambling_game_lists to count.
     * @example
     * // Count the number of Gambling_game_lists
     * const count = await prisma.gambling_game_list.count({
     *   where: {
     *     // ... the filter for the Gambling_game_lists we want to count
     *   }
     * })
    **/
    count<T extends Gambling_game_listCountArgs>(
      args?: Subset<T, Gambling_game_listCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gambling_game_listCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gambling_game_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gambling_game_listAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Gambling_game_listAggregateArgs>(args: Subset<T, Gambling_game_listAggregateArgs>): Prisma.PrismaPromise<GetGambling_game_listAggregateType<T>>

    /**
     * Group by Gambling_game_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gambling_game_listGroupByArgs} args - Group by arguments.
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
      T extends Gambling_game_listGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Gambling_game_listGroupByArgs['orderBy'] }
        : { orderBy?: Gambling_game_listGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Gambling_game_listGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGambling_game_listGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Gambling_game_list.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Gambling_game_listClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Gambling_game_list base type for findUnique actions
   */
  export type Gambling_game_listFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Gambling_game_list
     */
    select?: Gambling_game_listSelect | null
    /**
     * Filter, which Gambling_game_list to fetch.
     */
    where: Gambling_game_listWhereUniqueInput
  }

  /**
   * Gambling_game_list findUnique
   */
  export interface Gambling_game_listFindUniqueArgs extends Gambling_game_listFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Gambling_game_list findUniqueOrThrow
   */
  export type Gambling_game_listFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Gambling_game_list
     */
    select?: Gambling_game_listSelect | null
    /**
     * Filter, which Gambling_game_list to fetch.
     */
    where: Gambling_game_listWhereUniqueInput
  }


  /**
   * Gambling_game_list base type for findFirst actions
   */
  export type Gambling_game_listFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Gambling_game_list
     */
    select?: Gambling_game_listSelect | null
    /**
     * Filter, which Gambling_game_list to fetch.
     */
    where?: Gambling_game_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gambling_game_lists to fetch.
     */
    orderBy?: Enumerable<Gambling_game_listOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gambling_game_lists.
     */
    cursor?: Gambling_game_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gambling_game_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gambling_game_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gambling_game_lists.
     */
    distinct?: Enumerable<Gambling_game_listScalarFieldEnum>
  }

  /**
   * Gambling_game_list findFirst
   */
  export interface Gambling_game_listFindFirstArgs extends Gambling_game_listFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Gambling_game_list findFirstOrThrow
   */
  export type Gambling_game_listFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Gambling_game_list
     */
    select?: Gambling_game_listSelect | null
    /**
     * Filter, which Gambling_game_list to fetch.
     */
    where?: Gambling_game_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gambling_game_lists to fetch.
     */
    orderBy?: Enumerable<Gambling_game_listOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gambling_game_lists.
     */
    cursor?: Gambling_game_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gambling_game_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gambling_game_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gambling_game_lists.
     */
    distinct?: Enumerable<Gambling_game_listScalarFieldEnum>
  }


  /**
   * Gambling_game_list findMany
   */
  export type Gambling_game_listFindManyArgs = {
    /**
     * Select specific fields to fetch from the Gambling_game_list
     */
    select?: Gambling_game_listSelect | null
    /**
     * Filter, which Gambling_game_lists to fetch.
     */
    where?: Gambling_game_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gambling_game_lists to fetch.
     */
    orderBy?: Enumerable<Gambling_game_listOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gambling_game_lists.
     */
    cursor?: Gambling_game_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gambling_game_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gambling_game_lists.
     */
    skip?: number
    distinct?: Enumerable<Gambling_game_listScalarFieldEnum>
  }


  /**
   * Gambling_game_list create
   */
  export type Gambling_game_listCreateArgs = {
    /**
     * Select specific fields to fetch from the Gambling_game_list
     */
    select?: Gambling_game_listSelect | null
    /**
     * The data needed to create a Gambling_game_list.
     */
    data: XOR<Gambling_game_listCreateInput, Gambling_game_listUncheckedCreateInput>
  }


  /**
   * Gambling_game_list createMany
   */
  export type Gambling_game_listCreateManyArgs = {
    /**
     * The data used to create many Gambling_game_lists.
     */
    data: Enumerable<Gambling_game_listCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Gambling_game_list update
   */
  export type Gambling_game_listUpdateArgs = {
    /**
     * Select specific fields to fetch from the Gambling_game_list
     */
    select?: Gambling_game_listSelect | null
    /**
     * The data needed to update a Gambling_game_list.
     */
    data: XOR<Gambling_game_listUpdateInput, Gambling_game_listUncheckedUpdateInput>
    /**
     * Choose, which Gambling_game_list to update.
     */
    where: Gambling_game_listWhereUniqueInput
  }


  /**
   * Gambling_game_list updateMany
   */
  export type Gambling_game_listUpdateManyArgs = {
    /**
     * The data used to update Gambling_game_lists.
     */
    data: XOR<Gambling_game_listUpdateManyMutationInput, Gambling_game_listUncheckedUpdateManyInput>
    /**
     * Filter which Gambling_game_lists to update
     */
    where?: Gambling_game_listWhereInput
  }


  /**
   * Gambling_game_list upsert
   */
  export type Gambling_game_listUpsertArgs = {
    /**
     * Select specific fields to fetch from the Gambling_game_list
     */
    select?: Gambling_game_listSelect | null
    /**
     * The filter to search for the Gambling_game_list to update in case it exists.
     */
    where: Gambling_game_listWhereUniqueInput
    /**
     * In case the Gambling_game_list found by the `where` argument doesn't exist, create a new Gambling_game_list with this data.
     */
    create: XOR<Gambling_game_listCreateInput, Gambling_game_listUncheckedCreateInput>
    /**
     * In case the Gambling_game_list was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Gambling_game_listUpdateInput, Gambling_game_listUncheckedUpdateInput>
  }


  /**
   * Gambling_game_list delete
   */
  export type Gambling_game_listDeleteArgs = {
    /**
     * Select specific fields to fetch from the Gambling_game_list
     */
    select?: Gambling_game_listSelect | null
    /**
     * Filter which Gambling_game_list to delete.
     */
    where: Gambling_game_listWhereUniqueInput
  }


  /**
   * Gambling_game_list deleteMany
   */
  export type Gambling_game_listDeleteManyArgs = {
    /**
     * Filter which Gambling_game_lists to delete
     */
    where?: Gambling_game_listWhereInput
  }


  /**
   * Gambling_game_list without action
   */
  export type Gambling_game_listArgs = {
    /**
     * Select specific fields to fetch from the Gambling_game_list
     */
    select?: Gambling_game_listSelect | null
  }



  /**
   * Model Lotterylog
   */


  export type AggregateLotterylog = {
    _count: LotterylogCountAggregateOutputType | null
    _avg: LotterylogAvgAggregateOutputType | null
    _sum: LotterylogSumAggregateOutputType | null
    _min: LotterylogMinAggregateOutputType | null
    _max: LotterylogMaxAggregateOutputType | null
  }

  export type LotterylogAvgAggregateOutputType = {
    id: number | null
    userid: number | null
    bet: number | null
    line_s: number | null
    score_before: number | null
    score_linescore: number | null
    score_win: number | null
    score_current: number | null
    free_count_before: number | null
    free_count_win: number | null
    free_count_current: number | null
    mark: number | null
  }

  export type LotterylogSumAggregateOutputType = {
    id: number | null
    userid: number | null
    bet: number | null
    line_s: number | null
    score_before: number | null
    score_linescore: number | null
    score_win: number | null
    score_current: number | null
    free_count_before: number | null
    free_count_win: number | null
    free_count_current: number | null
    mark: number | null
  }

  export type LotterylogMinAggregateOutputType = {
    id: number | null
    userid: number | null
    bet: number | null
    line_s: number | null
    score_before: number | null
    score_linescore: number | null
    score_win: number | null
    score_current: number | null
    free_count_before: number | null
    free_count_win: number | null
    free_count_current: number | null
    result_array: string | null
    lotteryTime: Date | null
    mark: number | null
  }

  export type LotterylogMaxAggregateOutputType = {
    id: number | null
    userid: number | null
    bet: number | null
    line_s: number | null
    score_before: number | null
    score_linescore: number | null
    score_win: number | null
    score_current: number | null
    free_count_before: number | null
    free_count_win: number | null
    free_count_current: number | null
    result_array: string | null
    lotteryTime: Date | null
    mark: number | null
  }

  export type LotterylogCountAggregateOutputType = {
    id: number
    userid: number
    bet: number
    line_s: number
    score_before: number
    score_linescore: number
    score_win: number
    score_current: number
    free_count_before: number
    free_count_win: number
    free_count_current: number
    result_array: number
    lotteryTime: number
    mark: number
    _all: number
  }


  export type LotterylogAvgAggregateInputType = {
    id?: true
    userid?: true
    bet?: true
    line_s?: true
    score_before?: true
    score_linescore?: true
    score_win?: true
    score_current?: true
    free_count_before?: true
    free_count_win?: true
    free_count_current?: true
    mark?: true
  }

  export type LotterylogSumAggregateInputType = {
    id?: true
    userid?: true
    bet?: true
    line_s?: true
    score_before?: true
    score_linescore?: true
    score_win?: true
    score_current?: true
    free_count_before?: true
    free_count_win?: true
    free_count_current?: true
    mark?: true
  }

  export type LotterylogMinAggregateInputType = {
    id?: true
    userid?: true
    bet?: true
    line_s?: true
    score_before?: true
    score_linescore?: true
    score_win?: true
    score_current?: true
    free_count_before?: true
    free_count_win?: true
    free_count_current?: true
    result_array?: true
    lotteryTime?: true
    mark?: true
  }

  export type LotterylogMaxAggregateInputType = {
    id?: true
    userid?: true
    bet?: true
    line_s?: true
    score_before?: true
    score_linescore?: true
    score_win?: true
    score_current?: true
    free_count_before?: true
    free_count_win?: true
    free_count_current?: true
    result_array?: true
    lotteryTime?: true
    mark?: true
  }

  export type LotterylogCountAggregateInputType = {
    id?: true
    userid?: true
    bet?: true
    line_s?: true
    score_before?: true
    score_linescore?: true
    score_win?: true
    score_current?: true
    free_count_before?: true
    free_count_win?: true
    free_count_current?: true
    result_array?: true
    lotteryTime?: true
    mark?: true
    _all?: true
  }

  export type LotterylogAggregateArgs = {
    /**
     * Filter which Lotterylog to aggregate.
     */
    where?: LotterylogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotterylogs to fetch.
     */
    orderBy?: Enumerable<LotterylogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LotterylogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotterylogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotterylogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lotterylogs
    **/
    _count?: true | LotterylogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LotterylogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LotterylogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LotterylogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LotterylogMaxAggregateInputType
  }

  export type GetLotterylogAggregateType<T extends LotterylogAggregateArgs> = {
        [P in keyof T & keyof AggregateLotterylog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLotterylog[P]>
      : GetScalarType<T[P], AggregateLotterylog[P]>
  }




  export type LotterylogGroupByArgs = {
    where?: LotterylogWhereInput
    orderBy?: Enumerable<LotterylogOrderByWithAggregationInput>
    by: LotterylogScalarFieldEnum[]
    having?: LotterylogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LotterylogCountAggregateInputType | true
    _avg?: LotterylogAvgAggregateInputType
    _sum?: LotterylogSumAggregateInputType
    _min?: LotterylogMinAggregateInputType
    _max?: LotterylogMaxAggregateInputType
  }


  export type LotterylogGroupByOutputType = {
    id: number
    userid: number
    bet: number
    line_s: number
    score_before: number
    score_linescore: number
    score_win: number
    score_current: number
    free_count_before: number
    free_count_win: number
    free_count_current: number
    result_array: string
    lotteryTime: Date
    mark: number
    _count: LotterylogCountAggregateOutputType | null
    _avg: LotterylogAvgAggregateOutputType | null
    _sum: LotterylogSumAggregateOutputType | null
    _min: LotterylogMinAggregateOutputType | null
    _max: LotterylogMaxAggregateOutputType | null
  }

  type GetLotterylogGroupByPayload<T extends LotterylogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LotterylogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LotterylogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LotterylogGroupByOutputType[P]>
            : GetScalarType<T[P], LotterylogGroupByOutputType[P]>
        }
      >
    >


  export type LotterylogSelect = {
    id?: boolean
    userid?: boolean
    bet?: boolean
    line_s?: boolean
    score_before?: boolean
    score_linescore?: boolean
    score_win?: boolean
    score_current?: boolean
    free_count_before?: boolean
    free_count_win?: boolean
    free_count_current?: boolean
    result_array?: boolean
    lotteryTime?: boolean
    mark?: boolean
  }


  export type LotterylogGetPayload<S extends boolean | null | undefined | LotterylogArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Lotterylog :
    S extends undefined ? never :
    S extends { include: any } & (LotterylogArgs | LotterylogFindManyArgs)
    ? Lotterylog 
    : S extends { select: any } & (LotterylogArgs | LotterylogFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Lotterylog ? Lotterylog[P] : never
  } 
      : Lotterylog


  type LotterylogCountArgs = 
    Omit<LotterylogFindManyArgs, 'select' | 'include'> & {
      select?: LotterylogCountAggregateInputType | true
    }

  export interface LotterylogDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Lotterylog that matches the filter.
     * @param {LotterylogFindUniqueArgs} args - Arguments to find a Lotterylog
     * @example
     * // Get one Lotterylog
     * const lotterylog = await prisma.lotterylog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LotterylogFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LotterylogFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Lotterylog'> extends True ? Prisma__LotterylogClient<LotterylogGetPayload<T>> : Prisma__LotterylogClient<LotterylogGetPayload<T> | null, null>

    /**
     * Find one Lotterylog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LotterylogFindUniqueOrThrowArgs} args - Arguments to find a Lotterylog
     * @example
     * // Get one Lotterylog
     * const lotterylog = await prisma.lotterylog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LotterylogFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LotterylogFindUniqueOrThrowArgs>
    ): Prisma__LotterylogClient<LotterylogGetPayload<T>>

    /**
     * Find the first Lotterylog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotterylogFindFirstArgs} args - Arguments to find a Lotterylog
     * @example
     * // Get one Lotterylog
     * const lotterylog = await prisma.lotterylog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LotterylogFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LotterylogFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Lotterylog'> extends True ? Prisma__LotterylogClient<LotterylogGetPayload<T>> : Prisma__LotterylogClient<LotterylogGetPayload<T> | null, null>

    /**
     * Find the first Lotterylog that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotterylogFindFirstOrThrowArgs} args - Arguments to find a Lotterylog
     * @example
     * // Get one Lotterylog
     * const lotterylog = await prisma.lotterylog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LotterylogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LotterylogFindFirstOrThrowArgs>
    ): Prisma__LotterylogClient<LotterylogGetPayload<T>>

    /**
     * Find zero or more Lotterylogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotterylogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lotterylogs
     * const lotterylogs = await prisma.lotterylog.findMany()
     * 
     * // Get first 10 Lotterylogs
     * const lotterylogs = await prisma.lotterylog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lotterylogWithIdOnly = await prisma.lotterylog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LotterylogFindManyArgs>(
      args?: SelectSubset<T, LotterylogFindManyArgs>
    ): Prisma.PrismaPromise<Array<LotterylogGetPayload<T>>>

    /**
     * Create a Lotterylog.
     * @param {LotterylogCreateArgs} args - Arguments to create a Lotterylog.
     * @example
     * // Create one Lotterylog
     * const Lotterylog = await prisma.lotterylog.create({
     *   data: {
     *     // ... data to create a Lotterylog
     *   }
     * })
     * 
    **/
    create<T extends LotterylogCreateArgs>(
      args: SelectSubset<T, LotterylogCreateArgs>
    ): Prisma__LotterylogClient<LotterylogGetPayload<T>>

    /**
     * Create many Lotterylogs.
     *     @param {LotterylogCreateManyArgs} args - Arguments to create many Lotterylogs.
     *     @example
     *     // Create many Lotterylogs
     *     const lotterylog = await prisma.lotterylog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LotterylogCreateManyArgs>(
      args?: SelectSubset<T, LotterylogCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lotterylog.
     * @param {LotterylogDeleteArgs} args - Arguments to delete one Lotterylog.
     * @example
     * // Delete one Lotterylog
     * const Lotterylog = await prisma.lotterylog.delete({
     *   where: {
     *     // ... filter to delete one Lotterylog
     *   }
     * })
     * 
    **/
    delete<T extends LotterylogDeleteArgs>(
      args: SelectSubset<T, LotterylogDeleteArgs>
    ): Prisma__LotterylogClient<LotterylogGetPayload<T>>

    /**
     * Update one Lotterylog.
     * @param {LotterylogUpdateArgs} args - Arguments to update one Lotterylog.
     * @example
     * // Update one Lotterylog
     * const lotterylog = await prisma.lotterylog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LotterylogUpdateArgs>(
      args: SelectSubset<T, LotterylogUpdateArgs>
    ): Prisma__LotterylogClient<LotterylogGetPayload<T>>

    /**
     * Delete zero or more Lotterylogs.
     * @param {LotterylogDeleteManyArgs} args - Arguments to filter Lotterylogs to delete.
     * @example
     * // Delete a few Lotterylogs
     * const { count } = await prisma.lotterylog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LotterylogDeleteManyArgs>(
      args?: SelectSubset<T, LotterylogDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lotterylogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotterylogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lotterylogs
     * const lotterylog = await prisma.lotterylog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LotterylogUpdateManyArgs>(
      args: SelectSubset<T, LotterylogUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lotterylog.
     * @param {LotterylogUpsertArgs} args - Arguments to update or create a Lotterylog.
     * @example
     * // Update or create a Lotterylog
     * const lotterylog = await prisma.lotterylog.upsert({
     *   create: {
     *     // ... data to create a Lotterylog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lotterylog we want to update
     *   }
     * })
    **/
    upsert<T extends LotterylogUpsertArgs>(
      args: SelectSubset<T, LotterylogUpsertArgs>
    ): Prisma__LotterylogClient<LotterylogGetPayload<T>>

    /**
     * Count the number of Lotterylogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotterylogCountArgs} args - Arguments to filter Lotterylogs to count.
     * @example
     * // Count the number of Lotterylogs
     * const count = await prisma.lotterylog.count({
     *   where: {
     *     // ... the filter for the Lotterylogs we want to count
     *   }
     * })
    **/
    count<T extends LotterylogCountArgs>(
      args?: Subset<T, LotterylogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LotterylogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lotterylog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotterylogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LotterylogAggregateArgs>(args: Subset<T, LotterylogAggregateArgs>): Prisma.PrismaPromise<GetLotterylogAggregateType<T>>

    /**
     * Group by Lotterylog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotterylogGroupByArgs} args - Group by arguments.
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
      T extends LotterylogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LotterylogGroupByArgs['orderBy'] }
        : { orderBy?: LotterylogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LotterylogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLotterylogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Lotterylog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LotterylogClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Lotterylog base type for findUnique actions
   */
  export type LotterylogFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Lotterylog
     */
    select?: LotterylogSelect | null
    /**
     * Filter, which Lotterylog to fetch.
     */
    where: LotterylogWhereUniqueInput
  }

  /**
   * Lotterylog findUnique
   */
  export interface LotterylogFindUniqueArgs extends LotterylogFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Lotterylog findUniqueOrThrow
   */
  export type LotterylogFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Lotterylog
     */
    select?: LotterylogSelect | null
    /**
     * Filter, which Lotterylog to fetch.
     */
    where: LotterylogWhereUniqueInput
  }


  /**
   * Lotterylog base type for findFirst actions
   */
  export type LotterylogFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Lotterylog
     */
    select?: LotterylogSelect | null
    /**
     * Filter, which Lotterylog to fetch.
     */
    where?: LotterylogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotterylogs to fetch.
     */
    orderBy?: Enumerable<LotterylogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lotterylogs.
     */
    cursor?: LotterylogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotterylogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotterylogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lotterylogs.
     */
    distinct?: Enumerable<LotterylogScalarFieldEnum>
  }

  /**
   * Lotterylog findFirst
   */
  export interface LotterylogFindFirstArgs extends LotterylogFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Lotterylog findFirstOrThrow
   */
  export type LotterylogFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Lotterylog
     */
    select?: LotterylogSelect | null
    /**
     * Filter, which Lotterylog to fetch.
     */
    where?: LotterylogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotterylogs to fetch.
     */
    orderBy?: Enumerable<LotterylogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lotterylogs.
     */
    cursor?: LotterylogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotterylogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotterylogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lotterylogs.
     */
    distinct?: Enumerable<LotterylogScalarFieldEnum>
  }


  /**
   * Lotterylog findMany
   */
  export type LotterylogFindManyArgs = {
    /**
     * Select specific fields to fetch from the Lotterylog
     */
    select?: LotterylogSelect | null
    /**
     * Filter, which Lotterylogs to fetch.
     */
    where?: LotterylogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotterylogs to fetch.
     */
    orderBy?: Enumerable<LotterylogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lotterylogs.
     */
    cursor?: LotterylogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotterylogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotterylogs.
     */
    skip?: number
    distinct?: Enumerable<LotterylogScalarFieldEnum>
  }


  /**
   * Lotterylog create
   */
  export type LotterylogCreateArgs = {
    /**
     * Select specific fields to fetch from the Lotterylog
     */
    select?: LotterylogSelect | null
    /**
     * The data needed to create a Lotterylog.
     */
    data: XOR<LotterylogCreateInput, LotterylogUncheckedCreateInput>
  }


  /**
   * Lotterylog createMany
   */
  export type LotterylogCreateManyArgs = {
    /**
     * The data used to create many Lotterylogs.
     */
    data: Enumerable<LotterylogCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Lotterylog update
   */
  export type LotterylogUpdateArgs = {
    /**
     * Select specific fields to fetch from the Lotterylog
     */
    select?: LotterylogSelect | null
    /**
     * The data needed to update a Lotterylog.
     */
    data: XOR<LotterylogUpdateInput, LotterylogUncheckedUpdateInput>
    /**
     * Choose, which Lotterylog to update.
     */
    where: LotterylogWhereUniqueInput
  }


  /**
   * Lotterylog updateMany
   */
  export type LotterylogUpdateManyArgs = {
    /**
     * The data used to update Lotterylogs.
     */
    data: XOR<LotterylogUpdateManyMutationInput, LotterylogUncheckedUpdateManyInput>
    /**
     * Filter which Lotterylogs to update
     */
    where?: LotterylogWhereInput
  }


  /**
   * Lotterylog upsert
   */
  export type LotterylogUpsertArgs = {
    /**
     * Select specific fields to fetch from the Lotterylog
     */
    select?: LotterylogSelect | null
    /**
     * The filter to search for the Lotterylog to update in case it exists.
     */
    where: LotterylogWhereUniqueInput
    /**
     * In case the Lotterylog found by the `where` argument doesn't exist, create a new Lotterylog with this data.
     */
    create: XOR<LotterylogCreateInput, LotterylogUncheckedCreateInput>
    /**
     * In case the Lotterylog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LotterylogUpdateInput, LotterylogUncheckedUpdateInput>
  }


  /**
   * Lotterylog delete
   */
  export type LotterylogDeleteArgs = {
    /**
     * Select specific fields to fetch from the Lotterylog
     */
    select?: LotterylogSelect | null
    /**
     * Filter which Lotterylog to delete.
     */
    where: LotterylogWhereUniqueInput
  }


  /**
   * Lotterylog deleteMany
   */
  export type LotterylogDeleteManyArgs = {
    /**
     * Filter which Lotterylogs to delete
     */
    where?: LotterylogWhereInput
  }


  /**
   * Lotterylog without action
   */
  export type LotterylogArgs = {
    /**
     * Select specific fields to fetch from the Lotterylog
     */
    select?: LotterylogSelect | null
  }



  /**
   * Model Score_pool
   */


  export type AggregateScore_pool = {
    _count: Score_poolCountAggregateOutputType | null
    _avg: Score_poolAvgAggregateOutputType | null
    _sum: Score_poolSumAggregateOutputType | null
    _min: Score_poolMinAggregateOutputType | null
    _max: Score_poolMaxAggregateOutputType | null
  }

  export type Score_poolAvgAggregateOutputType = {
    id: number | null
    score_pool: number | null
  }

  export type Score_poolSumAggregateOutputType = {
    id: number | null
    score_pool: number | null
  }

  export type Score_poolMinAggregateOutputType = {
    id: number | null
    score_pool: number | null
    change_time: Date | null
  }

  export type Score_poolMaxAggregateOutputType = {
    id: number | null
    score_pool: number | null
    change_time: Date | null
  }

  export type Score_poolCountAggregateOutputType = {
    id: number
    score_pool: number
    change_time: number
    _all: number
  }


  export type Score_poolAvgAggregateInputType = {
    id?: true
    score_pool?: true
  }

  export type Score_poolSumAggregateInputType = {
    id?: true
    score_pool?: true
  }

  export type Score_poolMinAggregateInputType = {
    id?: true
    score_pool?: true
    change_time?: true
  }

  export type Score_poolMaxAggregateInputType = {
    id?: true
    score_pool?: true
    change_time?: true
  }

  export type Score_poolCountAggregateInputType = {
    id?: true
    score_pool?: true
    change_time?: true
    _all?: true
  }

  export type Score_poolAggregateArgs = {
    /**
     * Filter which Score_pool to aggregate.
     */
    where?: Score_poolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Score_pools to fetch.
     */
    orderBy?: Enumerable<Score_poolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Score_poolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Score_pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Score_pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Score_pools
    **/
    _count?: true | Score_poolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Score_poolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Score_poolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Score_poolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Score_poolMaxAggregateInputType
  }

  export type GetScore_poolAggregateType<T extends Score_poolAggregateArgs> = {
        [P in keyof T & keyof AggregateScore_pool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScore_pool[P]>
      : GetScalarType<T[P], AggregateScore_pool[P]>
  }




  export type Score_poolGroupByArgs = {
    where?: Score_poolWhereInput
    orderBy?: Enumerable<Score_poolOrderByWithAggregationInput>
    by: Score_poolScalarFieldEnum[]
    having?: Score_poolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Score_poolCountAggregateInputType | true
    _avg?: Score_poolAvgAggregateInputType
    _sum?: Score_poolSumAggregateInputType
    _min?: Score_poolMinAggregateInputType
    _max?: Score_poolMaxAggregateInputType
  }


  export type Score_poolGroupByOutputType = {
    id: number
    score_pool: number
    change_time: Date
    _count: Score_poolCountAggregateOutputType | null
    _avg: Score_poolAvgAggregateOutputType | null
    _sum: Score_poolSumAggregateOutputType | null
    _min: Score_poolMinAggregateOutputType | null
    _max: Score_poolMaxAggregateOutputType | null
  }

  type GetScore_poolGroupByPayload<T extends Score_poolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Score_poolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Score_poolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Score_poolGroupByOutputType[P]>
            : GetScalarType<T[P], Score_poolGroupByOutputType[P]>
        }
      >
    >


  export type Score_poolSelect = {
    id?: boolean
    score_pool?: boolean
    change_time?: boolean
  }


  export type Score_poolGetPayload<S extends boolean | null | undefined | Score_poolArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Score_pool :
    S extends undefined ? never :
    S extends { include: any } & (Score_poolArgs | Score_poolFindManyArgs)
    ? Score_pool 
    : S extends { select: any } & (Score_poolArgs | Score_poolFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Score_pool ? Score_pool[P] : never
  } 
      : Score_pool


  type Score_poolCountArgs = 
    Omit<Score_poolFindManyArgs, 'select' | 'include'> & {
      select?: Score_poolCountAggregateInputType | true
    }

  export interface Score_poolDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Score_pool that matches the filter.
     * @param {Score_poolFindUniqueArgs} args - Arguments to find a Score_pool
     * @example
     * // Get one Score_pool
     * const score_pool = await prisma.score_pool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Score_poolFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Score_poolFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Score_pool'> extends True ? Prisma__Score_poolClient<Score_poolGetPayload<T>> : Prisma__Score_poolClient<Score_poolGetPayload<T> | null, null>

    /**
     * Find one Score_pool that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Score_poolFindUniqueOrThrowArgs} args - Arguments to find a Score_pool
     * @example
     * // Get one Score_pool
     * const score_pool = await prisma.score_pool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Score_poolFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Score_poolFindUniqueOrThrowArgs>
    ): Prisma__Score_poolClient<Score_poolGetPayload<T>>

    /**
     * Find the first Score_pool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Score_poolFindFirstArgs} args - Arguments to find a Score_pool
     * @example
     * // Get one Score_pool
     * const score_pool = await prisma.score_pool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Score_poolFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Score_poolFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Score_pool'> extends True ? Prisma__Score_poolClient<Score_poolGetPayload<T>> : Prisma__Score_poolClient<Score_poolGetPayload<T> | null, null>

    /**
     * Find the first Score_pool that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Score_poolFindFirstOrThrowArgs} args - Arguments to find a Score_pool
     * @example
     * // Get one Score_pool
     * const score_pool = await prisma.score_pool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Score_poolFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Score_poolFindFirstOrThrowArgs>
    ): Prisma__Score_poolClient<Score_poolGetPayload<T>>

    /**
     * Find zero or more Score_pools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Score_poolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Score_pools
     * const score_pools = await prisma.score_pool.findMany()
     * 
     * // Get first 10 Score_pools
     * const score_pools = await prisma.score_pool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const score_poolWithIdOnly = await prisma.score_pool.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Score_poolFindManyArgs>(
      args?: SelectSubset<T, Score_poolFindManyArgs>
    ): Prisma.PrismaPromise<Array<Score_poolGetPayload<T>>>

    /**
     * Create a Score_pool.
     * @param {Score_poolCreateArgs} args - Arguments to create a Score_pool.
     * @example
     * // Create one Score_pool
     * const Score_pool = await prisma.score_pool.create({
     *   data: {
     *     // ... data to create a Score_pool
     *   }
     * })
     * 
    **/
    create<T extends Score_poolCreateArgs>(
      args: SelectSubset<T, Score_poolCreateArgs>
    ): Prisma__Score_poolClient<Score_poolGetPayload<T>>

    /**
     * Create many Score_pools.
     *     @param {Score_poolCreateManyArgs} args - Arguments to create many Score_pools.
     *     @example
     *     // Create many Score_pools
     *     const score_pool = await prisma.score_pool.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Score_poolCreateManyArgs>(
      args?: SelectSubset<T, Score_poolCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Score_pool.
     * @param {Score_poolDeleteArgs} args - Arguments to delete one Score_pool.
     * @example
     * // Delete one Score_pool
     * const Score_pool = await prisma.score_pool.delete({
     *   where: {
     *     // ... filter to delete one Score_pool
     *   }
     * })
     * 
    **/
    delete<T extends Score_poolDeleteArgs>(
      args: SelectSubset<T, Score_poolDeleteArgs>
    ): Prisma__Score_poolClient<Score_poolGetPayload<T>>

    /**
     * Update one Score_pool.
     * @param {Score_poolUpdateArgs} args - Arguments to update one Score_pool.
     * @example
     * // Update one Score_pool
     * const score_pool = await prisma.score_pool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Score_poolUpdateArgs>(
      args: SelectSubset<T, Score_poolUpdateArgs>
    ): Prisma__Score_poolClient<Score_poolGetPayload<T>>

    /**
     * Delete zero or more Score_pools.
     * @param {Score_poolDeleteManyArgs} args - Arguments to filter Score_pools to delete.
     * @example
     * // Delete a few Score_pools
     * const { count } = await prisma.score_pool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Score_poolDeleteManyArgs>(
      args?: SelectSubset<T, Score_poolDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Score_pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Score_poolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Score_pools
     * const score_pool = await prisma.score_pool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Score_poolUpdateManyArgs>(
      args: SelectSubset<T, Score_poolUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Score_pool.
     * @param {Score_poolUpsertArgs} args - Arguments to update or create a Score_pool.
     * @example
     * // Update or create a Score_pool
     * const score_pool = await prisma.score_pool.upsert({
     *   create: {
     *     // ... data to create a Score_pool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Score_pool we want to update
     *   }
     * })
    **/
    upsert<T extends Score_poolUpsertArgs>(
      args: SelectSubset<T, Score_poolUpsertArgs>
    ): Prisma__Score_poolClient<Score_poolGetPayload<T>>

    /**
     * Count the number of Score_pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Score_poolCountArgs} args - Arguments to filter Score_pools to count.
     * @example
     * // Count the number of Score_pools
     * const count = await prisma.score_pool.count({
     *   where: {
     *     // ... the filter for the Score_pools we want to count
     *   }
     * })
    **/
    count<T extends Score_poolCountArgs>(
      args?: Subset<T, Score_poolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Score_poolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Score_pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Score_poolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Score_poolAggregateArgs>(args: Subset<T, Score_poolAggregateArgs>): Prisma.PrismaPromise<GetScore_poolAggregateType<T>>

    /**
     * Group by Score_pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Score_poolGroupByArgs} args - Group by arguments.
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
      T extends Score_poolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Score_poolGroupByArgs['orderBy'] }
        : { orderBy?: Score_poolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Score_poolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScore_poolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Score_pool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Score_poolClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Score_pool base type for findUnique actions
   */
  export type Score_poolFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Score_pool
     */
    select?: Score_poolSelect | null
    /**
     * Filter, which Score_pool to fetch.
     */
    where: Score_poolWhereUniqueInput
  }

  /**
   * Score_pool findUnique
   */
  export interface Score_poolFindUniqueArgs extends Score_poolFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Score_pool findUniqueOrThrow
   */
  export type Score_poolFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Score_pool
     */
    select?: Score_poolSelect | null
    /**
     * Filter, which Score_pool to fetch.
     */
    where: Score_poolWhereUniqueInput
  }


  /**
   * Score_pool base type for findFirst actions
   */
  export type Score_poolFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Score_pool
     */
    select?: Score_poolSelect | null
    /**
     * Filter, which Score_pool to fetch.
     */
    where?: Score_poolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Score_pools to fetch.
     */
    orderBy?: Enumerable<Score_poolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Score_pools.
     */
    cursor?: Score_poolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Score_pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Score_pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Score_pools.
     */
    distinct?: Enumerable<Score_poolScalarFieldEnum>
  }

  /**
   * Score_pool findFirst
   */
  export interface Score_poolFindFirstArgs extends Score_poolFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Score_pool findFirstOrThrow
   */
  export type Score_poolFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Score_pool
     */
    select?: Score_poolSelect | null
    /**
     * Filter, which Score_pool to fetch.
     */
    where?: Score_poolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Score_pools to fetch.
     */
    orderBy?: Enumerable<Score_poolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Score_pools.
     */
    cursor?: Score_poolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Score_pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Score_pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Score_pools.
     */
    distinct?: Enumerable<Score_poolScalarFieldEnum>
  }


  /**
   * Score_pool findMany
   */
  export type Score_poolFindManyArgs = {
    /**
     * Select specific fields to fetch from the Score_pool
     */
    select?: Score_poolSelect | null
    /**
     * Filter, which Score_pools to fetch.
     */
    where?: Score_poolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Score_pools to fetch.
     */
    orderBy?: Enumerable<Score_poolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Score_pools.
     */
    cursor?: Score_poolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Score_pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Score_pools.
     */
    skip?: number
    distinct?: Enumerable<Score_poolScalarFieldEnum>
  }


  /**
   * Score_pool create
   */
  export type Score_poolCreateArgs = {
    /**
     * Select specific fields to fetch from the Score_pool
     */
    select?: Score_poolSelect | null
    /**
     * The data needed to create a Score_pool.
     */
    data: XOR<Score_poolCreateInput, Score_poolUncheckedCreateInput>
  }


  /**
   * Score_pool createMany
   */
  export type Score_poolCreateManyArgs = {
    /**
     * The data used to create many Score_pools.
     */
    data: Enumerable<Score_poolCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Score_pool update
   */
  export type Score_poolUpdateArgs = {
    /**
     * Select specific fields to fetch from the Score_pool
     */
    select?: Score_poolSelect | null
    /**
     * The data needed to update a Score_pool.
     */
    data: XOR<Score_poolUpdateInput, Score_poolUncheckedUpdateInput>
    /**
     * Choose, which Score_pool to update.
     */
    where: Score_poolWhereUniqueInput
  }


  /**
   * Score_pool updateMany
   */
  export type Score_poolUpdateManyArgs = {
    /**
     * The data used to update Score_pools.
     */
    data: XOR<Score_poolUpdateManyMutationInput, Score_poolUncheckedUpdateManyInput>
    /**
     * Filter which Score_pools to update
     */
    where?: Score_poolWhereInput
  }


  /**
   * Score_pool upsert
   */
  export type Score_poolUpsertArgs = {
    /**
     * Select specific fields to fetch from the Score_pool
     */
    select?: Score_poolSelect | null
    /**
     * The filter to search for the Score_pool to update in case it exists.
     */
    where: Score_poolWhereUniqueInput
    /**
     * In case the Score_pool found by the `where` argument doesn't exist, create a new Score_pool with this data.
     */
    create: XOR<Score_poolCreateInput, Score_poolUncheckedCreateInput>
    /**
     * In case the Score_pool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Score_poolUpdateInput, Score_poolUncheckedUpdateInput>
  }


  /**
   * Score_pool delete
   */
  export type Score_poolDeleteArgs = {
    /**
     * Select specific fields to fetch from the Score_pool
     */
    select?: Score_poolSelect | null
    /**
     * Filter which Score_pool to delete.
     */
    where: Score_poolWhereUniqueInput
  }


  /**
   * Score_pool deleteMany
   */
  export type Score_poolDeleteManyArgs = {
    /**
     * Filter which Score_pools to delete
     */
    where?: Score_poolWhereInput
  }


  /**
   * Score_pool without action
   */
  export type Score_poolArgs = {
    /**
     * Select specific fields to fetch from the Score_pool
     */
    select?: Score_poolSelect | null
  }



  /**
   * Model Scoretotal
   */


  export type AggregateScoretotal = {
    _count: ScoretotalCountAggregateOutputType | null
    _avg: ScoretotalAvgAggregateOutputType | null
    _sum: ScoretotalSumAggregateOutputType | null
    _min: ScoretotalMinAggregateOutputType | null
    _max: ScoretotalMaxAggregateOutputType | null
  }

  export type ScoretotalAvgAggregateOutputType = {
    serve_id: number | null
    winScoreTotal: number | null
    lotteryTotal: number | null
  }

  export type ScoretotalSumAggregateOutputType = {
    serve_id: number | null
    winScoreTotal: number | null
    lotteryTotal: number | null
  }

  export type ScoretotalMinAggregateOutputType = {
    serve_id: number | null
    winScoreTotal: number | null
    lotteryTotal: number | null
    updateTime: Date | null
  }

  export type ScoretotalMaxAggregateOutputType = {
    serve_id: number | null
    winScoreTotal: number | null
    lotteryTotal: number | null
    updateTime: Date | null
  }

  export type ScoretotalCountAggregateOutputType = {
    serve_id: number
    winScoreTotal: number
    lotteryTotal: number
    updateTime: number
    _all: number
  }


  export type ScoretotalAvgAggregateInputType = {
    serve_id?: true
    winScoreTotal?: true
    lotteryTotal?: true
  }

  export type ScoretotalSumAggregateInputType = {
    serve_id?: true
    winScoreTotal?: true
    lotteryTotal?: true
  }

  export type ScoretotalMinAggregateInputType = {
    serve_id?: true
    winScoreTotal?: true
    lotteryTotal?: true
    updateTime?: true
  }

  export type ScoretotalMaxAggregateInputType = {
    serve_id?: true
    winScoreTotal?: true
    lotteryTotal?: true
    updateTime?: true
  }

  export type ScoretotalCountAggregateInputType = {
    serve_id?: true
    winScoreTotal?: true
    lotteryTotal?: true
    updateTime?: true
    _all?: true
  }

  export type ScoretotalAggregateArgs = {
    /**
     * Filter which Scoretotal to aggregate.
     */
    where?: ScoretotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scoretotals to fetch.
     */
    orderBy?: Enumerable<ScoretotalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoretotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scoretotals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scoretotals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scoretotals
    **/
    _count?: true | ScoretotalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoretotalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoretotalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoretotalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoretotalMaxAggregateInputType
  }

  export type GetScoretotalAggregateType<T extends ScoretotalAggregateArgs> = {
        [P in keyof T & keyof AggregateScoretotal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScoretotal[P]>
      : GetScalarType<T[P], AggregateScoretotal[P]>
  }




  export type ScoretotalGroupByArgs = {
    where?: ScoretotalWhereInput
    orderBy?: Enumerable<ScoretotalOrderByWithAggregationInput>
    by: ScoretotalScalarFieldEnum[]
    having?: ScoretotalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoretotalCountAggregateInputType | true
    _avg?: ScoretotalAvgAggregateInputType
    _sum?: ScoretotalSumAggregateInputType
    _min?: ScoretotalMinAggregateInputType
    _max?: ScoretotalMaxAggregateInputType
  }


  export type ScoretotalGroupByOutputType = {
    serve_id: number
    winScoreTotal: number
    lotteryTotal: number
    updateTime: Date
    _count: ScoretotalCountAggregateOutputType | null
    _avg: ScoretotalAvgAggregateOutputType | null
    _sum: ScoretotalSumAggregateOutputType | null
    _min: ScoretotalMinAggregateOutputType | null
    _max: ScoretotalMaxAggregateOutputType | null
  }

  type GetScoretotalGroupByPayload<T extends ScoretotalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ScoretotalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoretotalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoretotalGroupByOutputType[P]>
            : GetScalarType<T[P], ScoretotalGroupByOutputType[P]>
        }
      >
    >


  export type ScoretotalSelect = {
    serve_id?: boolean
    winScoreTotal?: boolean
    lotteryTotal?: boolean
    updateTime?: boolean
  }


  export type ScoretotalGetPayload<S extends boolean | null | undefined | ScoretotalArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Scoretotal :
    S extends undefined ? never :
    S extends { include: any } & (ScoretotalArgs | ScoretotalFindManyArgs)
    ? Scoretotal 
    : S extends { select: any } & (ScoretotalArgs | ScoretotalFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Scoretotal ? Scoretotal[P] : never
  } 
      : Scoretotal


  type ScoretotalCountArgs = 
    Omit<ScoretotalFindManyArgs, 'select' | 'include'> & {
      select?: ScoretotalCountAggregateInputType | true
    }

  export interface ScoretotalDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Scoretotal that matches the filter.
     * @param {ScoretotalFindUniqueArgs} args - Arguments to find a Scoretotal
     * @example
     * // Get one Scoretotal
     * const scoretotal = await prisma.scoretotal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ScoretotalFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ScoretotalFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Scoretotal'> extends True ? Prisma__ScoretotalClient<ScoretotalGetPayload<T>> : Prisma__ScoretotalClient<ScoretotalGetPayload<T> | null, null>

    /**
     * Find one Scoretotal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ScoretotalFindUniqueOrThrowArgs} args - Arguments to find a Scoretotal
     * @example
     * // Get one Scoretotal
     * const scoretotal = await prisma.scoretotal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ScoretotalFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ScoretotalFindUniqueOrThrowArgs>
    ): Prisma__ScoretotalClient<ScoretotalGetPayload<T>>

    /**
     * Find the first Scoretotal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoretotalFindFirstArgs} args - Arguments to find a Scoretotal
     * @example
     * // Get one Scoretotal
     * const scoretotal = await prisma.scoretotal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ScoretotalFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ScoretotalFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Scoretotal'> extends True ? Prisma__ScoretotalClient<ScoretotalGetPayload<T>> : Prisma__ScoretotalClient<ScoretotalGetPayload<T> | null, null>

    /**
     * Find the first Scoretotal that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoretotalFindFirstOrThrowArgs} args - Arguments to find a Scoretotal
     * @example
     * // Get one Scoretotal
     * const scoretotal = await prisma.scoretotal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ScoretotalFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ScoretotalFindFirstOrThrowArgs>
    ): Prisma__ScoretotalClient<ScoretotalGetPayload<T>>

    /**
     * Find zero or more Scoretotals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoretotalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scoretotals
     * const scoretotals = await prisma.scoretotal.findMany()
     * 
     * // Get first 10 Scoretotals
     * const scoretotals = await prisma.scoretotal.findMany({ take: 10 })
     * 
     * // Only select the `serve_id`
     * const scoretotalWithServe_idOnly = await prisma.scoretotal.findMany({ select: { serve_id: true } })
     * 
    **/
    findMany<T extends ScoretotalFindManyArgs>(
      args?: SelectSubset<T, ScoretotalFindManyArgs>
    ): Prisma.PrismaPromise<Array<ScoretotalGetPayload<T>>>

    /**
     * Create a Scoretotal.
     * @param {ScoretotalCreateArgs} args - Arguments to create a Scoretotal.
     * @example
     * // Create one Scoretotal
     * const Scoretotal = await prisma.scoretotal.create({
     *   data: {
     *     // ... data to create a Scoretotal
     *   }
     * })
     * 
    **/
    create<T extends ScoretotalCreateArgs>(
      args: SelectSubset<T, ScoretotalCreateArgs>
    ): Prisma__ScoretotalClient<ScoretotalGetPayload<T>>

    /**
     * Create many Scoretotals.
     *     @param {ScoretotalCreateManyArgs} args - Arguments to create many Scoretotals.
     *     @example
     *     // Create many Scoretotals
     *     const scoretotal = await prisma.scoretotal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ScoretotalCreateManyArgs>(
      args?: SelectSubset<T, ScoretotalCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Scoretotal.
     * @param {ScoretotalDeleteArgs} args - Arguments to delete one Scoretotal.
     * @example
     * // Delete one Scoretotal
     * const Scoretotal = await prisma.scoretotal.delete({
     *   where: {
     *     // ... filter to delete one Scoretotal
     *   }
     * })
     * 
    **/
    delete<T extends ScoretotalDeleteArgs>(
      args: SelectSubset<T, ScoretotalDeleteArgs>
    ): Prisma__ScoretotalClient<ScoretotalGetPayload<T>>

    /**
     * Update one Scoretotal.
     * @param {ScoretotalUpdateArgs} args - Arguments to update one Scoretotal.
     * @example
     * // Update one Scoretotal
     * const scoretotal = await prisma.scoretotal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ScoretotalUpdateArgs>(
      args: SelectSubset<T, ScoretotalUpdateArgs>
    ): Prisma__ScoretotalClient<ScoretotalGetPayload<T>>

    /**
     * Delete zero or more Scoretotals.
     * @param {ScoretotalDeleteManyArgs} args - Arguments to filter Scoretotals to delete.
     * @example
     * // Delete a few Scoretotals
     * const { count } = await prisma.scoretotal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ScoretotalDeleteManyArgs>(
      args?: SelectSubset<T, ScoretotalDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scoretotals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoretotalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scoretotals
     * const scoretotal = await prisma.scoretotal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ScoretotalUpdateManyArgs>(
      args: SelectSubset<T, ScoretotalUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Scoretotal.
     * @param {ScoretotalUpsertArgs} args - Arguments to update or create a Scoretotal.
     * @example
     * // Update or create a Scoretotal
     * const scoretotal = await prisma.scoretotal.upsert({
     *   create: {
     *     // ... data to create a Scoretotal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scoretotal we want to update
     *   }
     * })
    **/
    upsert<T extends ScoretotalUpsertArgs>(
      args: SelectSubset<T, ScoretotalUpsertArgs>
    ): Prisma__ScoretotalClient<ScoretotalGetPayload<T>>

    /**
     * Count the number of Scoretotals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoretotalCountArgs} args - Arguments to filter Scoretotals to count.
     * @example
     * // Count the number of Scoretotals
     * const count = await prisma.scoretotal.count({
     *   where: {
     *     // ... the filter for the Scoretotals we want to count
     *   }
     * })
    **/
    count<T extends ScoretotalCountArgs>(
      args?: Subset<T, ScoretotalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoretotalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scoretotal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoretotalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScoretotalAggregateArgs>(args: Subset<T, ScoretotalAggregateArgs>): Prisma.PrismaPromise<GetScoretotalAggregateType<T>>

    /**
     * Group by Scoretotal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoretotalGroupByArgs} args - Group by arguments.
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
      T extends ScoretotalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoretotalGroupByArgs['orderBy'] }
        : { orderBy?: ScoretotalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScoretotalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoretotalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Scoretotal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ScoretotalClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Scoretotal base type for findUnique actions
   */
  export type ScoretotalFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Scoretotal
     */
    select?: ScoretotalSelect | null
    /**
     * Filter, which Scoretotal to fetch.
     */
    where: ScoretotalWhereUniqueInput
  }

  /**
   * Scoretotal findUnique
   */
  export interface ScoretotalFindUniqueArgs extends ScoretotalFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Scoretotal findUniqueOrThrow
   */
  export type ScoretotalFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Scoretotal
     */
    select?: ScoretotalSelect | null
    /**
     * Filter, which Scoretotal to fetch.
     */
    where: ScoretotalWhereUniqueInput
  }


  /**
   * Scoretotal base type for findFirst actions
   */
  export type ScoretotalFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Scoretotal
     */
    select?: ScoretotalSelect | null
    /**
     * Filter, which Scoretotal to fetch.
     */
    where?: ScoretotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scoretotals to fetch.
     */
    orderBy?: Enumerable<ScoretotalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scoretotals.
     */
    cursor?: ScoretotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scoretotals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scoretotals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scoretotals.
     */
    distinct?: Enumerable<ScoretotalScalarFieldEnum>
  }

  /**
   * Scoretotal findFirst
   */
  export interface ScoretotalFindFirstArgs extends ScoretotalFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Scoretotal findFirstOrThrow
   */
  export type ScoretotalFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Scoretotal
     */
    select?: ScoretotalSelect | null
    /**
     * Filter, which Scoretotal to fetch.
     */
    where?: ScoretotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scoretotals to fetch.
     */
    orderBy?: Enumerable<ScoretotalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scoretotals.
     */
    cursor?: ScoretotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scoretotals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scoretotals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scoretotals.
     */
    distinct?: Enumerable<ScoretotalScalarFieldEnum>
  }


  /**
   * Scoretotal findMany
   */
  export type ScoretotalFindManyArgs = {
    /**
     * Select specific fields to fetch from the Scoretotal
     */
    select?: ScoretotalSelect | null
    /**
     * Filter, which Scoretotals to fetch.
     */
    where?: ScoretotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scoretotals to fetch.
     */
    orderBy?: Enumerable<ScoretotalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scoretotals.
     */
    cursor?: ScoretotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scoretotals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scoretotals.
     */
    skip?: number
    distinct?: Enumerable<ScoretotalScalarFieldEnum>
  }


  /**
   * Scoretotal create
   */
  export type ScoretotalCreateArgs = {
    /**
     * Select specific fields to fetch from the Scoretotal
     */
    select?: ScoretotalSelect | null
    /**
     * The data needed to create a Scoretotal.
     */
    data: XOR<ScoretotalCreateInput, ScoretotalUncheckedCreateInput>
  }


  /**
   * Scoretotal createMany
   */
  export type ScoretotalCreateManyArgs = {
    /**
     * The data used to create many Scoretotals.
     */
    data: Enumerable<ScoretotalCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Scoretotal update
   */
  export type ScoretotalUpdateArgs = {
    /**
     * Select specific fields to fetch from the Scoretotal
     */
    select?: ScoretotalSelect | null
    /**
     * The data needed to update a Scoretotal.
     */
    data: XOR<ScoretotalUpdateInput, ScoretotalUncheckedUpdateInput>
    /**
     * Choose, which Scoretotal to update.
     */
    where: ScoretotalWhereUniqueInput
  }


  /**
   * Scoretotal updateMany
   */
  export type ScoretotalUpdateManyArgs = {
    /**
     * The data used to update Scoretotals.
     */
    data: XOR<ScoretotalUpdateManyMutationInput, ScoretotalUncheckedUpdateManyInput>
    /**
     * Filter which Scoretotals to update
     */
    where?: ScoretotalWhereInput
  }


  /**
   * Scoretotal upsert
   */
  export type ScoretotalUpsertArgs = {
    /**
     * Select specific fields to fetch from the Scoretotal
     */
    select?: ScoretotalSelect | null
    /**
     * The filter to search for the Scoretotal to update in case it exists.
     */
    where: ScoretotalWhereUniqueInput
    /**
     * In case the Scoretotal found by the `where` argument doesn't exist, create a new Scoretotal with this data.
     */
    create: XOR<ScoretotalCreateInput, ScoretotalUncheckedCreateInput>
    /**
     * In case the Scoretotal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoretotalUpdateInput, ScoretotalUncheckedUpdateInput>
  }


  /**
   * Scoretotal delete
   */
  export type ScoretotalDeleteArgs = {
    /**
     * Select specific fields to fetch from the Scoretotal
     */
    select?: ScoretotalSelect | null
    /**
     * Filter which Scoretotal to delete.
     */
    where: ScoretotalWhereUniqueInput
  }


  /**
   * Scoretotal deleteMany
   */
  export type ScoretotalDeleteManyArgs = {
    /**
     * Filter which Scoretotals to delete
     */
    where?: ScoretotalWhereInput
  }


  /**
   * Scoretotal without action
   */
  export type ScoretotalArgs = {
    /**
     * Select specific fields to fetch from the Scoretotal
     */
    select?: ScoretotalSelect | null
  }



  /**
   * Model Scoretotallog
   */


  export type AggregateScoretotallog = {
    _count: ScoretotallogCountAggregateOutputType | null
    _avg: ScoretotallogAvgAggregateOutputType | null
    _sum: ScoretotallogSumAggregateOutputType | null
    _min: ScoretotallogMinAggregateOutputType | null
    _max: ScoretotallogMaxAggregateOutputType | null
  }

  export type ScoretotallogAvgAggregateOutputType = {
    id: number | null
    serve_id: number | null
    winscore: number | null
    lotteryCount: number | null
  }

  export type ScoretotallogSumAggregateOutputType = {
    id: number | null
    serve_id: number | null
    winscore: number | null
    lotteryCount: number | null
  }

  export type ScoretotallogMinAggregateOutputType = {
    id: number | null
    serve_id: number | null
    winscore: number | null
    lotteryCount: number | null
    CreateTime: Date | null
  }

  export type ScoretotallogMaxAggregateOutputType = {
    id: number | null
    serve_id: number | null
    winscore: number | null
    lotteryCount: number | null
    CreateTime: Date | null
  }

  export type ScoretotallogCountAggregateOutputType = {
    id: number
    serve_id: number
    winscore: number
    lotteryCount: number
    CreateTime: number
    _all: number
  }


  export type ScoretotallogAvgAggregateInputType = {
    id?: true
    serve_id?: true
    winscore?: true
    lotteryCount?: true
  }

  export type ScoretotallogSumAggregateInputType = {
    id?: true
    serve_id?: true
    winscore?: true
    lotteryCount?: true
  }

  export type ScoretotallogMinAggregateInputType = {
    id?: true
    serve_id?: true
    winscore?: true
    lotteryCount?: true
    CreateTime?: true
  }

  export type ScoretotallogMaxAggregateInputType = {
    id?: true
    serve_id?: true
    winscore?: true
    lotteryCount?: true
    CreateTime?: true
  }

  export type ScoretotallogCountAggregateInputType = {
    id?: true
    serve_id?: true
    winscore?: true
    lotteryCount?: true
    CreateTime?: true
    _all?: true
  }

  export type ScoretotallogAggregateArgs = {
    /**
     * Filter which Scoretotallog to aggregate.
     */
    where?: ScoretotallogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scoretotallogs to fetch.
     */
    orderBy?: Enumerable<ScoretotallogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoretotallogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scoretotallogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scoretotallogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scoretotallogs
    **/
    _count?: true | ScoretotallogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoretotallogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoretotallogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoretotallogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoretotallogMaxAggregateInputType
  }

  export type GetScoretotallogAggregateType<T extends ScoretotallogAggregateArgs> = {
        [P in keyof T & keyof AggregateScoretotallog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScoretotallog[P]>
      : GetScalarType<T[P], AggregateScoretotallog[P]>
  }




  export type ScoretotallogGroupByArgs = {
    where?: ScoretotallogWhereInput
    orderBy?: Enumerable<ScoretotallogOrderByWithAggregationInput>
    by: ScoretotallogScalarFieldEnum[]
    having?: ScoretotallogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoretotallogCountAggregateInputType | true
    _avg?: ScoretotallogAvgAggregateInputType
    _sum?: ScoretotallogSumAggregateInputType
    _min?: ScoretotallogMinAggregateInputType
    _max?: ScoretotallogMaxAggregateInputType
  }


  export type ScoretotallogGroupByOutputType = {
    id: number
    serve_id: number
    winscore: number
    lotteryCount: number
    CreateTime: Date
    _count: ScoretotallogCountAggregateOutputType | null
    _avg: ScoretotallogAvgAggregateOutputType | null
    _sum: ScoretotallogSumAggregateOutputType | null
    _min: ScoretotallogMinAggregateOutputType | null
    _max: ScoretotallogMaxAggregateOutputType | null
  }

  type GetScoretotallogGroupByPayload<T extends ScoretotallogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ScoretotallogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoretotallogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoretotallogGroupByOutputType[P]>
            : GetScalarType<T[P], ScoretotallogGroupByOutputType[P]>
        }
      >
    >


  export type ScoretotallogSelect = {
    id?: boolean
    serve_id?: boolean
    winscore?: boolean
    lotteryCount?: boolean
    CreateTime?: boolean
  }


  export type ScoretotallogGetPayload<S extends boolean | null | undefined | ScoretotallogArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Scoretotallog :
    S extends undefined ? never :
    S extends { include: any } & (ScoretotallogArgs | ScoretotallogFindManyArgs)
    ? Scoretotallog 
    : S extends { select: any } & (ScoretotallogArgs | ScoretotallogFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Scoretotallog ? Scoretotallog[P] : never
  } 
      : Scoretotallog


  type ScoretotallogCountArgs = 
    Omit<ScoretotallogFindManyArgs, 'select' | 'include'> & {
      select?: ScoretotallogCountAggregateInputType | true
    }

  export interface ScoretotallogDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Scoretotallog that matches the filter.
     * @param {ScoretotallogFindUniqueArgs} args - Arguments to find a Scoretotallog
     * @example
     * // Get one Scoretotallog
     * const scoretotallog = await prisma.scoretotallog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ScoretotallogFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ScoretotallogFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Scoretotallog'> extends True ? Prisma__ScoretotallogClient<ScoretotallogGetPayload<T>> : Prisma__ScoretotallogClient<ScoretotallogGetPayload<T> | null, null>

    /**
     * Find one Scoretotallog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ScoretotallogFindUniqueOrThrowArgs} args - Arguments to find a Scoretotallog
     * @example
     * // Get one Scoretotallog
     * const scoretotallog = await prisma.scoretotallog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ScoretotallogFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ScoretotallogFindUniqueOrThrowArgs>
    ): Prisma__ScoretotallogClient<ScoretotallogGetPayload<T>>

    /**
     * Find the first Scoretotallog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoretotallogFindFirstArgs} args - Arguments to find a Scoretotallog
     * @example
     * // Get one Scoretotallog
     * const scoretotallog = await prisma.scoretotallog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ScoretotallogFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ScoretotallogFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Scoretotallog'> extends True ? Prisma__ScoretotallogClient<ScoretotallogGetPayload<T>> : Prisma__ScoretotallogClient<ScoretotallogGetPayload<T> | null, null>

    /**
     * Find the first Scoretotallog that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoretotallogFindFirstOrThrowArgs} args - Arguments to find a Scoretotallog
     * @example
     * // Get one Scoretotallog
     * const scoretotallog = await prisma.scoretotallog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ScoretotallogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ScoretotallogFindFirstOrThrowArgs>
    ): Prisma__ScoretotallogClient<ScoretotallogGetPayload<T>>

    /**
     * Find zero or more Scoretotallogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoretotallogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scoretotallogs
     * const scoretotallogs = await prisma.scoretotallog.findMany()
     * 
     * // Get first 10 Scoretotallogs
     * const scoretotallogs = await prisma.scoretotallog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoretotallogWithIdOnly = await prisma.scoretotallog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ScoretotallogFindManyArgs>(
      args?: SelectSubset<T, ScoretotallogFindManyArgs>
    ): Prisma.PrismaPromise<Array<ScoretotallogGetPayload<T>>>

    /**
     * Create a Scoretotallog.
     * @param {ScoretotallogCreateArgs} args - Arguments to create a Scoretotallog.
     * @example
     * // Create one Scoretotallog
     * const Scoretotallog = await prisma.scoretotallog.create({
     *   data: {
     *     // ... data to create a Scoretotallog
     *   }
     * })
     * 
    **/
    create<T extends ScoretotallogCreateArgs>(
      args: SelectSubset<T, ScoretotallogCreateArgs>
    ): Prisma__ScoretotallogClient<ScoretotallogGetPayload<T>>

    /**
     * Create many Scoretotallogs.
     *     @param {ScoretotallogCreateManyArgs} args - Arguments to create many Scoretotallogs.
     *     @example
     *     // Create many Scoretotallogs
     *     const scoretotallog = await prisma.scoretotallog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ScoretotallogCreateManyArgs>(
      args?: SelectSubset<T, ScoretotallogCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Scoretotallog.
     * @param {ScoretotallogDeleteArgs} args - Arguments to delete one Scoretotallog.
     * @example
     * // Delete one Scoretotallog
     * const Scoretotallog = await prisma.scoretotallog.delete({
     *   where: {
     *     // ... filter to delete one Scoretotallog
     *   }
     * })
     * 
    **/
    delete<T extends ScoretotallogDeleteArgs>(
      args: SelectSubset<T, ScoretotallogDeleteArgs>
    ): Prisma__ScoretotallogClient<ScoretotallogGetPayload<T>>

    /**
     * Update one Scoretotallog.
     * @param {ScoretotallogUpdateArgs} args - Arguments to update one Scoretotallog.
     * @example
     * // Update one Scoretotallog
     * const scoretotallog = await prisma.scoretotallog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ScoretotallogUpdateArgs>(
      args: SelectSubset<T, ScoretotallogUpdateArgs>
    ): Prisma__ScoretotallogClient<ScoretotallogGetPayload<T>>

    /**
     * Delete zero or more Scoretotallogs.
     * @param {ScoretotallogDeleteManyArgs} args - Arguments to filter Scoretotallogs to delete.
     * @example
     * // Delete a few Scoretotallogs
     * const { count } = await prisma.scoretotallog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ScoretotallogDeleteManyArgs>(
      args?: SelectSubset<T, ScoretotallogDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scoretotallogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoretotallogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scoretotallogs
     * const scoretotallog = await prisma.scoretotallog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ScoretotallogUpdateManyArgs>(
      args: SelectSubset<T, ScoretotallogUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Scoretotallog.
     * @param {ScoretotallogUpsertArgs} args - Arguments to update or create a Scoretotallog.
     * @example
     * // Update or create a Scoretotallog
     * const scoretotallog = await prisma.scoretotallog.upsert({
     *   create: {
     *     // ... data to create a Scoretotallog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scoretotallog we want to update
     *   }
     * })
    **/
    upsert<T extends ScoretotallogUpsertArgs>(
      args: SelectSubset<T, ScoretotallogUpsertArgs>
    ): Prisma__ScoretotallogClient<ScoretotallogGetPayload<T>>

    /**
     * Count the number of Scoretotallogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoretotallogCountArgs} args - Arguments to filter Scoretotallogs to count.
     * @example
     * // Count the number of Scoretotallogs
     * const count = await prisma.scoretotallog.count({
     *   where: {
     *     // ... the filter for the Scoretotallogs we want to count
     *   }
     * })
    **/
    count<T extends ScoretotallogCountArgs>(
      args?: Subset<T, ScoretotallogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoretotallogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scoretotallog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoretotallogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScoretotallogAggregateArgs>(args: Subset<T, ScoretotallogAggregateArgs>): Prisma.PrismaPromise<GetScoretotallogAggregateType<T>>

    /**
     * Group by Scoretotallog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoretotallogGroupByArgs} args - Group by arguments.
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
      T extends ScoretotallogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoretotallogGroupByArgs['orderBy'] }
        : { orderBy?: ScoretotallogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScoretotallogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoretotallogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Scoretotallog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ScoretotallogClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Scoretotallog base type for findUnique actions
   */
  export type ScoretotallogFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Scoretotallog
     */
    select?: ScoretotallogSelect | null
    /**
     * Filter, which Scoretotallog to fetch.
     */
    where: ScoretotallogWhereUniqueInput
  }

  /**
   * Scoretotallog findUnique
   */
  export interface ScoretotallogFindUniqueArgs extends ScoretotallogFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Scoretotallog findUniqueOrThrow
   */
  export type ScoretotallogFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Scoretotallog
     */
    select?: ScoretotallogSelect | null
    /**
     * Filter, which Scoretotallog to fetch.
     */
    where: ScoretotallogWhereUniqueInput
  }


  /**
   * Scoretotallog base type for findFirst actions
   */
  export type ScoretotallogFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Scoretotallog
     */
    select?: ScoretotallogSelect | null
    /**
     * Filter, which Scoretotallog to fetch.
     */
    where?: ScoretotallogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scoretotallogs to fetch.
     */
    orderBy?: Enumerable<ScoretotallogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scoretotallogs.
     */
    cursor?: ScoretotallogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scoretotallogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scoretotallogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scoretotallogs.
     */
    distinct?: Enumerable<ScoretotallogScalarFieldEnum>
  }

  /**
   * Scoretotallog findFirst
   */
  export interface ScoretotallogFindFirstArgs extends ScoretotallogFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Scoretotallog findFirstOrThrow
   */
  export type ScoretotallogFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Scoretotallog
     */
    select?: ScoretotallogSelect | null
    /**
     * Filter, which Scoretotallog to fetch.
     */
    where?: ScoretotallogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scoretotallogs to fetch.
     */
    orderBy?: Enumerable<ScoretotallogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scoretotallogs.
     */
    cursor?: ScoretotallogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scoretotallogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scoretotallogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scoretotallogs.
     */
    distinct?: Enumerable<ScoretotallogScalarFieldEnum>
  }


  /**
   * Scoretotallog findMany
   */
  export type ScoretotallogFindManyArgs = {
    /**
     * Select specific fields to fetch from the Scoretotallog
     */
    select?: ScoretotallogSelect | null
    /**
     * Filter, which Scoretotallogs to fetch.
     */
    where?: ScoretotallogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scoretotallogs to fetch.
     */
    orderBy?: Enumerable<ScoretotallogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scoretotallogs.
     */
    cursor?: ScoretotallogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scoretotallogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scoretotallogs.
     */
    skip?: number
    distinct?: Enumerable<ScoretotallogScalarFieldEnum>
  }


  /**
   * Scoretotallog create
   */
  export type ScoretotallogCreateArgs = {
    /**
     * Select specific fields to fetch from the Scoretotallog
     */
    select?: ScoretotallogSelect | null
    /**
     * The data needed to create a Scoretotallog.
     */
    data: XOR<ScoretotallogCreateInput, ScoretotallogUncheckedCreateInput>
  }


  /**
   * Scoretotallog createMany
   */
  export type ScoretotallogCreateManyArgs = {
    /**
     * The data used to create many Scoretotallogs.
     */
    data: Enumerable<ScoretotallogCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Scoretotallog update
   */
  export type ScoretotallogUpdateArgs = {
    /**
     * Select specific fields to fetch from the Scoretotallog
     */
    select?: ScoretotallogSelect | null
    /**
     * The data needed to update a Scoretotallog.
     */
    data: XOR<ScoretotallogUpdateInput, ScoretotallogUncheckedUpdateInput>
    /**
     * Choose, which Scoretotallog to update.
     */
    where: ScoretotallogWhereUniqueInput
  }


  /**
   * Scoretotallog updateMany
   */
  export type ScoretotallogUpdateManyArgs = {
    /**
     * The data used to update Scoretotallogs.
     */
    data: XOR<ScoretotallogUpdateManyMutationInput, ScoretotallogUncheckedUpdateManyInput>
    /**
     * Filter which Scoretotallogs to update
     */
    where?: ScoretotallogWhereInput
  }


  /**
   * Scoretotallog upsert
   */
  export type ScoretotallogUpsertArgs = {
    /**
     * Select specific fields to fetch from the Scoretotallog
     */
    select?: ScoretotallogSelect | null
    /**
     * The filter to search for the Scoretotallog to update in case it exists.
     */
    where: ScoretotallogWhereUniqueInput
    /**
     * In case the Scoretotallog found by the `where` argument doesn't exist, create a new Scoretotallog with this data.
     */
    create: XOR<ScoretotallogCreateInput, ScoretotallogUncheckedCreateInput>
    /**
     * In case the Scoretotallog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoretotallogUpdateInput, ScoretotallogUncheckedUpdateInput>
  }


  /**
   * Scoretotallog delete
   */
  export type ScoretotallogDeleteArgs = {
    /**
     * Select specific fields to fetch from the Scoretotallog
     */
    select?: ScoretotallogSelect | null
    /**
     * Filter which Scoretotallog to delete.
     */
    where: ScoretotallogWhereUniqueInput
  }


  /**
   * Scoretotallog deleteMany
   */
  export type ScoretotallogDeleteManyArgs = {
    /**
     * Filter which Scoretotallogs to delete
     */
    where?: ScoretotallogWhereInput
  }


  /**
   * Scoretotallog without action
   */
  export type ScoretotallogArgs = {
    /**
     * Select specific fields to fetch from the Scoretotallog
     */
    select?: ScoretotallogSelect | null
  }



  /**
   * Model Useraccounts
   */


  export type AggregateUseraccounts = {
    _count: UseraccountsCountAggregateOutputType | null
    _avg: UseraccountsAvgAggregateOutputType | null
    _sum: UseraccountsSumAggregateOutputType | null
    _min: UseraccountsMinAggregateOutputType | null
    _max: UseraccountsMaxAggregateOutputType | null
  }

  export type UseraccountsAvgAggregateOutputType = {
    Id: number | null
    freeCount: number | null
    freeType: number | null
    LotteryCount: number | null
  }

  export type UseraccountsSumAggregateOutputType = {
    Id: number | null
    freeCount: number | null
    freeType: number | null
    LotteryCount: number | null
  }

  export type UseraccountsMinAggregateOutputType = {
    Id: number | null
    freeCount: number | null
    freeType: number | null
    AddDate: Date | null
    LotteryCount: number | null
    nFreeIndex: string | null
    gameDict: string | null
  }

  export type UseraccountsMaxAggregateOutputType = {
    Id: number | null
    freeCount: number | null
    freeType: number | null
    AddDate: Date | null
    LotteryCount: number | null
    nFreeIndex: string | null
    gameDict: string | null
  }

  export type UseraccountsCountAggregateOutputType = {
    Id: number
    freeCount: number
    freeType: number
    AddDate: number
    LotteryCount: number
    nFreeIndex: number
    gameDict: number
    _all: number
  }


  export type UseraccountsAvgAggregateInputType = {
    Id?: true
    freeCount?: true
    freeType?: true
    LotteryCount?: true
  }

  export type UseraccountsSumAggregateInputType = {
    Id?: true
    freeCount?: true
    freeType?: true
    LotteryCount?: true
  }

  export type UseraccountsMinAggregateInputType = {
    Id?: true
    freeCount?: true
    freeType?: true
    AddDate?: true
    LotteryCount?: true
    nFreeIndex?: true
    gameDict?: true
  }

  export type UseraccountsMaxAggregateInputType = {
    Id?: true
    freeCount?: true
    freeType?: true
    AddDate?: true
    LotteryCount?: true
    nFreeIndex?: true
    gameDict?: true
  }

  export type UseraccountsCountAggregateInputType = {
    Id?: true
    freeCount?: true
    freeType?: true
    AddDate?: true
    LotteryCount?: true
    nFreeIndex?: true
    gameDict?: true
    _all?: true
  }

  export type UseraccountsAggregateArgs = {
    /**
     * Filter which Useraccounts to aggregate.
     */
    where?: UseraccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Useraccounts to fetch.
     */
    orderBy?: Enumerable<UseraccountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UseraccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Useraccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Useraccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Useraccounts
    **/
    _count?: true | UseraccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UseraccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UseraccountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UseraccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UseraccountsMaxAggregateInputType
  }

  export type GetUseraccountsAggregateType<T extends UseraccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateUseraccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUseraccounts[P]>
      : GetScalarType<T[P], AggregateUseraccounts[P]>
  }




  export type UseraccountsGroupByArgs = {
    where?: UseraccountsWhereInput
    orderBy?: Enumerable<UseraccountsOrderByWithAggregationInput>
    by: UseraccountsScalarFieldEnum[]
    having?: UseraccountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UseraccountsCountAggregateInputType | true
    _avg?: UseraccountsAvgAggregateInputType
    _sum?: UseraccountsSumAggregateInputType
    _min?: UseraccountsMinAggregateInputType
    _max?: UseraccountsMaxAggregateInputType
  }


  export type UseraccountsGroupByOutputType = {
    Id: number
    freeCount: number
    freeType: number
    AddDate: Date
    LotteryCount: number
    nFreeIndex: string
    gameDict: string
    _count: UseraccountsCountAggregateOutputType | null
    _avg: UseraccountsAvgAggregateOutputType | null
    _sum: UseraccountsSumAggregateOutputType | null
    _min: UseraccountsMinAggregateOutputType | null
    _max: UseraccountsMaxAggregateOutputType | null
  }

  type GetUseraccountsGroupByPayload<T extends UseraccountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UseraccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UseraccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UseraccountsGroupByOutputType[P]>
            : GetScalarType<T[P], UseraccountsGroupByOutputType[P]>
        }
      >
    >


  export type UseraccountsSelect = {
    Id?: boolean
    freeCount?: boolean
    freeType?: boolean
    AddDate?: boolean
    LotteryCount?: boolean
    nFreeIndex?: boolean
    gameDict?: boolean
  }


  export type UseraccountsGetPayload<S extends boolean | null | undefined | UseraccountsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Useraccounts :
    S extends undefined ? never :
    S extends { include: any } & (UseraccountsArgs | UseraccountsFindManyArgs)
    ? Useraccounts 
    : S extends { select: any } & (UseraccountsArgs | UseraccountsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Useraccounts ? Useraccounts[P] : never
  } 
      : Useraccounts


  type UseraccountsCountArgs = 
    Omit<UseraccountsFindManyArgs, 'select' | 'include'> & {
      select?: UseraccountsCountAggregateInputType | true
    }

  export interface UseraccountsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Useraccounts that matches the filter.
     * @param {UseraccountsFindUniqueArgs} args - Arguments to find a Useraccounts
     * @example
     * // Get one Useraccounts
     * const useraccounts = await prisma.useraccounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UseraccountsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UseraccountsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Useraccounts'> extends True ? Prisma__UseraccountsClient<UseraccountsGetPayload<T>> : Prisma__UseraccountsClient<UseraccountsGetPayload<T> | null, null>

    /**
     * Find one Useraccounts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UseraccountsFindUniqueOrThrowArgs} args - Arguments to find a Useraccounts
     * @example
     * // Get one Useraccounts
     * const useraccounts = await prisma.useraccounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UseraccountsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UseraccountsFindUniqueOrThrowArgs>
    ): Prisma__UseraccountsClient<UseraccountsGetPayload<T>>

    /**
     * Find the first Useraccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseraccountsFindFirstArgs} args - Arguments to find a Useraccounts
     * @example
     * // Get one Useraccounts
     * const useraccounts = await prisma.useraccounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UseraccountsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UseraccountsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Useraccounts'> extends True ? Prisma__UseraccountsClient<UseraccountsGetPayload<T>> : Prisma__UseraccountsClient<UseraccountsGetPayload<T> | null, null>

    /**
     * Find the first Useraccounts that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseraccountsFindFirstOrThrowArgs} args - Arguments to find a Useraccounts
     * @example
     * // Get one Useraccounts
     * const useraccounts = await prisma.useraccounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UseraccountsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UseraccountsFindFirstOrThrowArgs>
    ): Prisma__UseraccountsClient<UseraccountsGetPayload<T>>

    /**
     * Find zero or more Useraccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseraccountsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Useraccounts
     * const useraccounts = await prisma.useraccounts.findMany()
     * 
     * // Get first 10 Useraccounts
     * const useraccounts = await prisma.useraccounts.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const useraccountsWithIdOnly = await prisma.useraccounts.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends UseraccountsFindManyArgs>(
      args?: SelectSubset<T, UseraccountsFindManyArgs>
    ): Prisma.PrismaPromise<Array<UseraccountsGetPayload<T>>>

    /**
     * Create a Useraccounts.
     * @param {UseraccountsCreateArgs} args - Arguments to create a Useraccounts.
     * @example
     * // Create one Useraccounts
     * const Useraccounts = await prisma.useraccounts.create({
     *   data: {
     *     // ... data to create a Useraccounts
     *   }
     * })
     * 
    **/
    create<T extends UseraccountsCreateArgs>(
      args: SelectSubset<T, UseraccountsCreateArgs>
    ): Prisma__UseraccountsClient<UseraccountsGetPayload<T>>

    /**
     * Create many Useraccounts.
     *     @param {UseraccountsCreateManyArgs} args - Arguments to create many Useraccounts.
     *     @example
     *     // Create many Useraccounts
     *     const useraccounts = await prisma.useraccounts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UseraccountsCreateManyArgs>(
      args?: SelectSubset<T, UseraccountsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Useraccounts.
     * @param {UseraccountsDeleteArgs} args - Arguments to delete one Useraccounts.
     * @example
     * // Delete one Useraccounts
     * const Useraccounts = await prisma.useraccounts.delete({
     *   where: {
     *     // ... filter to delete one Useraccounts
     *   }
     * })
     * 
    **/
    delete<T extends UseraccountsDeleteArgs>(
      args: SelectSubset<T, UseraccountsDeleteArgs>
    ): Prisma__UseraccountsClient<UseraccountsGetPayload<T>>

    /**
     * Update one Useraccounts.
     * @param {UseraccountsUpdateArgs} args - Arguments to update one Useraccounts.
     * @example
     * // Update one Useraccounts
     * const useraccounts = await prisma.useraccounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UseraccountsUpdateArgs>(
      args: SelectSubset<T, UseraccountsUpdateArgs>
    ): Prisma__UseraccountsClient<UseraccountsGetPayload<T>>

    /**
     * Delete zero or more Useraccounts.
     * @param {UseraccountsDeleteManyArgs} args - Arguments to filter Useraccounts to delete.
     * @example
     * // Delete a few Useraccounts
     * const { count } = await prisma.useraccounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UseraccountsDeleteManyArgs>(
      args?: SelectSubset<T, UseraccountsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Useraccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseraccountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Useraccounts
     * const useraccounts = await prisma.useraccounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UseraccountsUpdateManyArgs>(
      args: SelectSubset<T, UseraccountsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Useraccounts.
     * @param {UseraccountsUpsertArgs} args - Arguments to update or create a Useraccounts.
     * @example
     * // Update or create a Useraccounts
     * const useraccounts = await prisma.useraccounts.upsert({
     *   create: {
     *     // ... data to create a Useraccounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Useraccounts we want to update
     *   }
     * })
    **/
    upsert<T extends UseraccountsUpsertArgs>(
      args: SelectSubset<T, UseraccountsUpsertArgs>
    ): Prisma__UseraccountsClient<UseraccountsGetPayload<T>>

    /**
     * Count the number of Useraccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseraccountsCountArgs} args - Arguments to filter Useraccounts to count.
     * @example
     * // Count the number of Useraccounts
     * const count = await prisma.useraccounts.count({
     *   where: {
     *     // ... the filter for the Useraccounts we want to count
     *   }
     * })
    **/
    count<T extends UseraccountsCountArgs>(
      args?: Subset<T, UseraccountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UseraccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Useraccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseraccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UseraccountsAggregateArgs>(args: Subset<T, UseraccountsAggregateArgs>): Prisma.PrismaPromise<GetUseraccountsAggregateType<T>>

    /**
     * Group by Useraccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseraccountsGroupByArgs} args - Group by arguments.
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
      T extends UseraccountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UseraccountsGroupByArgs['orderBy'] }
        : { orderBy?: UseraccountsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UseraccountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUseraccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Useraccounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UseraccountsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Useraccounts base type for findUnique actions
   */
  export type UseraccountsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Useraccounts
     */
    select?: UseraccountsSelect | null
    /**
     * Filter, which Useraccounts to fetch.
     */
    where: UseraccountsWhereUniqueInput
  }

  /**
   * Useraccounts findUnique
   */
  export interface UseraccountsFindUniqueArgs extends UseraccountsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Useraccounts findUniqueOrThrow
   */
  export type UseraccountsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Useraccounts
     */
    select?: UseraccountsSelect | null
    /**
     * Filter, which Useraccounts to fetch.
     */
    where: UseraccountsWhereUniqueInput
  }


  /**
   * Useraccounts base type for findFirst actions
   */
  export type UseraccountsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Useraccounts
     */
    select?: UseraccountsSelect | null
    /**
     * Filter, which Useraccounts to fetch.
     */
    where?: UseraccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Useraccounts to fetch.
     */
    orderBy?: Enumerable<UseraccountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Useraccounts.
     */
    cursor?: UseraccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Useraccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Useraccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Useraccounts.
     */
    distinct?: Enumerable<UseraccountsScalarFieldEnum>
  }

  /**
   * Useraccounts findFirst
   */
  export interface UseraccountsFindFirstArgs extends UseraccountsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Useraccounts findFirstOrThrow
   */
  export type UseraccountsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Useraccounts
     */
    select?: UseraccountsSelect | null
    /**
     * Filter, which Useraccounts to fetch.
     */
    where?: UseraccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Useraccounts to fetch.
     */
    orderBy?: Enumerable<UseraccountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Useraccounts.
     */
    cursor?: UseraccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Useraccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Useraccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Useraccounts.
     */
    distinct?: Enumerable<UseraccountsScalarFieldEnum>
  }


  /**
   * Useraccounts findMany
   */
  export type UseraccountsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Useraccounts
     */
    select?: UseraccountsSelect | null
    /**
     * Filter, which Useraccounts to fetch.
     */
    where?: UseraccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Useraccounts to fetch.
     */
    orderBy?: Enumerable<UseraccountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Useraccounts.
     */
    cursor?: UseraccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Useraccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Useraccounts.
     */
    skip?: number
    distinct?: Enumerable<UseraccountsScalarFieldEnum>
  }


  /**
   * Useraccounts create
   */
  export type UseraccountsCreateArgs = {
    /**
     * Select specific fields to fetch from the Useraccounts
     */
    select?: UseraccountsSelect | null
    /**
     * The data needed to create a Useraccounts.
     */
    data: XOR<UseraccountsCreateInput, UseraccountsUncheckedCreateInput>
  }


  /**
   * Useraccounts createMany
   */
  export type UseraccountsCreateManyArgs = {
    /**
     * The data used to create many Useraccounts.
     */
    data: Enumerable<UseraccountsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Useraccounts update
   */
  export type UseraccountsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Useraccounts
     */
    select?: UseraccountsSelect | null
    /**
     * The data needed to update a Useraccounts.
     */
    data: XOR<UseraccountsUpdateInput, UseraccountsUncheckedUpdateInput>
    /**
     * Choose, which Useraccounts to update.
     */
    where: UseraccountsWhereUniqueInput
  }


  /**
   * Useraccounts updateMany
   */
  export type UseraccountsUpdateManyArgs = {
    /**
     * The data used to update Useraccounts.
     */
    data: XOR<UseraccountsUpdateManyMutationInput, UseraccountsUncheckedUpdateManyInput>
    /**
     * Filter which Useraccounts to update
     */
    where?: UseraccountsWhereInput
  }


  /**
   * Useraccounts upsert
   */
  export type UseraccountsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Useraccounts
     */
    select?: UseraccountsSelect | null
    /**
     * The filter to search for the Useraccounts to update in case it exists.
     */
    where: UseraccountsWhereUniqueInput
    /**
     * In case the Useraccounts found by the `where` argument doesn't exist, create a new Useraccounts with this data.
     */
    create: XOR<UseraccountsCreateInput, UseraccountsUncheckedCreateInput>
    /**
     * In case the Useraccounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UseraccountsUpdateInput, UseraccountsUncheckedUpdateInput>
  }


  /**
   * Useraccounts delete
   */
  export type UseraccountsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Useraccounts
     */
    select?: UseraccountsSelect | null
    /**
     * Filter which Useraccounts to delete.
     */
    where: UseraccountsWhereUniqueInput
  }


  /**
   * Useraccounts deleteMany
   */
  export type UseraccountsDeleteManyArgs = {
    /**
     * Filter which Useraccounts to delete
     */
    where?: UseraccountsWhereInput
  }


  /**
   * Useraccounts without action
   */
  export type UseraccountsArgs = {
    /**
     * Select specific fields to fetch from the Useraccounts
     */
    select?: UseraccountsSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Gambling_game_listScalarFieldEnum: {
    nGameID: 'nGameID',
    strGameName: 'strGameName',
    nGameType: 'nGameType',
    nGamblingWaterLevelGold: 'nGamblingWaterLevelGold',
    nGamblingBalanceGold: 'nGamblingBalanceGold',
    nGamblingWinPool: 'nGamblingWinPool',
    nGamblingUpdateBalanceGold: 'nGamblingUpdateBalanceGold',
    nGamblingBigWinLevel: 'nGamblingBigWinLevel',
    nGamblingBigWinLuck: 'nGamblingBigWinLuck',
    expectRTP: 'expectRTP'
  };

  export type Gambling_game_listScalarFieldEnum = (typeof Gambling_game_listScalarFieldEnum)[keyof typeof Gambling_game_listScalarFieldEnum]


  export const LotterylogScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    bet: 'bet',
    line_s: 'line_s',
    score_before: 'score_before',
    score_linescore: 'score_linescore',
    score_win: 'score_win',
    score_current: 'score_current',
    free_count_before: 'free_count_before',
    free_count_win: 'free_count_win',
    free_count_current: 'free_count_current',
    result_array: 'result_array',
    lotteryTime: 'lotteryTime',
    mark: 'mark'
  };

  export type LotterylogScalarFieldEnum = (typeof LotterylogScalarFieldEnum)[keyof typeof LotterylogScalarFieldEnum]


  export const Score_poolScalarFieldEnum: {
    id: 'id',
    score_pool: 'score_pool',
    change_time: 'change_time'
  };

  export type Score_poolScalarFieldEnum = (typeof Score_poolScalarFieldEnum)[keyof typeof Score_poolScalarFieldEnum]


  export const ScoretotalScalarFieldEnum: {
    serve_id: 'serve_id',
    winScoreTotal: 'winScoreTotal',
    lotteryTotal: 'lotteryTotal',
    updateTime: 'updateTime'
  };

  export type ScoretotalScalarFieldEnum = (typeof ScoretotalScalarFieldEnum)[keyof typeof ScoretotalScalarFieldEnum]


  export const ScoretotallogScalarFieldEnum: {
    id: 'id',
    serve_id: 'serve_id',
    winscore: 'winscore',
    lotteryCount: 'lotteryCount',
    CreateTime: 'CreateTime'
  };

  export type ScoretotallogScalarFieldEnum = (typeof ScoretotallogScalarFieldEnum)[keyof typeof ScoretotallogScalarFieldEnum]


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


  export const UseraccountsScalarFieldEnum: {
    Id: 'Id',
    freeCount: 'freeCount',
    freeType: 'freeType',
    AddDate: 'AddDate',
    LotteryCount: 'LotteryCount',
    nFreeIndex: 'nFreeIndex',
    gameDict: 'gameDict'
  };

  export type UseraccountsScalarFieldEnum = (typeof UseraccountsScalarFieldEnum)[keyof typeof UseraccountsScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type Gambling_game_listWhereInput = {
    AND?: Enumerable<Gambling_game_listWhereInput>
    OR?: Enumerable<Gambling_game_listWhereInput>
    NOT?: Enumerable<Gambling_game_listWhereInput>
    nGameID?: IntFilter | number
    strGameName?: StringFilter | string
    nGameType?: IntFilter | number
    nGamblingWaterLevelGold?: IntFilter | number
    nGamblingBalanceGold?: IntFilter | number
    nGamblingWinPool?: IntFilter | number
    nGamblingUpdateBalanceGold?: IntFilter | number
    nGamblingBigWinLevel?: StringFilter | string
    nGamblingBigWinLuck?: StringFilter | string
    expectRTP?: IntFilter | number
  }

  export type Gambling_game_listOrderByWithRelationInput = {
    nGameID?: SortOrder
    strGameName?: SortOrder
    nGameType?: SortOrder
    nGamblingWaterLevelGold?: SortOrder
    nGamblingBalanceGold?: SortOrder
    nGamblingWinPool?: SortOrder
    nGamblingUpdateBalanceGold?: SortOrder
    nGamblingBigWinLevel?: SortOrder
    nGamblingBigWinLuck?: SortOrder
    expectRTP?: SortOrder
  }

  export type Gambling_game_listWhereUniqueInput = {
    nGameID?: number
  }

  export type Gambling_game_listOrderByWithAggregationInput = {
    nGameID?: SortOrder
    strGameName?: SortOrder
    nGameType?: SortOrder
    nGamblingWaterLevelGold?: SortOrder
    nGamblingBalanceGold?: SortOrder
    nGamblingWinPool?: SortOrder
    nGamblingUpdateBalanceGold?: SortOrder
    nGamblingBigWinLevel?: SortOrder
    nGamblingBigWinLuck?: SortOrder
    expectRTP?: SortOrder
    _count?: Gambling_game_listCountOrderByAggregateInput
    _avg?: Gambling_game_listAvgOrderByAggregateInput
    _max?: Gambling_game_listMaxOrderByAggregateInput
    _min?: Gambling_game_listMinOrderByAggregateInput
    _sum?: Gambling_game_listSumOrderByAggregateInput
  }

  export type Gambling_game_listScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Gambling_game_listScalarWhereWithAggregatesInput>
    OR?: Enumerable<Gambling_game_listScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Gambling_game_listScalarWhereWithAggregatesInput>
    nGameID?: IntWithAggregatesFilter | number
    strGameName?: StringWithAggregatesFilter | string
    nGameType?: IntWithAggregatesFilter | number
    nGamblingWaterLevelGold?: IntWithAggregatesFilter | number
    nGamblingBalanceGold?: IntWithAggregatesFilter | number
    nGamblingWinPool?: IntWithAggregatesFilter | number
    nGamblingUpdateBalanceGold?: IntWithAggregatesFilter | number
    nGamblingBigWinLevel?: StringWithAggregatesFilter | string
    nGamblingBigWinLuck?: StringWithAggregatesFilter | string
    expectRTP?: IntWithAggregatesFilter | number
  }

  export type LotterylogWhereInput = {
    AND?: Enumerable<LotterylogWhereInput>
    OR?: Enumerable<LotterylogWhereInput>
    NOT?: Enumerable<LotterylogWhereInput>
    id?: IntFilter | number
    userid?: IntFilter | number
    bet?: IntFilter | number
    line_s?: IntFilter | number
    score_before?: IntFilter | number
    score_linescore?: IntFilter | number
    score_win?: IntFilter | number
    score_current?: IntFilter | number
    free_count_before?: IntFilter | number
    free_count_win?: IntFilter | number
    free_count_current?: IntFilter | number
    result_array?: StringFilter | string
    lotteryTime?: DateTimeFilter | Date | string
    mark?: IntFilter | number
  }

  export type LotterylogOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    bet?: SortOrder
    line_s?: SortOrder
    score_before?: SortOrder
    score_linescore?: SortOrder
    score_win?: SortOrder
    score_current?: SortOrder
    free_count_before?: SortOrder
    free_count_win?: SortOrder
    free_count_current?: SortOrder
    result_array?: SortOrder
    lotteryTime?: SortOrder
    mark?: SortOrder
  }

  export type LotterylogWhereUniqueInput = {
    id?: number
  }

  export type LotterylogOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    bet?: SortOrder
    line_s?: SortOrder
    score_before?: SortOrder
    score_linescore?: SortOrder
    score_win?: SortOrder
    score_current?: SortOrder
    free_count_before?: SortOrder
    free_count_win?: SortOrder
    free_count_current?: SortOrder
    result_array?: SortOrder
    lotteryTime?: SortOrder
    mark?: SortOrder
    _count?: LotterylogCountOrderByAggregateInput
    _avg?: LotterylogAvgOrderByAggregateInput
    _max?: LotterylogMaxOrderByAggregateInput
    _min?: LotterylogMinOrderByAggregateInput
    _sum?: LotterylogSumOrderByAggregateInput
  }

  export type LotterylogScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LotterylogScalarWhereWithAggregatesInput>
    OR?: Enumerable<LotterylogScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LotterylogScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userid?: IntWithAggregatesFilter | number
    bet?: IntWithAggregatesFilter | number
    line_s?: IntWithAggregatesFilter | number
    score_before?: IntWithAggregatesFilter | number
    score_linescore?: IntWithAggregatesFilter | number
    score_win?: IntWithAggregatesFilter | number
    score_current?: IntWithAggregatesFilter | number
    free_count_before?: IntWithAggregatesFilter | number
    free_count_win?: IntWithAggregatesFilter | number
    free_count_current?: IntWithAggregatesFilter | number
    result_array?: StringWithAggregatesFilter | string
    lotteryTime?: DateTimeWithAggregatesFilter | Date | string
    mark?: IntWithAggregatesFilter | number
  }

  export type Score_poolWhereInput = {
    AND?: Enumerable<Score_poolWhereInput>
    OR?: Enumerable<Score_poolWhereInput>
    NOT?: Enumerable<Score_poolWhereInput>
    id?: IntFilter | number
    score_pool?: IntFilter | number
    change_time?: DateTimeFilter | Date | string
  }

  export type Score_poolOrderByWithRelationInput = {
    id?: SortOrder
    score_pool?: SortOrder
    change_time?: SortOrder
  }

  export type Score_poolWhereUniqueInput = {
    id?: number
  }

  export type Score_poolOrderByWithAggregationInput = {
    id?: SortOrder
    score_pool?: SortOrder
    change_time?: SortOrder
    _count?: Score_poolCountOrderByAggregateInput
    _avg?: Score_poolAvgOrderByAggregateInput
    _max?: Score_poolMaxOrderByAggregateInput
    _min?: Score_poolMinOrderByAggregateInput
    _sum?: Score_poolSumOrderByAggregateInput
  }

  export type Score_poolScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Score_poolScalarWhereWithAggregatesInput>
    OR?: Enumerable<Score_poolScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Score_poolScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    score_pool?: IntWithAggregatesFilter | number
    change_time?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ScoretotalWhereInput = {
    AND?: Enumerable<ScoretotalWhereInput>
    OR?: Enumerable<ScoretotalWhereInput>
    NOT?: Enumerable<ScoretotalWhereInput>
    serve_id?: IntFilter | number
    winScoreTotal?: FloatFilter | number
    lotteryTotal?: IntFilter | number
    updateTime?: DateTimeFilter | Date | string
  }

  export type ScoretotalOrderByWithRelationInput = {
    serve_id?: SortOrder
    winScoreTotal?: SortOrder
    lotteryTotal?: SortOrder
    updateTime?: SortOrder
  }

  export type ScoretotalWhereUniqueInput = {
    serve_id?: number
  }

  export type ScoretotalOrderByWithAggregationInput = {
    serve_id?: SortOrder
    winScoreTotal?: SortOrder
    lotteryTotal?: SortOrder
    updateTime?: SortOrder
    _count?: ScoretotalCountOrderByAggregateInput
    _avg?: ScoretotalAvgOrderByAggregateInput
    _max?: ScoretotalMaxOrderByAggregateInput
    _min?: ScoretotalMinOrderByAggregateInput
    _sum?: ScoretotalSumOrderByAggregateInput
  }

  export type ScoretotalScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ScoretotalScalarWhereWithAggregatesInput>
    OR?: Enumerable<ScoretotalScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ScoretotalScalarWhereWithAggregatesInput>
    serve_id?: IntWithAggregatesFilter | number
    winScoreTotal?: FloatWithAggregatesFilter | number
    lotteryTotal?: IntWithAggregatesFilter | number
    updateTime?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ScoretotallogWhereInput = {
    AND?: Enumerable<ScoretotallogWhereInput>
    OR?: Enumerable<ScoretotallogWhereInput>
    NOT?: Enumerable<ScoretotallogWhereInput>
    id?: IntFilter | number
    serve_id?: IntFilter | number
    winscore?: FloatFilter | number
    lotteryCount?: IntFilter | number
    CreateTime?: DateTimeFilter | Date | string
  }

  export type ScoretotallogOrderByWithRelationInput = {
    id?: SortOrder
    serve_id?: SortOrder
    winscore?: SortOrder
    lotteryCount?: SortOrder
    CreateTime?: SortOrder
  }

  export type ScoretotallogWhereUniqueInput = {
    id?: number
  }

  export type ScoretotallogOrderByWithAggregationInput = {
    id?: SortOrder
    serve_id?: SortOrder
    winscore?: SortOrder
    lotteryCount?: SortOrder
    CreateTime?: SortOrder
    _count?: ScoretotallogCountOrderByAggregateInput
    _avg?: ScoretotallogAvgOrderByAggregateInput
    _max?: ScoretotallogMaxOrderByAggregateInput
    _min?: ScoretotallogMinOrderByAggregateInput
    _sum?: ScoretotallogSumOrderByAggregateInput
  }

  export type ScoretotallogScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ScoretotallogScalarWhereWithAggregatesInput>
    OR?: Enumerable<ScoretotallogScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ScoretotallogScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    serve_id?: IntWithAggregatesFilter | number
    winscore?: FloatWithAggregatesFilter | number
    lotteryCount?: IntWithAggregatesFilter | number
    CreateTime?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UseraccountsWhereInput = {
    AND?: Enumerable<UseraccountsWhereInput>
    OR?: Enumerable<UseraccountsWhereInput>
    NOT?: Enumerable<UseraccountsWhereInput>
    Id?: IntFilter | number
    freeCount?: IntFilter | number
    freeType?: IntFilter | number
    AddDate?: DateTimeFilter | Date | string
    LotteryCount?: IntFilter | number
    nFreeIndex?: StringFilter | string
    gameDict?: StringFilter | string
  }

  export type UseraccountsOrderByWithRelationInput = {
    Id?: SortOrder
    freeCount?: SortOrder
    freeType?: SortOrder
    AddDate?: SortOrder
    LotteryCount?: SortOrder
    nFreeIndex?: SortOrder
    gameDict?: SortOrder
  }

  export type UseraccountsWhereUniqueInput = {
    Id?: number
  }

  export type UseraccountsOrderByWithAggregationInput = {
    Id?: SortOrder
    freeCount?: SortOrder
    freeType?: SortOrder
    AddDate?: SortOrder
    LotteryCount?: SortOrder
    nFreeIndex?: SortOrder
    gameDict?: SortOrder
    _count?: UseraccountsCountOrderByAggregateInput
    _avg?: UseraccountsAvgOrderByAggregateInput
    _max?: UseraccountsMaxOrderByAggregateInput
    _min?: UseraccountsMinOrderByAggregateInput
    _sum?: UseraccountsSumOrderByAggregateInput
  }

  export type UseraccountsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UseraccountsScalarWhereWithAggregatesInput>
    OR?: Enumerable<UseraccountsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UseraccountsScalarWhereWithAggregatesInput>
    Id?: IntWithAggregatesFilter | number
    freeCount?: IntWithAggregatesFilter | number
    freeType?: IntWithAggregatesFilter | number
    AddDate?: DateTimeWithAggregatesFilter | Date | string
    LotteryCount?: IntWithAggregatesFilter | number
    nFreeIndex?: StringWithAggregatesFilter | string
    gameDict?: StringWithAggregatesFilter | string
  }

  export type Gambling_game_listCreateInput = {
    nGameID: number
    strGameName: string
    nGameType: number
    nGamblingWaterLevelGold: number
    nGamblingBalanceGold: number
    nGamblingWinPool: number
    nGamblingUpdateBalanceGold: number
    nGamblingBigWinLevel: string
    nGamblingBigWinLuck: string
    expectRTP: number
  }

  export type Gambling_game_listUncheckedCreateInput = {
    nGameID: number
    strGameName: string
    nGameType: number
    nGamblingWaterLevelGold: number
    nGamblingBalanceGold: number
    nGamblingWinPool: number
    nGamblingUpdateBalanceGold: number
    nGamblingBigWinLevel: string
    nGamblingBigWinLuck: string
    expectRTP: number
  }

  export type Gambling_game_listUpdateInput = {
    nGameID?: IntFieldUpdateOperationsInput | number
    strGameName?: StringFieldUpdateOperationsInput | string
    nGameType?: IntFieldUpdateOperationsInput | number
    nGamblingWaterLevelGold?: IntFieldUpdateOperationsInput | number
    nGamblingBalanceGold?: IntFieldUpdateOperationsInput | number
    nGamblingWinPool?: IntFieldUpdateOperationsInput | number
    nGamblingUpdateBalanceGold?: IntFieldUpdateOperationsInput | number
    nGamblingBigWinLevel?: StringFieldUpdateOperationsInput | string
    nGamblingBigWinLuck?: StringFieldUpdateOperationsInput | string
    expectRTP?: IntFieldUpdateOperationsInput | number
  }

  export type Gambling_game_listUncheckedUpdateInput = {
    nGameID?: IntFieldUpdateOperationsInput | number
    strGameName?: StringFieldUpdateOperationsInput | string
    nGameType?: IntFieldUpdateOperationsInput | number
    nGamblingWaterLevelGold?: IntFieldUpdateOperationsInput | number
    nGamblingBalanceGold?: IntFieldUpdateOperationsInput | number
    nGamblingWinPool?: IntFieldUpdateOperationsInput | number
    nGamblingUpdateBalanceGold?: IntFieldUpdateOperationsInput | number
    nGamblingBigWinLevel?: StringFieldUpdateOperationsInput | string
    nGamblingBigWinLuck?: StringFieldUpdateOperationsInput | string
    expectRTP?: IntFieldUpdateOperationsInput | number
  }

  export type Gambling_game_listCreateManyInput = {
    nGameID: number
    strGameName: string
    nGameType: number
    nGamblingWaterLevelGold: number
    nGamblingBalanceGold: number
    nGamblingWinPool: number
    nGamblingUpdateBalanceGold: number
    nGamblingBigWinLevel: string
    nGamblingBigWinLuck: string
    expectRTP: number
  }

  export type Gambling_game_listUpdateManyMutationInput = {
    nGameID?: IntFieldUpdateOperationsInput | number
    strGameName?: StringFieldUpdateOperationsInput | string
    nGameType?: IntFieldUpdateOperationsInput | number
    nGamblingWaterLevelGold?: IntFieldUpdateOperationsInput | number
    nGamblingBalanceGold?: IntFieldUpdateOperationsInput | number
    nGamblingWinPool?: IntFieldUpdateOperationsInput | number
    nGamblingUpdateBalanceGold?: IntFieldUpdateOperationsInput | number
    nGamblingBigWinLevel?: StringFieldUpdateOperationsInput | string
    nGamblingBigWinLuck?: StringFieldUpdateOperationsInput | string
    expectRTP?: IntFieldUpdateOperationsInput | number
  }

  export type Gambling_game_listUncheckedUpdateManyInput = {
    nGameID?: IntFieldUpdateOperationsInput | number
    strGameName?: StringFieldUpdateOperationsInput | string
    nGameType?: IntFieldUpdateOperationsInput | number
    nGamblingWaterLevelGold?: IntFieldUpdateOperationsInput | number
    nGamblingBalanceGold?: IntFieldUpdateOperationsInput | number
    nGamblingWinPool?: IntFieldUpdateOperationsInput | number
    nGamblingUpdateBalanceGold?: IntFieldUpdateOperationsInput | number
    nGamblingBigWinLevel?: StringFieldUpdateOperationsInput | string
    nGamblingBigWinLuck?: StringFieldUpdateOperationsInput | string
    expectRTP?: IntFieldUpdateOperationsInput | number
  }

  export type LotterylogCreateInput = {
    userid: number
    bet: number
    line_s: number
    score_before: number
    score_linescore: number
    score_win: number
    score_current: number
    free_count_before: number
    free_count_win: number
    free_count_current: number
    result_array: string
    lotteryTime?: Date | string
    mark: number
  }

  export type LotterylogUncheckedCreateInput = {
    id?: number
    userid: number
    bet: number
    line_s: number
    score_before: number
    score_linescore: number
    score_win: number
    score_current: number
    free_count_before: number
    free_count_win: number
    free_count_current: number
    result_array: string
    lotteryTime?: Date | string
    mark: number
  }

  export type LotterylogUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    bet?: IntFieldUpdateOperationsInput | number
    line_s?: IntFieldUpdateOperationsInput | number
    score_before?: IntFieldUpdateOperationsInput | number
    score_linescore?: IntFieldUpdateOperationsInput | number
    score_win?: IntFieldUpdateOperationsInput | number
    score_current?: IntFieldUpdateOperationsInput | number
    free_count_before?: IntFieldUpdateOperationsInput | number
    free_count_win?: IntFieldUpdateOperationsInput | number
    free_count_current?: IntFieldUpdateOperationsInput | number
    result_array?: StringFieldUpdateOperationsInput | string
    lotteryTime?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
  }

  export type LotterylogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    bet?: IntFieldUpdateOperationsInput | number
    line_s?: IntFieldUpdateOperationsInput | number
    score_before?: IntFieldUpdateOperationsInput | number
    score_linescore?: IntFieldUpdateOperationsInput | number
    score_win?: IntFieldUpdateOperationsInput | number
    score_current?: IntFieldUpdateOperationsInput | number
    free_count_before?: IntFieldUpdateOperationsInput | number
    free_count_win?: IntFieldUpdateOperationsInput | number
    free_count_current?: IntFieldUpdateOperationsInput | number
    result_array?: StringFieldUpdateOperationsInput | string
    lotteryTime?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
  }

  export type LotterylogCreateManyInput = {
    id?: number
    userid: number
    bet: number
    line_s: number
    score_before: number
    score_linescore: number
    score_win: number
    score_current: number
    free_count_before: number
    free_count_win: number
    free_count_current: number
    result_array: string
    lotteryTime?: Date | string
    mark: number
  }

  export type LotterylogUpdateManyMutationInput = {
    userid?: IntFieldUpdateOperationsInput | number
    bet?: IntFieldUpdateOperationsInput | number
    line_s?: IntFieldUpdateOperationsInput | number
    score_before?: IntFieldUpdateOperationsInput | number
    score_linescore?: IntFieldUpdateOperationsInput | number
    score_win?: IntFieldUpdateOperationsInput | number
    score_current?: IntFieldUpdateOperationsInput | number
    free_count_before?: IntFieldUpdateOperationsInput | number
    free_count_win?: IntFieldUpdateOperationsInput | number
    free_count_current?: IntFieldUpdateOperationsInput | number
    result_array?: StringFieldUpdateOperationsInput | string
    lotteryTime?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
  }

  export type LotterylogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    bet?: IntFieldUpdateOperationsInput | number
    line_s?: IntFieldUpdateOperationsInput | number
    score_before?: IntFieldUpdateOperationsInput | number
    score_linescore?: IntFieldUpdateOperationsInput | number
    score_win?: IntFieldUpdateOperationsInput | number
    score_current?: IntFieldUpdateOperationsInput | number
    free_count_before?: IntFieldUpdateOperationsInput | number
    free_count_win?: IntFieldUpdateOperationsInput | number
    free_count_current?: IntFieldUpdateOperationsInput | number
    result_array?: StringFieldUpdateOperationsInput | string
    lotteryTime?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
  }

  export type Score_poolCreateInput = {
    score_pool: number
    change_time?: Date | string
  }

  export type Score_poolUncheckedCreateInput = {
    id?: number
    score_pool: number
    change_time?: Date | string
  }

  export type Score_poolUpdateInput = {
    score_pool?: IntFieldUpdateOperationsInput | number
    change_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Score_poolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    score_pool?: IntFieldUpdateOperationsInput | number
    change_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Score_poolCreateManyInput = {
    id?: number
    score_pool: number
    change_time?: Date | string
  }

  export type Score_poolUpdateManyMutationInput = {
    score_pool?: IntFieldUpdateOperationsInput | number
    change_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Score_poolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    score_pool?: IntFieldUpdateOperationsInput | number
    change_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoretotalCreateInput = {
    serve_id: number
    winScoreTotal: number
    lotteryTotal: number
    updateTime?: Date | string
  }

  export type ScoretotalUncheckedCreateInput = {
    serve_id: number
    winScoreTotal: number
    lotteryTotal: number
    updateTime?: Date | string
  }

  export type ScoretotalUpdateInput = {
    serve_id?: IntFieldUpdateOperationsInput | number
    winScoreTotal?: FloatFieldUpdateOperationsInput | number
    lotteryTotal?: IntFieldUpdateOperationsInput | number
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoretotalUncheckedUpdateInput = {
    serve_id?: IntFieldUpdateOperationsInput | number
    winScoreTotal?: FloatFieldUpdateOperationsInput | number
    lotteryTotal?: IntFieldUpdateOperationsInput | number
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoretotalCreateManyInput = {
    serve_id: number
    winScoreTotal: number
    lotteryTotal: number
    updateTime?: Date | string
  }

  export type ScoretotalUpdateManyMutationInput = {
    serve_id?: IntFieldUpdateOperationsInput | number
    winScoreTotal?: FloatFieldUpdateOperationsInput | number
    lotteryTotal?: IntFieldUpdateOperationsInput | number
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoretotalUncheckedUpdateManyInput = {
    serve_id?: IntFieldUpdateOperationsInput | number
    winScoreTotal?: FloatFieldUpdateOperationsInput | number
    lotteryTotal?: IntFieldUpdateOperationsInput | number
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoretotallogCreateInput = {
    serve_id: number
    winscore: number
    lotteryCount: number
    CreateTime?: Date | string
  }

  export type ScoretotallogUncheckedCreateInput = {
    id?: number
    serve_id: number
    winscore: number
    lotteryCount: number
    CreateTime?: Date | string
  }

  export type ScoretotallogUpdateInput = {
    serve_id?: IntFieldUpdateOperationsInput | number
    winscore?: FloatFieldUpdateOperationsInput | number
    lotteryCount?: IntFieldUpdateOperationsInput | number
    CreateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoretotallogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    serve_id?: IntFieldUpdateOperationsInput | number
    winscore?: FloatFieldUpdateOperationsInput | number
    lotteryCount?: IntFieldUpdateOperationsInput | number
    CreateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoretotallogCreateManyInput = {
    id?: number
    serve_id: number
    winscore: number
    lotteryCount: number
    CreateTime?: Date | string
  }

  export type ScoretotallogUpdateManyMutationInput = {
    serve_id?: IntFieldUpdateOperationsInput | number
    winscore?: FloatFieldUpdateOperationsInput | number
    lotteryCount?: IntFieldUpdateOperationsInput | number
    CreateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoretotallogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    serve_id?: IntFieldUpdateOperationsInput | number
    winscore?: FloatFieldUpdateOperationsInput | number
    lotteryCount?: IntFieldUpdateOperationsInput | number
    CreateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UseraccountsCreateInput = {
    Id: number
    freeCount: number
    freeType: number
    AddDate?: Date | string
    LotteryCount: number
    nFreeIndex: string
    gameDict: string
  }

  export type UseraccountsUncheckedCreateInput = {
    Id: number
    freeCount: number
    freeType: number
    AddDate?: Date | string
    LotteryCount: number
    nFreeIndex: string
    gameDict: string
  }

  export type UseraccountsUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    freeCount?: IntFieldUpdateOperationsInput | number
    freeType?: IntFieldUpdateOperationsInput | number
    AddDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LotteryCount?: IntFieldUpdateOperationsInput | number
    nFreeIndex?: StringFieldUpdateOperationsInput | string
    gameDict?: StringFieldUpdateOperationsInput | string
  }

  export type UseraccountsUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    freeCount?: IntFieldUpdateOperationsInput | number
    freeType?: IntFieldUpdateOperationsInput | number
    AddDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LotteryCount?: IntFieldUpdateOperationsInput | number
    nFreeIndex?: StringFieldUpdateOperationsInput | string
    gameDict?: StringFieldUpdateOperationsInput | string
  }

  export type UseraccountsCreateManyInput = {
    Id: number
    freeCount: number
    freeType: number
    AddDate?: Date | string
    LotteryCount: number
    nFreeIndex: string
    gameDict: string
  }

  export type UseraccountsUpdateManyMutationInput = {
    Id?: IntFieldUpdateOperationsInput | number
    freeCount?: IntFieldUpdateOperationsInput | number
    freeType?: IntFieldUpdateOperationsInput | number
    AddDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LotteryCount?: IntFieldUpdateOperationsInput | number
    nFreeIndex?: StringFieldUpdateOperationsInput | string
    gameDict?: StringFieldUpdateOperationsInput | string
  }

  export type UseraccountsUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    freeCount?: IntFieldUpdateOperationsInput | number
    freeType?: IntFieldUpdateOperationsInput | number
    AddDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LotteryCount?: IntFieldUpdateOperationsInput | number
    nFreeIndex?: StringFieldUpdateOperationsInput | string
    gameDict?: StringFieldUpdateOperationsInput | string
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

  export type Gambling_game_listCountOrderByAggregateInput = {
    nGameID?: SortOrder
    strGameName?: SortOrder
    nGameType?: SortOrder
    nGamblingWaterLevelGold?: SortOrder
    nGamblingBalanceGold?: SortOrder
    nGamblingWinPool?: SortOrder
    nGamblingUpdateBalanceGold?: SortOrder
    nGamblingBigWinLevel?: SortOrder
    nGamblingBigWinLuck?: SortOrder
    expectRTP?: SortOrder
  }

  export type Gambling_game_listAvgOrderByAggregateInput = {
    nGameID?: SortOrder
    nGameType?: SortOrder
    nGamblingWaterLevelGold?: SortOrder
    nGamblingBalanceGold?: SortOrder
    nGamblingWinPool?: SortOrder
    nGamblingUpdateBalanceGold?: SortOrder
    expectRTP?: SortOrder
  }

  export type Gambling_game_listMaxOrderByAggregateInput = {
    nGameID?: SortOrder
    strGameName?: SortOrder
    nGameType?: SortOrder
    nGamblingWaterLevelGold?: SortOrder
    nGamblingBalanceGold?: SortOrder
    nGamblingWinPool?: SortOrder
    nGamblingUpdateBalanceGold?: SortOrder
    nGamblingBigWinLevel?: SortOrder
    nGamblingBigWinLuck?: SortOrder
    expectRTP?: SortOrder
  }

  export type Gambling_game_listMinOrderByAggregateInput = {
    nGameID?: SortOrder
    strGameName?: SortOrder
    nGameType?: SortOrder
    nGamblingWaterLevelGold?: SortOrder
    nGamblingBalanceGold?: SortOrder
    nGamblingWinPool?: SortOrder
    nGamblingUpdateBalanceGold?: SortOrder
    nGamblingBigWinLevel?: SortOrder
    nGamblingBigWinLuck?: SortOrder
    expectRTP?: SortOrder
  }

  export type Gambling_game_listSumOrderByAggregateInput = {
    nGameID?: SortOrder
    nGameType?: SortOrder
    nGamblingWaterLevelGold?: SortOrder
    nGamblingBalanceGold?: SortOrder
    nGamblingWinPool?: SortOrder
    nGamblingUpdateBalanceGold?: SortOrder
    expectRTP?: SortOrder
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

  export type LotterylogCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    bet?: SortOrder
    line_s?: SortOrder
    score_before?: SortOrder
    score_linescore?: SortOrder
    score_win?: SortOrder
    score_current?: SortOrder
    free_count_before?: SortOrder
    free_count_win?: SortOrder
    free_count_current?: SortOrder
    result_array?: SortOrder
    lotteryTime?: SortOrder
    mark?: SortOrder
  }

  export type LotterylogAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    bet?: SortOrder
    line_s?: SortOrder
    score_before?: SortOrder
    score_linescore?: SortOrder
    score_win?: SortOrder
    score_current?: SortOrder
    free_count_before?: SortOrder
    free_count_win?: SortOrder
    free_count_current?: SortOrder
    mark?: SortOrder
  }

  export type LotterylogMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    bet?: SortOrder
    line_s?: SortOrder
    score_before?: SortOrder
    score_linescore?: SortOrder
    score_win?: SortOrder
    score_current?: SortOrder
    free_count_before?: SortOrder
    free_count_win?: SortOrder
    free_count_current?: SortOrder
    result_array?: SortOrder
    lotteryTime?: SortOrder
    mark?: SortOrder
  }

  export type LotterylogMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    bet?: SortOrder
    line_s?: SortOrder
    score_before?: SortOrder
    score_linescore?: SortOrder
    score_win?: SortOrder
    score_current?: SortOrder
    free_count_before?: SortOrder
    free_count_win?: SortOrder
    free_count_current?: SortOrder
    result_array?: SortOrder
    lotteryTime?: SortOrder
    mark?: SortOrder
  }

  export type LotterylogSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    bet?: SortOrder
    line_s?: SortOrder
    score_before?: SortOrder
    score_linescore?: SortOrder
    score_win?: SortOrder
    score_current?: SortOrder
    free_count_before?: SortOrder
    free_count_win?: SortOrder
    free_count_current?: SortOrder
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

  export type Score_poolCountOrderByAggregateInput = {
    id?: SortOrder
    score_pool?: SortOrder
    change_time?: SortOrder
  }

  export type Score_poolAvgOrderByAggregateInput = {
    id?: SortOrder
    score_pool?: SortOrder
  }

  export type Score_poolMaxOrderByAggregateInput = {
    id?: SortOrder
    score_pool?: SortOrder
    change_time?: SortOrder
  }

  export type Score_poolMinOrderByAggregateInput = {
    id?: SortOrder
    score_pool?: SortOrder
    change_time?: SortOrder
  }

  export type Score_poolSumOrderByAggregateInput = {
    id?: SortOrder
    score_pool?: SortOrder
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type ScoretotalCountOrderByAggregateInput = {
    serve_id?: SortOrder
    winScoreTotal?: SortOrder
    lotteryTotal?: SortOrder
    updateTime?: SortOrder
  }

  export type ScoretotalAvgOrderByAggregateInput = {
    serve_id?: SortOrder
    winScoreTotal?: SortOrder
    lotteryTotal?: SortOrder
  }

  export type ScoretotalMaxOrderByAggregateInput = {
    serve_id?: SortOrder
    winScoreTotal?: SortOrder
    lotteryTotal?: SortOrder
    updateTime?: SortOrder
  }

  export type ScoretotalMinOrderByAggregateInput = {
    serve_id?: SortOrder
    winScoreTotal?: SortOrder
    lotteryTotal?: SortOrder
    updateTime?: SortOrder
  }

  export type ScoretotalSumOrderByAggregateInput = {
    serve_id?: SortOrder
    winScoreTotal?: SortOrder
    lotteryTotal?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type ScoretotallogCountOrderByAggregateInput = {
    id?: SortOrder
    serve_id?: SortOrder
    winscore?: SortOrder
    lotteryCount?: SortOrder
    CreateTime?: SortOrder
  }

  export type ScoretotallogAvgOrderByAggregateInput = {
    id?: SortOrder
    serve_id?: SortOrder
    winscore?: SortOrder
    lotteryCount?: SortOrder
  }

  export type ScoretotallogMaxOrderByAggregateInput = {
    id?: SortOrder
    serve_id?: SortOrder
    winscore?: SortOrder
    lotteryCount?: SortOrder
    CreateTime?: SortOrder
  }

  export type ScoretotallogMinOrderByAggregateInput = {
    id?: SortOrder
    serve_id?: SortOrder
    winscore?: SortOrder
    lotteryCount?: SortOrder
    CreateTime?: SortOrder
  }

  export type ScoretotallogSumOrderByAggregateInput = {
    id?: SortOrder
    serve_id?: SortOrder
    winscore?: SortOrder
    lotteryCount?: SortOrder
  }

  export type UseraccountsCountOrderByAggregateInput = {
    Id?: SortOrder
    freeCount?: SortOrder
    freeType?: SortOrder
    AddDate?: SortOrder
    LotteryCount?: SortOrder
    nFreeIndex?: SortOrder
    gameDict?: SortOrder
  }

  export type UseraccountsAvgOrderByAggregateInput = {
    Id?: SortOrder
    freeCount?: SortOrder
    freeType?: SortOrder
    LotteryCount?: SortOrder
  }

  export type UseraccountsMaxOrderByAggregateInput = {
    Id?: SortOrder
    freeCount?: SortOrder
    freeType?: SortOrder
    AddDate?: SortOrder
    LotteryCount?: SortOrder
    nFreeIndex?: SortOrder
    gameDict?: SortOrder
  }

  export type UseraccountsMinOrderByAggregateInput = {
    Id?: SortOrder
    freeCount?: SortOrder
    freeType?: SortOrder
    AddDate?: SortOrder
    LotteryCount?: SortOrder
    nFreeIndex?: SortOrder
    gameDict?: SortOrder
  }

  export type UseraccountsSumOrderByAggregateInput = {
    Id?: SortOrder
    freeCount?: SortOrder
    freeType?: SortOrder
    LotteryCount?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
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