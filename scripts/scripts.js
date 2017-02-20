//Calculate area of triangle using Heron's Formula
//Heron's formula: Calculate s. s = (a+b+c)/2
//Now calculate area. A = SquareRoot(s(s-a)(s-b)(s-c)
//If triangle is impossible, throw an error.

var title;
var author;
var readingStatus;

var student = {
    name: "Sam Jackson",
    class: "C#",
    courseno: 1501
};

function CreateJQObjects() {
    title = $('.booktitle');
    author = $('.author');
    readingStatus = $('.readingStatus');
    console.log(title);
    console.log(author);
    console.log(readingStatus);
}


function JavascriptObject() {
    if (student.name == null && student.class == null && student.courseno == null) {
        console.log("There is no data in the student entry.");
    } else {
        console.log("Here is the student's information logged to the console:");
        if (student.name != null) {
            console.log(student.name);
        }
        if (student.class != null) {
            console.log(student.class);
        }
        if (student.courseno != null) {
            console.log(student.courseno);
        }
    }

}

function DeleteName() {
    delete student.name;
    console.log("Student name deleted!");
    JavascriptObject();
}

function DeleteClass() {
    delete student.class;
    console.log("Student class deleted!");
    JavascriptObject();
}

function DeleteCourseNo() {
    delete student.courseno;
    console.log("Student course number deleted!");
    JavascriptObject();
}

function LogJQueryObjects() {
    // for (i = 0; i < title.length; i++) {} **WIL TRY TO MAKE DYNAMIC LENGTH LATER
    if (readingStatus.get(0).outerText == "Read") {
        console.log("Already read " + title.get(0).outerText + " by " + author.get(0).outerText + ".");
    } else {
        console.log("You still need to read " + title.get(0).outerText + " by " + author.get(0).outerText + ".");
    }

    if (readingStatus.get(1).outerText == "Read") {
        console.log("Already read " + title.get(1).outerText + " by " + author.get(1).outerText + ".");
    } else {
        console.log("You still need to read " + title.get(1).outerText + " by " + author.get(1).outerText + ".");
    }

    if (readingStatus.get(2).outerText == "Read") {
        console.log("Already read " + title.get(2).outerText + " by " + author.get(2).outerText + ".");
    } else {
        console.log("You still need to read " + title.get(2).outerText + " by " + author.get(2).outerText + ".");
    }
}

function isNumberCloseTo100() {
    var number = document.getElementById("usernumber").value;
    console.log(number);
    if (number < 90) {
        return false;
    }
    if (number % 100 == 0) {
        return true;
    } else if (number % 100 >= 90) {
        return true;
    } else if (number % 100 <= 10) {
        return true;
    } else {
        return false;
    }
}

function TestNumber() {
    if (isNumberCloseTo100() == true) {
        document.getElementById("answer2").innerHTML = "The number is close to 100";
    } else {
        document.getElementById("answer2").innerHTML = "The number is not close to 100";
    }
}