$(document).ready(function() {
// Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }
  // Mobile Menu Funcation
  $(".menu-btn").on('click touch', function() {
    $('.menu').toggleClass('show');
  });
   // Mobile Menu Icon
  $('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
	
    
});

function recaptchaRender{
    grecaptcha.render( 'reCaptchSubmit', {
        'sitekey': '6LeflBYUAAAAAPie2tdRNhffKKrk2qQC9LaR_u4F',
        'callback': get_action
    });
}