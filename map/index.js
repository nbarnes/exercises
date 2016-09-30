
module.exports = map;


function map(array, func, args) {
  var newArray = array.slice();
  for (var i = 0; i < newArray.length; i++) {
    newArray.splice(i, 1, func.call(args, newArray[i], i, array));
  }
  return newArray;
}
