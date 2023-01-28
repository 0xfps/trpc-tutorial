import { initTRPC } from "@trpc/server"

const trpc = initTRPC.create()

export const rt = trpc.router
export const mw = trpc.middleware
export const pr = trpc.procedure