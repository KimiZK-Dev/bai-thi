import express from "express";
import siteController from "../admin/apps/controllers/siteController.js";

const router = express.Router();

router.get("/manage", siteController.manage);
router.get("/trash", siteController.trash);

router.delete("/manage/remove/:id", siteController.removeERM);
router.delete("/trash/delete/:id", siteController.delERM);

router.patch("/trash/undo/:id", siteController.undoERM);

export default router;
