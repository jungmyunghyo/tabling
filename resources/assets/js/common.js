$(document).ready(function() {
	fn_div_container_add();
	fn_place_set(3, 90);
});
function fn_info_list() {
	var totFemaleArr = fn_make_arr($("#totFemaleListTxt").val());
	var totMaleArr = fn_make_arr($("#totMaleListTxt").val());
	$("#totFemaleListTxt").val(totFemaleArr);
	$("#totMaleListTxt").val(totMaleArr);
	$("#totFemaleUsrCnt").val(Number(totFemaleArr.length));
	$("#totMaleUsrCnt").val(Number(totMaleArr.length));
	fn_info_cnt();
};
function fn_info_cnt() {
	var totFemaleUsrCnt = Number($("#totFemaleUsrCnt").val());
	var totMaleUsrCnt = Number($("#totMaleUsrCnt").val());
	var totFemaleArr = fn_make_arr_strt_end($("#totFemaleListTxt").val(), 0, totFemaleUsrCnt);
	var totMaleArr = fn_make_arr_strt_end($("#totMaleListTxt").val(), 0, totMaleUsrCnt);
	$("#totFemaleListTxt").val(fn_return_arr_def(totFemaleArr, "F", Number(totFemaleUsrCnt - totFemaleArr.length)));
	$("#totMaleListTxt").val(fn_return_arr_def(totMaleArr, "M", Number(totMaleUsrCnt - totMaleArr.length)));
	fn_info();
};
function fn_info() {
	fn_tooltip_all();
	var totFemaleArr = fn_make_arr($("#totFemaleListTxt").val());
	var totMaleArr = fn_make_arr($("#totMaleListTxt").val());
	var totFemaleUsrCnt = Number(totFemaleArr.length);
	var totMaleUsrCnt = Number(totMaleArr.length);
	$("#totFemaleUsrCnt").val(totFemaleUsrCnt);
	$("#totMaleUsrCnt").val(totMaleUsrCnt);
	var totUsrCnt = Number(totFemaleUsrCnt + totMaleUsrCnt);
	var totTbCnt = Number($(".table-use").length);
	$("#totUsrCnt").val(totUsrCnt);
	$("#totTbCnt").val(totTbCnt);
	var totMaxUsrPerTbCnt = Math.ceil(Number(totUsrCnt / totTbCnt));
	$(".table-use-col").html(fn_tmp(1, totMaxUsrPerTbCnt));
	$(".table-use-row").html(fn_tmp(2, totMaxUsrPerTbCnt));
	if (totTbCnt > 0) {
		if (6 <= totMaxUsrPerTbCnt && totMaxUsrPerTbCnt <= 12) {
			var tbFemaleUsrCnt = Math.floor(Number(totFemaleUsrCnt / totTbCnt));
			var tbMaleUsrCnt = Math.floor(Number(totMaleUsrCnt / totTbCnt));
			$("#tbFemaleUsrCnt").val(tbFemaleUsrCnt);
			$("#tbMaleUsrCnt").val(tbMaleUsrCnt);
			$("#tbFemaleRstCnt").val(Number(totFemaleUsrCnt - (tbFemaleUsrCnt * totTbCnt)));
			$("#tbMaleRstCnt").val(Number(totMaleUsrCnt - (tbMaleUsrCnt * totTbCnt)));
			fn_info_table_def();
			fn_info_table_assign();
		}
	}
};
function fn_info_table_def() {
	var totTbCnt = Number($("#totTbCnt").val());
	var tbFemaleUsrCnt = Number($("#tbFemaleUsrCnt").val());
	var tbMaleUsrCnt = Number($("#tbMaleUsrCnt").val());
	var tbFemaleRstCnt = Number($("#tbFemaleRstCnt").val());
	var tbMaleRstCnt = Number($("#tbMaleRstCnt").val());
	var fIdxStrt = 0;
	var fIdxEnd = 0;
	var mIdxStrt = 0;
	var mIdxEnd = 0;
	$(".table-use").each(function() {
		fIdxStrt = Number(fIdxEnd);
		fIdxEnd = Number(fIdxEnd + tbFemaleUsrCnt);
		mIdxStrt = Number(mIdxEnd);
		mIdxEnd = Number(mIdxEnd + tbMaleUsrCnt);
		if (tbFemaleRstCnt > 0 || tbMaleRstCnt > 0) {
			if (Number(tbFemaleRstCnt + tbMaleRstCnt) > totTbCnt) {
				if (tbFemaleRstCnt > 0 && tbMaleRstCnt > 0) {
					tbFemaleRstCnt--;
					fIdxEnd++;
					tbMaleRstCnt--;
					mIdxEnd++;
				} else if (tbFemaleRstCnt > 0) {
					tbFemaleRstCnt--;
					fIdxEnd++;
				} else {
					tbMaleRstCnt--;
					mIdxEnd++;
				}
			} else {
				if (tbFemaleRstCnt > 0) {
					tbFemaleRstCnt--;
					fIdxEnd++;
				} else {
					tbMaleRstCnt--;
					mIdxEnd++;
				}
			}
		}
		$(this).attr("tbFemaleArr", fn_make_arr_strt_end($("#totFemaleListTxt").val(), fIdxStrt, fIdxEnd));
		$(this).attr("tbMaleArr", fn_make_arr_strt_end($("#totMaleListTxt").val(), mIdxStrt, mIdxEnd));
	});
};
function fn_info_table_assign() {
	$(".table-use").each(function(idx) {
		$(this).attr("id", "table-use-" + idx);
		$(this).find(".td-use").removeClass("td-use-f");
		$(this).find(".td-use").removeClass("td-use-m");
		$(this).find(".td-use").html("");
		$(this).find(".td-sum").html("");
		var tbFemaleArr = fn_make_arr($(this).attr("tbFemaleArr"));
		var tbMaleArr = fn_make_arr($(this).attr("tbMaleArr"));
		var fCnt = Number(tbFemaleArr.length);
		var mCnt = Number(tbMaleArr.length);
		var totCnt = Number(fCnt + mCnt);
		var fIdxStrt = 0;
		var mIdxStrt = 0;
		for (var x=1; x<=totCnt; x++) {
			if (fn_position_flag(totCnt, fCnt, mCnt, x) == false) {
				$(this).find(".td-use-" + x).addClass("td-use-f");
				$(this).find(".td-use-" + x).append("<div class='--tooltip-1 f--m--m c--gray'>i:" + x + "</div>");
				$(this).find(".td-use-" + x).append("<div class='f--m--m'>" + tbFemaleArr[fIdxStrt] +"</div>");
				fIdxStrt++;
			} else {
				$(this).find(".td-use-" + x).addClass("td-use-m");
				$(this).find(".td-use-" + x).append("<div class='--tooltip-1 f--m--m c--gray'>i:" + x + "</div>");
				$(this).find(".td-use-" + x).append("<div class='f--m--m'>" + tbMaleArr[mIdxStrt] +"</div>");
				mIdxStrt++;
			}
		}
		$(this).find(".td-sum").append("<div class='f--l--m'>" + (idx + 1) +"조</div>");
		$(this).find(".td-sum").append("<div class='--tooltip-1 f--m--m c--gray'>tCnt:" + totCnt + "</div>");
		$(this).find(".td-sum").append("<div class='--tooltip-1 f--m--m c--gray'>fCnt:" + fCnt + "/" + "mCnt:" + mCnt + "</div>");
		$(this).find(".td-sum").append("<div class='--tooltip-1 f--s--m c--gray'>fArr:" + tbFemaleArr + "</div>");
		$(this).find(".td-sum").append("<div class='--tooltip-1 f--s--m c--gray'>mArr:" + tbMaleArr + "</div>");
	});
};
function fn_tmp(tp, sz) {
	var html01 = "<td class='td-use td-use-1'></td>";
	var html02 = "<td class='td-use td-use-2'></td>";
	var html03 = "<td class='td-use td-use-3'></td>";
	var html04 = "<td class='td-use td-use-4'></td>";
	var html05 = "<td class='td-use td-use-5'></td>";
	var html06 = "<td class='td-use td-use-6'></td>";
	var html07 = "<td class='td-use td-use-7'></td>";
	var html08 = "<td class='td-use td-use-8'></td>";
	var html09 = "<td class='td-use td-use-9'></td>";
	var html10 = "<td class='td-use td-use-10'></td>";
	var html11 = "<td class='td-use td-use-11'></td>";
	var html12 = "<td class='td-use td-use-12'></td>";
	
	var html000 = "<td class='td-not'></td>";
	var html013 = "<td class='td-sum' colspan='1' rowspan='3'></td>";
	var html023 = "<td class='td-sum' colspan='2' rowspan='3'></td>";
	var html031 = "<td class='td-sum' colspan='3' rowspan='1'></td>";
	var html032 = "<td class='td-sum' colspan='3' rowspan='2'></td>";
	
	var html = "";
	if (tp == 1) {
		if (sz == 11 || sz == 12) {
			html += "<tr>" + html11		+ html04	+ html05	+ html000	+ "</tr>";
			html += "<tr>" + html03		+ html023	+ ""		+ html06	+ "</tr>";
			html += "<tr>" + html02		+ ""		+ ""		+ html07	+ "</tr>";
			html += "<tr>" + html01		+ ""		+ ""		+ html08	+ "</tr>";
			html += "<tr>" + html000	+ html10	+ html09	+ html12	+ "</tr>";
		} else if (sz == 9 || sz == 10) {
			html += "<tr>" + html000	+ html04	+ html05	+ html000	+ "</tr>";
			html += "<tr>" + html03		+ html023	+ ""		+ html06	+ "</tr>";
			html += "<tr>" + html02		+ ""		+ ""		+ html07	+ "</tr>";
			html += "<tr>" + html01		+ ""		+ ""		+ html08	+ "</tr>";
			html += "<tr>" + html000	+ html10	+ html09	+ html000	+ "</tr>";
		} else if (sz == 7 || sz == 8) {
			html += "<tr>" + html000	+ html04	+ html000	+ "</tr>";
			html += "<tr>" + html03		+ html013	+ html05	+ "</tr>";
			html += "<tr>" + html02		+ ""		+ html06	+ "</tr>";
			html += "<tr>" + html01		+ ""		+ html07	+ "</tr>";
			html += "<tr>" + html000	+ html08	+ html000	+ "</tr>";
		}
	} else if (tp == 2) {
		if (sz == 11 || sz == 12) {
			html += "<tr>" + html000	+ html01	+ html02	+ html03	+ html11	+ "</tr>";
			html += "<tr>" + html10		+ html032	+ ""		+ ""		+ html04	+ "</tr>";
			html += "<tr>" + html09		+ ""		+ ""		+ ""		+ html05	+ "</tr>";
			html += "<tr>" + html12		+ html08	+ html07	+ html06	+ html000	+ "</tr>";
		} else if (sz == 9 || sz == 10) {
			html += "<tr>" + html000	+ html01	+ html02	+ html03	+ html000	+ "</tr>";
			html += "<tr>" + html10		+ html032	+ ""		+ ""		+ html04	+ "</tr>";
			html += "<tr>" + html09		+ ""		+ ""		+ ""		+ html05	+ "</tr>";
			html += "<tr>" + html000	+ html08	+ html07	+ html06	+ html000	+ "</tr>";
		} else if (sz == 7 || sz == 8) {
			html += "<tr>" + html000	+ html01	+ html02	+ html03	+ html000	+ "</tr>";
			html += "<tr>" + html08		+ html031	+ ""		+ ""		+ html04	+ "</tr>";
			html += "<tr>" + html000	+ html07	+ html06	+ html05	+ html000	+ "</tr>";
		}
	}
	return html;
};
function fn_div_container_add() {
	var html = "";
	html += "<div class='div-container-container'>";
	html += "	<div class='div-setting-container --tooltip-1'>";
	html += "		<span class='span-button'><button type='button' class='btn--del f--5'>행삭제</button></span>";
	html += "		<span class='span-button'><button type='button' class='btn--add btn--add-1 f--5'>세로</button></span>";
	html += "		<span class='span-button'><button type='button' class='btn--add btn--add-2 f--5'>상하</button></span>";
	html += "		<span class='span-button'><button type='button' class='btn--add btn--add-3 f--5'>상단</button></span>";
	html += "		<span class='span-button'><button type='button' class='btn--add btn--add-4 f--5'>하단</button></span>";
	html += "		<span class='span-form'><input type='text' class='text-container-add f--10' value='' maxlength='10' placeholder='주석'/></span>";
	html += "		<span class='span-button'><button type='button' class='btn--blk btn--add-5 f--5'>공백세로</button></span>";
	html += "		<span class='span-button'><button type='button' class='btn--blk btn--add-6 f--5'>공백상단</button></span>";
	html += "		<span class='span-button'><button type='button' class='btn--blk btn--add-7 f--5'>공백하단</button></span>";
	html += "	</div>";
	html += "	<div class='div-container-item'>"; 
	html += "	</div>";
	html += "</div>";
	$("#div-container").append(html);
	fn_div_container_reset();
};
function fn_div_container_del(pkIdx) {
	if (confirm("해당 행을\n삭제하시겠습니까?") == true) {
		$("#div-container-container--" + pkIdx).remove();
		fn_div_container_reset();
	}
};
function fn_div_container_reset() {
	$(".div-container-container").each(function(pkIdx) {
		$(this).attr("id", "div-container-container--" + pkIdx);
	});
	$(".div-container-item").each(function(pkIdx) {
		$(this).attr("id", "div-container-item--" + pkIdx);
	});
	$(".btn--del").each(function(pkIdx) {
		$(this).attr("onclick", "fn_div_container_del(" + pkIdx + ");");
	});
	$(".text-container-add").each(function(pkIdx) {
		$(this).attr("id", "text-container-add--" + pkIdx);
	});
	for (var i=1; i<=7; i++) {
		$(".btn--add-" + i).each(function(pkIdx) {
			$(this).attr("onclick", "fn_div_container_item_add(" + i + ", " + pkIdx + ");");
		});
	}
	fn_info_cnt();
};
function fn_div_container_item_add(tp, prntIdx) {
	var html = "";
	var txt = $("#text-container-add--" + prntIdx).val();
	$("#text-container-add--" + prntIdx).val("");
	
	if (tp == 1 || tp == 5) {
		html += "<div class='div-container-item--" + prntIdx + " div-container-item-col--m'>";
		html += "	<table class='table-container-col'>";
		if (tp == 1) {
		html += "		<tbody class='table-use table-use-col'></tbody>";
		} else if (tp == 5 && fn_is_empty(txt) == false) {
		html += "		<tbody><tr><td><div class='f--l--m'>" + txt + "</div></td></tr></tbody>";	
		}
		html += "	</table>";
		html += "</div>";
	} else if (tp == 2 || tp == 3 || tp == 4 || tp == 6 || tp == 7) {
		html += "<div class='div-container-item--" + prntIdx + " div-container-item-row--m'>";
		html += "	<table class='table-container-row'>";
		if (tp == 2 || tp == 3) {
		html += "		<tbody class='table-use table-use-row'></tbody>";
		} else if ((tp == 4 || tp == 6) && fn_is_empty(txt) == false) {
		html += "		<tbody><tr><td><div class='f--l--m'>" + txt + "</div></td></tr></tbody>";	
		}
		html += "	</table>";
		html += "	<table class='table-container-row'>";
		if (tp == 2 || tp == 4) {
		html += "		<tbody class='table-use table-use-row'></tbody>";
		} else if ((tp == 3 || tp == 7) && fn_is_empty(txt) == false) {
		html += "		<tbody><tr><td><div class='f--l--m'>" + txt + "</div></td></tr></tbody>";	
		}
		html += "	</table>";
		html += "</div>";
	}
	$("#div-container-item--" + prntIdx).append(html);
	fn_div_container_item_reset(prntIdx);
};
function fn_div_container_item_del(prntIdx, pkIdx) {
	if (confirm("해당 테이블을\n삭제하시겠습니까?") == true) {
		$("#div-container-item--" + prntIdx + "--" + pkIdx).remove();
		fn_div_container_item_reset(prntIdx);
	}
};
function fn_div_container_item_reset(prntIdx) {
	$(".div-container-item--" + prntIdx).each(function(pkIdx) {
		$(this).attr("id", "div-container-item--" + prntIdx + "--" + pkIdx);
		$(this).attr("onclick", "fn_div_container_item_del(" + prntIdx + "," + pkIdx + ");");
	});
	fn_info_cnt();
};