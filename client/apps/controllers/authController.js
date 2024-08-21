class authController {
	login(req, res, next) {
		res.render("auth/login", {
			title: "Trang Đăng Nhập",
			css: "/css/auth/login.css",
		});
	}
	register(req, res, next) {
		res.render("auth/register", {
			title: "Trang Đăng Kí",
			css: "/css/auth/register.css",
		});
	}
}

export default new authController();
