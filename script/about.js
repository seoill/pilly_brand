(($)=>{
    const mobPoint = 600;
    class about {
        init(){
            this.scroll();
            this.slider();
        }
        scroll(){
            const fullPage = $('.full-page');
            let fullPageArr = []; //전체 fulllPage Top값 배열
            let sloganArr  = [
                '맞춤영양제',
                '건강습관',
                '헬시플레저',
                '건강메이트'
            ]
        
            let nowPage = 0; //현 진행 상태
            let vh = undefined;
            let vw = undefined;
            let setId = undefined;

            function pageResize(){
                vh = window.innerHeight;
                vw = window.innerWidth;
                $('.full-page').height(vh);
                $('.full-page').width(vw);
            }

            $(window).on('resize',function(){
                pageResize();
                setTimeout(()=>{
                    fullPage.each(function(){ //배열에 offset Top 넣기
                        fullPageArr.push($(this).offset().top);
                        // console.log(fullPageArr);
                    });
                },100);
            });

            window.onload = function(){       
                // let url = window.location.hash.toString();
                // if(url == '#sub7'){nowPage=7}
                pageResize();
                setTimeout(()=>{
                    fullPage.each(function(){ //배열에 offset Top 넣기
                        fullPageArr.push($(this).offset().top);
                        // console.log(fullPageArr);
                    },1000);
                });
                if(window.innerWidth <= mobPoint){
                    autoAniSection();
                }
            }

            function autoAniSection(){
                setId = setInterval(()=>{
                    nowPage++;
                    mainMotion(nowPage);
                },1800);
            }

            $('#sec1').on('mousewheel',function(e){
                if(window.innerWidth <= mobPoint) return;
                e.preventDefault(); e.stopPropagation();
                    let direction = e.originalEvent.wheelDelta;
                    if ($('#sec1').is(':animated') || $('.item').is(':animated')) return 
                    if(direction<=0) nowPage++;
                    mainMotion(nowPage);
            });
            $('#viewer').on('scroll',function(){
                if(window.innerWidth <= mobPoint){
                    if(!$('#viewer').scrollTop() == 0) {clearInterval(setId);}
                    else{autoAniSection();}
                }
            });

            function mainMotion(nowPage){
                switch (nowPage){
                    case 0: case 1: case 2:
                            $('#sec1 .slogan').animate({opacity:0},function(){
                                $('#sec1 .slogan').text(sloganArr[nowPage]);
                                $(this).animate({opacity:1});
                            });
                        break;
                    case 3 : 
                        $('#sec1 .slogan').animate({opacity:0},function(){
                            $('#sec1 .slogan').text(sloganArr[nowPage]);
                            $(this).animate({opacity:1});
                        });
                        break;
                    case 4 :
                        $('.sub5').animate({opacity:1},500);
                        $('#sec1 h3').animate({opacity:1},function(){
                            $('#sec1 .title').animate({bottom: 40+'%'},400,function(){
                                $('#sec1 .slogan').animate({width: 328, paddingLeft:2},300);
                                $('#sec1 h2 i').animate({paddingLeft:2});
                                $('#sec1 h2 span').animate({paddingLeft:2},function(){
                                    $('#sec1 .plus').show(300);
                                    $('#sec1 .container').animate({width:1138},200);
                                    $('#sec1 h3').animate({width:1138},200);
                                });
                            });
                        });
                        break;
                    case 5 :
                        $('#sec1 .title').animate({opacity:0});
                        $('.sub5').animate({opacity:0});
                        $('.sub6').animate({opacity:1},500);
                        $('.sub6 .text-box').addClass('ani-up');
                        $('.sub6 .text-box strong').addClass('ani-up');
                        break;
                    case 6 :
                        $('.sub7').animate({opacity:1}, 500,function(){
                            $('.sub7 img').animate({opacity:1})
                            $('.sub7 img').addClass('ani-up');
                        });
                        break;
                }
                $('#sec1').animate({scrollTop:fullPageArr[nowPage]},600);
                if(nowPage == 6){clearInterval(setId); $('#sec1').unbind();}
        }
        }
        slider(){
            $(document).ready(function(){
                function mainSlide(){
                    $('.slide-wrap').stop().animate({left:`${-460*5}px`},20000,'linear',function(){
                        $('.slide-wrap').animate({left:`0px`},0);
                        mainSlide();
                    });
                }
                mainSlide();
                if($(window).width()<mobPoint){
                    $('#sec8 .record-box').bxSlider({
                        pager:false,
                        controls:false,
                        slideMargin: 20,
                        minSlides:1,
                        maxSlides:1,
                        moveSlides:1,
                        slideWidth: 280,
                        infiniteLoop:false
                    });
                }
            });
        }
    }
    const newAbout = new about();
    newAbout.init();

})(jQuery);

