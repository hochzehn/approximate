describe("approximate", function () {

    var power2 = function(input) {
        return Math.pow(2, input);
    };

    describe("when expected value inside given range", function() {
        it("should find correct input value when expected is matching with callback result", function () {
            expect(approximate(power2, 16, 0, 10)).toEqual(4);
        });

        it("should find correct input value on upper edge", function () {
            expect(approximate(power2, 16, 0, 4)).toEqual(4);
        });

        it("should find correct input value on lower edge", function () {
            expect(approximate(power2, 16, 4, 10)).toEqual(4);
        });

        describe("when expected cannot be matched with callback result", function() {
            it("should return false", function () {
                expect(approximate(power2, 17, 0, 10)).toEqual(false);
            });

            describe("when option flag set", function() {
                it("should return closest input", function () {
                    expect(approximate(power2, 17, 0, 10, true)).toEqual(4);
                });
            });
        })
    });

});
