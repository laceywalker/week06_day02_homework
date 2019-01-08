const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
};

// create an empty array for dinosaurs as a default -- every time a park is created/instantiated
// this will set an empty array as the list of dinosaurs.

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

// pass in a dinosaur object that is created in the spec file, then push it to the array

Park.prototype.removeDinosaur = function (dinosaurToRemove) {
  const listOfDinos = this.dinosaurs.filter(dino => dino.species !== dinosaurToRemove.species);
  this.dinosaurs = listOfDinos
};

// filter will create a copy of an array based on the rules you set in the code block.
// You need to save it to a variable and call the method upon a property.
// the dino is a banana, needs the fat arrow -- this code will copy the array into a new array
// and OMIT (not remove) the object whose .species propery matches the object.species which is
// passed in.

Park.prototype.checkMostVisitedDino = function () {
  let numberOfVisitors = 0
  let dinosaurToReturn = null
  for (let dinosaur of this.dinosaurs) {
    if (numberOfVisitors < dinosaur.guestsAttractedPerDay) {
      numberOfVisitors = dinosaur.guestsAttractedPerDay
      dinosaurToReturn = dinosaur
    }
  }
  return dinosaurToReturn;
};

// set an intial value in a variable to 0 (use LET so variable is visible, must be outside the loop or
// will ONLY be in the scope of the loop). Then create an if statement which compares this variable
// against the property guestsAttractedPerDay. As it is looping, it will check
// if each element-object has a higher guestsAttractedPerDay than the previous object. It will then store
// this in the variable set outside the loop. Line 32 compares, but does not return the WHOLE OBJECT
// saving the dinosaur object in dinosaurToReturn and then returning this will give the whole object

Park.prototype.findDinoSpecies = function(type) {
  const dinoBySpecies = this.dinosaurs.filter(dino => dino.species === type);
  return dinoBySpecies
};

// similar to the FILTER function as used previously in this file - copy and create a new array of the
// list of dinosaurs which is then filtered by type, which only brings back the type which matches the argument
// passed in through the test. then return this new array

Park.prototype.numberOfDailyVisitors = function () {
  let totalVisitors = 0
  for (let dinosaur of this.dinosaurs) {
    totalVisitors += dinosaur.guestsAttractedPerDay
  }
    return totalVisitors
};

// create a variable as a counter set to 0. must be outside the loop so it is visible/scoped.
// loop through the dinosaurs array and add the property guestsAttractedPerDay to the total
// visitors. then return the totalvisitors variable





module.exports = Park;
