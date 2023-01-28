"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const trpc_1 = require("./trpc");
const zod_1 = require("zod");
exports.app = (0, trpc_1.rt)({
    greet: trpc_1.pr
        .input(zod_1.z
        .object({
        name: zod_1.z.string()
    }))
        .query((req) => {
        const { input } = req;
        return {
            msg: `Hi, ${input.name}!`
        };
    })
});
