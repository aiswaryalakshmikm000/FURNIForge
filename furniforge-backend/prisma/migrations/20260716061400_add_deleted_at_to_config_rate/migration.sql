/*
  Warnings:

  - A unique constraint covering the columns `[category,itemName,brand]` on the table `ConfigRate` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ConfigRate_brand_idx";

-- DropIndex
DROP INDEX "ConfigRate_itemName_idx";

-- AlterTable
ALTER TABLE "ConfigRate" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "ConfigRate_category_itemName_brand_key" ON "ConfigRate"("category", "itemName", "brand");
