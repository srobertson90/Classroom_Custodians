var custodians = [
{name: "Zsolt", special: "demoralize"},
{name: "Val", special: "terrify"},
{name: "Beth", special: "spread pestilence"},
{name: "Jarrod", special: "rage"},
{name: "Tony", special: "fire alarm"}
]


var Api = function(app){
  app.get('/api/custodians', function (req, res) {
    res.json(custodians)
  });
}

module.exports = Api;