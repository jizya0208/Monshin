// hoverイベント雛形
// $(function() {
//   $('.target').hover(function() {
//     $(this).css('background-color', '#66CCCC');
//   }, function() {
//     $(this).css('background', '');
//   });
// });


// クリックイベント雛形　一度クリックしたら戻らないのが難点
// $(function(){
//   $('.target').click(function(){
//     $(this).css('background', '#66CCCC');
//   });
// });


// onイベント
// $(function(){
//   $('.box1').on('click', function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseenter(function(){
//     $(this).css('background', '#66CCCC');
//   });
// });



// var c = document.getElementsByName('answer[1]');
// for ( let i=0; i < c.lengh; i++) {
//   c[ i ].onclick = function() {
//     document.body.style.backgroundColor = c[ i ].value;
//   }
// }

$(function() {
	$('input[name="question1"]').on('change', function() {
		var $check = $(this).parents('.question1');
		$('.question1').removeClass('ck');
		if ($(this).prop('checked')) {
			$check.addClass('ck');
		}
	});

	$('input[name="question2"]').on('change', function() {
		var $check = $(this).parents('.question2');
		$('.question2').removeClass('ck');
		if ($(this).prop('checked')) {
			$check.addClass('ck');
		}
	});
} );