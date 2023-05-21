

$(document).ready(function() {
    $('<div id="daisy-background"></div>').appendTo('body').daisyjs({
      dotColor: '#ff0000',
      lineColor: '#ff0000'
    });
  
    $('form').submit(function(event) {
      event.preventDefault(); 
      
      
      var height = parseFloat($('#height').val());
      var weight = parseFloat($('#weight').val());
      
      
      var bmi = weight / Math.pow(height / 100, 2);
      
      
      var category;
      if (bmi < 18.5) {
        category = 'Underweight';
      } else if (bmi < 24.9) {
        category = 'Normal weight';
      } else if (bmi < 29.9) {
        category = 'Overweight';
      } else {
        category = 'Obese';
      }
      
      
      $('#result').html('Your BMI is: ' + bmi.toFixed(2) + ' (' + category + ')');
    });
  
    $(function() {
      $('input[type="number"]').niceNumber();
    });
  });
