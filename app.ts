import { rt, mw, pr } from "./trpc"
import { z } from "zod"

export const app = rt({
    greet: pr
    .input(z
        .object({
            name: z.string()
        })
    )
    .query((req) => {
        const { input } = req
        return {
            msg: `Hi, ${input.name}!`
        }
    })
})