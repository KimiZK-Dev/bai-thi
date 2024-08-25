import mysql2 from "mysql2/promise";

export async function connectToDB() {
	try {
		const connection = await mysql2.createConnection({
			host: "localhost",
			user: "root",
			database: "kimizk_project",
			password: "",
		});

		await connection.query("SELECT 1");
		console.log("Kết nối đến cơ sở dữ liệu MySQL thành công!");

		return connection;
	} catch (err) {
		console.error("Lỗi kết nối đến cơ sở dữ liệu:", err);
		throw err;
	}
}
