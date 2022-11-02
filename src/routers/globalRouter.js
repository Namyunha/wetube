import express from "express";
import { join, login } from "../controllers/userController";
import { trending, test } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

globalRouter.get("/test", test);

export default globalRouter;
