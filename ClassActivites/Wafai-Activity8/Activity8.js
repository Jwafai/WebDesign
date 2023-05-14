$(document).ready(function() {
  $("#langtxt").autocomplete({
    source: ["Java", "C", "C#", "JavaScript", "Python"]
  });

  $("#bdtxt").datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: "1900:2023",
    dateFormat: "yy-mm-dd"
  });

  $("#submitbtn").click(function(event) {
    event.preventDefault();

    var langInput = $("#langtxt");
    var websiteInput = $("#websitetxt");
    var emailInput = $("#emailtxt");

    // Language field validation
    if (langInput.val() === "") {
      langInput.addClass("invalid");
    } else {
      langInput.removeClass("invalid");
    }

    // Website field validation
    var websitePattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    if (!websitePattern.test(websiteInput.val())) {
      websiteInput.addClass("invalid");
    } else {
      websiteInput.removeClass("invalid");
    }

    // Email field validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.val())) {
      emailInput.addClass("invalid");
    } else {
      emailInput.removeClass("invalid");
    }

    if (langInput.hasClass("invalid") || websiteInput.hasClass("invalid") || emailInput.hasClass("invalid")) {
      return;
    }

    // All validations passed, form is submitted
    alert("Form submitted"); // Update the submission message
  });
});
