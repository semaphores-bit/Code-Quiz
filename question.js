// select all elements
const start = document.getElementById("start");
const text = document.getElementById("text");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create questions
questions = [
    {
        question : "Commonly used data types DO NOT include:",
        choiceA : "strings",
        choiceB : "booleans",
        choiceC : "alert",
        choiceD : "numbers",
        correct : "C"
    },{
        question : "The condition in an if/else statement is enclosed within ______.",
        choiceA : "quotes",
        choiceB : "curly brackets",
        choiceC : "parentheses",
        choiceD : "square brackets",
        correct : "C"
    },{
        question : "Which sign does jQuery use as a shortcut for jQuery?",
        choiceA : "the $ sign",
        choiceB : "the ? sign",
        choiceC : "the % sign",
        choiceD : "the # sign",
        correct : "A"
    },{
        question : "Which jQuery method is used to hide selected elements?",
        choiceA : "hide()",
        choiceB : "display(none)",
        chocieC : "hidden()",
        choiceD : "visible(false)",
        correct : "A"
    },{
        question : "Inside which HTML element do we put the JavaScript?",
        choiceA : "scripting",
        choiceB : "javascript",
        choiceC : "js",
        choiceD : "script",
        correct : "D"
    }

];

function countdown(seconds) {
    var seconds = 60;
    function tick() {
        var timeLeft = document.getElementById(timeLeft);
        var current_seconds = mins - 1
        seconds--;
        timeLeft.innerHTML = current_seconds.toString() + ":" + (seconds)
    }
}
// create some variables

const lastQuestion = questions.length - 1;
runningQuestion = 0;
count = 0;
score = 0;
const gaugeWidth = 150;
const questionTime = 10;
const gaugeUnit = gaugeWidth/questionTime;
let TIMER;




// render a question
function renderQuestion(){
    q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    text.style.display = "none";
    par.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); 
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++;
    }else{
        count = 0;
   
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}


// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
 
        score++;
       
        answerIsCorrect();
    }else{
        
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(timer);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    

    img = (scorePerCent >= 80) ? "img/5.png" :
    (scorePerCent >= 60) ? "img/4.png" :
    (scorePerCent >= 40) ? "img/3.png" :
    (scorePerCent >= 20) ? "img/2.png" :
    "img/1.png";
    
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}





