$(document).ready(init);

function init() {
	console.log('ok2');
	$('.collapseNav').on('click', collapseNav);
}

function collapseNav() {
	var myNavBar = $('#myNavBar');
	myNavBar.collapse('hide');
}