import express from "express";
import { connectToDB } from "./includes/database/mongoDB.js";
import "dotenv/config";
import router from "./routes/router.js";
import setupEngine from "./includes/config/engines.js";

const port = process.env.PORT || 3000;
const app = express();

// View engine
setupEngine(app);

// Routes
router(app);

// Connection to database
connectToDB();

// Server listening
app.listen(port, (err) => {
	if (err) {
		console.error(err);
	} else {
		console.log(`Server đang chạy tại: http://localhost:${port}`);
	}
});
