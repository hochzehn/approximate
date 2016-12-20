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

    xit("should find closest input value when expected is not exactly matching with callback result", function () {
        expect(approximate()).toEqual(undefined);
    });

    xit("should find correct input value when expected is outside initial range", function () {
        expect(approximate()).toEqual(undefined);
    });

});
