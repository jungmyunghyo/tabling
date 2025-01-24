function fn_rotation_all() {
	var totFemaleArr = fn_make_arr($("#totFemaleListTxt").val());
	var totMaleArr = fn_make_arr($("#totMaleListTxt").val());
	totFemaleArr.sort(() => Math.random() - 0.5);
	totMaleArr.sort(() => Math.random() - 0.5);
	$("#totFemaleListTxt").val(totFemaleArr);
	$("#totMaleListTxt").val(totMaleArr);
	$("#totFemaleUsrCnt").val(Number(totFemaleArr.length));
	$("#totMaleUsrCnt").val(Number(totMaleArr.length));
	fn_info_cnt();
};
function fn_rotation(tp) {
	var totTbCnt = Number($("#totTbCnt").val());
	$(".table-use").each(function(idx) {
		var nextIdx = idx;
		if (idx == Number(totTbCnt - 1)) {
			nextIdx = 0;
		} else {
			nextIdx++;
		}
		if (tp == 0) {
			$("#table-use-" + nextIdx).attr("tbFemaleArrNext", fn_make_arr($(this).attr("tbFemaleArr")));
		} else {
			$("#table-use-" + nextIdx).attr("tbMaleArrNext", fn_make_arr($(this).attr("tbMaleArr")));
		}
	});
	var totFemaleArr = new Array();
	var totMaleArr = new Array();
	$(".table-use").each(function() {
		if (tp == 0) {
			$(this).attr("tbFemaleArr", fn_make_arr($(this).attr("tbFemaleArrNext")));
			$($(this).attr("tbFemaleArrNext").split(",")).each(function(idx, obj) {
				totFemaleArr = fn_return_arr(totFemaleArr, obj);
			});
		} else {
			$(this).attr("tbMaleArr", fn_make_arr($(this).attr("tbMaleArrNext")));
			$($(this).attr("tbMaleArrNext").split(",")).each(function(idx, obj) {
				totMaleArr = fn_return_arr(totMaleArr, obj);
			});
		}
	});
	if (tp == 0) {
		$("#totFemaleListTxt").val(totFemaleArr);
	} else {
		$("#totMaleListTxt").val(totMaleArr);
	}
	fn_info_table_assign();
};