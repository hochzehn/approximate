/* approximate v0.1.0 https://github.com/hochzehn/approximate */
var approximate = function(calculation, expectedResult, inputRangeFrom, inputRangeTo, noExactMatchRequired) {
    var currentInputRangeFrom = inputRangeFrom;
    var currentInputRangeTo = inputRangeTo;
    var currentInput;
    var currentOutput;
    function step() {
        // console.log("range:     " + currentInputRangeFrom + " ... " + currentInputRangeTo);
        currentInput = Math.ceil(currentInputRangeFrom + (currentInputRangeTo - currentInputRangeFrom) / 2);
        // console.log("calc with: " + currentInput);
        currentOutput = calculation(currentInput);
        // console.log("result: " + currentOutput + ", expecting " + expectedResult);
        if (currentOutput == expectedResult) {
            // console.log("OK, cool, found the result.");
            return currentInput;
        }
        if (currentInputRangeFrom == currentInput && currentInputRangeTo == currentInput) {
            // console.log("Search range lower and upper already set to " + currentInput + " - cannot match expected value.");
            if (noExactMatchRequired) {
                return currentInput;
            }
            return false;
        }
        if (currentOutput > expectedResult) {
            if (currentInputRangeTo == currentInput) {
                // console.log("Search range upper already set to " + currentInput + " - adjusting to match range lower.");
                currentInputRangeTo = currentInputRangeFrom;
            } else {
                // console.log("Setting range upper to " + currentInput);
                currentInputRangeTo = currentInput;
            }
        } else if (currentOutput < expectedResult) {
            if (currentInputRangeFrom == currentInput) {
                // console.log("Search range lower already set to " + currentInput + " - adjusting to match range upper.");
                currentInputRangeFrom = currentInputRangeTo;
            } else {
                // console.log("Setting range lower to " + currentInput);
                currentInputRangeFrom = currentInput;
            }
        }
    }
    var result;
    do {
        result = step();
    } while (result === undefined);
    return result;
};