var swiper = new Swiper('.swiper-container', {
				autoplay: true,
				loop:true,
				spaceBetween: 30,
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
		     $(function(){

				var navH = $("#daylist").offset().top;
				var maxnavh=$(document).height()-$('.footer-bg').height()-$(window).height()+200;
				//滚动条事件
				$(window).scroll(function(){
				//获取滚动条的滑动距离
				var scroH = $(this).scrollTop();
				//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
					if(scroH>=navH){
					
					if(scroH>maxnavh){
						$("#daylist").css({"position":'absolute',"top":maxnavh-230});
					console.log(2222)
					}else{
						$("#daylist").css({"position":"fixed","top":0});
					}
					}else{
					$("#daylist").css({"position":'static'});
					}
					console.log(maxnavh,scroH,navH)
				})
			})