var custodians = [
{name: "Zsolt", specialAbility: "Spin"},
{name: "Val", specialAbility: "Cat minions"}
]


var Api = function(app){
  app.get('/api/custodians', function (req, res) {
    res.json(custodians)
  });
}

module.exports = Api;