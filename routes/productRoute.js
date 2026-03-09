import { showProducts } from "../controllers/productController";
import express from "express";
const router = express.Router();
router.get("/", showProducts);
export {router as productRouter};