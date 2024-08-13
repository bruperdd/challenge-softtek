import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

enum Priority {
  HIGH = 1,
  MEDIUM = 2,
  LOW = 3,
}

enum Status {
  OPEN = 'open',
  IN_ANALYSIS = 'in-analysis',
  RESOLVED = 'resolved',
  CANCELED = 'canceled',
}

enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

function generateIncidents() {
  const incidents = [];
  for (let i = 0; i < 20; i++) {
    incidents.push({
      status: faker.helpers.enumValue(Status),
      description: faker.lorem.paragraph(1),
      priority: faker.helpers.enumValue(Priority),
    });
  }
  return incidents;
}

async function main() {
  await prisma.user.create({
    data: {
      name: faker.person.fullName(),
      email: 'admin@example.com',
      password: '123456',
      role: Role.ADMIN,
      issuedIncidents: {
        createMany: {
          data: [
            {
              description: faker.lorem.paragraph(1),
              priority: Priority.HIGH,
            },
            {
              status: Status.IN_ANALYSIS,
              description: faker.lorem.paragraph(1),
              priority: Priority.MEDIUM,
            },
            {
              status: Status.CANCELED,
              description: faker.lorem.paragraph(1),
              priority: Priority.LOW,
            },
            {
              status: Status.RESOLVED,
              description: faker.lorem.paragraph(1),
              priority: Priority.LOW,
            },
          ],
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      name: faker.person.fullName(),
      email: 'user@example.com',
      password: '123456',
      role: Role.USER,
      issuedIncidents: {
        createMany: {
          data: generateIncidents(),
        },
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
