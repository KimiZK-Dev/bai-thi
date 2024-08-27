import Enrollments from "../../../includes/database/models/Enrollments.js";
import { newEnrollment } from "../../../includes/config/services/enrollments.js";

class siteController {
	index(req, res, next) {
		res.render("home", {
			title: "Trang Chủ",
			css: "/css/site/home.css",
		});
	}

	enrollment(req, res, next) {
		res.render("enrollment", {
			title: "Trang Tuyển Sinh",
			css: "/css/site/enrollment.css",
		});
	}

	async create_enrollment(req, res, next) {
		const {
			fullName,
			birthDay,
			passPort,
			dateRegPassPort,
			wherePassPort,
			sex,
			placeOfBirth,
			ethnic,
			phone,
			relativePhone,
			email,
			Province_permanentResidence,
			District_permanentResidence,
			Commune_permanentResidence,
			detailedAddress,
			ProvinceTemporary_CA,
			DistrictTemporary_CA,
			CommuneTemporary_CA,
			detailedAddress_2,
		} = req.body;

		await newEnrollment(
			fullName,
			birthDay,
			passPort,
			dateRegPassPort,
			wherePassPort,
			sex,
			placeOfBirth,
			ethnic,
			phone,
			relativePhone,
			email,
			Province_permanentResidence,
			District_permanentResidence,
			Commune_permanentResidence,
			detailedAddress,
			ProvinceTemporary_CA,
			DistrictTemporary_CA,
			CommuneTemporary_CA,
			detailedAddress_2
		);

		res.json(req.body);
	}
}

export default new siteController();
