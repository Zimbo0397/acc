
// if ($.browser.mobile) $('body').addClass('mobile');
// if ($.browser.safari) $('body').addClass('safari');
// if ($.browser.iphone || $.browser.ipad || $.browser.ipod ) $('body').addClass('ios');

var owl2 = $('.owl-2').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:70,
    nav:true,
	autoplay:true,
	autoplayTimeout:8000,
	smartSpeed: 400,
    responsive:{
    	0:{
            items:1
        },
        800:{
            items:3
        }
    }
});
owl2.on('changed.owl.carousel', function(event) {
	$('.owl-item').removeClass('yellow');
	$(this).find('.center').addClass('yellow');
});

$(window).on('load', function() {

	$('.phone-numbers').on('click', function() {
		$(this).toggleClass('open');
	});

	$('.owl-1').owlCarousel({
	    loop: true,
	    items: 1,
	    nav: true
	 });

	$('.owl-2').owlCarousel({
	    items: 4,
	    loop: true,
	    margin: 10,
	    nav: true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        580:{
	            items:2,
	            nav:false
	        },
	        800:{
	        	items:2,
	            nav:true
	        },
	        1200:{
	            items:3,
	            nav:true
	        },
	        1600:{
	            items:4,
	            nav:true
	        }
	    }
	 });


	$('.owl-3').owlCarousel({
		items: 5,
		loop: true,
		autoplay: true,
		nav: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		items:1
	});

});

$('#mobile-nav-btn').on('click', function() {
	$('#mobile-list').toggleClass('open');
});