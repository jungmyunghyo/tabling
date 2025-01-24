function fn_is_empty(value) {
	if (value == null || value == "" || value == undefined) {
		return true;
	} else if (value != null && typeof value == "object" && !Object.keys(value).length) {
		return true;
	} else {
		return false;
	}
};
function fn_is_kor_en_num(value) {
	return fn_is_empty(fn_return_kor_en_num(value));
};
function fn_return_kor_en_num(value) {
	return value.replace(/[^ㄱ-ㅎ가-힣a-zA-Z0-9]/g, "");
};
function fn_set_num(obj) {
	$(obj).val(fn_return_num($(obj).val()));
	if (fn_is_empty($(obj).val()) == true) {
		$(obj).val(0);
	}
};
function fn_return_num(value) {
	return Number(value.replace(/[^0-9]/g, "").replace(/(^0+)/, ""));
};
function fn_make_arr(value) {
	var arr = new Array();
	$(value.split(",")).each(function(idx, obj) {
		arr = fn_return_arr(arr, obj);
	});
	return arr;
};
function fn_make_arr_strt_end(value, strtIdx, endIdx) {
	var arr = new Array();
	$(value.split(",")).each(function(idx, obj) {
		if (strtIdx <= idx && idx < endIdx) {
			arr = fn_return_arr(arr, obj);
		}
	});
	return arr;
};
function fn_return_arr(arr, obj) {
	if (fn_is_kor_en_num(obj) == false) {
		arr.push(fn_return_kor_en_num(obj));
	}
	return arr;
};
function fn_return_arr_def(arr, str, endIdx) {
	for (var i=1; i<=Number(endIdx); i++) {
		if (arr.indexOf(str + i) == -1) {
			arr = fn_return_arr(arr, (str + i));
		} else {
			var flag = true;
			for (var x=1; x<=Number(arr.length + endIdx); x++) {
				if (flag == true) {
					if (arr.indexOf(str + x) == -1) {
						arr = fn_return_arr(arr, (str + x));
						flag = false;
					}
				}
			}
		}
	}
	return arr;
};