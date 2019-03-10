// click list->list_view
// click create->create_view
// click send -> list_view


$(function() {
	$("#listView").on('click', function() {
		window.location="list_view.html";
	});
	$("#createView").on('click', function() {
		window.location="create_view.html";
	});
	$(".sendButton").on('click', "#sendButton", function() {
		window.event.returnValue=false;		
		window.location="list_view.html";
	});
})