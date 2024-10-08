import path from "path";
import express from "express";
import methodOverride from "method-override";
import { engine as handlebars } from "express-handlebars";
import { clientViewPath, adminViewPath, publicPath } from "./viewPaths.js";
import Helpers from "./utils/Helpers.js";

function setupEngine(app) {
	app.set("view engine", "hbs");
	app.engine(
		"hbs",
		handlebars({
			extname: ".hbs",
			allowProtoPropertiesByDefault: true,
			helpers: {
				formatDate: Helpers.formatDate.bind(Helpers),
			},
		})
	);
	app.set("views", [clientViewPath, adminViewPath]);
	app.use(express.static(path.join(publicPath)));
	app.use(express.urlencoded({ extended: true }));
	app.use(methodOverride("_method"));
	app.use(express.json());
}

export default setupEngine;
