import Users from "../../../database/models/Users.js";
import { checkPass, newUser } from "../../../config/services/users.js";

class authController {
	// [ GET ]
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

	// [ POST ]
	async verifyUser(req, res, next) {
		const { email, password } = req.body;
		try {
			const User = await Users.findOne({ where: { email } });

			if (User) {
				if (checkPass(password, User.password)) {
					res.send("ok");
				} else {
					res.status(401).send("Unauthorized");
				}
			} else {
				res.status(404).send("User not found");
			}
		} catch (err) {
			console.error(err);
		}
	}

	async createUser(req, res, next) {
		const { email, passport, fullName, password, rePassword } = req.body;

		if (password.trim() !== rePassword.trim()) {
			res.send("Mật khẩu không giống nhau");
			return;
		}

		newUser(email, passport, fullName, password);
		res.redirect("back");
	}
}

export default new authController();
