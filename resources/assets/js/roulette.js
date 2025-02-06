function fn_make_roulette(tp) {
	$(".canvas-roulette-rotate").empty();
	var cols = ["#93DAFF", "#3DFF92", "#FFB6C1", "#93DAFF", "#3DFF92", "#FFB6C1", "#93DAFF", "#3DFF92", "#FFB6C1", "#93DAFF", "#3DFF92", "#FFB6C1", "#93DAFF", "#3DFF92", "#FFB6C1", "#93DAFF", "#3DFF92", "#FFB6C1"];
	var prds = fn_make_roulette_prd(tp);
	var prdCnt = Number(prds.length);
	var panel = document.querySelector(".canvas-roulette-rotate");
	var ctx = panel.getContext("2d");
	var cw = Number(panel.width / 2);
	var ch = Number(panel.height / 2);
	var arc = Number((2 * Math.PI) / prdCnt);
	for (var i=0; i<prdCnt; i++) {
		ctx.beginPath();
		ctx.fillStyle = cols[i % Number(cols.length)];
		ctx.moveTo(cw, ch);
		ctx.arc(cw, ch, (cw - 2), (arc * i) - (Math.PI / 2), (arc * (i + 1)) - (Math.PI / 2));
		ctx.fill();
		ctx.closePath();
	}
	ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#000000";
	ctx.font = "1.0rem Pretendard";
	ctx.textAlign = "center";
	for (var i=0; i<prdCnt; i++) {
		var angle = (arc * i) + (arc / 2) - (Math.PI / 2);
		ctx.save();
		ctx.translate(
			cw + Math.cos(angle) * (cw - 50),
			ch + Math.sin(angle) * (ch - 50)
		);
		ctx.rotate(angle + (Math.PI / 2));
		ctx.fillText(prds[i], 0, 0);
		ctx.restore();
	}
	ctx.beginPath();
	ctx.moveTo(cw, ch);
	ctx.arc(cw, ch, 20, 0, (Math.PI * 2));
	ctx.fill();
	ctx.closePath();
}
function fn_rotate_roulette(tp) {
	$(".btn-roulette--cls").attr("disabled", true);
	$(".btn--roulette--strt").attr("disabled", true);
	var prds = fn_make_roulette_prd(tp);
	var prdCnt = Number(prds.length);
	var panel = document.querySelector(".canvas-roulette-rotate");
	var ran = Number(Math.floor(Math.random() * prdCnt));
	var arc = (360 / prdCnt);
	var rotate = (360 - (arc * (ran + 1)) + 3600) + (arc / 3);
	panel.style.transform = "rotate(" + rotate + "deg)";
	panel.style.transition = "2000ms";
	fn_rotation_sz(tp, (ran + 1));
	setTimeout(() => fn_notice_roulette(tp, (ran + 1), prds[ran]), 2000);
};
function fn_make_roulette_prd(tp) {
	var totTbCnt = Number($(".table-use").length);
	var arr = new Array();
	for (var i=1; i<totTbCnt; i++) {
		if (tp == 1) {
			arr.push("여" + i + "칸");
		} else if (tp == 2) {
			arr.push("남" + i + "칸");
		}
	}
	return arr;
};
function fn_notice_roulette(tp, ran, str) {
	$(".btn-roulette--cls").attr("disabled", false);
	$(".btn--roulette--strt").attr("disabled", false);
	console.log(tp, ran, str);
};