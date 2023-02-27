(($)=>{
    history.replaceState({}, null, '');
    console.log();

    class about {
        init(){
            // this.scrollEvent();
            this.scroll();
            this.scroll
        }
        scroll(){
            const view = $('#viewer');
            let vh = 0; //viewport height
            let vw = 0; //viewport height
            let lastPageTop = true;

            const fullPage = $('.full-page');
            let fullPageArr = []; //전체 fulllPage Top값 배열
            let sloganArr  = [
                '맞춤영양제',
                '건강습관',
                '헬시플레저',
                '건강메이트'
            ]
        
            let nowPage = 0; //현제 fullPage 페이지 인덱스
            let isFull = true;
            //모바일기기를 위한 이벤트
            let touchStart = null;
            let touchEnd = null;


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
                        console.log(fullPageArr);
                    });
                },1000);
            });

            window.onload = function(){       
                // let url = window.location.hash.toString();
                // if(url == '#sub7'){nowPage=7}
                pageResize();
                setTimeout(()=>{
                    fullPage.each(function(){ //배열에 offset Top 넣기
                        fullPageArr.push($(this).offset().top);
                        console.log(fullPageArr);
                    },1000);
                });
                console.log(vh)
                console.log(vw)
                // view.on({
                //     touchstart:function(e){
                //         touchStart = e.originalEvent.changedTouches[0].screenX;
                //     },
                //     touchend:function(e){                         
                //         touchEnd = e.originalEvent.changedTouches[0].screenX;
                //         //풀페이지에서 내린다면
                //         if(touchStart-touchEnd > 0  && isFull){
                //             console.log('scroll Down');
                //         }
                //         if(touchEnd-touchStart>0 && isFull){ //풀페이지에서 올린다면
                //             console.log('up');
                //         }

                //         console.log(nowPage);
                //     },
                // });  
            }

            $('#viewer').on('scroll mousewheel',function(e){
                
                lastPageTop = fullPageArr[fullPage.length - 2];

                //길이를 체크해서 bind/unbind
                if(!isFull || !view.is(':animated')){view.focus(function(){view.unbind();});}                
                else{e.preventDefault(); e.stopPropagation();}

                if (view.is(':animated') || $('.item').is(':animated')) return //애니메이션 중복 방지

                let direction = e.originalEvent.wheelDelta; //스크롤 방향 감지

                //마지막 페이지 인식
                console.log(view.scrollTop());
                console.log('nowPage : ' + nowPage);
                console.log('isFull : '+ isFull);

                if(view.scrollTop() > lastPageTop){isFull = false;} 
                if(view.scrollTop() < lastPageTop + 20 ){isFull = true;}

                if(direction<=0 && isFull){ //풀페이지에서 내려갈 때
                    // console.log('내림');
                    nowPage++;
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
                                    $('#sec1 .slogan').animate({width: 330, paddingLeft:2},300);
                                    $('#sec1 .plus').show(300);
                                });
                            });
                            break;
                        case 5 :
                            $('#sec1 .title').animate({opacity:0});
                            $('.sub5').animate({opacity:0});
                            sub6on();
                            break;
                        case 6 :
                            sub7on();
                            break;
                        case 7 :
                            
                            break;
                        case 8 :
                            $("body div").animate({
                                "top": "0"
                            },0, function () {
                                window.location.href="../subpage/index2.html"
                            });
                            break;
                    }
                    view.animate({scrollTop:fullPageArr[nowPage]},600);
                }

                if(direction>0 && isFull){ //풀페이지에서 올라갈 때
                    if(nowPage<=0) return;
                    // console.log('올림');
                    nowPage--;
                    switch (nowPage){
                        case 0: case 1:
                            $('#sec1 .slogan').animate({opacity:0},function(){
                                $('#sec1 .slogan').text(sloganArr[nowPage]);
                                $(this).animate({opacity:1});
                            });;
                            break;
                        case 2:
                            $('#sec1 .slogan').text(sloganArr[nowPage]);
                            break;
                        case 3 :
                            $('.sub5').animate({opacity:0},500);
                            $('#sec1 .plus').hide(300);
                            $('#sec1 .slogan').animate({width:370, paddingLeft:10},300,function(){
                                $('#sec1 h3').animate({opacity:0})
                                $('#sec1 .title').animate({bottom:24},400);
                            });
                            $('#sec1 .slogan').animate({opacity:0},function(){
                                $('#sec1 .slogan').text(sloganArr[nowPage]);
                                $(this).animate({opacity:1});
                            });
                            break;
                        case 4 :
                            sub6off();
                            $('.sub5').animate({opacity:1},500);
                            $('#sec1 .title').animate({opacity:1});
                            
                            break;
                        case 5 :
                            sub7off();
                            sub6on();
                            break;
                        case 6 :
                            break;
                    }
                    view.animate({scrollTop:fullPageArr[nowPage]},600);
                }
                // console.log(nowPage);
            });
            function sub5on(){
                $('.sub5').animate({opacity:1},500);
            }
            function sub6on(){
                $('.sub6').animate({opacity:1},500);
                $('.sub6 .text-box').addClass('ani-up');
                $('.sub6 .text-box strong').addClass('ani-up');
            }
            function sub6off(){
                $('.sub6 .text-box strong').removeClass('ani-up');
                $('.sub6 .text-box').removeClass('ani-up');
                $('.sub6').animate({opacity:0});
            }
            function sub7on(){
                $('.sub7').animate({opacity:1}, 500,function(){
                    $('.sub7 img').animate({opacity:1})
                    $('.sub7 img').addClass('ani-up');
                    sub6off();
                });
            }
            function sub7off(){
                $('.sub7').animate({opacity:0},0);
                $('.sub7 img').animate({opacity:0},0);
                $('.sub7 img').removeClass('ani-up');
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
            });
        }
        scrollNextPage(){
            const container = document.querySelector('main');
            console.log()
            $("body").fadeIn(500, function (){
                $(this).animate({"top": "-20", 'opacity':'1'},1000);
            });

            $('#viewer').scroll(function(){
                // if($('#viewer').scrollTop() + $(window).height() == $(document).height()){
                //     console.log('scrollOver');
                //     $("body div").animate({
                //         "opacity": "1",
                //         "top": "-10"
                //     },400, function () {
                //         document.location.href = './index.html#sec3';
                //     });
                // }

                if(container.getBoundingClientRect().bottom <= window.innerHeight){
                    console.log('scrollOverBottom');
                    $("body div").animate({
                        "opacity": "0",
                        "top": "-20"
                    },300, function () {
                        location.href = "../subpage/subindex.html";
                    });
                }
            });
        
        }
    }
    const newAbout = new about();
    newAbout.init();

})(jQuery);

