
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
    

    const flickrApiKey = '6ff8ee12f162d470864848ccbb196bf8';
    const flickrApiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApiKey}&tags=workout&per_page=1&format=json&nojsoncallback=1`;
  
    $.getJSON(flickrApiUrl, function(data) {
      if (data && data.photos && data.photos.photo && data.photos.photo.length > 0) {
        const photo = data.photos.photo[0];
        const photoUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
  
        
        $('.aboutimg').attr('src', photoUrl);
      }
    });
  });