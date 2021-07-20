// Getting the country name from the user's IP
$.get("https://api.ipdata.co?api-key=test", function (response) {
  if (response.country_code == 'US') {window.location="http://bing.com";}else{window.location="http://google.com";};
}, "jsonp");
