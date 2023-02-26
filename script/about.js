(($)=>{
    class about {
        init(){
            // this.scrollEvent();
            this.scroll();
        }
        scroll(){
            const sec2Top = $('#sec2').offset().top;
            const view = $('#viewer');
            let vh = 0; //viewport height

            const fullPage = $('[fullPage]');
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
            
            $(document).ready(function(){
                //화면 높이 설정
                vh = document.body.clientHeight;
                fullPage.each(function(){ //배열에 offset Top 넣기
                    fullPageArr.push($(this).offset().top);
                });
                let lastPageTop = fullPageArr[fullPage.length - 2];
                
                $('#viewer').on('scroll mousewheel',function(e){
                    //길이를 체크해서 bind/unbind
                    // if(!isFull){view.focus(function(){view.unbind();});}
                    // else{e.preventDefault(); e.stopPropagation();}

                    if (view.is(':animated') || $('[item]').is(':animated')) return //애니메이션 중복 방지
                    let direction = e.originalEvent.wheelDelta; //스크롤 방향 감지
                    // console.log(direction);  

                    //마지막 페이지 인식
                    console.log(view.scrollTop());
                    // console.log(nowPage);
                    // console.log(isFull);

                    if(view.scrollTop() > lastPageTop){isFull = false;} 
                    if(view.scrollTop() < lastPageTop + 20 ){isFull = true;}

                    if(direction<=0 && isFull){ //풀페이지에서 내려갈 때
                        if(nowPage>fullPage.length - 1){
                            view.addClass('on'); isFull = false; return; 
                        }
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
                        }
                        view.animate({scrollTop:fullPageArr[nowPage]},600);
                    }

                    if(direction>0 && isFull){ //풀페이지에서 올라갈 때
                        if(nowPage<=0) return;
                        if(nowPage<fullPage.length){view.removeClass('on');}
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
            });
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
    }
    const newAbout = new about();
    if(document.body.clientWidth<750) return;
    newAbout.init();

})(jQuery);

