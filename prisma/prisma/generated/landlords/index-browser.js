
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

exports.Prisma.ConfigScalarFieldEnum = makeEnum({
  id: 'id',
  flag: 'flag',
  value: 'value',
  type: 'type',
  award: 'award'
});

exports.Prisma.DowncoinlogScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Log_baomingScalarFieldEnum = makeEnum({
  uid: 'uid',
  allc: 'allc',
  lostc: 'lostc',
  play: 'play',
  win_all: 'win_all',
  dizhu_num: 'dizhu_num',
  win_dizhu: 'win_dizhu',
  bm_score: 'bm_score',
  result: 'result'
});

exports.Prisma.Log_baoming_saveScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Log_tempScalarFieldEnum = makeEnum({
  id: 'id',
  uid: 'uid',
  nick_name: 'nick_name',
  head_url: 'head_url',
  createtime: 'createtime',
  isdizhu: 'isdizhu',
  iswin: 'iswin',
  game_dict: 'game_dict'
});

exports.Prisma.Log_totalScalarFieldEnum = makeEnum({
  id: 'id',
  uid: 'uid',
  play: 'play',
  win_all: 'win_all',
  dizhu_num: 'dizhu_num',
  win_dizhu: 'win_dizhu',
  bm_score: 'bm_score'
});

exports.Prisma.MatchlogScalarFieldEnum = makeEnum({
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
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  Config: 'Config',
  Downcoinlog: 'Downcoinlog',
  Log_baoming: 'Log_baoming',
  Log_baoming_save: 'Log_baoming_save',
  Log_temp: 'Log_temp',
  Log_total: 'Log_total',
  Matchlog: 'Matchlog'
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
