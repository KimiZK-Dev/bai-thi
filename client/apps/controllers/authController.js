import Users from "../../../includes/database/models/Users.js";
import {
	checkPass,
	newUser,
	listUser,
} from "../../../includes/config/services/users.js";
import { isRedirect } from "node-fetch";

class authController {
	// [ GET ]
	async login(req, res, next) {
		try {
			res.render("auth/login", {
				title: "Đăng Nhập",
				css: "/css/auth/login.css",
			});
		} catch (err) {
			console.error("Lỗi khi đăng nhập:", err);
			next(err);
		}
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
		const User = await Users.findOne({ email });
		try {
			if (User) {
				if (checkPass(password, User.password)) {
					res.json({ message: "Đăng nhập thành công!" });
					return;
				}
				res.json({ message: "Sai mật khẩu!" });
			}
			res.json({ message: "Sai email!" });
		} catch (err) {
			console.error(err);
		}
	}

	async createUser(req, res, next) {
		const { email, passport, fullName, password, rePassword } = req.body;

		const [existingEmail, existingPassport] = await Promise.all([
			Users.findOne({ email }),
			Users.findOne({ passport }),
		]);

		if (existingEmail)
			return res.json({ message: "Email này đã được đăng ký!" });
		if (existingPassport)
			return res.json({ message: "CMND/CCCD này đã được đăng ký!" });
		if (password.trim() !== rePassword.trim())
			return res.json({ message: "Mật khẩu không giống nhau!" });

		await newUser(email, passport, fullName, password);
		res.redirect("back");
	}
}

export default new authController();
