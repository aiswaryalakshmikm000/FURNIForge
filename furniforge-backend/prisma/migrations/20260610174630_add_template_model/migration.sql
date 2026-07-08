-- CreateEnum
CREATE TYPE "FieldType" AS ENUM ('TEXT', 'TEXTAREA', 'NUMBER', 'SELECT', 'MULTI_SELECT', 'CHECKBOX', 'RADIO', 'DATE', 'FILE', 'IMAGE', 'EMAIL', 'PHONE');

-- CreateTable
CREATE TABLE "Template" (
    "id" TEXT NOT NULL,
    "deliverableId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateTab" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "displayOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TemplateTab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateField" (
    "id" TEXT NOT NULL,
    "tabId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "fieldKey" TEXT NOT NULL,
    "fieldType" "FieldType" NOT NULL,
    "displayOrder" INTEGER NOT NULL,
    "options" JSONB,
    "defaultValue" JSONB,
    "isRequired" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TemplateField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequestFieldValue" (
    "id" TEXT NOT NULL,
    "requestId" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RequestFieldValue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Template_deliverableId_idx" ON "Template"("deliverableId");

-- CreateIndex
CREATE UNIQUE INDEX "Template_deliverableId_name_key" ON "Template"("deliverableId", "name");

-- CreateIndex
CREATE INDEX "TemplateTab_templateId_idx" ON "TemplateTab"("templateId");

-- CreateIndex
CREATE UNIQUE INDEX "TemplateTab_templateId_name_key" ON "TemplateTab"("templateId", "name");

-- CreateIndex
CREATE INDEX "TemplateField_tabId_idx" ON "TemplateField"("tabId");

-- CreateIndex
CREATE UNIQUE INDEX "TemplateField_tabId_label_key" ON "TemplateField"("tabId", "label");

-- CreateIndex
CREATE UNIQUE INDEX "TemplateField_tabId_fieldKey_key" ON "TemplateField"("tabId", "fieldKey");

-- CreateIndex
CREATE INDEX "RequestFieldValue_fieldId_idx" ON "RequestFieldValue"("fieldId");

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_deliverableId_fkey" FOREIGN KEY ("deliverableId") REFERENCES "Deliverable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateTab" ADD CONSTRAINT "TemplateTab_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateField" ADD CONSTRAINT "TemplateField_tabId_fkey" FOREIGN KEY ("tabId") REFERENCES "TemplateTab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequestFieldValue" ADD CONSTRAINT "RequestFieldValue_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "TemplateField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
