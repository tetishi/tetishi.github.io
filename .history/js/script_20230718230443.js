//ハンバーガーボタン
$('.hamburger-menu').on('click', function() {
    $('.header-nav').fadeToggle(300);
    $('.hamburger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');

    if($('.hamburger-btn').hasClass('cross')) {
        $('.overlay').toggleClass('active');
        $('.overlay').on('click', function() {
            $('.header-nav').fadeOut(300);
            $('.hamburger-btn').removeClass('cross');
            $('body').removeClass('noscroll');  
            $('.overlay').removeClass('active');      
        })
    }
});
