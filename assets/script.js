
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
var time = questions.length * 20;



//veriable to refrence DOM element 
// var questionsEl =docoment.getElementById("questions");
var timerEl =document.getElementById("time");
var startBtn =document.getElementById("start");
var inputEl= document.getElementById("init");
var submitBtn =document.getElementById("submit");

//start the quiz
var startQuiz = function(){
    // hide the start-quize div
    var startQuizEl = document.getElementsById("start-quiz");
    startQuizEl.setAttribute("calss", "hide");
}
startBtn.addEventListener("click",startQuiz());
