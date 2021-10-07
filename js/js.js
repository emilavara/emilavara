const canvas = document.querySelector('canvas'),
				 ctx = canvas.getContext('2d')

canvas.width = canvas.height = 128

resize();
window.onresize = resize;

function resize() {
	canvas.width = window.innerWidth * window.devicePixelRatio
	canvas.height = window.innerHeight * window.devicePixelRatio
	canvas.style.width = window.innerWidth + 'px'
	canvas.style.height = window.innerHeight + 'px'
}

function noise(ctx) {
    
	const w = ctx.canvas.width,
				h = ctx.canvas.height,
				iData = ctx.createImageData(w, h),
				buffer32 = new Uint32Array(iData.data.buffer),
				len = buffer32.length
	  let i = 0

	for(; i < len;i++)
		
		if (Math.random() < 0.5) buffer32[i] = 0xffffffff;

		ctx.putImageData(iData, 0, 0);
}

(function loop() {
    noise(ctx);
    requestAnimationFrame(loop);
})();

function getTime() {
	const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var d = new Date();
	var n = d.getMonth();
	var y = d.getFullYear();

	document.getElementById("date").innerHTML = monthNames[d.getMonth()] + ", " + y + "<br>STOCKHOLM, SWEDEN";
  }

var x
function loadingTimer() {
	x = setTimeout(showPage, 1500);
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("wrapper").style.display = "grid";
}