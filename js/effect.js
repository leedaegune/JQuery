$(document).ready(function(){
  $('#show').click(function(){
    $('p').show("slow");
  });
  $('#hide').on('click', function() {
    $('p').hide("fast");
  });
  $('#slidedown').on('click', function(){
    $('p').slideDown(1000);
    alert('아 반갑습니다ㅋ');
  });
  $('#slideup').click(function(){
    // 숫자는 1당 1ms를 의미하고
    // 1000ms = 1s (초)를 의미한다
    $('p').slideUp(500);
  });
  $('#fadein').click(function(){
    $('p').fadeIn(1000);
  });
  $('#fadeout').click(function(){
    $('p').fadeOut(1000);
  });
  $('#toggle').click(function(){
    $('p').toggle("slow");
  });
  $('#slidetoggle').click(function(){
    $('p').slideToggle("fast");
  });
  $('#fadetoggle').click(function(){
    $('p').fadeToggle("slow", "linear");
  });
});
