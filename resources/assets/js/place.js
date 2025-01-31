function fn_place_pop(tp) {
	if (tp == 0) {
		$("#div-dim-bg").removeClass("div-dim-bg--active");
		$("#div-pop-place").removeClass("div-pop--active");
	} else {
		$("#div-dim-bg").addClass("div-dim-bg--active");
		$("#div-pop-place").addClass("div-pop--active");
	}
};
function fn_place_set(tp, sz) {
	$("#div-container").empty();
	$("#totFemaleUsrCnt").val(Number(sz / 2));
	$("#totMaleUsrCnt").val(Number(sz / 2));
	if (tp == 1) {
		if (sz == 80) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("에어컨");
			fn_div_container_item_add(8, 0);
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("스크린");
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("냉장고");
			fn_div_container_item_add(8, 0);
			fn_div_container_add();
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_add();
			fn_div_container_item_add(1, 2);
			fn_div_container_item_add(1, 2);
			fn_div_container_item_add(1, 2);
			$("#text-container-left-add--" + 2).val("입구");
			fn_div_container_item_add(8, 2);
			fn_div_container_add();
			fn_div_container_item_add(1, 3);
			$("#text-container-left-add--" + 3).val("쇼파");
			$("#text-container-right-add--" + 3).val("옷걸이");
			fn_div_container_item_add(3, 3);
		} else if (sz == 70) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("에어컨");
			fn_div_container_item_add(8, 0);
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("스크린");
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("냉장고");
			fn_div_container_item_add(8, 0);
			fn_div_container_add();
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_add();
			fn_div_container_item_add(1, 2);
			fn_div_container_item_add(1, 2);
			fn_div_container_item_add(1, 2);
			$("#text-container-left-add--" + 2).val("입구");
			fn_div_container_item_add(8, 2);
			fn_div_container_add();
			fn_div_container_item_add(1, 3);
			$("#text-container-left-add--" + 3).val("쇼파");
			$("#text-container-right-add--" + 3).val("옷걸이");
			fn_div_container_item_add(7, 3);
		} else if (sz == 60) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("에어컨");
			fn_div_container_item_add(8, 0);
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("스크린");
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("냉장고");
			fn_div_container_item_add(8, 0);
			fn_div_container_add();
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_add();
			fn_div_container_item_add(1, 2);
			fn_div_container_item_add(1, 2);
			fn_div_container_item_add(1, 2);
			$("#text-container-left-add--" + 2).val("입구");
			fn_div_container_item_add(8, 2);
			fn_div_container_add();
			fn_div_container_item_add(5, 3);
			$("#text-container-left-add--" + 3).val("쇼파");
			$("#text-container-right-add--" + 3).val("옷걸이");
			fn_div_container_item_add(7, 3);
		} else if (sz == 50) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("에어컨");
			fn_div_container_item_add(8, 0);
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("스크린");
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("냉장고");
			fn_div_container_item_add(8, 0);
			fn_div_container_add();
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_add();
			fn_div_container_item_add(1, 2);
			fn_div_container_item_add(1, 2);
			fn_div_container_item_add(5, 2);
			$("#text-container-left-add--" + 2).val("입구");
			fn_div_container_item_add(8, 2);
			fn_div_container_add();
			fn_div_container_item_add(5, 3);
			$("#text-container-left-add--" + 3).val("쇼파");
			$("#text-container-right-add--" + 3).val("옷걸이");
			fn_div_container_item_add(7, 3);
		} else if (sz == 40) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("에어컨");
			fn_div_container_item_add(8, 0);
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("스크린");
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("냉장고");
			fn_div_container_item_add(8, 0);
			fn_div_container_add();
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_add();
			fn_div_container_item_add(1, 2);
			fn_div_container_item_add(5, 2);
			fn_div_container_item_add(5, 2);
			$("#text-container-left-add--" + 2).val("입구");
			fn_div_container_item_add(8, 2);
			fn_div_container_add();
			fn_div_container_item_add(5, 3);
			$("#text-container-left-add--" + 3).val("쇼파");
			$("#text-container-right-add--" + 3).val("옷걸이");
			fn_div_container_item_add(7, 3);
		}
	} else if (tp == 2) {
		if (sz == 60) {
			fn_div_container_add();
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("냉장고");
			fn_div_container_item_add(8, 0);
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("스크린");
			fn_div_container_item_add(8, 0);
			fn_div_container_add();
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_add();
			$("#text-container-left-add--" + 2).val("입구");
			$("#text-container-right-add--" + 2).val("옷걸이");
			fn_div_container_item_add(5, 2);
			$("#text-container-left-add--" + 2).val("쇼파");
			fn_div_container_item_add(3, 2);
			fn_div_container_item_add(3, 2);
		} else if (sz == 50) {
			fn_div_container_add();
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("냉장고");
			fn_div_container_item_add(8, 0);
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("스크린");
			fn_div_container_item_add(8, 0);
			fn_div_container_add();
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_add();
			$("#text-container-left-add--" + 2).val("입구");
			$("#text-container-right-add--" + 2).val("옷걸이");
			fn_div_container_item_add(5, 2);
			$("#text-container-left-add--" + 2).val("쇼파");
			fn_div_container_item_add(7, 2);
			fn_div_container_item_add(3, 2);
		} else if (sz == 40) {
			fn_div_container_add();
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("냉장고");
			fn_div_container_item_add(8, 0);
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("스크린");
			fn_div_container_item_add(8, 0);
			fn_div_container_add();
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_add();
			$("#text-container-left-add--" + 2).val("입구");
			$("#text-container-right-add--" + 2).val("옷걸이");
			fn_div_container_item_add(5, 2);
			$("#text-container-left-add--" + 2).val("쇼파");
			fn_div_container_item_add(7, 2);
			fn_div_container_item_add(7, 2);
		}
	} else if (tp == 3) {
		if (sz == 90) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			$("#text-container-left-add--" + 0).val("입구");
			$("#text-container-right-add--" + 0).val("일회용품");
			fn_div_container_item_add(5, 0);
			fn_div_container_add();
			$("#text-container-left-add--" + 1).val("싱크대");
			fn_div_container_item_add(8, 1);
			$("#text-container-left-add--" + 1).val("냉장고");
			fn_div_container_item_add(3, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(5, 1);
			$("#text-container-left-add--" + 1).val("파우더룸");
			$("#text-container-right-add--" + 1).val("화장실");
			fn_div_container_item_add(5, 1);
		} else if (sz == 80) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			$("#text-container-left-add--" + 0).val("입구");
			$("#text-container-right-add--" + 0).val("일회용품");
			fn_div_container_item_add(5, 0);
			fn_div_container_add();
			$("#text-container-left-add--" + 1).val("싱크대");
			fn_div_container_item_add(8, 1);
			$("#text-container-left-add--" + 1).val("냉장고");
			fn_div_container_item_add(3, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(5, 1);
			$("#text-container-left-add--" + 1).val("파우더룸");
			$("#text-container-right-add--" + 1).val("화장실");
			fn_div_container_item_add(5, 1);
		} else if (sz == 70) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			$("#text-container-left-add--" + 0).val("입구");
			$("#text-container-right-add--" + 0).val("일회용품");
			fn_div_container_item_add(5, 0);
			fn_div_container_add();
			$("#text-container-left-add--" + 1).val("싱크대");
			fn_div_container_item_add(8, 1);
			$("#text-container-left-add--" + 1).val("냉장고");
			fn_div_container_item_add(3, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(5, 1);
			$("#text-container-left-add--" + 1).val("파우더룸");
			$("#text-container-right-add--" + 1).val("화장실");
			fn_div_container_item_add(5, 1);
		} else if (sz == 60) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			$("#text-container-left-add--" + 0).val("입구");
			$("#text-container-right-add--" + 0).val("일회용품");
			fn_div_container_item_add(5, 0);
			fn_div_container_add();
			$("#text-container-left-add--" + 1).val("싱크대");
			fn_div_container_item_add(8, 1);
			$("#text-container-left-add--" + 1).val("냉장고");
			fn_div_container_item_add(7, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(5, 1);
			$("#text-container-left-add--" + 1).val("파우더룸");
			$("#text-container-right-add--" + 1).val("화장실");
			fn_div_container_item_add(5, 1);
		}
	} else if (tp == 4) {
		if (sz == 40) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("에어컨");
			$("#text-container-right-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_add();
			$("#text-container-right-add--" + 1).val("냉장고");
			fn_div_container_item_add(8, 1);
			fn_div_container_item_add(2, 1);
			$("#text-container-right-add--" + 1).val("입구");
			fn_div_container_item_add(8, 1);
		}
	} else if (tp == 5) {
		if (sz == 14) {
			fn_div_container_add();
			fn_div_container_item_add(2, 0);
			$("#text-container-left-add--" + 0).val("모니터");
			$("#text-container-right-add--" + 0).val("입구");
			fn_div_container_item_add(5, 0);
		}
	} else if (tp == 6) {
		if (sz == 60) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("냉장고");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(1, 0);
			$("#text-container-left-add--" + 0).val("쇼파");
			fn_div_container_item_add(8, 0);
			fn_div_container_add();
			$("#text-container-left-add--" + 1).val("스크린");
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(2, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_add();
			$("#text-container-left-add--" + 2).val("입구");
			fn_div_container_item_add(8, 2);
		}
	} else if (tp == 7) {
		if (sz == 60) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("창고");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(5, 0);
			$("#text-container-left-add--" + 0).val("화장실");
			$("#text-container-right-add--" + 0).val("화장실");
			fn_div_container_item_add(6, 0);
			$("#text-container-right-add--" + 0).val("부스");
			fn_div_container_item_add(6, 0);
			$("#text-container-left-add--" + 0).val("입구");
			fn_div_container_item_add(8, 0);
			fn_div_container_add();
			$("#text-container-left-add--" + 1).val("스크린");
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(2, 1);
			fn_div_container_item_add(2, 1);
			fn_div_container_item_add(2, 1);
		} else if (sz == 70) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("창고");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(5, 0);
			$("#text-container-left-add--" + 0).val("화장실");
			$("#text-container-right-add--" + 0).val("화장실");
			fn_div_container_item_add(4, 0);
			$("#text-container-right-add--" + 0).val("부스");
			fn_div_container_item_add(6, 0);
			$("#text-container-left-add--" + 0).val("입구");
			fn_div_container_item_add(8, 0);
			fn_div_container_add();
			$("#text-container-left-add--" + 1).val("스크린");
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(2, 1);
			fn_div_container_item_add(2, 1);
			fn_div_container_item_add(2, 1);
		} else if (sz == 80) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("창고");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(5, 0);
			$("#text-container-left-add--" + 0).val("화장실");
			$("#text-container-right-add--" + 0).val("화장실");
			fn_div_container_item_add(4, 0);
			$("#text-container-right-add--" + 0).val("부스");
			fn_div_container_item_add(4, 0);
			$("#text-container-left-add--" + 0).val("입구");
			fn_div_container_item_add(8, 0);
			fn_div_container_add();
			$("#text-container-left-add--" + 1).val("스크린");
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(2, 1);
			fn_div_container_item_add(2, 1);
			fn_div_container_item_add(2, 1);
		}
	} else if (tp == 8) {
		if (sz == 60) {
			fn_div_container_add();
			fn_div_container_item_add(5, 0);
			$("#text-container-left-add--" + 0).val("입구");
			$("#text-container-right-add--" + 0).val("냉장고");
			fn_div_container_item_add(4, 0);
			$("#text-container-left-add--" + 0).val("스크린");
			fn_div_container_item_add(4, 0);
			fn_div_container_add();
			$("#text-container-left-add--" + 1).val("테라스");
			fn_div_container_item_add(8, 1);
			fn_div_container_item_add(2, 1);
			fn_div_container_item_add(2, 1);
		}
	} else if (tp == 9) {
		if (sz == 18) {
			fn_div_container_add();
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("테라스");
			fn_div_container_item_add(8, 0);
			fn_div_container_add();
			$("#text-container-left-add--" + 1).val("모니터");
			$("#text-container-right-add--" + 1).val("입구");
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(3, 1);
			fn_div_container_item_add(3, 1);
			$("#text-container-left-add--" + 1).val("주방");
			fn_div_container_item_add(5, 1);
		}
	} else if (tp == 10) {
		if (sz == 60) {
			fn_div_container_add();
			fn_div_container_item_add(8, 0);
			fn_div_container_item_add(8, 0);
			fn_div_container_item_add(8, 0);
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("입구");			
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("화장실");
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("흡연실");
			fn_div_container_item_add(8, 0);
			fn_div_container_add();
			$("#text-container-left-add--" + 1).val("모니터");
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(2, 1);
			fn_div_container_item_add(2, 1);
			fn_div_container_item_add(2, 1);
		}
	} else if (tp == 11) {
		if (sz == 24) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("냉장고");
			$("#text-container-right-add--" + 0).val("입구");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(1, 0);
			fn_div_container_item_add(1, 0);
			$("#text-container-left-add--" + 0).val("창문");
			fn_div_container_item_add(5, 0);
		}
	} else if (tp == 12) {
		if (sz == 16) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("입구");
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("주방");
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("화장실");
			fn_div_container_item_add(8, 0);
			fn_div_container_add();
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
		}
	} else if (tp == 13) {
		if (sz == 80) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("주방");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(1, 0);
			fn_div_container_item_add(1, 0);
			fn_div_container_add();
			$("#text-container-left-add--" + 1).val("화장실");
			fn_div_container_item_add(8, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_add();
			$("#text-container-left-add--" + 2).val("스크린");
			$("#text-container-right-add--" + 2).val("옥상");
			fn_div_container_item_add(5, 2);
			fn_div_container_item_add(1, 2);
			fn_div_container_item_add(1, 2);
			fn_div_container_add();
			$("#text-container-left-add--" + 3).val("입구");
			fn_div_container_item_add(8, 3);
			fn_div_container_item_add(1, 3);
			fn_div_container_item_add(1, 3);
		}
	} else if (tp == 14) {
		if (sz == 40) {
			fn_div_container_add();
			$("#text-container-left-add--" + 0).val("입구");
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("냉장고");
			fn_div_container_item_add(8, 0);
			fn_div_container_item_add(8, 0);
			fn_div_container_item_add(8, 0);
			$("#text-container-left-add--" + 0).val("화장실");
			fn_div_container_item_add(8, 0);
			fn_div_container_add();
			$("#text-container-left-add--" + 1).val("모니터");
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(2, 1);
			fn_div_container_item_add(2, 1);
			$("#text-container-left-add--" + 1).val("테라스");
			fn_div_container_item_add(5, 1);
		}
	}
	fn_place_pop(0);
};