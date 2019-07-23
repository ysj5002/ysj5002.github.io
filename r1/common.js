$(document).ready(function(){
    var ck1 = true;
  $(".gnb_btn").click(function(){
      if(ck1){
          $(".collap").addClass("on");
          $(".gnb_btn").addClass("on");
          $(".logo").addClass("on");
          $(".gnb").addClass("on");
      }else{
          $(".collap").removeClass("on");
          $(".gnb_btn").removeClass("on");
          $(".logo").removeClass("on");
          $(".gnb").removeClass("on");
      }
      ck1 = !ck1;
  });
});