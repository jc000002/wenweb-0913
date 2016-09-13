$(document).ready(function(){
      $('.bxslider').bxslider({
        auto: true,
        autocontrols: true;
      });

      $('#MenuIcon').click(function(){

        if($('#PrimaryNavigation').hasClass('switch')){
          // 條件正確時執行
          // 顯示
          $('#PrimaryNavigation').slideDown(400);
          $('#PrimaryNavigation').removeClass('switch')
        }else{
          // 條件不政確時執行
          // 隱藏
          $('#PrimaryNavigation').slideUp();
          $('#PrimaryNavigation').addClass('switch');
        }

      });
      // MenuIcon end
      $(window).scroll(function(){
  var window_scroll = $(window).scrollTop();
  // $('p').text(window_scroll);
  if(window_scroll > 200){
      $('#PageTop').fadeIn();
  }else{
      $('#PageTop').fadeOut();
  }
});
// window scroll end

$('#PageTop>a').click(function(){
  $('body,html').animate({
    scrollTop:0,
  },1000);
});
// PageTop end
$('#NewsBtn').click(function(){
  $('body').animate({
    scrollTop: $('#News').offset().top
  },1000);
});
$('#ProductBtn').click(function(){
  $('body').animate({
    scrollTop: $('#Product').offset().top
  },1000);
});

    });
    // document end
