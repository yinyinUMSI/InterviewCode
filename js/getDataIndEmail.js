$(function() {
	var para = parseInt(getUrlParam("id"))+1;
	$.ajax({
		url: 'https://5c5a21f9af3ff700140de477.mockapi.io/api/email/'+ para.toString(),
		type: 'GET',
		beforeSend: alertLoading,
		error: alertError,
		success: showIndEmail, 
	})
})

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
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
	// var newDiv = $("<div class='emailIndiv'></div>").appendTo($(".emailList"));
	// newDiv.attr("id","email"+i.toString());
	// newDiv.append("<input class='checkBox' type='checkbox'>");
	// var fromSpan = $("<span class='emailFrom'></span>").appendTo(newDiv);
	// fromSpan.text(data[i].from);
	// var subjectSpan = $("<span class='emailSubject'></span>").appendTo(newDiv);
	// subjectSpan.text(data[i].subject);
		// newDiv.append("<span class='emailSubject'></span>");
	$(".sendTo").text(data.from);
	$(".subject").text(data.subject);
	$(".emailContent").text(data.text);	
}
