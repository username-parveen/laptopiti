$(document).ready(function() {
	$("#btnclose").click(function(){
	$("#choosewal").fadeOut("slow");
});
$("#choosewallpaper").click(function(){
	$("#wc").click();
});
$(document).mousemove(function(e){
currentX=e.pageX;
currentY=e.pageY;
width=$(window).width();
height=$(window).height();
width=60;
height=50;

if(currentX<=width&&currentY<=height){

$("#seting").fadeIn("fast");
}
else{
$("#seting").fadeOut("fast");
}
});
/* To hide or show the quicklinks services
$("#shophead").click(function(){$("#shoping").toggle("fast");});
$("#snhead").click(function(){$("#SocialNetworks").toggle("slow");});
$("#ghead").click(function(){$("#ges").toggle("slow");});  */


$(".bookmarksbtn").click(function(){
	$("#quicklinks").hide("fast");
	$("#bookmarksdiv").show("fast");
	$(".mainmenuwrapper").removeClass("w3-bluel");
	$("#op").removeClass("w3-border-bluel");
	$(".mainmenuwrapper").addClass("w3-black");
	$("#op").addClass("w3-border-black");
	$(this).css("width","60%");
	$(".quicklinksbtn").css("width","35%");
	});
	
$(".quicklinksbtn").click(function(){
	$("#quicklinks").show("fast");$("#bookmarksdiv").hide("fast");
	$(".mainmenuwrapper").removeClass("w3-black");$("#op").removeClass("w3-border-black");
	$(".mainmenuwrapper").addClass("w3-bluel");$("#op").addClass("w3-border-bluel");
	$(".quicklinksbtn").css("width","60%");
	$(".bookmarksbtn").css("width","35%");
	});
});


