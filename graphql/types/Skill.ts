import { objectType } from 'nexus';

const Skill = objectType({
  name: 'Skill',
  definition(t) {
    t.nonNull.id('id', {
      description: "Skill's unique identifier",
    });
    t.nonNull.string('title', {
      description: "Skill's title",
    });
    t.nonNull.string('visibility', {
      description: "Skill's visibility",
    });
    t.string('description', {
      description: "Skill's description",
    });
    t.string('logo', {
      description: "Skill's image",
    });
    t.list.field('jobOffers', {
      type: 'JobOffer',
      description: "Service's job offers",
      resolve: async (parent, _, { db }) => {
        const jobOfferId = parent.id;
        return db.jobOffer.findMany({
          where: { jobOfferId },
        });
      },
    });
  },
});

export default Skill;
