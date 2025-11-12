/*
  Warnings:

  - You are about to drop the `ProjectTemplate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `project_template_id` on the `TemplateStep` table. All the data in the column will be lost.
  - Added the required column `group_id` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priority` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group_id` to the `Step` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_id` to the `Step` table without a default value. This is not possible if the table is not empty.
  - Added the required column `template_step_id` to the `Step` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group_id` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priority` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_id` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `TemplateStep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `TemplateStep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `predesigned_task_key` to the `TemplateStep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_template_id` to the `TemplateStep` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ProjectTemplate_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ProjectTemplate";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "TaskTemplate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL DEFAULT '',
    "group_id" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "group_id" TEXT NOT NULL,
    "priority" INTEGER NOT NULL
);
INSERT INTO "new_Project" ("id") SELECT "id" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE TABLE "new_Step" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "template_step_id" TEXT NOT NULL,
    "task_id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL
);
INSERT INTO "new_Step" ("id") SELECT "id" FROM "Step";
DROP TABLE "Step";
ALTER TABLE "new_Step" RENAME TO "Step";
CREATE TABLE "new_Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "group_id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "priority" INTEGER NOT NULL
);
INSERT INTO "new_Task" ("id") SELECT "id" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
CREATE TABLE "new_TemplateStep" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "task_template_id" TEXT NOT NULL,
    "predesigned_task_key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "mode" TEXT NOT NULL DEFAULT 'Serial',
    "parent_step_id" TEXT,
    CONSTRAINT "TemplateStep_task_template_id_fkey" FOREIGN KEY ("task_template_id") REFERENCES "TaskTemplate" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TemplateStep" ("id") SELECT "id" FROM "TemplateStep";
DROP TABLE "TemplateStep";
ALTER TABLE "new_TemplateStep" RENAME TO "TemplateStep";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "TaskTemplate_name_key" ON "TaskTemplate"("name");
