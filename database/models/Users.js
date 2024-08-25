import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize("kimizk_project", "root", "", {
	host: "localhost",
	dialect: "mysql",
});

class Users extends Model {}

Users.init(
	{
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		passport: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
		},
		fullName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "Users",
		timestamps: true,
		paranoid: true,
	}
);

sequelize.sync();

export default Users;
