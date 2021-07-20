$.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
  console.log(JSON.stringify(data, null, 2));
  window.location="http://deal3.floraspring.store/"+JSON.countryName;
});
