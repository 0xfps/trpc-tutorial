"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const server_1 = require("@trpc/server");
const t = server_1.initTRPC.create();
const router = t.router;
const middleware = t.middleware;
const publicProcedure = t.procedure;
exports.signup = router({
    greeting: publicProcedure.query(() => {
        return "Hi There!";
    })
});
