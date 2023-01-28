"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pr = exports.mw = exports.rt = void 0;
const server_1 = require("@trpc/server");
const trpc = server_1.initTRPC.create();
exports.rt = trpc.router;
exports.mw = trpc.middleware;
exports.pr = trpc.procedure;
