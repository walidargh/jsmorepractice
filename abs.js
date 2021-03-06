var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function askIfGreaterThan(el1, el2, callback) {
  reader.question(el1 + "greater than" + el2 + "?", function(response) {
    callback(response === "yes");
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if(i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i+1], function(response){
      if(response){
        var el1 = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = el1;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }

  if (i === (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if(madeAnySwaps){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}

testing
absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
