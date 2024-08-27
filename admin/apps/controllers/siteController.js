import Users from "../../../includes/database/models/Users.js";

class SiteController {
	async manage(req, res, next) {
		try {
			res.render("admin/manage", {
				title: "Quản Lí",
				nPage: "Quản Lí DS ĐK Tuyển Sinh",
				css: "/css/admin/manage.css",
				users: await Users.find().lean(),
			});
		} catch (err) {
			next(err);
		}
	}
}

export default new SiteController();
