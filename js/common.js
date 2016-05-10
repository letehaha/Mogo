$(function() {

	$(".services__sect-content_accordeon_item:first-child p").addClass('active');
	$(".services__sect-content_accordeon_item h3").click(function(){
		$(".services__sect-content_accordeon_item p").removeClass('active');
		$(this).next().addClass('active');
	});

});