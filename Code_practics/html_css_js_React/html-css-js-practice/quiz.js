var mintuesele = document.getElementById('mintues');
var secondsele = document.getElementById('seconds');
var tensele = document.getElementById('tens');
var  container = document.getElementById('container');
var  container2 = document.getElementById('container2');
var mintues = 0
var seconds = 0
var tens = 0
var flag = false;


function quiz_start() {
    flag = true;
    container2.style.visibility="visible"
    container.style.visibility="hidden"
    startTimer() 
    question.innerText = Questions[2].Q;
}







function startTimer() {
    if (flag == true) {
        tens++;
        if (tens == 59) {
            tens = 0
            seconds++
            if (seconds == 59) {
                mintues++
                seconds = 0
                tens = 0
            }
        }
        var mintuesstr = mintues;
        var secondsstr = seconds;
        var tensstr = tens;

        if (mintues < 10) {
            mintuesstr = "0" + mintuesstr
        }
        if (seconds < 10) {
            secondsstr = "0" + secondsstr
        }
        if (tens < 10) {
            tensstr = "0" + tensstr
        }
        mintuesele.innerHTML = mintuesstr;
        secondsele.innerHTML = secondsstr;
        tensele.innerHTML = tensstr;
        setTimeout("startTimer()", 1000)
    }


}




const Questions = [{
    id: 0,
    Q: "What is capital of India?",
    answer: [{ text: "gandhinagar"},
             { text: "Surat"},
             { text: "Delhi"},
             { text: "mumbai"}
           ]
           },
{
    id: 1,
    Q: "What is capital of India?",
    answer: [{ text: "gandhinagar"},
             { text: "Surat"},
             { text: "Delhi"},
             { text: "mumbai"}
           ]
           },
{
    id: 2,
    Q: "What is capital of India?",
    answer: [{ text: "gandhinagar"},
             { text: "Surat"},
             { text: "Delhi"},
             { text: "mumbai"}
           ]
           }

]


var start = true;


function iterate(id) {

 
var result = document.getElementsByClassName("result");
result[0].innerText = "";


const question = document.getElementById("question");



question.innerText = Questions[2].Q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})
