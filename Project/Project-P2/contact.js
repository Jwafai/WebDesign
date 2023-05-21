$(document).ready(function() {
    $("#contact-form").validate({
      rules: {
        name: {
          minlength: 2
        },
        email: {
          email: true
        },
        message: {
          minlength: 10
        },
      },
      messages: {
        name: {
          required: "Please enter your name",
          minlength: "Name must be at least 2 characters"
        },
        email: {
          required: "Please enter a valid email address"
        },
        message: {
          required: "Please enter a message",
          minlength: "Message must be at least 10 characters"
        },
      },
      submitHandler: function(form) {


         event.preventDefault();
            $("#dialog-box").dialog({
                modal: true,  
                buttons: {
                    Ok: function() {
                        $(this).dialog("close");  // Close the dialog box
                    }
                } ,
                show:{
                  effect : "fade",
                  duration : 1000 
                },
                hide:
                {
                  effect : "blind",
                  duration : 500
                }
            });
      
      }
    });
  });