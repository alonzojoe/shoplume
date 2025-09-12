
'use server'
import { prisma } from "@/lib/prisma"
import { convertToPlainObject } from "@/lib/utils"
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants"

export const getLatestProducts = async () => {

    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt: 'desc' }
    })

    return convertToPlainObject(data)
}