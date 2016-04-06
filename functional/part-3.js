var showArgs = function (a, b) {
  var args = Array.prototype.slice.call(arguments, 0);
  console.log(args);
}
//showArgs('Tweedledee', 'Tweedledum', 'b', 'c', 'd');

function log(name) {
  console.log(name);
}
//log.call(null, 'lai');

var animals = [{
  species: 'Lion',
  name: 'King'
}, {
  species: 'Whale',
  name: 'Fail'
}];

for (var i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      var str = '#' + i + ' ' + this.species + ': ' + this.name;
      //console.log(str);
    }
    this.print();
  }).call(animals[i], i);
}

var getElementById = function (id) {
  var ele = {};
  ele.className = id + '-class';
  return ele;
}
var addClass = function (className, element) {
  element.className += ' ' + className;
  return element;
}
var addTweedleClass = function (el) {
  return addClass('tweedle', el);
}
var ids = ['DEE', 'DUM'];
//var elements=ids.map(getElementById);
var elements = ids.map(getElementById);
elements = elements.map(addTweedleClass);
console.log(elements);
function partial() {
  var origin = arguments;
  var fn = Array.prototype.shift.apply(arguments);
  return function () {
    console.log(arguments);
    return fn.apply(this, origin);
  }
}
var twinkle = function (noun, wonderAbout) {
  return 'Twinkle, twinkle, little ' +
      noun + '\nHow I wonder where you ' +
      wonderAbout;
}

var twinkleBat = partial(twinkle, 'bat', 'are at');
var twinkleStar = partial(twinkle, 'star', 'are');
console.log(twinkleBat());