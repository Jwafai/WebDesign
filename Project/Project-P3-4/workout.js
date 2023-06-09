$(document).ready(function() {
    function fetchSpeakerData(jsonfile) {
      $.getJSON("json_files/" + jsonfile + ".json", function(data) {
        $("main").fadeOut(400, function() { // Fade out the main element
          $(this).empty();
  
          var title = $("<h1>").text(data.levels[0].title);
          var description = $("<p>").text(data.levels[0].description);
          var ul = $("<ul>");
  
          data.levels[0].exercises.forEach(function(exercise) {
            var li = $("<li>").text(exercise.number + "-" + exercise.description);
            ul.append(li);
          });
  
          $(this).append(title, ul, description);
          $(this).fadeIn(); // Fade in the main element
        });
      });
    }
  
    $("#nav_list a").click(function(a) {
      a.preventDefault();
      var title = $(this).attr("title");
      fetchSpeakerData(title);
    });
  });
  