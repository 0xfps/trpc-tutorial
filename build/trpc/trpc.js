"use strict";
// In this file, we initialize the trpc.
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicProcedure = exports.middleware = exports.router = void 0;
const server_1 = require("@trpc/server");
const trpc = server_1.initTRPC.context().create();
exports.router = trpc.router;
exports.middleware = trpc.middleware;
exports.publicProcedure = trpc.procedure;
