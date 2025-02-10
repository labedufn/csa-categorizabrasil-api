/*
  Warnings:

  - Added the required column `instituicao` to the `Convite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Convite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Convite" ADD COLUMN     "instituicao" TEXT NOT NULL,
ADD COLUMN     "tipo" TEXT NOT NULL;
