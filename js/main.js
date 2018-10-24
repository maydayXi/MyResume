$(function () {

	$('.progress-bar').waypoint(function () {
		$('.progress-bar').css({
			animation: 'progress 1s forwards'
		}).find('span').fadeIn(1300);
	},{offset: '75%'});
	
});