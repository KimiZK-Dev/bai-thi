import express from "express";
import { fileURLToPath } from "url";
import { connectToDB } from "./database/mysql.js";
import path from "path";
import "dotenv/config";
import router from "./routes/router.js";
import setupEngine from "./config/engines.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View engine setup
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
