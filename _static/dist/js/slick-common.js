$('.p-slick').slick({
    autoplay: false,         //自動再生
    autoplaySpeed: 4000,  //自動再生のスピード
    speed: 800, //スライドするスピード
    arrows: true,//左右の矢印
    infinite: true,//スライドのループ
    pauseOnHover: false, //ホバーしたときにスライドを一時停止しない
    variableWidth: true,
    slidesToShow: 3,
    responsive: [
        {
          breakpoint: 1025, //1024px以下のサイズに適用
          settings: {
          slidesToShow: 1,
          variableWidth: true,
          }
        }
    ]
});

/*
$(function(){
$(document).ready(function(){ 
$('.p-slick').slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1600
    // スライドの細かい設定
        });
    });
});
*/