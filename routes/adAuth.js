import express from "express";
import authController from "../admin/apps/controllers/authController.js";

const router = express.Router();

router.get("/login", authController.login);
router.get("/register", authController.register);

export default router;
