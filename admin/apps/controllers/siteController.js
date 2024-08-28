import Enrollments from "../../../includes/database/models/Enrollments.js";

class SiteController {
	async manage(req, res, next) {
		try {
			res.render("admin/manage", {
				title: "Quản Lí",
				nPage: "Quản Lí DS ĐK Tuyển Sinh",
				css: "/css/admin/manage.css",
				enrollments: await Enrollments.find().lean(),
				count: await Enrollments.countDocuments(),
			});
		} catch (err) {
			next(err);
		}
	}
	async trash(req, res, next) {
		try {
			res.render("admin/trash", {
				title: "Thùng Rác",
				nPage: "Quản Lí DS ĐK Bị Hủy",
				css: "/css/admin/manage.css",
				enrollments: await Enrollments.findWithDeleted({
					deleted: true,
				}).lean(),
				count: await Enrollments.countDocumentsWithDeleted({
					deleted: true,
				}),
			});
		} catch (err) {
			next(err);
		}
	}

	// [DELETE]
	async removeERM(req, res, next) {
		try {
			await Enrollments.delete({ _id: req.params.id });
			res.redirect("back");
		} catch (err) {
			next(err);
		}
	}
	async delERM(req, res, next) {
		try {
			await Enrollments.deleteOne({ _id: req.params.id });
			res.redirect("back");
		} catch (err) {
			next(err);
		}
	}

	// [PATCH]
	async undoERM(req, res, next) {
		try {
			await Enrollments.restore({ _id: req.params.id });
			res.redirect("back");
		} catch (err) {
			next(err);
		}
	}
}

export default new SiteController();
