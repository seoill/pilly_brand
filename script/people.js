(($)=>{
    const dom = '<li><div class="people-card-wrap"></div></li>';
    class people {
        init(){  
            this.scroll();
            this.randomArray();
        }
        scroll(){
            const win = $(window);
            let isAnimated = false;
            win.on('wheel scroll touchmove',function(e){
                if(!isAnimated){
                    if(e.originalEvent.deltaY<0) return;
                    $('#sec1').addClass('on');
                    $('.title-box').eq(0).addClass('ani-fadeIn');
                    $('.text-box').addClass('ani-fadeIn');
                    isAnimated = true;
                    setTimeout(function(){
                        $('html').css({'overflow':'scroll'});
                    });
                }
                if(e.originalEvent.deltaY<0 && win.scrollTop() < 10){
                    if(isAnimated == true){
                        $('html').css({'overflow':'hidden'});
                        $('#sec1').removeClass('on');
                        $('.title-box').removeClass('ani-fadeIn');
                        $('.text-box').removeClass('ani-fadeIn');
                        isAnimated=false;
                    }
                    
                }
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
            console.log(peopleLength);

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

