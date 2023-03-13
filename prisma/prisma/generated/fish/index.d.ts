
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Catch_chance
 * 
 */
export type Catch_chance = {
  serveId: number
  chance: number
}

/**
 * Model Control_pool
 * 
 */
export type Control_pool = {
  serveId: number
  pool: number
  line: number
}

/**
 * Model Control_user
 * 
 */
export type Control_user = {
  uid: number
  chance: number
}

/**
 * Model Daysendprizevalue
 * 
 */
export type Daysendprizevalue = {
  day: number
  value: number
}

/**
 * Model Fishlog
 * 
 */
export type Fishlog = {
  id: number
  userid: number
  usecoin: number
  wincoin: number
  balanceTime: Date
  mark: number
  serverId: number
}

/**
 * Model Getcoin
 * 
 */
export type Getcoin = {
  id: number
  userId: number
  getCoin: number
  adddate: Date
  mark: number
  isget: number
  day: number
}

/**
 * Model Lv
 * 
 */
export type Lv = {
  lv: number
  wincoinvalue: number
}

/**
 * Model Matchrandking
 * 
 */
export type Matchrandking = {
  id: number
  roomType: number
  matchId: number
  userId: number
  score: number
  lastTime: Date
  winPropId: number
  winPropCount: number
  winScore: number
  rankIdx: number
  isGetPrize: number
  isMsg: number
  title: string
  msg: string
}

/**
 * Model Pool
 * 
 */
export type Pool = {
  serveId: number
  pool: number
  virtualPool: number
}

/**
 * Model Sendprize
 * 
 */
export type Sendprize = {
  idx: number
  propid: number
  propcount: number
  score: number
}

/**
 * Model Shootprize
 * 
 */
export type Shootprize = {
  lv: number
  value: number
  propid: number
  propcount: number
  winsocre: number
}

/**
 * Model T_accounts
 * 
 */
export type T_accounts = {
  account: string
  password: string
}

/**
 * Model T_games
 * 
 */
export type T_games = {
  room_uuid: string
  game_index: number
  base_info: string
  create_time: number
  snapshots: string
  action_records: string
  result: string
}

/**
 * Model T_games_archive
 * 
 */
export type T_games_archive = {
  room_uuid: string
  game_index: number
  base_info: string
  create_time: number
  snapshots: string
  action_records: string
  result: string
}

/**
 * Model T_guests
 * 
 */
export type T_guests = {
  guest_account: string
}

/**
 * Model T_message
 * 
 */
export type T_message = {
  type: string
  msg: string
  version: string
}

/**
 * Model T_property
 * 
 */
export type T_property = {
  propId: number
  userid: number
  ice: number
}

/**
 * Model T_rooms
 * 
 */
export type T_rooms = {
  uuid: string
  id: string
  base_info: string
  create_time: number
  num_of_turns: number
  next_button: number
  user_id0: number
  user_icon0: string
  user_name0: string
  user_score0: number
  user_id1: number
  user_icon1: string
  user_name1: string
  user_score1: number
  user_id2: number
  user_icon2: string
  user_name2: string
  user_score2: number
  user_id3: number
  user_icon3: string
  user_name3: string
  user_score3: number
  ip: string
  port: number
  baseScore: number
}

/**
 * Model T_users
 * 
 */
export type T_users = {
  userid: number
  account: string
  name: string
  sex: number
  headimg: string
  lv: number
  exp: number
  coins: number
  vip: number
  money: number
  gems: number
  roomid: string
  history: string
  power: number
  RenameCount: number
  ReHeadCount: number
  propId: number
}

/**
 * Model Usecoin
 * 
 */
export type Usecoin = {
  userId: number
  useCoin: number
  getprizelv: number
}

/**
 * Model Wincoin
 * 
 */
export type Wincoin = {
  userId: number
  wincoin: number
  lv: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Catch_chances
 * const catch_chances = await prisma.catch_chance.findMany()
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
   * // Fetch zero or more Catch_chances
   * const catch_chances = await prisma.catch_chance.findMany()
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
   * `prisma.catch_chance`: Exposes CRUD operations for the **Catch_chance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Catch_chances
    * const catch_chances = await prisma.catch_chance.findMany()
    * ```
    */
  get catch_chance(): Prisma.Catch_chanceDelegate<GlobalReject>;

  /**
   * `prisma.control_pool`: Exposes CRUD operations for the **Control_pool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Control_pools
    * const control_pools = await prisma.control_pool.findMany()
    * ```
    */
  get control_pool(): Prisma.Control_poolDelegate<GlobalReject>;

  /**
   * `prisma.control_user`: Exposes CRUD operations for the **Control_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Control_users
    * const control_users = await prisma.control_user.findMany()
    * ```
    */
  get control_user(): Prisma.Control_userDelegate<GlobalReject>;

  /**
   * `prisma.daysendprizevalue`: Exposes CRUD operations for the **Daysendprizevalue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Daysendprizevalues
    * const daysendprizevalues = await prisma.daysendprizevalue.findMany()
    * ```
    */
  get daysendprizevalue(): Prisma.DaysendprizevalueDelegate<GlobalReject>;

  /**
   * `prisma.fishlog`: Exposes CRUD operations for the **Fishlog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fishlogs
    * const fishlogs = await prisma.fishlog.findMany()
    * ```
    */
  get fishlog(): Prisma.FishlogDelegate<GlobalReject>;

  /**
   * `prisma.getcoin`: Exposes CRUD operations for the **Getcoin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Getcoins
    * const getcoins = await prisma.getcoin.findMany()
    * ```
    */
  get getcoin(): Prisma.GetcoinDelegate<GlobalReject>;

  /**
   * `prisma.lv`: Exposes CRUD operations for the **Lv** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lvs
    * const lvs = await prisma.lv.findMany()
    * ```
    */
  get lv(): Prisma.LvDelegate<GlobalReject>;

  /**
   * `prisma.matchrandking`: Exposes CRUD operations for the **Matchrandking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matchrandkings
    * const matchrandkings = await prisma.matchrandking.findMany()
    * ```
    */
  get matchrandking(): Prisma.MatchrandkingDelegate<GlobalReject>;

  /**
   * `prisma.pool`: Exposes CRUD operations for the **Pool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pools
    * const pools = await prisma.pool.findMany()
    * ```
    */
  get pool(): Prisma.PoolDelegate<GlobalReject>;

  /**
   * `prisma.sendprize`: Exposes CRUD operations for the **Sendprize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sendprizes
    * const sendprizes = await prisma.sendprize.findMany()
    * ```
    */
  get sendprize(): Prisma.SendprizeDelegate<GlobalReject>;

  /**
   * `prisma.shootprize`: Exposes CRUD operations for the **Shootprize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shootprizes
    * const shootprizes = await prisma.shootprize.findMany()
    * ```
    */
  get shootprize(): Prisma.ShootprizeDelegate<GlobalReject>;

  /**
   * `prisma.t_accounts`: Exposes CRUD operations for the **T_accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_accounts
    * const t_accounts = await prisma.t_accounts.findMany()
    * ```
    */
  get t_accounts(): Prisma.T_accountsDelegate<GlobalReject>;

  /**
   * `prisma.t_games`: Exposes CRUD operations for the **T_games** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_games
    * const t_games = await prisma.t_games.findMany()
    * ```
    */
  get t_games(): Prisma.T_gamesDelegate<GlobalReject>;

  /**
   * `prisma.t_games_archive`: Exposes CRUD operations for the **T_games_archive** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_games_archives
    * const t_games_archives = await prisma.t_games_archive.findMany()
    * ```
    */
  get t_games_archive(): Prisma.T_games_archiveDelegate<GlobalReject>;

  /**
   * `prisma.t_guests`: Exposes CRUD operations for the **T_guests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_guests
    * const t_guests = await prisma.t_guests.findMany()
    * ```
    */
  get t_guests(): Prisma.T_guestsDelegate<GlobalReject>;

  /**
   * `prisma.t_message`: Exposes CRUD operations for the **T_message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_messages
    * const t_messages = await prisma.t_message.findMany()
    * ```
    */
  get t_message(): Prisma.T_messageDelegate<GlobalReject>;

  /**
   * `prisma.t_property`: Exposes CRUD operations for the **T_property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_properties
    * const t_properties = await prisma.t_property.findMany()
    * ```
    */
  get t_property(): Prisma.T_propertyDelegate<GlobalReject>;

  /**
   * `prisma.t_rooms`: Exposes CRUD operations for the **T_rooms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_rooms
    * const t_rooms = await prisma.t_rooms.findMany()
    * ```
    */
  get t_rooms(): Prisma.T_roomsDelegate<GlobalReject>;

  /**
   * `prisma.t_users`: Exposes CRUD operations for the **T_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_users
    * const t_users = await prisma.t_users.findMany()
    * ```
    */
  get t_users(): Prisma.T_usersDelegate<GlobalReject>;

  /**
   * `prisma.usecoin`: Exposes CRUD operations for the **Usecoin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usecoins
    * const usecoins = await prisma.usecoin.findMany()
    * ```
    */
  get usecoin(): Prisma.UsecoinDelegate<GlobalReject>;

  /**
   * `prisma.wincoin`: Exposes CRUD operations for the **Wincoin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wincoins
    * const wincoins = await prisma.wincoin.findMany()
    * ```
    */
  get wincoin(): Prisma.WincoinDelegate<GlobalReject>;
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
    Catch_chance: 'Catch_chance',
    Control_pool: 'Control_pool',
    Control_user: 'Control_user',
    Daysendprizevalue: 'Daysendprizevalue',
    Fishlog: 'Fishlog',
    Getcoin: 'Getcoin',
    Lv: 'Lv',
    Matchrandking: 'Matchrandking',
    Pool: 'Pool',
    Sendprize: 'Sendprize',
    Shootprize: 'Shootprize',
    T_accounts: 'T_accounts',
    T_games: 'T_games',
    T_games_archive: 'T_games_archive',
    T_guests: 'T_guests',
    T_message: 'T_message',
    T_property: 'T_property',
    T_rooms: 'T_rooms',
    T_users: 'T_users',
    Usecoin: 'Usecoin',
    Wincoin: 'Wincoin'
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
   * Model Catch_chance
   */


  export type AggregateCatch_chance = {
    _count: Catch_chanceCountAggregateOutputType | null
    _avg: Catch_chanceAvgAggregateOutputType | null
    _sum: Catch_chanceSumAggregateOutputType | null
    _min: Catch_chanceMinAggregateOutputType | null
    _max: Catch_chanceMaxAggregateOutputType | null
  }

  export type Catch_chanceAvgAggregateOutputType = {
    serveId: number | null
    chance: number | null
  }

  export type Catch_chanceSumAggregateOutputType = {
    serveId: number | null
    chance: number | null
  }

  export type Catch_chanceMinAggregateOutputType = {
    serveId: number | null
    chance: number | null
  }

  export type Catch_chanceMaxAggregateOutputType = {
    serveId: number | null
    chance: number | null
  }

  export type Catch_chanceCountAggregateOutputType = {
    serveId: number
    chance: number
    _all: number
  }


  export type Catch_chanceAvgAggregateInputType = {
    serveId?: true
    chance?: true
  }

  export type Catch_chanceSumAggregateInputType = {
    serveId?: true
    chance?: true
  }

  export type Catch_chanceMinAggregateInputType = {
    serveId?: true
    chance?: true
  }

  export type Catch_chanceMaxAggregateInputType = {
    serveId?: true
    chance?: true
  }

  export type Catch_chanceCountAggregateInputType = {
    serveId?: true
    chance?: true
    _all?: true
  }

  export type Catch_chanceAggregateArgs = {
    /**
     * Filter which Catch_chance to aggregate.
     */
    where?: Catch_chanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catch_chances to fetch.
     */
    orderBy?: Enumerable<Catch_chanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Catch_chanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catch_chances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catch_chances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Catch_chances
    **/
    _count?: true | Catch_chanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Catch_chanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Catch_chanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Catch_chanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Catch_chanceMaxAggregateInputType
  }

  export type GetCatch_chanceAggregateType<T extends Catch_chanceAggregateArgs> = {
        [P in keyof T & keyof AggregateCatch_chance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCatch_chance[P]>
      : GetScalarType<T[P], AggregateCatch_chance[P]>
  }




  export type Catch_chanceGroupByArgs = {
    where?: Catch_chanceWhereInput
    orderBy?: Enumerable<Catch_chanceOrderByWithAggregationInput>
    by: Catch_chanceScalarFieldEnum[]
    having?: Catch_chanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Catch_chanceCountAggregateInputType | true
    _avg?: Catch_chanceAvgAggregateInputType
    _sum?: Catch_chanceSumAggregateInputType
    _min?: Catch_chanceMinAggregateInputType
    _max?: Catch_chanceMaxAggregateInputType
  }


  export type Catch_chanceGroupByOutputType = {
    serveId: number
    chance: number
    _count: Catch_chanceCountAggregateOutputType | null
    _avg: Catch_chanceAvgAggregateOutputType | null
    _sum: Catch_chanceSumAggregateOutputType | null
    _min: Catch_chanceMinAggregateOutputType | null
    _max: Catch_chanceMaxAggregateOutputType | null
  }

  type GetCatch_chanceGroupByPayload<T extends Catch_chanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Catch_chanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Catch_chanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Catch_chanceGroupByOutputType[P]>
            : GetScalarType<T[P], Catch_chanceGroupByOutputType[P]>
        }
      >
    >


  export type Catch_chanceSelect = {
    serveId?: boolean
    chance?: boolean
  }


  export type Catch_chanceGetPayload<S extends boolean | null | undefined | Catch_chanceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Catch_chance :
    S extends undefined ? never :
    S extends { include: any } & (Catch_chanceArgs | Catch_chanceFindManyArgs)
    ? Catch_chance 
    : S extends { select: any } & (Catch_chanceArgs | Catch_chanceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Catch_chance ? Catch_chance[P] : never
  } 
      : Catch_chance


  type Catch_chanceCountArgs = 
    Omit<Catch_chanceFindManyArgs, 'select' | 'include'> & {
      select?: Catch_chanceCountAggregateInputType | true
    }

  export interface Catch_chanceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Catch_chance that matches the filter.
     * @param {Catch_chanceFindUniqueArgs} args - Arguments to find a Catch_chance
     * @example
     * // Get one Catch_chance
     * const catch_chance = await prisma.catch_chance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Catch_chanceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Catch_chanceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Catch_chance'> extends True ? Prisma__Catch_chanceClient<Catch_chanceGetPayload<T>> : Prisma__Catch_chanceClient<Catch_chanceGetPayload<T> | null, null>

    /**
     * Find one Catch_chance that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Catch_chanceFindUniqueOrThrowArgs} args - Arguments to find a Catch_chance
     * @example
     * // Get one Catch_chance
     * const catch_chance = await prisma.catch_chance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Catch_chanceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Catch_chanceFindUniqueOrThrowArgs>
    ): Prisma__Catch_chanceClient<Catch_chanceGetPayload<T>>

    /**
     * Find the first Catch_chance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Catch_chanceFindFirstArgs} args - Arguments to find a Catch_chance
     * @example
     * // Get one Catch_chance
     * const catch_chance = await prisma.catch_chance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Catch_chanceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Catch_chanceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Catch_chance'> extends True ? Prisma__Catch_chanceClient<Catch_chanceGetPayload<T>> : Prisma__Catch_chanceClient<Catch_chanceGetPayload<T> | null, null>

    /**
     * Find the first Catch_chance that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Catch_chanceFindFirstOrThrowArgs} args - Arguments to find a Catch_chance
     * @example
     * // Get one Catch_chance
     * const catch_chance = await prisma.catch_chance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Catch_chanceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Catch_chanceFindFirstOrThrowArgs>
    ): Prisma__Catch_chanceClient<Catch_chanceGetPayload<T>>

    /**
     * Find zero or more Catch_chances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Catch_chanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Catch_chances
     * const catch_chances = await prisma.catch_chance.findMany()
     * 
     * // Get first 10 Catch_chances
     * const catch_chances = await prisma.catch_chance.findMany({ take: 10 })
     * 
     * // Only select the `serveId`
     * const catch_chanceWithServeIdOnly = await prisma.catch_chance.findMany({ select: { serveId: true } })
     * 
    **/
    findMany<T extends Catch_chanceFindManyArgs>(
      args?: SelectSubset<T, Catch_chanceFindManyArgs>
    ): Prisma.PrismaPromise<Array<Catch_chanceGetPayload<T>>>

    /**
     * Create a Catch_chance.
     * @param {Catch_chanceCreateArgs} args - Arguments to create a Catch_chance.
     * @example
     * // Create one Catch_chance
     * const Catch_chance = await prisma.catch_chance.create({
     *   data: {
     *     // ... data to create a Catch_chance
     *   }
     * })
     * 
    **/
    create<T extends Catch_chanceCreateArgs>(
      args: SelectSubset<T, Catch_chanceCreateArgs>
    ): Prisma__Catch_chanceClient<Catch_chanceGetPayload<T>>

    /**
     * Create many Catch_chances.
     *     @param {Catch_chanceCreateManyArgs} args - Arguments to create many Catch_chances.
     *     @example
     *     // Create many Catch_chances
     *     const catch_chance = await prisma.catch_chance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Catch_chanceCreateManyArgs>(
      args?: SelectSubset<T, Catch_chanceCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Catch_chance.
     * @param {Catch_chanceDeleteArgs} args - Arguments to delete one Catch_chance.
     * @example
     * // Delete one Catch_chance
     * const Catch_chance = await prisma.catch_chance.delete({
     *   where: {
     *     // ... filter to delete one Catch_chance
     *   }
     * })
     * 
    **/
    delete<T extends Catch_chanceDeleteArgs>(
      args: SelectSubset<T, Catch_chanceDeleteArgs>
    ): Prisma__Catch_chanceClient<Catch_chanceGetPayload<T>>

    /**
     * Update one Catch_chance.
     * @param {Catch_chanceUpdateArgs} args - Arguments to update one Catch_chance.
     * @example
     * // Update one Catch_chance
     * const catch_chance = await prisma.catch_chance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Catch_chanceUpdateArgs>(
      args: SelectSubset<T, Catch_chanceUpdateArgs>
    ): Prisma__Catch_chanceClient<Catch_chanceGetPayload<T>>

    /**
     * Delete zero or more Catch_chances.
     * @param {Catch_chanceDeleteManyArgs} args - Arguments to filter Catch_chances to delete.
     * @example
     * // Delete a few Catch_chances
     * const { count } = await prisma.catch_chance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Catch_chanceDeleteManyArgs>(
      args?: SelectSubset<T, Catch_chanceDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Catch_chances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Catch_chanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Catch_chances
     * const catch_chance = await prisma.catch_chance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Catch_chanceUpdateManyArgs>(
      args: SelectSubset<T, Catch_chanceUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Catch_chance.
     * @param {Catch_chanceUpsertArgs} args - Arguments to update or create a Catch_chance.
     * @example
     * // Update or create a Catch_chance
     * const catch_chance = await prisma.catch_chance.upsert({
     *   create: {
     *     // ... data to create a Catch_chance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Catch_chance we want to update
     *   }
     * })
    **/
    upsert<T extends Catch_chanceUpsertArgs>(
      args: SelectSubset<T, Catch_chanceUpsertArgs>
    ): Prisma__Catch_chanceClient<Catch_chanceGetPayload<T>>

    /**
     * Count the number of Catch_chances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Catch_chanceCountArgs} args - Arguments to filter Catch_chances to count.
     * @example
     * // Count the number of Catch_chances
     * const count = await prisma.catch_chance.count({
     *   where: {
     *     // ... the filter for the Catch_chances we want to count
     *   }
     * })
    **/
    count<T extends Catch_chanceCountArgs>(
      args?: Subset<T, Catch_chanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Catch_chanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Catch_chance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Catch_chanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Catch_chanceAggregateArgs>(args: Subset<T, Catch_chanceAggregateArgs>): Prisma.PrismaPromise<GetCatch_chanceAggregateType<T>>

    /**
     * Group by Catch_chance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Catch_chanceGroupByArgs} args - Group by arguments.
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
      T extends Catch_chanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Catch_chanceGroupByArgs['orderBy'] }
        : { orderBy?: Catch_chanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Catch_chanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatch_chanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Catch_chance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Catch_chanceClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Catch_chance base type for findUnique actions
   */
  export type Catch_chanceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Catch_chance
     */
    select?: Catch_chanceSelect | null
    /**
     * Filter, which Catch_chance to fetch.
     */
    where: Catch_chanceWhereUniqueInput
  }

  /**
   * Catch_chance findUnique
   */
  export interface Catch_chanceFindUniqueArgs extends Catch_chanceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Catch_chance findUniqueOrThrow
   */
  export type Catch_chanceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Catch_chance
     */
    select?: Catch_chanceSelect | null
    /**
     * Filter, which Catch_chance to fetch.
     */
    where: Catch_chanceWhereUniqueInput
  }


  /**
   * Catch_chance base type for findFirst actions
   */
  export type Catch_chanceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Catch_chance
     */
    select?: Catch_chanceSelect | null
    /**
     * Filter, which Catch_chance to fetch.
     */
    where?: Catch_chanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catch_chances to fetch.
     */
    orderBy?: Enumerable<Catch_chanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Catch_chances.
     */
    cursor?: Catch_chanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catch_chances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catch_chances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Catch_chances.
     */
    distinct?: Enumerable<Catch_chanceScalarFieldEnum>
  }

  /**
   * Catch_chance findFirst
   */
  export interface Catch_chanceFindFirstArgs extends Catch_chanceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Catch_chance findFirstOrThrow
   */
  export type Catch_chanceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Catch_chance
     */
    select?: Catch_chanceSelect | null
    /**
     * Filter, which Catch_chance to fetch.
     */
    where?: Catch_chanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catch_chances to fetch.
     */
    orderBy?: Enumerable<Catch_chanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Catch_chances.
     */
    cursor?: Catch_chanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catch_chances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catch_chances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Catch_chances.
     */
    distinct?: Enumerable<Catch_chanceScalarFieldEnum>
  }


  /**
   * Catch_chance findMany
   */
  export type Catch_chanceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Catch_chance
     */
    select?: Catch_chanceSelect | null
    /**
     * Filter, which Catch_chances to fetch.
     */
    where?: Catch_chanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catch_chances to fetch.
     */
    orderBy?: Enumerable<Catch_chanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Catch_chances.
     */
    cursor?: Catch_chanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catch_chances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catch_chances.
     */
    skip?: number
    distinct?: Enumerable<Catch_chanceScalarFieldEnum>
  }


  /**
   * Catch_chance create
   */
  export type Catch_chanceCreateArgs = {
    /**
     * Select specific fields to fetch from the Catch_chance
     */
    select?: Catch_chanceSelect | null
    /**
     * The data needed to create a Catch_chance.
     */
    data: XOR<Catch_chanceCreateInput, Catch_chanceUncheckedCreateInput>
  }


  /**
   * Catch_chance createMany
   */
  export type Catch_chanceCreateManyArgs = {
    /**
     * The data used to create many Catch_chances.
     */
    data: Enumerable<Catch_chanceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Catch_chance update
   */
  export type Catch_chanceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Catch_chance
     */
    select?: Catch_chanceSelect | null
    /**
     * The data needed to update a Catch_chance.
     */
    data: XOR<Catch_chanceUpdateInput, Catch_chanceUncheckedUpdateInput>
    /**
     * Choose, which Catch_chance to update.
     */
    where: Catch_chanceWhereUniqueInput
  }


  /**
   * Catch_chance updateMany
   */
  export type Catch_chanceUpdateManyArgs = {
    /**
     * The data used to update Catch_chances.
     */
    data: XOR<Catch_chanceUpdateManyMutationInput, Catch_chanceUncheckedUpdateManyInput>
    /**
     * Filter which Catch_chances to update
     */
    where?: Catch_chanceWhereInput
  }


  /**
   * Catch_chance upsert
   */
  export type Catch_chanceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Catch_chance
     */
    select?: Catch_chanceSelect | null
    /**
     * The filter to search for the Catch_chance to update in case it exists.
     */
    where: Catch_chanceWhereUniqueInput
    /**
     * In case the Catch_chance found by the `where` argument doesn't exist, create a new Catch_chance with this data.
     */
    create: XOR<Catch_chanceCreateInput, Catch_chanceUncheckedCreateInput>
    /**
     * In case the Catch_chance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Catch_chanceUpdateInput, Catch_chanceUncheckedUpdateInput>
  }


  /**
   * Catch_chance delete
   */
  export type Catch_chanceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Catch_chance
     */
    select?: Catch_chanceSelect | null
    /**
     * Filter which Catch_chance to delete.
     */
    where: Catch_chanceWhereUniqueInput
  }


  /**
   * Catch_chance deleteMany
   */
  export type Catch_chanceDeleteManyArgs = {
    /**
     * Filter which Catch_chances to delete
     */
    where?: Catch_chanceWhereInput
  }


  /**
   * Catch_chance without action
   */
  export type Catch_chanceArgs = {
    /**
     * Select specific fields to fetch from the Catch_chance
     */
    select?: Catch_chanceSelect | null
  }



  /**
   * Model Control_pool
   */


  export type AggregateControl_pool = {
    _count: Control_poolCountAggregateOutputType | null
    _avg: Control_poolAvgAggregateOutputType | null
    _sum: Control_poolSumAggregateOutputType | null
    _min: Control_poolMinAggregateOutputType | null
    _max: Control_poolMaxAggregateOutputType | null
  }

  export type Control_poolAvgAggregateOutputType = {
    serveId: number | null
    pool: number | null
    line: number | null
  }

  export type Control_poolSumAggregateOutputType = {
    serveId: number | null
    pool: number | null
    line: number | null
  }

  export type Control_poolMinAggregateOutputType = {
    serveId: number | null
    pool: number | null
    line: number | null
  }

  export type Control_poolMaxAggregateOutputType = {
    serveId: number | null
    pool: number | null
    line: number | null
  }

  export type Control_poolCountAggregateOutputType = {
    serveId: number
    pool: number
    line: number
    _all: number
  }


  export type Control_poolAvgAggregateInputType = {
    serveId?: true
    pool?: true
    line?: true
  }

  export type Control_poolSumAggregateInputType = {
    serveId?: true
    pool?: true
    line?: true
  }

  export type Control_poolMinAggregateInputType = {
    serveId?: true
    pool?: true
    line?: true
  }

  export type Control_poolMaxAggregateInputType = {
    serveId?: true
    pool?: true
    line?: true
  }

  export type Control_poolCountAggregateInputType = {
    serveId?: true
    pool?: true
    line?: true
    _all?: true
  }

  export type Control_poolAggregateArgs = {
    /**
     * Filter which Control_pool to aggregate.
     */
    where?: Control_poolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Control_pools to fetch.
     */
    orderBy?: Enumerable<Control_poolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Control_poolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Control_pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Control_pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Control_pools
    **/
    _count?: true | Control_poolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Control_poolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Control_poolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Control_poolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Control_poolMaxAggregateInputType
  }

  export type GetControl_poolAggregateType<T extends Control_poolAggregateArgs> = {
        [P in keyof T & keyof AggregateControl_pool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateControl_pool[P]>
      : GetScalarType<T[P], AggregateControl_pool[P]>
  }




  export type Control_poolGroupByArgs = {
    where?: Control_poolWhereInput
    orderBy?: Enumerable<Control_poolOrderByWithAggregationInput>
    by: Control_poolScalarFieldEnum[]
    having?: Control_poolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Control_poolCountAggregateInputType | true
    _avg?: Control_poolAvgAggregateInputType
    _sum?: Control_poolSumAggregateInputType
    _min?: Control_poolMinAggregateInputType
    _max?: Control_poolMaxAggregateInputType
  }


  export type Control_poolGroupByOutputType = {
    serveId: number
    pool: number
    line: number
    _count: Control_poolCountAggregateOutputType | null
    _avg: Control_poolAvgAggregateOutputType | null
    _sum: Control_poolSumAggregateOutputType | null
    _min: Control_poolMinAggregateOutputType | null
    _max: Control_poolMaxAggregateOutputType | null
  }

  type GetControl_poolGroupByPayload<T extends Control_poolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Control_poolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Control_poolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Control_poolGroupByOutputType[P]>
            : GetScalarType<T[P], Control_poolGroupByOutputType[P]>
        }
      >
    >


  export type Control_poolSelect = {
    serveId?: boolean
    pool?: boolean
    line?: boolean
  }


  export type Control_poolGetPayload<S extends boolean | null | undefined | Control_poolArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Control_pool :
    S extends undefined ? never :
    S extends { include: any } & (Control_poolArgs | Control_poolFindManyArgs)
    ? Control_pool 
    : S extends { select: any } & (Control_poolArgs | Control_poolFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Control_pool ? Control_pool[P] : never
  } 
      : Control_pool


  type Control_poolCountArgs = 
    Omit<Control_poolFindManyArgs, 'select' | 'include'> & {
      select?: Control_poolCountAggregateInputType | true
    }

  export interface Control_poolDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Control_pool that matches the filter.
     * @param {Control_poolFindUniqueArgs} args - Arguments to find a Control_pool
     * @example
     * // Get one Control_pool
     * const control_pool = await prisma.control_pool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Control_poolFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Control_poolFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Control_pool'> extends True ? Prisma__Control_poolClient<Control_poolGetPayload<T>> : Prisma__Control_poolClient<Control_poolGetPayload<T> | null, null>

    /**
     * Find one Control_pool that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Control_poolFindUniqueOrThrowArgs} args - Arguments to find a Control_pool
     * @example
     * // Get one Control_pool
     * const control_pool = await prisma.control_pool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Control_poolFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Control_poolFindUniqueOrThrowArgs>
    ): Prisma__Control_poolClient<Control_poolGetPayload<T>>

    /**
     * Find the first Control_pool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Control_poolFindFirstArgs} args - Arguments to find a Control_pool
     * @example
     * // Get one Control_pool
     * const control_pool = await prisma.control_pool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Control_poolFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Control_poolFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Control_pool'> extends True ? Prisma__Control_poolClient<Control_poolGetPayload<T>> : Prisma__Control_poolClient<Control_poolGetPayload<T> | null, null>

    /**
     * Find the first Control_pool that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Control_poolFindFirstOrThrowArgs} args - Arguments to find a Control_pool
     * @example
     * // Get one Control_pool
     * const control_pool = await prisma.control_pool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Control_poolFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Control_poolFindFirstOrThrowArgs>
    ): Prisma__Control_poolClient<Control_poolGetPayload<T>>

    /**
     * Find zero or more Control_pools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Control_poolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Control_pools
     * const control_pools = await prisma.control_pool.findMany()
     * 
     * // Get first 10 Control_pools
     * const control_pools = await prisma.control_pool.findMany({ take: 10 })
     * 
     * // Only select the `serveId`
     * const control_poolWithServeIdOnly = await prisma.control_pool.findMany({ select: { serveId: true } })
     * 
    **/
    findMany<T extends Control_poolFindManyArgs>(
      args?: SelectSubset<T, Control_poolFindManyArgs>
    ): Prisma.PrismaPromise<Array<Control_poolGetPayload<T>>>

    /**
     * Create a Control_pool.
     * @param {Control_poolCreateArgs} args - Arguments to create a Control_pool.
     * @example
     * // Create one Control_pool
     * const Control_pool = await prisma.control_pool.create({
     *   data: {
     *     // ... data to create a Control_pool
     *   }
     * })
     * 
    **/
    create<T extends Control_poolCreateArgs>(
      args: SelectSubset<T, Control_poolCreateArgs>
    ): Prisma__Control_poolClient<Control_poolGetPayload<T>>

    /**
     * Create many Control_pools.
     *     @param {Control_poolCreateManyArgs} args - Arguments to create many Control_pools.
     *     @example
     *     // Create many Control_pools
     *     const control_pool = await prisma.control_pool.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Control_poolCreateManyArgs>(
      args?: SelectSubset<T, Control_poolCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Control_pool.
     * @param {Control_poolDeleteArgs} args - Arguments to delete one Control_pool.
     * @example
     * // Delete one Control_pool
     * const Control_pool = await prisma.control_pool.delete({
     *   where: {
     *     // ... filter to delete one Control_pool
     *   }
     * })
     * 
    **/
    delete<T extends Control_poolDeleteArgs>(
      args: SelectSubset<T, Control_poolDeleteArgs>
    ): Prisma__Control_poolClient<Control_poolGetPayload<T>>

    /**
     * Update one Control_pool.
     * @param {Control_poolUpdateArgs} args - Arguments to update one Control_pool.
     * @example
     * // Update one Control_pool
     * const control_pool = await prisma.control_pool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Control_poolUpdateArgs>(
      args: SelectSubset<T, Control_poolUpdateArgs>
    ): Prisma__Control_poolClient<Control_poolGetPayload<T>>

    /**
     * Delete zero or more Control_pools.
     * @param {Control_poolDeleteManyArgs} args - Arguments to filter Control_pools to delete.
     * @example
     * // Delete a few Control_pools
     * const { count } = await prisma.control_pool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Control_poolDeleteManyArgs>(
      args?: SelectSubset<T, Control_poolDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Control_pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Control_poolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Control_pools
     * const control_pool = await prisma.control_pool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Control_poolUpdateManyArgs>(
      args: SelectSubset<T, Control_poolUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Control_pool.
     * @param {Control_poolUpsertArgs} args - Arguments to update or create a Control_pool.
     * @example
     * // Update or create a Control_pool
     * const control_pool = await prisma.control_pool.upsert({
     *   create: {
     *     // ... data to create a Control_pool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Control_pool we want to update
     *   }
     * })
    **/
    upsert<T extends Control_poolUpsertArgs>(
      args: SelectSubset<T, Control_poolUpsertArgs>
    ): Prisma__Control_poolClient<Control_poolGetPayload<T>>

    /**
     * Count the number of Control_pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Control_poolCountArgs} args - Arguments to filter Control_pools to count.
     * @example
     * // Count the number of Control_pools
     * const count = await prisma.control_pool.count({
     *   where: {
     *     // ... the filter for the Control_pools we want to count
     *   }
     * })
    **/
    count<T extends Control_poolCountArgs>(
      args?: Subset<T, Control_poolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Control_poolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Control_pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Control_poolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Control_poolAggregateArgs>(args: Subset<T, Control_poolAggregateArgs>): Prisma.PrismaPromise<GetControl_poolAggregateType<T>>

    /**
     * Group by Control_pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Control_poolGroupByArgs} args - Group by arguments.
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
      T extends Control_poolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Control_poolGroupByArgs['orderBy'] }
        : { orderBy?: Control_poolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Control_poolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetControl_poolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Control_pool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Control_poolClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Control_pool base type for findUnique actions
   */
  export type Control_poolFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Control_pool
     */
    select?: Control_poolSelect | null
    /**
     * Filter, which Control_pool to fetch.
     */
    where: Control_poolWhereUniqueInput
  }

  /**
   * Control_pool findUnique
   */
  export interface Control_poolFindUniqueArgs extends Control_poolFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Control_pool findUniqueOrThrow
   */
  export type Control_poolFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Control_pool
     */
    select?: Control_poolSelect | null
    /**
     * Filter, which Control_pool to fetch.
     */
    where: Control_poolWhereUniqueInput
  }


  /**
   * Control_pool base type for findFirst actions
   */
  export type Control_poolFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Control_pool
     */
    select?: Control_poolSelect | null
    /**
     * Filter, which Control_pool to fetch.
     */
    where?: Control_poolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Control_pools to fetch.
     */
    orderBy?: Enumerable<Control_poolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Control_pools.
     */
    cursor?: Control_poolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Control_pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Control_pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Control_pools.
     */
    distinct?: Enumerable<Control_poolScalarFieldEnum>
  }

  /**
   * Control_pool findFirst
   */
  export interface Control_poolFindFirstArgs extends Control_poolFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Control_pool findFirstOrThrow
   */
  export type Control_poolFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Control_pool
     */
    select?: Control_poolSelect | null
    /**
     * Filter, which Control_pool to fetch.
     */
    where?: Control_poolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Control_pools to fetch.
     */
    orderBy?: Enumerable<Control_poolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Control_pools.
     */
    cursor?: Control_poolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Control_pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Control_pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Control_pools.
     */
    distinct?: Enumerable<Control_poolScalarFieldEnum>
  }


  /**
   * Control_pool findMany
   */
  export type Control_poolFindManyArgs = {
    /**
     * Select specific fields to fetch from the Control_pool
     */
    select?: Control_poolSelect | null
    /**
     * Filter, which Control_pools to fetch.
     */
    where?: Control_poolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Control_pools to fetch.
     */
    orderBy?: Enumerable<Control_poolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Control_pools.
     */
    cursor?: Control_poolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Control_pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Control_pools.
     */
    skip?: number
    distinct?: Enumerable<Control_poolScalarFieldEnum>
  }


  /**
   * Control_pool create
   */
  export type Control_poolCreateArgs = {
    /**
     * Select specific fields to fetch from the Control_pool
     */
    select?: Control_poolSelect | null
    /**
     * The data needed to create a Control_pool.
     */
    data: XOR<Control_poolCreateInput, Control_poolUncheckedCreateInput>
  }


  /**
   * Control_pool createMany
   */
  export type Control_poolCreateManyArgs = {
    /**
     * The data used to create many Control_pools.
     */
    data: Enumerable<Control_poolCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Control_pool update
   */
  export type Control_poolUpdateArgs = {
    /**
     * Select specific fields to fetch from the Control_pool
     */
    select?: Control_poolSelect | null
    /**
     * The data needed to update a Control_pool.
     */
    data: XOR<Control_poolUpdateInput, Control_poolUncheckedUpdateInput>
    /**
     * Choose, which Control_pool to update.
     */
    where: Control_poolWhereUniqueInput
  }


  /**
   * Control_pool updateMany
   */
  export type Control_poolUpdateManyArgs = {
    /**
     * The data used to update Control_pools.
     */
    data: XOR<Control_poolUpdateManyMutationInput, Control_poolUncheckedUpdateManyInput>
    /**
     * Filter which Control_pools to update
     */
    where?: Control_poolWhereInput
  }


  /**
   * Control_pool upsert
   */
  export type Control_poolUpsertArgs = {
    /**
     * Select specific fields to fetch from the Control_pool
     */
    select?: Control_poolSelect | null
    /**
     * The filter to search for the Control_pool to update in case it exists.
     */
    where: Control_poolWhereUniqueInput
    /**
     * In case the Control_pool found by the `where` argument doesn't exist, create a new Control_pool with this data.
     */
    create: XOR<Control_poolCreateInput, Control_poolUncheckedCreateInput>
    /**
     * In case the Control_pool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Control_poolUpdateInput, Control_poolUncheckedUpdateInput>
  }


  /**
   * Control_pool delete
   */
  export type Control_poolDeleteArgs = {
    /**
     * Select specific fields to fetch from the Control_pool
     */
    select?: Control_poolSelect | null
    /**
     * Filter which Control_pool to delete.
     */
    where: Control_poolWhereUniqueInput
  }


  /**
   * Control_pool deleteMany
   */
  export type Control_poolDeleteManyArgs = {
    /**
     * Filter which Control_pools to delete
     */
    where?: Control_poolWhereInput
  }


  /**
   * Control_pool without action
   */
  export type Control_poolArgs = {
    /**
     * Select specific fields to fetch from the Control_pool
     */
    select?: Control_poolSelect | null
  }



  /**
   * Model Control_user
   */


  export type AggregateControl_user = {
    _count: Control_userCountAggregateOutputType | null
    _avg: Control_userAvgAggregateOutputType | null
    _sum: Control_userSumAggregateOutputType | null
    _min: Control_userMinAggregateOutputType | null
    _max: Control_userMaxAggregateOutputType | null
  }

  export type Control_userAvgAggregateOutputType = {
    uid: number | null
    chance: number | null
  }

  export type Control_userSumAggregateOutputType = {
    uid: number | null
    chance: number | null
  }

  export type Control_userMinAggregateOutputType = {
    uid: number | null
    chance: number | null
  }

  export type Control_userMaxAggregateOutputType = {
    uid: number | null
    chance: number | null
  }

  export type Control_userCountAggregateOutputType = {
    uid: number
    chance: number
    _all: number
  }


  export type Control_userAvgAggregateInputType = {
    uid?: true
    chance?: true
  }

  export type Control_userSumAggregateInputType = {
    uid?: true
    chance?: true
  }

  export type Control_userMinAggregateInputType = {
    uid?: true
    chance?: true
  }

  export type Control_userMaxAggregateInputType = {
    uid?: true
    chance?: true
  }

  export type Control_userCountAggregateInputType = {
    uid?: true
    chance?: true
    _all?: true
  }

  export type Control_userAggregateArgs = {
    /**
     * Filter which Control_user to aggregate.
     */
    where?: Control_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Control_users to fetch.
     */
    orderBy?: Enumerable<Control_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Control_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Control_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Control_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Control_users
    **/
    _count?: true | Control_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Control_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Control_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Control_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Control_userMaxAggregateInputType
  }

  export type GetControl_userAggregateType<T extends Control_userAggregateArgs> = {
        [P in keyof T & keyof AggregateControl_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateControl_user[P]>
      : GetScalarType<T[P], AggregateControl_user[P]>
  }




  export type Control_userGroupByArgs = {
    where?: Control_userWhereInput
    orderBy?: Enumerable<Control_userOrderByWithAggregationInput>
    by: Control_userScalarFieldEnum[]
    having?: Control_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Control_userCountAggregateInputType | true
    _avg?: Control_userAvgAggregateInputType
    _sum?: Control_userSumAggregateInputType
    _min?: Control_userMinAggregateInputType
    _max?: Control_userMaxAggregateInputType
  }


  export type Control_userGroupByOutputType = {
    uid: number
    chance: number
    _count: Control_userCountAggregateOutputType | null
    _avg: Control_userAvgAggregateOutputType | null
    _sum: Control_userSumAggregateOutputType | null
    _min: Control_userMinAggregateOutputType | null
    _max: Control_userMaxAggregateOutputType | null
  }

  type GetControl_userGroupByPayload<T extends Control_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Control_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Control_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Control_userGroupByOutputType[P]>
            : GetScalarType<T[P], Control_userGroupByOutputType[P]>
        }
      >
    >


  export type Control_userSelect = {
    uid?: boolean
    chance?: boolean
  }


  export type Control_userGetPayload<S extends boolean | null | undefined | Control_userArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Control_user :
    S extends undefined ? never :
    S extends { include: any } & (Control_userArgs | Control_userFindManyArgs)
    ? Control_user 
    : S extends { select: any } & (Control_userArgs | Control_userFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Control_user ? Control_user[P] : never
  } 
      : Control_user


  type Control_userCountArgs = 
    Omit<Control_userFindManyArgs, 'select' | 'include'> & {
      select?: Control_userCountAggregateInputType | true
    }

  export interface Control_userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Control_user that matches the filter.
     * @param {Control_userFindUniqueArgs} args - Arguments to find a Control_user
     * @example
     * // Get one Control_user
     * const control_user = await prisma.control_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Control_userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Control_userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Control_user'> extends True ? Prisma__Control_userClient<Control_userGetPayload<T>> : Prisma__Control_userClient<Control_userGetPayload<T> | null, null>

    /**
     * Find one Control_user that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Control_userFindUniqueOrThrowArgs} args - Arguments to find a Control_user
     * @example
     * // Get one Control_user
     * const control_user = await prisma.control_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Control_userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Control_userFindUniqueOrThrowArgs>
    ): Prisma__Control_userClient<Control_userGetPayload<T>>

    /**
     * Find the first Control_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Control_userFindFirstArgs} args - Arguments to find a Control_user
     * @example
     * // Get one Control_user
     * const control_user = await prisma.control_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Control_userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Control_userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Control_user'> extends True ? Prisma__Control_userClient<Control_userGetPayload<T>> : Prisma__Control_userClient<Control_userGetPayload<T> | null, null>

    /**
     * Find the first Control_user that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Control_userFindFirstOrThrowArgs} args - Arguments to find a Control_user
     * @example
     * // Get one Control_user
     * const control_user = await prisma.control_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Control_userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Control_userFindFirstOrThrowArgs>
    ): Prisma__Control_userClient<Control_userGetPayload<T>>

    /**
     * Find zero or more Control_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Control_userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Control_users
     * const control_users = await prisma.control_user.findMany()
     * 
     * // Get first 10 Control_users
     * const control_users = await prisma.control_user.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const control_userWithUidOnly = await prisma.control_user.findMany({ select: { uid: true } })
     * 
    **/
    findMany<T extends Control_userFindManyArgs>(
      args?: SelectSubset<T, Control_userFindManyArgs>
    ): Prisma.PrismaPromise<Array<Control_userGetPayload<T>>>

    /**
     * Create a Control_user.
     * @param {Control_userCreateArgs} args - Arguments to create a Control_user.
     * @example
     * // Create one Control_user
     * const Control_user = await prisma.control_user.create({
     *   data: {
     *     // ... data to create a Control_user
     *   }
     * })
     * 
    **/
    create<T extends Control_userCreateArgs>(
      args: SelectSubset<T, Control_userCreateArgs>
    ): Prisma__Control_userClient<Control_userGetPayload<T>>

    /**
     * Create many Control_users.
     *     @param {Control_userCreateManyArgs} args - Arguments to create many Control_users.
     *     @example
     *     // Create many Control_users
     *     const control_user = await prisma.control_user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Control_userCreateManyArgs>(
      args?: SelectSubset<T, Control_userCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Control_user.
     * @param {Control_userDeleteArgs} args - Arguments to delete one Control_user.
     * @example
     * // Delete one Control_user
     * const Control_user = await prisma.control_user.delete({
     *   where: {
     *     // ... filter to delete one Control_user
     *   }
     * })
     * 
    **/
    delete<T extends Control_userDeleteArgs>(
      args: SelectSubset<T, Control_userDeleteArgs>
    ): Prisma__Control_userClient<Control_userGetPayload<T>>

    /**
     * Update one Control_user.
     * @param {Control_userUpdateArgs} args - Arguments to update one Control_user.
     * @example
     * // Update one Control_user
     * const control_user = await prisma.control_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Control_userUpdateArgs>(
      args: SelectSubset<T, Control_userUpdateArgs>
    ): Prisma__Control_userClient<Control_userGetPayload<T>>

    /**
     * Delete zero or more Control_users.
     * @param {Control_userDeleteManyArgs} args - Arguments to filter Control_users to delete.
     * @example
     * // Delete a few Control_users
     * const { count } = await prisma.control_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Control_userDeleteManyArgs>(
      args?: SelectSubset<T, Control_userDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Control_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Control_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Control_users
     * const control_user = await prisma.control_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Control_userUpdateManyArgs>(
      args: SelectSubset<T, Control_userUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Control_user.
     * @param {Control_userUpsertArgs} args - Arguments to update or create a Control_user.
     * @example
     * // Update or create a Control_user
     * const control_user = await prisma.control_user.upsert({
     *   create: {
     *     // ... data to create a Control_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Control_user we want to update
     *   }
     * })
    **/
    upsert<T extends Control_userUpsertArgs>(
      args: SelectSubset<T, Control_userUpsertArgs>
    ): Prisma__Control_userClient<Control_userGetPayload<T>>

    /**
     * Count the number of Control_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Control_userCountArgs} args - Arguments to filter Control_users to count.
     * @example
     * // Count the number of Control_users
     * const count = await prisma.control_user.count({
     *   where: {
     *     // ... the filter for the Control_users we want to count
     *   }
     * })
    **/
    count<T extends Control_userCountArgs>(
      args?: Subset<T, Control_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Control_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Control_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Control_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Control_userAggregateArgs>(args: Subset<T, Control_userAggregateArgs>): Prisma.PrismaPromise<GetControl_userAggregateType<T>>

    /**
     * Group by Control_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Control_userGroupByArgs} args - Group by arguments.
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
      T extends Control_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Control_userGroupByArgs['orderBy'] }
        : { orderBy?: Control_userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Control_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetControl_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Control_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Control_userClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Control_user base type for findUnique actions
   */
  export type Control_userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Control_user
     */
    select?: Control_userSelect | null
    /**
     * Filter, which Control_user to fetch.
     */
    where: Control_userWhereUniqueInput
  }

  /**
   * Control_user findUnique
   */
  export interface Control_userFindUniqueArgs extends Control_userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Control_user findUniqueOrThrow
   */
  export type Control_userFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Control_user
     */
    select?: Control_userSelect | null
    /**
     * Filter, which Control_user to fetch.
     */
    where: Control_userWhereUniqueInput
  }


  /**
   * Control_user base type for findFirst actions
   */
  export type Control_userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Control_user
     */
    select?: Control_userSelect | null
    /**
     * Filter, which Control_user to fetch.
     */
    where?: Control_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Control_users to fetch.
     */
    orderBy?: Enumerable<Control_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Control_users.
     */
    cursor?: Control_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Control_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Control_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Control_users.
     */
    distinct?: Enumerable<Control_userScalarFieldEnum>
  }

  /**
   * Control_user findFirst
   */
  export interface Control_userFindFirstArgs extends Control_userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Control_user findFirstOrThrow
   */
  export type Control_userFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Control_user
     */
    select?: Control_userSelect | null
    /**
     * Filter, which Control_user to fetch.
     */
    where?: Control_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Control_users to fetch.
     */
    orderBy?: Enumerable<Control_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Control_users.
     */
    cursor?: Control_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Control_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Control_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Control_users.
     */
    distinct?: Enumerable<Control_userScalarFieldEnum>
  }


  /**
   * Control_user findMany
   */
  export type Control_userFindManyArgs = {
    /**
     * Select specific fields to fetch from the Control_user
     */
    select?: Control_userSelect | null
    /**
     * Filter, which Control_users to fetch.
     */
    where?: Control_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Control_users to fetch.
     */
    orderBy?: Enumerable<Control_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Control_users.
     */
    cursor?: Control_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Control_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Control_users.
     */
    skip?: number
    distinct?: Enumerable<Control_userScalarFieldEnum>
  }


  /**
   * Control_user create
   */
  export type Control_userCreateArgs = {
    /**
     * Select specific fields to fetch from the Control_user
     */
    select?: Control_userSelect | null
    /**
     * The data needed to create a Control_user.
     */
    data: XOR<Control_userCreateInput, Control_userUncheckedCreateInput>
  }


  /**
   * Control_user createMany
   */
  export type Control_userCreateManyArgs = {
    /**
     * The data used to create many Control_users.
     */
    data: Enumerable<Control_userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Control_user update
   */
  export type Control_userUpdateArgs = {
    /**
     * Select specific fields to fetch from the Control_user
     */
    select?: Control_userSelect | null
    /**
     * The data needed to update a Control_user.
     */
    data: XOR<Control_userUpdateInput, Control_userUncheckedUpdateInput>
    /**
     * Choose, which Control_user to update.
     */
    where: Control_userWhereUniqueInput
  }


  /**
   * Control_user updateMany
   */
  export type Control_userUpdateManyArgs = {
    /**
     * The data used to update Control_users.
     */
    data: XOR<Control_userUpdateManyMutationInput, Control_userUncheckedUpdateManyInput>
    /**
     * Filter which Control_users to update
     */
    where?: Control_userWhereInput
  }


  /**
   * Control_user upsert
   */
  export type Control_userUpsertArgs = {
    /**
     * Select specific fields to fetch from the Control_user
     */
    select?: Control_userSelect | null
    /**
     * The filter to search for the Control_user to update in case it exists.
     */
    where: Control_userWhereUniqueInput
    /**
     * In case the Control_user found by the `where` argument doesn't exist, create a new Control_user with this data.
     */
    create: XOR<Control_userCreateInput, Control_userUncheckedCreateInput>
    /**
     * In case the Control_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Control_userUpdateInput, Control_userUncheckedUpdateInput>
  }


  /**
   * Control_user delete
   */
  export type Control_userDeleteArgs = {
    /**
     * Select specific fields to fetch from the Control_user
     */
    select?: Control_userSelect | null
    /**
     * Filter which Control_user to delete.
     */
    where: Control_userWhereUniqueInput
  }


  /**
   * Control_user deleteMany
   */
  export type Control_userDeleteManyArgs = {
    /**
     * Filter which Control_users to delete
     */
    where?: Control_userWhereInput
  }


  /**
   * Control_user without action
   */
  export type Control_userArgs = {
    /**
     * Select specific fields to fetch from the Control_user
     */
    select?: Control_userSelect | null
  }



  /**
   * Model Daysendprizevalue
   */


  export type AggregateDaysendprizevalue = {
    _count: DaysendprizevalueCountAggregateOutputType | null
    _avg: DaysendprizevalueAvgAggregateOutputType | null
    _sum: DaysendprizevalueSumAggregateOutputType | null
    _min: DaysendprizevalueMinAggregateOutputType | null
    _max: DaysendprizevalueMaxAggregateOutputType | null
  }

  export type DaysendprizevalueAvgAggregateOutputType = {
    day: number | null
    value: number | null
  }

  export type DaysendprizevalueSumAggregateOutputType = {
    day: number | null
    value: number | null
  }

  export type DaysendprizevalueMinAggregateOutputType = {
    day: number | null
    value: number | null
  }

  export type DaysendprizevalueMaxAggregateOutputType = {
    day: number | null
    value: number | null
  }

  export type DaysendprizevalueCountAggregateOutputType = {
    day: number
    value: number
    _all: number
  }


  export type DaysendprizevalueAvgAggregateInputType = {
    day?: true
    value?: true
  }

  export type DaysendprizevalueSumAggregateInputType = {
    day?: true
    value?: true
  }

  export type DaysendprizevalueMinAggregateInputType = {
    day?: true
    value?: true
  }

  export type DaysendprizevalueMaxAggregateInputType = {
    day?: true
    value?: true
  }

  export type DaysendprizevalueCountAggregateInputType = {
    day?: true
    value?: true
    _all?: true
  }

  export type DaysendprizevalueAggregateArgs = {
    /**
     * Filter which Daysendprizevalue to aggregate.
     */
    where?: DaysendprizevalueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Daysendprizevalues to fetch.
     */
    orderBy?: Enumerable<DaysendprizevalueOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DaysendprizevalueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Daysendprizevalues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Daysendprizevalues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Daysendprizevalues
    **/
    _count?: true | DaysendprizevalueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DaysendprizevalueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DaysendprizevalueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DaysendprizevalueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DaysendprizevalueMaxAggregateInputType
  }

  export type GetDaysendprizevalueAggregateType<T extends DaysendprizevalueAggregateArgs> = {
        [P in keyof T & keyof AggregateDaysendprizevalue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDaysendprizevalue[P]>
      : GetScalarType<T[P], AggregateDaysendprizevalue[P]>
  }




  export type DaysendprizevalueGroupByArgs = {
    where?: DaysendprizevalueWhereInput
    orderBy?: Enumerable<DaysendprizevalueOrderByWithAggregationInput>
    by: DaysendprizevalueScalarFieldEnum[]
    having?: DaysendprizevalueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DaysendprizevalueCountAggregateInputType | true
    _avg?: DaysendprizevalueAvgAggregateInputType
    _sum?: DaysendprizevalueSumAggregateInputType
    _min?: DaysendprizevalueMinAggregateInputType
    _max?: DaysendprizevalueMaxAggregateInputType
  }


  export type DaysendprizevalueGroupByOutputType = {
    day: number
    value: number
    _count: DaysendprizevalueCountAggregateOutputType | null
    _avg: DaysendprizevalueAvgAggregateOutputType | null
    _sum: DaysendprizevalueSumAggregateOutputType | null
    _min: DaysendprizevalueMinAggregateOutputType | null
    _max: DaysendprizevalueMaxAggregateOutputType | null
  }

  type GetDaysendprizevalueGroupByPayload<T extends DaysendprizevalueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DaysendprizevalueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DaysendprizevalueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DaysendprizevalueGroupByOutputType[P]>
            : GetScalarType<T[P], DaysendprizevalueGroupByOutputType[P]>
        }
      >
    >


  export type DaysendprizevalueSelect = {
    day?: boolean
    value?: boolean
  }


  export type DaysendprizevalueGetPayload<S extends boolean | null | undefined | DaysendprizevalueArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Daysendprizevalue :
    S extends undefined ? never :
    S extends { include: any } & (DaysendprizevalueArgs | DaysendprizevalueFindManyArgs)
    ? Daysendprizevalue 
    : S extends { select: any } & (DaysendprizevalueArgs | DaysendprizevalueFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Daysendprizevalue ? Daysendprizevalue[P] : never
  } 
      : Daysendprizevalue


  type DaysendprizevalueCountArgs = 
    Omit<DaysendprizevalueFindManyArgs, 'select' | 'include'> & {
      select?: DaysendprizevalueCountAggregateInputType | true
    }

  export interface DaysendprizevalueDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Daysendprizevalue that matches the filter.
     * @param {DaysendprizevalueFindUniqueArgs} args - Arguments to find a Daysendprizevalue
     * @example
     * // Get one Daysendprizevalue
     * const daysendprizevalue = await prisma.daysendprizevalue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DaysendprizevalueFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DaysendprizevalueFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Daysendprizevalue'> extends True ? Prisma__DaysendprizevalueClient<DaysendprizevalueGetPayload<T>> : Prisma__DaysendprizevalueClient<DaysendprizevalueGetPayload<T> | null, null>

    /**
     * Find one Daysendprizevalue that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DaysendprizevalueFindUniqueOrThrowArgs} args - Arguments to find a Daysendprizevalue
     * @example
     * // Get one Daysendprizevalue
     * const daysendprizevalue = await prisma.daysendprizevalue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DaysendprizevalueFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DaysendprizevalueFindUniqueOrThrowArgs>
    ): Prisma__DaysendprizevalueClient<DaysendprizevalueGetPayload<T>>

    /**
     * Find the first Daysendprizevalue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaysendprizevalueFindFirstArgs} args - Arguments to find a Daysendprizevalue
     * @example
     * // Get one Daysendprizevalue
     * const daysendprizevalue = await prisma.daysendprizevalue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DaysendprizevalueFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DaysendprizevalueFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Daysendprizevalue'> extends True ? Prisma__DaysendprizevalueClient<DaysendprizevalueGetPayload<T>> : Prisma__DaysendprizevalueClient<DaysendprizevalueGetPayload<T> | null, null>

    /**
     * Find the first Daysendprizevalue that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaysendprizevalueFindFirstOrThrowArgs} args - Arguments to find a Daysendprizevalue
     * @example
     * // Get one Daysendprizevalue
     * const daysendprizevalue = await prisma.daysendprizevalue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DaysendprizevalueFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DaysendprizevalueFindFirstOrThrowArgs>
    ): Prisma__DaysendprizevalueClient<DaysendprizevalueGetPayload<T>>

    /**
     * Find zero or more Daysendprizevalues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaysendprizevalueFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Daysendprizevalues
     * const daysendprizevalues = await prisma.daysendprizevalue.findMany()
     * 
     * // Get first 10 Daysendprizevalues
     * const daysendprizevalues = await prisma.daysendprizevalue.findMany({ take: 10 })
     * 
     * // Only select the `day`
     * const daysendprizevalueWithDayOnly = await prisma.daysendprizevalue.findMany({ select: { day: true } })
     * 
    **/
    findMany<T extends DaysendprizevalueFindManyArgs>(
      args?: SelectSubset<T, DaysendprizevalueFindManyArgs>
    ): Prisma.PrismaPromise<Array<DaysendprizevalueGetPayload<T>>>

    /**
     * Create a Daysendprizevalue.
     * @param {DaysendprizevalueCreateArgs} args - Arguments to create a Daysendprizevalue.
     * @example
     * // Create one Daysendprizevalue
     * const Daysendprizevalue = await prisma.daysendprizevalue.create({
     *   data: {
     *     // ... data to create a Daysendprizevalue
     *   }
     * })
     * 
    **/
    create<T extends DaysendprizevalueCreateArgs>(
      args: SelectSubset<T, DaysendprizevalueCreateArgs>
    ): Prisma__DaysendprizevalueClient<DaysendprizevalueGetPayload<T>>

    /**
     * Create many Daysendprizevalues.
     *     @param {DaysendprizevalueCreateManyArgs} args - Arguments to create many Daysendprizevalues.
     *     @example
     *     // Create many Daysendprizevalues
     *     const daysendprizevalue = await prisma.daysendprizevalue.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DaysendprizevalueCreateManyArgs>(
      args?: SelectSubset<T, DaysendprizevalueCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Daysendprizevalue.
     * @param {DaysendprizevalueDeleteArgs} args - Arguments to delete one Daysendprizevalue.
     * @example
     * // Delete one Daysendprizevalue
     * const Daysendprizevalue = await prisma.daysendprizevalue.delete({
     *   where: {
     *     // ... filter to delete one Daysendprizevalue
     *   }
     * })
     * 
    **/
    delete<T extends DaysendprizevalueDeleteArgs>(
      args: SelectSubset<T, DaysendprizevalueDeleteArgs>
    ): Prisma__DaysendprizevalueClient<DaysendprizevalueGetPayload<T>>

    /**
     * Update one Daysendprizevalue.
     * @param {DaysendprizevalueUpdateArgs} args - Arguments to update one Daysendprizevalue.
     * @example
     * // Update one Daysendprizevalue
     * const daysendprizevalue = await prisma.daysendprizevalue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DaysendprizevalueUpdateArgs>(
      args: SelectSubset<T, DaysendprizevalueUpdateArgs>
    ): Prisma__DaysendprizevalueClient<DaysendprizevalueGetPayload<T>>

    /**
     * Delete zero or more Daysendprizevalues.
     * @param {DaysendprizevalueDeleteManyArgs} args - Arguments to filter Daysendprizevalues to delete.
     * @example
     * // Delete a few Daysendprizevalues
     * const { count } = await prisma.daysendprizevalue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DaysendprizevalueDeleteManyArgs>(
      args?: SelectSubset<T, DaysendprizevalueDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Daysendprizevalues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaysendprizevalueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Daysendprizevalues
     * const daysendprizevalue = await prisma.daysendprizevalue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DaysendprizevalueUpdateManyArgs>(
      args: SelectSubset<T, DaysendprizevalueUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Daysendprizevalue.
     * @param {DaysendprizevalueUpsertArgs} args - Arguments to update or create a Daysendprizevalue.
     * @example
     * // Update or create a Daysendprizevalue
     * const daysendprizevalue = await prisma.daysendprizevalue.upsert({
     *   create: {
     *     // ... data to create a Daysendprizevalue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Daysendprizevalue we want to update
     *   }
     * })
    **/
    upsert<T extends DaysendprizevalueUpsertArgs>(
      args: SelectSubset<T, DaysendprizevalueUpsertArgs>
    ): Prisma__DaysendprizevalueClient<DaysendprizevalueGetPayload<T>>

    /**
     * Count the number of Daysendprizevalues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaysendprizevalueCountArgs} args - Arguments to filter Daysendprizevalues to count.
     * @example
     * // Count the number of Daysendprizevalues
     * const count = await prisma.daysendprizevalue.count({
     *   where: {
     *     // ... the filter for the Daysendprizevalues we want to count
     *   }
     * })
    **/
    count<T extends DaysendprizevalueCountArgs>(
      args?: Subset<T, DaysendprizevalueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DaysendprizevalueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Daysendprizevalue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaysendprizevalueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DaysendprizevalueAggregateArgs>(args: Subset<T, DaysendprizevalueAggregateArgs>): Prisma.PrismaPromise<GetDaysendprizevalueAggregateType<T>>

    /**
     * Group by Daysendprizevalue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaysendprizevalueGroupByArgs} args - Group by arguments.
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
      T extends DaysendprizevalueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DaysendprizevalueGroupByArgs['orderBy'] }
        : { orderBy?: DaysendprizevalueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DaysendprizevalueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDaysendprizevalueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Daysendprizevalue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DaysendprizevalueClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Daysendprizevalue base type for findUnique actions
   */
  export type DaysendprizevalueFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Daysendprizevalue
     */
    select?: DaysendprizevalueSelect | null
    /**
     * Filter, which Daysendprizevalue to fetch.
     */
    where: DaysendprizevalueWhereUniqueInput
  }

  /**
   * Daysendprizevalue findUnique
   */
  export interface DaysendprizevalueFindUniqueArgs extends DaysendprizevalueFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Daysendprizevalue findUniqueOrThrow
   */
  export type DaysendprizevalueFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Daysendprizevalue
     */
    select?: DaysendprizevalueSelect | null
    /**
     * Filter, which Daysendprizevalue to fetch.
     */
    where: DaysendprizevalueWhereUniqueInput
  }


  /**
   * Daysendprizevalue base type for findFirst actions
   */
  export type DaysendprizevalueFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Daysendprizevalue
     */
    select?: DaysendprizevalueSelect | null
    /**
     * Filter, which Daysendprizevalue to fetch.
     */
    where?: DaysendprizevalueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Daysendprizevalues to fetch.
     */
    orderBy?: Enumerable<DaysendprizevalueOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Daysendprizevalues.
     */
    cursor?: DaysendprizevalueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Daysendprizevalues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Daysendprizevalues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Daysendprizevalues.
     */
    distinct?: Enumerable<DaysendprizevalueScalarFieldEnum>
  }

  /**
   * Daysendprizevalue findFirst
   */
  export interface DaysendprizevalueFindFirstArgs extends DaysendprizevalueFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Daysendprizevalue findFirstOrThrow
   */
  export type DaysendprizevalueFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Daysendprizevalue
     */
    select?: DaysendprizevalueSelect | null
    /**
     * Filter, which Daysendprizevalue to fetch.
     */
    where?: DaysendprizevalueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Daysendprizevalues to fetch.
     */
    orderBy?: Enumerable<DaysendprizevalueOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Daysendprizevalues.
     */
    cursor?: DaysendprizevalueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Daysendprizevalues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Daysendprizevalues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Daysendprizevalues.
     */
    distinct?: Enumerable<DaysendprizevalueScalarFieldEnum>
  }


  /**
   * Daysendprizevalue findMany
   */
  export type DaysendprizevalueFindManyArgs = {
    /**
     * Select specific fields to fetch from the Daysendprizevalue
     */
    select?: DaysendprizevalueSelect | null
    /**
     * Filter, which Daysendprizevalues to fetch.
     */
    where?: DaysendprizevalueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Daysendprizevalues to fetch.
     */
    orderBy?: Enumerable<DaysendprizevalueOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Daysendprizevalues.
     */
    cursor?: DaysendprizevalueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Daysendprizevalues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Daysendprizevalues.
     */
    skip?: number
    distinct?: Enumerable<DaysendprizevalueScalarFieldEnum>
  }


  /**
   * Daysendprizevalue create
   */
  export type DaysendprizevalueCreateArgs = {
    /**
     * Select specific fields to fetch from the Daysendprizevalue
     */
    select?: DaysendprizevalueSelect | null
    /**
     * The data needed to create a Daysendprizevalue.
     */
    data: XOR<DaysendprizevalueCreateInput, DaysendprizevalueUncheckedCreateInput>
  }


  /**
   * Daysendprizevalue createMany
   */
  export type DaysendprizevalueCreateManyArgs = {
    /**
     * The data used to create many Daysendprizevalues.
     */
    data: Enumerable<DaysendprizevalueCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Daysendprizevalue update
   */
  export type DaysendprizevalueUpdateArgs = {
    /**
     * Select specific fields to fetch from the Daysendprizevalue
     */
    select?: DaysendprizevalueSelect | null
    /**
     * The data needed to update a Daysendprizevalue.
     */
    data: XOR<DaysendprizevalueUpdateInput, DaysendprizevalueUncheckedUpdateInput>
    /**
     * Choose, which Daysendprizevalue to update.
     */
    where: DaysendprizevalueWhereUniqueInput
  }


  /**
   * Daysendprizevalue updateMany
   */
  export type DaysendprizevalueUpdateManyArgs = {
    /**
     * The data used to update Daysendprizevalues.
     */
    data: XOR<DaysendprizevalueUpdateManyMutationInput, DaysendprizevalueUncheckedUpdateManyInput>
    /**
     * Filter which Daysendprizevalues to update
     */
    where?: DaysendprizevalueWhereInput
  }


  /**
   * Daysendprizevalue upsert
   */
  export type DaysendprizevalueUpsertArgs = {
    /**
     * Select specific fields to fetch from the Daysendprizevalue
     */
    select?: DaysendprizevalueSelect | null
    /**
     * The filter to search for the Daysendprizevalue to update in case it exists.
     */
    where: DaysendprizevalueWhereUniqueInput
    /**
     * In case the Daysendprizevalue found by the `where` argument doesn't exist, create a new Daysendprizevalue with this data.
     */
    create: XOR<DaysendprizevalueCreateInput, DaysendprizevalueUncheckedCreateInput>
    /**
     * In case the Daysendprizevalue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DaysendprizevalueUpdateInput, DaysendprizevalueUncheckedUpdateInput>
  }


  /**
   * Daysendprizevalue delete
   */
  export type DaysendprizevalueDeleteArgs = {
    /**
     * Select specific fields to fetch from the Daysendprizevalue
     */
    select?: DaysendprizevalueSelect | null
    /**
     * Filter which Daysendprizevalue to delete.
     */
    where: DaysendprizevalueWhereUniqueInput
  }


  /**
   * Daysendprizevalue deleteMany
   */
  export type DaysendprizevalueDeleteManyArgs = {
    /**
     * Filter which Daysendprizevalues to delete
     */
    where?: DaysendprizevalueWhereInput
  }


  /**
   * Daysendprizevalue without action
   */
  export type DaysendprizevalueArgs = {
    /**
     * Select specific fields to fetch from the Daysendprizevalue
     */
    select?: DaysendprizevalueSelect | null
  }



  /**
   * Model Fishlog
   */


  export type AggregateFishlog = {
    _count: FishlogCountAggregateOutputType | null
    _avg: FishlogAvgAggregateOutputType | null
    _sum: FishlogSumAggregateOutputType | null
    _min: FishlogMinAggregateOutputType | null
    _max: FishlogMaxAggregateOutputType | null
  }

  export type FishlogAvgAggregateOutputType = {
    id: number | null
    userid: number | null
    usecoin: number | null
    wincoin: number | null
    mark: number | null
    serverId: number | null
  }

  export type FishlogSumAggregateOutputType = {
    id: number | null
    userid: number | null
    usecoin: number | null
    wincoin: number | null
    mark: number | null
    serverId: number | null
  }

  export type FishlogMinAggregateOutputType = {
    id: number | null
    userid: number | null
    usecoin: number | null
    wincoin: number | null
    balanceTime: Date | null
    mark: number | null
    serverId: number | null
  }

  export type FishlogMaxAggregateOutputType = {
    id: number | null
    userid: number | null
    usecoin: number | null
    wincoin: number | null
    balanceTime: Date | null
    mark: number | null
    serverId: number | null
  }

  export type FishlogCountAggregateOutputType = {
    id: number
    userid: number
    usecoin: number
    wincoin: number
    balanceTime: number
    mark: number
    serverId: number
    _all: number
  }


  export type FishlogAvgAggregateInputType = {
    id?: true
    userid?: true
    usecoin?: true
    wincoin?: true
    mark?: true
    serverId?: true
  }

  export type FishlogSumAggregateInputType = {
    id?: true
    userid?: true
    usecoin?: true
    wincoin?: true
    mark?: true
    serverId?: true
  }

  export type FishlogMinAggregateInputType = {
    id?: true
    userid?: true
    usecoin?: true
    wincoin?: true
    balanceTime?: true
    mark?: true
    serverId?: true
  }

  export type FishlogMaxAggregateInputType = {
    id?: true
    userid?: true
    usecoin?: true
    wincoin?: true
    balanceTime?: true
    mark?: true
    serverId?: true
  }

  export type FishlogCountAggregateInputType = {
    id?: true
    userid?: true
    usecoin?: true
    wincoin?: true
    balanceTime?: true
    mark?: true
    serverId?: true
    _all?: true
  }

  export type FishlogAggregateArgs = {
    /**
     * Filter which Fishlog to aggregate.
     */
    where?: FishlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fishlogs to fetch.
     */
    orderBy?: Enumerable<FishlogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FishlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fishlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fishlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fishlogs
    **/
    _count?: true | FishlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FishlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FishlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FishlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FishlogMaxAggregateInputType
  }

  export type GetFishlogAggregateType<T extends FishlogAggregateArgs> = {
        [P in keyof T & keyof AggregateFishlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFishlog[P]>
      : GetScalarType<T[P], AggregateFishlog[P]>
  }




  export type FishlogGroupByArgs = {
    where?: FishlogWhereInput
    orderBy?: Enumerable<FishlogOrderByWithAggregationInput>
    by: FishlogScalarFieldEnum[]
    having?: FishlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FishlogCountAggregateInputType | true
    _avg?: FishlogAvgAggregateInputType
    _sum?: FishlogSumAggregateInputType
    _min?: FishlogMinAggregateInputType
    _max?: FishlogMaxAggregateInputType
  }


  export type FishlogGroupByOutputType = {
    id: number
    userid: number
    usecoin: number
    wincoin: number
    balanceTime: Date
    mark: number
    serverId: number
    _count: FishlogCountAggregateOutputType | null
    _avg: FishlogAvgAggregateOutputType | null
    _sum: FishlogSumAggregateOutputType | null
    _min: FishlogMinAggregateOutputType | null
    _max: FishlogMaxAggregateOutputType | null
  }

  type GetFishlogGroupByPayload<T extends FishlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FishlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FishlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FishlogGroupByOutputType[P]>
            : GetScalarType<T[P], FishlogGroupByOutputType[P]>
        }
      >
    >


  export type FishlogSelect = {
    id?: boolean
    userid?: boolean
    usecoin?: boolean
    wincoin?: boolean
    balanceTime?: boolean
    mark?: boolean
    serverId?: boolean
  }


  export type FishlogGetPayload<S extends boolean | null | undefined | FishlogArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Fishlog :
    S extends undefined ? never :
    S extends { include: any } & (FishlogArgs | FishlogFindManyArgs)
    ? Fishlog 
    : S extends { select: any } & (FishlogArgs | FishlogFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Fishlog ? Fishlog[P] : never
  } 
      : Fishlog


  type FishlogCountArgs = 
    Omit<FishlogFindManyArgs, 'select' | 'include'> & {
      select?: FishlogCountAggregateInputType | true
    }

  export interface FishlogDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Fishlog that matches the filter.
     * @param {FishlogFindUniqueArgs} args - Arguments to find a Fishlog
     * @example
     * // Get one Fishlog
     * const fishlog = await prisma.fishlog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FishlogFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FishlogFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Fishlog'> extends True ? Prisma__FishlogClient<FishlogGetPayload<T>> : Prisma__FishlogClient<FishlogGetPayload<T> | null, null>

    /**
     * Find one Fishlog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FishlogFindUniqueOrThrowArgs} args - Arguments to find a Fishlog
     * @example
     * // Get one Fishlog
     * const fishlog = await prisma.fishlog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FishlogFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FishlogFindUniqueOrThrowArgs>
    ): Prisma__FishlogClient<FishlogGetPayload<T>>

    /**
     * Find the first Fishlog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishlogFindFirstArgs} args - Arguments to find a Fishlog
     * @example
     * // Get one Fishlog
     * const fishlog = await prisma.fishlog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FishlogFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FishlogFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Fishlog'> extends True ? Prisma__FishlogClient<FishlogGetPayload<T>> : Prisma__FishlogClient<FishlogGetPayload<T> | null, null>

    /**
     * Find the first Fishlog that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishlogFindFirstOrThrowArgs} args - Arguments to find a Fishlog
     * @example
     * // Get one Fishlog
     * const fishlog = await prisma.fishlog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FishlogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FishlogFindFirstOrThrowArgs>
    ): Prisma__FishlogClient<FishlogGetPayload<T>>

    /**
     * Find zero or more Fishlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishlogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fishlogs
     * const fishlogs = await prisma.fishlog.findMany()
     * 
     * // Get first 10 Fishlogs
     * const fishlogs = await prisma.fishlog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fishlogWithIdOnly = await prisma.fishlog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FishlogFindManyArgs>(
      args?: SelectSubset<T, FishlogFindManyArgs>
    ): Prisma.PrismaPromise<Array<FishlogGetPayload<T>>>

    /**
     * Create a Fishlog.
     * @param {FishlogCreateArgs} args - Arguments to create a Fishlog.
     * @example
     * // Create one Fishlog
     * const Fishlog = await prisma.fishlog.create({
     *   data: {
     *     // ... data to create a Fishlog
     *   }
     * })
     * 
    **/
    create<T extends FishlogCreateArgs>(
      args: SelectSubset<T, FishlogCreateArgs>
    ): Prisma__FishlogClient<FishlogGetPayload<T>>

    /**
     * Create many Fishlogs.
     *     @param {FishlogCreateManyArgs} args - Arguments to create many Fishlogs.
     *     @example
     *     // Create many Fishlogs
     *     const fishlog = await prisma.fishlog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FishlogCreateManyArgs>(
      args?: SelectSubset<T, FishlogCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fishlog.
     * @param {FishlogDeleteArgs} args - Arguments to delete one Fishlog.
     * @example
     * // Delete one Fishlog
     * const Fishlog = await prisma.fishlog.delete({
     *   where: {
     *     // ... filter to delete one Fishlog
     *   }
     * })
     * 
    **/
    delete<T extends FishlogDeleteArgs>(
      args: SelectSubset<T, FishlogDeleteArgs>
    ): Prisma__FishlogClient<FishlogGetPayload<T>>

    /**
     * Update one Fishlog.
     * @param {FishlogUpdateArgs} args - Arguments to update one Fishlog.
     * @example
     * // Update one Fishlog
     * const fishlog = await prisma.fishlog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FishlogUpdateArgs>(
      args: SelectSubset<T, FishlogUpdateArgs>
    ): Prisma__FishlogClient<FishlogGetPayload<T>>

    /**
     * Delete zero or more Fishlogs.
     * @param {FishlogDeleteManyArgs} args - Arguments to filter Fishlogs to delete.
     * @example
     * // Delete a few Fishlogs
     * const { count } = await prisma.fishlog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FishlogDeleteManyArgs>(
      args?: SelectSubset<T, FishlogDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fishlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fishlogs
     * const fishlog = await prisma.fishlog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FishlogUpdateManyArgs>(
      args: SelectSubset<T, FishlogUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fishlog.
     * @param {FishlogUpsertArgs} args - Arguments to update or create a Fishlog.
     * @example
     * // Update or create a Fishlog
     * const fishlog = await prisma.fishlog.upsert({
     *   create: {
     *     // ... data to create a Fishlog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fishlog we want to update
     *   }
     * })
    **/
    upsert<T extends FishlogUpsertArgs>(
      args: SelectSubset<T, FishlogUpsertArgs>
    ): Prisma__FishlogClient<FishlogGetPayload<T>>

    /**
     * Count the number of Fishlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishlogCountArgs} args - Arguments to filter Fishlogs to count.
     * @example
     * // Count the number of Fishlogs
     * const count = await prisma.fishlog.count({
     *   where: {
     *     // ... the filter for the Fishlogs we want to count
     *   }
     * })
    **/
    count<T extends FishlogCountArgs>(
      args?: Subset<T, FishlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FishlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fishlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FishlogAggregateArgs>(args: Subset<T, FishlogAggregateArgs>): Prisma.PrismaPromise<GetFishlogAggregateType<T>>

    /**
     * Group by Fishlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishlogGroupByArgs} args - Group by arguments.
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
      T extends FishlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FishlogGroupByArgs['orderBy'] }
        : { orderBy?: FishlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FishlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFishlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Fishlog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FishlogClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Fishlog base type for findUnique actions
   */
  export type FishlogFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Fishlog
     */
    select?: FishlogSelect | null
    /**
     * Filter, which Fishlog to fetch.
     */
    where: FishlogWhereUniqueInput
  }

  /**
   * Fishlog findUnique
   */
  export interface FishlogFindUniqueArgs extends FishlogFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Fishlog findUniqueOrThrow
   */
  export type FishlogFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Fishlog
     */
    select?: FishlogSelect | null
    /**
     * Filter, which Fishlog to fetch.
     */
    where: FishlogWhereUniqueInput
  }


  /**
   * Fishlog base type for findFirst actions
   */
  export type FishlogFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Fishlog
     */
    select?: FishlogSelect | null
    /**
     * Filter, which Fishlog to fetch.
     */
    where?: FishlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fishlogs to fetch.
     */
    orderBy?: Enumerable<FishlogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fishlogs.
     */
    cursor?: FishlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fishlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fishlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fishlogs.
     */
    distinct?: Enumerable<FishlogScalarFieldEnum>
  }

  /**
   * Fishlog findFirst
   */
  export interface FishlogFindFirstArgs extends FishlogFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Fishlog findFirstOrThrow
   */
  export type FishlogFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Fishlog
     */
    select?: FishlogSelect | null
    /**
     * Filter, which Fishlog to fetch.
     */
    where?: FishlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fishlogs to fetch.
     */
    orderBy?: Enumerable<FishlogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fishlogs.
     */
    cursor?: FishlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fishlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fishlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fishlogs.
     */
    distinct?: Enumerable<FishlogScalarFieldEnum>
  }


  /**
   * Fishlog findMany
   */
  export type FishlogFindManyArgs = {
    /**
     * Select specific fields to fetch from the Fishlog
     */
    select?: FishlogSelect | null
    /**
     * Filter, which Fishlogs to fetch.
     */
    where?: FishlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fishlogs to fetch.
     */
    orderBy?: Enumerable<FishlogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fishlogs.
     */
    cursor?: FishlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fishlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fishlogs.
     */
    skip?: number
    distinct?: Enumerable<FishlogScalarFieldEnum>
  }


  /**
   * Fishlog create
   */
  export type FishlogCreateArgs = {
    /**
     * Select specific fields to fetch from the Fishlog
     */
    select?: FishlogSelect | null
    /**
     * The data needed to create a Fishlog.
     */
    data: XOR<FishlogCreateInput, FishlogUncheckedCreateInput>
  }


  /**
   * Fishlog createMany
   */
  export type FishlogCreateManyArgs = {
    /**
     * The data used to create many Fishlogs.
     */
    data: Enumerable<FishlogCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Fishlog update
   */
  export type FishlogUpdateArgs = {
    /**
     * Select specific fields to fetch from the Fishlog
     */
    select?: FishlogSelect | null
    /**
     * The data needed to update a Fishlog.
     */
    data: XOR<FishlogUpdateInput, FishlogUncheckedUpdateInput>
    /**
     * Choose, which Fishlog to update.
     */
    where: FishlogWhereUniqueInput
  }


  /**
   * Fishlog updateMany
   */
  export type FishlogUpdateManyArgs = {
    /**
     * The data used to update Fishlogs.
     */
    data: XOR<FishlogUpdateManyMutationInput, FishlogUncheckedUpdateManyInput>
    /**
     * Filter which Fishlogs to update
     */
    where?: FishlogWhereInput
  }


  /**
   * Fishlog upsert
   */
  export type FishlogUpsertArgs = {
    /**
     * Select specific fields to fetch from the Fishlog
     */
    select?: FishlogSelect | null
    /**
     * The filter to search for the Fishlog to update in case it exists.
     */
    where: FishlogWhereUniqueInput
    /**
     * In case the Fishlog found by the `where` argument doesn't exist, create a new Fishlog with this data.
     */
    create: XOR<FishlogCreateInput, FishlogUncheckedCreateInput>
    /**
     * In case the Fishlog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FishlogUpdateInput, FishlogUncheckedUpdateInput>
  }


  /**
   * Fishlog delete
   */
  export type FishlogDeleteArgs = {
    /**
     * Select specific fields to fetch from the Fishlog
     */
    select?: FishlogSelect | null
    /**
     * Filter which Fishlog to delete.
     */
    where: FishlogWhereUniqueInput
  }


  /**
   * Fishlog deleteMany
   */
  export type FishlogDeleteManyArgs = {
    /**
     * Filter which Fishlogs to delete
     */
    where?: FishlogWhereInput
  }


  /**
   * Fishlog without action
   */
  export type FishlogArgs = {
    /**
     * Select specific fields to fetch from the Fishlog
     */
    select?: FishlogSelect | null
  }



  /**
   * Model Getcoin
   */


  export type AggregateGetcoin = {
    _count: GetcoinCountAggregateOutputType | null
    _avg: GetcoinAvgAggregateOutputType | null
    _sum: GetcoinSumAggregateOutputType | null
    _min: GetcoinMinAggregateOutputType | null
    _max: GetcoinMaxAggregateOutputType | null
  }

  export type GetcoinAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    getCoin: number | null
    mark: number | null
    isget: number | null
    day: number | null
  }

  export type GetcoinSumAggregateOutputType = {
    id: number | null
    userId: number | null
    getCoin: number | null
    mark: number | null
    isget: number | null
    day: number | null
  }

  export type GetcoinMinAggregateOutputType = {
    id: number | null
    userId: number | null
    getCoin: number | null
    adddate: Date | null
    mark: number | null
    isget: number | null
    day: number | null
  }

  export type GetcoinMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    getCoin: number | null
    adddate: Date | null
    mark: number | null
    isget: number | null
    day: number | null
  }

  export type GetcoinCountAggregateOutputType = {
    id: number
    userId: number
    getCoin: number
    adddate: number
    mark: number
    isget: number
    day: number
    _all: number
  }


  export type GetcoinAvgAggregateInputType = {
    id?: true
    userId?: true
    getCoin?: true
    mark?: true
    isget?: true
    day?: true
  }

  export type GetcoinSumAggregateInputType = {
    id?: true
    userId?: true
    getCoin?: true
    mark?: true
    isget?: true
    day?: true
  }

  export type GetcoinMinAggregateInputType = {
    id?: true
    userId?: true
    getCoin?: true
    adddate?: true
    mark?: true
    isget?: true
    day?: true
  }

  export type GetcoinMaxAggregateInputType = {
    id?: true
    userId?: true
    getCoin?: true
    adddate?: true
    mark?: true
    isget?: true
    day?: true
  }

  export type GetcoinCountAggregateInputType = {
    id?: true
    userId?: true
    getCoin?: true
    adddate?: true
    mark?: true
    isget?: true
    day?: true
    _all?: true
  }

  export type GetcoinAggregateArgs = {
    /**
     * Filter which Getcoin to aggregate.
     */
    where?: GetcoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Getcoins to fetch.
     */
    orderBy?: Enumerable<GetcoinOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GetcoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Getcoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Getcoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Getcoins
    **/
    _count?: true | GetcoinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GetcoinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GetcoinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GetcoinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GetcoinMaxAggregateInputType
  }

  export type GetGetcoinAggregateType<T extends GetcoinAggregateArgs> = {
        [P in keyof T & keyof AggregateGetcoin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGetcoin[P]>
      : GetScalarType<T[P], AggregateGetcoin[P]>
  }




  export type GetcoinGroupByArgs = {
    where?: GetcoinWhereInput
    orderBy?: Enumerable<GetcoinOrderByWithAggregationInput>
    by: GetcoinScalarFieldEnum[]
    having?: GetcoinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GetcoinCountAggregateInputType | true
    _avg?: GetcoinAvgAggregateInputType
    _sum?: GetcoinSumAggregateInputType
    _min?: GetcoinMinAggregateInputType
    _max?: GetcoinMaxAggregateInputType
  }


  export type GetcoinGroupByOutputType = {
    id: number
    userId: number
    getCoin: number
    adddate: Date
    mark: number
    isget: number
    day: number
    _count: GetcoinCountAggregateOutputType | null
    _avg: GetcoinAvgAggregateOutputType | null
    _sum: GetcoinSumAggregateOutputType | null
    _min: GetcoinMinAggregateOutputType | null
    _max: GetcoinMaxAggregateOutputType | null
  }

  type GetGetcoinGroupByPayload<T extends GetcoinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GetcoinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GetcoinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GetcoinGroupByOutputType[P]>
            : GetScalarType<T[P], GetcoinGroupByOutputType[P]>
        }
      >
    >


  export type GetcoinSelect = {
    id?: boolean
    userId?: boolean
    getCoin?: boolean
    adddate?: boolean
    mark?: boolean
    isget?: boolean
    day?: boolean
  }


  export type GetcoinGetPayload<S extends boolean | null | undefined | GetcoinArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Getcoin :
    S extends undefined ? never :
    S extends { include: any } & (GetcoinArgs | GetcoinFindManyArgs)
    ? Getcoin 
    : S extends { select: any } & (GetcoinArgs | GetcoinFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Getcoin ? Getcoin[P] : never
  } 
      : Getcoin


  type GetcoinCountArgs = 
    Omit<GetcoinFindManyArgs, 'select' | 'include'> & {
      select?: GetcoinCountAggregateInputType | true
    }

  export interface GetcoinDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Getcoin that matches the filter.
     * @param {GetcoinFindUniqueArgs} args - Arguments to find a Getcoin
     * @example
     * // Get one Getcoin
     * const getcoin = await prisma.getcoin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GetcoinFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GetcoinFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Getcoin'> extends True ? Prisma__GetcoinClient<GetcoinGetPayload<T>> : Prisma__GetcoinClient<GetcoinGetPayload<T> | null, null>

    /**
     * Find one Getcoin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GetcoinFindUniqueOrThrowArgs} args - Arguments to find a Getcoin
     * @example
     * // Get one Getcoin
     * const getcoin = await prisma.getcoin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GetcoinFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GetcoinFindUniqueOrThrowArgs>
    ): Prisma__GetcoinClient<GetcoinGetPayload<T>>

    /**
     * Find the first Getcoin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GetcoinFindFirstArgs} args - Arguments to find a Getcoin
     * @example
     * // Get one Getcoin
     * const getcoin = await prisma.getcoin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GetcoinFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GetcoinFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Getcoin'> extends True ? Prisma__GetcoinClient<GetcoinGetPayload<T>> : Prisma__GetcoinClient<GetcoinGetPayload<T> | null, null>

    /**
     * Find the first Getcoin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GetcoinFindFirstOrThrowArgs} args - Arguments to find a Getcoin
     * @example
     * // Get one Getcoin
     * const getcoin = await prisma.getcoin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GetcoinFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GetcoinFindFirstOrThrowArgs>
    ): Prisma__GetcoinClient<GetcoinGetPayload<T>>

    /**
     * Find zero or more Getcoins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GetcoinFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Getcoins
     * const getcoins = await prisma.getcoin.findMany()
     * 
     * // Get first 10 Getcoins
     * const getcoins = await prisma.getcoin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const getcoinWithIdOnly = await prisma.getcoin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GetcoinFindManyArgs>(
      args?: SelectSubset<T, GetcoinFindManyArgs>
    ): Prisma.PrismaPromise<Array<GetcoinGetPayload<T>>>

    /**
     * Create a Getcoin.
     * @param {GetcoinCreateArgs} args - Arguments to create a Getcoin.
     * @example
     * // Create one Getcoin
     * const Getcoin = await prisma.getcoin.create({
     *   data: {
     *     // ... data to create a Getcoin
     *   }
     * })
     * 
    **/
    create<T extends GetcoinCreateArgs>(
      args: SelectSubset<T, GetcoinCreateArgs>
    ): Prisma__GetcoinClient<GetcoinGetPayload<T>>

    /**
     * Create many Getcoins.
     *     @param {GetcoinCreateManyArgs} args - Arguments to create many Getcoins.
     *     @example
     *     // Create many Getcoins
     *     const getcoin = await prisma.getcoin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GetcoinCreateManyArgs>(
      args?: SelectSubset<T, GetcoinCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Getcoin.
     * @param {GetcoinDeleteArgs} args - Arguments to delete one Getcoin.
     * @example
     * // Delete one Getcoin
     * const Getcoin = await prisma.getcoin.delete({
     *   where: {
     *     // ... filter to delete one Getcoin
     *   }
     * })
     * 
    **/
    delete<T extends GetcoinDeleteArgs>(
      args: SelectSubset<T, GetcoinDeleteArgs>
    ): Prisma__GetcoinClient<GetcoinGetPayload<T>>

    /**
     * Update one Getcoin.
     * @param {GetcoinUpdateArgs} args - Arguments to update one Getcoin.
     * @example
     * // Update one Getcoin
     * const getcoin = await prisma.getcoin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GetcoinUpdateArgs>(
      args: SelectSubset<T, GetcoinUpdateArgs>
    ): Prisma__GetcoinClient<GetcoinGetPayload<T>>

    /**
     * Delete zero or more Getcoins.
     * @param {GetcoinDeleteManyArgs} args - Arguments to filter Getcoins to delete.
     * @example
     * // Delete a few Getcoins
     * const { count } = await prisma.getcoin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GetcoinDeleteManyArgs>(
      args?: SelectSubset<T, GetcoinDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Getcoins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GetcoinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Getcoins
     * const getcoin = await prisma.getcoin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GetcoinUpdateManyArgs>(
      args: SelectSubset<T, GetcoinUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Getcoin.
     * @param {GetcoinUpsertArgs} args - Arguments to update or create a Getcoin.
     * @example
     * // Update or create a Getcoin
     * const getcoin = await prisma.getcoin.upsert({
     *   create: {
     *     // ... data to create a Getcoin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Getcoin we want to update
     *   }
     * })
    **/
    upsert<T extends GetcoinUpsertArgs>(
      args: SelectSubset<T, GetcoinUpsertArgs>
    ): Prisma__GetcoinClient<GetcoinGetPayload<T>>

    /**
     * Count the number of Getcoins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GetcoinCountArgs} args - Arguments to filter Getcoins to count.
     * @example
     * // Count the number of Getcoins
     * const count = await prisma.getcoin.count({
     *   where: {
     *     // ... the filter for the Getcoins we want to count
     *   }
     * })
    **/
    count<T extends GetcoinCountArgs>(
      args?: Subset<T, GetcoinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GetcoinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Getcoin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GetcoinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GetcoinAggregateArgs>(args: Subset<T, GetcoinAggregateArgs>): Prisma.PrismaPromise<GetGetcoinAggregateType<T>>

    /**
     * Group by Getcoin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GetcoinGroupByArgs} args - Group by arguments.
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
      T extends GetcoinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GetcoinGroupByArgs['orderBy'] }
        : { orderBy?: GetcoinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GetcoinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGetcoinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Getcoin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GetcoinClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Getcoin base type for findUnique actions
   */
  export type GetcoinFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Getcoin
     */
    select?: GetcoinSelect | null
    /**
     * Filter, which Getcoin to fetch.
     */
    where: GetcoinWhereUniqueInput
  }

  /**
   * Getcoin findUnique
   */
  export interface GetcoinFindUniqueArgs extends GetcoinFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Getcoin findUniqueOrThrow
   */
  export type GetcoinFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Getcoin
     */
    select?: GetcoinSelect | null
    /**
     * Filter, which Getcoin to fetch.
     */
    where: GetcoinWhereUniqueInput
  }


  /**
   * Getcoin base type for findFirst actions
   */
  export type GetcoinFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Getcoin
     */
    select?: GetcoinSelect | null
    /**
     * Filter, which Getcoin to fetch.
     */
    where?: GetcoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Getcoins to fetch.
     */
    orderBy?: Enumerable<GetcoinOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Getcoins.
     */
    cursor?: GetcoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Getcoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Getcoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Getcoins.
     */
    distinct?: Enumerable<GetcoinScalarFieldEnum>
  }

  /**
   * Getcoin findFirst
   */
  export interface GetcoinFindFirstArgs extends GetcoinFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Getcoin findFirstOrThrow
   */
  export type GetcoinFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Getcoin
     */
    select?: GetcoinSelect | null
    /**
     * Filter, which Getcoin to fetch.
     */
    where?: GetcoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Getcoins to fetch.
     */
    orderBy?: Enumerable<GetcoinOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Getcoins.
     */
    cursor?: GetcoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Getcoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Getcoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Getcoins.
     */
    distinct?: Enumerable<GetcoinScalarFieldEnum>
  }


  /**
   * Getcoin findMany
   */
  export type GetcoinFindManyArgs = {
    /**
     * Select specific fields to fetch from the Getcoin
     */
    select?: GetcoinSelect | null
    /**
     * Filter, which Getcoins to fetch.
     */
    where?: GetcoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Getcoins to fetch.
     */
    orderBy?: Enumerable<GetcoinOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Getcoins.
     */
    cursor?: GetcoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Getcoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Getcoins.
     */
    skip?: number
    distinct?: Enumerable<GetcoinScalarFieldEnum>
  }


  /**
   * Getcoin create
   */
  export type GetcoinCreateArgs = {
    /**
     * Select specific fields to fetch from the Getcoin
     */
    select?: GetcoinSelect | null
    /**
     * The data needed to create a Getcoin.
     */
    data: XOR<GetcoinCreateInput, GetcoinUncheckedCreateInput>
  }


  /**
   * Getcoin createMany
   */
  export type GetcoinCreateManyArgs = {
    /**
     * The data used to create many Getcoins.
     */
    data: Enumerable<GetcoinCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Getcoin update
   */
  export type GetcoinUpdateArgs = {
    /**
     * Select specific fields to fetch from the Getcoin
     */
    select?: GetcoinSelect | null
    /**
     * The data needed to update a Getcoin.
     */
    data: XOR<GetcoinUpdateInput, GetcoinUncheckedUpdateInput>
    /**
     * Choose, which Getcoin to update.
     */
    where: GetcoinWhereUniqueInput
  }


  /**
   * Getcoin updateMany
   */
  export type GetcoinUpdateManyArgs = {
    /**
     * The data used to update Getcoins.
     */
    data: XOR<GetcoinUpdateManyMutationInput, GetcoinUncheckedUpdateManyInput>
    /**
     * Filter which Getcoins to update
     */
    where?: GetcoinWhereInput
  }


  /**
   * Getcoin upsert
   */
  export type GetcoinUpsertArgs = {
    /**
     * Select specific fields to fetch from the Getcoin
     */
    select?: GetcoinSelect | null
    /**
     * The filter to search for the Getcoin to update in case it exists.
     */
    where: GetcoinWhereUniqueInput
    /**
     * In case the Getcoin found by the `where` argument doesn't exist, create a new Getcoin with this data.
     */
    create: XOR<GetcoinCreateInput, GetcoinUncheckedCreateInput>
    /**
     * In case the Getcoin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GetcoinUpdateInput, GetcoinUncheckedUpdateInput>
  }


  /**
   * Getcoin delete
   */
  export type GetcoinDeleteArgs = {
    /**
     * Select specific fields to fetch from the Getcoin
     */
    select?: GetcoinSelect | null
    /**
     * Filter which Getcoin to delete.
     */
    where: GetcoinWhereUniqueInput
  }


  /**
   * Getcoin deleteMany
   */
  export type GetcoinDeleteManyArgs = {
    /**
     * Filter which Getcoins to delete
     */
    where?: GetcoinWhereInput
  }


  /**
   * Getcoin without action
   */
  export type GetcoinArgs = {
    /**
     * Select specific fields to fetch from the Getcoin
     */
    select?: GetcoinSelect | null
  }



  /**
   * Model Lv
   */


  export type AggregateLv = {
    _count: LvCountAggregateOutputType | null
    _avg: LvAvgAggregateOutputType | null
    _sum: LvSumAggregateOutputType | null
    _min: LvMinAggregateOutputType | null
    _max: LvMaxAggregateOutputType | null
  }

  export type LvAvgAggregateOutputType = {
    lv: number | null
    wincoinvalue: number | null
  }

  export type LvSumAggregateOutputType = {
    lv: number | null
    wincoinvalue: number | null
  }

  export type LvMinAggregateOutputType = {
    lv: number | null
    wincoinvalue: number | null
  }

  export type LvMaxAggregateOutputType = {
    lv: number | null
    wincoinvalue: number | null
  }

  export type LvCountAggregateOutputType = {
    lv: number
    wincoinvalue: number
    _all: number
  }


  export type LvAvgAggregateInputType = {
    lv?: true
    wincoinvalue?: true
  }

  export type LvSumAggregateInputType = {
    lv?: true
    wincoinvalue?: true
  }

  export type LvMinAggregateInputType = {
    lv?: true
    wincoinvalue?: true
  }

  export type LvMaxAggregateInputType = {
    lv?: true
    wincoinvalue?: true
  }

  export type LvCountAggregateInputType = {
    lv?: true
    wincoinvalue?: true
    _all?: true
  }

  export type LvAggregateArgs = {
    /**
     * Filter which Lv to aggregate.
     */
    where?: LvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lvs to fetch.
     */
    orderBy?: Enumerable<LvOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lvs
    **/
    _count?: true | LvCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LvAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LvSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LvMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LvMaxAggregateInputType
  }

  export type GetLvAggregateType<T extends LvAggregateArgs> = {
        [P in keyof T & keyof AggregateLv]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLv[P]>
      : GetScalarType<T[P], AggregateLv[P]>
  }




  export type LvGroupByArgs = {
    where?: LvWhereInput
    orderBy?: Enumerable<LvOrderByWithAggregationInput>
    by: LvScalarFieldEnum[]
    having?: LvScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LvCountAggregateInputType | true
    _avg?: LvAvgAggregateInputType
    _sum?: LvSumAggregateInputType
    _min?: LvMinAggregateInputType
    _max?: LvMaxAggregateInputType
  }


  export type LvGroupByOutputType = {
    lv: number
    wincoinvalue: number
    _count: LvCountAggregateOutputType | null
    _avg: LvAvgAggregateOutputType | null
    _sum: LvSumAggregateOutputType | null
    _min: LvMinAggregateOutputType | null
    _max: LvMaxAggregateOutputType | null
  }

  type GetLvGroupByPayload<T extends LvGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LvGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LvGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LvGroupByOutputType[P]>
            : GetScalarType<T[P], LvGroupByOutputType[P]>
        }
      >
    >


  export type LvSelect = {
    lv?: boolean
    wincoinvalue?: boolean
  }


  export type LvGetPayload<S extends boolean | null | undefined | LvArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Lv :
    S extends undefined ? never :
    S extends { include: any } & (LvArgs | LvFindManyArgs)
    ? Lv 
    : S extends { select: any } & (LvArgs | LvFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Lv ? Lv[P] : never
  } 
      : Lv


  type LvCountArgs = 
    Omit<LvFindManyArgs, 'select' | 'include'> & {
      select?: LvCountAggregateInputType | true
    }

  export interface LvDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Lv that matches the filter.
     * @param {LvFindUniqueArgs} args - Arguments to find a Lv
     * @example
     * // Get one Lv
     * const lv = await prisma.lv.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LvFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LvFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Lv'> extends True ? Prisma__LvClient<LvGetPayload<T>> : Prisma__LvClient<LvGetPayload<T> | null, null>

    /**
     * Find one Lv that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LvFindUniqueOrThrowArgs} args - Arguments to find a Lv
     * @example
     * // Get one Lv
     * const lv = await prisma.lv.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LvFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LvFindUniqueOrThrowArgs>
    ): Prisma__LvClient<LvGetPayload<T>>

    /**
     * Find the first Lv that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LvFindFirstArgs} args - Arguments to find a Lv
     * @example
     * // Get one Lv
     * const lv = await prisma.lv.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LvFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LvFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Lv'> extends True ? Prisma__LvClient<LvGetPayload<T>> : Prisma__LvClient<LvGetPayload<T> | null, null>

    /**
     * Find the first Lv that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LvFindFirstOrThrowArgs} args - Arguments to find a Lv
     * @example
     * // Get one Lv
     * const lv = await prisma.lv.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LvFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LvFindFirstOrThrowArgs>
    ): Prisma__LvClient<LvGetPayload<T>>

    /**
     * Find zero or more Lvs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LvFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lvs
     * const lvs = await prisma.lv.findMany()
     * 
     * // Get first 10 Lvs
     * const lvs = await prisma.lv.findMany({ take: 10 })
     * 
     * // Only select the `lv`
     * const lvWithLvOnly = await prisma.lv.findMany({ select: { lv: true } })
     * 
    **/
    findMany<T extends LvFindManyArgs>(
      args?: SelectSubset<T, LvFindManyArgs>
    ): Prisma.PrismaPromise<Array<LvGetPayload<T>>>

    /**
     * Create a Lv.
     * @param {LvCreateArgs} args - Arguments to create a Lv.
     * @example
     * // Create one Lv
     * const Lv = await prisma.lv.create({
     *   data: {
     *     // ... data to create a Lv
     *   }
     * })
     * 
    **/
    create<T extends LvCreateArgs>(
      args: SelectSubset<T, LvCreateArgs>
    ): Prisma__LvClient<LvGetPayload<T>>

    /**
     * Create many Lvs.
     *     @param {LvCreateManyArgs} args - Arguments to create many Lvs.
     *     @example
     *     // Create many Lvs
     *     const lv = await prisma.lv.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LvCreateManyArgs>(
      args?: SelectSubset<T, LvCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lv.
     * @param {LvDeleteArgs} args - Arguments to delete one Lv.
     * @example
     * // Delete one Lv
     * const Lv = await prisma.lv.delete({
     *   where: {
     *     // ... filter to delete one Lv
     *   }
     * })
     * 
    **/
    delete<T extends LvDeleteArgs>(
      args: SelectSubset<T, LvDeleteArgs>
    ): Prisma__LvClient<LvGetPayload<T>>

    /**
     * Update one Lv.
     * @param {LvUpdateArgs} args - Arguments to update one Lv.
     * @example
     * // Update one Lv
     * const lv = await prisma.lv.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LvUpdateArgs>(
      args: SelectSubset<T, LvUpdateArgs>
    ): Prisma__LvClient<LvGetPayload<T>>

    /**
     * Delete zero or more Lvs.
     * @param {LvDeleteManyArgs} args - Arguments to filter Lvs to delete.
     * @example
     * // Delete a few Lvs
     * const { count } = await prisma.lv.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LvDeleteManyArgs>(
      args?: SelectSubset<T, LvDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LvUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lvs
     * const lv = await prisma.lv.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LvUpdateManyArgs>(
      args: SelectSubset<T, LvUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lv.
     * @param {LvUpsertArgs} args - Arguments to update or create a Lv.
     * @example
     * // Update or create a Lv
     * const lv = await prisma.lv.upsert({
     *   create: {
     *     // ... data to create a Lv
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lv we want to update
     *   }
     * })
    **/
    upsert<T extends LvUpsertArgs>(
      args: SelectSubset<T, LvUpsertArgs>
    ): Prisma__LvClient<LvGetPayload<T>>

    /**
     * Count the number of Lvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LvCountArgs} args - Arguments to filter Lvs to count.
     * @example
     * // Count the number of Lvs
     * const count = await prisma.lv.count({
     *   where: {
     *     // ... the filter for the Lvs we want to count
     *   }
     * })
    **/
    count<T extends LvCountArgs>(
      args?: Subset<T, LvCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LvCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LvAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LvAggregateArgs>(args: Subset<T, LvAggregateArgs>): Prisma.PrismaPromise<GetLvAggregateType<T>>

    /**
     * Group by Lv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LvGroupByArgs} args - Group by arguments.
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
      T extends LvGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LvGroupByArgs['orderBy'] }
        : { orderBy?: LvGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LvGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLvGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Lv.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LvClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Lv base type for findUnique actions
   */
  export type LvFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Lv
     */
    select?: LvSelect | null
    /**
     * Filter, which Lv to fetch.
     */
    where: LvWhereUniqueInput
  }

  /**
   * Lv findUnique
   */
  export interface LvFindUniqueArgs extends LvFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Lv findUniqueOrThrow
   */
  export type LvFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Lv
     */
    select?: LvSelect | null
    /**
     * Filter, which Lv to fetch.
     */
    where: LvWhereUniqueInput
  }


  /**
   * Lv base type for findFirst actions
   */
  export type LvFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Lv
     */
    select?: LvSelect | null
    /**
     * Filter, which Lv to fetch.
     */
    where?: LvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lvs to fetch.
     */
    orderBy?: Enumerable<LvOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lvs.
     */
    cursor?: LvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lvs.
     */
    distinct?: Enumerable<LvScalarFieldEnum>
  }

  /**
   * Lv findFirst
   */
  export interface LvFindFirstArgs extends LvFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Lv findFirstOrThrow
   */
  export type LvFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Lv
     */
    select?: LvSelect | null
    /**
     * Filter, which Lv to fetch.
     */
    where?: LvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lvs to fetch.
     */
    orderBy?: Enumerable<LvOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lvs.
     */
    cursor?: LvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lvs.
     */
    distinct?: Enumerable<LvScalarFieldEnum>
  }


  /**
   * Lv findMany
   */
  export type LvFindManyArgs = {
    /**
     * Select specific fields to fetch from the Lv
     */
    select?: LvSelect | null
    /**
     * Filter, which Lvs to fetch.
     */
    where?: LvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lvs to fetch.
     */
    orderBy?: Enumerable<LvOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lvs.
     */
    cursor?: LvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lvs.
     */
    skip?: number
    distinct?: Enumerable<LvScalarFieldEnum>
  }


  /**
   * Lv create
   */
  export type LvCreateArgs = {
    /**
     * Select specific fields to fetch from the Lv
     */
    select?: LvSelect | null
    /**
     * The data needed to create a Lv.
     */
    data: XOR<LvCreateInput, LvUncheckedCreateInput>
  }


  /**
   * Lv createMany
   */
  export type LvCreateManyArgs = {
    /**
     * The data used to create many Lvs.
     */
    data: Enumerable<LvCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Lv update
   */
  export type LvUpdateArgs = {
    /**
     * Select specific fields to fetch from the Lv
     */
    select?: LvSelect | null
    /**
     * The data needed to update a Lv.
     */
    data: XOR<LvUpdateInput, LvUncheckedUpdateInput>
    /**
     * Choose, which Lv to update.
     */
    where: LvWhereUniqueInput
  }


  /**
   * Lv updateMany
   */
  export type LvUpdateManyArgs = {
    /**
     * The data used to update Lvs.
     */
    data: XOR<LvUpdateManyMutationInput, LvUncheckedUpdateManyInput>
    /**
     * Filter which Lvs to update
     */
    where?: LvWhereInput
  }


  /**
   * Lv upsert
   */
  export type LvUpsertArgs = {
    /**
     * Select specific fields to fetch from the Lv
     */
    select?: LvSelect | null
    /**
     * The filter to search for the Lv to update in case it exists.
     */
    where: LvWhereUniqueInput
    /**
     * In case the Lv found by the `where` argument doesn't exist, create a new Lv with this data.
     */
    create: XOR<LvCreateInput, LvUncheckedCreateInput>
    /**
     * In case the Lv was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LvUpdateInput, LvUncheckedUpdateInput>
  }


  /**
   * Lv delete
   */
  export type LvDeleteArgs = {
    /**
     * Select specific fields to fetch from the Lv
     */
    select?: LvSelect | null
    /**
     * Filter which Lv to delete.
     */
    where: LvWhereUniqueInput
  }


  /**
   * Lv deleteMany
   */
  export type LvDeleteManyArgs = {
    /**
     * Filter which Lvs to delete
     */
    where?: LvWhereInput
  }


  /**
   * Lv without action
   */
  export type LvArgs = {
    /**
     * Select specific fields to fetch from the Lv
     */
    select?: LvSelect | null
  }



  /**
   * Model Matchrandking
   */


  export type AggregateMatchrandking = {
    _count: MatchrandkingCountAggregateOutputType | null
    _avg: MatchrandkingAvgAggregateOutputType | null
    _sum: MatchrandkingSumAggregateOutputType | null
    _min: MatchrandkingMinAggregateOutputType | null
    _max: MatchrandkingMaxAggregateOutputType | null
  }

  export type MatchrandkingAvgAggregateOutputType = {
    id: number | null
    roomType: number | null
    matchId: number | null
    userId: number | null
    score: number | null
    winPropId: number | null
    winPropCount: number | null
    winScore: number | null
    rankIdx: number | null
    isGetPrize: number | null
    isMsg: number | null
  }

  export type MatchrandkingSumAggregateOutputType = {
    id: number | null
    roomType: number | null
    matchId: number | null
    userId: number | null
    score: number | null
    winPropId: number | null
    winPropCount: number | null
    winScore: number | null
    rankIdx: number | null
    isGetPrize: number | null
    isMsg: number | null
  }

  export type MatchrandkingMinAggregateOutputType = {
    id: number | null
    roomType: number | null
    matchId: number | null
    userId: number | null
    score: number | null
    lastTime: Date | null
    winPropId: number | null
    winPropCount: number | null
    winScore: number | null
    rankIdx: number | null
    isGetPrize: number | null
    isMsg: number | null
    title: string | null
    msg: string | null
  }

  export type MatchrandkingMaxAggregateOutputType = {
    id: number | null
    roomType: number | null
    matchId: number | null
    userId: number | null
    score: number | null
    lastTime: Date | null
    winPropId: number | null
    winPropCount: number | null
    winScore: number | null
    rankIdx: number | null
    isGetPrize: number | null
    isMsg: number | null
    title: string | null
    msg: string | null
  }

  export type MatchrandkingCountAggregateOutputType = {
    id: number
    roomType: number
    matchId: number
    userId: number
    score: number
    lastTime: number
    winPropId: number
    winPropCount: number
    winScore: number
    rankIdx: number
    isGetPrize: number
    isMsg: number
    title: number
    msg: number
    _all: number
  }


  export type MatchrandkingAvgAggregateInputType = {
    id?: true
    roomType?: true
    matchId?: true
    userId?: true
    score?: true
    winPropId?: true
    winPropCount?: true
    winScore?: true
    rankIdx?: true
    isGetPrize?: true
    isMsg?: true
  }

  export type MatchrandkingSumAggregateInputType = {
    id?: true
    roomType?: true
    matchId?: true
    userId?: true
    score?: true
    winPropId?: true
    winPropCount?: true
    winScore?: true
    rankIdx?: true
    isGetPrize?: true
    isMsg?: true
  }

  export type MatchrandkingMinAggregateInputType = {
    id?: true
    roomType?: true
    matchId?: true
    userId?: true
    score?: true
    lastTime?: true
    winPropId?: true
    winPropCount?: true
    winScore?: true
    rankIdx?: true
    isGetPrize?: true
    isMsg?: true
    title?: true
    msg?: true
  }

  export type MatchrandkingMaxAggregateInputType = {
    id?: true
    roomType?: true
    matchId?: true
    userId?: true
    score?: true
    lastTime?: true
    winPropId?: true
    winPropCount?: true
    winScore?: true
    rankIdx?: true
    isGetPrize?: true
    isMsg?: true
    title?: true
    msg?: true
  }

  export type MatchrandkingCountAggregateInputType = {
    id?: true
    roomType?: true
    matchId?: true
    userId?: true
    score?: true
    lastTime?: true
    winPropId?: true
    winPropCount?: true
    winScore?: true
    rankIdx?: true
    isGetPrize?: true
    isMsg?: true
    title?: true
    msg?: true
    _all?: true
  }

  export type MatchrandkingAggregateArgs = {
    /**
     * Filter which Matchrandking to aggregate.
     */
    where?: MatchrandkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matchrandkings to fetch.
     */
    orderBy?: Enumerable<MatchrandkingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchrandkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matchrandkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matchrandkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matchrandkings
    **/
    _count?: true | MatchrandkingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchrandkingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchrandkingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchrandkingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchrandkingMaxAggregateInputType
  }

  export type GetMatchrandkingAggregateType<T extends MatchrandkingAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchrandking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchrandking[P]>
      : GetScalarType<T[P], AggregateMatchrandking[P]>
  }




  export type MatchrandkingGroupByArgs = {
    where?: MatchrandkingWhereInput
    orderBy?: Enumerable<MatchrandkingOrderByWithAggregationInput>
    by: MatchrandkingScalarFieldEnum[]
    having?: MatchrandkingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchrandkingCountAggregateInputType | true
    _avg?: MatchrandkingAvgAggregateInputType
    _sum?: MatchrandkingSumAggregateInputType
    _min?: MatchrandkingMinAggregateInputType
    _max?: MatchrandkingMaxAggregateInputType
  }


  export type MatchrandkingGroupByOutputType = {
    id: number
    roomType: number
    matchId: number
    userId: number
    score: number
    lastTime: Date
    winPropId: number
    winPropCount: number
    winScore: number
    rankIdx: number
    isGetPrize: number
    isMsg: number
    title: string
    msg: string
    _count: MatchrandkingCountAggregateOutputType | null
    _avg: MatchrandkingAvgAggregateOutputType | null
    _sum: MatchrandkingSumAggregateOutputType | null
    _min: MatchrandkingMinAggregateOutputType | null
    _max: MatchrandkingMaxAggregateOutputType | null
  }

  type GetMatchrandkingGroupByPayload<T extends MatchrandkingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MatchrandkingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchrandkingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchrandkingGroupByOutputType[P]>
            : GetScalarType<T[P], MatchrandkingGroupByOutputType[P]>
        }
      >
    >


  export type MatchrandkingSelect = {
    id?: boolean
    roomType?: boolean
    matchId?: boolean
    userId?: boolean
    score?: boolean
    lastTime?: boolean
    winPropId?: boolean
    winPropCount?: boolean
    winScore?: boolean
    rankIdx?: boolean
    isGetPrize?: boolean
    isMsg?: boolean
    title?: boolean
    msg?: boolean
  }


  export type MatchrandkingGetPayload<S extends boolean | null | undefined | MatchrandkingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Matchrandking :
    S extends undefined ? never :
    S extends { include: any } & (MatchrandkingArgs | MatchrandkingFindManyArgs)
    ? Matchrandking 
    : S extends { select: any } & (MatchrandkingArgs | MatchrandkingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Matchrandking ? Matchrandking[P] : never
  } 
      : Matchrandking


  type MatchrandkingCountArgs = 
    Omit<MatchrandkingFindManyArgs, 'select' | 'include'> & {
      select?: MatchrandkingCountAggregateInputType | true
    }

  export interface MatchrandkingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Matchrandking that matches the filter.
     * @param {MatchrandkingFindUniqueArgs} args - Arguments to find a Matchrandking
     * @example
     * // Get one Matchrandking
     * const matchrandking = await prisma.matchrandking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MatchrandkingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MatchrandkingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Matchrandking'> extends True ? Prisma__MatchrandkingClient<MatchrandkingGetPayload<T>> : Prisma__MatchrandkingClient<MatchrandkingGetPayload<T> | null, null>

    /**
     * Find one Matchrandking that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MatchrandkingFindUniqueOrThrowArgs} args - Arguments to find a Matchrandking
     * @example
     * // Get one Matchrandking
     * const matchrandking = await prisma.matchrandking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MatchrandkingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MatchrandkingFindUniqueOrThrowArgs>
    ): Prisma__MatchrandkingClient<MatchrandkingGetPayload<T>>

    /**
     * Find the first Matchrandking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchrandkingFindFirstArgs} args - Arguments to find a Matchrandking
     * @example
     * // Get one Matchrandking
     * const matchrandking = await prisma.matchrandking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MatchrandkingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MatchrandkingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Matchrandking'> extends True ? Prisma__MatchrandkingClient<MatchrandkingGetPayload<T>> : Prisma__MatchrandkingClient<MatchrandkingGetPayload<T> | null, null>

    /**
     * Find the first Matchrandking that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchrandkingFindFirstOrThrowArgs} args - Arguments to find a Matchrandking
     * @example
     * // Get one Matchrandking
     * const matchrandking = await prisma.matchrandking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MatchrandkingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MatchrandkingFindFirstOrThrowArgs>
    ): Prisma__MatchrandkingClient<MatchrandkingGetPayload<T>>

    /**
     * Find zero or more Matchrandkings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchrandkingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matchrandkings
     * const matchrandkings = await prisma.matchrandking.findMany()
     * 
     * // Get first 10 Matchrandkings
     * const matchrandkings = await prisma.matchrandking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchrandkingWithIdOnly = await prisma.matchrandking.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MatchrandkingFindManyArgs>(
      args?: SelectSubset<T, MatchrandkingFindManyArgs>
    ): Prisma.PrismaPromise<Array<MatchrandkingGetPayload<T>>>

    /**
     * Create a Matchrandking.
     * @param {MatchrandkingCreateArgs} args - Arguments to create a Matchrandking.
     * @example
     * // Create one Matchrandking
     * const Matchrandking = await prisma.matchrandking.create({
     *   data: {
     *     // ... data to create a Matchrandking
     *   }
     * })
     * 
    **/
    create<T extends MatchrandkingCreateArgs>(
      args: SelectSubset<T, MatchrandkingCreateArgs>
    ): Prisma__MatchrandkingClient<MatchrandkingGetPayload<T>>

    /**
     * Create many Matchrandkings.
     *     @param {MatchrandkingCreateManyArgs} args - Arguments to create many Matchrandkings.
     *     @example
     *     // Create many Matchrandkings
     *     const matchrandking = await prisma.matchrandking.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MatchrandkingCreateManyArgs>(
      args?: SelectSubset<T, MatchrandkingCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Matchrandking.
     * @param {MatchrandkingDeleteArgs} args - Arguments to delete one Matchrandking.
     * @example
     * // Delete one Matchrandking
     * const Matchrandking = await prisma.matchrandking.delete({
     *   where: {
     *     // ... filter to delete one Matchrandking
     *   }
     * })
     * 
    **/
    delete<T extends MatchrandkingDeleteArgs>(
      args: SelectSubset<T, MatchrandkingDeleteArgs>
    ): Prisma__MatchrandkingClient<MatchrandkingGetPayload<T>>

    /**
     * Update one Matchrandking.
     * @param {MatchrandkingUpdateArgs} args - Arguments to update one Matchrandking.
     * @example
     * // Update one Matchrandking
     * const matchrandking = await prisma.matchrandking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MatchrandkingUpdateArgs>(
      args: SelectSubset<T, MatchrandkingUpdateArgs>
    ): Prisma__MatchrandkingClient<MatchrandkingGetPayload<T>>

    /**
     * Delete zero or more Matchrandkings.
     * @param {MatchrandkingDeleteManyArgs} args - Arguments to filter Matchrandkings to delete.
     * @example
     * // Delete a few Matchrandkings
     * const { count } = await prisma.matchrandking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MatchrandkingDeleteManyArgs>(
      args?: SelectSubset<T, MatchrandkingDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matchrandkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchrandkingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matchrandkings
     * const matchrandking = await prisma.matchrandking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MatchrandkingUpdateManyArgs>(
      args: SelectSubset<T, MatchrandkingUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Matchrandking.
     * @param {MatchrandkingUpsertArgs} args - Arguments to update or create a Matchrandking.
     * @example
     * // Update or create a Matchrandking
     * const matchrandking = await prisma.matchrandking.upsert({
     *   create: {
     *     // ... data to create a Matchrandking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matchrandking we want to update
     *   }
     * })
    **/
    upsert<T extends MatchrandkingUpsertArgs>(
      args: SelectSubset<T, MatchrandkingUpsertArgs>
    ): Prisma__MatchrandkingClient<MatchrandkingGetPayload<T>>

    /**
     * Count the number of Matchrandkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchrandkingCountArgs} args - Arguments to filter Matchrandkings to count.
     * @example
     * // Count the number of Matchrandkings
     * const count = await prisma.matchrandking.count({
     *   where: {
     *     // ... the filter for the Matchrandkings we want to count
     *   }
     * })
    **/
    count<T extends MatchrandkingCountArgs>(
      args?: Subset<T, MatchrandkingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchrandkingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matchrandking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchrandkingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchrandkingAggregateArgs>(args: Subset<T, MatchrandkingAggregateArgs>): Prisma.PrismaPromise<GetMatchrandkingAggregateType<T>>

    /**
     * Group by Matchrandking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchrandkingGroupByArgs} args - Group by arguments.
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
      T extends MatchrandkingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchrandkingGroupByArgs['orderBy'] }
        : { orderBy?: MatchrandkingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchrandkingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchrandkingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Matchrandking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MatchrandkingClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Matchrandking base type for findUnique actions
   */
  export type MatchrandkingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Matchrandking
     */
    select?: MatchrandkingSelect | null
    /**
     * Filter, which Matchrandking to fetch.
     */
    where: MatchrandkingWhereUniqueInput
  }

  /**
   * Matchrandking findUnique
   */
  export interface MatchrandkingFindUniqueArgs extends MatchrandkingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Matchrandking findUniqueOrThrow
   */
  export type MatchrandkingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Matchrandking
     */
    select?: MatchrandkingSelect | null
    /**
     * Filter, which Matchrandking to fetch.
     */
    where: MatchrandkingWhereUniqueInput
  }


  /**
   * Matchrandking base type for findFirst actions
   */
  export type MatchrandkingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Matchrandking
     */
    select?: MatchrandkingSelect | null
    /**
     * Filter, which Matchrandking to fetch.
     */
    where?: MatchrandkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matchrandkings to fetch.
     */
    orderBy?: Enumerable<MatchrandkingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matchrandkings.
     */
    cursor?: MatchrandkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matchrandkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matchrandkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matchrandkings.
     */
    distinct?: Enumerable<MatchrandkingScalarFieldEnum>
  }

  /**
   * Matchrandking findFirst
   */
  export interface MatchrandkingFindFirstArgs extends MatchrandkingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Matchrandking findFirstOrThrow
   */
  export type MatchrandkingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Matchrandking
     */
    select?: MatchrandkingSelect | null
    /**
     * Filter, which Matchrandking to fetch.
     */
    where?: MatchrandkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matchrandkings to fetch.
     */
    orderBy?: Enumerable<MatchrandkingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matchrandkings.
     */
    cursor?: MatchrandkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matchrandkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matchrandkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matchrandkings.
     */
    distinct?: Enumerable<MatchrandkingScalarFieldEnum>
  }


  /**
   * Matchrandking findMany
   */
  export type MatchrandkingFindManyArgs = {
    /**
     * Select specific fields to fetch from the Matchrandking
     */
    select?: MatchrandkingSelect | null
    /**
     * Filter, which Matchrandkings to fetch.
     */
    where?: MatchrandkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matchrandkings to fetch.
     */
    orderBy?: Enumerable<MatchrandkingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matchrandkings.
     */
    cursor?: MatchrandkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matchrandkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matchrandkings.
     */
    skip?: number
    distinct?: Enumerable<MatchrandkingScalarFieldEnum>
  }


  /**
   * Matchrandking create
   */
  export type MatchrandkingCreateArgs = {
    /**
     * Select specific fields to fetch from the Matchrandking
     */
    select?: MatchrandkingSelect | null
    /**
     * The data needed to create a Matchrandking.
     */
    data: XOR<MatchrandkingCreateInput, MatchrandkingUncheckedCreateInput>
  }


  /**
   * Matchrandking createMany
   */
  export type MatchrandkingCreateManyArgs = {
    /**
     * The data used to create many Matchrandkings.
     */
    data: Enumerable<MatchrandkingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Matchrandking update
   */
  export type MatchrandkingUpdateArgs = {
    /**
     * Select specific fields to fetch from the Matchrandking
     */
    select?: MatchrandkingSelect | null
    /**
     * The data needed to update a Matchrandking.
     */
    data: XOR<MatchrandkingUpdateInput, MatchrandkingUncheckedUpdateInput>
    /**
     * Choose, which Matchrandking to update.
     */
    where: MatchrandkingWhereUniqueInput
  }


  /**
   * Matchrandking updateMany
   */
  export type MatchrandkingUpdateManyArgs = {
    /**
     * The data used to update Matchrandkings.
     */
    data: XOR<MatchrandkingUpdateManyMutationInput, MatchrandkingUncheckedUpdateManyInput>
    /**
     * Filter which Matchrandkings to update
     */
    where?: MatchrandkingWhereInput
  }


  /**
   * Matchrandking upsert
   */
  export type MatchrandkingUpsertArgs = {
    /**
     * Select specific fields to fetch from the Matchrandking
     */
    select?: MatchrandkingSelect | null
    /**
     * The filter to search for the Matchrandking to update in case it exists.
     */
    where: MatchrandkingWhereUniqueInput
    /**
     * In case the Matchrandking found by the `where` argument doesn't exist, create a new Matchrandking with this data.
     */
    create: XOR<MatchrandkingCreateInput, MatchrandkingUncheckedCreateInput>
    /**
     * In case the Matchrandking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchrandkingUpdateInput, MatchrandkingUncheckedUpdateInput>
  }


  /**
   * Matchrandking delete
   */
  export type MatchrandkingDeleteArgs = {
    /**
     * Select specific fields to fetch from the Matchrandking
     */
    select?: MatchrandkingSelect | null
    /**
     * Filter which Matchrandking to delete.
     */
    where: MatchrandkingWhereUniqueInput
  }


  /**
   * Matchrandking deleteMany
   */
  export type MatchrandkingDeleteManyArgs = {
    /**
     * Filter which Matchrandkings to delete
     */
    where?: MatchrandkingWhereInput
  }


  /**
   * Matchrandking without action
   */
  export type MatchrandkingArgs = {
    /**
     * Select specific fields to fetch from the Matchrandking
     */
    select?: MatchrandkingSelect | null
  }



  /**
   * Model Pool
   */


  export type AggregatePool = {
    _count: PoolCountAggregateOutputType | null
    _avg: PoolAvgAggregateOutputType | null
    _sum: PoolSumAggregateOutputType | null
    _min: PoolMinAggregateOutputType | null
    _max: PoolMaxAggregateOutputType | null
  }

  export type PoolAvgAggregateOutputType = {
    serveId: number | null
    pool: number | null
    virtualPool: number | null
  }

  export type PoolSumAggregateOutputType = {
    serveId: number | null
    pool: number | null
    virtualPool: number | null
  }

  export type PoolMinAggregateOutputType = {
    serveId: number | null
    pool: number | null
    virtualPool: number | null
  }

  export type PoolMaxAggregateOutputType = {
    serveId: number | null
    pool: number | null
    virtualPool: number | null
  }

  export type PoolCountAggregateOutputType = {
    serveId: number
    pool: number
    virtualPool: number
    _all: number
  }


  export type PoolAvgAggregateInputType = {
    serveId?: true
    pool?: true
    virtualPool?: true
  }

  export type PoolSumAggregateInputType = {
    serveId?: true
    pool?: true
    virtualPool?: true
  }

  export type PoolMinAggregateInputType = {
    serveId?: true
    pool?: true
    virtualPool?: true
  }

  export type PoolMaxAggregateInputType = {
    serveId?: true
    pool?: true
    virtualPool?: true
  }

  export type PoolCountAggregateInputType = {
    serveId?: true
    pool?: true
    virtualPool?: true
    _all?: true
  }

  export type PoolAggregateArgs = {
    /**
     * Filter which Pool to aggregate.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: Enumerable<PoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pools
    **/
    _count?: true | PoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoolMaxAggregateInputType
  }

  export type GetPoolAggregateType<T extends PoolAggregateArgs> = {
        [P in keyof T & keyof AggregatePool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePool[P]>
      : GetScalarType<T[P], AggregatePool[P]>
  }




  export type PoolGroupByArgs = {
    where?: PoolWhereInput
    orderBy?: Enumerable<PoolOrderByWithAggregationInput>
    by: PoolScalarFieldEnum[]
    having?: PoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoolCountAggregateInputType | true
    _avg?: PoolAvgAggregateInputType
    _sum?: PoolSumAggregateInputType
    _min?: PoolMinAggregateInputType
    _max?: PoolMaxAggregateInputType
  }


  export type PoolGroupByOutputType = {
    serveId: number
    pool: number
    virtualPool: number
    _count: PoolCountAggregateOutputType | null
    _avg: PoolAvgAggregateOutputType | null
    _sum: PoolSumAggregateOutputType | null
    _min: PoolMinAggregateOutputType | null
    _max: PoolMaxAggregateOutputType | null
  }

  type GetPoolGroupByPayload<T extends PoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoolGroupByOutputType[P]>
            : GetScalarType<T[P], PoolGroupByOutputType[P]>
        }
      >
    >


  export type PoolSelect = {
    serveId?: boolean
    pool?: boolean
    virtualPool?: boolean
  }


  export type PoolGetPayload<S extends boolean | null | undefined | PoolArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Pool :
    S extends undefined ? never :
    S extends { include: any } & (PoolArgs | PoolFindManyArgs)
    ? Pool 
    : S extends { select: any } & (PoolArgs | PoolFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Pool ? Pool[P] : never
  } 
      : Pool


  type PoolCountArgs = 
    Omit<PoolFindManyArgs, 'select' | 'include'> & {
      select?: PoolCountAggregateInputType | true
    }

  export interface PoolDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Pool that matches the filter.
     * @param {PoolFindUniqueArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PoolFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PoolFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Pool'> extends True ? Prisma__PoolClient<PoolGetPayload<T>> : Prisma__PoolClient<PoolGetPayload<T> | null, null>

    /**
     * Find one Pool that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PoolFindUniqueOrThrowArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PoolFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PoolFindUniqueOrThrowArgs>
    ): Prisma__PoolClient<PoolGetPayload<T>>

    /**
     * Find the first Pool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindFirstArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PoolFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PoolFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Pool'> extends True ? Prisma__PoolClient<PoolGetPayload<T>> : Prisma__PoolClient<PoolGetPayload<T> | null, null>

    /**
     * Find the first Pool that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindFirstOrThrowArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PoolFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PoolFindFirstOrThrowArgs>
    ): Prisma__PoolClient<PoolGetPayload<T>>

    /**
     * Find zero or more Pools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pools
     * const pools = await prisma.pool.findMany()
     * 
     * // Get first 10 Pools
     * const pools = await prisma.pool.findMany({ take: 10 })
     * 
     * // Only select the `serveId`
     * const poolWithServeIdOnly = await prisma.pool.findMany({ select: { serveId: true } })
     * 
    **/
    findMany<T extends PoolFindManyArgs>(
      args?: SelectSubset<T, PoolFindManyArgs>
    ): Prisma.PrismaPromise<Array<PoolGetPayload<T>>>

    /**
     * Create a Pool.
     * @param {PoolCreateArgs} args - Arguments to create a Pool.
     * @example
     * // Create one Pool
     * const Pool = await prisma.pool.create({
     *   data: {
     *     // ... data to create a Pool
     *   }
     * })
     * 
    **/
    create<T extends PoolCreateArgs>(
      args: SelectSubset<T, PoolCreateArgs>
    ): Prisma__PoolClient<PoolGetPayload<T>>

    /**
     * Create many Pools.
     *     @param {PoolCreateManyArgs} args - Arguments to create many Pools.
     *     @example
     *     // Create many Pools
     *     const pool = await prisma.pool.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PoolCreateManyArgs>(
      args?: SelectSubset<T, PoolCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pool.
     * @param {PoolDeleteArgs} args - Arguments to delete one Pool.
     * @example
     * // Delete one Pool
     * const Pool = await prisma.pool.delete({
     *   where: {
     *     // ... filter to delete one Pool
     *   }
     * })
     * 
    **/
    delete<T extends PoolDeleteArgs>(
      args: SelectSubset<T, PoolDeleteArgs>
    ): Prisma__PoolClient<PoolGetPayload<T>>

    /**
     * Update one Pool.
     * @param {PoolUpdateArgs} args - Arguments to update one Pool.
     * @example
     * // Update one Pool
     * const pool = await prisma.pool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PoolUpdateArgs>(
      args: SelectSubset<T, PoolUpdateArgs>
    ): Prisma__PoolClient<PoolGetPayload<T>>

    /**
     * Delete zero or more Pools.
     * @param {PoolDeleteManyArgs} args - Arguments to filter Pools to delete.
     * @example
     * // Delete a few Pools
     * const { count } = await prisma.pool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PoolDeleteManyArgs>(
      args?: SelectSubset<T, PoolDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pools
     * const pool = await prisma.pool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PoolUpdateManyArgs>(
      args: SelectSubset<T, PoolUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pool.
     * @param {PoolUpsertArgs} args - Arguments to update or create a Pool.
     * @example
     * // Update or create a Pool
     * const pool = await prisma.pool.upsert({
     *   create: {
     *     // ... data to create a Pool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pool we want to update
     *   }
     * })
    **/
    upsert<T extends PoolUpsertArgs>(
      args: SelectSubset<T, PoolUpsertArgs>
    ): Prisma__PoolClient<PoolGetPayload<T>>

    /**
     * Count the number of Pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolCountArgs} args - Arguments to filter Pools to count.
     * @example
     * // Count the number of Pools
     * const count = await prisma.pool.count({
     *   where: {
     *     // ... the filter for the Pools we want to count
     *   }
     * })
    **/
    count<T extends PoolCountArgs>(
      args?: Subset<T, PoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PoolAggregateArgs>(args: Subset<T, PoolAggregateArgs>): Prisma.PrismaPromise<GetPoolAggregateType<T>>

    /**
     * Group by Pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolGroupByArgs} args - Group by arguments.
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
      T extends PoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoolGroupByArgs['orderBy'] }
        : { orderBy?: PoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Pool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PoolClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Pool base type for findUnique actions
   */
  export type PoolFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect | null
    /**
     * Filter, which Pool to fetch.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool findUnique
   */
  export interface PoolFindUniqueArgs extends PoolFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Pool findUniqueOrThrow
   */
  export type PoolFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect | null
    /**
     * Filter, which Pool to fetch.
     */
    where: PoolWhereUniqueInput
  }


  /**
   * Pool base type for findFirst actions
   */
  export type PoolFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect | null
    /**
     * Filter, which Pool to fetch.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: Enumerable<PoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pools.
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pools.
     */
    distinct?: Enumerable<PoolScalarFieldEnum>
  }

  /**
   * Pool findFirst
   */
  export interface PoolFindFirstArgs extends PoolFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Pool findFirstOrThrow
   */
  export type PoolFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect | null
    /**
     * Filter, which Pool to fetch.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: Enumerable<PoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pools.
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pools.
     */
    distinct?: Enumerable<PoolScalarFieldEnum>
  }


  /**
   * Pool findMany
   */
  export type PoolFindManyArgs = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect | null
    /**
     * Filter, which Pools to fetch.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: Enumerable<PoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pools.
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    distinct?: Enumerable<PoolScalarFieldEnum>
  }


  /**
   * Pool create
   */
  export type PoolCreateArgs = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect | null
    /**
     * The data needed to create a Pool.
     */
    data: XOR<PoolCreateInput, PoolUncheckedCreateInput>
  }


  /**
   * Pool createMany
   */
  export type PoolCreateManyArgs = {
    /**
     * The data used to create many Pools.
     */
    data: Enumerable<PoolCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Pool update
   */
  export type PoolUpdateArgs = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect | null
    /**
     * The data needed to update a Pool.
     */
    data: XOR<PoolUpdateInput, PoolUncheckedUpdateInput>
    /**
     * Choose, which Pool to update.
     */
    where: PoolWhereUniqueInput
  }


  /**
   * Pool updateMany
   */
  export type PoolUpdateManyArgs = {
    /**
     * The data used to update Pools.
     */
    data: XOR<PoolUpdateManyMutationInput, PoolUncheckedUpdateManyInput>
    /**
     * Filter which Pools to update
     */
    where?: PoolWhereInput
  }


  /**
   * Pool upsert
   */
  export type PoolUpsertArgs = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect | null
    /**
     * The filter to search for the Pool to update in case it exists.
     */
    where: PoolWhereUniqueInput
    /**
     * In case the Pool found by the `where` argument doesn't exist, create a new Pool with this data.
     */
    create: XOR<PoolCreateInput, PoolUncheckedCreateInput>
    /**
     * In case the Pool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoolUpdateInput, PoolUncheckedUpdateInput>
  }


  /**
   * Pool delete
   */
  export type PoolDeleteArgs = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect | null
    /**
     * Filter which Pool to delete.
     */
    where: PoolWhereUniqueInput
  }


  /**
   * Pool deleteMany
   */
  export type PoolDeleteManyArgs = {
    /**
     * Filter which Pools to delete
     */
    where?: PoolWhereInput
  }


  /**
   * Pool without action
   */
  export type PoolArgs = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect | null
  }



  /**
   * Model Sendprize
   */


  export type AggregateSendprize = {
    _count: SendprizeCountAggregateOutputType | null
    _avg: SendprizeAvgAggregateOutputType | null
    _sum: SendprizeSumAggregateOutputType | null
    _min: SendprizeMinAggregateOutputType | null
    _max: SendprizeMaxAggregateOutputType | null
  }

  export type SendprizeAvgAggregateOutputType = {
    idx: number | null
    propid: number | null
    propcount: number | null
    score: number | null
  }

  export type SendprizeSumAggregateOutputType = {
    idx: number | null
    propid: number | null
    propcount: number | null
    score: number | null
  }

  export type SendprizeMinAggregateOutputType = {
    idx: number | null
    propid: number | null
    propcount: number | null
    score: number | null
  }

  export type SendprizeMaxAggregateOutputType = {
    idx: number | null
    propid: number | null
    propcount: number | null
    score: number | null
  }

  export type SendprizeCountAggregateOutputType = {
    idx: number
    propid: number
    propcount: number
    score: number
    _all: number
  }


  export type SendprizeAvgAggregateInputType = {
    idx?: true
    propid?: true
    propcount?: true
    score?: true
  }

  export type SendprizeSumAggregateInputType = {
    idx?: true
    propid?: true
    propcount?: true
    score?: true
  }

  export type SendprizeMinAggregateInputType = {
    idx?: true
    propid?: true
    propcount?: true
    score?: true
  }

  export type SendprizeMaxAggregateInputType = {
    idx?: true
    propid?: true
    propcount?: true
    score?: true
  }

  export type SendprizeCountAggregateInputType = {
    idx?: true
    propid?: true
    propcount?: true
    score?: true
    _all?: true
  }

  export type SendprizeAggregateArgs = {
    /**
     * Filter which Sendprize to aggregate.
     */
    where?: SendprizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sendprizes to fetch.
     */
    orderBy?: Enumerable<SendprizeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SendprizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sendprizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sendprizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sendprizes
    **/
    _count?: true | SendprizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SendprizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SendprizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SendprizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SendprizeMaxAggregateInputType
  }

  export type GetSendprizeAggregateType<T extends SendprizeAggregateArgs> = {
        [P in keyof T & keyof AggregateSendprize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSendprize[P]>
      : GetScalarType<T[P], AggregateSendprize[P]>
  }




  export type SendprizeGroupByArgs = {
    where?: SendprizeWhereInput
    orderBy?: Enumerable<SendprizeOrderByWithAggregationInput>
    by: SendprizeScalarFieldEnum[]
    having?: SendprizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SendprizeCountAggregateInputType | true
    _avg?: SendprizeAvgAggregateInputType
    _sum?: SendprizeSumAggregateInputType
    _min?: SendprizeMinAggregateInputType
    _max?: SendprizeMaxAggregateInputType
  }


  export type SendprizeGroupByOutputType = {
    idx: number
    propid: number
    propcount: number
    score: number
    _count: SendprizeCountAggregateOutputType | null
    _avg: SendprizeAvgAggregateOutputType | null
    _sum: SendprizeSumAggregateOutputType | null
    _min: SendprizeMinAggregateOutputType | null
    _max: SendprizeMaxAggregateOutputType | null
  }

  type GetSendprizeGroupByPayload<T extends SendprizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SendprizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SendprizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SendprizeGroupByOutputType[P]>
            : GetScalarType<T[P], SendprizeGroupByOutputType[P]>
        }
      >
    >


  export type SendprizeSelect = {
    idx?: boolean
    propid?: boolean
    propcount?: boolean
    score?: boolean
  }


  export type SendprizeGetPayload<S extends boolean | null | undefined | SendprizeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Sendprize :
    S extends undefined ? never :
    S extends { include: any } & (SendprizeArgs | SendprizeFindManyArgs)
    ? Sendprize 
    : S extends { select: any } & (SendprizeArgs | SendprizeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Sendprize ? Sendprize[P] : never
  } 
      : Sendprize


  type SendprizeCountArgs = 
    Omit<SendprizeFindManyArgs, 'select' | 'include'> & {
      select?: SendprizeCountAggregateInputType | true
    }

  export interface SendprizeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Sendprize that matches the filter.
     * @param {SendprizeFindUniqueArgs} args - Arguments to find a Sendprize
     * @example
     * // Get one Sendprize
     * const sendprize = await prisma.sendprize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SendprizeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SendprizeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Sendprize'> extends True ? Prisma__SendprizeClient<SendprizeGetPayload<T>> : Prisma__SendprizeClient<SendprizeGetPayload<T> | null, null>

    /**
     * Find one Sendprize that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SendprizeFindUniqueOrThrowArgs} args - Arguments to find a Sendprize
     * @example
     * // Get one Sendprize
     * const sendprize = await prisma.sendprize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SendprizeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SendprizeFindUniqueOrThrowArgs>
    ): Prisma__SendprizeClient<SendprizeGetPayload<T>>

    /**
     * Find the first Sendprize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendprizeFindFirstArgs} args - Arguments to find a Sendprize
     * @example
     * // Get one Sendprize
     * const sendprize = await prisma.sendprize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SendprizeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SendprizeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Sendprize'> extends True ? Prisma__SendprizeClient<SendprizeGetPayload<T>> : Prisma__SendprizeClient<SendprizeGetPayload<T> | null, null>

    /**
     * Find the first Sendprize that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendprizeFindFirstOrThrowArgs} args - Arguments to find a Sendprize
     * @example
     * // Get one Sendprize
     * const sendprize = await prisma.sendprize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SendprizeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SendprizeFindFirstOrThrowArgs>
    ): Prisma__SendprizeClient<SendprizeGetPayload<T>>

    /**
     * Find zero or more Sendprizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendprizeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sendprizes
     * const sendprizes = await prisma.sendprize.findMany()
     * 
     * // Get first 10 Sendprizes
     * const sendprizes = await prisma.sendprize.findMany({ take: 10 })
     * 
     * // Only select the `idx`
     * const sendprizeWithIdxOnly = await prisma.sendprize.findMany({ select: { idx: true } })
     * 
    **/
    findMany<T extends SendprizeFindManyArgs>(
      args?: SelectSubset<T, SendprizeFindManyArgs>
    ): Prisma.PrismaPromise<Array<SendprizeGetPayload<T>>>

    /**
     * Create a Sendprize.
     * @param {SendprizeCreateArgs} args - Arguments to create a Sendprize.
     * @example
     * // Create one Sendprize
     * const Sendprize = await prisma.sendprize.create({
     *   data: {
     *     // ... data to create a Sendprize
     *   }
     * })
     * 
    **/
    create<T extends SendprizeCreateArgs>(
      args: SelectSubset<T, SendprizeCreateArgs>
    ): Prisma__SendprizeClient<SendprizeGetPayload<T>>

    /**
     * Create many Sendprizes.
     *     @param {SendprizeCreateManyArgs} args - Arguments to create many Sendprizes.
     *     @example
     *     // Create many Sendprizes
     *     const sendprize = await prisma.sendprize.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SendprizeCreateManyArgs>(
      args?: SelectSubset<T, SendprizeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sendprize.
     * @param {SendprizeDeleteArgs} args - Arguments to delete one Sendprize.
     * @example
     * // Delete one Sendprize
     * const Sendprize = await prisma.sendprize.delete({
     *   where: {
     *     // ... filter to delete one Sendprize
     *   }
     * })
     * 
    **/
    delete<T extends SendprizeDeleteArgs>(
      args: SelectSubset<T, SendprizeDeleteArgs>
    ): Prisma__SendprizeClient<SendprizeGetPayload<T>>

    /**
     * Update one Sendprize.
     * @param {SendprizeUpdateArgs} args - Arguments to update one Sendprize.
     * @example
     * // Update one Sendprize
     * const sendprize = await prisma.sendprize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SendprizeUpdateArgs>(
      args: SelectSubset<T, SendprizeUpdateArgs>
    ): Prisma__SendprizeClient<SendprizeGetPayload<T>>

    /**
     * Delete zero or more Sendprizes.
     * @param {SendprizeDeleteManyArgs} args - Arguments to filter Sendprizes to delete.
     * @example
     * // Delete a few Sendprizes
     * const { count } = await prisma.sendprize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SendprizeDeleteManyArgs>(
      args?: SelectSubset<T, SendprizeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sendprizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendprizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sendprizes
     * const sendprize = await prisma.sendprize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SendprizeUpdateManyArgs>(
      args: SelectSubset<T, SendprizeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sendprize.
     * @param {SendprizeUpsertArgs} args - Arguments to update or create a Sendprize.
     * @example
     * // Update or create a Sendprize
     * const sendprize = await prisma.sendprize.upsert({
     *   create: {
     *     // ... data to create a Sendprize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sendprize we want to update
     *   }
     * })
    **/
    upsert<T extends SendprizeUpsertArgs>(
      args: SelectSubset<T, SendprizeUpsertArgs>
    ): Prisma__SendprizeClient<SendprizeGetPayload<T>>

    /**
     * Count the number of Sendprizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendprizeCountArgs} args - Arguments to filter Sendprizes to count.
     * @example
     * // Count the number of Sendprizes
     * const count = await prisma.sendprize.count({
     *   where: {
     *     // ... the filter for the Sendprizes we want to count
     *   }
     * })
    **/
    count<T extends SendprizeCountArgs>(
      args?: Subset<T, SendprizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SendprizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sendprize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendprizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SendprizeAggregateArgs>(args: Subset<T, SendprizeAggregateArgs>): Prisma.PrismaPromise<GetSendprizeAggregateType<T>>

    /**
     * Group by Sendprize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendprizeGroupByArgs} args - Group by arguments.
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
      T extends SendprizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SendprizeGroupByArgs['orderBy'] }
        : { orderBy?: SendprizeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SendprizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSendprizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Sendprize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SendprizeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Sendprize base type for findUnique actions
   */
  export type SendprizeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Sendprize
     */
    select?: SendprizeSelect | null
    /**
     * Filter, which Sendprize to fetch.
     */
    where: SendprizeWhereUniqueInput
  }

  /**
   * Sendprize findUnique
   */
  export interface SendprizeFindUniqueArgs extends SendprizeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Sendprize findUniqueOrThrow
   */
  export type SendprizeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Sendprize
     */
    select?: SendprizeSelect | null
    /**
     * Filter, which Sendprize to fetch.
     */
    where: SendprizeWhereUniqueInput
  }


  /**
   * Sendprize base type for findFirst actions
   */
  export type SendprizeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Sendprize
     */
    select?: SendprizeSelect | null
    /**
     * Filter, which Sendprize to fetch.
     */
    where?: SendprizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sendprizes to fetch.
     */
    orderBy?: Enumerable<SendprizeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sendprizes.
     */
    cursor?: SendprizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sendprizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sendprizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sendprizes.
     */
    distinct?: Enumerable<SendprizeScalarFieldEnum>
  }

  /**
   * Sendprize findFirst
   */
  export interface SendprizeFindFirstArgs extends SendprizeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Sendprize findFirstOrThrow
   */
  export type SendprizeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Sendprize
     */
    select?: SendprizeSelect | null
    /**
     * Filter, which Sendprize to fetch.
     */
    where?: SendprizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sendprizes to fetch.
     */
    orderBy?: Enumerable<SendprizeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sendprizes.
     */
    cursor?: SendprizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sendprizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sendprizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sendprizes.
     */
    distinct?: Enumerable<SendprizeScalarFieldEnum>
  }


  /**
   * Sendprize findMany
   */
  export type SendprizeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Sendprize
     */
    select?: SendprizeSelect | null
    /**
     * Filter, which Sendprizes to fetch.
     */
    where?: SendprizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sendprizes to fetch.
     */
    orderBy?: Enumerable<SendprizeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sendprizes.
     */
    cursor?: SendprizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sendprizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sendprizes.
     */
    skip?: number
    distinct?: Enumerable<SendprizeScalarFieldEnum>
  }


  /**
   * Sendprize create
   */
  export type SendprizeCreateArgs = {
    /**
     * Select specific fields to fetch from the Sendprize
     */
    select?: SendprizeSelect | null
    /**
     * The data needed to create a Sendprize.
     */
    data: XOR<SendprizeCreateInput, SendprizeUncheckedCreateInput>
  }


  /**
   * Sendprize createMany
   */
  export type SendprizeCreateManyArgs = {
    /**
     * The data used to create many Sendprizes.
     */
    data: Enumerable<SendprizeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Sendprize update
   */
  export type SendprizeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Sendprize
     */
    select?: SendprizeSelect | null
    /**
     * The data needed to update a Sendprize.
     */
    data: XOR<SendprizeUpdateInput, SendprizeUncheckedUpdateInput>
    /**
     * Choose, which Sendprize to update.
     */
    where: SendprizeWhereUniqueInput
  }


  /**
   * Sendprize updateMany
   */
  export type SendprizeUpdateManyArgs = {
    /**
     * The data used to update Sendprizes.
     */
    data: XOR<SendprizeUpdateManyMutationInput, SendprizeUncheckedUpdateManyInput>
    /**
     * Filter which Sendprizes to update
     */
    where?: SendprizeWhereInput
  }


  /**
   * Sendprize upsert
   */
  export type SendprizeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Sendprize
     */
    select?: SendprizeSelect | null
    /**
     * The filter to search for the Sendprize to update in case it exists.
     */
    where: SendprizeWhereUniqueInput
    /**
     * In case the Sendprize found by the `where` argument doesn't exist, create a new Sendprize with this data.
     */
    create: XOR<SendprizeCreateInput, SendprizeUncheckedCreateInput>
    /**
     * In case the Sendprize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SendprizeUpdateInput, SendprizeUncheckedUpdateInput>
  }


  /**
   * Sendprize delete
   */
  export type SendprizeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Sendprize
     */
    select?: SendprizeSelect | null
    /**
     * Filter which Sendprize to delete.
     */
    where: SendprizeWhereUniqueInput
  }


  /**
   * Sendprize deleteMany
   */
  export type SendprizeDeleteManyArgs = {
    /**
     * Filter which Sendprizes to delete
     */
    where?: SendprizeWhereInput
  }


  /**
   * Sendprize without action
   */
  export type SendprizeArgs = {
    /**
     * Select specific fields to fetch from the Sendprize
     */
    select?: SendprizeSelect | null
  }



  /**
   * Model Shootprize
   */


  export type AggregateShootprize = {
    _count: ShootprizeCountAggregateOutputType | null
    _avg: ShootprizeAvgAggregateOutputType | null
    _sum: ShootprizeSumAggregateOutputType | null
    _min: ShootprizeMinAggregateOutputType | null
    _max: ShootprizeMaxAggregateOutputType | null
  }

  export type ShootprizeAvgAggregateOutputType = {
    lv: number | null
    value: number | null
    propid: number | null
    propcount: number | null
    winsocre: number | null
  }

  export type ShootprizeSumAggregateOutputType = {
    lv: number | null
    value: number | null
    propid: number | null
    propcount: number | null
    winsocre: number | null
  }

  export type ShootprizeMinAggregateOutputType = {
    lv: number | null
    value: number | null
    propid: number | null
    propcount: number | null
    winsocre: number | null
  }

  export type ShootprizeMaxAggregateOutputType = {
    lv: number | null
    value: number | null
    propid: number | null
    propcount: number | null
    winsocre: number | null
  }

  export type ShootprizeCountAggregateOutputType = {
    lv: number
    value: number
    propid: number
    propcount: number
    winsocre: number
    _all: number
  }


  export type ShootprizeAvgAggregateInputType = {
    lv?: true
    value?: true
    propid?: true
    propcount?: true
    winsocre?: true
  }

  export type ShootprizeSumAggregateInputType = {
    lv?: true
    value?: true
    propid?: true
    propcount?: true
    winsocre?: true
  }

  export type ShootprizeMinAggregateInputType = {
    lv?: true
    value?: true
    propid?: true
    propcount?: true
    winsocre?: true
  }

  export type ShootprizeMaxAggregateInputType = {
    lv?: true
    value?: true
    propid?: true
    propcount?: true
    winsocre?: true
  }

  export type ShootprizeCountAggregateInputType = {
    lv?: true
    value?: true
    propid?: true
    propcount?: true
    winsocre?: true
    _all?: true
  }

  export type ShootprizeAggregateArgs = {
    /**
     * Filter which Shootprize to aggregate.
     */
    where?: ShootprizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shootprizes to fetch.
     */
    orderBy?: Enumerable<ShootprizeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShootprizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shootprizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shootprizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shootprizes
    **/
    _count?: true | ShootprizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShootprizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShootprizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShootprizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShootprizeMaxAggregateInputType
  }

  export type GetShootprizeAggregateType<T extends ShootprizeAggregateArgs> = {
        [P in keyof T & keyof AggregateShootprize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShootprize[P]>
      : GetScalarType<T[P], AggregateShootprize[P]>
  }




  export type ShootprizeGroupByArgs = {
    where?: ShootprizeWhereInput
    orderBy?: Enumerable<ShootprizeOrderByWithAggregationInput>
    by: ShootprizeScalarFieldEnum[]
    having?: ShootprizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShootprizeCountAggregateInputType | true
    _avg?: ShootprizeAvgAggregateInputType
    _sum?: ShootprizeSumAggregateInputType
    _min?: ShootprizeMinAggregateInputType
    _max?: ShootprizeMaxAggregateInputType
  }


  export type ShootprizeGroupByOutputType = {
    lv: number
    value: number
    propid: number
    propcount: number
    winsocre: number
    _count: ShootprizeCountAggregateOutputType | null
    _avg: ShootprizeAvgAggregateOutputType | null
    _sum: ShootprizeSumAggregateOutputType | null
    _min: ShootprizeMinAggregateOutputType | null
    _max: ShootprizeMaxAggregateOutputType | null
  }

  type GetShootprizeGroupByPayload<T extends ShootprizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ShootprizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShootprizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShootprizeGroupByOutputType[P]>
            : GetScalarType<T[P], ShootprizeGroupByOutputType[P]>
        }
      >
    >


  export type ShootprizeSelect = {
    lv?: boolean
    value?: boolean
    propid?: boolean
    propcount?: boolean
    winsocre?: boolean
  }


  export type ShootprizeGetPayload<S extends boolean | null | undefined | ShootprizeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Shootprize :
    S extends undefined ? never :
    S extends { include: any } & (ShootprizeArgs | ShootprizeFindManyArgs)
    ? Shootprize 
    : S extends { select: any } & (ShootprizeArgs | ShootprizeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Shootprize ? Shootprize[P] : never
  } 
      : Shootprize


  type ShootprizeCountArgs = 
    Omit<ShootprizeFindManyArgs, 'select' | 'include'> & {
      select?: ShootprizeCountAggregateInputType | true
    }

  export interface ShootprizeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Shootprize that matches the filter.
     * @param {ShootprizeFindUniqueArgs} args - Arguments to find a Shootprize
     * @example
     * // Get one Shootprize
     * const shootprize = await prisma.shootprize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShootprizeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShootprizeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Shootprize'> extends True ? Prisma__ShootprizeClient<ShootprizeGetPayload<T>> : Prisma__ShootprizeClient<ShootprizeGetPayload<T> | null, null>

    /**
     * Find one Shootprize that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShootprizeFindUniqueOrThrowArgs} args - Arguments to find a Shootprize
     * @example
     * // Get one Shootprize
     * const shootprize = await prisma.shootprize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShootprizeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ShootprizeFindUniqueOrThrowArgs>
    ): Prisma__ShootprizeClient<ShootprizeGetPayload<T>>

    /**
     * Find the first Shootprize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShootprizeFindFirstArgs} args - Arguments to find a Shootprize
     * @example
     * // Get one Shootprize
     * const shootprize = await prisma.shootprize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShootprizeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShootprizeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Shootprize'> extends True ? Prisma__ShootprizeClient<ShootprizeGetPayload<T>> : Prisma__ShootprizeClient<ShootprizeGetPayload<T> | null, null>

    /**
     * Find the first Shootprize that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShootprizeFindFirstOrThrowArgs} args - Arguments to find a Shootprize
     * @example
     * // Get one Shootprize
     * const shootprize = await prisma.shootprize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShootprizeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShootprizeFindFirstOrThrowArgs>
    ): Prisma__ShootprizeClient<ShootprizeGetPayload<T>>

    /**
     * Find zero or more Shootprizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShootprizeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shootprizes
     * const shootprizes = await prisma.shootprize.findMany()
     * 
     * // Get first 10 Shootprizes
     * const shootprizes = await prisma.shootprize.findMany({ take: 10 })
     * 
     * // Only select the `lv`
     * const shootprizeWithLvOnly = await prisma.shootprize.findMany({ select: { lv: true } })
     * 
    **/
    findMany<T extends ShootprizeFindManyArgs>(
      args?: SelectSubset<T, ShootprizeFindManyArgs>
    ): Prisma.PrismaPromise<Array<ShootprizeGetPayload<T>>>

    /**
     * Create a Shootprize.
     * @param {ShootprizeCreateArgs} args - Arguments to create a Shootprize.
     * @example
     * // Create one Shootprize
     * const Shootprize = await prisma.shootprize.create({
     *   data: {
     *     // ... data to create a Shootprize
     *   }
     * })
     * 
    **/
    create<T extends ShootprizeCreateArgs>(
      args: SelectSubset<T, ShootprizeCreateArgs>
    ): Prisma__ShootprizeClient<ShootprizeGetPayload<T>>

    /**
     * Create many Shootprizes.
     *     @param {ShootprizeCreateManyArgs} args - Arguments to create many Shootprizes.
     *     @example
     *     // Create many Shootprizes
     *     const shootprize = await prisma.shootprize.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShootprizeCreateManyArgs>(
      args?: SelectSubset<T, ShootprizeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shootprize.
     * @param {ShootprizeDeleteArgs} args - Arguments to delete one Shootprize.
     * @example
     * // Delete one Shootprize
     * const Shootprize = await prisma.shootprize.delete({
     *   where: {
     *     // ... filter to delete one Shootprize
     *   }
     * })
     * 
    **/
    delete<T extends ShootprizeDeleteArgs>(
      args: SelectSubset<T, ShootprizeDeleteArgs>
    ): Prisma__ShootprizeClient<ShootprizeGetPayload<T>>

    /**
     * Update one Shootprize.
     * @param {ShootprizeUpdateArgs} args - Arguments to update one Shootprize.
     * @example
     * // Update one Shootprize
     * const shootprize = await prisma.shootprize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShootprizeUpdateArgs>(
      args: SelectSubset<T, ShootprizeUpdateArgs>
    ): Prisma__ShootprizeClient<ShootprizeGetPayload<T>>

    /**
     * Delete zero or more Shootprizes.
     * @param {ShootprizeDeleteManyArgs} args - Arguments to filter Shootprizes to delete.
     * @example
     * // Delete a few Shootprizes
     * const { count } = await prisma.shootprize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShootprizeDeleteManyArgs>(
      args?: SelectSubset<T, ShootprizeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shootprizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShootprizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shootprizes
     * const shootprize = await prisma.shootprize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShootprizeUpdateManyArgs>(
      args: SelectSubset<T, ShootprizeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shootprize.
     * @param {ShootprizeUpsertArgs} args - Arguments to update or create a Shootprize.
     * @example
     * // Update or create a Shootprize
     * const shootprize = await prisma.shootprize.upsert({
     *   create: {
     *     // ... data to create a Shootprize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shootprize we want to update
     *   }
     * })
    **/
    upsert<T extends ShootprizeUpsertArgs>(
      args: SelectSubset<T, ShootprizeUpsertArgs>
    ): Prisma__ShootprizeClient<ShootprizeGetPayload<T>>

    /**
     * Count the number of Shootprizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShootprizeCountArgs} args - Arguments to filter Shootprizes to count.
     * @example
     * // Count the number of Shootprizes
     * const count = await prisma.shootprize.count({
     *   where: {
     *     // ... the filter for the Shootprizes we want to count
     *   }
     * })
    **/
    count<T extends ShootprizeCountArgs>(
      args?: Subset<T, ShootprizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShootprizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shootprize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShootprizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShootprizeAggregateArgs>(args: Subset<T, ShootprizeAggregateArgs>): Prisma.PrismaPromise<GetShootprizeAggregateType<T>>

    /**
     * Group by Shootprize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShootprizeGroupByArgs} args - Group by arguments.
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
      T extends ShootprizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShootprizeGroupByArgs['orderBy'] }
        : { orderBy?: ShootprizeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShootprizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShootprizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Shootprize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShootprizeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Shootprize base type for findUnique actions
   */
  export type ShootprizeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Shootprize
     */
    select?: ShootprizeSelect | null
    /**
     * Filter, which Shootprize to fetch.
     */
    where: ShootprizeWhereUniqueInput
  }

  /**
   * Shootprize findUnique
   */
  export interface ShootprizeFindUniqueArgs extends ShootprizeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Shootprize findUniqueOrThrow
   */
  export type ShootprizeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Shootprize
     */
    select?: ShootprizeSelect | null
    /**
     * Filter, which Shootprize to fetch.
     */
    where: ShootprizeWhereUniqueInput
  }


  /**
   * Shootprize base type for findFirst actions
   */
  export type ShootprizeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Shootprize
     */
    select?: ShootprizeSelect | null
    /**
     * Filter, which Shootprize to fetch.
     */
    where?: ShootprizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shootprizes to fetch.
     */
    orderBy?: Enumerable<ShootprizeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shootprizes.
     */
    cursor?: ShootprizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shootprizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shootprizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shootprizes.
     */
    distinct?: Enumerable<ShootprizeScalarFieldEnum>
  }

  /**
   * Shootprize findFirst
   */
  export interface ShootprizeFindFirstArgs extends ShootprizeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Shootprize findFirstOrThrow
   */
  export type ShootprizeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Shootprize
     */
    select?: ShootprizeSelect | null
    /**
     * Filter, which Shootprize to fetch.
     */
    where?: ShootprizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shootprizes to fetch.
     */
    orderBy?: Enumerable<ShootprizeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shootprizes.
     */
    cursor?: ShootprizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shootprizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shootprizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shootprizes.
     */
    distinct?: Enumerable<ShootprizeScalarFieldEnum>
  }


  /**
   * Shootprize findMany
   */
  export type ShootprizeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Shootprize
     */
    select?: ShootprizeSelect | null
    /**
     * Filter, which Shootprizes to fetch.
     */
    where?: ShootprizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shootprizes to fetch.
     */
    orderBy?: Enumerable<ShootprizeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shootprizes.
     */
    cursor?: ShootprizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shootprizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shootprizes.
     */
    skip?: number
    distinct?: Enumerable<ShootprizeScalarFieldEnum>
  }


  /**
   * Shootprize create
   */
  export type ShootprizeCreateArgs = {
    /**
     * Select specific fields to fetch from the Shootprize
     */
    select?: ShootprizeSelect | null
    /**
     * The data needed to create a Shootprize.
     */
    data: XOR<ShootprizeCreateInput, ShootprizeUncheckedCreateInput>
  }


  /**
   * Shootprize createMany
   */
  export type ShootprizeCreateManyArgs = {
    /**
     * The data used to create many Shootprizes.
     */
    data: Enumerable<ShootprizeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Shootprize update
   */
  export type ShootprizeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Shootprize
     */
    select?: ShootprizeSelect | null
    /**
     * The data needed to update a Shootprize.
     */
    data: XOR<ShootprizeUpdateInput, ShootprizeUncheckedUpdateInput>
    /**
     * Choose, which Shootprize to update.
     */
    where: ShootprizeWhereUniqueInput
  }


  /**
   * Shootprize updateMany
   */
  export type ShootprizeUpdateManyArgs = {
    /**
     * The data used to update Shootprizes.
     */
    data: XOR<ShootprizeUpdateManyMutationInput, ShootprizeUncheckedUpdateManyInput>
    /**
     * Filter which Shootprizes to update
     */
    where?: ShootprizeWhereInput
  }


  /**
   * Shootprize upsert
   */
  export type ShootprizeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Shootprize
     */
    select?: ShootprizeSelect | null
    /**
     * The filter to search for the Shootprize to update in case it exists.
     */
    where: ShootprizeWhereUniqueInput
    /**
     * In case the Shootprize found by the `where` argument doesn't exist, create a new Shootprize with this data.
     */
    create: XOR<ShootprizeCreateInput, ShootprizeUncheckedCreateInput>
    /**
     * In case the Shootprize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShootprizeUpdateInput, ShootprizeUncheckedUpdateInput>
  }


  /**
   * Shootprize delete
   */
  export type ShootprizeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Shootprize
     */
    select?: ShootprizeSelect | null
    /**
     * Filter which Shootprize to delete.
     */
    where: ShootprizeWhereUniqueInput
  }


  /**
   * Shootprize deleteMany
   */
  export type ShootprizeDeleteManyArgs = {
    /**
     * Filter which Shootprizes to delete
     */
    where?: ShootprizeWhereInput
  }


  /**
   * Shootprize without action
   */
  export type ShootprizeArgs = {
    /**
     * Select specific fields to fetch from the Shootprize
     */
    select?: ShootprizeSelect | null
  }



  /**
   * Model T_accounts
   */


  export type AggregateT_accounts = {
    _count: T_accountsCountAggregateOutputType | null
    _min: T_accountsMinAggregateOutputType | null
    _max: T_accountsMaxAggregateOutputType | null
  }

  export type T_accountsMinAggregateOutputType = {
    account: string | null
    password: string | null
  }

  export type T_accountsMaxAggregateOutputType = {
    account: string | null
    password: string | null
  }

  export type T_accountsCountAggregateOutputType = {
    account: number
    password: number
    _all: number
  }


  export type T_accountsMinAggregateInputType = {
    account?: true
    password?: true
  }

  export type T_accountsMaxAggregateInputType = {
    account?: true
    password?: true
  }

  export type T_accountsCountAggregateInputType = {
    account?: true
    password?: true
    _all?: true
  }

  export type T_accountsAggregateArgs = {
    /**
     * Filter which T_accounts to aggregate.
     */
    where?: T_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_accounts to fetch.
     */
    orderBy?: Enumerable<T_accountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_accounts
    **/
    _count?: true | T_accountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_accountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_accountsMaxAggregateInputType
  }

  export type GetT_accountsAggregateType<T extends T_accountsAggregateArgs> = {
        [P in keyof T & keyof AggregateT_accounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_accounts[P]>
      : GetScalarType<T[P], AggregateT_accounts[P]>
  }




  export type T_accountsGroupByArgs = {
    where?: T_accountsWhereInput
    orderBy?: Enumerable<T_accountsOrderByWithAggregationInput>
    by: T_accountsScalarFieldEnum[]
    having?: T_accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_accountsCountAggregateInputType | true
    _min?: T_accountsMinAggregateInputType
    _max?: T_accountsMaxAggregateInputType
  }


  export type T_accountsGroupByOutputType = {
    account: string
    password: string
    _count: T_accountsCountAggregateOutputType | null
    _min: T_accountsMinAggregateOutputType | null
    _max: T_accountsMaxAggregateOutputType | null
  }

  type GetT_accountsGroupByPayload<T extends T_accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<T_accountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_accountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_accountsGroupByOutputType[P]>
            : GetScalarType<T[P], T_accountsGroupByOutputType[P]>
        }
      >
    >


  export type T_accountsSelect = {
    account?: boolean
    password?: boolean
  }


  export type T_accountsGetPayload<S extends boolean | null | undefined | T_accountsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? T_accounts :
    S extends undefined ? never :
    S extends { include: any } & (T_accountsArgs | T_accountsFindManyArgs)
    ? T_accounts 
    : S extends { select: any } & (T_accountsArgs | T_accountsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof T_accounts ? T_accounts[P] : never
  } 
      : T_accounts


  type T_accountsCountArgs = 
    Omit<T_accountsFindManyArgs, 'select' | 'include'> & {
      select?: T_accountsCountAggregateInputType | true
    }

  export interface T_accountsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one T_accounts that matches the filter.
     * @param {T_accountsFindUniqueArgs} args - Arguments to find a T_accounts
     * @example
     * // Get one T_accounts
     * const t_accounts = await prisma.t_accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_accountsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, T_accountsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'T_accounts'> extends True ? Prisma__T_accountsClient<T_accountsGetPayload<T>> : Prisma__T_accountsClient<T_accountsGetPayload<T> | null, null>

    /**
     * Find one T_accounts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {T_accountsFindUniqueOrThrowArgs} args - Arguments to find a T_accounts
     * @example
     * // Get one T_accounts
     * const t_accounts = await prisma.t_accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_accountsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, T_accountsFindUniqueOrThrowArgs>
    ): Prisma__T_accountsClient<T_accountsGetPayload<T>>

    /**
     * Find the first T_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_accountsFindFirstArgs} args - Arguments to find a T_accounts
     * @example
     * // Get one T_accounts
     * const t_accounts = await prisma.t_accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_accountsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, T_accountsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'T_accounts'> extends True ? Prisma__T_accountsClient<T_accountsGetPayload<T>> : Prisma__T_accountsClient<T_accountsGetPayload<T> | null, null>

    /**
     * Find the first T_accounts that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_accountsFindFirstOrThrowArgs} args - Arguments to find a T_accounts
     * @example
     * // Get one T_accounts
     * const t_accounts = await prisma.t_accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_accountsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, T_accountsFindFirstOrThrowArgs>
    ): Prisma__T_accountsClient<T_accountsGetPayload<T>>

    /**
     * Find zero or more T_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_accountsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_accounts
     * const t_accounts = await prisma.t_accounts.findMany()
     * 
     * // Get first 10 T_accounts
     * const t_accounts = await prisma.t_accounts.findMany({ take: 10 })
     * 
     * // Only select the `account`
     * const t_accountsWithAccountOnly = await prisma.t_accounts.findMany({ select: { account: true } })
     * 
    **/
    findMany<T extends T_accountsFindManyArgs>(
      args?: SelectSubset<T, T_accountsFindManyArgs>
    ): Prisma.PrismaPromise<Array<T_accountsGetPayload<T>>>

    /**
     * Create a T_accounts.
     * @param {T_accountsCreateArgs} args - Arguments to create a T_accounts.
     * @example
     * // Create one T_accounts
     * const T_accounts = await prisma.t_accounts.create({
     *   data: {
     *     // ... data to create a T_accounts
     *   }
     * })
     * 
    **/
    create<T extends T_accountsCreateArgs>(
      args: SelectSubset<T, T_accountsCreateArgs>
    ): Prisma__T_accountsClient<T_accountsGetPayload<T>>

    /**
     * Create many T_accounts.
     *     @param {T_accountsCreateManyArgs} args - Arguments to create many T_accounts.
     *     @example
     *     // Create many T_accounts
     *     const t_accounts = await prisma.t_accounts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends T_accountsCreateManyArgs>(
      args?: SelectSubset<T, T_accountsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_accounts.
     * @param {T_accountsDeleteArgs} args - Arguments to delete one T_accounts.
     * @example
     * // Delete one T_accounts
     * const T_accounts = await prisma.t_accounts.delete({
     *   where: {
     *     // ... filter to delete one T_accounts
     *   }
     * })
     * 
    **/
    delete<T extends T_accountsDeleteArgs>(
      args: SelectSubset<T, T_accountsDeleteArgs>
    ): Prisma__T_accountsClient<T_accountsGetPayload<T>>

    /**
     * Update one T_accounts.
     * @param {T_accountsUpdateArgs} args - Arguments to update one T_accounts.
     * @example
     * // Update one T_accounts
     * const t_accounts = await prisma.t_accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_accountsUpdateArgs>(
      args: SelectSubset<T, T_accountsUpdateArgs>
    ): Prisma__T_accountsClient<T_accountsGetPayload<T>>

    /**
     * Delete zero or more T_accounts.
     * @param {T_accountsDeleteManyArgs} args - Arguments to filter T_accounts to delete.
     * @example
     * // Delete a few T_accounts
     * const { count } = await prisma.t_accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_accountsDeleteManyArgs>(
      args?: SelectSubset<T, T_accountsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_accounts
     * const t_accounts = await prisma.t_accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_accountsUpdateManyArgs>(
      args: SelectSubset<T, T_accountsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_accounts.
     * @param {T_accountsUpsertArgs} args - Arguments to update or create a T_accounts.
     * @example
     * // Update or create a T_accounts
     * const t_accounts = await prisma.t_accounts.upsert({
     *   create: {
     *     // ... data to create a T_accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_accounts we want to update
     *   }
     * })
    **/
    upsert<T extends T_accountsUpsertArgs>(
      args: SelectSubset<T, T_accountsUpsertArgs>
    ): Prisma__T_accountsClient<T_accountsGetPayload<T>>

    /**
     * Count the number of T_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_accountsCountArgs} args - Arguments to filter T_accounts to count.
     * @example
     * // Count the number of T_accounts
     * const count = await prisma.t_accounts.count({
     *   where: {
     *     // ... the filter for the T_accounts we want to count
     *   }
     * })
    **/
    count<T extends T_accountsCountArgs>(
      args?: Subset<T, T_accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_accountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_accountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_accountsAggregateArgs>(args: Subset<T, T_accountsAggregateArgs>): Prisma.PrismaPromise<GetT_accountsAggregateType<T>>

    /**
     * Group by T_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_accountsGroupByArgs} args - Group by arguments.
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
      T extends T_accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_accountsGroupByArgs['orderBy'] }
        : { orderBy?: T_accountsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_accountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for T_accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__T_accountsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * T_accounts base type for findUnique actions
   */
  export type T_accountsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the T_accounts
     */
    select?: T_accountsSelect | null
    /**
     * Filter, which T_accounts to fetch.
     */
    where: T_accountsWhereUniqueInput
  }

  /**
   * T_accounts findUnique
   */
  export interface T_accountsFindUniqueArgs extends T_accountsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_accounts findUniqueOrThrow
   */
  export type T_accountsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_accounts
     */
    select?: T_accountsSelect | null
    /**
     * Filter, which T_accounts to fetch.
     */
    where: T_accountsWhereUniqueInput
  }


  /**
   * T_accounts base type for findFirst actions
   */
  export type T_accountsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the T_accounts
     */
    select?: T_accountsSelect | null
    /**
     * Filter, which T_accounts to fetch.
     */
    where?: T_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_accounts to fetch.
     */
    orderBy?: Enumerable<T_accountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_accounts.
     */
    cursor?: T_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_accounts.
     */
    distinct?: Enumerable<T_accountsScalarFieldEnum>
  }

  /**
   * T_accounts findFirst
   */
  export interface T_accountsFindFirstArgs extends T_accountsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_accounts findFirstOrThrow
   */
  export type T_accountsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_accounts
     */
    select?: T_accountsSelect | null
    /**
     * Filter, which T_accounts to fetch.
     */
    where?: T_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_accounts to fetch.
     */
    orderBy?: Enumerable<T_accountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_accounts.
     */
    cursor?: T_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_accounts.
     */
    distinct?: Enumerable<T_accountsScalarFieldEnum>
  }


  /**
   * T_accounts findMany
   */
  export type T_accountsFindManyArgs = {
    /**
     * Select specific fields to fetch from the T_accounts
     */
    select?: T_accountsSelect | null
    /**
     * Filter, which T_accounts to fetch.
     */
    where?: T_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_accounts to fetch.
     */
    orderBy?: Enumerable<T_accountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_accounts.
     */
    cursor?: T_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_accounts.
     */
    skip?: number
    distinct?: Enumerable<T_accountsScalarFieldEnum>
  }


  /**
   * T_accounts create
   */
  export type T_accountsCreateArgs = {
    /**
     * Select specific fields to fetch from the T_accounts
     */
    select?: T_accountsSelect | null
    /**
     * The data needed to create a T_accounts.
     */
    data: XOR<T_accountsCreateInput, T_accountsUncheckedCreateInput>
  }


  /**
   * T_accounts createMany
   */
  export type T_accountsCreateManyArgs = {
    /**
     * The data used to create many T_accounts.
     */
    data: Enumerable<T_accountsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * T_accounts update
   */
  export type T_accountsUpdateArgs = {
    /**
     * Select specific fields to fetch from the T_accounts
     */
    select?: T_accountsSelect | null
    /**
     * The data needed to update a T_accounts.
     */
    data: XOR<T_accountsUpdateInput, T_accountsUncheckedUpdateInput>
    /**
     * Choose, which T_accounts to update.
     */
    where: T_accountsWhereUniqueInput
  }


  /**
   * T_accounts updateMany
   */
  export type T_accountsUpdateManyArgs = {
    /**
     * The data used to update T_accounts.
     */
    data: XOR<T_accountsUpdateManyMutationInput, T_accountsUncheckedUpdateManyInput>
    /**
     * Filter which T_accounts to update
     */
    where?: T_accountsWhereInput
  }


  /**
   * T_accounts upsert
   */
  export type T_accountsUpsertArgs = {
    /**
     * Select specific fields to fetch from the T_accounts
     */
    select?: T_accountsSelect | null
    /**
     * The filter to search for the T_accounts to update in case it exists.
     */
    where: T_accountsWhereUniqueInput
    /**
     * In case the T_accounts found by the `where` argument doesn't exist, create a new T_accounts with this data.
     */
    create: XOR<T_accountsCreateInput, T_accountsUncheckedCreateInput>
    /**
     * In case the T_accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_accountsUpdateInput, T_accountsUncheckedUpdateInput>
  }


  /**
   * T_accounts delete
   */
  export type T_accountsDeleteArgs = {
    /**
     * Select specific fields to fetch from the T_accounts
     */
    select?: T_accountsSelect | null
    /**
     * Filter which T_accounts to delete.
     */
    where: T_accountsWhereUniqueInput
  }


  /**
   * T_accounts deleteMany
   */
  export type T_accountsDeleteManyArgs = {
    /**
     * Filter which T_accounts to delete
     */
    where?: T_accountsWhereInput
  }


  /**
   * T_accounts without action
   */
  export type T_accountsArgs = {
    /**
     * Select specific fields to fetch from the T_accounts
     */
    select?: T_accountsSelect | null
  }



  /**
   * Model T_games
   */


  export type AggregateT_games = {
    _count: T_gamesCountAggregateOutputType | null
    _avg: T_gamesAvgAggregateOutputType | null
    _sum: T_gamesSumAggregateOutputType | null
    _min: T_gamesMinAggregateOutputType | null
    _max: T_gamesMaxAggregateOutputType | null
  }

  export type T_gamesAvgAggregateOutputType = {
    game_index: number | null
    create_time: number | null
  }

  export type T_gamesSumAggregateOutputType = {
    game_index: number | null
    create_time: number | null
  }

  export type T_gamesMinAggregateOutputType = {
    room_uuid: string | null
    game_index: number | null
    base_info: string | null
    create_time: number | null
    snapshots: string | null
    action_records: string | null
    result: string | null
  }

  export type T_gamesMaxAggregateOutputType = {
    room_uuid: string | null
    game_index: number | null
    base_info: string | null
    create_time: number | null
    snapshots: string | null
    action_records: string | null
    result: string | null
  }

  export type T_gamesCountAggregateOutputType = {
    room_uuid: number
    game_index: number
    base_info: number
    create_time: number
    snapshots: number
    action_records: number
    result: number
    _all: number
  }


  export type T_gamesAvgAggregateInputType = {
    game_index?: true
    create_time?: true
  }

  export type T_gamesSumAggregateInputType = {
    game_index?: true
    create_time?: true
  }

  export type T_gamesMinAggregateInputType = {
    room_uuid?: true
    game_index?: true
    base_info?: true
    create_time?: true
    snapshots?: true
    action_records?: true
    result?: true
  }

  export type T_gamesMaxAggregateInputType = {
    room_uuid?: true
    game_index?: true
    base_info?: true
    create_time?: true
    snapshots?: true
    action_records?: true
    result?: true
  }

  export type T_gamesCountAggregateInputType = {
    room_uuid?: true
    game_index?: true
    base_info?: true
    create_time?: true
    snapshots?: true
    action_records?: true
    result?: true
    _all?: true
  }

  export type T_gamesAggregateArgs = {
    /**
     * Filter which T_games to aggregate.
     */
    where?: T_gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_games to fetch.
     */
    orderBy?: Enumerable<T_gamesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_games
    **/
    _count?: true | T_gamesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_gamesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_gamesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_gamesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_gamesMaxAggregateInputType
  }

  export type GetT_gamesAggregateType<T extends T_gamesAggregateArgs> = {
        [P in keyof T & keyof AggregateT_games]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_games[P]>
      : GetScalarType<T[P], AggregateT_games[P]>
  }




  export type T_gamesGroupByArgs = {
    where?: T_gamesWhereInput
    orderBy?: Enumerable<T_gamesOrderByWithAggregationInput>
    by: T_gamesScalarFieldEnum[]
    having?: T_gamesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_gamesCountAggregateInputType | true
    _avg?: T_gamesAvgAggregateInputType
    _sum?: T_gamesSumAggregateInputType
    _min?: T_gamesMinAggregateInputType
    _max?: T_gamesMaxAggregateInputType
  }


  export type T_gamesGroupByOutputType = {
    room_uuid: string
    game_index: number
    base_info: string
    create_time: number
    snapshots: string
    action_records: string
    result: string
    _count: T_gamesCountAggregateOutputType | null
    _avg: T_gamesAvgAggregateOutputType | null
    _sum: T_gamesSumAggregateOutputType | null
    _min: T_gamesMinAggregateOutputType | null
    _max: T_gamesMaxAggregateOutputType | null
  }

  type GetT_gamesGroupByPayload<T extends T_gamesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<T_gamesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_gamesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_gamesGroupByOutputType[P]>
            : GetScalarType<T[P], T_gamesGroupByOutputType[P]>
        }
      >
    >


  export type T_gamesSelect = {
    room_uuid?: boolean
    game_index?: boolean
    base_info?: boolean
    create_time?: boolean
    snapshots?: boolean
    action_records?: boolean
    result?: boolean
  }


  export type T_gamesGetPayload<S extends boolean | null | undefined | T_gamesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? T_games :
    S extends undefined ? never :
    S extends { include: any } & (T_gamesArgs | T_gamesFindManyArgs)
    ? T_games 
    : S extends { select: any } & (T_gamesArgs | T_gamesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof T_games ? T_games[P] : never
  } 
      : T_games


  type T_gamesCountArgs = 
    Omit<T_gamesFindManyArgs, 'select' | 'include'> & {
      select?: T_gamesCountAggregateInputType | true
    }

  export interface T_gamesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one T_games that matches the filter.
     * @param {T_gamesFindUniqueArgs} args - Arguments to find a T_games
     * @example
     * // Get one T_games
     * const t_games = await prisma.t_games.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_gamesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, T_gamesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'T_games'> extends True ? Prisma__T_gamesClient<T_gamesGetPayload<T>> : Prisma__T_gamesClient<T_gamesGetPayload<T> | null, null>

    /**
     * Find one T_games that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {T_gamesFindUniqueOrThrowArgs} args - Arguments to find a T_games
     * @example
     * // Get one T_games
     * const t_games = await prisma.t_games.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_gamesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, T_gamesFindUniqueOrThrowArgs>
    ): Prisma__T_gamesClient<T_gamesGetPayload<T>>

    /**
     * Find the first T_games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_gamesFindFirstArgs} args - Arguments to find a T_games
     * @example
     * // Get one T_games
     * const t_games = await prisma.t_games.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_gamesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, T_gamesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'T_games'> extends True ? Prisma__T_gamesClient<T_gamesGetPayload<T>> : Prisma__T_gamesClient<T_gamesGetPayload<T> | null, null>

    /**
     * Find the first T_games that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_gamesFindFirstOrThrowArgs} args - Arguments to find a T_games
     * @example
     * // Get one T_games
     * const t_games = await prisma.t_games.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_gamesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, T_gamesFindFirstOrThrowArgs>
    ): Prisma__T_gamesClient<T_gamesGetPayload<T>>

    /**
     * Find zero or more T_games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_gamesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_games
     * const t_games = await prisma.t_games.findMany()
     * 
     * // Get first 10 T_games
     * const t_games = await prisma.t_games.findMany({ take: 10 })
     * 
     * // Only select the `room_uuid`
     * const t_gamesWithRoom_uuidOnly = await prisma.t_games.findMany({ select: { room_uuid: true } })
     * 
    **/
    findMany<T extends T_gamesFindManyArgs>(
      args?: SelectSubset<T, T_gamesFindManyArgs>
    ): Prisma.PrismaPromise<Array<T_gamesGetPayload<T>>>

    /**
     * Create a T_games.
     * @param {T_gamesCreateArgs} args - Arguments to create a T_games.
     * @example
     * // Create one T_games
     * const T_games = await prisma.t_games.create({
     *   data: {
     *     // ... data to create a T_games
     *   }
     * })
     * 
    **/
    create<T extends T_gamesCreateArgs>(
      args: SelectSubset<T, T_gamesCreateArgs>
    ): Prisma__T_gamesClient<T_gamesGetPayload<T>>

    /**
     * Create many T_games.
     *     @param {T_gamesCreateManyArgs} args - Arguments to create many T_games.
     *     @example
     *     // Create many T_games
     *     const t_games = await prisma.t_games.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends T_gamesCreateManyArgs>(
      args?: SelectSubset<T, T_gamesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_games.
     * @param {T_gamesDeleteArgs} args - Arguments to delete one T_games.
     * @example
     * // Delete one T_games
     * const T_games = await prisma.t_games.delete({
     *   where: {
     *     // ... filter to delete one T_games
     *   }
     * })
     * 
    **/
    delete<T extends T_gamesDeleteArgs>(
      args: SelectSubset<T, T_gamesDeleteArgs>
    ): Prisma__T_gamesClient<T_gamesGetPayload<T>>

    /**
     * Update one T_games.
     * @param {T_gamesUpdateArgs} args - Arguments to update one T_games.
     * @example
     * // Update one T_games
     * const t_games = await prisma.t_games.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_gamesUpdateArgs>(
      args: SelectSubset<T, T_gamesUpdateArgs>
    ): Prisma__T_gamesClient<T_gamesGetPayload<T>>

    /**
     * Delete zero or more T_games.
     * @param {T_gamesDeleteManyArgs} args - Arguments to filter T_games to delete.
     * @example
     * // Delete a few T_games
     * const { count } = await prisma.t_games.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_gamesDeleteManyArgs>(
      args?: SelectSubset<T, T_gamesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_gamesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_games
     * const t_games = await prisma.t_games.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_gamesUpdateManyArgs>(
      args: SelectSubset<T, T_gamesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_games.
     * @param {T_gamesUpsertArgs} args - Arguments to update or create a T_games.
     * @example
     * // Update or create a T_games
     * const t_games = await prisma.t_games.upsert({
     *   create: {
     *     // ... data to create a T_games
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_games we want to update
     *   }
     * })
    **/
    upsert<T extends T_gamesUpsertArgs>(
      args: SelectSubset<T, T_gamesUpsertArgs>
    ): Prisma__T_gamesClient<T_gamesGetPayload<T>>

    /**
     * Count the number of T_games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_gamesCountArgs} args - Arguments to filter T_games to count.
     * @example
     * // Count the number of T_games
     * const count = await prisma.t_games.count({
     *   where: {
     *     // ... the filter for the T_games we want to count
     *   }
     * })
    **/
    count<T extends T_gamesCountArgs>(
      args?: Subset<T, T_gamesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_gamesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_gamesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_gamesAggregateArgs>(args: Subset<T, T_gamesAggregateArgs>): Prisma.PrismaPromise<GetT_gamesAggregateType<T>>

    /**
     * Group by T_games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_gamesGroupByArgs} args - Group by arguments.
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
      T extends T_gamesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_gamesGroupByArgs['orderBy'] }
        : { orderBy?: T_gamesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_gamesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_gamesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for T_games.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__T_gamesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * T_games base type for findUnique actions
   */
  export type T_gamesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the T_games
     */
    select?: T_gamesSelect | null
    /**
     * Filter, which T_games to fetch.
     */
    where: T_gamesWhereUniqueInput
  }

  /**
   * T_games findUnique
   */
  export interface T_gamesFindUniqueArgs extends T_gamesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_games findUniqueOrThrow
   */
  export type T_gamesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_games
     */
    select?: T_gamesSelect | null
    /**
     * Filter, which T_games to fetch.
     */
    where: T_gamesWhereUniqueInput
  }


  /**
   * T_games base type for findFirst actions
   */
  export type T_gamesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the T_games
     */
    select?: T_gamesSelect | null
    /**
     * Filter, which T_games to fetch.
     */
    where?: T_gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_games to fetch.
     */
    orderBy?: Enumerable<T_gamesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_games.
     */
    cursor?: T_gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_games.
     */
    distinct?: Enumerable<T_gamesScalarFieldEnum>
  }

  /**
   * T_games findFirst
   */
  export interface T_gamesFindFirstArgs extends T_gamesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_games findFirstOrThrow
   */
  export type T_gamesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_games
     */
    select?: T_gamesSelect | null
    /**
     * Filter, which T_games to fetch.
     */
    where?: T_gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_games to fetch.
     */
    orderBy?: Enumerable<T_gamesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_games.
     */
    cursor?: T_gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_games.
     */
    distinct?: Enumerable<T_gamesScalarFieldEnum>
  }


  /**
   * T_games findMany
   */
  export type T_gamesFindManyArgs = {
    /**
     * Select specific fields to fetch from the T_games
     */
    select?: T_gamesSelect | null
    /**
     * Filter, which T_games to fetch.
     */
    where?: T_gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_games to fetch.
     */
    orderBy?: Enumerable<T_gamesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_games.
     */
    cursor?: T_gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_games.
     */
    skip?: number
    distinct?: Enumerable<T_gamesScalarFieldEnum>
  }


  /**
   * T_games create
   */
  export type T_gamesCreateArgs = {
    /**
     * Select specific fields to fetch from the T_games
     */
    select?: T_gamesSelect | null
    /**
     * The data needed to create a T_games.
     */
    data: XOR<T_gamesCreateInput, T_gamesUncheckedCreateInput>
  }


  /**
   * T_games createMany
   */
  export type T_gamesCreateManyArgs = {
    /**
     * The data used to create many T_games.
     */
    data: Enumerable<T_gamesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * T_games update
   */
  export type T_gamesUpdateArgs = {
    /**
     * Select specific fields to fetch from the T_games
     */
    select?: T_gamesSelect | null
    /**
     * The data needed to update a T_games.
     */
    data: XOR<T_gamesUpdateInput, T_gamesUncheckedUpdateInput>
    /**
     * Choose, which T_games to update.
     */
    where: T_gamesWhereUniqueInput
  }


  /**
   * T_games updateMany
   */
  export type T_gamesUpdateManyArgs = {
    /**
     * The data used to update T_games.
     */
    data: XOR<T_gamesUpdateManyMutationInput, T_gamesUncheckedUpdateManyInput>
    /**
     * Filter which T_games to update
     */
    where?: T_gamesWhereInput
  }


  /**
   * T_games upsert
   */
  export type T_gamesUpsertArgs = {
    /**
     * Select specific fields to fetch from the T_games
     */
    select?: T_gamesSelect | null
    /**
     * The filter to search for the T_games to update in case it exists.
     */
    where: T_gamesWhereUniqueInput
    /**
     * In case the T_games found by the `where` argument doesn't exist, create a new T_games with this data.
     */
    create: XOR<T_gamesCreateInput, T_gamesUncheckedCreateInput>
    /**
     * In case the T_games was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_gamesUpdateInput, T_gamesUncheckedUpdateInput>
  }


  /**
   * T_games delete
   */
  export type T_gamesDeleteArgs = {
    /**
     * Select specific fields to fetch from the T_games
     */
    select?: T_gamesSelect | null
    /**
     * Filter which T_games to delete.
     */
    where: T_gamesWhereUniqueInput
  }


  /**
   * T_games deleteMany
   */
  export type T_gamesDeleteManyArgs = {
    /**
     * Filter which T_games to delete
     */
    where?: T_gamesWhereInput
  }


  /**
   * T_games without action
   */
  export type T_gamesArgs = {
    /**
     * Select specific fields to fetch from the T_games
     */
    select?: T_gamesSelect | null
  }



  /**
   * Model T_games_archive
   */


  export type AggregateT_games_archive = {
    _count: T_games_archiveCountAggregateOutputType | null
    _avg: T_games_archiveAvgAggregateOutputType | null
    _sum: T_games_archiveSumAggregateOutputType | null
    _min: T_games_archiveMinAggregateOutputType | null
    _max: T_games_archiveMaxAggregateOutputType | null
  }

  export type T_games_archiveAvgAggregateOutputType = {
    game_index: number | null
    create_time: number | null
  }

  export type T_games_archiveSumAggregateOutputType = {
    game_index: number | null
    create_time: number | null
  }

  export type T_games_archiveMinAggregateOutputType = {
    room_uuid: string | null
    game_index: number | null
    base_info: string | null
    create_time: number | null
    snapshots: string | null
    action_records: string | null
    result: string | null
  }

  export type T_games_archiveMaxAggregateOutputType = {
    room_uuid: string | null
    game_index: number | null
    base_info: string | null
    create_time: number | null
    snapshots: string | null
    action_records: string | null
    result: string | null
  }

  export type T_games_archiveCountAggregateOutputType = {
    room_uuid: number
    game_index: number
    base_info: number
    create_time: number
    snapshots: number
    action_records: number
    result: number
    _all: number
  }


  export type T_games_archiveAvgAggregateInputType = {
    game_index?: true
    create_time?: true
  }

  export type T_games_archiveSumAggregateInputType = {
    game_index?: true
    create_time?: true
  }

  export type T_games_archiveMinAggregateInputType = {
    room_uuid?: true
    game_index?: true
    base_info?: true
    create_time?: true
    snapshots?: true
    action_records?: true
    result?: true
  }

  export type T_games_archiveMaxAggregateInputType = {
    room_uuid?: true
    game_index?: true
    base_info?: true
    create_time?: true
    snapshots?: true
    action_records?: true
    result?: true
  }

  export type T_games_archiveCountAggregateInputType = {
    room_uuid?: true
    game_index?: true
    base_info?: true
    create_time?: true
    snapshots?: true
    action_records?: true
    result?: true
    _all?: true
  }

  export type T_games_archiveAggregateArgs = {
    /**
     * Filter which T_games_archive to aggregate.
     */
    where?: T_games_archiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_games_archives to fetch.
     */
    orderBy?: Enumerable<T_games_archiveOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_games_archiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_games_archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_games_archives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_games_archives
    **/
    _count?: true | T_games_archiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_games_archiveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_games_archiveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_games_archiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_games_archiveMaxAggregateInputType
  }

  export type GetT_games_archiveAggregateType<T extends T_games_archiveAggregateArgs> = {
        [P in keyof T & keyof AggregateT_games_archive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_games_archive[P]>
      : GetScalarType<T[P], AggregateT_games_archive[P]>
  }




  export type T_games_archiveGroupByArgs = {
    where?: T_games_archiveWhereInput
    orderBy?: Enumerable<T_games_archiveOrderByWithAggregationInput>
    by: T_games_archiveScalarFieldEnum[]
    having?: T_games_archiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_games_archiveCountAggregateInputType | true
    _avg?: T_games_archiveAvgAggregateInputType
    _sum?: T_games_archiveSumAggregateInputType
    _min?: T_games_archiveMinAggregateInputType
    _max?: T_games_archiveMaxAggregateInputType
  }


  export type T_games_archiveGroupByOutputType = {
    room_uuid: string
    game_index: number
    base_info: string
    create_time: number
    snapshots: string
    action_records: string
    result: string
    _count: T_games_archiveCountAggregateOutputType | null
    _avg: T_games_archiveAvgAggregateOutputType | null
    _sum: T_games_archiveSumAggregateOutputType | null
    _min: T_games_archiveMinAggregateOutputType | null
    _max: T_games_archiveMaxAggregateOutputType | null
  }

  type GetT_games_archiveGroupByPayload<T extends T_games_archiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<T_games_archiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_games_archiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_games_archiveGroupByOutputType[P]>
            : GetScalarType<T[P], T_games_archiveGroupByOutputType[P]>
        }
      >
    >


  export type T_games_archiveSelect = {
    room_uuid?: boolean
    game_index?: boolean
    base_info?: boolean
    create_time?: boolean
    snapshots?: boolean
    action_records?: boolean
    result?: boolean
  }


  export type T_games_archiveGetPayload<S extends boolean | null | undefined | T_games_archiveArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? T_games_archive :
    S extends undefined ? never :
    S extends { include: any } & (T_games_archiveArgs | T_games_archiveFindManyArgs)
    ? T_games_archive 
    : S extends { select: any } & (T_games_archiveArgs | T_games_archiveFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof T_games_archive ? T_games_archive[P] : never
  } 
      : T_games_archive


  type T_games_archiveCountArgs = 
    Omit<T_games_archiveFindManyArgs, 'select' | 'include'> & {
      select?: T_games_archiveCountAggregateInputType | true
    }

  export interface T_games_archiveDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one T_games_archive that matches the filter.
     * @param {T_games_archiveFindUniqueArgs} args - Arguments to find a T_games_archive
     * @example
     * // Get one T_games_archive
     * const t_games_archive = await prisma.t_games_archive.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_games_archiveFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, T_games_archiveFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'T_games_archive'> extends True ? Prisma__T_games_archiveClient<T_games_archiveGetPayload<T>> : Prisma__T_games_archiveClient<T_games_archiveGetPayload<T> | null, null>

    /**
     * Find one T_games_archive that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {T_games_archiveFindUniqueOrThrowArgs} args - Arguments to find a T_games_archive
     * @example
     * // Get one T_games_archive
     * const t_games_archive = await prisma.t_games_archive.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_games_archiveFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, T_games_archiveFindUniqueOrThrowArgs>
    ): Prisma__T_games_archiveClient<T_games_archiveGetPayload<T>>

    /**
     * Find the first T_games_archive that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_games_archiveFindFirstArgs} args - Arguments to find a T_games_archive
     * @example
     * // Get one T_games_archive
     * const t_games_archive = await prisma.t_games_archive.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_games_archiveFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, T_games_archiveFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'T_games_archive'> extends True ? Prisma__T_games_archiveClient<T_games_archiveGetPayload<T>> : Prisma__T_games_archiveClient<T_games_archiveGetPayload<T> | null, null>

    /**
     * Find the first T_games_archive that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_games_archiveFindFirstOrThrowArgs} args - Arguments to find a T_games_archive
     * @example
     * // Get one T_games_archive
     * const t_games_archive = await prisma.t_games_archive.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_games_archiveFindFirstOrThrowArgs>(
      args?: SelectSubset<T, T_games_archiveFindFirstOrThrowArgs>
    ): Prisma__T_games_archiveClient<T_games_archiveGetPayload<T>>

    /**
     * Find zero or more T_games_archives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_games_archiveFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_games_archives
     * const t_games_archives = await prisma.t_games_archive.findMany()
     * 
     * // Get first 10 T_games_archives
     * const t_games_archives = await prisma.t_games_archive.findMany({ take: 10 })
     * 
     * // Only select the `room_uuid`
     * const t_games_archiveWithRoom_uuidOnly = await prisma.t_games_archive.findMany({ select: { room_uuid: true } })
     * 
    **/
    findMany<T extends T_games_archiveFindManyArgs>(
      args?: SelectSubset<T, T_games_archiveFindManyArgs>
    ): Prisma.PrismaPromise<Array<T_games_archiveGetPayload<T>>>

    /**
     * Create a T_games_archive.
     * @param {T_games_archiveCreateArgs} args - Arguments to create a T_games_archive.
     * @example
     * // Create one T_games_archive
     * const T_games_archive = await prisma.t_games_archive.create({
     *   data: {
     *     // ... data to create a T_games_archive
     *   }
     * })
     * 
    **/
    create<T extends T_games_archiveCreateArgs>(
      args: SelectSubset<T, T_games_archiveCreateArgs>
    ): Prisma__T_games_archiveClient<T_games_archiveGetPayload<T>>

    /**
     * Create many T_games_archives.
     *     @param {T_games_archiveCreateManyArgs} args - Arguments to create many T_games_archives.
     *     @example
     *     // Create many T_games_archives
     *     const t_games_archive = await prisma.t_games_archive.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends T_games_archiveCreateManyArgs>(
      args?: SelectSubset<T, T_games_archiveCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_games_archive.
     * @param {T_games_archiveDeleteArgs} args - Arguments to delete one T_games_archive.
     * @example
     * // Delete one T_games_archive
     * const T_games_archive = await prisma.t_games_archive.delete({
     *   where: {
     *     // ... filter to delete one T_games_archive
     *   }
     * })
     * 
    **/
    delete<T extends T_games_archiveDeleteArgs>(
      args: SelectSubset<T, T_games_archiveDeleteArgs>
    ): Prisma__T_games_archiveClient<T_games_archiveGetPayload<T>>

    /**
     * Update one T_games_archive.
     * @param {T_games_archiveUpdateArgs} args - Arguments to update one T_games_archive.
     * @example
     * // Update one T_games_archive
     * const t_games_archive = await prisma.t_games_archive.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_games_archiveUpdateArgs>(
      args: SelectSubset<T, T_games_archiveUpdateArgs>
    ): Prisma__T_games_archiveClient<T_games_archiveGetPayload<T>>

    /**
     * Delete zero or more T_games_archives.
     * @param {T_games_archiveDeleteManyArgs} args - Arguments to filter T_games_archives to delete.
     * @example
     * // Delete a few T_games_archives
     * const { count } = await prisma.t_games_archive.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_games_archiveDeleteManyArgs>(
      args?: SelectSubset<T, T_games_archiveDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_games_archives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_games_archiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_games_archives
     * const t_games_archive = await prisma.t_games_archive.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_games_archiveUpdateManyArgs>(
      args: SelectSubset<T, T_games_archiveUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_games_archive.
     * @param {T_games_archiveUpsertArgs} args - Arguments to update or create a T_games_archive.
     * @example
     * // Update or create a T_games_archive
     * const t_games_archive = await prisma.t_games_archive.upsert({
     *   create: {
     *     // ... data to create a T_games_archive
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_games_archive we want to update
     *   }
     * })
    **/
    upsert<T extends T_games_archiveUpsertArgs>(
      args: SelectSubset<T, T_games_archiveUpsertArgs>
    ): Prisma__T_games_archiveClient<T_games_archiveGetPayload<T>>

    /**
     * Count the number of T_games_archives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_games_archiveCountArgs} args - Arguments to filter T_games_archives to count.
     * @example
     * // Count the number of T_games_archives
     * const count = await prisma.t_games_archive.count({
     *   where: {
     *     // ... the filter for the T_games_archives we want to count
     *   }
     * })
    **/
    count<T extends T_games_archiveCountArgs>(
      args?: Subset<T, T_games_archiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_games_archiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_games_archive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_games_archiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_games_archiveAggregateArgs>(args: Subset<T, T_games_archiveAggregateArgs>): Prisma.PrismaPromise<GetT_games_archiveAggregateType<T>>

    /**
     * Group by T_games_archive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_games_archiveGroupByArgs} args - Group by arguments.
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
      T extends T_games_archiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_games_archiveGroupByArgs['orderBy'] }
        : { orderBy?: T_games_archiveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_games_archiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_games_archiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for T_games_archive.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__T_games_archiveClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * T_games_archive base type for findUnique actions
   */
  export type T_games_archiveFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the T_games_archive
     */
    select?: T_games_archiveSelect | null
    /**
     * Filter, which T_games_archive to fetch.
     */
    where: T_games_archiveWhereUniqueInput
  }

  /**
   * T_games_archive findUnique
   */
  export interface T_games_archiveFindUniqueArgs extends T_games_archiveFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_games_archive findUniqueOrThrow
   */
  export type T_games_archiveFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_games_archive
     */
    select?: T_games_archiveSelect | null
    /**
     * Filter, which T_games_archive to fetch.
     */
    where: T_games_archiveWhereUniqueInput
  }


  /**
   * T_games_archive base type for findFirst actions
   */
  export type T_games_archiveFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the T_games_archive
     */
    select?: T_games_archiveSelect | null
    /**
     * Filter, which T_games_archive to fetch.
     */
    where?: T_games_archiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_games_archives to fetch.
     */
    orderBy?: Enumerable<T_games_archiveOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_games_archives.
     */
    cursor?: T_games_archiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_games_archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_games_archives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_games_archives.
     */
    distinct?: Enumerable<T_games_archiveScalarFieldEnum>
  }

  /**
   * T_games_archive findFirst
   */
  export interface T_games_archiveFindFirstArgs extends T_games_archiveFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_games_archive findFirstOrThrow
   */
  export type T_games_archiveFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_games_archive
     */
    select?: T_games_archiveSelect | null
    /**
     * Filter, which T_games_archive to fetch.
     */
    where?: T_games_archiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_games_archives to fetch.
     */
    orderBy?: Enumerable<T_games_archiveOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_games_archives.
     */
    cursor?: T_games_archiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_games_archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_games_archives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_games_archives.
     */
    distinct?: Enumerable<T_games_archiveScalarFieldEnum>
  }


  /**
   * T_games_archive findMany
   */
  export type T_games_archiveFindManyArgs = {
    /**
     * Select specific fields to fetch from the T_games_archive
     */
    select?: T_games_archiveSelect | null
    /**
     * Filter, which T_games_archives to fetch.
     */
    where?: T_games_archiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_games_archives to fetch.
     */
    orderBy?: Enumerable<T_games_archiveOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_games_archives.
     */
    cursor?: T_games_archiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_games_archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_games_archives.
     */
    skip?: number
    distinct?: Enumerable<T_games_archiveScalarFieldEnum>
  }


  /**
   * T_games_archive create
   */
  export type T_games_archiveCreateArgs = {
    /**
     * Select specific fields to fetch from the T_games_archive
     */
    select?: T_games_archiveSelect | null
    /**
     * The data needed to create a T_games_archive.
     */
    data: XOR<T_games_archiveCreateInput, T_games_archiveUncheckedCreateInput>
  }


  /**
   * T_games_archive createMany
   */
  export type T_games_archiveCreateManyArgs = {
    /**
     * The data used to create many T_games_archives.
     */
    data: Enumerable<T_games_archiveCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * T_games_archive update
   */
  export type T_games_archiveUpdateArgs = {
    /**
     * Select specific fields to fetch from the T_games_archive
     */
    select?: T_games_archiveSelect | null
    /**
     * The data needed to update a T_games_archive.
     */
    data: XOR<T_games_archiveUpdateInput, T_games_archiveUncheckedUpdateInput>
    /**
     * Choose, which T_games_archive to update.
     */
    where: T_games_archiveWhereUniqueInput
  }


  /**
   * T_games_archive updateMany
   */
  export type T_games_archiveUpdateManyArgs = {
    /**
     * The data used to update T_games_archives.
     */
    data: XOR<T_games_archiveUpdateManyMutationInput, T_games_archiveUncheckedUpdateManyInput>
    /**
     * Filter which T_games_archives to update
     */
    where?: T_games_archiveWhereInput
  }


  /**
   * T_games_archive upsert
   */
  export type T_games_archiveUpsertArgs = {
    /**
     * Select specific fields to fetch from the T_games_archive
     */
    select?: T_games_archiveSelect | null
    /**
     * The filter to search for the T_games_archive to update in case it exists.
     */
    where: T_games_archiveWhereUniqueInput
    /**
     * In case the T_games_archive found by the `where` argument doesn't exist, create a new T_games_archive with this data.
     */
    create: XOR<T_games_archiveCreateInput, T_games_archiveUncheckedCreateInput>
    /**
     * In case the T_games_archive was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_games_archiveUpdateInput, T_games_archiveUncheckedUpdateInput>
  }


  /**
   * T_games_archive delete
   */
  export type T_games_archiveDeleteArgs = {
    /**
     * Select specific fields to fetch from the T_games_archive
     */
    select?: T_games_archiveSelect | null
    /**
     * Filter which T_games_archive to delete.
     */
    where: T_games_archiveWhereUniqueInput
  }


  /**
   * T_games_archive deleteMany
   */
  export type T_games_archiveDeleteManyArgs = {
    /**
     * Filter which T_games_archives to delete
     */
    where?: T_games_archiveWhereInput
  }


  /**
   * T_games_archive without action
   */
  export type T_games_archiveArgs = {
    /**
     * Select specific fields to fetch from the T_games_archive
     */
    select?: T_games_archiveSelect | null
  }



  /**
   * Model T_guests
   */


  export type AggregateT_guests = {
    _count: T_guestsCountAggregateOutputType | null
    _min: T_guestsMinAggregateOutputType | null
    _max: T_guestsMaxAggregateOutputType | null
  }

  export type T_guestsMinAggregateOutputType = {
    guest_account: string | null
  }

  export type T_guestsMaxAggregateOutputType = {
    guest_account: string | null
  }

  export type T_guestsCountAggregateOutputType = {
    guest_account: number
    _all: number
  }


  export type T_guestsMinAggregateInputType = {
    guest_account?: true
  }

  export type T_guestsMaxAggregateInputType = {
    guest_account?: true
  }

  export type T_guestsCountAggregateInputType = {
    guest_account?: true
    _all?: true
  }

  export type T_guestsAggregateArgs = {
    /**
     * Filter which T_guests to aggregate.
     */
    where?: T_guestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_guests to fetch.
     */
    orderBy?: Enumerable<T_guestsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_guestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_guests
    **/
    _count?: true | T_guestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_guestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_guestsMaxAggregateInputType
  }

  export type GetT_guestsAggregateType<T extends T_guestsAggregateArgs> = {
        [P in keyof T & keyof AggregateT_guests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_guests[P]>
      : GetScalarType<T[P], AggregateT_guests[P]>
  }




  export type T_guestsGroupByArgs = {
    where?: T_guestsWhereInput
    orderBy?: Enumerable<T_guestsOrderByWithAggregationInput>
    by: T_guestsScalarFieldEnum[]
    having?: T_guestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_guestsCountAggregateInputType | true
    _min?: T_guestsMinAggregateInputType
    _max?: T_guestsMaxAggregateInputType
  }


  export type T_guestsGroupByOutputType = {
    guest_account: string
    _count: T_guestsCountAggregateOutputType | null
    _min: T_guestsMinAggregateOutputType | null
    _max: T_guestsMaxAggregateOutputType | null
  }

  type GetT_guestsGroupByPayload<T extends T_guestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<T_guestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_guestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_guestsGroupByOutputType[P]>
            : GetScalarType<T[P], T_guestsGroupByOutputType[P]>
        }
      >
    >


  export type T_guestsSelect = {
    guest_account?: boolean
  }


  export type T_guestsGetPayload<S extends boolean | null | undefined | T_guestsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? T_guests :
    S extends undefined ? never :
    S extends { include: any } & (T_guestsArgs | T_guestsFindManyArgs)
    ? T_guests 
    : S extends { select: any } & (T_guestsArgs | T_guestsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof T_guests ? T_guests[P] : never
  } 
      : T_guests


  type T_guestsCountArgs = 
    Omit<T_guestsFindManyArgs, 'select' | 'include'> & {
      select?: T_guestsCountAggregateInputType | true
    }

  export interface T_guestsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one T_guests that matches the filter.
     * @param {T_guestsFindUniqueArgs} args - Arguments to find a T_guests
     * @example
     * // Get one T_guests
     * const t_guests = await prisma.t_guests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_guestsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, T_guestsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'T_guests'> extends True ? Prisma__T_guestsClient<T_guestsGetPayload<T>> : Prisma__T_guestsClient<T_guestsGetPayload<T> | null, null>

    /**
     * Find one T_guests that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {T_guestsFindUniqueOrThrowArgs} args - Arguments to find a T_guests
     * @example
     * // Get one T_guests
     * const t_guests = await prisma.t_guests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_guestsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, T_guestsFindUniqueOrThrowArgs>
    ): Prisma__T_guestsClient<T_guestsGetPayload<T>>

    /**
     * Find the first T_guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_guestsFindFirstArgs} args - Arguments to find a T_guests
     * @example
     * // Get one T_guests
     * const t_guests = await prisma.t_guests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_guestsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, T_guestsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'T_guests'> extends True ? Prisma__T_guestsClient<T_guestsGetPayload<T>> : Prisma__T_guestsClient<T_guestsGetPayload<T> | null, null>

    /**
     * Find the first T_guests that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_guestsFindFirstOrThrowArgs} args - Arguments to find a T_guests
     * @example
     * // Get one T_guests
     * const t_guests = await prisma.t_guests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_guestsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, T_guestsFindFirstOrThrowArgs>
    ): Prisma__T_guestsClient<T_guestsGetPayload<T>>

    /**
     * Find zero or more T_guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_guestsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_guests
     * const t_guests = await prisma.t_guests.findMany()
     * 
     * // Get first 10 T_guests
     * const t_guests = await prisma.t_guests.findMany({ take: 10 })
     * 
     * // Only select the `guest_account`
     * const t_guestsWithGuest_accountOnly = await prisma.t_guests.findMany({ select: { guest_account: true } })
     * 
    **/
    findMany<T extends T_guestsFindManyArgs>(
      args?: SelectSubset<T, T_guestsFindManyArgs>
    ): Prisma.PrismaPromise<Array<T_guestsGetPayload<T>>>

    /**
     * Create a T_guests.
     * @param {T_guestsCreateArgs} args - Arguments to create a T_guests.
     * @example
     * // Create one T_guests
     * const T_guests = await prisma.t_guests.create({
     *   data: {
     *     // ... data to create a T_guests
     *   }
     * })
     * 
    **/
    create<T extends T_guestsCreateArgs>(
      args: SelectSubset<T, T_guestsCreateArgs>
    ): Prisma__T_guestsClient<T_guestsGetPayload<T>>

    /**
     * Create many T_guests.
     *     @param {T_guestsCreateManyArgs} args - Arguments to create many T_guests.
     *     @example
     *     // Create many T_guests
     *     const t_guests = await prisma.t_guests.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends T_guestsCreateManyArgs>(
      args?: SelectSubset<T, T_guestsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_guests.
     * @param {T_guestsDeleteArgs} args - Arguments to delete one T_guests.
     * @example
     * // Delete one T_guests
     * const T_guests = await prisma.t_guests.delete({
     *   where: {
     *     // ... filter to delete one T_guests
     *   }
     * })
     * 
    **/
    delete<T extends T_guestsDeleteArgs>(
      args: SelectSubset<T, T_guestsDeleteArgs>
    ): Prisma__T_guestsClient<T_guestsGetPayload<T>>

    /**
     * Update one T_guests.
     * @param {T_guestsUpdateArgs} args - Arguments to update one T_guests.
     * @example
     * // Update one T_guests
     * const t_guests = await prisma.t_guests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_guestsUpdateArgs>(
      args: SelectSubset<T, T_guestsUpdateArgs>
    ): Prisma__T_guestsClient<T_guestsGetPayload<T>>

    /**
     * Delete zero or more T_guests.
     * @param {T_guestsDeleteManyArgs} args - Arguments to filter T_guests to delete.
     * @example
     * // Delete a few T_guests
     * const { count } = await prisma.t_guests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_guestsDeleteManyArgs>(
      args?: SelectSubset<T, T_guestsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_guestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_guests
     * const t_guests = await prisma.t_guests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_guestsUpdateManyArgs>(
      args: SelectSubset<T, T_guestsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_guests.
     * @param {T_guestsUpsertArgs} args - Arguments to update or create a T_guests.
     * @example
     * // Update or create a T_guests
     * const t_guests = await prisma.t_guests.upsert({
     *   create: {
     *     // ... data to create a T_guests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_guests we want to update
     *   }
     * })
    **/
    upsert<T extends T_guestsUpsertArgs>(
      args: SelectSubset<T, T_guestsUpsertArgs>
    ): Prisma__T_guestsClient<T_guestsGetPayload<T>>

    /**
     * Count the number of T_guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_guestsCountArgs} args - Arguments to filter T_guests to count.
     * @example
     * // Count the number of T_guests
     * const count = await prisma.t_guests.count({
     *   where: {
     *     // ... the filter for the T_guests we want to count
     *   }
     * })
    **/
    count<T extends T_guestsCountArgs>(
      args?: Subset<T, T_guestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_guestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_guestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_guestsAggregateArgs>(args: Subset<T, T_guestsAggregateArgs>): Prisma.PrismaPromise<GetT_guestsAggregateType<T>>

    /**
     * Group by T_guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_guestsGroupByArgs} args - Group by arguments.
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
      T extends T_guestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_guestsGroupByArgs['orderBy'] }
        : { orderBy?: T_guestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_guestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_guestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for T_guests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__T_guestsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * T_guests base type for findUnique actions
   */
  export type T_guestsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the T_guests
     */
    select?: T_guestsSelect | null
    /**
     * Filter, which T_guests to fetch.
     */
    where: T_guestsWhereUniqueInput
  }

  /**
   * T_guests findUnique
   */
  export interface T_guestsFindUniqueArgs extends T_guestsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_guests findUniqueOrThrow
   */
  export type T_guestsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_guests
     */
    select?: T_guestsSelect | null
    /**
     * Filter, which T_guests to fetch.
     */
    where: T_guestsWhereUniqueInput
  }


  /**
   * T_guests base type for findFirst actions
   */
  export type T_guestsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the T_guests
     */
    select?: T_guestsSelect | null
    /**
     * Filter, which T_guests to fetch.
     */
    where?: T_guestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_guests to fetch.
     */
    orderBy?: Enumerable<T_guestsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_guests.
     */
    cursor?: T_guestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_guests.
     */
    distinct?: Enumerable<T_guestsScalarFieldEnum>
  }

  /**
   * T_guests findFirst
   */
  export interface T_guestsFindFirstArgs extends T_guestsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_guests findFirstOrThrow
   */
  export type T_guestsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_guests
     */
    select?: T_guestsSelect | null
    /**
     * Filter, which T_guests to fetch.
     */
    where?: T_guestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_guests to fetch.
     */
    orderBy?: Enumerable<T_guestsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_guests.
     */
    cursor?: T_guestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_guests.
     */
    distinct?: Enumerable<T_guestsScalarFieldEnum>
  }


  /**
   * T_guests findMany
   */
  export type T_guestsFindManyArgs = {
    /**
     * Select specific fields to fetch from the T_guests
     */
    select?: T_guestsSelect | null
    /**
     * Filter, which T_guests to fetch.
     */
    where?: T_guestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_guests to fetch.
     */
    orderBy?: Enumerable<T_guestsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_guests.
     */
    cursor?: T_guestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_guests.
     */
    skip?: number
    distinct?: Enumerable<T_guestsScalarFieldEnum>
  }


  /**
   * T_guests create
   */
  export type T_guestsCreateArgs = {
    /**
     * Select specific fields to fetch from the T_guests
     */
    select?: T_guestsSelect | null
    /**
     * The data needed to create a T_guests.
     */
    data: XOR<T_guestsCreateInput, T_guestsUncheckedCreateInput>
  }


  /**
   * T_guests createMany
   */
  export type T_guestsCreateManyArgs = {
    /**
     * The data used to create many T_guests.
     */
    data: Enumerable<T_guestsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * T_guests update
   */
  export type T_guestsUpdateArgs = {
    /**
     * Select specific fields to fetch from the T_guests
     */
    select?: T_guestsSelect | null
    /**
     * The data needed to update a T_guests.
     */
    data: XOR<T_guestsUpdateInput, T_guestsUncheckedUpdateInput>
    /**
     * Choose, which T_guests to update.
     */
    where: T_guestsWhereUniqueInput
  }


  /**
   * T_guests updateMany
   */
  export type T_guestsUpdateManyArgs = {
    /**
     * The data used to update T_guests.
     */
    data: XOR<T_guestsUpdateManyMutationInput, T_guestsUncheckedUpdateManyInput>
    /**
     * Filter which T_guests to update
     */
    where?: T_guestsWhereInput
  }


  /**
   * T_guests upsert
   */
  export type T_guestsUpsertArgs = {
    /**
     * Select specific fields to fetch from the T_guests
     */
    select?: T_guestsSelect | null
    /**
     * The filter to search for the T_guests to update in case it exists.
     */
    where: T_guestsWhereUniqueInput
    /**
     * In case the T_guests found by the `where` argument doesn't exist, create a new T_guests with this data.
     */
    create: XOR<T_guestsCreateInput, T_guestsUncheckedCreateInput>
    /**
     * In case the T_guests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_guestsUpdateInput, T_guestsUncheckedUpdateInput>
  }


  /**
   * T_guests delete
   */
  export type T_guestsDeleteArgs = {
    /**
     * Select specific fields to fetch from the T_guests
     */
    select?: T_guestsSelect | null
    /**
     * Filter which T_guests to delete.
     */
    where: T_guestsWhereUniqueInput
  }


  /**
   * T_guests deleteMany
   */
  export type T_guestsDeleteManyArgs = {
    /**
     * Filter which T_guests to delete
     */
    where?: T_guestsWhereInput
  }


  /**
   * T_guests without action
   */
  export type T_guestsArgs = {
    /**
     * Select specific fields to fetch from the T_guests
     */
    select?: T_guestsSelect | null
  }



  /**
   * Model T_message
   */


  export type AggregateT_message = {
    _count: T_messageCountAggregateOutputType | null
    _min: T_messageMinAggregateOutputType | null
    _max: T_messageMaxAggregateOutputType | null
  }

  export type T_messageMinAggregateOutputType = {
    type: string | null
    msg: string | null
    version: string | null
  }

  export type T_messageMaxAggregateOutputType = {
    type: string | null
    msg: string | null
    version: string | null
  }

  export type T_messageCountAggregateOutputType = {
    type: number
    msg: number
    version: number
    _all: number
  }


  export type T_messageMinAggregateInputType = {
    type?: true
    msg?: true
    version?: true
  }

  export type T_messageMaxAggregateInputType = {
    type?: true
    msg?: true
    version?: true
  }

  export type T_messageCountAggregateInputType = {
    type?: true
    msg?: true
    version?: true
    _all?: true
  }

  export type T_messageAggregateArgs = {
    /**
     * Filter which T_message to aggregate.
     */
    where?: T_messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_messages to fetch.
     */
    orderBy?: Enumerable<T_messageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_messages
    **/
    _count?: true | T_messageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_messageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_messageMaxAggregateInputType
  }

  export type GetT_messageAggregateType<T extends T_messageAggregateArgs> = {
        [P in keyof T & keyof AggregateT_message]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_message[P]>
      : GetScalarType<T[P], AggregateT_message[P]>
  }




  export type T_messageGroupByArgs = {
    where?: T_messageWhereInput
    orderBy?: Enumerable<T_messageOrderByWithAggregationInput>
    by: T_messageScalarFieldEnum[]
    having?: T_messageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_messageCountAggregateInputType | true
    _min?: T_messageMinAggregateInputType
    _max?: T_messageMaxAggregateInputType
  }


  export type T_messageGroupByOutputType = {
    type: string
    msg: string
    version: string
    _count: T_messageCountAggregateOutputType | null
    _min: T_messageMinAggregateOutputType | null
    _max: T_messageMaxAggregateOutputType | null
  }

  type GetT_messageGroupByPayload<T extends T_messageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<T_messageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_messageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_messageGroupByOutputType[P]>
            : GetScalarType<T[P], T_messageGroupByOutputType[P]>
        }
      >
    >


  export type T_messageSelect = {
    type?: boolean
    msg?: boolean
    version?: boolean
  }


  export type T_messageGetPayload<S extends boolean | null | undefined | T_messageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? T_message :
    S extends undefined ? never :
    S extends { include: any } & (T_messageArgs | T_messageFindManyArgs)
    ? T_message 
    : S extends { select: any } & (T_messageArgs | T_messageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof T_message ? T_message[P] : never
  } 
      : T_message


  type T_messageCountArgs = 
    Omit<T_messageFindManyArgs, 'select' | 'include'> & {
      select?: T_messageCountAggregateInputType | true
    }

  export interface T_messageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one T_message that matches the filter.
     * @param {T_messageFindUniqueArgs} args - Arguments to find a T_message
     * @example
     * // Get one T_message
     * const t_message = await prisma.t_message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_messageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, T_messageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'T_message'> extends True ? Prisma__T_messageClient<T_messageGetPayload<T>> : Prisma__T_messageClient<T_messageGetPayload<T> | null, null>

    /**
     * Find one T_message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {T_messageFindUniqueOrThrowArgs} args - Arguments to find a T_message
     * @example
     * // Get one T_message
     * const t_message = await prisma.t_message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_messageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, T_messageFindUniqueOrThrowArgs>
    ): Prisma__T_messageClient<T_messageGetPayload<T>>

    /**
     * Find the first T_message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_messageFindFirstArgs} args - Arguments to find a T_message
     * @example
     * // Get one T_message
     * const t_message = await prisma.t_message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_messageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, T_messageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'T_message'> extends True ? Prisma__T_messageClient<T_messageGetPayload<T>> : Prisma__T_messageClient<T_messageGetPayload<T> | null, null>

    /**
     * Find the first T_message that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_messageFindFirstOrThrowArgs} args - Arguments to find a T_message
     * @example
     * // Get one T_message
     * const t_message = await prisma.t_message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_messageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, T_messageFindFirstOrThrowArgs>
    ): Prisma__T_messageClient<T_messageGetPayload<T>>

    /**
     * Find zero or more T_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_messageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_messages
     * const t_messages = await prisma.t_message.findMany()
     * 
     * // Get first 10 T_messages
     * const t_messages = await prisma.t_message.findMany({ take: 10 })
     * 
     * // Only select the `type`
     * const t_messageWithTypeOnly = await prisma.t_message.findMany({ select: { type: true } })
     * 
    **/
    findMany<T extends T_messageFindManyArgs>(
      args?: SelectSubset<T, T_messageFindManyArgs>
    ): Prisma.PrismaPromise<Array<T_messageGetPayload<T>>>

    /**
     * Create a T_message.
     * @param {T_messageCreateArgs} args - Arguments to create a T_message.
     * @example
     * // Create one T_message
     * const T_message = await prisma.t_message.create({
     *   data: {
     *     // ... data to create a T_message
     *   }
     * })
     * 
    **/
    create<T extends T_messageCreateArgs>(
      args: SelectSubset<T, T_messageCreateArgs>
    ): Prisma__T_messageClient<T_messageGetPayload<T>>

    /**
     * Create many T_messages.
     *     @param {T_messageCreateManyArgs} args - Arguments to create many T_messages.
     *     @example
     *     // Create many T_messages
     *     const t_message = await prisma.t_message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends T_messageCreateManyArgs>(
      args?: SelectSubset<T, T_messageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_message.
     * @param {T_messageDeleteArgs} args - Arguments to delete one T_message.
     * @example
     * // Delete one T_message
     * const T_message = await prisma.t_message.delete({
     *   where: {
     *     // ... filter to delete one T_message
     *   }
     * })
     * 
    **/
    delete<T extends T_messageDeleteArgs>(
      args: SelectSubset<T, T_messageDeleteArgs>
    ): Prisma__T_messageClient<T_messageGetPayload<T>>

    /**
     * Update one T_message.
     * @param {T_messageUpdateArgs} args - Arguments to update one T_message.
     * @example
     * // Update one T_message
     * const t_message = await prisma.t_message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_messageUpdateArgs>(
      args: SelectSubset<T, T_messageUpdateArgs>
    ): Prisma__T_messageClient<T_messageGetPayload<T>>

    /**
     * Delete zero or more T_messages.
     * @param {T_messageDeleteManyArgs} args - Arguments to filter T_messages to delete.
     * @example
     * // Delete a few T_messages
     * const { count } = await prisma.t_message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_messageDeleteManyArgs>(
      args?: SelectSubset<T, T_messageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_messageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_messages
     * const t_message = await prisma.t_message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_messageUpdateManyArgs>(
      args: SelectSubset<T, T_messageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_message.
     * @param {T_messageUpsertArgs} args - Arguments to update or create a T_message.
     * @example
     * // Update or create a T_message
     * const t_message = await prisma.t_message.upsert({
     *   create: {
     *     // ... data to create a T_message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_message we want to update
     *   }
     * })
    **/
    upsert<T extends T_messageUpsertArgs>(
      args: SelectSubset<T, T_messageUpsertArgs>
    ): Prisma__T_messageClient<T_messageGetPayload<T>>

    /**
     * Count the number of T_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_messageCountArgs} args - Arguments to filter T_messages to count.
     * @example
     * // Count the number of T_messages
     * const count = await prisma.t_message.count({
     *   where: {
     *     // ... the filter for the T_messages we want to count
     *   }
     * })
    **/
    count<T extends T_messageCountArgs>(
      args?: Subset<T, T_messageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_messageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_messageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_messageAggregateArgs>(args: Subset<T, T_messageAggregateArgs>): Prisma.PrismaPromise<GetT_messageAggregateType<T>>

    /**
     * Group by T_message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_messageGroupByArgs} args - Group by arguments.
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
      T extends T_messageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_messageGroupByArgs['orderBy'] }
        : { orderBy?: T_messageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_messageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_messageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for T_message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__T_messageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * T_message base type for findUnique actions
   */
  export type T_messageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the T_message
     */
    select?: T_messageSelect | null
    /**
     * Filter, which T_message to fetch.
     */
    where: T_messageWhereUniqueInput
  }

  /**
   * T_message findUnique
   */
  export interface T_messageFindUniqueArgs extends T_messageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_message findUniqueOrThrow
   */
  export type T_messageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_message
     */
    select?: T_messageSelect | null
    /**
     * Filter, which T_message to fetch.
     */
    where: T_messageWhereUniqueInput
  }


  /**
   * T_message base type for findFirst actions
   */
  export type T_messageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the T_message
     */
    select?: T_messageSelect | null
    /**
     * Filter, which T_message to fetch.
     */
    where?: T_messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_messages to fetch.
     */
    orderBy?: Enumerable<T_messageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_messages.
     */
    cursor?: T_messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_messages.
     */
    distinct?: Enumerable<T_messageScalarFieldEnum>
  }

  /**
   * T_message findFirst
   */
  export interface T_messageFindFirstArgs extends T_messageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_message findFirstOrThrow
   */
  export type T_messageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_message
     */
    select?: T_messageSelect | null
    /**
     * Filter, which T_message to fetch.
     */
    where?: T_messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_messages to fetch.
     */
    orderBy?: Enumerable<T_messageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_messages.
     */
    cursor?: T_messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_messages.
     */
    distinct?: Enumerable<T_messageScalarFieldEnum>
  }


  /**
   * T_message findMany
   */
  export type T_messageFindManyArgs = {
    /**
     * Select specific fields to fetch from the T_message
     */
    select?: T_messageSelect | null
    /**
     * Filter, which T_messages to fetch.
     */
    where?: T_messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_messages to fetch.
     */
    orderBy?: Enumerable<T_messageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_messages.
     */
    cursor?: T_messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_messages.
     */
    skip?: number
    distinct?: Enumerable<T_messageScalarFieldEnum>
  }


  /**
   * T_message create
   */
  export type T_messageCreateArgs = {
    /**
     * Select specific fields to fetch from the T_message
     */
    select?: T_messageSelect | null
    /**
     * The data needed to create a T_message.
     */
    data: XOR<T_messageCreateInput, T_messageUncheckedCreateInput>
  }


  /**
   * T_message createMany
   */
  export type T_messageCreateManyArgs = {
    /**
     * The data used to create many T_messages.
     */
    data: Enumerable<T_messageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * T_message update
   */
  export type T_messageUpdateArgs = {
    /**
     * Select specific fields to fetch from the T_message
     */
    select?: T_messageSelect | null
    /**
     * The data needed to update a T_message.
     */
    data: XOR<T_messageUpdateInput, T_messageUncheckedUpdateInput>
    /**
     * Choose, which T_message to update.
     */
    where: T_messageWhereUniqueInput
  }


  /**
   * T_message updateMany
   */
  export type T_messageUpdateManyArgs = {
    /**
     * The data used to update T_messages.
     */
    data: XOR<T_messageUpdateManyMutationInput, T_messageUncheckedUpdateManyInput>
    /**
     * Filter which T_messages to update
     */
    where?: T_messageWhereInput
  }


  /**
   * T_message upsert
   */
  export type T_messageUpsertArgs = {
    /**
     * Select specific fields to fetch from the T_message
     */
    select?: T_messageSelect | null
    /**
     * The filter to search for the T_message to update in case it exists.
     */
    where: T_messageWhereUniqueInput
    /**
     * In case the T_message found by the `where` argument doesn't exist, create a new T_message with this data.
     */
    create: XOR<T_messageCreateInput, T_messageUncheckedCreateInput>
    /**
     * In case the T_message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_messageUpdateInput, T_messageUncheckedUpdateInput>
  }


  /**
   * T_message delete
   */
  export type T_messageDeleteArgs = {
    /**
     * Select specific fields to fetch from the T_message
     */
    select?: T_messageSelect | null
    /**
     * Filter which T_message to delete.
     */
    where: T_messageWhereUniqueInput
  }


  /**
   * T_message deleteMany
   */
  export type T_messageDeleteManyArgs = {
    /**
     * Filter which T_messages to delete
     */
    where?: T_messageWhereInput
  }


  /**
   * T_message without action
   */
  export type T_messageArgs = {
    /**
     * Select specific fields to fetch from the T_message
     */
    select?: T_messageSelect | null
  }



  /**
   * Model T_property
   */


  export type AggregateT_property = {
    _count: T_propertyCountAggregateOutputType | null
    _avg: T_propertyAvgAggregateOutputType | null
    _sum: T_propertySumAggregateOutputType | null
    _min: T_propertyMinAggregateOutputType | null
    _max: T_propertyMaxAggregateOutputType | null
  }

  export type T_propertyAvgAggregateOutputType = {
    propId: number | null
    userid: number | null
    ice: number | null
  }

  export type T_propertySumAggregateOutputType = {
    propId: number | null
    userid: number | null
    ice: number | null
  }

  export type T_propertyMinAggregateOutputType = {
    propId: number | null
    userid: number | null
    ice: number | null
  }

  export type T_propertyMaxAggregateOutputType = {
    propId: number | null
    userid: number | null
    ice: number | null
  }

  export type T_propertyCountAggregateOutputType = {
    propId: number
    userid: number
    ice: number
    _all: number
  }


  export type T_propertyAvgAggregateInputType = {
    propId?: true
    userid?: true
    ice?: true
  }

  export type T_propertySumAggregateInputType = {
    propId?: true
    userid?: true
    ice?: true
  }

  export type T_propertyMinAggregateInputType = {
    propId?: true
    userid?: true
    ice?: true
  }

  export type T_propertyMaxAggregateInputType = {
    propId?: true
    userid?: true
    ice?: true
  }

  export type T_propertyCountAggregateInputType = {
    propId?: true
    userid?: true
    ice?: true
    _all?: true
  }

  export type T_propertyAggregateArgs = {
    /**
     * Filter which T_property to aggregate.
     */
    where?: T_propertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_properties to fetch.
     */
    orderBy?: Enumerable<T_propertyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_propertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_properties
    **/
    _count?: true | T_propertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_propertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_propertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_propertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_propertyMaxAggregateInputType
  }

  export type GetT_propertyAggregateType<T extends T_propertyAggregateArgs> = {
        [P in keyof T & keyof AggregateT_property]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_property[P]>
      : GetScalarType<T[P], AggregateT_property[P]>
  }




  export type T_propertyGroupByArgs = {
    where?: T_propertyWhereInput
    orderBy?: Enumerable<T_propertyOrderByWithAggregationInput>
    by: T_propertyScalarFieldEnum[]
    having?: T_propertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_propertyCountAggregateInputType | true
    _avg?: T_propertyAvgAggregateInputType
    _sum?: T_propertySumAggregateInputType
    _min?: T_propertyMinAggregateInputType
    _max?: T_propertyMaxAggregateInputType
  }


  export type T_propertyGroupByOutputType = {
    propId: number
    userid: number
    ice: number
    _count: T_propertyCountAggregateOutputType | null
    _avg: T_propertyAvgAggregateOutputType | null
    _sum: T_propertySumAggregateOutputType | null
    _min: T_propertyMinAggregateOutputType | null
    _max: T_propertyMaxAggregateOutputType | null
  }

  type GetT_propertyGroupByPayload<T extends T_propertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<T_propertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_propertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_propertyGroupByOutputType[P]>
            : GetScalarType<T[P], T_propertyGroupByOutputType[P]>
        }
      >
    >


  export type T_propertySelect = {
    propId?: boolean
    userid?: boolean
    ice?: boolean
  }


  export type T_propertyGetPayload<S extends boolean | null | undefined | T_propertyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? T_property :
    S extends undefined ? never :
    S extends { include: any } & (T_propertyArgs | T_propertyFindManyArgs)
    ? T_property 
    : S extends { select: any } & (T_propertyArgs | T_propertyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof T_property ? T_property[P] : never
  } 
      : T_property


  type T_propertyCountArgs = 
    Omit<T_propertyFindManyArgs, 'select' | 'include'> & {
      select?: T_propertyCountAggregateInputType | true
    }

  export interface T_propertyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one T_property that matches the filter.
     * @param {T_propertyFindUniqueArgs} args - Arguments to find a T_property
     * @example
     * // Get one T_property
     * const t_property = await prisma.t_property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_propertyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, T_propertyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'T_property'> extends True ? Prisma__T_propertyClient<T_propertyGetPayload<T>> : Prisma__T_propertyClient<T_propertyGetPayload<T> | null, null>

    /**
     * Find one T_property that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {T_propertyFindUniqueOrThrowArgs} args - Arguments to find a T_property
     * @example
     * // Get one T_property
     * const t_property = await prisma.t_property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_propertyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, T_propertyFindUniqueOrThrowArgs>
    ): Prisma__T_propertyClient<T_propertyGetPayload<T>>

    /**
     * Find the first T_property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_propertyFindFirstArgs} args - Arguments to find a T_property
     * @example
     * // Get one T_property
     * const t_property = await prisma.t_property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_propertyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, T_propertyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'T_property'> extends True ? Prisma__T_propertyClient<T_propertyGetPayload<T>> : Prisma__T_propertyClient<T_propertyGetPayload<T> | null, null>

    /**
     * Find the first T_property that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_propertyFindFirstOrThrowArgs} args - Arguments to find a T_property
     * @example
     * // Get one T_property
     * const t_property = await prisma.t_property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_propertyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, T_propertyFindFirstOrThrowArgs>
    ): Prisma__T_propertyClient<T_propertyGetPayload<T>>

    /**
     * Find zero or more T_properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_propertyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_properties
     * const t_properties = await prisma.t_property.findMany()
     * 
     * // Get first 10 T_properties
     * const t_properties = await prisma.t_property.findMany({ take: 10 })
     * 
     * // Only select the `propId`
     * const t_propertyWithPropIdOnly = await prisma.t_property.findMany({ select: { propId: true } })
     * 
    **/
    findMany<T extends T_propertyFindManyArgs>(
      args?: SelectSubset<T, T_propertyFindManyArgs>
    ): Prisma.PrismaPromise<Array<T_propertyGetPayload<T>>>

    /**
     * Create a T_property.
     * @param {T_propertyCreateArgs} args - Arguments to create a T_property.
     * @example
     * // Create one T_property
     * const T_property = await prisma.t_property.create({
     *   data: {
     *     // ... data to create a T_property
     *   }
     * })
     * 
    **/
    create<T extends T_propertyCreateArgs>(
      args: SelectSubset<T, T_propertyCreateArgs>
    ): Prisma__T_propertyClient<T_propertyGetPayload<T>>

    /**
     * Create many T_properties.
     *     @param {T_propertyCreateManyArgs} args - Arguments to create many T_properties.
     *     @example
     *     // Create many T_properties
     *     const t_property = await prisma.t_property.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends T_propertyCreateManyArgs>(
      args?: SelectSubset<T, T_propertyCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_property.
     * @param {T_propertyDeleteArgs} args - Arguments to delete one T_property.
     * @example
     * // Delete one T_property
     * const T_property = await prisma.t_property.delete({
     *   where: {
     *     // ... filter to delete one T_property
     *   }
     * })
     * 
    **/
    delete<T extends T_propertyDeleteArgs>(
      args: SelectSubset<T, T_propertyDeleteArgs>
    ): Prisma__T_propertyClient<T_propertyGetPayload<T>>

    /**
     * Update one T_property.
     * @param {T_propertyUpdateArgs} args - Arguments to update one T_property.
     * @example
     * // Update one T_property
     * const t_property = await prisma.t_property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_propertyUpdateArgs>(
      args: SelectSubset<T, T_propertyUpdateArgs>
    ): Prisma__T_propertyClient<T_propertyGetPayload<T>>

    /**
     * Delete zero or more T_properties.
     * @param {T_propertyDeleteManyArgs} args - Arguments to filter T_properties to delete.
     * @example
     * // Delete a few T_properties
     * const { count } = await prisma.t_property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_propertyDeleteManyArgs>(
      args?: SelectSubset<T, T_propertyDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_propertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_properties
     * const t_property = await prisma.t_property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_propertyUpdateManyArgs>(
      args: SelectSubset<T, T_propertyUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_property.
     * @param {T_propertyUpsertArgs} args - Arguments to update or create a T_property.
     * @example
     * // Update or create a T_property
     * const t_property = await prisma.t_property.upsert({
     *   create: {
     *     // ... data to create a T_property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_property we want to update
     *   }
     * })
    **/
    upsert<T extends T_propertyUpsertArgs>(
      args: SelectSubset<T, T_propertyUpsertArgs>
    ): Prisma__T_propertyClient<T_propertyGetPayload<T>>

    /**
     * Count the number of T_properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_propertyCountArgs} args - Arguments to filter T_properties to count.
     * @example
     * // Count the number of T_properties
     * const count = await prisma.t_property.count({
     *   where: {
     *     // ... the filter for the T_properties we want to count
     *   }
     * })
    **/
    count<T extends T_propertyCountArgs>(
      args?: Subset<T, T_propertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_propertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_propertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_propertyAggregateArgs>(args: Subset<T, T_propertyAggregateArgs>): Prisma.PrismaPromise<GetT_propertyAggregateType<T>>

    /**
     * Group by T_property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_propertyGroupByArgs} args - Group by arguments.
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
      T extends T_propertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_propertyGroupByArgs['orderBy'] }
        : { orderBy?: T_propertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_propertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_propertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for T_property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__T_propertyClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * T_property base type for findUnique actions
   */
  export type T_propertyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the T_property
     */
    select?: T_propertySelect | null
    /**
     * Filter, which T_property to fetch.
     */
    where: T_propertyWhereUniqueInput
  }

  /**
   * T_property findUnique
   */
  export interface T_propertyFindUniqueArgs extends T_propertyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_property findUniqueOrThrow
   */
  export type T_propertyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_property
     */
    select?: T_propertySelect | null
    /**
     * Filter, which T_property to fetch.
     */
    where: T_propertyWhereUniqueInput
  }


  /**
   * T_property base type for findFirst actions
   */
  export type T_propertyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the T_property
     */
    select?: T_propertySelect | null
    /**
     * Filter, which T_property to fetch.
     */
    where?: T_propertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_properties to fetch.
     */
    orderBy?: Enumerable<T_propertyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_properties.
     */
    cursor?: T_propertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_properties.
     */
    distinct?: Enumerable<T_propertyScalarFieldEnum>
  }

  /**
   * T_property findFirst
   */
  export interface T_propertyFindFirstArgs extends T_propertyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_property findFirstOrThrow
   */
  export type T_propertyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_property
     */
    select?: T_propertySelect | null
    /**
     * Filter, which T_property to fetch.
     */
    where?: T_propertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_properties to fetch.
     */
    orderBy?: Enumerable<T_propertyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_properties.
     */
    cursor?: T_propertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_properties.
     */
    distinct?: Enumerable<T_propertyScalarFieldEnum>
  }


  /**
   * T_property findMany
   */
  export type T_propertyFindManyArgs = {
    /**
     * Select specific fields to fetch from the T_property
     */
    select?: T_propertySelect | null
    /**
     * Filter, which T_properties to fetch.
     */
    where?: T_propertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_properties to fetch.
     */
    orderBy?: Enumerable<T_propertyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_properties.
     */
    cursor?: T_propertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_properties.
     */
    skip?: number
    distinct?: Enumerable<T_propertyScalarFieldEnum>
  }


  /**
   * T_property create
   */
  export type T_propertyCreateArgs = {
    /**
     * Select specific fields to fetch from the T_property
     */
    select?: T_propertySelect | null
    /**
     * The data needed to create a T_property.
     */
    data: XOR<T_propertyCreateInput, T_propertyUncheckedCreateInput>
  }


  /**
   * T_property createMany
   */
  export type T_propertyCreateManyArgs = {
    /**
     * The data used to create many T_properties.
     */
    data: Enumerable<T_propertyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * T_property update
   */
  export type T_propertyUpdateArgs = {
    /**
     * Select specific fields to fetch from the T_property
     */
    select?: T_propertySelect | null
    /**
     * The data needed to update a T_property.
     */
    data: XOR<T_propertyUpdateInput, T_propertyUncheckedUpdateInput>
    /**
     * Choose, which T_property to update.
     */
    where: T_propertyWhereUniqueInput
  }


  /**
   * T_property updateMany
   */
  export type T_propertyUpdateManyArgs = {
    /**
     * The data used to update T_properties.
     */
    data: XOR<T_propertyUpdateManyMutationInput, T_propertyUncheckedUpdateManyInput>
    /**
     * Filter which T_properties to update
     */
    where?: T_propertyWhereInput
  }


  /**
   * T_property upsert
   */
  export type T_propertyUpsertArgs = {
    /**
     * Select specific fields to fetch from the T_property
     */
    select?: T_propertySelect | null
    /**
     * The filter to search for the T_property to update in case it exists.
     */
    where: T_propertyWhereUniqueInput
    /**
     * In case the T_property found by the `where` argument doesn't exist, create a new T_property with this data.
     */
    create: XOR<T_propertyCreateInput, T_propertyUncheckedCreateInput>
    /**
     * In case the T_property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_propertyUpdateInput, T_propertyUncheckedUpdateInput>
  }


  /**
   * T_property delete
   */
  export type T_propertyDeleteArgs = {
    /**
     * Select specific fields to fetch from the T_property
     */
    select?: T_propertySelect | null
    /**
     * Filter which T_property to delete.
     */
    where: T_propertyWhereUniqueInput
  }


  /**
   * T_property deleteMany
   */
  export type T_propertyDeleteManyArgs = {
    /**
     * Filter which T_properties to delete
     */
    where?: T_propertyWhereInput
  }


  /**
   * T_property without action
   */
  export type T_propertyArgs = {
    /**
     * Select specific fields to fetch from the T_property
     */
    select?: T_propertySelect | null
  }



  /**
   * Model T_rooms
   */


  export type AggregateT_rooms = {
    _count: T_roomsCountAggregateOutputType | null
    _avg: T_roomsAvgAggregateOutputType | null
    _sum: T_roomsSumAggregateOutputType | null
    _min: T_roomsMinAggregateOutputType | null
    _max: T_roomsMaxAggregateOutputType | null
  }

  export type T_roomsAvgAggregateOutputType = {
    create_time: number | null
    num_of_turns: number | null
    next_button: number | null
    user_id0: number | null
    user_score0: number | null
    user_id1: number | null
    user_score1: number | null
    user_id2: number | null
    user_score2: number | null
    user_id3: number | null
    user_score3: number | null
    port: number | null
    baseScore: number | null
  }

  export type T_roomsSumAggregateOutputType = {
    create_time: number | null
    num_of_turns: number | null
    next_button: number | null
    user_id0: number | null
    user_score0: number | null
    user_id1: number | null
    user_score1: number | null
    user_id2: number | null
    user_score2: number | null
    user_id3: number | null
    user_score3: number | null
    port: number | null
    baseScore: number | null
  }

  export type T_roomsMinAggregateOutputType = {
    uuid: string | null
    id: string | null
    base_info: string | null
    create_time: number | null
    num_of_turns: number | null
    next_button: number | null
    user_id0: number | null
    user_icon0: string | null
    user_name0: string | null
    user_score0: number | null
    user_id1: number | null
    user_icon1: string | null
    user_name1: string | null
    user_score1: number | null
    user_id2: number | null
    user_icon2: string | null
    user_name2: string | null
    user_score2: number | null
    user_id3: number | null
    user_icon3: string | null
    user_name3: string | null
    user_score3: number | null
    ip: string | null
    port: number | null
    baseScore: number | null
  }

  export type T_roomsMaxAggregateOutputType = {
    uuid: string | null
    id: string | null
    base_info: string | null
    create_time: number | null
    num_of_turns: number | null
    next_button: number | null
    user_id0: number | null
    user_icon0: string | null
    user_name0: string | null
    user_score0: number | null
    user_id1: number | null
    user_icon1: string | null
    user_name1: string | null
    user_score1: number | null
    user_id2: number | null
    user_icon2: string | null
    user_name2: string | null
    user_score2: number | null
    user_id3: number | null
    user_icon3: string | null
    user_name3: string | null
    user_score3: number | null
    ip: string | null
    port: number | null
    baseScore: number | null
  }

  export type T_roomsCountAggregateOutputType = {
    uuid: number
    id: number
    base_info: number
    create_time: number
    num_of_turns: number
    next_button: number
    user_id0: number
    user_icon0: number
    user_name0: number
    user_score0: number
    user_id1: number
    user_icon1: number
    user_name1: number
    user_score1: number
    user_id2: number
    user_icon2: number
    user_name2: number
    user_score2: number
    user_id3: number
    user_icon3: number
    user_name3: number
    user_score3: number
    ip: number
    port: number
    baseScore: number
    _all: number
  }


  export type T_roomsAvgAggregateInputType = {
    create_time?: true
    num_of_turns?: true
    next_button?: true
    user_id0?: true
    user_score0?: true
    user_id1?: true
    user_score1?: true
    user_id2?: true
    user_score2?: true
    user_id3?: true
    user_score3?: true
    port?: true
    baseScore?: true
  }

  export type T_roomsSumAggregateInputType = {
    create_time?: true
    num_of_turns?: true
    next_button?: true
    user_id0?: true
    user_score0?: true
    user_id1?: true
    user_score1?: true
    user_id2?: true
    user_score2?: true
    user_id3?: true
    user_score3?: true
    port?: true
    baseScore?: true
  }

  export type T_roomsMinAggregateInputType = {
    uuid?: true
    id?: true
    base_info?: true
    create_time?: true
    num_of_turns?: true
    next_button?: true
    user_id0?: true
    user_icon0?: true
    user_name0?: true
    user_score0?: true
    user_id1?: true
    user_icon1?: true
    user_name1?: true
    user_score1?: true
    user_id2?: true
    user_icon2?: true
    user_name2?: true
    user_score2?: true
    user_id3?: true
    user_icon3?: true
    user_name3?: true
    user_score3?: true
    ip?: true
    port?: true
    baseScore?: true
  }

  export type T_roomsMaxAggregateInputType = {
    uuid?: true
    id?: true
    base_info?: true
    create_time?: true
    num_of_turns?: true
    next_button?: true
    user_id0?: true
    user_icon0?: true
    user_name0?: true
    user_score0?: true
    user_id1?: true
    user_icon1?: true
    user_name1?: true
    user_score1?: true
    user_id2?: true
    user_icon2?: true
    user_name2?: true
    user_score2?: true
    user_id3?: true
    user_icon3?: true
    user_name3?: true
    user_score3?: true
    ip?: true
    port?: true
    baseScore?: true
  }

  export type T_roomsCountAggregateInputType = {
    uuid?: true
    id?: true
    base_info?: true
    create_time?: true
    num_of_turns?: true
    next_button?: true
    user_id0?: true
    user_icon0?: true
    user_name0?: true
    user_score0?: true
    user_id1?: true
    user_icon1?: true
    user_name1?: true
    user_score1?: true
    user_id2?: true
    user_icon2?: true
    user_name2?: true
    user_score2?: true
    user_id3?: true
    user_icon3?: true
    user_name3?: true
    user_score3?: true
    ip?: true
    port?: true
    baseScore?: true
    _all?: true
  }

  export type T_roomsAggregateArgs = {
    /**
     * Filter which T_rooms to aggregate.
     */
    where?: T_roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_rooms to fetch.
     */
    orderBy?: Enumerable<T_roomsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_rooms
    **/
    _count?: true | T_roomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_roomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_roomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_roomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_roomsMaxAggregateInputType
  }

  export type GetT_roomsAggregateType<T extends T_roomsAggregateArgs> = {
        [P in keyof T & keyof AggregateT_rooms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_rooms[P]>
      : GetScalarType<T[P], AggregateT_rooms[P]>
  }




  export type T_roomsGroupByArgs = {
    where?: T_roomsWhereInput
    orderBy?: Enumerable<T_roomsOrderByWithAggregationInput>
    by: T_roomsScalarFieldEnum[]
    having?: T_roomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_roomsCountAggregateInputType | true
    _avg?: T_roomsAvgAggregateInputType
    _sum?: T_roomsSumAggregateInputType
    _min?: T_roomsMinAggregateInputType
    _max?: T_roomsMaxAggregateInputType
  }


  export type T_roomsGroupByOutputType = {
    uuid: string
    id: string
    base_info: string
    create_time: number
    num_of_turns: number
    next_button: number
    user_id0: number
    user_icon0: string
    user_name0: string
    user_score0: number
    user_id1: number
    user_icon1: string
    user_name1: string
    user_score1: number
    user_id2: number
    user_icon2: string
    user_name2: string
    user_score2: number
    user_id3: number
    user_icon3: string
    user_name3: string
    user_score3: number
    ip: string
    port: number
    baseScore: number
    _count: T_roomsCountAggregateOutputType | null
    _avg: T_roomsAvgAggregateOutputType | null
    _sum: T_roomsSumAggregateOutputType | null
    _min: T_roomsMinAggregateOutputType | null
    _max: T_roomsMaxAggregateOutputType | null
  }

  type GetT_roomsGroupByPayload<T extends T_roomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<T_roomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_roomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_roomsGroupByOutputType[P]>
            : GetScalarType<T[P], T_roomsGroupByOutputType[P]>
        }
      >
    >


  export type T_roomsSelect = {
    uuid?: boolean
    id?: boolean
    base_info?: boolean
    create_time?: boolean
    num_of_turns?: boolean
    next_button?: boolean
    user_id0?: boolean
    user_icon0?: boolean
    user_name0?: boolean
    user_score0?: boolean
    user_id1?: boolean
    user_icon1?: boolean
    user_name1?: boolean
    user_score1?: boolean
    user_id2?: boolean
    user_icon2?: boolean
    user_name2?: boolean
    user_score2?: boolean
    user_id3?: boolean
    user_icon3?: boolean
    user_name3?: boolean
    user_score3?: boolean
    ip?: boolean
    port?: boolean
    baseScore?: boolean
  }


  export type T_roomsGetPayload<S extends boolean | null | undefined | T_roomsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? T_rooms :
    S extends undefined ? never :
    S extends { include: any } & (T_roomsArgs | T_roomsFindManyArgs)
    ? T_rooms 
    : S extends { select: any } & (T_roomsArgs | T_roomsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof T_rooms ? T_rooms[P] : never
  } 
      : T_rooms


  type T_roomsCountArgs = 
    Omit<T_roomsFindManyArgs, 'select' | 'include'> & {
      select?: T_roomsCountAggregateInputType | true
    }

  export interface T_roomsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one T_rooms that matches the filter.
     * @param {T_roomsFindUniqueArgs} args - Arguments to find a T_rooms
     * @example
     * // Get one T_rooms
     * const t_rooms = await prisma.t_rooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_roomsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, T_roomsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'T_rooms'> extends True ? Prisma__T_roomsClient<T_roomsGetPayload<T>> : Prisma__T_roomsClient<T_roomsGetPayload<T> | null, null>

    /**
     * Find one T_rooms that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {T_roomsFindUniqueOrThrowArgs} args - Arguments to find a T_rooms
     * @example
     * // Get one T_rooms
     * const t_rooms = await prisma.t_rooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_roomsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, T_roomsFindUniqueOrThrowArgs>
    ): Prisma__T_roomsClient<T_roomsGetPayload<T>>

    /**
     * Find the first T_rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_roomsFindFirstArgs} args - Arguments to find a T_rooms
     * @example
     * // Get one T_rooms
     * const t_rooms = await prisma.t_rooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_roomsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, T_roomsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'T_rooms'> extends True ? Prisma__T_roomsClient<T_roomsGetPayload<T>> : Prisma__T_roomsClient<T_roomsGetPayload<T> | null, null>

    /**
     * Find the first T_rooms that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_roomsFindFirstOrThrowArgs} args - Arguments to find a T_rooms
     * @example
     * // Get one T_rooms
     * const t_rooms = await prisma.t_rooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_roomsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, T_roomsFindFirstOrThrowArgs>
    ): Prisma__T_roomsClient<T_roomsGetPayload<T>>

    /**
     * Find zero or more T_rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_roomsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_rooms
     * const t_rooms = await prisma.t_rooms.findMany()
     * 
     * // Get first 10 T_rooms
     * const t_rooms = await prisma.t_rooms.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const t_roomsWithUuidOnly = await prisma.t_rooms.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends T_roomsFindManyArgs>(
      args?: SelectSubset<T, T_roomsFindManyArgs>
    ): Prisma.PrismaPromise<Array<T_roomsGetPayload<T>>>

    /**
     * Create a T_rooms.
     * @param {T_roomsCreateArgs} args - Arguments to create a T_rooms.
     * @example
     * // Create one T_rooms
     * const T_rooms = await prisma.t_rooms.create({
     *   data: {
     *     // ... data to create a T_rooms
     *   }
     * })
     * 
    **/
    create<T extends T_roomsCreateArgs>(
      args: SelectSubset<T, T_roomsCreateArgs>
    ): Prisma__T_roomsClient<T_roomsGetPayload<T>>

    /**
     * Create many T_rooms.
     *     @param {T_roomsCreateManyArgs} args - Arguments to create many T_rooms.
     *     @example
     *     // Create many T_rooms
     *     const t_rooms = await prisma.t_rooms.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends T_roomsCreateManyArgs>(
      args?: SelectSubset<T, T_roomsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_rooms.
     * @param {T_roomsDeleteArgs} args - Arguments to delete one T_rooms.
     * @example
     * // Delete one T_rooms
     * const T_rooms = await prisma.t_rooms.delete({
     *   where: {
     *     // ... filter to delete one T_rooms
     *   }
     * })
     * 
    **/
    delete<T extends T_roomsDeleteArgs>(
      args: SelectSubset<T, T_roomsDeleteArgs>
    ): Prisma__T_roomsClient<T_roomsGetPayload<T>>

    /**
     * Update one T_rooms.
     * @param {T_roomsUpdateArgs} args - Arguments to update one T_rooms.
     * @example
     * // Update one T_rooms
     * const t_rooms = await prisma.t_rooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_roomsUpdateArgs>(
      args: SelectSubset<T, T_roomsUpdateArgs>
    ): Prisma__T_roomsClient<T_roomsGetPayload<T>>

    /**
     * Delete zero or more T_rooms.
     * @param {T_roomsDeleteManyArgs} args - Arguments to filter T_rooms to delete.
     * @example
     * // Delete a few T_rooms
     * const { count } = await prisma.t_rooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_roomsDeleteManyArgs>(
      args?: SelectSubset<T, T_roomsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_roomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_rooms
     * const t_rooms = await prisma.t_rooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_roomsUpdateManyArgs>(
      args: SelectSubset<T, T_roomsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_rooms.
     * @param {T_roomsUpsertArgs} args - Arguments to update or create a T_rooms.
     * @example
     * // Update or create a T_rooms
     * const t_rooms = await prisma.t_rooms.upsert({
     *   create: {
     *     // ... data to create a T_rooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_rooms we want to update
     *   }
     * })
    **/
    upsert<T extends T_roomsUpsertArgs>(
      args: SelectSubset<T, T_roomsUpsertArgs>
    ): Prisma__T_roomsClient<T_roomsGetPayload<T>>

    /**
     * Count the number of T_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_roomsCountArgs} args - Arguments to filter T_rooms to count.
     * @example
     * // Count the number of T_rooms
     * const count = await prisma.t_rooms.count({
     *   where: {
     *     // ... the filter for the T_rooms we want to count
     *   }
     * })
    **/
    count<T extends T_roomsCountArgs>(
      args?: Subset<T, T_roomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_roomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_roomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_roomsAggregateArgs>(args: Subset<T, T_roomsAggregateArgs>): Prisma.PrismaPromise<GetT_roomsAggregateType<T>>

    /**
     * Group by T_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_roomsGroupByArgs} args - Group by arguments.
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
      T extends T_roomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_roomsGroupByArgs['orderBy'] }
        : { orderBy?: T_roomsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_roomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_roomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for T_rooms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__T_roomsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * T_rooms base type for findUnique actions
   */
  export type T_roomsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the T_rooms
     */
    select?: T_roomsSelect | null
    /**
     * Filter, which T_rooms to fetch.
     */
    where: T_roomsWhereUniqueInput
  }

  /**
   * T_rooms findUnique
   */
  export interface T_roomsFindUniqueArgs extends T_roomsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_rooms findUniqueOrThrow
   */
  export type T_roomsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_rooms
     */
    select?: T_roomsSelect | null
    /**
     * Filter, which T_rooms to fetch.
     */
    where: T_roomsWhereUniqueInput
  }


  /**
   * T_rooms base type for findFirst actions
   */
  export type T_roomsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the T_rooms
     */
    select?: T_roomsSelect | null
    /**
     * Filter, which T_rooms to fetch.
     */
    where?: T_roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_rooms to fetch.
     */
    orderBy?: Enumerable<T_roomsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_rooms.
     */
    cursor?: T_roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_rooms.
     */
    distinct?: Enumerable<T_roomsScalarFieldEnum>
  }

  /**
   * T_rooms findFirst
   */
  export interface T_roomsFindFirstArgs extends T_roomsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_rooms findFirstOrThrow
   */
  export type T_roomsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_rooms
     */
    select?: T_roomsSelect | null
    /**
     * Filter, which T_rooms to fetch.
     */
    where?: T_roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_rooms to fetch.
     */
    orderBy?: Enumerable<T_roomsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_rooms.
     */
    cursor?: T_roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_rooms.
     */
    distinct?: Enumerable<T_roomsScalarFieldEnum>
  }


  /**
   * T_rooms findMany
   */
  export type T_roomsFindManyArgs = {
    /**
     * Select specific fields to fetch from the T_rooms
     */
    select?: T_roomsSelect | null
    /**
     * Filter, which T_rooms to fetch.
     */
    where?: T_roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_rooms to fetch.
     */
    orderBy?: Enumerable<T_roomsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_rooms.
     */
    cursor?: T_roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_rooms.
     */
    skip?: number
    distinct?: Enumerable<T_roomsScalarFieldEnum>
  }


  /**
   * T_rooms create
   */
  export type T_roomsCreateArgs = {
    /**
     * Select specific fields to fetch from the T_rooms
     */
    select?: T_roomsSelect | null
    /**
     * The data needed to create a T_rooms.
     */
    data: XOR<T_roomsCreateInput, T_roomsUncheckedCreateInput>
  }


  /**
   * T_rooms createMany
   */
  export type T_roomsCreateManyArgs = {
    /**
     * The data used to create many T_rooms.
     */
    data: Enumerable<T_roomsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * T_rooms update
   */
  export type T_roomsUpdateArgs = {
    /**
     * Select specific fields to fetch from the T_rooms
     */
    select?: T_roomsSelect | null
    /**
     * The data needed to update a T_rooms.
     */
    data: XOR<T_roomsUpdateInput, T_roomsUncheckedUpdateInput>
    /**
     * Choose, which T_rooms to update.
     */
    where: T_roomsWhereUniqueInput
  }


  /**
   * T_rooms updateMany
   */
  export type T_roomsUpdateManyArgs = {
    /**
     * The data used to update T_rooms.
     */
    data: XOR<T_roomsUpdateManyMutationInput, T_roomsUncheckedUpdateManyInput>
    /**
     * Filter which T_rooms to update
     */
    where?: T_roomsWhereInput
  }


  /**
   * T_rooms upsert
   */
  export type T_roomsUpsertArgs = {
    /**
     * Select specific fields to fetch from the T_rooms
     */
    select?: T_roomsSelect | null
    /**
     * The filter to search for the T_rooms to update in case it exists.
     */
    where: T_roomsWhereUniqueInput
    /**
     * In case the T_rooms found by the `where` argument doesn't exist, create a new T_rooms with this data.
     */
    create: XOR<T_roomsCreateInput, T_roomsUncheckedCreateInput>
    /**
     * In case the T_rooms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_roomsUpdateInput, T_roomsUncheckedUpdateInput>
  }


  /**
   * T_rooms delete
   */
  export type T_roomsDeleteArgs = {
    /**
     * Select specific fields to fetch from the T_rooms
     */
    select?: T_roomsSelect | null
    /**
     * Filter which T_rooms to delete.
     */
    where: T_roomsWhereUniqueInput
  }


  /**
   * T_rooms deleteMany
   */
  export type T_roomsDeleteManyArgs = {
    /**
     * Filter which T_rooms to delete
     */
    where?: T_roomsWhereInput
  }


  /**
   * T_rooms without action
   */
  export type T_roomsArgs = {
    /**
     * Select specific fields to fetch from the T_rooms
     */
    select?: T_roomsSelect | null
  }



  /**
   * Model T_users
   */


  export type AggregateT_users = {
    _count: T_usersCountAggregateOutputType | null
    _avg: T_usersAvgAggregateOutputType | null
    _sum: T_usersSumAggregateOutputType | null
    _min: T_usersMinAggregateOutputType | null
    _max: T_usersMaxAggregateOutputType | null
  }

  export type T_usersAvgAggregateOutputType = {
    userid: number | null
    sex: number | null
    lv: number | null
    exp: number | null
    coins: number | null
    vip: number | null
    money: number | null
    gems: number | null
    power: number | null
    RenameCount: number | null
    ReHeadCount: number | null
    propId: number | null
  }

  export type T_usersSumAggregateOutputType = {
    userid: number | null
    sex: number | null
    lv: number | null
    exp: number | null
    coins: number | null
    vip: number | null
    money: number | null
    gems: number | null
    power: number | null
    RenameCount: number | null
    ReHeadCount: number | null
    propId: number | null
  }

  export type T_usersMinAggregateOutputType = {
    userid: number | null
    account: string | null
    name: string | null
    sex: number | null
    headimg: string | null
    lv: number | null
    exp: number | null
    coins: number | null
    vip: number | null
    money: number | null
    gems: number | null
    roomid: string | null
    history: string | null
    power: number | null
    RenameCount: number | null
    ReHeadCount: number | null
    propId: number | null
  }

  export type T_usersMaxAggregateOutputType = {
    userid: number | null
    account: string | null
    name: string | null
    sex: number | null
    headimg: string | null
    lv: number | null
    exp: number | null
    coins: number | null
    vip: number | null
    money: number | null
    gems: number | null
    roomid: string | null
    history: string | null
    power: number | null
    RenameCount: number | null
    ReHeadCount: number | null
    propId: number | null
  }

  export type T_usersCountAggregateOutputType = {
    userid: number
    account: number
    name: number
    sex: number
    headimg: number
    lv: number
    exp: number
    coins: number
    vip: number
    money: number
    gems: number
    roomid: number
    history: number
    power: number
    RenameCount: number
    ReHeadCount: number
    propId: number
    _all: number
  }


  export type T_usersAvgAggregateInputType = {
    userid?: true
    sex?: true
    lv?: true
    exp?: true
    coins?: true
    vip?: true
    money?: true
    gems?: true
    power?: true
    RenameCount?: true
    ReHeadCount?: true
    propId?: true
  }

  export type T_usersSumAggregateInputType = {
    userid?: true
    sex?: true
    lv?: true
    exp?: true
    coins?: true
    vip?: true
    money?: true
    gems?: true
    power?: true
    RenameCount?: true
    ReHeadCount?: true
    propId?: true
  }

  export type T_usersMinAggregateInputType = {
    userid?: true
    account?: true
    name?: true
    sex?: true
    headimg?: true
    lv?: true
    exp?: true
    coins?: true
    vip?: true
    money?: true
    gems?: true
    roomid?: true
    history?: true
    power?: true
    RenameCount?: true
    ReHeadCount?: true
    propId?: true
  }

  export type T_usersMaxAggregateInputType = {
    userid?: true
    account?: true
    name?: true
    sex?: true
    headimg?: true
    lv?: true
    exp?: true
    coins?: true
    vip?: true
    money?: true
    gems?: true
    roomid?: true
    history?: true
    power?: true
    RenameCount?: true
    ReHeadCount?: true
    propId?: true
  }

  export type T_usersCountAggregateInputType = {
    userid?: true
    account?: true
    name?: true
    sex?: true
    headimg?: true
    lv?: true
    exp?: true
    coins?: true
    vip?: true
    money?: true
    gems?: true
    roomid?: true
    history?: true
    power?: true
    RenameCount?: true
    ReHeadCount?: true
    propId?: true
    _all?: true
  }

  export type T_usersAggregateArgs = {
    /**
     * Filter which T_users to aggregate.
     */
    where?: T_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_users to fetch.
     */
    orderBy?: Enumerable<T_usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_users
    **/
    _count?: true | T_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_usersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_usersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_usersMaxAggregateInputType
  }

  export type GetT_usersAggregateType<T extends T_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateT_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_users[P]>
      : GetScalarType<T[P], AggregateT_users[P]>
  }




  export type T_usersGroupByArgs = {
    where?: T_usersWhereInput
    orderBy?: Enumerable<T_usersOrderByWithAggregationInput>
    by: T_usersScalarFieldEnum[]
    having?: T_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_usersCountAggregateInputType | true
    _avg?: T_usersAvgAggregateInputType
    _sum?: T_usersSumAggregateInputType
    _min?: T_usersMinAggregateInputType
    _max?: T_usersMaxAggregateInputType
  }


  export type T_usersGroupByOutputType = {
    userid: number
    account: string
    name: string
    sex: number
    headimg: string
    lv: number
    exp: number
    coins: number
    vip: number
    money: number
    gems: number
    roomid: string
    history: string
    power: number
    RenameCount: number
    ReHeadCount: number
    propId: number
    _count: T_usersCountAggregateOutputType | null
    _avg: T_usersAvgAggregateOutputType | null
    _sum: T_usersSumAggregateOutputType | null
    _min: T_usersMinAggregateOutputType | null
    _max: T_usersMaxAggregateOutputType | null
  }

  type GetT_usersGroupByPayload<T extends T_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<T_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_usersGroupByOutputType[P]>
            : GetScalarType<T[P], T_usersGroupByOutputType[P]>
        }
      >
    >


  export type T_usersSelect = {
    userid?: boolean
    account?: boolean
    name?: boolean
    sex?: boolean
    headimg?: boolean
    lv?: boolean
    exp?: boolean
    coins?: boolean
    vip?: boolean
    money?: boolean
    gems?: boolean
    roomid?: boolean
    history?: boolean
    power?: boolean
    RenameCount?: boolean
    ReHeadCount?: boolean
    propId?: boolean
  }


  export type T_usersGetPayload<S extends boolean | null | undefined | T_usersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? T_users :
    S extends undefined ? never :
    S extends { include: any } & (T_usersArgs | T_usersFindManyArgs)
    ? T_users 
    : S extends { select: any } & (T_usersArgs | T_usersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof T_users ? T_users[P] : never
  } 
      : T_users


  type T_usersCountArgs = 
    Omit<T_usersFindManyArgs, 'select' | 'include'> & {
      select?: T_usersCountAggregateInputType | true
    }

  export interface T_usersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one T_users that matches the filter.
     * @param {T_usersFindUniqueArgs} args - Arguments to find a T_users
     * @example
     * // Get one T_users
     * const t_users = await prisma.t_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, T_usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'T_users'> extends True ? Prisma__T_usersClient<T_usersGetPayload<T>> : Prisma__T_usersClient<T_usersGetPayload<T> | null, null>

    /**
     * Find one T_users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {T_usersFindUniqueOrThrowArgs} args - Arguments to find a T_users
     * @example
     * // Get one T_users
     * const t_users = await prisma.t_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_usersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, T_usersFindUniqueOrThrowArgs>
    ): Prisma__T_usersClient<T_usersGetPayload<T>>

    /**
     * Find the first T_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_usersFindFirstArgs} args - Arguments to find a T_users
     * @example
     * // Get one T_users
     * const t_users = await prisma.t_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, T_usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'T_users'> extends True ? Prisma__T_usersClient<T_usersGetPayload<T>> : Prisma__T_usersClient<T_usersGetPayload<T> | null, null>

    /**
     * Find the first T_users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_usersFindFirstOrThrowArgs} args - Arguments to find a T_users
     * @example
     * // Get one T_users
     * const t_users = await prisma.t_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_usersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, T_usersFindFirstOrThrowArgs>
    ): Prisma__T_usersClient<T_usersGetPayload<T>>

    /**
     * Find zero or more T_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_users
     * const t_users = await prisma.t_users.findMany()
     * 
     * // Get first 10 T_users
     * const t_users = await prisma.t_users.findMany({ take: 10 })
     * 
     * // Only select the `userid`
     * const t_usersWithUseridOnly = await prisma.t_users.findMany({ select: { userid: true } })
     * 
    **/
    findMany<T extends T_usersFindManyArgs>(
      args?: SelectSubset<T, T_usersFindManyArgs>
    ): Prisma.PrismaPromise<Array<T_usersGetPayload<T>>>

    /**
     * Create a T_users.
     * @param {T_usersCreateArgs} args - Arguments to create a T_users.
     * @example
     * // Create one T_users
     * const T_users = await prisma.t_users.create({
     *   data: {
     *     // ... data to create a T_users
     *   }
     * })
     * 
    **/
    create<T extends T_usersCreateArgs>(
      args: SelectSubset<T, T_usersCreateArgs>
    ): Prisma__T_usersClient<T_usersGetPayload<T>>

    /**
     * Create many T_users.
     *     @param {T_usersCreateManyArgs} args - Arguments to create many T_users.
     *     @example
     *     // Create many T_users
     *     const t_users = await prisma.t_users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends T_usersCreateManyArgs>(
      args?: SelectSubset<T, T_usersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_users.
     * @param {T_usersDeleteArgs} args - Arguments to delete one T_users.
     * @example
     * // Delete one T_users
     * const T_users = await prisma.t_users.delete({
     *   where: {
     *     // ... filter to delete one T_users
     *   }
     * })
     * 
    **/
    delete<T extends T_usersDeleteArgs>(
      args: SelectSubset<T, T_usersDeleteArgs>
    ): Prisma__T_usersClient<T_usersGetPayload<T>>

    /**
     * Update one T_users.
     * @param {T_usersUpdateArgs} args - Arguments to update one T_users.
     * @example
     * // Update one T_users
     * const t_users = await prisma.t_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_usersUpdateArgs>(
      args: SelectSubset<T, T_usersUpdateArgs>
    ): Prisma__T_usersClient<T_usersGetPayload<T>>

    /**
     * Delete zero or more T_users.
     * @param {T_usersDeleteManyArgs} args - Arguments to filter T_users to delete.
     * @example
     * // Delete a few T_users
     * const { count } = await prisma.t_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_usersDeleteManyArgs>(
      args?: SelectSubset<T, T_usersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_users
     * const t_users = await prisma.t_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_usersUpdateManyArgs>(
      args: SelectSubset<T, T_usersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_users.
     * @param {T_usersUpsertArgs} args - Arguments to update or create a T_users.
     * @example
     * // Update or create a T_users
     * const t_users = await prisma.t_users.upsert({
     *   create: {
     *     // ... data to create a T_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_users we want to update
     *   }
     * })
    **/
    upsert<T extends T_usersUpsertArgs>(
      args: SelectSubset<T, T_usersUpsertArgs>
    ): Prisma__T_usersClient<T_usersGetPayload<T>>

    /**
     * Count the number of T_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_usersCountArgs} args - Arguments to filter T_users to count.
     * @example
     * // Count the number of T_users
     * const count = await prisma.t_users.count({
     *   where: {
     *     // ... the filter for the T_users we want to count
     *   }
     * })
    **/
    count<T extends T_usersCountArgs>(
      args?: Subset<T, T_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_usersAggregateArgs>(args: Subset<T, T_usersAggregateArgs>): Prisma.PrismaPromise<GetT_usersAggregateType<T>>

    /**
     * Group by T_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_usersGroupByArgs} args - Group by arguments.
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
      T extends T_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_usersGroupByArgs['orderBy'] }
        : { orderBy?: T_usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for T_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__T_usersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * T_users base type for findUnique actions
   */
  export type T_usersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the T_users
     */
    select?: T_usersSelect | null
    /**
     * Filter, which T_users to fetch.
     */
    where: T_usersWhereUniqueInput
  }

  /**
   * T_users findUnique
   */
  export interface T_usersFindUniqueArgs extends T_usersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_users findUniqueOrThrow
   */
  export type T_usersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_users
     */
    select?: T_usersSelect | null
    /**
     * Filter, which T_users to fetch.
     */
    where: T_usersWhereUniqueInput
  }


  /**
   * T_users base type for findFirst actions
   */
  export type T_usersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the T_users
     */
    select?: T_usersSelect | null
    /**
     * Filter, which T_users to fetch.
     */
    where?: T_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_users to fetch.
     */
    orderBy?: Enumerable<T_usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_users.
     */
    cursor?: T_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_users.
     */
    distinct?: Enumerable<T_usersScalarFieldEnum>
  }

  /**
   * T_users findFirst
   */
  export interface T_usersFindFirstArgs extends T_usersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_users findFirstOrThrow
   */
  export type T_usersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_users
     */
    select?: T_usersSelect | null
    /**
     * Filter, which T_users to fetch.
     */
    where?: T_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_users to fetch.
     */
    orderBy?: Enumerable<T_usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_users.
     */
    cursor?: T_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_users.
     */
    distinct?: Enumerable<T_usersScalarFieldEnum>
  }


  /**
   * T_users findMany
   */
  export type T_usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the T_users
     */
    select?: T_usersSelect | null
    /**
     * Filter, which T_users to fetch.
     */
    where?: T_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_users to fetch.
     */
    orderBy?: Enumerable<T_usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_users.
     */
    cursor?: T_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_users.
     */
    skip?: number
    distinct?: Enumerable<T_usersScalarFieldEnum>
  }


  /**
   * T_users create
   */
  export type T_usersCreateArgs = {
    /**
     * Select specific fields to fetch from the T_users
     */
    select?: T_usersSelect | null
    /**
     * The data needed to create a T_users.
     */
    data: XOR<T_usersCreateInput, T_usersUncheckedCreateInput>
  }


  /**
   * T_users createMany
   */
  export type T_usersCreateManyArgs = {
    /**
     * The data used to create many T_users.
     */
    data: Enumerable<T_usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * T_users update
   */
  export type T_usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the T_users
     */
    select?: T_usersSelect | null
    /**
     * The data needed to update a T_users.
     */
    data: XOR<T_usersUpdateInput, T_usersUncheckedUpdateInput>
    /**
     * Choose, which T_users to update.
     */
    where: T_usersWhereUniqueInput
  }


  /**
   * T_users updateMany
   */
  export type T_usersUpdateManyArgs = {
    /**
     * The data used to update T_users.
     */
    data: XOR<T_usersUpdateManyMutationInput, T_usersUncheckedUpdateManyInput>
    /**
     * Filter which T_users to update
     */
    where?: T_usersWhereInput
  }


  /**
   * T_users upsert
   */
  export type T_usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the T_users
     */
    select?: T_usersSelect | null
    /**
     * The filter to search for the T_users to update in case it exists.
     */
    where: T_usersWhereUniqueInput
    /**
     * In case the T_users found by the `where` argument doesn't exist, create a new T_users with this data.
     */
    create: XOR<T_usersCreateInput, T_usersUncheckedCreateInput>
    /**
     * In case the T_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_usersUpdateInput, T_usersUncheckedUpdateInput>
  }


  /**
   * T_users delete
   */
  export type T_usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the T_users
     */
    select?: T_usersSelect | null
    /**
     * Filter which T_users to delete.
     */
    where: T_usersWhereUniqueInput
  }


  /**
   * T_users deleteMany
   */
  export type T_usersDeleteManyArgs = {
    /**
     * Filter which T_users to delete
     */
    where?: T_usersWhereInput
  }


  /**
   * T_users without action
   */
  export type T_usersArgs = {
    /**
     * Select specific fields to fetch from the T_users
     */
    select?: T_usersSelect | null
  }



  /**
   * Model Usecoin
   */


  export type AggregateUsecoin = {
    _count: UsecoinCountAggregateOutputType | null
    _avg: UsecoinAvgAggregateOutputType | null
    _sum: UsecoinSumAggregateOutputType | null
    _min: UsecoinMinAggregateOutputType | null
    _max: UsecoinMaxAggregateOutputType | null
  }

  export type UsecoinAvgAggregateOutputType = {
    userId: number | null
    useCoin: number | null
    getprizelv: number | null
  }

  export type UsecoinSumAggregateOutputType = {
    userId: number | null
    useCoin: number | null
    getprizelv: number | null
  }

  export type UsecoinMinAggregateOutputType = {
    userId: number | null
    useCoin: number | null
    getprizelv: number | null
  }

  export type UsecoinMaxAggregateOutputType = {
    userId: number | null
    useCoin: number | null
    getprizelv: number | null
  }

  export type UsecoinCountAggregateOutputType = {
    userId: number
    useCoin: number
    getprizelv: number
    _all: number
  }


  export type UsecoinAvgAggregateInputType = {
    userId?: true
    useCoin?: true
    getprizelv?: true
  }

  export type UsecoinSumAggregateInputType = {
    userId?: true
    useCoin?: true
    getprizelv?: true
  }

  export type UsecoinMinAggregateInputType = {
    userId?: true
    useCoin?: true
    getprizelv?: true
  }

  export type UsecoinMaxAggregateInputType = {
    userId?: true
    useCoin?: true
    getprizelv?: true
  }

  export type UsecoinCountAggregateInputType = {
    userId?: true
    useCoin?: true
    getprizelv?: true
    _all?: true
  }

  export type UsecoinAggregateArgs = {
    /**
     * Filter which Usecoin to aggregate.
     */
    where?: UsecoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usecoins to fetch.
     */
    orderBy?: Enumerable<UsecoinOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsecoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usecoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usecoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usecoins
    **/
    _count?: true | UsecoinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsecoinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsecoinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsecoinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsecoinMaxAggregateInputType
  }

  export type GetUsecoinAggregateType<T extends UsecoinAggregateArgs> = {
        [P in keyof T & keyof AggregateUsecoin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsecoin[P]>
      : GetScalarType<T[P], AggregateUsecoin[P]>
  }




  export type UsecoinGroupByArgs = {
    where?: UsecoinWhereInput
    orderBy?: Enumerable<UsecoinOrderByWithAggregationInput>
    by: UsecoinScalarFieldEnum[]
    having?: UsecoinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsecoinCountAggregateInputType | true
    _avg?: UsecoinAvgAggregateInputType
    _sum?: UsecoinSumAggregateInputType
    _min?: UsecoinMinAggregateInputType
    _max?: UsecoinMaxAggregateInputType
  }


  export type UsecoinGroupByOutputType = {
    userId: number
    useCoin: number
    getprizelv: number
    _count: UsecoinCountAggregateOutputType | null
    _avg: UsecoinAvgAggregateOutputType | null
    _sum: UsecoinSumAggregateOutputType | null
    _min: UsecoinMinAggregateOutputType | null
    _max: UsecoinMaxAggregateOutputType | null
  }

  type GetUsecoinGroupByPayload<T extends UsecoinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UsecoinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsecoinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsecoinGroupByOutputType[P]>
            : GetScalarType<T[P], UsecoinGroupByOutputType[P]>
        }
      >
    >


  export type UsecoinSelect = {
    userId?: boolean
    useCoin?: boolean
    getprizelv?: boolean
  }


  export type UsecoinGetPayload<S extends boolean | null | undefined | UsecoinArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Usecoin :
    S extends undefined ? never :
    S extends { include: any } & (UsecoinArgs | UsecoinFindManyArgs)
    ? Usecoin 
    : S extends { select: any } & (UsecoinArgs | UsecoinFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Usecoin ? Usecoin[P] : never
  } 
      : Usecoin


  type UsecoinCountArgs = 
    Omit<UsecoinFindManyArgs, 'select' | 'include'> & {
      select?: UsecoinCountAggregateInputType | true
    }

  export interface UsecoinDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Usecoin that matches the filter.
     * @param {UsecoinFindUniqueArgs} args - Arguments to find a Usecoin
     * @example
     * // Get one Usecoin
     * const usecoin = await prisma.usecoin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsecoinFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsecoinFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Usecoin'> extends True ? Prisma__UsecoinClient<UsecoinGetPayload<T>> : Prisma__UsecoinClient<UsecoinGetPayload<T> | null, null>

    /**
     * Find one Usecoin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsecoinFindUniqueOrThrowArgs} args - Arguments to find a Usecoin
     * @example
     * // Get one Usecoin
     * const usecoin = await prisma.usecoin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsecoinFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UsecoinFindUniqueOrThrowArgs>
    ): Prisma__UsecoinClient<UsecoinGetPayload<T>>

    /**
     * Find the first Usecoin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsecoinFindFirstArgs} args - Arguments to find a Usecoin
     * @example
     * // Get one Usecoin
     * const usecoin = await prisma.usecoin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsecoinFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsecoinFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Usecoin'> extends True ? Prisma__UsecoinClient<UsecoinGetPayload<T>> : Prisma__UsecoinClient<UsecoinGetPayload<T> | null, null>

    /**
     * Find the first Usecoin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsecoinFindFirstOrThrowArgs} args - Arguments to find a Usecoin
     * @example
     * // Get one Usecoin
     * const usecoin = await prisma.usecoin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsecoinFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UsecoinFindFirstOrThrowArgs>
    ): Prisma__UsecoinClient<UsecoinGetPayload<T>>

    /**
     * Find zero or more Usecoins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsecoinFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usecoins
     * const usecoins = await prisma.usecoin.findMany()
     * 
     * // Get first 10 Usecoins
     * const usecoins = await prisma.usecoin.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usecoinWithUserIdOnly = await prisma.usecoin.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UsecoinFindManyArgs>(
      args?: SelectSubset<T, UsecoinFindManyArgs>
    ): Prisma.PrismaPromise<Array<UsecoinGetPayload<T>>>

    /**
     * Create a Usecoin.
     * @param {UsecoinCreateArgs} args - Arguments to create a Usecoin.
     * @example
     * // Create one Usecoin
     * const Usecoin = await prisma.usecoin.create({
     *   data: {
     *     // ... data to create a Usecoin
     *   }
     * })
     * 
    **/
    create<T extends UsecoinCreateArgs>(
      args: SelectSubset<T, UsecoinCreateArgs>
    ): Prisma__UsecoinClient<UsecoinGetPayload<T>>

    /**
     * Create many Usecoins.
     *     @param {UsecoinCreateManyArgs} args - Arguments to create many Usecoins.
     *     @example
     *     // Create many Usecoins
     *     const usecoin = await prisma.usecoin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsecoinCreateManyArgs>(
      args?: SelectSubset<T, UsecoinCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usecoin.
     * @param {UsecoinDeleteArgs} args - Arguments to delete one Usecoin.
     * @example
     * // Delete one Usecoin
     * const Usecoin = await prisma.usecoin.delete({
     *   where: {
     *     // ... filter to delete one Usecoin
     *   }
     * })
     * 
    **/
    delete<T extends UsecoinDeleteArgs>(
      args: SelectSubset<T, UsecoinDeleteArgs>
    ): Prisma__UsecoinClient<UsecoinGetPayload<T>>

    /**
     * Update one Usecoin.
     * @param {UsecoinUpdateArgs} args - Arguments to update one Usecoin.
     * @example
     * // Update one Usecoin
     * const usecoin = await prisma.usecoin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsecoinUpdateArgs>(
      args: SelectSubset<T, UsecoinUpdateArgs>
    ): Prisma__UsecoinClient<UsecoinGetPayload<T>>

    /**
     * Delete zero or more Usecoins.
     * @param {UsecoinDeleteManyArgs} args - Arguments to filter Usecoins to delete.
     * @example
     * // Delete a few Usecoins
     * const { count } = await prisma.usecoin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsecoinDeleteManyArgs>(
      args?: SelectSubset<T, UsecoinDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usecoins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsecoinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usecoins
     * const usecoin = await prisma.usecoin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsecoinUpdateManyArgs>(
      args: SelectSubset<T, UsecoinUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usecoin.
     * @param {UsecoinUpsertArgs} args - Arguments to update or create a Usecoin.
     * @example
     * // Update or create a Usecoin
     * const usecoin = await prisma.usecoin.upsert({
     *   create: {
     *     // ... data to create a Usecoin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usecoin we want to update
     *   }
     * })
    **/
    upsert<T extends UsecoinUpsertArgs>(
      args: SelectSubset<T, UsecoinUpsertArgs>
    ): Prisma__UsecoinClient<UsecoinGetPayload<T>>

    /**
     * Count the number of Usecoins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsecoinCountArgs} args - Arguments to filter Usecoins to count.
     * @example
     * // Count the number of Usecoins
     * const count = await prisma.usecoin.count({
     *   where: {
     *     // ... the filter for the Usecoins we want to count
     *   }
     * })
    **/
    count<T extends UsecoinCountArgs>(
      args?: Subset<T, UsecoinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsecoinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usecoin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsecoinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsecoinAggregateArgs>(args: Subset<T, UsecoinAggregateArgs>): Prisma.PrismaPromise<GetUsecoinAggregateType<T>>

    /**
     * Group by Usecoin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsecoinGroupByArgs} args - Group by arguments.
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
      T extends UsecoinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsecoinGroupByArgs['orderBy'] }
        : { orderBy?: UsecoinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsecoinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsecoinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Usecoin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsecoinClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Usecoin base type for findUnique actions
   */
  export type UsecoinFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Usecoin
     */
    select?: UsecoinSelect | null
    /**
     * Filter, which Usecoin to fetch.
     */
    where: UsecoinWhereUniqueInput
  }

  /**
   * Usecoin findUnique
   */
  export interface UsecoinFindUniqueArgs extends UsecoinFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Usecoin findUniqueOrThrow
   */
  export type UsecoinFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Usecoin
     */
    select?: UsecoinSelect | null
    /**
     * Filter, which Usecoin to fetch.
     */
    where: UsecoinWhereUniqueInput
  }


  /**
   * Usecoin base type for findFirst actions
   */
  export type UsecoinFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Usecoin
     */
    select?: UsecoinSelect | null
    /**
     * Filter, which Usecoin to fetch.
     */
    where?: UsecoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usecoins to fetch.
     */
    orderBy?: Enumerable<UsecoinOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usecoins.
     */
    cursor?: UsecoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usecoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usecoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usecoins.
     */
    distinct?: Enumerable<UsecoinScalarFieldEnum>
  }

  /**
   * Usecoin findFirst
   */
  export interface UsecoinFindFirstArgs extends UsecoinFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Usecoin findFirstOrThrow
   */
  export type UsecoinFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Usecoin
     */
    select?: UsecoinSelect | null
    /**
     * Filter, which Usecoin to fetch.
     */
    where?: UsecoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usecoins to fetch.
     */
    orderBy?: Enumerable<UsecoinOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usecoins.
     */
    cursor?: UsecoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usecoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usecoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usecoins.
     */
    distinct?: Enumerable<UsecoinScalarFieldEnum>
  }


  /**
   * Usecoin findMany
   */
  export type UsecoinFindManyArgs = {
    /**
     * Select specific fields to fetch from the Usecoin
     */
    select?: UsecoinSelect | null
    /**
     * Filter, which Usecoins to fetch.
     */
    where?: UsecoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usecoins to fetch.
     */
    orderBy?: Enumerable<UsecoinOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usecoins.
     */
    cursor?: UsecoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usecoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usecoins.
     */
    skip?: number
    distinct?: Enumerable<UsecoinScalarFieldEnum>
  }


  /**
   * Usecoin create
   */
  export type UsecoinCreateArgs = {
    /**
     * Select specific fields to fetch from the Usecoin
     */
    select?: UsecoinSelect | null
    /**
     * The data needed to create a Usecoin.
     */
    data: XOR<UsecoinCreateInput, UsecoinUncheckedCreateInput>
  }


  /**
   * Usecoin createMany
   */
  export type UsecoinCreateManyArgs = {
    /**
     * The data used to create many Usecoins.
     */
    data: Enumerable<UsecoinCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Usecoin update
   */
  export type UsecoinUpdateArgs = {
    /**
     * Select specific fields to fetch from the Usecoin
     */
    select?: UsecoinSelect | null
    /**
     * The data needed to update a Usecoin.
     */
    data: XOR<UsecoinUpdateInput, UsecoinUncheckedUpdateInput>
    /**
     * Choose, which Usecoin to update.
     */
    where: UsecoinWhereUniqueInput
  }


  /**
   * Usecoin updateMany
   */
  export type UsecoinUpdateManyArgs = {
    /**
     * The data used to update Usecoins.
     */
    data: XOR<UsecoinUpdateManyMutationInput, UsecoinUncheckedUpdateManyInput>
    /**
     * Filter which Usecoins to update
     */
    where?: UsecoinWhereInput
  }


  /**
   * Usecoin upsert
   */
  export type UsecoinUpsertArgs = {
    /**
     * Select specific fields to fetch from the Usecoin
     */
    select?: UsecoinSelect | null
    /**
     * The filter to search for the Usecoin to update in case it exists.
     */
    where: UsecoinWhereUniqueInput
    /**
     * In case the Usecoin found by the `where` argument doesn't exist, create a new Usecoin with this data.
     */
    create: XOR<UsecoinCreateInput, UsecoinUncheckedCreateInput>
    /**
     * In case the Usecoin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsecoinUpdateInput, UsecoinUncheckedUpdateInput>
  }


  /**
   * Usecoin delete
   */
  export type UsecoinDeleteArgs = {
    /**
     * Select specific fields to fetch from the Usecoin
     */
    select?: UsecoinSelect | null
    /**
     * Filter which Usecoin to delete.
     */
    where: UsecoinWhereUniqueInput
  }


  /**
   * Usecoin deleteMany
   */
  export type UsecoinDeleteManyArgs = {
    /**
     * Filter which Usecoins to delete
     */
    where?: UsecoinWhereInput
  }


  /**
   * Usecoin without action
   */
  export type UsecoinArgs = {
    /**
     * Select specific fields to fetch from the Usecoin
     */
    select?: UsecoinSelect | null
  }



  /**
   * Model Wincoin
   */


  export type AggregateWincoin = {
    _count: WincoinCountAggregateOutputType | null
    _avg: WincoinAvgAggregateOutputType | null
    _sum: WincoinSumAggregateOutputType | null
    _min: WincoinMinAggregateOutputType | null
    _max: WincoinMaxAggregateOutputType | null
  }

  export type WincoinAvgAggregateOutputType = {
    userId: number | null
    wincoin: number | null
    lv: number | null
  }

  export type WincoinSumAggregateOutputType = {
    userId: number | null
    wincoin: number | null
    lv: number | null
  }

  export type WincoinMinAggregateOutputType = {
    userId: number | null
    wincoin: number | null
    lv: number | null
  }

  export type WincoinMaxAggregateOutputType = {
    userId: number | null
    wincoin: number | null
    lv: number | null
  }

  export type WincoinCountAggregateOutputType = {
    userId: number
    wincoin: number
    lv: number
    _all: number
  }


  export type WincoinAvgAggregateInputType = {
    userId?: true
    wincoin?: true
    lv?: true
  }

  export type WincoinSumAggregateInputType = {
    userId?: true
    wincoin?: true
    lv?: true
  }

  export type WincoinMinAggregateInputType = {
    userId?: true
    wincoin?: true
    lv?: true
  }

  export type WincoinMaxAggregateInputType = {
    userId?: true
    wincoin?: true
    lv?: true
  }

  export type WincoinCountAggregateInputType = {
    userId?: true
    wincoin?: true
    lv?: true
    _all?: true
  }

  export type WincoinAggregateArgs = {
    /**
     * Filter which Wincoin to aggregate.
     */
    where?: WincoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wincoins to fetch.
     */
    orderBy?: Enumerable<WincoinOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WincoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wincoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wincoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wincoins
    **/
    _count?: true | WincoinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WincoinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WincoinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WincoinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WincoinMaxAggregateInputType
  }

  export type GetWincoinAggregateType<T extends WincoinAggregateArgs> = {
        [P in keyof T & keyof AggregateWincoin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWincoin[P]>
      : GetScalarType<T[P], AggregateWincoin[P]>
  }




  export type WincoinGroupByArgs = {
    where?: WincoinWhereInput
    orderBy?: Enumerable<WincoinOrderByWithAggregationInput>
    by: WincoinScalarFieldEnum[]
    having?: WincoinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WincoinCountAggregateInputType | true
    _avg?: WincoinAvgAggregateInputType
    _sum?: WincoinSumAggregateInputType
    _min?: WincoinMinAggregateInputType
    _max?: WincoinMaxAggregateInputType
  }


  export type WincoinGroupByOutputType = {
    userId: number
    wincoin: number
    lv: number
    _count: WincoinCountAggregateOutputType | null
    _avg: WincoinAvgAggregateOutputType | null
    _sum: WincoinSumAggregateOutputType | null
    _min: WincoinMinAggregateOutputType | null
    _max: WincoinMaxAggregateOutputType | null
  }

  type GetWincoinGroupByPayload<T extends WincoinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WincoinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WincoinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WincoinGroupByOutputType[P]>
            : GetScalarType<T[P], WincoinGroupByOutputType[P]>
        }
      >
    >


  export type WincoinSelect = {
    userId?: boolean
    wincoin?: boolean
    lv?: boolean
  }


  export type WincoinGetPayload<S extends boolean | null | undefined | WincoinArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Wincoin :
    S extends undefined ? never :
    S extends { include: any } & (WincoinArgs | WincoinFindManyArgs)
    ? Wincoin 
    : S extends { select: any } & (WincoinArgs | WincoinFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Wincoin ? Wincoin[P] : never
  } 
      : Wincoin


  type WincoinCountArgs = 
    Omit<WincoinFindManyArgs, 'select' | 'include'> & {
      select?: WincoinCountAggregateInputType | true
    }

  export interface WincoinDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Wincoin that matches the filter.
     * @param {WincoinFindUniqueArgs} args - Arguments to find a Wincoin
     * @example
     * // Get one Wincoin
     * const wincoin = await prisma.wincoin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WincoinFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WincoinFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Wincoin'> extends True ? Prisma__WincoinClient<WincoinGetPayload<T>> : Prisma__WincoinClient<WincoinGetPayload<T> | null, null>

    /**
     * Find one Wincoin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WincoinFindUniqueOrThrowArgs} args - Arguments to find a Wincoin
     * @example
     * // Get one Wincoin
     * const wincoin = await prisma.wincoin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WincoinFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WincoinFindUniqueOrThrowArgs>
    ): Prisma__WincoinClient<WincoinGetPayload<T>>

    /**
     * Find the first Wincoin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WincoinFindFirstArgs} args - Arguments to find a Wincoin
     * @example
     * // Get one Wincoin
     * const wincoin = await prisma.wincoin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WincoinFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WincoinFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Wincoin'> extends True ? Prisma__WincoinClient<WincoinGetPayload<T>> : Prisma__WincoinClient<WincoinGetPayload<T> | null, null>

    /**
     * Find the first Wincoin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WincoinFindFirstOrThrowArgs} args - Arguments to find a Wincoin
     * @example
     * // Get one Wincoin
     * const wincoin = await prisma.wincoin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WincoinFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WincoinFindFirstOrThrowArgs>
    ): Prisma__WincoinClient<WincoinGetPayload<T>>

    /**
     * Find zero or more Wincoins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WincoinFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wincoins
     * const wincoins = await prisma.wincoin.findMany()
     * 
     * // Get first 10 Wincoins
     * const wincoins = await prisma.wincoin.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const wincoinWithUserIdOnly = await prisma.wincoin.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends WincoinFindManyArgs>(
      args?: SelectSubset<T, WincoinFindManyArgs>
    ): Prisma.PrismaPromise<Array<WincoinGetPayload<T>>>

    /**
     * Create a Wincoin.
     * @param {WincoinCreateArgs} args - Arguments to create a Wincoin.
     * @example
     * // Create one Wincoin
     * const Wincoin = await prisma.wincoin.create({
     *   data: {
     *     // ... data to create a Wincoin
     *   }
     * })
     * 
    **/
    create<T extends WincoinCreateArgs>(
      args: SelectSubset<T, WincoinCreateArgs>
    ): Prisma__WincoinClient<WincoinGetPayload<T>>

    /**
     * Create many Wincoins.
     *     @param {WincoinCreateManyArgs} args - Arguments to create many Wincoins.
     *     @example
     *     // Create many Wincoins
     *     const wincoin = await prisma.wincoin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WincoinCreateManyArgs>(
      args?: SelectSubset<T, WincoinCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wincoin.
     * @param {WincoinDeleteArgs} args - Arguments to delete one Wincoin.
     * @example
     * // Delete one Wincoin
     * const Wincoin = await prisma.wincoin.delete({
     *   where: {
     *     // ... filter to delete one Wincoin
     *   }
     * })
     * 
    **/
    delete<T extends WincoinDeleteArgs>(
      args: SelectSubset<T, WincoinDeleteArgs>
    ): Prisma__WincoinClient<WincoinGetPayload<T>>

    /**
     * Update one Wincoin.
     * @param {WincoinUpdateArgs} args - Arguments to update one Wincoin.
     * @example
     * // Update one Wincoin
     * const wincoin = await prisma.wincoin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WincoinUpdateArgs>(
      args: SelectSubset<T, WincoinUpdateArgs>
    ): Prisma__WincoinClient<WincoinGetPayload<T>>

    /**
     * Delete zero or more Wincoins.
     * @param {WincoinDeleteManyArgs} args - Arguments to filter Wincoins to delete.
     * @example
     * // Delete a few Wincoins
     * const { count } = await prisma.wincoin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WincoinDeleteManyArgs>(
      args?: SelectSubset<T, WincoinDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wincoins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WincoinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wincoins
     * const wincoin = await prisma.wincoin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WincoinUpdateManyArgs>(
      args: SelectSubset<T, WincoinUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wincoin.
     * @param {WincoinUpsertArgs} args - Arguments to update or create a Wincoin.
     * @example
     * // Update or create a Wincoin
     * const wincoin = await prisma.wincoin.upsert({
     *   create: {
     *     // ... data to create a Wincoin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wincoin we want to update
     *   }
     * })
    **/
    upsert<T extends WincoinUpsertArgs>(
      args: SelectSubset<T, WincoinUpsertArgs>
    ): Prisma__WincoinClient<WincoinGetPayload<T>>

    /**
     * Count the number of Wincoins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WincoinCountArgs} args - Arguments to filter Wincoins to count.
     * @example
     * // Count the number of Wincoins
     * const count = await prisma.wincoin.count({
     *   where: {
     *     // ... the filter for the Wincoins we want to count
     *   }
     * })
    **/
    count<T extends WincoinCountArgs>(
      args?: Subset<T, WincoinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WincoinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wincoin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WincoinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WincoinAggregateArgs>(args: Subset<T, WincoinAggregateArgs>): Prisma.PrismaPromise<GetWincoinAggregateType<T>>

    /**
     * Group by Wincoin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WincoinGroupByArgs} args - Group by arguments.
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
      T extends WincoinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WincoinGroupByArgs['orderBy'] }
        : { orderBy?: WincoinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WincoinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWincoinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Wincoin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WincoinClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Wincoin base type for findUnique actions
   */
  export type WincoinFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Wincoin
     */
    select?: WincoinSelect | null
    /**
     * Filter, which Wincoin to fetch.
     */
    where: WincoinWhereUniqueInput
  }

  /**
   * Wincoin findUnique
   */
  export interface WincoinFindUniqueArgs extends WincoinFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Wincoin findUniqueOrThrow
   */
  export type WincoinFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Wincoin
     */
    select?: WincoinSelect | null
    /**
     * Filter, which Wincoin to fetch.
     */
    where: WincoinWhereUniqueInput
  }


  /**
   * Wincoin base type for findFirst actions
   */
  export type WincoinFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Wincoin
     */
    select?: WincoinSelect | null
    /**
     * Filter, which Wincoin to fetch.
     */
    where?: WincoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wincoins to fetch.
     */
    orderBy?: Enumerable<WincoinOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wincoins.
     */
    cursor?: WincoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wincoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wincoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wincoins.
     */
    distinct?: Enumerable<WincoinScalarFieldEnum>
  }

  /**
   * Wincoin findFirst
   */
  export interface WincoinFindFirstArgs extends WincoinFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Wincoin findFirstOrThrow
   */
  export type WincoinFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Wincoin
     */
    select?: WincoinSelect | null
    /**
     * Filter, which Wincoin to fetch.
     */
    where?: WincoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wincoins to fetch.
     */
    orderBy?: Enumerable<WincoinOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wincoins.
     */
    cursor?: WincoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wincoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wincoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wincoins.
     */
    distinct?: Enumerable<WincoinScalarFieldEnum>
  }


  /**
   * Wincoin findMany
   */
  export type WincoinFindManyArgs = {
    /**
     * Select specific fields to fetch from the Wincoin
     */
    select?: WincoinSelect | null
    /**
     * Filter, which Wincoins to fetch.
     */
    where?: WincoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wincoins to fetch.
     */
    orderBy?: Enumerable<WincoinOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wincoins.
     */
    cursor?: WincoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wincoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wincoins.
     */
    skip?: number
    distinct?: Enumerable<WincoinScalarFieldEnum>
  }


  /**
   * Wincoin create
   */
  export type WincoinCreateArgs = {
    /**
     * Select specific fields to fetch from the Wincoin
     */
    select?: WincoinSelect | null
    /**
     * The data needed to create a Wincoin.
     */
    data: XOR<WincoinCreateInput, WincoinUncheckedCreateInput>
  }


  /**
   * Wincoin createMany
   */
  export type WincoinCreateManyArgs = {
    /**
     * The data used to create many Wincoins.
     */
    data: Enumerable<WincoinCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Wincoin update
   */
  export type WincoinUpdateArgs = {
    /**
     * Select specific fields to fetch from the Wincoin
     */
    select?: WincoinSelect | null
    /**
     * The data needed to update a Wincoin.
     */
    data: XOR<WincoinUpdateInput, WincoinUncheckedUpdateInput>
    /**
     * Choose, which Wincoin to update.
     */
    where: WincoinWhereUniqueInput
  }


  /**
   * Wincoin updateMany
   */
  export type WincoinUpdateManyArgs = {
    /**
     * The data used to update Wincoins.
     */
    data: XOR<WincoinUpdateManyMutationInput, WincoinUncheckedUpdateManyInput>
    /**
     * Filter which Wincoins to update
     */
    where?: WincoinWhereInput
  }


  /**
   * Wincoin upsert
   */
  export type WincoinUpsertArgs = {
    /**
     * Select specific fields to fetch from the Wincoin
     */
    select?: WincoinSelect | null
    /**
     * The filter to search for the Wincoin to update in case it exists.
     */
    where: WincoinWhereUniqueInput
    /**
     * In case the Wincoin found by the `where` argument doesn't exist, create a new Wincoin with this data.
     */
    create: XOR<WincoinCreateInput, WincoinUncheckedCreateInput>
    /**
     * In case the Wincoin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WincoinUpdateInput, WincoinUncheckedUpdateInput>
  }


  /**
   * Wincoin delete
   */
  export type WincoinDeleteArgs = {
    /**
     * Select specific fields to fetch from the Wincoin
     */
    select?: WincoinSelect | null
    /**
     * Filter which Wincoin to delete.
     */
    where: WincoinWhereUniqueInput
  }


  /**
   * Wincoin deleteMany
   */
  export type WincoinDeleteManyArgs = {
    /**
     * Filter which Wincoins to delete
     */
    where?: WincoinWhereInput
  }


  /**
   * Wincoin without action
   */
  export type WincoinArgs = {
    /**
     * Select specific fields to fetch from the Wincoin
     */
    select?: WincoinSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Catch_chanceScalarFieldEnum: {
    serveId: 'serveId',
    chance: 'chance'
  };

  export type Catch_chanceScalarFieldEnum = (typeof Catch_chanceScalarFieldEnum)[keyof typeof Catch_chanceScalarFieldEnum]


  export const Control_poolScalarFieldEnum: {
    serveId: 'serveId',
    pool: 'pool',
    line: 'line'
  };

  export type Control_poolScalarFieldEnum = (typeof Control_poolScalarFieldEnum)[keyof typeof Control_poolScalarFieldEnum]


  export const Control_userScalarFieldEnum: {
    uid: 'uid',
    chance: 'chance'
  };

  export type Control_userScalarFieldEnum = (typeof Control_userScalarFieldEnum)[keyof typeof Control_userScalarFieldEnum]


  export const DaysendprizevalueScalarFieldEnum: {
    day: 'day',
    value: 'value'
  };

  export type DaysendprizevalueScalarFieldEnum = (typeof DaysendprizevalueScalarFieldEnum)[keyof typeof DaysendprizevalueScalarFieldEnum]


  export const FishlogScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    usecoin: 'usecoin',
    wincoin: 'wincoin',
    balanceTime: 'balanceTime',
    mark: 'mark',
    serverId: 'serverId'
  };

  export type FishlogScalarFieldEnum = (typeof FishlogScalarFieldEnum)[keyof typeof FishlogScalarFieldEnum]


  export const GetcoinScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    getCoin: 'getCoin',
    adddate: 'adddate',
    mark: 'mark',
    isget: 'isget',
    day: 'day'
  };

  export type GetcoinScalarFieldEnum = (typeof GetcoinScalarFieldEnum)[keyof typeof GetcoinScalarFieldEnum]


  export const LvScalarFieldEnum: {
    lv: 'lv',
    wincoinvalue: 'wincoinvalue'
  };

  export type LvScalarFieldEnum = (typeof LvScalarFieldEnum)[keyof typeof LvScalarFieldEnum]


  export const MatchrandkingScalarFieldEnum: {
    id: 'id',
    roomType: 'roomType',
    matchId: 'matchId',
    userId: 'userId',
    score: 'score',
    lastTime: 'lastTime',
    winPropId: 'winPropId',
    winPropCount: 'winPropCount',
    winScore: 'winScore',
    rankIdx: 'rankIdx',
    isGetPrize: 'isGetPrize',
    isMsg: 'isMsg',
    title: 'title',
    msg: 'msg'
  };

  export type MatchrandkingScalarFieldEnum = (typeof MatchrandkingScalarFieldEnum)[keyof typeof MatchrandkingScalarFieldEnum]


  export const PoolScalarFieldEnum: {
    serveId: 'serveId',
    pool: 'pool',
    virtualPool: 'virtualPool'
  };

  export type PoolScalarFieldEnum = (typeof PoolScalarFieldEnum)[keyof typeof PoolScalarFieldEnum]


  export const SendprizeScalarFieldEnum: {
    idx: 'idx',
    propid: 'propid',
    propcount: 'propcount',
    score: 'score'
  };

  export type SendprizeScalarFieldEnum = (typeof SendprizeScalarFieldEnum)[keyof typeof SendprizeScalarFieldEnum]


  export const ShootprizeScalarFieldEnum: {
    lv: 'lv',
    value: 'value',
    propid: 'propid',
    propcount: 'propcount',
    winsocre: 'winsocre'
  };

  export type ShootprizeScalarFieldEnum = (typeof ShootprizeScalarFieldEnum)[keyof typeof ShootprizeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const T_accountsScalarFieldEnum: {
    account: 'account',
    password: 'password'
  };

  export type T_accountsScalarFieldEnum = (typeof T_accountsScalarFieldEnum)[keyof typeof T_accountsScalarFieldEnum]


  export const T_gamesScalarFieldEnum: {
    room_uuid: 'room_uuid',
    game_index: 'game_index',
    base_info: 'base_info',
    create_time: 'create_time',
    snapshots: 'snapshots',
    action_records: 'action_records',
    result: 'result'
  };

  export type T_gamesScalarFieldEnum = (typeof T_gamesScalarFieldEnum)[keyof typeof T_gamesScalarFieldEnum]


  export const T_games_archiveScalarFieldEnum: {
    room_uuid: 'room_uuid',
    game_index: 'game_index',
    base_info: 'base_info',
    create_time: 'create_time',
    snapshots: 'snapshots',
    action_records: 'action_records',
    result: 'result'
  };

  export type T_games_archiveScalarFieldEnum = (typeof T_games_archiveScalarFieldEnum)[keyof typeof T_games_archiveScalarFieldEnum]


  export const T_guestsScalarFieldEnum: {
    guest_account: 'guest_account'
  };

  export type T_guestsScalarFieldEnum = (typeof T_guestsScalarFieldEnum)[keyof typeof T_guestsScalarFieldEnum]


  export const T_messageScalarFieldEnum: {
    type: 'type',
    msg: 'msg',
    version: 'version'
  };

  export type T_messageScalarFieldEnum = (typeof T_messageScalarFieldEnum)[keyof typeof T_messageScalarFieldEnum]


  export const T_propertyScalarFieldEnum: {
    propId: 'propId',
    userid: 'userid',
    ice: 'ice'
  };

  export type T_propertyScalarFieldEnum = (typeof T_propertyScalarFieldEnum)[keyof typeof T_propertyScalarFieldEnum]


  export const T_roomsScalarFieldEnum: {
    uuid: 'uuid',
    id: 'id',
    base_info: 'base_info',
    create_time: 'create_time',
    num_of_turns: 'num_of_turns',
    next_button: 'next_button',
    user_id0: 'user_id0',
    user_icon0: 'user_icon0',
    user_name0: 'user_name0',
    user_score0: 'user_score0',
    user_id1: 'user_id1',
    user_icon1: 'user_icon1',
    user_name1: 'user_name1',
    user_score1: 'user_score1',
    user_id2: 'user_id2',
    user_icon2: 'user_icon2',
    user_name2: 'user_name2',
    user_score2: 'user_score2',
    user_id3: 'user_id3',
    user_icon3: 'user_icon3',
    user_name3: 'user_name3',
    user_score3: 'user_score3',
    ip: 'ip',
    port: 'port',
    baseScore: 'baseScore'
  };

  export type T_roomsScalarFieldEnum = (typeof T_roomsScalarFieldEnum)[keyof typeof T_roomsScalarFieldEnum]


  export const T_usersScalarFieldEnum: {
    userid: 'userid',
    account: 'account',
    name: 'name',
    sex: 'sex',
    headimg: 'headimg',
    lv: 'lv',
    exp: 'exp',
    coins: 'coins',
    vip: 'vip',
    money: 'money',
    gems: 'gems',
    roomid: 'roomid',
    history: 'history',
    power: 'power',
    RenameCount: 'RenameCount',
    ReHeadCount: 'ReHeadCount',
    propId: 'propId'
  };

  export type T_usersScalarFieldEnum = (typeof T_usersScalarFieldEnum)[keyof typeof T_usersScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsecoinScalarFieldEnum: {
    userId: 'userId',
    useCoin: 'useCoin',
    getprizelv: 'getprizelv'
  };

  export type UsecoinScalarFieldEnum = (typeof UsecoinScalarFieldEnum)[keyof typeof UsecoinScalarFieldEnum]


  export const WincoinScalarFieldEnum: {
    userId: 'userId',
    wincoin: 'wincoin',
    lv: 'lv'
  };

  export type WincoinScalarFieldEnum = (typeof WincoinScalarFieldEnum)[keyof typeof WincoinScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type Catch_chanceWhereInput = {
    AND?: Enumerable<Catch_chanceWhereInput>
    OR?: Enumerable<Catch_chanceWhereInput>
    NOT?: Enumerable<Catch_chanceWhereInput>
    serveId?: IntFilter | number
    chance?: FloatFilter | number
  }

  export type Catch_chanceOrderByWithRelationInput = {
    serveId?: SortOrder
    chance?: SortOrder
  }

  export type Catch_chanceWhereUniqueInput = {
    serveId?: number
  }

  export type Catch_chanceOrderByWithAggregationInput = {
    serveId?: SortOrder
    chance?: SortOrder
    _count?: Catch_chanceCountOrderByAggregateInput
    _avg?: Catch_chanceAvgOrderByAggregateInput
    _max?: Catch_chanceMaxOrderByAggregateInput
    _min?: Catch_chanceMinOrderByAggregateInput
    _sum?: Catch_chanceSumOrderByAggregateInput
  }

  export type Catch_chanceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Catch_chanceScalarWhereWithAggregatesInput>
    OR?: Enumerable<Catch_chanceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Catch_chanceScalarWhereWithAggregatesInput>
    serveId?: IntWithAggregatesFilter | number
    chance?: FloatWithAggregatesFilter | number
  }

  export type Control_poolWhereInput = {
    AND?: Enumerable<Control_poolWhereInput>
    OR?: Enumerable<Control_poolWhereInput>
    NOT?: Enumerable<Control_poolWhereInput>
    serveId?: IntFilter | number
    pool?: IntFilter | number
    line?: IntFilter | number
  }

  export type Control_poolOrderByWithRelationInput = {
    serveId?: SortOrder
    pool?: SortOrder
    line?: SortOrder
  }

  export type Control_poolWhereUniqueInput = {
    serveId?: number
  }

  export type Control_poolOrderByWithAggregationInput = {
    serveId?: SortOrder
    pool?: SortOrder
    line?: SortOrder
    _count?: Control_poolCountOrderByAggregateInput
    _avg?: Control_poolAvgOrderByAggregateInput
    _max?: Control_poolMaxOrderByAggregateInput
    _min?: Control_poolMinOrderByAggregateInput
    _sum?: Control_poolSumOrderByAggregateInput
  }

  export type Control_poolScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Control_poolScalarWhereWithAggregatesInput>
    OR?: Enumerable<Control_poolScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Control_poolScalarWhereWithAggregatesInput>
    serveId?: IntWithAggregatesFilter | number
    pool?: IntWithAggregatesFilter | number
    line?: IntWithAggregatesFilter | number
  }

  export type Control_userWhereInput = {
    AND?: Enumerable<Control_userWhereInput>
    OR?: Enumerable<Control_userWhereInput>
    NOT?: Enumerable<Control_userWhereInput>
    uid?: IntFilter | number
    chance?: FloatFilter | number
  }

  export type Control_userOrderByWithRelationInput = {
    uid?: SortOrder
    chance?: SortOrder
  }

  export type Control_userWhereUniqueInput = {
    uid?: number
  }

  export type Control_userOrderByWithAggregationInput = {
    uid?: SortOrder
    chance?: SortOrder
    _count?: Control_userCountOrderByAggregateInput
    _avg?: Control_userAvgOrderByAggregateInput
    _max?: Control_userMaxOrderByAggregateInput
    _min?: Control_userMinOrderByAggregateInput
    _sum?: Control_userSumOrderByAggregateInput
  }

  export type Control_userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Control_userScalarWhereWithAggregatesInput>
    OR?: Enumerable<Control_userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Control_userScalarWhereWithAggregatesInput>
    uid?: IntWithAggregatesFilter | number
    chance?: FloatWithAggregatesFilter | number
  }

  export type DaysendprizevalueWhereInput = {
    AND?: Enumerable<DaysendprizevalueWhereInput>
    OR?: Enumerable<DaysendprizevalueWhereInput>
    NOT?: Enumerable<DaysendprizevalueWhereInput>
    day?: IntFilter | number
    value?: IntFilter | number
  }

  export type DaysendprizevalueOrderByWithRelationInput = {
    day?: SortOrder
    value?: SortOrder
  }

  export type DaysendprizevalueWhereUniqueInput = {
    day?: number
  }

  export type DaysendprizevalueOrderByWithAggregationInput = {
    day?: SortOrder
    value?: SortOrder
    _count?: DaysendprizevalueCountOrderByAggregateInput
    _avg?: DaysendprizevalueAvgOrderByAggregateInput
    _max?: DaysendprizevalueMaxOrderByAggregateInput
    _min?: DaysendprizevalueMinOrderByAggregateInput
    _sum?: DaysendprizevalueSumOrderByAggregateInput
  }

  export type DaysendprizevalueScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DaysendprizevalueScalarWhereWithAggregatesInput>
    OR?: Enumerable<DaysendprizevalueScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DaysendprizevalueScalarWhereWithAggregatesInput>
    day?: IntWithAggregatesFilter | number
    value?: IntWithAggregatesFilter | number
  }

  export type FishlogWhereInput = {
    AND?: Enumerable<FishlogWhereInput>
    OR?: Enumerable<FishlogWhereInput>
    NOT?: Enumerable<FishlogWhereInput>
    id?: IntFilter | number
    userid?: IntFilter | number
    usecoin?: IntFilter | number
    wincoin?: IntFilter | number
    balanceTime?: DateTimeFilter | Date | string
    mark?: IntFilter | number
    serverId?: IntFilter | number
  }

  export type FishlogOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    usecoin?: SortOrder
    wincoin?: SortOrder
    balanceTime?: SortOrder
    mark?: SortOrder
    serverId?: SortOrder
  }

  export type FishlogWhereUniqueInput = {
    id?: number
  }

  export type FishlogOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    usecoin?: SortOrder
    wincoin?: SortOrder
    balanceTime?: SortOrder
    mark?: SortOrder
    serverId?: SortOrder
    _count?: FishlogCountOrderByAggregateInput
    _avg?: FishlogAvgOrderByAggregateInput
    _max?: FishlogMaxOrderByAggregateInput
    _min?: FishlogMinOrderByAggregateInput
    _sum?: FishlogSumOrderByAggregateInput
  }

  export type FishlogScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FishlogScalarWhereWithAggregatesInput>
    OR?: Enumerable<FishlogScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FishlogScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userid?: IntWithAggregatesFilter | number
    usecoin?: IntWithAggregatesFilter | number
    wincoin?: IntWithAggregatesFilter | number
    balanceTime?: DateTimeWithAggregatesFilter | Date | string
    mark?: IntWithAggregatesFilter | number
    serverId?: IntWithAggregatesFilter | number
  }

  export type GetcoinWhereInput = {
    AND?: Enumerable<GetcoinWhereInput>
    OR?: Enumerable<GetcoinWhereInput>
    NOT?: Enumerable<GetcoinWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    getCoin?: IntFilter | number
    adddate?: DateTimeFilter | Date | string
    mark?: IntFilter | number
    isget?: IntFilter | number
    day?: IntFilter | number
  }

  export type GetcoinOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    getCoin?: SortOrder
    adddate?: SortOrder
    mark?: SortOrder
    isget?: SortOrder
    day?: SortOrder
  }

  export type GetcoinWhereUniqueInput = {
    id?: number
  }

  export type GetcoinOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    getCoin?: SortOrder
    adddate?: SortOrder
    mark?: SortOrder
    isget?: SortOrder
    day?: SortOrder
    _count?: GetcoinCountOrderByAggregateInput
    _avg?: GetcoinAvgOrderByAggregateInput
    _max?: GetcoinMaxOrderByAggregateInput
    _min?: GetcoinMinOrderByAggregateInput
    _sum?: GetcoinSumOrderByAggregateInput
  }

  export type GetcoinScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GetcoinScalarWhereWithAggregatesInput>
    OR?: Enumerable<GetcoinScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GetcoinScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    getCoin?: IntWithAggregatesFilter | number
    adddate?: DateTimeWithAggregatesFilter | Date | string
    mark?: IntWithAggregatesFilter | number
    isget?: IntWithAggregatesFilter | number
    day?: IntWithAggregatesFilter | number
  }

  export type LvWhereInput = {
    AND?: Enumerable<LvWhereInput>
    OR?: Enumerable<LvWhereInput>
    NOT?: Enumerable<LvWhereInput>
    lv?: IntFilter | number
    wincoinvalue?: IntFilter | number
  }

  export type LvOrderByWithRelationInput = {
    lv?: SortOrder
    wincoinvalue?: SortOrder
  }

  export type LvWhereUniqueInput = {
    lv?: number
  }

  export type LvOrderByWithAggregationInput = {
    lv?: SortOrder
    wincoinvalue?: SortOrder
    _count?: LvCountOrderByAggregateInput
    _avg?: LvAvgOrderByAggregateInput
    _max?: LvMaxOrderByAggregateInput
    _min?: LvMinOrderByAggregateInput
    _sum?: LvSumOrderByAggregateInput
  }

  export type LvScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LvScalarWhereWithAggregatesInput>
    OR?: Enumerable<LvScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LvScalarWhereWithAggregatesInput>
    lv?: IntWithAggregatesFilter | number
    wincoinvalue?: IntWithAggregatesFilter | number
  }

  export type MatchrandkingWhereInput = {
    AND?: Enumerable<MatchrandkingWhereInput>
    OR?: Enumerable<MatchrandkingWhereInput>
    NOT?: Enumerable<MatchrandkingWhereInput>
    id?: IntFilter | number
    roomType?: IntFilter | number
    matchId?: IntFilter | number
    userId?: IntFilter | number
    score?: IntFilter | number
    lastTime?: DateTimeFilter | Date | string
    winPropId?: IntFilter | number
    winPropCount?: IntFilter | number
    winScore?: IntFilter | number
    rankIdx?: IntFilter | number
    isGetPrize?: IntFilter | number
    isMsg?: IntFilter | number
    title?: StringFilter | string
    msg?: StringFilter | string
  }

  export type MatchrandkingOrderByWithRelationInput = {
    id?: SortOrder
    roomType?: SortOrder
    matchId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    lastTime?: SortOrder
    winPropId?: SortOrder
    winPropCount?: SortOrder
    winScore?: SortOrder
    rankIdx?: SortOrder
    isGetPrize?: SortOrder
    isMsg?: SortOrder
    title?: SortOrder
    msg?: SortOrder
  }

  export type MatchrandkingWhereUniqueInput = {
    id?: number
  }

  export type MatchrandkingOrderByWithAggregationInput = {
    id?: SortOrder
    roomType?: SortOrder
    matchId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    lastTime?: SortOrder
    winPropId?: SortOrder
    winPropCount?: SortOrder
    winScore?: SortOrder
    rankIdx?: SortOrder
    isGetPrize?: SortOrder
    isMsg?: SortOrder
    title?: SortOrder
    msg?: SortOrder
    _count?: MatchrandkingCountOrderByAggregateInput
    _avg?: MatchrandkingAvgOrderByAggregateInput
    _max?: MatchrandkingMaxOrderByAggregateInput
    _min?: MatchrandkingMinOrderByAggregateInput
    _sum?: MatchrandkingSumOrderByAggregateInput
  }

  export type MatchrandkingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MatchrandkingScalarWhereWithAggregatesInput>
    OR?: Enumerable<MatchrandkingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MatchrandkingScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    roomType?: IntWithAggregatesFilter | number
    matchId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    score?: IntWithAggregatesFilter | number
    lastTime?: DateTimeWithAggregatesFilter | Date | string
    winPropId?: IntWithAggregatesFilter | number
    winPropCount?: IntWithAggregatesFilter | number
    winScore?: IntWithAggregatesFilter | number
    rankIdx?: IntWithAggregatesFilter | number
    isGetPrize?: IntWithAggregatesFilter | number
    isMsg?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    msg?: StringWithAggregatesFilter | string
  }

  export type PoolWhereInput = {
    AND?: Enumerable<PoolWhereInput>
    OR?: Enumerable<PoolWhereInput>
    NOT?: Enumerable<PoolWhereInput>
    serveId?: IntFilter | number
    pool?: IntFilter | number
    virtualPool?: IntFilter | number
  }

  export type PoolOrderByWithRelationInput = {
    serveId?: SortOrder
    pool?: SortOrder
    virtualPool?: SortOrder
  }

  export type PoolWhereUniqueInput = {
    serveId?: number
  }

  export type PoolOrderByWithAggregationInput = {
    serveId?: SortOrder
    pool?: SortOrder
    virtualPool?: SortOrder
    _count?: PoolCountOrderByAggregateInput
    _avg?: PoolAvgOrderByAggregateInput
    _max?: PoolMaxOrderByAggregateInput
    _min?: PoolMinOrderByAggregateInput
    _sum?: PoolSumOrderByAggregateInput
  }

  export type PoolScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PoolScalarWhereWithAggregatesInput>
    OR?: Enumerable<PoolScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PoolScalarWhereWithAggregatesInput>
    serveId?: IntWithAggregatesFilter | number
    pool?: IntWithAggregatesFilter | number
    virtualPool?: IntWithAggregatesFilter | number
  }

  export type SendprizeWhereInput = {
    AND?: Enumerable<SendprizeWhereInput>
    OR?: Enumerable<SendprizeWhereInput>
    NOT?: Enumerable<SendprizeWhereInput>
    idx?: IntFilter | number
    propid?: IntFilter | number
    propcount?: IntFilter | number
    score?: IntFilter | number
  }

  export type SendprizeOrderByWithRelationInput = {
    idx?: SortOrder
    propid?: SortOrder
    propcount?: SortOrder
    score?: SortOrder
  }

  export type SendprizeWhereUniqueInput = {
    idx?: number
  }

  export type SendprizeOrderByWithAggregationInput = {
    idx?: SortOrder
    propid?: SortOrder
    propcount?: SortOrder
    score?: SortOrder
    _count?: SendprizeCountOrderByAggregateInput
    _avg?: SendprizeAvgOrderByAggregateInput
    _max?: SendprizeMaxOrderByAggregateInput
    _min?: SendprizeMinOrderByAggregateInput
    _sum?: SendprizeSumOrderByAggregateInput
  }

  export type SendprizeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SendprizeScalarWhereWithAggregatesInput>
    OR?: Enumerable<SendprizeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SendprizeScalarWhereWithAggregatesInput>
    idx?: IntWithAggregatesFilter | number
    propid?: IntWithAggregatesFilter | number
    propcount?: IntWithAggregatesFilter | number
    score?: IntWithAggregatesFilter | number
  }

  export type ShootprizeWhereInput = {
    AND?: Enumerable<ShootprizeWhereInput>
    OR?: Enumerable<ShootprizeWhereInput>
    NOT?: Enumerable<ShootprizeWhereInput>
    lv?: IntFilter | number
    value?: IntFilter | number
    propid?: IntFilter | number
    propcount?: IntFilter | number
    winsocre?: IntFilter | number
  }

  export type ShootprizeOrderByWithRelationInput = {
    lv?: SortOrder
    value?: SortOrder
    propid?: SortOrder
    propcount?: SortOrder
    winsocre?: SortOrder
  }

  export type ShootprizeWhereUniqueInput = {
    lv?: number
  }

  export type ShootprizeOrderByWithAggregationInput = {
    lv?: SortOrder
    value?: SortOrder
    propid?: SortOrder
    propcount?: SortOrder
    winsocre?: SortOrder
    _count?: ShootprizeCountOrderByAggregateInput
    _avg?: ShootprizeAvgOrderByAggregateInput
    _max?: ShootprizeMaxOrderByAggregateInput
    _min?: ShootprizeMinOrderByAggregateInput
    _sum?: ShootprizeSumOrderByAggregateInput
  }

  export type ShootprizeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShootprizeScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShootprizeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShootprizeScalarWhereWithAggregatesInput>
    lv?: IntWithAggregatesFilter | number
    value?: IntWithAggregatesFilter | number
    propid?: IntWithAggregatesFilter | number
    propcount?: IntWithAggregatesFilter | number
    winsocre?: IntWithAggregatesFilter | number
  }

  export type T_accountsWhereInput = {
    AND?: Enumerable<T_accountsWhereInput>
    OR?: Enumerable<T_accountsWhereInput>
    NOT?: Enumerable<T_accountsWhereInput>
    account?: StringFilter | string
    password?: StringFilter | string
  }

  export type T_accountsOrderByWithRelationInput = {
    account?: SortOrder
    password?: SortOrder
  }

  export type T_accountsWhereUniqueInput = {
    account?: string
  }

  export type T_accountsOrderByWithAggregationInput = {
    account?: SortOrder
    password?: SortOrder
    _count?: T_accountsCountOrderByAggregateInput
    _max?: T_accountsMaxOrderByAggregateInput
    _min?: T_accountsMinOrderByAggregateInput
  }

  export type T_accountsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<T_accountsScalarWhereWithAggregatesInput>
    OR?: Enumerable<T_accountsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<T_accountsScalarWhereWithAggregatesInput>
    account?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
  }

  export type T_gamesWhereInput = {
    AND?: Enumerable<T_gamesWhereInput>
    OR?: Enumerable<T_gamesWhereInput>
    NOT?: Enumerable<T_gamesWhereInput>
    room_uuid?: StringFilter | string
    game_index?: IntFilter | number
    base_info?: StringFilter | string
    create_time?: IntFilter | number
    snapshots?: StringFilter | string
    action_records?: StringFilter | string
    result?: StringFilter | string
  }

  export type T_gamesOrderByWithRelationInput = {
    room_uuid?: SortOrder
    game_index?: SortOrder
    base_info?: SortOrder
    create_time?: SortOrder
    snapshots?: SortOrder
    action_records?: SortOrder
    result?: SortOrder
  }

  export type T_gamesWhereUniqueInput = {
    room_uuid?: string
  }

  export type T_gamesOrderByWithAggregationInput = {
    room_uuid?: SortOrder
    game_index?: SortOrder
    base_info?: SortOrder
    create_time?: SortOrder
    snapshots?: SortOrder
    action_records?: SortOrder
    result?: SortOrder
    _count?: T_gamesCountOrderByAggregateInput
    _avg?: T_gamesAvgOrderByAggregateInput
    _max?: T_gamesMaxOrderByAggregateInput
    _min?: T_gamesMinOrderByAggregateInput
    _sum?: T_gamesSumOrderByAggregateInput
  }

  export type T_gamesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<T_gamesScalarWhereWithAggregatesInput>
    OR?: Enumerable<T_gamesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<T_gamesScalarWhereWithAggregatesInput>
    room_uuid?: StringWithAggregatesFilter | string
    game_index?: IntWithAggregatesFilter | number
    base_info?: StringWithAggregatesFilter | string
    create_time?: IntWithAggregatesFilter | number
    snapshots?: StringWithAggregatesFilter | string
    action_records?: StringWithAggregatesFilter | string
    result?: StringWithAggregatesFilter | string
  }

  export type T_games_archiveWhereInput = {
    AND?: Enumerable<T_games_archiveWhereInput>
    OR?: Enumerable<T_games_archiveWhereInput>
    NOT?: Enumerable<T_games_archiveWhereInput>
    room_uuid?: StringFilter | string
    game_index?: IntFilter | number
    base_info?: StringFilter | string
    create_time?: IntFilter | number
    snapshots?: StringFilter | string
    action_records?: StringFilter | string
    result?: StringFilter | string
  }

  export type T_games_archiveOrderByWithRelationInput = {
    room_uuid?: SortOrder
    game_index?: SortOrder
    base_info?: SortOrder
    create_time?: SortOrder
    snapshots?: SortOrder
    action_records?: SortOrder
    result?: SortOrder
  }

  export type T_games_archiveWhereUniqueInput = {
    room_uuid?: string
  }

  export type T_games_archiveOrderByWithAggregationInput = {
    room_uuid?: SortOrder
    game_index?: SortOrder
    base_info?: SortOrder
    create_time?: SortOrder
    snapshots?: SortOrder
    action_records?: SortOrder
    result?: SortOrder
    _count?: T_games_archiveCountOrderByAggregateInput
    _avg?: T_games_archiveAvgOrderByAggregateInput
    _max?: T_games_archiveMaxOrderByAggregateInput
    _min?: T_games_archiveMinOrderByAggregateInput
    _sum?: T_games_archiveSumOrderByAggregateInput
  }

  export type T_games_archiveScalarWhereWithAggregatesInput = {
    AND?: Enumerable<T_games_archiveScalarWhereWithAggregatesInput>
    OR?: Enumerable<T_games_archiveScalarWhereWithAggregatesInput>
    NOT?: Enumerable<T_games_archiveScalarWhereWithAggregatesInput>
    room_uuid?: StringWithAggregatesFilter | string
    game_index?: IntWithAggregatesFilter | number
    base_info?: StringWithAggregatesFilter | string
    create_time?: IntWithAggregatesFilter | number
    snapshots?: StringWithAggregatesFilter | string
    action_records?: StringWithAggregatesFilter | string
    result?: StringWithAggregatesFilter | string
  }

  export type T_guestsWhereInput = {
    AND?: Enumerable<T_guestsWhereInput>
    OR?: Enumerable<T_guestsWhereInput>
    NOT?: Enumerable<T_guestsWhereInput>
    guest_account?: StringFilter | string
  }

  export type T_guestsOrderByWithRelationInput = {
    guest_account?: SortOrder
  }

  export type T_guestsWhereUniqueInput = {
    guest_account?: string
  }

  export type T_guestsOrderByWithAggregationInput = {
    guest_account?: SortOrder
    _count?: T_guestsCountOrderByAggregateInput
    _max?: T_guestsMaxOrderByAggregateInput
    _min?: T_guestsMinOrderByAggregateInput
  }

  export type T_guestsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<T_guestsScalarWhereWithAggregatesInput>
    OR?: Enumerable<T_guestsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<T_guestsScalarWhereWithAggregatesInput>
    guest_account?: StringWithAggregatesFilter | string
  }

  export type T_messageWhereInput = {
    AND?: Enumerable<T_messageWhereInput>
    OR?: Enumerable<T_messageWhereInput>
    NOT?: Enumerable<T_messageWhereInput>
    type?: StringFilter | string
    msg?: StringFilter | string
    version?: StringFilter | string
  }

  export type T_messageOrderByWithRelationInput = {
    type?: SortOrder
    msg?: SortOrder
    version?: SortOrder
  }

  export type T_messageWhereUniqueInput = {
    type?: string
  }

  export type T_messageOrderByWithAggregationInput = {
    type?: SortOrder
    msg?: SortOrder
    version?: SortOrder
    _count?: T_messageCountOrderByAggregateInput
    _max?: T_messageMaxOrderByAggregateInput
    _min?: T_messageMinOrderByAggregateInput
  }

  export type T_messageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<T_messageScalarWhereWithAggregatesInput>
    OR?: Enumerable<T_messageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<T_messageScalarWhereWithAggregatesInput>
    type?: StringWithAggregatesFilter | string
    msg?: StringWithAggregatesFilter | string
    version?: StringWithAggregatesFilter | string
  }

  export type T_propertyWhereInput = {
    AND?: Enumerable<T_propertyWhereInput>
    OR?: Enumerable<T_propertyWhereInput>
    NOT?: Enumerable<T_propertyWhereInput>
    propId?: IntFilter | number
    userid?: IntFilter | number
    ice?: IntFilter | number
  }

  export type T_propertyOrderByWithRelationInput = {
    propId?: SortOrder
    userid?: SortOrder
    ice?: SortOrder
  }

  export type T_propertyWhereUniqueInput = {
    propId?: number
  }

  export type T_propertyOrderByWithAggregationInput = {
    propId?: SortOrder
    userid?: SortOrder
    ice?: SortOrder
    _count?: T_propertyCountOrderByAggregateInput
    _avg?: T_propertyAvgOrderByAggregateInput
    _max?: T_propertyMaxOrderByAggregateInput
    _min?: T_propertyMinOrderByAggregateInput
    _sum?: T_propertySumOrderByAggregateInput
  }

  export type T_propertyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<T_propertyScalarWhereWithAggregatesInput>
    OR?: Enumerable<T_propertyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<T_propertyScalarWhereWithAggregatesInput>
    propId?: IntWithAggregatesFilter | number
    userid?: IntWithAggregatesFilter | number
    ice?: IntWithAggregatesFilter | number
  }

  export type T_roomsWhereInput = {
    AND?: Enumerable<T_roomsWhereInput>
    OR?: Enumerable<T_roomsWhereInput>
    NOT?: Enumerable<T_roomsWhereInput>
    uuid?: StringFilter | string
    id?: StringFilter | string
    base_info?: StringFilter | string
    create_time?: IntFilter | number
    num_of_turns?: IntFilter | number
    next_button?: IntFilter | number
    user_id0?: IntFilter | number
    user_icon0?: StringFilter | string
    user_name0?: StringFilter | string
    user_score0?: IntFilter | number
    user_id1?: IntFilter | number
    user_icon1?: StringFilter | string
    user_name1?: StringFilter | string
    user_score1?: IntFilter | number
    user_id2?: IntFilter | number
    user_icon2?: StringFilter | string
    user_name2?: StringFilter | string
    user_score2?: IntFilter | number
    user_id3?: IntFilter | number
    user_icon3?: StringFilter | string
    user_name3?: StringFilter | string
    user_score3?: IntFilter | number
    ip?: StringFilter | string
    port?: IntFilter | number
    baseScore?: IntFilter | number
  }

  export type T_roomsOrderByWithRelationInput = {
    uuid?: SortOrder
    id?: SortOrder
    base_info?: SortOrder
    create_time?: SortOrder
    num_of_turns?: SortOrder
    next_button?: SortOrder
    user_id0?: SortOrder
    user_icon0?: SortOrder
    user_name0?: SortOrder
    user_score0?: SortOrder
    user_id1?: SortOrder
    user_icon1?: SortOrder
    user_name1?: SortOrder
    user_score1?: SortOrder
    user_id2?: SortOrder
    user_icon2?: SortOrder
    user_name2?: SortOrder
    user_score2?: SortOrder
    user_id3?: SortOrder
    user_icon3?: SortOrder
    user_name3?: SortOrder
    user_score3?: SortOrder
    ip?: SortOrder
    port?: SortOrder
    baseScore?: SortOrder
  }

  export type T_roomsWhereUniqueInput = {
    uuid?: string
  }

  export type T_roomsOrderByWithAggregationInput = {
    uuid?: SortOrder
    id?: SortOrder
    base_info?: SortOrder
    create_time?: SortOrder
    num_of_turns?: SortOrder
    next_button?: SortOrder
    user_id0?: SortOrder
    user_icon0?: SortOrder
    user_name0?: SortOrder
    user_score0?: SortOrder
    user_id1?: SortOrder
    user_icon1?: SortOrder
    user_name1?: SortOrder
    user_score1?: SortOrder
    user_id2?: SortOrder
    user_icon2?: SortOrder
    user_name2?: SortOrder
    user_score2?: SortOrder
    user_id3?: SortOrder
    user_icon3?: SortOrder
    user_name3?: SortOrder
    user_score3?: SortOrder
    ip?: SortOrder
    port?: SortOrder
    baseScore?: SortOrder
    _count?: T_roomsCountOrderByAggregateInput
    _avg?: T_roomsAvgOrderByAggregateInput
    _max?: T_roomsMaxOrderByAggregateInput
    _min?: T_roomsMinOrderByAggregateInput
    _sum?: T_roomsSumOrderByAggregateInput
  }

  export type T_roomsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<T_roomsScalarWhereWithAggregatesInput>
    OR?: Enumerable<T_roomsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<T_roomsScalarWhereWithAggregatesInput>
    uuid?: StringWithAggregatesFilter | string
    id?: StringWithAggregatesFilter | string
    base_info?: StringWithAggregatesFilter | string
    create_time?: IntWithAggregatesFilter | number
    num_of_turns?: IntWithAggregatesFilter | number
    next_button?: IntWithAggregatesFilter | number
    user_id0?: IntWithAggregatesFilter | number
    user_icon0?: StringWithAggregatesFilter | string
    user_name0?: StringWithAggregatesFilter | string
    user_score0?: IntWithAggregatesFilter | number
    user_id1?: IntWithAggregatesFilter | number
    user_icon1?: StringWithAggregatesFilter | string
    user_name1?: StringWithAggregatesFilter | string
    user_score1?: IntWithAggregatesFilter | number
    user_id2?: IntWithAggregatesFilter | number
    user_icon2?: StringWithAggregatesFilter | string
    user_name2?: StringWithAggregatesFilter | string
    user_score2?: IntWithAggregatesFilter | number
    user_id3?: IntWithAggregatesFilter | number
    user_icon3?: StringWithAggregatesFilter | string
    user_name3?: StringWithAggregatesFilter | string
    user_score3?: IntWithAggregatesFilter | number
    ip?: StringWithAggregatesFilter | string
    port?: IntWithAggregatesFilter | number
    baseScore?: IntWithAggregatesFilter | number
  }

  export type T_usersWhereInput = {
    AND?: Enumerable<T_usersWhereInput>
    OR?: Enumerable<T_usersWhereInput>
    NOT?: Enumerable<T_usersWhereInput>
    userid?: IntFilter | number
    account?: StringFilter | string
    name?: StringFilter | string
    sex?: IntFilter | number
    headimg?: StringFilter | string
    lv?: IntFilter | number
    exp?: IntFilter | number
    coins?: IntFilter | number
    vip?: IntFilter | number
    money?: IntFilter | number
    gems?: IntFilter | number
    roomid?: StringFilter | string
    history?: StringFilter | string
    power?: IntFilter | number
    RenameCount?: IntFilter | number
    ReHeadCount?: IntFilter | number
    propId?: IntFilter | number
  }

  export type T_usersOrderByWithRelationInput = {
    userid?: SortOrder
    account?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    headimg?: SortOrder
    lv?: SortOrder
    exp?: SortOrder
    coins?: SortOrder
    vip?: SortOrder
    money?: SortOrder
    gems?: SortOrder
    roomid?: SortOrder
    history?: SortOrder
    power?: SortOrder
    RenameCount?: SortOrder
    ReHeadCount?: SortOrder
    propId?: SortOrder
  }

  export type T_usersWhereUniqueInput = {
    userid?: number
  }

  export type T_usersOrderByWithAggregationInput = {
    userid?: SortOrder
    account?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    headimg?: SortOrder
    lv?: SortOrder
    exp?: SortOrder
    coins?: SortOrder
    vip?: SortOrder
    money?: SortOrder
    gems?: SortOrder
    roomid?: SortOrder
    history?: SortOrder
    power?: SortOrder
    RenameCount?: SortOrder
    ReHeadCount?: SortOrder
    propId?: SortOrder
    _count?: T_usersCountOrderByAggregateInput
    _avg?: T_usersAvgOrderByAggregateInput
    _max?: T_usersMaxOrderByAggregateInput
    _min?: T_usersMinOrderByAggregateInput
    _sum?: T_usersSumOrderByAggregateInput
  }

  export type T_usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<T_usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<T_usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<T_usersScalarWhereWithAggregatesInput>
    userid?: IntWithAggregatesFilter | number
    account?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    sex?: IntWithAggregatesFilter | number
    headimg?: StringWithAggregatesFilter | string
    lv?: IntWithAggregatesFilter | number
    exp?: IntWithAggregatesFilter | number
    coins?: IntWithAggregatesFilter | number
    vip?: IntWithAggregatesFilter | number
    money?: IntWithAggregatesFilter | number
    gems?: IntWithAggregatesFilter | number
    roomid?: StringWithAggregatesFilter | string
    history?: StringWithAggregatesFilter | string
    power?: IntWithAggregatesFilter | number
    RenameCount?: IntWithAggregatesFilter | number
    ReHeadCount?: IntWithAggregatesFilter | number
    propId?: IntWithAggregatesFilter | number
  }

  export type UsecoinWhereInput = {
    AND?: Enumerable<UsecoinWhereInput>
    OR?: Enumerable<UsecoinWhereInput>
    NOT?: Enumerable<UsecoinWhereInput>
    userId?: IntFilter | number
    useCoin?: IntFilter | number
    getprizelv?: IntFilter | number
  }

  export type UsecoinOrderByWithRelationInput = {
    userId?: SortOrder
    useCoin?: SortOrder
    getprizelv?: SortOrder
  }

  export type UsecoinWhereUniqueInput = {
    userId?: number
  }

  export type UsecoinOrderByWithAggregationInput = {
    userId?: SortOrder
    useCoin?: SortOrder
    getprizelv?: SortOrder
    _count?: UsecoinCountOrderByAggregateInput
    _avg?: UsecoinAvgOrderByAggregateInput
    _max?: UsecoinMaxOrderByAggregateInput
    _min?: UsecoinMinOrderByAggregateInput
    _sum?: UsecoinSumOrderByAggregateInput
  }

  export type UsecoinScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsecoinScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsecoinScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsecoinScalarWhereWithAggregatesInput>
    userId?: IntWithAggregatesFilter | number
    useCoin?: IntWithAggregatesFilter | number
    getprizelv?: IntWithAggregatesFilter | number
  }

  export type WincoinWhereInput = {
    AND?: Enumerable<WincoinWhereInput>
    OR?: Enumerable<WincoinWhereInput>
    NOT?: Enumerable<WincoinWhereInput>
    userId?: IntFilter | number
    wincoin?: IntFilter | number
    lv?: IntFilter | number
  }

  export type WincoinOrderByWithRelationInput = {
    userId?: SortOrder
    wincoin?: SortOrder
    lv?: SortOrder
  }

  export type WincoinWhereUniqueInput = {
    userId?: number
  }

  export type WincoinOrderByWithAggregationInput = {
    userId?: SortOrder
    wincoin?: SortOrder
    lv?: SortOrder
    _count?: WincoinCountOrderByAggregateInput
    _avg?: WincoinAvgOrderByAggregateInput
    _max?: WincoinMaxOrderByAggregateInput
    _min?: WincoinMinOrderByAggregateInput
    _sum?: WincoinSumOrderByAggregateInput
  }

  export type WincoinScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WincoinScalarWhereWithAggregatesInput>
    OR?: Enumerable<WincoinScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WincoinScalarWhereWithAggregatesInput>
    userId?: IntWithAggregatesFilter | number
    wincoin?: IntWithAggregatesFilter | number
    lv?: IntWithAggregatesFilter | number
  }

  export type Catch_chanceCreateInput = {
    serveId: number
    chance: number
  }

  export type Catch_chanceUncheckedCreateInput = {
    serveId: number
    chance: number
  }

  export type Catch_chanceUpdateInput = {
    serveId?: IntFieldUpdateOperationsInput | number
    chance?: FloatFieldUpdateOperationsInput | number
  }

  export type Catch_chanceUncheckedUpdateInput = {
    serveId?: IntFieldUpdateOperationsInput | number
    chance?: FloatFieldUpdateOperationsInput | number
  }

  export type Catch_chanceCreateManyInput = {
    serveId: number
    chance: number
  }

  export type Catch_chanceUpdateManyMutationInput = {
    serveId?: IntFieldUpdateOperationsInput | number
    chance?: FloatFieldUpdateOperationsInput | number
  }

  export type Catch_chanceUncheckedUpdateManyInput = {
    serveId?: IntFieldUpdateOperationsInput | number
    chance?: FloatFieldUpdateOperationsInput | number
  }

  export type Control_poolCreateInput = {
    serveId: number
    pool: number
    line: number
  }

  export type Control_poolUncheckedCreateInput = {
    serveId: number
    pool: number
    line: number
  }

  export type Control_poolUpdateInput = {
    serveId?: IntFieldUpdateOperationsInput | number
    pool?: IntFieldUpdateOperationsInput | number
    line?: IntFieldUpdateOperationsInput | number
  }

  export type Control_poolUncheckedUpdateInput = {
    serveId?: IntFieldUpdateOperationsInput | number
    pool?: IntFieldUpdateOperationsInput | number
    line?: IntFieldUpdateOperationsInput | number
  }

  export type Control_poolCreateManyInput = {
    serveId: number
    pool: number
    line: number
  }

  export type Control_poolUpdateManyMutationInput = {
    serveId?: IntFieldUpdateOperationsInput | number
    pool?: IntFieldUpdateOperationsInput | number
    line?: IntFieldUpdateOperationsInput | number
  }

  export type Control_poolUncheckedUpdateManyInput = {
    serveId?: IntFieldUpdateOperationsInput | number
    pool?: IntFieldUpdateOperationsInput | number
    line?: IntFieldUpdateOperationsInput | number
  }

  export type Control_userCreateInput = {
    uid: number
    chance: number
  }

  export type Control_userUncheckedCreateInput = {
    uid: number
    chance: number
  }

  export type Control_userUpdateInput = {
    uid?: IntFieldUpdateOperationsInput | number
    chance?: FloatFieldUpdateOperationsInput | number
  }

  export type Control_userUncheckedUpdateInput = {
    uid?: IntFieldUpdateOperationsInput | number
    chance?: FloatFieldUpdateOperationsInput | number
  }

  export type Control_userCreateManyInput = {
    uid: number
    chance: number
  }

  export type Control_userUpdateManyMutationInput = {
    uid?: IntFieldUpdateOperationsInput | number
    chance?: FloatFieldUpdateOperationsInput | number
  }

  export type Control_userUncheckedUpdateManyInput = {
    uid?: IntFieldUpdateOperationsInput | number
    chance?: FloatFieldUpdateOperationsInput | number
  }

  export type DaysendprizevalueCreateInput = {
    day: number
    value: number
  }

  export type DaysendprizevalueUncheckedCreateInput = {
    day: number
    value: number
  }

  export type DaysendprizevalueUpdateInput = {
    day?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
  }

  export type DaysendprizevalueUncheckedUpdateInput = {
    day?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
  }

  export type DaysendprizevalueCreateManyInput = {
    day: number
    value: number
  }

  export type DaysendprizevalueUpdateManyMutationInput = {
    day?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
  }

  export type DaysendprizevalueUncheckedUpdateManyInput = {
    day?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
  }

  export type FishlogCreateInput = {
    userid: number
    usecoin: number
    wincoin: number
    balanceTime?: Date | string
    mark: number
    serverId: number
  }

  export type FishlogUncheckedCreateInput = {
    id?: number
    userid: number
    usecoin: number
    wincoin: number
    balanceTime?: Date | string
    mark: number
    serverId: number
  }

  export type FishlogUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    usecoin?: IntFieldUpdateOperationsInput | number
    wincoin?: IntFieldUpdateOperationsInput | number
    balanceTime?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
  }

  export type FishlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    usecoin?: IntFieldUpdateOperationsInput | number
    wincoin?: IntFieldUpdateOperationsInput | number
    balanceTime?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
  }

  export type FishlogCreateManyInput = {
    id?: number
    userid: number
    usecoin: number
    wincoin: number
    balanceTime?: Date | string
    mark: number
    serverId: number
  }

  export type FishlogUpdateManyMutationInput = {
    userid?: IntFieldUpdateOperationsInput | number
    usecoin?: IntFieldUpdateOperationsInput | number
    wincoin?: IntFieldUpdateOperationsInput | number
    balanceTime?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
  }

  export type FishlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    usecoin?: IntFieldUpdateOperationsInput | number
    wincoin?: IntFieldUpdateOperationsInput | number
    balanceTime?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
  }

  export type GetcoinCreateInput = {
    userId: number
    getCoin: number
    adddate?: Date | string
    mark: number
    isget: number
    day: number
  }

  export type GetcoinUncheckedCreateInput = {
    id?: number
    userId: number
    getCoin: number
    adddate?: Date | string
    mark: number
    isget: number
    day: number
  }

  export type GetcoinUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    getCoin?: IntFieldUpdateOperationsInput | number
    adddate?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
    isget?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
  }

  export type GetcoinUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    getCoin?: IntFieldUpdateOperationsInput | number
    adddate?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
    isget?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
  }

  export type GetcoinCreateManyInput = {
    id?: number
    userId: number
    getCoin: number
    adddate?: Date | string
    mark: number
    isget: number
    day: number
  }

  export type GetcoinUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    getCoin?: IntFieldUpdateOperationsInput | number
    adddate?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
    isget?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
  }

  export type GetcoinUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    getCoin?: IntFieldUpdateOperationsInput | number
    adddate?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: IntFieldUpdateOperationsInput | number
    isget?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
  }

  export type LvCreateInput = {
    lv: number
    wincoinvalue: number
  }

  export type LvUncheckedCreateInput = {
    lv: number
    wincoinvalue: number
  }

  export type LvUpdateInput = {
    lv?: IntFieldUpdateOperationsInput | number
    wincoinvalue?: IntFieldUpdateOperationsInput | number
  }

  export type LvUncheckedUpdateInput = {
    lv?: IntFieldUpdateOperationsInput | number
    wincoinvalue?: IntFieldUpdateOperationsInput | number
  }

  export type LvCreateManyInput = {
    lv: number
    wincoinvalue: number
  }

  export type LvUpdateManyMutationInput = {
    lv?: IntFieldUpdateOperationsInput | number
    wincoinvalue?: IntFieldUpdateOperationsInput | number
  }

  export type LvUncheckedUpdateManyInput = {
    lv?: IntFieldUpdateOperationsInput | number
    wincoinvalue?: IntFieldUpdateOperationsInput | number
  }

  export type MatchrandkingCreateInput = {
    roomType: number
    matchId: number
    userId: number
    score: number
    lastTime?: Date | string
    winPropId: number
    winPropCount: number
    winScore: number
    rankIdx: number
    isGetPrize: number
    isMsg: number
    title: string
    msg: string
  }

  export type MatchrandkingUncheckedCreateInput = {
    id?: number
    roomType: number
    matchId: number
    userId: number
    score: number
    lastTime?: Date | string
    winPropId: number
    winPropCount: number
    winScore: number
    rankIdx: number
    isGetPrize: number
    isMsg: number
    title: string
    msg: string
  }

  export type MatchrandkingUpdateInput = {
    roomType?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    lastTime?: DateTimeFieldUpdateOperationsInput | Date | string
    winPropId?: IntFieldUpdateOperationsInput | number
    winPropCount?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    rankIdx?: IntFieldUpdateOperationsInput | number
    isGetPrize?: IntFieldUpdateOperationsInput | number
    isMsg?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type MatchrandkingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomType?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    lastTime?: DateTimeFieldUpdateOperationsInput | Date | string
    winPropId?: IntFieldUpdateOperationsInput | number
    winPropCount?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    rankIdx?: IntFieldUpdateOperationsInput | number
    isGetPrize?: IntFieldUpdateOperationsInput | number
    isMsg?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type MatchrandkingCreateManyInput = {
    id?: number
    roomType: number
    matchId: number
    userId: number
    score: number
    lastTime?: Date | string
    winPropId: number
    winPropCount: number
    winScore: number
    rankIdx: number
    isGetPrize: number
    isMsg: number
    title: string
    msg: string
  }

  export type MatchrandkingUpdateManyMutationInput = {
    roomType?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    lastTime?: DateTimeFieldUpdateOperationsInput | Date | string
    winPropId?: IntFieldUpdateOperationsInput | number
    winPropCount?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    rankIdx?: IntFieldUpdateOperationsInput | number
    isGetPrize?: IntFieldUpdateOperationsInput | number
    isMsg?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type MatchrandkingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomType?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    lastTime?: DateTimeFieldUpdateOperationsInput | Date | string
    winPropId?: IntFieldUpdateOperationsInput | number
    winPropCount?: IntFieldUpdateOperationsInput | number
    winScore?: IntFieldUpdateOperationsInput | number
    rankIdx?: IntFieldUpdateOperationsInput | number
    isGetPrize?: IntFieldUpdateOperationsInput | number
    isMsg?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type PoolCreateInput = {
    serveId: number
    pool: number
    virtualPool: number
  }

  export type PoolUncheckedCreateInput = {
    serveId: number
    pool: number
    virtualPool: number
  }

  export type PoolUpdateInput = {
    serveId?: IntFieldUpdateOperationsInput | number
    pool?: IntFieldUpdateOperationsInput | number
    virtualPool?: IntFieldUpdateOperationsInput | number
  }

  export type PoolUncheckedUpdateInput = {
    serveId?: IntFieldUpdateOperationsInput | number
    pool?: IntFieldUpdateOperationsInput | number
    virtualPool?: IntFieldUpdateOperationsInput | number
  }

  export type PoolCreateManyInput = {
    serveId: number
    pool: number
    virtualPool: number
  }

  export type PoolUpdateManyMutationInput = {
    serveId?: IntFieldUpdateOperationsInput | number
    pool?: IntFieldUpdateOperationsInput | number
    virtualPool?: IntFieldUpdateOperationsInput | number
  }

  export type PoolUncheckedUpdateManyInput = {
    serveId?: IntFieldUpdateOperationsInput | number
    pool?: IntFieldUpdateOperationsInput | number
    virtualPool?: IntFieldUpdateOperationsInput | number
  }

  export type SendprizeCreateInput = {
    propid: number
    propcount: number
    score: number
  }

  export type SendprizeUncheckedCreateInput = {
    idx?: number
    propid: number
    propcount: number
    score: number
  }

  export type SendprizeUpdateInput = {
    propid?: IntFieldUpdateOperationsInput | number
    propcount?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type SendprizeUncheckedUpdateInput = {
    idx?: IntFieldUpdateOperationsInput | number
    propid?: IntFieldUpdateOperationsInput | number
    propcount?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type SendprizeCreateManyInput = {
    idx?: number
    propid: number
    propcount: number
    score: number
  }

  export type SendprizeUpdateManyMutationInput = {
    propid?: IntFieldUpdateOperationsInput | number
    propcount?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type SendprizeUncheckedUpdateManyInput = {
    idx?: IntFieldUpdateOperationsInput | number
    propid?: IntFieldUpdateOperationsInput | number
    propcount?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type ShootprizeCreateInput = {
    value: number
    propid: number
    propcount: number
    winsocre: number
  }

  export type ShootprizeUncheckedCreateInput = {
    lv?: number
    value: number
    propid: number
    propcount: number
    winsocre: number
  }

  export type ShootprizeUpdateInput = {
    value?: IntFieldUpdateOperationsInput | number
    propid?: IntFieldUpdateOperationsInput | number
    propcount?: IntFieldUpdateOperationsInput | number
    winsocre?: IntFieldUpdateOperationsInput | number
  }

  export type ShootprizeUncheckedUpdateInput = {
    lv?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    propid?: IntFieldUpdateOperationsInput | number
    propcount?: IntFieldUpdateOperationsInput | number
    winsocre?: IntFieldUpdateOperationsInput | number
  }

  export type ShootprizeCreateManyInput = {
    lv?: number
    value: number
    propid: number
    propcount: number
    winsocre: number
  }

  export type ShootprizeUpdateManyMutationInput = {
    value?: IntFieldUpdateOperationsInput | number
    propid?: IntFieldUpdateOperationsInput | number
    propcount?: IntFieldUpdateOperationsInput | number
    winsocre?: IntFieldUpdateOperationsInput | number
  }

  export type ShootprizeUncheckedUpdateManyInput = {
    lv?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    propid?: IntFieldUpdateOperationsInput | number
    propcount?: IntFieldUpdateOperationsInput | number
    winsocre?: IntFieldUpdateOperationsInput | number
  }

  export type T_accountsCreateInput = {
    account: string
    password: string
  }

  export type T_accountsUncheckedCreateInput = {
    account: string
    password: string
  }

  export type T_accountsUpdateInput = {
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type T_accountsUncheckedUpdateInput = {
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type T_accountsCreateManyInput = {
    account: string
    password: string
  }

  export type T_accountsUpdateManyMutationInput = {
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type T_accountsUncheckedUpdateManyInput = {
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type T_gamesCreateInput = {
    room_uuid: string
    game_index: number
    base_info: string
    create_time: number
    snapshots: string
    action_records: string
    result: string
  }

  export type T_gamesUncheckedCreateInput = {
    room_uuid: string
    game_index: number
    base_info: string
    create_time: number
    snapshots: string
    action_records: string
    result: string
  }

  export type T_gamesUpdateInput = {
    room_uuid?: StringFieldUpdateOperationsInput | string
    game_index?: IntFieldUpdateOperationsInput | number
    base_info?: StringFieldUpdateOperationsInput | string
    create_time?: IntFieldUpdateOperationsInput | number
    snapshots?: StringFieldUpdateOperationsInput | string
    action_records?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
  }

  export type T_gamesUncheckedUpdateInput = {
    room_uuid?: StringFieldUpdateOperationsInput | string
    game_index?: IntFieldUpdateOperationsInput | number
    base_info?: StringFieldUpdateOperationsInput | string
    create_time?: IntFieldUpdateOperationsInput | number
    snapshots?: StringFieldUpdateOperationsInput | string
    action_records?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
  }

  export type T_gamesCreateManyInput = {
    room_uuid: string
    game_index: number
    base_info: string
    create_time: number
    snapshots: string
    action_records: string
    result: string
  }

  export type T_gamesUpdateManyMutationInput = {
    room_uuid?: StringFieldUpdateOperationsInput | string
    game_index?: IntFieldUpdateOperationsInput | number
    base_info?: StringFieldUpdateOperationsInput | string
    create_time?: IntFieldUpdateOperationsInput | number
    snapshots?: StringFieldUpdateOperationsInput | string
    action_records?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
  }

  export type T_gamesUncheckedUpdateManyInput = {
    room_uuid?: StringFieldUpdateOperationsInput | string
    game_index?: IntFieldUpdateOperationsInput | number
    base_info?: StringFieldUpdateOperationsInput | string
    create_time?: IntFieldUpdateOperationsInput | number
    snapshots?: StringFieldUpdateOperationsInput | string
    action_records?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
  }

  export type T_games_archiveCreateInput = {
    room_uuid: string
    game_index: number
    base_info: string
    create_time: number
    snapshots: string
    action_records: string
    result: string
  }

  export type T_games_archiveUncheckedCreateInput = {
    room_uuid: string
    game_index: number
    base_info: string
    create_time: number
    snapshots: string
    action_records: string
    result: string
  }

  export type T_games_archiveUpdateInput = {
    room_uuid?: StringFieldUpdateOperationsInput | string
    game_index?: IntFieldUpdateOperationsInput | number
    base_info?: StringFieldUpdateOperationsInput | string
    create_time?: IntFieldUpdateOperationsInput | number
    snapshots?: StringFieldUpdateOperationsInput | string
    action_records?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
  }

  export type T_games_archiveUncheckedUpdateInput = {
    room_uuid?: StringFieldUpdateOperationsInput | string
    game_index?: IntFieldUpdateOperationsInput | number
    base_info?: StringFieldUpdateOperationsInput | string
    create_time?: IntFieldUpdateOperationsInput | number
    snapshots?: StringFieldUpdateOperationsInput | string
    action_records?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
  }

  export type T_games_archiveCreateManyInput = {
    room_uuid: string
    game_index: number
    base_info: string
    create_time: number
    snapshots: string
    action_records: string
    result: string
  }

  export type T_games_archiveUpdateManyMutationInput = {
    room_uuid?: StringFieldUpdateOperationsInput | string
    game_index?: IntFieldUpdateOperationsInput | number
    base_info?: StringFieldUpdateOperationsInput | string
    create_time?: IntFieldUpdateOperationsInput | number
    snapshots?: StringFieldUpdateOperationsInput | string
    action_records?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
  }

  export type T_games_archiveUncheckedUpdateManyInput = {
    room_uuid?: StringFieldUpdateOperationsInput | string
    game_index?: IntFieldUpdateOperationsInput | number
    base_info?: StringFieldUpdateOperationsInput | string
    create_time?: IntFieldUpdateOperationsInput | number
    snapshots?: StringFieldUpdateOperationsInput | string
    action_records?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
  }

  export type T_guestsCreateInput = {
    guest_account: string
  }

  export type T_guestsUncheckedCreateInput = {
    guest_account: string
  }

  export type T_guestsUpdateInput = {
    guest_account?: StringFieldUpdateOperationsInput | string
  }

  export type T_guestsUncheckedUpdateInput = {
    guest_account?: StringFieldUpdateOperationsInput | string
  }

  export type T_guestsCreateManyInput = {
    guest_account: string
  }

  export type T_guestsUpdateManyMutationInput = {
    guest_account?: StringFieldUpdateOperationsInput | string
  }

  export type T_guestsUncheckedUpdateManyInput = {
    guest_account?: StringFieldUpdateOperationsInput | string
  }

  export type T_messageCreateInput = {
    type: string
    msg: string
    version: string
  }

  export type T_messageUncheckedCreateInput = {
    type: string
    msg: string
    version: string
  }

  export type T_messageUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    msg?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
  }

  export type T_messageUncheckedUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    msg?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
  }

  export type T_messageCreateManyInput = {
    type: string
    msg: string
    version: string
  }

  export type T_messageUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    msg?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
  }

  export type T_messageUncheckedUpdateManyInput = {
    type?: StringFieldUpdateOperationsInput | string
    msg?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
  }

  export type T_propertyCreateInput = {
    userid: number
    ice: number
  }

  export type T_propertyUncheckedCreateInput = {
    propId?: number
    userid: number
    ice: number
  }

  export type T_propertyUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    ice?: IntFieldUpdateOperationsInput | number
  }

  export type T_propertyUncheckedUpdateInput = {
    propId?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    ice?: IntFieldUpdateOperationsInput | number
  }

  export type T_propertyCreateManyInput = {
    propId?: number
    userid: number
    ice: number
  }

  export type T_propertyUpdateManyMutationInput = {
    userid?: IntFieldUpdateOperationsInput | number
    ice?: IntFieldUpdateOperationsInput | number
  }

  export type T_propertyUncheckedUpdateManyInput = {
    propId?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    ice?: IntFieldUpdateOperationsInput | number
  }

  export type T_roomsCreateInput = {
    uuid: string
    id: string
    base_info: string
    create_time: number
    num_of_turns: number
    next_button: number
    user_id0: number
    user_icon0: string
    user_name0: string
    user_score0: number
    user_id1: number
    user_icon1: string
    user_name1: string
    user_score1: number
    user_id2: number
    user_icon2: string
    user_name2: string
    user_score2: number
    user_id3: number
    user_icon3: string
    user_name3: string
    user_score3: number
    ip: string
    port: number
    baseScore: number
  }

  export type T_roomsUncheckedCreateInput = {
    uuid: string
    id: string
    base_info: string
    create_time: number
    num_of_turns: number
    next_button: number
    user_id0: number
    user_icon0: string
    user_name0: string
    user_score0: number
    user_id1: number
    user_icon1: string
    user_name1: string
    user_score1: number
    user_id2: number
    user_icon2: string
    user_name2: string
    user_score2: number
    user_id3: number
    user_icon3: string
    user_name3: string
    user_score3: number
    ip: string
    port: number
    baseScore: number
  }

  export type T_roomsUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    base_info?: StringFieldUpdateOperationsInput | string
    create_time?: IntFieldUpdateOperationsInput | number
    num_of_turns?: IntFieldUpdateOperationsInput | number
    next_button?: IntFieldUpdateOperationsInput | number
    user_id0?: IntFieldUpdateOperationsInput | number
    user_icon0?: StringFieldUpdateOperationsInput | string
    user_name0?: StringFieldUpdateOperationsInput | string
    user_score0?: IntFieldUpdateOperationsInput | number
    user_id1?: IntFieldUpdateOperationsInput | number
    user_icon1?: StringFieldUpdateOperationsInput | string
    user_name1?: StringFieldUpdateOperationsInput | string
    user_score1?: IntFieldUpdateOperationsInput | number
    user_id2?: IntFieldUpdateOperationsInput | number
    user_icon2?: StringFieldUpdateOperationsInput | string
    user_name2?: StringFieldUpdateOperationsInput | string
    user_score2?: IntFieldUpdateOperationsInput | number
    user_id3?: IntFieldUpdateOperationsInput | number
    user_icon3?: StringFieldUpdateOperationsInput | string
    user_name3?: StringFieldUpdateOperationsInput | string
    user_score3?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    baseScore?: IntFieldUpdateOperationsInput | number
  }

  export type T_roomsUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    base_info?: StringFieldUpdateOperationsInput | string
    create_time?: IntFieldUpdateOperationsInput | number
    num_of_turns?: IntFieldUpdateOperationsInput | number
    next_button?: IntFieldUpdateOperationsInput | number
    user_id0?: IntFieldUpdateOperationsInput | number
    user_icon0?: StringFieldUpdateOperationsInput | string
    user_name0?: StringFieldUpdateOperationsInput | string
    user_score0?: IntFieldUpdateOperationsInput | number
    user_id1?: IntFieldUpdateOperationsInput | number
    user_icon1?: StringFieldUpdateOperationsInput | string
    user_name1?: StringFieldUpdateOperationsInput | string
    user_score1?: IntFieldUpdateOperationsInput | number
    user_id2?: IntFieldUpdateOperationsInput | number
    user_icon2?: StringFieldUpdateOperationsInput | string
    user_name2?: StringFieldUpdateOperationsInput | string
    user_score2?: IntFieldUpdateOperationsInput | number
    user_id3?: IntFieldUpdateOperationsInput | number
    user_icon3?: StringFieldUpdateOperationsInput | string
    user_name3?: StringFieldUpdateOperationsInput | string
    user_score3?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    baseScore?: IntFieldUpdateOperationsInput | number
  }

  export type T_roomsCreateManyInput = {
    uuid: string
    id: string
    base_info: string
    create_time: number
    num_of_turns: number
    next_button: number
    user_id0: number
    user_icon0: string
    user_name0: string
    user_score0: number
    user_id1: number
    user_icon1: string
    user_name1: string
    user_score1: number
    user_id2: number
    user_icon2: string
    user_name2: string
    user_score2: number
    user_id3: number
    user_icon3: string
    user_name3: string
    user_score3: number
    ip: string
    port: number
    baseScore: number
  }

  export type T_roomsUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    base_info?: StringFieldUpdateOperationsInput | string
    create_time?: IntFieldUpdateOperationsInput | number
    num_of_turns?: IntFieldUpdateOperationsInput | number
    next_button?: IntFieldUpdateOperationsInput | number
    user_id0?: IntFieldUpdateOperationsInput | number
    user_icon0?: StringFieldUpdateOperationsInput | string
    user_name0?: StringFieldUpdateOperationsInput | string
    user_score0?: IntFieldUpdateOperationsInput | number
    user_id1?: IntFieldUpdateOperationsInput | number
    user_icon1?: StringFieldUpdateOperationsInput | string
    user_name1?: StringFieldUpdateOperationsInput | string
    user_score1?: IntFieldUpdateOperationsInput | number
    user_id2?: IntFieldUpdateOperationsInput | number
    user_icon2?: StringFieldUpdateOperationsInput | string
    user_name2?: StringFieldUpdateOperationsInput | string
    user_score2?: IntFieldUpdateOperationsInput | number
    user_id3?: IntFieldUpdateOperationsInput | number
    user_icon3?: StringFieldUpdateOperationsInput | string
    user_name3?: StringFieldUpdateOperationsInput | string
    user_score3?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    baseScore?: IntFieldUpdateOperationsInput | number
  }

  export type T_roomsUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    base_info?: StringFieldUpdateOperationsInput | string
    create_time?: IntFieldUpdateOperationsInput | number
    num_of_turns?: IntFieldUpdateOperationsInput | number
    next_button?: IntFieldUpdateOperationsInput | number
    user_id0?: IntFieldUpdateOperationsInput | number
    user_icon0?: StringFieldUpdateOperationsInput | string
    user_name0?: StringFieldUpdateOperationsInput | string
    user_score0?: IntFieldUpdateOperationsInput | number
    user_id1?: IntFieldUpdateOperationsInput | number
    user_icon1?: StringFieldUpdateOperationsInput | string
    user_name1?: StringFieldUpdateOperationsInput | string
    user_score1?: IntFieldUpdateOperationsInput | number
    user_id2?: IntFieldUpdateOperationsInput | number
    user_icon2?: StringFieldUpdateOperationsInput | string
    user_name2?: StringFieldUpdateOperationsInput | string
    user_score2?: IntFieldUpdateOperationsInput | number
    user_id3?: IntFieldUpdateOperationsInput | number
    user_icon3?: StringFieldUpdateOperationsInput | string
    user_name3?: StringFieldUpdateOperationsInput | string
    user_score3?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    baseScore?: IntFieldUpdateOperationsInput | number
  }

  export type T_usersCreateInput = {
    account: string
    name: string
    sex: number
    headimg: string
    lv: number
    exp: number
    coins: number
    vip: number
    money: number
    gems: number
    roomid: string
    history: string
    power: number
    RenameCount: number
    ReHeadCount: number
    propId: number
  }

  export type T_usersUncheckedCreateInput = {
    userid?: number
    account: string
    name: string
    sex: number
    headimg: string
    lv: number
    exp: number
    coins: number
    vip: number
    money: number
    gems: number
    roomid: string
    history: string
    power: number
    RenameCount: number
    ReHeadCount: number
    propId: number
  }

  export type T_usersUpdateInput = {
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    headimg?: StringFieldUpdateOperationsInput | string
    lv?: IntFieldUpdateOperationsInput | number
    exp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    vip?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    gems?: IntFieldUpdateOperationsInput | number
    roomid?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    power?: IntFieldUpdateOperationsInput | number
    RenameCount?: IntFieldUpdateOperationsInput | number
    ReHeadCount?: IntFieldUpdateOperationsInput | number
    propId?: IntFieldUpdateOperationsInput | number
  }

  export type T_usersUncheckedUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    headimg?: StringFieldUpdateOperationsInput | string
    lv?: IntFieldUpdateOperationsInput | number
    exp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    vip?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    gems?: IntFieldUpdateOperationsInput | number
    roomid?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    power?: IntFieldUpdateOperationsInput | number
    RenameCount?: IntFieldUpdateOperationsInput | number
    ReHeadCount?: IntFieldUpdateOperationsInput | number
    propId?: IntFieldUpdateOperationsInput | number
  }

  export type T_usersCreateManyInput = {
    userid?: number
    account: string
    name: string
    sex: number
    headimg: string
    lv: number
    exp: number
    coins: number
    vip: number
    money: number
    gems: number
    roomid: string
    history: string
    power: number
    RenameCount: number
    ReHeadCount: number
    propId: number
  }

  export type T_usersUpdateManyMutationInput = {
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    headimg?: StringFieldUpdateOperationsInput | string
    lv?: IntFieldUpdateOperationsInput | number
    exp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    vip?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    gems?: IntFieldUpdateOperationsInput | number
    roomid?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    power?: IntFieldUpdateOperationsInput | number
    RenameCount?: IntFieldUpdateOperationsInput | number
    ReHeadCount?: IntFieldUpdateOperationsInput | number
    propId?: IntFieldUpdateOperationsInput | number
  }

  export type T_usersUncheckedUpdateManyInput = {
    userid?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    headimg?: StringFieldUpdateOperationsInput | string
    lv?: IntFieldUpdateOperationsInput | number
    exp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    vip?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    gems?: IntFieldUpdateOperationsInput | number
    roomid?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    power?: IntFieldUpdateOperationsInput | number
    RenameCount?: IntFieldUpdateOperationsInput | number
    ReHeadCount?: IntFieldUpdateOperationsInput | number
    propId?: IntFieldUpdateOperationsInput | number
  }

  export type UsecoinCreateInput = {
    userId: number
    useCoin: number
    getprizelv: number
  }

  export type UsecoinUncheckedCreateInput = {
    userId: number
    useCoin: number
    getprizelv: number
  }

  export type UsecoinUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    useCoin?: IntFieldUpdateOperationsInput | number
    getprizelv?: IntFieldUpdateOperationsInput | number
  }

  export type UsecoinUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    useCoin?: IntFieldUpdateOperationsInput | number
    getprizelv?: IntFieldUpdateOperationsInput | number
  }

  export type UsecoinCreateManyInput = {
    userId: number
    useCoin: number
    getprizelv: number
  }

  export type UsecoinUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    useCoin?: IntFieldUpdateOperationsInput | number
    getprizelv?: IntFieldUpdateOperationsInput | number
  }

  export type UsecoinUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    useCoin?: IntFieldUpdateOperationsInput | number
    getprizelv?: IntFieldUpdateOperationsInput | number
  }

  export type WincoinCreateInput = {
    userId: number
    wincoin: number
    lv: number
  }

  export type WincoinUncheckedCreateInput = {
    userId: number
    wincoin: number
    lv: number
  }

  export type WincoinUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    wincoin?: IntFieldUpdateOperationsInput | number
    lv?: IntFieldUpdateOperationsInput | number
  }

  export type WincoinUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    wincoin?: IntFieldUpdateOperationsInput | number
    lv?: IntFieldUpdateOperationsInput | number
  }

  export type WincoinCreateManyInput = {
    userId: number
    wincoin: number
    lv: number
  }

  export type WincoinUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    wincoin?: IntFieldUpdateOperationsInput | number
    lv?: IntFieldUpdateOperationsInput | number
  }

  export type WincoinUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    wincoin?: IntFieldUpdateOperationsInput | number
    lv?: IntFieldUpdateOperationsInput | number
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

  export type Catch_chanceCountOrderByAggregateInput = {
    serveId?: SortOrder
    chance?: SortOrder
  }

  export type Catch_chanceAvgOrderByAggregateInput = {
    serveId?: SortOrder
    chance?: SortOrder
  }

  export type Catch_chanceMaxOrderByAggregateInput = {
    serveId?: SortOrder
    chance?: SortOrder
  }

  export type Catch_chanceMinOrderByAggregateInput = {
    serveId?: SortOrder
    chance?: SortOrder
  }

  export type Catch_chanceSumOrderByAggregateInput = {
    serveId?: SortOrder
    chance?: SortOrder
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

  export type Control_poolCountOrderByAggregateInput = {
    serveId?: SortOrder
    pool?: SortOrder
    line?: SortOrder
  }

  export type Control_poolAvgOrderByAggregateInput = {
    serveId?: SortOrder
    pool?: SortOrder
    line?: SortOrder
  }

  export type Control_poolMaxOrderByAggregateInput = {
    serveId?: SortOrder
    pool?: SortOrder
    line?: SortOrder
  }

  export type Control_poolMinOrderByAggregateInput = {
    serveId?: SortOrder
    pool?: SortOrder
    line?: SortOrder
  }

  export type Control_poolSumOrderByAggregateInput = {
    serveId?: SortOrder
    pool?: SortOrder
    line?: SortOrder
  }

  export type Control_userCountOrderByAggregateInput = {
    uid?: SortOrder
    chance?: SortOrder
  }

  export type Control_userAvgOrderByAggregateInput = {
    uid?: SortOrder
    chance?: SortOrder
  }

  export type Control_userMaxOrderByAggregateInput = {
    uid?: SortOrder
    chance?: SortOrder
  }

  export type Control_userMinOrderByAggregateInput = {
    uid?: SortOrder
    chance?: SortOrder
  }

  export type Control_userSumOrderByAggregateInput = {
    uid?: SortOrder
    chance?: SortOrder
  }

  export type DaysendprizevalueCountOrderByAggregateInput = {
    day?: SortOrder
    value?: SortOrder
  }

  export type DaysendprizevalueAvgOrderByAggregateInput = {
    day?: SortOrder
    value?: SortOrder
  }

  export type DaysendprizevalueMaxOrderByAggregateInput = {
    day?: SortOrder
    value?: SortOrder
  }

  export type DaysendprizevalueMinOrderByAggregateInput = {
    day?: SortOrder
    value?: SortOrder
  }

  export type DaysendprizevalueSumOrderByAggregateInput = {
    day?: SortOrder
    value?: SortOrder
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

  export type FishlogCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    usecoin?: SortOrder
    wincoin?: SortOrder
    balanceTime?: SortOrder
    mark?: SortOrder
    serverId?: SortOrder
  }

  export type FishlogAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    usecoin?: SortOrder
    wincoin?: SortOrder
    mark?: SortOrder
    serverId?: SortOrder
  }

  export type FishlogMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    usecoin?: SortOrder
    wincoin?: SortOrder
    balanceTime?: SortOrder
    mark?: SortOrder
    serverId?: SortOrder
  }

  export type FishlogMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    usecoin?: SortOrder
    wincoin?: SortOrder
    balanceTime?: SortOrder
    mark?: SortOrder
    serverId?: SortOrder
  }

  export type FishlogSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    usecoin?: SortOrder
    wincoin?: SortOrder
    mark?: SortOrder
    serverId?: SortOrder
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

  export type GetcoinCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    getCoin?: SortOrder
    adddate?: SortOrder
    mark?: SortOrder
    isget?: SortOrder
    day?: SortOrder
  }

  export type GetcoinAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    getCoin?: SortOrder
    mark?: SortOrder
    isget?: SortOrder
    day?: SortOrder
  }

  export type GetcoinMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    getCoin?: SortOrder
    adddate?: SortOrder
    mark?: SortOrder
    isget?: SortOrder
    day?: SortOrder
  }

  export type GetcoinMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    getCoin?: SortOrder
    adddate?: SortOrder
    mark?: SortOrder
    isget?: SortOrder
    day?: SortOrder
  }

  export type GetcoinSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    getCoin?: SortOrder
    mark?: SortOrder
    isget?: SortOrder
    day?: SortOrder
  }

  export type LvCountOrderByAggregateInput = {
    lv?: SortOrder
    wincoinvalue?: SortOrder
  }

  export type LvAvgOrderByAggregateInput = {
    lv?: SortOrder
    wincoinvalue?: SortOrder
  }

  export type LvMaxOrderByAggregateInput = {
    lv?: SortOrder
    wincoinvalue?: SortOrder
  }

  export type LvMinOrderByAggregateInput = {
    lv?: SortOrder
    wincoinvalue?: SortOrder
  }

  export type LvSumOrderByAggregateInput = {
    lv?: SortOrder
    wincoinvalue?: SortOrder
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

  export type MatchrandkingCountOrderByAggregateInput = {
    id?: SortOrder
    roomType?: SortOrder
    matchId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    lastTime?: SortOrder
    winPropId?: SortOrder
    winPropCount?: SortOrder
    winScore?: SortOrder
    rankIdx?: SortOrder
    isGetPrize?: SortOrder
    isMsg?: SortOrder
    title?: SortOrder
    msg?: SortOrder
  }

  export type MatchrandkingAvgOrderByAggregateInput = {
    id?: SortOrder
    roomType?: SortOrder
    matchId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    winPropId?: SortOrder
    winPropCount?: SortOrder
    winScore?: SortOrder
    rankIdx?: SortOrder
    isGetPrize?: SortOrder
    isMsg?: SortOrder
  }

  export type MatchrandkingMaxOrderByAggregateInput = {
    id?: SortOrder
    roomType?: SortOrder
    matchId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    lastTime?: SortOrder
    winPropId?: SortOrder
    winPropCount?: SortOrder
    winScore?: SortOrder
    rankIdx?: SortOrder
    isGetPrize?: SortOrder
    isMsg?: SortOrder
    title?: SortOrder
    msg?: SortOrder
  }

  export type MatchrandkingMinOrderByAggregateInput = {
    id?: SortOrder
    roomType?: SortOrder
    matchId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    lastTime?: SortOrder
    winPropId?: SortOrder
    winPropCount?: SortOrder
    winScore?: SortOrder
    rankIdx?: SortOrder
    isGetPrize?: SortOrder
    isMsg?: SortOrder
    title?: SortOrder
    msg?: SortOrder
  }

  export type MatchrandkingSumOrderByAggregateInput = {
    id?: SortOrder
    roomType?: SortOrder
    matchId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    winPropId?: SortOrder
    winPropCount?: SortOrder
    winScore?: SortOrder
    rankIdx?: SortOrder
    isGetPrize?: SortOrder
    isMsg?: SortOrder
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

  export type PoolCountOrderByAggregateInput = {
    serveId?: SortOrder
    pool?: SortOrder
    virtualPool?: SortOrder
  }

  export type PoolAvgOrderByAggregateInput = {
    serveId?: SortOrder
    pool?: SortOrder
    virtualPool?: SortOrder
  }

  export type PoolMaxOrderByAggregateInput = {
    serveId?: SortOrder
    pool?: SortOrder
    virtualPool?: SortOrder
  }

  export type PoolMinOrderByAggregateInput = {
    serveId?: SortOrder
    pool?: SortOrder
    virtualPool?: SortOrder
  }

  export type PoolSumOrderByAggregateInput = {
    serveId?: SortOrder
    pool?: SortOrder
    virtualPool?: SortOrder
  }

  export type SendprizeCountOrderByAggregateInput = {
    idx?: SortOrder
    propid?: SortOrder
    propcount?: SortOrder
    score?: SortOrder
  }

  export type SendprizeAvgOrderByAggregateInput = {
    idx?: SortOrder
    propid?: SortOrder
    propcount?: SortOrder
    score?: SortOrder
  }

  export type SendprizeMaxOrderByAggregateInput = {
    idx?: SortOrder
    propid?: SortOrder
    propcount?: SortOrder
    score?: SortOrder
  }

  export type SendprizeMinOrderByAggregateInput = {
    idx?: SortOrder
    propid?: SortOrder
    propcount?: SortOrder
    score?: SortOrder
  }

  export type SendprizeSumOrderByAggregateInput = {
    idx?: SortOrder
    propid?: SortOrder
    propcount?: SortOrder
    score?: SortOrder
  }

  export type ShootprizeCountOrderByAggregateInput = {
    lv?: SortOrder
    value?: SortOrder
    propid?: SortOrder
    propcount?: SortOrder
    winsocre?: SortOrder
  }

  export type ShootprizeAvgOrderByAggregateInput = {
    lv?: SortOrder
    value?: SortOrder
    propid?: SortOrder
    propcount?: SortOrder
    winsocre?: SortOrder
  }

  export type ShootprizeMaxOrderByAggregateInput = {
    lv?: SortOrder
    value?: SortOrder
    propid?: SortOrder
    propcount?: SortOrder
    winsocre?: SortOrder
  }

  export type ShootprizeMinOrderByAggregateInput = {
    lv?: SortOrder
    value?: SortOrder
    propid?: SortOrder
    propcount?: SortOrder
    winsocre?: SortOrder
  }

  export type ShootprizeSumOrderByAggregateInput = {
    lv?: SortOrder
    value?: SortOrder
    propid?: SortOrder
    propcount?: SortOrder
    winsocre?: SortOrder
  }

  export type T_accountsCountOrderByAggregateInput = {
    account?: SortOrder
    password?: SortOrder
  }

  export type T_accountsMaxOrderByAggregateInput = {
    account?: SortOrder
    password?: SortOrder
  }

  export type T_accountsMinOrderByAggregateInput = {
    account?: SortOrder
    password?: SortOrder
  }

  export type T_gamesCountOrderByAggregateInput = {
    room_uuid?: SortOrder
    game_index?: SortOrder
    base_info?: SortOrder
    create_time?: SortOrder
    snapshots?: SortOrder
    action_records?: SortOrder
    result?: SortOrder
  }

  export type T_gamesAvgOrderByAggregateInput = {
    game_index?: SortOrder
    create_time?: SortOrder
  }

  export type T_gamesMaxOrderByAggregateInput = {
    room_uuid?: SortOrder
    game_index?: SortOrder
    base_info?: SortOrder
    create_time?: SortOrder
    snapshots?: SortOrder
    action_records?: SortOrder
    result?: SortOrder
  }

  export type T_gamesMinOrderByAggregateInput = {
    room_uuid?: SortOrder
    game_index?: SortOrder
    base_info?: SortOrder
    create_time?: SortOrder
    snapshots?: SortOrder
    action_records?: SortOrder
    result?: SortOrder
  }

  export type T_gamesSumOrderByAggregateInput = {
    game_index?: SortOrder
    create_time?: SortOrder
  }

  export type T_games_archiveCountOrderByAggregateInput = {
    room_uuid?: SortOrder
    game_index?: SortOrder
    base_info?: SortOrder
    create_time?: SortOrder
    snapshots?: SortOrder
    action_records?: SortOrder
    result?: SortOrder
  }

  export type T_games_archiveAvgOrderByAggregateInput = {
    game_index?: SortOrder
    create_time?: SortOrder
  }

  export type T_games_archiveMaxOrderByAggregateInput = {
    room_uuid?: SortOrder
    game_index?: SortOrder
    base_info?: SortOrder
    create_time?: SortOrder
    snapshots?: SortOrder
    action_records?: SortOrder
    result?: SortOrder
  }

  export type T_games_archiveMinOrderByAggregateInput = {
    room_uuid?: SortOrder
    game_index?: SortOrder
    base_info?: SortOrder
    create_time?: SortOrder
    snapshots?: SortOrder
    action_records?: SortOrder
    result?: SortOrder
  }

  export type T_games_archiveSumOrderByAggregateInput = {
    game_index?: SortOrder
    create_time?: SortOrder
  }

  export type T_guestsCountOrderByAggregateInput = {
    guest_account?: SortOrder
  }

  export type T_guestsMaxOrderByAggregateInput = {
    guest_account?: SortOrder
  }

  export type T_guestsMinOrderByAggregateInput = {
    guest_account?: SortOrder
  }

  export type T_messageCountOrderByAggregateInput = {
    type?: SortOrder
    msg?: SortOrder
    version?: SortOrder
  }

  export type T_messageMaxOrderByAggregateInput = {
    type?: SortOrder
    msg?: SortOrder
    version?: SortOrder
  }

  export type T_messageMinOrderByAggregateInput = {
    type?: SortOrder
    msg?: SortOrder
    version?: SortOrder
  }

  export type T_propertyCountOrderByAggregateInput = {
    propId?: SortOrder
    userid?: SortOrder
    ice?: SortOrder
  }

  export type T_propertyAvgOrderByAggregateInput = {
    propId?: SortOrder
    userid?: SortOrder
    ice?: SortOrder
  }

  export type T_propertyMaxOrderByAggregateInput = {
    propId?: SortOrder
    userid?: SortOrder
    ice?: SortOrder
  }

  export type T_propertyMinOrderByAggregateInput = {
    propId?: SortOrder
    userid?: SortOrder
    ice?: SortOrder
  }

  export type T_propertySumOrderByAggregateInput = {
    propId?: SortOrder
    userid?: SortOrder
    ice?: SortOrder
  }

  export type T_roomsCountOrderByAggregateInput = {
    uuid?: SortOrder
    id?: SortOrder
    base_info?: SortOrder
    create_time?: SortOrder
    num_of_turns?: SortOrder
    next_button?: SortOrder
    user_id0?: SortOrder
    user_icon0?: SortOrder
    user_name0?: SortOrder
    user_score0?: SortOrder
    user_id1?: SortOrder
    user_icon1?: SortOrder
    user_name1?: SortOrder
    user_score1?: SortOrder
    user_id2?: SortOrder
    user_icon2?: SortOrder
    user_name2?: SortOrder
    user_score2?: SortOrder
    user_id3?: SortOrder
    user_icon3?: SortOrder
    user_name3?: SortOrder
    user_score3?: SortOrder
    ip?: SortOrder
    port?: SortOrder
    baseScore?: SortOrder
  }

  export type T_roomsAvgOrderByAggregateInput = {
    create_time?: SortOrder
    num_of_turns?: SortOrder
    next_button?: SortOrder
    user_id0?: SortOrder
    user_score0?: SortOrder
    user_id1?: SortOrder
    user_score1?: SortOrder
    user_id2?: SortOrder
    user_score2?: SortOrder
    user_id3?: SortOrder
    user_score3?: SortOrder
    port?: SortOrder
    baseScore?: SortOrder
  }

  export type T_roomsMaxOrderByAggregateInput = {
    uuid?: SortOrder
    id?: SortOrder
    base_info?: SortOrder
    create_time?: SortOrder
    num_of_turns?: SortOrder
    next_button?: SortOrder
    user_id0?: SortOrder
    user_icon0?: SortOrder
    user_name0?: SortOrder
    user_score0?: SortOrder
    user_id1?: SortOrder
    user_icon1?: SortOrder
    user_name1?: SortOrder
    user_score1?: SortOrder
    user_id2?: SortOrder
    user_icon2?: SortOrder
    user_name2?: SortOrder
    user_score2?: SortOrder
    user_id3?: SortOrder
    user_icon3?: SortOrder
    user_name3?: SortOrder
    user_score3?: SortOrder
    ip?: SortOrder
    port?: SortOrder
    baseScore?: SortOrder
  }

  export type T_roomsMinOrderByAggregateInput = {
    uuid?: SortOrder
    id?: SortOrder
    base_info?: SortOrder
    create_time?: SortOrder
    num_of_turns?: SortOrder
    next_button?: SortOrder
    user_id0?: SortOrder
    user_icon0?: SortOrder
    user_name0?: SortOrder
    user_score0?: SortOrder
    user_id1?: SortOrder
    user_icon1?: SortOrder
    user_name1?: SortOrder
    user_score1?: SortOrder
    user_id2?: SortOrder
    user_icon2?: SortOrder
    user_name2?: SortOrder
    user_score2?: SortOrder
    user_id3?: SortOrder
    user_icon3?: SortOrder
    user_name3?: SortOrder
    user_score3?: SortOrder
    ip?: SortOrder
    port?: SortOrder
    baseScore?: SortOrder
  }

  export type T_roomsSumOrderByAggregateInput = {
    create_time?: SortOrder
    num_of_turns?: SortOrder
    next_button?: SortOrder
    user_id0?: SortOrder
    user_score0?: SortOrder
    user_id1?: SortOrder
    user_score1?: SortOrder
    user_id2?: SortOrder
    user_score2?: SortOrder
    user_id3?: SortOrder
    user_score3?: SortOrder
    port?: SortOrder
    baseScore?: SortOrder
  }

  export type T_usersCountOrderByAggregateInput = {
    userid?: SortOrder
    account?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    headimg?: SortOrder
    lv?: SortOrder
    exp?: SortOrder
    coins?: SortOrder
    vip?: SortOrder
    money?: SortOrder
    gems?: SortOrder
    roomid?: SortOrder
    history?: SortOrder
    power?: SortOrder
    RenameCount?: SortOrder
    ReHeadCount?: SortOrder
    propId?: SortOrder
  }

  export type T_usersAvgOrderByAggregateInput = {
    userid?: SortOrder
    sex?: SortOrder
    lv?: SortOrder
    exp?: SortOrder
    coins?: SortOrder
    vip?: SortOrder
    money?: SortOrder
    gems?: SortOrder
    power?: SortOrder
    RenameCount?: SortOrder
    ReHeadCount?: SortOrder
    propId?: SortOrder
  }

  export type T_usersMaxOrderByAggregateInput = {
    userid?: SortOrder
    account?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    headimg?: SortOrder
    lv?: SortOrder
    exp?: SortOrder
    coins?: SortOrder
    vip?: SortOrder
    money?: SortOrder
    gems?: SortOrder
    roomid?: SortOrder
    history?: SortOrder
    power?: SortOrder
    RenameCount?: SortOrder
    ReHeadCount?: SortOrder
    propId?: SortOrder
  }

  export type T_usersMinOrderByAggregateInput = {
    userid?: SortOrder
    account?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    headimg?: SortOrder
    lv?: SortOrder
    exp?: SortOrder
    coins?: SortOrder
    vip?: SortOrder
    money?: SortOrder
    gems?: SortOrder
    roomid?: SortOrder
    history?: SortOrder
    power?: SortOrder
    RenameCount?: SortOrder
    ReHeadCount?: SortOrder
    propId?: SortOrder
  }

  export type T_usersSumOrderByAggregateInput = {
    userid?: SortOrder
    sex?: SortOrder
    lv?: SortOrder
    exp?: SortOrder
    coins?: SortOrder
    vip?: SortOrder
    money?: SortOrder
    gems?: SortOrder
    power?: SortOrder
    RenameCount?: SortOrder
    ReHeadCount?: SortOrder
    propId?: SortOrder
  }

  export type UsecoinCountOrderByAggregateInput = {
    userId?: SortOrder
    useCoin?: SortOrder
    getprizelv?: SortOrder
  }

  export type UsecoinAvgOrderByAggregateInput = {
    userId?: SortOrder
    useCoin?: SortOrder
    getprizelv?: SortOrder
  }

  export type UsecoinMaxOrderByAggregateInput = {
    userId?: SortOrder
    useCoin?: SortOrder
    getprizelv?: SortOrder
  }

  export type UsecoinMinOrderByAggregateInput = {
    userId?: SortOrder
    useCoin?: SortOrder
    getprizelv?: SortOrder
  }

  export type UsecoinSumOrderByAggregateInput = {
    userId?: SortOrder
    useCoin?: SortOrder
    getprizelv?: SortOrder
  }

  export type WincoinCountOrderByAggregateInput = {
    userId?: SortOrder
    wincoin?: SortOrder
    lv?: SortOrder
  }

  export type WincoinAvgOrderByAggregateInput = {
    userId?: SortOrder
    wincoin?: SortOrder
    lv?: SortOrder
  }

  export type WincoinMaxOrderByAggregateInput = {
    userId?: SortOrder
    wincoin?: SortOrder
    lv?: SortOrder
  }

  export type WincoinMinOrderByAggregateInput = {
    userId?: SortOrder
    wincoin?: SortOrder
    lv?: SortOrder
  }

  export type WincoinSumOrderByAggregateInput = {
    userId?: SortOrder
    wincoin?: SortOrder
    lv?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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