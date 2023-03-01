import { objectType } from 'nexus';

const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('email');
    t.nonNull.string('name');
    t.nonNull.string('password');
    t.nonNull.list.int('role');
    t.list.field('jobOffers', {
      type: 'JobOffer',
      resolve: async (parent, args, { db }) => {
        const authorId = parseInt(parent.id, 10);
        return db.jobOffer.findMany({
          where: { authorId },
        });
      },
    });
    // t.field('createdAt', { type: DateTime });
    // t.field('updatedAt', { type: DateTime });
  },
});

export default User;
