-- CreateEnum
CREATE TYPE "ConfigCategory" AS ENUM ('FINISH', 'MATERIAL', 'HANDLE', 'HINGE', 'ACCESSORY');

-- CreateEnum
CREATE TYPE "ConfigUnit" AS ENUM ('SQFT', 'RUNNING_LENGTH', 'PIECE');

-- CreateTable
CREATE TABLE "ConfigRate" (
    "id" TEXT NOT NULL,
    "category" "ConfigCategory" NOT NULL,
    "itemName" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "rate" DECIMAL(10,2) NOT NULL,
    "marginPercent" DECIMAL(5,2) NOT NULL,
    "finalRate" DECIMAL(10,2) NOT NULL,
    "unit" "ConfigUnit" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConfigRate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ConfigRate_category_idx" ON "ConfigRate"("category");

-- CreateIndex
CREATE INDEX "ConfigRate_isActive_idx" ON "ConfigRate"("isActive");

-- CreateIndex
CREATE INDEX "ConfigRate_itemName_idx" ON "ConfigRate"("itemName");

-- CreateIndex
CREATE INDEX "ConfigRate_brand_idx" ON "ConfigRate"("brand");
