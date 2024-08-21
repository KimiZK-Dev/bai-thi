class authController {
	login(req, res, next) {
		res.render("auth/login", {
			title: "Đăng Nhập",
			css: "/css/auth/login.css",
		});
	}
	register(req, res, next) {
		res.render("auth/register", {
			title: "Đăng Ký",
			css: "/css/auth/register.css",
		});
	}
}

export default new authController();
