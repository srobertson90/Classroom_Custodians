var apiRequester = function(url, callback){
  var request = new XMLHttpRequest()
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

module.exports = apiRequester;