import { engine as handlebarsEngine } from "express-handlebars";
import { clientViewPath, adminViewPath } from "./viewPaths.js";

function setupEngine(app) {
	app.set("view engine", "hbs");
	app.set("views", [clientViewPath, adminViewPath]);
	app.engine(
		"hbs",
		handlebarsEngine({
			extname: ".hbs",
		})
	);
}

export default setupEngine;
