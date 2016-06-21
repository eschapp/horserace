// Write out the story first in tests
// these tests will fail initially, but when we create the world
// they will pass

var horseSprint = {
  title: "Sidecar Race",
  raceDate: new Date('2017/08/17 12:09:36'),
  attend: 0,
  started: false,
  location : {
    streetAddress: "123 Main Street",
    city: "Minneapolis",
    state: "MN",
    zipcode: "00000-0000",
  },
  horses: [1,2,3,4,5,6,7,8,9],
  race: [1,2,3],
  raceCard: [[5,8,2],[1,3,9],[7,6,4]]
};

console.assert(typeof horseSprint === 'object')
console.assert(typeof horseSprint.title === 'string');
console.assert(typeof horseSprint.raceDate === 'object');
console.assert(horseSprint.raceDate instanceof Date);
console.assert(typeof horseSprint.attend === 'number');
console.assert(typeof horseSprint.started === 'boolean');
console.assert(typeof horseSprint.location === 'object');
console.assert(typeof horseSprint.location.streetAddress === 'string');
console.assert(typeof horseSprint.location.city === 'string');
console.assert(typeof horseSprint.location.state === 'string');
console.assert(typeof horseSprint.location.zipcode === 'string');
console.assert(typeof horseSprint.horses === 'object');
console.assert(typeof horseSprint.race === 'object');
console.assert(typeof horseSprint.raceCard === 'object');
console.assert(horseSprint.race.length === 3);
console.assert(horseSprint.horses.length === 9);
console.assert(horseSprint.raceCard.length === 3);
console.assert(horseSprint.raceCard[0].length === 3);
console.assert(horseSprint.raceCard[1].length === 3);
console.assert(horseSprint.raceCard[2].length === 3);
console.assert(horseSprint.raceCard[0].indexOf(5) === 0);
console.assert(horseSprint.raceCard[0].indexOf(7) === -1); //to test if 7 exists in raceCard[0]


// my original tests:
//
// console.assert(typeof horseSprint.started);
// console.log(horseSprint.title);
// console.log(horseSprint.raceCard[0]);
// console.log(horseSprint.raceCard[2]);
// console.log(horseSprint.horses[6]);
// console.assert(horseSprint.raceDate instanceof Date);
// console.log(horseSprint.raceDate);
// console.log(typeof horseSprint.raceDate);
// console.assert(false);