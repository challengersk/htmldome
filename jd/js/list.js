$(function(){
	setheight();
})
function setheight(){
	if($(".newgoodslist").css('display')=="none"){
			$(".goodsmain").css({
        	'height':$('.goodlistsbox').css('height')
          })
	}else{
     if($('.newgoodslist').css('height')<$('.goodlistsbox').css('height')){
			$(".goodsmain").css({
        	'height':$('.goodlistsbox').css('height')
           })
		}else{
			$(".goodsmain").css({
        	'height':$('.newgoodslist').css('height')
		})
		}
    }
}//解决新品侧边栏父级无法获取高度问题
var floag=2;
$('#goodsopen').click(function(){
	var li=$("#goods-list ul li")
	var liaddclss=[3,7,11,15]
	var liaddclaa2=[4,9,14]
	if(floag%2==0){
		$('.newgoodslist').animate({
			width:0
		},500,function(){
			$('.newgoodslist').hide()
		})
//		侧边栏动画

		$('.goodlistsbox').animate({
			padding:0
		},500,function(){
			for(var i=0;i<li.length;i++){
        	$(li[liaddclss[i]]).removeClass("noright")
        	$(li[liaddclaa2[i]]).addClass("noright")
        }
			setheight();
		})
//		商品主体
	}else{
		$('.newgoodslist').show().animate({
			'width':'230px'
		},500);
		
		for(var i=0;i<li.length;i++){
        	$(li[liaddclaa2[i]]).removeClass("noright")
        	$(li[liaddclss[i]]).addClass("noright")
        }
		
		$('.goodlistsbox').animate({
			"padding-left":'242.5px'
		},500,function(){
			setheight()
		})
	}
	floag++;
})
//喜欢标签切换
$('#likegoods').on('click','li',function(){
	$($("#likgoodsbox ul")[$(this).index()]).show().siblings().hide()
	$(this).addClass('redtext').siblings().removeClass('redtext')
	$('.likegoods-xhx').animate({left:this.offsetLeft},500)
})
//筛选效果
$('#sotgoods').on('click','li',function(){
	$(this).hasClass('sortup')?$(this).removeClass('sortup'):$(this).addClass('sortup').siblings().removeClass('sortup')
})
//
var dlNum  =$("#selectList").find("dl");
for (i = 0; i < dlNum.length; i++) {
	$(".hasBeenSelected .clearList").append("<div class=\"selectedInfor selectedShow\" style=\"display:none\"><span></span><label></label><em></em></div>");
}
var refresh = "true";
$(".listIndex a ").on("click",function(){
	var text =$(this).text();
	var selectedShow = $(".selectedShow");
	var textTypeIndex =$(this).parents("dl").index();
	var textType =$(this).parent("dd").siblings("dt").text();
	index = textTypeIndex -(2);
	$(".clearDd").show();
	$(".selectedShow").eq(index).show();
	$(this).addClass("selected").siblings().removeClass("selected");
	selectedShow.eq(index).find("span").text(textType);
	selectedShow.eq(index).find("label").text(text);
	var show = $(".selectedShow").length - $(".selectedShow:hidden").length;
	if (show > 0) {
		$(".eliminateCriteria").show();
	}
   
});
$(".selectedShow em").on("click",function(){
	$(this).parents(".selectedShow").hide();
	var textTypeIndex =$(this).parents(".selectedShow").index();
	index = textTypeIndex;
	$(".listIndex").eq(index).find("a").removeClass("selected");
	
	if($(".listIndex .selected").length < 2){
		$(".eliminateCriteria").hide();
	}
});

$(".eliminateCriteria").on("click",function(){
	$(".selectedShow").hide();
	$(this).hide();
	$(".listIndex a ").removeClass("selected");
}); 
//筛选更多
$('#selectList dl').on('click','.filter-more',function(){
	$($(this).parent()[0].children[1]).hasClass('height-auto')?$($(this).parent()[0].children[1]).removeClass('height-auto'):$($(this).parent()[0].children[1]).addClass('height-auto')
})
