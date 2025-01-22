function fn_is_empty(value) {
	if (value == null || value == "" || value == undefined) {
		return true;
	} else if (value != null && typeof value == "object" && !Object.keys(value).length) {
		return true;
	} else {
		return false;
	}
};
function fn_info_cnt() {
	var totTbUsrCntArr = new Array();
	var totFemaleArr = new Array();
	var totMaleArr = new Array();
	
	var totFemaleUsrCnt = Number($("#totFemaleUsrCnt").val());
	var totMaleUsrCnt = Number($("#totMaleUsrCnt").val());
	
	for (var i=1; i<=totFemaleUsrCnt; i++) {
		totFemaleArr.push("F-" + i);
	}
	for (var i=1; i<=totMaleUsrCnt; i++) {
		totMaleArr.push("M-" + i);
	}
	$("#totFemaleListTxt").text(totFemaleArr);
	$("#totMaleListTxt").text(totMaleArr);
	
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
				$(this).append("<div class='div-tooltip f6-g'>i:" + i + "/" + "n:" + usrCnt + "</div>");
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
		var rstCnt = 0;
		var fCnt = 0;
		var mCnt = 0;
		$("#td-sum-" + i).each(function() {
			totCnt = Number($(this).attr("totCnt"));
			rstCnt = Number($(this).attr("rstCnt"));
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
			$(this).append("<div class='div-tooltip-mtr f10'>" + (i + 1) +"조</div>");
			$(this).append("<div class='div-tooltip f6-g'>tCnt:" + totCnt + "/" + "rCnt:" + rstCnt + "</div>");
			$(this).append("<div class='div-tooltip f6-g'>fCnt:" + fCnt + "/" + "mCnt:" + mCnt + "</div>");
			$(this).append("<div class='div-tooltip f5-g'>fArr:" + tbFemaleArr + "</div>");
			$(this).append("<div class='div-tooltip f5-g'>mArr:" + tbMaleArr + "</div>");
		});
		$("#table-use-" + i).each(function() {
			var fIdx = 0;
			var mIdx = 0;
			var fRst = fCnt;
			var mRst = mCnt;
			var fDiff = (fCnt - mCnt);
			var mDiff = (mCnt - fCnt);
			for (var x=1; x<=totCnt; x++) {
				var flag = true;
				if (totCnt == fCnt) {
					flag = false;
				} else if (totCnt == mCnt) {
				} else if (fCnt == 1 && x == 2) {
					flag = false;
				} else if (mCnt == 1 && x != 2) {
					flag = false;
				} else if (fCnt == mCnt && x % 2 != 0) {
					flag = false;
				} else if (fCnt == mCnt && x % 2 == 0) {
				} else {
					if (totCnt == 6) {
						if (fCnt == 2 && (x == 2 || x == 5)) {
							flag = false;
						} else if (fCnt == 4 && (x != 2 && x != 5)) {
							flag = false;
						}
					} else if (totCnt == 7) {
						if (fCnt == 2 && (x == 2 || x == 5)) {
							flag = false;
						} else if (fCnt == 3 && (x == 2 || x == 4 || x == 6)) {
							flag = false;
						} else if (fCnt == 4 && (x != 2 && x != 4 && x != 6)) {
							flag = false;
						} else if (fCnt == 5 && (x != 2 && x != 5)) {
							flag = false;
						}
					} else if (totCnt == 8) {
						if (fCnt == 2 && (x == 2 || x == 6)) {
							flag = false;
						} else if (fCnt == 3 && (x == 2 || x == 5 || x == 7)) {
							flag = false;
						} else if (fCnt == 5 && (x != 2 && x != 5 && x != 7)) {
							flag = false;
						} else if (fCnt == 6 && (x != 2 && x != 6)) {
							flag = false;
						}
					} else if (totCnt == 9) {
						if (fCnt == 2 && (x == 2 || x == 7)) {
							flag = false;
						} else if (fCnt == 3 && (x == 2 || x == 5 || x == 8)) {
							flag = false;
						} else if (fCnt == 4 && (x == 1 || x == 3 || x == 6 || x == 8)) {
							flag = false;
						} else if (fCnt == 5 && (x != 1 && x != 3 && x != 6 && x != 8)) {
							flag = false;
						} else if (fCnt == 6 && (x != 2 && x != 5 && x != 8)) {
							flag = false;
						} else if (fCnt == 7 && (x != 2 && x != 7)) {
							flag = false;
						}
					} else if (totCnt == 10) {
						if (fCnt == 2 && (x == 2 || x == 7)) {
							flag = false;
						} else if (fCnt == 3 && (x == 2 || x == 5 || x == 8)) {
							flag = false;
						} else if (fCnt == 4 && (x == 1 || x == 3 || x == 6 || x == 8)) {
							flag = false;
						} else if (fCnt == 6 && (x != 1 && x != 3 && x != 6 && x != 8)) {
							flag = false;
						} else if (fCnt == 7 && (x != 2 && x != 5 && x != 8)) {
							flag = false;
						} else if (fCnt == 8 && (x != 2 && x != 7)) {
							flag = false;
						}
					} else if (totCnt == 11) {
						if (fCnt == 2 && (x == 2 || x == 7)) {
							flag = false;
						} else if (fCnt == 3 && (x == 2 || x == 5 || x == 8)) {
							flag = false;
						} else if (fCnt == 4 && (x == 1 || x == 3 || x == 5 || x == 8)) {
							flag = false;
						} else if (fCnt == 5 && (x == 1 || x == 3 || x == 4 || x == 6 || x == 8)) {
							flag = false;
						} else if (fCnt == 6 && (x != 1 && x != 3 && x != 4 && x != 6 && x != 8)) {
							flag = false;
						} else if (fCnt == 7 && (x != 1 && x != 3 && x != 5 && x != 8)) {
							flag = false;
						} else if (fCnt == 8 && (x != 2 && x != 5 && x != 8)) {
							flag = false;
						} else if (fCnt == 9 && (x != 2 && x != 7)) {
							flag = false;
						}
					} else if (totCnt == 12) {
						if (fCnt == 2 && (x == 2 || x == 7)) {
							flag = false;
						} else if (fCnt == 3 && (x == 1 || x == 4 || x == 8)) {
							flag = false;
						} else if (fCnt == 4 && (x == 2 || x == 4 || x == 7 || x == 9)) {
							flag = false;
						} else if (fCnt == 5 && (x == 1 || x == 3 || x == 5 || x == 7 || x == 9)) {
							flag = false;
						} else if (fCnt == 7 && (x != 1 && x != 3 && x != 5 && x != 7 && x != 9)) {
							flag = false;
						} else if (fCnt == 8 && (x != 2 && x != 4 && x != 7 && x != 9)) {
							flag = false;
						} else if (fCnt == 9 && (x != 1 && x != 4 && x != 8)) {
							flag = false;
						} else if (fCnt == 10 && (x != 2 && x != 7)) {
							flag = false;
						}
					}
				}
				if (flag == true) {
					$(this).find(".td-use-" + x).addClass("td-use-m");
					$(this).find(".td-use-" + x).append("<div class='div-tooltip-mtr f6'>" + tbMaleArr[mIdx] +"</div>");
					mIdx++;
					mRst--;
				} else {
					$(this).find(".td-use-" + x).addClass("td-use-f");
					$(this).find(".td-use-" + x).append("<div class='div-tooltip-mtr f6'>" + tbFemaleArr[fIdx] +"</div>");
					fIdx++;
					fRst--;
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
function fn_info_display() {
	$("button").each(function() {
		if ($("#tooltip-radio").prop("checked") == true) {
			$(this).css("display", "");
			$(".table-container-col").removeClass("table-container-col-off");
			$(".table-container-col").addClass("table-container-col-on");
			$(".table-container-row").removeClass("table-container-row-off");
			$(".table-container-row").addClass("table-container-row-on");
		} else {
			$(this).css("display", "none");
			$(".table-container-col").removeClass("table-container-col-on");
			$(".table-container-col").addClass("table-container-col-off");
			$(".table-container-row").removeClass("table-container-row-on");
			$(".table-container-row").addClass("table-container-row-off");
		}
	});
	$(".div-tooltip").each(function() {
		if ($("#tooltip-radio").prop("checked") == true) {
			$(this).css("display", "");
		} else {
			$(this).css("display", "none");
		}
	});
};
function fn_div_container_add() {
	var html = "";
	html += "<div class='div-setting-item div-tooltip div-container-item-btn'>";
	html += "	<span class='span-label-button'><button type='button' class='btn-container-del f5'><img src='resources/assets/img/ico_btn_remove.png'/>삭제</button></span>";
	html += "	<span class='span-label-button'><button type='button' class='btn-container-add-1 f5'><img src='resources/assets/img/ico_btn_add.png'/>세로</button></span>";
	html += "	<span class='span-label-button'><button type='button' class='btn-container-add-2 f5'><img src='resources/assets/img/ico_btn_add.png'/>상하</button></span>";
	html += "	<span class='span-label-button'><button type='button' class='btn-container-add-3 f5'><img src='resources/assets/img/ico_btn_add.png'/>상단</button></span>";
	html += "	<span class='span-label-button'><button type='button' class='btn-container-add-4 f5'><img src='resources/assets/img/ico_btn_add.png'/>하단</button></span>";
	html += "	<span class='span-label-title f10'>주석</span>";
	html += "	<span class='span-label-form'><input type='text' class='text-container-add f10'/></span>";
	html += "	<span class='span-label-button'><button type='button' class='btn-container-add-5 f5'><img src='resources/assets/img/ico_btn_add.png'/>공백세로</button></span>";
	html += "	<span class='span-label-button'><button type='button' class='btn-container-add-6 f5'><img src='resources/assets/img/ico_btn_add.png'/>공백상하</button></span>";
	html += "	<span class='span-label-button'><button type='button' class='btn-container-add-7 f5'><img src='resources/assets/img/ico_btn_add.png'/>공백상단</button></span>";
	html += "	<span class='span-label-button'><button type='button' class='btn-container-add-8 f5'><img src='resources/assets/img/ico_btn_add.png'/>공백하단</button></span>";
	html += "</div>";
	html += "<div class='div-container-item'>"; 
	html += "</div>";
	$("#div-container").append(html);
	fn_div_container_reset();
};
function fn_div_container_del(pkIdx) {
	$("#div-container-item--" + pkIdx).remove();
	$("#div-container-item-btn--" + pkIdx).remove();
	fn_div_container_reset();
};
function fn_div_container_reset() {
	$(".div-container-item").each(function(pkIdx) {
		$(this).attr("id", "div-container-item--" + pkIdx);
	});
	$(".div-container-item-btn").each(function(pkIdx) {
		$(this).attr("id", "div-container-item-btn--" + pkIdx);
	});
	$(".btn-container-del").each(function(pkIdx) {
		$(this).attr("onclick", "fn_div_container_del(" + pkIdx + ");");
	});
	$(".text-container-add").each(function(pkIdx) {
		$(this).attr("id", "text-container-add--" + pkIdx);
	});
	for (var i=1; i<=7; i++) {
		$(".btn-container-add-" + i).each(function(pkIdx) {
			$(this).attr("onclick", "fn_div_container_item_add(" + i + ", " + pkIdx + ");");
		});
	}
	fn_info_display();
};
function fn_div_container_item_add(tp, prntIdx) {
	var html01 = "<div class='div-setting-item div-tooltip'><span class='span-label-button'><button type='button' class='btn-div-container-item-table-del--" + prntIdx + " btn-div-container-item-table-del f5'><img src='resources/assets/img/ico_btn_remove.png'/>삭제</button></span></div>";
	
	var html = "";
	var txt = $("#text-container-add--" + prntIdx).val();
	$("#text-container-add--" + prntIdx).val("");
	
	if (tp == 1 || tp == 5) {
		html += "<div class='div-container-item--" + prntIdx + " div-container-item-col div-container-item-col--m'>";
		html += html01;
		html += "	<table class='table-container table-container-col--" + prntIdx + " table-container-col'>";
		if (tp == 1) {
		html += "		<tbody class='table-use table-use-col'></tbody>";
		} else if (tp == 5 && fn_is_empty(txt) == false) {
		html += "		<tbody class='table-txt table-txt-col'><tr><td>" + txt + "</td></tr></tbody>";	
		}
		html += "	</table>";
		html += "</div>";
	} else if (tp == 2 || tp == 3 || tp == 4 || tp == 6 || tp == 7) {
		html += "<div class='div-container-item--" + prntIdx + " div-container-item-row div-container-item-row--m'>";
		html += html01;
		html += "	<table class='table-container table-container-row--" + prntIdx + " table-container-row'>";
		if (tp == 2 || tp == 3) {
		html += "		<tbody class='table-use table-use-row'></tbody>";
		} else if ((tp == 4 || tp == 6) && fn_is_empty(txt) == false) {
		html += "		<tbody class='table-txt table-txt-col'><tr><td>" + txt + "</td></tr></tbody>";	
		}
		html += "	</table>";
		html += "	<table class='table-container table-container-row--" + prntIdx + " table-container-row'>";
		if (tp == 2 || tp == 4) {
		html += "		<tbody class='table-use table-use-row'></tbody>";
		} else if ((tp == 3 || tp == 7) && fn_is_empty(txt) == false) {
		html += "		<tbody class='table-txt table-txt-col'><tr><td>" + txt + "</td></tr></tbody>";	
		}
		html += "	</table>";
		html += "</div>";
	}
	$("#div-container-item--" + prntIdx).append(html);
	fn_div_container_item_reset(prntIdx);
};
function fn_div_container_item_del(prntIdx, pkIdx) {
	$("#div-container-item--" + prntIdx + "--" + pkIdx).remove();
	fn_div_container_item_reset(prntIdx);
};
function fn_div_container_item_reset(prntIdx) {
	$(".div-container-item--" + prntIdx).each(function(pkIdx) {
		$(this).attr("id", "div-container-item--" + prntIdx + "--" + pkIdx);
	});
	$(".btn-div-container-item-table-del--" + prntIdx).each(function(pkIdx) {
		$(this).attr("onclick", "fn_div_container_item_del(" + prntIdx + "," + pkIdx + ");");
	});
	fn_info_display();
	fn_info_cnt();
};