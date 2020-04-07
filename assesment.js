// select all elements

const assesment = document.getElementById("assesment");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [{
        question: "Do you have High fever?",
        choiceA: "Yes",
        choiceB: "No",
        correct: "A"
    }, {
        question: "Do you have headache?",
        choiceA: "Yes",
        choiceB: "No",
        correct: "A"
    }, {
        question: "Do you have sore throat?",
        choiceA: "Yes",
        choiceB: "No",
        correct: "A"
    },
    {
        question: "Do you sneezing or dry cough?",
        choiceA: "Yes",
        choiceB: "No",
        correct: "A"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";

    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
}



// start Assesment
function startAssesment() {
    message.style.display = "none"; //to hide the message div
    start.style.display = "none";
    renderQuestion();
    assesment.style.display = "block";
    renderProgress();
}

// render progress
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// checkAnswer

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to red danger
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to green safe
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the assesment and show the score
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = " #f00";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);

    var result = document.createElement('p');
    result.innerText = scorePerCent + "%";

    var scoremsg = document.createElement('h5');

    // choose the massage and font color based on the scorePerCent
    if (scorePerCent >= 75) {
        scoremsg.innerText = "based on your answer we highly recommend you to take test for covid-19 immediately and isolate your self until that"
        scoremsg.style.color = "red";
    } else if (scorePerCent >= 50) {
        scoremsg.innerText = "based on your answer you probably infected with the virus you may be u need to test for covid 19. call 952 or 8335";
        scoremsg.style.color = "yellow";
    } else if (scorePerCent >= 25) {
        scoremsg.innerText = "your probablity is very low apply basic protective measures for more call 952 0r 8335";
        scoremsg.style.color = "blue";
    } else {
        scoremsg.innerText = "based on your answer you look safe & stay home apply basic protective measures";
        scoremsg.style.color = "green";
    }


    document.getElementById('scoreContainer').appendChild(scoremsg);
    document.getElementById('scoreContainer').appendChild(result);

};


//add event listners here 

document.getElementById("start").addEventListener("click", startAssesment);