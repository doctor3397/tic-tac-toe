function isEven(n) {
   return n % 2 == 0;
}

function checkWin(c) {
  if ($($('.one')[0]).children().hasClass(c) &&
      $($('.one')[1]).children().hasClass(c) &&
      $($('.one')[2]).children().hasClass(c)){
    window.alert(c+' won!');
  }

  if ($($('.two')[0]).children().hasClass(c) &&
      $($('.two')[1]).children().hasClass(c) &&
      $($('.two')[2]).children().hasClass(c)){
    window.alert(c+' won!');
  }

  if ($($('.three')[0]).children().hasClass(c) &&
      $($('.three')[1]).children().hasClass(c) &&
      $($('.three')[2]).children().hasClass(c)){
    window.alert(c+' won!');
  }

  if ($($('.a')[0]).children().hasClass(c) &&
      $($('.a')[1]).children().hasClass(c) &&
      $($('.a')[2]).children().hasClass(c)){
    window.alert(c+' won!');
  }

  if ($($('.b')[0]).children().hasClass(c) &&
      $($('.b')[1]).children().hasClass(c) &&
      $($('.b')[2]).children().hasClass(c)){
    window.alert(c+' won!');
  }

  if ($($('.b')[0]).children().hasClass(c) &&
      $($('.b')[1]).children().hasClass(c) &&
      $($('.b')[2]).children().hasClass(c)){
    window.alert(c+' won!');
  }

  if ($($('.one')[0]).children().hasClass(c) &&
      $($('.two')[1]).children().hasClass(c) &&
      $($('.three')[2]).children().hasClass(c)){
    window.alert(c+' won!');
  }

  if ($($('.one')[2]).children().hasClass(c) &&
      $($('.two')[1]).children().hasClass(c) &&
      $($('.three')[0]).children().hasClass(c)){
    window.alert(c+' won!');
  }
}


$(document).ready(function() {

  var count = 1;

  $('.one.a').click(function(){
    if (isEven(count)){
      $('<div class="circle"></div>').html(count++).appendTo('.one.a');
    } else {
      $('<div class="cross"></div>').html(count++).appendTo('.one.a');
    }
    checkWin('cross');
    checkWin('circle');
  })

  $('.one.b').click(function(){
    if (isEven(count)){
      $('<div class="circle"></div>').html(count++).appendTo('.one.b');
    } else {
      $('<div class="cross"></div>').html(count++).appendTo('.one.b');
    }
    checkWin('cross');
    checkWin('circle');
  })

  $('.one.c').click(function(){
    if (isEven(count)){
      $('<div class="circle"></div>').html(count++).appendTo('.one.c');
    } else {
      $('<div class="cross"></div>').html(count++).appendTo('.one.c');
    }
    checkWin('cross');
    checkWin('circle');
  })


  $('.two.a').click(function(){
    if (isEven(count)){
      $('<div class="circle"></div>').html(count++).appendTo('.two.a');
    } else {
      $('<div class="cross"></div>').html(count++).appendTo('.two.a');
    }
    checkWin('cross');
    checkWin('circle');
  })

  $('.two.b').click(function(){
    if (isEven(count)){
      $('<div class="circle"></div>').html(count++).appendTo('.two.b');
    } else {
      $('<div class="cross"></div>').html(count++).appendTo('.two.b');
    }
    checkWin('cross');
    checkWin('circle');
  })

  $('.two.c').click(function(){
    if (isEven(count)){
      $('<div class="circle"></div>').html(count++).appendTo('.two.c');
    } else {
      $('<div class="cross"></div>').html(count++).appendTo('.two.c');
    }
    checkWin('cross');
    checkWin('circle');
  })

  $('.three.a').click(function(){
    if (isEven(count)){
      $('<div class="circle"></div>').html(count++).appendTo('.three.a');
    } else {
      $('<div class="cross"></div>').html(count++).appendTo('.three.a');
    }
    checkWin('cross');
    checkWin('circle');
  })

  $('.three.b').click(function(){
    if (isEven(count)){
      $('<div class="circle"></div>').html(count++).appendTo('.three.b');
    } else {
      $('<div class="cross"></div>').html(count++).appendTo('.three.b');
    }
    checkWin('cross');
    checkWin('circle');
  })

  $('.three.c').click(function(){
    if (isEven(count)){
      $('<div class="circle"></div>').html(count++).appendTo('.three.c');
    } else {
      $('<div class="cross"></div>').html(count++).appendTo('.three.c');
    }
    checkWin('cross');
    checkWin('circle');
  })

});
