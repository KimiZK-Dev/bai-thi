import Enrollments from "../../../includes/database/models/Enrollments.js";

class SiteController {
	async manage(req, res, next) {
		try {
			res.render("admin/manage", {
				title: "Quản Lí",
				nPage: "Quản Lí DS ĐK Tuyển Sinh",
				css: "/css/admin/manage.css",
				enrollments: await Enrollments.find().lean(),
			});
		} catch (err) {
			next(err);
		}
	}
}

export default new SiteController();
