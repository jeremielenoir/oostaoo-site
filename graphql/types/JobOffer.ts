import { objectType } from 'nexus';

const JobOffer = objectType({
  name: 'JobOffer',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('title');
    t.string('description');
    t.string('url');
    t.string('imageUrl');
    t.int('status');
    // t.field('createdAt', { type: DateTime });
    // t.field('updatedAt', { type: DateTime });
  },
});

export default JobOffer;
