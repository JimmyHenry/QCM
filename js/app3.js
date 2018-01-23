function check() {
    "use strict";
    var score = 0;
    var q1 = document.querySelector("[name=q1]:checked").value;
    console.log(q1);
    var q2 = document.querySelector("[name=q2]:checked").value;
    var q3 = document.querySelector("[name=q3]:checked").value;
    var q4 = document.querySelector("[name=q4]:checked").value;

    if (q1 === "b") {
        score += 1;
    }
    if (q2 === "a") {
        score += 1;
    }

    if (q3 === "a") {
        score += 1;
    }
    if (q4 === "b") {
        score += 1;
    }


    alert("You got " + score + " marks")

}
if (true) {

}
