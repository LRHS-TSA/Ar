$('.navbar-nav').on('click', 'a', function(e) {
    e.preventDefault();
    if($(this).attr('href') != "#Home"){
      $("body").scrollTo( $($(this).attr('href')).position() );
    } else {
      $("body").scrollTo( "top" );
    }

});
