import express from "express";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
import path from "path";
import "dotenv/config";
import router from "./routes/router.js";

const port = 3000 || process.env.PORT;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "client", "views"));
app.engine(
	"hbs",
	engine({
		extname: ".hbs",
	})
);

router(app);
app.listen(port, (err) => {
	if (err) return res.json({ err });
	console.log(`Server listening on port: ${port}`);
});
