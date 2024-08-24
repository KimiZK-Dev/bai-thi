import express from "express";
import siteController from "../admin/apps/controllers/siteController.js";

const router = express.Router();

router.get("/manage", siteController.manage);

export default router;
