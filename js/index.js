console.log("good")

$(".readmore a").click(showText);
function showText(e){
	e.preventDefault()
	$("#show-this-on-click").slideDown();
	$(".readmore").hide();
	$(".readless").show();
}

$(".readless a").click(hideText);
function hideText(e){
	e.preventDefault()
	$("#show-this-on-click").slideUp();
	$(".readmore").show();
	$(".readless").hide();
}

$(".learnmore").click(showMore);
function showMore(e){
    e.preventDefault()
    $("#learnmoretext").slideDown();
}