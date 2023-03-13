
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

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.T_accountsScalarFieldEnum = makeEnum({
  account: 'account',
  password: 'password',
  reg_time: 'reg_time'
});

exports.Prisma.T_charge_logScalarFieldEnum = makeEnum({
  id: 'id',
  orderno: 'orderno',
  userid: 'userid',
  gems_num: 'gems_num',
  cost_money: 'cost_money',
  charge_type: 'charge_type',
  time: 'time',
  goldcoin_exchange_rate: 'goldcoin_exchange_rate'
});

exports.Prisma.T_game_result_logScalarFieldEnum = makeEnum({
  id: 'id',
  roomid: 'roomid',
  tax: 'tax',
  data: 'data',
  time: 'time'
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
});

exports.Prisma.T_sceneScalarFieldEnum = makeEnum({
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
});

exports.Prisma.T_sell_logScalarFieldEnum = makeEnum({
  id: 'id',
  userid: 'userid',
  gems_num: 'gems_num',
  seller_id: 'seller_id',
  charge_type: 'charge_type',
  addtime: 'addtime',
  batchno: 'batchno'
});

exports.Prisma.T_session_poolScalarFieldEnum = makeEnum({
  session_id: 'session_id',
  content: 'content'
});

exports.Prisma.T_use_money_logsScalarFieldEnum = makeEnum({
  id: 'id',
  userid: 'userid',
  money: 'money',
  type: 'type',
  create_time: 'create_time',
  op: 'op'
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
  gems: 'gems',
  roomid: 'roomid',
  history: 'history',
  yaoqing: 'yaoqing',
  time: 'time',
  shareroomid: 'shareroomid',
  robot: 'robot'
});

exports.Prisma.T_users_rechange_recordScalarFieldEnum = makeEnum({
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
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
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
