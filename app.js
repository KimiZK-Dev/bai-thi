import express from "express";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
import path from "path";
import "dotenv/config";
import router from "./routes/router.js";
import { clientViewsPath, adminViewsPath } from "./viewPaths.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000 || process.env.PORT;
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View engine setup
app.set("view engine", "hbs");
app.set("views", [clientViewsPath, adminViewsPath]);
app.engine(
	"hbs",
	engine({
		extname: ".hbs",
	})
);

// Routes
router(app);

// Server listening
app.listen(port, (err) => {
	if (err) return res.json({ err });
	console.log(`Server listening on port: ${port}`);
});
