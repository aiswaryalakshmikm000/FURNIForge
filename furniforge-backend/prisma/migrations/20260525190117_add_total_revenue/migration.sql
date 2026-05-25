/*
  Warnings:

  - You are about to drop the column `yearsOfExperience` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "yearsOfExperience",
ADD COLUMN     "totalRevenue" DECIMAL(65,30) NOT NULL DEFAULT 0;
