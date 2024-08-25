import express from "express";
import authController from "../client/apps/controllers/authController.js";

const router = express.Router();

router.get("/login", authController.login);
router.post("/verify/user", authController.verifyUser);

router.get("/register", authController.register);
router.post("/create/user", authController.createUser);

export default router;
