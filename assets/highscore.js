 //set score
 var scores = function(){
    //git score from localStorage or set to empty array
    var score = JSON.parse(window.localStorage.getItem("highScores")) || [];
    //sort the score
    score.sort(function(a,b){
        return b.score - a.score
    })
   // loop the new stored store
    for (var i = 0; i<score.length; i++){
        // create li items 
        var liItems= document.createElement("li");
        // create orderlist element
        var olEl =document.getElementById("highScoreList");
        // write the score and the initials inside the li items 
        liItems.textContent=score[i].initials + ":" + score[i].score;
        // display the list 
        olEl.appendChild(liItems);

    }
    // function to clear the score 
    var clearScore = function(){
        // delete the localStorage
        localStorage.clear();
        //hide the orderlist
        olEl.style.display="none";
}
//redefine the clear button 
clearBtn=document.getElementById("Clear");
// listen to the click to clear the score 
clearBtn.addEventListener("click",clearScore);
// function that back to the quiz 
var restart =function(){
    //redirect the page to the first html 
    window.location.href="./index.html";
}
//redefine the back button
var BackBtn = document.getElementById("Back");
// listen to the click to execute the function
BackBtn.addEventListener("click",restart);
 }
scores();

