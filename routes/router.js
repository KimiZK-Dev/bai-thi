import clientRouter from "./client.js";
import authRouter from "./auth.js";

function router(app) {
	app.use("/auth", authRouter);
	app.use("/", clientRouter);
}

export default router;
