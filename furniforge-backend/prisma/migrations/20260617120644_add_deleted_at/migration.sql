-- AlterTable
ALTER TABLE "TemplateField" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "TemplateTab" ADD COLUMN     "deletedAt" TIMESTAMP(3);
