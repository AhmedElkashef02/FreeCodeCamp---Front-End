var ans;
var black_clicked;
$(document).ready(function() {
  
  $(".add").click(function() { //add the value to the screen
    $("#screen").append(this.value);
    $("#screen").css("border-color", "#0077b3");
  });
  
  $(".C").click(function() { //clear the last element from screen
    $("#screen").text(function() {
      var value = $("#screen").text();
      return value.slice(0, -1);
    });
  });
  
  $(".AC").click(function() { //clear everything
    $("#screen").text("");
    $("#screen").css("border-color", "#80bfff");
    ans = 0;
  });
  
  //control the order of operations input, no consecutve signs, no starting sign.
  $(".black").attr("disabled", true);
  
  $(".add").click(function() {
    $(".black").attr("disabled", false);
  });
  
  $(".black").click(function() {
    $(".black").attr("disabled", true);
    $(".C").click(function() {
      $(".black").attr("disabled", false);
    });
  });
  
  //control the answer display
  $(".equal").click(function() {
    black_clicked = false;
    ans = eval( $("#screen").text() );
    ans = Math.floor(ans * 100) / 100;
    $("#screen").text(ans);
    
    console.log(ans);
    console.log(typeof(ans));
    
    if ( ans == "Infinity" || isNaN(ans) ) {
      $("#screen").text("Stop it, you..");
    }
    $('.black').click(function(){ //if black was clicked
      black_clicked = true;
      $(".num").unbind("click", onetime);
    });
    
    var onetime = function() {
      $("#screen").text(this.value);
      $(".num").unbind("click", onetime);
    };
    
    if ( black_clicked === false) { //if a number was clicked
      $(".num").bind("click", onetime);
    }
  });
  
});
