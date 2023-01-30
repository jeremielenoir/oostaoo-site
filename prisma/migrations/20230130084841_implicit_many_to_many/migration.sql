/*
  Warnings:

  - You are about to drop the `SkillsOnJobOffers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SkillsOnJobOffers" DROP CONSTRAINT "SkillsOnJobOffers_jobOfferId_fkey";

-- DropForeignKey
ALTER TABLE "SkillsOnJobOffers" DROP CONSTRAINT "SkillsOnJobOffers_skillId_fkey";

-- DropTable
DROP TABLE "SkillsOnJobOffers";

-- CreateTable
CREATE TABLE "_JobOfferToSkill" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_JobOfferToSkill_AB_unique" ON "_JobOfferToSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_JobOfferToSkill_B_index" ON "_JobOfferToSkill"("B");

-- AddForeignKey
ALTER TABLE "_JobOfferToSkill" ADD CONSTRAINT "_JobOfferToSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "JobOffer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobOfferToSkill" ADD CONSTRAINT "_JobOfferToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
