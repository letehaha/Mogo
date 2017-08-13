$(function() {

  var $mainBurger = $('.main-nav__burger'),
      $menuList   = $('.main-nav__list');

  $('.services__accordeon-item').click(function(){
    var $this   = $(this),
        $items  = $('.services__accordeon-item');

    if ($this.hasClass('services__accordeon-item--open'))
      return false

    $items.removeClass('services__accordeon-item--open');
    $this.addClass('services__accordeon-item--open');

  });

  $mainBurger.click(function (e) {
    $(this).toggleClass('main-nav__burger--is-open');
    $menuList.toggleClass('main-nav__list--is-open');

  });

  $('.scroll-to-href').click(function(e) {
    var link    = $(this).attr('href'),
        height  = $('.main-nav').height();
    
    e.preventDefault();

    if (window.innerWidth < 725){
      $('html,body').stop().animate({ scrollTop: $(link).offset().top - height }, 500);
    } else{
      $('html,body').stop().animate({ scrollTop: $(link).offset().top }, 500);
    }
    
    $mainBurger.removeClass('main-nav__burger--is-open');
    $menuList.removeClass('main-nav__list--is-open');

  });

  $('#footer-subscribe-form').submit(function(e) {
    e.preventDefault();

    var $input = $(this).find('input');

    if ($input.val() !== ''){
      $input.removeClass('js-validate');
      submitSubscribe();
    } else{
      $input.addClass('js-validate');
    }

  });

});


$(function(){
  var $search_form  = $('#header-search-form'),
      $search_input = $('.main-nav__elem-search-field'),
      $search_label = $('.main-nav__elem-search-label');

  $search_form.submit(function(e){
    e.preventDefault();
  });

  $search_label.click(function(){
    $search_form.addClass('main-nav__elem-search--active');
    $(this).hide();
  });

  $(document).mouseup(function (e){
    if (!$search_form.is(e.target) && $search_form.has(e.target).length === 0) {
      if($search_input.val() != ''){
        return false;
      }
      $search_form.removeClass('main-nav__elem-search--focus-in');
      $search_form.removeClass('main-nav__elem-search--focus-out');
      $search_form.removeClass('main-nav__elem-search--active');
      $search_label.show();
    }

  });

  $search_input.focusin(function(){
    $search_form.addClass('main-nav__elem-search--focus-in');
    $search_form.removeClass('main-nav__elem-search--focus-out');
  });

  $search_input.focusout(function(){
    $search_form.addClass('main-nav__elem-search--focus-out');
    $search_form.removeClass('main-nav__elem-search--focus-in');
  })
});


function submitSubscribe(){
  // code ...
}
