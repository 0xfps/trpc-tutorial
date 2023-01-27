// In this file, we initialize the trpc.

import { initTRPC } from "@trpc/server"
// This is to be called once in every project.
// This is the base.

type Context = {
    user?: {
        name: string,
        isAdmin: boolean
    }
}

const trpc = initTRPC.context<Context>().create()

export const router = trpc.router
export const middleware = trpc.middleware
export const publicProcedure = trpc.procedure