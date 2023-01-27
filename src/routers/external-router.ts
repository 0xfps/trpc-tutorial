import { router, middleware, publicProcedure } from "../trpc/trpc"
import { z } from "zod"

const extRouter = router({
    leave: publicProcedure
    .query(() => {
        return {
            msg: "Left!"
        }
    })
})

export default extRouter