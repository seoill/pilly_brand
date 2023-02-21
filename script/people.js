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
               '강병래',
               '고성훈',
               '김나래',
               '김상은',
               '김성훈',
               '김정래',
               '김종령',
               '김지훈',
               '노현우',
               '문정은',
               '박지훈',
               '배한나',
               '오세흥',
               '오진우',
               '오충영',
               '유상근',
               '이봉원',
               '이승한',
               '이종일',
               '장제훈',
               '전은지',
               '진경철',
               '최석원',
               '최설민',
               '최아정',
               '최용성'
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

