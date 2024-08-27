import Enrollments from "../../database/models/Enrollments.js";

async function newEnrollment(
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
) {
	try {
		const enrollment = new Enrollments({
			PersonalInformation: {
				fullName,
				birthDay,
				passPort,
				dateRegPassPort,
				wherePassPort,
				sex,
				placeOfBirth,
				ethnic,
			},
			ContactInformation: {
				phone,
				relativePhone,
				email,
			},
			TemporaryContactAddress: {
				Province_permanentResidence,
				District_permanentResidence,
				Commune_permanentResidence,
				detailedAddress,
			},
			FixedContactAddress: {
				ProvinceTemporary_CA,
				DistrictTemporary_CA,
				CommuneTemporary_CA,
				detailedAddress_2,
			},
		});

		const newEnrollment = await enrollment.save();
		return newEnrollment;
	} catch (err) {
		console.error(err);
	}
}

export { newEnrollment };
