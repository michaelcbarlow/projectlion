// var topYloc = null;

// $(window).scroll(function () { 
// 	var scrollTop = $(document).scrollTop();
// 	scrollTop = parseInt(scrollTop);
	
// 	var offset = topYloc+scrollTop+"px";  
// 	$("#toplink").animate({top:offset},{duration:300,queue:false});
// });


$(document).ready(function(){
						   
	//back to top scroll function. Any link with a hash (#) will scroll to that id on the page
	$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				targetOffset = targetOffset - 35;
				$('html,body').animate({scrollTop: targetOffset}, 500);
				return false;
			}
		}
	});
	
	// topYloc = parseInt($("#toplink").css("top").substring(0,$("#toplink").css("top").indexOf("px")));

});



$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
	});

});