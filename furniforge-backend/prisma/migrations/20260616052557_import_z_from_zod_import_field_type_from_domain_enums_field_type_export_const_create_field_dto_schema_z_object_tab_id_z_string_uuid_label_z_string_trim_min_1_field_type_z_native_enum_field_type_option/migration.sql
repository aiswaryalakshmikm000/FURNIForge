/*
  Warnings:

  - You are about to drop the column `displayOrder` on the `TemplateField` table. All the data in the column will be lost.
  - The `options` column on the `TemplateField` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "TemplateField" DROP CONSTRAINT "TemplateField_tabId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateTab" DROP CONSTRAINT "TemplateTab_templateId_fkey";

-- AlterTable
ALTER TABLE "TemplateField" DROP COLUMN "displayOrder",
DROP COLUMN "options",
ADD COLUMN     "options" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "defaultValue" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "TemplateTab" ADD CONSTRAINT "TemplateTab_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateField" ADD CONSTRAINT "TemplateField_tabId_fkey" FOREIGN KEY ("tabId") REFERENCES "TemplateTab"("id") ON DELETE CASCADE ON UPDATE CASCADE;
