// document.addEventListener("DOMContentLoaded", function () {
// 	var e,
// 		t = $(".submitBtn"),
// 		c = $("#checkedAll"),
// 		o = $(".checkedItems");
// 	document.forms["container-form"];
// 	var n = document.forms["remove-item-form"];
// 	function d() {
// 		let e = $(".checkedItems:checked").length;
// 		console.log(e),
// 			e > 0 ? t.removeClass("disabled") : t.addClass("disabled");
// 	}
// 	$("#notiRemove").on("show.bs.modal", (t) => {
// 		let c = $(t.relatedTarget);
// 		e = c.data("id");
// 	}),
// 		$("#btn-remove-item").on("click", (t) => {
// 			(n.action = "/projectAE/manage/remove/" + e + "?_method=DELETE"),
// 				n.submit();
// 		}),
// 		c.change(function () {
// 			let e = $(this).prop("checked");
// 			o.prop("checked", e), d();
// 		}),
// 		o.change(function () {
// 			let e = $(".checkedItems:checked").length === o.length;
// 			c.prop("checked", e), d();
// 		});
// });

$(document).ready(function () {
	const submitRemove = $("#submitRemove");
	var formRemove = document.forms["formRemove"];
	var id;

	$("#removeModal").on("shown.bs.modal", (e) => {
		var btn = $(e.relatedTarget);
		id = btn.data("id");
	});

	submitRemove.on("click", (e) => {
		formRemove.action = `manage/remove/${id}?_method=DELETE`;
		formRemove.submit();
	});
});
