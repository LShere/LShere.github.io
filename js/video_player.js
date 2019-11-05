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
//引入的script不能有两个window.onload否则会发生冲突，
// window.onload = function(){
    let toggle = false;
    const btn = $('.player-btn');
    const box = $('.player-box');
    const player = $('#video_player');
    // const width = box.width();
    // console.log(width, "width");
    // player.width(width);

    // delayScrollFunc(fn, delay){
    //     const now = new Date().getTime();

    // }
    btn.click(function(){
        if(!toggle){
            // player.stop();
            toggle = true;
            btn.addClass('btn-active');
            box.addClass('btn-active').removeClass('btn-hide');
            player.css({
                'visibility': 'visible'
            })
        }else{
            // player.stop();
            toggle = false;
            btn.removeClass('btn-active');
            box.addClass('btn-hide').removeClass('btn-active');
            setTimeout(() => {
                player.css({
                    'visibility': 'hidden'
                })
            }, 500);
        }
    })
    // $(window).scroll(function(){
    //     let timer;
    //     let startTime = new Date();
    //     return function(){
    //         let curTime = new Date();
    //         if(curTime - startTime >= 2000){
    //             setTimeout(() => {
    //                 console.log($(document).scrollTop(), "top");   
    //             }, 500);
    //             startTime = curTime;
    //         }
    //     }
    // })
    //节流函数
    function throttle(fn, wait){
        var lastTime = 0, timeout;
        return function(){
            var context = this,
            args = arguments,
            delay = wait || 100,
            now = new Date().getTime();
            if(now - lastTime <= delay){
                return;
            }
            lastTime = now;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                timeout = null;
                fn.apply(context, args);
            }, delay);

        }
    }
    //隐藏显示播放按钮
    function showOrHideBtn(){
        // console.log($(document).scrollTop(), 'top');
        let introHeight = $('#cxo-intro').height();
        let scrollTop = $(document).scrollTop();
        if(scrollTop > introHeight){
            btn.addClass('hide-btn')
                .removeClass('show-btn');
        }else{
            if(btn.hasClass('hide-btn')){
                btn.removeClass('hide-btn')
                    .addClass('show-btn');
            }
        }
    }
    window.addEventListener('scroll', function(){
        throttle(showOrHideBtn, 200)();
        // this.console.log($(this.document).scrollTop())
    })
      
    