import mongoose from "mongoose";
import slug from "mongoose-slug-updater";
import sequence from "mongoose-sequence";
import MongooseDelete from "mongoose-delete";

const AutoIncrement = sequence(mongoose);
const { Schema } = mongoose;

const UsersSchema = new Schema(
	{
		userID: Number,
		email: { type: String, required: true, unique: true },
		passport: { type: Number, required: true, unique: true },
		fullName: { type: String, required: true },
		password: { type: String, required: true },
		slug: { type: String, slug: "email", unique: true },
	},
	{
		timestamps: true,
	}
);

mongoose.plugin(slug);

UsersSchema.plugin(AutoIncrement, {
	inc_field: "userID",
}).plugin(MongooseDelete, {
	deletedAt: true,
	overrideMethods: "all",
});

const Users = mongoose.model("Users", UsersSchema);
export default Users;
