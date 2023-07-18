//ハンバーガーボタン
$('.hamburger-menu').on('click', function() {
    console.log('ハンバーガー');
    $('.header-nav').fadeToggle(300);
    $('.hamburger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');

    if($('.hamburger-btn').hasClass('cross')) {
        $('.overlay').toggleClass
        $('.overlay').on('click', function() {
            console.log('オーバーレイ');
            // $('.header-nav').fadeOut(300);
            // $('.hsmburger-btn').removeClass('cross');
            // $('body').removeClass('noscroll');
            $('.header-nav').fadeToggle(300);
            $('.hamburger-btn').toggleClass('cross');
            $('body').toggleClass('noscroll');        
        })
    }
});
