$(document).ready(function(){
	function answer(){
		$("#results").html("");
		$(".wrong").hide();
		$(".answer").hide();
		var correct = 0;
		var result1 = $('input[name=q1]:checked').val();
		var result2 = $('input[name=q2]:checked').val();
		var result3 = $('input[name=q3]:checked').val();
		console.log(result1);
		console.log(result2);
		console.log(result3);
		if (result1!="1979"){
			$(".wrong")[0].style.display = "inline-block";
		}
		else 
		{	
			correct+=1;
			$(".answer")[0].style.display = "inline-block";
		}
		if (result2!="Mobile Suit Gundam"){
			$(".wrong")[1].style.display = "inline-block";
		}
		else 
		{
			correct+=1;
			$(".answer")[1].style.display = "inline-block";
		}
		if (result3!="True Grade"){
			$(".wrong")[2].style.display = "inline-block";
		}
		else 
		{	
			correct+=1;
			$(".answer")[2].style.display = "inline-block";
		}
		$("#results").html("You got " + correct + " out of 3 correct!");
		$('#redo').css('display','inline-block');
	}
	$("#submit").click(function(){
		if (!($("input[name=q1]:checked").val() && $("input[name=q2]:checked").val() && $("input[name=q3]:checked").val())) {
			alert('Please answer the questions!');
		}
		else {
			answer();
		}
	});
	$("#redo").click(function(){
		$(".wrong").hide();
		$(".answer").hide();
		$("#results").html("");
		$('input:radio').prop('checked', false);
		$("#redo").hide();
	});
})