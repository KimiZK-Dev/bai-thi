import siteController from "./site.js";
import authRouter from "./auth.js";

function router(app) {
	app.use("/auth", authRouter);
	app.use("/", siteController);
}

export default router;
