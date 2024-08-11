/*
  Warnings:

  - Added the required column `locationUrl` to the `Disaster` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Disaster" ADD COLUMN     "locationUrl" TEXT NOT NULL;
