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
			$("#text-container-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(1, 0);
			$("#text-container-add--" + 0).val("쇼파");
			fn_div_container_item_add(5, 0);
			fn_div_container_add();
			$("#text-container-add--" + 1).val("에어컨");
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(3, 1);
			fn_div_container_item_add(3, 1);
			fn_div_container_item_add(3, 1);
		} else if (sz == 70) {
			fn_div_container_add();
			$("#text-container-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(1, 0);
			$("#text-container-add--" + 0).val("쇼파");
			fn_div_container_item_add(5, 0);
			fn_div_container_add();
			$("#text-container-add--" + 1).val("에어컨");
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(3, 1);
			fn_div_container_item_add(3, 1);
			fn_div_container_item_add(6, 1);
		} else if (sz == 60) {
			fn_div_container_add();
			$("#text-container-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(5, 0);
			$("#text-container-add--" + 0).val("쇼파");
			fn_div_container_item_add(5, 0);
			fn_div_container_add();
			$("#text-container-add--" + 1).val("에어컨");
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(3, 1);
			fn_div_container_item_add(3, 1);
			fn_div_container_item_add(6, 1);
		} else if (sz == 50) {
			fn_div_container_add();
			$("#text-container-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(4, 0);
			fn_div_container_item_add(5, 0);
			$("#text-container-add--" + 0).val("쇼파");
			fn_div_container_item_add(5, 0);
			fn_div_container_add();
			$("#text-container-add--" + 1).val("에어컨");
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(3, 1);
			fn_div_container_item_add(3, 1);
			fn_div_container_item_add(6, 1);
		} else if (sz == 40) {
			fn_div_container_add();
			$("#text-container-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(4, 0);
			fn_div_container_item_add(5, 0);
			$("#text-container-add--" + 0).val("쇼파");
			fn_div_container_item_add(5, 0);
			fn_div_container_add();
			$("#text-container-add--" + 1).val("에어컨");
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(3, 1);
			fn_div_container_item_add(6, 1);
			fn_div_container_item_add(6, 1);
		}
	} else if (tp == 2) {
		if (sz == 60) {
			fn_div_container_add();
			$("#text-container-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(1, 0);
			fn_div_container_item_add(5, 0);
			fn_div_container_add();
			$("#text-container-add--" + 1).val("냉장고");
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(2, 1);
			fn_div_container_item_add(1, 1);
			$("#text-container-add--" + 1).val("쇼파");
			fn_div_container_item_add(5, 1);
		} else if (sz == 50) {
			fn_div_container_add();
			$("#text-container-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(1, 0);
			fn_div_container_item_add(5, 0);
			fn_div_container_add();
			$("#text-container-add--" + 1).val("냉장고");
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(2, 1);
			fn_div_container_item_add(5, 1);
			$("#text-container-add--" + 1).val("쇼파");
			fn_div_container_item_add(5, 1);
		} else if (sz == 40) {
			fn_div_container_add();
			$("#text-container-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(5, 0);
			fn_div_container_add();
			$("#text-container-add--" + 1).val("냉장고");
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(2, 1);
			fn_div_container_item_add(5, 1);
			$("#text-container-add--" + 1).val("쇼파");
			fn_div_container_item_add(5, 1);
		}
	} else if (tp == 3) {
		if (sz == 90) {
			fn_div_container_add();
			$("#text-container-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			$("#text-container-add--" + 0).val("일회용품");
			fn_div_container_item_add(5, 0);
			fn_div_container_add();
			fn_div_container_item_add(5, 1);
			$("#text-container-add--" + 1).val("냉장고");
			fn_div_container_item_add(3, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(5, 1);
			$("#text-container-add--" + 1).val("화장실");
			fn_div_container_item_add(5, 1);
		} else if (sz == 80) {
			fn_div_container_add();
			$("#text-container-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			$("#text-container-add--" + 0).val("일회용품");
			fn_div_container_item_add(5, 0);
			fn_div_container_add();
			fn_div_container_item_add(5, 1);
			$("#text-container-add--" + 1).val("냉장고");
			fn_div_container_item_add(3, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(1, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(5, 1);
			$("#text-container-add--" + 1).val("화장실");
			fn_div_container_item_add(5, 1);
		} else if (sz == 70) {
			fn_div_container_add();
			$("#text-container-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			$("#text-container-add--" + 0).val("일회용품");
			fn_div_container_item_add(5, 0);
			fn_div_container_add();
			fn_div_container_item_add(5, 1);
			$("#text-container-add--" + 1).val("냉장고");
			fn_div_container_item_add(3, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(5, 1);
			$("#text-container-add--" + 1).val("화장실");
			fn_div_container_item_add(5, 1);
		} else if (sz == 60) {
			fn_div_container_add();
			$("#text-container-add--" + 0).val("스크린");
			fn_div_container_item_add(5, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			fn_div_container_item_add(2, 0);
			$("#text-container-add--" + 0).val("일회용품");
			fn_div_container_item_add(5, 0);
			fn_div_container_add();
			fn_div_container_item_add(5, 1);
			$("#text-container-add--" + 1).val("냉장고");
			fn_div_container_item_add(7, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(5, 1);
			fn_div_container_item_add(5, 1);
			$("#text-container-add--" + 1).val("화장실");
			fn_div_container_item_add(5, 1);
		}
	}
	fn_place_pop(0);
};