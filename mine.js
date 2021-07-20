$.get("https://api.ipdata.co?api-key=test", function(response) {
  window.location="http://"+response.country_name;
}, "jsonp");
