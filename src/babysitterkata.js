//set up schedule range and payrate as objects to make these items easy to
// change without having to change the rest of the code
var scheduleRange = {
  start: 5,
  lateNight: 12,
  end: 16,
};

var payrate = {
  beforeBed: 12,
  sleeping: 8,
  afterMidnight: 16,
};

//Argument is a string formatted as a normal time "3:00" or "6:01PM" for example
//returns a number representing the amount the babysitter should be paid
function finalInvoice(startTime, bedTime, endTime) {
  var start = formatTime(startTime);
  var bedtime = formatTime(bedTime);
  var end = formatTime(endTime);
  if (start >= scheduleRange.start && end <= scheduleRange.end) {
    var pay = calculateBeforeBed(start, bedtime) +
    calculateAfterBed(start, bedtime, end) + calculateAfterMidnight(start, end);
    return pay;
  }
}

//Argument is a string formatted as a normal time "3:00" or "6:01PM" for example
//returns a one or two digit number
function formatTime(time) {
  if (time.indexOf('00') === -1) {
    time = Number(time.split(':').shift()) + 1;
  } else {
    time = Number(time.split(':').shift());
  }

  if (time < 5) {
    time = time + 12;
  }

  return time;
}

//arguments should be numbers
//returns a number
var calculateBeforeBed = function (start, bedtime) {
  var beforeBedEarned;
  if (bedtime > start && bedtime <= scheduleRange.lateNight) {
    beforeBedEarned = (bedtime - start) * payrate.beforeBed;
    return beforeBedEarned;
  } else if (bedtime > scheduleRange.lateNight) {
    beforeBedEarned = (scheduleRange.lateNight - start) * payrate.beforeBed;
    return beforeBedEarned;
  } else {
    return 0;
  }
};

//arguments should be numbers
//returns a number
var calculateAfterBed = function (start, bedtime, end) {
  var afterBedEarned;
  if (bedtime > start && bedtime <= scheduleRange.lateNight && bedtime <= end) {
    afterBedEarned = (scheduleRange.lateNight - bedtime) * payrate.sleeping;
    return afterBedEarned;
  } else if (bedtime <= start && end <= scheduleRange.lateNight) {
    afterBedEarned = (end - start) * payrate.sleeping;
    return afterBedEarned;
  } else if (bedtime <= start && end > scheduleRange.lateNight) {
    afterBedEarned = (scheduleRange.lateNight - start) * payrate.sleeping;
    return afterBedEarned;
  } else {
    return 0;
  }
};

//argument should be a number
//returns a number
var calculateAfterMidnight = function (start, end) {
  var lateNightEarned;
  if (end > scheduleRange.lateNight && start <= scheduleRange.lateNight) {
    lateNightEarned = (end - scheduleRange.lateNight) * payrate.afterMidnight;
    return lateNightEarned;
  } else if (end > scheduleRange.lateNight && start > scheduleRange.lateNight) {
    lateNightEarned = (end - start) * payrate.afterMidnight;
    return lateNightEarned;
  } else {
    return 0;
  }
};
