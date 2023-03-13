
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
  "prisma\\prisma\\generated\\la_ba",
  "prisma\\generated\\la_ba",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"Gambling_game_list\",\"dbName\":null,\"fields\":[{\"name\":\"nGameID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strGameName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nGameType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nGamblingWaterLevelGold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nGamblingBalanceGold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nGamblingWinPool\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nGamblingUpdateBalanceGold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nGamblingBigWinLevel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nGamblingBigWinLuck\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expectRTP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Lotterylog\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bet\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"line_s\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score_before\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score_linescore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score_win\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score_current\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"free_count_before\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"free_count_win\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"free_count_current\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"result_array\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lotteryTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Score_pool\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score_pool\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Scoretotal\",\"dbName\":null,\"fields\":[{\"name\":\"serve_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winScoreTotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lotteryTotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Scoretotallog\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serve_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winscore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lotteryCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Useraccounts\",\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"freeCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"freeType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AddDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LotteryCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nFreeIndex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameDict\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Gambling_game_list\",\"plural\":\"gambling_game_lists\",\"findUnique\":\"findUniqueGambling_game_list\",\"findUniqueOrThrow\":\"findUniqueGambling_game_listOrThrow\",\"findFirst\":\"findFirstGambling_game_list\",\"findFirstOrThrow\":\"findFirstGambling_game_listOrThrow\",\"findMany\":\"findManyGambling_game_list\",\"create\":\"createOneGambling_game_list\",\"createMany\":\"createManyGambling_game_list\",\"delete\":\"deleteOneGambling_game_list\",\"update\":\"updateOneGambling_game_list\",\"deleteMany\":\"deleteManyGambling_game_list\",\"updateMany\":\"updateManyGambling_game_list\",\"upsert\":\"upsertOneGambling_game_list\",\"aggregate\":\"aggregateGambling_game_list\",\"groupBy\":\"groupByGambling_game_list\"},{\"model\":\"Lotterylog\",\"plural\":\"lotterylogs\",\"findUnique\":\"findUniqueLotterylog\",\"findUniqueOrThrow\":\"findUniqueLotterylogOrThrow\",\"findFirst\":\"findFirstLotterylog\",\"findFirstOrThrow\":\"findFirstLotterylogOrThrow\",\"findMany\":\"findManyLotterylog\",\"create\":\"createOneLotterylog\",\"createMany\":\"createManyLotterylog\",\"delete\":\"deleteOneLotterylog\",\"update\":\"updateOneLotterylog\",\"deleteMany\":\"deleteManyLotterylog\",\"updateMany\":\"updateManyLotterylog\",\"upsert\":\"upsertOneLotterylog\",\"aggregate\":\"aggregateLotterylog\",\"groupBy\":\"groupByLotterylog\"},{\"model\":\"Score_pool\",\"plural\":\"score_pools\",\"findUnique\":\"findUniqueScore_pool\",\"findUniqueOrThrow\":\"findUniqueScore_poolOrThrow\",\"findFirst\":\"findFirstScore_pool\",\"findFirstOrThrow\":\"findFirstScore_poolOrThrow\",\"findMany\":\"findManyScore_pool\",\"create\":\"createOneScore_pool\",\"createMany\":\"createManyScore_pool\",\"delete\":\"deleteOneScore_pool\",\"update\":\"updateOneScore_pool\",\"deleteMany\":\"deleteManyScore_pool\",\"updateMany\":\"updateManyScore_pool\",\"upsert\":\"upsertOneScore_pool\",\"aggregate\":\"aggregateScore_pool\",\"groupBy\":\"groupByScore_pool\"},{\"model\":\"Scoretotal\",\"plural\":\"scoretotals\",\"findUnique\":\"findUniqueScoretotal\",\"findUniqueOrThrow\":\"findUniqueScoretotalOrThrow\",\"findFirst\":\"findFirstScoretotal\",\"findFirstOrThrow\":\"findFirstScoretotalOrThrow\",\"findMany\":\"findManyScoretotal\",\"create\":\"createOneScoretotal\",\"createMany\":\"createManyScoretotal\",\"delete\":\"deleteOneScoretotal\",\"update\":\"updateOneScoretotal\",\"deleteMany\":\"deleteManyScoretotal\",\"updateMany\":\"updateManyScoretotal\",\"upsert\":\"upsertOneScoretotal\",\"aggregate\":\"aggregateScoretotal\",\"groupBy\":\"groupByScoretotal\"},{\"model\":\"Scoretotallog\",\"plural\":\"scoretotallogs\",\"findUnique\":\"findUniqueScoretotallog\",\"findUniqueOrThrow\":\"findUniqueScoretotallogOrThrow\",\"findFirst\":\"findFirstScoretotallog\",\"findFirstOrThrow\":\"findFirstScoretotallogOrThrow\",\"findMany\":\"findManyScoretotallog\",\"create\":\"createOneScoretotallog\",\"createMany\":\"createManyScoretotallog\",\"delete\":\"deleteOneScoretotallog\",\"update\":\"updateOneScoretotallog\",\"deleteMany\":\"deleteManyScoretotallog\",\"updateMany\":\"updateManyScoretotallog\",\"upsert\":\"upsertOneScoretotallog\",\"aggregate\":\"aggregateScoretotallog\",\"groupBy\":\"groupByScoretotallog\"},{\"model\":\"Useraccounts\",\"plural\":\"useraccounts\",\"findUnique\":\"findUniqueUseraccounts\",\"findUniqueOrThrow\":\"findUniqueUseraccountsOrThrow\",\"findFirst\":\"findFirstUseraccounts\",\"findFirstOrThrow\":\"findFirstUseraccountsOrThrow\",\"findMany\":\"findManyUseraccounts\",\"create\":\"createOneUseraccounts\",\"createMany\":\"createManyUseraccounts\",\"delete\":\"deleteOneUseraccounts\",\"update\":\"updateOneUseraccounts\",\"deleteMany\":\"deleteManyUseraccounts\",\"updateMany\":\"updateManyUseraccounts\",\"upsert\":\"upsertOneUseraccounts\",\"aggregate\":\"aggregateUseraccounts\",\"groupBy\":\"groupByUseraccounts\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
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
      "value": "E:\\node\\agent-casino-server\\casino-prisma\\prisma\\prisma\\generated\\la_ba",
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


const la_baClient = getPrismaClient(config)
exports.la_baClient = la_baClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma\\prisma\\generated\\la_ba\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma\\prisma\\generated\\la_ba\\schema.prisma")
