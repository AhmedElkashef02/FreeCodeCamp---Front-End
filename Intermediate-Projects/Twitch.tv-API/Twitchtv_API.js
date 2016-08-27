$(document).ready(function() {
  //FCC-The First Channel 
  $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp', function(data) {
    console.log(data);
    $("#FCC").css("background-color","#52A552");
    if(data.stream === null) { //which means if it is offline
      $("#FCC").css("background-color","#8E3232");
      $("#FCC").addClass("offline");  
    }  
    else { //if it's online then print some details
      $("#FCC .description").html(data.stream.channel.status);
      $("#FCC").addClass("online");
    }
  });
  
  //MonsterCat-The Second Channel
  $.getJSON('https://api.twitch.tv/kraken/streams/monstercat', function(data) {
    console.log(data);
    $("#Monstercat").css("background-color","#52A552");
    if(data.stream === null) { //which means if it is offline
      $("#Monstercat").addClass("offline");
      $("#Monstercat").css("background-color","#8E3232");
    }  
    else { //if it's online then print some details
      $("#Monstercat .description").html(data.stream.channel.status);
      $("#Monstercat").addClass("online");
    }
  });
  
  // Riot Games - The Third Channel
  $.getJSON('https://api.twitch.tv/kraken/streams/riotgames', function(data) {
    console.log(data);
    $("#Riotgames").css("background-color","#52A552");
    if(data.stream === null) { //which means if it is offline
      $("#Riotgames").addClass("offline");
      $("#Riotgames").css("background-color","#8E3232");
    }  
    else { //if it's online then print some details
      $("#Riotgames .description").html(data.stream.channel.status);
      $("#Riotgames").addClass("online");
    }
  });
  
  // Syndicate - The Fourth Channel
  $.getJSON('https://api.twitch.tv/kraken/streams/syndicate', function(data) {
    console.log(data);
    $("#Syndicate").css("background-color","#52A552");
    if(data.stream === null) { //which means if it is offline
      $("#Syndicate").addClass("offline");
      $("#Syndicate").css("background-color","#8E3232");
    }  
    else { //if it's online then print some details
      $("#Syndicate .description").html(data.stream.channel.status);
      $("#Syndicate").addClass("online");
    }
  });
  
  //AmazHS - The Fifth Channel
  $.getJSON('https://api.twitch.tv/kraken/streams/AmazHS', function(data) {
    console.log(data);
    $("#AmazHS").css("background-color","#52A552");
    if(data.stream === null) { //which means if it is offline
      $("#AmazHS").addClass("offline");
      $("#AmazHS").css("background-color","#8E3232");
    }  
    else { //if it's online then print some details
      $("#AmazHS .description").html(data.stream.channel.status);
      $("#AmazHS").addClass("online");
    }
  });
  
  //brunofin - The Sixth Channel
  $.getJSON('https://api.twitch.tv/kraken/streams/brunofin', function(data) {
  })
  .fail(function() {
    $("#brunofin .description").html("streamer has closed their Twitch account,or the account never existed");
  });
  
  //comster404 - The Seventh Channel
  $.getJSON('https://api.twitch.tv/kraken/streams/comster404', function(data) {
  })
  .fail(function() {
    $("#comster404 .description").html("streamer has closed their Twitch account,or the account never existed");  
  });
  
});

$("#online").on("click", function() {
  $("#AmazHs,#Monstercat,#FCC,#Riotgames,#Syndicate,#comster404,#brunofin").hide();
  $(".online").show();
});

$("#offline").on("click", function() {
  $("#AmazHS,#Monstercat,#FCC,#Riotgames,#Syndicate,#comster404,#brunofin").hide();
  $(".offline").show();
});

$("#all").on("click", function() {
  $("#AmazHs,#Monstercat,#FCC,#Riotgames,#Syndicate,#comster404,#brunofin").show();
});
