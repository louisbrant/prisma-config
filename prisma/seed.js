const { PrismaClient } = require('./prisma/generated/casino_data')

const prisma = new PrismaClient()
const gameListData = [
  {
    eGameName: "Space Shooter",
    cGameName: '太空射手',
    type: 1,
    json: JSON.stringify({
      normal: [
        {
          server: 1,
          bet: 1,
          entryCoin: 100,
          config_ip: '72.46.128.50',
          port: 13131
        },
        {
          server: 2,
          bet: 5,
          entryCoin: 1000,
          config_ip: '72.46.128.50',
          port: 13132
        },
        {
          server: 3,
          bet: 10,
          entryCoin: 5000,
          config_ip: '72.46.128.50',
          port: 13133
        }
      ]
    })
  },
  {
    eGameName: "Eu fish",
    cGameName: '欧盟鱼类',
    type: 1,
    json: JSON.stringify({
      normal: [
        {
          server: 1,
          bet: 1,
          entryCoin: 100,
          config_ip: '72.46.128.50',
          port: 13921
        },
        {
          server: 2,
          bet: 5,
          entryCoin: 1000,
          config_ip: '72.46.128.50',
          port: 13922
        },
        {
          server: 3,
          bet: 10,
          entryCoin: 5000,
          config_ip: '72.46.128.50',
          port: 13923
        }
      ]
    })
  },
  {
    eGameName: "Shanghai Tycoon",
    cGameName: '上海零零发',
    type: 1,
    json: JSON.stringify({
      serverId: 15049,
      normal: [
        {
          server: 1,
          bet: 1,
          Match: 0,
          entryCoin: 1000,
          gift: 0,
          ip: '72.46.128.50',
          port: 15049
        }
      ]
    })
  },
  {
    eGameName: "Multiplayer 5 Cards Poker",
    cGameName: '百人场牛牛',
    type: 1,
    json: JSON.stringify({
      serverId: 16019,
      normal: [
        {
          server: 1,
          bet: 1,
          Match: 0,
          entryCoin: 100,
          gift: 0,
          ip: '72.46.128.50',
          port: 16019
        }
      ]
    })
  },
  {
    eGameName: "Banco Baccarat",
    cGameName: '百场乐',
    type: 1,
    json: JSON.stringify({
      serverId: 16021,
      normal: [
        {
          server: 1,
          bet: 1,
          Match: 0,
          entryCoin: 100,
          gift: 0,
          ip: '72.46.128.50',
          port: 16021
        }
      ]
    })
  },
  {
    eGameName: "Multiplayer 5 Cards Poker",
    cGameName: '百人场牛牛',
    type: 1,
    json: JSON.stringify({
      serverId: 13501,
      normal: [
        {
          server: 1,
          bet: 1,
          Match: 0,
          entryCoin: 100,
          gift: 0,
          ip: '72.46.128.50',
          port: 13501
        }
      ]
    })
  },
  {
    eGameName: "God Of Wealth",
    cGameName: '财神夺宝',
    type: 1,
    json: JSON.stringify({
      serverId: 15066,
      normal: [
        {
          server: 1,
          bet: 1,
          Match: 0,
          entryCoin: 100,
          gift: 0,
          ip: '72.46.128.50',
          port: 15066
        }
      ]
    })
  }
]
async function main() {
  for (const u of gameListData) {
    const data = await prisma.gameList.create({
      data: u,
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
