var contentId = document.getElementById("content")
var titleH1 = document.createElement("h1")
titleH1.textContent = "View your High Scores!"
contentId.appendChild(titleH1);
var orderedList = document.createElement("ol")
orderedList.setAttribute("id", "scores")
contentId.appendChild(orderedList);
var olTag = document.getElementById("scores");

// this renders the scores from highest to lowest
var highScoreList = JSON.parse(localStorage.getItem("highScores"));

if (highScoreList == null) {

    highScoreList = [];

} else {

    for (var i = 0; i < highScoreList.length; i++) {

        var scoreItem = document.createElement("li");
        scoreItem.setAttribute("id", i);
        scoreItem.textContent = highScoreList[i].initials + ": " + highScoreList[i].score
        olTag.appendChild(scoreItem);

    }
}

// this renders buttons 
var btnDiv = document.createElement("div");
btnDiv.setAttribute("id", "nav");
contentId.appendChild(btnDiv);

var btnSpan = document.createElement("span");
btnSpan.setAttribute("id", "buttons")
document.getElementById("nav").appendChild(btnSpan)

// this is the go back to the game button
var goBackBtn = document.createElement("button");
goBackBtn.setAttribute("id", "go-back");
goBackBtn.textContent = "Go Back to the Quiz"
document.getElementById("buttons").appendChild(goBackBtn);

// this is the clear high scores button
var clearListBtn = document.createElement("button");
clearListBtn.setAttribute("id", "clear-list");
clearListBtn.textContent = "Clear High Scores"
document.getElementById("buttons").appendChild(clearListBtn);

document.getElementById("go-back").addEventListener("click", function () {
    location.href = "index.html";

});

document.getElementById("clear-list").addEventListener("click", function () {

    while (olTag.firstChild) olTag.removeChild(olTag.firstChild)

    localStorage.clear();

});
