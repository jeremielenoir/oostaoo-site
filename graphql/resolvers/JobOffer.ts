import { objectType } from 'nexus';

const JobOffer = objectType({
  name: 'JobOffer',
  definition(t) {
    t.nonNull.id('id', {
      description: 'Unique identifier for the job offer',
    });
    t.nonNull.string('title', {
      description: 'Title of the job offer',
    });
    t.nonNull.boolean('visibility', {
      description: 'Visibility boolean of the job offer',
    });
    t.string('place', {
      description: 'Place of the job offer',
    });
    t.string('sector', {
      description: 'Sector of the job offer',
    });
    t.nonNull.field('startDate', {
      type: 'DateTime', description: 'Start date of the job offer',
    });
    t.string('linkedInLink', {
      description: 'LinkedIn link of the job offer',
    });
    t.nonNull.int('authorId', {
      description: 'User identifier of the job offer author',
    });
    t.field('author', {
      type: 'User',
      description: 'Author user of the job offer',
      resolve: async (parent, _, { db }) => {
        const id = parent.authorId;
        return db.user.findUnique({ where: { id } });
      },
    });
    t.nonNull.int('serviceId', {
      description: 'Service identifier of the job offer',
    });
    t.field('service', {
      type: 'Service',
      description: 'Service of the job offer',
      resolve: async (parent, _, { db }) => {
        const id = parent.serviceId;
        return db.service.findUnique({ where: { id } });
      },
    });

    // TODO : find the way to get the skills list with Prisma ManyToMany
    // t.field('skills', {
    //   type: 'Skill',
    //   description: 'Skills list asked to get the job offer',
    //   resolve: async (parent, _, { db }) => {
    //     const { id } = parent;
    //     return db.service.findUnique({ where: { id } });
    //   },
    // });
  },
});

export default JobOffer;
