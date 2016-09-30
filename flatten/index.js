
module.exports = flatten;

function flatten(array) {
  var newArray = array.slice();
  var arrayLength = array.length
  for (var i = 0; i < arrayLength; i++) {

    if (Array.isArray(array[i])) {

      var subArray = flatten(array[i]);

      subArrayLength = subArray.length;
      newArray.splice(i, 1);
      for (var j = subArrayLength - 1; j >= 0; j--) {
        newArray.splice(i, 0, subArray[j]);
      }
    }
  }
  return newArray;
}
