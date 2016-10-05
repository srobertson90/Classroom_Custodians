var Custodian = require('./custodian');
var apiRequest = require('./api-requester');

var Custodians = function(){

}

Custodians.prototype = {

all: function(onComplete){
  var self = this;
  var url = "http://localhost:3000/api/custodians"

  apiRequest(url, function(){
    if (this.status !== 200) return;
    var jsonString = this.responseText;
    var results = JSON.parse(jsonString);
    var custodians = self.parseToCustodians(results);
    onComplete(custodians);
  });
},

parseToCustodians: function(results){
  var custodians = [];
  for (var result of results){
    var custodian = new Custodian(result);
    custodians.push(custodian);
  }
  return custodians;
}

}

module.exports = Custodians;