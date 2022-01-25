	$(document).ready(function(){
	  $('html').addClass('xepo_ads');
	});
	$(document).on('mouseover','.xepo_ads',function(e){
		$(this).removeClass('xepo_ads');
		$("html").trigger("click");
	});
