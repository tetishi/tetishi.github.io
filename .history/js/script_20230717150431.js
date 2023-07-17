//ハンバーガーボタン
$('.hamburger-btn').on('click', function() {
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');
});
// $('.overlay').on('click', function() {
//     $('.header-nav').fadeOut(300);
// });
