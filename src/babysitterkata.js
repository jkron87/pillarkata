var scheduleRange = {
  start: 5,
  lateNight: 12,
  end: 16,
}

var payrate = {
  beforeBed: 12,
  sleeping: 8,
  afterMidnight: 16
}

var calculateBeforeBed = function (start, bedtime) {
    if (bedtime > start && bedtime <= scheduleRange.lateNight){
    var beforeBedEarned = (bedtime - start) * payrate.beforeBed;
    return beforeBedEarned;
  } else if (bedtime > scheduleRange.lateNight) {
    var beforeBedEarned = (scheduleRange.lateNight - start) * payrate.beforeBed;
    return beforeBedEarned;
  } else {
    return 0;
  }
};

var calculateAfterBed = function (start, bedtime, end) {
  if (bedtime > start && bedtime <= scheduleRange.lateNight && bedtime <= end) {
    var afterBedEarned = (bedtime - start) * payrate.sleeping;
    return afterBedEarned;
  } else if (bedtime <= start && end <= scheduleRange.lateNight){
    afterBedEarned = (end - start) * payrate.sleeping;
    return afterBedEarned;
  } else if (bedtime <= start && end > scheduleRange.lateNight){
    afterBedEarned = (scheduleRange.lateNight - start) * payrate.sleeping;
    return afterBedEarned;
  }
  else {
    return 0;
  }
};

var calculateAfterMidnight = function (start, end) {
  if (end > scheduleRange.lateNight && start <= scheduleRange.lateNight) {
    var lateNightEarned = (end - scheduleRange.lateNight) * payrate.afterMidnight;
    return lateNightEarned;
  } else if (end > scheduleRange.lateNight && start > scheduleRange.lateNight) {
    lateNightEarned = (end - start) * payrate.afterMidnight;
    return lateNightEarned;
  } else {
    return 0;
  }
}



function formatTime(time){
  if (time.indexOf('00') === -1){
    time = Number(time.split(":").shift()) + 1;
  } else {
    time = Number(time.split(":").shift());
  }
  if (time < 5) {
    time = time + 12;
  }
  return time;
};
