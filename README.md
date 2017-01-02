# approximate

## Installation

### Bower

    bower install --save approximate

## Usage

Include `bower_components/approximate/dist/approximate.min.js`.

    // Of course Math.pow is easily reversible, just as an example.
    var power2 = function(input) {
        return Math.pow(2, input);
    };
    
    var requiredInput = approximate(power2, 16, 0, 10);
                                                ^--^------ search range of possible input values (min, max)
                                             ^------------ expected calculation output
                                       ^---- calculation that you cannot reverse easily, 
                                             but want to find input value by given output
                                             
    console.log(requiredInput);
    // prints 4

You can also allow close-enough values to be returned by passing `true` as fifth parameter:

    // prints false
    console.log(approximate(power2, 9, 0, 10));
    
    // prints 3 (2^3 = 8 - closest to 9)
    console.log(approximate(power2, 9, 0, 10, true));

## Run tests

    bin/test.sh
    
Code coverage report can be found in `coverage/PhantomJS 2.1.1 (Linux 0.0.0)/index.html` (HTML) as well as `coverage/clover.xml` (Clover XML).

## Publish
    
    bin/dist/dist.sh
