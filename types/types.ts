
import { z } from "zod"
import { insertProductSchema } from "@/lib/validateors";

export type Product = z.infer<typeof insertProductSchema> & {
    id: string,
    rating: number;
    numReviews: number;
    createdAt: Date;
}
// {
//     name: string;
//     slug: string;
//     category: string;
//     description: string;
//     images: string[];
//     price: number;
//     brand: string;
//     rating: number;
//     numReviews: number;
//     stock: number;
//     isFeature: boolean;
//     banner: string | null;
// }