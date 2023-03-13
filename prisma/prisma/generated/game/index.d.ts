
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model T_accounts
 * 
 */
export type T_accounts = {
  account: string
  password: string
  reg_time: number
}

/**
 * Model T_charge_log
 * 
 */
export type T_charge_log = {
  id: number
  orderno: string
  userid: number
  gems_num: number
  cost_money: number
  charge_type: string
  time: number
  goldcoin_exchange_rate: number
}

/**
 * Model T_game_result_log
 * 
 */
export type T_game_result_log = {
  id: number
  roomid: number
  tax: number
  data: string
  time: number
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
  genre: number
  room_type: number
  scene: string
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
  user_id4: number
  user_icon4: string
  user_name4: string
  user_score4: number
  user_id5: number
  user_icon5: string
  user_name5: string
  user_score5: number
  user_id6: number
  user_icon6: string
  user_name6: string
  user_score6: number
  user_id7: number
  user_icon7: string
  user_name7: string
  user_score7: number
  user_id8: number
  user_icon8: string
  user_name8: string
  user_score8: number
  ip: string
  port: number
}

/**
 * Model T_scene
 * 
 */
export type T_scene = {
  id: number
  room_type: number
  scene: number
  genre: number
  type: string
  time: number
  limit_type: number
  limit_num: number
  limit_danzhu: number
  consume_type: number
  consume_num: number
  tax: number
  online: number
}

/**
 * Model T_sell_log
 * 
 */
export type T_sell_log = {
  id: number
  userid: number
  gems_num: number
  seller_id: number
  charge_type: number
  addtime: number
  batchno: string
}

/**
 * Model T_session_pool
 * 
 */
export type T_session_pool = {
  session_id: number
  content: number
}

/**
 * Model t_use_money_logs
 * 
 */
export type t_use_money_logs = {
  id: number
  userid: string
  money: number
  type: string
  create_time: number
  op: string
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
  coins: Prisma.Decimal
  gems: Prisma.Decimal
  roomid: string
  history: string
  yaoqing: number
  time: number
  shareroomid: string
  robot: number
}

/**
 * Model T_users_rechange_record
 * 
 */
export type T_users_rechange_record = {
  id: number
  userid: number
  orderno: string
  money: Prisma.Decimal
  pay_type: string
  status: number
  time: number
  result: string
  notify_result: string
  is_account: number
  account_userid: number
  account_result: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more T_accounts
 * const t_accounts = await prisma.t_accounts.findMany()
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
   * // Fetch zero or more T_accounts
   * const t_accounts = await prisma.t_accounts.findMany()
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
   * `prisma.t_accounts`: Exposes CRUD operations for the **T_accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_accounts
    * const t_accounts = await prisma.t_accounts.findMany()
    * ```
    */
  get t_accounts(): Prisma.T_accountsDelegate<GlobalReject>;

  /**
   * `prisma.t_charge_log`: Exposes CRUD operations for the **T_charge_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_charge_logs
    * const t_charge_logs = await prisma.t_charge_log.findMany()
    * ```
    */
  get t_charge_log(): Prisma.T_charge_logDelegate<GlobalReject>;

  /**
   * `prisma.t_game_result_log`: Exposes CRUD operations for the **T_game_result_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_game_result_logs
    * const t_game_result_logs = await prisma.t_game_result_log.findMany()
    * ```
    */
  get t_game_result_log(): Prisma.T_game_result_logDelegate<GlobalReject>;

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
   * `prisma.t_scene`: Exposes CRUD operations for the **T_scene** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_scenes
    * const t_scenes = await prisma.t_scene.findMany()
    * ```
    */
  get t_scene(): Prisma.T_sceneDelegate<GlobalReject>;

  /**
   * `prisma.t_sell_log`: Exposes CRUD operations for the **T_sell_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_sell_logs
    * const t_sell_logs = await prisma.t_sell_log.findMany()
    * ```
    */
  get t_sell_log(): Prisma.T_sell_logDelegate<GlobalReject>;

  /**
   * `prisma.t_session_pool`: Exposes CRUD operations for the **T_session_pool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_session_pools
    * const t_session_pools = await prisma.t_session_pool.findMany()
    * ```
    */
  get t_session_pool(): Prisma.T_session_poolDelegate<GlobalReject>;

  /**
   * `prisma.t_use_money_logs`: Exposes CRUD operations for the **t_use_money_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_use_money_logs
    * const t_use_money_logs = await prisma.t_use_money_logs.findMany()
    * ```
    */
  get t_use_money_logs(): Prisma.t_use_money_logsDelegate<GlobalReject>;

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
   * `prisma.t_users_rechange_record`: Exposes CRUD operations for the **T_users_rechange_record** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_users_rechange_records
    * const t_users_rechange_records = await prisma.t_users_rechange_record.findMany()
    * ```
    */
  get t_users_rechange_record(): Prisma.T_users_rechange_recordDelegate<GlobalReject>;
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
    T_accounts: 'T_accounts',
    T_charge_log: 'T_charge_log',
    T_game_result_log: 'T_game_result_log',
    T_games: 'T_games',
    T_games_archive: 'T_games_archive',
    T_guests: 'T_guests',
    T_message: 'T_message',
    T_property: 'T_property',
    T_rooms: 'T_rooms',
    T_scene: 'T_scene',
    T_sell_log: 'T_sell_log',
    T_session_pool: 'T_session_pool',
    t_use_money_logs: 't_use_money_logs',
    T_users: 'T_users',
    T_users_rechange_record: 'T_users_rechange_record'
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
   * Model T_accounts
   */


  export type AggregateT_accounts = {
    _count: T_accountsCountAggregateOutputType | null
    _avg: T_accountsAvgAggregateOutputType | null
    _sum: T_accountsSumAggregateOutputType | null
    _min: T_accountsMinAggregateOutputType | null
    _max: T_accountsMaxAggregateOutputType | null
  }

  export type T_accountsAvgAggregateOutputType = {
    reg_time: number | null
  }

  export type T_accountsSumAggregateOutputType = {
    reg_time: number | null
  }

  export type T_accountsMinAggregateOutputType = {
    account: string | null
    password: string | null
    reg_time: number | null
  }

  export type T_accountsMaxAggregateOutputType = {
    account: string | null
    password: string | null
    reg_time: number | null
  }

  export type T_accountsCountAggregateOutputType = {
    account: number
    password: number
    reg_time: number
    _all: number
  }


  export type T_accountsAvgAggregateInputType = {
    reg_time?: true
  }

  export type T_accountsSumAggregateInputType = {
    reg_time?: true
  }

  export type T_accountsMinAggregateInputType = {
    account?: true
    password?: true
    reg_time?: true
  }

  export type T_accountsMaxAggregateInputType = {
    account?: true
    password?: true
    reg_time?: true
  }

  export type T_accountsCountAggregateInputType = {
    account?: true
    password?: true
    reg_time?: true
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
     * Select which fields to average
    **/
    _avg?: T_accountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_accountsSumAggregateInputType
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
    _avg?: T_accountsAvgAggregateInputType
    _sum?: T_accountsSumAggregateInputType
    _min?: T_accountsMinAggregateInputType
    _max?: T_accountsMaxAggregateInputType
  }


  export type T_accountsGroupByOutputType = {
    account: string
    password: string
    reg_time: number
    _count: T_accountsCountAggregateOutputType | null
    _avg: T_accountsAvgAggregateOutputType | null
    _sum: T_accountsSumAggregateOutputType | null
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
    reg_time?: boolean
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
   * Model T_charge_log
   */


  export type AggregateT_charge_log = {
    _count: T_charge_logCountAggregateOutputType | null
    _avg: T_charge_logAvgAggregateOutputType | null
    _sum: T_charge_logSumAggregateOutputType | null
    _min: T_charge_logMinAggregateOutputType | null
    _max: T_charge_logMaxAggregateOutputType | null
  }

  export type T_charge_logAvgAggregateOutputType = {
    id: number | null
    userid: number | null
    gems_num: number | null
    cost_money: number | null
    time: number | null
    goldcoin_exchange_rate: number | null
  }

  export type T_charge_logSumAggregateOutputType = {
    id: number | null
    userid: number | null
    gems_num: number | null
    cost_money: number | null
    time: number | null
    goldcoin_exchange_rate: number | null
  }

  export type T_charge_logMinAggregateOutputType = {
    id: number | null
    orderno: string | null
    userid: number | null
    gems_num: number | null
    cost_money: number | null
    charge_type: string | null
    time: number | null
    goldcoin_exchange_rate: number | null
  }

  export type T_charge_logMaxAggregateOutputType = {
    id: number | null
    orderno: string | null
    userid: number | null
    gems_num: number | null
    cost_money: number | null
    charge_type: string | null
    time: number | null
    goldcoin_exchange_rate: number | null
  }

  export type T_charge_logCountAggregateOutputType = {
    id: number
    orderno: number
    userid: number
    gems_num: number
    cost_money: number
    charge_type: number
    time: number
    goldcoin_exchange_rate: number
    _all: number
  }


  export type T_charge_logAvgAggregateInputType = {
    id?: true
    userid?: true
    gems_num?: true
    cost_money?: true
    time?: true
    goldcoin_exchange_rate?: true
  }

  export type T_charge_logSumAggregateInputType = {
    id?: true
    userid?: true
    gems_num?: true
    cost_money?: true
    time?: true
    goldcoin_exchange_rate?: true
  }

  export type T_charge_logMinAggregateInputType = {
    id?: true
    orderno?: true
    userid?: true
    gems_num?: true
    cost_money?: true
    charge_type?: true
    time?: true
    goldcoin_exchange_rate?: true
  }

  export type T_charge_logMaxAggregateInputType = {
    id?: true
    orderno?: true
    userid?: true
    gems_num?: true
    cost_money?: true
    charge_type?: true
    time?: true
    goldcoin_exchange_rate?: true
  }

  export type T_charge_logCountAggregateInputType = {
    id?: true
    orderno?: true
    userid?: true
    gems_num?: true
    cost_money?: true
    charge_type?: true
    time?: true
    goldcoin_exchange_rate?: true
    _all?: true
  }

  export type T_charge_logAggregateArgs = {
    /**
     * Filter which T_charge_log to aggregate.
     */
    where?: T_charge_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_charge_logs to fetch.
     */
    orderBy?: Enumerable<T_charge_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_charge_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_charge_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_charge_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_charge_logs
    **/
    _count?: true | T_charge_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_charge_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_charge_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_charge_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_charge_logMaxAggregateInputType
  }

  export type GetT_charge_logAggregateType<T extends T_charge_logAggregateArgs> = {
        [P in keyof T & keyof AggregateT_charge_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_charge_log[P]>
      : GetScalarType<T[P], AggregateT_charge_log[P]>
  }




  export type T_charge_logGroupByArgs = {
    where?: T_charge_logWhereInput
    orderBy?: Enumerable<T_charge_logOrderByWithAggregationInput>
    by: T_charge_logScalarFieldEnum[]
    having?: T_charge_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_charge_logCountAggregateInputType | true
    _avg?: T_charge_logAvgAggregateInputType
    _sum?: T_charge_logSumAggregateInputType
    _min?: T_charge_logMinAggregateInputType
    _max?: T_charge_logMaxAggregateInputType
  }


  export type T_charge_logGroupByOutputType = {
    id: number
    orderno: string
    userid: number
    gems_num: number
    cost_money: number
    charge_type: string
    time: number
    goldcoin_exchange_rate: number
    _count: T_charge_logCountAggregateOutputType | null
    _avg: T_charge_logAvgAggregateOutputType | null
    _sum: T_charge_logSumAggregateOutputType | null
    _min: T_charge_logMinAggregateOutputType | null
    _max: T_charge_logMaxAggregateOutputType | null
  }

  type GetT_charge_logGroupByPayload<T extends T_charge_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<T_charge_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_charge_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_charge_logGroupByOutputType[P]>
            : GetScalarType<T[P], T_charge_logGroupByOutputType[P]>
        }
      >
    >


  export type T_charge_logSelect = {
    id?: boolean
    orderno?: boolean
    userid?: boolean
    gems_num?: boolean
    cost_money?: boolean
    charge_type?: boolean
    time?: boolean
    goldcoin_exchange_rate?: boolean
  }


  export type T_charge_logGetPayload<S extends boolean | null | undefined | T_charge_logArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? T_charge_log :
    S extends undefined ? never :
    S extends { include: any } & (T_charge_logArgs | T_charge_logFindManyArgs)
    ? T_charge_log 
    : S extends { select: any } & (T_charge_logArgs | T_charge_logFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof T_charge_log ? T_charge_log[P] : never
  } 
      : T_charge_log


  type T_charge_logCountArgs = 
    Omit<T_charge_logFindManyArgs, 'select' | 'include'> & {
      select?: T_charge_logCountAggregateInputType | true
    }

  export interface T_charge_logDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one T_charge_log that matches the filter.
     * @param {T_charge_logFindUniqueArgs} args - Arguments to find a T_charge_log
     * @example
     * // Get one T_charge_log
     * const t_charge_log = await prisma.t_charge_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_charge_logFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, T_charge_logFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'T_charge_log'> extends True ? Prisma__T_charge_logClient<T_charge_logGetPayload<T>> : Prisma__T_charge_logClient<T_charge_logGetPayload<T> | null, null>

    /**
     * Find one T_charge_log that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {T_charge_logFindUniqueOrThrowArgs} args - Arguments to find a T_charge_log
     * @example
     * // Get one T_charge_log
     * const t_charge_log = await prisma.t_charge_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_charge_logFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, T_charge_logFindUniqueOrThrowArgs>
    ): Prisma__T_charge_logClient<T_charge_logGetPayload<T>>

    /**
     * Find the first T_charge_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_charge_logFindFirstArgs} args - Arguments to find a T_charge_log
     * @example
     * // Get one T_charge_log
     * const t_charge_log = await prisma.t_charge_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_charge_logFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, T_charge_logFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'T_charge_log'> extends True ? Prisma__T_charge_logClient<T_charge_logGetPayload<T>> : Prisma__T_charge_logClient<T_charge_logGetPayload<T> | null, null>

    /**
     * Find the first T_charge_log that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_charge_logFindFirstOrThrowArgs} args - Arguments to find a T_charge_log
     * @example
     * // Get one T_charge_log
     * const t_charge_log = await prisma.t_charge_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_charge_logFindFirstOrThrowArgs>(
      args?: SelectSubset<T, T_charge_logFindFirstOrThrowArgs>
    ): Prisma__T_charge_logClient<T_charge_logGetPayload<T>>

    /**
     * Find zero or more T_charge_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_charge_logFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_charge_logs
     * const t_charge_logs = await prisma.t_charge_log.findMany()
     * 
     * // Get first 10 T_charge_logs
     * const t_charge_logs = await prisma.t_charge_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_charge_logWithIdOnly = await prisma.t_charge_log.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends T_charge_logFindManyArgs>(
      args?: SelectSubset<T, T_charge_logFindManyArgs>
    ): Prisma.PrismaPromise<Array<T_charge_logGetPayload<T>>>

    /**
     * Create a T_charge_log.
     * @param {T_charge_logCreateArgs} args - Arguments to create a T_charge_log.
     * @example
     * // Create one T_charge_log
     * const T_charge_log = await prisma.t_charge_log.create({
     *   data: {
     *     // ... data to create a T_charge_log
     *   }
     * })
     * 
    **/
    create<T extends T_charge_logCreateArgs>(
      args: SelectSubset<T, T_charge_logCreateArgs>
    ): Prisma__T_charge_logClient<T_charge_logGetPayload<T>>

    /**
     * Create many T_charge_logs.
     *     @param {T_charge_logCreateManyArgs} args - Arguments to create many T_charge_logs.
     *     @example
     *     // Create many T_charge_logs
     *     const t_charge_log = await prisma.t_charge_log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends T_charge_logCreateManyArgs>(
      args?: SelectSubset<T, T_charge_logCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_charge_log.
     * @param {T_charge_logDeleteArgs} args - Arguments to delete one T_charge_log.
     * @example
     * // Delete one T_charge_log
     * const T_charge_log = await prisma.t_charge_log.delete({
     *   where: {
     *     // ... filter to delete one T_charge_log
     *   }
     * })
     * 
    **/
    delete<T extends T_charge_logDeleteArgs>(
      args: SelectSubset<T, T_charge_logDeleteArgs>
    ): Prisma__T_charge_logClient<T_charge_logGetPayload<T>>

    /**
     * Update one T_charge_log.
     * @param {T_charge_logUpdateArgs} args - Arguments to update one T_charge_log.
     * @example
     * // Update one T_charge_log
     * const t_charge_log = await prisma.t_charge_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_charge_logUpdateArgs>(
      args: SelectSubset<T, T_charge_logUpdateArgs>
    ): Prisma__T_charge_logClient<T_charge_logGetPayload<T>>

    /**
     * Delete zero or more T_charge_logs.
     * @param {T_charge_logDeleteManyArgs} args - Arguments to filter T_charge_logs to delete.
     * @example
     * // Delete a few T_charge_logs
     * const { count } = await prisma.t_charge_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_charge_logDeleteManyArgs>(
      args?: SelectSubset<T, T_charge_logDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_charge_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_charge_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_charge_logs
     * const t_charge_log = await prisma.t_charge_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_charge_logUpdateManyArgs>(
      args: SelectSubset<T, T_charge_logUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_charge_log.
     * @param {T_charge_logUpsertArgs} args - Arguments to update or create a T_charge_log.
     * @example
     * // Update or create a T_charge_log
     * const t_charge_log = await prisma.t_charge_log.upsert({
     *   create: {
     *     // ... data to create a T_charge_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_charge_log we want to update
     *   }
     * })
    **/
    upsert<T extends T_charge_logUpsertArgs>(
      args: SelectSubset<T, T_charge_logUpsertArgs>
    ): Prisma__T_charge_logClient<T_charge_logGetPayload<T>>

    /**
     * Count the number of T_charge_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_charge_logCountArgs} args - Arguments to filter T_charge_logs to count.
     * @example
     * // Count the number of T_charge_logs
     * const count = await prisma.t_charge_log.count({
     *   where: {
     *     // ... the filter for the T_charge_logs we want to count
     *   }
     * })
    **/
    count<T extends T_charge_logCountArgs>(
      args?: Subset<T, T_charge_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_charge_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_charge_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_charge_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_charge_logAggregateArgs>(args: Subset<T, T_charge_logAggregateArgs>): Prisma.PrismaPromise<GetT_charge_logAggregateType<T>>

    /**
     * Group by T_charge_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_charge_logGroupByArgs} args - Group by arguments.
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
      T extends T_charge_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_charge_logGroupByArgs['orderBy'] }
        : { orderBy?: T_charge_logGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_charge_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_charge_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for T_charge_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__T_charge_logClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * T_charge_log base type for findUnique actions
   */
  export type T_charge_logFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the T_charge_log
     */
    select?: T_charge_logSelect | null
    /**
     * Filter, which T_charge_log to fetch.
     */
    where: T_charge_logWhereUniqueInput
  }

  /**
   * T_charge_log findUnique
   */
  export interface T_charge_logFindUniqueArgs extends T_charge_logFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_charge_log findUniqueOrThrow
   */
  export type T_charge_logFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_charge_log
     */
    select?: T_charge_logSelect | null
    /**
     * Filter, which T_charge_log to fetch.
     */
    where: T_charge_logWhereUniqueInput
  }


  /**
   * T_charge_log base type for findFirst actions
   */
  export type T_charge_logFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the T_charge_log
     */
    select?: T_charge_logSelect | null
    /**
     * Filter, which T_charge_log to fetch.
     */
    where?: T_charge_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_charge_logs to fetch.
     */
    orderBy?: Enumerable<T_charge_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_charge_logs.
     */
    cursor?: T_charge_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_charge_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_charge_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_charge_logs.
     */
    distinct?: Enumerable<T_charge_logScalarFieldEnum>
  }

  /**
   * T_charge_log findFirst
   */
  export interface T_charge_logFindFirstArgs extends T_charge_logFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_charge_log findFirstOrThrow
   */
  export type T_charge_logFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_charge_log
     */
    select?: T_charge_logSelect | null
    /**
     * Filter, which T_charge_log to fetch.
     */
    where?: T_charge_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_charge_logs to fetch.
     */
    orderBy?: Enumerable<T_charge_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_charge_logs.
     */
    cursor?: T_charge_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_charge_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_charge_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_charge_logs.
     */
    distinct?: Enumerable<T_charge_logScalarFieldEnum>
  }


  /**
   * T_charge_log findMany
   */
  export type T_charge_logFindManyArgs = {
    /**
     * Select specific fields to fetch from the T_charge_log
     */
    select?: T_charge_logSelect | null
    /**
     * Filter, which T_charge_logs to fetch.
     */
    where?: T_charge_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_charge_logs to fetch.
     */
    orderBy?: Enumerable<T_charge_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_charge_logs.
     */
    cursor?: T_charge_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_charge_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_charge_logs.
     */
    skip?: number
    distinct?: Enumerable<T_charge_logScalarFieldEnum>
  }


  /**
   * T_charge_log create
   */
  export type T_charge_logCreateArgs = {
    /**
     * Select specific fields to fetch from the T_charge_log
     */
    select?: T_charge_logSelect | null
    /**
     * The data needed to create a T_charge_log.
     */
    data: XOR<T_charge_logCreateInput, T_charge_logUncheckedCreateInput>
  }


  /**
   * T_charge_log createMany
   */
  export type T_charge_logCreateManyArgs = {
    /**
     * The data used to create many T_charge_logs.
     */
    data: Enumerable<T_charge_logCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * T_charge_log update
   */
  export type T_charge_logUpdateArgs = {
    /**
     * Select specific fields to fetch from the T_charge_log
     */
    select?: T_charge_logSelect | null
    /**
     * The data needed to update a T_charge_log.
     */
    data: XOR<T_charge_logUpdateInput, T_charge_logUncheckedUpdateInput>
    /**
     * Choose, which T_charge_log to update.
     */
    where: T_charge_logWhereUniqueInput
  }


  /**
   * T_charge_log updateMany
   */
  export type T_charge_logUpdateManyArgs = {
    /**
     * The data used to update T_charge_logs.
     */
    data: XOR<T_charge_logUpdateManyMutationInput, T_charge_logUncheckedUpdateManyInput>
    /**
     * Filter which T_charge_logs to update
     */
    where?: T_charge_logWhereInput
  }


  /**
   * T_charge_log upsert
   */
  export type T_charge_logUpsertArgs = {
    /**
     * Select specific fields to fetch from the T_charge_log
     */
    select?: T_charge_logSelect | null
    /**
     * The filter to search for the T_charge_log to update in case it exists.
     */
    where: T_charge_logWhereUniqueInput
    /**
     * In case the T_charge_log found by the `where` argument doesn't exist, create a new T_charge_log with this data.
     */
    create: XOR<T_charge_logCreateInput, T_charge_logUncheckedCreateInput>
    /**
     * In case the T_charge_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_charge_logUpdateInput, T_charge_logUncheckedUpdateInput>
  }


  /**
   * T_charge_log delete
   */
  export type T_charge_logDeleteArgs = {
    /**
     * Select specific fields to fetch from the T_charge_log
     */
    select?: T_charge_logSelect | null
    /**
     * Filter which T_charge_log to delete.
     */
    where: T_charge_logWhereUniqueInput
  }


  /**
   * T_charge_log deleteMany
   */
  export type T_charge_logDeleteManyArgs = {
    /**
     * Filter which T_charge_logs to delete
     */
    where?: T_charge_logWhereInput
  }


  /**
   * T_charge_log without action
   */
  export type T_charge_logArgs = {
    /**
     * Select specific fields to fetch from the T_charge_log
     */
    select?: T_charge_logSelect | null
  }



  /**
   * Model T_game_result_log
   */


  export type AggregateT_game_result_log = {
    _count: T_game_result_logCountAggregateOutputType | null
    _avg: T_game_result_logAvgAggregateOutputType | null
    _sum: T_game_result_logSumAggregateOutputType | null
    _min: T_game_result_logMinAggregateOutputType | null
    _max: T_game_result_logMaxAggregateOutputType | null
  }

  export type T_game_result_logAvgAggregateOutputType = {
    id: number | null
    roomid: number | null
    tax: number | null
    time: number | null
  }

  export type T_game_result_logSumAggregateOutputType = {
    id: number | null
    roomid: number | null
    tax: number | null
    time: number | null
  }

  export type T_game_result_logMinAggregateOutputType = {
    id: number | null
    roomid: number | null
    tax: number | null
    data: string | null
    time: number | null
  }

  export type T_game_result_logMaxAggregateOutputType = {
    id: number | null
    roomid: number | null
    tax: number | null
    data: string | null
    time: number | null
  }

  export type T_game_result_logCountAggregateOutputType = {
    id: number
    roomid: number
    tax: number
    data: number
    time: number
    _all: number
  }


  export type T_game_result_logAvgAggregateInputType = {
    id?: true
    roomid?: true
    tax?: true
    time?: true
  }

  export type T_game_result_logSumAggregateInputType = {
    id?: true
    roomid?: true
    tax?: true
    time?: true
  }

  export type T_game_result_logMinAggregateInputType = {
    id?: true
    roomid?: true
    tax?: true
    data?: true
    time?: true
  }

  export type T_game_result_logMaxAggregateInputType = {
    id?: true
    roomid?: true
    tax?: true
    data?: true
    time?: true
  }

  export type T_game_result_logCountAggregateInputType = {
    id?: true
    roomid?: true
    tax?: true
    data?: true
    time?: true
    _all?: true
  }

  export type T_game_result_logAggregateArgs = {
    /**
     * Filter which T_game_result_log to aggregate.
     */
    where?: T_game_result_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_game_result_logs to fetch.
     */
    orderBy?: Enumerable<T_game_result_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_game_result_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_game_result_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_game_result_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_game_result_logs
    **/
    _count?: true | T_game_result_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_game_result_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_game_result_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_game_result_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_game_result_logMaxAggregateInputType
  }

  export type GetT_game_result_logAggregateType<T extends T_game_result_logAggregateArgs> = {
        [P in keyof T & keyof AggregateT_game_result_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_game_result_log[P]>
      : GetScalarType<T[P], AggregateT_game_result_log[P]>
  }




  export type T_game_result_logGroupByArgs = {
    where?: T_game_result_logWhereInput
    orderBy?: Enumerable<T_game_result_logOrderByWithAggregationInput>
    by: T_game_result_logScalarFieldEnum[]
    having?: T_game_result_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_game_result_logCountAggregateInputType | true
    _avg?: T_game_result_logAvgAggregateInputType
    _sum?: T_game_result_logSumAggregateInputType
    _min?: T_game_result_logMinAggregateInputType
    _max?: T_game_result_logMaxAggregateInputType
  }


  export type T_game_result_logGroupByOutputType = {
    id: number
    roomid: number
    tax: number
    data: string
    time: number
    _count: T_game_result_logCountAggregateOutputType | null
    _avg: T_game_result_logAvgAggregateOutputType | null
    _sum: T_game_result_logSumAggregateOutputType | null
    _min: T_game_result_logMinAggregateOutputType | null
    _max: T_game_result_logMaxAggregateOutputType | null
  }

  type GetT_game_result_logGroupByPayload<T extends T_game_result_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<T_game_result_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_game_result_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_game_result_logGroupByOutputType[P]>
            : GetScalarType<T[P], T_game_result_logGroupByOutputType[P]>
        }
      >
    >


  export type T_game_result_logSelect = {
    id?: boolean
    roomid?: boolean
    tax?: boolean
    data?: boolean
    time?: boolean
  }


  export type T_game_result_logGetPayload<S extends boolean | null | undefined | T_game_result_logArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? T_game_result_log :
    S extends undefined ? never :
    S extends { include: any } & (T_game_result_logArgs | T_game_result_logFindManyArgs)
    ? T_game_result_log 
    : S extends { select: any } & (T_game_result_logArgs | T_game_result_logFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof T_game_result_log ? T_game_result_log[P] : never
  } 
      : T_game_result_log


  type T_game_result_logCountArgs = 
    Omit<T_game_result_logFindManyArgs, 'select' | 'include'> & {
      select?: T_game_result_logCountAggregateInputType | true
    }

  export interface T_game_result_logDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one T_game_result_log that matches the filter.
     * @param {T_game_result_logFindUniqueArgs} args - Arguments to find a T_game_result_log
     * @example
     * // Get one T_game_result_log
     * const t_game_result_log = await prisma.t_game_result_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_game_result_logFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, T_game_result_logFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'T_game_result_log'> extends True ? Prisma__T_game_result_logClient<T_game_result_logGetPayload<T>> : Prisma__T_game_result_logClient<T_game_result_logGetPayload<T> | null, null>

    /**
     * Find one T_game_result_log that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {T_game_result_logFindUniqueOrThrowArgs} args - Arguments to find a T_game_result_log
     * @example
     * // Get one T_game_result_log
     * const t_game_result_log = await prisma.t_game_result_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_game_result_logFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, T_game_result_logFindUniqueOrThrowArgs>
    ): Prisma__T_game_result_logClient<T_game_result_logGetPayload<T>>

    /**
     * Find the first T_game_result_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_game_result_logFindFirstArgs} args - Arguments to find a T_game_result_log
     * @example
     * // Get one T_game_result_log
     * const t_game_result_log = await prisma.t_game_result_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_game_result_logFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, T_game_result_logFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'T_game_result_log'> extends True ? Prisma__T_game_result_logClient<T_game_result_logGetPayload<T>> : Prisma__T_game_result_logClient<T_game_result_logGetPayload<T> | null, null>

    /**
     * Find the first T_game_result_log that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_game_result_logFindFirstOrThrowArgs} args - Arguments to find a T_game_result_log
     * @example
     * // Get one T_game_result_log
     * const t_game_result_log = await prisma.t_game_result_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_game_result_logFindFirstOrThrowArgs>(
      args?: SelectSubset<T, T_game_result_logFindFirstOrThrowArgs>
    ): Prisma__T_game_result_logClient<T_game_result_logGetPayload<T>>

    /**
     * Find zero or more T_game_result_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_game_result_logFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_game_result_logs
     * const t_game_result_logs = await prisma.t_game_result_log.findMany()
     * 
     * // Get first 10 T_game_result_logs
     * const t_game_result_logs = await prisma.t_game_result_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_game_result_logWithIdOnly = await prisma.t_game_result_log.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends T_game_result_logFindManyArgs>(
      args?: SelectSubset<T, T_game_result_logFindManyArgs>
    ): Prisma.PrismaPromise<Array<T_game_result_logGetPayload<T>>>

    /**
     * Create a T_game_result_log.
     * @param {T_game_result_logCreateArgs} args - Arguments to create a T_game_result_log.
     * @example
     * // Create one T_game_result_log
     * const T_game_result_log = await prisma.t_game_result_log.create({
     *   data: {
     *     // ... data to create a T_game_result_log
     *   }
     * })
     * 
    **/
    create<T extends T_game_result_logCreateArgs>(
      args: SelectSubset<T, T_game_result_logCreateArgs>
    ): Prisma__T_game_result_logClient<T_game_result_logGetPayload<T>>

    /**
     * Create many T_game_result_logs.
     *     @param {T_game_result_logCreateManyArgs} args - Arguments to create many T_game_result_logs.
     *     @example
     *     // Create many T_game_result_logs
     *     const t_game_result_log = await prisma.t_game_result_log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends T_game_result_logCreateManyArgs>(
      args?: SelectSubset<T, T_game_result_logCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_game_result_log.
     * @param {T_game_result_logDeleteArgs} args - Arguments to delete one T_game_result_log.
     * @example
     * // Delete one T_game_result_log
     * const T_game_result_log = await prisma.t_game_result_log.delete({
     *   where: {
     *     // ... filter to delete one T_game_result_log
     *   }
     * })
     * 
    **/
    delete<T extends T_game_result_logDeleteArgs>(
      args: SelectSubset<T, T_game_result_logDeleteArgs>
    ): Prisma__T_game_result_logClient<T_game_result_logGetPayload<T>>

    /**
     * Update one T_game_result_log.
     * @param {T_game_result_logUpdateArgs} args - Arguments to update one T_game_result_log.
     * @example
     * // Update one T_game_result_log
     * const t_game_result_log = await prisma.t_game_result_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_game_result_logUpdateArgs>(
      args: SelectSubset<T, T_game_result_logUpdateArgs>
    ): Prisma__T_game_result_logClient<T_game_result_logGetPayload<T>>

    /**
     * Delete zero or more T_game_result_logs.
     * @param {T_game_result_logDeleteManyArgs} args - Arguments to filter T_game_result_logs to delete.
     * @example
     * // Delete a few T_game_result_logs
     * const { count } = await prisma.t_game_result_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_game_result_logDeleteManyArgs>(
      args?: SelectSubset<T, T_game_result_logDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_game_result_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_game_result_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_game_result_logs
     * const t_game_result_log = await prisma.t_game_result_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_game_result_logUpdateManyArgs>(
      args: SelectSubset<T, T_game_result_logUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_game_result_log.
     * @param {T_game_result_logUpsertArgs} args - Arguments to update or create a T_game_result_log.
     * @example
     * // Update or create a T_game_result_log
     * const t_game_result_log = await prisma.t_game_result_log.upsert({
     *   create: {
     *     // ... data to create a T_game_result_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_game_result_log we want to update
     *   }
     * })
    **/
    upsert<T extends T_game_result_logUpsertArgs>(
      args: SelectSubset<T, T_game_result_logUpsertArgs>
    ): Prisma__T_game_result_logClient<T_game_result_logGetPayload<T>>

    /**
     * Count the number of T_game_result_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_game_result_logCountArgs} args - Arguments to filter T_game_result_logs to count.
     * @example
     * // Count the number of T_game_result_logs
     * const count = await prisma.t_game_result_log.count({
     *   where: {
     *     // ... the filter for the T_game_result_logs we want to count
     *   }
     * })
    **/
    count<T extends T_game_result_logCountArgs>(
      args?: Subset<T, T_game_result_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_game_result_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_game_result_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_game_result_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_game_result_logAggregateArgs>(args: Subset<T, T_game_result_logAggregateArgs>): Prisma.PrismaPromise<GetT_game_result_logAggregateType<T>>

    /**
     * Group by T_game_result_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_game_result_logGroupByArgs} args - Group by arguments.
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
      T extends T_game_result_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_game_result_logGroupByArgs['orderBy'] }
        : { orderBy?: T_game_result_logGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_game_result_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_game_result_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for T_game_result_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__T_game_result_logClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * T_game_result_log base type for findUnique actions
   */
  export type T_game_result_logFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the T_game_result_log
     */
    select?: T_game_result_logSelect | null
    /**
     * Filter, which T_game_result_log to fetch.
     */
    where: T_game_result_logWhereUniqueInput
  }

  /**
   * T_game_result_log findUnique
   */
  export interface T_game_result_logFindUniqueArgs extends T_game_result_logFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_game_result_log findUniqueOrThrow
   */
  export type T_game_result_logFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_game_result_log
     */
    select?: T_game_result_logSelect | null
    /**
     * Filter, which T_game_result_log to fetch.
     */
    where: T_game_result_logWhereUniqueInput
  }


  /**
   * T_game_result_log base type for findFirst actions
   */
  export type T_game_result_logFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the T_game_result_log
     */
    select?: T_game_result_logSelect | null
    /**
     * Filter, which T_game_result_log to fetch.
     */
    where?: T_game_result_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_game_result_logs to fetch.
     */
    orderBy?: Enumerable<T_game_result_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_game_result_logs.
     */
    cursor?: T_game_result_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_game_result_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_game_result_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_game_result_logs.
     */
    distinct?: Enumerable<T_game_result_logScalarFieldEnum>
  }

  /**
   * T_game_result_log findFirst
   */
  export interface T_game_result_logFindFirstArgs extends T_game_result_logFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_game_result_log findFirstOrThrow
   */
  export type T_game_result_logFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_game_result_log
     */
    select?: T_game_result_logSelect | null
    /**
     * Filter, which T_game_result_log to fetch.
     */
    where?: T_game_result_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_game_result_logs to fetch.
     */
    orderBy?: Enumerable<T_game_result_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_game_result_logs.
     */
    cursor?: T_game_result_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_game_result_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_game_result_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_game_result_logs.
     */
    distinct?: Enumerable<T_game_result_logScalarFieldEnum>
  }


  /**
   * T_game_result_log findMany
   */
  export type T_game_result_logFindManyArgs = {
    /**
     * Select specific fields to fetch from the T_game_result_log
     */
    select?: T_game_result_logSelect | null
    /**
     * Filter, which T_game_result_logs to fetch.
     */
    where?: T_game_result_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_game_result_logs to fetch.
     */
    orderBy?: Enumerable<T_game_result_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_game_result_logs.
     */
    cursor?: T_game_result_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_game_result_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_game_result_logs.
     */
    skip?: number
    distinct?: Enumerable<T_game_result_logScalarFieldEnum>
  }


  /**
   * T_game_result_log create
   */
  export type T_game_result_logCreateArgs = {
    /**
     * Select specific fields to fetch from the T_game_result_log
     */
    select?: T_game_result_logSelect | null
    /**
     * The data needed to create a T_game_result_log.
     */
    data: XOR<T_game_result_logCreateInput, T_game_result_logUncheckedCreateInput>
  }


  /**
   * T_game_result_log createMany
   */
  export type T_game_result_logCreateManyArgs = {
    /**
     * The data used to create many T_game_result_logs.
     */
    data: Enumerable<T_game_result_logCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * T_game_result_log update
   */
  export type T_game_result_logUpdateArgs = {
    /**
     * Select specific fields to fetch from the T_game_result_log
     */
    select?: T_game_result_logSelect | null
    /**
     * The data needed to update a T_game_result_log.
     */
    data: XOR<T_game_result_logUpdateInput, T_game_result_logUncheckedUpdateInput>
    /**
     * Choose, which T_game_result_log to update.
     */
    where: T_game_result_logWhereUniqueInput
  }


  /**
   * T_game_result_log updateMany
   */
  export type T_game_result_logUpdateManyArgs = {
    /**
     * The data used to update T_game_result_logs.
     */
    data: XOR<T_game_result_logUpdateManyMutationInput, T_game_result_logUncheckedUpdateManyInput>
    /**
     * Filter which T_game_result_logs to update
     */
    where?: T_game_result_logWhereInput
  }


  /**
   * T_game_result_log upsert
   */
  export type T_game_result_logUpsertArgs = {
    /**
     * Select specific fields to fetch from the T_game_result_log
     */
    select?: T_game_result_logSelect | null
    /**
     * The filter to search for the T_game_result_log to update in case it exists.
     */
    where: T_game_result_logWhereUniqueInput
    /**
     * In case the T_game_result_log found by the `where` argument doesn't exist, create a new T_game_result_log with this data.
     */
    create: XOR<T_game_result_logCreateInput, T_game_result_logUncheckedCreateInput>
    /**
     * In case the T_game_result_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_game_result_logUpdateInput, T_game_result_logUncheckedUpdateInput>
  }


  /**
   * T_game_result_log delete
   */
  export type T_game_result_logDeleteArgs = {
    /**
     * Select specific fields to fetch from the T_game_result_log
     */
    select?: T_game_result_logSelect | null
    /**
     * Filter which T_game_result_log to delete.
     */
    where: T_game_result_logWhereUniqueInput
  }


  /**
   * T_game_result_log deleteMany
   */
  export type T_game_result_logDeleteManyArgs = {
    /**
     * Filter which T_game_result_logs to delete
     */
    where?: T_game_result_logWhereInput
  }


  /**
   * T_game_result_log without action
   */
  export type T_game_result_logArgs = {
    /**
     * Select specific fields to fetch from the T_game_result_log
     */
    select?: T_game_result_logSelect | null
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
    genre: number | null
    room_type: number | null
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
    user_id4: number | null
    user_score4: number | null
    user_id5: number | null
    user_score5: number | null
    user_id6: number | null
    user_score6: number | null
    user_id7: number | null
    user_score7: number | null
    user_id8: number | null
    user_score8: number | null
    port: number | null
  }

  export type T_roomsSumAggregateOutputType = {
    genre: number | null
    room_type: number | null
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
    user_id4: number | null
    user_score4: number | null
    user_id5: number | null
    user_score5: number | null
    user_id6: number | null
    user_score6: number | null
    user_id7: number | null
    user_score7: number | null
    user_id8: number | null
    user_score8: number | null
    port: number | null
  }

  export type T_roomsMinAggregateOutputType = {
    uuid: string | null
    id: string | null
    genre: number | null
    room_type: number | null
    scene: string | null
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
    user_id4: number | null
    user_icon4: string | null
    user_name4: string | null
    user_score4: number | null
    user_id5: number | null
    user_icon5: string | null
    user_name5: string | null
    user_score5: number | null
    user_id6: number | null
    user_icon6: string | null
    user_name6: string | null
    user_score6: number | null
    user_id7: number | null
    user_icon7: string | null
    user_name7: string | null
    user_score7: number | null
    user_id8: number | null
    user_icon8: string | null
    user_name8: string | null
    user_score8: number | null
    ip: string | null
    port: number | null
  }

  export type T_roomsMaxAggregateOutputType = {
    uuid: string | null
    id: string | null
    genre: number | null
    room_type: number | null
    scene: string | null
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
    user_id4: number | null
    user_icon4: string | null
    user_name4: string | null
    user_score4: number | null
    user_id5: number | null
    user_icon5: string | null
    user_name5: string | null
    user_score5: number | null
    user_id6: number | null
    user_icon6: string | null
    user_name6: string | null
    user_score6: number | null
    user_id7: number | null
    user_icon7: string | null
    user_name7: string | null
    user_score7: number | null
    user_id8: number | null
    user_icon8: string | null
    user_name8: string | null
    user_score8: number | null
    ip: string | null
    port: number | null
  }

  export type T_roomsCountAggregateOutputType = {
    uuid: number
    id: number
    genre: number
    room_type: number
    scene: number
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
    user_id4: number
    user_icon4: number
    user_name4: number
    user_score4: number
    user_id5: number
    user_icon5: number
    user_name5: number
    user_score5: number
    user_id6: number
    user_icon6: number
    user_name6: number
    user_score6: number
    user_id7: number
    user_icon7: number
    user_name7: number
    user_score7: number
    user_id8: number
    user_icon8: number
    user_name8: number
    user_score8: number
    ip: number
    port: number
    _all: number
  }


  export type T_roomsAvgAggregateInputType = {
    genre?: true
    room_type?: true
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
    user_id4?: true
    user_score4?: true
    user_id5?: true
    user_score5?: true
    user_id6?: true
    user_score6?: true
    user_id7?: true
    user_score7?: true
    user_id8?: true
    user_score8?: true
    port?: true
  }

  export type T_roomsSumAggregateInputType = {
    genre?: true
    room_type?: true
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
    user_id4?: true
    user_score4?: true
    user_id5?: true
    user_score5?: true
    user_id6?: true
    user_score6?: true
    user_id7?: true
    user_score7?: true
    user_id8?: true
    user_score8?: true
    port?: true
  }

  export type T_roomsMinAggregateInputType = {
    uuid?: true
    id?: true
    genre?: true
    room_type?: true
    scene?: true
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
    user_id4?: true
    user_icon4?: true
    user_name4?: true
    user_score4?: true
    user_id5?: true
    user_icon5?: true
    user_name5?: true
    user_score5?: true
    user_id6?: true
    user_icon6?: true
    user_name6?: true
    user_score6?: true
    user_id7?: true
    user_icon7?: true
    user_name7?: true
    user_score7?: true
    user_id8?: true
    user_icon8?: true
    user_name8?: true
    user_score8?: true
    ip?: true
    port?: true
  }

  export type T_roomsMaxAggregateInputType = {
    uuid?: true
    id?: true
    genre?: true
    room_type?: true
    scene?: true
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
    user_id4?: true
    user_icon4?: true
    user_name4?: true
    user_score4?: true
    user_id5?: true
    user_icon5?: true
    user_name5?: true
    user_score5?: true
    user_id6?: true
    user_icon6?: true
    user_name6?: true
    user_score6?: true
    user_id7?: true
    user_icon7?: true
    user_name7?: true
    user_score7?: true
    user_id8?: true
    user_icon8?: true
    user_name8?: true
    user_score8?: true
    ip?: true
    port?: true
  }

  export type T_roomsCountAggregateInputType = {
    uuid?: true
    id?: true
    genre?: true
    room_type?: true
    scene?: true
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
    user_id4?: true
    user_icon4?: true
    user_name4?: true
    user_score4?: true
    user_id5?: true
    user_icon5?: true
    user_name5?: true
    user_score5?: true
    user_id6?: true
    user_icon6?: true
    user_name6?: true
    user_score6?: true
    user_id7?: true
    user_icon7?: true
    user_name7?: true
    user_score7?: true
    user_id8?: true
    user_icon8?: true
    user_name8?: true
    user_score8?: true
    ip?: true
    port?: true
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
    genre: number
    room_type: number
    scene: string
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
    user_id4: number
    user_icon4: string
    user_name4: string
    user_score4: number
    user_id5: number
    user_icon5: string
    user_name5: string
    user_score5: number
    user_id6: number
    user_icon6: string
    user_name6: string
    user_score6: number
    user_id7: number
    user_icon7: string
    user_name7: string
    user_score7: number
    user_id8: number
    user_icon8: string
    user_name8: string
    user_score8: number
    ip: string
    port: number
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
    genre?: boolean
    room_type?: boolean
    scene?: boolean
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
    user_id4?: boolean
    user_icon4?: boolean
    user_name4?: boolean
    user_score4?: boolean
    user_id5?: boolean
    user_icon5?: boolean
    user_name5?: boolean
    user_score5?: boolean
    user_id6?: boolean
    user_icon6?: boolean
    user_name6?: boolean
    user_score6?: boolean
    user_id7?: boolean
    user_icon7?: boolean
    user_name7?: boolean
    user_score7?: boolean
    user_id8?: boolean
    user_icon8?: boolean
    user_name8?: boolean
    user_score8?: boolean
    ip?: boolean
    port?: boolean
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
   * Model T_scene
   */


  export type AggregateT_scene = {
    _count: T_sceneCountAggregateOutputType | null
    _avg: T_sceneAvgAggregateOutputType | null
    _sum: T_sceneSumAggregateOutputType | null
    _min: T_sceneMinAggregateOutputType | null
    _max: T_sceneMaxAggregateOutputType | null
  }

  export type T_sceneAvgAggregateOutputType = {
    id: number | null
    room_type: number | null
    scene: number | null
    genre: number | null
    time: number | null
    limit_type: number | null
    limit_num: number | null
    limit_danzhu: number | null
    consume_type: number | null
    consume_num: number | null
    tax: number | null
    online: number | null
  }

  export type T_sceneSumAggregateOutputType = {
    id: number | null
    room_type: number | null
    scene: number | null
    genre: number | null
    time: number | null
    limit_type: number | null
    limit_num: number | null
    limit_danzhu: number | null
    consume_type: number | null
    consume_num: number | null
    tax: number | null
    online: number | null
  }

  export type T_sceneMinAggregateOutputType = {
    id: number | null
    room_type: number | null
    scene: number | null
    genre: number | null
    type: string | null
    time: number | null
    limit_type: number | null
    limit_num: number | null
    limit_danzhu: number | null
    consume_type: number | null
    consume_num: number | null
    tax: number | null
    online: number | null
  }

  export type T_sceneMaxAggregateOutputType = {
    id: number | null
    room_type: number | null
    scene: number | null
    genre: number | null
    type: string | null
    time: number | null
    limit_type: number | null
    limit_num: number | null
    limit_danzhu: number | null
    consume_type: number | null
    consume_num: number | null
    tax: number | null
    online: number | null
  }

  export type T_sceneCountAggregateOutputType = {
    id: number
    room_type: number
    scene: number
    genre: number
    type: number
    time: number
    limit_type: number
    limit_num: number
    limit_danzhu: number
    consume_type: number
    consume_num: number
    tax: number
    online: number
    _all: number
  }


  export type T_sceneAvgAggregateInputType = {
    id?: true
    room_type?: true
    scene?: true
    genre?: true
    time?: true
    limit_type?: true
    limit_num?: true
    limit_danzhu?: true
    consume_type?: true
    consume_num?: true
    tax?: true
    online?: true
  }

  export type T_sceneSumAggregateInputType = {
    id?: true
    room_type?: true
    scene?: true
    genre?: true
    time?: true
    limit_type?: true
    limit_num?: true
    limit_danzhu?: true
    consume_type?: true
    consume_num?: true
    tax?: true
    online?: true
  }

  export type T_sceneMinAggregateInputType = {
    id?: true
    room_type?: true
    scene?: true
    genre?: true
    type?: true
    time?: true
    limit_type?: true
    limit_num?: true
    limit_danzhu?: true
    consume_type?: true
    consume_num?: true
    tax?: true
    online?: true
  }

  export type T_sceneMaxAggregateInputType = {
    id?: true
    room_type?: true
    scene?: true
    genre?: true
    type?: true
    time?: true
    limit_type?: true
    limit_num?: true
    limit_danzhu?: true
    consume_type?: true
    consume_num?: true
    tax?: true
    online?: true
  }

  export type T_sceneCountAggregateInputType = {
    id?: true
    room_type?: true
    scene?: true
    genre?: true
    type?: true
    time?: true
    limit_type?: true
    limit_num?: true
    limit_danzhu?: true
    consume_type?: true
    consume_num?: true
    tax?: true
    online?: true
    _all?: true
  }

  export type T_sceneAggregateArgs = {
    /**
     * Filter which T_scene to aggregate.
     */
    where?: T_sceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_scenes to fetch.
     */
    orderBy?: Enumerable<T_sceneOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_sceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_scenes
    **/
    _count?: true | T_sceneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_sceneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_sceneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_sceneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_sceneMaxAggregateInputType
  }

  export type GetT_sceneAggregateType<T extends T_sceneAggregateArgs> = {
        [P in keyof T & keyof AggregateT_scene]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_scene[P]>
      : GetScalarType<T[P], AggregateT_scene[P]>
  }




  export type T_sceneGroupByArgs = {
    where?: T_sceneWhereInput
    orderBy?: Enumerable<T_sceneOrderByWithAggregationInput>
    by: T_sceneScalarFieldEnum[]
    having?: T_sceneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_sceneCountAggregateInputType | true
    _avg?: T_sceneAvgAggregateInputType
    _sum?: T_sceneSumAggregateInputType
    _min?: T_sceneMinAggregateInputType
    _max?: T_sceneMaxAggregateInputType
  }


  export type T_sceneGroupByOutputType = {
    id: number
    room_type: number
    scene: number
    genre: number
    type: string
    time: number
    limit_type: number
    limit_num: number
    limit_danzhu: number
    consume_type: number
    consume_num: number
    tax: number
    online: number
    _count: T_sceneCountAggregateOutputType | null
    _avg: T_sceneAvgAggregateOutputType | null
    _sum: T_sceneSumAggregateOutputType | null
    _min: T_sceneMinAggregateOutputType | null
    _max: T_sceneMaxAggregateOutputType | null
  }

  type GetT_sceneGroupByPayload<T extends T_sceneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<T_sceneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_sceneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_sceneGroupByOutputType[P]>
            : GetScalarType<T[P], T_sceneGroupByOutputType[P]>
        }
      >
    >


  export type T_sceneSelect = {
    id?: boolean
    room_type?: boolean
    scene?: boolean
    genre?: boolean
    type?: boolean
    time?: boolean
    limit_type?: boolean
    limit_num?: boolean
    limit_danzhu?: boolean
    consume_type?: boolean
    consume_num?: boolean
    tax?: boolean
    online?: boolean
  }


  export type T_sceneGetPayload<S extends boolean | null | undefined | T_sceneArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? T_scene :
    S extends undefined ? never :
    S extends { include: any } & (T_sceneArgs | T_sceneFindManyArgs)
    ? T_scene 
    : S extends { select: any } & (T_sceneArgs | T_sceneFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof T_scene ? T_scene[P] : never
  } 
      : T_scene


  type T_sceneCountArgs = 
    Omit<T_sceneFindManyArgs, 'select' | 'include'> & {
      select?: T_sceneCountAggregateInputType | true
    }

  export interface T_sceneDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one T_scene that matches the filter.
     * @param {T_sceneFindUniqueArgs} args - Arguments to find a T_scene
     * @example
     * // Get one T_scene
     * const t_scene = await prisma.t_scene.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_sceneFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, T_sceneFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'T_scene'> extends True ? Prisma__T_sceneClient<T_sceneGetPayload<T>> : Prisma__T_sceneClient<T_sceneGetPayload<T> | null, null>

    /**
     * Find one T_scene that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {T_sceneFindUniqueOrThrowArgs} args - Arguments to find a T_scene
     * @example
     * // Get one T_scene
     * const t_scene = await prisma.t_scene.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_sceneFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, T_sceneFindUniqueOrThrowArgs>
    ): Prisma__T_sceneClient<T_sceneGetPayload<T>>

    /**
     * Find the first T_scene that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_sceneFindFirstArgs} args - Arguments to find a T_scene
     * @example
     * // Get one T_scene
     * const t_scene = await prisma.t_scene.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_sceneFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, T_sceneFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'T_scene'> extends True ? Prisma__T_sceneClient<T_sceneGetPayload<T>> : Prisma__T_sceneClient<T_sceneGetPayload<T> | null, null>

    /**
     * Find the first T_scene that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_sceneFindFirstOrThrowArgs} args - Arguments to find a T_scene
     * @example
     * // Get one T_scene
     * const t_scene = await prisma.t_scene.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_sceneFindFirstOrThrowArgs>(
      args?: SelectSubset<T, T_sceneFindFirstOrThrowArgs>
    ): Prisma__T_sceneClient<T_sceneGetPayload<T>>

    /**
     * Find zero or more T_scenes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_sceneFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_scenes
     * const t_scenes = await prisma.t_scene.findMany()
     * 
     * // Get first 10 T_scenes
     * const t_scenes = await prisma.t_scene.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_sceneWithIdOnly = await prisma.t_scene.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends T_sceneFindManyArgs>(
      args?: SelectSubset<T, T_sceneFindManyArgs>
    ): Prisma.PrismaPromise<Array<T_sceneGetPayload<T>>>

    /**
     * Create a T_scene.
     * @param {T_sceneCreateArgs} args - Arguments to create a T_scene.
     * @example
     * // Create one T_scene
     * const T_scene = await prisma.t_scene.create({
     *   data: {
     *     // ... data to create a T_scene
     *   }
     * })
     * 
    **/
    create<T extends T_sceneCreateArgs>(
      args: SelectSubset<T, T_sceneCreateArgs>
    ): Prisma__T_sceneClient<T_sceneGetPayload<T>>

    /**
     * Create many T_scenes.
     *     @param {T_sceneCreateManyArgs} args - Arguments to create many T_scenes.
     *     @example
     *     // Create many T_scenes
     *     const t_scene = await prisma.t_scene.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends T_sceneCreateManyArgs>(
      args?: SelectSubset<T, T_sceneCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_scene.
     * @param {T_sceneDeleteArgs} args - Arguments to delete one T_scene.
     * @example
     * // Delete one T_scene
     * const T_scene = await prisma.t_scene.delete({
     *   where: {
     *     // ... filter to delete one T_scene
     *   }
     * })
     * 
    **/
    delete<T extends T_sceneDeleteArgs>(
      args: SelectSubset<T, T_sceneDeleteArgs>
    ): Prisma__T_sceneClient<T_sceneGetPayload<T>>

    /**
     * Update one T_scene.
     * @param {T_sceneUpdateArgs} args - Arguments to update one T_scene.
     * @example
     * // Update one T_scene
     * const t_scene = await prisma.t_scene.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_sceneUpdateArgs>(
      args: SelectSubset<T, T_sceneUpdateArgs>
    ): Prisma__T_sceneClient<T_sceneGetPayload<T>>

    /**
     * Delete zero or more T_scenes.
     * @param {T_sceneDeleteManyArgs} args - Arguments to filter T_scenes to delete.
     * @example
     * // Delete a few T_scenes
     * const { count } = await prisma.t_scene.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_sceneDeleteManyArgs>(
      args?: SelectSubset<T, T_sceneDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_sceneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_scenes
     * const t_scene = await prisma.t_scene.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_sceneUpdateManyArgs>(
      args: SelectSubset<T, T_sceneUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_scene.
     * @param {T_sceneUpsertArgs} args - Arguments to update or create a T_scene.
     * @example
     * // Update or create a T_scene
     * const t_scene = await prisma.t_scene.upsert({
     *   create: {
     *     // ... data to create a T_scene
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_scene we want to update
     *   }
     * })
    **/
    upsert<T extends T_sceneUpsertArgs>(
      args: SelectSubset<T, T_sceneUpsertArgs>
    ): Prisma__T_sceneClient<T_sceneGetPayload<T>>

    /**
     * Count the number of T_scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_sceneCountArgs} args - Arguments to filter T_scenes to count.
     * @example
     * // Count the number of T_scenes
     * const count = await prisma.t_scene.count({
     *   where: {
     *     // ... the filter for the T_scenes we want to count
     *   }
     * })
    **/
    count<T extends T_sceneCountArgs>(
      args?: Subset<T, T_sceneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_sceneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_scene.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_sceneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_sceneAggregateArgs>(args: Subset<T, T_sceneAggregateArgs>): Prisma.PrismaPromise<GetT_sceneAggregateType<T>>

    /**
     * Group by T_scene.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_sceneGroupByArgs} args - Group by arguments.
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
      T extends T_sceneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_sceneGroupByArgs['orderBy'] }
        : { orderBy?: T_sceneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_sceneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_sceneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for T_scene.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__T_sceneClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * T_scene base type for findUnique actions
   */
  export type T_sceneFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the T_scene
     */
    select?: T_sceneSelect | null
    /**
     * Filter, which T_scene to fetch.
     */
    where: T_sceneWhereUniqueInput
  }

  /**
   * T_scene findUnique
   */
  export interface T_sceneFindUniqueArgs extends T_sceneFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_scene findUniqueOrThrow
   */
  export type T_sceneFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_scene
     */
    select?: T_sceneSelect | null
    /**
     * Filter, which T_scene to fetch.
     */
    where: T_sceneWhereUniqueInput
  }


  /**
   * T_scene base type for findFirst actions
   */
  export type T_sceneFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the T_scene
     */
    select?: T_sceneSelect | null
    /**
     * Filter, which T_scene to fetch.
     */
    where?: T_sceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_scenes to fetch.
     */
    orderBy?: Enumerable<T_sceneOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_scenes.
     */
    cursor?: T_sceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_scenes.
     */
    distinct?: Enumerable<T_sceneScalarFieldEnum>
  }

  /**
   * T_scene findFirst
   */
  export interface T_sceneFindFirstArgs extends T_sceneFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_scene findFirstOrThrow
   */
  export type T_sceneFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_scene
     */
    select?: T_sceneSelect | null
    /**
     * Filter, which T_scene to fetch.
     */
    where?: T_sceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_scenes to fetch.
     */
    orderBy?: Enumerable<T_sceneOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_scenes.
     */
    cursor?: T_sceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_scenes.
     */
    distinct?: Enumerable<T_sceneScalarFieldEnum>
  }


  /**
   * T_scene findMany
   */
  export type T_sceneFindManyArgs = {
    /**
     * Select specific fields to fetch from the T_scene
     */
    select?: T_sceneSelect | null
    /**
     * Filter, which T_scenes to fetch.
     */
    where?: T_sceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_scenes to fetch.
     */
    orderBy?: Enumerable<T_sceneOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_scenes.
     */
    cursor?: T_sceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_scenes.
     */
    skip?: number
    distinct?: Enumerable<T_sceneScalarFieldEnum>
  }


  /**
   * T_scene create
   */
  export type T_sceneCreateArgs = {
    /**
     * Select specific fields to fetch from the T_scene
     */
    select?: T_sceneSelect | null
    /**
     * The data needed to create a T_scene.
     */
    data: XOR<T_sceneCreateInput, T_sceneUncheckedCreateInput>
  }


  /**
   * T_scene createMany
   */
  export type T_sceneCreateManyArgs = {
    /**
     * The data used to create many T_scenes.
     */
    data: Enumerable<T_sceneCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * T_scene update
   */
  export type T_sceneUpdateArgs = {
    /**
     * Select specific fields to fetch from the T_scene
     */
    select?: T_sceneSelect | null
    /**
     * The data needed to update a T_scene.
     */
    data: XOR<T_sceneUpdateInput, T_sceneUncheckedUpdateInput>
    /**
     * Choose, which T_scene to update.
     */
    where: T_sceneWhereUniqueInput
  }


  /**
   * T_scene updateMany
   */
  export type T_sceneUpdateManyArgs = {
    /**
     * The data used to update T_scenes.
     */
    data: XOR<T_sceneUpdateManyMutationInput, T_sceneUncheckedUpdateManyInput>
    /**
     * Filter which T_scenes to update
     */
    where?: T_sceneWhereInput
  }


  /**
   * T_scene upsert
   */
  export type T_sceneUpsertArgs = {
    /**
     * Select specific fields to fetch from the T_scene
     */
    select?: T_sceneSelect | null
    /**
     * The filter to search for the T_scene to update in case it exists.
     */
    where: T_sceneWhereUniqueInput
    /**
     * In case the T_scene found by the `where` argument doesn't exist, create a new T_scene with this data.
     */
    create: XOR<T_sceneCreateInput, T_sceneUncheckedCreateInput>
    /**
     * In case the T_scene was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_sceneUpdateInput, T_sceneUncheckedUpdateInput>
  }


  /**
   * T_scene delete
   */
  export type T_sceneDeleteArgs = {
    /**
     * Select specific fields to fetch from the T_scene
     */
    select?: T_sceneSelect | null
    /**
     * Filter which T_scene to delete.
     */
    where: T_sceneWhereUniqueInput
  }


  /**
   * T_scene deleteMany
   */
  export type T_sceneDeleteManyArgs = {
    /**
     * Filter which T_scenes to delete
     */
    where?: T_sceneWhereInput
  }


  /**
   * T_scene without action
   */
  export type T_sceneArgs = {
    /**
     * Select specific fields to fetch from the T_scene
     */
    select?: T_sceneSelect | null
  }



  /**
   * Model T_sell_log
   */


  export type AggregateT_sell_log = {
    _count: T_sell_logCountAggregateOutputType | null
    _avg: T_sell_logAvgAggregateOutputType | null
    _sum: T_sell_logSumAggregateOutputType | null
    _min: T_sell_logMinAggregateOutputType | null
    _max: T_sell_logMaxAggregateOutputType | null
  }

  export type T_sell_logAvgAggregateOutputType = {
    id: number | null
    userid: number | null
    gems_num: number | null
    seller_id: number | null
    charge_type: number | null
    addtime: number | null
  }

  export type T_sell_logSumAggregateOutputType = {
    id: number | null
    userid: number | null
    gems_num: number | null
    seller_id: number | null
    charge_type: number | null
    addtime: number | null
  }

  export type T_sell_logMinAggregateOutputType = {
    id: number | null
    userid: number | null
    gems_num: number | null
    seller_id: number | null
    charge_type: number | null
    addtime: number | null
    batchno: string | null
  }

  export type T_sell_logMaxAggregateOutputType = {
    id: number | null
    userid: number | null
    gems_num: number | null
    seller_id: number | null
    charge_type: number | null
    addtime: number | null
    batchno: string | null
  }

  export type T_sell_logCountAggregateOutputType = {
    id: number
    userid: number
    gems_num: number
    seller_id: number
    charge_type: number
    addtime: number
    batchno: number
    _all: number
  }


  export type T_sell_logAvgAggregateInputType = {
    id?: true
    userid?: true
    gems_num?: true
    seller_id?: true
    charge_type?: true
    addtime?: true
  }

  export type T_sell_logSumAggregateInputType = {
    id?: true
    userid?: true
    gems_num?: true
    seller_id?: true
    charge_type?: true
    addtime?: true
  }

  export type T_sell_logMinAggregateInputType = {
    id?: true
    userid?: true
    gems_num?: true
    seller_id?: true
    charge_type?: true
    addtime?: true
    batchno?: true
  }

  export type T_sell_logMaxAggregateInputType = {
    id?: true
    userid?: true
    gems_num?: true
    seller_id?: true
    charge_type?: true
    addtime?: true
    batchno?: true
  }

  export type T_sell_logCountAggregateInputType = {
    id?: true
    userid?: true
    gems_num?: true
    seller_id?: true
    charge_type?: true
    addtime?: true
    batchno?: true
    _all?: true
  }

  export type T_sell_logAggregateArgs = {
    /**
     * Filter which T_sell_log to aggregate.
     */
    where?: T_sell_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_sell_logs to fetch.
     */
    orderBy?: Enumerable<T_sell_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_sell_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_sell_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_sell_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_sell_logs
    **/
    _count?: true | T_sell_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_sell_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_sell_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_sell_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_sell_logMaxAggregateInputType
  }

  export type GetT_sell_logAggregateType<T extends T_sell_logAggregateArgs> = {
        [P in keyof T & keyof AggregateT_sell_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_sell_log[P]>
      : GetScalarType<T[P], AggregateT_sell_log[P]>
  }




  export type T_sell_logGroupByArgs = {
    where?: T_sell_logWhereInput
    orderBy?: Enumerable<T_sell_logOrderByWithAggregationInput>
    by: T_sell_logScalarFieldEnum[]
    having?: T_sell_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_sell_logCountAggregateInputType | true
    _avg?: T_sell_logAvgAggregateInputType
    _sum?: T_sell_logSumAggregateInputType
    _min?: T_sell_logMinAggregateInputType
    _max?: T_sell_logMaxAggregateInputType
  }


  export type T_sell_logGroupByOutputType = {
    id: number
    userid: number
    gems_num: number
    seller_id: number
    charge_type: number
    addtime: number
    batchno: string
    _count: T_sell_logCountAggregateOutputType | null
    _avg: T_sell_logAvgAggregateOutputType | null
    _sum: T_sell_logSumAggregateOutputType | null
    _min: T_sell_logMinAggregateOutputType | null
    _max: T_sell_logMaxAggregateOutputType | null
  }

  type GetT_sell_logGroupByPayload<T extends T_sell_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<T_sell_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_sell_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_sell_logGroupByOutputType[P]>
            : GetScalarType<T[P], T_sell_logGroupByOutputType[P]>
        }
      >
    >


  export type T_sell_logSelect = {
    id?: boolean
    userid?: boolean
    gems_num?: boolean
    seller_id?: boolean
    charge_type?: boolean
    addtime?: boolean
    batchno?: boolean
  }


  export type T_sell_logGetPayload<S extends boolean | null | undefined | T_sell_logArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? T_sell_log :
    S extends undefined ? never :
    S extends { include: any } & (T_sell_logArgs | T_sell_logFindManyArgs)
    ? T_sell_log 
    : S extends { select: any } & (T_sell_logArgs | T_sell_logFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof T_sell_log ? T_sell_log[P] : never
  } 
      : T_sell_log


  type T_sell_logCountArgs = 
    Omit<T_sell_logFindManyArgs, 'select' | 'include'> & {
      select?: T_sell_logCountAggregateInputType | true
    }

  export interface T_sell_logDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one T_sell_log that matches the filter.
     * @param {T_sell_logFindUniqueArgs} args - Arguments to find a T_sell_log
     * @example
     * // Get one T_sell_log
     * const t_sell_log = await prisma.t_sell_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_sell_logFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, T_sell_logFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'T_sell_log'> extends True ? Prisma__T_sell_logClient<T_sell_logGetPayload<T>> : Prisma__T_sell_logClient<T_sell_logGetPayload<T> | null, null>

    /**
     * Find one T_sell_log that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {T_sell_logFindUniqueOrThrowArgs} args - Arguments to find a T_sell_log
     * @example
     * // Get one T_sell_log
     * const t_sell_log = await prisma.t_sell_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_sell_logFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, T_sell_logFindUniqueOrThrowArgs>
    ): Prisma__T_sell_logClient<T_sell_logGetPayload<T>>

    /**
     * Find the first T_sell_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_sell_logFindFirstArgs} args - Arguments to find a T_sell_log
     * @example
     * // Get one T_sell_log
     * const t_sell_log = await prisma.t_sell_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_sell_logFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, T_sell_logFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'T_sell_log'> extends True ? Prisma__T_sell_logClient<T_sell_logGetPayload<T>> : Prisma__T_sell_logClient<T_sell_logGetPayload<T> | null, null>

    /**
     * Find the first T_sell_log that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_sell_logFindFirstOrThrowArgs} args - Arguments to find a T_sell_log
     * @example
     * // Get one T_sell_log
     * const t_sell_log = await prisma.t_sell_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_sell_logFindFirstOrThrowArgs>(
      args?: SelectSubset<T, T_sell_logFindFirstOrThrowArgs>
    ): Prisma__T_sell_logClient<T_sell_logGetPayload<T>>

    /**
     * Find zero or more T_sell_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_sell_logFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_sell_logs
     * const t_sell_logs = await prisma.t_sell_log.findMany()
     * 
     * // Get first 10 T_sell_logs
     * const t_sell_logs = await prisma.t_sell_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_sell_logWithIdOnly = await prisma.t_sell_log.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends T_sell_logFindManyArgs>(
      args?: SelectSubset<T, T_sell_logFindManyArgs>
    ): Prisma.PrismaPromise<Array<T_sell_logGetPayload<T>>>

    /**
     * Create a T_sell_log.
     * @param {T_sell_logCreateArgs} args - Arguments to create a T_sell_log.
     * @example
     * // Create one T_sell_log
     * const T_sell_log = await prisma.t_sell_log.create({
     *   data: {
     *     // ... data to create a T_sell_log
     *   }
     * })
     * 
    **/
    create<T extends T_sell_logCreateArgs>(
      args: SelectSubset<T, T_sell_logCreateArgs>
    ): Prisma__T_sell_logClient<T_sell_logGetPayload<T>>

    /**
     * Create many T_sell_logs.
     *     @param {T_sell_logCreateManyArgs} args - Arguments to create many T_sell_logs.
     *     @example
     *     // Create many T_sell_logs
     *     const t_sell_log = await prisma.t_sell_log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends T_sell_logCreateManyArgs>(
      args?: SelectSubset<T, T_sell_logCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_sell_log.
     * @param {T_sell_logDeleteArgs} args - Arguments to delete one T_sell_log.
     * @example
     * // Delete one T_sell_log
     * const T_sell_log = await prisma.t_sell_log.delete({
     *   where: {
     *     // ... filter to delete one T_sell_log
     *   }
     * })
     * 
    **/
    delete<T extends T_sell_logDeleteArgs>(
      args: SelectSubset<T, T_sell_logDeleteArgs>
    ): Prisma__T_sell_logClient<T_sell_logGetPayload<T>>

    /**
     * Update one T_sell_log.
     * @param {T_sell_logUpdateArgs} args - Arguments to update one T_sell_log.
     * @example
     * // Update one T_sell_log
     * const t_sell_log = await prisma.t_sell_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_sell_logUpdateArgs>(
      args: SelectSubset<T, T_sell_logUpdateArgs>
    ): Prisma__T_sell_logClient<T_sell_logGetPayload<T>>

    /**
     * Delete zero or more T_sell_logs.
     * @param {T_sell_logDeleteManyArgs} args - Arguments to filter T_sell_logs to delete.
     * @example
     * // Delete a few T_sell_logs
     * const { count } = await prisma.t_sell_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_sell_logDeleteManyArgs>(
      args?: SelectSubset<T, T_sell_logDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_sell_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_sell_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_sell_logs
     * const t_sell_log = await prisma.t_sell_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_sell_logUpdateManyArgs>(
      args: SelectSubset<T, T_sell_logUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_sell_log.
     * @param {T_sell_logUpsertArgs} args - Arguments to update or create a T_sell_log.
     * @example
     * // Update or create a T_sell_log
     * const t_sell_log = await prisma.t_sell_log.upsert({
     *   create: {
     *     // ... data to create a T_sell_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_sell_log we want to update
     *   }
     * })
    **/
    upsert<T extends T_sell_logUpsertArgs>(
      args: SelectSubset<T, T_sell_logUpsertArgs>
    ): Prisma__T_sell_logClient<T_sell_logGetPayload<T>>

    /**
     * Count the number of T_sell_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_sell_logCountArgs} args - Arguments to filter T_sell_logs to count.
     * @example
     * // Count the number of T_sell_logs
     * const count = await prisma.t_sell_log.count({
     *   where: {
     *     // ... the filter for the T_sell_logs we want to count
     *   }
     * })
    **/
    count<T extends T_sell_logCountArgs>(
      args?: Subset<T, T_sell_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_sell_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_sell_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_sell_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_sell_logAggregateArgs>(args: Subset<T, T_sell_logAggregateArgs>): Prisma.PrismaPromise<GetT_sell_logAggregateType<T>>

    /**
     * Group by T_sell_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_sell_logGroupByArgs} args - Group by arguments.
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
      T extends T_sell_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_sell_logGroupByArgs['orderBy'] }
        : { orderBy?: T_sell_logGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_sell_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_sell_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for T_sell_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__T_sell_logClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * T_sell_log base type for findUnique actions
   */
  export type T_sell_logFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the T_sell_log
     */
    select?: T_sell_logSelect | null
    /**
     * Filter, which T_sell_log to fetch.
     */
    where: T_sell_logWhereUniqueInput
  }

  /**
   * T_sell_log findUnique
   */
  export interface T_sell_logFindUniqueArgs extends T_sell_logFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_sell_log findUniqueOrThrow
   */
  export type T_sell_logFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_sell_log
     */
    select?: T_sell_logSelect | null
    /**
     * Filter, which T_sell_log to fetch.
     */
    where: T_sell_logWhereUniqueInput
  }


  /**
   * T_sell_log base type for findFirst actions
   */
  export type T_sell_logFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the T_sell_log
     */
    select?: T_sell_logSelect | null
    /**
     * Filter, which T_sell_log to fetch.
     */
    where?: T_sell_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_sell_logs to fetch.
     */
    orderBy?: Enumerable<T_sell_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_sell_logs.
     */
    cursor?: T_sell_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_sell_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_sell_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_sell_logs.
     */
    distinct?: Enumerable<T_sell_logScalarFieldEnum>
  }

  /**
   * T_sell_log findFirst
   */
  export interface T_sell_logFindFirstArgs extends T_sell_logFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_sell_log findFirstOrThrow
   */
  export type T_sell_logFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_sell_log
     */
    select?: T_sell_logSelect | null
    /**
     * Filter, which T_sell_log to fetch.
     */
    where?: T_sell_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_sell_logs to fetch.
     */
    orderBy?: Enumerable<T_sell_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_sell_logs.
     */
    cursor?: T_sell_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_sell_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_sell_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_sell_logs.
     */
    distinct?: Enumerable<T_sell_logScalarFieldEnum>
  }


  /**
   * T_sell_log findMany
   */
  export type T_sell_logFindManyArgs = {
    /**
     * Select specific fields to fetch from the T_sell_log
     */
    select?: T_sell_logSelect | null
    /**
     * Filter, which T_sell_logs to fetch.
     */
    where?: T_sell_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_sell_logs to fetch.
     */
    orderBy?: Enumerable<T_sell_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_sell_logs.
     */
    cursor?: T_sell_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_sell_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_sell_logs.
     */
    skip?: number
    distinct?: Enumerable<T_sell_logScalarFieldEnum>
  }


  /**
   * T_sell_log create
   */
  export type T_sell_logCreateArgs = {
    /**
     * Select specific fields to fetch from the T_sell_log
     */
    select?: T_sell_logSelect | null
    /**
     * The data needed to create a T_sell_log.
     */
    data: XOR<T_sell_logCreateInput, T_sell_logUncheckedCreateInput>
  }


  /**
   * T_sell_log createMany
   */
  export type T_sell_logCreateManyArgs = {
    /**
     * The data used to create many T_sell_logs.
     */
    data: Enumerable<T_sell_logCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * T_sell_log update
   */
  export type T_sell_logUpdateArgs = {
    /**
     * Select specific fields to fetch from the T_sell_log
     */
    select?: T_sell_logSelect | null
    /**
     * The data needed to update a T_sell_log.
     */
    data: XOR<T_sell_logUpdateInput, T_sell_logUncheckedUpdateInput>
    /**
     * Choose, which T_sell_log to update.
     */
    where: T_sell_logWhereUniqueInput
  }


  /**
   * T_sell_log updateMany
   */
  export type T_sell_logUpdateManyArgs = {
    /**
     * The data used to update T_sell_logs.
     */
    data: XOR<T_sell_logUpdateManyMutationInput, T_sell_logUncheckedUpdateManyInput>
    /**
     * Filter which T_sell_logs to update
     */
    where?: T_sell_logWhereInput
  }


  /**
   * T_sell_log upsert
   */
  export type T_sell_logUpsertArgs = {
    /**
     * Select specific fields to fetch from the T_sell_log
     */
    select?: T_sell_logSelect | null
    /**
     * The filter to search for the T_sell_log to update in case it exists.
     */
    where: T_sell_logWhereUniqueInput
    /**
     * In case the T_sell_log found by the `where` argument doesn't exist, create a new T_sell_log with this data.
     */
    create: XOR<T_sell_logCreateInput, T_sell_logUncheckedCreateInput>
    /**
     * In case the T_sell_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_sell_logUpdateInput, T_sell_logUncheckedUpdateInput>
  }


  /**
   * T_sell_log delete
   */
  export type T_sell_logDeleteArgs = {
    /**
     * Select specific fields to fetch from the T_sell_log
     */
    select?: T_sell_logSelect | null
    /**
     * Filter which T_sell_log to delete.
     */
    where: T_sell_logWhereUniqueInput
  }


  /**
   * T_sell_log deleteMany
   */
  export type T_sell_logDeleteManyArgs = {
    /**
     * Filter which T_sell_logs to delete
     */
    where?: T_sell_logWhereInput
  }


  /**
   * T_sell_log without action
   */
  export type T_sell_logArgs = {
    /**
     * Select specific fields to fetch from the T_sell_log
     */
    select?: T_sell_logSelect | null
  }



  /**
   * Model T_session_pool
   */


  export type AggregateT_session_pool = {
    _count: T_session_poolCountAggregateOutputType | null
    _avg: T_session_poolAvgAggregateOutputType | null
    _sum: T_session_poolSumAggregateOutputType | null
    _min: T_session_poolMinAggregateOutputType | null
    _max: T_session_poolMaxAggregateOutputType | null
  }

  export type T_session_poolAvgAggregateOutputType = {
    session_id: number | null
    content: number | null
  }

  export type T_session_poolSumAggregateOutputType = {
    session_id: number | null
    content: number | null
  }

  export type T_session_poolMinAggregateOutputType = {
    session_id: number | null
    content: number | null
  }

  export type T_session_poolMaxAggregateOutputType = {
    session_id: number | null
    content: number | null
  }

  export type T_session_poolCountAggregateOutputType = {
    session_id: number
    content: number
    _all: number
  }


  export type T_session_poolAvgAggregateInputType = {
    session_id?: true
    content?: true
  }

  export type T_session_poolSumAggregateInputType = {
    session_id?: true
    content?: true
  }

  export type T_session_poolMinAggregateInputType = {
    session_id?: true
    content?: true
  }

  export type T_session_poolMaxAggregateInputType = {
    session_id?: true
    content?: true
  }

  export type T_session_poolCountAggregateInputType = {
    session_id?: true
    content?: true
    _all?: true
  }

  export type T_session_poolAggregateArgs = {
    /**
     * Filter which T_session_pool to aggregate.
     */
    where?: T_session_poolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_session_pools to fetch.
     */
    orderBy?: Enumerable<T_session_poolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_session_poolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_session_pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_session_pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_session_pools
    **/
    _count?: true | T_session_poolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_session_poolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_session_poolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_session_poolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_session_poolMaxAggregateInputType
  }

  export type GetT_session_poolAggregateType<T extends T_session_poolAggregateArgs> = {
        [P in keyof T & keyof AggregateT_session_pool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_session_pool[P]>
      : GetScalarType<T[P], AggregateT_session_pool[P]>
  }




  export type T_session_poolGroupByArgs = {
    where?: T_session_poolWhereInput
    orderBy?: Enumerable<T_session_poolOrderByWithAggregationInput>
    by: T_session_poolScalarFieldEnum[]
    having?: T_session_poolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_session_poolCountAggregateInputType | true
    _avg?: T_session_poolAvgAggregateInputType
    _sum?: T_session_poolSumAggregateInputType
    _min?: T_session_poolMinAggregateInputType
    _max?: T_session_poolMaxAggregateInputType
  }


  export type T_session_poolGroupByOutputType = {
    session_id: number
    content: number
    _count: T_session_poolCountAggregateOutputType | null
    _avg: T_session_poolAvgAggregateOutputType | null
    _sum: T_session_poolSumAggregateOutputType | null
    _min: T_session_poolMinAggregateOutputType | null
    _max: T_session_poolMaxAggregateOutputType | null
  }

  type GetT_session_poolGroupByPayload<T extends T_session_poolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<T_session_poolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_session_poolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_session_poolGroupByOutputType[P]>
            : GetScalarType<T[P], T_session_poolGroupByOutputType[P]>
        }
      >
    >


  export type T_session_poolSelect = {
    session_id?: boolean
    content?: boolean
  }


  export type T_session_poolGetPayload<S extends boolean | null | undefined | T_session_poolArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? T_session_pool :
    S extends undefined ? never :
    S extends { include: any } & (T_session_poolArgs | T_session_poolFindManyArgs)
    ? T_session_pool 
    : S extends { select: any } & (T_session_poolArgs | T_session_poolFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof T_session_pool ? T_session_pool[P] : never
  } 
      : T_session_pool


  type T_session_poolCountArgs = 
    Omit<T_session_poolFindManyArgs, 'select' | 'include'> & {
      select?: T_session_poolCountAggregateInputType | true
    }

  export interface T_session_poolDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one T_session_pool that matches the filter.
     * @param {T_session_poolFindUniqueArgs} args - Arguments to find a T_session_pool
     * @example
     * // Get one T_session_pool
     * const t_session_pool = await prisma.t_session_pool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_session_poolFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, T_session_poolFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'T_session_pool'> extends True ? Prisma__T_session_poolClient<T_session_poolGetPayload<T>> : Prisma__T_session_poolClient<T_session_poolGetPayload<T> | null, null>

    /**
     * Find one T_session_pool that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {T_session_poolFindUniqueOrThrowArgs} args - Arguments to find a T_session_pool
     * @example
     * // Get one T_session_pool
     * const t_session_pool = await prisma.t_session_pool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_session_poolFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, T_session_poolFindUniqueOrThrowArgs>
    ): Prisma__T_session_poolClient<T_session_poolGetPayload<T>>

    /**
     * Find the first T_session_pool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_session_poolFindFirstArgs} args - Arguments to find a T_session_pool
     * @example
     * // Get one T_session_pool
     * const t_session_pool = await prisma.t_session_pool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_session_poolFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, T_session_poolFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'T_session_pool'> extends True ? Prisma__T_session_poolClient<T_session_poolGetPayload<T>> : Prisma__T_session_poolClient<T_session_poolGetPayload<T> | null, null>

    /**
     * Find the first T_session_pool that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_session_poolFindFirstOrThrowArgs} args - Arguments to find a T_session_pool
     * @example
     * // Get one T_session_pool
     * const t_session_pool = await prisma.t_session_pool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_session_poolFindFirstOrThrowArgs>(
      args?: SelectSubset<T, T_session_poolFindFirstOrThrowArgs>
    ): Prisma__T_session_poolClient<T_session_poolGetPayload<T>>

    /**
     * Find zero or more T_session_pools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_session_poolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_session_pools
     * const t_session_pools = await prisma.t_session_pool.findMany()
     * 
     * // Get first 10 T_session_pools
     * const t_session_pools = await prisma.t_session_pool.findMany({ take: 10 })
     * 
     * // Only select the `session_id`
     * const t_session_poolWithSession_idOnly = await prisma.t_session_pool.findMany({ select: { session_id: true } })
     * 
    **/
    findMany<T extends T_session_poolFindManyArgs>(
      args?: SelectSubset<T, T_session_poolFindManyArgs>
    ): Prisma.PrismaPromise<Array<T_session_poolGetPayload<T>>>

    /**
     * Create a T_session_pool.
     * @param {T_session_poolCreateArgs} args - Arguments to create a T_session_pool.
     * @example
     * // Create one T_session_pool
     * const T_session_pool = await prisma.t_session_pool.create({
     *   data: {
     *     // ... data to create a T_session_pool
     *   }
     * })
     * 
    **/
    create<T extends T_session_poolCreateArgs>(
      args: SelectSubset<T, T_session_poolCreateArgs>
    ): Prisma__T_session_poolClient<T_session_poolGetPayload<T>>

    /**
     * Create many T_session_pools.
     *     @param {T_session_poolCreateManyArgs} args - Arguments to create many T_session_pools.
     *     @example
     *     // Create many T_session_pools
     *     const t_session_pool = await prisma.t_session_pool.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends T_session_poolCreateManyArgs>(
      args?: SelectSubset<T, T_session_poolCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_session_pool.
     * @param {T_session_poolDeleteArgs} args - Arguments to delete one T_session_pool.
     * @example
     * // Delete one T_session_pool
     * const T_session_pool = await prisma.t_session_pool.delete({
     *   where: {
     *     // ... filter to delete one T_session_pool
     *   }
     * })
     * 
    **/
    delete<T extends T_session_poolDeleteArgs>(
      args: SelectSubset<T, T_session_poolDeleteArgs>
    ): Prisma__T_session_poolClient<T_session_poolGetPayload<T>>

    /**
     * Update one T_session_pool.
     * @param {T_session_poolUpdateArgs} args - Arguments to update one T_session_pool.
     * @example
     * // Update one T_session_pool
     * const t_session_pool = await prisma.t_session_pool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_session_poolUpdateArgs>(
      args: SelectSubset<T, T_session_poolUpdateArgs>
    ): Prisma__T_session_poolClient<T_session_poolGetPayload<T>>

    /**
     * Delete zero or more T_session_pools.
     * @param {T_session_poolDeleteManyArgs} args - Arguments to filter T_session_pools to delete.
     * @example
     * // Delete a few T_session_pools
     * const { count } = await prisma.t_session_pool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_session_poolDeleteManyArgs>(
      args?: SelectSubset<T, T_session_poolDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_session_pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_session_poolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_session_pools
     * const t_session_pool = await prisma.t_session_pool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_session_poolUpdateManyArgs>(
      args: SelectSubset<T, T_session_poolUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_session_pool.
     * @param {T_session_poolUpsertArgs} args - Arguments to update or create a T_session_pool.
     * @example
     * // Update or create a T_session_pool
     * const t_session_pool = await prisma.t_session_pool.upsert({
     *   create: {
     *     // ... data to create a T_session_pool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_session_pool we want to update
     *   }
     * })
    **/
    upsert<T extends T_session_poolUpsertArgs>(
      args: SelectSubset<T, T_session_poolUpsertArgs>
    ): Prisma__T_session_poolClient<T_session_poolGetPayload<T>>

    /**
     * Count the number of T_session_pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_session_poolCountArgs} args - Arguments to filter T_session_pools to count.
     * @example
     * // Count the number of T_session_pools
     * const count = await prisma.t_session_pool.count({
     *   where: {
     *     // ... the filter for the T_session_pools we want to count
     *   }
     * })
    **/
    count<T extends T_session_poolCountArgs>(
      args?: Subset<T, T_session_poolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_session_poolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_session_pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_session_poolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_session_poolAggregateArgs>(args: Subset<T, T_session_poolAggregateArgs>): Prisma.PrismaPromise<GetT_session_poolAggregateType<T>>

    /**
     * Group by T_session_pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_session_poolGroupByArgs} args - Group by arguments.
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
      T extends T_session_poolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_session_poolGroupByArgs['orderBy'] }
        : { orderBy?: T_session_poolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_session_poolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_session_poolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for T_session_pool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__T_session_poolClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * T_session_pool base type for findUnique actions
   */
  export type T_session_poolFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the T_session_pool
     */
    select?: T_session_poolSelect | null
    /**
     * Filter, which T_session_pool to fetch.
     */
    where: T_session_poolWhereUniqueInput
  }

  /**
   * T_session_pool findUnique
   */
  export interface T_session_poolFindUniqueArgs extends T_session_poolFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_session_pool findUniqueOrThrow
   */
  export type T_session_poolFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_session_pool
     */
    select?: T_session_poolSelect | null
    /**
     * Filter, which T_session_pool to fetch.
     */
    where: T_session_poolWhereUniqueInput
  }


  /**
   * T_session_pool base type for findFirst actions
   */
  export type T_session_poolFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the T_session_pool
     */
    select?: T_session_poolSelect | null
    /**
     * Filter, which T_session_pool to fetch.
     */
    where?: T_session_poolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_session_pools to fetch.
     */
    orderBy?: Enumerable<T_session_poolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_session_pools.
     */
    cursor?: T_session_poolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_session_pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_session_pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_session_pools.
     */
    distinct?: Enumerable<T_session_poolScalarFieldEnum>
  }

  /**
   * T_session_pool findFirst
   */
  export interface T_session_poolFindFirstArgs extends T_session_poolFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_session_pool findFirstOrThrow
   */
  export type T_session_poolFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_session_pool
     */
    select?: T_session_poolSelect | null
    /**
     * Filter, which T_session_pool to fetch.
     */
    where?: T_session_poolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_session_pools to fetch.
     */
    orderBy?: Enumerable<T_session_poolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_session_pools.
     */
    cursor?: T_session_poolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_session_pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_session_pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_session_pools.
     */
    distinct?: Enumerable<T_session_poolScalarFieldEnum>
  }


  /**
   * T_session_pool findMany
   */
  export type T_session_poolFindManyArgs = {
    /**
     * Select specific fields to fetch from the T_session_pool
     */
    select?: T_session_poolSelect | null
    /**
     * Filter, which T_session_pools to fetch.
     */
    where?: T_session_poolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_session_pools to fetch.
     */
    orderBy?: Enumerable<T_session_poolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_session_pools.
     */
    cursor?: T_session_poolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_session_pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_session_pools.
     */
    skip?: number
    distinct?: Enumerable<T_session_poolScalarFieldEnum>
  }


  /**
   * T_session_pool create
   */
  export type T_session_poolCreateArgs = {
    /**
     * Select specific fields to fetch from the T_session_pool
     */
    select?: T_session_poolSelect | null
    /**
     * The data needed to create a T_session_pool.
     */
    data: XOR<T_session_poolCreateInput, T_session_poolUncheckedCreateInput>
  }


  /**
   * T_session_pool createMany
   */
  export type T_session_poolCreateManyArgs = {
    /**
     * The data used to create many T_session_pools.
     */
    data: Enumerable<T_session_poolCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * T_session_pool update
   */
  export type T_session_poolUpdateArgs = {
    /**
     * Select specific fields to fetch from the T_session_pool
     */
    select?: T_session_poolSelect | null
    /**
     * The data needed to update a T_session_pool.
     */
    data: XOR<T_session_poolUpdateInput, T_session_poolUncheckedUpdateInput>
    /**
     * Choose, which T_session_pool to update.
     */
    where: T_session_poolWhereUniqueInput
  }


  /**
   * T_session_pool updateMany
   */
  export type T_session_poolUpdateManyArgs = {
    /**
     * The data used to update T_session_pools.
     */
    data: XOR<T_session_poolUpdateManyMutationInput, T_session_poolUncheckedUpdateManyInput>
    /**
     * Filter which T_session_pools to update
     */
    where?: T_session_poolWhereInput
  }


  /**
   * T_session_pool upsert
   */
  export type T_session_poolUpsertArgs = {
    /**
     * Select specific fields to fetch from the T_session_pool
     */
    select?: T_session_poolSelect | null
    /**
     * The filter to search for the T_session_pool to update in case it exists.
     */
    where: T_session_poolWhereUniqueInput
    /**
     * In case the T_session_pool found by the `where` argument doesn't exist, create a new T_session_pool with this data.
     */
    create: XOR<T_session_poolCreateInput, T_session_poolUncheckedCreateInput>
    /**
     * In case the T_session_pool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_session_poolUpdateInput, T_session_poolUncheckedUpdateInput>
  }


  /**
   * T_session_pool delete
   */
  export type T_session_poolDeleteArgs = {
    /**
     * Select specific fields to fetch from the T_session_pool
     */
    select?: T_session_poolSelect | null
    /**
     * Filter which T_session_pool to delete.
     */
    where: T_session_poolWhereUniqueInput
  }


  /**
   * T_session_pool deleteMany
   */
  export type T_session_poolDeleteManyArgs = {
    /**
     * Filter which T_session_pools to delete
     */
    where?: T_session_poolWhereInput
  }


  /**
   * T_session_pool without action
   */
  export type T_session_poolArgs = {
    /**
     * Select specific fields to fetch from the T_session_pool
     */
    select?: T_session_poolSelect | null
  }



  /**
   * Model t_use_money_logs
   */


  export type AggregateT_use_money_logs = {
    _count: T_use_money_logsCountAggregateOutputType | null
    _avg: T_use_money_logsAvgAggregateOutputType | null
    _sum: T_use_money_logsSumAggregateOutputType | null
    _min: T_use_money_logsMinAggregateOutputType | null
    _max: T_use_money_logsMaxAggregateOutputType | null
  }

  export type T_use_money_logsAvgAggregateOutputType = {
    id: number | null
    money: number | null
    create_time: number | null
  }

  export type T_use_money_logsSumAggregateOutputType = {
    id: number | null
    money: number | null
    create_time: number | null
  }

  export type T_use_money_logsMinAggregateOutputType = {
    id: number | null
    userid: string | null
    money: number | null
    type: string | null
    create_time: number | null
    op: string | null
  }

  export type T_use_money_logsMaxAggregateOutputType = {
    id: number | null
    userid: string | null
    money: number | null
    type: string | null
    create_time: number | null
    op: string | null
  }

  export type T_use_money_logsCountAggregateOutputType = {
    id: number
    userid: number
    money: number
    type: number
    create_time: number
    op: number
    _all: number
  }


  export type T_use_money_logsAvgAggregateInputType = {
    id?: true
    money?: true
    create_time?: true
  }

  export type T_use_money_logsSumAggregateInputType = {
    id?: true
    money?: true
    create_time?: true
  }

  export type T_use_money_logsMinAggregateInputType = {
    id?: true
    userid?: true
    money?: true
    type?: true
    create_time?: true
    op?: true
  }

  export type T_use_money_logsMaxAggregateInputType = {
    id?: true
    userid?: true
    money?: true
    type?: true
    create_time?: true
    op?: true
  }

  export type T_use_money_logsCountAggregateInputType = {
    id?: true
    userid?: true
    money?: true
    type?: true
    create_time?: true
    op?: true
    _all?: true
  }

  export type T_use_money_logsAggregateArgs = {
    /**
     * Filter which t_use_money_logs to aggregate.
     */
    where?: t_use_money_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_use_money_logs to fetch.
     */
    orderBy?: Enumerable<t_use_money_logsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_use_money_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_use_money_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_use_money_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_use_money_logs
    **/
    _count?: true | T_use_money_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_use_money_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_use_money_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_use_money_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_use_money_logsMaxAggregateInputType
  }

  export type GetT_use_money_logsAggregateType<T extends T_use_money_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateT_use_money_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_use_money_logs[P]>
      : GetScalarType<T[P], AggregateT_use_money_logs[P]>
  }




  export type T_use_money_logsGroupByArgs = {
    where?: t_use_money_logsWhereInput
    orderBy?: Enumerable<t_use_money_logsOrderByWithAggregationInput>
    by: T_use_money_logsScalarFieldEnum[]
    having?: t_use_money_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_use_money_logsCountAggregateInputType | true
    _avg?: T_use_money_logsAvgAggregateInputType
    _sum?: T_use_money_logsSumAggregateInputType
    _min?: T_use_money_logsMinAggregateInputType
    _max?: T_use_money_logsMaxAggregateInputType
  }


  export type T_use_money_logsGroupByOutputType = {
    id: number
    userid: string
    money: number
    type: string
    create_time: number
    op: string
    _count: T_use_money_logsCountAggregateOutputType | null
    _avg: T_use_money_logsAvgAggregateOutputType | null
    _sum: T_use_money_logsSumAggregateOutputType | null
    _min: T_use_money_logsMinAggregateOutputType | null
    _max: T_use_money_logsMaxAggregateOutputType | null
  }

  type GetT_use_money_logsGroupByPayload<T extends T_use_money_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<T_use_money_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_use_money_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_use_money_logsGroupByOutputType[P]>
            : GetScalarType<T[P], T_use_money_logsGroupByOutputType[P]>
        }
      >
    >


  export type t_use_money_logsSelect = {
    id?: boolean
    userid?: boolean
    money?: boolean
    type?: boolean
    create_time?: boolean
    op?: boolean
  }


  export type t_use_money_logsGetPayload<S extends boolean | null | undefined | t_use_money_logsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? t_use_money_logs :
    S extends undefined ? never :
    S extends { include: any } & (t_use_money_logsArgs | t_use_money_logsFindManyArgs)
    ? t_use_money_logs 
    : S extends { select: any } & (t_use_money_logsArgs | t_use_money_logsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof t_use_money_logs ? t_use_money_logs[P] : never
  } 
      : t_use_money_logs


  type t_use_money_logsCountArgs = 
    Omit<t_use_money_logsFindManyArgs, 'select' | 'include'> & {
      select?: T_use_money_logsCountAggregateInputType | true
    }

  export interface t_use_money_logsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one T_use_money_logs that matches the filter.
     * @param {t_use_money_logsFindUniqueArgs} args - Arguments to find a T_use_money_logs
     * @example
     * // Get one T_use_money_logs
     * const t_use_money_logs = await prisma.t_use_money_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_use_money_logsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, t_use_money_logsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 't_use_money_logs'> extends True ? Prisma__t_use_money_logsClient<t_use_money_logsGetPayload<T>> : Prisma__t_use_money_logsClient<t_use_money_logsGetPayload<T> | null, null>

    /**
     * Find one T_use_money_logs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_use_money_logsFindUniqueOrThrowArgs} args - Arguments to find a T_use_money_logs
     * @example
     * // Get one T_use_money_logs
     * const t_use_money_logs = await prisma.t_use_money_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_use_money_logsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, t_use_money_logsFindUniqueOrThrowArgs>
    ): Prisma__t_use_money_logsClient<t_use_money_logsGetPayload<T>>

    /**
     * Find the first T_use_money_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_use_money_logsFindFirstArgs} args - Arguments to find a T_use_money_logs
     * @example
     * // Get one T_use_money_logs
     * const t_use_money_logs = await prisma.t_use_money_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_use_money_logsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, t_use_money_logsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 't_use_money_logs'> extends True ? Prisma__t_use_money_logsClient<t_use_money_logsGetPayload<T>> : Prisma__t_use_money_logsClient<t_use_money_logsGetPayload<T> | null, null>

    /**
     * Find the first T_use_money_logs that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_use_money_logsFindFirstOrThrowArgs} args - Arguments to find a T_use_money_logs
     * @example
     * // Get one T_use_money_logs
     * const t_use_money_logs = await prisma.t_use_money_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_use_money_logsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, t_use_money_logsFindFirstOrThrowArgs>
    ): Prisma__t_use_money_logsClient<t_use_money_logsGetPayload<T>>

    /**
     * Find zero or more T_use_money_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_use_money_logsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_use_money_logs
     * const t_use_money_logs = await prisma.t_use_money_logs.findMany()
     * 
     * // Get first 10 T_use_money_logs
     * const t_use_money_logs = await prisma.t_use_money_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_use_money_logsWithIdOnly = await prisma.t_use_money_logs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_use_money_logsFindManyArgs>(
      args?: SelectSubset<T, t_use_money_logsFindManyArgs>
    ): Prisma.PrismaPromise<Array<t_use_money_logsGetPayload<T>>>

    /**
     * Create a T_use_money_logs.
     * @param {t_use_money_logsCreateArgs} args - Arguments to create a T_use_money_logs.
     * @example
     * // Create one T_use_money_logs
     * const T_use_money_logs = await prisma.t_use_money_logs.create({
     *   data: {
     *     // ... data to create a T_use_money_logs
     *   }
     * })
     * 
    **/
    create<T extends t_use_money_logsCreateArgs>(
      args: SelectSubset<T, t_use_money_logsCreateArgs>
    ): Prisma__t_use_money_logsClient<t_use_money_logsGetPayload<T>>

    /**
     * Create many T_use_money_logs.
     *     @param {t_use_money_logsCreateManyArgs} args - Arguments to create many T_use_money_logs.
     *     @example
     *     // Create many T_use_money_logs
     *     const t_use_money_logs = await prisma.t_use_money_logs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_use_money_logsCreateManyArgs>(
      args?: SelectSubset<T, t_use_money_logsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_use_money_logs.
     * @param {t_use_money_logsDeleteArgs} args - Arguments to delete one T_use_money_logs.
     * @example
     * // Delete one T_use_money_logs
     * const T_use_money_logs = await prisma.t_use_money_logs.delete({
     *   where: {
     *     // ... filter to delete one T_use_money_logs
     *   }
     * })
     * 
    **/
    delete<T extends t_use_money_logsDeleteArgs>(
      args: SelectSubset<T, t_use_money_logsDeleteArgs>
    ): Prisma__t_use_money_logsClient<t_use_money_logsGetPayload<T>>

    /**
     * Update one T_use_money_logs.
     * @param {t_use_money_logsUpdateArgs} args - Arguments to update one T_use_money_logs.
     * @example
     * // Update one T_use_money_logs
     * const t_use_money_logs = await prisma.t_use_money_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_use_money_logsUpdateArgs>(
      args: SelectSubset<T, t_use_money_logsUpdateArgs>
    ): Prisma__t_use_money_logsClient<t_use_money_logsGetPayload<T>>

    /**
     * Delete zero or more T_use_money_logs.
     * @param {t_use_money_logsDeleteManyArgs} args - Arguments to filter T_use_money_logs to delete.
     * @example
     * // Delete a few T_use_money_logs
     * const { count } = await prisma.t_use_money_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_use_money_logsDeleteManyArgs>(
      args?: SelectSubset<T, t_use_money_logsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_use_money_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_use_money_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_use_money_logs
     * const t_use_money_logs = await prisma.t_use_money_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_use_money_logsUpdateManyArgs>(
      args: SelectSubset<T, t_use_money_logsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_use_money_logs.
     * @param {t_use_money_logsUpsertArgs} args - Arguments to update or create a T_use_money_logs.
     * @example
     * // Update or create a T_use_money_logs
     * const t_use_money_logs = await prisma.t_use_money_logs.upsert({
     *   create: {
     *     // ... data to create a T_use_money_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_use_money_logs we want to update
     *   }
     * })
    **/
    upsert<T extends t_use_money_logsUpsertArgs>(
      args: SelectSubset<T, t_use_money_logsUpsertArgs>
    ): Prisma__t_use_money_logsClient<t_use_money_logsGetPayload<T>>

    /**
     * Count the number of T_use_money_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_use_money_logsCountArgs} args - Arguments to filter T_use_money_logs to count.
     * @example
     * // Count the number of T_use_money_logs
     * const count = await prisma.t_use_money_logs.count({
     *   where: {
     *     // ... the filter for the T_use_money_logs we want to count
     *   }
     * })
    **/
    count<T extends t_use_money_logsCountArgs>(
      args?: Subset<T, t_use_money_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_use_money_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_use_money_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_use_money_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_use_money_logsAggregateArgs>(args: Subset<T, T_use_money_logsAggregateArgs>): Prisma.PrismaPromise<GetT_use_money_logsAggregateType<T>>

    /**
     * Group by T_use_money_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_use_money_logsGroupByArgs} args - Group by arguments.
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
      T extends T_use_money_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_use_money_logsGroupByArgs['orderBy'] }
        : { orderBy?: T_use_money_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_use_money_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_use_money_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for t_use_money_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__t_use_money_logsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * t_use_money_logs base type for findUnique actions
   */
  export type t_use_money_logsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the t_use_money_logs
     */
    select?: t_use_money_logsSelect | null
    /**
     * Filter, which t_use_money_logs to fetch.
     */
    where: t_use_money_logsWhereUniqueInput
  }

  /**
   * t_use_money_logs findUnique
   */
  export interface t_use_money_logsFindUniqueArgs extends t_use_money_logsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * t_use_money_logs findUniqueOrThrow
   */
  export type t_use_money_logsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the t_use_money_logs
     */
    select?: t_use_money_logsSelect | null
    /**
     * Filter, which t_use_money_logs to fetch.
     */
    where: t_use_money_logsWhereUniqueInput
  }


  /**
   * t_use_money_logs base type for findFirst actions
   */
  export type t_use_money_logsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the t_use_money_logs
     */
    select?: t_use_money_logsSelect | null
    /**
     * Filter, which t_use_money_logs to fetch.
     */
    where?: t_use_money_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_use_money_logs to fetch.
     */
    orderBy?: Enumerable<t_use_money_logsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_use_money_logs.
     */
    cursor?: t_use_money_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_use_money_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_use_money_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_use_money_logs.
     */
    distinct?: Enumerable<T_use_money_logsScalarFieldEnum>
  }

  /**
   * t_use_money_logs findFirst
   */
  export interface t_use_money_logsFindFirstArgs extends t_use_money_logsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * t_use_money_logs findFirstOrThrow
   */
  export type t_use_money_logsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the t_use_money_logs
     */
    select?: t_use_money_logsSelect | null
    /**
     * Filter, which t_use_money_logs to fetch.
     */
    where?: t_use_money_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_use_money_logs to fetch.
     */
    orderBy?: Enumerable<t_use_money_logsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_use_money_logs.
     */
    cursor?: t_use_money_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_use_money_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_use_money_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_use_money_logs.
     */
    distinct?: Enumerable<T_use_money_logsScalarFieldEnum>
  }


  /**
   * t_use_money_logs findMany
   */
  export type t_use_money_logsFindManyArgs = {
    /**
     * Select specific fields to fetch from the t_use_money_logs
     */
    select?: t_use_money_logsSelect | null
    /**
     * Filter, which t_use_money_logs to fetch.
     */
    where?: t_use_money_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_use_money_logs to fetch.
     */
    orderBy?: Enumerable<t_use_money_logsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_use_money_logs.
     */
    cursor?: t_use_money_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_use_money_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_use_money_logs.
     */
    skip?: number
    distinct?: Enumerable<T_use_money_logsScalarFieldEnum>
  }


  /**
   * t_use_money_logs create
   */
  export type t_use_money_logsCreateArgs = {
    /**
     * Select specific fields to fetch from the t_use_money_logs
     */
    select?: t_use_money_logsSelect | null
    /**
     * The data needed to create a t_use_money_logs.
     */
    data: XOR<t_use_money_logsCreateInput, t_use_money_logsUncheckedCreateInput>
  }


  /**
   * t_use_money_logs createMany
   */
  export type t_use_money_logsCreateManyArgs = {
    /**
     * The data used to create many t_use_money_logs.
     */
    data: Enumerable<t_use_money_logsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * t_use_money_logs update
   */
  export type t_use_money_logsUpdateArgs = {
    /**
     * Select specific fields to fetch from the t_use_money_logs
     */
    select?: t_use_money_logsSelect | null
    /**
     * The data needed to update a t_use_money_logs.
     */
    data: XOR<t_use_money_logsUpdateInput, t_use_money_logsUncheckedUpdateInput>
    /**
     * Choose, which t_use_money_logs to update.
     */
    where: t_use_money_logsWhereUniqueInput
  }


  /**
   * t_use_money_logs updateMany
   */
  export type t_use_money_logsUpdateManyArgs = {
    /**
     * The data used to update t_use_money_logs.
     */
    data: XOR<t_use_money_logsUpdateManyMutationInput, t_use_money_logsUncheckedUpdateManyInput>
    /**
     * Filter which t_use_money_logs to update
     */
    where?: t_use_money_logsWhereInput
  }


  /**
   * t_use_money_logs upsert
   */
  export type t_use_money_logsUpsertArgs = {
    /**
     * Select specific fields to fetch from the t_use_money_logs
     */
    select?: t_use_money_logsSelect | null
    /**
     * The filter to search for the t_use_money_logs to update in case it exists.
     */
    where: t_use_money_logsWhereUniqueInput
    /**
     * In case the t_use_money_logs found by the `where` argument doesn't exist, create a new t_use_money_logs with this data.
     */
    create: XOR<t_use_money_logsCreateInput, t_use_money_logsUncheckedCreateInput>
    /**
     * In case the t_use_money_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_use_money_logsUpdateInput, t_use_money_logsUncheckedUpdateInput>
  }


  /**
   * t_use_money_logs delete
   */
  export type t_use_money_logsDeleteArgs = {
    /**
     * Select specific fields to fetch from the t_use_money_logs
     */
    select?: t_use_money_logsSelect | null
    /**
     * Filter which t_use_money_logs to delete.
     */
    where: t_use_money_logsWhereUniqueInput
  }


  /**
   * t_use_money_logs deleteMany
   */
  export type t_use_money_logsDeleteManyArgs = {
    /**
     * Filter which t_use_money_logs to delete
     */
    where?: t_use_money_logsWhereInput
  }


  /**
   * t_use_money_logs without action
   */
  export type t_use_money_logsArgs = {
    /**
     * Select specific fields to fetch from the t_use_money_logs
     */
    select?: t_use_money_logsSelect | null
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
    coins: Decimal | null
    gems: Decimal | null
    yaoqing: number | null
    time: number | null
    robot: number | null
  }

  export type T_usersSumAggregateOutputType = {
    userid: number | null
    sex: number | null
    lv: number | null
    exp: number | null
    coins: Decimal | null
    gems: Decimal | null
    yaoqing: number | null
    time: number | null
    robot: number | null
  }

  export type T_usersMinAggregateOutputType = {
    userid: number | null
    account: string | null
    name: string | null
    sex: number | null
    headimg: string | null
    lv: number | null
    exp: number | null
    coins: Decimal | null
    gems: Decimal | null
    roomid: string | null
    history: string | null
    yaoqing: number | null
    time: number | null
    shareroomid: string | null
    robot: number | null
  }

  export type T_usersMaxAggregateOutputType = {
    userid: number | null
    account: string | null
    name: string | null
    sex: number | null
    headimg: string | null
    lv: number | null
    exp: number | null
    coins: Decimal | null
    gems: Decimal | null
    roomid: string | null
    history: string | null
    yaoqing: number | null
    time: number | null
    shareroomid: string | null
    robot: number | null
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
    gems: number
    roomid: number
    history: number
    yaoqing: number
    time: number
    shareroomid: number
    robot: number
    _all: number
  }


  export type T_usersAvgAggregateInputType = {
    userid?: true
    sex?: true
    lv?: true
    exp?: true
    coins?: true
    gems?: true
    yaoqing?: true
    time?: true
    robot?: true
  }

  export type T_usersSumAggregateInputType = {
    userid?: true
    sex?: true
    lv?: true
    exp?: true
    coins?: true
    gems?: true
    yaoqing?: true
    time?: true
    robot?: true
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
    gems?: true
    roomid?: true
    history?: true
    yaoqing?: true
    time?: true
    shareroomid?: true
    robot?: true
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
    gems?: true
    roomid?: true
    history?: true
    yaoqing?: true
    time?: true
    shareroomid?: true
    robot?: true
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
    gems?: true
    roomid?: true
    history?: true
    yaoqing?: true
    time?: true
    shareroomid?: true
    robot?: true
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
    coins: Decimal
    gems: Decimal
    roomid: string
    history: string
    yaoqing: number
    time: number
    shareroomid: string
    robot: number
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
    gems?: boolean
    roomid?: boolean
    history?: boolean
    yaoqing?: boolean
    time?: boolean
    shareroomid?: boolean
    robot?: boolean
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
   * Model T_users_rechange_record
   */


  export type AggregateT_users_rechange_record = {
    _count: T_users_rechange_recordCountAggregateOutputType | null
    _avg: T_users_rechange_recordAvgAggregateOutputType | null
    _sum: T_users_rechange_recordSumAggregateOutputType | null
    _min: T_users_rechange_recordMinAggregateOutputType | null
    _max: T_users_rechange_recordMaxAggregateOutputType | null
  }

  export type T_users_rechange_recordAvgAggregateOutputType = {
    id: number | null
    userid: number | null
    money: Decimal | null
    status: number | null
    time: number | null
    is_account: number | null
    account_userid: number | null
  }

  export type T_users_rechange_recordSumAggregateOutputType = {
    id: number | null
    userid: number | null
    money: Decimal | null
    status: number | null
    time: number | null
    is_account: number | null
    account_userid: number | null
  }

  export type T_users_rechange_recordMinAggregateOutputType = {
    id: number | null
    userid: number | null
    orderno: string | null
    money: Decimal | null
    pay_type: string | null
    status: number | null
    time: number | null
    result: string | null
    notify_result: string | null
    is_account: number | null
    account_userid: number | null
    account_result: string | null
  }

  export type T_users_rechange_recordMaxAggregateOutputType = {
    id: number | null
    userid: number | null
    orderno: string | null
    money: Decimal | null
    pay_type: string | null
    status: number | null
    time: number | null
    result: string | null
    notify_result: string | null
    is_account: number | null
    account_userid: number | null
    account_result: string | null
  }

  export type T_users_rechange_recordCountAggregateOutputType = {
    id: number
    userid: number
    orderno: number
    money: number
    pay_type: number
    status: number
    time: number
    result: number
    notify_result: number
    is_account: number
    account_userid: number
    account_result: number
    _all: number
  }


  export type T_users_rechange_recordAvgAggregateInputType = {
    id?: true
    userid?: true
    money?: true
    status?: true
    time?: true
    is_account?: true
    account_userid?: true
  }

  export type T_users_rechange_recordSumAggregateInputType = {
    id?: true
    userid?: true
    money?: true
    status?: true
    time?: true
    is_account?: true
    account_userid?: true
  }

  export type T_users_rechange_recordMinAggregateInputType = {
    id?: true
    userid?: true
    orderno?: true
    money?: true
    pay_type?: true
    status?: true
    time?: true
    result?: true
    notify_result?: true
    is_account?: true
    account_userid?: true
    account_result?: true
  }

  export type T_users_rechange_recordMaxAggregateInputType = {
    id?: true
    userid?: true
    orderno?: true
    money?: true
    pay_type?: true
    status?: true
    time?: true
    result?: true
    notify_result?: true
    is_account?: true
    account_userid?: true
    account_result?: true
  }

  export type T_users_rechange_recordCountAggregateInputType = {
    id?: true
    userid?: true
    orderno?: true
    money?: true
    pay_type?: true
    status?: true
    time?: true
    result?: true
    notify_result?: true
    is_account?: true
    account_userid?: true
    account_result?: true
    _all?: true
  }

  export type T_users_rechange_recordAggregateArgs = {
    /**
     * Filter which T_users_rechange_record to aggregate.
     */
    where?: T_users_rechange_recordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_users_rechange_records to fetch.
     */
    orderBy?: Enumerable<T_users_rechange_recordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_users_rechange_recordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_users_rechange_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_users_rechange_records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_users_rechange_records
    **/
    _count?: true | T_users_rechange_recordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_users_rechange_recordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_users_rechange_recordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_users_rechange_recordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_users_rechange_recordMaxAggregateInputType
  }

  export type GetT_users_rechange_recordAggregateType<T extends T_users_rechange_recordAggregateArgs> = {
        [P in keyof T & keyof AggregateT_users_rechange_record]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_users_rechange_record[P]>
      : GetScalarType<T[P], AggregateT_users_rechange_record[P]>
  }




  export type T_users_rechange_recordGroupByArgs = {
    where?: T_users_rechange_recordWhereInput
    orderBy?: Enumerable<T_users_rechange_recordOrderByWithAggregationInput>
    by: T_users_rechange_recordScalarFieldEnum[]
    having?: T_users_rechange_recordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_users_rechange_recordCountAggregateInputType | true
    _avg?: T_users_rechange_recordAvgAggregateInputType
    _sum?: T_users_rechange_recordSumAggregateInputType
    _min?: T_users_rechange_recordMinAggregateInputType
    _max?: T_users_rechange_recordMaxAggregateInputType
  }


  export type T_users_rechange_recordGroupByOutputType = {
    id: number
    userid: number
    orderno: string
    money: Decimal
    pay_type: string
    status: number
    time: number
    result: string
    notify_result: string
    is_account: number
    account_userid: number
    account_result: string
    _count: T_users_rechange_recordCountAggregateOutputType | null
    _avg: T_users_rechange_recordAvgAggregateOutputType | null
    _sum: T_users_rechange_recordSumAggregateOutputType | null
    _min: T_users_rechange_recordMinAggregateOutputType | null
    _max: T_users_rechange_recordMaxAggregateOutputType | null
  }

  type GetT_users_rechange_recordGroupByPayload<T extends T_users_rechange_recordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<T_users_rechange_recordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_users_rechange_recordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_users_rechange_recordGroupByOutputType[P]>
            : GetScalarType<T[P], T_users_rechange_recordGroupByOutputType[P]>
        }
      >
    >


  export type T_users_rechange_recordSelect = {
    id?: boolean
    userid?: boolean
    orderno?: boolean
    money?: boolean
    pay_type?: boolean
    status?: boolean
    time?: boolean
    result?: boolean
    notify_result?: boolean
    is_account?: boolean
    account_userid?: boolean
    account_result?: boolean
  }


  export type T_users_rechange_recordGetPayload<S extends boolean | null | undefined | T_users_rechange_recordArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? T_users_rechange_record :
    S extends undefined ? never :
    S extends { include: any } & (T_users_rechange_recordArgs | T_users_rechange_recordFindManyArgs)
    ? T_users_rechange_record 
    : S extends { select: any } & (T_users_rechange_recordArgs | T_users_rechange_recordFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof T_users_rechange_record ? T_users_rechange_record[P] : never
  } 
      : T_users_rechange_record


  type T_users_rechange_recordCountArgs = 
    Omit<T_users_rechange_recordFindManyArgs, 'select' | 'include'> & {
      select?: T_users_rechange_recordCountAggregateInputType | true
    }

  export interface T_users_rechange_recordDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one T_users_rechange_record that matches the filter.
     * @param {T_users_rechange_recordFindUniqueArgs} args - Arguments to find a T_users_rechange_record
     * @example
     * // Get one T_users_rechange_record
     * const t_users_rechange_record = await prisma.t_users_rechange_record.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_users_rechange_recordFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, T_users_rechange_recordFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'T_users_rechange_record'> extends True ? Prisma__T_users_rechange_recordClient<T_users_rechange_recordGetPayload<T>> : Prisma__T_users_rechange_recordClient<T_users_rechange_recordGetPayload<T> | null, null>

    /**
     * Find one T_users_rechange_record that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {T_users_rechange_recordFindUniqueOrThrowArgs} args - Arguments to find a T_users_rechange_record
     * @example
     * // Get one T_users_rechange_record
     * const t_users_rechange_record = await prisma.t_users_rechange_record.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_users_rechange_recordFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, T_users_rechange_recordFindUniqueOrThrowArgs>
    ): Prisma__T_users_rechange_recordClient<T_users_rechange_recordGetPayload<T>>

    /**
     * Find the first T_users_rechange_record that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_users_rechange_recordFindFirstArgs} args - Arguments to find a T_users_rechange_record
     * @example
     * // Get one T_users_rechange_record
     * const t_users_rechange_record = await prisma.t_users_rechange_record.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_users_rechange_recordFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, T_users_rechange_recordFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'T_users_rechange_record'> extends True ? Prisma__T_users_rechange_recordClient<T_users_rechange_recordGetPayload<T>> : Prisma__T_users_rechange_recordClient<T_users_rechange_recordGetPayload<T> | null, null>

    /**
     * Find the first T_users_rechange_record that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_users_rechange_recordFindFirstOrThrowArgs} args - Arguments to find a T_users_rechange_record
     * @example
     * // Get one T_users_rechange_record
     * const t_users_rechange_record = await prisma.t_users_rechange_record.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_users_rechange_recordFindFirstOrThrowArgs>(
      args?: SelectSubset<T, T_users_rechange_recordFindFirstOrThrowArgs>
    ): Prisma__T_users_rechange_recordClient<T_users_rechange_recordGetPayload<T>>

    /**
     * Find zero or more T_users_rechange_records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_users_rechange_recordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_users_rechange_records
     * const t_users_rechange_records = await prisma.t_users_rechange_record.findMany()
     * 
     * // Get first 10 T_users_rechange_records
     * const t_users_rechange_records = await prisma.t_users_rechange_record.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_users_rechange_recordWithIdOnly = await prisma.t_users_rechange_record.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends T_users_rechange_recordFindManyArgs>(
      args?: SelectSubset<T, T_users_rechange_recordFindManyArgs>
    ): Prisma.PrismaPromise<Array<T_users_rechange_recordGetPayload<T>>>

    /**
     * Create a T_users_rechange_record.
     * @param {T_users_rechange_recordCreateArgs} args - Arguments to create a T_users_rechange_record.
     * @example
     * // Create one T_users_rechange_record
     * const T_users_rechange_record = await prisma.t_users_rechange_record.create({
     *   data: {
     *     // ... data to create a T_users_rechange_record
     *   }
     * })
     * 
    **/
    create<T extends T_users_rechange_recordCreateArgs>(
      args: SelectSubset<T, T_users_rechange_recordCreateArgs>
    ): Prisma__T_users_rechange_recordClient<T_users_rechange_recordGetPayload<T>>

    /**
     * Create many T_users_rechange_records.
     *     @param {T_users_rechange_recordCreateManyArgs} args - Arguments to create many T_users_rechange_records.
     *     @example
     *     // Create many T_users_rechange_records
     *     const t_users_rechange_record = await prisma.t_users_rechange_record.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends T_users_rechange_recordCreateManyArgs>(
      args?: SelectSubset<T, T_users_rechange_recordCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_users_rechange_record.
     * @param {T_users_rechange_recordDeleteArgs} args - Arguments to delete one T_users_rechange_record.
     * @example
     * // Delete one T_users_rechange_record
     * const T_users_rechange_record = await prisma.t_users_rechange_record.delete({
     *   where: {
     *     // ... filter to delete one T_users_rechange_record
     *   }
     * })
     * 
    **/
    delete<T extends T_users_rechange_recordDeleteArgs>(
      args: SelectSubset<T, T_users_rechange_recordDeleteArgs>
    ): Prisma__T_users_rechange_recordClient<T_users_rechange_recordGetPayload<T>>

    /**
     * Update one T_users_rechange_record.
     * @param {T_users_rechange_recordUpdateArgs} args - Arguments to update one T_users_rechange_record.
     * @example
     * // Update one T_users_rechange_record
     * const t_users_rechange_record = await prisma.t_users_rechange_record.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_users_rechange_recordUpdateArgs>(
      args: SelectSubset<T, T_users_rechange_recordUpdateArgs>
    ): Prisma__T_users_rechange_recordClient<T_users_rechange_recordGetPayload<T>>

    /**
     * Delete zero or more T_users_rechange_records.
     * @param {T_users_rechange_recordDeleteManyArgs} args - Arguments to filter T_users_rechange_records to delete.
     * @example
     * // Delete a few T_users_rechange_records
     * const { count } = await prisma.t_users_rechange_record.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_users_rechange_recordDeleteManyArgs>(
      args?: SelectSubset<T, T_users_rechange_recordDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_users_rechange_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_users_rechange_recordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_users_rechange_records
     * const t_users_rechange_record = await prisma.t_users_rechange_record.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_users_rechange_recordUpdateManyArgs>(
      args: SelectSubset<T, T_users_rechange_recordUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_users_rechange_record.
     * @param {T_users_rechange_recordUpsertArgs} args - Arguments to update or create a T_users_rechange_record.
     * @example
     * // Update or create a T_users_rechange_record
     * const t_users_rechange_record = await prisma.t_users_rechange_record.upsert({
     *   create: {
     *     // ... data to create a T_users_rechange_record
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_users_rechange_record we want to update
     *   }
     * })
    **/
    upsert<T extends T_users_rechange_recordUpsertArgs>(
      args: SelectSubset<T, T_users_rechange_recordUpsertArgs>
    ): Prisma__T_users_rechange_recordClient<T_users_rechange_recordGetPayload<T>>

    /**
     * Count the number of T_users_rechange_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_users_rechange_recordCountArgs} args - Arguments to filter T_users_rechange_records to count.
     * @example
     * // Count the number of T_users_rechange_records
     * const count = await prisma.t_users_rechange_record.count({
     *   where: {
     *     // ... the filter for the T_users_rechange_records we want to count
     *   }
     * })
    **/
    count<T extends T_users_rechange_recordCountArgs>(
      args?: Subset<T, T_users_rechange_recordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_users_rechange_recordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_users_rechange_record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_users_rechange_recordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_users_rechange_recordAggregateArgs>(args: Subset<T, T_users_rechange_recordAggregateArgs>): Prisma.PrismaPromise<GetT_users_rechange_recordAggregateType<T>>

    /**
     * Group by T_users_rechange_record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_users_rechange_recordGroupByArgs} args - Group by arguments.
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
      T extends T_users_rechange_recordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_users_rechange_recordGroupByArgs['orderBy'] }
        : { orderBy?: T_users_rechange_recordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_users_rechange_recordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_users_rechange_recordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for T_users_rechange_record.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__T_users_rechange_recordClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * T_users_rechange_record base type for findUnique actions
   */
  export type T_users_rechange_recordFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the T_users_rechange_record
     */
    select?: T_users_rechange_recordSelect | null
    /**
     * Filter, which T_users_rechange_record to fetch.
     */
    where: T_users_rechange_recordWhereUniqueInput
  }

  /**
   * T_users_rechange_record findUnique
   */
  export interface T_users_rechange_recordFindUniqueArgs extends T_users_rechange_recordFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_users_rechange_record findUniqueOrThrow
   */
  export type T_users_rechange_recordFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_users_rechange_record
     */
    select?: T_users_rechange_recordSelect | null
    /**
     * Filter, which T_users_rechange_record to fetch.
     */
    where: T_users_rechange_recordWhereUniqueInput
  }


  /**
   * T_users_rechange_record base type for findFirst actions
   */
  export type T_users_rechange_recordFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the T_users_rechange_record
     */
    select?: T_users_rechange_recordSelect | null
    /**
     * Filter, which T_users_rechange_record to fetch.
     */
    where?: T_users_rechange_recordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_users_rechange_records to fetch.
     */
    orderBy?: Enumerable<T_users_rechange_recordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_users_rechange_records.
     */
    cursor?: T_users_rechange_recordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_users_rechange_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_users_rechange_records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_users_rechange_records.
     */
    distinct?: Enumerable<T_users_rechange_recordScalarFieldEnum>
  }

  /**
   * T_users_rechange_record findFirst
   */
  export interface T_users_rechange_recordFindFirstArgs extends T_users_rechange_recordFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * T_users_rechange_record findFirstOrThrow
   */
  export type T_users_rechange_recordFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the T_users_rechange_record
     */
    select?: T_users_rechange_recordSelect | null
    /**
     * Filter, which T_users_rechange_record to fetch.
     */
    where?: T_users_rechange_recordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_users_rechange_records to fetch.
     */
    orderBy?: Enumerable<T_users_rechange_recordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_users_rechange_records.
     */
    cursor?: T_users_rechange_recordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_users_rechange_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_users_rechange_records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_users_rechange_records.
     */
    distinct?: Enumerable<T_users_rechange_recordScalarFieldEnum>
  }


  /**
   * T_users_rechange_record findMany
   */
  export type T_users_rechange_recordFindManyArgs = {
    /**
     * Select specific fields to fetch from the T_users_rechange_record
     */
    select?: T_users_rechange_recordSelect | null
    /**
     * Filter, which T_users_rechange_records to fetch.
     */
    where?: T_users_rechange_recordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_users_rechange_records to fetch.
     */
    orderBy?: Enumerable<T_users_rechange_recordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_users_rechange_records.
     */
    cursor?: T_users_rechange_recordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_users_rechange_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_users_rechange_records.
     */
    skip?: number
    distinct?: Enumerable<T_users_rechange_recordScalarFieldEnum>
  }


  /**
   * T_users_rechange_record create
   */
  export type T_users_rechange_recordCreateArgs = {
    /**
     * Select specific fields to fetch from the T_users_rechange_record
     */
    select?: T_users_rechange_recordSelect | null
    /**
     * The data needed to create a T_users_rechange_record.
     */
    data: XOR<T_users_rechange_recordCreateInput, T_users_rechange_recordUncheckedCreateInput>
  }


  /**
   * T_users_rechange_record createMany
   */
  export type T_users_rechange_recordCreateManyArgs = {
    /**
     * The data used to create many T_users_rechange_records.
     */
    data: Enumerable<T_users_rechange_recordCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * T_users_rechange_record update
   */
  export type T_users_rechange_recordUpdateArgs = {
    /**
     * Select specific fields to fetch from the T_users_rechange_record
     */
    select?: T_users_rechange_recordSelect | null
    /**
     * The data needed to update a T_users_rechange_record.
     */
    data: XOR<T_users_rechange_recordUpdateInput, T_users_rechange_recordUncheckedUpdateInput>
    /**
     * Choose, which T_users_rechange_record to update.
     */
    where: T_users_rechange_recordWhereUniqueInput
  }


  /**
   * T_users_rechange_record updateMany
   */
  export type T_users_rechange_recordUpdateManyArgs = {
    /**
     * The data used to update T_users_rechange_records.
     */
    data: XOR<T_users_rechange_recordUpdateManyMutationInput, T_users_rechange_recordUncheckedUpdateManyInput>
    /**
     * Filter which T_users_rechange_records to update
     */
    where?: T_users_rechange_recordWhereInput
  }


  /**
   * T_users_rechange_record upsert
   */
  export type T_users_rechange_recordUpsertArgs = {
    /**
     * Select specific fields to fetch from the T_users_rechange_record
     */
    select?: T_users_rechange_recordSelect | null
    /**
     * The filter to search for the T_users_rechange_record to update in case it exists.
     */
    where: T_users_rechange_recordWhereUniqueInput
    /**
     * In case the T_users_rechange_record found by the `where` argument doesn't exist, create a new T_users_rechange_record with this data.
     */
    create: XOR<T_users_rechange_recordCreateInput, T_users_rechange_recordUncheckedCreateInput>
    /**
     * In case the T_users_rechange_record was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_users_rechange_recordUpdateInput, T_users_rechange_recordUncheckedUpdateInput>
  }


  /**
   * T_users_rechange_record delete
   */
  export type T_users_rechange_recordDeleteArgs = {
    /**
     * Select specific fields to fetch from the T_users_rechange_record
     */
    select?: T_users_rechange_recordSelect | null
    /**
     * Filter which T_users_rechange_record to delete.
     */
    where: T_users_rechange_recordWhereUniqueInput
  }


  /**
   * T_users_rechange_record deleteMany
   */
  export type T_users_rechange_recordDeleteManyArgs = {
    /**
     * Filter which T_users_rechange_records to delete
     */
    where?: T_users_rechange_recordWhereInput
  }


  /**
   * T_users_rechange_record without action
   */
  export type T_users_rechange_recordArgs = {
    /**
     * Select specific fields to fetch from the T_users_rechange_record
     */
    select?: T_users_rechange_recordSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const T_accountsScalarFieldEnum: {
    account: 'account',
    password: 'password',
    reg_time: 'reg_time'
  };

  export type T_accountsScalarFieldEnum = (typeof T_accountsScalarFieldEnum)[keyof typeof T_accountsScalarFieldEnum]


  export const T_charge_logScalarFieldEnum: {
    id: 'id',
    orderno: 'orderno',
    userid: 'userid',
    gems_num: 'gems_num',
    cost_money: 'cost_money',
    charge_type: 'charge_type',
    time: 'time',
    goldcoin_exchange_rate: 'goldcoin_exchange_rate'
  };

  export type T_charge_logScalarFieldEnum = (typeof T_charge_logScalarFieldEnum)[keyof typeof T_charge_logScalarFieldEnum]


  export const T_game_result_logScalarFieldEnum: {
    id: 'id',
    roomid: 'roomid',
    tax: 'tax',
    data: 'data',
    time: 'time'
  };

  export type T_game_result_logScalarFieldEnum = (typeof T_game_result_logScalarFieldEnum)[keyof typeof T_game_result_logScalarFieldEnum]


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
    genre: 'genre',
    room_type: 'room_type',
    scene: 'scene',
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
    user_id4: 'user_id4',
    user_icon4: 'user_icon4',
    user_name4: 'user_name4',
    user_score4: 'user_score4',
    user_id5: 'user_id5',
    user_icon5: 'user_icon5',
    user_name5: 'user_name5',
    user_score5: 'user_score5',
    user_id6: 'user_id6',
    user_icon6: 'user_icon6',
    user_name6: 'user_name6',
    user_score6: 'user_score6',
    user_id7: 'user_id7',
    user_icon7: 'user_icon7',
    user_name7: 'user_name7',
    user_score7: 'user_score7',
    user_id8: 'user_id8',
    user_icon8: 'user_icon8',
    user_name8: 'user_name8',
    user_score8: 'user_score8',
    ip: 'ip',
    port: 'port'
  };

  export type T_roomsScalarFieldEnum = (typeof T_roomsScalarFieldEnum)[keyof typeof T_roomsScalarFieldEnum]


  export const T_sceneScalarFieldEnum: {
    id: 'id',
    room_type: 'room_type',
    scene: 'scene',
    genre: 'genre',
    type: 'type',
    time: 'time',
    limit_type: 'limit_type',
    limit_num: 'limit_num',
    limit_danzhu: 'limit_danzhu',
    consume_type: 'consume_type',
    consume_num: 'consume_num',
    tax: 'tax',
    online: 'online'
  };

  export type T_sceneScalarFieldEnum = (typeof T_sceneScalarFieldEnum)[keyof typeof T_sceneScalarFieldEnum]


  export const T_sell_logScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    gems_num: 'gems_num',
    seller_id: 'seller_id',
    charge_type: 'charge_type',
    addtime: 'addtime',
    batchno: 'batchno'
  };

  export type T_sell_logScalarFieldEnum = (typeof T_sell_logScalarFieldEnum)[keyof typeof T_sell_logScalarFieldEnum]


  export const T_session_poolScalarFieldEnum: {
    session_id: 'session_id',
    content: 'content'
  };

  export type T_session_poolScalarFieldEnum = (typeof T_session_poolScalarFieldEnum)[keyof typeof T_session_poolScalarFieldEnum]


  export const T_use_money_logsScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    money: 'money',
    type: 'type',
    create_time: 'create_time',
    op: 'op'
  };

  export type T_use_money_logsScalarFieldEnum = (typeof T_use_money_logsScalarFieldEnum)[keyof typeof T_use_money_logsScalarFieldEnum]


  export const T_usersScalarFieldEnum: {
    userid: 'userid',
    account: 'account',
    name: 'name',
    sex: 'sex',
    headimg: 'headimg',
    lv: 'lv',
    exp: 'exp',
    coins: 'coins',
    gems: 'gems',
    roomid: 'roomid',
    history: 'history',
    yaoqing: 'yaoqing',
    time: 'time',
    shareroomid: 'shareroomid',
    robot: 'robot'
  };

  export type T_usersScalarFieldEnum = (typeof T_usersScalarFieldEnum)[keyof typeof T_usersScalarFieldEnum]


  export const T_users_rechange_recordScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    orderno: 'orderno',
    money: 'money',
    pay_type: 'pay_type',
    status: 'status',
    time: 'time',
    result: 'result',
    notify_result: 'notify_result',
    is_account: 'is_account',
    account_userid: 'account_userid',
    account_result: 'account_result'
  };

  export type T_users_rechange_recordScalarFieldEnum = (typeof T_users_rechange_recordScalarFieldEnum)[keyof typeof T_users_rechange_recordScalarFieldEnum]


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


  export type T_accountsWhereInput = {
    AND?: Enumerable<T_accountsWhereInput>
    OR?: Enumerable<T_accountsWhereInput>
    NOT?: Enumerable<T_accountsWhereInput>
    account?: StringFilter | string
    password?: StringFilter | string
    reg_time?: IntFilter | number
  }

  export type T_accountsOrderByWithRelationInput = {
    account?: SortOrder
    password?: SortOrder
    reg_time?: SortOrder
  }

  export type T_accountsWhereUniqueInput = {
    account?: string
  }

  export type T_accountsOrderByWithAggregationInput = {
    account?: SortOrder
    password?: SortOrder
    reg_time?: SortOrder
    _count?: T_accountsCountOrderByAggregateInput
    _avg?: T_accountsAvgOrderByAggregateInput
    _max?: T_accountsMaxOrderByAggregateInput
    _min?: T_accountsMinOrderByAggregateInput
    _sum?: T_accountsSumOrderByAggregateInput
  }

  export type T_accountsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<T_accountsScalarWhereWithAggregatesInput>
    OR?: Enumerable<T_accountsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<T_accountsScalarWhereWithAggregatesInput>
    account?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    reg_time?: IntWithAggregatesFilter | number
  }

  export type T_charge_logWhereInput = {
    AND?: Enumerable<T_charge_logWhereInput>
    OR?: Enumerable<T_charge_logWhereInput>
    NOT?: Enumerable<T_charge_logWhereInput>
    id?: IntFilter | number
    orderno?: StringFilter | string
    userid?: IntFilter | number
    gems_num?: IntFilter | number
    cost_money?: IntFilter | number
    charge_type?: StringFilter | string
    time?: IntFilter | number
    goldcoin_exchange_rate?: FloatFilter | number
  }

  export type T_charge_logOrderByWithRelationInput = {
    id?: SortOrder
    orderno?: SortOrder
    userid?: SortOrder
    gems_num?: SortOrder
    cost_money?: SortOrder
    charge_type?: SortOrder
    time?: SortOrder
    goldcoin_exchange_rate?: SortOrder
  }

  export type T_charge_logWhereUniqueInput = {
    id?: number
  }

  export type T_charge_logOrderByWithAggregationInput = {
    id?: SortOrder
    orderno?: SortOrder
    userid?: SortOrder
    gems_num?: SortOrder
    cost_money?: SortOrder
    charge_type?: SortOrder
    time?: SortOrder
    goldcoin_exchange_rate?: SortOrder
    _count?: T_charge_logCountOrderByAggregateInput
    _avg?: T_charge_logAvgOrderByAggregateInput
    _max?: T_charge_logMaxOrderByAggregateInput
    _min?: T_charge_logMinOrderByAggregateInput
    _sum?: T_charge_logSumOrderByAggregateInput
  }

  export type T_charge_logScalarWhereWithAggregatesInput = {
    AND?: Enumerable<T_charge_logScalarWhereWithAggregatesInput>
    OR?: Enumerable<T_charge_logScalarWhereWithAggregatesInput>
    NOT?: Enumerable<T_charge_logScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    orderno?: StringWithAggregatesFilter | string
    userid?: IntWithAggregatesFilter | number
    gems_num?: IntWithAggregatesFilter | number
    cost_money?: IntWithAggregatesFilter | number
    charge_type?: StringWithAggregatesFilter | string
    time?: IntWithAggregatesFilter | number
    goldcoin_exchange_rate?: FloatWithAggregatesFilter | number
  }

  export type T_game_result_logWhereInput = {
    AND?: Enumerable<T_game_result_logWhereInput>
    OR?: Enumerable<T_game_result_logWhereInput>
    NOT?: Enumerable<T_game_result_logWhereInput>
    id?: IntFilter | number
    roomid?: IntFilter | number
    tax?: IntFilter | number
    data?: StringFilter | string
    time?: IntFilter | number
  }

  export type T_game_result_logOrderByWithRelationInput = {
    id?: SortOrder
    roomid?: SortOrder
    tax?: SortOrder
    data?: SortOrder
    time?: SortOrder
  }

  export type T_game_result_logWhereUniqueInput = {
    id?: number
  }

  export type T_game_result_logOrderByWithAggregationInput = {
    id?: SortOrder
    roomid?: SortOrder
    tax?: SortOrder
    data?: SortOrder
    time?: SortOrder
    _count?: T_game_result_logCountOrderByAggregateInput
    _avg?: T_game_result_logAvgOrderByAggregateInput
    _max?: T_game_result_logMaxOrderByAggregateInput
    _min?: T_game_result_logMinOrderByAggregateInput
    _sum?: T_game_result_logSumOrderByAggregateInput
  }

  export type T_game_result_logScalarWhereWithAggregatesInput = {
    AND?: Enumerable<T_game_result_logScalarWhereWithAggregatesInput>
    OR?: Enumerable<T_game_result_logScalarWhereWithAggregatesInput>
    NOT?: Enumerable<T_game_result_logScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    roomid?: IntWithAggregatesFilter | number
    tax?: IntWithAggregatesFilter | number
    data?: StringWithAggregatesFilter | string
    time?: IntWithAggregatesFilter | number
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
    genre?: IntFilter | number
    room_type?: IntFilter | number
    scene?: StringFilter | string
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
    user_id4?: IntFilter | number
    user_icon4?: StringFilter | string
    user_name4?: StringFilter | string
    user_score4?: IntFilter | number
    user_id5?: IntFilter | number
    user_icon5?: StringFilter | string
    user_name5?: StringFilter | string
    user_score5?: IntFilter | number
    user_id6?: IntFilter | number
    user_icon6?: StringFilter | string
    user_name6?: StringFilter | string
    user_score6?: IntFilter | number
    user_id7?: IntFilter | number
    user_icon7?: StringFilter | string
    user_name7?: StringFilter | string
    user_score7?: IntFilter | number
    user_id8?: IntFilter | number
    user_icon8?: StringFilter | string
    user_name8?: StringFilter | string
    user_score8?: IntFilter | number
    ip?: StringFilter | string
    port?: IntFilter | number
  }

  export type T_roomsOrderByWithRelationInput = {
    uuid?: SortOrder
    id?: SortOrder
    genre?: SortOrder
    room_type?: SortOrder
    scene?: SortOrder
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
    user_id4?: SortOrder
    user_icon4?: SortOrder
    user_name4?: SortOrder
    user_score4?: SortOrder
    user_id5?: SortOrder
    user_icon5?: SortOrder
    user_name5?: SortOrder
    user_score5?: SortOrder
    user_id6?: SortOrder
    user_icon6?: SortOrder
    user_name6?: SortOrder
    user_score6?: SortOrder
    user_id7?: SortOrder
    user_icon7?: SortOrder
    user_name7?: SortOrder
    user_score7?: SortOrder
    user_id8?: SortOrder
    user_icon8?: SortOrder
    user_name8?: SortOrder
    user_score8?: SortOrder
    ip?: SortOrder
    port?: SortOrder
  }

  export type T_roomsWhereUniqueInput = {
    uuid?: string
  }

  export type T_roomsOrderByWithAggregationInput = {
    uuid?: SortOrder
    id?: SortOrder
    genre?: SortOrder
    room_type?: SortOrder
    scene?: SortOrder
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
    user_id4?: SortOrder
    user_icon4?: SortOrder
    user_name4?: SortOrder
    user_score4?: SortOrder
    user_id5?: SortOrder
    user_icon5?: SortOrder
    user_name5?: SortOrder
    user_score5?: SortOrder
    user_id6?: SortOrder
    user_icon6?: SortOrder
    user_name6?: SortOrder
    user_score6?: SortOrder
    user_id7?: SortOrder
    user_icon7?: SortOrder
    user_name7?: SortOrder
    user_score7?: SortOrder
    user_id8?: SortOrder
    user_icon8?: SortOrder
    user_name8?: SortOrder
    user_score8?: SortOrder
    ip?: SortOrder
    port?: SortOrder
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
    genre?: IntWithAggregatesFilter | number
    room_type?: IntWithAggregatesFilter | number
    scene?: StringWithAggregatesFilter | string
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
    user_id4?: IntWithAggregatesFilter | number
    user_icon4?: StringWithAggregatesFilter | string
    user_name4?: StringWithAggregatesFilter | string
    user_score4?: IntWithAggregatesFilter | number
    user_id5?: IntWithAggregatesFilter | number
    user_icon5?: StringWithAggregatesFilter | string
    user_name5?: StringWithAggregatesFilter | string
    user_score5?: IntWithAggregatesFilter | number
    user_id6?: IntWithAggregatesFilter | number
    user_icon6?: StringWithAggregatesFilter | string
    user_name6?: StringWithAggregatesFilter | string
    user_score6?: IntWithAggregatesFilter | number
    user_id7?: IntWithAggregatesFilter | number
    user_icon7?: StringWithAggregatesFilter | string
    user_name7?: StringWithAggregatesFilter | string
    user_score7?: IntWithAggregatesFilter | number
    user_id8?: IntWithAggregatesFilter | number
    user_icon8?: StringWithAggregatesFilter | string
    user_name8?: StringWithAggregatesFilter | string
    user_score8?: IntWithAggregatesFilter | number
    ip?: StringWithAggregatesFilter | string
    port?: IntWithAggregatesFilter | number
  }

  export type T_sceneWhereInput = {
    AND?: Enumerable<T_sceneWhereInput>
    OR?: Enumerable<T_sceneWhereInput>
    NOT?: Enumerable<T_sceneWhereInput>
    id?: IntFilter | number
    room_type?: IntFilter | number
    scene?: IntFilter | number
    genre?: IntFilter | number
    type?: StringFilter | string
    time?: IntFilter | number
    limit_type?: IntFilter | number
    limit_num?: IntFilter | number
    limit_danzhu?: IntFilter | number
    consume_type?: IntFilter | number
    consume_num?: IntFilter | number
    tax?: IntFilter | number
    online?: IntFilter | number
  }

  export type T_sceneOrderByWithRelationInput = {
    id?: SortOrder
    room_type?: SortOrder
    scene?: SortOrder
    genre?: SortOrder
    type?: SortOrder
    time?: SortOrder
    limit_type?: SortOrder
    limit_num?: SortOrder
    limit_danzhu?: SortOrder
    consume_type?: SortOrder
    consume_num?: SortOrder
    tax?: SortOrder
    online?: SortOrder
  }

  export type T_sceneWhereUniqueInput = {
    id?: number
  }

  export type T_sceneOrderByWithAggregationInput = {
    id?: SortOrder
    room_type?: SortOrder
    scene?: SortOrder
    genre?: SortOrder
    type?: SortOrder
    time?: SortOrder
    limit_type?: SortOrder
    limit_num?: SortOrder
    limit_danzhu?: SortOrder
    consume_type?: SortOrder
    consume_num?: SortOrder
    tax?: SortOrder
    online?: SortOrder
    _count?: T_sceneCountOrderByAggregateInput
    _avg?: T_sceneAvgOrderByAggregateInput
    _max?: T_sceneMaxOrderByAggregateInput
    _min?: T_sceneMinOrderByAggregateInput
    _sum?: T_sceneSumOrderByAggregateInput
  }

  export type T_sceneScalarWhereWithAggregatesInput = {
    AND?: Enumerable<T_sceneScalarWhereWithAggregatesInput>
    OR?: Enumerable<T_sceneScalarWhereWithAggregatesInput>
    NOT?: Enumerable<T_sceneScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    room_type?: IntWithAggregatesFilter | number
    scene?: IntWithAggregatesFilter | number
    genre?: IntWithAggregatesFilter | number
    type?: StringWithAggregatesFilter | string
    time?: IntWithAggregatesFilter | number
    limit_type?: IntWithAggregatesFilter | number
    limit_num?: IntWithAggregatesFilter | number
    limit_danzhu?: IntWithAggregatesFilter | number
    consume_type?: IntWithAggregatesFilter | number
    consume_num?: IntWithAggregatesFilter | number
    tax?: IntWithAggregatesFilter | number
    online?: IntWithAggregatesFilter | number
  }

  export type T_sell_logWhereInput = {
    AND?: Enumerable<T_sell_logWhereInput>
    OR?: Enumerable<T_sell_logWhereInput>
    NOT?: Enumerable<T_sell_logWhereInput>
    id?: IntFilter | number
    userid?: IntFilter | number
    gems_num?: IntFilter | number
    seller_id?: IntFilter | number
    charge_type?: IntFilter | number
    addtime?: IntFilter | number
    batchno?: StringFilter | string
  }

  export type T_sell_logOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    gems_num?: SortOrder
    seller_id?: SortOrder
    charge_type?: SortOrder
    addtime?: SortOrder
    batchno?: SortOrder
  }

  export type T_sell_logWhereUniqueInput = {
    id?: number
  }

  export type T_sell_logOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    gems_num?: SortOrder
    seller_id?: SortOrder
    charge_type?: SortOrder
    addtime?: SortOrder
    batchno?: SortOrder
    _count?: T_sell_logCountOrderByAggregateInput
    _avg?: T_sell_logAvgOrderByAggregateInput
    _max?: T_sell_logMaxOrderByAggregateInput
    _min?: T_sell_logMinOrderByAggregateInput
    _sum?: T_sell_logSumOrderByAggregateInput
  }

  export type T_sell_logScalarWhereWithAggregatesInput = {
    AND?: Enumerable<T_sell_logScalarWhereWithAggregatesInput>
    OR?: Enumerable<T_sell_logScalarWhereWithAggregatesInput>
    NOT?: Enumerable<T_sell_logScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userid?: IntWithAggregatesFilter | number
    gems_num?: IntWithAggregatesFilter | number
    seller_id?: IntWithAggregatesFilter | number
    charge_type?: IntWithAggregatesFilter | number
    addtime?: IntWithAggregatesFilter | number
    batchno?: StringWithAggregatesFilter | string
  }

  export type T_session_poolWhereInput = {
    AND?: Enumerable<T_session_poolWhereInput>
    OR?: Enumerable<T_session_poolWhereInput>
    NOT?: Enumerable<T_session_poolWhereInput>
    session_id?: IntFilter | number
    content?: IntFilter | number
  }

  export type T_session_poolOrderByWithRelationInput = {
    session_id?: SortOrder
    content?: SortOrder
  }

  export type T_session_poolWhereUniqueInput = {
    session_id?: number
  }

  export type T_session_poolOrderByWithAggregationInput = {
    session_id?: SortOrder
    content?: SortOrder
    _count?: T_session_poolCountOrderByAggregateInput
    _avg?: T_session_poolAvgOrderByAggregateInput
    _max?: T_session_poolMaxOrderByAggregateInput
    _min?: T_session_poolMinOrderByAggregateInput
    _sum?: T_session_poolSumOrderByAggregateInput
  }

  export type T_session_poolScalarWhereWithAggregatesInput = {
    AND?: Enumerable<T_session_poolScalarWhereWithAggregatesInput>
    OR?: Enumerable<T_session_poolScalarWhereWithAggregatesInput>
    NOT?: Enumerable<T_session_poolScalarWhereWithAggregatesInput>
    session_id?: IntWithAggregatesFilter | number
    content?: IntWithAggregatesFilter | number
  }

  export type t_use_money_logsWhereInput = {
    AND?: Enumerable<t_use_money_logsWhereInput>
    OR?: Enumerable<t_use_money_logsWhereInput>
    NOT?: Enumerable<t_use_money_logsWhereInput>
    id?: IntFilter | number
    userid?: StringFilter | string
    money?: IntFilter | number
    type?: StringFilter | string
    create_time?: IntFilter | number
    op?: StringFilter | string
  }

  export type t_use_money_logsOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    money?: SortOrder
    type?: SortOrder
    create_time?: SortOrder
    op?: SortOrder
  }

  export type t_use_money_logsWhereUniqueInput = {
    id?: number
  }

  export type t_use_money_logsOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    money?: SortOrder
    type?: SortOrder
    create_time?: SortOrder
    op?: SortOrder
    _count?: t_use_money_logsCountOrderByAggregateInput
    _avg?: t_use_money_logsAvgOrderByAggregateInput
    _max?: t_use_money_logsMaxOrderByAggregateInput
    _min?: t_use_money_logsMinOrderByAggregateInput
    _sum?: t_use_money_logsSumOrderByAggregateInput
  }

  export type t_use_money_logsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<t_use_money_logsScalarWhereWithAggregatesInput>
    OR?: Enumerable<t_use_money_logsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<t_use_money_logsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userid?: StringWithAggregatesFilter | string
    money?: IntWithAggregatesFilter | number
    type?: StringWithAggregatesFilter | string
    create_time?: IntWithAggregatesFilter | number
    op?: StringWithAggregatesFilter | string
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
    coins?: DecimalFilter | Decimal | DecimalJsLike | number | string
    gems?: DecimalFilter | Decimal | DecimalJsLike | number | string
    roomid?: StringFilter | string
    history?: StringFilter | string
    yaoqing?: IntFilter | number
    time?: IntFilter | number
    shareroomid?: StringFilter | string
    robot?: IntFilter | number
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
    gems?: SortOrder
    roomid?: SortOrder
    history?: SortOrder
    yaoqing?: SortOrder
    time?: SortOrder
    shareroomid?: SortOrder
    robot?: SortOrder
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
    gems?: SortOrder
    roomid?: SortOrder
    history?: SortOrder
    yaoqing?: SortOrder
    time?: SortOrder
    shareroomid?: SortOrder
    robot?: SortOrder
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
    coins?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    gems?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    roomid?: StringWithAggregatesFilter | string
    history?: StringWithAggregatesFilter | string
    yaoqing?: IntWithAggregatesFilter | number
    time?: IntWithAggregatesFilter | number
    shareroomid?: StringWithAggregatesFilter | string
    robot?: IntWithAggregatesFilter | number
  }

  export type T_users_rechange_recordWhereInput = {
    AND?: Enumerable<T_users_rechange_recordWhereInput>
    OR?: Enumerable<T_users_rechange_recordWhereInput>
    NOT?: Enumerable<T_users_rechange_recordWhereInput>
    id?: IntFilter | number
    userid?: IntFilter | number
    orderno?: StringFilter | string
    money?: DecimalFilter | Decimal | DecimalJsLike | number | string
    pay_type?: StringFilter | string
    status?: IntFilter | number
    time?: IntFilter | number
    result?: StringFilter | string
    notify_result?: StringFilter | string
    is_account?: IntFilter | number
    account_userid?: IntFilter | number
    account_result?: StringFilter | string
  }

  export type T_users_rechange_recordOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    orderno?: SortOrder
    money?: SortOrder
    pay_type?: SortOrder
    status?: SortOrder
    time?: SortOrder
    result?: SortOrder
    notify_result?: SortOrder
    is_account?: SortOrder
    account_userid?: SortOrder
    account_result?: SortOrder
  }

  export type T_users_rechange_recordWhereUniqueInput = {
    id?: number
  }

  export type T_users_rechange_recordOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    orderno?: SortOrder
    money?: SortOrder
    pay_type?: SortOrder
    status?: SortOrder
    time?: SortOrder
    result?: SortOrder
    notify_result?: SortOrder
    is_account?: SortOrder
    account_userid?: SortOrder
    account_result?: SortOrder
    _count?: T_users_rechange_recordCountOrderByAggregateInput
    _avg?: T_users_rechange_recordAvgOrderByAggregateInput
    _max?: T_users_rechange_recordMaxOrderByAggregateInput
    _min?: T_users_rechange_recordMinOrderByAggregateInput
    _sum?: T_users_rechange_recordSumOrderByAggregateInput
  }

  export type T_users_rechange_recordScalarWhereWithAggregatesInput = {
    AND?: Enumerable<T_users_rechange_recordScalarWhereWithAggregatesInput>
    OR?: Enumerable<T_users_rechange_recordScalarWhereWithAggregatesInput>
    NOT?: Enumerable<T_users_rechange_recordScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userid?: IntWithAggregatesFilter | number
    orderno?: StringWithAggregatesFilter | string
    money?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    pay_type?: StringWithAggregatesFilter | string
    status?: IntWithAggregatesFilter | number
    time?: IntWithAggregatesFilter | number
    result?: StringWithAggregatesFilter | string
    notify_result?: StringWithAggregatesFilter | string
    is_account?: IntWithAggregatesFilter | number
    account_userid?: IntWithAggregatesFilter | number
    account_result?: StringWithAggregatesFilter | string
  }

  export type T_accountsCreateInput = {
    account: string
    password: string
    reg_time: number
  }

  export type T_accountsUncheckedCreateInput = {
    account: string
    password: string
    reg_time: number
  }

  export type T_accountsUpdateInput = {
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reg_time?: IntFieldUpdateOperationsInput | number
  }

  export type T_accountsUncheckedUpdateInput = {
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reg_time?: IntFieldUpdateOperationsInput | number
  }

  export type T_accountsCreateManyInput = {
    account: string
    password: string
    reg_time: number
  }

  export type T_accountsUpdateManyMutationInput = {
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reg_time?: IntFieldUpdateOperationsInput | number
  }

  export type T_accountsUncheckedUpdateManyInput = {
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reg_time?: IntFieldUpdateOperationsInput | number
  }

  export type T_charge_logCreateInput = {
    orderno: string
    userid: number
    gems_num: number
    cost_money: number
    charge_type: string
    time: number
    goldcoin_exchange_rate: number
  }

  export type T_charge_logUncheckedCreateInput = {
    id?: number
    orderno: string
    userid: number
    gems_num: number
    cost_money: number
    charge_type: string
    time: number
    goldcoin_exchange_rate: number
  }

  export type T_charge_logUpdateInput = {
    orderno?: StringFieldUpdateOperationsInput | string
    userid?: IntFieldUpdateOperationsInput | number
    gems_num?: IntFieldUpdateOperationsInput | number
    cost_money?: IntFieldUpdateOperationsInput | number
    charge_type?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    goldcoin_exchange_rate?: FloatFieldUpdateOperationsInput | number
  }

  export type T_charge_logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderno?: StringFieldUpdateOperationsInput | string
    userid?: IntFieldUpdateOperationsInput | number
    gems_num?: IntFieldUpdateOperationsInput | number
    cost_money?: IntFieldUpdateOperationsInput | number
    charge_type?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    goldcoin_exchange_rate?: FloatFieldUpdateOperationsInput | number
  }

  export type T_charge_logCreateManyInput = {
    id?: number
    orderno: string
    userid: number
    gems_num: number
    cost_money: number
    charge_type: string
    time: number
    goldcoin_exchange_rate: number
  }

  export type T_charge_logUpdateManyMutationInput = {
    orderno?: StringFieldUpdateOperationsInput | string
    userid?: IntFieldUpdateOperationsInput | number
    gems_num?: IntFieldUpdateOperationsInput | number
    cost_money?: IntFieldUpdateOperationsInput | number
    charge_type?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    goldcoin_exchange_rate?: FloatFieldUpdateOperationsInput | number
  }

  export type T_charge_logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderno?: StringFieldUpdateOperationsInput | string
    userid?: IntFieldUpdateOperationsInput | number
    gems_num?: IntFieldUpdateOperationsInput | number
    cost_money?: IntFieldUpdateOperationsInput | number
    charge_type?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    goldcoin_exchange_rate?: FloatFieldUpdateOperationsInput | number
  }

  export type T_game_result_logCreateInput = {
    roomid: number
    tax: number
    data: string
    time: number
  }

  export type T_game_result_logUncheckedCreateInput = {
    id?: number
    roomid: number
    tax: number
    data: string
    time: number
  }

  export type T_game_result_logUpdateInput = {
    roomid?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
  }

  export type T_game_result_logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomid?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
  }

  export type T_game_result_logCreateManyInput = {
    id?: number
    roomid: number
    tax: number
    data: string
    time: number
  }

  export type T_game_result_logUpdateManyMutationInput = {
    roomid?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
  }

  export type T_game_result_logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomid?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
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
    propId: number
    userid: number
    ice: number
  }

  export type T_propertyUncheckedCreateInput = {
    propId: number
    userid: number
    ice: number
  }

  export type T_propertyUpdateInput = {
    propId?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    ice?: IntFieldUpdateOperationsInput | number
  }

  export type T_propertyUncheckedUpdateInput = {
    propId?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    ice?: IntFieldUpdateOperationsInput | number
  }

  export type T_propertyCreateManyInput = {
    propId: number
    userid: number
    ice: number
  }

  export type T_propertyUpdateManyMutationInput = {
    propId?: IntFieldUpdateOperationsInput | number
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
    genre: number
    room_type: number
    scene: string
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
    user_id4: number
    user_icon4: string
    user_name4: string
    user_score4: number
    user_id5: number
    user_icon5: string
    user_name5: string
    user_score5: number
    user_id6: number
    user_icon6: string
    user_name6: string
    user_score6: number
    user_id7: number
    user_icon7: string
    user_name7: string
    user_score7: number
    user_id8: number
    user_icon8: string
    user_name8: string
    user_score8: number
    ip: string
    port: number
  }

  export type T_roomsUncheckedCreateInput = {
    uuid: string
    id: string
    genre: number
    room_type: number
    scene: string
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
    user_id4: number
    user_icon4: string
    user_name4: string
    user_score4: number
    user_id5: number
    user_icon5: string
    user_name5: string
    user_score5: number
    user_id6: number
    user_icon6: string
    user_name6: string
    user_score6: number
    user_id7: number
    user_icon7: string
    user_name7: string
    user_score7: number
    user_id8: number
    user_icon8: string
    user_name8: string
    user_score8: number
    ip: string
    port: number
  }

  export type T_roomsUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    genre?: IntFieldUpdateOperationsInput | number
    room_type?: IntFieldUpdateOperationsInput | number
    scene?: StringFieldUpdateOperationsInput | string
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
    user_id4?: IntFieldUpdateOperationsInput | number
    user_icon4?: StringFieldUpdateOperationsInput | string
    user_name4?: StringFieldUpdateOperationsInput | string
    user_score4?: IntFieldUpdateOperationsInput | number
    user_id5?: IntFieldUpdateOperationsInput | number
    user_icon5?: StringFieldUpdateOperationsInput | string
    user_name5?: StringFieldUpdateOperationsInput | string
    user_score5?: IntFieldUpdateOperationsInput | number
    user_id6?: IntFieldUpdateOperationsInput | number
    user_icon6?: StringFieldUpdateOperationsInput | string
    user_name6?: StringFieldUpdateOperationsInput | string
    user_score6?: IntFieldUpdateOperationsInput | number
    user_id7?: IntFieldUpdateOperationsInput | number
    user_icon7?: StringFieldUpdateOperationsInput | string
    user_name7?: StringFieldUpdateOperationsInput | string
    user_score7?: IntFieldUpdateOperationsInput | number
    user_id8?: IntFieldUpdateOperationsInput | number
    user_icon8?: StringFieldUpdateOperationsInput | string
    user_name8?: StringFieldUpdateOperationsInput | string
    user_score8?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
  }

  export type T_roomsUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    genre?: IntFieldUpdateOperationsInput | number
    room_type?: IntFieldUpdateOperationsInput | number
    scene?: StringFieldUpdateOperationsInput | string
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
    user_id4?: IntFieldUpdateOperationsInput | number
    user_icon4?: StringFieldUpdateOperationsInput | string
    user_name4?: StringFieldUpdateOperationsInput | string
    user_score4?: IntFieldUpdateOperationsInput | number
    user_id5?: IntFieldUpdateOperationsInput | number
    user_icon5?: StringFieldUpdateOperationsInput | string
    user_name5?: StringFieldUpdateOperationsInput | string
    user_score5?: IntFieldUpdateOperationsInput | number
    user_id6?: IntFieldUpdateOperationsInput | number
    user_icon6?: StringFieldUpdateOperationsInput | string
    user_name6?: StringFieldUpdateOperationsInput | string
    user_score6?: IntFieldUpdateOperationsInput | number
    user_id7?: IntFieldUpdateOperationsInput | number
    user_icon7?: StringFieldUpdateOperationsInput | string
    user_name7?: StringFieldUpdateOperationsInput | string
    user_score7?: IntFieldUpdateOperationsInput | number
    user_id8?: IntFieldUpdateOperationsInput | number
    user_icon8?: StringFieldUpdateOperationsInput | string
    user_name8?: StringFieldUpdateOperationsInput | string
    user_score8?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
  }

  export type T_roomsCreateManyInput = {
    uuid: string
    id: string
    genre: number
    room_type: number
    scene: string
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
    user_id4: number
    user_icon4: string
    user_name4: string
    user_score4: number
    user_id5: number
    user_icon5: string
    user_name5: string
    user_score5: number
    user_id6: number
    user_icon6: string
    user_name6: string
    user_score6: number
    user_id7: number
    user_icon7: string
    user_name7: string
    user_score7: number
    user_id8: number
    user_icon8: string
    user_name8: string
    user_score8: number
    ip: string
    port: number
  }

  export type T_roomsUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    genre?: IntFieldUpdateOperationsInput | number
    room_type?: IntFieldUpdateOperationsInput | number
    scene?: StringFieldUpdateOperationsInput | string
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
    user_id4?: IntFieldUpdateOperationsInput | number
    user_icon4?: StringFieldUpdateOperationsInput | string
    user_name4?: StringFieldUpdateOperationsInput | string
    user_score4?: IntFieldUpdateOperationsInput | number
    user_id5?: IntFieldUpdateOperationsInput | number
    user_icon5?: StringFieldUpdateOperationsInput | string
    user_name5?: StringFieldUpdateOperationsInput | string
    user_score5?: IntFieldUpdateOperationsInput | number
    user_id6?: IntFieldUpdateOperationsInput | number
    user_icon6?: StringFieldUpdateOperationsInput | string
    user_name6?: StringFieldUpdateOperationsInput | string
    user_score6?: IntFieldUpdateOperationsInput | number
    user_id7?: IntFieldUpdateOperationsInput | number
    user_icon7?: StringFieldUpdateOperationsInput | string
    user_name7?: StringFieldUpdateOperationsInput | string
    user_score7?: IntFieldUpdateOperationsInput | number
    user_id8?: IntFieldUpdateOperationsInput | number
    user_icon8?: StringFieldUpdateOperationsInput | string
    user_name8?: StringFieldUpdateOperationsInput | string
    user_score8?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
  }

  export type T_roomsUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    genre?: IntFieldUpdateOperationsInput | number
    room_type?: IntFieldUpdateOperationsInput | number
    scene?: StringFieldUpdateOperationsInput | string
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
    user_id4?: IntFieldUpdateOperationsInput | number
    user_icon4?: StringFieldUpdateOperationsInput | string
    user_name4?: StringFieldUpdateOperationsInput | string
    user_score4?: IntFieldUpdateOperationsInput | number
    user_id5?: IntFieldUpdateOperationsInput | number
    user_icon5?: StringFieldUpdateOperationsInput | string
    user_name5?: StringFieldUpdateOperationsInput | string
    user_score5?: IntFieldUpdateOperationsInput | number
    user_id6?: IntFieldUpdateOperationsInput | number
    user_icon6?: StringFieldUpdateOperationsInput | string
    user_name6?: StringFieldUpdateOperationsInput | string
    user_score6?: IntFieldUpdateOperationsInput | number
    user_id7?: IntFieldUpdateOperationsInput | number
    user_icon7?: StringFieldUpdateOperationsInput | string
    user_name7?: StringFieldUpdateOperationsInput | string
    user_score7?: IntFieldUpdateOperationsInput | number
    user_id8?: IntFieldUpdateOperationsInput | number
    user_icon8?: StringFieldUpdateOperationsInput | string
    user_name8?: StringFieldUpdateOperationsInput | string
    user_score8?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
  }

  export type T_sceneCreateInput = {
    room_type: number
    scene: number
    genre: number
    type: string
    time: number
    limit_type: number
    limit_num: number
    limit_danzhu: number
    consume_type: number
    consume_num: number
    tax: number
    online: number
  }

  export type T_sceneUncheckedCreateInput = {
    id?: number
    room_type: number
    scene: number
    genre: number
    type: string
    time: number
    limit_type: number
    limit_num: number
    limit_danzhu: number
    consume_type: number
    consume_num: number
    tax: number
    online: number
  }

  export type T_sceneUpdateInput = {
    room_type?: IntFieldUpdateOperationsInput | number
    scene?: IntFieldUpdateOperationsInput | number
    genre?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    limit_type?: IntFieldUpdateOperationsInput | number
    limit_num?: IntFieldUpdateOperationsInput | number
    limit_danzhu?: IntFieldUpdateOperationsInput | number
    consume_type?: IntFieldUpdateOperationsInput | number
    consume_num?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    online?: IntFieldUpdateOperationsInput | number
  }

  export type T_sceneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_type?: IntFieldUpdateOperationsInput | number
    scene?: IntFieldUpdateOperationsInput | number
    genre?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    limit_type?: IntFieldUpdateOperationsInput | number
    limit_num?: IntFieldUpdateOperationsInput | number
    limit_danzhu?: IntFieldUpdateOperationsInput | number
    consume_type?: IntFieldUpdateOperationsInput | number
    consume_num?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    online?: IntFieldUpdateOperationsInput | number
  }

  export type T_sceneCreateManyInput = {
    id?: number
    room_type: number
    scene: number
    genre: number
    type: string
    time: number
    limit_type: number
    limit_num: number
    limit_danzhu: number
    consume_type: number
    consume_num: number
    tax: number
    online: number
  }

  export type T_sceneUpdateManyMutationInput = {
    room_type?: IntFieldUpdateOperationsInput | number
    scene?: IntFieldUpdateOperationsInput | number
    genre?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    limit_type?: IntFieldUpdateOperationsInput | number
    limit_num?: IntFieldUpdateOperationsInput | number
    limit_danzhu?: IntFieldUpdateOperationsInput | number
    consume_type?: IntFieldUpdateOperationsInput | number
    consume_num?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    online?: IntFieldUpdateOperationsInput | number
  }

  export type T_sceneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_type?: IntFieldUpdateOperationsInput | number
    scene?: IntFieldUpdateOperationsInput | number
    genre?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    limit_type?: IntFieldUpdateOperationsInput | number
    limit_num?: IntFieldUpdateOperationsInput | number
    limit_danzhu?: IntFieldUpdateOperationsInput | number
    consume_type?: IntFieldUpdateOperationsInput | number
    consume_num?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    online?: IntFieldUpdateOperationsInput | number
  }

  export type T_sell_logCreateInput = {
    userid: number
    gems_num: number
    seller_id: number
    charge_type: number
    addtime: number
    batchno: string
  }

  export type T_sell_logUncheckedCreateInput = {
    id?: number
    userid: number
    gems_num: number
    seller_id: number
    charge_type: number
    addtime: number
    batchno: string
  }

  export type T_sell_logUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    gems_num?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    charge_type?: IntFieldUpdateOperationsInput | number
    addtime?: IntFieldUpdateOperationsInput | number
    batchno?: StringFieldUpdateOperationsInput | string
  }

  export type T_sell_logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    gems_num?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    charge_type?: IntFieldUpdateOperationsInput | number
    addtime?: IntFieldUpdateOperationsInput | number
    batchno?: StringFieldUpdateOperationsInput | string
  }

  export type T_sell_logCreateManyInput = {
    id?: number
    userid: number
    gems_num: number
    seller_id: number
    charge_type: number
    addtime: number
    batchno: string
  }

  export type T_sell_logUpdateManyMutationInput = {
    userid?: IntFieldUpdateOperationsInput | number
    gems_num?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    charge_type?: IntFieldUpdateOperationsInput | number
    addtime?: IntFieldUpdateOperationsInput | number
    batchno?: StringFieldUpdateOperationsInput | string
  }

  export type T_sell_logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    gems_num?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    charge_type?: IntFieldUpdateOperationsInput | number
    addtime?: IntFieldUpdateOperationsInput | number
    batchno?: StringFieldUpdateOperationsInput | string
  }

  export type T_session_poolCreateInput = {
    session_id: number
    content: number
  }

  export type T_session_poolUncheckedCreateInput = {
    session_id: number
    content: number
  }

  export type T_session_poolUpdateInput = {
    session_id?: IntFieldUpdateOperationsInput | number
    content?: IntFieldUpdateOperationsInput | number
  }

  export type T_session_poolUncheckedUpdateInput = {
    session_id?: IntFieldUpdateOperationsInput | number
    content?: IntFieldUpdateOperationsInput | number
  }

  export type T_session_poolCreateManyInput = {
    session_id: number
    content: number
  }

  export type T_session_poolUpdateManyMutationInput = {
    session_id?: IntFieldUpdateOperationsInput | number
    content?: IntFieldUpdateOperationsInput | number
  }

  export type T_session_poolUncheckedUpdateManyInput = {
    session_id?: IntFieldUpdateOperationsInput | number
    content?: IntFieldUpdateOperationsInput | number
  }

  export type t_use_money_logsCreateInput = {
    userid: string
    money: number
    type: string
    create_time: number
    op: string
  }

  export type t_use_money_logsUncheckedCreateInput = {
    id?: number
    userid: string
    money: number
    type: string
    create_time: number
    op: string
  }

  export type t_use_money_logsUpdateInput = {
    userid?: StringFieldUpdateOperationsInput | string
    money?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    create_time?: IntFieldUpdateOperationsInput | number
    op?: StringFieldUpdateOperationsInput | string
  }

  export type t_use_money_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: StringFieldUpdateOperationsInput | string
    money?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    create_time?: IntFieldUpdateOperationsInput | number
    op?: StringFieldUpdateOperationsInput | string
  }

  export type t_use_money_logsCreateManyInput = {
    id?: number
    userid: string
    money: number
    type: string
    create_time: number
    op: string
  }

  export type t_use_money_logsUpdateManyMutationInput = {
    userid?: StringFieldUpdateOperationsInput | string
    money?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    create_time?: IntFieldUpdateOperationsInput | number
    op?: StringFieldUpdateOperationsInput | string
  }

  export type t_use_money_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: StringFieldUpdateOperationsInput | string
    money?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    create_time?: IntFieldUpdateOperationsInput | number
    op?: StringFieldUpdateOperationsInput | string
  }

  export type T_usersCreateInput = {
    account: string
    name: string
    sex: number
    headimg: string
    lv: number
    exp: number
    coins: Decimal | DecimalJsLike | number | string
    gems: Decimal | DecimalJsLike | number | string
    roomid: string
    history: string
    yaoqing: number
    time: number
    shareroomid: string
    robot: number
  }

  export type T_usersUncheckedCreateInput = {
    userid?: number
    account: string
    name: string
    sex: number
    headimg: string
    lv: number
    exp: number
    coins: Decimal | DecimalJsLike | number | string
    gems: Decimal | DecimalJsLike | number | string
    roomid: string
    history: string
    yaoqing: number
    time: number
    shareroomid: string
    robot: number
  }

  export type T_usersUpdateInput = {
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    headimg?: StringFieldUpdateOperationsInput | string
    lv?: IntFieldUpdateOperationsInput | number
    exp?: IntFieldUpdateOperationsInput | number
    coins?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gems?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomid?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    yaoqing?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    shareroomid?: StringFieldUpdateOperationsInput | string
    robot?: IntFieldUpdateOperationsInput | number
  }

  export type T_usersUncheckedUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    headimg?: StringFieldUpdateOperationsInput | string
    lv?: IntFieldUpdateOperationsInput | number
    exp?: IntFieldUpdateOperationsInput | number
    coins?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gems?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomid?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    yaoqing?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    shareroomid?: StringFieldUpdateOperationsInput | string
    robot?: IntFieldUpdateOperationsInput | number
  }

  export type T_usersCreateManyInput = {
    userid?: number
    account: string
    name: string
    sex: number
    headimg: string
    lv: number
    exp: number
    coins: Decimal | DecimalJsLike | number | string
    gems: Decimal | DecimalJsLike | number | string
    roomid: string
    history: string
    yaoqing: number
    time: number
    shareroomid: string
    robot: number
  }

  export type T_usersUpdateManyMutationInput = {
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    headimg?: StringFieldUpdateOperationsInput | string
    lv?: IntFieldUpdateOperationsInput | number
    exp?: IntFieldUpdateOperationsInput | number
    coins?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gems?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomid?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    yaoqing?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    shareroomid?: StringFieldUpdateOperationsInput | string
    robot?: IntFieldUpdateOperationsInput | number
  }

  export type T_usersUncheckedUpdateManyInput = {
    userid?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    headimg?: StringFieldUpdateOperationsInput | string
    lv?: IntFieldUpdateOperationsInput | number
    exp?: IntFieldUpdateOperationsInput | number
    coins?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gems?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomid?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    yaoqing?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    shareroomid?: StringFieldUpdateOperationsInput | string
    robot?: IntFieldUpdateOperationsInput | number
  }

  export type T_users_rechange_recordCreateInput = {
    userid: number
    orderno: string
    money: Decimal | DecimalJsLike | number | string
    pay_type: string
    status: number
    time: number
    result: string
    notify_result: string
    is_account: number
    account_userid: number
    account_result: string
  }

  export type T_users_rechange_recordUncheckedCreateInput = {
    id?: number
    userid: number
    orderno: string
    money: Decimal | DecimalJsLike | number | string
    pay_type: string
    status: number
    time: number
    result: string
    notify_result: string
    is_account: number
    account_userid: number
    account_result: string
  }

  export type T_users_rechange_recordUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    orderno?: StringFieldUpdateOperationsInput | string
    money?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pay_type?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    notify_result?: StringFieldUpdateOperationsInput | string
    is_account?: IntFieldUpdateOperationsInput | number
    account_userid?: IntFieldUpdateOperationsInput | number
    account_result?: StringFieldUpdateOperationsInput | string
  }

  export type T_users_rechange_recordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    orderno?: StringFieldUpdateOperationsInput | string
    money?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pay_type?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    notify_result?: StringFieldUpdateOperationsInput | string
    is_account?: IntFieldUpdateOperationsInput | number
    account_userid?: IntFieldUpdateOperationsInput | number
    account_result?: StringFieldUpdateOperationsInput | string
  }

  export type T_users_rechange_recordCreateManyInput = {
    id?: number
    userid: number
    orderno: string
    money: Decimal | DecimalJsLike | number | string
    pay_type: string
    status: number
    time: number
    result: string
    notify_result: string
    is_account: number
    account_userid: number
    account_result: string
  }

  export type T_users_rechange_recordUpdateManyMutationInput = {
    userid?: IntFieldUpdateOperationsInput | number
    orderno?: StringFieldUpdateOperationsInput | string
    money?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pay_type?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    notify_result?: StringFieldUpdateOperationsInput | string
    is_account?: IntFieldUpdateOperationsInput | number
    account_userid?: IntFieldUpdateOperationsInput | number
    account_result?: StringFieldUpdateOperationsInput | string
  }

  export type T_users_rechange_recordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    orderno?: StringFieldUpdateOperationsInput | string
    money?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pay_type?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    notify_result?: StringFieldUpdateOperationsInput | string
    is_account?: IntFieldUpdateOperationsInput | number
    account_userid?: IntFieldUpdateOperationsInput | number
    account_result?: StringFieldUpdateOperationsInput | string
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

  export type T_accountsCountOrderByAggregateInput = {
    account?: SortOrder
    password?: SortOrder
    reg_time?: SortOrder
  }

  export type T_accountsAvgOrderByAggregateInput = {
    reg_time?: SortOrder
  }

  export type T_accountsMaxOrderByAggregateInput = {
    account?: SortOrder
    password?: SortOrder
    reg_time?: SortOrder
  }

  export type T_accountsMinOrderByAggregateInput = {
    account?: SortOrder
    password?: SortOrder
    reg_time?: SortOrder
  }

  export type T_accountsSumOrderByAggregateInput = {
    reg_time?: SortOrder
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

  export type T_charge_logCountOrderByAggregateInput = {
    id?: SortOrder
    orderno?: SortOrder
    userid?: SortOrder
    gems_num?: SortOrder
    cost_money?: SortOrder
    charge_type?: SortOrder
    time?: SortOrder
    goldcoin_exchange_rate?: SortOrder
  }

  export type T_charge_logAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    gems_num?: SortOrder
    cost_money?: SortOrder
    time?: SortOrder
    goldcoin_exchange_rate?: SortOrder
  }

  export type T_charge_logMaxOrderByAggregateInput = {
    id?: SortOrder
    orderno?: SortOrder
    userid?: SortOrder
    gems_num?: SortOrder
    cost_money?: SortOrder
    charge_type?: SortOrder
    time?: SortOrder
    goldcoin_exchange_rate?: SortOrder
  }

  export type T_charge_logMinOrderByAggregateInput = {
    id?: SortOrder
    orderno?: SortOrder
    userid?: SortOrder
    gems_num?: SortOrder
    cost_money?: SortOrder
    charge_type?: SortOrder
    time?: SortOrder
    goldcoin_exchange_rate?: SortOrder
  }

  export type T_charge_logSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    gems_num?: SortOrder
    cost_money?: SortOrder
    time?: SortOrder
    goldcoin_exchange_rate?: SortOrder
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

  export type T_game_result_logCountOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    tax?: SortOrder
    data?: SortOrder
    time?: SortOrder
  }

  export type T_game_result_logAvgOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    tax?: SortOrder
    time?: SortOrder
  }

  export type T_game_result_logMaxOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    tax?: SortOrder
    data?: SortOrder
    time?: SortOrder
  }

  export type T_game_result_logMinOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    tax?: SortOrder
    data?: SortOrder
    time?: SortOrder
  }

  export type T_game_result_logSumOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    tax?: SortOrder
    time?: SortOrder
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
    genre?: SortOrder
    room_type?: SortOrder
    scene?: SortOrder
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
    user_id4?: SortOrder
    user_icon4?: SortOrder
    user_name4?: SortOrder
    user_score4?: SortOrder
    user_id5?: SortOrder
    user_icon5?: SortOrder
    user_name5?: SortOrder
    user_score5?: SortOrder
    user_id6?: SortOrder
    user_icon6?: SortOrder
    user_name6?: SortOrder
    user_score6?: SortOrder
    user_id7?: SortOrder
    user_icon7?: SortOrder
    user_name7?: SortOrder
    user_score7?: SortOrder
    user_id8?: SortOrder
    user_icon8?: SortOrder
    user_name8?: SortOrder
    user_score8?: SortOrder
    ip?: SortOrder
    port?: SortOrder
  }

  export type T_roomsAvgOrderByAggregateInput = {
    genre?: SortOrder
    room_type?: SortOrder
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
    user_id4?: SortOrder
    user_score4?: SortOrder
    user_id5?: SortOrder
    user_score5?: SortOrder
    user_id6?: SortOrder
    user_score6?: SortOrder
    user_id7?: SortOrder
    user_score7?: SortOrder
    user_id8?: SortOrder
    user_score8?: SortOrder
    port?: SortOrder
  }

  export type T_roomsMaxOrderByAggregateInput = {
    uuid?: SortOrder
    id?: SortOrder
    genre?: SortOrder
    room_type?: SortOrder
    scene?: SortOrder
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
    user_id4?: SortOrder
    user_icon4?: SortOrder
    user_name4?: SortOrder
    user_score4?: SortOrder
    user_id5?: SortOrder
    user_icon5?: SortOrder
    user_name5?: SortOrder
    user_score5?: SortOrder
    user_id6?: SortOrder
    user_icon6?: SortOrder
    user_name6?: SortOrder
    user_score6?: SortOrder
    user_id7?: SortOrder
    user_icon7?: SortOrder
    user_name7?: SortOrder
    user_score7?: SortOrder
    user_id8?: SortOrder
    user_icon8?: SortOrder
    user_name8?: SortOrder
    user_score8?: SortOrder
    ip?: SortOrder
    port?: SortOrder
  }

  export type T_roomsMinOrderByAggregateInput = {
    uuid?: SortOrder
    id?: SortOrder
    genre?: SortOrder
    room_type?: SortOrder
    scene?: SortOrder
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
    user_id4?: SortOrder
    user_icon4?: SortOrder
    user_name4?: SortOrder
    user_score4?: SortOrder
    user_id5?: SortOrder
    user_icon5?: SortOrder
    user_name5?: SortOrder
    user_score5?: SortOrder
    user_id6?: SortOrder
    user_icon6?: SortOrder
    user_name6?: SortOrder
    user_score6?: SortOrder
    user_id7?: SortOrder
    user_icon7?: SortOrder
    user_name7?: SortOrder
    user_score7?: SortOrder
    user_id8?: SortOrder
    user_icon8?: SortOrder
    user_name8?: SortOrder
    user_score8?: SortOrder
    ip?: SortOrder
    port?: SortOrder
  }

  export type T_roomsSumOrderByAggregateInput = {
    genre?: SortOrder
    room_type?: SortOrder
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
    user_id4?: SortOrder
    user_score4?: SortOrder
    user_id5?: SortOrder
    user_score5?: SortOrder
    user_id6?: SortOrder
    user_score6?: SortOrder
    user_id7?: SortOrder
    user_score7?: SortOrder
    user_id8?: SortOrder
    user_score8?: SortOrder
    port?: SortOrder
  }

  export type T_sceneCountOrderByAggregateInput = {
    id?: SortOrder
    room_type?: SortOrder
    scene?: SortOrder
    genre?: SortOrder
    type?: SortOrder
    time?: SortOrder
    limit_type?: SortOrder
    limit_num?: SortOrder
    limit_danzhu?: SortOrder
    consume_type?: SortOrder
    consume_num?: SortOrder
    tax?: SortOrder
    online?: SortOrder
  }

  export type T_sceneAvgOrderByAggregateInput = {
    id?: SortOrder
    room_type?: SortOrder
    scene?: SortOrder
    genre?: SortOrder
    time?: SortOrder
    limit_type?: SortOrder
    limit_num?: SortOrder
    limit_danzhu?: SortOrder
    consume_type?: SortOrder
    consume_num?: SortOrder
    tax?: SortOrder
    online?: SortOrder
  }

  export type T_sceneMaxOrderByAggregateInput = {
    id?: SortOrder
    room_type?: SortOrder
    scene?: SortOrder
    genre?: SortOrder
    type?: SortOrder
    time?: SortOrder
    limit_type?: SortOrder
    limit_num?: SortOrder
    limit_danzhu?: SortOrder
    consume_type?: SortOrder
    consume_num?: SortOrder
    tax?: SortOrder
    online?: SortOrder
  }

  export type T_sceneMinOrderByAggregateInput = {
    id?: SortOrder
    room_type?: SortOrder
    scene?: SortOrder
    genre?: SortOrder
    type?: SortOrder
    time?: SortOrder
    limit_type?: SortOrder
    limit_num?: SortOrder
    limit_danzhu?: SortOrder
    consume_type?: SortOrder
    consume_num?: SortOrder
    tax?: SortOrder
    online?: SortOrder
  }

  export type T_sceneSumOrderByAggregateInput = {
    id?: SortOrder
    room_type?: SortOrder
    scene?: SortOrder
    genre?: SortOrder
    time?: SortOrder
    limit_type?: SortOrder
    limit_num?: SortOrder
    limit_danzhu?: SortOrder
    consume_type?: SortOrder
    consume_num?: SortOrder
    tax?: SortOrder
    online?: SortOrder
  }

  export type T_sell_logCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    gems_num?: SortOrder
    seller_id?: SortOrder
    charge_type?: SortOrder
    addtime?: SortOrder
    batchno?: SortOrder
  }

  export type T_sell_logAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    gems_num?: SortOrder
    seller_id?: SortOrder
    charge_type?: SortOrder
    addtime?: SortOrder
  }

  export type T_sell_logMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    gems_num?: SortOrder
    seller_id?: SortOrder
    charge_type?: SortOrder
    addtime?: SortOrder
    batchno?: SortOrder
  }

  export type T_sell_logMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    gems_num?: SortOrder
    seller_id?: SortOrder
    charge_type?: SortOrder
    addtime?: SortOrder
    batchno?: SortOrder
  }

  export type T_sell_logSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    gems_num?: SortOrder
    seller_id?: SortOrder
    charge_type?: SortOrder
    addtime?: SortOrder
  }

  export type T_session_poolCountOrderByAggregateInput = {
    session_id?: SortOrder
    content?: SortOrder
  }

  export type T_session_poolAvgOrderByAggregateInput = {
    session_id?: SortOrder
    content?: SortOrder
  }

  export type T_session_poolMaxOrderByAggregateInput = {
    session_id?: SortOrder
    content?: SortOrder
  }

  export type T_session_poolMinOrderByAggregateInput = {
    session_id?: SortOrder
    content?: SortOrder
  }

  export type T_session_poolSumOrderByAggregateInput = {
    session_id?: SortOrder
    content?: SortOrder
  }

  export type t_use_money_logsCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    money?: SortOrder
    type?: SortOrder
    create_time?: SortOrder
    op?: SortOrder
  }

  export type t_use_money_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    money?: SortOrder
    create_time?: SortOrder
  }

  export type t_use_money_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    money?: SortOrder
    type?: SortOrder
    create_time?: SortOrder
    op?: SortOrder
  }

  export type t_use_money_logsMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    money?: SortOrder
    type?: SortOrder
    create_time?: SortOrder
    op?: SortOrder
  }

  export type t_use_money_logsSumOrderByAggregateInput = {
    id?: SortOrder
    money?: SortOrder
    create_time?: SortOrder
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
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
    gems?: SortOrder
    roomid?: SortOrder
    history?: SortOrder
    yaoqing?: SortOrder
    time?: SortOrder
    shareroomid?: SortOrder
    robot?: SortOrder
  }

  export type T_usersAvgOrderByAggregateInput = {
    userid?: SortOrder
    sex?: SortOrder
    lv?: SortOrder
    exp?: SortOrder
    coins?: SortOrder
    gems?: SortOrder
    yaoqing?: SortOrder
    time?: SortOrder
    robot?: SortOrder
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
    gems?: SortOrder
    roomid?: SortOrder
    history?: SortOrder
    yaoqing?: SortOrder
    time?: SortOrder
    shareroomid?: SortOrder
    robot?: SortOrder
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
    gems?: SortOrder
    roomid?: SortOrder
    history?: SortOrder
    yaoqing?: SortOrder
    time?: SortOrder
    shareroomid?: SortOrder
    robot?: SortOrder
  }

  export type T_usersSumOrderByAggregateInput = {
    userid?: SortOrder
    sex?: SortOrder
    lv?: SortOrder
    exp?: SortOrder
    coins?: SortOrder
    gems?: SortOrder
    yaoqing?: SortOrder
    time?: SortOrder
    robot?: SortOrder
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type T_users_rechange_recordCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    orderno?: SortOrder
    money?: SortOrder
    pay_type?: SortOrder
    status?: SortOrder
    time?: SortOrder
    result?: SortOrder
    notify_result?: SortOrder
    is_account?: SortOrder
    account_userid?: SortOrder
    account_result?: SortOrder
  }

  export type T_users_rechange_recordAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    money?: SortOrder
    status?: SortOrder
    time?: SortOrder
    is_account?: SortOrder
    account_userid?: SortOrder
  }

  export type T_users_rechange_recordMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    orderno?: SortOrder
    money?: SortOrder
    pay_type?: SortOrder
    status?: SortOrder
    time?: SortOrder
    result?: SortOrder
    notify_result?: SortOrder
    is_account?: SortOrder
    account_userid?: SortOrder
    account_result?: SortOrder
  }

  export type T_users_rechange_recordMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    orderno?: SortOrder
    money?: SortOrder
    pay_type?: SortOrder
    status?: SortOrder
    time?: SortOrder
    result?: SortOrder
    notify_result?: SortOrder
    is_account?: SortOrder
    account_userid?: SortOrder
    account_result?: SortOrder
  }

  export type T_users_rechange_recordSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    money?: SortOrder
    status?: SortOrder
    time?: SortOrder
    is_account?: SortOrder
    account_userid?: SortOrder
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

  export type FloatFieldUpdateOperationsInput = {
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

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
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