function fn_make_table_roulette(tp, ran) {
	$(".btn-roulette--cls").attr("disabled", false);
	$(".btn--roulette--strt").attr("disabled", false);
	$(".canvas-roulette-rotate").empty();
	var cols = ["#93DAFF", "#3DFF92", "#FFB6C1", "#3DFF92"];
	var canvas = document.querySelector(".canvas-roulette-rotate");
	var canvas_ctx = canvas.getContext("2d");
	var canvas_cw = Number(canvas.width / 2);
	var canvas_ch = Number(canvas.height / 2);
	var prds = fn_make_table_roulette_prd(tp);
	var prdCnt = Number(prds.length);
	var arc = Number((2 * Math.PI) / prdCnt);
	for (var i=0; i<prdCnt; i++) {
		canvas_ctx.beginPath();
		if (ran == 9999) {
			canvas_ctx.fillStyle = cols[i % Number(cols.length)];
		} else if (i == (ran - 1)) {
			canvas_ctx.fillStyle = cols[0];
		} else {
			canvas_ctx.fillStyle = cols[2];
		}
		canvas_ctx.moveTo(canvas_cw, canvas_ch);
		canvas_ctx.arc(canvas_cw, canvas_ch, (canvas_cw - 2), (arc * i) - (Math.PI / 2), (arc * (i + 1)) - (Math.PI / 2));
		canvas_ctx.fill();
		canvas_ctx.closePath();
	}
	canvas_ctx.strokeStyle = "#000000";
	canvas_ctx.fillStyle = "#000000";
	canvas_ctx.font = "1.0rem Pretendard";
	canvas_ctx.textAlign = "center";
	for (var i=0; i<prdCnt; i++) {
		var angle = (arc * i) + (arc / 2) - (Math.PI / 2);
		canvas_ctx.save();
		canvas_ctx.translate(
			canvas_cw + Math.cos(angle) * (canvas_cw - 50),
			canvas_ch + Math.sin(angle) * (canvas_ch - 50)
		);
		canvas_ctx.rotate(angle + (Math.PI / 2));
		if (i == (ran - 1)) {
			canvas_ctx.fillText("`" + prds[i] + "`", 0, 0);
			canvas_ctx.fillText("당첨!", 0, 30);
		} else {
			canvas_ctx.fillText(prds[i], 0, 0);
		}
		canvas_ctx.restore();
	}
}
function fn_rotate_table_roulette(tp) {
	$(".btn-roulette--cls").attr("disabled", true);
	$(".btn--roulette--strt").attr("disabled", true);
	var canvas = document.querySelector(".canvas-roulette-rotate");
	var prds = fn_make_table_roulette_prd(tp);
	var prdCnt = Number(prds.length);
	var ran = Number(Math.floor(Math.random() * prdCnt));
	var arc = (360 / prdCnt);
	var rotate = (360 - (arc * (ran + 1)) + 3600) + (arc / 3);
	canvas.style.transform = "rotate(" + rotate + "deg)";
	canvas.style.transition = "2000ms";
	fn_rotation_sz(tp, (ran + 1));
	setTimeout(() => fn_make_table_roulette(tp, (ran + 1)), 2000);
};
function fn_make_table_roulette_prd(tp) {
	var totTbCnt = Number($(".table-use").length);
	var arr = new Array();
	for (var i=1; i<totTbCnt; i++) {
		if (tp == 1) {
			arr.push("여자" + i + "칸");
		} else if (tp == 2) {
			arr.push("남자" + i + "칸");
		}
	}
	return arr;
};