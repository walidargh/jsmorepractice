var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback) {
  this.sum = sum;
  this.numsLeft = numsLeft;

  if (numsLeft === 0) {
    completionCallback(this.sum);
  }
  else {
    reader.question("Give me a number", function (numString1) {
      var num1 = parseInt(numString1);
      this.sum += num1;
      console.log(this.sum);
      addNumbers(this.sum, this.numsLeft - 1, completionCallback);
    });

  }

}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
