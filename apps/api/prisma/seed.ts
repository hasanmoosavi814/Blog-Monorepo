import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { generateSlug } from "src/common/utils/generateSlug";

const prisma = new PrismaClient();

async function main() {
  // --- Seed Users ---
  const users = Array.from({ length: 10 }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    bio: faker.lorem.sentence(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
  }));

  const createdUsers = await prisma.user.createMany({
    data: users,
    skipDuplicates: true,
  });

  const allUsers = await prisma.user.findMany();

  // --- Seed Posts ---
  const posts = await Promise.all(
    Array.from({ length: 40 }).map(async () => {
      const title = faker.lorem.sentence();
      const author = faker.helpers.arrayElement(allUsers);
      return prisma.post.create({
        data: {
          title,
          slug: generateSlug(title),
          content: faker.lorem.paragraphs(2),
          thumbnail: faker.image.urlPicsumPhotos(),
          published: faker.datatype.boolean(),
          authorId: author.id,
        },
      });
    })
  );

  // --- Seed Comments ---
  await Promise.all(
    Array.from({ length: 50 }).map(() => {
      const user = faker.helpers.arrayElement(allUsers);
      const post = faker.helpers.arrayElement(posts);
      return prisma.comment.create({
        data: {
          content: faker.lorem.sentences(2),
          postId: post.id,
          authorId: user.id,
        },
      });
    })
  );

  // --- Seed Tags ---
  const tagNames = Array.from({ length: 10 }).map(() => faker.word.adjective());

  const tags = await Promise.all(
    tagNames.map((name) =>
      prisma.tag.create({
        data: { name },
      })
    )
  );

  // Attach tags to posts randomly
  await Promise.all(
    posts.map((post) => {
      const selectedTags = faker.helpers.arrayElements(tags, 2);
      return prisma.post.update({
        where: { id: post.id },
        data: {
          tags: {
            connect: selectedTags.map((tag) => ({ id: tag.id })),
          },
        },
      });
    })
  );

  // --- Seed Likes ---
  await Promise.all(
    Array.from({ length: 100 }).map(() => {
      const user = faker.helpers.arrayElement(allUsers);
      const post = faker.helpers.arrayElement(posts);
      return prisma.like.create({
        data: {
          userId: user.id,
          postId: post.id,
        },
      });
    })
  );

  console.log("✅ Seed completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
