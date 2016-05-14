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
 	
 	$("a[href*='#']").mPageScroll2id();
 	
	// $(".services__sect-content_accordeon_item p").not(':first').hide();
	// $(".services__sect-content_accordeon_item p").prev().click(function() {
	// 	$(".services__sect-content_accordeon_item p").not(this).slideUp();
	// 	$(this).next().not(":visible").slideDown();
	// });
// $(".services__sect-content_accordeon_item h3 span").css('transform','rotate(180deg)')
});