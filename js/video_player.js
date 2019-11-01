// window.onload = function(){
//    $(function(){
    // console.log('222')
//    }) 
    // console.log("1111");
// }

// playeronload = function(){
//     // $('#video_player').contents().find('.player').css({'border-radius': '30px', 'overflow': 'hidden'});
//     console.log(window.frames[0].document);
//     //跨域iframe无法修改样式
// }
window.onload = function(){
    let toggle = false;
    const btn = $('.player-btn');
    const box = $('.player-box');
    btn.click(function(){
        if(!toggle){
            toggle = true;
            btn.addClass('btn-active');
            box.addClass('btn-active');
        }else{
            toggle = false;
            btn.removeClass('btn-active');
            box.removeClass('btn-active');
        }
    })
      
    
}