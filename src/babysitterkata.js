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
