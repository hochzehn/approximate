describe("approximate", function () {

    var power2 = function(input) {
        return Math.pow(2, input);
    };

    it("should find correct input value when expected is matching with callback result", function () {
        expect(approximate(power2, 16, 0, 10)).toEqual(4);
    });

    it("should find correct input value on upper edge", function () {
        expect(approximate(power2, 16, 0, 4)).toEqual(4);
    });

    it("should find correct input value on lower edge", function () {
        expect(approximate(power2, 16, 4, 10)).toEqual(4);
    });

    it("should return false when expected cannot be matched with callback result", function () {
        expect(approximate(power2, 17, 0, 10)).toEqual(false);
    });

    xit("should find correct input value when expected is outside initial range", function () {
        expect(approximate()).toEqual(undefined);
    });

});
