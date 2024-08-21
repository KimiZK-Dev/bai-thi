import express from "express";
import clientController from "../client/apps/controllers/clientController.js";

const router = express.Router();

router.get("/", clientController.index);

export default router;
