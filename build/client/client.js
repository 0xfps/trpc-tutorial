"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// pages/index.tsx
const client_1 = require("@trpc/client");
const client = (0, client_1.createTRPCProxyClient)({
    links: [
        (0, client_1.httpBatchLink)({
            url: 'http://localhost:3000/trpc',
        }),
    ],
});
const bilbo = client.greetings.query();
// => { id: 'id_bilbo', name: 'Bilbo' };
const frodo = client.greetingsWithName.query({
    name: "Frodo",
    age: 20
});
const legolas = client.sayBye.mutate({
    name: "Legolas"
});
// => { id: 'id_frodo', name: 'Frodo' };
