//ハンバーガーボタン
$('.hamburger-menu').on('click', function() {
    $('.header-nav').fadeToggle(300);
    $('.hamburger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');

    if($('.hamburger-btn').hasClass('cross')) {
        console.log('ハンバーガー');
        $('.overlay').on('click', function() {
            console.log('外');
            $('.header-nav').fadeOut(300);
            $('.hsmburger-btn').removeClass('cross');
            $('body').removeClass('noscroll');
        })
    }
});
