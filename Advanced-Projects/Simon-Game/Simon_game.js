//This piece of software is inspired by Kelly King's simon game, which has a tutorial in this link: 
//https://codeplanet.io/building-simon-says-javascript/

var palette = ["green","red","yellow","blue"];
var colors = [];
var copy = [];
var score = 0;
var active = true;
var restricted = false;

function view(colors) {
  var i = 0;
  var interval = setInterval(function() {
    soundUp(colors[i]);
    lightUp(colors[i]);
    i++;
    if ( i >= colors.length) {
      clearInterval(interval);
      activateSimonBoard();
    }
  }, 1200);
}

function soundUp(color) {
  if (color === "green") {
    var audio = $('<audio autoplay></audio>');
    audio.append('<source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/ogg" />');
    $('[data-action=sound]').html(audio);
  }
  else if ( color === "red") {
    var audio = $('<audio autoplay></audio>');
    audio.append('<source src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3" type="audio/ogg" />');
    $('[data-action=sound]').html(audio);
  }
  else if ( color === "yellow") {
    var audio = $('<audio autoplay></audio>');
    audio.append('<source src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3" type="audio/ogg" />');
    $('[data-action=sound]').html(audio);
  }
  else if ( color === "blue") {
    var audio = $('<audio autoplay></audio>');
    audio.append('<source src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3" type="audio/ogg" />');
    $('[data-action=sound]').html(audio);
  }
}

function lightUp(color) {
  if (color === "green") {
    $(".green").css("background-color", "rgba(0,153,0,0.6)");
    window.setTimeout(function() {
      $(".green").css("background-color", "rgba(0,153,0,1)");
    },900);
  } 
  else if (color === "red") {
    $(".red").css("background-color", "rgba(189,32,1,0.6)");
    window.setTimeout(function() {
      $(".red").css("background-color", "rgba(189,32,1,1)");
    },900);
  }
  else if (color === "yellow") {
    $(".yellow").css("background-color", "rgba(188,188,32,0.6)");
    window.setTimeout(function() {
      $(".yellow").css("background-color", "rgba(188,188,32,1)");
    },900);
  }
  else if (color === "blue") {
    $(".blue").css("background-color", "rgba(1,2,188,0.6)");
    window.setTimeout(function() {
      $(".blue").css("background-color", "rgba(1,2,188,1)");
    },900);
  }
}

function gameStart() {
  colors = [];
  copy = [];
  score = 0;
  active = true;
  $("#screen").text("--");
  newRound();
}

function newRound() {
  colors.push(palette[Math.floor(Math.random() * palette.length)]);
  copy = colors.slice(0);
  view(colors);
}

function nonRestricted_newRound() {
  copy = colors.slice(0);
  view(colors);
}

function registerClick(e) {
  var desiredResponse = this.copy.shift();
  var actualResponse = $(e.target).data('tile');
  active = (desiredResponse === actualResponse);
  checkLose();
}

function nonRestricted_registerClick(e) {
  var desiredResponse = this.copy.shift();
  var actualResponse = $(e.target).data('tile');
  active = (desiredResponse === actualResponse);
  checkLose();
}

function checkLose() { //if user is successful
  if (score === 20) {
    deactivateSimonBoard();
    $("#screen").text("Congratz");
    endGame();
  }
  
  if ( copy.length === 0 && active) {
    deactivateSimonBoard();
    score++;
    $("#screen").text(score);
    newRound();
  }
  else if ( active === false ) { //if user is wrong
    if ( restricted === true ) { //if the game is hard then stop the game
      deactivateSimonBoard();
      endGame();
      $("#screen").text("No");
    }
    else if ( restricted === false ) { //if the game is easy then repeat
      deactivateSimonBoard();
      nonRestricted_newRound();
    }
  }
}

function endGame() {
  score = 0;
  $("#screen").text(score);
}

function activateSimonBoard() {
  var that = this
  $("#bigSquare").on("click", "[data-tile]", function(e) {
    var buttonClicked = $(e.target).data('tile');
    
    if ( buttonClicked === "red" ) {
      $(".red").css("background-color", "rgba(189,32,1,0.6)");
      window.setTimeout(function() {
        $(".red").css("background-color", "rgba(189,32,1,1)");
      },900);
    }
    
    else if ( buttonClicked === "blue" ) {
      $(".blue").css("background-color", "rgba(1,2,188,0.6)");
      window.setTimeout(function() {
        $(".blue").css("background-color", "rgba(1,2,188,1)");
      },900);
    }
    
    else if ( buttonClicked === "green") {
      $(".green").css("background-color", "rgba(0,153,0,0.6)");
      window.setTimeout(function() {
        $(".green").css("background-color", "rgba(0,153,0,1)");
      },900);
    }
    
    else if ( buttonClicked === "yellow") {
      $(".yellow").css("background-color", "rgba(188,188,32,0.6)");
      window.setTimeout(function() {
        $(".yellow").css("background-color", "rgba(188,188,32,1)");
      },900);
    }
    
    if (restricted === true) {
      that.registerClick(e);
    }
    else if ( restricted === false ){
      that.nonRestricted_registerClick(e);
    }
  })
  
  $("#bigSquare").on("mousedown", "[data-tile]", function() {
    $(this).addClass("active");
    //add sound here for each button
    that.soundUp($(this).data('tile'));
  })
  $("#bigSquare").on("mouseup", "[data-tile]", function() {
    $(this).removeClass("active");
  })
  $('[data-tile]').addClass('hoverable');
}

function deactivateSimonBoard() {
  $("#bigSquare").off("click", "[data-tile]");
  $("#bigSquare").off("mousedown", "[data-tile]");
  $("#bigSquare").off("mouseup", "[data-tile]");
}



$(document).ready(function() {
  $("#start").click(function() {
    gameStart();
  });
  var strictOn_Off = "off";
  $("#strict").click(function() {
    if ( strictOn_Off === "off" ) {
      strictOn_Off = "on"
      $("#strict").css("background-color","red");
      restricted = true;
      gameStart();
    }
    else if ( strictOn_Off === "on" ) {
      strictOn_Off = "off"
      $("#strict").css("background-color","black");
      restricted = false;
      gameStart();
    }
  });
});
