$.get("https://api.ipdata.co?api-key=test", function (response) {
  if (response.threat.is_anonymous) {
    alert("You are not allowed to create an account.");
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
