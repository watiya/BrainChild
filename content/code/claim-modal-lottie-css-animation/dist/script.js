// loads the lottie animation

var anim1 = lottie.loadAnimation({
	container: document.getElementById("anim1"),
	renderer: "svg",
	loop: false,
	autoplay: true,
	path: "https://watiya.github.io/BrainChild/content/code/claim-modal-lottie-css-animation/dist/img/lf30_brfwfvq7.json"
});

// first click: open modal

$(document).on("click", ".modal_open", function ($e) {
	$(".modal").addClass("is-in");
	anim1.goToAndPlay(100);
});

// second click: close modal

$(document).on("click", "#claim-done", function ($e) {
	$(".modal").removeClass("is-in");
});