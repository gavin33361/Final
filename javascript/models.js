$(document).ready(function(){
	var n = 0;
	var o = 0;
	var p = 0;
	function showcase(){
		var value = $("select")[0].value;
		console.log(value);
		if (value == "2015"){
			if (n==0){
				o = 0;
				p = 0;
				$("#showcase2").hide();
				$("#showcase3").hide();
				$("#showcase1").toggle();
				n++;
			}
		}
		if (value == "2016"){
			if (o==0){
				n = 0;
				p = 0;
				$("#showcase1").hide();
				$("#showcase3").hide();
				$("#showcase2").toggle();
				o++;
			}
		}
		if (value == "2017"){
			if (p==0){
				n = 0;
				o = 0;
				$("#showcase1").hide();
				$("#showcase2").hide();
				$("#showcase3").toggle();
				p++;
			}
		}
	}
	$("#select").click(function(){
		showcase();
	});
})