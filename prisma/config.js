const { PrismaClient } = require("./prisma/generated/casino_data");

const MainClient = new PrismaClient();

exports.MainClient = MainClient;
