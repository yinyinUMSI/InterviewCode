identify the url parameter to decide what to show
show "from" "subject" "content"

$(function() {
	var para = parseInt(getUrlParam("id"));
	getDataFrom(para+1);
	
	$("#prevButton").on('click', function() {
		var prevId = (para-1)>0 ? para-1: 14;
		window.location.href = "email_view.html?id="+ prevId.toString();
	});
	$("#nextButton").on('click', function() {
		var nextId = (para+1)<=14 ? para+1: 0;
		window.location.href = "email_view.html?id="+ nextId.toString();
	});
})

function getDataFrom(para) {
	$.ajax({
		url: URL + '/' + para.toString(),
		type: 'GET',
		beforeSend: alertLoading,
		error: alertError,
		success: showIndEmail, 
	})
}

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) 
		return unescape(r[2]); 
	return null; 
}

function alertLoading() {
	$(".sendTo").html("I'm loading");
}

function alertError() {
	$(".sendTo").html("I'm having trouble");
}

function showIndEmail(data) {
	$(".sendTo").empty();
	$(".sendTo").text(data.from);
	$(".subject").text(data.subject);
	$(".emailContent").text(data.text);	
}
