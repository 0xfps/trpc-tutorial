import { rt, mw, pr } from "./trpc"
import { createHTTPServer } from "@trpc/server/adapters/standalone"
import { app } from "./app"

export type Server = typeof server

const server = rt({
    appRouter: app
})

createHTTPServer({
    router: server
}).listen(3000)

console.log(`Server On!`)
