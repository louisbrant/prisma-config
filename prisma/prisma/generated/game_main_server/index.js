
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
  "prisma\\prisma\\generated\\game_main_server",
  "prisma\\generated\\game_main_server",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.BankbindlistScalarFieldEnum = makeEnum({
  cardId: 'cardId',
  userId: 'userId',
  account: 'account',
  name: 'name',
  bankType: 'bankType'
});

exports.Prisma.BanknameScalarFieldEnum = makeEnum({
  typeId: 'typeId',
  bankName: 'bankName'
});

exports.Prisma.ChatlogScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  toUserId: 'toUserId',
  nickname: 'nickname',
  msg: 'msg',
  isSendEnd: 'isSendEnd',
  addDate: 'addDate'
});

exports.Prisma.Diamond_changelogScalarFieldEnum = makeEnum({
  id: 'id',
  userid: 'userid',
  diamond_before: 'diamond_before',
  diamond_change: 'diamond_change',
  diamond_current: 'diamond_current',
  change_type: 'change_type',
  change_time: 'change_time',
  isOnline: 'isOnline'
});

exports.Prisma.DongshanzaiqiScalarFieldEnum = makeEnum({
  userId: 'userId',
  dcount: 'dcount',
  dtime: 'dtime'
});

exports.Prisma.Game_login_historyScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  gameId: 'gameId',
  serverId: 'serverId',
  encoin: 'encoin',
  login_score: 'login_score',
  logout_score: 'logout_score',
  loginDate: 'loginDate',
  logoutDate: 'logoutDate'
});

exports.Prisma.Game_onlinenumScalarFieldEnum = makeEnum({
  id: 'id',
  gid: 'gid',
  gport: 'gport',
  num: 'num',
  createtime: 'createtime'
});

exports.Prisma.LineoutScalarFieldEnum = makeEnum({
  userId: 'userId'
});

exports.Prisma.Login_historyScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  loginType: 'loginType',
  loginToken: 'loginToken',
  passwordToken: 'passwordToken',
  score: 'score',
  loginDate: 'loginDate',
  loginIp: 'loginIp'
});

exports.Prisma.LogintempScalarFieldEnum = makeEnum({
  id: 'id',
  loginid: 'loginid',
  logincode: 'logincode',
  loginDate: 'loginDate'
});

exports.Prisma.Logout_historyScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  logoutType: 'logoutType',
  score: 'score',
  logoutDate: 'logoutDate',
  logoutIp: 'logoutIp'
});

exports.Prisma.MarkScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  useCoin: 'useCoin',
  winCoin: 'winCoin',
  tax: 'tax',
  gameId: 'gameId',
  serverId: 'serverId',
  balanceTime: 'balanceTime',
  mark: 'mark'
});

exports.Prisma.MsgScalarFieldEnum = makeEnum({
  msgId: 'msgId',
  userId: 'userId',
  winPropId: 'winPropId',
  winPropCount: 'winPropCount',
  winScore: 'winScore',
  matchlogId: 'matchlogId',
  isGetPrize: 'isGetPrize',
  type: 'type',
  AddDate: 'AddDate',
  sendCoinUserId: 'sendCoinUserId',
  nickName: 'nickName'
});

exports.Prisma.NewuseraccountsScalarFieldEnum = makeEnum({
  Id: 'Id',
  Account: 'Account',
  Password: 'Password',
  nickname: 'nickname',
  score: 'score',
  AddDate: 'AddDate',
  LoginCount: 'LoginCount',
  p: 'p',
  diamond: 'diamond',
  giftTicket: 'giftTicket',
  phoneNo: 'phoneNo',
  email: 'email',
  sex: 'sex',
  city: 'city',
  province: 'province',
  country: 'country',
  headimgurl: 'headimgurl',
  language: 'language',
  Robot: 'Robot',
  ChannelType: 'ChannelType',
  official: 'official',
  gametoken: 'gametoken',
  qdid: 'qdid',
  housecard: 'housecard',
  totalRecharge: 'totalRecharge',
  loginip: 'loginip',
  iscanlogin: 'iscanlogin',
  diansha_score: 'diansha_score',
  diansha_gameids: 'diansha_gameids',
  is_vip: 'is_vip',
  g4_uid: 'g4_uid',
  account_using: 'account_using',
  bankPwd: 'bankPwd',
  bankScore: 'bankScore'
});

exports.Prisma.PcdandanScalarFieldEnum = makeEnum({
  userId: 'userId',
  pcdandanId: 'pcdandanId',
  Devid: 'Devid'
});

exports.Prisma.Prop_changelogScalarFieldEnum = makeEnum({
  id: 'id',
  userid: 'userid',
  propid: 'propid',
  change_before: 'change_before',
  change_count: 'change_count',
  change_after: 'change_after',
  insertTime: 'insertTime',
  gameid: 'gameid',
  codeid: 'codeid'
});

exports.Prisma.Prop_itemScalarFieldEnum = makeEnum({
  id: 'id',
  userid: 'userid',
  propid: 'propid',
  propcount: 'propcount'
});

exports.Prisma.RechargeScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  Account: 'Account',
  total_fee: 'total_fee',
  out_trade_no: 'out_trade_no',
  goodsid: 'goodsid',
  state: 'state',
  createTime: 'createTime'
});

exports.Prisma.Recharge_firstScalarFieldEnum = makeEnum({
  userId: 'userId',
  FIRST: 'FIRST',
  anyFirst: 'anyFirst',
  goods1: 'goods1',
  goods2: 'goods2',
  goods3: 'goods3',
  goods4: 'goods4',
  goods5: 'goods5',
  daytime: 'daytime'
});

exports.Prisma.RechargelogScalarFieldEnum = makeEnum({
  id: 'id',
  adminid: 'adminid',
  userid: 'userid',
  createtime: 'createtime',
  czfee: 'czfee',
  oldfee: 'oldfee',
  newfee: 'newfee',
  type: 'type'
});

exports.Prisma.ReturnscorelogScalarFieldEnum = makeEnum({
  id: 'id',
  msg: 'msg',
  ret: 'ret',
  createtime: 'createtime'
});

exports.Prisma.Score_changelogScalarFieldEnum = makeEnum({
  id: 'id',
  userid: 'userid',
  ret: 'ret',
  createtime: 'createtime'
});

exports.Prisma.ScoreoutScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  score: 'score',
  coin: 'coin',
  tax: 'tax',
  addDate: 'addDate',
  state: 'state',
  outDate: 'outDate',
  cardType: 'cardType',
  cardId: 'cardId',
  out_trade_no: 'out_trade_no',
  zfb_account: 'zfb_account',
  zfb_name: 'zfb_name',
  remark: 'remark'
});

exports.Prisma.SendcoinlogScalarFieldEnum = makeEnum({
  id: 'id',
  userid: 'userid',
  getcoinuserid: 'getcoinuserid',
  sendcoin: 'sendcoin',
  addtime: 'addtime'
});

exports.Prisma.Server_logScalarFieldEnum = makeEnum({
  id: 'id',
  txt: 'txt',
  status: 'status',
  createtime: 'createtime',
  updatetime: 'updatetime'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TempadddiamondScalarFieldEnum = makeEnum({
  userId: 'userId',
  score: 'score',
  change_type: 'change_type'
});

exports.Prisma.TempaddscoreScalarFieldEnum = makeEnum({
  userId: 'userId',
  score: 'score',
  change_type: 'change_type'
});

exports.Prisma.Ticket_changelogScalarFieldEnum = makeEnum({
  userid: 'userid',
  score_before: 'score_before',
  score_change: 'score_change',
  score_current: 'score_current',
  change_type: 'change_type',
  change_time: 'change_time',
  isOnline: 'isOnline'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.User_adminScalarFieldEnum = makeEnum({
  id: 'id',
  user: 'user',
  password: 'password',
  ip: 'ip',
  time: 'time',
  userflag: 'userflag'
});

exports.Prisma.UserinfoScalarFieldEnum = makeEnum({
  userId: 'userId',
  Devid: 'Devid',
  firstexchange: 'firstexchange',
  zhifubao: 'zhifubao',
  zhifubaoName: 'zhifubaoName'
});

exports.Prisma.Userinfo_impScalarFieldEnum = makeEnum({
  userId: 'userId',
  score: 'score',
  diamond: 'diamond',
  giftTicket: 'giftTicket'
});


exports.Prisma.ModelName = makeEnum({
  Bankbindlist: 'Bankbindlist',
  Bankname: 'Bankname',
  Chatlog: 'Chatlog',
  Diamond_changelog: 'Diamond_changelog',
  Dongshanzaiqi: 'Dongshanzaiqi',
  Game_login_history: 'Game_login_history',
  Game_onlinenum: 'Game_onlinenum',
  Lineout: 'Lineout',
  Login_history: 'Login_history',
  Logintemp: 'Logintemp',
  Logout_history: 'Logout_history',
  Mark: 'Mark',
  Msg: 'Msg',
  Newuseraccounts: 'Newuseraccounts',
  Pcdandan: 'Pcdandan',
  Prop_changelog: 'Prop_changelog',
  Prop_item: 'Prop_item',
  Recharge: 'Recharge',
  Recharge_first: 'Recharge_first',
  Rechargelog: 'Rechargelog',
  Returnscorelog: 'Returnscorelog',
  Score_changelog: 'Score_changelog',
  Scoreout: 'Scoreout',
  Sendcoinlog: 'Sendcoinlog',
  Server_log: 'Server_log',
  Tempadddiamond: 'Tempadddiamond',
  Tempaddscore: 'Tempaddscore',
  Ticket_changelog: 'Ticket_changelog',
  User_admin: 'User_admin',
  Userinfo: 'Userinfo',
  Userinfo_imp: 'Userinfo_imp'
});

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"Bankbindlist\",\"dbName\":null,\"fields\":[{\"name\":\"cardId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bankType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Bankname\",\"dbName\":null,\"fields\":[{\"name\":\"typeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bankName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Chatlog\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nickname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"msg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isSendEnd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Diamond_changelog\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diamond_before\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diamond_change\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diamond_current\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isOnline\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Dongshanzaiqi\",\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dcount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dtime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Game_login_history\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serverId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"encoin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"login_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logout_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logoutDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Game_onlinenum\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gport\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createtime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Lineout\",\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Login_history\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginIp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Logintemp\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logincode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Logout_history\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logoutType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logoutDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logoutIp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Mark\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"useCoin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winCoin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tax\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serverId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balanceTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Msg\",\"dbName\":null,\"fields\":[{\"name\":\"msgId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winPropId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winPropCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"matchlogId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isGetPrize\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AddDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sendCoinUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nickName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Newuseraccounts\",\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nickname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AddDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LoginCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diamond\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"giftTicket\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"province\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"headimgurl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"language\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Robot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChannelType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"official\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gametoken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qdid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"housecard\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalRecharge\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iscanlogin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diansha_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diansha_gameids\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_vip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"g4_uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_using\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bankPwd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bankScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Pcdandan\",\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pcdandanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Devid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Prop_changelog\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change_before\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change_after\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insertTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codeid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Prop_item\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propcount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Recharge\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_fee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"out_trade_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"goodsid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Recharge_first\",\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FIRST\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anyFirst\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"goods1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"goods2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"goods3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"goods4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"goods5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daytime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Rechargelog\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adminid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createtime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"czfee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oldfee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newfee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Returnscorelog\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"msg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ret\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createtime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Score_changelog\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ret\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createtime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Scoreout\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tax\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"outDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cardType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cardId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"out_trade_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zfb_account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zfb_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Sendcoinlog\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"getcoinuserid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sendcoin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addtime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Server_log\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createtime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatetime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Tempadddiamond\",\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Tempaddscore\",\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Ticket_changelog\",\"dbName\":null,\"fields\":[{\"name\":\"userid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score_before\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score_change\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score_current\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isOnline\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"User_admin\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userflag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Userinfo\",\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Devid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstexchange\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zhifubao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zhifubaoName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Userinfo_imp\",\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diamond\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"giftTicket\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Bankbindlist\",\"plural\":\"bankbindlists\",\"findUnique\":\"findUniqueBankbindlist\",\"findUniqueOrThrow\":\"findUniqueBankbindlistOrThrow\",\"findFirst\":\"findFirstBankbindlist\",\"findFirstOrThrow\":\"findFirstBankbindlistOrThrow\",\"findMany\":\"findManyBankbindlist\",\"create\":\"createOneBankbindlist\",\"createMany\":\"createManyBankbindlist\",\"delete\":\"deleteOneBankbindlist\",\"update\":\"updateOneBankbindlist\",\"deleteMany\":\"deleteManyBankbindlist\",\"updateMany\":\"updateManyBankbindlist\",\"upsert\":\"upsertOneBankbindlist\",\"aggregate\":\"aggregateBankbindlist\",\"groupBy\":\"groupByBankbindlist\"},{\"model\":\"Bankname\",\"plural\":\"banknames\",\"findUnique\":\"findUniqueBankname\",\"findUniqueOrThrow\":\"findUniqueBanknameOrThrow\",\"findFirst\":\"findFirstBankname\",\"findFirstOrThrow\":\"findFirstBanknameOrThrow\",\"findMany\":\"findManyBankname\",\"create\":\"createOneBankname\",\"createMany\":\"createManyBankname\",\"delete\":\"deleteOneBankname\",\"update\":\"updateOneBankname\",\"deleteMany\":\"deleteManyBankname\",\"updateMany\":\"updateManyBankname\",\"upsert\":\"upsertOneBankname\",\"aggregate\":\"aggregateBankname\",\"groupBy\":\"groupByBankname\"},{\"model\":\"Chatlog\",\"plural\":\"chatlogs\",\"findUnique\":\"findUniqueChatlog\",\"findUniqueOrThrow\":\"findUniqueChatlogOrThrow\",\"findFirst\":\"findFirstChatlog\",\"findFirstOrThrow\":\"findFirstChatlogOrThrow\",\"findMany\":\"findManyChatlog\",\"create\":\"createOneChatlog\",\"createMany\":\"createManyChatlog\",\"delete\":\"deleteOneChatlog\",\"update\":\"updateOneChatlog\",\"deleteMany\":\"deleteManyChatlog\",\"updateMany\":\"updateManyChatlog\",\"upsert\":\"upsertOneChatlog\",\"aggregate\":\"aggregateChatlog\",\"groupBy\":\"groupByChatlog\"},{\"model\":\"Diamond_changelog\",\"plural\":\"diamond_changelogs\",\"findUnique\":\"findUniqueDiamond_changelog\",\"findUniqueOrThrow\":\"findUniqueDiamond_changelogOrThrow\",\"findFirst\":\"findFirstDiamond_changelog\",\"findFirstOrThrow\":\"findFirstDiamond_changelogOrThrow\",\"findMany\":\"findManyDiamond_changelog\",\"create\":\"createOneDiamond_changelog\",\"createMany\":\"createManyDiamond_changelog\",\"delete\":\"deleteOneDiamond_changelog\",\"update\":\"updateOneDiamond_changelog\",\"deleteMany\":\"deleteManyDiamond_changelog\",\"updateMany\":\"updateManyDiamond_changelog\",\"upsert\":\"upsertOneDiamond_changelog\",\"aggregate\":\"aggregateDiamond_changelog\",\"groupBy\":\"groupByDiamond_changelog\"},{\"model\":\"Dongshanzaiqi\",\"plural\":\"dongshanzaiqis\",\"findUnique\":\"findUniqueDongshanzaiqi\",\"findUniqueOrThrow\":\"findUniqueDongshanzaiqiOrThrow\",\"findFirst\":\"findFirstDongshanzaiqi\",\"findFirstOrThrow\":\"findFirstDongshanzaiqiOrThrow\",\"findMany\":\"findManyDongshanzaiqi\",\"create\":\"createOneDongshanzaiqi\",\"createMany\":\"createManyDongshanzaiqi\",\"delete\":\"deleteOneDongshanzaiqi\",\"update\":\"updateOneDongshanzaiqi\",\"deleteMany\":\"deleteManyDongshanzaiqi\",\"updateMany\":\"updateManyDongshanzaiqi\",\"upsert\":\"upsertOneDongshanzaiqi\",\"aggregate\":\"aggregateDongshanzaiqi\",\"groupBy\":\"groupByDongshanzaiqi\"},{\"model\":\"Game_login_history\",\"plural\":\"game_login_histories\",\"findUnique\":\"findUniqueGame_login_history\",\"findUniqueOrThrow\":\"findUniqueGame_login_historyOrThrow\",\"findFirst\":\"findFirstGame_login_history\",\"findFirstOrThrow\":\"findFirstGame_login_historyOrThrow\",\"findMany\":\"findManyGame_login_history\",\"create\":\"createOneGame_login_history\",\"createMany\":\"createManyGame_login_history\",\"delete\":\"deleteOneGame_login_history\",\"update\":\"updateOneGame_login_history\",\"deleteMany\":\"deleteManyGame_login_history\",\"updateMany\":\"updateManyGame_login_history\",\"upsert\":\"upsertOneGame_login_history\",\"aggregate\":\"aggregateGame_login_history\",\"groupBy\":\"groupByGame_login_history\"},{\"model\":\"Game_onlinenum\",\"plural\":\"game_onlinenums\",\"findUnique\":\"findUniqueGame_onlinenum\",\"findUniqueOrThrow\":\"findUniqueGame_onlinenumOrThrow\",\"findFirst\":\"findFirstGame_onlinenum\",\"findFirstOrThrow\":\"findFirstGame_onlinenumOrThrow\",\"findMany\":\"findManyGame_onlinenum\",\"create\":\"createOneGame_onlinenum\",\"createMany\":\"createManyGame_onlinenum\",\"delete\":\"deleteOneGame_onlinenum\",\"update\":\"updateOneGame_onlinenum\",\"deleteMany\":\"deleteManyGame_onlinenum\",\"updateMany\":\"updateManyGame_onlinenum\",\"upsert\":\"upsertOneGame_onlinenum\",\"aggregate\":\"aggregateGame_onlinenum\",\"groupBy\":\"groupByGame_onlinenum\"},{\"model\":\"Lineout\",\"plural\":\"lineouts\",\"findUnique\":\"findUniqueLineout\",\"findUniqueOrThrow\":\"findUniqueLineoutOrThrow\",\"findFirst\":\"findFirstLineout\",\"findFirstOrThrow\":\"findFirstLineoutOrThrow\",\"findMany\":\"findManyLineout\",\"create\":\"createOneLineout\",\"createMany\":\"createManyLineout\",\"delete\":\"deleteOneLineout\",\"update\":\"updateOneLineout\",\"deleteMany\":\"deleteManyLineout\",\"updateMany\":\"updateManyLineout\",\"upsert\":\"upsertOneLineout\",\"aggregate\":\"aggregateLineout\",\"groupBy\":\"groupByLineout\"},{\"model\":\"Login_history\",\"plural\":\"login_histories\",\"findUnique\":\"findUniqueLogin_history\",\"findUniqueOrThrow\":\"findUniqueLogin_historyOrThrow\",\"findFirst\":\"findFirstLogin_history\",\"findFirstOrThrow\":\"findFirstLogin_historyOrThrow\",\"findMany\":\"findManyLogin_history\",\"create\":\"createOneLogin_history\",\"createMany\":\"createManyLogin_history\",\"delete\":\"deleteOneLogin_history\",\"update\":\"updateOneLogin_history\",\"deleteMany\":\"deleteManyLogin_history\",\"updateMany\":\"updateManyLogin_history\",\"upsert\":\"upsertOneLogin_history\",\"aggregate\":\"aggregateLogin_history\",\"groupBy\":\"groupByLogin_history\"},{\"model\":\"Logintemp\",\"plural\":\"logintemps\",\"findUnique\":\"findUniqueLogintemp\",\"findUniqueOrThrow\":\"findUniqueLogintempOrThrow\",\"findFirst\":\"findFirstLogintemp\",\"findFirstOrThrow\":\"findFirstLogintempOrThrow\",\"findMany\":\"findManyLogintemp\",\"create\":\"createOneLogintemp\",\"createMany\":\"createManyLogintemp\",\"delete\":\"deleteOneLogintemp\",\"update\":\"updateOneLogintemp\",\"deleteMany\":\"deleteManyLogintemp\",\"updateMany\":\"updateManyLogintemp\",\"upsert\":\"upsertOneLogintemp\",\"aggregate\":\"aggregateLogintemp\",\"groupBy\":\"groupByLogintemp\"},{\"model\":\"Logout_history\",\"plural\":\"logout_histories\",\"findUnique\":\"findUniqueLogout_history\",\"findUniqueOrThrow\":\"findUniqueLogout_historyOrThrow\",\"findFirst\":\"findFirstLogout_history\",\"findFirstOrThrow\":\"findFirstLogout_historyOrThrow\",\"findMany\":\"findManyLogout_history\",\"create\":\"createOneLogout_history\",\"createMany\":\"createManyLogout_history\",\"delete\":\"deleteOneLogout_history\",\"update\":\"updateOneLogout_history\",\"deleteMany\":\"deleteManyLogout_history\",\"updateMany\":\"updateManyLogout_history\",\"upsert\":\"upsertOneLogout_history\",\"aggregate\":\"aggregateLogout_history\",\"groupBy\":\"groupByLogout_history\"},{\"model\":\"Mark\",\"plural\":\"marks\",\"findUnique\":\"findUniqueMark\",\"findUniqueOrThrow\":\"findUniqueMarkOrThrow\",\"findFirst\":\"findFirstMark\",\"findFirstOrThrow\":\"findFirstMarkOrThrow\",\"findMany\":\"findManyMark\",\"create\":\"createOneMark\",\"createMany\":\"createManyMark\",\"delete\":\"deleteOneMark\",\"update\":\"updateOneMark\",\"deleteMany\":\"deleteManyMark\",\"updateMany\":\"updateManyMark\",\"upsert\":\"upsertOneMark\",\"aggregate\":\"aggregateMark\",\"groupBy\":\"groupByMark\"},{\"model\":\"Msg\",\"plural\":\"msgs\",\"findUnique\":\"findUniqueMsg\",\"findUniqueOrThrow\":\"findUniqueMsgOrThrow\",\"findFirst\":\"findFirstMsg\",\"findFirstOrThrow\":\"findFirstMsgOrThrow\",\"findMany\":\"findManyMsg\",\"create\":\"createOneMsg\",\"createMany\":\"createManyMsg\",\"delete\":\"deleteOneMsg\",\"update\":\"updateOneMsg\",\"deleteMany\":\"deleteManyMsg\",\"updateMany\":\"updateManyMsg\",\"upsert\":\"upsertOneMsg\",\"aggregate\":\"aggregateMsg\",\"groupBy\":\"groupByMsg\"},{\"model\":\"Newuseraccounts\",\"plural\":\"newuseraccounts\",\"findUnique\":\"findUniqueNewuseraccounts\",\"findUniqueOrThrow\":\"findUniqueNewuseraccountsOrThrow\",\"findFirst\":\"findFirstNewuseraccounts\",\"findFirstOrThrow\":\"findFirstNewuseraccountsOrThrow\",\"findMany\":\"findManyNewuseraccounts\",\"create\":\"createOneNewuseraccounts\",\"createMany\":\"createManyNewuseraccounts\",\"delete\":\"deleteOneNewuseraccounts\",\"update\":\"updateOneNewuseraccounts\",\"deleteMany\":\"deleteManyNewuseraccounts\",\"updateMany\":\"updateManyNewuseraccounts\",\"upsert\":\"upsertOneNewuseraccounts\",\"aggregate\":\"aggregateNewuseraccounts\",\"groupBy\":\"groupByNewuseraccounts\"},{\"model\":\"Pcdandan\",\"plural\":\"pcdandans\",\"findUnique\":\"findUniquePcdandan\",\"findUniqueOrThrow\":\"findUniquePcdandanOrThrow\",\"findFirst\":\"findFirstPcdandan\",\"findFirstOrThrow\":\"findFirstPcdandanOrThrow\",\"findMany\":\"findManyPcdandan\",\"create\":\"createOnePcdandan\",\"createMany\":\"createManyPcdandan\",\"delete\":\"deleteOnePcdandan\",\"update\":\"updateOnePcdandan\",\"deleteMany\":\"deleteManyPcdandan\",\"updateMany\":\"updateManyPcdandan\",\"upsert\":\"upsertOnePcdandan\",\"aggregate\":\"aggregatePcdandan\",\"groupBy\":\"groupByPcdandan\"},{\"model\":\"Prop_changelog\",\"plural\":\"prop_changelogs\",\"findUnique\":\"findUniqueProp_changelog\",\"findUniqueOrThrow\":\"findUniqueProp_changelogOrThrow\",\"findFirst\":\"findFirstProp_changelog\",\"findFirstOrThrow\":\"findFirstProp_changelogOrThrow\",\"findMany\":\"findManyProp_changelog\",\"create\":\"createOneProp_changelog\",\"createMany\":\"createManyProp_changelog\",\"delete\":\"deleteOneProp_changelog\",\"update\":\"updateOneProp_changelog\",\"deleteMany\":\"deleteManyProp_changelog\",\"updateMany\":\"updateManyProp_changelog\",\"upsert\":\"upsertOneProp_changelog\",\"aggregate\":\"aggregateProp_changelog\",\"groupBy\":\"groupByProp_changelog\"},{\"model\":\"Prop_item\",\"plural\":\"prop_items\",\"findUnique\":\"findUniqueProp_item\",\"findUniqueOrThrow\":\"findUniqueProp_itemOrThrow\",\"findFirst\":\"findFirstProp_item\",\"findFirstOrThrow\":\"findFirstProp_itemOrThrow\",\"findMany\":\"findManyProp_item\",\"create\":\"createOneProp_item\",\"createMany\":\"createManyProp_item\",\"delete\":\"deleteOneProp_item\",\"update\":\"updateOneProp_item\",\"deleteMany\":\"deleteManyProp_item\",\"updateMany\":\"updateManyProp_item\",\"upsert\":\"upsertOneProp_item\",\"aggregate\":\"aggregateProp_item\",\"groupBy\":\"groupByProp_item\"},{\"model\":\"Recharge\",\"plural\":\"recharges\",\"findUnique\":\"findUniqueRecharge\",\"findUniqueOrThrow\":\"findUniqueRechargeOrThrow\",\"findFirst\":\"findFirstRecharge\",\"findFirstOrThrow\":\"findFirstRechargeOrThrow\",\"findMany\":\"findManyRecharge\",\"create\":\"createOneRecharge\",\"createMany\":\"createManyRecharge\",\"delete\":\"deleteOneRecharge\",\"update\":\"updateOneRecharge\",\"deleteMany\":\"deleteManyRecharge\",\"updateMany\":\"updateManyRecharge\",\"upsert\":\"upsertOneRecharge\",\"aggregate\":\"aggregateRecharge\",\"groupBy\":\"groupByRecharge\"},{\"model\":\"Recharge_first\",\"plural\":\"recharge_firsts\",\"findUnique\":\"findUniqueRecharge_first\",\"findUniqueOrThrow\":\"findUniqueRecharge_firstOrThrow\",\"findFirst\":\"findFirstRecharge_first\",\"findFirstOrThrow\":\"findFirstRecharge_firstOrThrow\",\"findMany\":\"findManyRecharge_first\",\"create\":\"createOneRecharge_first\",\"createMany\":\"createManyRecharge_first\",\"delete\":\"deleteOneRecharge_first\",\"update\":\"updateOneRecharge_first\",\"deleteMany\":\"deleteManyRecharge_first\",\"updateMany\":\"updateManyRecharge_first\",\"upsert\":\"upsertOneRecharge_first\",\"aggregate\":\"aggregateRecharge_first\",\"groupBy\":\"groupByRecharge_first\"},{\"model\":\"Rechargelog\",\"plural\":\"rechargelogs\",\"findUnique\":\"findUniqueRechargelog\",\"findUniqueOrThrow\":\"findUniqueRechargelogOrThrow\",\"findFirst\":\"findFirstRechargelog\",\"findFirstOrThrow\":\"findFirstRechargelogOrThrow\",\"findMany\":\"findManyRechargelog\",\"create\":\"createOneRechargelog\",\"createMany\":\"createManyRechargelog\",\"delete\":\"deleteOneRechargelog\",\"update\":\"updateOneRechargelog\",\"deleteMany\":\"deleteManyRechargelog\",\"updateMany\":\"updateManyRechargelog\",\"upsert\":\"upsertOneRechargelog\",\"aggregate\":\"aggregateRechargelog\",\"groupBy\":\"groupByRechargelog\"},{\"model\":\"Returnscorelog\",\"plural\":\"returnscorelogs\",\"findUnique\":\"findUniqueReturnscorelog\",\"findUniqueOrThrow\":\"findUniqueReturnscorelogOrThrow\",\"findFirst\":\"findFirstReturnscorelog\",\"findFirstOrThrow\":\"findFirstReturnscorelogOrThrow\",\"findMany\":\"findManyReturnscorelog\",\"create\":\"createOneReturnscorelog\",\"createMany\":\"createManyReturnscorelog\",\"delete\":\"deleteOneReturnscorelog\",\"update\":\"updateOneReturnscorelog\",\"deleteMany\":\"deleteManyReturnscorelog\",\"updateMany\":\"updateManyReturnscorelog\",\"upsert\":\"upsertOneReturnscorelog\",\"aggregate\":\"aggregateReturnscorelog\",\"groupBy\":\"groupByReturnscorelog\"},{\"model\":\"Score_changelog\",\"plural\":\"score_changelogs\",\"findUnique\":\"findUniqueScore_changelog\",\"findUniqueOrThrow\":\"findUniqueScore_changelogOrThrow\",\"findFirst\":\"findFirstScore_changelog\",\"findFirstOrThrow\":\"findFirstScore_changelogOrThrow\",\"findMany\":\"findManyScore_changelog\",\"create\":\"createOneScore_changelog\",\"createMany\":\"createManyScore_changelog\",\"delete\":\"deleteOneScore_changelog\",\"update\":\"updateOneScore_changelog\",\"deleteMany\":\"deleteManyScore_changelog\",\"updateMany\":\"updateManyScore_changelog\",\"upsert\":\"upsertOneScore_changelog\",\"aggregate\":\"aggregateScore_changelog\",\"groupBy\":\"groupByScore_changelog\"},{\"model\":\"Scoreout\",\"plural\":\"scoreouts\",\"findUnique\":\"findUniqueScoreout\",\"findUniqueOrThrow\":\"findUniqueScoreoutOrThrow\",\"findFirst\":\"findFirstScoreout\",\"findFirstOrThrow\":\"findFirstScoreoutOrThrow\",\"findMany\":\"findManyScoreout\",\"create\":\"createOneScoreout\",\"createMany\":\"createManyScoreout\",\"delete\":\"deleteOneScoreout\",\"update\":\"updateOneScoreout\",\"deleteMany\":\"deleteManyScoreout\",\"updateMany\":\"updateManyScoreout\",\"upsert\":\"upsertOneScoreout\",\"aggregate\":\"aggregateScoreout\",\"groupBy\":\"groupByScoreout\"},{\"model\":\"Sendcoinlog\",\"plural\":\"sendcoinlogs\",\"findUnique\":\"findUniqueSendcoinlog\",\"findUniqueOrThrow\":\"findUniqueSendcoinlogOrThrow\",\"findFirst\":\"findFirstSendcoinlog\",\"findFirstOrThrow\":\"findFirstSendcoinlogOrThrow\",\"findMany\":\"findManySendcoinlog\",\"create\":\"createOneSendcoinlog\",\"createMany\":\"createManySendcoinlog\",\"delete\":\"deleteOneSendcoinlog\",\"update\":\"updateOneSendcoinlog\",\"deleteMany\":\"deleteManySendcoinlog\",\"updateMany\":\"updateManySendcoinlog\",\"upsert\":\"upsertOneSendcoinlog\",\"aggregate\":\"aggregateSendcoinlog\",\"groupBy\":\"groupBySendcoinlog\"},{\"model\":\"Server_log\",\"plural\":\"server_logs\",\"findUnique\":\"findUniqueServer_log\",\"findUniqueOrThrow\":\"findUniqueServer_logOrThrow\",\"findFirst\":\"findFirstServer_log\",\"findFirstOrThrow\":\"findFirstServer_logOrThrow\",\"findMany\":\"findManyServer_log\",\"create\":\"createOneServer_log\",\"createMany\":\"createManyServer_log\",\"delete\":\"deleteOneServer_log\",\"update\":\"updateOneServer_log\",\"deleteMany\":\"deleteManyServer_log\",\"updateMany\":\"updateManyServer_log\",\"upsert\":\"upsertOneServer_log\",\"aggregate\":\"aggregateServer_log\",\"groupBy\":\"groupByServer_log\"},{\"model\":\"Tempadddiamond\",\"plural\":\"tempadddiamonds\",\"findUnique\":\"findUniqueTempadddiamond\",\"findUniqueOrThrow\":\"findUniqueTempadddiamondOrThrow\",\"findFirst\":\"findFirstTempadddiamond\",\"findFirstOrThrow\":\"findFirstTempadddiamondOrThrow\",\"findMany\":\"findManyTempadddiamond\",\"create\":\"createOneTempadddiamond\",\"createMany\":\"createManyTempadddiamond\",\"delete\":\"deleteOneTempadddiamond\",\"update\":\"updateOneTempadddiamond\",\"deleteMany\":\"deleteManyTempadddiamond\",\"updateMany\":\"updateManyTempadddiamond\",\"upsert\":\"upsertOneTempadddiamond\",\"aggregate\":\"aggregateTempadddiamond\",\"groupBy\":\"groupByTempadddiamond\"},{\"model\":\"Tempaddscore\",\"plural\":\"tempaddscores\",\"findUnique\":\"findUniqueTempaddscore\",\"findUniqueOrThrow\":\"findUniqueTempaddscoreOrThrow\",\"findFirst\":\"findFirstTempaddscore\",\"findFirstOrThrow\":\"findFirstTempaddscoreOrThrow\",\"findMany\":\"findManyTempaddscore\",\"create\":\"createOneTempaddscore\",\"createMany\":\"createManyTempaddscore\",\"delete\":\"deleteOneTempaddscore\",\"update\":\"updateOneTempaddscore\",\"deleteMany\":\"deleteManyTempaddscore\",\"updateMany\":\"updateManyTempaddscore\",\"upsert\":\"upsertOneTempaddscore\",\"aggregate\":\"aggregateTempaddscore\",\"groupBy\":\"groupByTempaddscore\"},{\"model\":\"Ticket_changelog\",\"plural\":\"ticket_changelogs\",\"findUnique\":\"findUniqueTicket_changelog\",\"findUniqueOrThrow\":\"findUniqueTicket_changelogOrThrow\",\"findFirst\":\"findFirstTicket_changelog\",\"findFirstOrThrow\":\"findFirstTicket_changelogOrThrow\",\"findMany\":\"findManyTicket_changelog\",\"create\":\"createOneTicket_changelog\",\"createMany\":\"createManyTicket_changelog\",\"delete\":\"deleteOneTicket_changelog\",\"update\":\"updateOneTicket_changelog\",\"deleteMany\":\"deleteManyTicket_changelog\",\"updateMany\":\"updateManyTicket_changelog\",\"upsert\":\"upsertOneTicket_changelog\",\"aggregate\":\"aggregateTicket_changelog\",\"groupBy\":\"groupByTicket_changelog\"},{\"model\":\"User_admin\",\"plural\":\"user_admins\",\"findUnique\":\"findUniqueUser_admin\",\"findUniqueOrThrow\":\"findUniqueUser_adminOrThrow\",\"findFirst\":\"findFirstUser_admin\",\"findFirstOrThrow\":\"findFirstUser_adminOrThrow\",\"findMany\":\"findManyUser_admin\",\"create\":\"createOneUser_admin\",\"createMany\":\"createManyUser_admin\",\"delete\":\"deleteOneUser_admin\",\"update\":\"updateOneUser_admin\",\"deleteMany\":\"deleteManyUser_admin\",\"updateMany\":\"updateManyUser_admin\",\"upsert\":\"upsertOneUser_admin\",\"aggregate\":\"aggregateUser_admin\",\"groupBy\":\"groupByUser_admin\"},{\"model\":\"Userinfo\",\"plural\":\"userinfos\",\"findUnique\":\"findUniqueUserinfo\",\"findUniqueOrThrow\":\"findUniqueUserinfoOrThrow\",\"findFirst\":\"findFirstUserinfo\",\"findFirstOrThrow\":\"findFirstUserinfoOrThrow\",\"findMany\":\"findManyUserinfo\",\"create\":\"createOneUserinfo\",\"createMany\":\"createManyUserinfo\",\"delete\":\"deleteOneUserinfo\",\"update\":\"updateOneUserinfo\",\"deleteMany\":\"deleteManyUserinfo\",\"updateMany\":\"updateManyUserinfo\",\"upsert\":\"upsertOneUserinfo\",\"aggregate\":\"aggregateUserinfo\",\"groupBy\":\"groupByUserinfo\"},{\"model\":\"Userinfo_imp\",\"plural\":\"userinfo_imps\",\"findUnique\":\"findUniqueUserinfo_imp\",\"findUniqueOrThrow\":\"findUniqueUserinfo_impOrThrow\",\"findFirst\":\"findFirstUserinfo_imp\",\"findFirstOrThrow\":\"findFirstUserinfo_impOrThrow\",\"findMany\":\"findManyUserinfo_imp\",\"create\":\"createOneUserinfo_imp\",\"createMany\":\"createManyUserinfo_imp\",\"delete\":\"deleteOneUserinfo_imp\",\"update\":\"updateOneUserinfo_imp\",\"deleteMany\":\"deleteManyUserinfo_imp\",\"updateMany\":\"updateManyUserinfo_imp\",\"upsert\":\"upsertOneUserinfo_imp\",\"aggregate\":\"aggregateUserinfo_imp\",\"groupBy\":\"groupByUserinfo_imp\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
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
      "value": "E:\\node\\agent-casino-server\\casino-prisma\\prisma\\prisma\\generated\\game_main_server",
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


const game_main_serverClient = getPrismaClient(config)
exports.game_main_serverClient = game_main_serverClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma\\prisma\\generated\\game_main_server\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma\\prisma\\generated\\game_main_server\\schema.prisma")
