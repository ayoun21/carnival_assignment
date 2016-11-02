$('form').on('submit', function(event) {
    var guess = $("#guess").val();
    var age = $("#age").val();
  
  if(age >= guess) {
    $('#end').html("You can go on this ride, Have fun!");
  } else {
    $('#end').html("You cannot go on this ride");
  }
 event.preventDefault();
});