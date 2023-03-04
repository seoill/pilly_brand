(($)=>{
    const mobPoint = 600;
    class about {
        init(){
            this.scroll();
            this.slider();
            this.addParagraph();
            this.topBtn();
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
                    mainMotion();
                    autoAniSection();
                }
            }

            function autoAniSection(){
                setId = setInterval(()=>{
                    nowPage++;
                    mainMotion(nowPage);
                },2800);
            }

            $('#sec1').on('mousewheel',function(e){
                if(window.innerWidth <= mobPoint) return;
                e.preventDefault(); e.stopPropagation();
                    let direction = e.originalEvent.wheelDelta;
                    if ($('#sec1').is(':animated') || $('.item').is(':animated')) return 
                    if(direction<=0) nowPage++;
                    //테스트용
                    // nowPage++
                    mainMotion(nowPage);
            });
            $('#viewer').on('scroll',function(){
                if(window.innerWidth <= mobPoint){
                    // nowPage++
                    // mainMotion(nowPage);
                    if(!$('#viewer').scrollTop() == 0) {clearInterval(setId);}
                    else{
                        autoAniSection();
                    }
                }
            });

            function mainMotion(nowPage){
                switch (nowPage){
                    case 0: case 1: case 2:
                            $('#sec1 .slogan').animate({opacity:0},function(){
                                $('#sec1 .slogan').text(sloganArr[nowPage]);
                                $(this).animate({opacity:1},300,'easeInOutCubic');
                            });
                        break;
                    case 3 : 
                        $('#sec1 .slogan').animate({opacity:0},function(){
                            $('#sec1 .slogan').text(sloganArr[nowPage]);
                            $(this).animate({opacity:1},300,'easeInOutCubic');
                        });
                        break;
                    case 4 :
                        $('.sub5').animate({opacity:1},500);
                        
                        if($(window).width()<mobPoint){ //모바일용
                            //padding 값 줄이기
                            $('#sec1 h2 i').css({paddingLeft:0,marginLeft:-5});
                            $('#sec1 h2 span').css({paddingLeft:0,marginLeft:-5});
                            $('#sec1 h3').animate({opacity:1},700);
                            //문구박스 안보이게
                            $('#sec1 .right-box').animate({opacity:0});
                            $('#sec1 .left-box').animate({opacity:0},function(){
                                $('#sec1 .plus').css({display:'inline-block',opacity:'1'});
                                $('#sec1 .slogan').css({width: 50+'%'});
                                $('#sec1 h3').css({width: 100+'%',top:250});
                                $('#sec1 h3 img').css({width: 82});
                                $('#sec1 .left-box').animate({top:300},'easeInOutQuart', function(){
                                    $('#sec1 .left-box').animate({opacity:1},600,'easeInOutQuart');
                                    $('#sec1 .right-box').animate({top:360},function(){
                                        setTimeout(()=>{
                                            $('#sec1 .right-box').animate({opacity:1},600),'easeInQuart';
                                        },400)
                                    });
                                });
                            });
                        }
                        else{ //PC용
                            $('#sec1 h2 i').animate({paddingLeft:2});
                            $('#sec1 h2 span').animate({paddingLeft:2});
                            $('#sec1 h3').animate({opacity:1},function(){
                                $('#sec1 .slogan').animate({width: 328},200);
                                $('#sec1 .title').animate({bottom: 40+'%'},400);
                                $('#sec1 h3').animate({width: 1138},200);
                                $('#sec1 h2').eq(1).animate({paddingRight:140});
                                $('#sec1 .container').animate({width:1138},400, function(){
                                    setTimeout(()=>{
                                        $('#sec1 .plus').animate({opacity:1},600,'easeInQuart');
                                        
                                        // $('#sec1 .plus').css({display:'inline-block'});
                                    },200)
                                });
                            });
                        }
                        break;
                    case 5 :
                        $('#sec1 .title').animate({opacity:0});
                        $('.sub5').animate({opacity:0},);
                        $('.sub6').animate({opacity:1},500,'easeInQuart');
                        $('.sub6 .text-box').addClass('ani-up');
                        $('.sub6 .text-box strong').addClass('ani-up');
                        break;
                    case 6 :
                        $('.sub7').animate({opacity:1}, 500,function(){
                            $('.sub7 .container img').animate({opacity:1})
                            $('.sub7 .container img').addClass('ani-up');
                            if($(window).width()>mobPoint){
                                $('#floatTop').slideDown(400);
                            }
                            else{
                                setTimeout(()=>{
                                    $('#sec1 .sub7 .down-icon').fadeIn(600);
                                },800)
                            }
                        });
                        
                        break;
                }
                $('#sec1').animate({scrollTop:fullPageArr[nowPage]},800,'easeInOutCubic');
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
                        minSlides:1,
                        maxSlides:1,
                        moveSlides:1,
                        slideMargin: 0,
                        infiniteLoop:false
                    });
                }
            });
        }
        addParagraph(){
            $(document).ready(function(){
                if($(window).width()<mobPoint){
                    $('#sec4 .bot-area').html("<p>우리는 모두가 건강한 삶을 유지하도록 돕기 위해 모인 TEAM pilly예요!</p><p>필리의 일은, 단순히 영양제를 판매하는 것에서 그치지 않아요. 건강을 잃기 전에 미리 자신을 돌보는 것이 자연스러운 일상이 되도록 돕는 게 진짜 우리의 일이죠.</p><p>모두가 더 건강하게, 더 오래오래 살아가는 세상을 위해 우리만의 가치를 지키며 한 발 한 발 나아가고 있어요.</p>")
                    $('#sec6 .left-area .text-box').html("<p>필리가 폭발적으로 성장하고 있던 2020년 5월 어느 날, 필리 물류센터에 화재가 나고 말아요.</p><p>당장 정기구독 고객에게 보낼 제품이 다 타버렸고, 그대로 사업을 접어야 할 수밖에 없을 만큼 큰 위기였어요.</p><p>그때 우리가 가장 먼저 한 일은 고객들에게 상황에 대해 솔직하게 이야기하고, 할 수 있는 한 최선의 해결을 하겠다고 약속하는 거였어요.</p><p>그리고 빠른 제품 생산을 위해 지체 없이 제조사와 협업을 시작했죠. 상황이 어떻든, 우리의 목표는 오직 '고객이 받아보아야 할 제품을 빠르게 배송하는 것' 이었으니까요.</p><p>그리고 기적 같은 일이 있어났어요!</p>")
                    $('#sec7 .area3 .left-box').remove();
                    $('#sec7 .area3').append('<div class="left-box"><img src="./img/about/about_contents_2.jpg" alt=""></div>');
                }
            });
        }
        topBtn(){
            $(document).ready(function(){
                if($(window).width()<mobPoint){
                    $('#floatTop').hide();
                }
                $('.top-btn').on('click',function(e){
                    $('#viewer').animate({scrollTop:0},300,function(){
                        location.reload();
                    });
                    
                });
            });
        }
    }
    const newAbout = new about();
    newAbout.init();

})(jQuery);


