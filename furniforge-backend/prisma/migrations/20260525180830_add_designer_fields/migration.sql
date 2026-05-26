/*
  Warnings:

  - A unique constraint covering the columns `[designerRegNo]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `rating` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "designerRegNo" TEXT,
ADD COLUMN     "projectCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "yearsOfExperience" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "rating" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_designerRegNo_key" ON "User"("designerRegNo");
