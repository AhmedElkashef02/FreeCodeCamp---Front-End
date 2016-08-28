window.Interval;
window.clicked;
$(document).ready(function() {
  //view 25:00 on screen
  var miliseconds = 1500000;
  Date(miliseconds);
  var date_on_screen = new Date(miliseconds);
  var minutes = date_on_screen.getMinutes();
  var seconds = date_on_screen.getSeconds();
  seconds = seconds.toString();
  if (seconds.length < 2) {
    seconds = "0" + seconds;
  } 
  $("#stopwatch").text(minutes + ":" + seconds);
  
  //------------------------------------------
  clicked = true;
  $("#stopwatch").click(function() { //toggle between working and stopping the clock
    if (clicked) {
      $("#startandstop").text("Click To Stop");
      clicked = false;
      Interval = setInterval(change, 1000); //sets the interval to 25 minutes. then changes to break.
      function change() {
        if ( miliseconds === 0 ) {
          $("#stopwatch").text("Timer's Off");
          return;
        }
        miliseconds = miliseconds-1000;
        Date(miliseconds);
        var date = new Date(miliseconds);

        var minutes = date.getMinutes(); //gets minutes, tostring, modifiyes it to be like 09
        minutes = minutes.toString();
        if (minutes.length < 2) {
          minutes = "0" + minutes;
        }

        var seconds = date.getSeconds();  //gets seconds, tostring, modifiyes it to be like 09
        seconds = seconds.toString();
        if (seconds.length < 2) {
          seconds = "0" + seconds;
        } 

        $("#stopwatch").text(minutes + ":" + seconds);
      };
    }
    else if (clicked === false) {
      $("#startandstop").text("Click To Start");
      clearInterval(Interval);
      clicked = true;
    }
  });
  
  $("button").click(function() {
    clearInterval(Interval);
  });
  
  $("#reset").click(function() {
    miliseconds = 1500000;
    $("#stopwatch").text("25:00");
  });
  
  $("#break").click(function() {
    miliseconds = 300000;
    $("#stopwatch").text("05:00");
  });
  
  $("#plus").click(function() {
    miliseconds += 60000;
    Date(miliseconds);
    var date_on_screen = new Date(miliseconds);
    var minutes = date_on_screen.getMinutes();
    var seconds = date_on_screen.getSeconds();
    $("#stopwatch").text(minutes + ":" + seconds);
  })
  
  $("#minus").click(function() {
    miliseconds -= 60000;
    Date(miliseconds);
    var date_on_screen = new Date(miliseconds);
    var minutes = date_on_screen.getMinutes();
    var seconds = date_on_screen.getSeconds();
    $("#stopwatch").text(minutes + ":" + seconds);
  })
});
