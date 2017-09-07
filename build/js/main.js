$(document).ready(function(){
        $('.click').click(function () {
            var win = $(window).height();
            $('body,html').animate({
                scrollTop: win
            }, 800);
            return false;
        });
});