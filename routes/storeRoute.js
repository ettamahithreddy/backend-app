import express from "express"
import { showProducts } from "../controllers/storeController.js";
const storeRouter = express.Router()

storeRouter.get("/", (req, res, next) => {
    console.log("Route / accessed");
    next();
}, showProducts)

export {storeRouter}