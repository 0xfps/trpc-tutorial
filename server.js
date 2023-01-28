"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_1 = require("./trpc");
const standalone_1 = require("@trpc/server/adapters/standalone");
const app_1 = require("./app");
const server = (0, trpc_1.rt)({
    appRouter: app_1.app
});
(0, standalone_1.createHTTPServer)({
    router: server
}).listen(3000);
console.log(`Server On!`);
