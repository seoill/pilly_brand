(($)=>{
    const dom = '<li><div class="people-card-wrap"></div></li>';
    class people {
        init(){  
            this.scroll();
            this.randomArray();
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
            });
            if(view.width()<750) {view.css({'overflow':'hidden'});}
            view.on({
                touchstart:function(e){
                    touchStart = e.originalEvent.changedTouches[0].screenX;
                },
                touchend:function(e){                         
                    touchEnd = e.originalEvent.changedTouches[0].screenX;
                    //풀페이지에서 내린다면
                    if(touchStart-touchEnd < 0 ){
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
                                view.css({'overflow-y':'scroll'});
                                break;
                            case 3:
                                break;
                        }
                    }
                    // console.log(nowPage);
                },
            });
        }
        randomArray(){
            const peopleSort = [
                'ajung_choi',
                'bongwon_lee',
                'byungrae_kang',
                'choongyoung_oh',
                'eunji_jeon',
                'hannah_bae',
                'hyunwoo_noh',
                'jaehoon_jang',
                'jihoon_kim',
                'jihoon_park',
                'jinwoo_oh',
                'jongil_lee',
                'jongryung_kim',
                'jungeun_moon',
                'jungrae_kim',
                'kyungchul_jin',
                'narae_kim',
                'sangeun_kim',
                'sanggeun_yoo',
                'seheung_oh',
                'seokwon_choi',
                'seolmin_choi',
                'seunghan_lee',
                'sunghoon_kim',
                'sunghoon_ko',
                'yongsung_choi'
            ];

            let peopleLength = new Array();
            for(let i = 0; i <= peopleSort.length-1 ; i++){
                peopleLength[i] = i;
            }
            // console.log(peopleLength);

            const shuffle = () => (Math.random() - 0.5);
            let shuffled = [...peopleLength].sort(shuffle);
            
            for(let i = 0; i <= peopleSort.length-1 ; i++){
                let num = shuffled[i];
                let url = '../img/people/'+peopleSort[num]+'.png';
                // if(peopleSort[num]==undefined) {console.log('check'); return}
                $('.card-area ul').append(dom);
                    $('.people-card-wrap').eq(i).css('background-image', "url("+url+")");
            }
        }
    }
    const newPeople = new people();
    newPeople.init();

})(jQuery);

