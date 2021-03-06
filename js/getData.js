// request data from API
// jQuery add nodes to html
// get "from" "read" "subject" from json file
// click an email and navigate to the email_view page


let emailLen;
let URL = 'https://5c5a21f9af3ff700140de477.mockapi.io/api/email';
$(function() {
	$.ajax({
		url: URL,
		type: 'GET',
		beforeSend: alertLoading,
		error: alertError,
		success: showEmail, 
	})
});

function alertLoading() {
	$(".emailList").html("I'm loading");
}

function alertError() {
	$(".emailList").html("I'm having trouble");
}

function showEmail(data) {
	$(".emailList").empty();
	// var emailLen = data.length;
	emailLen = data.length;
	console.log(emailLen);
	for(let i=0; i< emailLen; i++) {
		var newDiv = $("<div class='emailIndiv'></div>").appendTo($(".emailList"));
		newDiv.attr("id","indiv"+i.toString());
		if (data[i].read == false) {
			console.log("unread");
			$("<div class='unreadSign'></div>").appendTo(newDiv);
		}
		// newDiv.attr("id","email"+i.toString());
		newDiv.append("<div class='checkBoxDiv'><input type='checkbox'></div>");
		// newDiv.append("<input class='checkBox' type='checkbox'>");
		var divInner = $("<div></div>").appendTo(newDiv);
		divInner.addClass("tosubject");
		divInner.attr("id","email"+i.toString());
		var fromSpan = $("<span class='emailFrom'></span>").appendTo(divInner);
		fromSpan.text(data[i].from);
		var subjectSpan = $("<span class='emailSubject'></span>").appendTo(divInner);
		subjectSpan.text(data[i].subject);
		divInner.bind('click', clicktoDetail);
		$(".emailList").addClass("scroll");
		// newDiv.append("<span class='emailSubject'></span>");
	}
}
function clicktoDetail() {
	var str = $(this).attr("id")
	// console.log(str);
	var currId = str.replace(/[^0-9]/ig,"");
	console.log(currId);
	window.location.href = "email_view.html?id="+ currId;
}


	// console.log(typeof(data[13].from));
	// $(".emailList").html(data[14].from);
