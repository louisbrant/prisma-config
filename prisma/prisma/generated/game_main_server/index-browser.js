
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
