(($)=>{
    const mobPoint = 600;
    class service{
        init(){
            this.scroll();
            this.slider();
            this.modal();
            this.topBtn();
        }
        scroll(){
            const view = $('#viewer');
            let nowPage = 0;
            let touchStart = 0;
            let touchEnd = 0;

            $(document).ready(function(){
                $('#viewer').on('scroll mousewheel',function(e){                    
                    e.preventDefault(); e.stopPropagation();
                    if(nowPage>=3){view.unbind();}

                    //애니메이션 중복 방지
                    if (view.is(':animated') || $('[item]').is(':animated')) return
                    let direction = e.originalEvent.wheelDelta; //스크롤 방향 감지

                    if(direction<=0){
                        nowPage++;
                        switch (nowPage){
                            case 1 :
                                $('#sec1').addClass('on');
                                view.animate({scrollTop:0},1000);
                                break;
                            case 2 :
                                view.animate({scrollTop:0},1000);
                                $('.title-box h2').eq(0).addClass('ani-fadeIn');
                                $('.title-box h2').eq(1).addClass('ani-fadeIn');
                                $('.text-box').addClass('ani-up2');
                                break;
                            case 3 :
                                view.addClass('on');
                                view.css({'overflow-y':'scroll'});
                                if($(window).width()>mobPoint){
                                    $('#floatTop').slideDown(400);
                                }
                                break;
                        }
                    }
                });

                if($(window).width()<750) {view.css({'overflow':'hidden'});}
                // view.on({
                //     touchstart:function(e){
                //         touchStart = e.originalEvent.changedTouches[0].screenX;
                //     },
                //     touchend:function(e){                         
                //         touchEnd = e.originalEvent.changedTouches[0].screenX;
                //         //풀페이지에서 내린다면
                //         if(touchStart-touchEnd < 0 ){
                //             nowPage++;
                //             switch (nowPage){
                //                 case 1 :
                //                     $('#sec1').addClass('on');
                //                     view.animate({scrollTop:0},500);
                //                     $('.title-box h2').eq(0).addClass('ani-fadeIn');
                //                     $('.title-box h2').eq(1).addClass('ani-fadeIn');
                //                     $('.text-box').addClass('ani-up2');
                //                     view.css({'overflow-y':'scroll'});
                //                     break;
                //                 case 2 :
                //                     break;
                //             }
                //         }
                //         // console.log(nowPage);
                //     },
                // });
            });
        }
        slider(){
            $(document).ready(function(){// slider 자체 설정
                if($(window).width()<750){
                    $('.area1-slider').bxSlider({
                        pager:false,
                        controls:false,
                        slideMargin: 20,
                        minSlides:1,
                        maxSlides:1,
                        moveSlides:1,
                        infiniteLoop:false
                    });    
                    $('.area2-slider').bxSlider({
                        pager:false,
                        controls:false,
                        slideMargin: 20,
                        minSlides:1,
                        maxSlides:1,
                        moveSlides:1,
                        infiniteLoop:false
                    });
                    $('.area3-slider').bxSlider({
                        pager:false,
                        controls:false,
                        slideMargin: 20,
                        minSlides:1,
                        maxSlides:1,
                        moveSlides:1,
                        infiniteLoop:false
                    });
                }
                else{
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
                }
            });

            //gradient 설정
            const slider2 = document.querySelector('.area2-slider');
            $('.area2-slider').on('mouseenter',function(){
                let left = slider2.getBoundingClientRect().left;
                // console.log('left : '+left);
                if(left>=360){ //왼쪽에 닿음
                    // console.log('left-over');
                    $('#sec2 .area2').removeClass('middle');
                    $('#sec2 .area2').removeClass('right');
                    $('#sec2 .area2').addClass('left');
                    return;
                }
                if(left<=35){ //오른쪽에 닿음
                    // console.log('right-over');
                    $('#sec2 .area2').removeClass('left');
                    $('#sec2 .area2').removeClass('middle');
                    $('#sec2 .area2').addClass('right');
                    return;
                }
                if(left<360){//중간
                    $('#sec2 .area2').removeClass('left');
                    $('#sec2 .area2').removeClass('right');
                    $('#sec2 .area2').addClass('middle');
                }
            });
            const slider3 = document.querySelector('.area3-slider');
            $('.area3-slider').on('mouseenter',function(){
                let left = slider3.getBoundingClientRect().left;
                // console.log('left : '+left);
                if(left>=360){ //왼쪽에 닿음
                    // console.log('left-over');
                    $('#sec2 .area3').removeClass('middle');
                    $('#sec2 .area3').removeClass('right');
                    $('#sec2 .area3').addClass('left');
                    return;
                }
                if(left<=35){ //오른쪽에 닿음
                    // console.log('right-over');
                    $('#sec2 .area3').removeClass('left');
                    $('#sec2 .area3').removeClass('middle');
                    $('#sec2 .area3').addClass('right');
                    return;
                }
                if(left<360){//중간
                    $('#sec2 .area3').removeClass('left');
                    $('#sec2 .area3').removeClass('right');
                    $('#sec2 .area3').addClass('middle');
                }
            });
        }
        modal(){
            $('.modal-btn').on('click',function(e){
                e.preventDefault();
                if($(this).hasClass('btn1')){
                    $('#modal .left-box').addClass('img1');
                    $('#modal .right-box b').text('AI 영양추천');
                    $('#modal .right-box h4').html('영양제 알아보다 거북목 되겠네<br>필리에선 3분이면 끝인데!');
                    if($(window).width()<750){
                        $('#modal .right-box p').html('전문가가 설계하고 데이터로 검증한 필리의 영양추천으로 언제 어디서나 쉽고 빠르게 나에게 필요한 영양제를 알아보세요.<br> 라이프 스타일에 따라 부족한 영양성분도 달라지니 3개월에 한 번씩 건강설문 해보기를 추천드려요!<br>');
                    }
                    else{
                        $('#modal .right-box p').html('과하지 않게, 꼭 필요한 것만 꾸준히 먹는 것이 건강을 위한 올바른 방법이에요.<br> 전문가가 설계하고 데이터로 검증한 필리의 영양추천으로 언제 어디서나 쉽고 빠르게 나에게 필요한 영양제를 알아보세요.<br> 라이프 스타일에 따라 부족한 영양성분도 달라지니 3개월에 한 번씩 건강설문 해보기를 추천드려요!<br>');
                    }
                }
                if($(this).hasClass('btn2')){
                    $('#modal .left-box').addClass('img2');
                    $('#modal .right-box b').text('정기배송');
                    $('#modal .right-box h4').html('배송일이 다가오니까 <br> 한 번이라도 더 먹게 돼요');
                    if($(window).width()<750){
                        $('#modal .right-box p').html('필리는 신경쓰지 않아도 떨어질 일 없게, 매일 빠짐없이 건강을 챙기도록 정기구독 서비스를 제공해요. <br> 무조건 무료배송, 구독 기간에 따른 추가 할인 등 건강을 챙길수록 커지는 혜택을 경험할 수 있어요. <br> 데드라인 효과로 더 잘 챙겨먹게 되는 장점도 있답니다!<br>');
                    }
                    else{
                        $('#modal .right-box p').html('일상속에서 하루라도 없으면 안 되는 필수품들이 있죠. <br>영양제도 그 중에 하나가 되었으면 좋겠어요. <br>그래서 필리는 신경쓰지 않아도 떨어질 일 없게, 매일 빠짐없이 건강을 챙기도록 정기구독 서비스를 제공해요. <br> 무조건 무료배송, 구독 기간에 따른 추가 할인 등 건강을 챙길수록 커지는 혜택을 경험할 수 있어요. <br> 데드라인 효과로 더 잘 챙겨먹게 되는 장점도 있답니다!<br>');
                    }
                }
                if($(this).hasClass('btn3')){
                    $('#modal .left-box').addClass('img3');
                    $('#modal .right-box b').text('섭취관리');
                    $('#modal .right-box h4').html('이젠 앱테크 말고 건테크<br>내 건강 챙기면서 포인트 쌓기');
                    if($(window).width()<750){
                        $('#modal .right-box p').html('“아 맞다, 영양제!” 건강메이트 필리와 함께라면 걱정 없어요. 영양제 먹으라는 알림은 기본, 섭취체크를 통해 얼마나 잘 먹었는지 보여주고 매일매일 포인트도 주니까요.<br>섭취체크로 쌓은 포인트는 필리 포인트몰에서 기프티콘으로 교환해 몸과 마음의 양식을 살 수 있어요.');
                    }
                    else{
                        $('#modal .right-box p').html('“아 맞다, 영양제!” 건강메이트 필리와 함께라면 걱정 없어요. 영양제 먹으라는 알림은 기본, 섭취체크를 통해 얼마나 잘 먹었는지 보여주고 매일매일 포인트도 주니까요.<br>섭취체크로 쌓은 포인트는 필리 포인트몰에서 기프티콘으로 교환해 몸과 마음의 양식을 살 수 있어요. <br>안 먹으면 손해! 필리케어로 꾸준한 영양제 섭취 습관을 관리해드려요.<br>');
                    }
                }
                $('#modal').show();

            });
            $('.close-btn').on('click',function(e){
                e.preventDefault();
                $('#modal').hide();
                $('#modal .left-box').removeClass('img1');
                $('#modal .left-box').removeClass('img2');
                $('#modal .left-box').removeClass('img3');
            });
        }      
        topBtn(){
            $(document).ready(function(){
                if($(window).width()<mobPoint){
                    $('#floatTop').hide();
                }
                $('.top-btn').on('click',function(e){
                    $('#viewer').animate({scrollTop:0},300);
                    // location.reload();  
                });
            });
        }
    }
    const newService = new service();
    newService.init();

})(jQuery);


let scr = false;
const v = document.getElementById('viewer');

function touch(){
    v.style.overflowY = 'scroll';
                        $('#sec1').addClass('on');
    $('.title-box h2').eq(0).addClass('ani-fadeIn');
    $('.title-box h2').eq(1).addClass('ani-fadeIn');
    $('.text-box').addClass('ani-up2');
    scr = true;
    console.log(scr)
}
if(!scr) {v.addEventListener("touchend", touch, false);}



