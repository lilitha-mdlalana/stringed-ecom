import { products } from "./index"

export default defineEventHandler(async (event) => {
    const method = event.req.method;
    if(method === "GET"){
        return products
    }
}) 