$(document).ready(function() {
  $("#button").on('click', function() {
    $("#result").html("");
    var value = $('#search').val();
    $.ajax({
      url: '//en.wikipedia.org/w/api.php',
      type: "GET",
      dataType: "jsonp",
      data: {action: "query", list:"search", srsearch:value, format:"json"},
      success: function(data) {
        data.query.search.map(function(key) {  //prints the whole result div
          $("  <a id=\"resultanchor\" href=\"https://en.wikipedia.org/wiki/"+key.title+"\"target=\"_blank\"'\">    <div  id=\"resultbox\" style='background-color:#D3D3D3'\">    <h3>"+key.title+"</h3>    <p>"+key.snippet+"</p>  </div></a><br>").appendTo("#result");
          });
      }
    });
    
  });
});
