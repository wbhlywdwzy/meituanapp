$(function(){
    'use strict';
    $(window).scroll(function(){
        var w_t=$(window).scrollTop();
    if(w_t>=260){
        $(".much").css({"position":"fixed","left":0,"top":44})
    }else{
        $(".much").css({"position":"relative","left":0,"top":0})
    }
    });
    $(".much button").on("click",function(){
        location.href="commit.html";
    });
    $(".more").on("click",function(){
        if($(".tran,.more-content").hasClass("h")){
        $(".tran,.more-content").removeClass("h");
        }else{
            $(".tran,.more-content").addClass("h");
        }
    });
    $(".shine").on("click",function(){
        $(".shinec").show();
        $(".shine").hide();
        $(".spancollect").fadeIn().text("收藏成功").fadeOut(2000);
    }); 
    $(".shinec").on("click",function(){
        $(".shine").show();
        $(".shinec").hide();
        $(".spancollect").fadeIn().text("收藏已取消").fadeOut(2000);
    });
})