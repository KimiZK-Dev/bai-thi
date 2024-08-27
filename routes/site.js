import express from "express";
import siteController from "../client/apps/controllers/siteController.js";

const router = express.Router();

router.get("/enrollment", siteController.enrollment);
router.post("/enrollment/create", siteController.create_enrollment);

router.get("/", siteController.index);

export default router;
