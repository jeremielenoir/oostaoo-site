import { objectType } from 'nexus';

const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.id('id', {
      description: "user's unique identifier",
    });
    t.nonNull.string('email', {
      description: "user's email address",
    });
    t.nonNull.string('name', {
      description: "user's full name",
    });
    t.nonNull.string('password', {
      description: "user's password",
    });
    t.nonNull.list.int('role', {
      description: "an array of user's role numbers",
    });
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
