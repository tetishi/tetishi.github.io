//ハンバーガーボタン
$('.hamburger-btn').on('click', function() {
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');

    if($('.hamburger-btn').hasClass('cross')) {

    }
});


if($('.nav-Toggle').hasClass('active')){
    $('.main').on('click',function() {
    $('.nav-Toggle').removeClass('active');
    $('.header-menu').removeClass('open');
})
