// questions array stored as objects 
var questions =[
    {
     question:"Commnly used data types Do NOT include",
     choices:["Strings", "Booleans", "Alerts", "Numbers"],
     answer:"Alerts"
    }, 
    {
        question:"The condition in an if/eles statment is enclosed with____.?",
        choices:["Quotes","Curly brackets", "Parentheses","Square brackets"],
        answer:"Parentheses"
    },
    {
        question:"Arrays in HavaScript can be user to store____.?",
        choices:["Numbers and Strings","Other arrys", "Bolleans", "All of the above"],
        answer:"All of the above"
    },
    {
        question:"String Values must be enclosed within ______ when being assigned to variables.",
        choices:["Commas","Curly brackets", "Quotes","Parentheses"],
        answer:"Quotes"
    },
    {
        question:"A very usful tool during development and debugging for printing content to the debugger is:",
        choices:["JavaScript","Terminal / Bush", "For loops","Console.log"],
        answer:"Console.log"
    }
];
//variable to keep track of the quiz
var timer=questions.length * 15; 
var questionIndex =0;
var time;
var score;
//variable to reference DOM element
var questionEl =document.getElementById("questions-list");
var theQuestionEl= document.getElementById("the-question");
var selectionEl =document.getElementById("selection");
var timerEl =document.getElementById("time");
var startBtn =document.getElementById("start");
var inputEl= document.getElementById("init");
var submitBtn =document.getElementById("submit");
var feedbackEl = document.getElementById("feedback");
var allDoneEl =document.getElementById("all-done");
var finalScoreEl=document.getElementById("time");
var clearBtn =document.getElementById("Clear");
var scoreEl = document.getElementById("sco");
var highScorEl = document.getElementById("highScorese");



//start the quiz
var startQuiz = function(){
    // hide the start-quize div
    var startQuizEl =document.getElementById("start-quiz");
    startQuizEl.setAttribute("class", "hide");

    //show quastions
    questionEl.style.display ="block";
    //set timer
   time = setInterval(timeLeft,1000);
   timerEl.textContent=timer;
//calling the question function 
getQuestion();
}
// get question function 
var getQuestion = function(){
   // clear the questionEl and selectionEl
    selectionEl.innerHTML="";
    //get current question object from the array
    var currentQuestion = questions[questionIndex];
    //update the question with the current question 
    theQuestionEl.textContent=currentQuestion.question;
    // loop over the choices array 
    for (var i=0;i<= currentQuestion.choices.length; i++){
          //create new button for each choise
          choicesBtn = document.createElement("button");
          var choicesList =document.createElement("li");
          // choicesBtn.setAttribute("value",choice);
          choicesBtn.textContent = i + 1 + "." + currentQuestion.choices[i];
          choicesBtn.setAttribute("value",currentQuestion.choices[i]);
          selectionEl.appendChild(choicesList);
          choicesList.appendChild(choicesBtn);
        //   choicesBtn.addEventListener("click",answerStatus);
        choicesBtn.onclick = answerStatus;
    }
}
        //check the answer Status
        var answerStatus =function(){
             // get current question object from array
            var correctAnswer = questions[questionIndex];
            //check the answer correctness
          if(this.value === correctAnswer.answer){
              //display the feedback element
              feedbackEl.style.display = "block";
              //display correct if the user answer the question 
              feedbackEl.textContent="Correct!"
          }else{
               //display the feedback element
            feedbackEl.style.display = "block";
             //display wrong if the user did not answer the question
            feedbackEl.textContent = "Wrong!";
            //reduce the time by 15 if the user did not answer the question
            timer-=15;
        }
        //get the next question
        questionIndex++;
        // check the question if it get to the last one  
        if(questionIndex ===questions.length){
            //if the question get to the last one then stop the quiz 
            stopQyiz();
        }else{
            // continue the question 
            getQuestion(); 
        }   
    }
    // function to stap the quiz 
    var stopQyiz=function(){
        // stop the timer 
        clearInterval(time);
        // display the end of the quiz screen 
        allDoneEl.style.display="block";
        // write the final timing 
        finalScoreEl.textContent =timer;
        // hide the question list 
        questionEl.style.display ="none";  
    }
// check time function 
var timeLeft =function(){
    //update time
    timer--;
    timerEl.textContent=timer;
    //check time 
    if (timer === 0){
        stopQyiz()
    }
}
// save highScore 
var saveScore =function(){
    // get the value of the input 
    var initials= inputEl.value.trim()
    //make sure there is initial
    if (initials !==""){
        // get saved scores from localstorage, or if not any, set to empty array
        var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
          // format new score object for current user
        var newScore ={
            score : timer,
            initials:initials
        };
          // save to localstorage
        highScores.push(newScore);
        window.localStorage.setItem("highScores",JSON.stringify(highScores));
         // redirect to next page
        window.location.href="./highscore.html";
        

    }
    
}

 // user clicks button to start quiz      
startBtn.addEventListener("click",startQuiz);
// user clicks button to submit initials
submitBtn.addEventListener("click",saveScore);
