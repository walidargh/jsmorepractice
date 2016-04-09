function HanoiGame () {
  this.stacks = [ [3, 2, 1], [], [] ];
}

var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

HanoiGame.prototype.promptMove = function(callback, completionCallback) {
  reader.question("From which tower?", function (numString1) {
    reader.question("To which tower?", function (numString2) {
      var startRod = parseInt(numString1);
      var endRod = parseInt(numString2);

      callback(startRod, endRod, completionCallback);
    });
  });
};

HanoiGame.prototype.isValidMove = function(startRod, endRod) {
  var startArray = this.stacks[startRod];
  var endArray = this.stacks[endRod];

  if(startArray.length === 0) {
    return false;
  }
  if(endArray.length === 0){
    return true;
  }
  if(endArray[endArray.length - 1] > startArray[startArray.length - 1]){
    return true;
  }
  else{
    return false;
  }
};

HanoiGame.prototype.move = function(startRod, endRod, completionCallback) {
  if(this.isValidMove(startRod, endRod)){
    this.stacks[endRod].push(this.stacks[startRod].pop());
    this.run(completionCallback);
  }
};

HanoiGame.prototype.print = function() {
  console.log(JSON.stringify(this.stacks));
};

HanoiGame.prototype.isWon = function() {
  var secondStack = this.stacks[1];
  var thirdStack = this.stacks[2];
  console.log("checking isWon");

  if (secondStack === [3, 2, 1] || thirdStack === [3, 2, 1]){
    console.log("isWon returning true");
    return true;
  }
  else {
    console.log("isWon returning false");
    return false;
  }
};

HanoiGame.prototype.run = function(completionCallback) {
  this.print();
  if(this.isWon()){
    console.log("Game over");
    completionCallback();
  }
  else {
    this.promptMove(this.move.bind(this), completionCallback);
  }
};

var game = new HanoiGame;

game.run(function() {
  console.log("Game over");
  reader.close();
});
