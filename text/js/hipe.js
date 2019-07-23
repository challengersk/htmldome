$('.problem-nav ul').on('click','li',function(){
	$(this).addClass('action').siblings().removeClass('action')
	$($('.problem-navlist .prolem-box-conten')[$(this).index()]).show().siblings().hide()
})
