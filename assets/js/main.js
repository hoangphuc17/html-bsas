document.addEventListener("DOMContentLoaded", function(event) {
	$('#mobi-menu-icon').click(function(){
		openMenu();
	});
	function openMenu() {
		console.log('a');
		$('.mobi-menu').css('right','0');
	}

});