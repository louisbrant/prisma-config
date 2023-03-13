
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

exports.Prisma.Gambling_game_listScalarFieldEnum = makeEnum({
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
});

exports.Prisma.LotterylogScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Score_poolScalarFieldEnum = makeEnum({
  id: 'id',
  score_pool: 'score_pool',
  change_time: 'change_time'
});

exports.Prisma.ScoretotalScalarFieldEnum = makeEnum({
  serve_id: 'serve_id',
  winScoreTotal: 'winScoreTotal',
  lotteryTotal: 'lotteryTotal',
  updateTime: 'updateTime'
});

exports.Prisma.ScoretotallogScalarFieldEnum = makeEnum({
  id: 'id',
  serve_id: 'serve_id',
  winscore: 'winscore',
  lotteryCount: 'lotteryCount',
  CreateTime: 'CreateTime'
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

exports.Prisma.UseraccountsScalarFieldEnum = makeEnum({
  Id: 'Id',
  freeCount: 'freeCount',
  freeType: 'freeType',
  AddDate: 'AddDate',
  LotteryCount: 'LotteryCount',
  nFreeIndex: 'nFreeIndex',
  gameDict: 'gameDict'
});


exports.Prisma.ModelName = makeEnum({
  Gambling_game_list: 'Gambling_game_list',
  Lotterylog: 'Lotterylog',
  Score_pool: 'Score_pool',
  Scoretotal: 'Scoretotal',
  Scoretotallog: 'Scoretotallog',
  Useraccounts: 'Useraccounts'
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
