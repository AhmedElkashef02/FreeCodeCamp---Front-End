$(document).ready(function() {
  $.getJSON("http://ip-api.com/json", function(data) {
    console.log(JSON.stringify(data));
    var city = data.regionName;
    var country = data.country;
    var lat = data.lat;
    var lon = data.lon;
    $("h1").html(city + ", " + country);

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=imperial&APPID=fa885e14cf6217d18e40f2d28151d327", function(json) { 
      console.log("Recieved: " + JSON.stringify(json));
      $("#temp").html(Math.round(json.main.temp));
      $("#feels-like").html("Feels like: " + Math.round(json.main.temp)+"°");
      $("#humidity").html("Humidity: " + json.main.humidity + "%");
      $("#sunrise").html("Sunrise: " + convert(json.sys.sunrise));
      $("#min-max").html("Min:" + Math.round(json.main.temp_min) + " Max:" + Math.round(json.main.temp_max));
      $("#pressure").html("Pressure: " + json.main.pressure + " mbar");
      $("#sunset").html("Sunset: " + convert(json.sys.sunset));
      $("#weather").html(json.weather[0].main);
      $("#icon").html("<img src =\"http://openweathermap.org/img/w/" + json.weather[0].icon + ".png\">");
      if((json.weather[0].main).length === 3){
        $(".col-lg-2").addClass("col-lg-3");
        $(".col-lg-2").removeClass("col-lg-2");
      }
      if((json.weather[0].description) === "clear sky") {
        $("body").css("background-image", "url(\"http://www.imageafter.com/dbase/images/nature_elements/b20nature_elements138.jpg\")");
      };
      if((json.weather[0].description) === "few clouds") {
        $("body").css("background-image", "url(\"http://img.wikinut.com/img/11vxv8zz7g5u0kbk/jpeg/0/On-the-wings-of-the-sky....jpeg\")");
      };
      if((json.weather[0].description) === "scattered clouds") {
        $("body").css("background-image", "url(\"http://wallpapercave.com/wp/edP4oqh.jpg\")");
      };
      if((json.weather[0].description) === "broken clouds") {
        $("body").css("background-image", "url(\"http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2012/11/30/100262726-Storm-Clouds.1910x1000.jpg\")");
      };
      if((json.weather[0].description) === "shower rain") {
        $("body").css("background-image", "url(\"https://i.ytimg.com/vi/E4TyO9MXkiU/maxresdefault.jpg\")");
      };
      if((json.weather[0].description) === "light rain") {
        $("body").css("background-image", "url(\"https://i.ytimg.com/vi/3UTLAkV-_WQ/maxresdefault.jpg\")");
      };
      if((json.weather[0].description) === "thunderstorm") {
        $("body").css("background-image", "url(\"http://wtop.com/wp-content/uploads/2014/07/355929-1865x1254.jpg\")");
      };
      if((json.weather[0].description) === "snow") {
        $("body").css("background-image", "url(\"http://www.uncalke.com/i/snowing-city-wallpaper-hd.jpg\")");
      };
      if((json.weather[0].description) === "mist") {
        $("body").css("background-image", "url(\"http://65.media.tumblr.com/03b18ecda5d3d97bd086f49af0ccabb9/tumblr_npn6xrolWL1r1arpmo1_1280.jpg\")");
      };
      var isclicked = "true";
        $("#tempbutton").click(function() {
          if (isclicked === "true") {
            $(this).html("°C");  
            $("#temp").html (Math.round((  (5/9) * (Math.round(json.main.temp)-32  ))));
            isclicked = "false";
          }
          else if (isclicked === "false") {
            $(this).html("°F");  
            $("#temp").html (Math.round(json.main.temp));
            isclicked = "true";
          }
        });
      });
  });

  function convert(timestamp){
    var date = new Date(timestamp*1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime;
  }



});

/* $('#temp').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
}); */
