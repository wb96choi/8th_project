
// 토글
$(function(){

    $('#util-menu .util-menu-btn').click(function(){
      $('#toggle-menu').addClass('on');
    });

    $('#btn-close').click(function(){
      $('#toggle-menu').removeClass('on');
    });
  
  
  });



  $(function(){
    let num = 0 
    
    function changeSlider(img_num){
        let img_height = 1200 * img_num;     

        $('.slider .sliders').css({
            transform: `translateX(${-img_height}px)`
        });
    }

    setInterval(function(){
        num++;
        if(num > 2){ 
            num = 0; 
        }
        changeSlider(num);
    }, 5000)
});