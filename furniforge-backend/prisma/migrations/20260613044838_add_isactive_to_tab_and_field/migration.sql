-- AlterTable
ALTER TABLE "TemplateField" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "TemplateTab" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;
