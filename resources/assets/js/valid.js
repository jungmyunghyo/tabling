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
	return value.replace(/[^0-9]/g, "").replace(/(^0+)/, "");
};