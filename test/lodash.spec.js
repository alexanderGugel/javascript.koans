var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
chai.should();

describe('Underscore library', ()=>{

  xdescribe('identity', ()=>{
    it('Should return the same value that has been passed', ()=>{
      expect(_.identity(1)).equal(1);
      expect(_.identity({})).to.deep.equal({});
      expect(_.identity('philos')).to.deep.equal('philos');
    })
  });

  xdescribe('first: does not mutate the collection', ()=>{

    let items;
    beforeEach(function(){
      items = [1,9, 10, true, 'Hacklunch', {name: 'Philos'}];
    });

    it('Should throw an error if no argument is passed', ()=>{
        _.first().should.throw(Error);
    });

    it('Should return the first element of the collection', ()=>{
      expect(_.first(items)).equal(1);
    });

    it('Should return the first n elements when a second argument is passed', ()=>{
      expect(_.first(items, 0)).equal(1);
      expect(_.first(items, 1)).to.deep.equal([1]);
      expect(_.first(items, 2)).to.deep.equal([1, 9]);
      expect(_.first(items, 5)).to.deep.equal([1, 9, 10, true, 'Hacklunch']);
    })
  });

  xdescribe('last',  ()=>{
    let items;

    beforeEach(function(){
      items = [1,9, 10, true, 'Hacklunch', {name: 'Philos'}];
    });

    it('Should throw an error if no collection is passed', ()=>{
        _.last().should.throw(Error);
    });

    it('Should return the last element of the collection', ()=>{
        expect(_.last(items)).to.deep.equal({name: 'Philos'});
    });

    it('Should return the last n elements when a second argument is passed', ()=>{
      expect(_.last(items, 0)).to.deep.equal({name: 'Philos'});
      expect(_.last(items, 1)).to.deep.equal([{name: 'Philos'}]);
      expect(_.last(items, 2)).to.deep.equal(['Hacklunch', {name: 'Philos'}]);
      expect(_.last(items, 3)).to.deep.equal([true,'Hacklunch', {name: 'Philos'}]);
    });
  });

  xdescribe('isArray',  ()=>{
    let items = [10, false, 'Hacklunch'];

    it('Should return true when passed an collection of elements', ()=>{
      expect(_.isArray(items)).equal(true);
      expect(_.isArray([])).equal(true);
    });

    it('Should return false when passed anything else', ()=>{
      expect(_.isArray("Bootcamp by Philos")).to.equal(false);
      expect(_.isArray({})).to.equal(false);
      expect(_.isArray(12)).to.equal(false);
      expect(_.isArray(false)).to.equal(false);
    });

    it('arguments is not an Array', ()=>{
      _.isArray(items)

      function isArray(){
        expect(_.isArray(arguments)).to.equal(false);
      }
    });
  });

  xdescribe('isDefined',  ()=>{
    it('Happy path', ()=>{
      expect(_.isDefined([])).equal(true);
      expect(_.isDefined(12)).equal(true);
      expect(_.isDefined(0)).equal(true);
      expect(_.isDefined(false)).equal(true);
      expect(_.isDefined({})).equal(true);
      expect(_.isDefined([])).equal(true);
    });

    it('Should return false when passed a string', ()=>{
      let items;
      expect(_.isDefined(items)).equal(false);
    });
  });

  xdescribe('isFunction',  ()=>{
    it('Should return true when passed an anonymous function', ()=>{
      _.isFunction(()=>{}).equal(true);
      _.isFunction(()=>{}).equal(true);
    });

    it('Should return true when passed a named function', ()=>{
      let sum = (x, y)=> x + y;
      expect(_.isFunction(sum)).equal(true);
    });

    it('Should return true when passed a class', ()=>{
      class Book{}
      expect(_.isFunction(Book)).equal(true);
    });

    it('Should return false otherwise', ()=>{
      expect(_.isFunction({})).equal(false);
      expect(_.isFunction(12)).equal(false);
      expect(_.isFunction(undefined)).equal(false);
      expect(_.isFunction('Hacklunch')).equal(false);
      expect(_.isFunction([])).equal(false);
    });
  });

  xdescribe('isNumber',  ()=>{
    it('Should return true when passed any number', ()=>{
      expect(_.isNumber(12)).equal(true);
      expect(_.isNumber(1.2)).equal(true);
      expect(_.isNumber(12)).equal(true);
      expect(_.isNumber(0)).equal(true);
      expect(_.isNumber(-10)).equal(true);
    });

    it('Should return false otherwise', ()=>{
      expect(_.isNumber({})).equal(false);
      expect(_.isNumber(NaN)).equal(false);
      expect(_.isNumber({})).equal(false);
      expect(_.isNumber({})).equal(false);
    });
  });

  describe('slice', ()=>{
    it('Should return a new array', ()=>{
      // TODO: write and implement the specs for this function
    });
  });

  describe('splice', ()=>{
    it('Should return a new array', ()=>{
      // TODO: write and implement the specs for this function
    });
  });

  describe('forEach', ()=>{
    it('should iterate over arrays, providing access to the element, index, and array itself', ()=> {
      var animals = ['ant', 'bat', 'cat'];
      var iterationInputs = [];

      _.forEach(animals, function(animal, index, list) {
        iterationInputs.push([animal, index, list]);
      });

      expect(iterationInputs).to.eql([
        ['ant', 0, animals],
        ['bat', 1, animals],
        ['cat', 2, animals]
      ]);
    });

    it('should only iterate over the array elements, not properties of the array', ()=> {
      var animals = ['ant', 'bat', 'cat'];
      var iterationInputs = [];

      animals.shouldBeIgnored = 'Ignore me!';

      _.forEach(animals, function(animal, index, list) {
        iterationInputs.push([animal, index, list]);
      });

      expect(iterationInputs).to.eql([
        ['ant', 0, animals],
        ['bat', 1, animals],
        ['cat', 2, animals]
      ]);
    });

    it('should iterate over objects, providing access to the element, index, and object itself', ()=> {
      var animals = { a: 'ant', b: 'bat', c: 'cat' };
      var iterationInputs = [];

      _.forEach(animals, function(animal, key, object) {
        iterationInputs.push([animal, key, object]);
      });

      expect(iterationInputs).to.eql([
        ['ant', 'a', animals],
        ['bat', 'b', animals],
        ['cat', 'c', animals]
      ]);
    });
  });

  describe('map', ()=>{
    it('should apply a function to every value in an array', ()=>{
      let squaredValues = _.map([4, 2, 3, 9], (item) => item*item);
      expect(squaredValues).to.deep.equal([16, 4, 9, 81]);
    });
  });

  describe('find: find does not mutate the array on which it is called.', ()=>{

    xit('Should throw an error if no predicate is passed', ()=>{
        _.find().should.throw(Error);
    });

    it('should return undefined if none of the elements match the predicate', ()=>{
      let isEven = (num) => { num % 2 === 0; };
      let evens = _.find([1, 3, 7, 5], isEven);
      expect(evens).equal('undefined');
    });

    it('should return the first element that matchs the predicate', ()=>{
      let isOdd = function(num){ num % 2 !== 0; };
      let odds = _.find([10, 2, 3, 4, 5, 6], isOdd);
      expect(odds).equal(3);
    });
  });

  describe('reduce', ()=> {
    it('should be able to sum up an array', ()=> {
      var add = function(tally, item) {return tally + item; };
      var total = _.reduce([1, 2, 3], add, 0);

      expect(total).to.equal(6);
    });

  });

  describe('contains', ()=> {
    it('should return false if a collection does not contain a user-specified value', ()=> {
      expect(_.contains([4,5,6], 2)).to.equal(false);
    });

    it('should return true if a collection contains a user-specified value', ()=> {
      expect(_.contains([  4,   5,   6], 5)).to.equal(true);
    });

    it('can operate on objects', ()=>{
      expect(_.contains({a:4, b:5, c:6}, 5)).to.equal(true);
    });
  });

  describe('extend', ()=> {
    it('returns the first argument', ()=> {
      var to = {};
      var from = {};
      var extended = _.extend(to, from);

      expect(extended).to.equal(to);
    });

    it('should extend an object with the attributes of another', ()=> {
      var to = {};
      var from = {a:'b'};
      var extended = _.extend(to, from);

      expect(extended.a).to.equal('b');
    });

    it('should override properties found on the destination', ()=> {
      var to = {a:'x'};
      var from = {a:'b'};
      var extended = _.extend(to, from);

      expect(extended.a).to.equal('b');
    });

    it('should not override properties not found in the source', ()=> {
      var to = {x:'x'};
      var from = {a:'b'};
      var extended = _.extend(to, from);

      expect(extended.x).to.equal('x');
    });

    it('should extend from multiple source objects', ()=> {
      var extended = _.extend({x:1}, {a:2}, {b:3});

      expect(extended).to.eql({x:1, a:2, b:3});
    });

    it('in the case of a conflict, it should use the last property\'s values when extending from multiple source objects', ()=> {
      var extended = _.extend({x:'x'}, {a:'a', x:2}, {a:1});

      expect(extended).to.eql({x:2, a:1});
    });

    it('should copy undefined values', ()=> {
      var extended = _.extend({}, {a: void 0, b: null});

      expect('a' in extended && 'b' in extended).to.be(true);
    });
  });


  describe('findIndex', ()=>{});

  describe('fill', ()=>{});

  describe('keys', ()=>{});

  describe('values', ()=>{});

  describe('entries', ()=>{});
});
