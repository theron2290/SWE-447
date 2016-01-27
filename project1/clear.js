function init() {
	
	var canvas = document.getElementById("webgl-canvas");
	
	gl = WebGLUtils.setupWebGL(canvas);
	if (!gl) {return; }
	
	gl.clearColor(0.0, 0.0, 0.0, 0.5);
	gl.clear(gl.COLOR_BUFFER_BIT);	
}

function render() {

}

window.onload = init;
