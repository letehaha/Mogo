$(function() {

	$(".services__sect-content_accordeon_item:first-child p").addClass('active');
	$(".services__sect-content_accordeon_item h3").click(function(){
		$(".services__sect-content_accordeon_item p").removeClass('active');
		$(this).next().addClass('active');
		if($('.services__sect-content_accordeon_item p').hasClass('active')){
			$(this).prev().children().css('transform','rotate(180deg)')
		} else{
			
		}
	});
 	

 	$("a[href*='#']").smoothScroll({speed: 1000});
	
 	$(".first_slide_slider").slick({
 		dots: true,
		speed: 500
 	});

});