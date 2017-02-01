$('.navbar-nav').on('click', 'a', function (e) {
  e.preventDefault();
  if ($(this).attr('href') === '#Home') {
    $('body').scrollTo('top');
  } else {
    $('body').scrollTo($($(this).attr('href')).position());
  }
});

$(document).scroll(function () {
  $('.display-3').each(function() {
    if((document.documentElement.scrollTop || document.body.scrollTop > $(this).next().position().top-100) && (document.documentElement.scrollTop || document.body.scrollTop < $(this).next().position().top+$(this).next().height())){
      $(this).css({position: 'fixed', 'top': '1em', 'margin-top': '-8px'});
    } else {
      $(this).removeAttr("style");
    }
  })
});
