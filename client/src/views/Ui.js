var Custodians = require("../models/custodians");

var Ui = function(){
  var custodians = new Custodians();
  custodians.all(function(data){
    console.log(data)
  });
}