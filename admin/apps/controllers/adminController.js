class adminController {
	manage(req, res, next) {
		res.render("admin/manage", {
			title: "Quản Lí",
			nPage: "Quản Lí DS ĐK Tuyển Sinh",
			css: "/css/admin/manage.css",
		});
	}
}

export default new adminController();
