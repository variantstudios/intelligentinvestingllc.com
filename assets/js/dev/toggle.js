if ($(".toggle .toggle-title").hasClass('active')) {
    $(".toggle .toggle-title.active").closest('.toggle').find('.toggle-inner').show();
}
$(".toggle .toggle-title").click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        $(this).removeClass("active").closest('.toggle').find('.toggle-inner').slideUp(200);
        $(this).closest('.toggle').find('.toggle-inner').removeClass("active");
    } else {
        $(this).addClass("active").closest('.toggle').find('.toggle-inner').slideDown(200);
        $(this).addClass("active").closest('.toggle').find('.toggle-inner').addClass("active");
        /* Send Google Analytics Event */
        var $title = $(this).find('h3 span.title-name').text();
        ga('send', {
         var $title =
          hitType: 'event',
          eventCategory: 'FAQ',
          eventAction: 'Click',
          eventLabel: $title
        });
    }
});
