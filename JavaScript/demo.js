// ==========================          城市切换JS          ===============================
var top_l_li = document.getElementById('top_l_li');
var a = document.getElementById('a');
var csqh = document.getElementById('csqh');
top_l_li.onmouseover = function() {
    top_l_li.style.background='#fff';
    csqh.style.display='block';
};
top_l_li.onmouseout = function() {
    top_l_li.style.background='#E3E4E5';
    csqh.style.display='none';

};
csqh.onclick=function (ev) {
    var e=ev||window.event;
    var target=e.target||e.srcElment;

    if (target.nodeName=='DIV'||target.nodeName=='A') {
        a.innerHTML=target.innerHTML;
        csqh.style.display='none';
    }
};
// ==========================          我的京东JS          ===============================
var top_r_li3 = document.getElementById('top_r_li3');
var myjd = document.getElementById('myjd');
top_r_li3.onmouseover = function() {
    top_r_li3.style.background='#fff';
    myjd .style.display='block';
};
top_r_li3.onmouseout = function() {
    top_r_li3.style.background='#E3E4E5';
    myjd.style.display='none';
};
// ==========================          我的京东JS          ===============================
//
var top_r_li4 = document.getElementById('top_r_li4');
var kh = document.getElementById('kh');
top_r_li4.onmouseover = function() {
    top_r_li4.style.background='#fff';
    kh .style.display='block';
};
top_r_li4.onmouseout = function() {
    top_r_li4.style.background='#E3E4E5';
    kh.style.display='none';
};
// ==========================          网站导航JS          ===============================
var top_r_li5 = document.getElementById('top_r_li5');
var top_nav = document.getElementById('top_nav');
top_r_li5.onmouseover = function() {
    top_r_li5.style.background='#fff';
    top_nav .style.display='block';
};
top_r_li5.onmouseout = function() {
    top_r_li5.style.background='#E3E4E5';
    top_nav.style.display='none';
};
// ==========================          购物车JS          ===============================
//
var head_top_gwc = document.getElementById('head_top_gwc');
var gwc = document.getElementById('gwc');
head_top_gwc.onmouseover = function() {
    gwc .style.display='block';
};
head_top_gwc.onmouseout = function() {
    gwc.style.display='none';
};
//
//
//
//
//
//
//
//
// ==========================          logo左JS          ===============================

$('.logo_l_li').mouseover(function  () {
    var i=$('.logo_l_li').index(this);
    // alert('111');
    console.log(i);
    $(this).addClass('logo_l_li_show').siblings().removeClass('logo_l_li_show');
    // console.log($('.logo_l_li:eq(i) div:first').html());
    console.log($('.item').length);
    $('.item').removeClass('logo_l_list_select');
    $('.item').eq(i).addClass('logo_l_list_select');
}
);
$('.logo_l_li').mouseout(function(){
    $('.item').removeClass('logo_l_list_select');
    $('.logo_l_li').removeClass('logo_l_li_show');
});

//
//
//
// ==========================         大图部分          ===============================
var flag = true;
$(function  () {
    var time=null;
    var a=0;
    function autoMove () {
        time=setInterval(function  () {
            a++;
            if (a>=$('.con img').length) {
                a=0;
            }
            move();
        },3000);
    }
    autoMove();

    function move () {
        $('.con li').eq(a).fadeIn().siblings().hide();
        $('.con li').eq(a).addClass('show').siblings().removeClass('show');
        $('.nav li').eq(a).addClass('active').siblings().removeClass('active');
    }



    $('.left').click(function  () {
        if(flag){
            clearInterval(time);
            flag=false;
            a--;
            if (a<0) {
                a=$('.con img').length-1;
            }
            move ();
            autoMove();
        }
    });
    $('.right').click(function  () {
        clearInterval(time);
        a++;
        if (a>=$('.con img').length) {
            a=0;
        }
        move ();
        autoMove();
    });

    $('.nav li').click(function  () {
        clearInterval(time);
        a=$('.nav li').index(this);
        move ();
        autoMove();
    });
});
//
//
//
//
// ==========================          logo右上JS          ===============================
$('.logo_r_center_item1').mouseover(function(){
    $('.cx').css('display', 'block');
    $('.gg').css('display', 'none');
    $('.logo_r_center_nav_div').stop().animate({
        left:'0px',
    },300);
});
$('.logo_r_center_item2').mouseover(function(){
    $('.cx').css('display', 'none');
    $('.gg').css('display', 'block');
    $('.logo_r_center_nav_div').stop().animate({
        left:'53px',
    },300);
});


// ==========================          京东无线JS          ===============================
$('.jdwx').mouseover(function () {
    $('.jdwx_demo').css('display', 'block');
});
$('.jdwx').mouseout(function () {
    $('.jdwx_demo').css('display', 'none');
});
//
//
//
// ==========================          倒计时JS          ===============================
var hour1 = document.getElementById('hour');
var min1 = document.getElementById('min');
var second1 = document.getElementById('second');
var now1=new Date('2016/12/21,00:00:00');
var time2=now1.getTime();

setInterval(function  () {
    var now=new Date();
    var time1=now.getTime();
    var hour=23-now.getHours();
    var min=59-now.getMinutes();
    var second=59-now.getSeconds();
    var mil=1000-now.getMilliseconds();

    if(second<10){
        second='0'+second;
    }
    if(min<10){
        min='0'+min;
    }
    if(hour<10){
        hour='0'+hour;
    }
    hour1.innerHTML=hour;
    min1.innerHTML=min;
    second1.innerHTML=second;
},1);

// ==========================          排行榜JS          ===============================
$('.tab_a1').mouseover(function() {
    var i=$('.tab_a1').index(this);
    $('.tab_a1').eq(i).addClass('tab_aa');

        console.log(i);
    $('.phb_tab_unline').stop().animate({
        left:i*78+"px",
    },300);
    $('.phb_tab_div').eq(i).addClass('phb_item').siblings().removeClass('phb_item');
});

$('.tab_a1').mouseout(function() {
    var i=$('.tab_a1').index(this);
    $('.tab_a1').eq(i).removeClass('tab_aa');
});


// ==========================          Tool  JS          ===============================
$('.tool1').mouseover(function() {
    $('.JD_vip').stop().animate({
        left:'-60px',
    }, 500);
    $('.tool_d').css('display', 'none');
    $('.JD_vip').css('background', '#c81623');
    $('.tool1').css('background', '#c81623' );
});
$('.tool1').mouseout(function() {
    $('.JD_vip').stop().animate({
        left:'35px'
    }, 300);
    $('.tool_d').css('display', 'block');
    $('.JD_vip').css('background', '#7a6e6e');
    $('.tool1').css('background', '#7a6e6e');
});


$('.tool2').mouseover(function() {
    $('.tool_gwc').stop().animate({
        left:'-60px'
    }, 500);
    $('.tool_gwc').css('background', '#c81623');
    $('.tool2').css('background', '#c81623');
});
$('.tool2').mouseout(function() {
    $('.tool_gwc').stop().animate({
        left:'35px'
    }, 300);
    $('.tool_gwc').css('background', '#7a6e6e');
    $('.tool2').css('background', '#7a6e6e');
});
//
// ==========================          楼层  JS          ===============================
$(window).scroll(function  () {
    var winH=$(window).height()/2;
    var offsetT=$('.xpz').offset().top;
    var scrT=$('body').scrollTop();
    if (offsetT<=(winH+scrT)) {
        $('.floor_nav').css('display','block');
    }else{
        $('.floor_nav').css('display','none');
    }


    $('.floor_nav_list li').each(function (i){
        if ($('.wrap_item').eq(i).offset().top<=(winH+scrT)) {
            $('.floor_nav_list li').eq(i).css({'background':' #d70b1c'}).siblings().css({'background':' #918888'});
        }
    });
});


$('.floor_nav_list li').click(function (){
    var index=$('.floor_nav_list li').index(this);
    // $('.floor_nav_list li').eq(index).css({'background':' #d70b1c'}).siblings().css({'background':' #918888'});
    $('body').animate({
        scrollTop:$('.wrap_item').eq(index).offset().top-50,
    },500);
});

$('.goto_item_top a').click(function (){
    $('body').animate({
        scrollTop:0,
    });
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
