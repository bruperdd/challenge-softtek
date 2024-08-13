/*
  Warnings:

  - You are about to drop the column `assignedTo` on the `incidents` table. All the data in the column will be lost.
  - You are about to drop the column `openedBy` on the `incidents` table. All the data in the column will be lost.
  - Added the required column `issuerId` to the `incidents` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_incidents" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "resolvedAt" DATETIME,
    "canceledAt" DATETIME,
    "comment" TEXT,
    "priority" INTEGER NOT NULL,
    "issuerId" TEXT NOT NULL,
    "resolverId" TEXT,
    CONSTRAINT "incidents_issuerId_fkey" FOREIGN KEY ("issuerId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "incidents_resolverId_fkey" FOREIGN KEY ("resolverId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_incidents" ("canceledAt", "comment", "createdAt", "description", "id", "priority", "resolvedAt", "status", "updatedAt") SELECT "canceledAt", "comment", "createdAt", "description", "id", "priority", "resolvedAt", "status", "updatedAt" FROM "incidents";
DROP TABLE "incidents";
ALTER TABLE "new_incidents" RENAME TO "incidents";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
