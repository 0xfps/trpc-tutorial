"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_1 = require("../trpc/trpc");
const extRouter = (0, trpc_1.router)({
    leave: trpc_1.publicProcedure
        .query(() => {
        return {
            msg: "Left!"
        };
    })
});
exports.default = extRouter;
