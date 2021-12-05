var currentchoicesIndex =0;
var questions =[
    {
     question:"Commnly used data types Do NOT include",
     choices:["Strings", "Booleans", "Alerts", "Numbers"],
     answer:"alerts"
    }, 
    {
        question:"The condition in an if/eles statment is enclosed with____.?",
        choices:["Quotes","Curly brackets", "Parentheses","Square brackets"],
        answer:"parentheses"
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
        answer:"console.log"
    }
];




//veriable to refrence DOM element 
var questionEl =document.getElementById("questions-list");
var selectionEl =document.getElementById("selection");
var timerEl =document.getElementById("time");
var startBtn =document.getElementById("start");
var inputEl= document.getElementById("init");
var submitBtn =document.getElementById("submit");



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

    // loop over the question array 
    for (var i=0;i< questions.length; i++){
        questionEl.textContent=questions[i].question;
    }
         //create new button for each choise
         var choicesBtn = document.createElement("button");
         // choicesBtn.setAttribute("value",choice);
         choicesBtn.innerHTML=questions[i]+ questions.choices;
         //create li element
         var listItem= document.createElement("li");
         selectionEl.appendChild(listItem);
         listItem.appendChild(choicesBtn);
}
startBtn.addEventListener("click",startQuiz);
