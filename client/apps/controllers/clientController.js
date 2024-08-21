class clientController {
	index(req, res, next) {
		res.render("home", {
			title: "Trang Chủ",
		});
	}
}

export default new clientController();
