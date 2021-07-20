// Getting the country code from the user's IP
$.get("https://api.ipdata.co?api-key=test", function (response) {
  if (response.country_code == 'UK') {
    window.location.href = "https://uk.store.ipdata.co";
    } else if (response.country_code == 'US') {
    window.location.href = "https://us.store.ipdata.co";
    } else if (response.country_code == 'AU') {
    window.location.href = "https://au.store.ipdata.co";
    }
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
