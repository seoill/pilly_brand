(($)=>{
    class service{
        init(){
            this.scroll();
            this.slider();
        }
        scroll(){
            const win = $(window);
            let isAnimated = false;
            win.on('wheel scroll touchmove',function(e){
                if(!isAnimated){
                    if(e.originalEvent.deltaY<0) return;
                    $('#sec1').addClass('on');
                    // $('.title-box h2').eq(0).addClass('ani-fadeIn');
                    // $('.title-box h2').eq(1).addClass('ani-fadeIn');
                    $('.text-box').addClass('ani-up2');                    
                    isAnimated = true;
                    setTimeout(function(){
                        $('html').css({'overflow':'scroll'});
                    });
                }
                if(e.originalEvent.deltaY<0 && win.scrollTop() < 10){
                    if(isAnimated == true){
                        $('html').css({'overflow':'hidden'});
                        $('#sec1').removeClass('on');
                        // $('.title-box h2').eq(0).removeClass('ani-fadeIn');
                        // $('.title-box h2').eq(1).removeClass('ani-fadeIn');
                        $('.text-box').removeClass('ani-up2');
                        isAnimated=false;
                    }
                    
                }
            });
        }
        slider(){
            $(document).ready(function(){
                $('.area2-slider').bxSlider({
                    pager:false,
                    controls:false,
                    slideMargin: 15,
                    minSlides:3,
                    maxSlides:3,
                    moveSlides:1,
                    slideWidth: 370,
                    infiniteLoop:false
                });
                $('.area3-slider').bxSlider({
                    pager:false,
                    controls:false,
                    slideMargin: 15,
                    minSlides:3,
                    maxSlides:3,
                    moveSlides:1,
                    slideWidth: 370,
                    infiniteLoop:false
                });
            });
        }
    }
    const newService = new service();
    newService.init();

})(jQuery);

