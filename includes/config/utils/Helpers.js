import moment from "moment";

class Helpers {
	formatDate(dateString) {
		return moment(dateString).format("DD/MM/YYYY");
	}
}

export default new Helpers();
