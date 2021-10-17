function halfNumber(x) {
    "use strict";

    if (isNaN(x)) {
        const errorMessage = "Invalid argument. Need a number argument.";
        window.console.log(errorMessage);
        throw new Error(errorMessage);
    } else {
        var result = x / 2;
        window.console.log("Half of " + String(x) + " is " + String(result) + ".");
        window.document.write("Half of " + String(x) + " is " + String(result) + ".");
        window.document.write("");
        window.document.write("<br>");
        return result;
    }
}

halfNumber(9);



function squareNumber(x) {
    "use strict";

    if (isNaN(x)) {
        const errorMessage = "Invalid argument. Need a number argument.";
        window.console.log(errorMessage);
        throw new Error(errorMessage);
    } else {
        var result = x * x;
        window.console.log("The result of squaring the number " + String(x) + " is " + String(result) + ".");
        window.document.write("The result of squaring the number " + String(x) + " is " + String(result) + ".");
        window.document.write("<br>");
        return result;
    }
}

squareNumber(7);



function percentOf(x, y) {
    "use strict";

    if (isNaN(x) && isNaN(y)) {
        const errorMessage = "Invalid argument. Need a number argument.";
        window.console.log(errorMessage);
        throw new Error(errorMessage);
    } else {
        var result = Math.round(x / y * 100);
        window.document.write(String(x) + " is " + String(result) + "% of " + String(y) + ".");
        window.console.log(String(x) + " is " + String(result) + "% of " + String(y) + ".");
        window.document.write("<br>");
        return result;
    }
}

percentOf(25, 70);


function findModulus(x, y) {
    "use strict";

    if (isNaN(x) && isNaN(y)) {
        const errorMessage = "Invalid argument. Need a number argument.";
        window.console.log(errorMessage);
        window.document.log(errorMessage);
        throw new Error(errorMessage);
    } else {
        var result = x % y;
        window.console.log(String(result) + " is the modulus of " + String(x) + " and " + String(y) + ".");
        window.document.write(String(result) + " is the modulus of " + String(x) + " and " + String(y) + ".");
        window.document.write("<br>");
        return result;
    }
}

findModulus(8, 10);
findModulus(3, 8);

// 5.	Create a JavaScript function that accepts a certain amount of numbers as parameters. 
//Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.
function sumNumbers() {
    "use strict";
    var sum = 0;
    var numberCollection = window.prompt("Enter numbers delimited by a comma for addition");
    numberCollection = numberCollection.split(",");
    for (var i=0; i < numberCollection.length; i++) {
        sum += parseInt(numberCollection[i]);
    }

    window.console.log("Sum of the numbers in "+numberCollection + " is: " +String(sum));
    window.document.write("Sum of the numbers in "+numberCollection + " is: " +String(sum));
    window.document.write("<br>");3

    return sum;
}

sumNumbers();