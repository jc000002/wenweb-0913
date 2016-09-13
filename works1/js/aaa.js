// JavaScript Document
$('.wrapper>ul>li').hover(
function(){
  
$('.wrapper>ul>li').stop();  //暫停全部動畫
           $(this).find('.cover').animate({'top':'0px','opacity': 0.7},500);//啟動cover動畫
     $(this).find('h1').animate({'left':'30px'},500);
  //滑入標題
$(this).find('h3').animate({'left':'30px'},500);
  //滑入價格
},function(){
 $('.wrapper>ul>li').stop();  $(this).find('.cover').animate({'top':'-230px','opacity': 0.7},500);
 $(this).find('h1').animate({'left':'-250px'},500);
  $(this).find('h3').animate({'left':'250px'},500);
  //滑出價格
  }
);