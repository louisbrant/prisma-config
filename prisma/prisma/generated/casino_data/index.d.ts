
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
  token: string | null
  qauota: number
  createdAt: Date
  updatedAt: Date | null
  accessToken: string | null
  adminId: string
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  email: string
  username: string
  password: string
  headImage: string
  active: boolean
  token: string
  createdAt: Date
  updatedAt: Date
  accessToken: string
  agentId: string
}

/**
 * Model ActionHistory
 * 
 */
export type ActionHistory = {
  id: string
  type: number
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
  type: number
  balance: number
  createdAt: Date
  updatedAt: Date
  ownerId: string
}

/**
 * Model GameList
 * 
 */
export type GameList = {
  id: number
  eGameName: string
  cGameName: string
  type: number
  json: Prisma.JsonValue | null
  createdAt: Date
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
  approvalAt: Date
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
  createAt: Date
  updateAt: Date
  ownerId: string
  gameId: number
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
   * `prisma.gameList`: Exposes CRUD operations for the **GameList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameLists
    * const gameLists = await prisma.gameList.findMany()
    * ```
    */
  get gameList(): Prisma.GameListDelegate<GlobalReject>;

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
    GameList: 'GameList',
    PaymentHistory: 'PaymentHistory',
    BetDetailHistory: 'BetDetailHistory'
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
    agent: number
    history: number
  }

  export type AdminCountOutputTypeSelect = {
    agent?: boolean
    history?: boolean
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
    users: number
    history: number
  }

  export type AgentCountOutputTypeSelect = {
    users?: boolean
    history?: boolean
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
    balance: number
    betDetailHistory: number
    paymentHistory: number
    history: number
  }

  export type UserCountOutputTypeSelect = {
    balance?: boolean
    betDetailHistory?: boolean
    paymentHistory?: boolean
    history?: boolean
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
   * Count Type GameListCountOutputType
   */


  export type GameListCountOutputType = {
    betDetailHistory: number
  }

  export type GameListCountOutputTypeSelect = {
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
    agent?: boolean | Admin$agentArgs
    history?: boolean | Admin$historyArgs
    _count?: boolean | AdminCountOutputTypeArgs
  }


  export type AdminInclude = {
    agent?: boolean | Admin$agentArgs
    history?: boolean | Admin$historyArgs
    _count?: boolean | AdminCountOutputTypeArgs
  }

  export type AdminGetPayload<S extends boolean | null | undefined | AdminArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Admin :
    S extends undefined ? never :
    S extends { include: any } & (AdminArgs | AdminFindManyArgs)
    ? Admin  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'agent' ? Array < AgentGetPayload<S['include'][P]>>  :
        P extends 'history' ? Array < ActionHistoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? AdminCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AdminArgs | AdminFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'agent' ? Array < AgentGetPayload<S['select'][P]>>  :
        P extends 'history' ? Array < ActionHistoryGetPayload<S['select'][P]>>  :
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

    agent<T extends Admin$agentArgs= {}>(args?: Subset<T, Admin$agentArgs>): Prisma.PrismaPromise<Array<AgentGetPayload<T>>| Null>;

    history<T extends Admin$historyArgs= {}>(args?: Subset<T, Admin$historyArgs>): Prisma.PrismaPromise<Array<ActionHistoryGetPayload<T>>| Null>;

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
    _avg: AgentAvgAggregateOutputType | null
    _sum: AgentSumAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentAvgAggregateOutputType = {
    qauota: number | null
  }

  export type AgentSumAggregateOutputType = {
    qauota: number | null
  }

  export type AgentMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    active: boolean | null
    token: string | null
    qauota: number | null
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
    token: string | null
    qauota: number | null
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
    token: number
    qauota: number
    createdAt: number
    updatedAt: number
    accessToken: number
    adminId: number
    _all: number
  }


  export type AgentAvgAggregateInputType = {
    qauota?: true
  }

  export type AgentSumAggregateInputType = {
    qauota?: true
  }

  export type AgentMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    active?: true
    token?: true
    qauota?: true
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
    token?: true
    qauota?: true
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
    token?: true
    qauota?: true
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
     * Select which fields to average
    **/
    _avg?: AgentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentSumAggregateInputType
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
    _avg?: AgentAvgAggregateInputType
    _sum?: AgentSumAggregateInputType
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }


  export type AgentGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    active: boolean
    token: string | null
    qauota: number
    createdAt: Date
    updatedAt: Date | null
    accessToken: string | null
    adminId: string
    _count: AgentCountAggregateOutputType | null
    _avg: AgentAvgAggregateOutputType | null
    _sum: AgentSumAggregateOutputType | null
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
    token?: boolean
    qauota?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessToken?: boolean
    adminId?: boolean
    users?: boolean | Agent$usersArgs
    createdBy?: boolean | AdminArgs
    history?: boolean | Agent$historyArgs
    _count?: boolean | AgentCountOutputTypeArgs
  }


  export type AgentInclude = {
    users?: boolean | Agent$usersArgs
    createdBy?: boolean | AdminArgs
    history?: boolean | Agent$historyArgs
    _count?: boolean | AgentCountOutputTypeArgs
  }

  export type AgentGetPayload<S extends boolean | null | undefined | AgentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Agent :
    S extends undefined ? never :
    S extends { include: any } & (AgentArgs | AgentFindManyArgs)
    ? Agent  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'createdBy' ? AdminGetPayload<S['include'][P]> :
        P extends 'history' ? Array < ActionHistoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? AgentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AgentArgs | AgentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'createdBy' ? AdminGetPayload<S['select'][P]> :
        P extends 'history' ? Array < ActionHistoryGetPayload<S['select'][P]>>  :
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

    users<T extends Agent$usersArgs= {}>(args?: Subset<T, Agent$usersArgs>): Prisma.PrismaPromise<Array<UserGetPayload<T>>| Null>;

    createdBy<T extends AdminArgs= {}>(args?: Subset<T, AdminArgs>): Prisma__AdminClient<AdminGetPayload<T> | Null>;

    history<T extends Agent$historyArgs= {}>(args?: Subset<T, Agent$historyArgs>): Prisma.PrismaPromise<Array<ActionHistoryGetPayload<T>>| Null>;

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
    username: string | null
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
    username: string | null
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
    username: number
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
    username?: true
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
    username?: true
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
    username?: true
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
    username: string
    password: string
    headImage: string
    active: boolean
    token: string
    createdAt: Date
    updatedAt: Date
    accessToken: string
    agentId: string
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
    username?: boolean
    password?: boolean
    headImage?: boolean
    active?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessToken?: boolean
    agentId?: boolean
    createdByAgent?: boolean | AgentArgs
    balance?: boolean | User$balanceArgs
    betDetailHistory?: boolean | User$betDetailHistoryArgs
    paymentHistory?: boolean | User$paymentHistoryArgs
    history?: boolean | User$historyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    createdByAgent?: boolean | AgentArgs
    balance?: boolean | User$balanceArgs
    betDetailHistory?: boolean | User$betDetailHistoryArgs
    paymentHistory?: boolean | User$paymentHistoryArgs
    history?: boolean | User$historyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'createdByAgent' ? AgentGetPayload<S['include'][P]> :
        P extends 'balance' ? Array < BalanceGetPayload<S['include'][P]>>  :
        P extends 'betDetailHistory' ? Array < BetDetailHistoryGetPayload<S['include'][P]>>  :
        P extends 'paymentHistory' ? Array < PaymentHistoryGetPayload<S['include'][P]>>  :
        P extends 'history' ? Array < ActionHistoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'createdByAgent' ? AgentGetPayload<S['select'][P]> :
        P extends 'balance' ? Array < BalanceGetPayload<S['select'][P]>>  :
        P extends 'betDetailHistory' ? Array < BetDetailHistoryGetPayload<S['select'][P]>>  :
        P extends 'paymentHistory' ? Array < PaymentHistoryGetPayload<S['select'][P]>>  :
        P extends 'history' ? Array < ActionHistoryGetPayload<S['select'][P]>>  :
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

    createdByAgent<T extends AgentArgs= {}>(args?: Subset<T, AgentArgs>): Prisma__AgentClient<AgentGetPayload<T> | Null>;

    balance<T extends User$balanceArgs= {}>(args?: Subset<T, User$balanceArgs>): Prisma.PrismaPromise<Array<BalanceGetPayload<T>>| Null>;

    betDetailHistory<T extends User$betDetailHistoryArgs= {}>(args?: Subset<T, User$betDetailHistoryArgs>): Prisma.PrismaPromise<Array<BetDetailHistoryGetPayload<T>>| Null>;

    paymentHistory<T extends User$paymentHistoryArgs= {}>(args?: Subset<T, User$paymentHistoryArgs>): Prisma.PrismaPromise<Array<PaymentHistoryGetPayload<T>>| Null>;

    history<T extends User$historyArgs= {}>(args?: Subset<T, User$historyArgs>): Prisma.PrismaPromise<Array<ActionHistoryGetPayload<T>>| Null>;

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
    _avg: ActionHistoryAvgAggregateOutputType | null
    _sum: ActionHistorySumAggregateOutputType | null
    _min: ActionHistoryMinAggregateOutputType | null
    _max: ActionHistoryMaxAggregateOutputType | null
  }

  export type ActionHistoryAvgAggregateOutputType = {
    type: number | null
  }

  export type ActionHistorySumAggregateOutputType = {
    type: number | null
  }

  export type ActionHistoryMinAggregateOutputType = {
    id: string | null
    type: number | null
    ip: string | null
    createdAt: Date | null
    userId: string | null
    agentId: string | null
    adminId: string | null
  }

  export type ActionHistoryMaxAggregateOutputType = {
    id: string | null
    type: number | null
    ip: string | null
    createdAt: Date | null
    userId: string | null
    agentId: string | null
    adminId: string | null
  }

  export type ActionHistoryCountAggregateOutputType = {
    id: number
    type: number
    newValueJson: number
    ip: number
    createdAt: number
    userId: number
    agentId: number
    adminId: number
    _all: number
  }


  export type ActionHistoryAvgAggregateInputType = {
    type?: true
  }

  export type ActionHistorySumAggregateInputType = {
    type?: true
  }

  export type ActionHistoryMinAggregateInputType = {
    id?: true
    type?: true
    ip?: true
    createdAt?: true
    userId?: true
    agentId?: true
    adminId?: true
  }

  export type ActionHistoryMaxAggregateInputType = {
    id?: true
    type?: true
    ip?: true
    createdAt?: true
    userId?: true
    agentId?: true
    adminId?: true
  }

  export type ActionHistoryCountAggregateInputType = {
    id?: true
    type?: true
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
     * Select which fields to average
    **/
    _avg?: ActionHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionHistorySumAggregateInputType
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
    _avg?: ActionHistoryAvgAggregateInputType
    _sum?: ActionHistorySumAggregateInputType
    _min?: ActionHistoryMinAggregateInputType
    _max?: ActionHistoryMaxAggregateInputType
  }


  export type ActionHistoryGroupByOutputType = {
    id: string
    type: number
    newValueJson: JsonValue | null
    ip: string
    createdAt: Date
    userId: string | null
    agentId: string | null
    adminId: string | null
    _count: ActionHistoryCountAggregateOutputType | null
    _avg: ActionHistoryAvgAggregateOutputType | null
    _sum: ActionHistorySumAggregateOutputType | null
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
    type?: boolean
    newValueJson?: boolean
    ip?: boolean
    createdAt?: boolean
    userId?: boolean
    agentId?: boolean
    adminId?: boolean
    user?: boolean | UserArgs
    agent?: boolean | AgentArgs
    admin?: boolean | AdminArgs
  }


  export type ActionHistoryInclude = {
    user?: boolean | UserArgs
    agent?: boolean | AgentArgs
    admin?: boolean | AdminArgs
  }

  export type ActionHistoryGetPayload<S extends boolean | null | undefined | ActionHistoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ActionHistory :
    S extends undefined ? never :
    S extends { include: any } & (ActionHistoryArgs | ActionHistoryFindManyArgs)
    ? ActionHistory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :
        P extends 'agent' ? AgentGetPayload<S['include'][P]> | null :
        P extends 'admin' ? AdminGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (ActionHistoryArgs | ActionHistoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :
        P extends 'agent' ? AgentGetPayload<S['select'][P]> | null :
        P extends 'admin' ? AdminGetPayload<S['select'][P]> | null :  P extends keyof ActionHistory ? ActionHistory[P] : never
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

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    agent<T extends AgentArgs= {}>(args?: Subset<T, AgentArgs>): Prisma__AgentClient<AgentGetPayload<T> | Null>;

    admin<T extends AdminArgs= {}>(args?: Subset<T, AdminArgs>): Prisma__AdminClient<AdminGetPayload<T> | Null>;

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
    type: number | null
    balance: number | null
  }

  export type BalanceSumAggregateOutputType = {
    type: number | null
    balance: number | null
  }

  export type BalanceMinAggregateOutputType = {
    id: string | null
    type: number | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type BalanceMaxAggregateOutputType = {
    id: string | null
    type: number | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type BalanceCountAggregateOutputType = {
    id: number
    type: number
    balance: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type BalanceAvgAggregateInputType = {
    type?: true
    balance?: true
  }

  export type BalanceSumAggregateInputType = {
    type?: true
    balance?: true
  }

  export type BalanceMinAggregateInputType = {
    id?: true
    type?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type BalanceMaxAggregateInputType = {
    id?: true
    type?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type BalanceCountAggregateInputType = {
    id?: true
    type?: true
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
    type: number
    balance: number
    createdAt: Date
    updatedAt: Date
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
    type?: boolean
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
    type: number
    json: JsonValue | null
    createdAt: Date
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
    betDetailHistory?: boolean | GameList$betDetailHistoryArgs
    _count?: boolean | GameListCountOutputTypeArgs
  }


  export type GameListInclude = {
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
        P extends 'betDetailHistory' ? Array < BetDetailHistoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? GameListCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (GameListArgs | GameListFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
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
    approvalAt: Date
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
    createAt: Date | null
    updateAt: Date | null
    ownerId: string | null
    gameId: number | null
  }

  export type BetDetailHistoryMaxAggregateOutputType = {
    id: string | null
    beforeScore: number | null
    betScore: number | null
    winScore: number | null
    newScore: number | null
    createAt: Date | null
    updateAt: Date | null
    ownerId: string | null
    gameId: number | null
  }

  export type BetDetailHistoryCountAggregateOutputType = {
    id: number
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createAt: number
    updateAt: number
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
    createAt?: true
    updateAt?: true
    ownerId?: true
    gameId?: true
  }

  export type BetDetailHistoryMaxAggregateInputType = {
    id?: true
    beforeScore?: true
    betScore?: true
    winScore?: true
    newScore?: true
    createAt?: true
    updateAt?: true
    ownerId?: true
    gameId?: true
  }

  export type BetDetailHistoryCountAggregateInputType = {
    id?: true
    beforeScore?: true
    betScore?: true
    winScore?: true
    newScore?: true
    createAt?: true
    updateAt?: true
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
    createAt: Date
    updateAt: Date
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
    createAt?: boolean
    updateAt?: boolean
    ownerId?: boolean
    gameId?: boolean
    owner?: boolean | UserArgs
    gameList?: boolean | GameListArgs
  }


  export type BetDetailHistoryInclude = {
    owner?: boolean | UserArgs
    gameList?: boolean | GameListArgs
  }

  export type BetDetailHistoryGetPayload<S extends boolean | null | undefined | BetDetailHistoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BetDetailHistory :
    S extends undefined ? never :
    S extends { include: any } & (BetDetailHistoryArgs | BetDetailHistoryFindManyArgs)
    ? BetDetailHistory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'owner' ? UserGetPayload<S['include'][P]> :
        P extends 'gameList' ? GameListGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BetDetailHistoryArgs | BetDetailHistoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'owner' ? UserGetPayload<S['select'][P]> :
        P extends 'gameList' ? GameListGetPayload<S['select'][P]> :  P extends keyof BetDetailHistory ? BetDetailHistory[P] : never
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

    gameList<T extends GameListArgs= {}>(args?: Subset<T, GameListArgs>): Prisma__GameListClient<GameListGetPayload<T> | Null>;

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
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ActionHistoryScalarFieldEnum: {
    id: 'id',
    type: 'type',
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
    token: 'token',
    qauota: 'qauota',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    accessToken: 'accessToken',
    adminId: 'adminId'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const BalanceScalarFieldEnum: {
    id: 'id',
    type: 'type',
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
    createAt: 'createAt',
    updateAt: 'updateAt',
    ownerId: 'ownerId',
    gameId: 'gameId'
  };

  export type BetDetailHistoryScalarFieldEnum = (typeof BetDetailHistoryScalarFieldEnum)[keyof typeof BetDetailHistoryScalarFieldEnum]


  export const GameListScalarFieldEnum: {
    id: 'id',
    eGameName: 'eGameName',
    cGameName: 'cGameName',
    type: 'type',
    json: 'json',
    createdAt: 'createdAt'
  };

  export type GameListScalarFieldEnum = (typeof GameListScalarFieldEnum)[keyof typeof GameListScalarFieldEnum]


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


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
    username: 'username',
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
    agent?: AgentListRelationFilter
    history?: ActionHistoryListRelationFilter
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
    agent?: AgentOrderByRelationAggregateInput
    history?: ActionHistoryOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = {
    id?: string
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
    token?: StringNullableFilter | string | null
    qauota?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    accessToken?: StringNullableFilter | string | null
    adminId?: UuidFilter | string
    users?: UserListRelationFilter
    createdBy?: XOR<AdminRelationFilter, AdminWhereInput>
    history?: ActionHistoryListRelationFilter
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    active?: SortOrder
    token?: SortOrder
    qauota?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    adminId?: SortOrder
    users?: UserOrderByRelationAggregateInput
    createdBy?: AdminOrderByWithRelationInput
    history?: ActionHistoryOrderByRelationAggregateInput
  }

  export type AgentWhereUniqueInput = {
    id?: string
  }

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    active?: SortOrder
    token?: SortOrder
    qauota?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    adminId?: SortOrder
    _count?: AgentCountOrderByAggregateInput
    _avg?: AgentAvgOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
    _sum?: AgentSumOrderByAggregateInput
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
    token?: StringNullableWithAggregatesFilter | string | null
    qauota?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    accessToken?: StringNullableWithAggregatesFilter | string | null
    adminId?: UuidWithAggregatesFilter | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: UuidFilter | string
    email?: StringFilter | string
    username?: StringFilter | string
    password?: StringFilter | string
    headImage?: StringFilter | string
    active?: BoolFilter | boolean
    token?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    accessToken?: StringFilter | string
    agentId?: UuidFilter | string
    createdByAgent?: XOR<AgentRelationFilter, AgentWhereInput>
    balance?: BalanceListRelationFilter
    betDetailHistory?: BetDetailHistoryListRelationFilter
    paymentHistory?: PaymentHistoryListRelationFilter
    history?: ActionHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    headImage?: SortOrder
    active?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    agentId?: SortOrder
    createdByAgent?: AgentOrderByWithRelationInput
    balance?: BalanceOrderByRelationAggregateInput
    betDetailHistory?: BetDetailHistoryOrderByRelationAggregateInput
    paymentHistory?: PaymentHistoryOrderByRelationAggregateInput
    history?: ActionHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
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
    username?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    headImage?: StringWithAggregatesFilter | string
    active?: BoolWithAggregatesFilter | boolean
    token?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    accessToken?: StringWithAggregatesFilter | string
    agentId?: UuidWithAggregatesFilter | string
  }

  export type ActionHistoryWhereInput = {
    AND?: Enumerable<ActionHistoryWhereInput>
    OR?: Enumerable<ActionHistoryWhereInput>
    NOT?: Enumerable<ActionHistoryWhereInput>
    id?: UuidFilter | string
    type?: IntFilter | number
    newValueJson?: JsonNullableFilter
    ip?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    userId?: UuidNullableFilter | string | null
    agentId?: UuidNullableFilter | string | null
    adminId?: UuidNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    agent?: XOR<AgentRelationFilter, AgentWhereInput> | null
    admin?: XOR<AdminRelationFilter, AdminWhereInput> | null
  }

  export type ActionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    newValueJson?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    adminId?: SortOrder
    user?: UserOrderByWithRelationInput
    agent?: AgentOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type ActionHistoryWhereUniqueInput = {
    id?: string
  }

  export type ActionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    newValueJson?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    adminId?: SortOrder
    _count?: ActionHistoryCountOrderByAggregateInput
    _avg?: ActionHistoryAvgOrderByAggregateInput
    _max?: ActionHistoryMaxOrderByAggregateInput
    _min?: ActionHistoryMinOrderByAggregateInput
    _sum?: ActionHistorySumOrderByAggregateInput
  }

  export type ActionHistoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ActionHistoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<ActionHistoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ActionHistoryScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    type?: IntWithAggregatesFilter | number
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
    type?: IntFilter | number
    balance?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    ownerId?: UuidFilter | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BalanceOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
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
    type?: SortOrder
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
    type?: IntWithAggregatesFilter | number
    balance?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    ownerId?: UuidWithAggregatesFilter | string
  }

  export type GameListWhereInput = {
    AND?: Enumerable<GameListWhereInput>
    OR?: Enumerable<GameListWhereInput>
    NOT?: Enumerable<GameListWhereInput>
    id?: IntFilter | number
    eGameName?: StringFilter | string
    cGameName?: StringFilter | string
    type?: IntFilter | number
    json?: JsonNullableFilter
    createdAt?: DateTimeFilter | Date | string
    betDetailHistory?: BetDetailHistoryListRelationFilter
  }

  export type GameListOrderByWithRelationInput = {
    id?: SortOrder
    eGameName?: SortOrder
    cGameName?: SortOrder
    type?: SortOrder
    json?: SortOrder
    createdAt?: SortOrder
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
    type?: IntWithAggregatesFilter | number
    json?: JsonNullableWithAggregatesFilter
    createdAt?: DateTimeWithAggregatesFilter | Date | string
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
    approvalAt?: DateTimeFilter | Date | string
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
    approvalAt?: DateTimeWithAggregatesFilter | Date | string
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
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    ownerId?: UuidFilter | string
    gameId?: IntFilter | number
    owner?: XOR<UserRelationFilter, UserWhereInput>
    gameList?: XOR<GameListRelationFilter, GameListWhereInput>
  }

  export type BetDetailHistoryOrderByWithRelationInput = {
    id?: SortOrder
    beforeScore?: SortOrder
    betScore?: SortOrder
    winScore?: SortOrder
    newScore?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    ownerId?: SortOrder
    gameId?: SortOrder
    owner?: UserOrderByWithRelationInput
    gameList?: GameListOrderByWithRelationInput
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
    createAt?: SortOrder
    updateAt?: SortOrder
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
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    ownerId?: UuidWithAggregatesFilter | string
    gameId?: IntWithAggregatesFilter | number
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
    agent?: AgentCreateNestedManyWithoutCreatedByInput
    history?: ActionHistoryCreateNestedManyWithoutAdminInput
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
    agent?: AgentUncheckedCreateNestedManyWithoutCreatedByInput
    history?: ActionHistoryUncheckedCreateNestedManyWithoutAdminInput
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
    agent?: AgentUpdateManyWithoutCreatedByNestedInput
    history?: ActionHistoryUpdateManyWithoutAdminNestedInput
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
    agent?: AgentUncheckedUpdateManyWithoutCreatedByNestedInput
    history?: ActionHistoryUncheckedUpdateManyWithoutAdminNestedInput
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
    token?: string | null
    qauota?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    users?: UserCreateNestedManyWithoutCreatedByAgentInput
    createdBy: AdminCreateNestedOneWithoutAgentInput
    history?: ActionHistoryCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    token?: string | null
    qauota?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    adminId: string
    users?: UserUncheckedCreateNestedManyWithoutCreatedByAgentInput
    history?: ActionHistoryUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    qauota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutCreatedByAgentNestedInput
    createdBy?: AdminUpdateOneRequiredWithoutAgentNestedInput
    history?: ActionHistoryUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    qauota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutCreatedByAgentNestedInput
    history?: ActionHistoryUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    token?: string | null
    qauota?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    adminId: string
  }

  export type AgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    qauota?: IntFieldUpdateOperationsInput | number
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
    token?: NullableStringFieldUpdateOperationsInput | string | null
    qauota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    headImage: string
    active?: boolean
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessToken: string
    createdByAgent: AgentCreateNestedOneWithoutUsersInput
    balance?: BalanceCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    history?: ActionHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    headImage: string
    active?: boolean
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessToken: string
    agentId: string
    balance?: BalanceUncheckedCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    history?: ActionHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdByAgent?: AgentUpdateOneRequiredWithoutUsersNestedInput
    balance?: BalanceUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    history?: ActionHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    balance?: BalanceUncheckedUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    history?: ActionHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    password: string
    headImage: string
    active?: boolean
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessToken: string
    agentId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionHistoryCreateInput = {
    id?: string
    type: number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutHistoryInput
    agent?: AgentCreateNestedOneWithoutHistoryInput
    admin?: AdminCreateNestedOneWithoutHistoryInput
  }

  export type ActionHistoryUncheckedCreateInput = {
    id?: string
    type: number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    userId?: string | null
    agentId?: string | null
    adminId?: string | null
  }

  export type ActionHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutHistoryNestedInput
    agent?: AgentUpdateOneWithoutHistoryNestedInput
    admin?: AdminUpdateOneWithoutHistoryNestedInput
  }

  export type ActionHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActionHistoryCreateManyInput = {
    id?: string
    type: number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    userId?: string | null
    agentId?: string | null
    adminId?: string | null
  }

  export type ActionHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BalanceCreateInput = {
    id?: string
    type: number
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutBalanceInput
  }

  export type BalanceUncheckedCreateInput = {
    id?: string
    type: number
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
  }

  export type BalanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutBalanceNestedInput
  }

  export type BalanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type BalanceCreateManyInput = {
    id?: string
    type: number
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
  }

  export type BalanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type GameListCreateInput = {
    id: number
    eGameName: string
    cGameName: string
    type: number
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    betDetailHistory?: BetDetailHistoryCreateNestedManyWithoutGameListInput
  }

  export type GameListUncheckedCreateInput = {
    id: number
    eGameName: string
    cGameName: string
    type: number
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    betDetailHistory?: BetDetailHistoryUncheckedCreateNestedManyWithoutGameListInput
  }

  export type GameListUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eGameName?: StringFieldUpdateOperationsInput | string
    cGameName?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    betDetailHistory?: BetDetailHistoryUpdateManyWithoutGameListNestedInput
  }

  export type GameListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eGameName?: StringFieldUpdateOperationsInput | string
    cGameName?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    betDetailHistory?: BetDetailHistoryUncheckedUpdateManyWithoutGameListNestedInput
  }

  export type GameListCreateManyInput = {
    id: number
    eGameName: string
    cGameName: string
    type: number
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type GameListUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    eGameName?: StringFieldUpdateOperationsInput | string
    cGameName?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eGameName?: StringFieldUpdateOperationsInput | string
    cGameName?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryCreateInput = {
    id?: string
    beforeScore: number
    changeScore: number
    newScore: number
    approval?: boolean
    createdAt?: Date | string
    approvalAt?: Date | string
    owner: UserCreateNestedOneWithoutPaymentHistoryInput
  }

  export type PaymentHistoryUncheckedCreateInput = {
    id?: string
    beforeScore: number
    changeScore: number
    newScore: number
    approval?: boolean
    createdAt?: Date | string
    approvalAt?: Date | string
    ownerId: string
  }

  export type PaymentHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    changeScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    approval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPaymentHistoryNestedInput
  }

  export type PaymentHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    changeScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    approval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentHistoryCreateManyInput = {
    id?: string
    beforeScore: number
    changeScore: number
    newScore: number
    approval?: boolean
    createdAt?: Date | string
    approvalAt?: Date | string
    ownerId: string
  }

  export type PaymentHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    changeScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    approval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    changeScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    approval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type BetDetailHistoryCreateInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createAt?: Date | string
    updateAt?: Date | string
    owner: UserCreateNestedOneWithoutBetDetailHistoryInput
    gameList: GameListCreateNestedOneWithoutBetDetailHistoryInput
  }

  export type BetDetailHistoryUncheckedCreateInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createAt?: Date | string
    updateAt?: Date | string
    ownerId: string
    gameId: number
  }

  export type BetDetailHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutBetDetailHistoryNestedInput
    gameList?: GameListUpdateOneRequiredWithoutBetDetailHistoryNestedInput
  }

  export type BetDetailHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type BetDetailHistoryCreateManyInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createAt?: Date | string
    updateAt?: Date | string
    ownerId: string
    gameId: number
  }

  export type BetDetailHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetDetailHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
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

  export type AgentListRelationFilter = {
    every?: AgentWhereInput
    some?: AgentWhereInput
    none?: AgentWhereInput
  }

  export type ActionHistoryListRelationFilter = {
    every?: ActionHistoryWhereInput
    some?: ActionHistoryWhereInput
    none?: ActionHistoryWhereInput
  }

  export type AgentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActionHistoryOrderByRelationAggregateInput = {
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type AdminRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    active?: SortOrder
    token?: SortOrder
    qauota?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    adminId?: SortOrder
  }

  export type AgentAvgOrderByAggregateInput = {
    qauota?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    active?: SortOrder
    token?: SortOrder
    qauota?: SortOrder
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
    token?: SortOrder
    qauota?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    adminId?: SortOrder
  }

  export type AgentSumOrderByAggregateInput = {
    qauota?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type AgentRelationFilter = {
    is?: AgentWhereInput
    isNot?: AgentWhereInput
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

  export type BalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BetDetailHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
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
    username?: SortOrder
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
    username?: SortOrder
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ActionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    newValueJson?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    adminId?: SortOrder
  }

  export type ActionHistoryAvgOrderByAggregateInput = {
    type?: SortOrder
  }

  export type ActionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    adminId?: SortOrder
  }

  export type ActionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    adminId?: SortOrder
  }

  export type ActionHistorySumOrderByAggregateInput = {
    type?: SortOrder
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

  export type BalanceCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type BalanceAvgOrderByAggregateInput = {
    type?: SortOrder
    balance?: SortOrder
  }

  export type BalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type BalanceMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type BalanceSumOrderByAggregateInput = {
    type?: SortOrder
    balance?: SortOrder
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
    createAt?: SortOrder
    updateAt?: SortOrder
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
    createAt?: SortOrder
    updateAt?: SortOrder
    ownerId?: SortOrder
    gameId?: SortOrder
  }

  export type BetDetailHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    beforeScore?: SortOrder
    betScore?: SortOrder
    winScore?: SortOrder
    newScore?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
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

  export type AgentCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<AgentCreateWithoutCreatedByInput>, Enumerable<AgentUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<AgentCreateOrConnectWithoutCreatedByInput>
    createMany?: AgentCreateManyCreatedByInputEnvelope
    connect?: Enumerable<AgentWhereUniqueInput>
  }

  export type ActionHistoryCreateNestedManyWithoutAdminInput = {
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

  export type ActionHistoryUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<ActionHistoryCreateWithoutAdminInput>, Enumerable<ActionHistoryUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<ActionHistoryCreateOrConnectWithoutAdminInput>
    createMany?: ActionHistoryCreateManyAdminInputEnvelope
    connect?: Enumerable<ActionHistoryWhereUniqueInput>
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

  export type UserCreateNestedManyWithoutCreatedByAgentInput = {
    create?: XOR<Enumerable<UserCreateWithoutCreatedByAgentInput>, Enumerable<UserUncheckedCreateWithoutCreatedByAgentInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCreatedByAgentInput>
    createMany?: UserCreateManyCreatedByAgentInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type AdminCreateNestedOneWithoutAgentInput = {
    create?: XOR<AdminCreateWithoutAgentInput, AdminUncheckedCreateWithoutAgentInput>
    connectOrCreate?: AdminCreateOrConnectWithoutAgentInput
    connect?: AdminWhereUniqueInput
  }

  export type ActionHistoryCreateNestedManyWithoutAgentInput = {
    create?: XOR<Enumerable<ActionHistoryCreateWithoutAgentInput>, Enumerable<ActionHistoryUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<ActionHistoryCreateOrConnectWithoutAgentInput>
    createMany?: ActionHistoryCreateManyAgentInputEnvelope
    connect?: Enumerable<ActionHistoryWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutCreatedByAgentInput = {
    create?: XOR<Enumerable<UserCreateWithoutCreatedByAgentInput>, Enumerable<UserUncheckedCreateWithoutCreatedByAgentInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCreatedByAgentInput>
    createMany?: UserCreateManyCreatedByAgentInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type ActionHistoryUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<Enumerable<ActionHistoryCreateWithoutAgentInput>, Enumerable<ActionHistoryUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<ActionHistoryCreateOrConnectWithoutAgentInput>
    createMany?: ActionHistoryCreateManyAgentInputEnvelope
    connect?: Enumerable<ActionHistoryWhereUniqueInput>
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

  export type UserUpdateManyWithoutCreatedByAgentNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutCreatedByAgentInput>, Enumerable<UserUncheckedCreateWithoutCreatedByAgentInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCreatedByAgentInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutCreatedByAgentInput>
    createMany?: UserCreateManyCreatedByAgentInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutCreatedByAgentInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutCreatedByAgentInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type AdminUpdateOneRequiredWithoutAgentNestedInput = {
    create?: XOR<AdminCreateWithoutAgentInput, AdminUncheckedCreateWithoutAgentInput>
    connectOrCreate?: AdminCreateOrConnectWithoutAgentInput
    upsert?: AdminUpsertWithoutAgentInput
    connect?: AdminWhereUniqueInput
    update?: XOR<AdminUpdateWithoutAgentInput, AdminUncheckedUpdateWithoutAgentInput>
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

  export type UserUncheckedUpdateManyWithoutCreatedByAgentNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutCreatedByAgentInput>, Enumerable<UserUncheckedCreateWithoutCreatedByAgentInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCreatedByAgentInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutCreatedByAgentInput>
    createMany?: UserCreateManyCreatedByAgentInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutCreatedByAgentInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutCreatedByAgentInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
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

  export type AgentCreateNestedOneWithoutUsersInput = {
    create?: XOR<AgentCreateWithoutUsersInput, AgentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AgentCreateOrConnectWithoutUsersInput
    connect?: AgentWhereUniqueInput
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

  export type ActionHistoryCreateNestedManyWithoutUserInput = {
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

  export type ActionHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ActionHistoryCreateWithoutUserInput>, Enumerable<ActionHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ActionHistoryCreateOrConnectWithoutUserInput>
    createMany?: ActionHistoryCreateManyUserInputEnvelope
    connect?: Enumerable<ActionHistoryWhereUniqueInput>
  }

  export type AgentUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<AgentCreateWithoutUsersInput, AgentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AgentCreateOrConnectWithoutUsersInput
    upsert?: AgentUpsertWithoutUsersInput
    connect?: AgentWhereUniqueInput
    update?: XOR<AgentUpdateWithoutUsersInput, AgentUncheckedUpdateWithoutUsersInput>
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

  export type UserCreateNestedOneWithoutHistoryInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type AgentCreateNestedOneWithoutHistoryInput = {
    create?: XOR<AgentCreateWithoutHistoryInput, AgentUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: AgentCreateOrConnectWithoutHistoryInput
    connect?: AgentWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutHistoryInput = {
    create?: XOR<AdminCreateWithoutHistoryInput, AdminUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: AdminCreateOrConnectWithoutHistoryInput
    connect?: AdminWhereUniqueInput
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

  export type AgentUpdateOneWithoutHistoryNestedInput = {
    create?: XOR<AgentCreateWithoutHistoryInput, AgentUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: AgentCreateOrConnectWithoutHistoryInput
    upsert?: AgentUpsertWithoutHistoryInput
    disconnect?: boolean
    delete?: boolean
    connect?: AgentWhereUniqueInput
    update?: XOR<AgentUpdateWithoutHistoryInput, AgentUncheckedUpdateWithoutHistoryInput>
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

  export type UserCreateNestedOneWithoutBalanceInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBalanceNestedInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    upsert?: UserUpsertWithoutBalanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type BetDetailHistoryCreateNestedManyWithoutGameListInput = {
    create?: XOR<Enumerable<BetDetailHistoryCreateWithoutGameListInput>, Enumerable<BetDetailHistoryUncheckedCreateWithoutGameListInput>>
    connectOrCreate?: Enumerable<BetDetailHistoryCreateOrConnectWithoutGameListInput>
    createMany?: BetDetailHistoryCreateManyGameListInputEnvelope
    connect?: Enumerable<BetDetailHistoryWhereUniqueInput>
  }

  export type BetDetailHistoryUncheckedCreateNestedManyWithoutGameListInput = {
    create?: XOR<Enumerable<BetDetailHistoryCreateWithoutGameListInput>, Enumerable<BetDetailHistoryUncheckedCreateWithoutGameListInput>>
    connectOrCreate?: Enumerable<BetDetailHistoryCreateOrConnectWithoutGameListInput>
    createMany?: BetDetailHistoryCreateManyGameListInputEnvelope
    connect?: Enumerable<BetDetailHistoryWhereUniqueInput>
  }

  export type BetDetailHistoryUpdateManyWithoutGameListNestedInput = {
    create?: XOR<Enumerable<BetDetailHistoryCreateWithoutGameListInput>, Enumerable<BetDetailHistoryUncheckedCreateWithoutGameListInput>>
    connectOrCreate?: Enumerable<BetDetailHistoryCreateOrConnectWithoutGameListInput>
    upsert?: Enumerable<BetDetailHistoryUpsertWithWhereUniqueWithoutGameListInput>
    createMany?: BetDetailHistoryCreateManyGameListInputEnvelope
    set?: Enumerable<BetDetailHistoryWhereUniqueInput>
    disconnect?: Enumerable<BetDetailHistoryWhereUniqueInput>
    delete?: Enumerable<BetDetailHistoryWhereUniqueInput>
    connect?: Enumerable<BetDetailHistoryWhereUniqueInput>
    update?: Enumerable<BetDetailHistoryUpdateWithWhereUniqueWithoutGameListInput>
    updateMany?: Enumerable<BetDetailHistoryUpdateManyWithWhereWithoutGameListInput>
    deleteMany?: Enumerable<BetDetailHistoryScalarWhereInput>
  }

  export type BetDetailHistoryUncheckedUpdateManyWithoutGameListNestedInput = {
    create?: XOR<Enumerable<BetDetailHistoryCreateWithoutGameListInput>, Enumerable<BetDetailHistoryUncheckedCreateWithoutGameListInput>>
    connectOrCreate?: Enumerable<BetDetailHistoryCreateOrConnectWithoutGameListInput>
    upsert?: Enumerable<BetDetailHistoryUpsertWithWhereUniqueWithoutGameListInput>
    createMany?: BetDetailHistoryCreateManyGameListInputEnvelope
    set?: Enumerable<BetDetailHistoryWhereUniqueInput>
    disconnect?: Enumerable<BetDetailHistoryWhereUniqueInput>
    delete?: Enumerable<BetDetailHistoryWhereUniqueInput>
    connect?: Enumerable<BetDetailHistoryWhereUniqueInput>
    update?: Enumerable<BetDetailHistoryUpdateWithWhereUniqueWithoutGameListInput>
    updateMany?: Enumerable<BetDetailHistoryUpdateManyWithWhereWithoutGameListInput>
    deleteMany?: Enumerable<BetDetailHistoryScalarWhereInput>
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

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type AgentCreateWithoutCreatedByInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    token?: string | null
    qauota?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    users?: UserCreateNestedManyWithoutCreatedByAgentInput
    history?: ActionHistoryCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutCreatedByInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    token?: string | null
    qauota?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    users?: UserUncheckedCreateNestedManyWithoutCreatedByAgentInput
    history?: ActionHistoryUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutCreatedByInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutCreatedByInput, AgentUncheckedCreateWithoutCreatedByInput>
  }

  export type AgentCreateManyCreatedByInputEnvelope = {
    data: Enumerable<AgentCreateManyCreatedByInput>
    skipDuplicates?: boolean
  }

  export type ActionHistoryCreateWithoutAdminInput = {
    id?: string
    type: number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutHistoryInput
    agent?: AgentCreateNestedOneWithoutHistoryInput
  }

  export type ActionHistoryUncheckedCreateWithoutAdminInput = {
    id?: string
    type: number
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
    token?: StringNullableFilter | string | null
    qauota?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    accessToken?: StringNullableFilter | string | null
    adminId?: UuidFilter | string
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
    type?: IntFilter | number
    newValueJson?: JsonNullableFilter
    ip?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    userId?: UuidNullableFilter | string | null
    agentId?: UuidNullableFilter | string | null
    adminId?: UuidNullableFilter | string | null
  }

  export type UserCreateWithoutCreatedByAgentInput = {
    id?: string
    email: string
    username: string
    password: string
    headImage: string
    active?: boolean
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessToken: string
    balance?: BalanceCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    history?: ActionHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedByAgentInput = {
    id?: string
    email: string
    username: string
    password: string
    headImage: string
    active?: boolean
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessToken: string
    balance?: BalanceUncheckedCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    history?: ActionHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedByAgentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedByAgentInput, UserUncheckedCreateWithoutCreatedByAgentInput>
  }

  export type UserCreateManyCreatedByAgentInputEnvelope = {
    data: Enumerable<UserCreateManyCreatedByAgentInput>
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

  export type ActionHistoryCreateWithoutAgentInput = {
    id?: string
    type: number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutHistoryInput
    admin?: AdminCreateNestedOneWithoutHistoryInput
  }

  export type ActionHistoryUncheckedCreateWithoutAgentInput = {
    id?: string
    type: number
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

  export type UserUpsertWithWhereUniqueWithoutCreatedByAgentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCreatedByAgentInput, UserUncheckedUpdateWithoutCreatedByAgentInput>
    create: XOR<UserCreateWithoutCreatedByAgentInput, UserUncheckedCreateWithoutCreatedByAgentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCreatedByAgentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCreatedByAgentInput, UserUncheckedUpdateWithoutCreatedByAgentInput>
  }

  export type UserUpdateManyWithWhereWithoutCreatedByAgentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: UuidFilter | string
    email?: StringFilter | string
    username?: StringFilter | string
    password?: StringFilter | string
    headImage?: StringFilter | string
    active?: BoolFilter | boolean
    token?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    accessToken?: StringFilter | string
    agentId?: UuidFilter | string
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

  export type AgentCreateWithoutUsersInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    token?: string | null
    qauota?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    createdBy: AdminCreateNestedOneWithoutAgentInput
    history?: ActionHistoryCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutUsersInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    token?: string | null
    qauota?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    adminId: string
    history?: ActionHistoryUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutUsersInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutUsersInput, AgentUncheckedCreateWithoutUsersInput>
  }

  export type BalanceCreateWithoutOwnerInput = {
    id?: string
    type: number
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BalanceUncheckedCreateWithoutOwnerInput = {
    id?: string
    type: number
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string
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
    createAt?: Date | string
    updateAt?: Date | string
    gameList: GameListCreateNestedOneWithoutBetDetailHistoryInput
  }

  export type BetDetailHistoryUncheckedCreateWithoutOwnerInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createAt?: Date | string
    updateAt?: Date | string
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
    approvalAt?: Date | string
  }

  export type PaymentHistoryUncheckedCreateWithoutOwnerInput = {
    id?: string
    beforeScore: number
    changeScore: number
    newScore: number
    approval?: boolean
    createdAt?: Date | string
    approvalAt?: Date | string
  }

  export type PaymentHistoryCreateOrConnectWithoutOwnerInput = {
    where: PaymentHistoryWhereUniqueInput
    create: XOR<PaymentHistoryCreateWithoutOwnerInput, PaymentHistoryUncheckedCreateWithoutOwnerInput>
  }

  export type PaymentHistoryCreateManyOwnerInputEnvelope = {
    data: Enumerable<PaymentHistoryCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type ActionHistoryCreateWithoutUserInput = {
    id?: string
    type: number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    agent?: AgentCreateNestedOneWithoutHistoryInput
    admin?: AdminCreateNestedOneWithoutHistoryInput
  }

  export type ActionHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    type: number
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
    token?: NullableStringFieldUpdateOperationsInput | string | null
    qauota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: AdminUpdateOneRequiredWithoutAgentNestedInput
    history?: ActionHistoryUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    qauota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: StringFieldUpdateOperationsInput | string
    history?: ActionHistoryUncheckedUpdateManyWithoutAgentNestedInput
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
    type?: IntFilter | number
    balance?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
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
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
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
    approvalAt?: DateTimeFilter | Date | string
    ownerId?: UuidFilter | string
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

  export type UserCreateWithoutHistoryInput = {
    id?: string
    email: string
    username: string
    password: string
    headImage: string
    active?: boolean
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessToken: string
    createdByAgent: AgentCreateNestedOneWithoutUsersInput
    balance?: BalanceCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutHistoryInput = {
    id?: string
    email: string
    username: string
    password: string
    headImage: string
    active?: boolean
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessToken: string
    agentId: string
    balance?: BalanceUncheckedCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type AgentCreateWithoutHistoryInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    token?: string | null
    qauota?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    users?: UserCreateNestedManyWithoutCreatedByAgentInput
    createdBy: AdminCreateNestedOneWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutHistoryInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    token?: string | null
    qauota?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
    adminId: string
    users?: UserUncheckedCreateNestedManyWithoutCreatedByAgentInput
  }

  export type AgentCreateOrConnectWithoutHistoryInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutHistoryInput, AgentUncheckedCreateWithoutHistoryInput>
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

  export type UserUpsertWithoutHistoryInput = {
    update: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type UserUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdByAgent?: AgentUpdateOneRequiredWithoutUsersNestedInput
    balance?: BalanceUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    balance?: BalanceUncheckedUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
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
    token?: NullableStringFieldUpdateOperationsInput | string | null
    qauota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutCreatedByAgentNestedInput
    createdBy?: AdminUpdateOneRequiredWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    qauota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutCreatedByAgentNestedInput
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

  export type UserCreateWithoutBalanceInput = {
    id?: string
    email: string
    username: string
    password: string
    headImage: string
    active?: boolean
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessToken: string
    createdByAgent: AgentCreateNestedOneWithoutUsersInput
    betDetailHistory?: BetDetailHistoryCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    history?: ActionHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBalanceInput = {
    id?: string
    email: string
    username: string
    password: string
    headImage: string
    active?: boolean
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessToken: string
    agentId: string
    betDetailHistory?: BetDetailHistoryUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    history?: ActionHistoryUncheckedCreateNestedManyWithoutUserInput
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
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdByAgent?: AgentUpdateOneRequiredWithoutUsersNestedInput
    betDetailHistory?: BetDetailHistoryUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    history?: ActionHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    betDetailHistory?: BetDetailHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    history?: ActionHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BetDetailHistoryCreateWithoutGameListInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createAt?: Date | string
    updateAt?: Date | string
    owner: UserCreateNestedOneWithoutBetDetailHistoryInput
  }

  export type BetDetailHistoryUncheckedCreateWithoutGameListInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createAt?: Date | string
    updateAt?: Date | string
    ownerId: string
  }

  export type BetDetailHistoryCreateOrConnectWithoutGameListInput = {
    where: BetDetailHistoryWhereUniqueInput
    create: XOR<BetDetailHistoryCreateWithoutGameListInput, BetDetailHistoryUncheckedCreateWithoutGameListInput>
  }

  export type BetDetailHistoryCreateManyGameListInputEnvelope = {
    data: Enumerable<BetDetailHistoryCreateManyGameListInput>
    skipDuplicates?: boolean
  }

  export type BetDetailHistoryUpsertWithWhereUniqueWithoutGameListInput = {
    where: BetDetailHistoryWhereUniqueInput
    update: XOR<BetDetailHistoryUpdateWithoutGameListInput, BetDetailHistoryUncheckedUpdateWithoutGameListInput>
    create: XOR<BetDetailHistoryCreateWithoutGameListInput, BetDetailHistoryUncheckedCreateWithoutGameListInput>
  }

  export type BetDetailHistoryUpdateWithWhereUniqueWithoutGameListInput = {
    where: BetDetailHistoryWhereUniqueInput
    data: XOR<BetDetailHistoryUpdateWithoutGameListInput, BetDetailHistoryUncheckedUpdateWithoutGameListInput>
  }

  export type BetDetailHistoryUpdateManyWithWhereWithoutGameListInput = {
    where: BetDetailHistoryScalarWhereInput
    data: XOR<BetDetailHistoryUpdateManyMutationInput, BetDetailHistoryUncheckedUpdateManyWithoutBetDetailHistoryInput>
  }

  export type UserCreateWithoutPaymentHistoryInput = {
    id?: string
    email: string
    username: string
    password: string
    headImage: string
    active?: boolean
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessToken: string
    createdByAgent: AgentCreateNestedOneWithoutUsersInput
    balance?: BalanceCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryCreateNestedManyWithoutOwnerInput
    history?: ActionHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentHistoryInput = {
    id?: string
    email: string
    username: string
    password: string
    headImage: string
    active?: boolean
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessToken: string
    agentId: string
    balance?: BalanceUncheckedCreateNestedManyWithoutOwnerInput
    betDetailHistory?: BetDetailHistoryUncheckedCreateNestedManyWithoutOwnerInput
    history?: ActionHistoryUncheckedCreateNestedManyWithoutUserInput
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
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdByAgent?: AgentUpdateOneRequiredWithoutUsersNestedInput
    balance?: BalanceUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUpdateManyWithoutOwnerNestedInput
    history?: ActionHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    balance?: BalanceUncheckedUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    history?: ActionHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBetDetailHistoryInput = {
    id?: string
    email: string
    username: string
    password: string
    headImage: string
    active?: boolean
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessToken: string
    createdByAgent: AgentCreateNestedOneWithoutUsersInput
    balance?: BalanceCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    history?: ActionHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBetDetailHistoryInput = {
    id?: string
    email: string
    username: string
    password: string
    headImage: string
    active?: boolean
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessToken: string
    agentId: string
    balance?: BalanceUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    history?: ActionHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBetDetailHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBetDetailHistoryInput, UserUncheckedCreateWithoutBetDetailHistoryInput>
  }

  export type GameListCreateWithoutBetDetailHistoryInput = {
    id: number
    eGameName: string
    cGameName: string
    type: number
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type GameListUncheckedCreateWithoutBetDetailHistoryInput = {
    id: number
    eGameName: string
    cGameName: string
    type: number
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
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
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdByAgent?: AgentUpdateOneRequiredWithoutUsersNestedInput
    balance?: BalanceUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    history?: ActionHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBetDetailHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    balance?: BalanceUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    history?: ActionHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GameListUpsertWithoutBetDetailHistoryInput = {
    update: XOR<GameListUpdateWithoutBetDetailHistoryInput, GameListUncheckedUpdateWithoutBetDetailHistoryInput>
    create: XOR<GameListCreateWithoutBetDetailHistoryInput, GameListUncheckedCreateWithoutBetDetailHistoryInput>
  }

  export type GameListUpdateWithoutBetDetailHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    eGameName?: StringFieldUpdateOperationsInput | string
    cGameName?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameListUncheckedUpdateWithoutBetDetailHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    eGameName?: StringFieldUpdateOperationsInput | string
    cGameName?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    json?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentCreateManyCreatedByInput = {
    id?: string
    email: string
    password: string
    name: string
    active?: boolean
    token?: string | null
    qauota?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accessToken?: string | null
  }

  export type ActionHistoryCreateManyAdminInput = {
    id?: string
    type: number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    userId?: string | null
    agentId?: string | null
  }

  export type AgentUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    qauota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutCreatedByAgentNestedInput
    history?: ActionHistoryUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    qauota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutCreatedByAgentNestedInput
    history?: ActionHistoryUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    qauota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActionHistoryUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutHistoryNestedInput
    agent?: AgentUpdateOneWithoutHistoryNestedInput
  }

  export type ActionHistoryUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActionHistoryUncheckedUpdateManyWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyCreatedByAgentInput = {
    id?: string
    email: string
    username: string
    password: string
    headImage: string
    active?: boolean
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessToken: string
  }

  export type ActionHistoryCreateManyAgentInput = {
    id?: string
    type: number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    userId?: string | null
    adminId?: string | null
  }

  export type UserUpdateWithoutCreatedByAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    balance?: BalanceUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    history?: ActionHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedByAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    balance?: BalanceUncheckedUpdateManyWithoutOwnerNestedInput
    betDetailHistory?: BetDetailHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    history?: ActionHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    headImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
  }

  export type ActionHistoryUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutHistoryNestedInput
    admin?: AdminUpdateOneWithoutHistoryNestedInput
  }

  export type ActionHistoryUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BalanceCreateManyOwnerInput = {
    id?: string
    type: number
    balance: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BetDetailHistoryCreateManyOwnerInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createAt?: Date | string
    updateAt?: Date | string
    gameId: number
  }

  export type PaymentHistoryCreateManyOwnerInput = {
    id?: string
    beforeScore: number
    changeScore: number
    newScore: number
    approval?: boolean
    createdAt?: Date | string
    approvalAt?: Date | string
  }

  export type ActionHistoryCreateManyUserInput = {
    id?: string
    type: number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    createdAt?: Date | string
    agentId?: string | null
    adminId?: string | null
  }

  export type BalanceUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceUncheckedUpdateManyWithoutBalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetDetailHistoryUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameList?: GameListUpdateOneRequiredWithoutBetDetailHistoryNestedInput
  }

  export type BetDetailHistoryUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type BetDetailHistoryUncheckedUpdateManyWithoutBetDetailHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentHistoryUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    changeScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    approval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    changeScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    approval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutPaymentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    changeScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    approval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneWithoutHistoryNestedInput
    admin?: AdminUpdateOneWithoutHistoryNestedInput
  }

  export type ActionHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    newValueJson?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BetDetailHistoryCreateManyGameListInput = {
    id?: string
    beforeScore: number
    betScore: number
    winScore: number
    newScore: number
    createAt?: Date | string
    updateAt?: Date | string
    ownerId: string
  }

  export type BetDetailHistoryUpdateWithoutGameListInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutBetDetailHistoryNestedInput
  }

  export type BetDetailHistoryUncheckedUpdateWithoutGameListInput = {
    id?: StringFieldUpdateOperationsInput | string
    beforeScore?: IntFieldUpdateOperationsInput | number
    betScore?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    newScore?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
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