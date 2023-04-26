
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Admin
 * 
 */
export type Admin = {
  id: string
  email: string
  password: string
  name: string
  token: string | null
  createdAt: Date
  updatedAt: Date | null
  accessToken: string | null
}

/**
 * Model Agent
 * 
 */
export type Agent = {
  id: string
  email: string
  password: string
  name: string
  active: boolean
  createdAt: Date
  updatedAt: Date | null
  accessToken: string | null
  adminId: string | null
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  email: string
  name: string
  password: string
  headImage: string
  active: boolean
  token: string | null
  createdAt: Date
  updatedAt: Date | null
  accessToken: string | null
  agentId: string | null
}

/**
 * Model ActionHistory
 * 
 */
export type ActionHistory = {
  id: string
  newValueJson: Prisma.JsonValue | null
  ip: string
  createdAt: Date
  userId: string | null
  agentId: string | null
  adminId: string | null
}

/**
 * Model Balance
 * 
 */
export type Balance = {
  id: string
  balance: number
  createdAt: Date
  updatedAt: Date | null
  ownerId: string
}

/**
 * Model PaymentHistory
 * 
 */
export type PaymentHistory = {
  id: string
  beforeScore: number
  changeScore: number
  newScore: number
  approval: boolean
  createdAt: Date
  approvalAt: Date | null
  ownerId: string
}

/**
 * Model BetDetailHistory
 * 
 */
export type BetDetailHistory = {
  id: string
  beforeScore: number
  betScore: number
  winScore: number
  newScore: number
  createdAt: Date
  ownerId: string
  gameId: number
}

/**
 * Model GameSession
 * 
 */
export type GameSession = {
  id: string
  gameId: number
  createdAt: Date
}

/**
 * Model PlayerSession
 * 
 */
export type PlayerSession = {
  id: string
  gameSessionId: string
  userId: string
  betAmount: number
  betLines: number
  betResult: number
  createdAt: Date
}

/**
 * Model Quota
 * 
 */
export type Quota = {
  id: string
  balance: number
  createdAt: Date
  updatedAt: Date | null
  agentId: string
}

/**
 * Model Status
 * 
 */
export type Status = {
  id: string
  approval: string | null
  createdAt: Date
  updatedAt: Date | null
  approvedById: string | null
}

/**
 * Model Withdrawal
 * 
 */
export type Withdrawal = {
  id: string
  amount: number
  createdAt: Date
  updatedAt: Date | null
  statusId: string
  ownerId: string
}

/**
 * Model Deposit
 * 
 */
export type Deposit = {
  id: string
  amount: number
  createdAt: Date
  updatedAt: Date | null
  statusId: string
  ownerId: string
}

/**
 * Model alembic_version
 * 
 */
export type alembic_version = {
  version_num: string
}

/**
 * Model GameList
 * 
 */
export type GameList = {
  id: number
  eGameName: string
  cGameName: string
  type: number | null
  json: Prisma.JsonValue | null
  createdAt: Date | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<GlobalReject>;

  /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.actionHistory`: Exposes CRUD operations for the **ActionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActionHistories
    * const actionHistories = await prisma.actionHistory.findMany()
    * ```
    */
  get actionHistory(): Prisma.ActionHistoryDelegate<GlobalReject>;

  /**
   * `prisma.balance`: Exposes CRUD operations for the **Balance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Balances
    * const balances = await prisma.balance.findMany()
    * ```
    */
  get balance(): Prisma.BalanceDelegate<GlobalReject>;

  /**
   * `prisma.paymentHistory`: Exposes CRUD operations for the **PaymentHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentHistories
    * const paymentHistories = await prisma.paymentHistory.findMany()
    * ```
    */
  get paymentHistory(): Prisma.PaymentHistoryDelegate<GlobalReject>;

  /**
   * `prisma.betDetailHistory`: Exposes CRUD operations for the **BetDetailHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BetDetailHistories
    * const betDetailHistories = await prisma.betDetailHistory.findMany()
    * ```
    */
  get betDetailHistory(): Prisma.BetDetailHistoryDelegate<GlobalReject>;

  /**
   * `prisma.gameSession`: Exposes CRUD operations for the **GameSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameSessions
    * const gameSessions = await prisma.gameSession.findMany()
    * ```
    */
  get gameSession(): Prisma.GameSessionDelegate<GlobalReject>;

  /**
   * `prisma.playerSession`: Exposes CRUD operations for the **PlayerSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerSessions
    * const playerSessions = await prisma.playerSession.findMany()
    * ```
    */
  get playerSession(): Prisma.PlayerSessionDelegate<GlobalReject>;

  /**
   * `prisma.quota`: Exposes CRUD operations for the **Quota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quotas
    * const quotas = await prisma.quota.findMany()
    * ```
    */
  get quota(): Prisma.QuotaDelegate<GlobalReject>;

  /**
   * `prisma.status`: Exposes CRUD operations for the **Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.status.findMany()
    * ```
    */
  get status(): Prisma.StatusDelegate<GlobalReject>;

  /**
   * `prisma.withdrawal`: Exposes CRUD operations for the **Withdrawal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Withdrawals
    * const withdrawals = await prisma.withdrawal.findMany()
    * ```
    */
  get withdrawal(): Prisma.WithdrawalDelegate<GlobalReject>;

  /**
   * `prisma.deposit`: Exposes CRUD operations for the **Deposit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deposits
    * const deposits = await prisma.deposit.findMany()
    * ```
    */
  get deposit(): Prisma.DepositDelegate<GlobalReject>;

  /**
   * `prisma.alembic_version`: Exposes CRUD operations for the **alembic_version** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alembic_versions
    * const alembic_versions = await prisma.alembic_version.findMany()
    * ```
    */
  get alembic_version(): Prisma.alembic_versionDelegate<GlobalReject>;

  /**
   * `prisma.gameList`: Exposes CRUD operations for the **GameList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameLists
    * const gameLists = await prisma.gameList.findMany()
    * ```
    */
  get gameList(): Prisma.GameListDelegate<GlobalReject>;
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
    Admin: 'Admin',
    Agent: 'Agent',
    User: 'User',
    ActionHistory: 'ActionHistory',
    Balance: 'Balance',
    PaymentHistory: 'PaymentHistory',
    BetDetailHistory: 'BetDetailHistory',
    GameSession: 'GameSession',
    PlayerSession: 'PlayerSession',
    Quota: 'Quota',
    Status: 'Status',
    Withdrawal: 'Withdrawal',
    Deposit: 'Deposit',
    alembic_version: 'alembic_version',
    GameList: 'GameList'
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
   * Count Type AdminCountOutputType
   */


  export type AdminCountOutputType = {
    history: number
    agent: number
  }

  export type AdminCountOutputTypeSelect = {
    history?: boolean
    agent?: boolean
  }

  export type AdminCountOutputTypeGetPayload<S extends boolean | null | undefined | AdminCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AdminCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AdminCountOutputTypeArgs)
    ? AdminCountOutputType 
    : S extends { select: any } & (AdminCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AdminCountOutputType ? AdminCountOutputType[P] : never
  } 
      : AdminCountOutputType




  // Custom InputTypes

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect | null
  }



  /**
   * Count Type AgentCountOutputType
   */


  export type AgentCountOutputType = {
    history: number
    users: number
    quota: number
    status: number
  }

  export type AgentCountOutputTypeSelect = {
    history?: boolean
    users?: boolean
    quota?: boolean
    status?: boolean
  }

  export type AgentCountOutputTypeGetPayload<S extends boolean | null | undefined | AgentCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AgentCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AgentCountOutputTypeArgs)
    ? AgentCountOutputType 
    : S extends { select: any } & (AgentCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AgentCountOutputType ? AgentCountOutputType[P] : never
  } 
      : AgentCountOutputType




  // Custom InputTypes

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AgentCountOutputType
     */
    select?: AgentCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    history: number
    balance: number
    betDetailHistory: number
    paymentHistory: number
    playerSession: number
    withdrawal: number
    deposit: number
  }

  export type UserCountOutputTypeSelect = {
    history?: boolean
    balance?: boolean
    betDetailHistory?: boolean
    paymentHistory?: boolean
    playerSession?: boolean
    withdrawal?: boolean
    deposit?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type GameSessionCountOutputType
   */


  export type GameSessionCountOutputType = {
    playerSession: number
  }

  export type GameSessionCountOutputTypeSelect = {
    playerSession?: boolean
  }

  export type GameSessionCountOutputTypeGetPayload<S extends boolean | null | undefined | GameSessionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GameSessionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (GameSessionCountOutputTypeArgs)
    ? GameSessionCountOutputType 
    : S extends { select: any } & (GameSessionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof GameSessionCountOutputType ? GameSessionCountOutputType[P] : never
  } 
      : GameSessionCountOutputType




  // Custom InputTypes

  /**
   * GameSessionCountOutputType without action
   */
  export type GameSessionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GameSessionCountOutputType
     */
    select?: GameSessionCountOutputTypeSelect | null
  }



  /**
   * Count Type StatusCountOutputType
   */


  export type StatusCountOutputType = {
    withdrawal: number
    deposit: number
  }

  export type StatusCountOutputTypeSelect = {
    withdrawal?: boolean
    deposit?: boolean
  }

  export type StatusCountOutputTypeGetPayload<S extends boolean | null | undefined | StatusCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StatusCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (StatusCountOutputTypeArgs)
    ? StatusCountOutputType 
    : S extends { select: any } & (StatusCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof StatusCountOutputType ? StatusCountOutputType[P] : never
  } 
      : StatusCountOutputType




  // Custom InputTypes

  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StatusCountOutputType
     */
    select?: StatusCountOutputTypeSelect | null
  }



  /**
   * Count Type GameListCountOutputType
   */


  export type GameListCountOutputType = {
    gameSession: number
    betDetailHistory: number
  }

  export type GameListCountOutputTypeSelect = {
    gameSession?: boolean
    betDetailHistory?: boolean
  }

  export type GameListCountOutputTypeGetPayload<S extends boolean | null | undefined | GameListCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GameListCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (GameListCountOutputTypeArgs)
    ? GameListCountOutputType 
    : S extends { select: any } & (GameListCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof GameListCountOutputType ? GameListCountOutputType[P] : never
  } 
      : GameListCountOutputType




  // Custom InputTypes

  /**
   * GameListCountOutputType without action
   */
  export type GameListCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GameListCountOutputType
     */
    select?: GameListCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Admin
   */


  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    accessToken: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    accessToken: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    token: number
    createdAt: number
    updatedAt: number
    accessToken: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    accessToken?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    accessToken?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    accessToken?: true
    _all?: true
  }

  export type AdminAggregateArgs = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs = {
    where?: AdminWhereInput
    orderBy?: Enumerable<AdminOrderByWithAggregationInput>
    by: AdminScalarFieldEnum[]
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }


  export type AdminGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    token: string | null
    createdAt: Date
    updatedAt: Date | null
    accessToken: string | null
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessToken?: boolean
    history?: boolean | Admin$historyArgs
    agent?: boolean | Admin$agentArgs
    _count?: boolean | AdminCountOutputTypeArgs
  }


  export type AdminInclude = {
    history?: boolean | Admin$historyArgs
    agent?: boolean | Admin$agentArgs
    _count?: boolean | AdminCountOutputTypeArgs
  }

  export type AdminGetPayload<S extends boolean | null | undefined | AdminArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Admin :
    S extends undefined ? never :
    S extends { include: any } & (AdminArgs | AdminFindManyArgs)
    ? Admin  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'history' ? Array < ActionHistoryGetPayload<S['include'][P]>>  :
        P extends 'agent' ? Array < AgentGetPayload<S['include'][P]>>  :
        P extends '_count' ? AdminCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AdminArgs | AdminFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'history' ? Array < ActionHistoryGetPayload<S['select'][P]>>  :
        P extends 'agent' ? Array < AgentGetPayload<S['select'][P]>>  :
        P extends '_count' ? AdminCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Admin ? Admin[P] : never
  } 
      : Admin


  type AdminCountArgs = 
    Omit<AdminFindManyArgs, 'select' | 'include'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AdminFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Admin'> extends True ? Prisma__AdminClient<AdminGetPayload<T>> : Prisma__AdminClient<AdminGetPayload<T> | null, null>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AdminFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Admin'> extends True ? Prisma__AdminClient<AdminGetPayload<T>> : Prisma__AdminClient<AdminGetPayload<T> | null, null>

    /**
     * Find the first Admin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs>(
      args?: SelectSubset<T, AdminFindManyArgs>
    ): Prisma.PrismaPromise<Array<AdminGetPayload<T>>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs>(
      args: SelectSubset<T, AdminCreateArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs>(
      args?: SelectSubset<T, AdminCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs>(
      args: SelectSubset<T, AdminDeleteArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs>(
      args: SelectSubset<T, AdminUpdateArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs>(
      args?: SelectSubset<T, AdminDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs>(
      args: SelectSubset<T, AdminUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs>(
      args: SelectSubset<T, AdminUpsertArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AdminClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    history<T extends Admin$historyArgs= {}>(args?: Subset<T, Admin$historyArgs>): Prisma.PrismaPromise<Array<ActionHistoryGetPayload<T>>| Null>;

    agent<T extends Admin$agentArgs= {}>(args?: Subset<T, Admin$agentArgs>): Prisma.PrismaPromise<Array<AgentGetPayload<T>>| Null>;

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
   * Admin base type for findUnique actions
   */
  export type AdminFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUnique
   */
  export interface AdminFindUniqueArgs extends AdminFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin base type for findFirst actions
   */
  export type AdminFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: Enumerable<AdminScalarFieldEnum>
  }

  /**
   * Admin findFirst
   */
  export interface AdminFindFirstArgs extends AdminFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin findMany
   */
  export type AdminFindManyArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs = {
    /**
     * The data used to create many Admins.
     */
    data: Enumerable<AdminCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }


  /**
   * Admin.history
   */
  export type Admin$historyArgs = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude | null
    where?: ActionHistoryWhereInput
    orderBy?: Enumerable<ActionHistoryOrderByWithRelationInput>
    cursor?: ActionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ActionHistoryScalarFieldEnum>
  }


  /**
   * Admin.agent
   */
  export type Admin$agentArgs = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgentInclude | null
    where?: AgentWhereInput
    orderBy?: Enumerable<AgentOrderByWithRelationInput>
    cursor?: AgentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AgentScalarFieldEnum>
  }


  /**
   * Admin without action
   */
  export type AdminArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
  }



  /**
   * Model Agent
   */


  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    accessToken: string | null
    adminId: string | null
  }

  export type AgentMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    accessToken: string | null
    adminId: string | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    active: number
    createdAt: number
    updatedAt: number
    accessToken: number
    adminId: number
    _all: number
  }


  export type AgentMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    accessToken?: true
    adminId?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    accessToken?: true
    adminId?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    accessToken?: true
    adminId?: true
    _all?: true
  }

  export type AgentAggregateArgs = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: Enumerable<AgentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs = {
    where?: AgentWhereInput
    orderBy?: Enumerable<AgentOrderByWithAggregationInput>
    by: AgentScalarFieldEnum[]
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }


  export type AgentGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    active: boolean
    createdAt: Date
    updatedAt: Date | null
    accessToken: string | null
    adminId: string | null
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessToken?: boolean
    adminId?: boolean
    history?: boolean | Agent$historyArgs
    createdBy?: boolean | AdminArgs
    users?: boolean | Agent$usersArgs
    quota?: boolean | Agent$quotaArgs
    status?: boolean | Agent$statusArgs
    _count?: boolean | AgentCountOutputTypeArgs
  }


  export type AgentInclude = {
    history?: boolean | Agent$historyArgs
    createdBy?: boolean | AdminArgs
    users?: boolean | Agent$usersArgs
    quota?: boolean | Agent$quotaArgs
    status?: boolean | Agent$statusArgs
    _count?: boolean | AgentCountOutputTypeArgs
  }

  export type AgentGetPayload<S extends boolean | null | undefined | AgentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Agent :
    S extends undefined ? never :
    S extends { include: any } & (AgentArgs | AgentFindManyArgs)
    ? Agent  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'history' ? Array < ActionHistoryGetPayload<S['include'][P]>>  :
        P extends 'createdBy' ? AdminGetPayload<S['include'][P]> | null :
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'quota' ? Array < QuotaGetPayload<S['include'][P]>>  :
        P extends 'status' ? Array < StatusGetPayload<S['include'][P]>>  :
        P extends '_count' ? AgentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AgentArgs | AgentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'history' ? Array < ActionHistoryGetPayload<S['select'][P]>>  :
        P extends 'createdBy' ? AdminGetPayload<S['select'][P]> | null :
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'quota' ? Array < QuotaGetPayload<S['select'][P]>>  :
        P extends 'status' ? Array < StatusGetPayload<S['select'][P]>>  :
        P extends '_count' ? AgentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Agent ? Agent[P] : never
  } 
      : Agent


  type AgentCountArgs = 
    Omit<AgentFindManyArgs, 'select' | 'include'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AgentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AgentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Agent'> extends True ? Prisma__AgentClient<AgentGetPayload<T>> : Prisma__AgentClient<AgentGetPayload<T> | null, null>

    /**
     * Find one Agent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AgentFindUniqueOrThrowArgs>
    ): Prisma__AgentClient<AgentGetPayload<T>>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AgentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AgentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Agent'> extends True ? Prisma__AgentClient<AgentGetPayload<T>> : Prisma__AgentClient<AgentGetPayload<T> | null, null>

    /**
     * Find the first Agent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AgentFindFirstOrThrowArgs>
    ): Prisma__AgentClient<AgentGetPayload<T>>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AgentFindManyArgs>(
      args?: SelectSubset<T, AgentFindManyArgs>
    ): Prisma.PrismaPromise<Array<AgentGetPayload<T>>>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
    **/
    create<T extends AgentCreateArgs>(
      args: SelectSubset<T, AgentCreateArgs>
    ): Prisma__AgentClient<AgentGetPayload<T>>

    /**
     * Create many Agents.
     *     @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     *     @example
     *     // Create many Agents
     *     const agent = await prisma.agent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AgentCreateManyArgs>(
      args?: SelectSubset<T, AgentCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
    **/
    delete<T extends AgentDeleteArgs>(
      args: SelectSubset<T, AgentDeleteArgs>
    ): Prisma__AgentClient<AgentGetPayload<T>>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AgentUpdateArgs>(
      args: SelectSubset<T, AgentUpdateArgs>
    ): Prisma__AgentClient<AgentGetPayload<T>>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AgentDeleteManyArgs>(
      args?: SelectSubset<T, AgentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AgentUpdateManyArgs>(
      args: SelectSubset<T, AgentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
    **/
    upsert<T extends AgentUpsertArgs>(
      args: SelectSubset<T, AgentUpsertArgs>
    ): Prisma__AgentClient<AgentGetPayload<T>>

    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
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
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AgentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    history<T extends Agent$historyArgs= {}>(args?: Subset<T, Agent$historyArgs>): Prisma.PrismaPromise<Array<ActionHistoryGetPayload<T>>| Null>;

    createdBy<T extends AdminArgs= {}>(args?: Subset<T, AdminArgs>): Prisma__AdminClient<AdminGetPayload<T> | Null>;

    users<T extends Agent$usersArgs= {}>(args?: Subset<T, Agent$usersArgs>): Prisma.PrismaPromise<Array<UserGetPayload<T>>| Null>;

    quota<T extends Agent$quotaArgs= {}>(args?: Subset<T, Agent$quotaArgs>): Prisma.PrismaPromise<Array<QuotaGetPayload<T>>| Null>;

    status<T extends Agent$statusArgs= {}>(args?: Subset<T, Agent$statusArgs>): Prisma.PrismaPromise<Array<StatusGetPayload<T>>| Null>;

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
   * Agent base type for findUnique actions
   */
  export type AgentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgentInclude | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUnique
   */
  export interface AgentFindUniqueArgs extends AgentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgentInclude | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }


  /**
   * Agent base type for findFirst actions
   */
  export type AgentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgentInclude | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: Enumerable<AgentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: Enumerable<AgentScalarFieldEnum>
  }

  /**
   * Agent findFirst
   */
  export interface AgentFindFirstArgs extends AgentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgentInclude | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: Enumerable<AgentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: Enumerable<AgentScalarFieldEnum>
  }


  /**
   * Agent findMany
   */
  export type AgentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgentInclude | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: Enumerable<AgentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    distinct?: Enumerable<AgentScalarFieldEnum>
  }


  /**
   * Agent create
   */
  export type AgentCreateArgs = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgentInclude | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }


  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs = {
    /**
     * The data used to create many Agents.
     */
    data: Enumerable<AgentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Agent update
   */
  export type AgentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgentInclude | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }


  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
  }


  /**
   * Agent upsert
   */
  export type AgentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgentInclude | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }


  /**
   * Agent delete
   */
  export type AgentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgentInclude | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }


  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
  }


  /**
   * Agent.history
   */
  export type Agent$historyArgs = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude | null
    where?: ActionHistoryWhereInput
    orderBy?: Enumerable<ActionHistoryOrderByWithRelationInput>
    cursor?: ActionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ActionHistoryScalarFieldEnum>
  }


  /**
   * Agent.users
   */
  export type Agent$usersArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Agent.quota
   */
  export type Agent$quotaArgs = {
    /**
     * Select specific fields to fetch from the Quota
     */
    select?: QuotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuotaInclude | null
    where?: QuotaWhereInput
    orderBy?: Enumerable<QuotaOrderByWithRelationInput>
    cursor?: QuotaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<QuotaScalarFieldEnum>
  }


  /**
   * Agent.status
   */
  export type Agent$statusArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    where?: StatusWhereInput
    orderBy?: Enumerable<StatusOrderByWithRelationInput>
    cursor?: StatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StatusScalarFieldEnum>
  }


  /**
   * Agent without action
   */
  export type AgentArgs = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgentInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    headImage: string | null
    active: boolean | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    accessToken: string | null
    agentId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    headImage: string | null
    active: boolean | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    accessToken: string | null
    agentId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    headImage: number
    active: number
    token: number
    createdAt: number
    updatedAt: number
    accessToken: number
    agentId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    headImage?: true
    active?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    accessToken?: true
    agentId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    headImage?: true
    active?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    accessToken?: true
    agentId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    headImage?: true
    active?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    accessToken?: true
    agentId?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    headImage: string
    active: boolean
    token: string | null
    createdAt: Date
    updatedAt: Date | null
    accessToken: string | null
    agentId: string | null
    _count: UserCountAggregateOutputType | null
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


  export type UserSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    headImage?: boolean
    active?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessToken?: boolean
    agentId?: boolean
    history?: boolean | User$historyArgs
    balance?: boolean | User$balanceArgs
    betDetailHistory?: boolean | User$betDetailHistoryArgs
    paymentHistory?: boolean | User$paymentHistoryArgs
    playerSession?: boolean | User$playerSessionArgs
    withdrawal?: boolean | User$withdrawalArgs
    deposit?: boolean | User$depositArgs
    agent?: boolean | AgentArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    history?: boolean | User$historyArgs
    balance?: boolean | User$balanceArgs
    betDetailHistory?: boolean | User$betDetailHistoryArgs
    paymentHistory?: boolean | User$paymentHistoryArgs
    playerSession?: boolean | User$playerSessionArgs
    withdrawal?: boolean | User$withdrawalArgs
    deposit?: boolean | User$depositArgs
    agent?: boolean | AgentArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'history' ? Array < ActionHistoryGetPayload<S['include'][P]>>  :
        P extends 'balance' ? Array < BalanceGetPayload<S['include'][P]>>  :
        P extends 'betDetailHistory' ? Array < BetDetailHistoryGetPayload<S['include'][P]>>  :
        P extends 'paymentHistory' ? Array < PaymentHistoryGetPayload<S['include'][P]>>  :
        P extends 'playerSession' ? Array < PlayerSessionGetPayload<S['include'][P]>>  :
        P extends 'withdrawal' ? Array < WithdrawalGetPayload<S['include'][P]>>  :
        P extends 'deposit' ? Array < DepositGetPayload<S['include'][P]>>  :
        P extends 'agent' ? AgentGetPayload<S['include'][P]> | null :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'history' ? Array < ActionHistoryGetPayload<S['select'][P]>>  :
        P extends 'balance' ? Array < BalanceGetPayload<S['select'][P]>>  :
        P extends 'betDetailHistory' ? Array < BetDetailHistoryGetPayload<S['select'][P]>>  :
        P extends 'paymentHistory' ? Array < PaymentHistoryGetPayload<S['select'][P]>>  :
        P extends 'playerSession' ? Array < PlayerSessionGetPayload<S['select'][P]>>  :
        P extends 'withdrawal' ? Array < WithdrawalGetPayload<S['select'][P]>>  :
        P extends 'deposit' ? Array < DepositGetPayload<S['select'][P]>>  :
        P extends 'agent' ? AgentGetPayload<S['select'][P]> | null :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    history<T extends User$historyArgs= {}>(args?: Subset<T, User$historyArgs>): Prisma.PrismaPromise<Array<ActionHistoryGetPayload<T>>| Null>;

    balance<T extends User$balanceArgs= {}>(args?: Subset<T, User$balanceArgs>): Prisma.PrismaPromise<Array<BalanceGetPayload<T>>| Null>;

    betDetailHistory<T extends User$betDetailHistoryArgs= {}>(args?: Subset<T, User$betDetailHistoryArgs>): Prisma.PrismaPromise<Array<BetDetailHistoryGetPayload<T>>| Null>;

    paymentHistory<T extends User$paymentHistoryArgs= {}>(args?: Subset<T, User$paymentHistoryArgs>): Prisma.PrismaPromise<Array<PaymentHistoryGetPayload<T>>| Null>;

    playerSession<T extends User$playerSessionArgs= {}>(args?: Subset<T, User$playerSessionArgs>): Prisma.PrismaPromise<Array<PlayerSessionGetPayload<T>>| Null>;

    withdrawal<T extends User$withdrawalArgs= {}>(args?: Subset<T, User$withdrawalArgs>): Prisma.PrismaPromise<Array<WithdrawalGetPayload<T>>| Null>;

    deposit<T extends User$depositArgs= {}>(args?: Subset<T, User$depositArgs>): Prisma.PrismaPromise<Array<DepositGetPayload<T>>| Null>;

    agent<T extends AgentArgs= {}>(args?: Subset<T, AgentArgs>): Prisma__AgentClient<AgentGetPayload<T> | Null>;

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
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.history
   */
  export type User$historyArgs = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude | null
    where?: ActionHistoryWhereInput
    orderBy?: Enumerable<ActionHistoryOrderByWithRelationInput>
    cursor?: ActionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ActionHistoryScalarFieldEnum>
  }


  /**
   * User.balance
   */
  export type User$balanceArgs = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BalanceInclude | null
    where?: BalanceWhereInput
    orderBy?: Enumerable<BalanceOrderByWithRelationInput>
    cursor?: BalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BalanceScalarFieldEnum>
  }


  /**
   * User.betDetailHistory
   */
  export type User$betDetailHistoryArgs = {
    /**
     * Select specific fields to fetch from the BetDetailHistory
     */
    select?: BetDetailHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BetDetailHistoryInclude | null
    where?: BetDetailHistoryWhereInput
    orderBy?: Enumerable<BetDetailHistoryOrderByWithRelationInput>
    cursor?: BetDetailHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BetDetailHistoryScalarFieldEnum>
  }


  /**
   * User.paymentHistory
   */
  export type User$paymentHistoryArgs = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentHistoryInclude | null
    where?: PaymentHistoryWhereInput
    orderBy?: Enumerable<PaymentHistoryOrderByWithRelationInput>
    cursor?: PaymentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PaymentHistoryScalarFieldEnum>
  }


  /**
   * User.playerSession
   */
  export type User$playerSessionArgs = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerSessionInclude | null
    where?: PlayerSessionWhereInput
    orderBy?: Enumerable<PlayerSessionOrderByWithRelationInput>
    cursor?: PlayerSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PlayerSessionScalarFieldEnum>
  }


  /**
   * User.withdrawal
   */
  export type User$withdrawalArgs = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawalInclude | null
    where?: WithdrawalWhereInput
    orderBy?: Enumerable<WithdrawalOrderByWithRelationInput>
    cursor?: WithdrawalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WithdrawalScalarFieldEnum>
  }


  /**
   * User.deposit
   */
  export type User$depositArgs = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepositInclude | null
    where?: DepositWhereInput
    orderBy?: Enumerable<DepositOrderByWithRelationInput>
    cursor?: DepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DepositScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model ActionHistory
   */


  export type AggregateActionHistory = {
    _count: ActionHistoryCountAggregateOutputType | null
    _min: ActionHistoryMinAggregateOutputType | null
    _max: ActionHistoryMaxAggregateOutputType | null
  }

  export type ActionHistoryMinAggregateOutputType = {
    id: string | null
    ip: string | null
    createdAt: Date | null
    userId: string | null
    agentId: string | null
    adminId: string | null
  }

  export type ActionHistoryMaxAggregateOutputType = {
    id: string | null
    ip: string | null
    createdAt: Date | null
    userId: string | null
    agentId: string | null
    adminId: string | null
  }

  export type ActionHistoryCountAggregateOutputType = {
    id: number
    newValueJson: number
    ip: number
    createdAt: number
    userId: number
    agentId: number
    adminId: number
    _all: number
  }


  export type ActionHistoryMinAggregateInputType = {
    id?: true
    ip?: true
    createdAt?: true
    userId?: true
    agentId?: true
    adminId?: true
  }

  export type ActionHistoryMaxAggregateInputType = {
    id?: true
    ip?: true
    createdAt?: true
    userId?: true
    agentId?: true
    adminId?: true
  }

  export type ActionHistoryCountAggregateInputType = {
    id?: true
    newValueJson?: true
    ip?: true
    createdAt?: true
    userId?: true
    agentId?: true
    adminId?: true
    _all?: true
  }

  export type ActionHistoryAggregateArgs = {
    /**
     * Filter which ActionHistory to aggregate.
     */
    where?: ActionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionHistories to fetch.
     */
    orderBy?: Enumerable<ActionHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActionHistories
    **/
    _count?: true | ActionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionHistoryMaxAggregateInputType
  }

  export type GetActionHistoryAggregateType<T extends ActionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateActionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionHistory[P]>
      : GetScalarType<T[P], AggregateActionHistory[P]>
  }




  export type ActionHistoryGroupByArgs = {
    where?: ActionHistoryWhereInput
    orderBy?: Enumerable<ActionHistoryOrderByWithAggregationInput>
    by: ActionHistoryScalarFieldEnum[]
    having?: ActionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionHistoryCountAggregateInputType | true
    _min?: ActionHistoryMinAggregateInputType
    _max?: ActionHistoryMaxAggregateInputType
  }


  export type ActionHistoryGroupByOutputType = {
    id: string
    newValueJson: JsonValue | null
    ip: string
    createdAt: Date
    userId: string | null
    agentId: string | null
    adminId: string | null
    _count: ActionHistoryCountAggregateOutputType | null
    _min: ActionHistoryMinAggregateOutputType | null
    _max: ActionHistoryMaxAggregateOutputType | null
  }

  type GetActionHistoryGroupByPayload<T extends ActionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ActionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ActionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ActionHistorySelect = {
    id?: boolean
    newValueJson?: boolean
    ip?: boolean
    createdAt?: boolean
    userId?: boolean
    agentId?: boolean
    adminId?: boolean
    admin?: boolean | AdminArgs
    agent?: boolean | AgentArgs
    user?: boolean | UserArgs
  }


  export type ActionHistoryInclude = {
    admin?: boolean | AdminArgs
    agent?: boolean | AgentArgs
    user?: boolean | UserArgs
  }

  export type ActionHistoryGetPayload<S extends boolean | null | undefined | ActionHistoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ActionHistory :
    S extends undefined ? never :
    S extends { include: any } & (ActionHistoryArgs | ActionHistoryFindManyArgs)
    ? ActionHistory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'admin' ? AdminGetPayload<S['include'][P]> | null :
        P extends 'agent' ? AgentGetPayload<S['include'][P]> | null :
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (ActionHistoryArgs | ActionHistoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'admin' ? AdminGetPayload<S['select'][P]> | null :
        P extends 'agent' ? AgentGetPayload<S['select'][P]> | null :
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :  P extends keyof ActionHistory ? ActionHistory[P] : never
  } 
      : ActionHistory


  type ActionHistoryCountArgs = 
    Omit<ActionHistoryFindManyArgs, 'select' | 'include'> & {
      select?: ActionHistoryCountAggregateInputType | true
    }

  export interface ActionHistoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ActionHistory that matches the filter.
     * @param {ActionHistoryFindUniqueArgs} args - Arguments to find a ActionHistory
     * @example
     * // Get one ActionHistory
     * const actionHistory = await prisma.actionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ActionHistoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ActionHistoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ActionHistory'> extends True ? Prisma__ActionHistoryClient<ActionHistoryGetPayload<T>> : Prisma__ActionHistoryClient<ActionHistoryGetPayload<T> | null, null>

    /**
     * Find one ActionHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ActionHistoryFindUniqueOrThrowArgs} args - Arguments to find a ActionHistory
     * @example
     * // Get one ActionHistory
     * const actionHistory = await prisma.actionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ActionHistoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ActionHistoryFindUniqueOrThrowArgs>
    ): Prisma__ActionHistoryClient<ActionHistoryGetPayload<T>>

    /**
     * Find the first ActionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionHistoryFindFirstArgs} args - Arguments to find a ActionHistory
     * @example
     * // Get one ActionHistory
     * const actionHistory = await prisma.actionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ActionHistoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ActionHistoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ActionHistory'> extends True ? Prisma__ActionHistoryClient<ActionHistoryGetPayload<T>> : Prisma__ActionHistoryClient<ActionHistoryGetPayload<T> | null, null>

    /**
     * Find the first ActionHistory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionHistoryFindFirstOrThrowArgs} args - Arguments to find a ActionHistory
     * @example
     * // Get one ActionHistory
     * const actionHistory = await prisma.actionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ActionHistoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ActionHistoryFindFirstOrThrowArgs>
    ): Prisma__ActionHistoryClient<ActionHistoryGetPayload<T>>

    /**
     * Find zero or more ActionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActionHistories
     * const actionHistories = await prisma.actionHistory.findMany()
     * 
     * // Get first 10 ActionHistories
     * const actionHistories = await prisma.actionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionHistoryWithIdOnly = await prisma.actionHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ActionHistoryFindManyArgs>(
      args?: SelectSubset<T, ActionHistoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<ActionHistoryGetPayload<T>>>

    /**
     * Create a ActionHistory.
     * @param {ActionHistoryCreateArgs} args - Arguments to create a ActionHistory.
     * @example
     * // Create one ActionHistory
     * const ActionHistory = await prisma.actionHistory.create({
     *   data: {
     *     // ... data to create a ActionHistory
     *   }
     * })
     * 
    **/
    create<T extends ActionHistoryCreateArgs>(
      args: SelectSubset<T, ActionHistoryCreateArgs>
    ): Prisma__ActionHistoryClient<ActionHistoryGetPayload<T>>

    /**
     * Create many ActionHistories.
     *     @param {ActionHistoryCreateManyArgs} args - Arguments to create many ActionHistories.
     *     @example
     *     // Create many ActionHistories
     *     const actionHistory = await prisma.actionHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ActionHistoryCreateManyArgs>(
      args?: SelectSubset<T, ActionHistoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ActionHistory.
     * @param {ActionHistoryDeleteArgs} args - Arguments to delete one ActionHistory.
     * @example
     * // Delete one ActionHistory
     * const ActionHistory = await prisma.actionHistory.delete({
     *   where: {
     *     // ... filter to delete one ActionHistory
     *   }
     * })
     * 
    **/
    delete<T extends ActionHistoryDeleteArgs>(
      args: SelectSubset<T, ActionHistoryDeleteArgs>
    ): Prisma__ActionHistoryClient<ActionHistoryGetPayload<T>>

    /**
     * Update one ActionHistory.
     * @param {ActionHistoryUpdateArgs} args - Arguments to update one ActionHistory.
     * @example
     * // Update one ActionHistory
     * const actionHistory = await prisma.actionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ActionHistoryUpdateArgs>(
      args: SelectSubset<T, ActionHistoryUpdateArgs>
    ): Prisma__ActionHistoryClient<ActionHistoryGetPayload<T>>

    /**
     * Delete zero or more ActionHistories.
     * @param {ActionHistoryDeleteManyArgs} args - Arguments to filter ActionHistories to delete.
     * @example
     * // Delete a few ActionHistories
     * const { count } = await prisma.actionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ActionHistoryDeleteManyArgs>(
      args?: SelectSubset<T, ActionHistoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActionHistories
     * const actionHistory = await prisma.actionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ActionHistoryUpdateManyArgs>(
      args: SelectSubset<T, ActionHistoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActionHistory.
     * @param {ActionHistoryUpsertArgs} args - Arguments to update or create a ActionHistory.
     * @example
     * // Update or create a ActionHistory
     * const actionHistory = await prisma.actionHistory.upsert({
     *   create: {
     *     // ... data to create a ActionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActionHistory we want to update
     *   }
     * })
    **/
    upsert<T extends ActionHistoryUpsertArgs>(
      args: SelectSubset<T, ActionHistoryUpsertArgs>
    ): Prisma__ActionHistoryClient<ActionHistoryGetPayload<T>>

    /**
     * Count the number of ActionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionHistoryCountArgs} args - Arguments to filter ActionHistories to count.
     * @example
     * // Count the number of ActionHistories
     * const count = await prisma.actionHistory.count({
     *   where: {
     *     // ... the filter for the ActionHistories we want to count
     *   }
     * })
    **/
    count<T extends ActionHistoryCountArgs>(
      args?: Subset<T, ActionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActionHistoryAggregateArgs>(args: Subset<T, ActionHistoryAggregateArgs>): Prisma.PrismaPromise<GetActionHistoryAggregateType<T>>

    /**
     * Group by ActionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionHistoryGroupByArgs} args - Group by arguments.
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
      T extends ActionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ActionHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ActionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ActionHistoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    admin<T extends AdminArgs= {}>(args?: Subset<T, AdminArgs>): Prisma__AdminClient<AdminGetPayload<T> | Null>;

    agent<T extends AgentArgs= {}>(args?: Subset<T, AgentArgs>): Prisma__AgentClient<AgentGetPayload<T> | Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * ActionHistory base type for findUnique actions
   */
  export type ActionHistoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude | null
    /**
     * Filter, which ActionHistory to fetch.
     */
    where: ActionHistoryWhereUniqueInput
  }

  /**
   * ActionHistory findUnique
   */
  export interface ActionHistoryFindUniqueArgs extends ActionHistoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ActionHistory findUniqueOrThrow
   */
  export type ActionHistoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude | null
    /**
     * Filter, which ActionHistory to fetch.
     */
    where: ActionHistoryWhereUniqueInput
  }


  /**
   * ActionHistory base type for findFirst actions
   */
  export type ActionHistoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude | null
    /**
     * Filter, which ActionHistory to fetch.
     */
    where?: ActionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionHistories to fetch.
     */
    orderBy?: Enumerable<ActionHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionHistories.
     */
    cursor?: ActionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionHistories.
     */
    distinct?: Enumerable<ActionHistoryScalarFieldEnum>
  }

  /**
   * ActionHistory findFirst
   */
  export interface ActionHistoryFindFirstArgs extends ActionHistoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ActionHistory findFirstOrThrow
   */
  export type ActionHistoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude | null
    /**
     * Filter, which ActionHistory to fetch.
     */
    where?: ActionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionHistories to fetch.
     */
    orderBy?: Enumerable<ActionHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionHistories.
     */
    cursor?: ActionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionHistories.
     */
    distinct?: Enumerable<ActionHistoryScalarFieldEnum>
  }


  /**
   * ActionHistory findMany
   */
  export type ActionHistoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude | null
    /**
     * Filter, which ActionHistories to fetch.
     */
    where?: ActionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionHistories to fetch.
     */
    orderBy?: Enumerable<ActionHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActionHistories.
     */
    cursor?: ActionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionHistories.
     */
    skip?: number
    distinct?: Enumerable<ActionHistoryScalarFieldEnum>
  }


  /**
   * ActionHistory create
   */
  export type ActionHistoryCreateArgs = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude | null
    /**
     * The data needed to create a ActionHistory.
     */
    data: XOR<ActionHistoryCreateInput, ActionHistoryUncheckedCreateInput>
  }


  /**
   * ActionHistory createMany
   */
  export type ActionHistoryCreateManyArgs = {
    /**
     * The data used to create many ActionHistories.
     */
    data: Enumerable<ActionHistoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ActionHistory update
   */
  export type ActionHistoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude | null
    /**
     * The data needed to update a ActionHistory.
     */
    data: XOR<ActionHistoryUpdateInput, ActionHistoryUncheckedUpdateInput>
    /**
     * Choose, which ActionHistory to update.
     */
    where: ActionHistoryWhereUniqueInput
  }


  /**
   * ActionHistory updateMany
   */
  export type ActionHistoryUpdateManyArgs = {
    /**
     * The data used to update ActionHistories.
     */
    data: XOR<ActionHistoryUpdateManyMutationInput, ActionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ActionHistories to update
     */
    where?: ActionHistoryWhereInput
  }


  /**
   * ActionHistory upsert
   */
  export type ActionHistoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude | null
    /**
     * The filter to search for the ActionHistory to update in case it exists.
     */
    where: ActionHistoryWhereUniqueInput
    /**
     * In case the ActionHistory found by the `where` argument doesn't exist, create a new ActionHistory with this data.
     */
    create: XOR<ActionHistoryCreateInput, ActionHistoryUncheckedCreateInput>
    /**
     * In case the ActionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionHistoryUpdateInput, ActionHistoryUncheckedUpdateInput>
  }


  /**
   * ActionHistory delete
   */
  export type ActionHistoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude | null
    /**
     * Filter which ActionHistory to delete.
     */
    where: ActionHistoryWhereUniqueInput
  }


  /**
   * ActionHistory deleteMany
   */
  export type ActionHistoryDeleteManyArgs = {
    /**
     * Filter which ActionHistories to delete
     */
    where?: ActionHistoryWhereInput
  }


  /**
   * ActionHistory without action
   */
  export type ActionHistoryArgs = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude | null
  }



  /**
   * Model Balance
   */


  export type AggregateBalance = {
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  export type BalanceAvgAggregateOutputType = {
    balance: number | null
  }

  export type BalanceSumAggregateOutputType = {
    balance: number | null
  }

  export type BalanceMinAggregateOutputType = {
    id: string | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type BalanceMaxAggregateOutputType = {
    id: string | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type BalanceCountAggregateOutputType = {
    id: number
    balance: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type BalanceAvgAggregateInputType = {
    balance?: true
  }

  export type BalanceSumAggregateInputType = {
    balance?: true
  }

  export type BalanceMinAggregateInputType = {
    id?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type BalanceMaxAggregateInputType = {
    id?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type BalanceCountAggregateInputType = {
    id?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type BalanceAggregateArgs = {
    /**
     * Filter which Balance to aggregate.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: Enumerable<BalanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Balances
    **/
    _count?: true | BalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalanceMaxAggregateInputType
  }

  export type GetBalanceAggregateType<T extends BalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalance[P]>
      : GetScalarType<T[P], AggregateBalance[P]>
  }




  export type BalanceGroupByArgs = {
    where?: BalanceWhereInput
    orderBy?: Enumerable<BalanceOrderByWithAggregationInput>
    by: BalanceScalarFieldEnum[]
    having?: BalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalanceCountAggregateInputType | true
    _avg?: BalanceAvgAggregateInputType
    _sum?: BalanceSumAggregateInputType
    _min?: BalanceMinAggregateInputType
    _max?: BalanceMaxAggregateInputType
  }


  export type BalanceGroupByOutputType = {
    id: string
    balance: number
    createdAt: Date
    updatedAt: Date | null
    ownerId: string
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  type GetBalanceGroupByPayload<T extends BalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalanceGroupByOutputType[P]>
            : GetScalarType<T[P], BalanceGroupByOutputType[P]>
        }
      >
    >


  export type BalanceSelect = {
    id?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserArgs
  }


  export type BalanceInclude = {
    owner?: boolean | UserArgs
  }

  export type BalanceGetPayload<S extends boolean | null | undefined | BalanceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Balance :
    S extends undefined ? never :
    S extends { include: any } & (BalanceArgs | BalanceFindManyArgs)
    ? Balance  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'owner' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BalanceArgs | BalanceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'owner' ? UserGetPayload<S['select'][P]> :  P extends keyof Balance ? Balance[P] : never
  } 
      : Balance


  type BalanceCountArgs = 
    Omit<BalanceFindManyArgs, 'select' | 'include'> & {
      select?: BalanceCountAggregateInputType | true
    }

  export interface BalanceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Balance that matches the filter.
     * @param {BalanceFindUniqueArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BalanceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BalanceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Balance'> extends True ? Prisma__BalanceClient<BalanceGetPayload<T>> : Prisma__BalanceClient<BalanceGetPayload<T> | null, null>

    /**
     * Find one Balance that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BalanceFindUniqueOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BalanceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BalanceFindUniqueOrThrowArgs>
    ): Prisma__BalanceClient<BalanceGetPayload<T>>

    /**
     * Find the first Balance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BalanceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BalanceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Balance'> extends True ? Prisma__BalanceClient<BalanceGetPayload<T>> : Prisma__BalanceClient<BalanceGetPayload<T> | null, null>

    /**
     * Find the first Balance that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BalanceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BalanceFindFirstOrThrowArgs>
    ): Prisma__BalanceClient<BalanceGetPayload<T>>

    /**
     * Find zero or more Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Balances
     * const balances = await prisma.balance.findMany()
     * 
     * // Get first 10 Balances
     * const balances = await prisma.balance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const balanceWithIdOnly = await prisma.balance.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BalanceFindManyArgs>(
      args?: SelectSubset<T, BalanceFindManyArgs>
    ): Prisma.PrismaPromise<Array<BalanceGetPayload<T>>>

    /**
     * Create a Balance.
     * @param {BalanceCreateArgs} args - Arguments to create a Balance.
     * @example
     * // Create one Balance
     * const Balance = await prisma.balance.create({
     *   data: {
     *     // ... data to create a Balance
     *   }
     * })
     * 
    **/
    create<T extends BalanceCreateArgs>(
      args: SelectSubset<T, BalanceCreateArgs>
    ): Prisma__BalanceClient<BalanceGetPayload<T>>

    /**
     * Create many Balances.
     *     @param {BalanceCreateManyArgs} args - Arguments to create many Balances.
     *     @example
     *     // Create many Balances
     *     const balance = await prisma.balance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BalanceCreateManyArgs>(
      args?: SelectSubset<T, BalanceCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Balance.
     * @param {BalanceDeleteArgs} args - Arguments to delete one Balance.
     * @example
     * // Delete one Balance
     * const Balance = await prisma.balance.delete({
     *   where: {
     *     // ... filter to delete one Balance
     *   }
     * })
     * 
    **/
    delete<T extends BalanceDeleteArgs>(
      args: SelectSubset<T, BalanceDeleteArgs>
    ): Prisma__BalanceClient<BalanceGetPayload<T>>

    /**
     * Update one Balance.
     * @param {BalanceUpdateArgs} args - Arguments to update one Balance.
     * @example
     * // Update one Balance
     * const balance = await prisma.balance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BalanceUpdateArgs>(
      args: SelectSubset<T, BalanceUpdateArgs>
    ): Prisma__BalanceClient<BalanceGetPayload<T>>

    /**
     * Delete zero or more Balances.
     * @param {BalanceDeleteManyArgs} args - Arguments to filter Balances to delete.
     * @example
     * // Delete a few Balances
     * const { count } = await prisma.balance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BalanceDeleteManyArgs>(
      args?: SelectSubset<T, BalanceDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BalanceUpdateManyArgs>(
      args: SelectSubset<T, BalanceUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Balance.
     * @param {BalanceUpsertArgs} args - Arguments to update or create a Balance.
     * @example
     * // Update or create a Balance
     * const balance = await prisma.balance.upsert({
     *   create: {
     *     // ... data to create a Balance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Balance we want to update
     *   }
     * })
    **/
    upsert<T extends BalanceUpsertArgs>(
      args: SelectSubset<T, BalanceUpsertArgs>
    ): Prisma__BalanceClient<BalanceGetPayload<T>>

    /**
     * Count the number of Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceCountArgs} args - Arguments to filter Balances to count.
     * @example
     * // Count the number of Balances
     * const count = await prisma.balance.count({
     *   where: {
     *     // ... the filter for the Balances we want to count
     *   }
     * })
    **/
    count<T extends BalanceCountArgs>(
      args?: Subset<T, BalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BalanceAggregateArgs>(args: Subset<T, BalanceAggregateArgs>): Prisma.PrismaPromise<GetBalanceAggregateType<T>>

    /**
     * Group by Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceGroupByArgs} args - Group by arguments.
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
      T extends BalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BalanceGroupByArgs['orderBy'] }
        : { orderBy?: BalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Balance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BalanceClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    owner<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * Balance base type for findUnique actions
   */
  export type BalanceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BalanceInclude | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance findUnique
   */
  export interface BalanceFindUniqueArgs extends BalanceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Balance findUniqueOrThrow
   */
  export type BalanceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BalanceInclude | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
  }


  /**
   * Balance base type for findFirst actions
   */
  export type BalanceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BalanceInclude | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: Enumerable<BalanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: Enumerable<BalanceScalarFieldEnum>
  }

  /**
   * Balance findFirst
   */
  export interface BalanceFindFirstArgs extends BalanceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Balance findFirstOrThrow
   */
  export type BalanceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BalanceInclude | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: Enumerable<BalanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: Enumerable<BalanceScalarFieldEnum>
  }


  /**
   * Balance findMany
   */
  export type BalanceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BalanceInclude | null
    /**
     * Filter, which Balances to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: Enumerable<BalanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    distinct?: Enumerable<BalanceScalarFieldEnum>
  }


  /**
   * Balance create
   */
  export type BalanceCreateArgs = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BalanceInclude | null
    /**
     * The data needed to create a Balance.
     */
    data: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
  }


  /**
   * Balance createMany
   */
  export type BalanceCreateManyArgs = {
    /**
     * The data used to create many Balances.
     */
    data: Enumerable<BalanceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Balance update
   */
  export type BalanceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BalanceInclude | null
    /**
     * The data needed to update a Balance.
     */
    data: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
    /**
     * Choose, which Balance to update.
     */
    where: BalanceWhereUniqueInput
  }


  /**
   * Balance updateMany
   */
  export type BalanceUpdateManyArgs = {
    /**
     * The data used to update Balances.
     */
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalanceWhereInput
  }


  /**
   * Balance upsert
   */
  export type BalanceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BalanceInclude | null
    /**
     * The filter to search for the Balance to update in case it exists.
     */
    where: BalanceWhereUniqueInput
    /**
     * In case the Balance found by the `where` argument doesn't exist, create a new Balance with this data.
     */
    create: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
    /**
     * In case the Balance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
  }


  /**
   * Balance delete
   */
  export type BalanceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BalanceInclude | null
    /**
     * Filter which Balance to delete.
     */
    where: BalanceWhereUniqueInput
  }


  /**
   * Balance deleteMany
   */
  export type BalanceDeleteManyArgs = {
    /**
     * Filter which Balances to delete
     */
    where?: BalanceWhereInput
  }


  /**
   * Balance without action
   */
  export type BalanceArgs = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BalanceInclude | null
  }



  /**
   * Model PaymentHistory
   */


  export type AggregatePaymentHistory = {
    _count: PaymentHistoryCountAggregateOutputType | null
    _avg: PaymentHistoryAvgAggregateOutputType | null
    _sum: PaymentHistorySumAggregateOutputType | null
    _min: PaymentHistoryMinAggregateOutputType | null
    _max: PaymentHistoryMaxAggregateOutputType | null
  }

  export type PaymentHistoryAvgAggregateOutputType = {
    beforeScore: number | null
    changeScore: number | null
    newScore: number | null
  }

  export type PaymentHistorySumAggregateOutputType = {
    beforeScore: number | null
    changeScore: number | null
    newScore: number | null
  }

  export type PaymentHistoryMinAggregateOutputType = {
    id: string | null
    beforeScore: number | null
    changeScore: number | null
    newScore: number | null
    approval: boolean | null
    createdAt: Date | null
    approvalAt: Date | null
    ownerId: string | null
  }

  export type PaymentHistoryMaxAggregateOutputType = {
    id: string | null
    beforeScore: number | null
    changeScore: number | null
    newScore: number | null
    approval: boolean | null
    createdAt: Date | null
    approvalAt: Date | null
    ownerId: string | null
  }

  export type PaymentHistoryCountAggregateOutputType = {
    id: number
    beforeScore: number
    changeScore: number
    newScore: number
    approval: number
    createdAt: number
    approvalAt: number
    ownerId: number
    _all: number
  }


  export type PaymentHistoryAvgAggregateInputType = {
    beforeScore?: true
    changeScore?: true
    newScore?: true
  }

  export type PaymentHistorySumAggregateInputType = {
    beforeScore?: true
    changeScore?: true
    newScore?: true
  }

  export type PaymentHistoryMinAggregateInputType = {
    id?: true
    beforeScore?: true
    changeScore?: true
    newScore?: true
    approval?: true
    createdAt?: true
    approvalAt?: true
    ownerId?: true
  }

  export type PaymentHistoryMaxAggregateInputType = {
    id?: true
    beforeScore?: true
    changeScore?: true
    newScore?: true
    approval?: true
    createdAt?: true
    approvalAt?: true
    ownerId?: true
  }

  export type PaymentHistoryCountAggregateInputType = {
    id?: true
    beforeScore?: true
    changeScore?: true
    newScore?: true
    approval?: true
    createdAt?: true
    approvalAt?: true
    ownerId?: true
    _all?: true
  }

  export type PaymentHistoryAggregateArgs = {
    /**
     * Filter which PaymentHistory to aggregate.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: Enumerable<PaymentHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentHistories
    **/
    _count?: true | PaymentHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentHistoryMaxAggregateInputType
  }

  export type GetPaymentHistoryAggregateType<T extends PaymentHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentHistory[P]>
      : GetScalarType<T[P], AggregatePaymentHistory[P]>
  }




  export type PaymentHistoryGroupByArgs = {
    where?: PaymentHistoryWhereInput
    orderBy?: Enumerable<PaymentHistoryOrderByWithAggregationInput>
    by: PaymentHistoryScalarFieldEnum[]
    having?: PaymentHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentHistoryCountAggregateInputType | true
    _avg?: PaymentHistoryAvgAggregateInputType
    _sum?: PaymentHistorySumAggregateInputType
    _min?: PaymentHistoryMinAggregateInputType
    _max?: PaymentHistoryMaxAggregateInputType
  }


  export type PaymentHistoryGroupByOutputType = {
    id: string
    beforeScore: number
    changeScore: number
    newScore: number
    approval: boolean
    createdAt: Date
    approvalAt: Date | null
    ownerId: string
    _count: PaymentHistoryCountAggregateOutputType | null
    _avg: PaymentHistoryAvgAggregateOutputType | null
    _sum: PaymentHistorySumAggregateOutputType | null
    _min: PaymentHistoryMinAggregateOutputType | null
    _max: PaymentHistoryMaxAggregateOutputType | null
  }

  type GetPaymentHistoryGroupByPayload<T extends PaymentHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PaymentHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PaymentHistorySelect = {
    id?: boolean
    beforeScore?: boolean
    changeScore?: boolean
    newScore?: boolean
    approval?: boolean
    createdAt?: boolean
    approvalAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserArgs
  }


  export type PaymentHistoryInclude = {
    owner?: boolean | UserArgs
  }

  export type PaymentHistoryGetPayload<S extends boolean | null | undefined | PaymentHistoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PaymentHistory :
    S extends undefined ? never :
    S extends { include: any } & (PaymentHistoryArgs | PaymentHistoryFindManyArgs)
    ? PaymentHistory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'owner' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PaymentHistoryArgs | PaymentHistoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'owner' ? UserGetPayload<S['select'][P]> :  P extends keyof PaymentHistory ? PaymentHistory[P] : never
  } 
      : PaymentHistory


  type PaymentHistoryCountArgs = 
    Omit<PaymentHistoryFindManyArgs, 'select' | 'include'> & {
      select?: PaymentHistoryCountAggregateInputType | true
    }

  export interface PaymentHistoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PaymentHistory that matches the filter.
     * @param {PaymentHistoryFindUniqueArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentHistoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PaymentHistoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PaymentHistory'> extends True ? Prisma__PaymentHistoryClient<PaymentHistoryGetPayload<T>> : Prisma__PaymentHistoryClient<PaymentHistoryGetPayload<T> | null, null>

    /**
     * Find one PaymentHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentHistoryFindUniqueOrThrowArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentHistoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PaymentHistoryFindUniqueOrThrowArgs>
    ): Prisma__PaymentHistoryClient<PaymentHistoryGetPayload<T>>

    /**
     * Find the first PaymentHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindFirstArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentHistoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PaymentHistoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PaymentHistory'> extends True ? Prisma__PaymentHistoryClient<PaymentHistoryGetPayload<T>> : Prisma__PaymentHistoryClient<PaymentHistoryGetPayload<T> | null, null>

    /**
     * Find the first PaymentHistory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindFirstOrThrowArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentHistoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PaymentHistoryFindFirstOrThrowArgs>
    ): Prisma__PaymentHistoryClient<PaymentHistoryGetPayload<T>>

    /**
     * Find zero or more PaymentHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentHistories
     * const paymentHistories = await prisma.paymentHistory.findMany()
     * 
     * // Get first 10 PaymentHistories
     * const paymentHistories = await prisma.paymentHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentHistoryWithIdOnly = await prisma.paymentHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentHistoryFindManyArgs>(
      args?: SelectSubset<T, PaymentHistoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<PaymentHistoryGetPayload<T>>>

    /**
     * Create a PaymentHistory.
     * @param {PaymentHistoryCreateArgs} args - Arguments to create a PaymentHistory.
     * @example
     * // Create one PaymentHistory
     * const PaymentHistory = await prisma.paymentHistory.create({
     *   data: {
     *     // ... data to create a PaymentHistory
     *   }
     * })
     * 
    **/
    create<T extends PaymentHistoryCreateArgs>(
      args: SelectSubset<T, PaymentHistoryCreateArgs>
    ): Prisma__PaymentHistoryClient<PaymentHistoryGetPayload<T>>

    /**
     * Create many PaymentHistories.
     *     @param {PaymentHistoryCreateManyArgs} args - Arguments to create many PaymentHistories.
     *     @example
     *     // Create many PaymentHistories
     *     const paymentHistory = await prisma.paymentHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentHistoryCreateManyArgs>(
      args?: SelectSubset<T, PaymentHistoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentHistory.
     * @param {PaymentHistoryDeleteArgs} args - Arguments to delete one PaymentHistory.
     * @example
     * // Delete one PaymentHistory
     * const PaymentHistory = await prisma.paymentHistory.delete({
     *   where: {
     *     // ... filter to delete one PaymentHistory
     *   }
     * })
     * 
    **/
    delete<T extends PaymentHistoryDeleteArgs>(
      args: SelectSubset<T, PaymentHistoryDeleteArgs>
    ): Prisma__PaymentHistoryClient<PaymentHistoryGetPayload<T>>

    /**
     * Update one PaymentHistory.
     * @param {PaymentHistoryUpdateArgs} args - Arguments to update one PaymentHistory.
     * @example
     * // Update one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentHistoryUpdateArgs>(
      args: SelectSubset<T, PaymentHistoryUpdateArgs>
    ): Prisma__PaymentHistoryClient<PaymentHistoryGetPayload<T>>

    /**
     * Delete zero or more PaymentHistories.
     * @param {PaymentHistoryDeleteManyArgs} args - Arguments to filter PaymentHistories to delete.
     * @example
     * // Delete a few PaymentHistories
     * const { count } = await prisma.paymentHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentHistoryDeleteManyArgs>(
      args?: SelectSubset<T, PaymentHistoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentHistoryUpdateManyArgs>(
      args: SelectSubset<T, PaymentHistoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentHistory.
     * @param {PaymentHistoryUpsertArgs} args - Arguments to update or create a PaymentHistory.
     * @example
     * // Update or create a PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.upsert({
     *   create: {
     *     // ... data to create a PaymentHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentHistory we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentHistoryUpsertArgs>(
      args: SelectSubset<T, PaymentHistoryUpsertArgs>
    ): Prisma__PaymentHistoryClient<PaymentHistoryGetPayload<T>>

    /**
     * Count the number of PaymentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryCountArgs} args - Arguments to filter PaymentHistories to count.
     * @example
     * // Count the number of PaymentHistories
     * const count = await prisma.paymentHistory.count({
     *   where: {
     *     // ... the filter for the PaymentHistories we want to count
     *   }
     * })
    **/
    count<T extends PaymentHistoryCountArgs>(
      args?: Subset<T, PaymentHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentHistoryAggregateArgs>(args: Subset<T, PaymentHistoryAggregateArgs>): Prisma.PrismaPromise<GetPaymentHistoryAggregateType<T>>

    /**
     * Group by PaymentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryGroupByArgs} args - Group by arguments.
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
      T extends PaymentHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PaymentHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PaymentHistoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    owner<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * PaymentHistory base type for findUnique actions
   */
  export type PaymentHistoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentHistoryInclude | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory findUnique
   */
  export interface PaymentHistoryFindUniqueArgs extends PaymentHistoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PaymentHistory findUniqueOrThrow
   */
  export type PaymentHistoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentHistoryInclude | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where: PaymentHistoryWhereUniqueInput
  }


  /**
   * PaymentHistory base type for findFirst actions
   */
  export type PaymentHistoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentHistoryInclude | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: Enumerable<PaymentHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentHistories.
     */
    distinct?: Enumerable<PaymentHistoryScalarFieldEnum>
  }

  /**
   * PaymentHistory findFirst
   */
  export interface PaymentHistoryFindFirstArgs extends PaymentHistoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PaymentHistory findFirstOrThrow
   */
  export type PaymentHistoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentHistoryInclude | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: Enumerable<PaymentHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentHistories.
     */
    distinct?: Enumerable<PaymentHistoryScalarFieldEnum>
  }


  /**
   * PaymentHistory findMany
   */
  export type PaymentHistoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentHistoryInclude | null
    /**
     * Filter, which PaymentHistories to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: Enumerable<PaymentHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    distinct?: Enumerable<PaymentHistoryScalarFieldEnum>
  }


  /**
   * PaymentHistory create
   */
  export type PaymentHistoryCreateArgs = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentHistoryInclude | null
    /**
     * The data needed to create a PaymentHistory.
     */
    data: XOR<PaymentHistoryCreateInput, PaymentHistoryUncheckedCreateInput>
  }


  /**
   * PaymentHistory createMany
   */
  export type PaymentHistoryCreateManyArgs = {
    /**
     * The data used to create many PaymentHistories.
     */
    data: Enumerable<PaymentHistoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PaymentHistory update
   */
  export type PaymentHistoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentHistoryInclude | null
    /**
     * The data needed to update a PaymentHistory.
     */
    data: XOR<PaymentHistoryUpdateInput, PaymentHistoryUncheckedUpdateInput>
    /**
     * Choose, which PaymentHistory to update.
     */
    where: PaymentHistoryWhereUniqueInput
  }


  /**
   * PaymentHistory updateMany
   */
  export type PaymentHistoryUpdateManyArgs = {
    /**
     * The data used to update PaymentHistories.
     */
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PaymentHistories to update
     */
    where?: PaymentHistoryWhereInput
  }


  /**
   * PaymentHistory upsert
   */
  export type PaymentHistoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentHistoryInclude | null
    /**
     * The filter to search for the PaymentHistory to update in case it exists.
     */
    where: PaymentHistoryWhereUniqueInput
    /**
     * In case the PaymentHistory found by the `where` argument doesn't exist, create a new PaymentHistory with this data.
     */
    create: XOR<PaymentHistoryCreateInput, PaymentHistoryUncheckedCreateInput>
    /**
     * In case the PaymentHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentHistoryUpdateInput, PaymentHistoryUncheckedUpdateInput>
  }


  /**
   * PaymentHistory delete
   */
  export type PaymentHistoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentHistoryInclude | null
    /**
     * Filter which PaymentHistory to delete.
     */
    where: PaymentHistoryWhereUniqueInput
  }


  /**
   * PaymentHistory deleteMany
   */
  export type PaymentHistoryDeleteManyArgs = {
    /**
     * Filter which PaymentHistories to delete
     */
    where?: PaymentHistoryWhereInput
  }


  /**
   * PaymentHistory without action
   */
  export type PaymentHistoryArgs = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentHistoryInclude | null
  }



  /**
   * Model BetDetailHistory
   */


  export type AggregateBetDetailHistory = {
    _count: BetDetailHistoryCountAggregateOutputType | null
    _avg: BetDetailHistoryAvgAggregateOutputType | null
    _sum: BetDetailHistorySumAggregateOutputType | null
    _min: BetDetailHistoryMinAggregateOutputType | null
    _max: BetDetailHistoryMaxAggregateOutputType | null
  }

  export type BetDetailHistoryAvgAggregateOutputType = {
    beforeScore: number | null
    betScore: number | null
    winScore: number | null
    newScore: number | null
    gameId: number | null
  }

  export type BetDetailHistorySumAggregateOutputType = {
    beforeScore: number | null
    betScore: number | null
    winScore: number | null
    newScore: number | null
    gameId: number | null
  }

  export type BetDetailHistoryMinAggregateOutputType = {
    id: string | null
    beforeScore: number | null
    betScore: number | null
    winScore: number | null
    newScore: number | null
    createdAt: Date | null
    ownerId: string | null
    gameId: number | null
  }

  export type BetDetailHistoryMaxAggregateOutputType = {
    id: string | null
    beforeScore: number | null
    betScore: number | null
    winScore: number | null
    newScore: number | null
    createdAt: Date | null
    ownerId: string | null
    gameId: number | null
  }

  export type BetDetailHistoryCountAggregateOutputType = {
    id: number
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createdAt: number
    ownerId: number
    gameId: number
    _all: number
  }


  export type BetDetailHistoryAvgAggregateInputType = {
    beforeScore?: true
    betScore?: true
    winScore?: true
    newScore?: true
    gameId?: true
  }

  export type BetDetailHistorySumAggregateInputType = {
    beforeScore?: true
    betScore?: true
    winScore?: true
    newScore?: true
    gameId?: true
  }

  export type BetDetailHistoryMinAggregateInputType = {
    id?: true
    beforeScore?: true
    betScore?: true
    winScore?: true
    newScore?: true
    createdAt?: true
    ownerId?: true
    gameId?: true
  }

  export type BetDetailHistoryMaxAggregateInputType = {
    id?: true
    beforeScore?: true
    betScore?: true
    winScore?: true
    newScore?: true
    createdAt?: true
    ownerId?: true
    gameId?: true
  }

  export type BetDetailHistoryCountAggregateInputType = {
    id?: true
    beforeScore?: true
    betScore?: true
    winScore?: true
    newScore?: true
    createdAt?: true
    ownerId?: true
    gameId?: true
    _all?: true
  }

  export type BetDetailHistoryAggregateArgs = {
    /**
     * Filter which BetDetailHistory to aggregate.
     */
    where?: BetDetailHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetDetailHistories to fetch.
     */
    orderBy?: Enumerable<BetDetailHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BetDetailHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetDetailHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetDetailHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BetDetailHistories
    **/
    _count?: true | BetDetailHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BetDetailHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BetDetailHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BetDetailHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BetDetailHistoryMaxAggregateInputType
  }

  export type GetBetDetailHistoryAggregateType<T extends BetDetailHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBetDetailHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBetDetailHistory[P]>
      : GetScalarType<T[P], AggregateBetDetailHistory[P]>
  }




  export type BetDetailHistoryGroupByArgs = {
    where?: BetDetailHistoryWhereInput
    orderBy?: Enumerable<BetDetailHistoryOrderByWithAggregationInput>
    by: BetDetailHistoryScalarFieldEnum[]
    having?: BetDetailHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetDetailHistoryCountAggregateInputType | true
    _avg?: BetDetailHistoryAvgAggregateInputType
    _sum?: BetDetailHistorySumAggregateInputType
    _min?: BetDetailHistoryMinAggregateInputType
    _max?: BetDetailHistoryMaxAggregateInputType
  }


  export type BetDetailHistoryGroupByOutputType = {
    id: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createdAt: Date
    ownerId: string
    gameId: number
    _count: BetDetailHistoryCountAggregateOutputType | null
    _avg: BetDetailHistoryAvgAggregateOutputType | null
    _sum: BetDetailHistorySumAggregateOutputType | null
    _min: BetDetailHistoryMinAggregateOutputType | null
    _max: BetDetailHistoryMaxAggregateOutputType | null
  }

  type GetBetDetailHistoryGroupByPayload<T extends BetDetailHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BetDetailHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BetDetailHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BetDetailHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], BetDetailHistoryGroupByOutputType[P]>
        }
      >
    >


  export type BetDetailHistorySelect = {
    id?: boolean
    beforeScore?: boolean
    betScore?: boolean
    winScore?: boolean
    newScore?: boolean
    createdAt?: boolean
    ownerId?: boolean
    gameId?: boolean
    owner?: boolean | UserArgs
    game?: boolean | GameListArgs
  }


  export type BetDetailHistoryInclude = {
    owner?: boolean | UserArgs
    game?: boolean | GameListArgs
  }

  export type BetDetailHistoryGetPayload<S extends boolean | null | undefined | BetDetailHistoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BetDetailHistory :
    S extends undefined ? never :
    S extends { include: any } & (BetDetailHistoryArgs | BetDetailHistoryFindManyArgs)
    ? BetDetailHistory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'owner' ? UserGetPayload<S['include'][P]> :
        P extends 'game' ? GameListGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BetDetailHistoryArgs | BetDetailHistoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'owner' ? UserGetPayload<S['select'][P]> :
        P extends 'game' ? GameListGetPayload<S['select'][P]> :  P extends keyof BetDetailHistory ? BetDetailHistory[P] : never
  } 
      : BetDetailHistory


  type BetDetailHistoryCountArgs = 
    Omit<BetDetailHistoryFindManyArgs, 'select' | 'include'> & {
      select?: BetDetailHistoryCountAggregateInputType | true
    }

  export interface BetDetailHistoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BetDetailHistory that matches the filter.
     * @param {BetDetailHistoryFindUniqueArgs} args - Arguments to find a BetDetailHistory
     * @example
     * // Get one BetDetailHistory
     * const betDetailHistory = await prisma.betDetailHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BetDetailHistoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BetDetailHistoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BetDetailHistory'> extends True ? Prisma__BetDetailHistoryClient<BetDetailHistoryGetPayload<T>> : Prisma__BetDetailHistoryClient<BetDetailHistoryGetPayload<T> | null, null>

    /**
     * Find one BetDetailHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BetDetailHistoryFindUniqueOrThrowArgs} args - Arguments to find a BetDetailHistory
     * @example
     * // Get one BetDetailHistory
     * const betDetailHistory = await prisma.betDetailHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BetDetailHistoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BetDetailHistoryFindUniqueOrThrowArgs>
    ): Prisma__BetDetailHistoryClient<BetDetailHistoryGetPayload<T>>

    /**
     * Find the first BetDetailHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetDetailHistoryFindFirstArgs} args - Arguments to find a BetDetailHistory
     * @example
     * // Get one BetDetailHistory
     * const betDetailHistory = await prisma.betDetailHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BetDetailHistoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BetDetailHistoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BetDetailHistory'> extends True ? Prisma__BetDetailHistoryClient<BetDetailHistoryGetPayload<T>> : Prisma__BetDetailHistoryClient<BetDetailHistoryGetPayload<T> | null, null>

    /**
     * Find the first BetDetailHistory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetDetailHistoryFindFirstOrThrowArgs} args - Arguments to find a BetDetailHistory
     * @example
     * // Get one BetDetailHistory
     * const betDetailHistory = await prisma.betDetailHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BetDetailHistoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BetDetailHistoryFindFirstOrThrowArgs>
    ): Prisma__BetDetailHistoryClient<BetDetailHistoryGetPayload<T>>

    /**
     * Find zero or more BetDetailHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetDetailHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BetDetailHistories
     * const betDetailHistories = await prisma.betDetailHistory.findMany()
     * 
     * // Get first 10 BetDetailHistories
     * const betDetailHistories = await prisma.betDetailHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const betDetailHistoryWithIdOnly = await prisma.betDetailHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BetDetailHistoryFindManyArgs>(
      args?: SelectSubset<T, BetDetailHistoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<BetDetailHistoryGetPayload<T>>>

    /**
     * Create a BetDetailHistory.
     * @param {BetDetailHistoryCreateArgs} args - Arguments to create a BetDetailHistory.
     * @example
     * // Create one BetDetailHistory
     * const BetDetailHistory = await prisma.betDetailHistory.create({
     *   data: {
     *     // ... data to create a BetDetailHistory
     *   }
     * })
     * 
    **/
    create<T extends BetDetailHistoryCreateArgs>(
      args: SelectSubset<T, BetDetailHistoryCreateArgs>
    ): Prisma__BetDetailHistoryClient<BetDetailHistoryGetPayload<T>>

    /**
     * Create many BetDetailHistories.
     *     @param {BetDetailHistoryCreateManyArgs} args - Arguments to create many BetDetailHistories.
     *     @example
     *     // Create many BetDetailHistories
     *     const betDetailHistory = await prisma.betDetailHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BetDetailHistoryCreateManyArgs>(
      args?: SelectSubset<T, BetDetailHistoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BetDetailHistory.
     * @param {BetDetailHistoryDeleteArgs} args - Arguments to delete one BetDetailHistory.
     * @example
     * // Delete one BetDetailHistory
     * const BetDetailHistory = await prisma.betDetailHistory.delete({
     *   where: {
     *     // ... filter to delete one BetDetailHistory
     *   }
     * })
     * 
    **/
    delete<T extends BetDetailHistoryDeleteArgs>(
      args: SelectSubset<T, BetDetailHistoryDeleteArgs>
    ): Prisma__BetDetailHistoryClient<BetDetailHistoryGetPayload<T>>

    /**
     * Update one BetDetailHistory.
     * @param {BetDetailHistoryUpdateArgs} args - Arguments to update one BetDetailHistory.
     * @example
     * // Update one BetDetailHistory
     * const betDetailHistory = await prisma.betDetailHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BetDetailHistoryUpdateArgs>(
      args: SelectSubset<T, BetDetailHistoryUpdateArgs>
    ): Prisma__BetDetailHistoryClient<BetDetailHistoryGetPayload<T>>

    /**
     * Delete zero or more BetDetailHistories.
     * @param {BetDetailHistoryDeleteManyArgs} args - Arguments to filter BetDetailHistories to delete.
     * @example
     * // Delete a few BetDetailHistories
     * const { count } = await prisma.betDetailHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BetDetailHistoryDeleteManyArgs>(
      args?: SelectSubset<T, BetDetailHistoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BetDetailHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetDetailHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BetDetailHistories
     * const betDetailHistory = await prisma.betDetailHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BetDetailHistoryUpdateManyArgs>(
      args: SelectSubset<T, BetDetailHistoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BetDetailHistory.
     * @param {BetDetailHistoryUpsertArgs} args - Arguments to update or create a BetDetailHistory.
     * @example
     * // Update or create a BetDetailHistory
     * const betDetailHistory = await prisma.betDetailHistory.upsert({
     *   create: {
     *     // ... data to create a BetDetailHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BetDetailHistory we want to update
     *   }
     * })
    **/
    upsert<T extends BetDetailHistoryUpsertArgs>(
      args: SelectSubset<T, BetDetailHistoryUpsertArgs>
    ): Prisma__BetDetailHistoryClient<BetDetailHistoryGetPayload<T>>

    /**
     * Count the number of BetDetailHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetDetailHistoryCountArgs} args - Arguments to filter BetDetailHistories to count.
     * @example
     * // Count the number of BetDetailHistories
     * const count = await prisma.betDetailHistory.count({
     *   where: {
     *     // ... the filter for the BetDetailHistories we want to count
     *   }
     * })
    **/
    count<T extends BetDetailHistoryCountArgs>(
      args?: Subset<T, BetDetailHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetDetailHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BetDetailHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetDetailHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BetDetailHistoryAggregateArgs>(args: Subset<T, BetDetailHistoryAggregateArgs>): Prisma.PrismaPromise<GetBetDetailHistoryAggregateType<T>>

    /**
     * Group by BetDetailHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetDetailHistoryGroupByArgs} args - Group by arguments.
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
      T extends BetDetailHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BetDetailHistoryGroupByArgs['orderBy'] }
        : { orderBy?: BetDetailHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BetDetailHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetDetailHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BetDetailHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BetDetailHistoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    owner<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    game<T extends GameListArgs= {}>(args?: Subset<T, GameListArgs>): Prisma__GameListClient<GameListGetPayload<T> | Null>;

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
   * BetDetailHistory base type for findUnique actions
   */
  export type BetDetailHistoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BetDetailHistory
     */
    select?: BetDetailHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BetDetailHistoryInclude | null
    /**
     * Filter, which BetDetailHistory to fetch.
     */
    where: BetDetailHistoryWhereUniqueInput
  }

  /**
   * BetDetailHistory findUnique
   */
  export interface BetDetailHistoryFindUniqueArgs extends BetDetailHistoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BetDetailHistory findUniqueOrThrow
   */
  export type BetDetailHistoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BetDetailHistory
     */
    select?: BetDetailHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BetDetailHistoryInclude | null
    /**
     * Filter, which BetDetailHistory to fetch.
     */
    where: BetDetailHistoryWhereUniqueInput
  }


  /**
   * BetDetailHistory base type for findFirst actions
   */
  export type BetDetailHistoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BetDetailHistory
     */
    select?: BetDetailHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BetDetailHistoryInclude | null
    /**
     * Filter, which BetDetailHistory to fetch.
     */
    where?: BetDetailHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetDetailHistories to fetch.
     */
    orderBy?: Enumerable<BetDetailHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BetDetailHistories.
     */
    cursor?: BetDetailHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetDetailHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetDetailHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetDetailHistories.
     */
    distinct?: Enumerable<BetDetailHistoryScalarFieldEnum>
  }

  /**
   * BetDetailHistory findFirst
   */
  export interface BetDetailHistoryFindFirstArgs extends BetDetailHistoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BetDetailHistory findFirstOrThrow
   */
  export type BetDetailHistoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BetDetailHistory
     */
    select?: BetDetailHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BetDetailHistoryInclude | null
    /**
     * Filter, which BetDetailHistory to fetch.
     */
    where?: BetDetailHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetDetailHistories to fetch.
     */
    orderBy?: Enumerable<BetDetailHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BetDetailHistories.
     */
    cursor?: BetDetailHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetDetailHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetDetailHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetDetailHistories.
     */
    distinct?: Enumerable<BetDetailHistoryScalarFieldEnum>
  }


  /**
   * BetDetailHistory findMany
   */
  export type BetDetailHistoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the BetDetailHistory
     */
    select?: BetDetailHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BetDetailHistoryInclude | null
    /**
     * Filter, which BetDetailHistories to fetch.
     */
    where?: BetDetailHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetDetailHistories to fetch.
     */
    orderBy?: Enumerable<BetDetailHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BetDetailHistories.
     */
    cursor?: BetDetailHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetDetailHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetDetailHistories.
     */
    skip?: number
    distinct?: Enumerable<BetDetailHistoryScalarFieldEnum>
  }


  /**
   * BetDetailHistory create
   */
  export type BetDetailHistoryCreateArgs = {
    /**
     * Select specific fields to fetch from the BetDetailHistory
     */
    select?: BetDetailHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BetDetailHistoryInclude | null
    /**
     * The data needed to create a BetDetailHistory.
     */
    data: XOR<BetDetailHistoryCreateInput, BetDetailHistoryUncheckedCreateInput>
  }


  /**
   * BetDetailHistory createMany
   */
  export type BetDetailHistoryCreateManyArgs = {
    /**
     * The data used to create many BetDetailHistories.
     */
    data: Enumerable<BetDetailHistoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BetDetailHistory update
   */
  export type BetDetailHistoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the BetDetailHistory
     */
    select?: BetDetailHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BetDetailHistoryInclude | null
    /**
     * The data needed to update a BetDetailHistory.
     */
    data: XOR<BetDetailHistoryUpdateInput, BetDetailHistoryUncheckedUpdateInput>
    /**
     * Choose, which BetDetailHistory to update.
     */
    where: BetDetailHistoryWhereUniqueInput
  }


  /**
   * BetDetailHistory updateMany
   */
  export type BetDetailHistoryUpdateManyArgs = {
    /**
     * The data used to update BetDetailHistories.
     */
    data: XOR<BetDetailHistoryUpdateManyMutationInput, BetDetailHistoryUncheckedUpdateManyInput>
    /**
     * Filter which BetDetailHistories to update
     */
    where?: BetDetailHistoryWhereInput
  }


  /**
   * BetDetailHistory upsert
   */
  export type BetDetailHistoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the BetDetailHistory
     */
    select?: BetDetailHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BetDetailHistoryInclude | null
    /**
     * The filter to search for the BetDetailHistory to update in case it exists.
     */
    where: BetDetailHistoryWhereUniqueInput
    /**
     * In case the BetDetailHistory found by the `where` argument doesn't exist, create a new BetDetailHistory with this data.
     */
    create: XOR<BetDetailHistoryCreateInput, BetDetailHistoryUncheckedCreateInput>
    /**
     * In case the BetDetailHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BetDetailHistoryUpdateInput, BetDetailHistoryUncheckedUpdateInput>
  }


  /**
   * BetDetailHistory delete
   */
  export type BetDetailHistoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the BetDetailHistory
     */
    select?: BetDetailHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BetDetailHistoryInclude | null
    /**
     * Filter which BetDetailHistory to delete.
     */
    where: BetDetailHistoryWhereUniqueInput
  }


  /**
   * BetDetailHistory deleteMany
   */
  export type BetDetailHistoryDeleteManyArgs = {
    /**
     * Filter which BetDetailHistories to delete
     */
    where?: BetDetailHistoryWhereInput
  }


  /**
   * BetDetailHistory without action
   */
  export type BetDetailHistoryArgs = {
    /**
     * Select specific fields to fetch from the BetDetailHistory
     */
    select?: BetDetailHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BetDetailHistoryInclude | null
  }



  /**
   * Model GameSession
   */


  export type AggregateGameSession = {
    _count: GameSessionCountAggregateOutputType | null
    _avg: GameSessionAvgAggregateOutputType | null
    _sum: GameSessionSumAggregateOutputType | null
    _min: GameSessionMinAggregateOutputType | null
    _max: GameSessionMaxAggregateOutputType | null
  }

  export type GameSessionAvgAggregateOutputType = {
    gameId: number | null
  }

  export type GameSessionSumAggregateOutputType = {
    gameId: number | null
  }

  export type GameSessionMinAggregateOutputType = {
    id: string | null
    gameId: number | null
    createdAt: Date | null
  }

  export type GameSessionMaxAggregateOutputType = {
    id: string | null
    gameId: number | null
    createdAt: Date | null
  }

  export type GameSessionCountAggregateOutputType = {
    id: number
    gameId: number
    createdAt: number
    _all: number
  }


  export type GameSessionAvgAggregateInputType = {
    gameId?: true
  }

  export type GameSessionSumAggregateInputType = {
    gameId?: true
  }

  export type GameSessionMinAggregateInputType = {
    id?: true
    gameId?: true
    createdAt?: true
  }

  export type GameSessionMaxAggregateInputType = {
    id?: true
    gameId?: true
    createdAt?: true
  }

  export type GameSessionCountAggregateInputType = {
    id?: true
    gameId?: true
    createdAt?: true
    _all?: true
  }

  export type GameSessionAggregateArgs = {
    /**
     * Filter which GameSession to aggregate.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: Enumerable<GameSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameSessions
    **/
    _count?: true | GameSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameSessionMaxAggregateInputType
  }

  export type GetGameSessionAggregateType<T extends GameSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameSession[P]>
      : GetScalarType<T[P], AggregateGameSession[P]>
  }




  export type GameSessionGroupByArgs = {
    where?: GameSessionWhereInput
    orderBy?: Enumerable<GameSessionOrderByWithAggregationInput>
    by: GameSessionScalarFieldEnum[]
    having?: GameSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameSessionCountAggregateInputType | true
    _avg?: GameSessionAvgAggregateInputType
    _sum?: GameSessionSumAggregateInputType
    _min?: GameSessionMinAggregateInputType
    _max?: GameSessionMaxAggregateInputType
  }


  export type GameSessionGroupByOutputType = {
    id: string
    gameId: number
    createdAt: Date
    _count: GameSessionCountAggregateOutputType | null
    _avg: GameSessionAvgAggregateOutputType | null
    _sum: GameSessionSumAggregateOutputType | null
    _min: GameSessionMinAggregateOutputType | null
    _max: GameSessionMaxAggregateOutputType | null
  }

  type GetGameSessionGroupByPayload<T extends GameSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GameSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameSessionGroupByOutputType[P]>
            : GetScalarType<T[P], GameSessionGroupByOutputType[P]>
        }
      >
    >


  export type GameSessionSelect = {
    id?: boolean
    gameId?: boolean
    createdAt?: boolean
    playerSession?: boolean | GameSession$playerSessionArgs
    game?: boolean | GameListArgs
    _count?: boolean | GameSessionCountOutputTypeArgs
  }


  export type GameSessionInclude = {
    playerSession?: boolean | GameSession$playerSessionArgs
    game?: boolean | GameListArgs
    _count?: boolean | GameSessionCountOutputTypeArgs
  }

  export type GameSessionGetPayload<S extends boolean | null | undefined | GameSessionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GameSession :
    S extends undefined ? never :
    S extends { include: any } & (GameSessionArgs | GameSessionFindManyArgs)
    ? GameSession  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'playerSession' ? Array < PlayerSessionGetPayload<S['include'][P]>>  :
        P extends 'game' ? GameListGetPayload<S['include'][P]> :
        P extends '_count' ? GameSessionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (GameSessionArgs | GameSessionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'playerSession' ? Array < PlayerSessionGetPayload<S['select'][P]>>  :
        P extends 'game' ? GameListGetPayload<S['select'][P]> :
        P extends '_count' ? GameSessionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof GameSession ? GameSession[P] : never
  } 
      : GameSession


  type GameSessionCountArgs = 
    Omit<GameSessionFindManyArgs, 'select' | 'include'> & {
      select?: GameSessionCountAggregateInputType | true
    }

  export interface GameSessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one GameSession that matches the filter.
     * @param {GameSessionFindUniqueArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameSessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GameSessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GameSession'> extends True ? Prisma__GameSessionClient<GameSessionGetPayload<T>> : Prisma__GameSessionClient<GameSessionGetPayload<T> | null, null>

    /**
     * Find one GameSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GameSessionFindUniqueOrThrowArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GameSessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GameSessionFindUniqueOrThrowArgs>
    ): Prisma__GameSessionClient<GameSessionGetPayload<T>>

    /**
     * Find the first GameSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindFirstArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameSessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GameSessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GameSession'> extends True ? Prisma__GameSessionClient<GameSessionGetPayload<T>> : Prisma__GameSessionClient<GameSessionGetPayload<T> | null, null>

    /**
     * Find the first GameSession that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindFirstOrThrowArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GameSessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GameSessionFindFirstOrThrowArgs>
    ): Prisma__GameSessionClient<GameSessionGetPayload<T>>

    /**
     * Find zero or more GameSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameSessions
     * const gameSessions = await prisma.gameSession.findMany()
     * 
     * // Get first 10 GameSessions
     * const gameSessions = await prisma.gameSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameSessionWithIdOnly = await prisma.gameSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameSessionFindManyArgs>(
      args?: SelectSubset<T, GameSessionFindManyArgs>
    ): Prisma.PrismaPromise<Array<GameSessionGetPayload<T>>>

    /**
     * Create a GameSession.
     * @param {GameSessionCreateArgs} args - Arguments to create a GameSession.
     * @example
     * // Create one GameSession
     * const GameSession = await prisma.gameSession.create({
     *   data: {
     *     // ... data to create a GameSession
     *   }
     * })
     * 
    **/
    create<T extends GameSessionCreateArgs>(
      args: SelectSubset<T, GameSessionCreateArgs>
    ): Prisma__GameSessionClient<GameSessionGetPayload<T>>

    /**
     * Create many GameSessions.
     *     @param {GameSessionCreateManyArgs} args - Arguments to create many GameSessions.
     *     @example
     *     // Create many GameSessions
     *     const gameSession = await prisma.gameSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GameSessionCreateManyArgs>(
      args?: SelectSubset<T, GameSessionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GameSession.
     * @param {GameSessionDeleteArgs} args - Arguments to delete one GameSession.
     * @example
     * // Delete one GameSession
     * const GameSession = await prisma.gameSession.delete({
     *   where: {
     *     // ... filter to delete one GameSession
     *   }
     * })
     * 
    **/
    delete<T extends GameSessionDeleteArgs>(
      args: SelectSubset<T, GameSessionDeleteArgs>
    ): Prisma__GameSessionClient<GameSessionGetPayload<T>>

    /**
     * Update one GameSession.
     * @param {GameSessionUpdateArgs} args - Arguments to update one GameSession.
     * @example
     * // Update one GameSession
     * const gameSession = await prisma.gameSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameSessionUpdateArgs>(
      args: SelectSubset<T, GameSessionUpdateArgs>
    ): Prisma__GameSessionClient<GameSessionGetPayload<T>>

    /**
     * Delete zero or more GameSessions.
     * @param {GameSessionDeleteManyArgs} args - Arguments to filter GameSessions to delete.
     * @example
     * // Delete a few GameSessions
     * const { count } = await prisma.gameSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameSessionDeleteManyArgs>(
      args?: SelectSubset<T, GameSessionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameSessions
     * const gameSession = await prisma.gameSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameSessionUpdateManyArgs>(
      args: SelectSubset<T, GameSessionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameSession.
     * @param {GameSessionUpsertArgs} args - Arguments to update or create a GameSession.
     * @example
     * // Update or create a GameSession
     * const gameSession = await prisma.gameSession.upsert({
     *   create: {
     *     // ... data to create a GameSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameSession we want to update
     *   }
     * })
    **/
    upsert<T extends GameSessionUpsertArgs>(
      args: SelectSubset<T, GameSessionUpsertArgs>
    ): Prisma__GameSessionClient<GameSessionGetPayload<T>>

    /**
     * Count the number of GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionCountArgs} args - Arguments to filter GameSessions to count.
     * @example
     * // Count the number of GameSessions
     * const count = await prisma.gameSession.count({
     *   where: {
     *     // ... the filter for the GameSessions we want to count
     *   }
     * })
    **/
    count<T extends GameSessionCountArgs>(
      args?: Subset<T, GameSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameSessionAggregateArgs>(args: Subset<T, GameSessionAggregateArgs>): Prisma.PrismaPromise<GetGameSessionAggregateType<T>>

    /**
     * Group by GameSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionGroupByArgs} args - Group by arguments.
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
      T extends GameSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameSessionGroupByArgs['orderBy'] }
        : { orderBy?: GameSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for GameSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GameSessionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    playerSession<T extends GameSession$playerSessionArgs= {}>(args?: Subset<T, GameSession$playerSessionArgs>): Prisma.PrismaPromise<Array<PlayerSessionGetPayload<T>>| Null>;

    game<T extends GameListArgs= {}>(args?: Subset<T, GameListArgs>): Prisma__GameListClient<GameListGetPayload<T> | Null>;

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
   * GameSession base type for findUnique actions
   */
  export type GameSessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude | null
    /**
     * Filter, which GameSession to fetch.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession findUnique
   */
  export interface GameSessionFindUniqueArgs extends GameSessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GameSession findUniqueOrThrow
   */
  export type GameSessionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude | null
    /**
     * Filter, which GameSession to fetch.
     */
    where: GameSessionWhereUniqueInput
  }


  /**
   * GameSession base type for findFirst actions
   */
  export type GameSessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude | null
    /**
     * Filter, which GameSession to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: Enumerable<GameSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSessions.
     */
    distinct?: Enumerable<GameSessionScalarFieldEnum>
  }

  /**
   * GameSession findFirst
   */
  export interface GameSessionFindFirstArgs extends GameSessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GameSession findFirstOrThrow
   */
  export type GameSessionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude | null
    /**
     * Filter, which GameSession to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: Enumerable<GameSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSessions.
     */
    distinct?: Enumerable<GameSessionScalarFieldEnum>
  }


  /**
   * GameSession findMany
   */
  export type GameSessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude | null
    /**
     * Filter, which GameSessions to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: Enumerable<GameSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    distinct?: Enumerable<GameSessionScalarFieldEnum>
  }


  /**
   * GameSession create
   */
  export type GameSessionCreateArgs = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude | null
    /**
     * The data needed to create a GameSession.
     */
    data: XOR<GameSessionCreateInput, GameSessionUncheckedCreateInput>
  }


  /**
   * GameSession createMany
   */
  export type GameSessionCreateManyArgs = {
    /**
     * The data used to create many GameSessions.
     */
    data: Enumerable<GameSessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GameSession update
   */
  export type GameSessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude | null
    /**
     * The data needed to update a GameSession.
     */
    data: XOR<GameSessionUpdateInput, GameSessionUncheckedUpdateInput>
    /**
     * Choose, which GameSession to update.
     */
    where: GameSessionWhereUniqueInput
  }


  /**
   * GameSession updateMany
   */
  export type GameSessionUpdateManyArgs = {
    /**
     * The data used to update GameSessions.
     */
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyInput>
    /**
     * Filter which GameSessions to update
     */
    where?: GameSessionWhereInput
  }


  /**
   * GameSession upsert
   */
  export type GameSessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude | null
    /**
     * The filter to search for the GameSession to update in case it exists.
     */
    where: GameSessionWhereUniqueInput
    /**
     * In case the GameSession found by the `where` argument doesn't exist, create a new GameSession with this data.
     */
    create: XOR<GameSessionCreateInput, GameSessionUncheckedCreateInput>
    /**
     * In case the GameSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameSessionUpdateInput, GameSessionUncheckedUpdateInput>
  }


  /**
   * GameSession delete
   */
  export type GameSessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude | null
    /**
     * Filter which GameSession to delete.
     */
    where: GameSessionWhereUniqueInput
  }


  /**
   * GameSession deleteMany
   */
  export type GameSessionDeleteManyArgs = {
    /**
     * Filter which GameSessions to delete
     */
    where?: GameSessionWhereInput
  }


  /**
   * GameSession.playerSession
   */
  export type GameSession$playerSessionArgs = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerSessionInclude | null
    where?: PlayerSessionWhereInput
    orderBy?: Enumerable<PlayerSessionOrderByWithRelationInput>
    cursor?: PlayerSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PlayerSessionScalarFieldEnum>
  }


  /**
   * GameSession without action
   */
  export type GameSessionArgs = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude | null
  }



  /**
   * Model PlayerSession
   */


  export type AggregatePlayerSession = {
    _count: PlayerSessionCountAggregateOutputType | null
    _avg: PlayerSessionAvgAggregateOutputType | null
    _sum: PlayerSessionSumAggregateOutputType | null
    _min: PlayerSessionMinAggregateOutputType | null
    _max: PlayerSessionMaxAggregateOutputType | null
  }

  export type PlayerSessionAvgAggregateOutputType = {
    betAmount: number | null
    betLines: number | null
    betResult: number | null
  }

  export type PlayerSessionSumAggregateOutputType = {
    betAmount: number | null
    betLines: number | null
    betResult: number | null
  }

  export type PlayerSessionMinAggregateOutputType = {
    id: string | null
    gameSessionId: string | null
    userId: string | null
    betAmount: number | null
    betLines: number | null
    betResult: number | null
    createdAt: Date | null
  }

  export type PlayerSessionMaxAggregateOutputType = {
    id: string | null
    gameSessionId: string | null
    userId: string | null
    betAmount: number | null
    betLines: number | null
    betResult: number | null
    createdAt: Date | null
  }

  export type PlayerSessionCountAggregateOutputType = {
    id: number
    gameSessionId: number
    userId: number
    betAmount: number
    betLines: number
    betResult: number
    createdAt: number
    _all: number
  }


  export type PlayerSessionAvgAggregateInputType = {
    betAmount?: true
    betLines?: true
    betResult?: true
  }

  export type PlayerSessionSumAggregateInputType = {
    betAmount?: true
    betLines?: true
    betResult?: true
  }

  export type PlayerSessionMinAggregateInputType = {
    id?: true
    gameSessionId?: true
    userId?: true
    betAmount?: true
    betLines?: true
    betResult?: true
    createdAt?: true
  }

  export type PlayerSessionMaxAggregateInputType = {
    id?: true
    gameSessionId?: true
    userId?: true
    betAmount?: true
    betLines?: true
    betResult?: true
    createdAt?: true
  }

  export type PlayerSessionCountAggregateInputType = {
    id?: true
    gameSessionId?: true
    userId?: true
    betAmount?: true
    betLines?: true
    betResult?: true
    createdAt?: true
    _all?: true
  }

  export type PlayerSessionAggregateArgs = {
    /**
     * Filter which PlayerSession to aggregate.
     */
    where?: PlayerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSessions to fetch.
     */
    orderBy?: Enumerable<PlayerSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerSessions
    **/
    _count?: true | PlayerSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerSessionMaxAggregateInputType
  }

  export type GetPlayerSessionAggregateType<T extends PlayerSessionAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerSession[P]>
      : GetScalarType<T[P], AggregatePlayerSession[P]>
  }




  export type PlayerSessionGroupByArgs = {
    where?: PlayerSessionWhereInput
    orderBy?: Enumerable<PlayerSessionOrderByWithAggregationInput>
    by: PlayerSessionScalarFieldEnum[]
    having?: PlayerSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerSessionCountAggregateInputType | true
    _avg?: PlayerSessionAvgAggregateInputType
    _sum?: PlayerSessionSumAggregateInputType
    _min?: PlayerSessionMinAggregateInputType
    _max?: PlayerSessionMaxAggregateInputType
  }


  export type PlayerSessionGroupByOutputType = {
    id: string
    gameSessionId: string
    userId: string
    betAmount: number
    betLines: number
    betResult: number
    createdAt: Date
    _count: PlayerSessionCountAggregateOutputType | null
    _avg: PlayerSessionAvgAggregateOutputType | null
    _sum: PlayerSessionSumAggregateOutputType | null
    _min: PlayerSessionMinAggregateOutputType | null
    _max: PlayerSessionMaxAggregateOutputType | null
  }

  type GetPlayerSessionGroupByPayload<T extends PlayerSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PlayerSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerSessionGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerSessionGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSessionSelect = {
    id?: boolean
    gameSessionId?: boolean
    userId?: boolean
    betAmount?: boolean
    betLines?: boolean
    betResult?: boolean
    createdAt?: boolean
    gameSession?: boolean | GameSessionArgs
    user?: boolean | UserArgs
  }


  export type PlayerSessionInclude = {
    gameSession?: boolean | GameSessionArgs
    user?: boolean | UserArgs
  }

  export type PlayerSessionGetPayload<S extends boolean | null | undefined | PlayerSessionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PlayerSession :
    S extends undefined ? never :
    S extends { include: any } & (PlayerSessionArgs | PlayerSessionFindManyArgs)
    ? PlayerSession  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'gameSession' ? GameSessionGetPayload<S['include'][P]> :
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PlayerSessionArgs | PlayerSessionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'gameSession' ? GameSessionGetPayload<S['select'][P]> :
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof PlayerSession ? PlayerSession[P] : never
  } 
      : PlayerSession


  type PlayerSessionCountArgs = 
    Omit<PlayerSessionFindManyArgs, 'select' | 'include'> & {
      select?: PlayerSessionCountAggregateInputType | true
    }

  export interface PlayerSessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PlayerSession that matches the filter.
     * @param {PlayerSessionFindUniqueArgs} args - Arguments to find a PlayerSession
     * @example
     * // Get one PlayerSession
     * const playerSession = await prisma.playerSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlayerSessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PlayerSessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PlayerSession'> extends True ? Prisma__PlayerSessionClient<PlayerSessionGetPayload<T>> : Prisma__PlayerSessionClient<PlayerSessionGetPayload<T> | null, null>

    /**
     * Find one PlayerSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlayerSessionFindUniqueOrThrowArgs} args - Arguments to find a PlayerSession
     * @example
     * // Get one PlayerSession
     * const playerSession = await prisma.playerSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlayerSessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PlayerSessionFindUniqueOrThrowArgs>
    ): Prisma__PlayerSessionClient<PlayerSessionGetPayload<T>>

    /**
     * Find the first PlayerSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionFindFirstArgs} args - Arguments to find a PlayerSession
     * @example
     * // Get one PlayerSession
     * const playerSession = await prisma.playerSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlayerSessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PlayerSessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PlayerSession'> extends True ? Prisma__PlayerSessionClient<PlayerSessionGetPayload<T>> : Prisma__PlayerSessionClient<PlayerSessionGetPayload<T> | null, null>

    /**
     * Find the first PlayerSession that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionFindFirstOrThrowArgs} args - Arguments to find a PlayerSession
     * @example
     * // Get one PlayerSession
     * const playerSession = await prisma.playerSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlayerSessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PlayerSessionFindFirstOrThrowArgs>
    ): Prisma__PlayerSessionClient<PlayerSessionGetPayload<T>>

    /**
     * Find zero or more PlayerSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerSessions
     * const playerSessions = await prisma.playerSession.findMany()
     * 
     * // Get first 10 PlayerSessions
     * const playerSessions = await prisma.playerSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerSessionWithIdOnly = await prisma.playerSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlayerSessionFindManyArgs>(
      args?: SelectSubset<T, PlayerSessionFindManyArgs>
    ): Prisma.PrismaPromise<Array<PlayerSessionGetPayload<T>>>

    /**
     * Create a PlayerSession.
     * @param {PlayerSessionCreateArgs} args - Arguments to create a PlayerSession.
     * @example
     * // Create one PlayerSession
     * const PlayerSession = await prisma.playerSession.create({
     *   data: {
     *     // ... data to create a PlayerSession
     *   }
     * })
     * 
    **/
    create<T extends PlayerSessionCreateArgs>(
      args: SelectSubset<T, PlayerSessionCreateArgs>
    ): Prisma__PlayerSessionClient<PlayerSessionGetPayload<T>>

    /**
     * Create many PlayerSessions.
     *     @param {PlayerSessionCreateManyArgs} args - Arguments to create many PlayerSessions.
     *     @example
     *     // Create many PlayerSessions
     *     const playerSession = await prisma.playerSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlayerSessionCreateManyArgs>(
      args?: SelectSubset<T, PlayerSessionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlayerSession.
     * @param {PlayerSessionDeleteArgs} args - Arguments to delete one PlayerSession.
     * @example
     * // Delete one PlayerSession
     * const PlayerSession = await prisma.playerSession.delete({
     *   where: {
     *     // ... filter to delete one PlayerSession
     *   }
     * })
     * 
    **/
    delete<T extends PlayerSessionDeleteArgs>(
      args: SelectSubset<T, PlayerSessionDeleteArgs>
    ): Prisma__PlayerSessionClient<PlayerSessionGetPayload<T>>

    /**
     * Update one PlayerSession.
     * @param {PlayerSessionUpdateArgs} args - Arguments to update one PlayerSession.
     * @example
     * // Update one PlayerSession
     * const playerSession = await prisma.playerSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlayerSessionUpdateArgs>(
      args: SelectSubset<T, PlayerSessionUpdateArgs>
    ): Prisma__PlayerSessionClient<PlayerSessionGetPayload<T>>

    /**
     * Delete zero or more PlayerSessions.
     * @param {PlayerSessionDeleteManyArgs} args - Arguments to filter PlayerSessions to delete.
     * @example
     * // Delete a few PlayerSessions
     * const { count } = await prisma.playerSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlayerSessionDeleteManyArgs>(
      args?: SelectSubset<T, PlayerSessionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerSessions
     * const playerSession = await prisma.playerSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlayerSessionUpdateManyArgs>(
      args: SelectSubset<T, PlayerSessionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlayerSession.
     * @param {PlayerSessionUpsertArgs} args - Arguments to update or create a PlayerSession.
     * @example
     * // Update or create a PlayerSession
     * const playerSession = await prisma.playerSession.upsert({
     *   create: {
     *     // ... data to create a PlayerSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerSession we want to update
     *   }
     * })
    **/
    upsert<T extends PlayerSessionUpsertArgs>(
      args: SelectSubset<T, PlayerSessionUpsertArgs>
    ): Prisma__PlayerSessionClient<PlayerSessionGetPayload<T>>

    /**
     * Count the number of PlayerSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionCountArgs} args - Arguments to filter PlayerSessions to count.
     * @example
     * // Count the number of PlayerSessions
     * const count = await prisma.playerSession.count({
     *   where: {
     *     // ... the filter for the PlayerSessions we want to count
     *   }
     * })
    **/
    count<T extends PlayerSessionCountArgs>(
      args?: Subset<T, PlayerSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerSessionAggregateArgs>(args: Subset<T, PlayerSessionAggregateArgs>): Prisma.PrismaPromise<GetPlayerSessionAggregateType<T>>

    /**
     * Group by PlayerSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionGroupByArgs} args - Group by arguments.
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
      T extends PlayerSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerSessionGroupByArgs['orderBy'] }
        : { orderBy?: PlayerSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PlayerSessionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    gameSession<T extends GameSessionArgs= {}>(args?: Subset<T, GameSessionArgs>): Prisma__GameSessionClient<GameSessionGetPayload<T> | Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * PlayerSession base type for findUnique actions
   */
  export type PlayerSessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerSessionInclude | null
    /**
     * Filter, which PlayerSession to fetch.
     */
    where: PlayerSessionWhereUniqueInput
  }

  /**
   * PlayerSession findUnique
   */
  export interface PlayerSessionFindUniqueArgs extends PlayerSessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PlayerSession findUniqueOrThrow
   */
  export type PlayerSessionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerSessionInclude | null
    /**
     * Filter, which PlayerSession to fetch.
     */
    where: PlayerSessionWhereUniqueInput
  }


  /**
   * PlayerSession base type for findFirst actions
   */
  export type PlayerSessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerSessionInclude | null
    /**
     * Filter, which PlayerSession to fetch.
     */
    where?: PlayerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSessions to fetch.
     */
    orderBy?: Enumerable<PlayerSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerSessions.
     */
    cursor?: PlayerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerSessions.
     */
    distinct?: Enumerable<PlayerSessionScalarFieldEnum>
  }

  /**
   * PlayerSession findFirst
   */
  export interface PlayerSessionFindFirstArgs extends PlayerSessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PlayerSession findFirstOrThrow
   */
  export type PlayerSessionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerSessionInclude | null
    /**
     * Filter, which PlayerSession to fetch.
     */
    where?: PlayerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSessions to fetch.
     */
    orderBy?: Enumerable<PlayerSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerSessions.
     */
    cursor?: PlayerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerSessions.
     */
    distinct?: Enumerable<PlayerSessionScalarFieldEnum>
  }


  /**
   * PlayerSession findMany
   */
  export type PlayerSessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerSessionInclude | null
    /**
     * Filter, which PlayerSessions to fetch.
     */
    where?: PlayerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSessions to fetch.
     */
    orderBy?: Enumerable<PlayerSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerSessions.
     */
    cursor?: PlayerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSessions.
     */
    skip?: number
    distinct?: Enumerable<PlayerSessionScalarFieldEnum>
  }


  /**
   * PlayerSession create
   */
  export type PlayerSessionCreateArgs = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerSessionInclude | null
    /**
     * The data needed to create a PlayerSession.
     */
    data: XOR<PlayerSessionCreateInput, PlayerSessionUncheckedCreateInput>
  }


  /**
   * PlayerSession createMany
   */
  export type PlayerSessionCreateManyArgs = {
    /**
     * The data used to create many PlayerSessions.
     */
    data: Enumerable<PlayerSessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PlayerSession update
   */
  export type PlayerSessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerSessionInclude | null
    /**
     * The data needed to update a PlayerSession.
     */
    data: XOR<PlayerSessionUpdateInput, PlayerSessionUncheckedUpdateInput>
    /**
     * Choose, which PlayerSession to update.
     */
    where: PlayerSessionWhereUniqueInput
  }


  /**
   * PlayerSession updateMany
   */
  export type PlayerSessionUpdateManyArgs = {
    /**
     * The data used to update PlayerSessions.
     */
    data: XOR<PlayerSessionUpdateManyMutationInput, PlayerSessionUncheckedUpdateManyInput>
    /**
     * Filter which PlayerSessions to update
     */
    where?: PlayerSessionWhereInput
  }


  /**
   * PlayerSession upsert
   */
  export type PlayerSessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerSessionInclude | null
    /**
     * The filter to search for the PlayerSession to update in case it exists.
     */
    where: PlayerSessionWhereUniqueInput
    /**
     * In case the PlayerSession found by the `where` argument doesn't exist, create a new PlayerSession with this data.
     */
    create: XOR<PlayerSessionCreateInput, PlayerSessionUncheckedCreateInput>
    /**
     * In case the PlayerSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerSessionUpdateInput, PlayerSessionUncheckedUpdateInput>
  }


  /**
   * PlayerSession delete
   */
  export type PlayerSessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerSessionInclude | null
    /**
     * Filter which PlayerSession to delete.
     */
    where: PlayerSessionWhereUniqueInput
  }


  /**
   * PlayerSession deleteMany
   */
  export type PlayerSessionDeleteManyArgs = {
    /**
     * Filter which PlayerSessions to delete
     */
    where?: PlayerSessionWhereInput
  }


  /**
   * PlayerSession without action
   */
  export type PlayerSessionArgs = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerSessionInclude | null
  }



  /**
   * Model Quota
   */


  export type AggregateQuota = {
    _count: QuotaCountAggregateOutputType | null
    _avg: QuotaAvgAggregateOutputType | null
    _sum: QuotaSumAggregateOutputType | null
    _min: QuotaMinAggregateOutputType | null
    _max: QuotaMaxAggregateOutputType | null
  }

  export type QuotaAvgAggregateOutputType = {
    balance: number | null
  }

  export type QuotaSumAggregateOutputType = {
    balance: number | null
  }

  export type QuotaMinAggregateOutputType = {
    id: string | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
    agentId: string | null
  }

  export type QuotaMaxAggregateOutputType = {
    id: string | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
    agentId: string | null
  }

  export type QuotaCountAggregateOutputType = {
    id: number
    balance: number
    createdAt: number
    updatedAt: number
    agentId: number
    _all: number
  }


  export type QuotaAvgAggregateInputType = {
    balance?: true
  }

  export type QuotaSumAggregateInputType = {
    balance?: true
  }

  export type QuotaMinAggregateInputType = {
    id?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    agentId?: true
  }

  export type QuotaMaxAggregateInputType = {
    id?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    agentId?: true
  }

  export type QuotaCountAggregateInputType = {
    id?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    agentId?: true
    _all?: true
  }

  export type QuotaAggregateArgs = {
    /**
     * Filter which Quota to aggregate.
     */
    where?: QuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotas to fetch.
     */
    orderBy?: Enumerable<QuotaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quotas
    **/
    _count?: true | QuotaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuotaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuotaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuotaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuotaMaxAggregateInputType
  }

  export type GetQuotaAggregateType<T extends QuotaAggregateArgs> = {
        [P in keyof T & keyof AggregateQuota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuota[P]>
      : GetScalarType<T[P], AggregateQuota[P]>
  }




  export type QuotaGroupByArgs = {
    where?: QuotaWhereInput
    orderBy?: Enumerable<QuotaOrderByWithAggregationInput>
    by: QuotaScalarFieldEnum[]
    having?: QuotaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuotaCountAggregateInputType | true
    _avg?: QuotaAvgAggregateInputType
    _sum?: QuotaSumAggregateInputType
    _min?: QuotaMinAggregateInputType
    _max?: QuotaMaxAggregateInputType
  }


  export type QuotaGroupByOutputType = {
    id: string
    balance: number
    createdAt: Date
    updatedAt: Date | null
    agentId: string
    _count: QuotaCountAggregateOutputType | null
    _avg: QuotaAvgAggregateOutputType | null
    _sum: QuotaSumAggregateOutputType | null
    _min: QuotaMinAggregateOutputType | null
    _max: QuotaMaxAggregateOutputType | null
  }

  type GetQuotaGroupByPayload<T extends QuotaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<QuotaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuotaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuotaGroupByOutputType[P]>
            : GetScalarType<T[P], QuotaGroupByOutputType[P]>
        }
      >
    >


  export type QuotaSelect = {
    id?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agentId?: boolean
    agentQuota?: boolean | AgentArgs
  }


  export type QuotaInclude = {
    agentQuota?: boolean | AgentArgs
  }

  export type QuotaGetPayload<S extends boolean | null | undefined | QuotaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Quota :
    S extends undefined ? never :
    S extends { include: any } & (QuotaArgs | QuotaFindManyArgs)
    ? Quota  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'agentQuota' ? AgentGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (QuotaArgs | QuotaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'agentQuota' ? AgentGetPayload<S['select'][P]> :  P extends keyof Quota ? Quota[P] : never
  } 
      : Quota


  type QuotaCountArgs = 
    Omit<QuotaFindManyArgs, 'select' | 'include'> & {
      select?: QuotaCountAggregateInputType | true
    }

  export interface QuotaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Quota that matches the filter.
     * @param {QuotaFindUniqueArgs} args - Arguments to find a Quota
     * @example
     * // Get one Quota
     * const quota = await prisma.quota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuotaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuotaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Quota'> extends True ? Prisma__QuotaClient<QuotaGetPayload<T>> : Prisma__QuotaClient<QuotaGetPayload<T> | null, null>

    /**
     * Find one Quota that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuotaFindUniqueOrThrowArgs} args - Arguments to find a Quota
     * @example
     * // Get one Quota
     * const quota = await prisma.quota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuotaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, QuotaFindUniqueOrThrowArgs>
    ): Prisma__QuotaClient<QuotaGetPayload<T>>

    /**
     * Find the first Quota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotaFindFirstArgs} args - Arguments to find a Quota
     * @example
     * // Get one Quota
     * const quota = await prisma.quota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuotaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuotaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Quota'> extends True ? Prisma__QuotaClient<QuotaGetPayload<T>> : Prisma__QuotaClient<QuotaGetPayload<T> | null, null>

    /**
     * Find the first Quota that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotaFindFirstOrThrowArgs} args - Arguments to find a Quota
     * @example
     * // Get one Quota
     * const quota = await prisma.quota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuotaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QuotaFindFirstOrThrowArgs>
    ): Prisma__QuotaClient<QuotaGetPayload<T>>

    /**
     * Find zero or more Quotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quotas
     * const quotas = await prisma.quota.findMany()
     * 
     * // Get first 10 Quotas
     * const quotas = await prisma.quota.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quotaWithIdOnly = await prisma.quota.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuotaFindManyArgs>(
      args?: SelectSubset<T, QuotaFindManyArgs>
    ): Prisma.PrismaPromise<Array<QuotaGetPayload<T>>>

    /**
     * Create a Quota.
     * @param {QuotaCreateArgs} args - Arguments to create a Quota.
     * @example
     * // Create one Quota
     * const Quota = await prisma.quota.create({
     *   data: {
     *     // ... data to create a Quota
     *   }
     * })
     * 
    **/
    create<T extends QuotaCreateArgs>(
      args: SelectSubset<T, QuotaCreateArgs>
    ): Prisma__QuotaClient<QuotaGetPayload<T>>

    /**
     * Create many Quotas.
     *     @param {QuotaCreateManyArgs} args - Arguments to create many Quotas.
     *     @example
     *     // Create many Quotas
     *     const quota = await prisma.quota.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuotaCreateManyArgs>(
      args?: SelectSubset<T, QuotaCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quota.
     * @param {QuotaDeleteArgs} args - Arguments to delete one Quota.
     * @example
     * // Delete one Quota
     * const Quota = await prisma.quota.delete({
     *   where: {
     *     // ... filter to delete one Quota
     *   }
     * })
     * 
    **/
    delete<T extends QuotaDeleteArgs>(
      args: SelectSubset<T, QuotaDeleteArgs>
    ): Prisma__QuotaClient<QuotaGetPayload<T>>

    /**
     * Update one Quota.
     * @param {QuotaUpdateArgs} args - Arguments to update one Quota.
     * @example
     * // Update one Quota
     * const quota = await prisma.quota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuotaUpdateArgs>(
      args: SelectSubset<T, QuotaUpdateArgs>
    ): Prisma__QuotaClient<QuotaGetPayload<T>>

    /**
     * Delete zero or more Quotas.
     * @param {QuotaDeleteManyArgs} args - Arguments to filter Quotas to delete.
     * @example
     * // Delete a few Quotas
     * const { count } = await prisma.quota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuotaDeleteManyArgs>(
      args?: SelectSubset<T, QuotaDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quotas
     * const quota = await prisma.quota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuotaUpdateManyArgs>(
      args: SelectSubset<T, QuotaUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quota.
     * @param {QuotaUpsertArgs} args - Arguments to update or create a Quota.
     * @example
     * // Update or create a Quota
     * const quota = await prisma.quota.upsert({
     *   create: {
     *     // ... data to create a Quota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quota we want to update
     *   }
     * })
    **/
    upsert<T extends QuotaUpsertArgs>(
      args: SelectSubset<T, QuotaUpsertArgs>
    ): Prisma__QuotaClient<QuotaGetPayload<T>>

    /**
     * Count the number of Quotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotaCountArgs} args - Arguments to filter Quotas to count.
     * @example
     * // Count the number of Quotas
     * const count = await prisma.quota.count({
     *   where: {
     *     // ... the filter for the Quotas we want to count
     *   }
     * })
    **/
    count<T extends QuotaCountArgs>(
      args?: Subset<T, QuotaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuotaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuotaAggregateArgs>(args: Subset<T, QuotaAggregateArgs>): Prisma.PrismaPromise<GetQuotaAggregateType<T>>

    /**
     * Group by Quota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotaGroupByArgs} args - Group by arguments.
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
      T extends QuotaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuotaGroupByArgs['orderBy'] }
        : { orderBy?: QuotaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Quota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuotaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    agentQuota<T extends AgentArgs= {}>(args?: Subset<T, AgentArgs>): Prisma__AgentClient<AgentGetPayload<T> | Null>;

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
   * Quota base type for findUnique actions
   */
  export type QuotaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Quota
     */
    select?: QuotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuotaInclude | null
    /**
     * Filter, which Quota to fetch.
     */
    where: QuotaWhereUniqueInput
  }

  /**
   * Quota findUnique
   */
  export interface QuotaFindUniqueArgs extends QuotaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Quota findUniqueOrThrow
   */
  export type QuotaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Quota
     */
    select?: QuotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuotaInclude | null
    /**
     * Filter, which Quota to fetch.
     */
    where: QuotaWhereUniqueInput
  }


  /**
   * Quota base type for findFirst actions
   */
  export type QuotaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Quota
     */
    select?: QuotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuotaInclude | null
    /**
     * Filter, which Quota to fetch.
     */
    where?: QuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotas to fetch.
     */
    orderBy?: Enumerable<QuotaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotas.
     */
    cursor?: QuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotas.
     */
    distinct?: Enumerable<QuotaScalarFieldEnum>
  }

  /**
   * Quota findFirst
   */
  export interface QuotaFindFirstArgs extends QuotaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Quota findFirstOrThrow
   */
  export type QuotaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Quota
     */
    select?: QuotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuotaInclude | null
    /**
     * Filter, which Quota to fetch.
     */
    where?: QuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotas to fetch.
     */
    orderBy?: Enumerable<QuotaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotas.
     */
    cursor?: QuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotas.
     */
    distinct?: Enumerable<QuotaScalarFieldEnum>
  }


  /**
   * Quota findMany
   */
  export type QuotaFindManyArgs = {
    /**
     * Select specific fields to fetch from the Quota
     */
    select?: QuotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuotaInclude | null
    /**
     * Filter, which Quotas to fetch.
     */
    where?: QuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotas to fetch.
     */
    orderBy?: Enumerable<QuotaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quotas.
     */
    cursor?: QuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotas.
     */
    skip?: number
    distinct?: Enumerable<QuotaScalarFieldEnum>
  }


  /**
   * Quota create
   */
  export type QuotaCreateArgs = {
    /**
     * Select specific fields to fetch from the Quota
     */
    select?: QuotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuotaInclude | null
    /**
     * The data needed to create a Quota.
     */
    data: XOR<QuotaCreateInput, QuotaUncheckedCreateInput>
  }


  /**
   * Quota createMany
   */
  export type QuotaCreateManyArgs = {
    /**
     * The data used to create many Quotas.
     */
    data: Enumerable<QuotaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Quota update
   */
  export type QuotaUpdateArgs = {
    /**
     * Select specific fields to fetch from the Quota
     */
    select?: QuotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuotaInclude | null
    /**
     * The data needed to update a Quota.
     */
    data: XOR<QuotaUpdateInput, QuotaUncheckedUpdateInput>
    /**
     * Choose, which Quota to update.
     */
    where: QuotaWhereUniqueInput
  }


  /**
   * Quota updateMany
   */
  export type QuotaUpdateManyArgs = {
    /**
     * The data used to update Quotas.
     */
    data: XOR<QuotaUpdateManyMutationInput, QuotaUncheckedUpdateManyInput>
    /**
     * Filter which Quotas to update
     */
    where?: QuotaWhereInput
  }


  /**
   * Quota upsert
   */
  export type QuotaUpsertArgs = {
    /**
     * Select specific fields to fetch from the Quota
     */
    select?: QuotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuotaInclude | null
    /**
     * The filter to search for the Quota to update in case it exists.
     */
    where: QuotaWhereUniqueInput
    /**
     * In case the Quota found by the `where` argument doesn't exist, create a new Quota with this data.
     */
    create: XOR<QuotaCreateInput, QuotaUncheckedCreateInput>
    /**
     * In case the Quota was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuotaUpdateInput, QuotaUncheckedUpdateInput>
  }


  /**
   * Quota delete
   */
  export type QuotaDeleteArgs = {
    /**
     * Select specific fields to fetch from the Quota
     */
    select?: QuotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuotaInclude | null
    /**
     * Filter which Quota to delete.
     */
    where: QuotaWhereUniqueInput
  }


  /**
   * Quota deleteMany
   */
  export type QuotaDeleteManyArgs = {
    /**
     * Filter which Quotas to delete
     */
    where?: QuotaWhereInput
  }


  /**
   * Quota without action
   */
  export type QuotaArgs = {
    /**
     * Select specific fields to fetch from the Quota
     */
    select?: QuotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuotaInclude | null
  }



  /**
   * Model Status
   */


  export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export type StatusMinAggregateOutputType = {
    id: string | null
    approval: string | null
    createdAt: Date | null
    updatedAt: Date | null
    approvedById: string | null
  }

  export type StatusMaxAggregateOutputType = {
    id: string | null
    approval: string | null
    createdAt: Date | null
    updatedAt: Date | null
    approvedById: string | null
  }

  export type StatusCountAggregateOutputType = {
    id: number
    approval: number
    createdAt: number
    updatedAt: number
    approvedById: number
    _all: number
  }


  export type StatusMinAggregateInputType = {
    id?: true
    approval?: true
    createdAt?: true
    updatedAt?: true
    approvedById?: true
  }

  export type StatusMaxAggregateInputType = {
    id?: true
    approval?: true
    createdAt?: true
    updatedAt?: true
    approvedById?: true
  }

  export type StatusCountAggregateInputType = {
    id?: true
    approval?: true
    createdAt?: true
    updatedAt?: true
    approvedById?: true
    _all?: true
  }

  export type StatusAggregateArgs = {
    /**
     * Filter which Status to aggregate.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: Enumerable<StatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statuses
    **/
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }




  export type StatusGroupByArgs = {
    where?: StatusWhereInput
    orderBy?: Enumerable<StatusOrderByWithAggregationInput>
    by: StatusScalarFieldEnum[]
    having?: StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }


  export type StatusGroupByOutputType = {
    id: string
    approval: string | null
    createdAt: Date
    updatedAt: Date | null
    approvedById: string | null
    _count: StatusCountAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusGroupByOutputType[P]>
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
        }
      >
    >


  export type StatusSelect = {
    id?: boolean
    approval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    approvedById?: boolean
    approvedBy?: boolean | AgentArgs
    withdrawal?: boolean | Status$withdrawalArgs
    deposit?: boolean | Status$depositArgs
    _count?: boolean | StatusCountOutputTypeArgs
  }


  export type StatusInclude = {
    approvedBy?: boolean | AgentArgs
    withdrawal?: boolean | Status$withdrawalArgs
    deposit?: boolean | Status$depositArgs
    _count?: boolean | StatusCountOutputTypeArgs
  }

  export type StatusGetPayload<S extends boolean | null | undefined | StatusArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Status :
    S extends undefined ? never :
    S extends { include: any } & (StatusArgs | StatusFindManyArgs)
    ? Status  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'approvedBy' ? AgentGetPayload<S['include'][P]> | null :
        P extends 'withdrawal' ? Array < WithdrawalGetPayload<S['include'][P]>>  :
        P extends 'deposit' ? Array < DepositGetPayload<S['include'][P]>>  :
        P extends '_count' ? StatusCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (StatusArgs | StatusFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'approvedBy' ? AgentGetPayload<S['select'][P]> | null :
        P extends 'withdrawal' ? Array < WithdrawalGetPayload<S['select'][P]>>  :
        P extends 'deposit' ? Array < DepositGetPayload<S['select'][P]>>  :
        P extends '_count' ? StatusCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Status ? Status[P] : never
  } 
      : Status


  type StatusCountArgs = 
    Omit<StatusFindManyArgs, 'select' | 'include'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface StatusDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Status that matches the filter.
     * @param {StatusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StatusFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StatusFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Status'> extends True ? Prisma__StatusClient<StatusGetPayload<T>> : Prisma__StatusClient<StatusGetPayload<T> | null, null>

    /**
     * Find one Status that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StatusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StatusFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StatusFindUniqueOrThrowArgs>
    ): Prisma__StatusClient<StatusGetPayload<T>>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StatusFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StatusFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Status'> extends True ? Prisma__StatusClient<StatusGetPayload<T>> : Prisma__StatusClient<StatusGetPayload<T> | null, null>

    /**
     * Find the first Status that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StatusFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StatusFindFirstOrThrowArgs>
    ): Prisma__StatusClient<StatusGetPayload<T>>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusWithIdOnly = await prisma.status.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StatusFindManyArgs>(
      args?: SelectSubset<T, StatusFindManyArgs>
    ): Prisma.PrismaPromise<Array<StatusGetPayload<T>>>

    /**
     * Create a Status.
     * @param {StatusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     * 
    **/
    create<T extends StatusCreateArgs>(
      args: SelectSubset<T, StatusCreateArgs>
    ): Prisma__StatusClient<StatusGetPayload<T>>

    /**
     * Create many Statuses.
     *     @param {StatusCreateManyArgs} args - Arguments to create many Statuses.
     *     @example
     *     // Create many Statuses
     *     const status = await prisma.status.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StatusCreateManyArgs>(
      args?: SelectSubset<T, StatusCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Status.
     * @param {StatusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     * 
    **/
    delete<T extends StatusDeleteArgs>(
      args: SelectSubset<T, StatusDeleteArgs>
    ): Prisma__StatusClient<StatusGetPayload<T>>

    /**
     * Update one Status.
     * @param {StatusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StatusUpdateArgs>(
      args: SelectSubset<T, StatusUpdateArgs>
    ): Prisma__StatusClient<StatusGetPayload<T>>

    /**
     * Delete zero or more Statuses.
     * @param {StatusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StatusDeleteManyArgs>(
      args?: SelectSubset<T, StatusDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StatusUpdateManyArgs>(
      args: SelectSubset<T, StatusUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Status.
     * @param {StatusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
    **/
    upsert<T extends StatusUpsertArgs>(
      args: SelectSubset<T, StatusUpsertArgs>
    ): Prisma__StatusClient<StatusGetPayload<T>>

    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends StatusCountArgs>(
      args?: Subset<T, StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusGroupByArgs} args - Group by arguments.
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
      T extends StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusGroupByArgs['orderBy'] }
        : { orderBy?: StatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StatusClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    approvedBy<T extends AgentArgs= {}>(args?: Subset<T, AgentArgs>): Prisma__AgentClient<AgentGetPayload<T> | Null>;

    withdrawal<T extends Status$withdrawalArgs= {}>(args?: Subset<T, Status$withdrawalArgs>): Prisma.PrismaPromise<Array<WithdrawalGetPayload<T>>| Null>;

    deposit<T extends Status$depositArgs= {}>(args?: Subset<T, Status$depositArgs>): Prisma.PrismaPromise<Array<DepositGetPayload<T>>| Null>;

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
   * Status base type for findUnique actions
   */
  export type StatusFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findUnique
   */
  export interface StatusFindUniqueArgs extends StatusFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Status findUniqueOrThrow
   */
  export type StatusFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }


  /**
   * Status base type for findFirst actions
   */
  export type StatusFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: Enumerable<StatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: Enumerable<StatusScalarFieldEnum>
  }

  /**
   * Status findFirst
   */
  export interface StatusFindFirstArgs extends StatusFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Status findFirstOrThrow
   */
  export type StatusFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: Enumerable<StatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: Enumerable<StatusScalarFieldEnum>
  }


  /**
   * Status findMany
   */
  export type StatusFindManyArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * Filter, which Statuses to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: Enumerable<StatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    distinct?: Enumerable<StatusScalarFieldEnum>
  }


  /**
   * Status create
   */
  export type StatusCreateArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * The data needed to create a Status.
     */
    data: XOR<StatusCreateInput, StatusUncheckedCreateInput>
  }


  /**
   * Status createMany
   */
  export type StatusCreateManyArgs = {
    /**
     * The data used to create many Statuses.
     */
    data: Enumerable<StatusCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Status update
   */
  export type StatusUpdateArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * The data needed to update a Status.
     */
    data: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
    /**
     * Choose, which Status to update.
     */
    where: StatusWhereUniqueInput
  }


  /**
   * Status updateMany
   */
  export type StatusUpdateManyArgs = {
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
  }


  /**
   * Status upsert
   */
  export type StatusUpsertArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * The filter to search for the Status to update in case it exists.
     */
    where: StatusWhereUniqueInput
    /**
     * In case the Status found by the `where` argument doesn't exist, create a new Status with this data.
     */
    create: XOR<StatusCreateInput, StatusUncheckedCreateInput>
    /**
     * In case the Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
  }


  /**
   * Status delete
   */
  export type StatusDeleteArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * Filter which Status to delete.
     */
    where: StatusWhereUniqueInput
  }


  /**
   * Status deleteMany
   */
  export type StatusDeleteManyArgs = {
    /**
     * Filter which Statuses to delete
     */
    where?: StatusWhereInput
  }


  /**
   * Status.withdrawal
   */
  export type Status$withdrawalArgs = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawalInclude | null
    where?: WithdrawalWhereInput
    orderBy?: Enumerable<WithdrawalOrderByWithRelationInput>
    cursor?: WithdrawalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WithdrawalScalarFieldEnum>
  }


  /**
   * Status.deposit
   */
  export type Status$depositArgs = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepositInclude | null
    where?: DepositWhereInput
    orderBy?: Enumerable<DepositOrderByWithRelationInput>
    cursor?: DepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DepositScalarFieldEnum>
  }


  /**
   * Status without action
   */
  export type StatusArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
  }



  /**
   * Model Withdrawal
   */


  export type AggregateWithdrawal = {
    _count: WithdrawalCountAggregateOutputType | null
    _avg: WithdrawalAvgAggregateOutputType | null
    _sum: WithdrawalSumAggregateOutputType | null
    _min: WithdrawalMinAggregateOutputType | null
    _max: WithdrawalMaxAggregateOutputType | null
  }

  export type WithdrawalAvgAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawalSumAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawalMinAggregateOutputType = {
    id: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    statusId: string | null
    ownerId: string | null
  }

  export type WithdrawalMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    statusId: string | null
    ownerId: string | null
  }

  export type WithdrawalCountAggregateOutputType = {
    id: number
    amount: number
    createdAt: number
    updatedAt: number
    statusId: number
    ownerId: number
    _all: number
  }


  export type WithdrawalAvgAggregateInputType = {
    amount?: true
  }

  export type WithdrawalSumAggregateInputType = {
    amount?: true
  }

  export type WithdrawalMinAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    statusId?: true
    ownerId?: true
  }

  export type WithdrawalMaxAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    statusId?: true
    ownerId?: true
  }

  export type WithdrawalCountAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    statusId?: true
    ownerId?: true
    _all?: true
  }

  export type WithdrawalAggregateArgs = {
    /**
     * Filter which Withdrawal to aggregate.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: Enumerable<WithdrawalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Withdrawals
    **/
    _count?: true | WithdrawalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawalMaxAggregateInputType
  }

  export type GetWithdrawalAggregateType<T extends WithdrawalAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawal[P]>
      : GetScalarType<T[P], AggregateWithdrawal[P]>
  }




  export type WithdrawalGroupByArgs = {
    where?: WithdrawalWhereInput
    orderBy?: Enumerable<WithdrawalOrderByWithAggregationInput>
    by: WithdrawalScalarFieldEnum[]
    having?: WithdrawalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawalCountAggregateInputType | true
    _avg?: WithdrawalAvgAggregateInputType
    _sum?: WithdrawalSumAggregateInputType
    _min?: WithdrawalMinAggregateInputType
    _max?: WithdrawalMaxAggregateInputType
  }


  export type WithdrawalGroupByOutputType = {
    id: string
    amount: number
    createdAt: Date
    updatedAt: Date | null
    statusId: string
    ownerId: string
    _count: WithdrawalCountAggregateOutputType | null
    _avg: WithdrawalAvgAggregateOutputType | null
    _sum: WithdrawalSumAggregateOutputType | null
    _min: WithdrawalMinAggregateOutputType | null
    _max: WithdrawalMaxAggregateOutputType | null
  }

  type GetWithdrawalGroupByPayload<T extends WithdrawalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WithdrawalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawalGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawalGroupByOutputType[P]>
        }
      >
    >


  export type WithdrawalSelect = {
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    statusId?: boolean
    ownerId?: boolean
    status?: boolean | StatusArgs
    owner?: boolean | UserArgs
  }


  export type WithdrawalInclude = {
    status?: boolean | StatusArgs
    owner?: boolean | UserArgs
  }

  export type WithdrawalGetPayload<S extends boolean | null | undefined | WithdrawalArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Withdrawal :
    S extends undefined ? never :
    S extends { include: any } & (WithdrawalArgs | WithdrawalFindManyArgs)
    ? Withdrawal  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'status' ? StatusGetPayload<S['include'][P]> :
        P extends 'owner' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (WithdrawalArgs | WithdrawalFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'status' ? StatusGetPayload<S['select'][P]> :
        P extends 'owner' ? UserGetPayload<S['select'][P]> :  P extends keyof Withdrawal ? Withdrawal[P] : never
  } 
      : Withdrawal


  type WithdrawalCountArgs = 
    Omit<WithdrawalFindManyArgs, 'select' | 'include'> & {
      select?: WithdrawalCountAggregateInputType | true
    }

  export interface WithdrawalDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Withdrawal that matches the filter.
     * @param {WithdrawalFindUniqueArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WithdrawalFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WithdrawalFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Withdrawal'> extends True ? Prisma__WithdrawalClient<WithdrawalGetPayload<T>> : Prisma__WithdrawalClient<WithdrawalGetPayload<T> | null, null>

    /**
     * Find one Withdrawal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WithdrawalFindUniqueOrThrowArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WithdrawalFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WithdrawalFindUniqueOrThrowArgs>
    ): Prisma__WithdrawalClient<WithdrawalGetPayload<T>>

    /**
     * Find the first Withdrawal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindFirstArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WithdrawalFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WithdrawalFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Withdrawal'> extends True ? Prisma__WithdrawalClient<WithdrawalGetPayload<T>> : Prisma__WithdrawalClient<WithdrawalGetPayload<T> | null, null>

    /**
     * Find the first Withdrawal that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindFirstOrThrowArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WithdrawalFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WithdrawalFindFirstOrThrowArgs>
    ): Prisma__WithdrawalClient<WithdrawalGetPayload<T>>

    /**
     * Find zero or more Withdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Withdrawals
     * const withdrawals = await prisma.withdrawal.findMany()
     * 
     * // Get first 10 Withdrawals
     * const withdrawals = await prisma.withdrawal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawalWithIdOnly = await prisma.withdrawal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WithdrawalFindManyArgs>(
      args?: SelectSubset<T, WithdrawalFindManyArgs>
    ): Prisma.PrismaPromise<Array<WithdrawalGetPayload<T>>>

    /**
     * Create a Withdrawal.
     * @param {WithdrawalCreateArgs} args - Arguments to create a Withdrawal.
     * @example
     * // Create one Withdrawal
     * const Withdrawal = await prisma.withdrawal.create({
     *   data: {
     *     // ... data to create a Withdrawal
     *   }
     * })
     * 
    **/
    create<T extends WithdrawalCreateArgs>(
      args: SelectSubset<T, WithdrawalCreateArgs>
    ): Prisma__WithdrawalClient<WithdrawalGetPayload<T>>

    /**
     * Create many Withdrawals.
     *     @param {WithdrawalCreateManyArgs} args - Arguments to create many Withdrawals.
     *     @example
     *     // Create many Withdrawals
     *     const withdrawal = await prisma.withdrawal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WithdrawalCreateManyArgs>(
      args?: SelectSubset<T, WithdrawalCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Withdrawal.
     * @param {WithdrawalDeleteArgs} args - Arguments to delete one Withdrawal.
     * @example
     * // Delete one Withdrawal
     * const Withdrawal = await prisma.withdrawal.delete({
     *   where: {
     *     // ... filter to delete one Withdrawal
     *   }
     * })
     * 
    **/
    delete<T extends WithdrawalDeleteArgs>(
      args: SelectSubset<T, WithdrawalDeleteArgs>
    ): Prisma__WithdrawalClient<WithdrawalGetPayload<T>>

    /**
     * Update one Withdrawal.
     * @param {WithdrawalUpdateArgs} args - Arguments to update one Withdrawal.
     * @example
     * // Update one Withdrawal
     * const withdrawal = await prisma.withdrawal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WithdrawalUpdateArgs>(
      args: SelectSubset<T, WithdrawalUpdateArgs>
    ): Prisma__WithdrawalClient<WithdrawalGetPayload<T>>

    /**
     * Delete zero or more Withdrawals.
     * @param {WithdrawalDeleteManyArgs} args - Arguments to filter Withdrawals to delete.
     * @example
     * // Delete a few Withdrawals
     * const { count } = await prisma.withdrawal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WithdrawalDeleteManyArgs>(
      args?: SelectSubset<T, WithdrawalDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Withdrawals
     * const withdrawal = await prisma.withdrawal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WithdrawalUpdateManyArgs>(
      args: SelectSubset<T, WithdrawalUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Withdrawal.
     * @param {WithdrawalUpsertArgs} args - Arguments to update or create a Withdrawal.
     * @example
     * // Update or create a Withdrawal
     * const withdrawal = await prisma.withdrawal.upsert({
     *   create: {
     *     // ... data to create a Withdrawal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Withdrawal we want to update
     *   }
     * })
    **/
    upsert<T extends WithdrawalUpsertArgs>(
      args: SelectSubset<T, WithdrawalUpsertArgs>
    ): Prisma__WithdrawalClient<WithdrawalGetPayload<T>>

    /**
     * Count the number of Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalCountArgs} args - Arguments to filter Withdrawals to count.
     * @example
     * // Count the number of Withdrawals
     * const count = await prisma.withdrawal.count({
     *   where: {
     *     // ... the filter for the Withdrawals we want to count
     *   }
     * })
    **/
    count<T extends WithdrawalCountArgs>(
      args?: Subset<T, WithdrawalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WithdrawalAggregateArgs>(args: Subset<T, WithdrawalAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalAggregateType<T>>

    /**
     * Group by Withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalGroupByArgs} args - Group by arguments.
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
      T extends WithdrawalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawalGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WithdrawalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Withdrawal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WithdrawalClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    status<T extends StatusArgs= {}>(args?: Subset<T, StatusArgs>): Prisma__StatusClient<StatusGetPayload<T> | Null>;

    owner<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * Withdrawal base type for findUnique actions
   */
  export type WithdrawalFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawalInclude | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal findUnique
   */
  export interface WithdrawalFindUniqueArgs extends WithdrawalFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Withdrawal findUniqueOrThrow
   */
  export type WithdrawalFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawalInclude | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where: WithdrawalWhereUniqueInput
  }


  /**
   * Withdrawal base type for findFirst actions
   */
  export type WithdrawalFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawalInclude | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: Enumerable<WithdrawalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawals.
     */
    distinct?: Enumerable<WithdrawalScalarFieldEnum>
  }

  /**
   * Withdrawal findFirst
   */
  export interface WithdrawalFindFirstArgs extends WithdrawalFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Withdrawal findFirstOrThrow
   */
  export type WithdrawalFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawalInclude | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: Enumerable<WithdrawalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawals.
     */
    distinct?: Enumerable<WithdrawalScalarFieldEnum>
  }


  /**
   * Withdrawal findMany
   */
  export type WithdrawalFindManyArgs = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawalInclude | null
    /**
     * Filter, which Withdrawals to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: Enumerable<WithdrawalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    distinct?: Enumerable<WithdrawalScalarFieldEnum>
  }


  /**
   * Withdrawal create
   */
  export type WithdrawalCreateArgs = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawalInclude | null
    /**
     * The data needed to create a Withdrawal.
     */
    data: XOR<WithdrawalCreateInput, WithdrawalUncheckedCreateInput>
  }


  /**
   * Withdrawal createMany
   */
  export type WithdrawalCreateManyArgs = {
    /**
     * The data used to create many Withdrawals.
     */
    data: Enumerable<WithdrawalCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Withdrawal update
   */
  export type WithdrawalUpdateArgs = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawalInclude | null
    /**
     * The data needed to update a Withdrawal.
     */
    data: XOR<WithdrawalUpdateInput, WithdrawalUncheckedUpdateInput>
    /**
     * Choose, which Withdrawal to update.
     */
    where: WithdrawalWhereUniqueInput
  }


  /**
   * Withdrawal updateMany
   */
  export type WithdrawalUpdateManyArgs = {
    /**
     * The data used to update Withdrawals.
     */
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyInput>
    /**
     * Filter which Withdrawals to update
     */
    where?: WithdrawalWhereInput
  }


  /**
   * Withdrawal upsert
   */
  export type WithdrawalUpsertArgs = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawalInclude | null
    /**
     * The filter to search for the Withdrawal to update in case it exists.
     */
    where: WithdrawalWhereUniqueInput
    /**
     * In case the Withdrawal found by the `where` argument doesn't exist, create a new Withdrawal with this data.
     */
    create: XOR<WithdrawalCreateInput, WithdrawalUncheckedCreateInput>
    /**
     * In case the Withdrawal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WithdrawalUpdateInput, WithdrawalUncheckedUpdateInput>
  }


  /**
   * Withdrawal delete
   */
  export type WithdrawalDeleteArgs = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawalInclude | null
    /**
     * Filter which Withdrawal to delete.
     */
    where: WithdrawalWhereUniqueInput
  }


  /**
   * Withdrawal deleteMany
   */
  export type WithdrawalDeleteManyArgs = {
    /**
     * Filter which Withdrawals to delete
     */
    where?: WithdrawalWhereInput
  }


  /**
   * Withdrawal without action
   */
  export type WithdrawalArgs = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawalInclude | null
  }



  /**
   * Model Deposit
   */


  export type AggregateDeposit = {
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  export type DepositAvgAggregateOutputType = {
    amount: number | null
  }

  export type DepositSumAggregateOutputType = {
    amount: number | null
  }

  export type DepositMinAggregateOutputType = {
    id: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    statusId: string | null
    ownerId: string | null
  }

  export type DepositMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    statusId: string | null
    ownerId: string | null
  }

  export type DepositCountAggregateOutputType = {
    id: number
    amount: number
    createdAt: number
    updatedAt: number
    statusId: number
    ownerId: number
    _all: number
  }


  export type DepositAvgAggregateInputType = {
    amount?: true
  }

  export type DepositSumAggregateInputType = {
    amount?: true
  }

  export type DepositMinAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    statusId?: true
    ownerId?: true
  }

  export type DepositMaxAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    statusId?: true
    ownerId?: true
  }

  export type DepositCountAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    statusId?: true
    ownerId?: true
    _all?: true
  }

  export type DepositAggregateArgs = {
    /**
     * Filter which Deposit to aggregate.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: Enumerable<DepositOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deposits
    **/
    _count?: true | DepositCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositMaxAggregateInputType
  }

  export type GetDepositAggregateType<T extends DepositAggregateArgs> = {
        [P in keyof T & keyof AggregateDeposit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeposit[P]>
      : GetScalarType<T[P], AggregateDeposit[P]>
  }




  export type DepositGroupByArgs = {
    where?: DepositWhereInput
    orderBy?: Enumerable<DepositOrderByWithAggregationInput>
    by: DepositScalarFieldEnum[]
    having?: DepositScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositCountAggregateInputType | true
    _avg?: DepositAvgAggregateInputType
    _sum?: DepositSumAggregateInputType
    _min?: DepositMinAggregateInputType
    _max?: DepositMaxAggregateInputType
  }


  export type DepositGroupByOutputType = {
    id: string
    amount: number
    createdAt: Date
    updatedAt: Date | null
    statusId: string
    ownerId: string
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  type GetDepositGroupByPayload<T extends DepositGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DepositGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositGroupByOutputType[P]>
            : GetScalarType<T[P], DepositGroupByOutputType[P]>
        }
      >
    >


  export type DepositSelect = {
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    statusId?: boolean
    ownerId?: boolean
    status?: boolean | StatusArgs
    owner?: boolean | UserArgs
  }


  export type DepositInclude = {
    status?: boolean | StatusArgs
    owner?: boolean | UserArgs
  }

  export type DepositGetPayload<S extends boolean | null | undefined | DepositArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Deposit :
    S extends undefined ? never :
    S extends { include: any } & (DepositArgs | DepositFindManyArgs)
    ? Deposit  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'status' ? StatusGetPayload<S['include'][P]> :
        P extends 'owner' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DepositArgs | DepositFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'status' ? StatusGetPayload<S['select'][P]> :
        P extends 'owner' ? UserGetPayload<S['select'][P]> :  P extends keyof Deposit ? Deposit[P] : never
  } 
      : Deposit


  type DepositCountArgs = 
    Omit<DepositFindManyArgs, 'select' | 'include'> & {
      select?: DepositCountAggregateInputType | true
    }

  export interface DepositDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Deposit that matches the filter.
     * @param {DepositFindUniqueArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DepositFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DepositFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Deposit'> extends True ? Prisma__DepositClient<DepositGetPayload<T>> : Prisma__DepositClient<DepositGetPayload<T> | null, null>

    /**
     * Find one Deposit that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DepositFindUniqueOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DepositFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DepositFindUniqueOrThrowArgs>
    ): Prisma__DepositClient<DepositGetPayload<T>>

    /**
     * Find the first Deposit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DepositFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DepositFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Deposit'> extends True ? Prisma__DepositClient<DepositGetPayload<T>> : Prisma__DepositClient<DepositGetPayload<T> | null, null>

    /**
     * Find the first Deposit that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DepositFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DepositFindFirstOrThrowArgs>
    ): Prisma__DepositClient<DepositGetPayload<T>>

    /**
     * Find zero or more Deposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deposits
     * const deposits = await prisma.deposit.findMany()
     * 
     * // Get first 10 Deposits
     * const deposits = await prisma.deposit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositWithIdOnly = await prisma.deposit.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DepositFindManyArgs>(
      args?: SelectSubset<T, DepositFindManyArgs>
    ): Prisma.PrismaPromise<Array<DepositGetPayload<T>>>

    /**
     * Create a Deposit.
     * @param {DepositCreateArgs} args - Arguments to create a Deposit.
     * @example
     * // Create one Deposit
     * const Deposit = await prisma.deposit.create({
     *   data: {
     *     // ... data to create a Deposit
     *   }
     * })
     * 
    **/
    create<T extends DepositCreateArgs>(
      args: SelectSubset<T, DepositCreateArgs>
    ): Prisma__DepositClient<DepositGetPayload<T>>

    /**
     * Create many Deposits.
     *     @param {DepositCreateManyArgs} args - Arguments to create many Deposits.
     *     @example
     *     // Create many Deposits
     *     const deposit = await prisma.deposit.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DepositCreateManyArgs>(
      args?: SelectSubset<T, DepositCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Deposit.
     * @param {DepositDeleteArgs} args - Arguments to delete one Deposit.
     * @example
     * // Delete one Deposit
     * const Deposit = await prisma.deposit.delete({
     *   where: {
     *     // ... filter to delete one Deposit
     *   }
     * })
     * 
    **/
    delete<T extends DepositDeleteArgs>(
      args: SelectSubset<T, DepositDeleteArgs>
    ): Prisma__DepositClient<DepositGetPayload<T>>

    /**
     * Update one Deposit.
     * @param {DepositUpdateArgs} args - Arguments to update one Deposit.
     * @example
     * // Update one Deposit
     * const deposit = await prisma.deposit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DepositUpdateArgs>(
      args: SelectSubset<T, DepositUpdateArgs>
    ): Prisma__DepositClient<DepositGetPayload<T>>

    /**
     * Delete zero or more Deposits.
     * @param {DepositDeleteManyArgs} args - Arguments to filter Deposits to delete.
     * @example
     * // Delete a few Deposits
     * const { count } = await prisma.deposit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DepositDeleteManyArgs>(
      args?: SelectSubset<T, DepositDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DepositUpdateManyArgs>(
      args: SelectSubset<T, DepositUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Deposit.
     * @param {DepositUpsertArgs} args - Arguments to update or create a Deposit.
     * @example
     * // Update or create a Deposit
     * const deposit = await prisma.deposit.upsert({
     *   create: {
     *     // ... data to create a Deposit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deposit we want to update
     *   }
     * })
    **/
    upsert<T extends DepositUpsertArgs>(
      args: SelectSubset<T, DepositUpsertArgs>
    ): Prisma__DepositClient<DepositGetPayload<T>>

    /**
     * Count the number of Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositCountArgs} args - Arguments to filter Deposits to count.
     * @example
     * // Count the number of Deposits
     * const count = await prisma.deposit.count({
     *   where: {
     *     // ... the filter for the Deposits we want to count
     *   }
     * })
    **/
    count<T extends DepositCountArgs>(
      args?: Subset<T, DepositCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepositAggregateArgs>(args: Subset<T, DepositAggregateArgs>): Prisma.PrismaPromise<GetDepositAggregateType<T>>

    /**
     * Group by Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositGroupByArgs} args - Group by arguments.
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
      T extends DepositGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositGroupByArgs['orderBy'] }
        : { orderBy?: DepositGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepositGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Deposit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DepositClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    status<T extends StatusArgs= {}>(args?: Subset<T, StatusArgs>): Prisma__StatusClient<StatusGetPayload<T> | Null>;

    owner<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * Deposit base type for findUnique actions
   */
  export type DepositFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepositInclude | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findUnique
   */
  export interface DepositFindUniqueArgs extends DepositFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Deposit findUniqueOrThrow
   */
  export type DepositFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepositInclude | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }


  /**
   * Deposit base type for findFirst actions
   */
  export type DepositFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepositInclude | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: Enumerable<DepositOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: Enumerable<DepositScalarFieldEnum>
  }

  /**
   * Deposit findFirst
   */
  export interface DepositFindFirstArgs extends DepositFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Deposit findFirstOrThrow
   */
  export type DepositFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepositInclude | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: Enumerable<DepositOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: Enumerable<DepositScalarFieldEnum>
  }


  /**
   * Deposit findMany
   */
  export type DepositFindManyArgs = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepositInclude | null
    /**
     * Filter, which Deposits to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: Enumerable<DepositOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    distinct?: Enumerable<DepositScalarFieldEnum>
  }


  /**
   * Deposit create
   */
  export type DepositCreateArgs = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepositInclude | null
    /**
     * The data needed to create a Deposit.
     */
    data: XOR<DepositCreateInput, DepositUncheckedCreateInput>
  }


  /**
   * Deposit createMany
   */
  export type DepositCreateManyArgs = {
    /**
     * The data used to create many Deposits.
     */
    data: Enumerable<DepositCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Deposit update
   */
  export type DepositUpdateArgs = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepositInclude | null
    /**
     * The data needed to update a Deposit.
     */
    data: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
    /**
     * Choose, which Deposit to update.
     */
    where: DepositWhereUniqueInput
  }


  /**
   * Deposit updateMany
   */
  export type DepositUpdateManyArgs = {
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
  }


  /**
   * Deposit upsert
   */
  export type DepositUpsertArgs = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepositInclude | null
    /**
     * The filter to search for the Deposit to update in case it exists.
     */
    where: DepositWhereUniqueInput
    /**
     * In case the Deposit found by the `where` argument doesn't exist, create a new Deposit with this data.
     */
    create: XOR<DepositCreateInput, DepositUncheckedCreateInput>
    /**
     * In case the Deposit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
  }


  /**
   * Deposit delete
   */
  export type DepositDeleteArgs = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepositInclude | null
    /**
     * Filter which Deposit to delete.
     */
    where: DepositWhereUniqueInput
  }


  /**
   * Deposit deleteMany
   */
  export type DepositDeleteManyArgs = {
    /**
     * Filter which Deposits to delete
     */
    where?: DepositWhereInput
  }


  /**
   * Deposit without action
   */
  export type DepositArgs = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepositInclude | null
  }



  /**
   * Model alembic_version
   */


  export type AggregateAlembic_version = {
    _count: Alembic_versionCountAggregateOutputType | null
    _min: Alembic_versionMinAggregateOutputType | null
    _max: Alembic_versionMaxAggregateOutputType | null
  }

  export type Alembic_versionMinAggregateOutputType = {
    version_num: string | null
  }

  export type Alembic_versionMaxAggregateOutputType = {
    version_num: string | null
  }

  export type Alembic_versionCountAggregateOutputType = {
    version_num: number
    _all: number
  }


  export type Alembic_versionMinAggregateInputType = {
    version_num?: true
  }

  export type Alembic_versionMaxAggregateInputType = {
    version_num?: true
  }

  export type Alembic_versionCountAggregateInputType = {
    version_num?: true
    _all?: true
  }

  export type Alembic_versionAggregateArgs = {
    /**
     * Filter which alembic_version to aggregate.
     */
    where?: alembic_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alembic_versions to fetch.
     */
    orderBy?: Enumerable<alembic_versionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alembic_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alembic_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alembic_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alembic_versions
    **/
    _count?: true | Alembic_versionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Alembic_versionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Alembic_versionMaxAggregateInputType
  }

  export type GetAlembic_versionAggregateType<T extends Alembic_versionAggregateArgs> = {
        [P in keyof T & keyof AggregateAlembic_version]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlembic_version[P]>
      : GetScalarType<T[P], AggregateAlembic_version[P]>
  }




  export type Alembic_versionGroupByArgs = {
    where?: alembic_versionWhereInput
    orderBy?: Enumerable<alembic_versionOrderByWithAggregationInput>
    by: Alembic_versionScalarFieldEnum[]
    having?: alembic_versionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Alembic_versionCountAggregateInputType | true
    _min?: Alembic_versionMinAggregateInputType
    _max?: Alembic_versionMaxAggregateInputType
  }


  export type Alembic_versionGroupByOutputType = {
    version_num: string
    _count: Alembic_versionCountAggregateOutputType | null
    _min: Alembic_versionMinAggregateOutputType | null
    _max: Alembic_versionMaxAggregateOutputType | null
  }

  type GetAlembic_versionGroupByPayload<T extends Alembic_versionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Alembic_versionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Alembic_versionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Alembic_versionGroupByOutputType[P]>
            : GetScalarType<T[P], Alembic_versionGroupByOutputType[P]>
        }
      >
    >


  export type alembic_versionSelect = {
    version_num?: boolean
  }


  export type alembic_versionGetPayload<S extends boolean | null | undefined | alembic_versionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? alembic_version :
    S extends undefined ? never :
    S extends { include: any } & (alembic_versionArgs | alembic_versionFindManyArgs)
    ? alembic_version 
    : S extends { select: any } & (alembic_versionArgs | alembic_versionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof alembic_version ? alembic_version[P] : never
  } 
      : alembic_version


  type alembic_versionCountArgs = 
    Omit<alembic_versionFindManyArgs, 'select' | 'include'> & {
      select?: Alembic_versionCountAggregateInputType | true
    }

  export interface alembic_versionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Alembic_version that matches the filter.
     * @param {alembic_versionFindUniqueArgs} args - Arguments to find a Alembic_version
     * @example
     * // Get one Alembic_version
     * const alembic_version = await prisma.alembic_version.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends alembic_versionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, alembic_versionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'alembic_version'> extends True ? Prisma__alembic_versionClient<alembic_versionGetPayload<T>> : Prisma__alembic_versionClient<alembic_versionGetPayload<T> | null, null>

    /**
     * Find one Alembic_version that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {alembic_versionFindUniqueOrThrowArgs} args - Arguments to find a Alembic_version
     * @example
     * // Get one Alembic_version
     * const alembic_version = await prisma.alembic_version.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends alembic_versionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, alembic_versionFindUniqueOrThrowArgs>
    ): Prisma__alembic_versionClient<alembic_versionGetPayload<T>>

    /**
     * Find the first Alembic_version that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionFindFirstArgs} args - Arguments to find a Alembic_version
     * @example
     * // Get one Alembic_version
     * const alembic_version = await prisma.alembic_version.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends alembic_versionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, alembic_versionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'alembic_version'> extends True ? Prisma__alembic_versionClient<alembic_versionGetPayload<T>> : Prisma__alembic_versionClient<alembic_versionGetPayload<T> | null, null>

    /**
     * Find the first Alembic_version that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionFindFirstOrThrowArgs} args - Arguments to find a Alembic_version
     * @example
     * // Get one Alembic_version
     * const alembic_version = await prisma.alembic_version.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends alembic_versionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, alembic_versionFindFirstOrThrowArgs>
    ): Prisma__alembic_versionClient<alembic_versionGetPayload<T>>

    /**
     * Find zero or more Alembic_versions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alembic_versions
     * const alembic_versions = await prisma.alembic_version.findMany()
     * 
     * // Get first 10 Alembic_versions
     * const alembic_versions = await prisma.alembic_version.findMany({ take: 10 })
     * 
     * // Only select the `version_num`
     * const alembic_versionWithVersion_numOnly = await prisma.alembic_version.findMany({ select: { version_num: true } })
     * 
    **/
    findMany<T extends alembic_versionFindManyArgs>(
      args?: SelectSubset<T, alembic_versionFindManyArgs>
    ): Prisma.PrismaPromise<Array<alembic_versionGetPayload<T>>>

    /**
     * Create a Alembic_version.
     * @param {alembic_versionCreateArgs} args - Arguments to create a Alembic_version.
     * @example
     * // Create one Alembic_version
     * const Alembic_version = await prisma.alembic_version.create({
     *   data: {
     *     // ... data to create a Alembic_version
     *   }
     * })
     * 
    **/
    create<T extends alembic_versionCreateArgs>(
      args: SelectSubset<T, alembic_versionCreateArgs>
    ): Prisma__alembic_versionClient<alembic_versionGetPayload<T>>

    /**
     * Create many Alembic_versions.
     *     @param {alembic_versionCreateManyArgs} args - Arguments to create many Alembic_versions.
     *     @example
     *     // Create many Alembic_versions
     *     const alembic_version = await prisma.alembic_version.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends alembic_versionCreateManyArgs>(
      args?: SelectSubset<T, alembic_versionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alembic_version.
     * @param {alembic_versionDeleteArgs} args - Arguments to delete one Alembic_version.
     * @example
     * // Delete one Alembic_version
     * const Alembic_version = await prisma.alembic_version.delete({
     *   where: {
     *     // ... filter to delete one Alembic_version
     *   }
     * })
     * 
    **/
    delete<T extends alembic_versionDeleteArgs>(
      args: SelectSubset<T, alembic_versionDeleteArgs>
    ): Prisma__alembic_versionClient<alembic_versionGetPayload<T>>

    /**
     * Update one Alembic_version.
     * @param {alembic_versionUpdateArgs} args - Arguments to update one Alembic_version.
     * @example
     * // Update one Alembic_version
     * const alembic_version = await prisma.alembic_version.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends alembic_versionUpdateArgs>(
      args: SelectSubset<T, alembic_versionUpdateArgs>
    ): Prisma__alembic_versionClient<alembic_versionGetPayload<T>>

    /**
     * Delete zero or more Alembic_versions.
     * @param {alembic_versionDeleteManyArgs} args - Arguments to filter Alembic_versions to delete.
     * @example
     * // Delete a few Alembic_versions
     * const { count } = await prisma.alembic_version.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends alembic_versionDeleteManyArgs>(
      args?: SelectSubset<T, alembic_versionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alembic_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alembic_versions
     * const alembic_version = await prisma.alembic_version.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends alembic_versionUpdateManyArgs>(
      args: SelectSubset<T, alembic_versionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alembic_version.
     * @param {alembic_versionUpsertArgs} args - Arguments to update or create a Alembic_version.
     * @example
     * // Update or create a Alembic_version
     * const alembic_version = await prisma.alembic_version.upsert({
     *   create: {
     *     // ... data to create a Alembic_version
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alembic_version we want to update
     *   }
     * })
    **/
    upsert<T extends alembic_versionUpsertArgs>(
      args: SelectSubset<T, alembic_versionUpsertArgs>
    ): Prisma__alembic_versionClient<alembic_versionGetPayload<T>>

    /**
     * Count the number of Alembic_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionCountArgs} args - Arguments to filter Alembic_versions to count.
     * @example
     * // Count the number of Alembic_versions
     * const count = await prisma.alembic_version.count({
     *   where: {
     *     // ... the filter for the Alembic_versions we want to count
     *   }
     * })
    **/
    count<T extends alembic_versionCountArgs>(
      args?: Subset<T, alembic_versionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Alembic_versionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alembic_version.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alembic_versionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Alembic_versionAggregateArgs>(args: Subset<T, Alembic_versionAggregateArgs>): Prisma.PrismaPromise<GetAlembic_versionAggregateType<T>>

    /**
     * Group by Alembic_version.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alembic_versionGroupByArgs} args - Group by arguments.
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
      T extends Alembic_versionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Alembic_versionGroupByArgs['orderBy'] }
        : { orderBy?: Alembic_versionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Alembic_versionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlembic_versionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for alembic_version.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__alembic_versionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * alembic_version base type for findUnique actions
   */
  export type alembic_versionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect | null
    /**
     * Filter, which alembic_version to fetch.
     */
    where: alembic_versionWhereUniqueInput
  }

  /**
   * alembic_version findUnique
   */
  export interface alembic_versionFindUniqueArgs extends alembic_versionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * alembic_version findUniqueOrThrow
   */
  export type alembic_versionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect | null
    /**
     * Filter, which alembic_version to fetch.
     */
    where: alembic_versionWhereUniqueInput
  }


  /**
   * alembic_version base type for findFirst actions
   */
  export type alembic_versionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect | null
    /**
     * Filter, which alembic_version to fetch.
     */
    where?: alembic_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alembic_versions to fetch.
     */
    orderBy?: Enumerable<alembic_versionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alembic_versions.
     */
    cursor?: alembic_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alembic_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alembic_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alembic_versions.
     */
    distinct?: Enumerable<Alembic_versionScalarFieldEnum>
  }

  /**
   * alembic_version findFirst
   */
  export interface alembic_versionFindFirstArgs extends alembic_versionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * alembic_version findFirstOrThrow
   */
  export type alembic_versionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect | null
    /**
     * Filter, which alembic_version to fetch.
     */
    where?: alembic_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alembic_versions to fetch.
     */
    orderBy?: Enumerable<alembic_versionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alembic_versions.
     */
    cursor?: alembic_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alembic_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alembic_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alembic_versions.
     */
    distinct?: Enumerable<Alembic_versionScalarFieldEnum>
  }


  /**
   * alembic_version findMany
   */
  export type alembic_versionFindManyArgs = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect | null
    /**
     * Filter, which alembic_versions to fetch.
     */
    where?: alembic_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alembic_versions to fetch.
     */
    orderBy?: Enumerable<alembic_versionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alembic_versions.
     */
    cursor?: alembic_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alembic_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alembic_versions.
     */
    skip?: number
    distinct?: Enumerable<Alembic_versionScalarFieldEnum>
  }


  /**
   * alembic_version create
   */
  export type alembic_versionCreateArgs = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect | null
    /**
     * The data needed to create a alembic_version.
     */
    data: XOR<alembic_versionCreateInput, alembic_versionUncheckedCreateInput>
  }


  /**
   * alembic_version createMany
   */
  export type alembic_versionCreateManyArgs = {
    /**
     * The data used to create many alembic_versions.
     */
    data: Enumerable<alembic_versionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * alembic_version update
   */
  export type alembic_versionUpdateArgs = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect | null
    /**
     * The data needed to update a alembic_version.
     */
    data: XOR<alembic_versionUpdateInput, alembic_versionUncheckedUpdateInput>
    /**
     * Choose, which alembic_version to update.
     */
    where: alembic_versionWhereUniqueInput
  }


  /**
   * alembic_version updateMany
   */
  export type alembic_versionUpdateManyArgs = {
    /**
     * The data used to update alembic_versions.
     */
    data: XOR<alembic_versionUpdateManyMutationInput, alembic_versionUncheckedUpdateManyInput>
    /**
     * Filter which alembic_versions to update
     */
    where?: alembic_versionWhereInput
  }


  /**
   * alembic_version upsert
   */
  export type alembic_versionUpsertArgs = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect | null
    /**
     * The filter to search for the alembic_version to update in case it exists.
     */
    where: alembic_versionWhereUniqueInput
    /**
     * In case the alembic_version found by the `where` argument doesn't exist, create a new alembic_version with this data.
     */
    create: XOR<alembic_versionCreateInput, alembic_versionUncheckedCreateInput>
    /**
     * In case the alembic_version was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alembic_versionUpdateInput, alembic_versionUncheckedUpdateInput>
  }


  /**
   * alembic_version delete
   */
  export type alembic_versionDeleteArgs = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect | null
    /**
     * Filter which alembic_version to delete.
     */
    where: alembic_versionWhereUniqueInput
  }


  /**
   * alembic_version deleteMany
   */
  export type alembic_versionDeleteManyArgs = {
    /**
     * Filter which alembic_versions to delete
     */
    where?: alembic_versionWhereInput
  }


  /**
   * alembic_version without action
   */
  export type alembic_versionArgs = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect | null
  }



  /**
   * Model GameList
   */


  export type AggregateGameList = {
    _count: GameListCountAggregateOutputType | null
    _avg: GameListAvgAggregateOutputType | null
    _sum: GameListSumAggregateOutputType | null
    _min: GameListMinAggregateOutputType | null
    _max: GameListMaxAggregateOutputType | null
  }

  export type GameListAvgAggregateOutputType = {
    id: number | null
    type: number | null
  }

  export type GameListSumAggregateOutputType = {
    id: number | null
    type: number | null
  }

  export type GameListMinAggregateOutputType = {
    id: number | null
    eGameName: string | null
    cGameName: string | null
    type: number | null
    createdAt: Date | null
  }

  export type GameListMaxAggregateOutputType = {
    id: number | null
    eGameName: string | null
    cGameName: string | null
    type: number | null
    createdAt: Date | null
  }

  export type GameListCountAggregateOutputType = {
    id: number
    eGameName: number
    cGameName: number
    type: number
    json: number
    createdAt: number
    _all: number
  }


  export type GameListAvgAggregateInputType = {
    id?: true
    type?: true
  }

  export type GameListSumAggregateInputType = {
    id?: true
    type?: true
  }

  export type GameListMinAggregateInputType = {
    id?: true
    eGameName?: true
    cGameName?: true
    type?: true
    createdAt?: true
  }

  export type GameListMaxAggregateInputType = {
    id?: true
    eGameName?: true
    cGameName?: true
    type?: true
    createdAt?: true
  }

  export type GameListCountAggregateInputType = {
    id?: true
    eGameName?: true
    cGameName?: true
    type?: true
    json?: true
    createdAt?: true
    _all?: true
  }

  export type GameListAggregateArgs = {
    /**
     * Filter which GameList to aggregate.
     */
    where?: GameListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameLists to fetch.
     */
    orderBy?: Enumerable<GameListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameLists
    **/
    _count?: true | GameListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameListMaxAggregateInputType
  }

  export type GetGameListAggregateType<T extends GameListAggregateArgs> = {
        [P in keyof T & keyof AggregateGameList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameList[P]>
      : GetScalarType<T[P], AggregateGameList[P]>
  }




  export type GameListGroupByArgs = {
    where?: GameListWhereInput
    orderBy?: Enumerable<GameListOrderByWithAggregationInput>
    by: GameListScalarFieldEnum[]
    having?: GameListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameListCountAggregateInputType | true
    _avg?: GameListAvgAggregateInputType
    _sum?: GameListSumAggregateInputType
    _min?: GameListMinAggregateInputType
    _max?: GameListMaxAggregateInputType
  }


  export type GameListGroupByOutputType = {
    id: number
    eGameName: string
    cGameName: string
    type: number | null
    json: JsonValue | null
    createdAt: Date | null
    _count: GameListCountAggregateOutputType | null
    _avg: GameListAvgAggregateOutputType | null
    _sum: GameListSumAggregateOutputType | null
    _min: GameListMinAggregateOutputType | null
    _max: GameListMaxAggregateOutputType | null
  }

  type GetGameListGroupByPayload<T extends GameListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GameListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameListGroupByOutputType[P]>
            : GetScalarType<T[P], GameListGroupByOutputType[P]>
        }
      >
    >


  export type GameListSelect = {
    id?: boolean
    eGameName?: boolean
    cGameName?: boolean
    type?: boolean
    json?: boolean
    createdAt?: boolean
    gameSession?: boolean | GameList$gameSessionArgs
    betDetailHistory?: boolean | GameList$betDetailHistoryArgs
    _count?: boolean | GameListCountOutputTypeArgs
  }


  export type GameListInclude = {
    gameSession?: boolean | GameList$gameSessionArgs
    betDetailHistory?: boolean | GameList$betDetailHistoryArgs
    _count?: boolean | GameListCountOutputTypeArgs
  }

  export type GameListGetPayload<S extends boolean | null | undefined | GameListArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GameList :
    S extends undefined ? never :
    S extends { include: any } & (GameListArgs | GameListFindManyArgs)
    ? GameList  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'gameSession' ? Array < GameSessionGetPayload<S['include'][P]>>  :
        P extends 'betDetailHistory' ? Array < BetDetailHistoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? GameListCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (GameListArgs | GameListFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'gameSession' ? Array < GameSessionGetPayload<S['select'][P]>>  :
        P extends 'betDetailHistory' ? Array < BetDetailHistoryGetPayload<S['select'][P]>>  :
        P extends '_count' ? GameListCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof GameList ? GameList[P] : never
  } 
      : GameList


  type GameListCountArgs = 
    Omit<GameListFindManyArgs, 'select' | 'include'> & {
      select?: GameListCountAggregateInputType | true
    }

  export interface GameListDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one GameList that matches the filter.
     * @param {GameListFindUniqueArgs} args - Arguments to find a GameList
     * @example
     * // Get one GameList
     * const gameList = await prisma.gameList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameListFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GameListFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GameList'> extends True ? Prisma__GameListClient<GameListGetPayload<T>> : Prisma__GameListClient<GameListGetPayload<T> | null, null>

    /**
     * Find one GameList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GameListFindUniqueOrThrowArgs} args - Arguments to find a GameList
     * @example
     * // Get one GameList
     * const gameList = await prisma.gameList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GameListFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GameListFindUniqueOrThrowArgs>
    ): Prisma__GameListClient<GameListGetPayload<T>>

    /**
     * Find the first GameList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameListFindFirstArgs} args - Arguments to find a GameList
     * @example
     * // Get one GameList
     * const gameList = await prisma.gameList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameListFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GameListFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GameList'> extends True ? Prisma__GameListClient<GameListGetPayload<T>> : Prisma__GameListClient<GameListGetPayload<T> | null, null>

    /**
     * Find the first GameList that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameListFindFirstOrThrowArgs} args - Arguments to find a GameList
     * @example
     * // Get one GameList
     * const gameList = await prisma.gameList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GameListFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GameListFindFirstOrThrowArgs>
    ): Prisma__GameListClient<GameListGetPayload<T>>

    /**
     * Find zero or more GameLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameLists
     * const gameLists = await prisma.gameList.findMany()
     * 
     * // Get first 10 GameLists
     * const gameLists = await prisma.gameList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameListWithIdOnly = await prisma.gameList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameListFindManyArgs>(
      args?: SelectSubset<T, GameListFindManyArgs>
    ): Prisma.PrismaPromise<Array<GameListGetPayload<T>>>

    /**
     * Create a GameList.
     * @param {GameListCreateArgs} args - Arguments to create a GameList.
     * @example
     * // Create one GameList
     * const GameList = await prisma.gameList.create({
     *   data: {
     *     // ... data to create a GameList
     *   }
     * })
     * 
    **/
    create<T extends GameListCreateArgs>(
      args: SelectSubset<T, GameListCreateArgs>
    ): Prisma__GameListClient<GameListGetPayload<T>>

    /**
     * Create many GameLists.
     *     @param {GameListCreateManyArgs} args - Arguments to create many GameLists.
     *     @example
     *     // Create many GameLists
     *     const gameList = await prisma.gameList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GameListCreateManyArgs>(
      args?: SelectSubset<T, GameListCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GameList.
     * @param {GameListDeleteArgs} args - Arguments to delete one GameList.
     * @example
     * // Delete one GameList
     * const GameList = await prisma.gameList.delete({
     *   where: {
     *     // ... filter to delete one GameList
     *   }
     * })
     * 
    **/
    delete<T extends GameListDeleteArgs>(
      args: SelectSubset<T, GameListDeleteArgs>
    ): Prisma__GameListClient<GameListGetPayload<T>>

    /**
     * Update one GameList.
     * @param {GameListUpdateArgs} args - Arguments to update one GameList.
     * @example
     * // Update one GameList
     * const gameList = await prisma.gameList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameListUpdateArgs>(
      args: SelectSubset<T, GameListUpdateArgs>
    ): Prisma__GameListClient<GameListGetPayload<T>>

    /**
     * Delete zero or more GameLists.
     * @param {GameListDeleteManyArgs} args - Arguments to filter GameLists to delete.
     * @example
     * // Delete a few GameLists
     * const { count } = await prisma.gameList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameListDeleteManyArgs>(
      args?: SelectSubset<T, GameListDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameLists
     * const gameList = await prisma.gameList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameListUpdateManyArgs>(
      args: SelectSubset<T, GameListUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameList.
     * @param {GameListUpsertArgs} args - Arguments to update or create a GameList.
     * @example
     * // Update or create a GameList
     * const gameList = await prisma.gameList.upsert({
     *   create: {
     *     // ... data to create a GameList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameList we want to update
     *   }
     * })
    **/
    upsert<T extends GameListUpsertArgs>(
      args: SelectSubset<T, GameListUpsertArgs>
    ): Prisma__GameListClient<GameListGetPayload<T>>

    /**
     * Count the number of GameLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameListCountArgs} args - Arguments to filter GameLists to count.
     * @example
     * // Count the number of GameLists
     * const count = await prisma.gameList.count({
     *   where: {
     *     // ... the filter for the GameLists we want to count
     *   }
     * })
    **/
    count<T extends GameListCountArgs>(
      args?: Subset<T, GameListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameListAggregateArgs>(args: Subset<T, GameListAggregateArgs>): Prisma.PrismaPromise<GetGameListAggregateType<T>>

    /**
     * Group by GameList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameListGroupByArgs} args - Group by arguments.
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
      T extends GameListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameListGroupByArgs['orderBy'] }
        : { orderBy?: GameListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for GameList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GameListClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    gameSession<T extends GameList$gameSessionArgs= {}>(args?: Subset<T, GameList$gameSessionArgs>): Prisma.PrismaPromise<Array<GameSessionGetPayload<T>>| Null>;

    betDetailHistory<T extends GameList$betDetailHistoryArgs= {}>(args?: Subset<T, GameList$betDetailHistoryArgs>): Prisma.PrismaPromise<Array<BetDetailHistoryGetPayload<T>>| Null>;

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
   * GameList base type for findUnique actions
   */
  export type GameListFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the GameList
     */
    select?: GameListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameListInclude | null
    /**
     * Filter, which GameList to fetch.
     */
    where: GameListWhereUniqueInput
  }

  /**
   * GameList findUnique
   */
  export interface GameListFindUniqueArgs extends GameListFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GameList findUniqueOrThrow
   */
  export type GameListFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GameList
     */
    select?: GameListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameListInclude | null
    /**
     * Filter, which GameList to fetch.
     */
    where: GameListWhereUniqueInput
  }


  /**
   * GameList base type for findFirst actions
   */
  export type GameListFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the GameList
     */
    select?: GameListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameListInclude | null
    /**
     * Filter, which GameList to fetch.
     */
    where?: GameListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameLists to fetch.
     */
    orderBy?: Enumerable<GameListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameLists.
     */
    cursor?: GameListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameLists.
     */
    distinct?: Enumerable<GameListScalarFieldEnum>
  }

  /**
   * GameList findFirst
   */
  export interface GameListFindFirstArgs extends GameListFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GameList findFirstOrThrow
   */
  export type GameListFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GameList
     */
    select?: GameListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameListInclude | null
    /**
     * Filter, which GameList to fetch.
     */
    where?: GameListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameLists to fetch.
     */
    orderBy?: Enumerable<GameListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameLists.
     */
    cursor?: GameListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameLists.
     */
    distinct?: Enumerable<GameListScalarFieldEnum>
  }


  /**
   * GameList findMany
   */
  export type GameListFindManyArgs = {
    /**
     * Select specific fields to fetch from the GameList
     */
    select?: GameListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameListInclude | null
    /**
     * Filter, which GameLists to fetch.
     */
    where?: GameListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameLists to fetch.
     */
    orderBy?: Enumerable<GameListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameLists.
     */
    cursor?: GameListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameLists.
     */
    skip?: number
    distinct?: Enumerable<GameListScalarFieldEnum>
  }


  /**
   * GameList create
   */
  export type GameListCreateArgs = {
    /**
     * Select specific fields to fetch from the GameList
     */
    select?: GameListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameListInclude | null
    /**
     * The data needed to create a GameList.
     */
    data: XOR<GameListCreateInput, GameListUncheckedCreateInput>
  }


  /**
   * GameList createMany
   */
  export type GameListCreateManyArgs = {
    /**
     * The data used to create many GameLists.
     */
    data: Enumerable<GameListCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GameList update
   */
  export type GameListUpdateArgs = {
    /**
     * Select specific fields to fetch from the GameList
     */
    select?: GameListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameListInclude | null
    /**
     * The data needed to update a GameList.
     */
    data: XOR<GameListUpdateInput, GameListUncheckedUpdateInput>
    /**
     * Choose, which GameList to update.
     */
    where: GameListWhereUniqueInput
  }


  /**
   * GameList updateMany
   */
  export type GameListUpdateManyArgs = {
    /**
     * The data used to update GameLists.
     */
    data: XOR<GameListUpdateManyMutationInput, GameListUncheckedUpdateManyInput>
    /**
     * Filter which GameLists to update
     */
    where?: GameListWhereInput
  }


  /**
   * GameList upsert
   */
  export type GameListUpsertArgs = {
    /**
     * Select specific fields to fetch from the GameList
     */
    select?: GameListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameListInclude | null
    /**
     * The filter to search for the GameList to update in case it exists.
     */
    where: GameListWhereUniqueInput
    /**
     * In case the GameList found by the `where` argument doesn't exist, create a new GameList with this data.
     */
    create: XOR<GameListCreateInput, GameListUncheckedCreateInput>
    /**
     * In case the GameList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameListUpdateInput, GameListUncheckedUpdateInput>
  }


  /**
   * GameList delete
   */
  export type GameListDeleteArgs = {
    /**
     * Select specific fields to fetch from the GameList
     */
    select?: GameListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameListInclude | null
    /**
     * Filter which GameList to delete.
     */
    where: GameListWhereUniqueInput
  }


  /**
   * GameList deleteMany
   */
  export type GameListDeleteManyArgs = {
    /**
     * Filter which GameLists to delete
     */
    where?: GameListWhereInput
  }


  /**
   * GameList.gameSession
   */
  export type GameList$gameSessionArgs = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude | null
    where?: GameSessionWhereInput
    orderBy?: Enumerable<GameSessionOrderByWithRelationInput>
    cursor?: GameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GameSessionScalarFieldEnum>
  }


  /**
   * GameList.betDetailHistory
   */
  export type GameList$betDetailHistoryArgs = {
    /**
     * Select specific fields to fetch from the BetDetailHistory
     */
    select?: BetDetailHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BetDetailHistoryInclude | null
    where?: BetDetailHistoryWhereInput
    orderBy?: Enumerable<BetDetailHistoryOrderByWithRelationInput>
    cursor?: BetDetailHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BetDetailHistoryScalarFieldEnum>
  }


  /**
   * GameList without action
   */
  export type GameListArgs = {
    /**
     * Select specific fields to fetch from the GameList
     */
    select?: GameListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameListInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ActionHistoryScalarFieldEnum: {
    id: 'id',
    newValueJson: 'newValueJson',
    ip: 'ip',
    createdAt: 'createdAt',
    userId: 'userId',
    agentId: 'agentId',
    adminId: 'adminId'
  };

  export type ActionHistoryScalarFieldEnum = (typeof ActionHistoryScalarFieldEnum)[keyof typeof ActionHistoryScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    accessToken: 'accessToken'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const AgentScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    accessToken: 'accessToken',
    adminId: 'adminId'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const Alembic_versionScalarFieldEnum: {
    version_num: 'version_num'
  };

  export type Alembic_versionScalarFieldEnum = (typeof Alembic_versionScalarFieldEnum)[keyof typeof Alembic_versionScalarFieldEnum]


  export const BalanceScalarFieldEnum: {
    id: 'id',
    balance: 'balance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type BalanceScalarFieldEnum = (typeof BalanceScalarFieldEnum)[keyof typeof BalanceScalarFieldEnum]


  export const BetDetailHistoryScalarFieldEnum: {
    id: 'id',
    beforeScore: 'beforeScore',
    betScore: 'betScore',
    winScore: 'winScore',
    newScore: 'newScore',
    createdAt: 'createdAt',
    ownerId: 'ownerId',
    gameId: 'gameId'
  };

  export type BetDetailHistoryScalarFieldEnum = (typeof BetDetailHistoryScalarFieldEnum)[keyof typeof BetDetailHistoryScalarFieldEnum]


  export const DepositScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    statusId: 'statusId',
    ownerId: 'ownerId'
  };

  export type DepositScalarFieldEnum = (typeof DepositScalarFieldEnum)[keyof typeof DepositScalarFieldEnum]


  export const GameListScalarFieldEnum: {
    id: 'id',
    eGameName: 'eGameName',
    cGameName: 'cGameName',
    type: 'type',
    json: 'json',
    createdAt: 'createdAt'
  };

  export type GameListScalarFieldEnum = (typeof GameListScalarFieldEnum)[keyof typeof GameListScalarFieldEnum]


  export const GameSessionScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    createdAt: 'createdAt'
  };

  export type GameSessionScalarFieldEnum = (typeof GameSessionScalarFieldEnum)[keyof typeof GameSessionScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const PaymentHistoryScalarFieldEnum: {
    id: 'id',
    beforeScore: 'beforeScore',
    changeScore: 'changeScore',
    newScore: 'newScore',
    approval: 'approval',
    createdAt: 'createdAt',
    approvalAt: 'approvalAt',
    ownerId: 'ownerId'
  };

  export type PaymentHistoryScalarFieldEnum = (typeof PaymentHistoryScalarFieldEnum)[keyof typeof PaymentHistoryScalarFieldEnum]


  export const PlayerSessionScalarFieldEnum: {
    id: 'id',
    gameSessionId: 'gameSessionId',
    userId: 'userId',
    betAmount: 'betAmount',
    betLines: 'betLines',
    betResult: 'betResult',
    createdAt: 'createdAt'
  };

  export type PlayerSessionScalarFieldEnum = (typeof PlayerSessionScalarFieldEnum)[keyof typeof PlayerSessionScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const QuotaScalarFieldEnum: {
    id: 'id',
    balance: 'balance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    agentId: 'agentId'
  };

  export type QuotaScalarFieldEnum = (typeof QuotaScalarFieldEnum)[keyof typeof QuotaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StatusScalarFieldEnum: {
    id: 'id',
    approval: 'approval',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    approvedById: 'approvedById'
  };

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]


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
    name: 'name',
    password: 'password',
    headImage: 'headImage',
    active: 'active',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    accessToken: 'accessToken',
    agentId: 'agentId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WithdrawalScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    statusId: 'statusId',
    ownerId: 'ownerId'
  };

  export type WithdrawalScalarFieldEnum = (typeof WithdrawalScalarFieldEnum)[keyof typeof WithdrawalScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: Enumerable<AdminWhereInput>
    OR?: Enumerable<AdminWhereInput>
    NOT?: Enumerable<AdminWhereInput>
    id?: UuidFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    name?: StringFilter | string
    token?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    accessToken?: StringNullableFilter | string | null
    history?: ActionHistoryListRelationFilter
    agent?: AgentListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    history?: ActionHistoryOrderByRelationAggregateInput
    agent?: AgentOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = {
    id?: string
    email?: string
    name?: string
  }

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AdminScalarWhereWithAggregatesInput>
    OR?: Enumerable<AdminScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AdminScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    token?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    accessToken?: StringNullableWithAggregatesFilter | string | null
  }

  export type AgentWhereInput = {
    AND?: Enumerable<AgentWhereInput>
    OR?: Enumerable<AgentWhereInput>
    NOT?: Enumerable<AgentWhereInput>
    id?: UuidFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    name?: StringFilter | string
    active?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    accessToken?: StringNullableFilter | string | null
    adminId?: UuidNullableFilter | string | null
    history?: ActionHistoryListRelationFilter
    createdBy?: XOR<AdminRelationFilter, AdminWhereInput> | null
    users?: UserListRelationFilter
    quota?: QuotaListRelationFilter
    status?: StatusListRelationFilter
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    adminId?: SortOrder
    history?: ActionHistoryOrderByRelationAggregateInput
    createdBy?: AdminOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    quota?: QuotaOrderByRelationAggregateInput
    status?: StatusOrderByRelationAggregateInput
  }

  export type AgentWhereUniqueInput = {
    id?: string
    email?: string
    name?: string
  }

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    adminId?: SortOrder
    _count?: AgentCountOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AgentScalarWhereWithAggregatesInput>
    OR?: Enumerable<AgentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AgentScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    active?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    accessToken?: StringNullableWithAggregatesFilter | string | null
    adminId?: UuidNullableWithAggregatesFilter | string | null
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: UuidFilter | string
    email?: StringFilter | string
    name?: StringFilter | string
    password?: StringFilter | string
    headImage?: StringFilter | string
    active?: BoolFilter | boolean
    token?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    accessToken?: StringNullableFilter | string | null
    agentId?: UuidNullableFilter | string | null
    history?: ActionHistoryListRelationFilter
    balance?: BalanceListRelationFilter
    betDetailHistory?: BetDetailHistoryListRelationFilter
    paymentHistory?: PaymentHistoryListRelationFilter
    playerSession?: PlayerSessionListRelationFilter
    withdrawal?: WithdrawalListRelationFilter
    deposit?: DepositListRelationFilter
    agent?: XOR<AgentRelationFilter, AgentWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    headImage?: SortOrder
    active?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    agentId?: SortOrder
    history?: ActionHistoryOrderByRelationAggregateInput
    balance?: BalanceOrderByRelationAggregateInput
    betDetailHistory?: BetDetailHistoryOrderByRelationAggregateInput
    paymentHistory?: PaymentHistoryOrderByRelationAggregateInput
    playerSession?: PlayerSessionOrderByRelationAggregateInput
    withdrawal?: WithdrawalOrderByRelationAggregateInput
    deposit?: DepositOrderByRelationAggregateInput
    agent?: AgentOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
    name?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    headImage?: SortOrder
    active?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    agentId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    headImage?: StringWithAggregatesFilter | string
    active?: BoolWithAggregatesFilter | boolean
    token?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    accessToken?: StringNullableWithAggregatesFilter | string | null
    agentId?: UuidNullableWithAggregatesFilter | string | null
  }

  export type ActionHistoryWhereInput = {
    AND?: Enumerable<ActionHistoryWhereInput>
    OR?: Enumerable<ActionHistoryWhereInput>
    NOT?: Enumerable<ActionHistoryWhereInput>
    id?: UuidFilter | string
    newValueJson?: JsonNullableFilter
    ip?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    userId?: UuidNullableFilter | string | null
    agentId?: UuidNullableFilter | string | null
    adminId?: UuidNullableFilter | string | null
    admin?: XOR<AdminRelationFilter, AdminWhereInput> | null
    agent?: XOR<AgentRelationFilter, AgentWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type ActionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    newValueJson?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    adminId?: SortOrder
    admin?: AdminOrderByWithRelationInput
    agent?: AgentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ActionHistoryWhereUniqueInput = {
    id?: string
  }

  export type ActionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    newValueJson?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    adminId?: SortOrder
    _count?: ActionHistoryCountOrderByAggregateInput
    _max?: ActionHistoryMaxOrderByAggregateInput
    _min?: ActionHistoryMinOrderByAggregateInput
  }

  export type ActionHistoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ActionHistoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<ActionHistoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ActionHistoryScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    newValueJson?: JsonNullableWithAggregatesFilter
    ip?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: UuidNullableWithAggregatesFilter | string | null
    agentId?: UuidNullableWithAggregatesFilter | string | null
    adminId?: UuidNullableWithAggregatesFilter | string | null
  }

  export type BalanceWhereInput = {
    AND?: Enumerable<BalanceWhereInput>
    OR?: Enumerable<BalanceWhereInput>
    NOT?: Enumerable<BalanceWhereInput>
    id?: UuidFilter | string
    balance?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    ownerId?: UuidFilter | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BalanceOrderByWithRelationInput = {
    id?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type BalanceWhereUniqueInput = {
    id?: string
  }

  export type BalanceOrderByWithAggregationInput = {
    id?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: BalanceCountOrderByAggregateInput
    _avg?: BalanceAvgOrderByAggregateInput
    _max?: BalanceMaxOrderByAggregateInput
    _min?: BalanceMinOrderByAggregateInput
    _sum?: BalanceSumOrderByAggregateInput
  }

  export type BalanceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BalanceScalarWhereWithAggregatesInput>
    OR?: Enumerable<BalanceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BalanceScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    balance?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    ownerId?: UuidWithAggregatesFilter | string
  }

  export type PaymentHistoryWhereInput = {
    AND?: Enumerable<PaymentHistoryWhereInput>
    OR?: Enumerable<PaymentHistoryWhereInput>
    NOT?: Enumerable<PaymentHistoryWhereInput>
    id?: UuidFilter | string
    beforeScore?: IntFilter | number
    changeScore?: IntFilter | number
    newScore?: IntFilter | number
    approval?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    approvalAt?: DateTimeNullableFilter | Date | string | null
    ownerId?: UuidFilter | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PaymentHistoryOrderByWithRelationInput = {
    id?: SortOrder
    beforeScore?: SortOrder
    changeScore?: SortOrder
    newScore?: SortOrder
    approval?: SortOrder
    createdAt?: SortOrder
    approvalAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type PaymentHistoryWhereUniqueInput = {
    id?: string
  }

  export type PaymentHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    beforeScore?: SortOrder
    changeScore?: SortOrder
    newScore?: SortOrder
    approval?: SortOrder
    createdAt?: SortOrder
    approvalAt?: SortOrder
    ownerId?: SortOrder
    _count?: PaymentHistoryCountOrderByAggregateInput
    _avg?: PaymentHistoryAvgOrderByAggregateInput
    _max?: PaymentHistoryMaxOrderByAggregateInput
    _min?: PaymentHistoryMinOrderByAggregateInput
    _sum?: PaymentHistorySumOrderByAggregateInput
  }

  export type PaymentHistoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PaymentHistoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<PaymentHistoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PaymentHistoryScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    beforeScore?: IntWithAggregatesFilter | number
    changeScore?: IntWithAggregatesFilter | number
    newScore?: IntWithAggregatesFilter | number
    approval?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    approvalAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    ownerId?: UuidWithAggregatesFilter | string
  }

  export type BetDetailHistoryWhereInput = {
    AND?: Enumerable<BetDetailHistoryWhereInput>
    OR?: Enumerable<BetDetailHistoryWhereInput>
    NOT?: Enumerable<BetDetailHistoryWhereInput>
    id?: UuidFilter | string
    beforeScore?: IntFilter | number
    betScore?: IntFilter | number
    winScore?: IntFilter | number
    newScore?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    ownerId?: UuidFilter | string
    gameId?: IntFilter | number
    owner?: XOR<UserRelationFilter, UserWhereInput>
    game?: XOR<GameListRelationFilter, GameListWhereInput>
  }

  export type BetDetailHistoryOrderByWithRelationInput = {
    id?: SortOrder
    beforeScore?: SortOrder
    betScore?: SortOrder
    winScore?: SortOrder
    newScore?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
    gameId?: SortOrder
    owner?: UserOrderByWithRelationInput
    game?: GameListOrderByWithRelationInput
  }

  export type BetDetailHistoryWhereUniqueInput = {
    id?: string
  }

  export type BetDetailHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    beforeScore?: SortOrder
    betScore?: SortOrder
    winScore?: SortOrder
    newScore?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
    gameId?: SortOrder
    _count?: BetDetailHistoryCountOrderByAggregateInput
    _avg?: BetDetailHistoryAvgOrderByAggregateInput
    _max?: BetDetailHistoryMaxOrderByAggregateInput
    _min?: BetDetailHistoryMinOrderByAggregateInput
    _sum?: BetDetailHistorySumOrderByAggregateInput
  }

  export type BetDetailHistoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BetDetailHistoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<BetDetailHistoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BetDetailHistoryScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    beforeScore?: IntWithAggregatesFilter | number
    betScore?: IntWithAggregatesFilter | number
    winScore?: IntWithAggregatesFilter | number
    newScore?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    ownerId?: UuidWithAggregatesFilter | string
    gameId?: IntWithAggregatesFilter | number
  }

  export type GameSessionWhereInput = {
    AND?: Enumerable<GameSessionWhereInput>
    OR?: Enumerable<GameSessionWhereInput>
    NOT?: Enumerable<GameSessionWhereInput>
    id?: UuidFilter | string
    gameId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    playerSession?: PlayerSessionListRelationFilter
    game?: XOR<GameListRelationFilter, GameListWhereInput>
  }

  export type GameSessionOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    playerSession?: PlayerSessionOrderByRelationAggregateInput
    game?: GameListOrderByWithRelationInput
  }

  export type GameSessionWhereUniqueInput = {
    id?: string
  }

  export type GameSessionOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    _count?: GameSessionCountOrderByAggregateInput
    _avg?: GameSessionAvgOrderByAggregateInput
    _max?: GameSessionMaxOrderByAggregateInput
    _min?: GameSessionMinOrderByAggregateInput
    _sum?: GameSessionSumOrderByAggregateInput
  }

  export type GameSessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GameSessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<GameSessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GameSessionScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    gameId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PlayerSessionWhereInput = {
    AND?: Enumerable<PlayerSessionWhereInput>
    OR?: Enumerable<PlayerSessionWhereInput>
    NOT?: Enumerable<PlayerSessionWhereInput>
    id?: UuidFilter | string
    gameSessionId?: UuidFilter | string
    userId?: UuidFilter | string
    betAmount?: IntFilter | number
    betLines?: IntFilter | number
    betResult?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    gameSession?: XOR<GameSessionRelationFilter, GameSessionWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PlayerSessionOrderByWithRelationInput = {
    id?: SortOrder
    gameSessionId?: SortOrder
    userId?: SortOrder
    betAmount?: SortOrder
    betLines?: SortOrder
    betResult?: SortOrder
    createdAt?: SortOrder
    gameSession?: GameSessionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PlayerSessionWhereUniqueInput = {
    id?: string
  }

  export type PlayerSessionOrderByWithAggregationInput = {
    id?: SortOrder
    gameSessionId?: SortOrder
    userId?: SortOrder
    betAmount?: SortOrder
    betLines?: SortOrder
    betResult?: SortOrder
    createdAt?: SortOrder
    _count?: PlayerSessionCountOrderByAggregateInput
    _avg?: PlayerSessionAvgOrderByAggregateInput
    _max?: PlayerSessionMaxOrderByAggregateInput
    _min?: PlayerSessionMinOrderByAggregateInput
    _sum?: PlayerSessionSumOrderByAggregateInput
  }

  export type PlayerSessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PlayerSessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<PlayerSessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PlayerSessionScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    gameSessionId?: UuidWithAggregatesFilter | string
    userId?: UuidWithAggregatesFilter | string
    betAmount?: IntWithAggregatesFilter | number
    betLines?: IntWithAggregatesFilter | number
    betResult?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type QuotaWhereInput = {
    AND?: Enumerable<QuotaWhereInput>
    OR?: Enumerable<QuotaWhereInput>
    NOT?: Enumerable<QuotaWhereInput>
    id?: UuidFilter | string
    balance?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    agentId?: UuidFilter | string
    agentQuota?: XOR<AgentRelationFilter, AgentWhereInput>
  }

  export type QuotaOrderByWithRelationInput = {
    id?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agentId?: SortOrder
    agentQuota?: AgentOrderByWithRelationInput
  }

  export type QuotaWhereUniqueInput = {
    id?: string
  }

  export type QuotaOrderByWithAggregationInput = {
    id?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agentId?: SortOrder
    _count?: QuotaCountOrderByAggregateInput
    _avg?: QuotaAvgOrderByAggregateInput
    _max?: QuotaMaxOrderByAggregateInput
    _min?: QuotaMinOrderByAggregateInput
    _sum?: QuotaSumOrderByAggregateInput
  }

  export type QuotaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuotaScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuotaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuotaScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    balance?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    agentId?: UuidWithAggregatesFilter | string
  }

  export type StatusWhereInput = {
    AND?: Enumerable<StatusWhereInput>
    OR?: Enumerable<StatusWhereInput>
    NOT?: Enumerable<StatusWhereInput>
    id?: UuidFilter | string
    approval?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    approvedById?: UuidNullableFilter | string | null
    approvedBy?: XOR<AgentRelationFilter, AgentWhereInput> | null
    withdrawal?: WithdrawalListRelationFilter
    deposit?: DepositListRelationFilter
  }

  export type StatusOrderByWithRelationInput = {
    id?: SortOrder
    approval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    approvedById?: SortOrder
    approvedBy?: AgentOrderByWithRelationInput
    withdrawal?: WithdrawalOrderByRelationAggregateInput
    deposit?: DepositOrderByRelationAggregateInput
  }

  export type StatusWhereUniqueInput = {
    id?: string
  }

  export type StatusOrderByWithAggregationInput = {
    id?: SortOrder
    approval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    approvedById?: SortOrder
    _count?: StatusCountOrderByAggregateInput
    _max?: StatusMaxOrderByAggregateInput
    _min?: StatusMinOrderByAggregateInput
  }

  export type StatusScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StatusScalarWhereWithAggregatesInput>
    OR?: Enumerable<StatusScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StatusScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    approval?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    approvedById?: UuidNullableWithAggregatesFilter | string | null
  }

  export type WithdrawalWhereInput = {
    AND?: Enumerable<WithdrawalWhereInput>
    OR?: Enumerable<WithdrawalWhereInput>
    NOT?: Enumerable<WithdrawalWhereInput>
    id?: UuidFilter | string
    amount?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    statusId?: UuidFilter | string
    ownerId?: UuidFilter | string
    status?: XOR<StatusRelationFilter, StatusWhereInput>
    owner?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WithdrawalOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statusId?: SortOrder
    ownerId?: SortOrder
    status?: StatusOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
  }

  export type WithdrawalWhereUniqueInput = {
    id?: string
  }

  export type WithdrawalOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statusId?: SortOrder
    ownerId?: SortOrder
    _count?: WithdrawalCountOrderByAggregateInput
    _avg?: WithdrawalAvgOrderByAggregateInput
    _max?: WithdrawalMaxOrderByAggregateInput
    _min?: WithdrawalMinOrderByAggregateInput
    _sum?: WithdrawalSumOrderByAggregateInput
  }

  export type WithdrawalScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WithdrawalScalarWhereWithAggregatesInput>
    OR?: Enumerable<WithdrawalScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WithdrawalScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    amount?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    statusId?: UuidWithAggregatesFilter | string
    ownerId?: UuidWithAggregatesFilter | string
  }

  export type DepositWhereInput = {
    AND?: Enumerable<DepositWhereInput>
    OR?: Enumerable<DepositWhereInput>
    NOT?: Enumerable<DepositWhereInput>
    id?: UuidFilter | string
    amount?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    statusId?: UuidFilter | string
    ownerId?: UuidFilter | string
    status?: XOR<StatusRelationFilter, StatusWhereInput>
    owner?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DepositOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statusId?: SortOrder
    ownerId?: SortOrder
    status?: StatusOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
  }

  export type DepositWhereUniqueInput = {
    id?: string
  }

  export type DepositOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statusId?: SortOrder
    ownerId?: SortOrder
    _count?: DepositCountOrderByAggregateInput
    _avg?: DepositAvgOrderByAggregateInput
    _max?: DepositMaxOrderByAggregateInput
    _min?: DepositMinOrderByAggregateInput
    _sum?: DepositSumOrderByAggregateInput
  }

  export type DepositScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DepositScalarWhereWithAggregatesInput>
    OR?: Enumerable<DepositScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DepositScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    amount?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    statusId?: UuidWithAggregatesFilter | string
    ownerId?: UuidWithAggregatesFilter | string
  }

  export type alembic_versionWhereInput = {
    AND?: Enumerable<alembic_versionWhereInput>
    OR?: Enumerable<alembic_versionWhereInput>
    NOT?: Enumerable<alembic_versionWhereInput>
    version_num?: StringFilter | string
  }

  export type alembic_versionOrderByWithRelationInput = {
    version_num?: SortOrder
  }

  export type alembic_versionWhereUniqueInput = {
    version_num?: string
  }

  export type alembic_versionOrderByWithAggregationInput = {
    version_num?: SortOrder
    _count?: alembic_versionCountOrderByAggregateInput
    _max?: alembic_versionMaxOrderByAggregateInput
    _min?: alembic_versionMinOrderByAggregateInput
  }

  export type alembic_versionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<alembic_versionScalarWhereWithAggregatesInput>
    OR?: Enumerable<alembic_versionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<alembic_versionScalarWhereWithAggregatesInput>
    version_num?: StringWithAggregatesFilter | string
  }

  export type GameListWhereInput = {
    AND?: Enumerable<GameListWhereInput>
    OR?: Enumerable<GameListWhereInput>
    NOT?: Enumerable<GameListWhereInput>
    id?: IntFilter | number
    eGameName?: StringFilter | string
    cGameName?: StringFilter | string
    type?: IntNullableFilter | number | null
    json?: JsonNullableFilter
    createdAt?: DateTimeNullableFilter | Date | string | null
    gameSession?: GameSessionListRelationFilter
    betDetailHistory?: BetDetailHistoryListRelationFilter
  }

  export type GameListOrderByWithRelationInput = {
    id?: SortOrder
    eGameName?: SortOrder
    cGameName?: SortOrder
    type?: SortOrder
    json?: SortOrder
    createdAt?: SortOrder
    gameSession?: GameSessionOrderByRelationAggregateInput
    betDetailHistory?: BetDetailHistoryOrderByRelationAggregateInput
  }

  export type GameListWhereUniqueInput = {
    id?: number
  }

  export type GameListOrderByWithAggregationInput = {
    id?: SortOrder
    eGameName?: SortOrder
    cGameName?: SortOrder
    type?: SortOrder
    json?: SortOrder
    createdAt?: SortOrder
    _count?: GameListCountOrderByAggregateInput
    _avg?: GameListAvgOrderByAggregateInput
    _max?: GameListMaxOrderByAggregateInput
    _min?: GameListMinOrderByAggregateInput
    _sum?: GameListSumOrderByAggregateInput
  }

  export type GameListScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GameListScalarWhereWithAggregatesInput>
    OR?: Enumerable<GameListScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GameListScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    eGameName?: StringWithAggregatesFilter | string
    cGameName?: StringWithAggregatesFilter | string
    type?: IntNullableWithAggregatesFilter | number | null
    json?: JsonNullableWithAggregatesFilter
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type AdminCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryCreateNestedManyWithoutAdminInput
    agent?: AgentCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryUncheckedCreateNestedManyWithoutAdminInput
    agent?: AgentUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUpdateManyWithoutAdminNestedInput
    agent?: AgentUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUncheckedUpdateManyWithoutAdminNestedInput
    agent?: AgentUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryCreateNestedManyWithoutAgentInput
    createdBy?: AdminCreateNestedOneWithoutAgentInput
    users?: UserCreateNestedManyWithoutAgentInput
    quota?: QuotaCreateNestedManyWithoutAgentQuotaInput
    status?: StatusCreateNestedManyWithoutApprovedByInput
  }

  export type AgentUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    adminId?: string | null
    history?: ActionHistoryUncheckedCreateNestedManyWithoutAgentInput
    users?: UserUncheckedCreateNestedManyWithoutAgentInput
    quota?: QuotaUncheckedCreateNestedManyWithoutAgentQuotaInput
    status?: StatusUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type AgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUpdateManyWithoutAgentNestedInput
    createdBy?: AdminUpdateOneWithoutAgentNestedInput
    users?: UserUpdateManyWithoutAgentNestedInput
    quota?: QuotaUpdateManyWithoutAgentQuotaNestedInput
    status?: StatusUpdateManyWithoutApprovedByNestedInput
  }

  export type AgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUncheckedUpdateManyWithoutAgentNestedInput
    users?: UserUncheckedUpdateManyWithoutAgentNestedInput
    quota?: QuotaUncheckedUpdateManyWithoutAgentQuotaNestedInput
    status?: StatusUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type AgentCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    adminId?: string | null
  }

  export type AgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryCreateNestedManyWithoutUserInput
    balance?: BalanceCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    playerSession?: PlayerSessionCreateNestedManyWithoutUserInput
    withdrawal?: WithdrawalCreateNestedManyWithoutOwnerInput
    deposit?: DepositCreateNestedManyWithoutOwnerInput
    agent?: AgentCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    agentId?: string | null
    history?: ActionHistoryUncheckedCreateNestedManyWithoutUserInput
    balance?: BalanceUncheckedCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    playerSession?: PlayerSessionUncheckedCreateNestedManyWithoutUserInput
    withdrawal?: WithdrawalUncheckedCreateNestedManyWithoutOwnerInput
    deposit?: DepositUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUpdateManyWithoutUserNestedInput
    balance?: BalanceUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    playerSession?: PlayerSessionUpdateManyWithoutUserNestedInput
    withdrawal?: WithdrawalUpdateManyWithoutOwnerNestedInput
    deposit?: DepositUpdateManyWithoutOwnerNestedInput
    agent?: AgentUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUncheckedUpdateManyWithoutUserNestedInput
    balance?: BalanceUncheckedUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    playerSession?: PlayerSessionUncheckedUpdateManyWithoutUserNestedInput
    withdrawal?: WithdrawalUncheckedUpdateManyWithoutOwnerNestedInput
    deposit?: DepositUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    agentId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActionHistoryCreateInput = {
    id?: string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    admin?: AdminCreateNestedOneWithoutHistoryInput
    agent?: AgentCreateNestedOneWithoutHistoryInput
    user?: UserCreateNestedOneWithoutHistoryInput
  }

  export type ActionHistoryUncheckedCreateInput = {
    id?: string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    userId?: string | null
    agentId?: string | null
    adminId?: string | null
  }

  export type ActionHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutHistoryNestedInput
    agent?: AgentUpdateOneWithoutHistoryNestedInput
    user?: UserUpdateOneWithoutHistoryNestedInput
  }

  export type ActionHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActionHistoryCreateManyInput = {
    id?: string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    userId?: string | null
    agentId?: string | null
    adminId?: string | null
  }

  export type ActionHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BalanceCreateInput = {
    id?: string
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    owner: UserCreateNestedOneWithoutBalanceInput
  }

  export type BalanceUncheckedCreateInput = {
    id?: string
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ownerId: string
  }

  export type BalanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutBalanceNestedInput
  }

  export type BalanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type BalanceCreateManyInput = {
    id?: string
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ownerId: string
  }

  export type BalanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BalanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentHistoryCreateInput = {
    id?: string
    beforeScore: number
    changeScore: number
    newScore: number
    approval?: boolean
    createdAt?: Date | string
    approvalAt?: Date | string | null
    owner: UserCreateNestedOneWithoutPaymentHistoryInput
  }

  export type PaymentHistoryUncheckedCreateInput = {
    id?: string
    beforeScore: number
    changeScore: number
    newScore: number
    approval?: boolean
    createdAt?: Date | string
    approvalAt?: Date | string | null
    ownerId: string
  }

  export type PaymentHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    changeScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    approval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutPaymentHistoryNestedInput
  }

  export type PaymentHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    changeScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    approval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentHistoryCreateManyInput = {
    id?: string
    beforeScore: number
    changeScore: number
    newScore: number
    approval?: boolean
    createdAt?: Date | string
    approvalAt?: Date | string | null
    ownerId: string
  }

  export type PaymentHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    changeScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    approval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    changeScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    approval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type BetDetailHistoryCreateInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutBetDetailHistoryInput
    game: GameListCreateNestedOneWithoutBetDetailHistoryInput
  }

  export type BetDetailHistoryUncheckedCreateInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createdAt?: Date | string
    ownerId: string
    gameId: number
  }

  export type BetDetailHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutBetDetailHistoryNestedInput
    game?: GameListUpdateOneRequiredWithoutBetDetailHistoryNestedInput
  }

  export type BetDetailHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type BetDetailHistoryCreateManyInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createdAt?: Date | string
    ownerId: string
    gameId: number
  }

  export type BetDetailHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetDetailHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type GameSessionCreateInput = {
    id?: string
    createdAt?: Date | string
    playerSession?: PlayerSessionCreateNestedManyWithoutGameSessionInput
    game: GameListCreateNestedOneWithoutGameSessionInput
  }

  export type GameSessionUncheckedCreateInput = {
    id?: string
    gameId: number
    createdAt?: Date | string
    playerSession?: PlayerSessionUncheckedCreateNestedManyWithoutGameSessionInput
  }

  export type GameSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerSession?: PlayerSessionUpdateManyWithoutGameSessionNestedInput
    game?: GameListUpdateOneRequiredWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerSession?: PlayerSessionUncheckedUpdateManyWithoutGameSessionNestedInput
  }

  export type GameSessionCreateManyInput = {
    id?: string
    gameId: number
    createdAt?: Date | string
  }

  export type GameSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerSessionCreateInput = {
    id?: string
    betAmount: number
    betLines: number
    betResult: number
    createdAt?: Date | string
    gameSession: GameSessionCreateNestedOneWithoutPlayerSessionInput
    user: UserCreateNestedOneWithoutPlayerSessionInput
  }

  export type PlayerSessionUncheckedCreateInput = {
    id?: string
    gameSessionId: string
    userId: string
    betAmount: number
    betLines: number
    betResult: number
    createdAt?: Date | string
  }

  export type PlayerSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    betAmount?: IntFieldUpdateOperationsInput | number
    betLines?: IntFieldUpdateOperationsInput | number
    betResult?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameSession?: GameSessionUpdateOneRequiredWithoutPlayerSessionNestedInput
    user?: UserUpdateOneRequiredWithoutPlayerSessionNestedInput
  }

  export type PlayerSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameSessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    betAmount?: IntFieldUpdateOperationsInput | number
    betLines?: IntFieldUpdateOperationsInput | number
    betResult?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerSessionCreateManyInput = {
    id?: string
    gameSessionId: string
    userId: string
    betAmount: number
    betLines: number
    betResult: number
    createdAt?: Date | string
  }

  export type PlayerSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    betAmount?: IntFieldUpdateOperationsInput | number
    betLines?: IntFieldUpdateOperationsInput | number
    betResult?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameSessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    betAmount?: IntFieldUpdateOperationsInput | number
    betLines?: IntFieldUpdateOperationsInput | number
    betResult?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotaCreateInput = {
    id?: string
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    agentQuota: AgentCreateNestedOneWithoutQuotaInput
  }

  export type QuotaUncheckedCreateInput = {
    id?: string
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    agentId: string
  }

  export type QuotaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agentQuota?: AgentUpdateOneRequiredWithoutQuotaNestedInput
  }

  export type QuotaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agentId?: StringFieldUpdateOperationsInput | string
  }

  export type QuotaCreateManyInput = {
    id?: string
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    agentId: string
  }

  export type QuotaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuotaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agentId?: StringFieldUpdateOperationsInput | string
  }

  export type StatusCreateInput = {
    id?: string
    approval?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    approvedBy?: AgentCreateNestedOneWithoutStatusInput
    withdrawal?: WithdrawalCreateNestedManyWithoutStatusInput
    deposit?: DepositCreateNestedManyWithoutStatusInput
  }

  export type StatusUncheckedCreateInput = {
    id?: string
    approval?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    approvedById?: string | null
    withdrawal?: WithdrawalUncheckedCreateNestedManyWithoutStatusInput
    deposit?: DepositUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: AgentUpdateOneWithoutStatusNestedInput
    withdrawal?: WithdrawalUpdateManyWithoutStatusNestedInput
    deposit?: DepositUpdateManyWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawal?: WithdrawalUncheckedUpdateManyWithoutStatusNestedInput
    deposit?: DepositUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type StatusCreateManyInput = {
    id?: string
    approval?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    approvedById?: string | null
  }

  export type StatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WithdrawalCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status: StatusCreateNestedOneWithoutWithdrawalInput
    owner: UserCreateNestedOneWithoutWithdrawalInput
  }

  export type WithdrawalUncheckedCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    statusId: string
    ownerId: string
  }

  export type WithdrawalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StatusUpdateOneRequiredWithoutWithdrawalNestedInput
    owner?: UserUpdateOneRequiredWithoutWithdrawalNestedInput
  }

  export type WithdrawalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type WithdrawalCreateManyInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    statusId: string
    ownerId: string
  }

  export type WithdrawalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type DepositCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status: StatusCreateNestedOneWithoutDepositInput
    owner: UserCreateNestedOneWithoutDepositInput
  }

  export type DepositUncheckedCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    statusId: string
    ownerId: string
  }

  export type DepositUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StatusUpdateOneRequiredWithoutDepositNestedInput
    owner?: UserUpdateOneRequiredWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type DepositCreateManyInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    statusId: string
    ownerId: string
  }

  export type DepositUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepositUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type alembic_versionCreateInput = {
    version_num: string
  }

  export type alembic_versionUncheckedCreateInput = {
    version_num: string
  }

  export type alembic_versionUpdateInput = {
    version_num?: StringFieldUpdateOperationsInput | string
  }

  export type alembic_versionUncheckedUpdateInput = {
    version_num?: StringFieldUpdateOperationsInput | string
  }

  export type alembic_versionCreateManyInput = {
    version_num: string
  }

  export type alembic_versionUpdateManyMutationInput = {
    version_num?: StringFieldUpdateOperationsInput | string
  }

  export type alembic_versionUncheckedUpdateManyInput = {
    version_num?: StringFieldUpdateOperationsInput | string
  }

  export type GameListCreateInput = {
    id: number
    eGameName: string
    cGameName: string
    type?: number | null
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    gameSession?: GameSessionCreateNestedManyWithoutGameInput
    betDetailHistory?: BetDetailHistoryCreateNestedManyWithoutGameInput
  }

  export type GameListUncheckedCreateInput = {
    id: number
    eGameName: string
    cGameName: string
    type?: number | null
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    gameSession?: GameSessionUncheckedCreateNestedManyWithoutGameInput
    betDetailHistory?: BetDetailHistoryUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameListUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eGameName?: StringFieldUpdateOperationsInput | string
    cGameName?: StringFieldUpdateOperationsInput | string
    type?: NullableIntFieldUpdateOperationsInput | number | null
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameSession?: GameSessionUpdateManyWithoutGameNestedInput
    betDetailHistory?: BetDetailHistoryUpdateManyWithoutGameNestedInput
  }

  export type GameListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eGameName?: StringFieldUpdateOperationsInput | string
    cGameName?: StringFieldUpdateOperationsInput | string
    type?: NullableIntFieldUpdateOperationsInput | number | null
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameSession?: GameSessionUncheckedUpdateManyWithoutGameNestedInput
    betDetailHistory?: BetDetailHistoryUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameListCreateManyInput = {
    id: number
    eGameName: string
    cGameName: string
    type?: number | null
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
  }

  export type GameListUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    eGameName?: StringFieldUpdateOperationsInput | string
    cGameName?: StringFieldUpdateOperationsInput | string
    type?: NullableIntFieldUpdateOperationsInput | number | null
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GameListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eGameName?: StringFieldUpdateOperationsInput | string
    cGameName?: StringFieldUpdateOperationsInput | string
    type?: NullableIntFieldUpdateOperationsInput | number | null
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
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
    mode?: QueryMode
    not?: NestedStringFilter | string
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
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
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

  export type ActionHistoryListRelationFilter = {
    every?: ActionHistoryWhereInput
    some?: ActionHistoryWhereInput
    none?: ActionHistoryWhereInput
  }

  export type AgentListRelationFilter = {
    every?: AgentWhereInput
    some?: AgentWhereInput
    none?: AgentWhereInput
  }

  export type ActionHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
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
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
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
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
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

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UuidNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidNullableFilter | string | null
  }

  export type AdminRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type QuotaListRelationFilter = {
    every?: QuotaWhereInput
    some?: QuotaWhereInput
    none?: QuotaWhereInput
  }

  export type StatusListRelationFilter = {
    every?: StatusWhereInput
    some?: StatusWhereInput
    none?: StatusWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuotaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    adminId?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    adminId?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    adminId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type UuidNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BalanceListRelationFilter = {
    every?: BalanceWhereInput
    some?: BalanceWhereInput
    none?: BalanceWhereInput
  }

  export type BetDetailHistoryListRelationFilter = {
    every?: BetDetailHistoryWhereInput
    some?: BetDetailHistoryWhereInput
    none?: BetDetailHistoryWhereInput
  }

  export type PaymentHistoryListRelationFilter = {
    every?: PaymentHistoryWhereInput
    some?: PaymentHistoryWhereInput
    none?: PaymentHistoryWhereInput
  }

  export type PlayerSessionListRelationFilter = {
    every?: PlayerSessionWhereInput
    some?: PlayerSessionWhereInput
    none?: PlayerSessionWhereInput
  }

  export type WithdrawalListRelationFilter = {
    every?: WithdrawalWhereInput
    some?: WithdrawalWhereInput
    none?: WithdrawalWhereInput
  }

  export type DepositListRelationFilter = {
    every?: DepositWhereInput
    some?: DepositWhereInput
    none?: DepositWhereInput
  }

  export type AgentRelationFilter = {
    is?: AgentWhereInput | null
    isNot?: AgentWhereInput | null
  }

  export type BalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BetDetailHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WithdrawalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepositOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    headImage?: SortOrder
    active?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    agentId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    headImage?: SortOrder
    active?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    agentId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    headImage?: SortOrder
    active?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    agentId?: SortOrder
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ActionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    newValueJson?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    adminId?: SortOrder
  }

  export type ActionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    adminId?: SortOrder
  }

  export type ActionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    adminId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
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

  export type BalanceCountOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type BalanceAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type BalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type BalanceMinOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type BalanceSumOrderByAggregateInput = {
    balance?: SortOrder
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

  export type PaymentHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    beforeScore?: SortOrder
    changeScore?: SortOrder
    newScore?: SortOrder
    approval?: SortOrder
    createdAt?: SortOrder
    approvalAt?: SortOrder
    ownerId?: SortOrder
  }

  export type PaymentHistoryAvgOrderByAggregateInput = {
    beforeScore?: SortOrder
    changeScore?: SortOrder
    newScore?: SortOrder
  }

  export type PaymentHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    beforeScore?: SortOrder
    changeScore?: SortOrder
    newScore?: SortOrder
    approval?: SortOrder
    createdAt?: SortOrder
    approvalAt?: SortOrder
    ownerId?: SortOrder
  }

  export type PaymentHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    beforeScore?: SortOrder
    changeScore?: SortOrder
    newScore?: SortOrder
    approval?: SortOrder
    createdAt?: SortOrder
    approvalAt?: SortOrder
    ownerId?: SortOrder
  }

  export type PaymentHistorySumOrderByAggregateInput = {
    beforeScore?: SortOrder
    changeScore?: SortOrder
    newScore?: SortOrder
  }

  export type GameListRelationFilter = {
    is?: GameListWhereInput
    isNot?: GameListWhereInput
  }

  export type BetDetailHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    beforeScore?: SortOrder
    betScore?: SortOrder
    winScore?: SortOrder
    newScore?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
    gameId?: SortOrder
  }

  export type BetDetailHistoryAvgOrderByAggregateInput = {
    beforeScore?: SortOrder
    betScore?: SortOrder
    winScore?: SortOrder
    newScore?: SortOrder
    gameId?: SortOrder
  }

  export type BetDetailHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    beforeScore?: SortOrder
    betScore?: SortOrder
    winScore?: SortOrder
    newScore?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
    gameId?: SortOrder
  }

  export type BetDetailHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    beforeScore?: SortOrder
    betScore?: SortOrder
    winScore?: SortOrder
    newScore?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
    gameId?: SortOrder
  }

  export type BetDetailHistorySumOrderByAggregateInput = {
    beforeScore?: SortOrder
    betScore?: SortOrder
    winScore?: SortOrder
    newScore?: SortOrder
    gameId?: SortOrder
  }

  export type GameSessionCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
  }

  export type GameSessionAvgOrderByAggregateInput = {
    gameId?: SortOrder
  }

  export type GameSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
  }

  export type GameSessionMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
  }

  export type GameSessionSumOrderByAggregateInput = {
    gameId?: SortOrder
  }

  export type GameSessionRelationFilter = {
    is?: GameSessionWhereInput
    isNot?: GameSessionWhereInput
  }

  export type PlayerSessionCountOrderByAggregateInput = {
    id?: SortOrder
    gameSessionId?: SortOrder
    userId?: SortOrder
    betAmount?: SortOrder
    betLines?: SortOrder
    betResult?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerSessionAvgOrderByAggregateInput = {
    betAmount?: SortOrder
    betLines?: SortOrder
    betResult?: SortOrder
  }

  export type PlayerSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    gameSessionId?: SortOrder
    userId?: SortOrder
    betAmount?: SortOrder
    betLines?: SortOrder
    betResult?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerSessionMinOrderByAggregateInput = {
    id?: SortOrder
    gameSessionId?: SortOrder
    userId?: SortOrder
    betAmount?: SortOrder
    betLines?: SortOrder
    betResult?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerSessionSumOrderByAggregateInput = {
    betAmount?: SortOrder
    betLines?: SortOrder
    betResult?: SortOrder
  }

  export type QuotaCountOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agentId?: SortOrder
  }

  export type QuotaAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type QuotaMaxOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agentId?: SortOrder
  }

  export type QuotaMinOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agentId?: SortOrder
  }

  export type QuotaSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type StatusCountOrderByAggregateInput = {
    id?: SortOrder
    approval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    approvedById?: SortOrder
  }

  export type StatusMaxOrderByAggregateInput = {
    id?: SortOrder
    approval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    approvedById?: SortOrder
  }

  export type StatusMinOrderByAggregateInput = {
    id?: SortOrder
    approval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    approvedById?: SortOrder
  }

  export type StatusRelationFilter = {
    is?: StatusWhereInput
    isNot?: StatusWhereInput
  }

  export type WithdrawalCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statusId?: SortOrder
    ownerId?: SortOrder
  }

  export type WithdrawalAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WithdrawalMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statusId?: SortOrder
    ownerId?: SortOrder
  }

  export type WithdrawalMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statusId?: SortOrder
    ownerId?: SortOrder
  }

  export type WithdrawalSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DepositCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statusId?: SortOrder
    ownerId?: SortOrder
  }

  export type DepositAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DepositMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statusId?: SortOrder
    ownerId?: SortOrder
  }

  export type DepositMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statusId?: SortOrder
    ownerId?: SortOrder
  }

  export type DepositSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type alembic_versionCountOrderByAggregateInput = {
    version_num?: SortOrder
  }

  export type alembic_versionMaxOrderByAggregateInput = {
    version_num?: SortOrder
  }

  export type alembic_versionMinOrderByAggregateInput = {
    version_num?: SortOrder
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

  export type GameSessionListRelationFilter = {
    every?: GameSessionWhereInput
    some?: GameSessionWhereInput
    none?: GameSessionWhereInput
  }

  export type GameSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameListCountOrderByAggregateInput = {
    id?: SortOrder
    eGameName?: SortOrder
    cGameName?: SortOrder
    type?: SortOrder
    json?: SortOrder
    createdAt?: SortOrder
  }

  export type GameListAvgOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type GameListMaxOrderByAggregateInput = {
    id?: SortOrder
    eGameName?: SortOrder
    cGameName?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type GameListMinOrderByAggregateInput = {
    id?: SortOrder
    eGameName?: SortOrder
    cGameName?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type GameListSumOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
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

  export type ActionHistoryCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<ActionHistoryCreateWithoutAdminInput>, Enumerable<ActionHistoryUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<ActionHistoryCreateOrConnectWithoutAdminInput>
    createMany?: ActionHistoryCreateManyAdminInputEnvelope
    connect?: Enumerable<ActionHistoryWhereUniqueInput>
  }

  export type AgentCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<AgentCreateWithoutCreatedByInput>, Enumerable<AgentUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<AgentCreateOrConnectWithoutCreatedByInput>
    createMany?: AgentCreateManyCreatedByInputEnvelope
    connect?: Enumerable<AgentWhereUniqueInput>
  }

  export type ActionHistoryUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<ActionHistoryCreateWithoutAdminInput>, Enumerable<ActionHistoryUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<ActionHistoryCreateOrConnectWithoutAdminInput>
    createMany?: ActionHistoryCreateManyAdminInputEnvelope
    connect?: Enumerable<ActionHistoryWhereUniqueInput>
  }

  export type AgentUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<AgentCreateWithoutCreatedByInput>, Enumerable<AgentUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<AgentCreateOrConnectWithoutCreatedByInput>
    createMany?: AgentCreateManyCreatedByInputEnvelope
    connect?: Enumerable<AgentWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ActionHistoryUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<ActionHistoryCreateWithoutAdminInput>, Enumerable<ActionHistoryUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<ActionHistoryCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<ActionHistoryUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: ActionHistoryCreateManyAdminInputEnvelope
    set?: Enumerable<ActionHistoryWhereUniqueInput>
    disconnect?: Enumerable<ActionHistoryWhereUniqueInput>
    delete?: Enumerable<ActionHistoryWhereUniqueInput>
    connect?: Enumerable<ActionHistoryWhereUniqueInput>
    update?: Enumerable<ActionHistoryUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<ActionHistoryUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<ActionHistoryScalarWhereInput>
  }

  export type AgentUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Enumerable<AgentCreateWithoutCreatedByInput>, Enumerable<AgentUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<AgentCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<AgentUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: AgentCreateManyCreatedByInputEnvelope
    set?: Enumerable<AgentWhereUniqueInput>
    disconnect?: Enumerable<AgentWhereUniqueInput>
    delete?: Enumerable<AgentWhereUniqueInput>
    connect?: Enumerable<AgentWhereUniqueInput>
    update?: Enumerable<AgentUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<AgentUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<AgentScalarWhereInput>
  }

  export type ActionHistoryUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<ActionHistoryCreateWithoutAdminInput>, Enumerable<ActionHistoryUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<ActionHistoryCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<ActionHistoryUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: ActionHistoryCreateManyAdminInputEnvelope
    set?: Enumerable<ActionHistoryWhereUniqueInput>
    disconnect?: Enumerable<ActionHistoryWhereUniqueInput>
    delete?: Enumerable<ActionHistoryWhereUniqueInput>
    connect?: Enumerable<ActionHistoryWhereUniqueInput>
    update?: Enumerable<ActionHistoryUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<ActionHistoryUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<ActionHistoryScalarWhereInput>
  }

  export type AgentUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Enumerable<AgentCreateWithoutCreatedByInput>, Enumerable<AgentUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<AgentCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<AgentUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: AgentCreateManyCreatedByInputEnvelope
    set?: Enumerable<AgentWhereUniqueInput>
    disconnect?: Enumerable<AgentWhereUniqueInput>
    delete?: Enumerable<AgentWhereUniqueInput>
    connect?: Enumerable<AgentWhereUniqueInput>
    update?: Enumerable<AgentUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<AgentUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<AgentScalarWhereInput>
  }

  export type ActionHistoryCreateNestedManyWithoutAgentInput = {
    create?: XOR<Enumerable<ActionHistoryCreateWithoutAgentInput>, Enumerable<ActionHistoryUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<ActionHistoryCreateOrConnectWithoutAgentInput>
    createMany?: ActionHistoryCreateManyAgentInputEnvelope
    connect?: Enumerable<ActionHistoryWhereUniqueInput>
  }

  export type AdminCreateNestedOneWithoutAgentInput = {
    create?: XOR<AdminCreateWithoutAgentInput, AdminUncheckedCreateWithoutAgentInput>
    connectOrCreate?: AdminCreateOrConnectWithoutAgentInput
    connect?: AdminWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutAgentInput = {
    create?: XOR<Enumerable<UserCreateWithoutAgentInput>, Enumerable<UserUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAgentInput>
    createMany?: UserCreateManyAgentInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type QuotaCreateNestedManyWithoutAgentQuotaInput = {
    create?: XOR<Enumerable<QuotaCreateWithoutAgentQuotaInput>, Enumerable<QuotaUncheckedCreateWithoutAgentQuotaInput>>
    connectOrCreate?: Enumerable<QuotaCreateOrConnectWithoutAgentQuotaInput>
    createMany?: QuotaCreateManyAgentQuotaInputEnvelope
    connect?: Enumerable<QuotaWhereUniqueInput>
  }

  export type StatusCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<Enumerable<StatusCreateWithoutApprovedByInput>, Enumerable<StatusUncheckedCreateWithoutApprovedByInput>>
    connectOrCreate?: Enumerable<StatusCreateOrConnectWithoutApprovedByInput>
    createMany?: StatusCreateManyApprovedByInputEnvelope
    connect?: Enumerable<StatusWhereUniqueInput>
  }

  export type ActionHistoryUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<Enumerable<ActionHistoryCreateWithoutAgentInput>, Enumerable<ActionHistoryUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<ActionHistoryCreateOrConnectWithoutAgentInput>
    createMany?: ActionHistoryCreateManyAgentInputEnvelope
    connect?: Enumerable<ActionHistoryWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<Enumerable<UserCreateWithoutAgentInput>, Enumerable<UserUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAgentInput>
    createMany?: UserCreateManyAgentInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type QuotaUncheckedCreateNestedManyWithoutAgentQuotaInput = {
    create?: XOR<Enumerable<QuotaCreateWithoutAgentQuotaInput>, Enumerable<QuotaUncheckedCreateWithoutAgentQuotaInput>>
    connectOrCreate?: Enumerable<QuotaCreateOrConnectWithoutAgentQuotaInput>
    createMany?: QuotaCreateManyAgentQuotaInputEnvelope
    connect?: Enumerable<QuotaWhereUniqueInput>
  }

  export type StatusUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<Enumerable<StatusCreateWithoutApprovedByInput>, Enumerable<StatusUncheckedCreateWithoutApprovedByInput>>
    connectOrCreate?: Enumerable<StatusCreateOrConnectWithoutApprovedByInput>
    createMany?: StatusCreateManyApprovedByInputEnvelope
    connect?: Enumerable<StatusWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ActionHistoryUpdateManyWithoutAgentNestedInput = {
    create?: XOR<Enumerable<ActionHistoryCreateWithoutAgentInput>, Enumerable<ActionHistoryUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<ActionHistoryCreateOrConnectWithoutAgentInput>
    upsert?: Enumerable<ActionHistoryUpsertWithWhereUniqueWithoutAgentInput>
    createMany?: ActionHistoryCreateManyAgentInputEnvelope
    set?: Enumerable<ActionHistoryWhereUniqueInput>
    disconnect?: Enumerable<ActionHistoryWhereUniqueInput>
    delete?: Enumerable<ActionHistoryWhereUniqueInput>
    connect?: Enumerable<ActionHistoryWhereUniqueInput>
    update?: Enumerable<ActionHistoryUpdateWithWhereUniqueWithoutAgentInput>
    updateMany?: Enumerable<ActionHistoryUpdateManyWithWhereWithoutAgentInput>
    deleteMany?: Enumerable<ActionHistoryScalarWhereInput>
  }

  export type AdminUpdateOneWithoutAgentNestedInput = {
    create?: XOR<AdminCreateWithoutAgentInput, AdminUncheckedCreateWithoutAgentInput>
    connectOrCreate?: AdminCreateOrConnectWithoutAgentInput
    upsert?: AdminUpsertWithoutAgentInput
    disconnect?: boolean
    delete?: boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<AdminUpdateWithoutAgentInput, AdminUncheckedUpdateWithoutAgentInput>
  }

  export type UserUpdateManyWithoutAgentNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutAgentInput>, Enumerable<UserUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAgentInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutAgentInput>
    createMany?: UserCreateManyAgentInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutAgentInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutAgentInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type QuotaUpdateManyWithoutAgentQuotaNestedInput = {
    create?: XOR<Enumerable<QuotaCreateWithoutAgentQuotaInput>, Enumerable<QuotaUncheckedCreateWithoutAgentQuotaInput>>
    connectOrCreate?: Enumerable<QuotaCreateOrConnectWithoutAgentQuotaInput>
    upsert?: Enumerable<QuotaUpsertWithWhereUniqueWithoutAgentQuotaInput>
    createMany?: QuotaCreateManyAgentQuotaInputEnvelope
    set?: Enumerable<QuotaWhereUniqueInput>
    disconnect?: Enumerable<QuotaWhereUniqueInput>
    delete?: Enumerable<QuotaWhereUniqueInput>
    connect?: Enumerable<QuotaWhereUniqueInput>
    update?: Enumerable<QuotaUpdateWithWhereUniqueWithoutAgentQuotaInput>
    updateMany?: Enumerable<QuotaUpdateManyWithWhereWithoutAgentQuotaInput>
    deleteMany?: Enumerable<QuotaScalarWhereInput>
  }

  export type StatusUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<Enumerable<StatusCreateWithoutApprovedByInput>, Enumerable<StatusUncheckedCreateWithoutApprovedByInput>>
    connectOrCreate?: Enumerable<StatusCreateOrConnectWithoutApprovedByInput>
    upsert?: Enumerable<StatusUpsertWithWhereUniqueWithoutApprovedByInput>
    createMany?: StatusCreateManyApprovedByInputEnvelope
    set?: Enumerable<StatusWhereUniqueInput>
    disconnect?: Enumerable<StatusWhereUniqueInput>
    delete?: Enumerable<StatusWhereUniqueInput>
    connect?: Enumerable<StatusWhereUniqueInput>
    update?: Enumerable<StatusUpdateWithWhereUniqueWithoutApprovedByInput>
    updateMany?: Enumerable<StatusUpdateManyWithWhereWithoutApprovedByInput>
    deleteMany?: Enumerable<StatusScalarWhereInput>
  }

  export type ActionHistoryUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<Enumerable<ActionHistoryCreateWithoutAgentInput>, Enumerable<ActionHistoryUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<ActionHistoryCreateOrConnectWithoutAgentInput>
    upsert?: Enumerable<ActionHistoryUpsertWithWhereUniqueWithoutAgentInput>
    createMany?: ActionHistoryCreateManyAgentInputEnvelope
    set?: Enumerable<ActionHistoryWhereUniqueInput>
    disconnect?: Enumerable<ActionHistoryWhereUniqueInput>
    delete?: Enumerable<ActionHistoryWhereUniqueInput>
    connect?: Enumerable<ActionHistoryWhereUniqueInput>
    update?: Enumerable<ActionHistoryUpdateWithWhereUniqueWithoutAgentInput>
    updateMany?: Enumerable<ActionHistoryUpdateManyWithWhereWithoutAgentInput>
    deleteMany?: Enumerable<ActionHistoryScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutAgentInput>, Enumerable<UserUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAgentInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutAgentInput>
    createMany?: UserCreateManyAgentInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutAgentInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutAgentInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type QuotaUncheckedUpdateManyWithoutAgentQuotaNestedInput = {
    create?: XOR<Enumerable<QuotaCreateWithoutAgentQuotaInput>, Enumerable<QuotaUncheckedCreateWithoutAgentQuotaInput>>
    connectOrCreate?: Enumerable<QuotaCreateOrConnectWithoutAgentQuotaInput>
    upsert?: Enumerable<QuotaUpsertWithWhereUniqueWithoutAgentQuotaInput>
    createMany?: QuotaCreateManyAgentQuotaInputEnvelope
    set?: Enumerable<QuotaWhereUniqueInput>
    disconnect?: Enumerable<QuotaWhereUniqueInput>
    delete?: Enumerable<QuotaWhereUniqueInput>
    connect?: Enumerable<QuotaWhereUniqueInput>
    update?: Enumerable<QuotaUpdateWithWhereUniqueWithoutAgentQuotaInput>
    updateMany?: Enumerable<QuotaUpdateManyWithWhereWithoutAgentQuotaInput>
    deleteMany?: Enumerable<QuotaScalarWhereInput>
  }

  export type StatusUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<Enumerable<StatusCreateWithoutApprovedByInput>, Enumerable<StatusUncheckedCreateWithoutApprovedByInput>>
    connectOrCreate?: Enumerable<StatusCreateOrConnectWithoutApprovedByInput>
    upsert?: Enumerable<StatusUpsertWithWhereUniqueWithoutApprovedByInput>
    createMany?: StatusCreateManyApprovedByInputEnvelope
    set?: Enumerable<StatusWhereUniqueInput>
    disconnect?: Enumerable<StatusWhereUniqueInput>
    delete?: Enumerable<StatusWhereUniqueInput>
    connect?: Enumerable<StatusWhereUniqueInput>
    update?: Enumerable<StatusUpdateWithWhereUniqueWithoutApprovedByInput>
    updateMany?: Enumerable<StatusUpdateManyWithWhereWithoutApprovedByInput>
    deleteMany?: Enumerable<StatusScalarWhereInput>
  }

  export type ActionHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ActionHistoryCreateWithoutUserInput>, Enumerable<ActionHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ActionHistoryCreateOrConnectWithoutUserInput>
    createMany?: ActionHistoryCreateManyUserInputEnvelope
    connect?: Enumerable<ActionHistoryWhereUniqueInput>
  }

  export type BalanceCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<BalanceCreateWithoutOwnerInput>, Enumerable<BalanceUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<BalanceCreateOrConnectWithoutOwnerInput>
    createMany?: BalanceCreateManyOwnerInputEnvelope
    connect?: Enumerable<BalanceWhereUniqueInput>
  }

  export type BetDetailHistoryCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<BetDetailHistoryCreateWithoutOwnerInput>, Enumerable<BetDetailHistoryUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<BetDetailHistoryCreateOrConnectWithoutOwnerInput>
    createMany?: BetDetailHistoryCreateManyOwnerInputEnvelope
    connect?: Enumerable<BetDetailHistoryWhereUniqueInput>
  }

  export type PaymentHistoryCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<PaymentHistoryCreateWithoutOwnerInput>, Enumerable<PaymentHistoryUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<PaymentHistoryCreateOrConnectWithoutOwnerInput>
    createMany?: PaymentHistoryCreateManyOwnerInputEnvelope
    connect?: Enumerable<PaymentHistoryWhereUniqueInput>
  }

  export type PlayerSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PlayerSessionCreateWithoutUserInput>, Enumerable<PlayerSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PlayerSessionCreateOrConnectWithoutUserInput>
    createMany?: PlayerSessionCreateManyUserInputEnvelope
    connect?: Enumerable<PlayerSessionWhereUniqueInput>
  }

  export type WithdrawalCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<WithdrawalCreateWithoutOwnerInput>, Enumerable<WithdrawalUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<WithdrawalCreateOrConnectWithoutOwnerInput>
    createMany?: WithdrawalCreateManyOwnerInputEnvelope
    connect?: Enumerable<WithdrawalWhereUniqueInput>
  }

  export type DepositCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<DepositCreateWithoutOwnerInput>, Enumerable<DepositUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<DepositCreateOrConnectWithoutOwnerInput>
    createMany?: DepositCreateManyOwnerInputEnvelope
    connect?: Enumerable<DepositWhereUniqueInput>
  }

  export type AgentCreateNestedOneWithoutUsersInput = {
    create?: XOR<AgentCreateWithoutUsersInput, AgentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AgentCreateOrConnectWithoutUsersInput
    connect?: AgentWhereUniqueInput
  }

  export type ActionHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ActionHistoryCreateWithoutUserInput>, Enumerable<ActionHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ActionHistoryCreateOrConnectWithoutUserInput>
    createMany?: ActionHistoryCreateManyUserInputEnvelope
    connect?: Enumerable<ActionHistoryWhereUniqueInput>
  }

  export type BalanceUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<BalanceCreateWithoutOwnerInput>, Enumerable<BalanceUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<BalanceCreateOrConnectWithoutOwnerInput>
    createMany?: BalanceCreateManyOwnerInputEnvelope
    connect?: Enumerable<BalanceWhereUniqueInput>
  }

  export type BetDetailHistoryUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<BetDetailHistoryCreateWithoutOwnerInput>, Enumerable<BetDetailHistoryUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<BetDetailHistoryCreateOrConnectWithoutOwnerInput>
    createMany?: BetDetailHistoryCreateManyOwnerInputEnvelope
    connect?: Enumerable<BetDetailHistoryWhereUniqueInput>
  }

  export type PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<PaymentHistoryCreateWithoutOwnerInput>, Enumerable<PaymentHistoryUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<PaymentHistoryCreateOrConnectWithoutOwnerInput>
    createMany?: PaymentHistoryCreateManyOwnerInputEnvelope
    connect?: Enumerable<PaymentHistoryWhereUniqueInput>
  }

  export type PlayerSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PlayerSessionCreateWithoutUserInput>, Enumerable<PlayerSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PlayerSessionCreateOrConnectWithoutUserInput>
    createMany?: PlayerSessionCreateManyUserInputEnvelope
    connect?: Enumerable<PlayerSessionWhereUniqueInput>
  }

  export type WithdrawalUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<WithdrawalCreateWithoutOwnerInput>, Enumerable<WithdrawalUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<WithdrawalCreateOrConnectWithoutOwnerInput>
    createMany?: WithdrawalCreateManyOwnerInputEnvelope
    connect?: Enumerable<WithdrawalWhereUniqueInput>
  }

  export type DepositUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<DepositCreateWithoutOwnerInput>, Enumerable<DepositUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<DepositCreateOrConnectWithoutOwnerInput>
    createMany?: DepositCreateManyOwnerInputEnvelope
    connect?: Enumerable<DepositWhereUniqueInput>
  }

  export type ActionHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ActionHistoryCreateWithoutUserInput>, Enumerable<ActionHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ActionHistoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ActionHistoryUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ActionHistoryCreateManyUserInputEnvelope
    set?: Enumerable<ActionHistoryWhereUniqueInput>
    disconnect?: Enumerable<ActionHistoryWhereUniqueInput>
    delete?: Enumerable<ActionHistoryWhereUniqueInput>
    connect?: Enumerable<ActionHistoryWhereUniqueInput>
    update?: Enumerable<ActionHistoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ActionHistoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ActionHistoryScalarWhereInput>
  }

  export type BalanceUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<BalanceCreateWithoutOwnerInput>, Enumerable<BalanceUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<BalanceCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<BalanceUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: BalanceCreateManyOwnerInputEnvelope
    set?: Enumerable<BalanceWhereUniqueInput>
    disconnect?: Enumerable<BalanceWhereUniqueInput>
    delete?: Enumerable<BalanceWhereUniqueInput>
    connect?: Enumerable<BalanceWhereUniqueInput>
    update?: Enumerable<BalanceUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<BalanceUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<BalanceScalarWhereInput>
  }

  export type BetDetailHistoryUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<BetDetailHistoryCreateWithoutOwnerInput>, Enumerable<BetDetailHistoryUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<BetDetailHistoryCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<BetDetailHistoryUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: BetDetailHistoryCreateManyOwnerInputEnvelope
    set?: Enumerable<BetDetailHistoryWhereUniqueInput>
    disconnect?: Enumerable<BetDetailHistoryWhereUniqueInput>
    delete?: Enumerable<BetDetailHistoryWhereUniqueInput>
    connect?: Enumerable<BetDetailHistoryWhereUniqueInput>
    update?: Enumerable<BetDetailHistoryUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<BetDetailHistoryUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<BetDetailHistoryScalarWhereInput>
  }

  export type PaymentHistoryUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<PaymentHistoryCreateWithoutOwnerInput>, Enumerable<PaymentHistoryUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<PaymentHistoryCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<PaymentHistoryUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: PaymentHistoryCreateManyOwnerInputEnvelope
    set?: Enumerable<PaymentHistoryWhereUniqueInput>
    disconnect?: Enumerable<PaymentHistoryWhereUniqueInput>
    delete?: Enumerable<PaymentHistoryWhereUniqueInput>
    connect?: Enumerable<PaymentHistoryWhereUniqueInput>
    update?: Enumerable<PaymentHistoryUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<PaymentHistoryUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<PaymentHistoryScalarWhereInput>
  }

  export type PlayerSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PlayerSessionCreateWithoutUserInput>, Enumerable<PlayerSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PlayerSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PlayerSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PlayerSessionCreateManyUserInputEnvelope
    set?: Enumerable<PlayerSessionWhereUniqueInput>
    disconnect?: Enumerable<PlayerSessionWhereUniqueInput>
    delete?: Enumerable<PlayerSessionWhereUniqueInput>
    connect?: Enumerable<PlayerSessionWhereUniqueInput>
    update?: Enumerable<PlayerSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PlayerSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PlayerSessionScalarWhereInput>
  }

  export type WithdrawalUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<WithdrawalCreateWithoutOwnerInput>, Enumerable<WithdrawalUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<WithdrawalCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<WithdrawalUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: WithdrawalCreateManyOwnerInputEnvelope
    set?: Enumerable<WithdrawalWhereUniqueInput>
    disconnect?: Enumerable<WithdrawalWhereUniqueInput>
    delete?: Enumerable<WithdrawalWhereUniqueInput>
    connect?: Enumerable<WithdrawalWhereUniqueInput>
    update?: Enumerable<WithdrawalUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<WithdrawalUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<WithdrawalScalarWhereInput>
  }

  export type DepositUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<DepositCreateWithoutOwnerInput>, Enumerable<DepositUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<DepositCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<DepositUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: DepositCreateManyOwnerInputEnvelope
    set?: Enumerable<DepositWhereUniqueInput>
    disconnect?: Enumerable<DepositWhereUniqueInput>
    delete?: Enumerable<DepositWhereUniqueInput>
    connect?: Enumerable<DepositWhereUniqueInput>
    update?: Enumerable<DepositUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<DepositUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<DepositScalarWhereInput>
  }

  export type AgentUpdateOneWithoutUsersNestedInput = {
    create?: XOR<AgentCreateWithoutUsersInput, AgentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AgentCreateOrConnectWithoutUsersInput
    upsert?: AgentUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: AgentWhereUniqueInput
    update?: XOR<AgentUpdateWithoutUsersInput, AgentUncheckedUpdateWithoutUsersInput>
  }

  export type ActionHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ActionHistoryCreateWithoutUserInput>, Enumerable<ActionHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ActionHistoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ActionHistoryUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ActionHistoryCreateManyUserInputEnvelope
    set?: Enumerable<ActionHistoryWhereUniqueInput>
    disconnect?: Enumerable<ActionHistoryWhereUniqueInput>
    delete?: Enumerable<ActionHistoryWhereUniqueInput>
    connect?: Enumerable<ActionHistoryWhereUniqueInput>
    update?: Enumerable<ActionHistoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ActionHistoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ActionHistoryScalarWhereInput>
  }

  export type BalanceUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<BalanceCreateWithoutOwnerInput>, Enumerable<BalanceUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<BalanceCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<BalanceUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: BalanceCreateManyOwnerInputEnvelope
    set?: Enumerable<BalanceWhereUniqueInput>
    disconnect?: Enumerable<BalanceWhereUniqueInput>
    delete?: Enumerable<BalanceWhereUniqueInput>
    connect?: Enumerable<BalanceWhereUniqueInput>
    update?: Enumerable<BalanceUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<BalanceUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<BalanceScalarWhereInput>
  }

  export type BetDetailHistoryUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<BetDetailHistoryCreateWithoutOwnerInput>, Enumerable<BetDetailHistoryUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<BetDetailHistoryCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<BetDetailHistoryUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: BetDetailHistoryCreateManyOwnerInputEnvelope
    set?: Enumerable<BetDetailHistoryWhereUniqueInput>
    disconnect?: Enumerable<BetDetailHistoryWhereUniqueInput>
    delete?: Enumerable<BetDetailHistoryWhereUniqueInput>
    connect?: Enumerable<BetDetailHistoryWhereUniqueInput>
    update?: Enumerable<BetDetailHistoryUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<BetDetailHistoryUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<BetDetailHistoryScalarWhereInput>
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<PaymentHistoryCreateWithoutOwnerInput>, Enumerable<PaymentHistoryUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<PaymentHistoryCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<PaymentHistoryUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: PaymentHistoryCreateManyOwnerInputEnvelope
    set?: Enumerable<PaymentHistoryWhereUniqueInput>
    disconnect?: Enumerable<PaymentHistoryWhereUniqueInput>
    delete?: Enumerable<PaymentHistoryWhereUniqueInput>
    connect?: Enumerable<PaymentHistoryWhereUniqueInput>
    update?: Enumerable<PaymentHistoryUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<PaymentHistoryUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<PaymentHistoryScalarWhereInput>
  }

  export type PlayerSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PlayerSessionCreateWithoutUserInput>, Enumerable<PlayerSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PlayerSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PlayerSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PlayerSessionCreateManyUserInputEnvelope
    set?: Enumerable<PlayerSessionWhereUniqueInput>
    disconnect?: Enumerable<PlayerSessionWhereUniqueInput>
    delete?: Enumerable<PlayerSessionWhereUniqueInput>
    connect?: Enumerable<PlayerSessionWhereUniqueInput>
    update?: Enumerable<PlayerSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PlayerSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PlayerSessionScalarWhereInput>
  }

  export type WithdrawalUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<WithdrawalCreateWithoutOwnerInput>, Enumerable<WithdrawalUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<WithdrawalCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<WithdrawalUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: WithdrawalCreateManyOwnerInputEnvelope
    set?: Enumerable<WithdrawalWhereUniqueInput>
    disconnect?: Enumerable<WithdrawalWhereUniqueInput>
    delete?: Enumerable<WithdrawalWhereUniqueInput>
    connect?: Enumerable<WithdrawalWhereUniqueInput>
    update?: Enumerable<WithdrawalUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<WithdrawalUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<WithdrawalScalarWhereInput>
  }

  export type DepositUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<DepositCreateWithoutOwnerInput>, Enumerable<DepositUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<DepositCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<DepositUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: DepositCreateManyOwnerInputEnvelope
    set?: Enumerable<DepositWhereUniqueInput>
    disconnect?: Enumerable<DepositWhereUniqueInput>
    delete?: Enumerable<DepositWhereUniqueInput>
    connect?: Enumerable<DepositWhereUniqueInput>
    update?: Enumerable<DepositUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<DepositUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<DepositScalarWhereInput>
  }

  export type AdminCreateNestedOneWithoutHistoryInput = {
    create?: XOR<AdminCreateWithoutHistoryInput, AdminUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: AdminCreateOrConnectWithoutHistoryInput
    connect?: AdminWhereUniqueInput
  }

  export type AgentCreateNestedOneWithoutHistoryInput = {
    create?: XOR<AgentCreateWithoutHistoryInput, AgentUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: AgentCreateOrConnectWithoutHistoryInput
    connect?: AgentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutHistoryInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type AdminUpdateOneWithoutHistoryNestedInput = {
    create?: XOR<AdminCreateWithoutHistoryInput, AdminUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: AdminCreateOrConnectWithoutHistoryInput
    upsert?: AdminUpsertWithoutHistoryInput
    disconnect?: boolean
    delete?: boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<AdminUpdateWithoutHistoryInput, AdminUncheckedUpdateWithoutHistoryInput>
  }

  export type AgentUpdateOneWithoutHistoryNestedInput = {
    create?: XOR<AgentCreateWithoutHistoryInput, AgentUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: AgentCreateOrConnectWithoutHistoryInput
    upsert?: AgentUpsertWithoutHistoryInput
    disconnect?: boolean
    delete?: boolean
    connect?: AgentWhereUniqueInput
    update?: XOR<AgentUpdateWithoutHistoryInput, AgentUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateOneWithoutHistoryNestedInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    upsert?: UserUpsertWithoutHistoryInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type UserCreateNestedOneWithoutBalanceInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBalanceNestedInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    upsert?: UserUpsertWithoutBalanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type UserCreateNestedOneWithoutPaymentHistoryInput = {
    create?: XOR<UserCreateWithoutPaymentHistoryInput, UserUncheckedCreateWithoutPaymentHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPaymentHistoryNestedInput = {
    create?: XOR<UserCreateWithoutPaymentHistoryInput, UserUncheckedCreateWithoutPaymentHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentHistoryInput
    upsert?: UserUpsertWithoutPaymentHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPaymentHistoryInput, UserUncheckedUpdateWithoutPaymentHistoryInput>
  }

  export type UserCreateNestedOneWithoutBetDetailHistoryInput = {
    create?: XOR<UserCreateWithoutBetDetailHistoryInput, UserUncheckedCreateWithoutBetDetailHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutBetDetailHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type GameListCreateNestedOneWithoutBetDetailHistoryInput = {
    create?: XOR<GameListCreateWithoutBetDetailHistoryInput, GameListUncheckedCreateWithoutBetDetailHistoryInput>
    connectOrCreate?: GameListCreateOrConnectWithoutBetDetailHistoryInput
    connect?: GameListWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBetDetailHistoryNestedInput = {
    create?: XOR<UserCreateWithoutBetDetailHistoryInput, UserUncheckedCreateWithoutBetDetailHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutBetDetailHistoryInput
    upsert?: UserUpsertWithoutBetDetailHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBetDetailHistoryInput, UserUncheckedUpdateWithoutBetDetailHistoryInput>
  }

  export type GameListUpdateOneRequiredWithoutBetDetailHistoryNestedInput = {
    create?: XOR<GameListCreateWithoutBetDetailHistoryInput, GameListUncheckedCreateWithoutBetDetailHistoryInput>
    connectOrCreate?: GameListCreateOrConnectWithoutBetDetailHistoryInput
    upsert?: GameListUpsertWithoutBetDetailHistoryInput
    connect?: GameListWhereUniqueInput
    update?: XOR<GameListUpdateWithoutBetDetailHistoryInput, GameListUncheckedUpdateWithoutBetDetailHistoryInput>
  }

  export type PlayerSessionCreateNestedManyWithoutGameSessionInput = {
    create?: XOR<Enumerable<PlayerSessionCreateWithoutGameSessionInput>, Enumerable<PlayerSessionUncheckedCreateWithoutGameSessionInput>>
    connectOrCreate?: Enumerable<PlayerSessionCreateOrConnectWithoutGameSessionInput>
    createMany?: PlayerSessionCreateManyGameSessionInputEnvelope
    connect?: Enumerable<PlayerSessionWhereUniqueInput>
  }

  export type GameListCreateNestedOneWithoutGameSessionInput = {
    create?: XOR<GameListCreateWithoutGameSessionInput, GameListUncheckedCreateWithoutGameSessionInput>
    connectOrCreate?: GameListCreateOrConnectWithoutGameSessionInput
    connect?: GameListWhereUniqueInput
  }

  export type PlayerSessionUncheckedCreateNestedManyWithoutGameSessionInput = {
    create?: XOR<Enumerable<PlayerSessionCreateWithoutGameSessionInput>, Enumerable<PlayerSessionUncheckedCreateWithoutGameSessionInput>>
    connectOrCreate?: Enumerable<PlayerSessionCreateOrConnectWithoutGameSessionInput>
    createMany?: PlayerSessionCreateManyGameSessionInputEnvelope
    connect?: Enumerable<PlayerSessionWhereUniqueInput>
  }

  export type PlayerSessionUpdateManyWithoutGameSessionNestedInput = {
    create?: XOR<Enumerable<PlayerSessionCreateWithoutGameSessionInput>, Enumerable<PlayerSessionUncheckedCreateWithoutGameSessionInput>>
    connectOrCreate?: Enumerable<PlayerSessionCreateOrConnectWithoutGameSessionInput>
    upsert?: Enumerable<PlayerSessionUpsertWithWhereUniqueWithoutGameSessionInput>
    createMany?: PlayerSessionCreateManyGameSessionInputEnvelope
    set?: Enumerable<PlayerSessionWhereUniqueInput>
    disconnect?: Enumerable<PlayerSessionWhereUniqueInput>
    delete?: Enumerable<PlayerSessionWhereUniqueInput>
    connect?: Enumerable<PlayerSessionWhereUniqueInput>
    update?: Enumerable<PlayerSessionUpdateWithWhereUniqueWithoutGameSessionInput>
    updateMany?: Enumerable<PlayerSessionUpdateManyWithWhereWithoutGameSessionInput>
    deleteMany?: Enumerable<PlayerSessionScalarWhereInput>
  }

  export type GameListUpdateOneRequiredWithoutGameSessionNestedInput = {
    create?: XOR<GameListCreateWithoutGameSessionInput, GameListUncheckedCreateWithoutGameSessionInput>
    connectOrCreate?: GameListCreateOrConnectWithoutGameSessionInput
    upsert?: GameListUpsertWithoutGameSessionInput
    connect?: GameListWhereUniqueInput
    update?: XOR<GameListUpdateWithoutGameSessionInput, GameListUncheckedUpdateWithoutGameSessionInput>
  }

  export type PlayerSessionUncheckedUpdateManyWithoutGameSessionNestedInput = {
    create?: XOR<Enumerable<PlayerSessionCreateWithoutGameSessionInput>, Enumerable<PlayerSessionUncheckedCreateWithoutGameSessionInput>>
    connectOrCreate?: Enumerable<PlayerSessionCreateOrConnectWithoutGameSessionInput>
    upsert?: Enumerable<PlayerSessionUpsertWithWhereUniqueWithoutGameSessionInput>
    createMany?: PlayerSessionCreateManyGameSessionInputEnvelope
    set?: Enumerable<PlayerSessionWhereUniqueInput>
    disconnect?: Enumerable<PlayerSessionWhereUniqueInput>
    delete?: Enumerable<PlayerSessionWhereUniqueInput>
    connect?: Enumerable<PlayerSessionWhereUniqueInput>
    update?: Enumerable<PlayerSessionUpdateWithWhereUniqueWithoutGameSessionInput>
    updateMany?: Enumerable<PlayerSessionUpdateManyWithWhereWithoutGameSessionInput>
    deleteMany?: Enumerable<PlayerSessionScalarWhereInput>
  }

  export type GameSessionCreateNestedOneWithoutPlayerSessionInput = {
    create?: XOR<GameSessionCreateWithoutPlayerSessionInput, GameSessionUncheckedCreateWithoutPlayerSessionInput>
    connectOrCreate?: GameSessionCreateOrConnectWithoutPlayerSessionInput
    connect?: GameSessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPlayerSessionInput = {
    create?: XOR<UserCreateWithoutPlayerSessionInput, UserUncheckedCreateWithoutPlayerSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerSessionInput
    connect?: UserWhereUniqueInput
  }

  export type GameSessionUpdateOneRequiredWithoutPlayerSessionNestedInput = {
    create?: XOR<GameSessionCreateWithoutPlayerSessionInput, GameSessionUncheckedCreateWithoutPlayerSessionInput>
    connectOrCreate?: GameSessionCreateOrConnectWithoutPlayerSessionInput
    upsert?: GameSessionUpsertWithoutPlayerSessionInput
    connect?: GameSessionWhereUniqueInput
    update?: XOR<GameSessionUpdateWithoutPlayerSessionInput, GameSessionUncheckedUpdateWithoutPlayerSessionInput>
  }

  export type UserUpdateOneRequiredWithoutPlayerSessionNestedInput = {
    create?: XOR<UserCreateWithoutPlayerSessionInput, UserUncheckedCreateWithoutPlayerSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerSessionInput
    upsert?: UserUpsertWithoutPlayerSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPlayerSessionInput, UserUncheckedUpdateWithoutPlayerSessionInput>
  }

  export type AgentCreateNestedOneWithoutQuotaInput = {
    create?: XOR<AgentCreateWithoutQuotaInput, AgentUncheckedCreateWithoutQuotaInput>
    connectOrCreate?: AgentCreateOrConnectWithoutQuotaInput
    connect?: AgentWhereUniqueInput
  }

  export type AgentUpdateOneRequiredWithoutQuotaNestedInput = {
    create?: XOR<AgentCreateWithoutQuotaInput, AgentUncheckedCreateWithoutQuotaInput>
    connectOrCreate?: AgentCreateOrConnectWithoutQuotaInput
    upsert?: AgentUpsertWithoutQuotaInput
    connect?: AgentWhereUniqueInput
    update?: XOR<AgentUpdateWithoutQuotaInput, AgentUncheckedUpdateWithoutQuotaInput>
  }

  export type AgentCreateNestedOneWithoutStatusInput = {
    create?: XOR<AgentCreateWithoutStatusInput, AgentUncheckedCreateWithoutStatusInput>
    connectOrCreate?: AgentCreateOrConnectWithoutStatusInput
    connect?: AgentWhereUniqueInput
  }

  export type WithdrawalCreateNestedManyWithoutStatusInput = {
    create?: XOR<Enumerable<WithdrawalCreateWithoutStatusInput>, Enumerable<WithdrawalUncheckedCreateWithoutStatusInput>>
    connectOrCreate?: Enumerable<WithdrawalCreateOrConnectWithoutStatusInput>
    createMany?: WithdrawalCreateManyStatusInputEnvelope
    connect?: Enumerable<WithdrawalWhereUniqueInput>
  }

  export type DepositCreateNestedManyWithoutStatusInput = {
    create?: XOR<Enumerable<DepositCreateWithoutStatusInput>, Enumerable<DepositUncheckedCreateWithoutStatusInput>>
    connectOrCreate?: Enumerable<DepositCreateOrConnectWithoutStatusInput>
    createMany?: DepositCreateManyStatusInputEnvelope
    connect?: Enumerable<DepositWhereUniqueInput>
  }

  export type WithdrawalUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<Enumerable<WithdrawalCreateWithoutStatusInput>, Enumerable<WithdrawalUncheckedCreateWithoutStatusInput>>
    connectOrCreate?: Enumerable<WithdrawalCreateOrConnectWithoutStatusInput>
    createMany?: WithdrawalCreateManyStatusInputEnvelope
    connect?: Enumerable<WithdrawalWhereUniqueInput>
  }

  export type DepositUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<Enumerable<DepositCreateWithoutStatusInput>, Enumerable<DepositUncheckedCreateWithoutStatusInput>>
    connectOrCreate?: Enumerable<DepositCreateOrConnectWithoutStatusInput>
    createMany?: DepositCreateManyStatusInputEnvelope
    connect?: Enumerable<DepositWhereUniqueInput>
  }

  export type AgentUpdateOneWithoutStatusNestedInput = {
    create?: XOR<AgentCreateWithoutStatusInput, AgentUncheckedCreateWithoutStatusInput>
    connectOrCreate?: AgentCreateOrConnectWithoutStatusInput
    upsert?: AgentUpsertWithoutStatusInput
    disconnect?: boolean
    delete?: boolean
    connect?: AgentWhereUniqueInput
    update?: XOR<AgentUpdateWithoutStatusInput, AgentUncheckedUpdateWithoutStatusInput>
  }

  export type WithdrawalUpdateManyWithoutStatusNestedInput = {
    create?: XOR<Enumerable<WithdrawalCreateWithoutStatusInput>, Enumerable<WithdrawalUncheckedCreateWithoutStatusInput>>
    connectOrCreate?: Enumerable<WithdrawalCreateOrConnectWithoutStatusInput>
    upsert?: Enumerable<WithdrawalUpsertWithWhereUniqueWithoutStatusInput>
    createMany?: WithdrawalCreateManyStatusInputEnvelope
    set?: Enumerable<WithdrawalWhereUniqueInput>
    disconnect?: Enumerable<WithdrawalWhereUniqueInput>
    delete?: Enumerable<WithdrawalWhereUniqueInput>
    connect?: Enumerable<WithdrawalWhereUniqueInput>
    update?: Enumerable<WithdrawalUpdateWithWhereUniqueWithoutStatusInput>
    updateMany?: Enumerable<WithdrawalUpdateManyWithWhereWithoutStatusInput>
    deleteMany?: Enumerable<WithdrawalScalarWhereInput>
  }

  export type DepositUpdateManyWithoutStatusNestedInput = {
    create?: XOR<Enumerable<DepositCreateWithoutStatusInput>, Enumerable<DepositUncheckedCreateWithoutStatusInput>>
    connectOrCreate?: Enumerable<DepositCreateOrConnectWithoutStatusInput>
    upsert?: Enumerable<DepositUpsertWithWhereUniqueWithoutStatusInput>
    createMany?: DepositCreateManyStatusInputEnvelope
    set?: Enumerable<DepositWhereUniqueInput>
    disconnect?: Enumerable<DepositWhereUniqueInput>
    delete?: Enumerable<DepositWhereUniqueInput>
    connect?: Enumerable<DepositWhereUniqueInput>
    update?: Enumerable<DepositUpdateWithWhereUniqueWithoutStatusInput>
    updateMany?: Enumerable<DepositUpdateManyWithWhereWithoutStatusInput>
    deleteMany?: Enumerable<DepositScalarWhereInput>
  }

  export type WithdrawalUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<Enumerable<WithdrawalCreateWithoutStatusInput>, Enumerable<WithdrawalUncheckedCreateWithoutStatusInput>>
    connectOrCreate?: Enumerable<WithdrawalCreateOrConnectWithoutStatusInput>
    upsert?: Enumerable<WithdrawalUpsertWithWhereUniqueWithoutStatusInput>
    createMany?: WithdrawalCreateManyStatusInputEnvelope
    set?: Enumerable<WithdrawalWhereUniqueInput>
    disconnect?: Enumerable<WithdrawalWhereUniqueInput>
    delete?: Enumerable<WithdrawalWhereUniqueInput>
    connect?: Enumerable<WithdrawalWhereUniqueInput>
    update?: Enumerable<WithdrawalUpdateWithWhereUniqueWithoutStatusInput>
    updateMany?: Enumerable<WithdrawalUpdateManyWithWhereWithoutStatusInput>
    deleteMany?: Enumerable<WithdrawalScalarWhereInput>
  }

  export type DepositUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<Enumerable<DepositCreateWithoutStatusInput>, Enumerable<DepositUncheckedCreateWithoutStatusInput>>
    connectOrCreate?: Enumerable<DepositCreateOrConnectWithoutStatusInput>
    upsert?: Enumerable<DepositUpsertWithWhereUniqueWithoutStatusInput>
    createMany?: DepositCreateManyStatusInputEnvelope
    set?: Enumerable<DepositWhereUniqueInput>
    disconnect?: Enumerable<DepositWhereUniqueInput>
    delete?: Enumerable<DepositWhereUniqueInput>
    connect?: Enumerable<DepositWhereUniqueInput>
    update?: Enumerable<DepositUpdateWithWhereUniqueWithoutStatusInput>
    updateMany?: Enumerable<DepositUpdateManyWithWhereWithoutStatusInput>
    deleteMany?: Enumerable<DepositScalarWhereInput>
  }

  export type StatusCreateNestedOneWithoutWithdrawalInput = {
    create?: XOR<StatusCreateWithoutWithdrawalInput, StatusUncheckedCreateWithoutWithdrawalInput>
    connectOrCreate?: StatusCreateOrConnectWithoutWithdrawalInput
    connect?: StatusWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWithdrawalInput = {
    create?: XOR<UserCreateWithoutWithdrawalInput, UserUncheckedCreateWithoutWithdrawalInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalInput
    connect?: UserWhereUniqueInput
  }

  export type StatusUpdateOneRequiredWithoutWithdrawalNestedInput = {
    create?: XOR<StatusCreateWithoutWithdrawalInput, StatusUncheckedCreateWithoutWithdrawalInput>
    connectOrCreate?: StatusCreateOrConnectWithoutWithdrawalInput
    upsert?: StatusUpsertWithoutWithdrawalInput
    connect?: StatusWhereUniqueInput
    update?: XOR<StatusUpdateWithoutWithdrawalInput, StatusUncheckedUpdateWithoutWithdrawalInput>
  }

  export type UserUpdateOneRequiredWithoutWithdrawalNestedInput = {
    create?: XOR<UserCreateWithoutWithdrawalInput, UserUncheckedCreateWithoutWithdrawalInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalInput
    upsert?: UserUpsertWithoutWithdrawalInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutWithdrawalInput, UserUncheckedUpdateWithoutWithdrawalInput>
  }

  export type StatusCreateNestedOneWithoutDepositInput = {
    create?: XOR<StatusCreateWithoutDepositInput, StatusUncheckedCreateWithoutDepositInput>
    connectOrCreate?: StatusCreateOrConnectWithoutDepositInput
    connect?: StatusWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDepositInput = {
    create?: XOR<UserCreateWithoutDepositInput, UserUncheckedCreateWithoutDepositInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepositInput
    connect?: UserWhereUniqueInput
  }

  export type StatusUpdateOneRequiredWithoutDepositNestedInput = {
    create?: XOR<StatusCreateWithoutDepositInput, StatusUncheckedCreateWithoutDepositInput>
    connectOrCreate?: StatusCreateOrConnectWithoutDepositInput
    upsert?: StatusUpsertWithoutDepositInput
    connect?: StatusWhereUniqueInput
    update?: XOR<StatusUpdateWithoutDepositInput, StatusUncheckedUpdateWithoutDepositInput>
  }

  export type UserUpdateOneRequiredWithoutDepositNestedInput = {
    create?: XOR<UserCreateWithoutDepositInput, UserUncheckedCreateWithoutDepositInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepositInput
    upsert?: UserUpsertWithoutDepositInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutDepositInput, UserUncheckedUpdateWithoutDepositInput>
  }

  export type GameSessionCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<GameSessionCreateWithoutGameInput>, Enumerable<GameSessionUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<GameSessionCreateOrConnectWithoutGameInput>
    createMany?: GameSessionCreateManyGameInputEnvelope
    connect?: Enumerable<GameSessionWhereUniqueInput>
  }

  export type BetDetailHistoryCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<BetDetailHistoryCreateWithoutGameInput>, Enumerable<BetDetailHistoryUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<BetDetailHistoryCreateOrConnectWithoutGameInput>
    createMany?: BetDetailHistoryCreateManyGameInputEnvelope
    connect?: Enumerable<BetDetailHistoryWhereUniqueInput>
  }

  export type GameSessionUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<GameSessionCreateWithoutGameInput>, Enumerable<GameSessionUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<GameSessionCreateOrConnectWithoutGameInput>
    createMany?: GameSessionCreateManyGameInputEnvelope
    connect?: Enumerable<GameSessionWhereUniqueInput>
  }

  export type BetDetailHistoryUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<BetDetailHistoryCreateWithoutGameInput>, Enumerable<BetDetailHistoryUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<BetDetailHistoryCreateOrConnectWithoutGameInput>
    createMany?: BetDetailHistoryCreateManyGameInputEnvelope
    connect?: Enumerable<BetDetailHistoryWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameSessionUpdateManyWithoutGameNestedInput = {
    create?: XOR<Enumerable<GameSessionCreateWithoutGameInput>, Enumerable<GameSessionUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<GameSessionCreateOrConnectWithoutGameInput>
    upsert?: Enumerable<GameSessionUpsertWithWhereUniqueWithoutGameInput>
    createMany?: GameSessionCreateManyGameInputEnvelope
    set?: Enumerable<GameSessionWhereUniqueInput>
    disconnect?: Enumerable<GameSessionWhereUniqueInput>
    delete?: Enumerable<GameSessionWhereUniqueInput>
    connect?: Enumerable<GameSessionWhereUniqueInput>
    update?: Enumerable<GameSessionUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<GameSessionUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<GameSessionScalarWhereInput>
  }

  export type BetDetailHistoryUpdateManyWithoutGameNestedInput = {
    create?: XOR<Enumerable<BetDetailHistoryCreateWithoutGameInput>, Enumerable<BetDetailHistoryUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<BetDetailHistoryCreateOrConnectWithoutGameInput>
    upsert?: Enumerable<BetDetailHistoryUpsertWithWhereUniqueWithoutGameInput>
    createMany?: BetDetailHistoryCreateManyGameInputEnvelope
    set?: Enumerable<BetDetailHistoryWhereUniqueInput>
    disconnect?: Enumerable<BetDetailHistoryWhereUniqueInput>
    delete?: Enumerable<BetDetailHistoryWhereUniqueInput>
    connect?: Enumerable<BetDetailHistoryWhereUniqueInput>
    update?: Enumerable<BetDetailHistoryUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<BetDetailHistoryUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<BetDetailHistoryScalarWhereInput>
  }

  export type GameSessionUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<Enumerable<GameSessionCreateWithoutGameInput>, Enumerable<GameSessionUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<GameSessionCreateOrConnectWithoutGameInput>
    upsert?: Enumerable<GameSessionUpsertWithWhereUniqueWithoutGameInput>
    createMany?: GameSessionCreateManyGameInputEnvelope
    set?: Enumerable<GameSessionWhereUniqueInput>
    disconnect?: Enumerable<GameSessionWhereUniqueInput>
    delete?: Enumerable<GameSessionWhereUniqueInput>
    connect?: Enumerable<GameSessionWhereUniqueInput>
    update?: Enumerable<GameSessionUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<GameSessionUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<GameSessionScalarWhereInput>
  }

  export type BetDetailHistoryUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<Enumerable<BetDetailHistoryCreateWithoutGameInput>, Enumerable<BetDetailHistoryUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<BetDetailHistoryCreateOrConnectWithoutGameInput>
    upsert?: Enumerable<BetDetailHistoryUpsertWithWhereUniqueWithoutGameInput>
    createMany?: BetDetailHistoryCreateManyGameInputEnvelope
    set?: Enumerable<BetDetailHistoryWhereUniqueInput>
    disconnect?: Enumerable<BetDetailHistoryWhereUniqueInput>
    delete?: Enumerable<BetDetailHistoryWhereUniqueInput>
    connect?: Enumerable<BetDetailHistoryWhereUniqueInput>
    update?: Enumerable<BetDetailHistoryUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<BetDetailHistoryUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<BetDetailHistoryScalarWhereInput>
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
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

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedUuidNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidNullableFilter | string | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedUuidNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
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

  export type ActionHistoryCreateWithoutAdminInput = {
    id?: string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    agent?: AgentCreateNestedOneWithoutHistoryInput
    user?: UserCreateNestedOneWithoutHistoryInput
  }

  export type ActionHistoryUncheckedCreateWithoutAdminInput = {
    id?: string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    userId?: string | null
    agentId?: string | null
  }

  export type ActionHistoryCreateOrConnectWithoutAdminInput = {
    where: ActionHistoryWhereUniqueInput
    create: XOR<ActionHistoryCreateWithoutAdminInput, ActionHistoryUncheckedCreateWithoutAdminInput>
  }

  export type ActionHistoryCreateManyAdminInputEnvelope = {
    data: Enumerable<ActionHistoryCreateManyAdminInput>
    skipDuplicates?: boolean
  }

  export type AgentCreateWithoutCreatedByInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryCreateNestedManyWithoutAgentInput
    users?: UserCreateNestedManyWithoutAgentInput
    quota?: QuotaCreateNestedManyWithoutAgentQuotaInput
    status?: StatusCreateNestedManyWithoutApprovedByInput
  }

  export type AgentUncheckedCreateWithoutCreatedByInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryUncheckedCreateNestedManyWithoutAgentInput
    users?: UserUncheckedCreateNestedManyWithoutAgentInput
    quota?: QuotaUncheckedCreateNestedManyWithoutAgentQuotaInput
    status?: StatusUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type AgentCreateOrConnectWithoutCreatedByInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutCreatedByInput, AgentUncheckedCreateWithoutCreatedByInput>
  }

  export type AgentCreateManyCreatedByInputEnvelope = {
    data: Enumerable<AgentCreateManyCreatedByInput>
    skipDuplicates?: boolean
  }

  export type ActionHistoryUpsertWithWhereUniqueWithoutAdminInput = {
    where: ActionHistoryWhereUniqueInput
    update: XOR<ActionHistoryUpdateWithoutAdminInput, ActionHistoryUncheckedUpdateWithoutAdminInput>
    create: XOR<ActionHistoryCreateWithoutAdminInput, ActionHistoryUncheckedCreateWithoutAdminInput>
  }

  export type ActionHistoryUpdateWithWhereUniqueWithoutAdminInput = {
    where: ActionHistoryWhereUniqueInput
    data: XOR<ActionHistoryUpdateWithoutAdminInput, ActionHistoryUncheckedUpdateWithoutAdminInput>
  }

  export type ActionHistoryUpdateManyWithWhereWithoutAdminInput = {
    where: ActionHistoryScalarWhereInput
    data: XOR<ActionHistoryUpdateManyMutationInput, ActionHistoryUncheckedUpdateManyWithoutHistoryInput>
  }

  export type ActionHistoryScalarWhereInput = {
    AND?: Enumerable<ActionHistoryScalarWhereInput>
    OR?: Enumerable<ActionHistoryScalarWhereInput>
    NOT?: Enumerable<ActionHistoryScalarWhereInput>
    id?: UuidFilter | string
    newValueJson?: JsonNullableFilter
    ip?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    userId?: UuidNullableFilter | string | null
    agentId?: UuidNullableFilter | string | null
    adminId?: UuidNullableFilter | string | null
  }

  export type AgentUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: AgentWhereUniqueInput
    update: XOR<AgentUpdateWithoutCreatedByInput, AgentUncheckedUpdateWithoutCreatedByInput>
    create: XOR<AgentCreateWithoutCreatedByInput, AgentUncheckedCreateWithoutCreatedByInput>
  }

  export type AgentUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: AgentWhereUniqueInput
    data: XOR<AgentUpdateWithoutCreatedByInput, AgentUncheckedUpdateWithoutCreatedByInput>
  }

  export type AgentUpdateManyWithWhereWithoutCreatedByInput = {
    where: AgentScalarWhereInput
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyWithoutAgentInput>
  }

  export type AgentScalarWhereInput = {
    AND?: Enumerable<AgentScalarWhereInput>
    OR?: Enumerable<AgentScalarWhereInput>
    NOT?: Enumerable<AgentScalarWhereInput>
    id?: UuidFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    name?: StringFilter | string
    active?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    accessToken?: StringNullableFilter | string | null
    adminId?: UuidNullableFilter | string | null
  }

  export type ActionHistoryCreateWithoutAgentInput = {
    id?: string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    admin?: AdminCreateNestedOneWithoutHistoryInput
    user?: UserCreateNestedOneWithoutHistoryInput
  }

  export type ActionHistoryUncheckedCreateWithoutAgentInput = {
    id?: string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    userId?: string | null
    adminId?: string | null
  }

  export type ActionHistoryCreateOrConnectWithoutAgentInput = {
    where: ActionHistoryWhereUniqueInput
    create: XOR<ActionHistoryCreateWithoutAgentInput, ActionHistoryUncheckedCreateWithoutAgentInput>
  }

  export type ActionHistoryCreateManyAgentInputEnvelope = {
    data: Enumerable<ActionHistoryCreateManyAgentInput>
    skipDuplicates?: boolean
  }

  export type AdminCreateWithoutAgentInput = {
    id?: string
    email: string
    password: string
    name: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutAgentInput = {
    id?: string
    email: string
    password: string
    name: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutAgentInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutAgentInput, AdminUncheckedCreateWithoutAgentInput>
  }

  export type UserCreateWithoutAgentInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryCreateNestedManyWithoutUserInput
    balance?: BalanceCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    playerSession?: PlayerSessionCreateNestedManyWithoutUserInput
    withdrawal?: WithdrawalCreateNestedManyWithoutOwnerInput
    deposit?: DepositCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutAgentInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryUncheckedCreateNestedManyWithoutUserInput
    balance?: BalanceUncheckedCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    playerSession?: PlayerSessionUncheckedCreateNestedManyWithoutUserInput
    withdrawal?: WithdrawalUncheckedCreateNestedManyWithoutOwnerInput
    deposit?: DepositUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutAgentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAgentInput, UserUncheckedCreateWithoutAgentInput>
  }

  export type UserCreateManyAgentInputEnvelope = {
    data: Enumerable<UserCreateManyAgentInput>
    skipDuplicates?: boolean
  }

  export type QuotaCreateWithoutAgentQuotaInput = {
    id?: string
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type QuotaUncheckedCreateWithoutAgentQuotaInput = {
    id?: string
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type QuotaCreateOrConnectWithoutAgentQuotaInput = {
    where: QuotaWhereUniqueInput
    create: XOR<QuotaCreateWithoutAgentQuotaInput, QuotaUncheckedCreateWithoutAgentQuotaInput>
  }

  export type QuotaCreateManyAgentQuotaInputEnvelope = {
    data: Enumerable<QuotaCreateManyAgentQuotaInput>
    skipDuplicates?: boolean
  }

  export type StatusCreateWithoutApprovedByInput = {
    id?: string
    approval?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    withdrawal?: WithdrawalCreateNestedManyWithoutStatusInput
    deposit?: DepositCreateNestedManyWithoutStatusInput
  }

  export type StatusUncheckedCreateWithoutApprovedByInput = {
    id?: string
    approval?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    withdrawal?: WithdrawalUncheckedCreateNestedManyWithoutStatusInput
    deposit?: DepositUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusCreateOrConnectWithoutApprovedByInput = {
    where: StatusWhereUniqueInput
    create: XOR<StatusCreateWithoutApprovedByInput, StatusUncheckedCreateWithoutApprovedByInput>
  }

  export type StatusCreateManyApprovedByInputEnvelope = {
    data: Enumerable<StatusCreateManyApprovedByInput>
    skipDuplicates?: boolean
  }

  export type ActionHistoryUpsertWithWhereUniqueWithoutAgentInput = {
    where: ActionHistoryWhereUniqueInput
    update: XOR<ActionHistoryUpdateWithoutAgentInput, ActionHistoryUncheckedUpdateWithoutAgentInput>
    create: XOR<ActionHistoryCreateWithoutAgentInput, ActionHistoryUncheckedCreateWithoutAgentInput>
  }

  export type ActionHistoryUpdateWithWhereUniqueWithoutAgentInput = {
    where: ActionHistoryWhereUniqueInput
    data: XOR<ActionHistoryUpdateWithoutAgentInput, ActionHistoryUncheckedUpdateWithoutAgentInput>
  }

  export type ActionHistoryUpdateManyWithWhereWithoutAgentInput = {
    where: ActionHistoryScalarWhereInput
    data: XOR<ActionHistoryUpdateManyMutationInput, ActionHistoryUncheckedUpdateManyWithoutHistoryInput>
  }

  export type AdminUpsertWithoutAgentInput = {
    update: XOR<AdminUpdateWithoutAgentInput, AdminUncheckedUpdateWithoutAgentInput>
    create: XOR<AdminCreateWithoutAgentInput, AdminUncheckedCreateWithoutAgentInput>
  }

  export type AdminUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutAgentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAgentInput, UserUncheckedUpdateWithoutAgentInput>
    create: XOR<UserCreateWithoutAgentInput, UserUncheckedCreateWithoutAgentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAgentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAgentInput, UserUncheckedUpdateWithoutAgentInput>
  }

  export type UserUpdateManyWithWhereWithoutAgentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: UuidFilter | string
    email?: StringFilter | string
    name?: StringFilter | string
    password?: StringFilter | string
    headImage?: StringFilter | string
    active?: BoolFilter | boolean
    token?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    accessToken?: StringNullableFilter | string | null
    agentId?: UuidNullableFilter | string | null
  }

  export type QuotaUpsertWithWhereUniqueWithoutAgentQuotaInput = {
    where: QuotaWhereUniqueInput
    update: XOR<QuotaUpdateWithoutAgentQuotaInput, QuotaUncheckedUpdateWithoutAgentQuotaInput>
    create: XOR<QuotaCreateWithoutAgentQuotaInput, QuotaUncheckedCreateWithoutAgentQuotaInput>
  }

  export type QuotaUpdateWithWhereUniqueWithoutAgentQuotaInput = {
    where: QuotaWhereUniqueInput
    data: XOR<QuotaUpdateWithoutAgentQuotaInput, QuotaUncheckedUpdateWithoutAgentQuotaInput>
  }

  export type QuotaUpdateManyWithWhereWithoutAgentQuotaInput = {
    where: QuotaScalarWhereInput
    data: XOR<QuotaUpdateManyMutationInput, QuotaUncheckedUpdateManyWithoutQuotaInput>
  }

  export type QuotaScalarWhereInput = {
    AND?: Enumerable<QuotaScalarWhereInput>
    OR?: Enumerable<QuotaScalarWhereInput>
    NOT?: Enumerable<QuotaScalarWhereInput>
    id?: UuidFilter | string
    balance?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    agentId?: UuidFilter | string
  }

  export type StatusUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: StatusWhereUniqueInput
    update: XOR<StatusUpdateWithoutApprovedByInput, StatusUncheckedUpdateWithoutApprovedByInput>
    create: XOR<StatusCreateWithoutApprovedByInput, StatusUncheckedCreateWithoutApprovedByInput>
  }

  export type StatusUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: StatusWhereUniqueInput
    data: XOR<StatusUpdateWithoutApprovedByInput, StatusUncheckedUpdateWithoutApprovedByInput>
  }

  export type StatusUpdateManyWithWhereWithoutApprovedByInput = {
    where: StatusScalarWhereInput
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyWithoutStatusInput>
  }

  export type StatusScalarWhereInput = {
    AND?: Enumerable<StatusScalarWhereInput>
    OR?: Enumerable<StatusScalarWhereInput>
    NOT?: Enumerable<StatusScalarWhereInput>
    id?: UuidFilter | string
    approval?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    approvedById?: UuidNullableFilter | string | null
  }

  export type ActionHistoryCreateWithoutUserInput = {
    id?: string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    admin?: AdminCreateNestedOneWithoutHistoryInput
    agent?: AgentCreateNestedOneWithoutHistoryInput
  }

  export type ActionHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    agentId?: string | null
    adminId?: string | null
  }

  export type ActionHistoryCreateOrConnectWithoutUserInput = {
    where: ActionHistoryWhereUniqueInput
    create: XOR<ActionHistoryCreateWithoutUserInput, ActionHistoryUncheckedCreateWithoutUserInput>
  }

  export type ActionHistoryCreateManyUserInputEnvelope = {
    data: Enumerable<ActionHistoryCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type BalanceCreateWithoutOwnerInput = {
    id?: string
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BalanceUncheckedCreateWithoutOwnerInput = {
    id?: string
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BalanceCreateOrConnectWithoutOwnerInput = {
    where: BalanceWhereUniqueInput
    create: XOR<BalanceCreateWithoutOwnerInput, BalanceUncheckedCreateWithoutOwnerInput>
  }

  export type BalanceCreateManyOwnerInputEnvelope = {
    data: Enumerable<BalanceCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type BetDetailHistoryCreateWithoutOwnerInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createdAt?: Date | string
    game: GameListCreateNestedOneWithoutBetDetailHistoryInput
  }

  export type BetDetailHistoryUncheckedCreateWithoutOwnerInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createdAt?: Date | string
    gameId: number
  }

  export type BetDetailHistoryCreateOrConnectWithoutOwnerInput = {
    where: BetDetailHistoryWhereUniqueInput
    create: XOR<BetDetailHistoryCreateWithoutOwnerInput, BetDetailHistoryUncheckedCreateWithoutOwnerInput>
  }

  export type BetDetailHistoryCreateManyOwnerInputEnvelope = {
    data: Enumerable<BetDetailHistoryCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type PaymentHistoryCreateWithoutOwnerInput = {
    id?: string
    beforeScore: number
    changeScore: number
    newScore: number
    approval?: boolean
    createdAt?: Date | string
    approvalAt?: Date | string | null
  }

  export type PaymentHistoryUncheckedCreateWithoutOwnerInput = {
    id?: string
    beforeScore: number
    changeScore: number
    newScore: number
    approval?: boolean
    createdAt?: Date | string
    approvalAt?: Date | string | null
  }

  export type PaymentHistoryCreateOrConnectWithoutOwnerInput = {
    where: PaymentHistoryWhereUniqueInput
    create: XOR<PaymentHistoryCreateWithoutOwnerInput, PaymentHistoryUncheckedCreateWithoutOwnerInput>
  }

  export type PaymentHistoryCreateManyOwnerInputEnvelope = {
    data: Enumerable<PaymentHistoryCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type PlayerSessionCreateWithoutUserInput = {
    id?: string
    betAmount: number
    betLines: number
    betResult: number
    createdAt?: Date | string
    gameSession: GameSessionCreateNestedOneWithoutPlayerSessionInput
  }

  export type PlayerSessionUncheckedCreateWithoutUserInput = {
    id?: string
    gameSessionId: string
    betAmount: number
    betLines: number
    betResult: number
    createdAt?: Date | string
  }

  export type PlayerSessionCreateOrConnectWithoutUserInput = {
    where: PlayerSessionWhereUniqueInput
    create: XOR<PlayerSessionCreateWithoutUserInput, PlayerSessionUncheckedCreateWithoutUserInput>
  }

  export type PlayerSessionCreateManyUserInputEnvelope = {
    data: Enumerable<PlayerSessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type WithdrawalCreateWithoutOwnerInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status: StatusCreateNestedOneWithoutWithdrawalInput
  }

  export type WithdrawalUncheckedCreateWithoutOwnerInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    statusId: string
  }

  export type WithdrawalCreateOrConnectWithoutOwnerInput = {
    where: WithdrawalWhereUniqueInput
    create: XOR<WithdrawalCreateWithoutOwnerInput, WithdrawalUncheckedCreateWithoutOwnerInput>
  }

  export type WithdrawalCreateManyOwnerInputEnvelope = {
    data: Enumerable<WithdrawalCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type DepositCreateWithoutOwnerInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status: StatusCreateNestedOneWithoutDepositInput
  }

  export type DepositUncheckedCreateWithoutOwnerInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    statusId: string
  }

  export type DepositCreateOrConnectWithoutOwnerInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutOwnerInput, DepositUncheckedCreateWithoutOwnerInput>
  }

  export type DepositCreateManyOwnerInputEnvelope = {
    data: Enumerable<DepositCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type AgentCreateWithoutUsersInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryCreateNestedManyWithoutAgentInput
    createdBy?: AdminCreateNestedOneWithoutAgentInput
    quota?: QuotaCreateNestedManyWithoutAgentQuotaInput
    status?: StatusCreateNestedManyWithoutApprovedByInput
  }

  export type AgentUncheckedCreateWithoutUsersInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    adminId?: string | null
    history?: ActionHistoryUncheckedCreateNestedManyWithoutAgentInput
    quota?: QuotaUncheckedCreateNestedManyWithoutAgentQuotaInput
    status?: StatusUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type AgentCreateOrConnectWithoutUsersInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutUsersInput, AgentUncheckedCreateWithoutUsersInput>
  }

  export type ActionHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ActionHistoryWhereUniqueInput
    update: XOR<ActionHistoryUpdateWithoutUserInput, ActionHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ActionHistoryCreateWithoutUserInput, ActionHistoryUncheckedCreateWithoutUserInput>
  }

  export type ActionHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ActionHistoryWhereUniqueInput
    data: XOR<ActionHistoryUpdateWithoutUserInput, ActionHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ActionHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ActionHistoryScalarWhereInput
    data: XOR<ActionHistoryUpdateManyMutationInput, ActionHistoryUncheckedUpdateManyWithoutHistoryInput>
  }

  export type BalanceUpsertWithWhereUniqueWithoutOwnerInput = {
    where: BalanceWhereUniqueInput
    update: XOR<BalanceUpdateWithoutOwnerInput, BalanceUncheckedUpdateWithoutOwnerInput>
    create: XOR<BalanceCreateWithoutOwnerInput, BalanceUncheckedCreateWithoutOwnerInput>
  }

  export type BalanceUpdateWithWhereUniqueWithoutOwnerInput = {
    where: BalanceWhereUniqueInput
    data: XOR<BalanceUpdateWithoutOwnerInput, BalanceUncheckedUpdateWithoutOwnerInput>
  }

  export type BalanceUpdateManyWithWhereWithoutOwnerInput = {
    where: BalanceScalarWhereInput
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyWithoutBalanceInput>
  }

  export type BalanceScalarWhereInput = {
    AND?: Enumerable<BalanceScalarWhereInput>
    OR?: Enumerable<BalanceScalarWhereInput>
    NOT?: Enumerable<BalanceScalarWhereInput>
    id?: UuidFilter | string
    balance?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    ownerId?: UuidFilter | string
  }

  export type BetDetailHistoryUpsertWithWhereUniqueWithoutOwnerInput = {
    where: BetDetailHistoryWhereUniqueInput
    update: XOR<BetDetailHistoryUpdateWithoutOwnerInput, BetDetailHistoryUncheckedUpdateWithoutOwnerInput>
    create: XOR<BetDetailHistoryCreateWithoutOwnerInput, BetDetailHistoryUncheckedCreateWithoutOwnerInput>
  }

  export type BetDetailHistoryUpdateWithWhereUniqueWithoutOwnerInput = {
    where: BetDetailHistoryWhereUniqueInput
    data: XOR<BetDetailHistoryUpdateWithoutOwnerInput, BetDetailHistoryUncheckedUpdateWithoutOwnerInput>
  }

  export type BetDetailHistoryUpdateManyWithWhereWithoutOwnerInput = {
    where: BetDetailHistoryScalarWhereInput
    data: XOR<BetDetailHistoryUpdateManyMutationInput, BetDetailHistoryUncheckedUpdateManyWithoutBetDetailHistoryInput>
  }

  export type BetDetailHistoryScalarWhereInput = {
    AND?: Enumerable<BetDetailHistoryScalarWhereInput>
    OR?: Enumerable<BetDetailHistoryScalarWhereInput>
    NOT?: Enumerable<BetDetailHistoryScalarWhereInput>
    id?: UuidFilter | string
    beforeScore?: IntFilter | number
    betScore?: IntFilter | number
    winScore?: IntFilter | number
    newScore?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    ownerId?: UuidFilter | string
    gameId?: IntFilter | number
  }

  export type PaymentHistoryUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PaymentHistoryWhereUniqueInput
    update: XOR<PaymentHistoryUpdateWithoutOwnerInput, PaymentHistoryUncheckedUpdateWithoutOwnerInput>
    create: XOR<PaymentHistoryCreateWithoutOwnerInput, PaymentHistoryUncheckedCreateWithoutOwnerInput>
  }

  export type PaymentHistoryUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PaymentHistoryWhereUniqueInput
    data: XOR<PaymentHistoryUpdateWithoutOwnerInput, PaymentHistoryUncheckedUpdateWithoutOwnerInput>
  }

  export type PaymentHistoryUpdateManyWithWhereWithoutOwnerInput = {
    where: PaymentHistoryScalarWhereInput
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyWithoutPaymentHistoryInput>
  }

  export type PaymentHistoryScalarWhereInput = {
    AND?: Enumerable<PaymentHistoryScalarWhereInput>
    OR?: Enumerable<PaymentHistoryScalarWhereInput>
    NOT?: Enumerable<PaymentHistoryScalarWhereInput>
    id?: UuidFilter | string
    beforeScore?: IntFilter | number
    changeScore?: IntFilter | number
    newScore?: IntFilter | number
    approval?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    approvalAt?: DateTimeNullableFilter | Date | string | null
    ownerId?: UuidFilter | string
  }

  export type PlayerSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: PlayerSessionWhereUniqueInput
    update: XOR<PlayerSessionUpdateWithoutUserInput, PlayerSessionUncheckedUpdateWithoutUserInput>
    create: XOR<PlayerSessionCreateWithoutUserInput, PlayerSessionUncheckedCreateWithoutUserInput>
  }

  export type PlayerSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: PlayerSessionWhereUniqueInput
    data: XOR<PlayerSessionUpdateWithoutUserInput, PlayerSessionUncheckedUpdateWithoutUserInput>
  }

  export type PlayerSessionUpdateManyWithWhereWithoutUserInput = {
    where: PlayerSessionScalarWhereInput
    data: XOR<PlayerSessionUpdateManyMutationInput, PlayerSessionUncheckedUpdateManyWithoutPlayerSessionInput>
  }

  export type PlayerSessionScalarWhereInput = {
    AND?: Enumerable<PlayerSessionScalarWhereInput>
    OR?: Enumerable<PlayerSessionScalarWhereInput>
    NOT?: Enumerable<PlayerSessionScalarWhereInput>
    id?: UuidFilter | string
    gameSessionId?: UuidFilter | string
    userId?: UuidFilter | string
    betAmount?: IntFilter | number
    betLines?: IntFilter | number
    betResult?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type WithdrawalUpsertWithWhereUniqueWithoutOwnerInput = {
    where: WithdrawalWhereUniqueInput
    update: XOR<WithdrawalUpdateWithoutOwnerInput, WithdrawalUncheckedUpdateWithoutOwnerInput>
    create: XOR<WithdrawalCreateWithoutOwnerInput, WithdrawalUncheckedCreateWithoutOwnerInput>
  }

  export type WithdrawalUpdateWithWhereUniqueWithoutOwnerInput = {
    where: WithdrawalWhereUniqueInput
    data: XOR<WithdrawalUpdateWithoutOwnerInput, WithdrawalUncheckedUpdateWithoutOwnerInput>
  }

  export type WithdrawalUpdateManyWithWhereWithoutOwnerInput = {
    where: WithdrawalScalarWhereInput
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyWithoutWithdrawalInput>
  }

  export type WithdrawalScalarWhereInput = {
    AND?: Enumerable<WithdrawalScalarWhereInput>
    OR?: Enumerable<WithdrawalScalarWhereInput>
    NOT?: Enumerable<WithdrawalScalarWhereInput>
    id?: UuidFilter | string
    amount?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    statusId?: UuidFilter | string
    ownerId?: UuidFilter | string
  }

  export type DepositUpsertWithWhereUniqueWithoutOwnerInput = {
    where: DepositWhereUniqueInput
    update: XOR<DepositUpdateWithoutOwnerInput, DepositUncheckedUpdateWithoutOwnerInput>
    create: XOR<DepositCreateWithoutOwnerInput, DepositUncheckedCreateWithoutOwnerInput>
  }

  export type DepositUpdateWithWhereUniqueWithoutOwnerInput = {
    where: DepositWhereUniqueInput
    data: XOR<DepositUpdateWithoutOwnerInput, DepositUncheckedUpdateWithoutOwnerInput>
  }

  export type DepositUpdateManyWithWhereWithoutOwnerInput = {
    where: DepositScalarWhereInput
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyWithoutDepositInput>
  }

  export type DepositScalarWhereInput = {
    AND?: Enumerable<DepositScalarWhereInput>
    OR?: Enumerable<DepositScalarWhereInput>
    NOT?: Enumerable<DepositScalarWhereInput>
    id?: UuidFilter | string
    amount?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    statusId?: UuidFilter | string
    ownerId?: UuidFilter | string
  }

  export type AgentUpsertWithoutUsersInput = {
    update: XOR<AgentUpdateWithoutUsersInput, AgentUncheckedUpdateWithoutUsersInput>
    create: XOR<AgentCreateWithoutUsersInput, AgentUncheckedCreateWithoutUsersInput>
  }

  export type AgentUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUpdateManyWithoutAgentNestedInput
    createdBy?: AdminUpdateOneWithoutAgentNestedInput
    quota?: QuotaUpdateManyWithoutAgentQuotaNestedInput
    status?: StatusUpdateManyWithoutApprovedByNestedInput
  }

  export type AgentUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUncheckedUpdateManyWithoutAgentNestedInput
    quota?: QuotaUncheckedUpdateManyWithoutAgentQuotaNestedInput
    status?: StatusUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type AdminCreateWithoutHistoryInput = {
    id?: string
    email: string
    password: string
    name: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    agent?: AgentCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUncheckedCreateWithoutHistoryInput = {
    id?: string
    email: string
    password: string
    name: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    agent?: AgentUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type AdminCreateOrConnectWithoutHistoryInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutHistoryInput, AdminUncheckedCreateWithoutHistoryInput>
  }

  export type AgentCreateWithoutHistoryInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    createdBy?: AdminCreateNestedOneWithoutAgentInput
    users?: UserCreateNestedManyWithoutAgentInput
    quota?: QuotaCreateNestedManyWithoutAgentQuotaInput
    status?: StatusCreateNestedManyWithoutApprovedByInput
  }

  export type AgentUncheckedCreateWithoutHistoryInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    adminId?: string | null
    users?: UserUncheckedCreateNestedManyWithoutAgentInput
    quota?: QuotaUncheckedCreateNestedManyWithoutAgentQuotaInput
    status?: StatusUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type AgentCreateOrConnectWithoutHistoryInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutHistoryInput, AgentUncheckedCreateWithoutHistoryInput>
  }

  export type UserCreateWithoutHistoryInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    balance?: BalanceCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    playerSession?: PlayerSessionCreateNestedManyWithoutUserInput
    withdrawal?: WithdrawalCreateNestedManyWithoutOwnerInput
    deposit?: DepositCreateNestedManyWithoutOwnerInput
    agent?: AgentCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutHistoryInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    agentId?: string | null
    balance?: BalanceUncheckedCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    playerSession?: PlayerSessionUncheckedCreateNestedManyWithoutUserInput
    withdrawal?: WithdrawalUncheckedCreateNestedManyWithoutOwnerInput
    deposit?: DepositUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type AdminUpsertWithoutHistoryInput = {
    update: XOR<AdminUpdateWithoutHistoryInput, AdminUncheckedUpdateWithoutHistoryInput>
    create: XOR<AdminCreateWithoutHistoryInput, AdminUncheckedCreateWithoutHistoryInput>
  }

  export type AdminUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    agent?: AgentUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    agent?: AgentUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AgentUpsertWithoutHistoryInput = {
    update: XOR<AgentUpdateWithoutHistoryInput, AgentUncheckedUpdateWithoutHistoryInput>
    create: XOR<AgentCreateWithoutHistoryInput, AgentUncheckedCreateWithoutHistoryInput>
  }

  export type AgentUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: AdminUpdateOneWithoutAgentNestedInput
    users?: UserUpdateManyWithoutAgentNestedInput
    quota?: QuotaUpdateManyWithoutAgentQuotaNestedInput
    status?: StatusUpdateManyWithoutApprovedByNestedInput
  }

  export type AgentUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutAgentNestedInput
    quota?: QuotaUncheckedUpdateManyWithoutAgentQuotaNestedInput
    status?: StatusUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type UserUpsertWithoutHistoryInput = {
    update: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type UserUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    playerSession?: PlayerSessionUpdateManyWithoutUserNestedInput
    withdrawal?: WithdrawalUpdateManyWithoutOwnerNestedInput
    deposit?: DepositUpdateManyWithoutOwnerNestedInput
    agent?: AgentUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUncheckedUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    playerSession?: PlayerSessionUncheckedUpdateManyWithoutUserNestedInput
    withdrawal?: WithdrawalUncheckedUpdateManyWithoutOwnerNestedInput
    deposit?: DepositUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutBalanceInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryCreateNestedManyWithoutUserInput
    betDetailHistory?: BetDetailHistoryCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    playerSession?: PlayerSessionCreateNestedManyWithoutUserInput
    withdrawal?: WithdrawalCreateNestedManyWithoutOwnerInput
    deposit?: DepositCreateNestedManyWithoutOwnerInput
    agent?: AgentCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutBalanceInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    agentId?: string | null
    history?: ActionHistoryUncheckedCreateNestedManyWithoutUserInput
    betDetailHistory?: BetDetailHistoryUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    playerSession?: PlayerSessionUncheckedCreateNestedManyWithoutUserInput
    withdrawal?: WithdrawalUncheckedCreateNestedManyWithoutOwnerInput
    deposit?: DepositUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutBalanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
  }

  export type UserUpsertWithoutBalanceInput = {
    update: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
  }

  export type UserUpdateWithoutBalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUpdateManyWithoutUserNestedInput
    betDetailHistory?: BetDetailHistoryUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    playerSession?: PlayerSessionUpdateManyWithoutUserNestedInput
    withdrawal?: WithdrawalUpdateManyWithoutOwnerNestedInput
    deposit?: DepositUpdateManyWithoutOwnerNestedInput
    agent?: AgentUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutBalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUncheckedUpdateManyWithoutUserNestedInput
    betDetailHistory?: BetDetailHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    playerSession?: PlayerSessionUncheckedUpdateManyWithoutUserNestedInput
    withdrawal?: WithdrawalUncheckedUpdateManyWithoutOwnerNestedInput
    deposit?: DepositUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutPaymentHistoryInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryCreateNestedManyWithoutUserInput
    balance?: BalanceCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryCreateNestedManyWithoutOwnerInput
    playerSession?: PlayerSessionCreateNestedManyWithoutUserInput
    withdrawal?: WithdrawalCreateNestedManyWithoutOwnerInput
    deposit?: DepositCreateNestedManyWithoutOwnerInput
    agent?: AgentCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPaymentHistoryInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    agentId?: string | null
    history?: ActionHistoryUncheckedCreateNestedManyWithoutUserInput
    balance?: BalanceUncheckedCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryUncheckedCreateNestedManyWithoutOwnerInput
    playerSession?: PlayerSessionUncheckedCreateNestedManyWithoutUserInput
    withdrawal?: WithdrawalUncheckedCreateNestedManyWithoutOwnerInput
    deposit?: DepositUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutPaymentHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentHistoryInput, UserUncheckedCreateWithoutPaymentHistoryInput>
  }

  export type UserUpsertWithoutPaymentHistoryInput = {
    update: XOR<UserUpdateWithoutPaymentHistoryInput, UserUncheckedUpdateWithoutPaymentHistoryInput>
    create: XOR<UserCreateWithoutPaymentHistoryInput, UserUncheckedCreateWithoutPaymentHistoryInput>
  }

  export type UserUpdateWithoutPaymentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUpdateManyWithoutUserNestedInput
    balance?: BalanceUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUpdateManyWithoutOwnerNestedInput
    playerSession?: PlayerSessionUpdateManyWithoutUserNestedInput
    withdrawal?: WithdrawalUpdateManyWithoutOwnerNestedInput
    deposit?: DepositUpdateManyWithoutOwnerNestedInput
    agent?: AgentUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUncheckedUpdateManyWithoutUserNestedInput
    balance?: BalanceUncheckedUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    playerSession?: PlayerSessionUncheckedUpdateManyWithoutUserNestedInput
    withdrawal?: WithdrawalUncheckedUpdateManyWithoutOwnerNestedInput
    deposit?: DepositUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutBetDetailHistoryInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryCreateNestedManyWithoutUserInput
    balance?: BalanceCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    playerSession?: PlayerSessionCreateNestedManyWithoutUserInput
    withdrawal?: WithdrawalCreateNestedManyWithoutOwnerInput
    deposit?: DepositCreateNestedManyWithoutOwnerInput
    agent?: AgentCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutBetDetailHistoryInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    agentId?: string | null
    history?: ActionHistoryUncheckedCreateNestedManyWithoutUserInput
    balance?: BalanceUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    playerSession?: PlayerSessionUncheckedCreateNestedManyWithoutUserInput
    withdrawal?: WithdrawalUncheckedCreateNestedManyWithoutOwnerInput
    deposit?: DepositUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutBetDetailHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBetDetailHistoryInput, UserUncheckedCreateWithoutBetDetailHistoryInput>
  }

  export type GameListCreateWithoutBetDetailHistoryInput = {
    id: number
    eGameName: string
    cGameName: string
    type?: number | null
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    gameSession?: GameSessionCreateNestedManyWithoutGameInput
  }

  export type GameListUncheckedCreateWithoutBetDetailHistoryInput = {
    id: number
    eGameName: string
    cGameName: string
    type?: number | null
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    gameSession?: GameSessionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameListCreateOrConnectWithoutBetDetailHistoryInput = {
    where: GameListWhereUniqueInput
    create: XOR<GameListCreateWithoutBetDetailHistoryInput, GameListUncheckedCreateWithoutBetDetailHistoryInput>
  }

  export type UserUpsertWithoutBetDetailHistoryInput = {
    update: XOR<UserUpdateWithoutBetDetailHistoryInput, UserUncheckedUpdateWithoutBetDetailHistoryInput>
    create: XOR<UserCreateWithoutBetDetailHistoryInput, UserUncheckedCreateWithoutBetDetailHistoryInput>
  }

  export type UserUpdateWithoutBetDetailHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUpdateManyWithoutUserNestedInput
    balance?: BalanceUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    playerSession?: PlayerSessionUpdateManyWithoutUserNestedInput
    withdrawal?: WithdrawalUpdateManyWithoutOwnerNestedInput
    deposit?: DepositUpdateManyWithoutOwnerNestedInput
    agent?: AgentUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutBetDetailHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUncheckedUpdateManyWithoutUserNestedInput
    balance?: BalanceUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    playerSession?: PlayerSessionUncheckedUpdateManyWithoutUserNestedInput
    withdrawal?: WithdrawalUncheckedUpdateManyWithoutOwnerNestedInput
    deposit?: DepositUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type GameListUpsertWithoutBetDetailHistoryInput = {
    update: XOR<GameListUpdateWithoutBetDetailHistoryInput, GameListUncheckedUpdateWithoutBetDetailHistoryInput>
    create: XOR<GameListCreateWithoutBetDetailHistoryInput, GameListUncheckedCreateWithoutBetDetailHistoryInput>
  }

  export type GameListUpdateWithoutBetDetailHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    eGameName?: StringFieldUpdateOperationsInput | string
    cGameName?: StringFieldUpdateOperationsInput | string
    type?: NullableIntFieldUpdateOperationsInput | number | null
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameSession?: GameSessionUpdateManyWithoutGameNestedInput
  }

  export type GameListUncheckedUpdateWithoutBetDetailHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    eGameName?: StringFieldUpdateOperationsInput | string
    cGameName?: StringFieldUpdateOperationsInput | string
    type?: NullableIntFieldUpdateOperationsInput | number | null
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameSession?: GameSessionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type PlayerSessionCreateWithoutGameSessionInput = {
    id?: string
    betAmount: number
    betLines: number
    betResult: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPlayerSessionInput
  }

  export type PlayerSessionUncheckedCreateWithoutGameSessionInput = {
    id?: string
    userId: string
    betAmount: number
    betLines: number
    betResult: number
    createdAt?: Date | string
  }

  export type PlayerSessionCreateOrConnectWithoutGameSessionInput = {
    where: PlayerSessionWhereUniqueInput
    create: XOR<PlayerSessionCreateWithoutGameSessionInput, PlayerSessionUncheckedCreateWithoutGameSessionInput>
  }

  export type PlayerSessionCreateManyGameSessionInputEnvelope = {
    data: Enumerable<PlayerSessionCreateManyGameSessionInput>
    skipDuplicates?: boolean
  }

  export type GameListCreateWithoutGameSessionInput = {
    id: number
    eGameName: string
    cGameName: string
    type?: number | null
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    betDetailHistory?: BetDetailHistoryCreateNestedManyWithoutGameInput
  }

  export type GameListUncheckedCreateWithoutGameSessionInput = {
    id: number
    eGameName: string
    cGameName: string
    type?: number | null
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    betDetailHistory?: BetDetailHistoryUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameListCreateOrConnectWithoutGameSessionInput = {
    where: GameListWhereUniqueInput
    create: XOR<GameListCreateWithoutGameSessionInput, GameListUncheckedCreateWithoutGameSessionInput>
  }

  export type PlayerSessionUpsertWithWhereUniqueWithoutGameSessionInput = {
    where: PlayerSessionWhereUniqueInput
    update: XOR<PlayerSessionUpdateWithoutGameSessionInput, PlayerSessionUncheckedUpdateWithoutGameSessionInput>
    create: XOR<PlayerSessionCreateWithoutGameSessionInput, PlayerSessionUncheckedCreateWithoutGameSessionInput>
  }

  export type PlayerSessionUpdateWithWhereUniqueWithoutGameSessionInput = {
    where: PlayerSessionWhereUniqueInput
    data: XOR<PlayerSessionUpdateWithoutGameSessionInput, PlayerSessionUncheckedUpdateWithoutGameSessionInput>
  }

  export type PlayerSessionUpdateManyWithWhereWithoutGameSessionInput = {
    where: PlayerSessionScalarWhereInput
    data: XOR<PlayerSessionUpdateManyMutationInput, PlayerSessionUncheckedUpdateManyWithoutPlayerSessionInput>
  }

  export type GameListUpsertWithoutGameSessionInput = {
    update: XOR<GameListUpdateWithoutGameSessionInput, GameListUncheckedUpdateWithoutGameSessionInput>
    create: XOR<GameListCreateWithoutGameSessionInput, GameListUncheckedCreateWithoutGameSessionInput>
  }

  export type GameListUpdateWithoutGameSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    eGameName?: StringFieldUpdateOperationsInput | string
    cGameName?: StringFieldUpdateOperationsInput | string
    type?: NullableIntFieldUpdateOperationsInput | number | null
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    betDetailHistory?: BetDetailHistoryUpdateManyWithoutGameNestedInput
  }

  export type GameListUncheckedUpdateWithoutGameSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    eGameName?: StringFieldUpdateOperationsInput | string
    cGameName?: StringFieldUpdateOperationsInput | string
    type?: NullableIntFieldUpdateOperationsInput | number | null
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    betDetailHistory?: BetDetailHistoryUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameSessionCreateWithoutPlayerSessionInput = {
    id?: string
    createdAt?: Date | string
    game: GameListCreateNestedOneWithoutGameSessionInput
  }

  export type GameSessionUncheckedCreateWithoutPlayerSessionInput = {
    id?: string
    gameId: number
    createdAt?: Date | string
  }

  export type GameSessionCreateOrConnectWithoutPlayerSessionInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutPlayerSessionInput, GameSessionUncheckedCreateWithoutPlayerSessionInput>
  }

  export type UserCreateWithoutPlayerSessionInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryCreateNestedManyWithoutUserInput
    balance?: BalanceCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    withdrawal?: WithdrawalCreateNestedManyWithoutOwnerInput
    deposit?: DepositCreateNestedManyWithoutOwnerInput
    agent?: AgentCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPlayerSessionInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    agentId?: string | null
    history?: ActionHistoryUncheckedCreateNestedManyWithoutUserInput
    balance?: BalanceUncheckedCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    withdrawal?: WithdrawalUncheckedCreateNestedManyWithoutOwnerInput
    deposit?: DepositUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutPlayerSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayerSessionInput, UserUncheckedCreateWithoutPlayerSessionInput>
  }

  export type GameSessionUpsertWithoutPlayerSessionInput = {
    update: XOR<GameSessionUpdateWithoutPlayerSessionInput, GameSessionUncheckedUpdateWithoutPlayerSessionInput>
    create: XOR<GameSessionCreateWithoutPlayerSessionInput, GameSessionUncheckedCreateWithoutPlayerSessionInput>
  }

  export type GameSessionUpdateWithoutPlayerSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameListUpdateOneRequiredWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutPlayerSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPlayerSessionInput = {
    update: XOR<UserUpdateWithoutPlayerSessionInput, UserUncheckedUpdateWithoutPlayerSessionInput>
    create: XOR<UserCreateWithoutPlayerSessionInput, UserUncheckedCreateWithoutPlayerSessionInput>
  }

  export type UserUpdateWithoutPlayerSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUpdateManyWithoutUserNestedInput
    balance?: BalanceUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    withdrawal?: WithdrawalUpdateManyWithoutOwnerNestedInput
    deposit?: DepositUpdateManyWithoutOwnerNestedInput
    agent?: AgentUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayerSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUncheckedUpdateManyWithoutUserNestedInput
    balance?: BalanceUncheckedUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    withdrawal?: WithdrawalUncheckedUpdateManyWithoutOwnerNestedInput
    deposit?: DepositUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type AgentCreateWithoutQuotaInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryCreateNestedManyWithoutAgentInput
    createdBy?: AdminCreateNestedOneWithoutAgentInput
    users?: UserCreateNestedManyWithoutAgentInput
    status?: StatusCreateNestedManyWithoutApprovedByInput
  }

  export type AgentUncheckedCreateWithoutQuotaInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    adminId?: string | null
    history?: ActionHistoryUncheckedCreateNestedManyWithoutAgentInput
    users?: UserUncheckedCreateNestedManyWithoutAgentInput
    status?: StatusUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type AgentCreateOrConnectWithoutQuotaInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutQuotaInput, AgentUncheckedCreateWithoutQuotaInput>
  }

  export type AgentUpsertWithoutQuotaInput = {
    update: XOR<AgentUpdateWithoutQuotaInput, AgentUncheckedUpdateWithoutQuotaInput>
    create: XOR<AgentCreateWithoutQuotaInput, AgentUncheckedCreateWithoutQuotaInput>
  }

  export type AgentUpdateWithoutQuotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUpdateManyWithoutAgentNestedInput
    createdBy?: AdminUpdateOneWithoutAgentNestedInput
    users?: UserUpdateManyWithoutAgentNestedInput
    status?: StatusUpdateManyWithoutApprovedByNestedInput
  }

  export type AgentUncheckedUpdateWithoutQuotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUncheckedUpdateManyWithoutAgentNestedInput
    users?: UserUncheckedUpdateManyWithoutAgentNestedInput
    status?: StatusUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type AgentCreateWithoutStatusInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryCreateNestedManyWithoutAgentInput
    createdBy?: AdminCreateNestedOneWithoutAgentInput
    users?: UserCreateNestedManyWithoutAgentInput
    quota?: QuotaCreateNestedManyWithoutAgentQuotaInput
  }

  export type AgentUncheckedCreateWithoutStatusInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    adminId?: string | null
    history?: ActionHistoryUncheckedCreateNestedManyWithoutAgentInput
    users?: UserUncheckedCreateNestedManyWithoutAgentInput
    quota?: QuotaUncheckedCreateNestedManyWithoutAgentQuotaInput
  }

  export type AgentCreateOrConnectWithoutStatusInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutStatusInput, AgentUncheckedCreateWithoutStatusInput>
  }

  export type WithdrawalCreateWithoutStatusInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    owner: UserCreateNestedOneWithoutWithdrawalInput
  }

  export type WithdrawalUncheckedCreateWithoutStatusInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ownerId: string
  }

  export type WithdrawalCreateOrConnectWithoutStatusInput = {
    where: WithdrawalWhereUniqueInput
    create: XOR<WithdrawalCreateWithoutStatusInput, WithdrawalUncheckedCreateWithoutStatusInput>
  }

  export type WithdrawalCreateManyStatusInputEnvelope = {
    data: Enumerable<WithdrawalCreateManyStatusInput>
    skipDuplicates?: boolean
  }

  export type DepositCreateWithoutStatusInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    owner: UserCreateNestedOneWithoutDepositInput
  }

  export type DepositUncheckedCreateWithoutStatusInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ownerId: string
  }

  export type DepositCreateOrConnectWithoutStatusInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutStatusInput, DepositUncheckedCreateWithoutStatusInput>
  }

  export type DepositCreateManyStatusInputEnvelope = {
    data: Enumerable<DepositCreateManyStatusInput>
    skipDuplicates?: boolean
  }

  export type AgentUpsertWithoutStatusInput = {
    update: XOR<AgentUpdateWithoutStatusInput, AgentUncheckedUpdateWithoutStatusInput>
    create: XOR<AgentCreateWithoutStatusInput, AgentUncheckedCreateWithoutStatusInput>
  }

  export type AgentUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUpdateManyWithoutAgentNestedInput
    createdBy?: AdminUpdateOneWithoutAgentNestedInput
    users?: UserUpdateManyWithoutAgentNestedInput
    quota?: QuotaUpdateManyWithoutAgentQuotaNestedInput
  }

  export type AgentUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUncheckedUpdateManyWithoutAgentNestedInput
    users?: UserUncheckedUpdateManyWithoutAgentNestedInput
    quota?: QuotaUncheckedUpdateManyWithoutAgentQuotaNestedInput
  }

  export type WithdrawalUpsertWithWhereUniqueWithoutStatusInput = {
    where: WithdrawalWhereUniqueInput
    update: XOR<WithdrawalUpdateWithoutStatusInput, WithdrawalUncheckedUpdateWithoutStatusInput>
    create: XOR<WithdrawalCreateWithoutStatusInput, WithdrawalUncheckedCreateWithoutStatusInput>
  }

  export type WithdrawalUpdateWithWhereUniqueWithoutStatusInput = {
    where: WithdrawalWhereUniqueInput
    data: XOR<WithdrawalUpdateWithoutStatusInput, WithdrawalUncheckedUpdateWithoutStatusInput>
  }

  export type WithdrawalUpdateManyWithWhereWithoutStatusInput = {
    where: WithdrawalScalarWhereInput
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyWithoutWithdrawalInput>
  }

  export type DepositUpsertWithWhereUniqueWithoutStatusInput = {
    where: DepositWhereUniqueInput
    update: XOR<DepositUpdateWithoutStatusInput, DepositUncheckedUpdateWithoutStatusInput>
    create: XOR<DepositCreateWithoutStatusInput, DepositUncheckedCreateWithoutStatusInput>
  }

  export type DepositUpdateWithWhereUniqueWithoutStatusInput = {
    where: DepositWhereUniqueInput
    data: XOR<DepositUpdateWithoutStatusInput, DepositUncheckedUpdateWithoutStatusInput>
  }

  export type DepositUpdateManyWithWhereWithoutStatusInput = {
    where: DepositScalarWhereInput
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyWithoutDepositInput>
  }

  export type StatusCreateWithoutWithdrawalInput = {
    id?: string
    approval?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    approvedBy?: AgentCreateNestedOneWithoutStatusInput
    deposit?: DepositCreateNestedManyWithoutStatusInput
  }

  export type StatusUncheckedCreateWithoutWithdrawalInput = {
    id?: string
    approval?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    approvedById?: string | null
    deposit?: DepositUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusCreateOrConnectWithoutWithdrawalInput = {
    where: StatusWhereUniqueInput
    create: XOR<StatusCreateWithoutWithdrawalInput, StatusUncheckedCreateWithoutWithdrawalInput>
  }

  export type UserCreateWithoutWithdrawalInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryCreateNestedManyWithoutUserInput
    balance?: BalanceCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    playerSession?: PlayerSessionCreateNestedManyWithoutUserInput
    deposit?: DepositCreateNestedManyWithoutOwnerInput
    agent?: AgentCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutWithdrawalInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    agentId?: string | null
    history?: ActionHistoryUncheckedCreateNestedManyWithoutUserInput
    balance?: BalanceUncheckedCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    playerSession?: PlayerSessionUncheckedCreateNestedManyWithoutUserInput
    deposit?: DepositUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutWithdrawalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWithdrawalInput, UserUncheckedCreateWithoutWithdrawalInput>
  }

  export type StatusUpsertWithoutWithdrawalInput = {
    update: XOR<StatusUpdateWithoutWithdrawalInput, StatusUncheckedUpdateWithoutWithdrawalInput>
    create: XOR<StatusCreateWithoutWithdrawalInput, StatusUncheckedCreateWithoutWithdrawalInput>
  }

  export type StatusUpdateWithoutWithdrawalInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: AgentUpdateOneWithoutStatusNestedInput
    deposit?: DepositUpdateManyWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateWithoutWithdrawalInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    deposit?: DepositUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type UserUpsertWithoutWithdrawalInput = {
    update: XOR<UserUpdateWithoutWithdrawalInput, UserUncheckedUpdateWithoutWithdrawalInput>
    create: XOR<UserCreateWithoutWithdrawalInput, UserUncheckedCreateWithoutWithdrawalInput>
  }

  export type UserUpdateWithoutWithdrawalInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUpdateManyWithoutUserNestedInput
    balance?: BalanceUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    playerSession?: PlayerSessionUpdateManyWithoutUserNestedInput
    deposit?: DepositUpdateManyWithoutOwnerNestedInput
    agent?: AgentUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutWithdrawalInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUncheckedUpdateManyWithoutUserNestedInput
    balance?: BalanceUncheckedUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    playerSession?: PlayerSessionUncheckedUpdateManyWithoutUserNestedInput
    deposit?: DepositUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type StatusCreateWithoutDepositInput = {
    id?: string
    approval?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    approvedBy?: AgentCreateNestedOneWithoutStatusInput
    withdrawal?: WithdrawalCreateNestedManyWithoutStatusInput
  }

  export type StatusUncheckedCreateWithoutDepositInput = {
    id?: string
    approval?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    approvedById?: string | null
    withdrawal?: WithdrawalUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusCreateOrConnectWithoutDepositInput = {
    where: StatusWhereUniqueInput
    create: XOR<StatusCreateWithoutDepositInput, StatusUncheckedCreateWithoutDepositInput>
  }

  export type UserCreateWithoutDepositInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    history?: ActionHistoryCreateNestedManyWithoutUserInput
    balance?: BalanceCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    playerSession?: PlayerSessionCreateNestedManyWithoutUserInput
    withdrawal?: WithdrawalCreateNestedManyWithoutOwnerInput
    agent?: AgentCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutDepositInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    agentId?: string | null
    history?: ActionHistoryUncheckedCreateNestedManyWithoutUserInput
    balance?: BalanceUncheckedCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    playerSession?: PlayerSessionUncheckedCreateNestedManyWithoutUserInput
    withdrawal?: WithdrawalUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutDepositInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepositInput, UserUncheckedCreateWithoutDepositInput>
  }

  export type StatusUpsertWithoutDepositInput = {
    update: XOR<StatusUpdateWithoutDepositInput, StatusUncheckedUpdateWithoutDepositInput>
    create: XOR<StatusCreateWithoutDepositInput, StatusUncheckedCreateWithoutDepositInput>
  }

  export type StatusUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: AgentUpdateOneWithoutStatusNestedInput
    withdrawal?: WithdrawalUpdateManyWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawal?: WithdrawalUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type UserUpsertWithoutDepositInput = {
    update: XOR<UserUpdateWithoutDepositInput, UserUncheckedUpdateWithoutDepositInput>
    create: XOR<UserCreateWithoutDepositInput, UserUncheckedCreateWithoutDepositInput>
  }

  export type UserUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUpdateManyWithoutUserNestedInput
    balance?: BalanceUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    playerSession?: PlayerSessionUpdateManyWithoutUserNestedInput
    withdrawal?: WithdrawalUpdateManyWithoutOwnerNestedInput
    agent?: AgentUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUncheckedUpdateManyWithoutUserNestedInput
    balance?: BalanceUncheckedUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    playerSession?: PlayerSessionUncheckedUpdateManyWithoutUserNestedInput
    withdrawal?: WithdrawalUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type GameSessionCreateWithoutGameInput = {
    id?: string
    createdAt?: Date | string
    playerSession?: PlayerSessionCreateNestedManyWithoutGameSessionInput
  }

  export type GameSessionUncheckedCreateWithoutGameInput = {
    id?: string
    createdAt?: Date | string
    playerSession?: PlayerSessionUncheckedCreateNestedManyWithoutGameSessionInput
  }

  export type GameSessionCreateOrConnectWithoutGameInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutGameInput, GameSessionUncheckedCreateWithoutGameInput>
  }

  export type GameSessionCreateManyGameInputEnvelope = {
    data: Enumerable<GameSessionCreateManyGameInput>
    skipDuplicates?: boolean
  }

  export type BetDetailHistoryCreateWithoutGameInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutBetDetailHistoryInput
  }

  export type BetDetailHistoryUncheckedCreateWithoutGameInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createdAt?: Date | string
    ownerId: string
  }

  export type BetDetailHistoryCreateOrConnectWithoutGameInput = {
    where: BetDetailHistoryWhereUniqueInput
    create: XOR<BetDetailHistoryCreateWithoutGameInput, BetDetailHistoryUncheckedCreateWithoutGameInput>
  }

  export type BetDetailHistoryCreateManyGameInputEnvelope = {
    data: Enumerable<BetDetailHistoryCreateManyGameInput>
    skipDuplicates?: boolean
  }

  export type GameSessionUpsertWithWhereUniqueWithoutGameInput = {
    where: GameSessionWhereUniqueInput
    update: XOR<GameSessionUpdateWithoutGameInput, GameSessionUncheckedUpdateWithoutGameInput>
    create: XOR<GameSessionCreateWithoutGameInput, GameSessionUncheckedCreateWithoutGameInput>
  }

  export type GameSessionUpdateWithWhereUniqueWithoutGameInput = {
    where: GameSessionWhereUniqueInput
    data: XOR<GameSessionUpdateWithoutGameInput, GameSessionUncheckedUpdateWithoutGameInput>
  }

  export type GameSessionUpdateManyWithWhereWithoutGameInput = {
    where: GameSessionScalarWhereInput
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyWithoutGameSessionInput>
  }

  export type GameSessionScalarWhereInput = {
    AND?: Enumerable<GameSessionScalarWhereInput>
    OR?: Enumerable<GameSessionScalarWhereInput>
    NOT?: Enumerable<GameSessionScalarWhereInput>
    id?: UuidFilter | string
    gameId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type BetDetailHistoryUpsertWithWhereUniqueWithoutGameInput = {
    where: BetDetailHistoryWhereUniqueInput
    update: XOR<BetDetailHistoryUpdateWithoutGameInput, BetDetailHistoryUncheckedUpdateWithoutGameInput>
    create: XOR<BetDetailHistoryCreateWithoutGameInput, BetDetailHistoryUncheckedCreateWithoutGameInput>
  }

  export type BetDetailHistoryUpdateWithWhereUniqueWithoutGameInput = {
    where: BetDetailHistoryWhereUniqueInput
    data: XOR<BetDetailHistoryUpdateWithoutGameInput, BetDetailHistoryUncheckedUpdateWithoutGameInput>
  }

  export type BetDetailHistoryUpdateManyWithWhereWithoutGameInput = {
    where: BetDetailHistoryScalarWhereInput
    data: XOR<BetDetailHistoryUpdateManyMutationInput, BetDetailHistoryUncheckedUpdateManyWithoutBetDetailHistoryInput>
  }

  export type ActionHistoryCreateManyAdminInput = {
    id?: string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    userId?: string | null
    agentId?: string | null
  }

  export type AgentCreateManyCreatedByInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
  }

  export type ActionHistoryUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneWithoutHistoryNestedInput
    user?: UserUpdateOneWithoutHistoryNestedInput
  }

  export type ActionHistoryUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActionHistoryUncheckedUpdateManyWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUpdateManyWithoutAgentNestedInput
    users?: UserUpdateManyWithoutAgentNestedInput
    quota?: QuotaUpdateManyWithoutAgentQuotaNestedInput
    status?: StatusUpdateManyWithoutApprovedByNestedInput
  }

  export type AgentUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUncheckedUpdateManyWithoutAgentNestedInput
    users?: UserUncheckedUpdateManyWithoutAgentNestedInput
    quota?: QuotaUncheckedUpdateManyWithoutAgentQuotaNestedInput
    status?: StatusUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type AgentUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActionHistoryCreateManyAgentInput = {
    id?: string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    userId?: string | null
    adminId?: string | null
  }

  export type UserCreateManyAgentInput = {
    id?: string
    email: string
    name: string
    password: string
    headImage: string
    active?: boolean
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
  }

  export type QuotaCreateManyAgentQuotaInput = {
    id?: string
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type StatusCreateManyApprovedByInput = {
    id?: string
    approval?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ActionHistoryUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutHistoryNestedInput
    user?: UserUpdateOneWithoutHistoryNestedInput
  }

  export type ActionHistoryUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUpdateManyWithoutUserNestedInput
    balance?: BalanceUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    playerSession?: PlayerSessionUpdateManyWithoutUserNestedInput
    withdrawal?: WithdrawalUpdateManyWithoutOwnerNestedInput
    deposit?: DepositUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    history?: ActionHistoryUncheckedUpdateManyWithoutUserNestedInput
    balance?: BalanceUncheckedUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    playerSession?: PlayerSessionUncheckedUpdateManyWithoutUserNestedInput
    withdrawal?: WithdrawalUncheckedUpdateManyWithoutOwnerNestedInput
    deposit?: DepositUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuotaUpdateWithoutAgentQuotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuotaUncheckedUpdateWithoutAgentQuotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuotaUncheckedUpdateManyWithoutQuotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StatusUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawal?: WithdrawalUpdateManyWithoutStatusNestedInput
    deposit?: DepositUpdateManyWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawal?: WithdrawalUncheckedUpdateManyWithoutStatusNestedInput
    deposit?: DepositUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateManyWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActionHistoryCreateManyUserInput = {
    id?: string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    agentId?: string | null
    adminId?: string | null
  }

  export type BalanceCreateManyOwnerInput = {
    id?: string
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BetDetailHistoryCreateManyOwnerInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createdAt?: Date | string
    gameId: number
  }

  export type PaymentHistoryCreateManyOwnerInput = {
    id?: string
    beforeScore: number
    changeScore: number
    newScore: number
    approval?: boolean
    createdAt?: Date | string
    approvalAt?: Date | string | null
  }

  export type PlayerSessionCreateManyUserInput = {
    id?: string
    gameSessionId: string
    betAmount: number
    betLines: number
    betResult: number
    createdAt?: Date | string
  }

  export type WithdrawalCreateManyOwnerInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    statusId: string
  }

  export type DepositCreateManyOwnerInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    statusId: string
  }

  export type ActionHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutHistoryNestedInput
    agent?: AgentUpdateOneWithoutHistoryNestedInput
  }

  export type ActionHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BalanceUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BalanceUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BalanceUncheckedUpdateManyWithoutBalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BetDetailHistoryUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameListUpdateOneRequiredWithoutBetDetailHistoryNestedInput
  }

  export type BetDetailHistoryUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type BetDetailHistoryUncheckedUpdateManyWithoutBetDetailHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentHistoryUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    changeScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    approval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentHistoryUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    changeScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    approval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutPaymentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    changeScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    approval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlayerSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    betAmount?: IntFieldUpdateOperationsInput | number
    betLines?: IntFieldUpdateOperationsInput | number
    betResult?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameSession?: GameSessionUpdateOneRequiredWithoutPlayerSessionNestedInput
  }

  export type PlayerSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameSessionId?: StringFieldUpdateOperationsInput | string
    betAmount?: IntFieldUpdateOperationsInput | number
    betLines?: IntFieldUpdateOperationsInput | number
    betResult?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerSessionUncheckedUpdateManyWithoutPlayerSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameSessionId?: StringFieldUpdateOperationsInput | string
    betAmount?: IntFieldUpdateOperationsInput | number
    betLines?: IntFieldUpdateOperationsInput | number
    betResult?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StatusUpdateOneRequiredWithoutWithdrawalNestedInput
  }

  export type WithdrawalUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusId?: StringFieldUpdateOperationsInput | string
  }

  export type WithdrawalUncheckedUpdateManyWithoutWithdrawalInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusId?: StringFieldUpdateOperationsInput | string
  }

  export type DepositUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StatusUpdateOneRequiredWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusId?: StringFieldUpdateOperationsInput | string
  }

  export type DepositUncheckedUpdateManyWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerSessionCreateManyGameSessionInput = {
    id?: string
    userId: string
    betAmount: number
    betLines: number
    betResult: number
    createdAt?: Date | string
  }

  export type PlayerSessionUpdateWithoutGameSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    betAmount?: IntFieldUpdateOperationsInput | number
    betLines?: IntFieldUpdateOperationsInput | number
    betResult?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlayerSessionNestedInput
  }

  export type PlayerSessionUncheckedUpdateWithoutGameSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    betAmount?: IntFieldUpdateOperationsInput | number
    betLines?: IntFieldUpdateOperationsInput | number
    betResult?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalCreateManyStatusInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ownerId: string
  }

  export type DepositCreateManyStatusInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ownerId: string
  }

  export type WithdrawalUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutWithdrawalNestedInput
  }

  export type WithdrawalUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type DepositUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type GameSessionCreateManyGameInput = {
    id?: string
    createdAt?: Date | string
  }

  export type BetDetailHistoryCreateManyGameInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createdAt?: Date | string
    ownerId: string
  }

  export type GameSessionUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerSession?: PlayerSessionUpdateManyWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerSession?: PlayerSessionUncheckedUpdateManyWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateManyWithoutGameSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetDetailHistoryUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutBetDetailHistoryNestedInput
  }

  export type BetDetailHistoryUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
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