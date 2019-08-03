jQuery(function ($) { "use strict";

	

	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
    type: 'image',
    removalDelay: 160, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            // just a hack that adds mfp-anim class to markup
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    closeOnContentClick: true,
    midClick: true,
    fixedContentPos: false,
    fixedBgPos: true
});
	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

  	var mixer = mixitup('.portfolio-items-wrapper');
	

});
// End Jquery Function



	/* ========================================================================= */
	/*	Smooth Scroll
	/* ========================================================================= */
	var scroll = new SmoothScroll('a[href*="#"]');


