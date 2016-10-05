var Custodians = require("../models/custodians");

var Ui = function(){
  var custodians = new Custodians();
  custodians.all(function(data){
    this.render(data);
  }.bind(this));
}

Ui.prototype = {
  render: function(custArr){
    var body = document.querySelector("body");
    for(custodian of custArr){
      var div = document.createElement("div");
      div.innerText = custodian.name + " used " + custodian.special;
      body.appendChild(div);
    };
  }
  
}

module.exports = Ui;