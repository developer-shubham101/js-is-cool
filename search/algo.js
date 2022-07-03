

function createRandomArray(upto = 20) {
  var arr = [];

  for (var i = 0, t = upto; i < t; i++) {
    arr.push(Math.round(Math.random() * 99))
  }
  return arr;
}



var staticArray = [3, 24, 2, 4, 56, 26, 55, 23, 543];
// var staticArray = createRandomArray();

var sortedArray = bubbleSortArray([...staticArray]);

// console.log(staticArray.sort((a, b) => a - b).toString());
console.log(sortedArray.toString());

console.log(binarySearch(sortedArray, 543));





//O(n^2)
function bubbleSortArray(array) {
  for (let index = 0; index < array.length; index++) {
    for (let index2 = index + 1; index2 < array.length; index2++) {
      const nextVal = array[index2];
      const currentVal = array[index];
      if (currentVal > nextVal) {
        array[index2] = currentVal;
        array[index] = nextVal;
      }
    }
  }
  return array;
}



function binarySearch(sortedArray, valueNeedToFind) {


  var firstIndex = 0;
  var lastIndex = sortedArray.length - 1;

  while (lastIndex >= firstIndex) {
    console.log({ firstIndex, lastIndex, midIndex });
    var midIndex = firstIndex + (Math.floor((lastIndex - firstIndex) / 2));
    console.log({ firstIndex, lastIndex, midIndex });
    if (sortedArray[midIndex] === valueNeedToFind) {
      return midIndex;
    }

    if (sortedArray[midIndex] > valueNeedToFind) {
      lastIndex = midIndex - firstIndex;
    }

    if (sortedArray[midIndex] < valueNeedToFind) {
      firstIndex = midIndex + 1;
    }
    console.log({ firstIndex, lastIndex, midIndex });
    console.log();
  }
  return -1;
}