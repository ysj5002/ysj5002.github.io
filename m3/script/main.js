
$(document).ready(function(){
var ht = parseInt($(window).height());
$(window).scroll(function(){
    var sc = parseInt($(window).scrollTop());
if(sc>=ht){
 $(".gnb_area").css("right","-120%");
}else{
 $(".gnb_area").css("right","0%");
}
});
});
$(document).ready(function(){
var sw = true;
$(".micon,.micon2").click(function(){
    if(sw){
        $(".sub_wrap").stop().animate({"right":"0%"},300);
        $(".gnb_area").stop().animate({"right":"85%"},300);
    }else{
        $(".sub_wrap").stop().animate({"right":"-85%"},300);
        $(".gnb_area").stop().animate({"right":"0%"},300);
    };
    sw=!sw;
    });
});
$(document).ready(function(){
    var wd = parseInt($("#page1").width());
    $(".btn_frame li").click(function(){
        var idx = $(this).index();
        $(".slide").not(":animated").animate({"margin-left" : wd*idx*-1+"px"},300);
        $(".btn_frame li").removeClass("on");
        $(this).addClass("on");
    });
});
$(document).ready(function(){
    setInterval(function(){ani();},2900);
    function ani(){
    $(".slide").animate({"margin-left":"-100%"},800,function(){
        $(".slide li").eq(0).appendTo($(".slide"));
        $(".slide").css("margin-left","0px");
    });
};
});
// $(document).ready(function(){
//     $(".pop_btn1").click(function(){
//         $(".pop li").css({"margin-right":"20%"});
//     })
// });
$(document).ready(function(){
    var wd = parseInt($(".pop_wrap").width());
    $(".pop_btnFrame li").click(function(){
        var idx = $(this).index();
        $(".pop").not(":animated").animate({"margin-left" : wd*idx*-1+"px"},300);
    });
});