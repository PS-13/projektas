"use strict";

$('[data-fancybox="galerija1"]').fancybox({
	// Options will go here
	loop: true,
	animationDuration: 500
});

$(document).ready(function(){
  	$(".slider .owl-carousel").owlCarousel({
	  	loop:true,
	    margin: 0,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:1,
	            nav:false
	        },
	        1000:{
	            items:1,
	            nav:true
	        }
	    }
  	});
});