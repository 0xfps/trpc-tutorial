// pages/index.tsx
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from "../routers/router"

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:5000/trpc',
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