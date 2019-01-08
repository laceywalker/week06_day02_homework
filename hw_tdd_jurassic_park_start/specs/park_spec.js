const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park('Onion Park', 10);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur1 = new Dinosaur('stegosaurus', 'herbivore', 40);
    dinosaur2 = new Dinosaur('bronto boi', 'herbivore', 30);
    dinosaur3 = new Dinosaur('aerodactyl', 'omnivore', 100);
  });

  it('should have a name', function() {
    const expected = 'Onion Park';
    assert.strictEqual(expected, park.name)
  });

  it('should have a ticket price', function() {
    const expected = 10;
    assert.strictEqual(expected, park.ticketPrice)
  });

  it('should have a collection of dinosaurs', function() {
    const expected = [];
    assert.deepStrictEqual(expected, park.dinosaurs)
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur);
    const expected = 1
    assert.strictEqual(expected, park.dinosaurs.length)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur2);
    const expected = [dinosaur1];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
