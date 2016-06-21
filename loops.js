var stable = {
  horses: [
  {
    name: "Prancy",
    color: "brown"
  },
  {
    name: "Buttercup",
    color: "yellow"
  },
  {
    name: "Big Brown",
    color: "fawn"
  },
  {
    name: "Rick James",
    color: "really really green"
  }
  ]
};

function feed(horses) {
  var numHorses = horses.length;
  for (var i = 0; i < numHorses ; i++ ){
      console.log(horses[i].name + ": thanks for feeding me!!!!");

  }
}

feed(stable.horses);