import {
  extendType, nonNull, stringArg, intArg, idArg, booleanArg,
} from 'nexus';

export default extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createJobOffer', {
      type: 'JobOffer',
      args: {
        title: nonNull(stringArg()),
        visibility: nonNull(booleanArg()),
        place: stringArg(),
        sector: stringArg(),
        startDate: nonNull('DateTime'),
        content: nonNull(stringArg()),
        linkedInLink: stringArg(),
        authorId: nonNull(intArg()),
        serviceId: nonNull(intArg()),
      },
      resolve: (_, args, { db }) => {
        try {
          return db.jobOffer.create({
            data: {
              title: args.title,
              visibility: args.visibility,
              place: args.place || undefined,
              sector: args.sector || undefined,
              startDate: args.startDate,
              content: args.content,
              linkedInLink: args.linkedInLink || undefined,
              authorId: args.authorId,
              serviceId: args.serviceId,
            },
          });
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });

    t.field('updateJobOffer', {
      type: 'JobOffer',
      args: {
        id: nonNull(idArg()),
        title: stringArg(),
        visibility: booleanArg(),
        place: stringArg(),
        sector: stringArg(),
        startDate: stringArg(),
        content: stringArg(),
        linkedInLink: stringArg(),
        authorId: intArg(),
        serviceId: intArg(),
      },
      resolve: (_, args, { db }) => {
        try {
          const id = Number(args.id);
          const jobOffer = db.jobOffer.update({
            where: { id },
            data: {
              title: args.title || undefined,
              visibility: args.visibility || undefined,
              place: args.place || undefined,
              sector: args.sector || undefined,
              startDate: args.startDate || undefined,
              content: args.content || undefined,
              linkedInLink: args.linkedInLink || undefined,
              authorId: args.authorId || undefined,
              serviceId: args.serviceId || undefined,
            },
          });

          if (!jobOffer) {
            throw new Error(`JobOffer with id = ${id} not found`);
          }

          return jobOffer;
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });

    t.field('deleteJobOffer', {
      type: 'JobOffer',
      args: {
        id: nonNull(idArg()),
      },
      resolve: (_, args, { db }) => {
        try {
          const id = Number(args.id);
          const jobOffer = db.jobOffer.delete({ where: { id } });

          if (!jobOffer) {
            throw new Error(`JobOffer with id = ${id} not found`);
          }

          return jobOffer;
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });
  },
});
