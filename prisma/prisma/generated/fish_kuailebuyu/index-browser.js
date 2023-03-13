
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.11.0
 * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
 */
Prisma.prismaVersion = {
  client: "4.11.0",
  engine: "8fde8fef4033376662cad983758335009d522acb"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.Catch_chanceScalarFieldEnum = makeEnum({
  serveId: 'serveId',
  chance: 'chance'
});

exports.Prisma.Control_poolScalarFieldEnum = makeEnum({
  serveId: 'serveId',
  pool: 'pool',
  line: 'line'
});

exports.Prisma.Control_userScalarFieldEnum = makeEnum({
  uid: 'uid',
  chance: 'chance'
});

exports.Prisma.DaysendprizevalueScalarFieldEnum = makeEnum({
  day: 'day',
  value: 'value'
});

exports.Prisma.FishlogScalarFieldEnum = makeEnum({
  id: 'id',
  userid: 'userid',
  usecoin: 'usecoin',
  wincoin: 'wincoin',
  balanceTime: 'balanceTime',
  mark: 'mark',
  serverId: 'serverId'
});

exports.Prisma.GetcoinScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  getCoin: 'getCoin',
  adddate: 'adddate',
  mark: 'mark',
  isget: 'isget',
  day: 'day'
});

exports.Prisma.LvScalarFieldEnum = makeEnum({
  lv: 'lv',
  wincoinvalue: 'wincoinvalue'
});

exports.Prisma.MatchrandkingScalarFieldEnum = makeEnum({
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
});

exports.Prisma.PoolScalarFieldEnum = makeEnum({
  serveId: 'serveId',
  pool: 'pool',
  virtualPool: 'virtualPool'
});

exports.Prisma.SendprizeScalarFieldEnum = makeEnum({
  idx: 'idx',
  propid: 'propid',
  propcount: 'propcount',
  score: 'score'
});

exports.Prisma.ShootprizeScalarFieldEnum = makeEnum({
  lv: 'lv',
  value: 'value',
  propid: 'propid',
  propcount: 'propcount',
  winsocre: 'winsocre'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.T_accountsScalarFieldEnum = makeEnum({
  account: 'account',
  password: 'password'
});

exports.Prisma.T_gamesScalarFieldEnum = makeEnum({
  room_uuid: 'room_uuid',
  game_index: 'game_index',
  base_info: 'base_info',
  create_time: 'create_time',
  snapshots: 'snapshots',
  action_records: 'action_records',
  result: 'result'
});

exports.Prisma.T_games_archiveScalarFieldEnum = makeEnum({
  room_uuid: 'room_uuid',
  game_index: 'game_index',
  base_info: 'base_info',
  create_time: 'create_time',
  snapshots: 'snapshots',
  action_records: 'action_records',
  result: 'result'
});

exports.Prisma.T_guestsScalarFieldEnum = makeEnum({
  guest_account: 'guest_account'
});

exports.Prisma.T_messageScalarFieldEnum = makeEnum({
  type: 'type',
  msg: 'msg',
  version: 'version'
});

exports.Prisma.T_propertyScalarFieldEnum = makeEnum({
  propId: 'propId',
  userid: 'userid',
  ice: 'ice'
});

exports.Prisma.T_roomsScalarFieldEnum = makeEnum({
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
});

exports.Prisma.T_usersScalarFieldEnum = makeEnum({
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
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsecoinScalarFieldEnum = makeEnum({
  userId: 'userId',
  useCoin: 'useCoin',
  getprizelv: 'getprizelv'
});

exports.Prisma.WincoinScalarFieldEnum = makeEnum({
  userId: 'userId',
  wincoin: 'wincoin',
  lv: 'lv'
});


exports.Prisma.ModelName = makeEnum({
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
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
