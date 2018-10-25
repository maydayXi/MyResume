$(function () {

	var wow = new WOW({
		offset: 50
	});

	wow.init();

	$('.progress-bar').waypoint(function () {
		$('.progress-bar').css({
			animation: 'progress 1.5s forwards'
		}).find('span').fadeIn(1300);
	},{offset: '75%'});
	
});