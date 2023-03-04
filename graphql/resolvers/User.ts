import { objectType } from 'nexus';

const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.id('id', {
      description: "User's unique identifier",
    });
    t.nonNull.string('email', {
      description: "User's email address",
    });
    t.nonNull.string('name', {
      description: "User's full name",
    });
    t.nonNull.string('password', {
      description: "User's password",
    });
    t.nonNull.list.int('role', {
      description: "An array of user's role numbers",
    });
    t.list.field('jobOffers', {
      type: 'JobOffer',
      description: 'Job offers added by the user',
      resolve: async (parent, _, { db }) => {
        const authorId = parent.id;
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
