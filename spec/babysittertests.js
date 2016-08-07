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
