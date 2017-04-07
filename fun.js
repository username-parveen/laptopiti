/* $(document).ready(function(){
$('#shoping').draggable({cursor:'move',containment:"#op"});
$('#SocialNetworks').draggable({cursor:'move',containment:"#op",tolerance:"move"});
$("#op").hide();
$("#shoping").hide();
$("#SocialNetworks").hide();
$('#op').draggable({containment:"window",cursor:"move"});

$("#addli").click(function(){
	$("#SocialNetworks").after("<p>Test</p>")
});
$("#mainbutton").hover(function(){
$("#op").show("slow");
$("#shoping").show("slow");
$("#SocialNetworks").show("slow");
$('#op').draggable({cursor:'move'},{containment:"parent"});
$("#shoping,#SocialNetworks").sortable({containment:"parent",tolerance:"pointer"});
function(){$("#op").hide("slow");
$("#shoping").hide("slow");
$("#SocialNetworks").hide("slow");}
});
}); */
backimage=localStorage.getItem("bgimg");
$(document).ready(function(){
	 
	if(backimage!=null){
	$("#bod").css('background-image','url(' + backimage + ')').css("background-size","100vw 100vh").css("background-repeat","no-repeat");
	}
	else{
	$("#bod").css('background-image','url(2.jpg)').css("background-size","100vw 100vh").css("background-repeat","no-repeat");
	}
	
	$("#seting").click(function(){
	$("#choosewal").fadeIn("fast");
});
$("#wc").change(function(){
	
	var file = this.files[0];
	var imageType = /image.*/;

if (file.type.match(imageType)) {
	
		var reader = new FileReader();
		reader.onload = function (evt) {
                var uri = evt.target.result;
				console.log(uri.length);
                localStorage.setItem("bgimg", uri);
		       
            
            }

            reader.readAsDataURL(this.files[0]);
}
else{
	
	 alert("Unsupported File Type!");
	$("#wc").val("");
	}
});
$("#cw").click(function(){
	bimage=localStorage.getItem("bgimg");
	if(bimage!==null){
	$("#bod").css(
	{	'background-image':'url(' + bimage + ')',
		"background-size":"100vw 100vh",
		"background-repeat":"no-repeat"
	}
	
);
if($("#wc").val()==""){
alert("Image not selected!! Please Click on Choose Wallpaper Button First ");
}$("#choosewal").hide("fast");
$("#wc").val("");


	
	
	
	}
	else{
		alert("Image not Selected!! Please Click on Choose Wallpaper Button First");
	
	}
// if()
// {
// alert("Image size too large!! Please select image below 5MB");
// }	
	
	
});

});
