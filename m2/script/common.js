$(document).ready(function(){
    $(".lst_btn").click(function(){
        $(".gnb").css("left","0%");
    });
    $(".gnb .close").click(function(){
        $(".gnb").css("left","-110%");
    });
    $(".hd .sns").click(function(){
        $(".sns_box").fadeIn(500);
    });
    $(".sns_box .close").click(function(){
        $(".sns_box").fadeOut(500);
    });
    $(".hd .log").click(function(){
        $(".log_box").css("top","0%");
    });
    $(".btn_fr .reset").click(function(){
        $(".log_box").css("top","-110%");
    });
    $(".hd .ev").click(function(){
        $(".event_box").fadeIn(500);
    });
    $(".event_box .close").click(function(){
        $(".event_box").hide();
    });
});

var vdo = document.getElementById("vdo1"); //#vdo1
var btn = document.getElementById("play_btn"); //#play_btn
btn.addEventListener("click",function(){
    if(vdo.paused){
        vdo.play();
        btn.style.opacity = 0.1;
    } else{
        vdo.pause();
        btn.style.opacity = 0.7;
    }
});