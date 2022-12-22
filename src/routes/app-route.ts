import { Router } from "express";
import indexMessageHandler from "./index/index.router";

const appRouter = Router();

appRouter.use('/', indexMessageHandler);


export default appRouter;