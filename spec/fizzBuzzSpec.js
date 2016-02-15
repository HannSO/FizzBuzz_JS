describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
   fizzBuzz = new FizzBuzz();
  });

  it('returns "fizz" when passed 3', function() {
  	expect(fizzBuzz.play(3)).toEqual('fizz');
  });
});
