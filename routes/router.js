import siteController from "./site.js";
import authRouter from "./auth.js";
import adSiteRouter from "./adSite.js";
import adAuthRouter from "./adAuth.js";

function router(app) {
	app.use("/admin/auth", adAuthRouter);
	app.use("/admin", adSiteRouter);
	app.use("/auth", authRouter);
	app.use("/", siteController);
}

export default router;
