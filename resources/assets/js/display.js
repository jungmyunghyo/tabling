$(document).ready(function() {
	$("#radio-tooltip-1").change(function() {
		if ($(this).prop("checked") == true) {
			$(".--tooltip-1").css("display", "");
		} else {
			$(".--tooltip-1").css("display", "none");
		}
		fn_tooltip_all();
	});
	fn_tooltip_all();
});
function fn_tooltip_all() {
	fn_tooltip2();
	fn_tooltip3();
	fn_tooltip4();
};
function fn_tooltip2() {
	var fFlag = fn_is_empty($("#totFemaleListTxt").val());
	var mFlag = fn_is_empty($("#totMaleListTxt").val());
	if (fFlag == true && mFlag == true) {
		$(".--tooltip-2").css("display", "none");
	} else {
		$(".--tooltip-2").css("display", "");
	}
};
function fn_tooltip3() {
	var fFlag = fn_is_empty($("#totFemaleListTxt").val());
	var mFlag = fn_is_empty($("#totMaleListTxt").val());
	var totTbCnt = Number($(".table-use").length);
	if (totTbCnt > 1) {
		if (fFlag == true && mFlag == true) {
			$(".--tooltip-3").css("display", "none");
			$(".--tooltip-3f").css("display", "none");
			$(".--tooltip-3m").css("display", "none");
		} else {
			$(".--tooltip-3").css("display", "");
			if (fFlag == true) {
				$(".--tooltip-3f").css("display", "none");
			} else {
				$(".--tooltip-3f").css("display", "");
			}
			if (mFlag == true) {
				$(".--tooltip-3m").css("display", "none");
			} else {
				$(".--tooltip-3m").css("display", "");
			}
		}
	} else {
		$(".--tooltip-3").css("display", "none");
		$(".--tooltip-3f").css("display", "none");
		$(".--tooltip-3m").css("display", "none");
	}
};
function fn_tooltip4() {
	var fFlag = fn_is_empty($("#totFemaleListTxt").val());
	var mFlag = fn_is_empty($("#totMaleListTxt").val());
	var totTbCnt = Number($(".table-use").length);
	if (totTbCnt > 2) {
		if (fFlag == true && mFlag == true) {
			$(".--tooltip-4f").css("display", "none");
			$(".--tooltip-4m").css("display", "none");
		} else {
			if (fFlag == true) {
				$(".--tooltip-4f").css("display", "none");
			} else {
				$(".--tooltip-4f").css("display", "");
			}
			if (mFlag == true) {
				$(".--tooltip-4m").css("display", "none");
			} else {
				$(".--tooltip-4m").css("display", "");
			}
		}
	} else {
		$(".--tooltip-4f").css("display", "none");
		$(".--tooltip-4m").css("display", "none");
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
function fn_dim(tp) {
	if (tp == 0) {
		$("#div-dim-bg").removeClass("div-dim-bg--active");
		$(".body-container").css("overflow", "");
	} else {
		$("#div-dim-bg").addClass("div-dim-bg--active");
		$(".body-container").css("overflow", "hidden");
	}
};
function fn_place_pop(tp) {
	if (tp == 0) {
		fn_dim(0);
		$("#div-pop-place").removeClass("div-pop--active");
	} else {
		fn_dim(1);
		$("#div-pop-place").addClass("div-pop--active");
	}
};
function fn_open_table_roulette(tp) {
	if (tp == 0) {
		fn_dim(0);
		$("#div-pop-table-roulette").removeClass("div-pop--active");
	} else {
		fn_dim(1);
		$("#div-pop-table-roulette").addClass("div-pop--active");
		$("#btn--table-roulette--strt").attr("onclick", "fn_make_table_roulette(" + tp + ", 9999);fn_rotate_table_roulette(" + tp + ");");
		fn_make_table_roulette(tp, 9999);
	}
};
function fn_open_table_function(prntIdx, pkIdx) {
	if (prntIdx == 999 && pkIdx == 999) {
		fn_dim(0);
		$("#div-pop-table-function").removeClass("div-pop-s--active");
	} else {
		fn_dim(1);
		$("#div-pop-table-function").addClass("div-pop-s--active");
		$("#btn--table--del").attr("onclick", "fn_div_container_item_del(" + prntIdx + "," + pkIdx + ");");
		$("#div-container-item--" + prntIdx + "--" + pkIdx).each(function(idx1, obj1) {
			$(".span--table--sel--0").css("display", "none");
			$(".span--table--sel--1").css("display", "none");
			var tbCnt = $(obj1).find(".table-use").length;
			if (tbCnt > 0) {
				$($(obj1).find(".table-use")).each(function(idx2, obj2) {
					$($(obj2).find(".td-sum")).each(function(idx3, obj3) {
						$($(obj3).find(".f--l--m")[0]).each(function(idx4, obj4) {
							$(".span--table--sel--" + idx2).css("display", "");
							$("#btn--table--sel--" + idx2).text($(obj4).text() + "룰렛");
							var arr = new Array();
							$($(obj2).attr("tbFemaleArr").split(",")).each(function(idx5, obj5) {
								arr = fn_return_arr(arr, obj5);
							});
							$($(obj2).attr("tbMaleArr").split(",")).each(function(idx5, obj5) {
								arr = fn_return_arr(arr, obj5);
							});
							$("#btn--table--sel--" + idx2).attr("onclick", "fn_open_user_roulette(1, '" + arr + "')");
						});
					});
				});
			}
		});
	}
};
function fn_open_user_roulette(tp, arr) {
	fn_open_table_function(999, 999);
	if (tp == 0) {
		fn_dim(0);
		$("#div-pop-user-roulette").removeClass("div-pop--active");
	} else {
		fn_dim(1);
		$("#div-pop-user-roulette").addClass("div-pop--active");
		$("#btn--user-roulette--strt").attr("arr", arr);
		fn_make_user_roulette(9999);
	}
};