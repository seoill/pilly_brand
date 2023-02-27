(($)=>{
    history.replaceState({}, null, '');

    class about {
        init(){
            // this.scrollEvent();
            this.slider();
            this.scrollNextPage();
        }
        slider(){
            $(document).ready(function(){
                let setId = undefined;
                let cnt = 0;
                function mainSlide(){
                    // $('.slide-wrap').stop().animate({left:`${-460*cnt}px`},1000, function(){
                    //     cnt>7?cnt=0:cnt;
                    //     cnt<0?cnt=7:cnt;
                    //     $('.slide-wrap').stop().animate({left:`${-460*cnt}px`},0)
                    // });
                    $('.slide-wrap').stop().animate({left:`${-460*5}px`},20000,'linear',function(){
                        $('.slide-wrap').animate({left:`0px`},0);
                        mainSlide();
                    });
                }
                mainSlide();

                if($(window).width()<750){
                    $('#sec8 .record-box').bxSlider({
                        pager:false,
                        controls:false,
                        slideMargin: 0,
                        minSlides:1,
                        maxSlides:1,
                        moveSlides:1,
                        slideWidth: 370,
                        infiniteLoop:false
                    });
                }
            });
        }
        scrollNextPage(){
            const container = document.querySelector('main');
            console.log()
            $("body").fadeIn(500, function (){
                $(this).animate({"top": "-20", 'opacity':'1'},10);
            });

            $('#viewer').scroll(function(){
                if($('#viewer').scrollTop() + $(window).height() == $(document).height()){
                    console.log('scrollOver');
                    $("body div").animate({
                        "opacity": "0",
                        "top": "-10"
                    },400, function () {
                        document.location.href = '../index.html';
                    });
                }
            });
        
        }
    }
    const newAbout = new about();
    newAbout.init();

})(jQuery);

