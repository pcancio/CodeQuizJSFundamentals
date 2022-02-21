// grab elements from dom
let highScoreList = document.querySelector("highScores");
let clearScores = document.querySelector("#clear-highscores");

// show scores
runScores();

function runScores() {
    storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        scoreList = storedScores;
    }
    renderScores(scoreList);
}

function clearAll() {
    window.localStorage.clear();
}

function renderScores(storedScores) {

    if (storedScores !== null) {
        storedScores.sort((a, b) => {
            return b.newScore - a.newScore;
        });

        for (i = 0; i < scoreList.length; i++) {
            let scoreListItem = scoreList[i];
            let tr = document.createElement("tr");
            let nameCell = document.createElement("td");
            let nameCellText = document.createTextNode(scoreListItem.name);
            let scoreCell = document.createElement("td");
            let scoreCellNum = document.createTextNode(scoreListItem.newScore);

            tr.setAttribute("tr-index", i);
            document.getElementById("highScores").appendChild(tr);
            tr.appendChild(nameCell);
            nameCell.appendChild(nameCellText);
            tr.appendChild(scoreCell);
            scoreCell.appendChild(scoreCellNum);
        }
    }
}

clearScores.addEventListener("click", () => {
    clearAll();
    window.location.href = "scores.html";
});