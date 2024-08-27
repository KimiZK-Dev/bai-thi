import moment from "moment";

class Helpers {
	formatDate(dateString) {
		return (formattedDate = moment(dateString).format("DD/MM/YYYY"));
	}
}

export default new Helpers();
