$(function() {
    'use strict';
    //密码登录与账号快捷登录切换
    $(".entry").on("click", function() {
        var i = $(this).index();
        $(".entry").eq(i).addClass("h").siblings().removeClass("h");
        $(".content").eq(i).addClass("ch").siblings(".content").removeClass("ch");
    });
    $(".eye").on("click", function() {
        //        var val=$(".openpwd").val();
        $(this).parent().removeClass('clh');
        $(this).parent().siblings(".closed").addClass("clh");
    });
    //error show or hide
    $("input").on("input", function() {
        $(this).parent().siblings(".error").show();
    });
    $("body").on("change", "input",function() {
        $(this).parent().siblings(".error").hide();
    });
    $("body").on("click", ".error", function() {
        $(this).siblings().children("input").val("");
        $(this).hide();
    });
    $("body").on("click", "input", function() {
        if ($(this).val() == "") {
            $(this).parent().siblings(".error").hide();
        } else {
            $(this).parent().siblings(".error").show();
        }
    });
    var zz = /^1[34578]\d{9}$/; //手机正则
    var nums = null;
    var vnums = '';
    var pwd = '';
    $(".content-show input").on("input", function() {
        vnums = '';
        nums = $(".phone").val();
        pwd = $(".hidepwd").val()
        if (nums == '' || !zz.test(nums) || pwd == '') {
            $(".pwd-button").attr("disabled", 'true');
             $(".pwd-button").css({"background":"#83e1d7"});
        } else {
            $(".pwd-button").removeAttr("disabled", 'true');
             $(".pwd-button").css({"background":"#06c1ae"});
        }
    });
    $(".moblie").on("input", function() {
            vnums = '';
            nums = $(".moblie").val();
            if (nums == '' || !zz.test(nums)) {
                $(".getcode").attr("disabled", 'true');
                $(".getcode").css({"background":"#83e1d7"});
            } else {
                $(".getcode").removeAttr("disabled", 'true');
                $(".getcode").css({"background":"#06c1ae"});
            }
        })
        //手机号
        //密码可见不可见
    $(".eye").eq(0).show();
    $(".eye").on("click", function() {
        var inp = $(this).siblings(".phone").children("input");
        var val = inp.val();
        if ($(".eye").index($(this)) == 0) {
            $(this).hide();
            $(this).siblings(".eye").show();
            $(".eye").siblings(".phone").html("<input value='" + val + "' type='text' placeholder='请输入密码'>")
        } else {
            $(this).hide();
            $(this).siblings(".eye").show();
            $(".eye").siblings(".phone").html("<input value='" + val + "' type='password' placeholder='请输入密码'>")

        }
    });
    //其他登录方式
    $(".down").on("click", function() {
        $(".up").fadeIn();
        $(".down").fadeOut();
        $(".threeway").slideDown();
    });
    $(".up").on("click", function() {
        $(".down").fadeIn();
        $(".up").fadeOut();
        $(".threeway").slideUp();
    });
    //获取短信验证,验证码输入，获取
    var i = 60;
    var set;
    var status = true;
    var val = '';
    $(".getcode").click(function() {
        if (status) {
            $(".getcode").text('短信已发送');
            time();
            status = false;
            $(".shade").show();
            for (var i = 0; i < 4; i++) {
                val += Math.round(Math.random() * 9)
            }
            $(".yard-val").text(val);
        }
    });
    $(".shade-closed").on("click", function() {
        $(".shade").hide();
    });
    $(".content-hide input").on("input", function() {
      var  val1=$(".showpwd").val();
      var  val2=$(".yard-val").text();
      var val=$(".moblie").val();
        if(val==''||val1==""||!zz.test(val)){
            $(".entry-code").attr("disabled", 'true');
            $(".entry-code").css({"background":"#83e1d7"});
        }else{
           $(".entry-code").removeAttr("disabled", 'true');
             $(".entry-code").css({"background":"#06c1ae"});
        }
    });
    $(".entry-code").on("click",function(){
         var  val1=$(".showpwd").val();
      var  val2=$(".yard-val").text();
        if(val1!==val2){
            alert("验证码错误")
        }else{
            alert("登录成功")
        }
    })
//    val1!==val2
    function time() {
        set = setInterval(function() {
            if (i > 0) {
                i--;
                $(".getcode").text(i + 's后重试');
            } else {
                i = 60;
                $(".getcode").text("点击重新发送");
                clearInterval(set);
                status = true;
            }
        }, 1000)
    }
})