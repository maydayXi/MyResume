$(function () {

	var wow = new WOW({
		offset: 50
	});

	wow.init();

	$('header nav ul').on('click', 'li', function(event) {
		event.preventDefault();

		var $anchor = $(this);
				$target = $anchor.find('a').attr('href');
				headerHeight = $('header').outerHeight();

		$anchor.siblings().removeClass('active');
		$anchor.addClass('active');

		$('html, body').stop().animate({
			scrollTop: $($target).offset().top - headerHeight
		}, 1000);

		window.location.hash = $target;

	});

	$('.progress-bar').waypoint(function () {
		$('.progress-bar').css({
			animation: 'progress 1.5s forwards'
		}).find('span').fadeIn(1300);
	},{offset: '75%'});

	$('#portfolio').tabs({
		hide: {effect: "slide", direction: "left", duration: 250},
		show: {effect: "slide", direction: "right", duration: 125},
	});

	$('#portfolio .portfolio_tabs ul li').on('click', function(event) {
		event.preventDefault();
		$(this).siblings('li').find('a').removeClass('active');
		$(this).find('a').addClass('active');
	});

});