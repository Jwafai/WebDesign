
$(document).ready(function() {
var spinnerOptions = {
    lines: 13,
    length: 28,
    width: 14,
    radius: 42,
    scale: 0.5,
    corners: 1,
    color: 'red', // Change the color to red
    fadeColor: 'transparent',
    speed: 1.5,
    rotate: 0,
    animation: 'spinner-line-fade-quick',
    direction: 1,
    zIndex: 2e9,
    className: 'spinner',
    top: '50%',
    left: '50%',
    shadow: '0 0 1px transparent',
    position: 'absolute'
  };
  
  var target = document.getElementById('spinner');
  var spinner = new Spinner(spinnerOptions).spin(target);

  setTimeout(function() {
    $('#spinner').fadeOut('slow', function() {
      spinner.stop();
      $('#spinner').hide();
      $('#content').fadeIn('slow');
    });
  }, 3000);
  
});