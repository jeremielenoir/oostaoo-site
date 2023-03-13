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
    t.nonNull.list.int('role', {
      description: "An array of user's role numbers",
    });
    t.nonNull.boolean('isConnect', {
      description: 'Is user connected ?',
    });
    t.nonNull.boolean('isAdmin', {
      description: 'Is user an administrator ?',
    });
    t.list.field('jobOffers', {
      type: 'JobOffer',
      description: 'Job offers added by the user',
      resolve: async (parent, _, { db }) => {
        const authorId = parseInt(parent.id, 10);
        return db.jobOffer.findMany({
          where: { authorId },
        });
      },
    });
  },
});

export default User;
