/*
  Warnings:

  - The primary key for the `incidents` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_incidents" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "openedBy" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "resolvedAt" DATETIME,
    "canceledAt" DATETIME,
    "assignedTo" TEXT,
    "comment" TEXT,
    "priority" INTEGER NOT NULL
);
INSERT INTO "new_incidents" ("assignedTo", "canceledAt", "comment", "createdAt", "description", "id", "openedBy", "priority", "resolvedAt", "status", "updatedAt") SELECT "assignedTo", "canceledAt", "comment", "createdAt", "description", "id", "openedBy", "priority", "resolvedAt", "status", "updatedAt" FROM "incidents";
DROP TABLE "incidents";
ALTER TABLE "new_incidents" RENAME TO "incidents";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
