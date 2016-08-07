describe('jasmine test', function(){
  it('true should be true', function() {
    expect(true).toBe(true);
  });

});

describe('time should be rounded up', function(){
  it('should return 8 when time is 7:01', function() {
    expect(formatTime('7:01')).toBe(8);
  });
  it('should return 7 when time is 7:00)', function() {
    expect(formatTime('7:00')).toBe(7);
  });
});

describe('time should be a number', function(){
  it('the type of time should equal a number', function() {
    expect(typeof(formatTime('9:40'))).toEqual('number');
  });
});

describe('twelve should be added to the time if less than 5', function(){
  it('should return 13 if time is 1:00', function() {
    expect(formatTime('1:00')).toBe(13);
  });
  it('should return 14 if time is 1:01', function() {
    expect(formatTime('1:01')).toBe(14);
  });
});

describe('babysitter earns $12/hour before bedtime', function(){
  it('should return $24 if start time is 5pm and bedtime is 7pm', function() {
    expect(calculateBeforeBed(5, 7)).toBe(24);
  });
  it('should return $36 if start time is 9pm and bedtime is 1am', function() {
    expect(calculateBeforeBed(9, 13)).toBe(36);
  });
});
