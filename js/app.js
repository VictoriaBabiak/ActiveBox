$(function() {

	/* Fixed Header */

	let header = $("#header");
	let headerH = header.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, headerH);

	$(window).on("scroll resize", function() {
		headerH = header.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, headerH);
	});

	function checkScroll(scrollPos, headerH){
		if (scrollPos > headerH/10) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/* Smooth Scroll */

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		$("html, body").animate({
			scrollTop: elementOffset - 67
		}, 700);
	});

	/* Nav Toggle */

	let nav = $("#nav");
	let navToggle = $("#navToggle");

	navToggle.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");
	});

});