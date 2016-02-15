describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
   fizzBuzz = new FizzBuzz();
  });

  it('returns "fizz" when passed 3', function() {
  	expect(fizzBuzz.play(3)).toEqual('fizz');
  });


  it('returns "buzz" when passed 5', function() {
    expect(fizzBuzz.play(5)).toEqual('buzz');
  })


  it('returns returns "fizzbuzz" when passed 15', function () {
    expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
  })

  it('returns 7 when passed 7', function () {
    expect(fizzBuzz.play(7)).toEqual(7);
  })
});
