var loadUI = function(){

  $('#top').on('click', '.volume-wrapper', function(e){
    //e;
    $('#top').animate({
      height: '180px',
    }, function(){
      $('.volume').removeClass('no-display');
    });
  });

  $('#top').on('mouseleave', function(e){
    //e;
    if ( $(this).height() > 22 ) {
      $('.volume').addClass('no-display');
      $('#top').animate({
        height: '2em',
      });
    }
  });

  $('body').on('drop', '.dropzone', function(e){
    console.log('yo');
  });

  var __nativeST__ = window.setTimeout;

  window.setTimeout = function (vCallback, nDelay, argumentToPass1) {
    var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeST__(vCallback instanceof Function ? function () {
      vCallback.apply(oThis, aArgs);
    } : vCallback, nDelay);
  };

}