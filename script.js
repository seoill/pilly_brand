(($)=>{
    class about {
        init(){
            this.scrollEvent();
            this.service();
            // this.slider();
        }
        scrollEvent(e){
            let pageLocation = String(document.location).split('/');
            let selectedPage = pageLocation[4];
            if(selectedPage == 'service.html#' || selectedPage == 'service.html') return
            console.log(selectedPage);

            const win = $(window);
            // const page1Top = $('.page1').offset().top;
            // const page2Top = $('.page2').offset().top;
            // const page3Top = $('.page3').offset().top;
            const page4Top = $('.page4').offset().top;
            const sec2Top = $('#sec2').offset().top;
            const allSection = $('#sec2,#sec3,#sec4,#sec5,#sec6,#sec7,#sec8');

            let viewHeight = win.height();
            let viewWidth = win.width();
            let nowPage = 1;
            let isWheelLock = true;
            let isAnimated = false;


            $('html').animate({scrollTop:0},1200,'swing');

            /* 개발용 함수 */
            $('.home-btn').on('click',function(e){
                e.preventDefault();
                $(window).scrollTop(sec2Top);
                nowPage = 8;
                pageCheck();
            });
            win.on('wheel scroll touchmove',function(e){
                if(isAnimated==true?? $(html).is(":animated")) {scrollStop(); return;}
                if (win.scrollTop()>sec2Top - viewHeight) return;
                //애니메이션이 진행중이면 리턴
                if($('html').is(":animated")) return;
            
                //스크롤 업 시            
                if (e.originalEvent.deltaY>0){
                    if(nowPage == 8) return;
                    nowPage ++;
                    pageCheck('up');
                    console.log('up');
                }//스크롤 다운 시
                else if(e.originalEvent.deltaY<0){
                    if(nowPage==1)return;
                    nowPage--;
                    pageCheck('down');
                    console.log('down');
                }
            });

            function scrollStop(){
                $(window).focus(function(){
                    $(window).on('wheel mousewheel touchmove scroll',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                    });
                });
                isWheelLock = true;
            };
            function scrollOk(){    
                if (!isWheelLock) return;
                $(window).focus(function(){
                    $(window).unbind();
                });
                
                isWheelLock = false;
            };
            function keywordsAni(keywordsText){
                setTimeout(()=>{
                    $('.keywords').animate({marginBottom:(-20),opacity:0},800,function(){
                        $('.keywords').text(keywordsText);
                        $('.keywords').animate({marginBottom:(0),opacity:1})
                    }
                    );
                },400);
            };

            function pageCheck(now){
                scrollStop();
                console.log(nowPage)
                switch (nowPage) {
                    case 1:
                        keywordsAni('맞춤영양제');
                        break;
                    case 2:
                        keywordsAni('건강습관');
                        break;
                    case 3:
                        keywordsAni('헬시플레져');
                        break;
                    case 4:
                        scrollStop();
                        if(now=='up'){
                            keywordsAni('건강메이트');    
                        }
                        $('.slogan-tit').animate({opacity:0,top:0},400,function(){
                            setTimeout(()=>{
                                $('.title-box').animate({bottom:24},300)
                                $('.slogan-tit').css({opacity:0});
                            },400)
                        });
                        $('.opacity-layer').css({'opacity':'0'});
                        break;
                    case 5:          
                        scrollStop();              
                        // if(now=='up'){$('.title-box').show(300);}
                        $('.opacity-layer').css({'opacity':'.35'});
                        $('.text-box strong').animate({marginTop:50,opacity:0},800,function(){
                            scrollStop();
                            $('.title-box').animate({bottom:(viewHeight/2-36)},500,function(){
                                $('.title-box').animate({opacity:0},600,function(){
                                    $('.title-box').addClass('on');
                                    $('.title-box').animate({opacity:1});
                                    $('.slogan-tit').css({'display':'block'});
                                    setTimeout(()=>{
                                        $('.slogan-tit').animate({opacity:1,top:-58.4},800);
                                    },500);
                                });
                            });
                            $('.text-box').animate({top:100+'%',opacity:0},800,function(){
                                $('.text-box').css({'display':'none'});
                            });
                        });
                        break;
                    case 6:
                        $('.opacity-layer').css({'opacity':'.70'});
                        $('.text-box').css({'display':'block'});
                        $('.title-box').animate({bottom:24,opacity:0},800,function(){
                            $('.title-box').removeClass('on');
                            $('.title-box').hide();
                            $('.text-box').animate({top:50+'%',opacity:1},800,function(){
                                setTimeout(()=>{
                                    $('.text-box strong').animate({marginTop:0,opacity:1},800);
                                },500)
                            });
                        });
                        $('.copy-box').animate({top:100+'%',opacity:0});
                        $('.copy-box').css({'display':'none'});
                        break;
                    case 7:
                        if(now=='down') return
                        $('#sec1 .text-box strong').animate({marginTop:50, opacity:0},500,function(){
                            setTimeout(()=>{
                                $('#sec1 .text-box').animate({top:100+'%', opacity:0},800,function(){
                                    $('#sec1 .text-box').css({'display':'none'});
                                    $('#sec1 .copy-box').animate({top:50+'%', opacity:1});
                                    $('#sec1 .copy-box').css({'display':'block'});
                                });
                            },500);
                        })
                        $('.opacity-layer').css({'opacity':'1'});
                        break;
                
                    }
                if(nowPage>7){ //page가 7이상이면
                    $('.title-box').hide();
                    allSection.show();
                    scrollOk();
                    $('html').css({'overflow':'scroll'});
                    isAnimated = false;
                    return;
                }
                if(nowPage==7){
                    allSection.hide();
                }
                if(nowPage>4){
                    allSection.hide();
                }
                if(0<nowPage<4){//page가 4보다 작으면
                    scrollStop();
                    $('html').css({'overflow':'hidden'});
                    let posTop = (nowPage-1)*win.height();
                    $('html').animate({scrollTop:posTop},1200,'swing');
                    isAnimated = false;
                    return;
                };
                
            }
            
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
                $('.slide-view').on('mouseover',function(){
                });
            });
        }
        service(){
            let pageLocation = String(document.location).split('/');
            let selectedPage = pageLocation[4];
            if(selectedPage == 'index.html#' || selectedPage == 'index.html') return

            const win = $(window);
            let isAnimated = false;
            win.on('wheel scroll touchmove',function(e){
                if(!isAnimated){
                    if(e.originalEvent.deltaY<0) return;
                    $('#sec1').addClass('on');
                    $('.title-box h2').eq(0).addClass('ani-fadeIn');
                    $('.title-box h2').eq(1).addClass('ani-fadeIn');
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
                        $('.title-box h2').eq(0).removeClass('ani-fadeIn');
                        $('.title-box h2').eq(1).removeClass('ani-fadeIn');
                        $('.text-box').removeClass('ani-up2');
                        isAnimated=false;
                    }
                    
                }
            });
            $('.area2-slider').bxSlider({
                pager:false,
                controls:false,
                slideMargin: 30,
                minSlides:3,
                maxSlides:3,
                moveSlides:1,
                slideWidth: 370,
                infiniteLoop:false
            });
            $('.area3-slider').bxSlider({
                pager:false,
                controls:false,
                slideMargin: 30,
                minSlides:3,
                maxSlides:3,
                moveSlides:1,
                slideWidth: 370,
                infiniteLoop:false
            });
        }
    }
    const newAbout = new about();
    newAbout.init();

})(jQuery);