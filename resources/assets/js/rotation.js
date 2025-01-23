function fn_rotation_all() {
	var totFemaleArr = new Array();
	var totMaleArr = new Array();
	$($("#totFemaleListTxt").val().split(",")).each(function(chldrIdx, chldrObj) {
		if (fn_is_kor_en_num(chldrObj) == false) {
			totFemaleArr.push(fn_return_kor_en_num(chldrObj));
		}
	});
	$($("#totMaleListTxt").val().split(",")).each(function(chldrIdx, chldrObj) {
		if (fn_is_kor_en_num(chldrObj) == false) {
			totMaleArr.push(fn_return_kor_en_num(chldrObj));
		}
	});
	totFemaleArr.sort(() => Math.random() - 0.5);
	totMaleArr.sort(() => Math.random() - 0.5);
	$("#totFemaleUsrCnt").val(totFemaleArr.length);
	$("#totMaleUsrCnt").val(totMaleArr.length);
	$("#totFemaleListTxt").val(totFemaleArr);
	$("#totMaleListTxt").val(totMaleArr);
	fn_info_cnt();
};

function fn_rotation(tp) {
	var totTbCnt = Number($(".table-use").length);
	var totFemaleArr = new Array();
	var totMaleArr = new Array();
	if (totTbCnt > 0) {
		var totTbUsrCntArr = new Array();
		totTbUsrCntArr.push(totTbCnt - 1);
		for (var i=0; i<(totTbCnt - 1); i++) {
			totTbUsrCntArr.push(i);
		}
		for (var i=0; i<totTbUsrCntArr.length; i++) {
			$("#td-sum-" + totTbUsrCntArr[i]).each(function() {
				if (tp == 0) {
					$($(this).attr("tbFemaleArr").split(",")).each(function(chldrIdx, chldrObj) {
						if (fn_is_empty(chldrObj) == false) {
							totFemaleArr.push(chldrObj);
						}
					});
				} else if (tp == 1) {
					$($(this).attr("tbMaleArr").split(",")).each(function(chldrIdx, chldrObj) {
						if (fn_is_empty(chldrObj) == false) {
							totMaleArr.push(chldrObj);
						}
					});
				}
			});
		}
		if (tp == 0) {
			$("#totFemaleListTxt").val(totFemaleArr);
		} else if (tp == 1) {
			$("#totMaleListTxt").val(totMaleArr);
		}
		fn_info_cnt();
	}
};