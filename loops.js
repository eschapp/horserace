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

//For Loop
  // function feed(horses) {
  //   var numHorses = horses.length;
  //   for (var i = 0; i < numHorses ; i++ ){
  //       console.log(horses[i].name + ": thanks for feeding me!!!!");

  //   }
  //   console.log("Done feeding!")
  // }

  // feed(stable.horses);
//
//
//Map Loop
  // function brush(horses) {
  //   var numHorses = horses.length;
  //   horses.map(function(horses){
  //     console.log(horses.name + " Thanks for brushing me!1!!!! ");
  //   });
  //   console.log("Dun with the brushin");
  // }

  // brush(stable.horses);
//
//For Each Loop

//   [2, 7, 9].forEach(function(element, index){
//     // console.log(element);
//     console.log(element + " " + index);
//   })
//
//For In  use sparingly!

    [2, 7, 9].forEach(function(element, index){
      // console.log(element);
      console.log(element + " " + index);
    })

    var farm = {
      type: 'corn',
      address: 'My Street'
    };

    for (prop in farm) {
      console.log(prop + ': ' + farm[prop]);
    }