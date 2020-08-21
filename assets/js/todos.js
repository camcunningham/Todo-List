// Check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete the todo from the list
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// Creating todos
$("input[type='text']").keypress(function(event) {
  // If the user hit enter
  if(event.which === 13) {
    // Get the value of the input
    let todoText = $(this).val()
    // Set text box input to zero
    $(this).val("");
    // Create a new li and add it to the ul
    $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>")
  }
});

$("i").first().on("click", function() {
  $("input[type='text']").fadeToggle();
});
