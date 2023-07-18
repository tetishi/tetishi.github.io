//ハンバーガーボタン
$('.hamburger-menu').on('click', function() {
    $('.header-nav').fadeToggle(300);
    $('.hamburger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');

    if($('.hamburger-btn').hasClass('cross')) {
        $('.overlay').on('click', function() {
            
            $('.header-nav').fadeOut(300);
            $('.hsmburger-btn').removeClass('cross');
            $('body').removeClass('noscroll');
        })
    }
});
