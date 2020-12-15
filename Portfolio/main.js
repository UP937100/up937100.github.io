(function ($, win) {
	// Taken from stackoverflow https://stackoverflow.com/questions/24768795/get-the-visible-height-of-a-div-with-jquery/26831113#26831113
	$.fn.inViewport = function (cb) {
		return this.each(function (i, el) {
			function visPx() {
				var H = $(this).height(),
					r = el.getBoundingClientRect(),
					t = r.top,
					b = r.bottom;
				return cb.call(el, Math.max(0, t > 0 ? H - t : b < H ? b : H));
			}
			visPx();
			$(win).on('resize scroll', visPx);
		});
	};
})(jQuery, window);

$('.projects-content').inViewport(function (px) {
	if (px) {
		$('.project-box').addClass('animate');
	}
});

$(document).ready(function () {
	$(window).scroll(function () {
		if (this.scrollY > 20) {
			$('.navbar').addClass('sticky');
		} else {
			$('.navbar').removeClass('sticky');
		}
	});

	$('.menu-btn').click(function () {
		$('.navbar .menu').toggleClass('active');
		$('.menu-btn i').toggleClass('active');
	});

	// typing animation
	var typed = new Typed('.typing', {
		strings: ['^700 Web Developer'],
		typeSpeed: 85,
		backSpeed: 60,
		loop: false,
	});
});
