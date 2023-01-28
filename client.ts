import { createTRPCProxyClient, httpLink } from "@trpc/client"
import type { Server } from "./server"

const client = createTRPCProxyClient<Server>({
    links: [
        httpLink({
            url: "http://localhost:3000"
        })
    ]
})

const getHello = async () => {
    const hello = await client.appRouter.greet.query({name: "Anthony"})
    console.log(hello.msg)
}

getHello()