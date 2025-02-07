$(document).ready(function() {
	$("#radio-tooltip-1").change(function() {
		if ($(this).prop("checked") == true) {
			$(".--tooltip-1").css("display", "");
		} else {
			$(".--tooltip-1").css("display", "none");
		}
	});
});
function fn_tooltip_all() {
	fn_tooltip2();
};
function fn_tooltip2() {
	var fFlag = fn_is_empty($("#totFemaleListTxt").val());
	var mFlag = fn_is_empty($("#totMaleListTxt").val());
	if (fFlag == true && mFlag == true) {
		$(".--tooltip-2").css("display", "none");
	} else {
		$(".--tooltip-2").css("display", "");
		if (fFlag == false) {
			$(".--tooltip-2f").css("display", "");
		} else {
			$(".--tooltip-2f").css("display", "none");
		}
		if (mFlag == false) {
			$(".--tooltip-2m").css("display", "");
		} else {
			$(".--tooltip-2m").css("display", "none");
		}
	}
};
function fn_next(tp) {
	if (window.event.keyCode == 13) {
		if (tp == 1) {
			$("#totMaleUsrCnt").focus();
		} else if (tp == 2) {
			$("#totFemaleListTxt").focus();
		} else if (tp == 3) {
			$("#totMaleListTxt").focus();
			fn_info_list();
		} else if (tp == 4) {
			$("#totFemaleListTxt").focus();
			fn_info_list();
		}
	}
};
function fn_place_pop(tp) {
	if (tp == 0) {
		$("#div-dim-bg").removeClass("div-dim-bg--active");
		$("#div-pop-place").removeClass("div-pop--active");
	} else {
		$("#div-dim-bg").addClass("div-dim-bg--active");
		$("#div-pop-place").addClass("div-pop--active");
	}
};
function fn_open_table_roulette(tp) {
	if (tp == 0) {
		$("#div-dim-bg").removeClass("div-dim-bg--active");
		$("#div-pop-roulette").removeClass("div-pop--active");
	} else {
		$("#div-dim-bg").addClass("div-dim-bg--active");
		$("#div-pop-roulette").addClass("div-pop--active");
		fn_make_table_roulette(tp, 9999);
		$(".btn--roulette--strt").attr("onclick", "fn_rotate_table_roulette(" + tp + ");");
	}
};