/*ハンバーガーメニューのクリックイベント*/
$('.p-nav__btn').on('click', function () {
    $('.p-header--nav-body').toggleClass('is-open');
    $('.p-sidebar__btn > a').toggleClass('is-open');
    //薄い背景部分
    $('.p-background-color').toggleClass('is-show');
    $('.p-sidebar__body').toggleClass('is-show');
    $('.p-sidebar-btn').children('a').toggleClass('is-open');
    $('.p-main').toggleClass('is-show');
    //mainをdispley:noneにする
});

/*サブメニューのクリックイベント*/
$('.p-nav--menu').on('click', function () {
    $('.p-nav--menu--items').toggleClass('is-open');
});

/*サイドバーを閉じるボタンのクリックイベント*/
$('.p-sidebar__btn').on('click', function () {
    $(this).children('a').toggleClass('is-open');
    $('.p-background-color').toggleClass('is-show');
    $('.p-sidebar__body').toggleClass('is-show');
    $('.p-main').toggleClass('is-show');
    //$('.p-sidebar__btn > a').toggleClass('is-open');
});