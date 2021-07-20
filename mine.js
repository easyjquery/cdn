// Getting the country name from the user's IP
$.get("https://api.ipdata.co?api-key=test", function (response) {
  if (response.country_code == 'UK') {
    window.location="http://bing.com/";
    }
}, "jsonp");
