var swiper = new Swiper('.swiper-container', {
	autoplay: true,
	loop:true,
	spaceBetween: 30,
	effect: 'fade',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
swiper.el.onmouseover=function(){
swiper.navigation.$nextEl.removeClass('hide');
swiper.navigation.$prevEl.removeClass('hide');
}
swiper.el.onmouseout=function(){
swiper.navigation.$nextEl.addClass('hide');
swiper.navigation.$prevEl.addClass('hide');
}




var swiper2 = new Swiper('.swiper-container2', {
	autoplay: true,
	spaceBetween: 30,
	loop:true,
	navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2',
	},
	pagination: {
		el: '.swiper-pagination2',
		clickable :true,
	},
});



var swiper3 = new Swiper('.swiper-container3', {
	spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',}
})

var swiper4 = new Swiper('.swiper-container4', {
	spaceBetween: 30,
	loop:true,
	 pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.shop-swiperbtn-right',
        prevEl: '.shop-swiperbtn-left',
      },
})
swiper4.el.onmouseover=function(){
swiper4.navigation.$nextEl.removeClass('hide');
swiper4.navigation.$prevEl.removeClass('hide');
}
swiper4.el.onmouseout=function(){
swiper4.navigation.$nextEl.addClass('hide');
swiper4.navigation.$prevEl.addClass('hide');
}
var swiper5 = new Swiper('.swiper-container8', {
	autoplay: true,
	spaceBetween: 30,
	loop:true,
	navigation: {
		nextEl: '.yyg-btn-left',
		prevEl: '.yyg-btn-left',
	},
});


$('.goodslist').on('click','.goos-list-qh li:not(.looknum)',function(){
	var indexnum=$(this).index();
	$(this).addClass('goodsheadlist-a').siblings().removeClass("goodsheadlist-a");
	$(this).parents('.goodslist').find('.goods-main-list').hide().eq(indexnum).show();
});

$('.clearfix').on('click','li:not(.gdhy)',function(){
//	.show().sibling().hide()
$($('.oneyuanshop-right .swiper-container8')[$(this).index()]).show().siblings().hide()
$('.oneyunshop-headright-xhx').css({left:this.offsetLeft+20})
$(this).addClass('col-ce1336').siblings().removeClass('col-ce1336')
})
