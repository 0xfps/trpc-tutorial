"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_1 = require("../trpc/trpc");
const server_1 = require("@trpc/server");
const zod_1 = require("zod");
const external_router_1 = __importDefault(require("./external-router"));
const mdw = (0, trpc_1.middleware)(({ ctx, next }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!((_a = ctx.user) === null || _a === void 0 ? void 0 : _a.isAdmin)) {
        throw new server_1.TRPCError({ code: 'UNAUTHORIZED' });
    }
    return next({
        ctx: {
            user: ctx.user,
        },
    });
}));
const appRouter = (0, trpc_1.router)({
    greetings: trpc_1.publicProcedure
        .input(zod_1.z.object({}).optional()) // I shall ignore this line!
        .query(() => {
        console.log("Greetings!");
    }),
    greetingsWithName: trpc_1.publicProcedure
        .input(zod_1.z.object({
        name: zod_1.z.string().nonempty(),
        age: zod_1.z.number().nonnegative()
    }))
        // Queries are HTTP GET
        .query((req) => {
        const { input } = req;
        console.log(`Greetings, ${name}!`);
    }),
    sayBye: trpc_1.publicProcedure
        .input(zod_1.z.object({
        name: zod_1.z.string().nonempty()
    }))
        .output(zod_1.z.object({
        msg: zod_1.z.string().nonempty()
    }))
        // Mutation is a HTTP POST.
        .mutation((req) => {
        const { input } = req;
        return {
            msg: `Bye ${name}!`
        };
    }),
    externalRouter: external_router_1.default
});
// No `default`.
