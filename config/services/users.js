import bcryptjs from "bcryptjs";
import Users from "../../database/models/Users.js";

function checkPass(pass, hasPass) {
	return bcryptjs.compareSync(pass, hasPass);
}

async function newUser(email, passport, fullName, password) {
	try {
		const hashPass = bcryptjs.hashSync(password, 10);
		const newUser = await Users.create({
			email: email.trim(),
			passport: passport.trim(),
			fullName: fullName.trim(),
			password: hashPass,
		});
		return newUser;
	} catch (err) {
		console.error(err);
	}
}

export { checkPass, newUser };
