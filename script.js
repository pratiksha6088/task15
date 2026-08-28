// Dummy array
let numbers = [4, 2, 11, 6, 7, 10];


// Display array
document.getElementById("array").innerHTML =
    "Array: [" + numbers.join(", ") + "]";


// 1. Find maximum number
function findMaximum(arr) {

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}


// 2. Calculate sum
const calculateSum = function(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
};


// 3. Count odd numbers
const countOdd = (arr) => {

    let count = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {
            count++;
        }
    }

    return count;
};


// Display result
function showResult() {

    let maximum = findMaximum(numbers);

    let sum = calculateSum(numbers);

    let oddNumbers = countOdd(numbers);


    // Console output
    console.log("Array:", numbers);
    console.log("Maximum number:", maximum);
    console.log("Sum of all elements:", sum);
    console.log("Count of odd numbers:", oddNumbers);


    // Webpage output
    document.getElementById("output").innerHTML =

        "<div class='result'>" +
        "<b>Maximum number:</b> " + maximum + "<br>" +
        "<b>Sum of all elements:</b> " + sum + "<br>" +
        "<b>Count of odd numbers:</b> " + oddNumbers +
        "</div>";
}

