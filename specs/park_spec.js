const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinoFirst;
  let dinoSecond;
  let dinoThird;
  let dinoFourth;

  beforeEach(function () {
    park = new Park("Jurassic Park", 40);
    dinoFirst = new Dinosaur('t-rex', 'carnivore', 50);
    dinoSecond = new Dinosaur('diplodocus', 'herbivore', 30);
    dinoThird = new Dinosaur('troodon', 'omnivore', 10);
    dinoFourth = new Dinosaur('diplodocus', 'herbivore', 8);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 40);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinoFirst);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinoFirst);
    park.addDinosaur(dinoSecond);
    park.removeDinosaur(dinoFirst)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinoFirst);
    park.addDinosaur(dinoSecond);
    park.addDinosaur(dinoThird);
    park.addDinosaur(dinoFourth);
    const actual = park.mostVisitors().species;
    assert.strictEqual(actual, 't-rex')
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinoFirst);
    park.addDinosaur(dinoSecond);
    park.addDinosaur(dinoThird);
    park.addDinosaur(dinoFourth);
    const actual = park.allDinosaursBySpecies('diplodocus').length;
    assert.strictEqual(actual, 2)
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinoFirst);
    park.addDinosaur(dinoSecond);
    park.addDinosaur(dinoThird);
    park.addDinosaur(dinoFourth);
    const actual = park.dailyVisitorsTotal();
    assert.strictEqual(actual, 98)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinoFirst);
    park.addDinosaur(dinoSecond);
    park.addDinosaur(dinoThird);
    park.addDinosaur(dinoFourth);
    const actual = park.yearlyVisitorsTotal();
    assert.strictEqual(actual, 35770)
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinoFirst);
    park.addDinosaur(dinoSecond);
    park.addDinosaur(dinoThird);
    park.addDinosaur(dinoFourth);
    const actual = park.yearlyRevenue();
    assert.strictEqual(actual, 1430800)
  });

});
