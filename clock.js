function Clock () {
  var d = new Date();
  this.hours = d.getHours();
  this.minutes = d.getMinutes();
  this.seconds = d.getSeconds();

  this.printTime();
  setInterval(this._tick.bind(this), 1000);
}

Clock.prototype.printTime = function () {
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};

Clock.prototype._tick = function () {
  if(this.seconds === 59){
    this.seconds = 0;
    this.minutes++;
    if(this.minutes === 59){
      this.minutes = 0;
      this.hours++;
      if(this.hours === 23){
        this.hours = 0;
      }
    }
  } else {
    this.seconds++;
  }

  this.printTime();
};

var clock = new Clock();
