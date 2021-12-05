var questionIndex =0;
var choicesBtn
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




//veriable to refrence DOM element 
var questionEl =document.getElementById("questions-list");
var theQuestionEl= document.getElementById("the-question");
var selectionEl =document.getElementById("selection");
var timerEl =document.getElementById("time");
var startBtn =document.getElementById("start");
var inputEl= document.getElementById("init");
var submitBtn =document.getElementById("submit");
var feedbackEl = document.getElementById("feedback")



//start the quiz
var startQuiz = function(){
    // hide the start-quize div
    var startQuizEl =document.getElementById("start-quiz");
    startQuizEl.setAttribute("class", "hide");

    //revel quastion
    questionEl.style.display ="block";
    //set timer
    //1- define timer veriable and returen the question lenghth array * 15 to get 75 second 
    //2- define a variable with Setinterval method that hvae function as unarrgument 
    //3- reduce the timer by one 
    //4- print the timer to the timer element by using textContent method
    var timer = questions.length * 15; 
  var time = setInterval(function(){
    timer--;
    timerEl.textContent=timer;
  },1000);
getQuestion();
}
// get question function 
var getQuestion = function(){
    // cleare the questionEl and selectionEl
    selectionEl.innerHTML="";
    //get cuurent question object from the array 
    var currentQuestion = questions[questionIndex];
    //update the-question with the current question 
    theQuestionEl.textContent=currentQuestion.question;
    // loop over the choices array 
    for (var i=0;i<= currentQuestion.choices.length; i++){
          //create new button for each choise
          choicesBtn = document.createElement("button");
          var choicesList =document.createElement("li");
          // choicesBtn.setAttribute("value",choice);
          choicesBtn.textContent = i + 1 + "." + currentQuestion.choices[i];
          console.log(choicesBtn);
          selectionEl.appendChild(choicesList);
          choicesList.appendChild(choicesBtn);
          choicesBtn.addEventListener("click",answerStatus);
    }
}
        //check the answerStatus 
        var answerStatus =function(choicesBtn){
            var correctAnswer = questions[questionIndex];
          if(choicesBtn.target.value===correctAnswer.answer){
              feedbackEl.style.display = "block";
              feedbackEl.textContent="Correct!"
          }else{
            feedbackEl.style.display = "block";
            feedbackEl.textContent="Wrong!"
          
          }
          questionIndex++;
          getQuestion();
        }
startBtn.addEventListener("click",startQuiz);


