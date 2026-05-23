-- AlterTable
ALTER TABLE "User" ALTER COLUMN "passwordHash" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_assignedDesignerId_fkey" FOREIGN KEY ("assignedDesignerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
