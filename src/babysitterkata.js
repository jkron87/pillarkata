var scheduleRange = {
  start: 5,
  end: 16,
}

var payrate = {
  beforeBed: 12,
  sleeping: 8,
  afterMidnight: 16
}

var calculateBeforeBed = function (start, bedtime) {
    if (bedtime > start && bedtime < 12){
    var beforeBedEarned = (bedtime - start) * payrate.beforeBed;
    return beforeBedEarned;
  } else if (bedtime > 12) {
    var beforeBedEarned = (12 - start) * payrate.beforeBed;
    return beforeBedEarned;
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
