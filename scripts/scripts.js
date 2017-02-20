//Calculate area of triangle using Heron's Formula
//Heron's formula: Calculate s. s = (a+b+c)/2
//Now calculate area. A = SquareRoot(s(s-a)(s-b)(s-c)
//If triangle is impossible, throw an error.

function CalculateTriangleArea() {
    var one = parseInt(document.getElementById("side1").value);
    var two = parseInt(document.getElementById("side2").value);
    var three = parseInt(document.getElementById("side3").value);

    var sum = one + two + three;
    var s = (one + two + three) / 2;
    var s1 = s - one;
    var s2 = s - two;
    var s3 = s - three;
    var aSquared = s * s1 * s2 * s3;

    var A = Math.sqrt(aSquared);
    if (isNaN(A)) {
        document.getElementById("answer1").innerHTML = "Invalid Triangle";
    } else {
        document.getElementById("answer1").innerHTML = "Your Triangle Area is: " + A;
    }
}

function RandomNumberGame() {
    var number = parseInt(document.getElementById("number").value);
    if (number < 1 || number > 10) {
        document.getElementById("answer2").innerHTML = "Bad guess! Guess between 1 and 10. Try Again.";
    } else {
        var random = Math.floor(Math.random() * 10);
        while (random == 0) {
            random = Math.floor(Math.random() * 10);
        }
        if (number == random) {
            document.getElementById("answer2").innerHTML = "Correct! The number was " + random;
        } else {
            document.getElementById("answer2").innerHTML = "Incorrect! The number was " + random;
        }
    }
}

function FindDaysTilChristmas() {
    today = new Date();
    var cmas = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth() == 11 && today.getDate() > 25) {
        cmas.setFullYear(cmas.getFullYear() + 1);
    }
    var one_day = 1000 * 60 * 60 * 24;
    document.getElementById("answer3").innerHTML = (Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) +
    " days left until Christmas!");
}