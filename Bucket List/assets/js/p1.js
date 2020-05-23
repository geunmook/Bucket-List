// check off specific p1 by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

	//click on x to delete fontend
	$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
	
	$("input[type='text'").keypress(function(event){
	 if(event.which === 13){
	 	//grabbing new bucketlist text from input
	 	var bucketList = $(this).val();
	 	$(this).val("");
	 	//create a new li and add to ul
	 	$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + bucketList + "</li>")
	 }
	});

	$(".fa-edit").click(function(){
		$("input[type='text'").fadeToggle();
	});