/*
  Warnings:

  - A unique constraint covering the columns `[ownerId]` on the table `Balance` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Balance_ownerId_key" ON "Balance"("ownerId");
