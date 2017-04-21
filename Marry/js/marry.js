	$(function(){
		var mySwiper = new Swiper ('.swiper-container', {
      //滑动方向
			direction: 'vertical',
      //是否循环
			loop: false,
			// 如果需要分页器
			pagination: '.swiper-pagination',
			//文字输出控出
			onSlideChangeStart: function(swiper){
        //旋转出现,
				if(swiper.activeIndex % 2 == 0){
					$('.swiper-slide').eq(swiper.activeIndex).addClass('rotate_left');
					$('.swiper-slide').eq(swiper.activeIndex).removeClass('hide');
				}else{
					$('.swiper-slide').eq(swiper.activeIndex).addClass('rotate_right');
					$('.swiper-slide').eq(swiper.activeIndex).removeClass('hide');
				}
				if(swiper.previousIndex % 2 == 0){
					$('.swiper-slide').eq(swiper.previousIndex).removeClass('rotate_left');
					$('.swiper-slide').eq(swiper.previousIndex).addClass('hide');
				}else{
					$('.swiper-slide').eq(swiper.previousIndex).removeClass('rotate_right');
					$('.swiper-slide').eq(swiper.previousIndex).addClass('hide');
				}
			}	
		});
		//刚开始就播放
		var audio = document.getElementById('myAudio');
		audio.play();
		$('.music-btn-on').click(function(){
			audio.play();
			$('.music-btn-on').css({
        'display' : 'none'
			});
			$('.music-btn-off').css({
        'display' : 'inline'
			})
		});
		$('.music-btn-off').click(function(){
			audio.pause();
			$('.music-btn-off').css({
        'display' : 'none'
			});
			$('.music-btn-on').css({
      'display' : 'inline'
			})
		});
		//控制文字的输出1(tada)
		function tada(content){
      content.css({
        'animation': 'tada 3s 8s infinite forwards'
      });
		}
		//控制文字的输出2(rollIn)
		function rollIn(content){
			content.find('i').each(function(){
				var index = $(this).index();
				$(this).css({
          'animation': 'rollIn 2s '+ (index+3.5)*0.7 +'s 1 forwards'
				});
			});
		}
		rollIn($('.font'));
    tada($('.myTada'));
    //控制文字输出(fadeInDown)
    function fadeInDown(content){
      content.find('.input').each(function(){
        var index = $(this).index();
        $(this).css({
          'animation': 'fadeInDown 1s '+ (index+3)*1 +'s 1 forwards'
        })
      });
    }
    fadeInDown($('.page3'));
	});