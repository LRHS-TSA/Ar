$('.navbar-nav').on('click', 'a', function(e) {
    if ($(this).attr('href').match("^#")) {
        e.preventDefault();
    }
    if ($(this).attr('href') === '#Home') {
        $('body').scrollTo('top');
    } else {
        $('body').scrollTo($($(this).attr('href')).position());
    }
});

$(document).scroll(function() {
    $('.section').each(function() {
        if ((document.documentElement.scrollTop || document.body.scrollTop > $(this).next().position().top - 950) && (document.documentElement.scrollTop || document.body.scrollTop < $(this).next().position().top + $(this).next().height() - 950)) {
            if ((document.documentElement.scrollTop || document.body.scrollTop > $(this).next().children().first().next().position().top - 950) && (document.documentElement.scrollTop || document.body.scrollTop < $(this).next().children().first().next().position().top + $(this).next().children().first().next().height() - 950)) {
                $(this).hide();
            } else {
                $(this).show();
            }
        } else {
            $(this).hide();
        }
    })
});
