const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park('Onion Park', 10);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
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

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
