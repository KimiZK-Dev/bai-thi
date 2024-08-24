class authController {
	login(req, res, next) {
		res.render("admin/auth/login", {
			title: "ADMIN - Đăng Nhập",
			nPage: "Trang đăng nhập",
			css: "/css/admin/log-reg.css",
		});
	}

	register(req, res, next) {
		res.render("admin/auth/register", {
			title: "ADMIN - Đăng Ký",
			nPage: "Trang đăng ký",
			css: "/css/admin/log-reg.css",
		});
	}
}

export default new authController();
