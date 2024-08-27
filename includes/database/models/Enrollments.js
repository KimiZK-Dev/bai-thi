import mongoose from "mongoose";
import sequence from "mongoose-sequence";
import MongooseDelete from "mongoose-delete";

const AutoIncrement = sequence(mongoose);
const { Schema } = mongoose;

const EnrollmentSchema = new Schema(
	{
		EnrollmentID: Number,
		PersonalInformation: {
			fullName: { type: String, required: true },
			birthDay: { type: Date, required: true },
			passPort: { type: String, required: true, unique: true },
			dateRegPassPort: { type: Date, required: true },
			wherePassPort: { type: String, required: true },
			sex: { type: String, required: true },
			placeOfBirth: { type: String, required: true },
			ethnic: { type: String, required: true },
		},
		ContactInformation: {
			phone: { type: Number, required: true, unique: true },
			relativePhone: { type: Number, required: true },
			email: { type: String, required: true, unique: true },
		},
		TemporaryContactAddress: {
			Province_permanentResidence: {
				type: String,
				required: true,
			},
			District_permanentResidence: {
				type: String,
				required: true,
			},
			Commune_permanentResidence: {
				type: String,
				required: true,
			},
			detailedAddress: { type: String, required: true },
		},
		FixedContactAddress: {
			ProvinceTemporary_CA: {
				type: String,
				required: true,
			},
			DistrictTemporary_CA: {
				type: String,
				required: true,
			},
			CommuneTemporary_CA: { type: String, required: true },
			detailedAddress_2: { type: String, required: true },
		},
	},
	{
		timestamps: true,
	}
);

EnrollmentSchema.plugin(AutoIncrement, {
	inc_field: "EnrollmentID",
}).plugin(MongooseDelete, {
	deletedAt: true,
	overrideMethods: "all",
});

const Enrollments = mongoose.model("Enrollments", EnrollmentSchema);
export default Enrollments;
