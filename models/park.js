const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
};

// Add a dinosaur to its collection of dinosaurs
Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

// Remove a dinosaur from its collection of dinosaurs
Park.prototype.removeDinosaur = function (dinosaur) {
  let dinoIndex = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(dinoIndex, 1);
};

// Find the dinosaur that attracts the most visitors
Park.prototype.mostVisitors = function () {
  let dinosaursByMostVisitors = []
  dinosaursByMostVisitors = this.dinosaurs.sort(function(a, b){
    return b.guestsAttractedPerDay - a.guestsAttractedPerDay
  });
  return dinosaursByMostVisitors[0];
};

// Find all dinosaurs of a particular species
Park.prototype.allDinosaursBySpecies = function (searchSpecies) {
  let matchingDinosaurs = [];
  for(let dinosaur of this.dinosaurs){
    if(dinosaur.species === searchSpecies){
      matchingDinosaurs.push(dinosaur);
    };
  };
  return matchingDinosaurs;
};

// Calculate the total number of visitors per day
Park.prototype.dailyVisitorsTotal = function () {
  let totalVisitors = 0;
  for(let dinosaur of this.dinosaurs){
    totalVisitors += dinosaur.guestsAttractedPerDay
  }
  return totalVisitors;
};

// Calculate the total number of visitors per year
Park.prototype.yearlyVisitorsTotal = function () {
  let dailyTotal = this.dailyVisitorsTotal();
  return dailyTotal * 365;
};

// Calculate the total revenue from ticket sales for one year
Park.prototype.yearlyRevenue = function () {
  let yearlyVisitors = this.yearlyVisitorsTotal();
  return yearlyVisitors * this.price;
};

module.exports = Park;
