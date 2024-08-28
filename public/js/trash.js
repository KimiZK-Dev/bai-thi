$(document).ready(function () {
	const submitDel = $("#submitDel");
	var formDel = document.forms["formDel"];
	var formUndo = document.forms["formUndo"];
	var id;

	$("#delModal").on("shown.bs.modal", (e) => {
		var btn = $(e.relatedTarget);
		id = btn.data("id");
	});

	$(".undoBtn").on("click", function () {
		formUndo.action = `trash/undo/${$(this).data("id")}?_method=PATCH`;
		formUndo.submit();
	});

	submitDel.on("click", (e) => {
		formDel.action = `trash/delete/${id}?_method=DELETE`;
		formDel.submit();
	});
});
