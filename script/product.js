(($)=>{
    class product {
        init(){  
            this.scroll();
        }
        scroll(){
            const view = $('#viewer');
            let nowPage = 0;
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
                                break;
                        }
                    }
                });
            });
        }
    }
    const newProduct = new product();
    newProduct.init();

})(jQuery);

