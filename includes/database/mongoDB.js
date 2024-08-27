import mongoose from "mongoose";

export async function connectToDB() {
	try {
		await mongoose.connect("mongodb://127.0.0.1/kimizk_project");
		console.log("Đã kết nối thành công tới Database!");
	} catch (e) {
		console.log("Đã xảy ra lỗi khi kết nối tới Database: ", e);
	}
}
