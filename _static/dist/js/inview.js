$(function() {
  $('.inview').on('inview', function(event, isInView) {
  //一度のみのinviewの際は　.oneにする
    if (isInView) {
		// .inviewがビューポートに入った場合
    	$(this).addClass('effect');
    } else {
		// .inviewがビューポートにから抜けた場合
    	$(this).removeClass('effect');
    }
  });
});
