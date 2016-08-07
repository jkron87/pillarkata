describe('jasmine test', function(){
  it('true should be true', function() {
    expect(true).toBe(true);
  });

});


describe('time should be rounded up', function(){
  it('should return 4 when time is 3:01', function() {
    expect(formatTime('7:01')).toBe(8);
  });

});
