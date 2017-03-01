// ==========================          底部小图滚动JS          ===============================
$(function(){
    $(".ash_ft_show_4").mouseover(function(){
        $(".xtgd_jt_l").css('display', 'block');
        $(".xtgd_jt_r").css('display', 'block');
    });
    $(".ash_ft_show_4").mouseout(function(){
        $(".xtgd_jt_l").css('display', 'none');
        $(".xtgd_jt_r").css('display', 'none');
    });
});
function R1() {
    var firstUl=$('.xtgd_div_1').eq(0).clone();
    var lastUl=$('.xtgd_div_1').eq($('.xtgd_div_1').length-1).clone();
    $('.xtgd_show').append(firstUl);
    $('.xtgd_show').prepend(lastUl);
    $('.xtgd').scrollLeft($('.xtgd_div_1 ul').eq(0).width());

    var a=1;
    var flag=true;
    function Run () {
        $('.xtgd').animate({
            scrollLeft:$('.xtgd_div_1').eq(0).width()*a,
        },function  () {
            flag=true;
        });
    }
    $('.dj_l1').click(function  () {
        if (flag) {
            flag=false;
            a--;
            if (a<0) {
                $('.xtgd').scrollLeft($('.xtgd_div_1').eq(0).width()*($('.xtgd_div_1').length-2));
                a=$('.xtgd_div_1').length-3;
            }
            Run();
        }
    });
    $('.dj_r1').click(function  () {
        if (flag) {
            flag=false;
            a++;
            if (a>=$('.xtgd_div_1').length) {
                a=2;
                $('.xtgd').scrollLeft($('.xtgd_div_1').eq(0).width());
            }
            Run();
        }
    });
}
R1();
// =====================================================
$(function(){
    $(".ash_ft_show_42").mouseover(function(){
        $(".xtgd_jt_l2").css('display', 'block');
        $(".xtgd_jt_r2").css('display', 'block');
    });
    $(".ash_ft_show_42").mouseout(function(){
        $(".xtgd_jt_l2").css('display', 'none');
        $(".xtgd_jt_r2").css('display', 'none');
    });
});
function R2() {
    var firstUl=$('.xtgd_div_2').eq(0).clone();
    var lastUl=$('.xtgd_div_2').eq($('.xtgd_div_2').length-1).clone();
    $('.xtgd_show2').append(firstUl);
    $('.xtgd_show2').prepend(lastUl);
    $('.xtgd2').scrollLeft($('.xtgd_div_2 ul').eq(0).width());

    var a=1;
    var flag=true;
    function Run () {
        $('.xtgd2').animate({
            scrollLeft:$('.xtgd_div_2').eq(0).width()*a,
        },function  () {
            flag=true;
        });
    }
    $('.dj_l2').click(function  () {
        if (flag) {
            flag=false;
            a--;
            if (a<0) {
                $('.xtgd2').scrollLeft($('.xtgd_div_2').eq(0).width()*($('.xtgd_div_2').length-2));
                a=$('.xtgd_div_2').length-3;
            }
            Run();
        }
    });
    $('.dj_r2').click(function  () {
        if (flag) {
            flag=false;
            a++;
            if (a>=$('.xtgd_div_2').length) {
                a=2;
                $('.xtgd2').scrollLeft($('.xtgd_div_2').eq(0).width());
            }
            Run();
        }
    });
}
R2();
// =====================================================
$(function(){
    $(".ash_ft_show_43").mouseover(function(){
        $(".xtgd_jt_l3").css('display', 'block');
        $(".xtgd_jt_r3").css('display', 'block');
    });
    $(".ash_ft_show_43").mouseout(function(){
        $(".xtgd_jt_l3").css('display', 'none');
        $(".xtgd_jt_r3").css('display', 'none');
    });
});
function R3() {
    var firstUl=$('.xtgd_div_3').eq(0).clone();
    var lastUl=$('.xtgd_div_3').eq($('.xtgd_div_3').length-1).clone();
    $('.xtgd_show3').append(firstUl);
    $('.xtgd_show3').prepend(lastUl);
    $('.xtgd3').scrollLeft($('.xtgd_div_3 ul').eq(0).width());

    var a=1;
    var flag=true;
    function Run () {
        $('.xtgd3').animate({
            scrollLeft:$('.xtgd_div_3').eq(0).width()*a,
        },function  () {
            flag=true;
        });
    }
    $('.xtgd_jt_l3').click(function  () {
        if (flag) {
            flag=false;
            a--;
            if (a<0) {
                $('.xtgd3').scrollLeft($('.xtgd_div_3').eq(0).width()*($('.xtgd_div_3').length-2));
                a=$('.xtgd_div_3').length-3;
            }
            Run();
        }
    });
    $('.xtgd_jt_r3').click(function  () {
        if (flag) {
            flag=false;
            a++;
            if (a>=$('.xtgd_div_3').length) {
                a=2;
                $('.xtgd3').scrollLeft($('.xtgd_div_3').eq(0).width());
            }
            Run();
        }
    });
}
R3();
// =====================================================
$(function(){
    $(".ash_ft_show_44").mouseover(function(){
        $(".xtgd_jt_l4").css('display', 'block');
        $(".xtgd_jt_r4").css('display', 'block');
    });
    $(".ash_ft_show_44").mouseout(function(){
        $(".xtgd_jt_l4").css('display', 'none');
        $(".xtgd_jt_r4").css('display', 'none');
    });
});
function R4() {
    var firstUl=$('.xtgd_div_4').eq(0).clone();
    var lastUl=$('.xtgd_div_4').eq($('.xtgd_div_4').length-1).clone();
    $('.xtgd_show4').append(firstUl);
    $('.xtgd_show4').prepend(lastUl);
    $('.xtgd4').scrollLeft($('.xtgd_div_4 ul').eq(0).width());

    var a=1;
    var flag=true;
    function Run () {
        $('.xtgd4').animate({
            scrollLeft:$('.xtgd_div_4').eq(0).width()*a,
        },function  () {
            flag=true;
        });
    }
    $('.xtgd_jt_l4').click(function  () {
        if (flag) {
            flag=false;
            a--;
            if (a<0) {
                $('.xtgd4').scrollLeft($('.xtgd_div_4').eq(0).width()*($('.xtgd_div_4').length-2));
                a=$('.xtgd_div_4').length-3;
            }
            Run();
        }
    });
    $('.xtgd_jt_r4').click(function  () {
        if (flag) {
            flag=false;
            a++;
            if (a>=$('.xtgd_div_4').length) {
                a=2;
                $('.xtgd4').scrollLeft($('.xtgd_div_4').eq(0).width());
            }
            Run();
        }
    });
}
R4();
// =====================================================
$(function(){
    $(".ash_ft_show_45").mouseover(function(){
        $(".xtgd_jt_l5").css('display', 'block');
        $(".xtgd_jt_r5").css('display', 'block');
    });
    $(".ash_ft_show_45").mouseout(function(){
        $(".xtgd_jt_l5").css('display', 'none');
        $(".xtgd_jt_r5").css('display', 'none');
    });
});
function R5() {
    var firstUl=$('.xtgd_div_5').eq(0).clone();
    var lastUl=$('.xtgd_div_5').eq($('.xtgd_div_5').length-1).clone();
    $('.xtgd_show5').append(firstUl);
    $('.xtgd_show5').prepend(lastUl);
    $('.xtgd5').scrollLeft($('.xtgd_div_5 ul').eq(0).width());

    var a=1;
    var flag=true;
    function Run () {
        $('.xtgd5').animate({
            scrollLeft:$('.xtgd_div_5').eq(0).width()*a,
        },function  () {
            flag=true;
        });
    }
    $('.xtgd_jt_l5').click(function  () {
        if (flag) {
            flag=false;
            a--;
            if (a<0) {
                $('.xtgd5').scrollLeft($('.xtgd_div_5').eq(0).width()*($('.xtgd_div_5').length-2));
                a=$('.xtgd_div_5').length-3;
            }
            Run();
        }
    });
    $('.xtgd_jt_r5').click(function  () {
        if (flag) {
            flag=false;
            a++;
            if (a>=$('.xtgd_div_5').length) {
                a=2;
                $('.xtgd5').scrollLeft($('.xtgd_div_5').eq(0).width());
            }
            Run();
        }
    });
}
R5();
// =====================================================
$(function(){
    $(".ash_ft_show_46").mouseover(function(){
        $(".xtgd_jt_l6").css('display', 'block');
        $(".xtgd_jt_r6").css('display', 'block');
    });
    $(".ash_ft_show_46").mouseout(function(){
        $(".xtgd_jt_l6").css('display', 'none');
        $(".xtgd_jt_r6").css('display', 'none');
    });
});
function R6() {
    var firstUl=$('.xtgd_div_6').eq(0).clone();
    var lastUl=$('.xtgd_div_6').eq($('.xtgd_div_6').length-1).clone();
    $('.xtgd_show6').append(firstUl);
    $('.xtgd_show6').prepend(lastUl);
    $('.xtgd6').scrollLeft($('.xtgd_div_6 ul').eq(0).width());

    var a=1;
    var flag=true;
    function Run () {
        $('.xtgd6').animate({
            scrollLeft:$('.xtgd_div_6').eq(0).width()*a,
        },function  () {
            flag=true;
        });
    }
    $('.xtgd_jt_l6').click(function  () {
        if (flag) {
            flag=false;
            a--;
            if (a<0) {
                $('.xtgd6').scrollLeft($('.xtgd_div_6').eq(0).width()*($('.xtgd_div_6').length-2));
                a=$('.xtgd_div_6').length-3;
            }
            Run();
        }
    });
    $('.xtgd_jt_r6').click(function  () {
        if (flag) {
            flag=false;
            a++;
            if (a>=$('.xtgd_div_6').length) {
                a=2;
                $('.xtgd6').scrollLeft($('.xtgd_div_6').eq(0).width());
            }
            Run();
        }
    });
}
R6();
// =====================================================
$(function(){
    $(".ash_ft_show_47").mouseover(function(){
        $(".xtgd_jt_l7").css('display', 'block');
        $(".xtgd_jt_r7").css('display', 'block');
    });
    $(".ash_ft_show_47").mouseout(function(){
        $(".xtgd_jt_l7").css('display', 'none');
        $(".xtgd_jt_r7").css('display', 'none');
    });
});
function R7() {
    var firstUl=$('.xtgd_div_7').eq(0).clone();
    var lastUl=$('.xtgd_div_7').eq($('.xtgd_div_7').length-1).clone();
    $('.xtgd_show7').append(firstUl);
    $('.xtgd_show7').prepend(lastUl);
    $('.xtgd7').scrollLeft($('.xtgd_div_7 ul').eq(0).width());

    var a=1;
    var flag=true;
    function Run () {
        $('.xtgd7').animate({
            scrollLeft:$('.xtgd_div_7').eq(0).width()*a,
        },function  () {
            flag=true;
        });
    }
    $('.xtgd_jt_l7').click(function  () {
        if (flag) {
            flag=false;
            a--;
            if (a<0) {
                $('.xtgd7').scrollLeft($('.xtgd_div_7').eq(0).width()*($('.xtgd_div_7').length-2));
                a=$('.xtgd_div_7').length-3;
            }
            Run();
        }
    });
    $('.xtgd_jt_r7').click(function  () {
        if (flag) {
            flag=false;
            a++;
            if (a>=$('.xtgd_div_7').length) {
                a=2;
                $('.xtgd7').scrollLeft($('.xtgd_div_7').eq(0).width());
            }
            Run();
        }
    });
}
R7();
// =====================================================
$(function(){
    $(".ash_ft_show_48").mouseover(function(){
        $(".xtgd_jt_l8").css('display', 'block');
        $(".xtgd_jt_r8").css('display', 'block');
    });
    $(".ash_ft_show_48").mouseout(function(){
        $(".xtgd_jt_l8").css('display', 'none');
        $(".xtgd_jt_r8").css('display', 'none');
    });
});
function R8() {
    var firstUl=$('.xtgd_div_8').eq(0).clone();
    var lastUl=$('.xtgd_div_8').eq($('.xtgd_div_8').length-1).clone();
    $('.xtgd_show8').append(firstUl);
    $('.xtgd_show8').prepend(lastUl);
    $('.xtgd8').scrollLeft($('.xtgd_div_8 ul').eq(0).width());

    var a=1;
    var flag=true;
    function Run () {
        $('.xtgd8').animate({
            scrollLeft:$('.xtgd_div_8').eq(0).width()*a,
        },function  () {
            flag=true;
        });
    }
    $('.xtgd_jt_l8').click(function  () {
        if (flag) {
            flag=false;
            a--;
            if (a<0) {
                $('.xtgd8').scrollLeft($('.xtgd_div_8').eq(0).width()*($('.xtgd_div_8').length-2));
                a=$('.xtgd_div_8').length-3;
            }
            Run();
        }
    });
    $('.xtgd_jt_r8').click(function  () {
        if (flag) {
            flag=false;
            a++;
            if (a>=$('.xtgd_div_8').length) {
                a=2;
                $('.xtgd8').scrollLeft($('.xtgd_div_8').eq(0).width());
            }
            Run();
        }
    });
}
R8();
// =====================================================
$(function(){
    $(".ash_ft_show_49").mouseover(function(){
        $(".xtgd_jt_l9").css('display', 'block');
        $(".xtgd_jt_r9").css('display', 'block');
    });
    $(".ash_ft_show_49").mouseout(function(){
        $(".xtgd_jt_l9").css('display', 'none');
        $(".xtgd_jt_r9").css('display', 'none');
    });
});
function R9() {
    var firstUl=$('.xtgd_div_9').eq(0).clone();
    var lastUl=$('.xtgd_div_9').eq($('.xtgd_div_9').length-1).clone();
    $('.xtgd_show9').append(firstUl);
    $('.xtgd_show9').prepend(lastUl);
    $('.xtgd9').scrollLeft($('.xtgd_div_9 ul').eq(0).width());

    var a=1;
    var flag=true;
    function Run () {
        $('.xtgd9').animate({
            scrollLeft:$('.xtgd_div_9').eq(0).width()*a,
        },function  () {
            flag=true;
        });
    }
    $('.xtgd_jt_l9').click(function  () {
        if (flag) {
            flag=false;
            a--;
            if (a<0) {
                $('.xtgd9').scrollLeft($('.xtgd_div_9').eq(0).width()*($('.xtgd_div_9').length-2));
                a=$('.xtgd_div_9').length-3;
            }
            Run();
        }
    });
    $('.xtgd_jt_r9').click(function  () {
        if (flag) {
            flag=false;
            a++;
            if (a>=$('.xtgd_div_9').length) {
                a=2;
                $('.xtgd9').scrollLeft($('.xtgd_div_9').eq(0).width());
            }
            Run();
        }
    });
}
R9();
// =====================================================
$(function(){
    $(".ash_ft_show_410").mouseover(function(){
        $(".xtgd_jt_l10").css('display', 'block');
        $(".xtgd_jt_r10").css('display', 'block');
    });
    $(".ash_ft_show_410").mouseout(function(){
        $(".xtgd_jt_l10").css('display', 'none');
        $(".xtgd_jt_r10").css('display', 'none');
    });
});
function R10() {
    var firstUl=$('.xtgd_div_10').eq(0).clone();
    var lastUl=$('.xtgd_div_10').eq($('.xtgd_div_10').length-1).clone();
    $('.xtgd_show10').append(firstUl);
    $('.xtgd_show10').prepend(lastUl);
    $('.xtgd10').scrollLeft($('.xtgd_div_10 ul').eq(0).width());

    var a=1;
    var flag=true;
    function Run () {
        $('.xtgd10').animate({
            scrollLeft:$('.xtgd_div_10').eq(0).width()*a,
        },function  () {
            flag=true;
        });
    }
    $('.xtgd_jt_l10').click(function  () {
        if (flag) {
            flag=false;
            a--;
            if (a<0) {
                $('.xtgd10').scrollLeft($('.xtgd_div_10').eq(0).width()*($('.xtgd_div_10').length-2));
                a=$('.xtgd_div_10').length-3;
            }
            Run();
        }
    });
    $('.xtgd_jt_r10').click(function  () {
        if (flag) {
            flag=false;
            a++;
            if (a>=$('.xtgd_div_10').length) {
                a=2;
                $('.xtgd10').scrollLeft($('.xtgd_div_10').eq(0).width());
            }
            Run();
        }
    });
}
R10();
// =====================================================
$(function(){
    $(".ash_ft_show_411").mouseover(function(){
        $(".xtgd_jt_l11").css('display', 'block');
        $(".xtgd_jt_r11").css('display', 'block');
    });
    $(".ash_ft_show_411").mouseout(function(){
        $(".xtgd_jt_l11").css('display', 'none');
        $(".xtgd_jt_r11").css('display', 'none');
    });
});
function R11() {
    var firstUl=$('.xtgd_div_11').eq(0).clone();
    var lastUl=$('.xtgd_div_11').eq($('.xtgd_div_11').length-1).clone();
    $('.xtgd_show11').append(firstUl);
    $('.xtgd_show11').prepend(lastUl);
    $('.xtgd11').scrollLeft($('.xtgd_div_11 ul').eq(0).width());

    var a=1;
    var flag=true;
    function Run () {
        $('.xtgd11').animate({
            scrollLeft:$('.xtgd_div_11').eq(0).width()*a,
        },function  () {
            flag=true;
        });
    }
    $('.xtgd_jt_l11').click(function  () {
        if (flag) {
            flag=false;
            a--;
            if (a<0) {
                $('.xtgd11').scrollLeft($('.xtgd_div_11').eq(0).width()*($('.xtgd_div_11').length-2));
                a=$('.xtgd_div_11').length-3;
            }
            Run();
        }
    });
    $('.xtgd_jt_r11').click(function  () {
        if (flag) {
            flag=false;
            a++;
            if (a>=$('.xtgd_div_11').length) {
                a=2;
                $('.xtgd11').scrollLeft($('.xtgd_div_11').eq(0).width());
            }
            Run();
        }
    });
}
R11();
// =====================================================
$(function(){
    $(".ash_ft_show_412").mouseover(function(){
        $(".xtgd_jt_l12").css('display', 'block');
        $(".xtgd_jt_r12").css('display', 'block');
    });
    $(".ash_ft_show_412").mouseout(function(){
        $(".xtgd_jt_l12").css('display', 'none');
        $(".xtgd_jt_r12").css('display', 'none');
    });
});
function R12() {
    var firstUl=$('.xtgd_div_12').eq(0).clone();
    var lastUl=$('.xtgd_div_12').eq($('.xtgd_div_12').length-1).clone();
    $('.xtgd_show12').append(firstUl);
    $('.xtgd_show12').prepend(lastUl);
    $('.xtgd12').scrollLeft($('.xtgd_div_12 ul').eq(0).width());

    var a=1;
    var flag=true;
    function Run () {
        $('.xtgd12').animate({
            scrollLeft:$('.xtgd_div_12').eq(0).width()*a,
        },function  () {
            flag=true;
        });
    }
    $('.xtgd_jt_l12').click(function  () {
        if (flag) {
            flag=false;
            a--;
            if (a<0) {
                $('.xtgd12').scrollLeft($('.xtgd_div_12').eq(0).width()*($('.xtgd_div_12').length-2));
                a=$('.xtgd_div_12').length-3;
            }
            Run();
        }
    });
    $('.xtgd_jt_r12').click(function  () {
        if (flag) {
            flag=false;
            a++;
            if (a>=$('.xtgd_div_12').length) {
                a=2;
                $('.xtgd12').scrollLeft($('.xtgd_div_12').eq(0).width());
            }
            Run();
        }
    });
}
R12();
// =====================================================
$(function(){
    $(".ash_ft_show_413").mouseover(function(){
        $(".xtgd_jt_l13").css('display', 'block');
        $(".xtgd_jt_r13").css('display', 'block');
    });
    $(".ash_ft_show_413").mouseout(function(){
        $(".xtgd_jt_l13").css('display', 'none');
        $(".xtgd_jt_r13").css('display', 'none');
    });
});
function R13() {
    var firstUl=$('.xtgd_div_13').eq(0).clone();
    var lastUl=$('.xtgd_div_13').eq($('.xtgd_div_13').length-1).clone();
    $('.xtgd_show13').append(firstUl);
    $('.xtgd_show13').prepend(lastUl);
    $('.xtgd13').scrollLeft($('.xtgd_div_13 ul').eq(0).width());

    var a=1;
    var flag=true;
    function Run () {
        $('.xtgd13').animate({
            scrollLeft:$('.xtgd_div_13').eq(0).width()*a,
        },function  () {
            flag=true;
        });
    }
    $('.xtgd_jt_l13').click(function  () {
        if (flag) {
            flag=false;
            a--;
            if (a<0) {
                $('.xtgd13').scrollLeft($('.xtgd_div_13').eq(0).width()*($('.xtgd_div_13').length-2));
                a=$('.xtgd_div_13').length-3;
            }
            Run();
        }
    });
    $('.xtgd_jt_r13').click(function  () {
        if (flag) {
            flag=false;
            a++;
            if (a>=$('.xtgd_div_13').length) {
                a=2;
                $('.xtgd13').scrollLeft($('.xtgd_div_13').eq(0).width());
            }
            Run();
        }
    });
}
R13();
// =====================================================
$(function(){
    $(".ash_ft_show_414").mouseover(function(){
        $(".xtgd_jt_l14").css('display', 'block');
        $(".xtgd_jt_r14").css('display', 'block');
    });
    $(".ash_ft_show_414").mouseout(function(){
        $(".xtgd_jt_l14").css('display', 'none');
        $(".xtgd_jt_r14").css('display', 'none');
    });
});
function R14() {
    var firstUl=$('.xtgd_div_14').eq(0).clone();
    var lastUl=$('.xtgd_div_14').eq($('.xtgd_div_14').length-1).clone();
    $('.xtgd_show14').append(firstUl);
    $('.xtgd_show14').prepend(lastUl);
    $('.xtgd14').scrollLeft($('.xtgd_div_14 ul').eq(0).width());

    var a=1;
    var flag=true;
    function Run () {
        $('.xtgd14').animate({
            scrollLeft:$('.xtgd_div_14').eq(0).width()*a,
        },function  () {
            flag=true;
        });
    }
    $('.xtgd_jt_l14').click(function  () {
        if (flag) {
            flag=false;
            a--;
            if (a<0) {
                $('.xtgd14').scrollLeft($('.xtgd_div_14').eq(0).width()*($('.xtgd_div_14').length-2));
                a=$('.xtgd_div_14').length-3;
            }
            Run();
        }
    });
    $('.xtgd_jt_r14').click(function  () {
        if (flag) {
            flag=false;
            a++;
            if (a>=$('.xtgd_div_14').length) {
                a=2;
                $('.xtgd14').scrollLeft($('.xtgd_div_14').eq(0).width());
            }
            Run();
        }
    });
}
R14();
// =====================================================
$(function(){
    $(".ash_ft_show_415").mouseover(function(){
        $(".xtgd_jt_l15").css('display', 'block');
        $(".xtgd_jt_r15").css('display', 'block');
    });
    $(".ash_ft_show_415").mouseout(function(){
        $(".xtgd_jt_l15").css('display', 'none');
        $(".xtgd_jt_r15").css('display', 'none');
    });
});
function R15() {
    var firstUl=$('.xtgd_div_15').eq(0).clone();
    var lastUl=$('.xtgd_div_15').eq($('.xtgd_div_15').length-1).clone();
    $('.xtgd_show15').append(firstUl);
    $('.xtgd_show15').prepend(lastUl);
    $('.xtgd15').scrollLeft($('.xtgd_div_15 ul').eq(0).width());

    var a=1;
    var flag=true;
    function Run () {
        $('.xtgd15').animate({
            scrollLeft:$('.xtgd_div_15').eq(0).width()*a,
        },function  () {
            flag=true;
        });
    }
    $('.xtgd_jt_l15').click(function  () {
        if (flag) {
            flag=false;
            a--;
            if (a<0) {
                $('.xtgd15').scrollLeft($('.xtgd_div_15').eq(0).width()*($('.xtgd_div_15').length-2));
                a=$('.xtgd_div_15').length-3;
            }
            Run();
        }
    });
    $('.xtgd_jt_r15').click(function  () {
        if (flag) {
            flag=false;
            a++;
            if (a>=$('.xtgd_div_15').length) {
                a=2;
                $('.xtgd15').scrollLeft($('.xtgd_div_15').eq(0).width());
            }
            Run();
        }
    });
}
R15();
