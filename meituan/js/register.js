$(function() {
    'use strict';
    var i = 60;
    var set;
    var status = true;
    $(".getcode").on("click", function() {
        if (status) {
            status = false;
            $(".btn").text('短信已发送');
            time();
        }
    })
    $(".btn").on("click", function() {
        $(".shade").show();
        var val = ''
        for (var i = 0; i < 4; i++) {
            val += Math.round(Math.random() * 9)
        }
        $(".yard-val").text(val);
        if (status) {
            status = false;
            $(".btn").text('短信已发送');
            time();
        }
    });

    function time() {
        set = setInterval(function() {
            if (i > 0) {
                i--;
                $(".btn").text('重新发送' + '(' + i + ')');
            } else {
                i = 60;
                $(".btn").text("发送验证码");
                clearInterval(set);
                status = true;
            }
        }, 1000)
    }
    var sta = 1;
    var zz = /^1[34578]\d{9}$/; //手机正则
    var nums = null;
    var vnums = '';
    var pwd = '';
    $(".checkbox").on("click", function() {
        nums = $(".inp").val();
        if ($(".checkbox").attr("checked", 'true')) {
            sta = 1;
            if (nums != '' && zz.test(nums)) {
                $(".getcode").removeAttr("disabled", 'true');
            }
                $(".checkbox").removeAttr("checked",'true');
        } else {
            sta = 0
            $(".getcode").attr("disabled", 'true');
            $(".checkbox").attr("checked",'true')
        }
    });
    $(".inp").on("input", function() {
        vnums = '';
        nums = $(".inp").val();
        if (nums != '' && zz.test(nums)) {
            if ($(".checkbox").attr("checked", 'true')) {
                $(".getcode").removeAttr("disabled", 'true');
            }
        } else {
            $(".getcode").attr("disabled", 'true');
        }
    });
    $(".getcode").on("click", function() {
        $(".code").show();
        $(".entry").hide();
        $(".step-font").eq(1).addClass("h");
        $(".step-font").eq(0).removeClass("h");
        $(".step-font").eq(2).removeClass("h");
        $(".shade").show();
        var val = ''
        for (var i = 0; i < 4; i++) {
            val += Math.round(Math.random() * 9)
        }
        $(".yard-val").text(val);
    });
    $(".shade-closed").on("click", function() {
        $(".shade").hide();
    });
    $(".inpp").on("input", function() {
        var val1 = $(".yard-val").text();
        var val2 = $(".inpp").val();
        if (val2 == '') {
            $(".submitcode").attr("disabled", 'true')
        } else {
            $(".submitcode").removeAttr("disabled", 'true')
        }
    });
    $(".submitcode").on("click", function() {
        var val1 = $(".yard-val").text();
        var val2 = $(".inpp").val();
        if (val1 == val2) {
            $(".passwordw").show();
            $(".code").hide();
            $(".step-font").eq(2).addClass("h");
            $(".step-font").eq(0).removeClass("h");
            $(".step-font").eq(1).removeClass("h");
        } else {
            $(".reminder").show();
        }
    });
    $(".bottom").on("click", function() {
        $(".reminder").hide();
    })
    $(".header .icon").on("click", function() {
        $(".entry").show();
        $(".content").eq(1).hide();
        $(".content").eq(2).hide();
        $(".step-font").eq(0).addClass("h");
        $(".step-font").eq(2).removeClass("h");
        $(".step-font").eq(1).removeClass("h");
    });
    $(".register").on("click", function() {
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
        var val1 = $(".password").eq(0).val();
        var val2 = $(".password").eq(1).val();
        if (val1 == '' || val2 == '') {
            $(".reminder").show();
            $(".center").html("不能为空");
            $(".password").val("")
        } else if (val1.length < 6) {
            $(".reminder").show();
            $(".center").html("字符长度不得小于6");
            $(".password").val("")
        } else if (!reg.test(val1)) {
            $(".reminder").show();
            $(".center").html("字符不能全为字母或数字");
            $(".password").val("")
        } else if (val1 != val2) {
            $(".reminder").show();
            $(".center").html("两次密码不一致请重新输入");
            $(".password").val("")
        } else {
            alert("success!");
        }
    })
})