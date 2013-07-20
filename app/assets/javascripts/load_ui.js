var loadUI = function(){

  $('#top').on('click', '.volume-icon, [id^="js-"]', function(e){

    $('#top').animate({
      height: '180px',
    }, function(){
      $('.volume, #top form, .o-auth').removeClass('no-display');
    });
  });

  $('#top').on('mouseleave', function(e){

    if ( $(this).height() > 22 ) {
      $('.volume, #top form, .o-auth').addClass('no-display');
      $('#top').animate({
        height: '2em',
      });
    }
  });

  var __nativeST__ = window.setTimeout;

  window.setTimeout = function (vCallback, nDelay, argumentToPass1) {
    var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeST__(vCallback instanceof Function ? function () {
      vCallback.apply(oThis, aArgs);
    } : vCallback, nDelay);
  };

}