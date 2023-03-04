(($)=>{
    const mobPoint = 600;
    class product {
        init(){  
            this.scroll();
            this.addParagraph();
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
                                $('.title-box').addClass('ani-fadeIn');
                                $('.text-box').addClass('ani-up2');
                                break;
                            case 3:
                                view.addClass('on');
                                view.css({'overflow-y':'scroll'});
                                if($(window).width()>mobPoint){
                                    $('#floatTop').slideDown(400);
                                }
                                break;
                        }
                    }
                });
                
                if(view.width()<750) {view.css({'overflow':'hidden'});}
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
                //                     view.animate({scrollTop:0},600);
                //                     $('.title-box').addClass('ani-fadeIn');
                //                     $('.text-box').addClass('ani-up2');
                //                     view.css({'overflow-y':'scroll'});
                //                     break;
                //                 case 2 :
                //                     break;
                //                 case 3:
                //                     break;
                //             }
                //         }
                //         // console.log(nowPage);
                //     },
                // });
            });
        }
        addParagraph(){
            $(document).ready(function(){
                if($(window).width()<mobPoint){
                    $('#sec2 .area1 .text-box').html("<p>제품을 만들면서 항상 스스로에게 질문해요. ‘내 가족에게 마음 놓고 먹일 수 있는가?’</p><p>이 질문이 필리 영양제 생산의 가장 중요한 기준이기도 합니다. 그렇기에 성분의 함량부터 어떤 원료를 어디에서 공급해올지 결정하는 모든 과정을 절대 허투루 할 수 없어요.</p><p><i>필리는 제품 표면을 코팅하거나 색소, 부형제를 넣지 않아요.</i> 보기에 좋은 것보다는 좀 더 안전한 제품을 만들기 위해서예요.</p><p>남들보다 더디고, 때로는 고되기도 하지만 우리가 가는 이 길이 옳은 길이라 믿어요. 건강함을 위한 것을 건강한 방법으로 만드는 건 필리에게 참 당연한 일이니까요.</p>")
                    $('#sec2 .area2 .text-box').html("<p>필리 영양제 가격은 합리적인 편이에요. 그래서 오해도 제법 많이 받죠. ‘가격이 싸니까 함량도 질도 떨어질 거야!’</p><p><i>필리는 한국인의 식습관과 각 영양성분의 섭취 용량을 계산해 충분한 용량을 담아요.</i> (식약처 기준 준수)</p><p>제작 과정에서 원가가 올라가더라도 더 좋은 성분으로 안전하게 만들기 위해 노력하죠. 필리 영양제가 합리적인 가격인 이유는 유통 마진을 최소화했기 때문이에요. </p><p>꼭 필요한 만큼만 담아 제대로 만든 필리 영양제, 부담 없는 가격으로 안심하고 섭취하세요.</p>")
                    $('#sec2 .area3 .text-box').html("<p>필리는 영양제를 파는 브랜드가 아니에요. </p><p>건강한 습관이 일상이 되도록 돕는 것이 우리의 미션이자 본질이죠. 필리 제품을 30일 분량으로 채운 것도 꾸준한 영양제 섭취 습관을 들이게 하기 위함이에요.</p><p>귀찮음 또는 깜빡 잊어버려서 다 먹지 못하고 <i>버리게 되는 일이 없도록 한 통에 30일 분량을 담아</i> 한 달에 한 번 정기배송으로 받아볼 수 있도록 한 거죠.</p><p>매일 꾸준히 먹어 한 통을 다 비우고 나면 때맞춰 집 앞에 한 달 동안 섭취할 영양제가 도착하니 먹다 남길 일도, 오래된 영양제를 먹을 일도 없어요.</p>")
                    $('#sec2 .area2 .left-box').remove();
                    $('#sec2 .area2').append('<div class="left-box"><img src="../img/story/story_contents_2.jpg" alt=""></div>');
                }
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
    const newProduct = new product();
    newProduct.init();

})(jQuery);

let scr = false;

const v = document.getElementById('viewer');

function touch(){
    v.style.overflowY = 'scroll';
    $('#sec1').addClass('on');
    $('.title-box').addClass('ani-fadeIn');
    $('.text-box').addClass('ani-up2');
    scr = true;
    console.log(scr)
}
if(!scr) {v.addEventListener("touchend", touch, false);}



