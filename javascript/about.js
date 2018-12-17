$(document).ready(function(){
	$(".show").click(function(){
		var index;  
		index = $(".show").index(this);
		for (var i = 0; i < $('.grade').length; i++) {
			$('.grade')[i].style.display = 'none';        
		}
		$('.grade')[index].style.display = "inline-block";
	})
})