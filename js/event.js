$(document).ready(function(){
  // Mouse 이벤트
  $('input#content').focus(function(){
    console.log('focusing to #content');
  });
  $('input#content').blur(function(){
    console.log('blur to #content');
  });
  $('select').change(function(){
    console.log('select value change');
  });

  // keyboard event
  $('input#content').keydown(function(){
    console.log('keydown');
  });
  $('input#content').keyup(function(){
    console.log('keyup');
  });

  // Mouse event
  $('input#act').click(function(){
    console.log('act button click');
  });
  $('input#act').hover(function(){
    console.log('act button mouse over');
  });
  $('input#toggle').click(function(){
    $('p.target').toggle(1000, function(){
      console.log('toggle it');
    });
  });
  //.slidetoggle()
  //.fadetoggle()


});
