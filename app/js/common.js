$(function() {

  var $mainBurger = $('.main-nav__burger'),
      $menuList   = $('.main-nav__list');

  $('.services__sect-content_accordeon_item:first-child p').addClass('active');

  $('.services__sect-content_accordeon_item h3').click(function(){
    $('.services__sect-content_accordeon_item p').removeClass('active');
    $(this).next().addClass('active');

    if ($('.services__sect-content_accordeon_item p').hasClass('active'))
      $(this).prev().children().css('transform','rotate(180deg)')

  });

  $('.first_slide_slider').slick({
    dots: true,
    speed: 500
  });

  $mainBurger.click(function (e) {
    var $this = $(this);

    $this.toggleClass('main-nav__burger--is-open');
    $menuList.toggleClass('main-nav__list--is-open');

    $('.burger_elem').click(function(e) {
      $('.burger-menu').toggleClass('menu-on');
      $('.burger-list').fadeToggle('burger-list-active');
    });
  });

  $('.scroll-to-href').click(function(e) {
    var link    = $(this).attr('href'),
        height  = $('.main-nav').height();
    
    e.preventDefault();

    if (window.innerWidth < 725){
      $('html,body').stop().animate({ scrollTop: $(link).offset().top - height }, 500);
    } else{
      $('html,body').stop().animate({ scrollTop: $(link).offset().top}, 500);
    }
    
    $mainBurger.removeClass('main-nav__burger--is-open');
    $menuList.removeClass('main-nav__list--is-open');
  
  });


});
