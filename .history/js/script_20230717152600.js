//ハンバーガーボタン
$('.hamburger-btn').on('click', function() {
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');

    if
});
$('.overlay').on('click', function() {
    $('.header-nav').fadeOut(300);
    $('.hsmburger-btn').removeClass('cross');
    $('body').removeClass('noscroll');
});
