$('.navbar-nav').on('click', 'a', function (e) {
  e.preventDefault();
  if ($(this).attr('href') === '#Home') {
    $('body').scrollTo('top');
  } else {
    $('body').scrollTo($($(this).attr('href')).position());
  }
});
