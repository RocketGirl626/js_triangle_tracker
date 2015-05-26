describe('triangleTracker', function() {
  it("returns 'equilateral' when all the sides of a triangle are equal", function() {
    expect(triangleTracker([3, 3, 3])).to.equal('equilateral');
  });

  it ("return 'isoceles' if 2 sides but not 3 are equal", function() {
    expect(triangleTracker([3,2,2])).to.equal('isosceles');
  });

  it ("return 'scalene' if no sides but are equal", function() {
    expect(triangleTracker([13,9,14])).to.equal('scalene');
  });

  it ("return 'not a triangle' if sides are not valid", function() {
    expect(triangleTracker([25,9,14])).to.equal('not a triangle');
  });
});
