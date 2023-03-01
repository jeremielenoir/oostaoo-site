import { objectType } from 'nexus';

const JobOffer = objectType({
  name: 'JobOffer',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('title');
    t.nonNull.boolean('visibilty');
    t.string('place');
    t.string('sector');
    t.nonNull.string('startDate');
    // t.nonNull.field('startDate', { type: 'DateTime' });
    t.string('linkedInLink');
    t.int('authorId');
    // t.list.field('author', {
    //   type: 'User',
    //   resolve: async (parent, args, { db }) => {
    //     const id = parent.authorId;
    //     return db.user.findMany({
    //       where: { id },
    //     });
    //   },
    // });
    t.int('serviceId');
    t.string('service');
    t.string('skills');
    // t.field('createdAt', { type: DateTime });
    // t.field('updatedAt', { type: DateTime });
  },
});

export default JobOffer;
