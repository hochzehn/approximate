describe("approximate", function () {

    it("should find correct input value when expected is matching with callback result", function () {
        var expectedResult = 16; // 2^4
        var expectedInput  = 4;

        var calculation = function(input) {
            return Math.pow(2, input);
        };

        var inputRangeFrom = 0;
        var inputRangeTo   = 20;

        expect(approximate(
            calculation, expectedResult, inputRangeFrom, inputRangeTo
        )).toEqual(expectedInput);
    });

    it("should find correct input value on upper edge", function () {
        var expectedResult = 16; // 2^4
        var expectedInput  = 4;

        var calculation = function(input) {
            return Math.pow(2, input);
        };

        var inputRangeFrom = 0;
        var inputRangeTo   = 4;

        expect(approximate(
            calculation, expectedResult, inputRangeFrom, inputRangeTo
        )).toEqual(expectedInput);
    });

    it("should find correct input value on lower edge", function () {
        var expectedResult = 16; // 2^4
        var expectedInput  = 4;

        var calculation = function(input) {
            return Math.pow(2, input);
        };

        var inputRangeFrom = 4;
        var inputRangeTo   = 20;

        expect(approximate(
            calculation, expectedResult, inputRangeFrom, inputRangeTo
        )).toEqual(expectedInput);
    });

    it("should return false when expected cannot be matched with callback result", function () {
        var expectedResult = 17;

        var calculation = function(input) {
            return Math.pow(2, input);
        };

        var inputRangeFrom = 0;
        var inputRangeTo   = 20;

        expect(approximate(
            calculation, expectedResult, inputRangeFrom, inputRangeTo
        )).toEqual(false);
    });

    xit("should find correct input value when expected is outside initial range", function () {
        expect(approximate()).toEqual(undefined);
    });

});
