import express from "express";
import adminController from "../admin/apps/controllers/adminController.js";

const router = express.Router();

router.get("/manage", adminController.manage);

export default router;
