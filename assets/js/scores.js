var contentId = document.getElementById("content")
var titleH1 = document.createElement("h1")
titleH1.textContent = "View your High Scores!"
contentId.appendChild(titleH1);
var orderedList = document.createElement("ol")
orderedList.setAttribute("id", "scores")
contentId.appendChild(orderedList);
var olTag = document.getElementById("scores");

// Displaying Scores here from big to small
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

// Displays buttons to go back to the quiz or clear the high score list
var btnDiv = document.createElement("div");
btnDiv.setAttribute("id", "nav");
contentId.appendChild(btnDiv);

var btnSpan = document.createElement("span");
btnSpan.setAttribute("id", "buttons")
document.getElementById("nav").appendChild(btnSpan)

var goBackBtn = document.createElement("button");
goBackBtn.setAttribute("id", "go-back");
goBackBtn.textContent = "Go Back"
document.getElementById("buttons").appendChild(goBackBtn);

var clearListBtn = document.createElement("button");
clearListBtn.setAttribute("id", "clear-list");
clearListBtn.textContent = "Clear List"
document.getElementById("buttons").appendChild(clearListBtn);

document.getElementById("go-back").addEventListener("click", function () {
    location.href = "index.html";

});

document.getElementById("clear-list").addEventListener("click", function () {

    while (olTag.firstChild) olTag.removeChild(olTag.firstChild)

    localStorage.clear();

});
