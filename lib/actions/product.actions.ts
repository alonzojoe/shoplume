
'use server'
import { prisma } from "@/lib/prisma"

export const getLatestProducts = async () => {

    const data = await prisma.product.findMany({
        take: 4,
        orderBy: { createdAt: 'desc' }
    })

    return JSON.parse(JSON.stringify(data))
}