function fn_info_display() {
	$(".--tooltip-1").each(function() {
		if ($("#radio-tooltip-1").prop("checked") == true) {
			$(this).css("display", "");
		} else {
			$(this).css("display", "none");
		}
	});
};
function fn_next(tp) {
	if (window.event.keyCode == 13) {
		if (tp == 1) {
			$("#totMaleUsrCnt").focus();
		} else if (tp == 2) {
			$("#totFemaleListTxt").focus();
		} else if (tp == 3) {
			$("#totMaleListTxt").focus();
		} else if (tp == 4) {
			fn_info_list();
		}
	}
};
function fn_info_list() {
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
	$("#totFemaleUsrCnt").val(totFemaleArr.length);
	$("#totMaleUsrCnt").val(totMaleArr.length);
	$("#totFemaleListTxt").val(totFemaleArr);
	$("#totMaleListTxt").val(totMaleArr);
	fn_info_cnt();
};
function fn_info_cnt() {
	var totFemaleArr = new Array();
	var totMaleArr = new Array();
	var totFemaleUsrCnt = Number($("#totFemaleUsrCnt").val());
	var totMaleUsrCnt = Number($("#totMaleUsrCnt").val());
	var totFemaleRstCnt = totFemaleUsrCnt;
	var totMaleRstCnt = totMaleUsrCnt;
	$($("#totFemaleListTxt").val().split(",")).each(function(chldrIdx, chldrObj) {
		if (totFemaleRstCnt > 0) {
			if (fn_is_kor_en_num(chldrObj) == false) {
				totFemaleArr.push(fn_return_kor_en_num(chldrObj));
				totFemaleRstCnt--;
			}
		}
	});
	$($("#totMaleListTxt").val().split(",")).each(function(chldrIdx, chldrObj) {
		if (totMaleRstCnt > 0) {
			if (fn_is_kor_en_num(chldrObj) == false) {
				totMaleArr.push(fn_return_kor_en_num(chldrObj));
				totMaleRstCnt--;
			}
		}
	});
	if (totFemaleRstCnt > 0) {
		for (var i=1; i<=totFemaleRstCnt; i++) {
			totFemaleArr.push("F" + i);
		}
	}
	if (totMaleRstCnt > 0) {
		for (var i=1; i<=totMaleRstCnt; i++) {
			totMaleArr.push("M" + i);
		}
	}
	$("#totFemaleListTxt").val(totFemaleArr);
	$("#totMaleListTxt").val(totMaleArr);
	fn_info();
};
function fn_info() {
	var totTbUsrCntArr = new Array();
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
	var totFemaleUsrCnt = Number(totFemaleArr.length);
	var totMaleUsrCnt = Number(totMaleArr.length);
	var totUsrCnt = Number(totFemaleUsrCnt + totMaleUsrCnt);
	var totTbCnt = Number($(".table-use").length);
	var totMaxUsrPerTbCnt = Math.ceil(Number(totUsrCnt / totTbCnt));
	
	$(".table-use-col").html(fn_tmp(1, totMaxUsrPerTbCnt));
	$(".table-use-row").html(fn_tmp(2, totMaxUsrPerTbCnt));
	
	var usrCnt = 0;
	for (var i=1; i<=12; i++) {
		$(".td-use-" + i).each(function() {
			$(this).removeClass();
			if (usrCnt >= totUsrCnt) {
				$(this).attr("id", "");
				$(this).addClass("td-not");
				$(this).html("");
			} else {
				usrCnt++;
				$(this).attr("id", "td-use-" + usrCnt);
				$(this).addClass("td-use");
				$(this).addClass("td-use-" + i);
				$(this).append("<div class='--tooltip-1 f6-g'>i:" + i + "/" + "n:" + usrCnt + "</div>");
			}
		});
	}
	$(".table-use").each(function(idx1) {
		$(this).attr("id", "table-use-" + idx1);
		$(this).find(".td-sum").attr("id", "td-sum-" + idx1);
		totTbUsrCntArr.push(Number($(this).find(".td-use").length));
	});
	
	var tbFemaleUsrCnt = Math.floor(totFemaleUsrCnt / totTbCnt);
	var tbMaleUsrCnt = Math.floor(totMaleUsrCnt / totTbCnt);
	var tbFemaleRstCnt = (totFemaleUsrCnt - (tbFemaleUsrCnt * totTbCnt));
	var tbMaleRstCnt = (totMaleUsrCnt - (tbMaleUsrCnt * totTbCnt));
	
	var femaleUsrCnt = 0;
	var maleUsrCnt = 0;
	
	for (var i=0; i<totTbCnt; i++) {
		$("#td-sum-" + i).each(function() {
			var tbFemaleArr = new Array();
			var tbMaleArr = new Array();
			var totCnt = Number(totTbUsrCntArr[i]);
			var rstCnt = Number(totCnt - tbFemaleUsrCnt - tbMaleUsrCnt);
			var fCnt = Number(tbFemaleUsrCnt);
			var mCnt = Number(tbMaleUsrCnt);
			for (var x=femaleUsrCnt; x<Number(femaleUsrCnt + tbFemaleUsrCnt); x++) {
				tbFemaleArr.push(totFemaleArr[x]);
			}
			for (var x=maleUsrCnt; x<Number(maleUsrCnt + tbMaleUsrCnt); x++) {
				tbMaleArr.push(totMaleArr[x]);
			}
			femaleUsrCnt += fCnt;
			maleUsrCnt += mCnt;
			$(this).attr("totCnt", totCnt);
			$(this).attr("rstCnt", rstCnt);
			$(this).attr("fCnt", fCnt);
			$(this).attr("mCnt", mCnt);
			$(this).attr("tbFemaleArr", tbFemaleArr)
			$(this).attr("tbMaleArr", tbMaleArr)
		});
	}
	for (var i=0; i<totTbCnt; i++) {
		$("#td-sum-" + i).each(function() {
			var tbFemaleArr = new Array();
			var tbMaleArr = new Array();
			var totCnt = Number($(this).attr("totCnt"));
			var rstCnt = Number($(this).attr("rstCnt"));
			var fCnt = Number($(this).attr("fCnt"));
			var mCnt = Number($(this).attr("mCnt"));
			$($(this).attr("tbFemaleArr").split(",")).each(function(chldrIdx, chldrObj) {
				if (fn_is_empty(chldrObj) == false) {
					tbFemaleArr.push(chldrObj);
				}
			});
			$($(this).attr("tbMaleArr").split(",")).each(function(chldrIdx, chldrObj) {
				if (fn_is_empty(chldrObj) == false) {
					tbMaleArr.push(chldrObj);
				}
			});
			if (rstCnt == 1 && (tbFemaleRstCnt > 0 || tbMaleRstCnt > 0)) {
				rstCnt--;
				if (tbFemaleRstCnt > 0) {
					tbFemaleRstCnt--;
					fCnt++;
					tbFemaleArr.push(totFemaleArr[femaleUsrCnt]);
					femaleUsrCnt++;
				} else {
					tbMaleRstCnt--;
					mCnt++;
					tbMaleArr.push(totMaleArr[maleUsrCnt]);
					maleUsrCnt++;
				}
			} else if (rstCnt == 2 && (tbFemaleRstCnt > 0 && tbMaleRstCnt > 0)) {
				rstCnt--;
				rstCnt--;
				tbFemaleRstCnt--;
				fCnt++;
				tbFemaleArr.push(totFemaleArr[femaleUsrCnt]);
				femaleUsrCnt++;
				tbMaleRstCnt--;
				mCnt++;
				tbMaleArr.push(totMaleArr[maleUsrCnt]);
				maleUsrCnt++;
			}
			$(this).attr("rstCnt", rstCnt);
			$(this).attr("fCnt", fCnt);
			$(this).attr("mCnt", mCnt);
			$(this).attr("tbFemaleArr", tbFemaleArr)
			$(this).attr("tbMaleArr", tbMaleArr)
		});
	}
	for (var i=0; i<totTbCnt; i++) {
		var tbFemaleArr = new Array();
		var tbMaleArr = new Array();
		var totCnt = 0;
		var fCnt = 0;
		var mCnt = 0;
		$("#td-sum-" + i).each(function() {
			totCnt = Number($(this).attr("totCnt"));
			fCnt = Number($(this).attr("fCnt"));
			mCnt = Number($(this).attr("mCnt"));
			$($(this).attr("tbFemaleArr").split(",")).each(function(chldrIdx, chldrObj) {
				if (fn_is_empty(chldrObj) == false) {
					tbFemaleArr.push(chldrObj);
				}
			});
			$($(this).attr("tbMaleArr").split(",")).each(function(chldrIdx, chldrObj) {
				if (fn_is_empty(chldrObj) == false) {
					tbMaleArr.push(chldrObj);
				}
			});
			$(this).append("<div class='f10'>" + (i + 1) +"조</div>");
			$(this).append("<div class='--tooltip-1 f6-g'>tCnt:" + totCnt + "/" + "rCnt:" + Number($(this).attr("rstCnt")) + "</div>");
			$(this).append("<div class='--tooltip-1 f6-g'>fCnt:" + fCnt + "/" + "mCnt:" + mCnt + "</div>");
			$(this).append("<div class='--tooltip-1 f5-g'>fArr:" + tbFemaleArr + "</div>");
			$(this).append("<div class='--tooltip-1 f5-g'>mArr:" + tbMaleArr + "</div>");
		});
		$("#table-use-" + i).each(function() {
			var fIdx = 0;
			var mIdx = 0;
			for (var x=1; x<=totCnt; x++) {
				if (fn_position_flag(totCnt, fCnt, mCnt, x) == true) {
					$(this).find(".td-use-" + x).addClass("td-use-m");
					$(this).find(".td-use-" + x).append("<div class='f6'>" + tbMaleArr[mIdx] +"</div>");
					mIdx++;
				} else {
					$(this).find(".td-use-" + x).addClass("td-use-f");
					$(this).find(".td-use-" + x).append("<div class='f6'>" + tbFemaleArr[fIdx] +"</div>");
					fIdx++;
				}
			}
		});
	}
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
	html += "		<span class='span-button'><button type='button' class='btn--del btn--del-0 f5'>행삭제</button></span>";
	html += "		<span class='span-button'><button type='button' class='btn--add btn--add-1 f5'>세로</button></span>";
	html += "		<span class='span-button'><button type='button' class='btn--add btn--add-2 f5'>상하</button></span>";
	html += "		<span class='span-button'><button type='button' class='btn--add btn--add-3 f5'>상단</button></span>";
	html += "		<span class='span-button'><button type='button' class='btn--add btn--add-4 f5'>하단</button></span>";
	html += "		<span class='span-form'><input type='text' class='text-container-add f10' value='' maxlength='10' placeholder='주석'/></span>";
	html += "		<span class='span-button'><button type='button' class='btn--add btn--add-5 f5'>공백세로</button></span>";
	html += "		<span class='span-button'><button type='button' class='btn--add btn--add-6 f5'>공백상단</button></span>";
	html += "		<span class='span-button'><button type='button' class='btn--add btn--add-7 f5'>공백하단</button></span>";
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
	$(".btn--del-0").each(function(pkIdx) {
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
	fn_info_display();
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
		html += "		<tbody><tr><td><div class='f10'>" + txt + "</div></td></tr></tbody>";	
		}
		html += "	</table>";
		html += "</div>";
	} else if (tp == 2 || tp == 3 || tp == 4 || tp == 6 || tp == 7) {
		html += "<div class='div-container-item--" + prntIdx + " div-container-item-row--m'>";
		html += "	<table class='table-container-row'>";
		if (tp == 2 || tp == 3) {
		html += "		<tbody class='table-use table-use-row'></tbody>";
		} else if ((tp == 4 || tp == 6) && fn_is_empty(txt) == false) {
		html += "		<tbody><tr><td><div class='f10'>" + txt + "</div></td></tr></tbody>";	
		}
		html += "	</table>";
		html += "	<table class='table-container-row'>";
		if (tp == 2 || tp == 4) {
		html += "		<tbody class='table-use table-use-row'></tbody>";
		} else if ((tp == 3 || tp == 7) && fn_is_empty(txt) == false) {
		html += "		<tbody><tr><td><div class='f10'>" + txt + "</div></td></tr></tbody>";	
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
	fn_info_display();
	fn_info_cnt();
};