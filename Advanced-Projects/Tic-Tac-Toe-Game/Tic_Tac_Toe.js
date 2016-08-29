document.playervalue;
document.pcvalue;

var possible_lines = {
  rows:[ ["b1","b2","b3"], ["b4","b5","b6"], ["b7","b8","b9"] ],
  cols:[ ["b1","b4","b7"], ["b2","b5","b8"], ["b3","b6","b9"] ],
  diags: [ ["b1","b5","b9"], ["b3","b5","b7"] ]
}

var possible_buttons = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];

function getXorO() {
  var answer = prompt("Please Choose X or O");
  if (answer === "x" || answer === "X") {
    alert("You Have Chosen X");
    playervalue = "X";
    pcvalue = "O";
  }
  else if (answer === "o" || answer === "O") {
    alert("You Have Chosen O");
    playervalue = "O";
    pcvalue = "X";
  }
  else {
    getXorO();
  }
}

function Remove_from_buttons(button) {
  var removed = possible_buttons.indexOf(button);
  possible_buttons.splice(removed, 1);
  console.log(possible_buttons);
}

function Random_play() {
  var rand = possible_buttons[Math.floor(Math.random() * possible_buttons.length)];
  $("#"+rand).text(pcvalue);
  $("#"+rand).hide();
  $("#"+rand).fadeIn("slow");
  Remove_from_buttons(rand);
}

function Reset() {
  possible_buttons = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
  $("a").text("");
  getXorO();
}

getXorO();
//1st step: check all the grid for opponent's winnings and stop him
//2nd step: check all the grid for pc's winnings and complete them
//3rd step: randomly input in any "empty" field

$(document).ready(function() {
  var the_button;
  var temp_button;
  var player_founded = 0;
  var pc_founded = 0;
  var playerScore = 0;
  var pcScore = 0;
  var Ties = 0;
  $("a").click(function() {
    if ( $(this).text().length === 0 ) {
      $(this).text(playervalue);
      $(this).hide();
      $(this).fadeIn("slow");
      Remove_from_buttons(this.id);
      if (possible_buttons.length === 0) {
        //Draw
        Ties+=1;
        $("#ties_score").text(Ties);
      }
      
      //------------------------------------------------------------------------------------------------------------
      for ( var way in possible_lines ) { //loops through everything to block the player from winning
          for ( var item in possible_lines[way]) {
            pc_founded = 0;
            for ( var element in possible_lines[way][item]) {
              the_button = possible_lines[way][item][element];

              if ( $("#"+the_button).text() === pcvalue ){
                pc_founded += 1;
              }
              else {
                temp_button = the_button;
              }
            }

            if ( pc_founded === 2 && ($("#"+temp_button).text().length === 0) ) {
              $("#"+temp_button).text(pcvalue);
              $("#"+temp_button).hide();
              $("#"+temp_button).fadeIn("slow");
              Remove_from_buttons(temp_button);
              //increment the pcvalue score
              pcScore+=1;
              $("#pc_score").text(pcScore);
              setTimeout(function() {
                Reset(); 
              }, 1000);
              return;
            }
            
          }
        }
      //----------------------------------------------------------------------------------------------------------------------
      
      //-----------------------------------------------------------------------------------------------
        for ( var way in possible_lines ) { //loops through everything to block the player from winning
          for ( var item in possible_lines[way]) {
            player_founded = 0;
            for ( var element in possible_lines[way][item]) {
              the_button = possible_lines[way][item][element];

              if ( $("#"+the_button).text() === playervalue ){
                player_founded += 1;
              }
              else {
                temp_button = the_button;
              }
            }

            if ( player_founded === 2 && ($("#"+temp_button).text().length === 0) ) {
              $("#"+temp_button).text(pcvalue);
              Remove_from_buttons(temp_button);
              $("#"+temp_button).hide();
              $("#"+temp_button).fadeIn("slow");
              return;
            }
            
            else if ( player_founded === 3) {
              //Increment the playervalue score
              playerScore+=1;
              $("#player_score").text(playerScore);
              setTimeout(function() {
                Reset(); 
              }, 1000);
            }
          }
        }
      //------------------------------------------------------------------------------------------------------------
      if ( possible_buttons.length === 0 ){
        setTimeout(function() {
          Reset(); 
        }, 1000);
      }
      
      if ( player_founded <= 1 ) { //if not blocking or trying to win, play randomly
        //put a random selection
        Random_play();
      }
    }
  });
});
