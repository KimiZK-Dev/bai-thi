import siteController from "./site.js";
import authRouter from "./auth.js";
import adminRouter from "./admin.js";

function router(app) {
	app.use("/admin", adminRouter);
	app.use("/auth", authRouter);
	app.use("/", siteController);
}

export default router;
