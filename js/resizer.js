function ResizerInit() {
	window.addEventListener('load', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
}

function resizeCanvas() {
    OnWindowSizeChanged(window.innerWidth, window.innerHeight);
}

function OnWindowSizeChanged(width, height) {
	canvas.style.width = window.innerWidth + "px";
	canvas.style.height = window.innerHeight + "px";
}

// another variant
// function OnWindowSizeChanged(width, height) {
// 	var def_width = 720;
// 	var def_height = 1280;
// 	var def_vertical_width = 720;
// 	var def_vertical_height = 1280;
// 	if ((window.innerWidth / window.innerHeight) < (def_vertical_width / def_vertical_height)) {
// 		canvas.style.width = window.innerWidth + "px";
// 		canvas.style.height = ((window.innerWidth) * (def_vertical_height / def_vertical_width)) + "px";
// 	}
// 	else {
// 		if ((window.innerWidth * (def_width / def_height)) > (window.innerHeight)) {
// 			canvas.style.height = (window.innerHeight) + "px";
// 			canvas.style.width = ((window.innerHeight) * (def_height / def_width)) + "px";
// 		} else {
// 			canvas.style.height = (window.innerWidth * (def_width / def_height)) + "px";
// 			canvas.style.width = (window.innerWidth) + "px";
// 		}
// 	}

// 	loader_canvas.style.height = canvas.style.height;
// 	loader_canvas.style.width = canvas.style.width;

// 	SPLASH_SCREEN.style.height = canvas.style.height;
// 	SPLASH_SCREEN.style.width = canvas.style.width;
// }