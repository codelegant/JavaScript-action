var ponies = [
  [
    ['name', 'Fluttershy'],
    ['image', 'http://tinyurl.com/gpbnlf6'],
    ['description', 'Fluttershy is a female Pegasus pony and one of the main characters of My Little Pony Friendship is Magic.']
  ],
  [
    ['name', 'Applejack'],
    ['image', 'http://tinyurl.com/gkur8a6'],
    ['description', 'Applejack is a female Earth pony and one of the main characters of My Little Pony Friendship is Magic.']
  ],
  [
    ['name', 'Twilight Sparkle'],
    ['image', 'http://tinyurl.com/hj877vs'],
    ['description', 'Twilight Sparkle is the primary main character of My Little Pony Friendship is Magic.']
  ]
];
function addToObject(obj, arr) {
  obj[arr[0]] = arr[1];
  return obj;
}
var reduce = function (callback, initialValue, array) {
  var working = initialValue;
  for (var i = 0; i < array.length; i = i + 1) {
    working = callback(working, array[i]);
  }
  return working;
};
console.log(reduce(addToObject, {}, ponies));