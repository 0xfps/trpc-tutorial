import { router, middleware, publicProcedure } from "../trpc/trpc"
import { TRPCError } from "@trpc/server"
import { z } from "zod"
import extRouter from "./external-router"


const mdw = middleware(async ({ctx, next}) => {
    if (!ctx.user?.isAdmin) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
      }
      return next({
        ctx: {
          user: ctx.user,
        },
      });
})

const appRouter = router({
    greetings: publicProcedure
    .input(z.object({}).optional()) // I shall ignore this line!
    .query(() => {
        console.log("Greetings!")
    }),

    greetingsWithName: publicProcedure
    .input(z.object({
        name: z.string().nonempty(),
        age: z.number().nonnegative()
    }))
    // Queries are HTTP GET
    .query((req) => {
        const { input } = req
        console.log(`Greetings, ${name}!`)
    }),

    sayBye: publicProcedure
    .input(z.object({
        name: z.string().nonempty()
    }))
    .output(z.object({
        msg: z.string().nonempty()
    }))
    // Mutation is a HTTP POST.
    .mutation((req) => {
        const { input } = req
        return {
            msg: `Bye ${name}!`
        }
    }),

    externalRouter: extRouter
})

export type AppRouter = typeof appRouter
// No `default`.