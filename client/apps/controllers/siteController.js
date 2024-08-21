class siteController {
	index(req, res, next) {
		res.render("home", {
			title: "Trang Chủ",
		});
	}

	enrollment(req, res, next) {
		res.render("enrollment", {
			title: "Trang Tuyển Sinh",
			css: "/css/site/enrollment.css",
		});
	}
}

export default new siteController();
