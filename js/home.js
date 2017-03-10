$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	  if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); 
      return false;
    }
  }
});

$(document).scroll(function() {
  if ($(document).scrollTop() > 900) {
    $('nav').addClass('bg');
  } else {
    $('nav').removeClass('bg');
  }
});

$(document).scroll(function() {
  if ($(document).scrollTop() > 900) {
    $('#navbarItem').find('h4').addClass('text-b1').removeClass('text-w');} 
	else {
    $('#navbarItem').find('h4').removeClass('text-b1').addClass('text-w');
  }
});