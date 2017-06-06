$(function() {
    'use strict';
    var count = 1;
    var whole = parseFloat($(".whole").text());
    //    var whole=val;
    $(".plus").on("click", function() {
        $(".subtract").css({
            "color": "#06c1ae"
        });
        count += 1;
        $(".count").text(count);
        $(".allcount").text('(共' + count + '张)');
        var val = (count * whole).toFixed(1)
        $(".whole").text(val);
    });
    $(".subtract").on("click", function() {
        if (count > 1) {
            count -= 1;
        } else {
            count = 1;
            $(".subtract").css({
                "color": "#cccccc"
            });
        }
        $(".count").text(count);
        $(".allcount").text('(共' + count + '张)');
        var val = (count * whole).toFixed(1)
        $(".whole").text(val);
    });

})