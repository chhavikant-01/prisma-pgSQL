import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.user.deleteMany({})
    const user = await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@gmail.com',
            age: 32,
        }, include: {
            userPreferences: true
        }
    })

    console.log('Created user:', user)

}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    });