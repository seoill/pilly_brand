(($)=>{
    class product {
        init(){  
            this.scroll();
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

