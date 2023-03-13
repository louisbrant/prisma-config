
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} = require('./runtime/library')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


const path = require('path')

const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
  "prisma\\prisma\\generated\\fish_eu",
  "prisma\\generated\\fish_eu",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"Catch_chance\",\"dbName\":null,\"fields\":[{\"name\":\"serveId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Control_pool\",\"dbName\":null,\"fields\":[{\"name\":\"serveId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pool\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"line\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Control_user\",\"dbName\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Daysendprizevalue\",\"dbName\":null,\"fields\":[{\"name\":\"day\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Fishlog\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usecoin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wincoin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balanceTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serverId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Getcoin\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"getCoin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adddate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isget\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"day\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Lv\",\"dbName\":null,\"fields\":[{\"name\":\"lv\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wincoinvalue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Matchrandking\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"matchId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winPropId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winPropCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rankIdx\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isGetPrize\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isMsg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"msg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Pool\",\"dbName\":null,\"fields\":[{\"name\":\"serveId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pool\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"virtualPool\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Sendprize\",\"dbName\":null,\"fields\":[{\"name\":\"idx\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propcount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Shootprize\",\"dbName\":null,\"fields\":[{\"name\":\"lv\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propcount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winsocre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"T_accounts\",\"dbName\":null,\"fields\":[{\"name\":\"account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"T_games\",\"dbName\":null,\"fields\":[{\"name\":\"room_uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"game_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"base_info\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"snapshots\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action_records\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"result\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"T_games_archive\",\"dbName\":null,\"fields\":[{\"name\":\"room_uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"game_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"base_info\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"snapshots\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action_records\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"result\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"T_guests\",\"dbName\":null,\"fields\":[{\"name\":\"guest_account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"T_message\",\"dbName\":null,\"fields\":[{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"msg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"T_property\",\"dbName\":null,\"fields\":[{\"name\":\"propId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"T_rooms\",\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"base_info\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_of_turns\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"next_button\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id0\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_icon0\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_name0\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_score0\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_icon1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_name1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_score1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_icon2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_name2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_score2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_icon3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_name3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_score3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"port\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"baseScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"T_users\",\"dbName\":null,\"fields\":[{\"name\":\"userid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"headimg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lv\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coins\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gems\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"history\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"power\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RenameCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ReHeadCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Usecoin\",\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"useCoin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"getprizelv\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Wincoin\",\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wincoin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lv\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Catch_chance\",\"plural\":\"catch_chances\",\"findUnique\":\"findUniqueCatch_chance\",\"findUniqueOrThrow\":\"findUniqueCatch_chanceOrThrow\",\"findFirst\":\"findFirstCatch_chance\",\"findFirstOrThrow\":\"findFirstCatch_chanceOrThrow\",\"findMany\":\"findManyCatch_chance\",\"create\":\"createOneCatch_chance\",\"createMany\":\"createManyCatch_chance\",\"delete\":\"deleteOneCatch_chance\",\"update\":\"updateOneCatch_chance\",\"deleteMany\":\"deleteManyCatch_chance\",\"updateMany\":\"updateManyCatch_chance\",\"upsert\":\"upsertOneCatch_chance\",\"aggregate\":\"aggregateCatch_chance\",\"groupBy\":\"groupByCatch_chance\"},{\"model\":\"Control_pool\",\"plural\":\"control_pools\",\"findUnique\":\"findUniqueControl_pool\",\"findUniqueOrThrow\":\"findUniqueControl_poolOrThrow\",\"findFirst\":\"findFirstControl_pool\",\"findFirstOrThrow\":\"findFirstControl_poolOrThrow\",\"findMany\":\"findManyControl_pool\",\"create\":\"createOneControl_pool\",\"createMany\":\"createManyControl_pool\",\"delete\":\"deleteOneControl_pool\",\"update\":\"updateOneControl_pool\",\"deleteMany\":\"deleteManyControl_pool\",\"updateMany\":\"updateManyControl_pool\",\"upsert\":\"upsertOneControl_pool\",\"aggregate\":\"aggregateControl_pool\",\"groupBy\":\"groupByControl_pool\"},{\"model\":\"Control_user\",\"plural\":\"control_users\",\"findUnique\":\"findUniqueControl_user\",\"findUniqueOrThrow\":\"findUniqueControl_userOrThrow\",\"findFirst\":\"findFirstControl_user\",\"findFirstOrThrow\":\"findFirstControl_userOrThrow\",\"findMany\":\"findManyControl_user\",\"create\":\"createOneControl_user\",\"createMany\":\"createManyControl_user\",\"delete\":\"deleteOneControl_user\",\"update\":\"updateOneControl_user\",\"deleteMany\":\"deleteManyControl_user\",\"updateMany\":\"updateManyControl_user\",\"upsert\":\"upsertOneControl_user\",\"aggregate\":\"aggregateControl_user\",\"groupBy\":\"groupByControl_user\"},{\"model\":\"Daysendprizevalue\",\"plural\":\"daysendprizevalues\",\"findUnique\":\"findUniqueDaysendprizevalue\",\"findUniqueOrThrow\":\"findUniqueDaysendprizevalueOrThrow\",\"findFirst\":\"findFirstDaysendprizevalue\",\"findFirstOrThrow\":\"findFirstDaysendprizevalueOrThrow\",\"findMany\":\"findManyDaysendprizevalue\",\"create\":\"createOneDaysendprizevalue\",\"createMany\":\"createManyDaysendprizevalue\",\"delete\":\"deleteOneDaysendprizevalue\",\"update\":\"updateOneDaysendprizevalue\",\"deleteMany\":\"deleteManyDaysendprizevalue\",\"updateMany\":\"updateManyDaysendprizevalue\",\"upsert\":\"upsertOneDaysendprizevalue\",\"aggregate\":\"aggregateDaysendprizevalue\",\"groupBy\":\"groupByDaysendprizevalue\"},{\"model\":\"Fishlog\",\"plural\":\"fishlogs\",\"findUnique\":\"findUniqueFishlog\",\"findUniqueOrThrow\":\"findUniqueFishlogOrThrow\",\"findFirst\":\"findFirstFishlog\",\"findFirstOrThrow\":\"findFirstFishlogOrThrow\",\"findMany\":\"findManyFishlog\",\"create\":\"createOneFishlog\",\"createMany\":\"createManyFishlog\",\"delete\":\"deleteOneFishlog\",\"update\":\"updateOneFishlog\",\"deleteMany\":\"deleteManyFishlog\",\"updateMany\":\"updateManyFishlog\",\"upsert\":\"upsertOneFishlog\",\"aggregate\":\"aggregateFishlog\",\"groupBy\":\"groupByFishlog\"},{\"model\":\"Getcoin\",\"plural\":\"getcoins\",\"findUnique\":\"findUniqueGetcoin\",\"findUniqueOrThrow\":\"findUniqueGetcoinOrThrow\",\"findFirst\":\"findFirstGetcoin\",\"findFirstOrThrow\":\"findFirstGetcoinOrThrow\",\"findMany\":\"findManyGetcoin\",\"create\":\"createOneGetcoin\",\"createMany\":\"createManyGetcoin\",\"delete\":\"deleteOneGetcoin\",\"update\":\"updateOneGetcoin\",\"deleteMany\":\"deleteManyGetcoin\",\"updateMany\":\"updateManyGetcoin\",\"upsert\":\"upsertOneGetcoin\",\"aggregate\":\"aggregateGetcoin\",\"groupBy\":\"groupByGetcoin\"},{\"model\":\"Lv\",\"plural\":\"lvs\",\"findUnique\":\"findUniqueLv\",\"findUniqueOrThrow\":\"findUniqueLvOrThrow\",\"findFirst\":\"findFirstLv\",\"findFirstOrThrow\":\"findFirstLvOrThrow\",\"findMany\":\"findManyLv\",\"create\":\"createOneLv\",\"createMany\":\"createManyLv\",\"delete\":\"deleteOneLv\",\"update\":\"updateOneLv\",\"deleteMany\":\"deleteManyLv\",\"updateMany\":\"updateManyLv\",\"upsert\":\"upsertOneLv\",\"aggregate\":\"aggregateLv\",\"groupBy\":\"groupByLv\"},{\"model\":\"Matchrandking\",\"plural\":\"matchrandkings\",\"findUnique\":\"findUniqueMatchrandking\",\"findUniqueOrThrow\":\"findUniqueMatchrandkingOrThrow\",\"findFirst\":\"findFirstMatchrandking\",\"findFirstOrThrow\":\"findFirstMatchrandkingOrThrow\",\"findMany\":\"findManyMatchrandking\",\"create\":\"createOneMatchrandking\",\"createMany\":\"createManyMatchrandking\",\"delete\":\"deleteOneMatchrandking\",\"update\":\"updateOneMatchrandking\",\"deleteMany\":\"deleteManyMatchrandking\",\"updateMany\":\"updateManyMatchrandking\",\"upsert\":\"upsertOneMatchrandking\",\"aggregate\":\"aggregateMatchrandking\",\"groupBy\":\"groupByMatchrandking\"},{\"model\":\"Pool\",\"plural\":\"pools\",\"findUnique\":\"findUniquePool\",\"findUniqueOrThrow\":\"findUniquePoolOrThrow\",\"findFirst\":\"findFirstPool\",\"findFirstOrThrow\":\"findFirstPoolOrThrow\",\"findMany\":\"findManyPool\",\"create\":\"createOnePool\",\"createMany\":\"createManyPool\",\"delete\":\"deleteOnePool\",\"update\":\"updateOnePool\",\"deleteMany\":\"deleteManyPool\",\"updateMany\":\"updateManyPool\",\"upsert\":\"upsertOnePool\",\"aggregate\":\"aggregatePool\",\"groupBy\":\"groupByPool\"},{\"model\":\"Sendprize\",\"plural\":\"sendprizes\",\"findUnique\":\"findUniqueSendprize\",\"findUniqueOrThrow\":\"findUniqueSendprizeOrThrow\",\"findFirst\":\"findFirstSendprize\",\"findFirstOrThrow\":\"findFirstSendprizeOrThrow\",\"findMany\":\"findManySendprize\",\"create\":\"createOneSendprize\",\"createMany\":\"createManySendprize\",\"delete\":\"deleteOneSendprize\",\"update\":\"updateOneSendprize\",\"deleteMany\":\"deleteManySendprize\",\"updateMany\":\"updateManySendprize\",\"upsert\":\"upsertOneSendprize\",\"aggregate\":\"aggregateSendprize\",\"groupBy\":\"groupBySendprize\"},{\"model\":\"Shootprize\",\"plural\":\"shootprizes\",\"findUnique\":\"findUniqueShootprize\",\"findUniqueOrThrow\":\"findUniqueShootprizeOrThrow\",\"findFirst\":\"findFirstShootprize\",\"findFirstOrThrow\":\"findFirstShootprizeOrThrow\",\"findMany\":\"findManyShootprize\",\"create\":\"createOneShootprize\",\"createMany\":\"createManyShootprize\",\"delete\":\"deleteOneShootprize\",\"update\":\"updateOneShootprize\",\"deleteMany\":\"deleteManyShootprize\",\"updateMany\":\"updateManyShootprize\",\"upsert\":\"upsertOneShootprize\",\"aggregate\":\"aggregateShootprize\",\"groupBy\":\"groupByShootprize\"},{\"model\":\"T_accounts\",\"plural\":\"t_accounts\",\"findUnique\":\"findUniqueT_accounts\",\"findUniqueOrThrow\":\"findUniqueT_accountsOrThrow\",\"findFirst\":\"findFirstT_accounts\",\"findFirstOrThrow\":\"findFirstT_accountsOrThrow\",\"findMany\":\"findManyT_accounts\",\"create\":\"createOneT_accounts\",\"createMany\":\"createManyT_accounts\",\"delete\":\"deleteOneT_accounts\",\"update\":\"updateOneT_accounts\",\"deleteMany\":\"deleteManyT_accounts\",\"updateMany\":\"updateManyT_accounts\",\"upsert\":\"upsertOneT_accounts\",\"aggregate\":\"aggregateT_accounts\",\"groupBy\":\"groupByT_accounts\"},{\"model\":\"T_games\",\"plural\":\"t_games\",\"findUnique\":\"findUniqueT_games\",\"findUniqueOrThrow\":\"findUniqueT_gamesOrThrow\",\"findFirst\":\"findFirstT_games\",\"findFirstOrThrow\":\"findFirstT_gamesOrThrow\",\"findMany\":\"findManyT_games\",\"create\":\"createOneT_games\",\"createMany\":\"createManyT_games\",\"delete\":\"deleteOneT_games\",\"update\":\"updateOneT_games\",\"deleteMany\":\"deleteManyT_games\",\"updateMany\":\"updateManyT_games\",\"upsert\":\"upsertOneT_games\",\"aggregate\":\"aggregateT_games\",\"groupBy\":\"groupByT_games\"},{\"model\":\"T_games_archive\",\"plural\":\"t_games_archives\",\"findUnique\":\"findUniqueT_games_archive\",\"findUniqueOrThrow\":\"findUniqueT_games_archiveOrThrow\",\"findFirst\":\"findFirstT_games_archive\",\"findFirstOrThrow\":\"findFirstT_games_archiveOrThrow\",\"findMany\":\"findManyT_games_archive\",\"create\":\"createOneT_games_archive\",\"createMany\":\"createManyT_games_archive\",\"delete\":\"deleteOneT_games_archive\",\"update\":\"updateOneT_games_archive\",\"deleteMany\":\"deleteManyT_games_archive\",\"updateMany\":\"updateManyT_games_archive\",\"upsert\":\"upsertOneT_games_archive\",\"aggregate\":\"aggregateT_games_archive\",\"groupBy\":\"groupByT_games_archive\"},{\"model\":\"T_guests\",\"plural\":\"t_guests\",\"findUnique\":\"findUniqueT_guests\",\"findUniqueOrThrow\":\"findUniqueT_guestsOrThrow\",\"findFirst\":\"findFirstT_guests\",\"findFirstOrThrow\":\"findFirstT_guestsOrThrow\",\"findMany\":\"findManyT_guests\",\"create\":\"createOneT_guests\",\"createMany\":\"createManyT_guests\",\"delete\":\"deleteOneT_guests\",\"update\":\"updateOneT_guests\",\"deleteMany\":\"deleteManyT_guests\",\"updateMany\":\"updateManyT_guests\",\"upsert\":\"upsertOneT_guests\",\"aggregate\":\"aggregateT_guests\",\"groupBy\":\"groupByT_guests\"},{\"model\":\"T_message\",\"plural\":\"t_messages\",\"findUnique\":\"findUniqueT_message\",\"findUniqueOrThrow\":\"findUniqueT_messageOrThrow\",\"findFirst\":\"findFirstT_message\",\"findFirstOrThrow\":\"findFirstT_messageOrThrow\",\"findMany\":\"findManyT_message\",\"create\":\"createOneT_message\",\"createMany\":\"createManyT_message\",\"delete\":\"deleteOneT_message\",\"update\":\"updateOneT_message\",\"deleteMany\":\"deleteManyT_message\",\"updateMany\":\"updateManyT_message\",\"upsert\":\"upsertOneT_message\",\"aggregate\":\"aggregateT_message\",\"groupBy\":\"groupByT_message\"},{\"model\":\"T_property\",\"plural\":\"t_properties\",\"findUnique\":\"findUniqueT_property\",\"findUniqueOrThrow\":\"findUniqueT_propertyOrThrow\",\"findFirst\":\"findFirstT_property\",\"findFirstOrThrow\":\"findFirstT_propertyOrThrow\",\"findMany\":\"findManyT_property\",\"create\":\"createOneT_property\",\"createMany\":\"createManyT_property\",\"delete\":\"deleteOneT_property\",\"update\":\"updateOneT_property\",\"deleteMany\":\"deleteManyT_property\",\"updateMany\":\"updateManyT_property\",\"upsert\":\"upsertOneT_property\",\"aggregate\":\"aggregateT_property\",\"groupBy\":\"groupByT_property\"},{\"model\":\"T_rooms\",\"plural\":\"t_rooms\",\"findUnique\":\"findUniqueT_rooms\",\"findUniqueOrThrow\":\"findUniqueT_roomsOrThrow\",\"findFirst\":\"findFirstT_rooms\",\"findFirstOrThrow\":\"findFirstT_roomsOrThrow\",\"findMany\":\"findManyT_rooms\",\"create\":\"createOneT_rooms\",\"createMany\":\"createManyT_rooms\",\"delete\":\"deleteOneT_rooms\",\"update\":\"updateOneT_rooms\",\"deleteMany\":\"deleteManyT_rooms\",\"updateMany\":\"updateManyT_rooms\",\"upsert\":\"upsertOneT_rooms\",\"aggregate\":\"aggregateT_rooms\",\"groupBy\":\"groupByT_rooms\"},{\"model\":\"T_users\",\"plural\":\"t_users\",\"findUnique\":\"findUniqueT_users\",\"findUniqueOrThrow\":\"findUniqueT_usersOrThrow\",\"findFirst\":\"findFirstT_users\",\"findFirstOrThrow\":\"findFirstT_usersOrThrow\",\"findMany\":\"findManyT_users\",\"create\":\"createOneT_users\",\"createMany\":\"createManyT_users\",\"delete\":\"deleteOneT_users\",\"update\":\"updateOneT_users\",\"deleteMany\":\"deleteManyT_users\",\"updateMany\":\"updateManyT_users\",\"upsert\":\"upsertOneT_users\",\"aggregate\":\"aggregateT_users\",\"groupBy\":\"groupByT_users\"},{\"model\":\"Usecoin\",\"plural\":\"usecoins\",\"findUnique\":\"findUniqueUsecoin\",\"findUniqueOrThrow\":\"findUniqueUsecoinOrThrow\",\"findFirst\":\"findFirstUsecoin\",\"findFirstOrThrow\":\"findFirstUsecoinOrThrow\",\"findMany\":\"findManyUsecoin\",\"create\":\"createOneUsecoin\",\"createMany\":\"createManyUsecoin\",\"delete\":\"deleteOneUsecoin\",\"update\":\"updateOneUsecoin\",\"deleteMany\":\"deleteManyUsecoin\",\"updateMany\":\"updateManyUsecoin\",\"upsert\":\"upsertOneUsecoin\",\"aggregate\":\"aggregateUsecoin\",\"groupBy\":\"groupByUsecoin\"},{\"model\":\"Wincoin\",\"plural\":\"wincoins\",\"findUnique\":\"findUniqueWincoin\",\"findUniqueOrThrow\":\"findUniqueWincoinOrThrow\",\"findFirst\":\"findFirstWincoin\",\"findFirstOrThrow\":\"findFirstWincoinOrThrow\",\"findMany\":\"findManyWincoin\",\"create\":\"createOneWincoin\",\"createMany\":\"createManyWincoin\",\"delete\":\"deleteOneWincoin\",\"update\":\"updateOneWincoin\",\"deleteMany\":\"deleteManyWincoin\",\"updateMany\":\"updateManyWincoin\",\"upsert\":\"upsertOneWincoin\",\"aggregate\":\"aggregateWincoin\",\"groupBy\":\"groupByWincoin\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\node\\agent-casino-server\\casino-prisma\\prisma\\prisma\\generated\\fish_eu",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\..\\..\\.env",
    "schemaEnvPath": "..\\..\\..\\..\\.env"
  },
  "relativePath": "..\\..",
  "clientVersion": "4.11.0",
  "engineVersion": "8fde8fef4033376662cad983758335009d522acb",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "dataProxy": false
}
config.dirname = dirname
config.document = dmmf




const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
  rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})


const fish_euClient = getPrismaClient(config)
exports.fish_euClient = fish_euClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma\\prisma\\generated\\fish_eu\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma\\prisma\\generated\\fish_eu\\schema.prisma")
