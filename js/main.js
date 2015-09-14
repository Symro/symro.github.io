$(document).ready(function() {

	$('main > section:nth-child(5) div:first-child').mouseenter(function(e){
		$(this).toggleClass('active');
		$(this).children('section').animate({
	    opacity: 1,
	  }, 500 );

	});
	$('main > section:nth-child(5) div:nth-child(2)').mouseenter(function(e){
		$(this).toggleClass('active');
		$(this).children('section').animate({
	    opacity: 1,
	  }, 500 );
	});
	$('main > section:nth-child(5) div:nth-child(3)').mouseenter(function(e){
		$(this).toggleClass('active');
		$(this).children('section').animate({
	    opacity: 1,
	  }, 500 );
	});
	$('main > section:nth-child(5) div:nth-child(4)').mouseenter(function(e){
		$(this).toggleClass('active');
		$(this).children('section').animate({
	    opacity: 1,
	  }, 500 );
	});
	$('main > section:nth-child(5) div:nth-child(5)').mouseenter(function(e){
		$(this).toggleClass('active');
		$(this).children('section').animate({
	    opacity: 1,
	  }, 500 );
	});
	$('main > section:nth-child(5) div:nth-child(6)').mouseenter(function(e){
		$(this).toggleClass('active');
		$(this).children('section').animate({
	    opacity: 1,
	  }, 500 );
	});
	$('main > section:nth-child(5) div:first-child').mouseleave(function(e){
		$(this).toggleClass('active');
		$(this).children('section').animate({
	    opacity: 0,
	  }, 500 );
	});
	$('main > section:nth-child(5) div:nth-child(2)').mouseleave(function(e){
		$(this).toggleClass('active');
		$(this).children('section').animate({
	    opacity: 0,
	  }, 500 );
	});
	$('main > section:nth-child(5) div:nth-child(3)').mouseleave(function(e){
		$(this).toggleClass('active');
		$(this).children('section').animate({
	    opacity: 0,
	  }, 500 );
	});
	$('main > section:nth-child(5) div:nth-child(4)').mouseleave(function(e){
		$(this).toggleClass('active');
		$(this).children('section').animate({
	    opacity: 0,
	  }, 500 );
	});
	$('main > section:nth-child(5) div:nth-child(5)').mouseleave(function(e){
		$(this).toggleClass('active');
		$(this).children('section').animate({
	    opacity: 0,
	  }, 500 );
	});
	$('main > section:nth-child(5) div:nth-child(6)').mouseleave(function(e){
		$(this).toggleClass('active');
		$(this).children('section').animate({
	    opacity: 0,
	  }, 500 );
	});

});