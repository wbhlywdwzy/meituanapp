$(function() {
    'use strict';
    var whole = parseFloat($(".whole").text());
  
    //    var whole=val;
    
    $("body").on("click",".plus", function() {
        var count=parseInt($(this).parent().find('input[class*=count]').val())+1;
        $(".subtract").css({
            "color": "#06c1ae"
        });
        if(count>=100){
            count=100
        }
        $(".count").val(count);
        $(".allcount").text('(共' + count + '张)');
        var val = (count * whole).toFixed(1)
        $(".whole").text(val);
    });
    $("body").on("click",".subtract", function() {
        var count=parseInt($(this).parent().find('input[class*=count]').val());
        if (count> 1) {
            count -= 1;
        } else {
            count = 1;
            $(".subtract").css({
                "color": "#cccccc"
            });
        }
        
        $(".count").val(count);
        $(".allcount").text('(共' + count + '张)');
        var val = (count * whole).toFixed(1)
        $(".whole").text(val);
    });
    $(".choose").find('input').on('input propertychange',function(){
                var result = $(this).val();
                $(".choose").find('.count').html(result);
                console.log($(".count").html);
            });
})