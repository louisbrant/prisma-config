@echo off

start cmd /k "&&npx prisma migrate dev --name init --schema prisma/prisma/casino_admin.prisma"

//npx prisma migrate dev --name casino_data --schema prisma/prisma/casino_data.prisma
//npx prisma migrate dev --name casino_admin --schema prisma/prisma/casino_admin.prisma
//npx prisma migrate dev --name fish_eu --schema prisma/prisma/fish_eu.prisma
//npx prisma migrate dev --name fish_haiwang --schema prisma/prisma/fish_haiwang.prisma
//npx prisma migrate dev --name fish_kuailebuyu --schema prisma/prisma/fish_kuailebuyu.prisma
//npx prisma migrate dev --name fish_leitingzhanji --schema prisma/prisma/fish_leitingzhanji.prisma
//npx prisma migrate dev --name fish_shenhaibuyu --schema prisma/prisma/fish_shenhaibuyu.prisma
//npx prisma migrate dev --name fish --schema prisma/prisma/fish.prisma
//npx prisma migrate dev --name game_club --schema prisma/prisma/game_club.prisma
//npx prisma migrate dev --name game_hongbao --schema prisma/prisma/game_hongbao.prisma
//npx prisma migrate dev --name game_log --schema prisma/prisma/game_log.prisma
//npx prisma migrate dev --name game_main_server --schema prisma/prisma/game_main_server.prisma
//npx prisma migrate dev --name game --schema prisma/prisma/game.prisma
//npx prisma migrate dev --name jindian_cow --schema prisma/prisma/jindian_cow.prisma
//npx prisma migrate dev --name la_ba --schema prisma/prisma/la_ba.prisma
//npx prisma migrate dev --name landlords --schema prisma/prisma/landlords.prisma


//npx prisma migrate dev --preview-feature --skip-generate --name "init" --schema prisma/prisma/casino_data.prisma