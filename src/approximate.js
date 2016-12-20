var approximate = function (calculation, expectedResult, inputRangeFrom, inputRangeTo) {
    var currentInputRangeFrom = inputRangeFrom;
    var currentInputRangeTo = inputRangeTo;

    var currentInput;
    var currentOutput;

    function step() {
        console.log("range:     " + currentInputRangeFrom + " ... " + currentInputRangeTo);

        currentInput = Math.ceil(currentInputRangeFrom + (currentInputRangeTo - currentInputRangeFrom) / 2);

        console.log("calc with: " + currentInput);

        currentOutput = calculation(currentInput);

        console.log("result: " + currentOutput + ", expecting " + expectedResult);

        if (currentOutput == expectedResult) {
            console.log("OK, cool, found the result.");
            return currentInput;
        }

        if (currentOutput > expectedResult) {
            console.log("Setting range upper to " + currentInput);
            currentInputRangeTo = currentInput;
        } else if (currentOutput < expectedResult) {
            console.log("Setting range lower to " + currentInput);
            currentInputRangeFrom = currentInput;
        }
    }

    var result;
    do {
        result = step();
    } while (!result);

    return result;
};
