import {prisma} from "@/prisma"

async function seed() {
    await prisma.user.createMany({
        data: [
            {
                name: "João Silva",
                email: "joao@email.com"
            },
            {
                name: "Pedro Silva",
                email: "pedro@email.com"
            },
        ]
    })
}
seed().then(() => {
    console.log("Database seeded!")
    prisma.$disconnect()
})