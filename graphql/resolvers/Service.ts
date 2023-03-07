import { objectType } from 'nexus';

const Service = objectType({
  name: 'Service',
  definition(t) {
    t.nonNull.id('id', {
      description: "Service's unique identifier",
    });
    t.nonNull.string('title', {
      description: "Service's title",
    });
    t.nonNull.string('visibility', {
      description: "Service's visibility",
    });
    t.string('description', {
      description: "Service's description",
    });
    t.list.field('jobOffers', {
      type: 'JobOffer',
      description: "Service's job offers",
      resolve: async (parent, _, { db }) => {
        const serviceId = parseInt(parent.id, 10);
        return db.jobOffer.findMany({
          where: { serviceId },
        });
      },
    });
  },
});

export default Service;
