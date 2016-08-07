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

describe('babysitter earns $8/hour after bedtime', function(){
  it('should return $40 if start time is 6pm, bedtime is 5pm, and end is 10pm', function() {
    expect(calculateAfterBed(6, 5, 10)).toBe(32);
  });
  it('should return $28 if start time is 9pm and bedtime is 9pm and end is 12am', function() {
    expect(calculateAfterBed(9, 9, 12)).toBe(24);
  });
});

describe('babysitter earns $16/hour after midnight', function(){
  it('should return $48 if start time is 6pm and end is 3am', function() {
    expect(calculateAfterMidnight(6, 15)).toBe(48);
  });
  it('should return $32 if start time is 1am and end is 3am', function() {
    expect(calculateAfterMidnight(13, 15)).toBe(32);
  });
});

describe('babysitter earns a sum of all segments', function(){
  it('should return $68 if start time is 7pm, bedtime is 10pm, and end is 1am', function() {
    expect(finalInvoice(7, 10, 13)).toBe(68);
  });
  it('should return $88 if start time is 10pm, bedtime is 1am and end is 4am', function() {
    expect(finalInvoice(10, 13, 16)).toBe(88);
  });
});
