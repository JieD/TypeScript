var expect = chai.expect;

describe("Point2D", function() {
  describe("initialization", function() {
    it("should have default values", function() {
      var pt = new Point2D();
      expect(pt.x).to.equal(0);
      expect(pt.y).to.equal(0);
    });
  });

  describe("#distance", function() {
    it("should return correct distance", function() {
      var pt0 = new Point2D();
      var pt1 = new Point2D();
      pt0.x = 4;
      pt0.y = 3;
      pt1.x = 2;
      pt1.y = 5;
      expect(pt0.distance(pt1)).to.equal(2);

      pt0.x = 0;
      pt0.y = 0;
      pt1.x = 3;
      pt1.y = 4;
      expect(pt0.distance(pt1)).to.equal(5);
    });
  });
});