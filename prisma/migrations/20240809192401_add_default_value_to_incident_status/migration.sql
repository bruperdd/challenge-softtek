-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_incidents" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
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
INSERT INTO "new_incidents" ("canceledAt", "comment", "createdAt", "description", "id", "issuerId", "priority", "resolvedAt", "resolverId", "status", "updatedAt") SELECT "canceledAt", "comment", "createdAt", "description", "id", "issuerId", "priority", "resolvedAt", "resolverId", "status", "updatedAt" FROM "incidents";
DROP TABLE "incidents";
ALTER TABLE "new_incidents" RENAME TO "incidents";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
