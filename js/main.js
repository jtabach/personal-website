$(document).ready(init);

function init() {
	$('.collapseNav').on('click', collapseNav);
}

function collapseNav() {
	var myNavBar = $('#myNavBar');
	myNavBar.collapse('hide');
}