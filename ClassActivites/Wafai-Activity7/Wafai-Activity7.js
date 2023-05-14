var names = [];
var scores = [];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
    $("name").focus(); // Set focus on the Name field
};

function displayResults() {
    var average = 0;
    var highestScore = 0;
    
    for (var i = 0; i < scores.length; i++) {
        average = (average * i + scores[i]) / (i + 1);
        if (scores[i] > highestScore) {
            highestScore = scores[i];
        }
    }
    
    var resultsDiv = $("results");
    resultsDiv.innerHTML = "<h2>Results</h2><br />Average score is " + average.toFixed(2) + "<br />Highest score is " + highestScore + "<br />";
}

function displayScores() {
    var scoresTable = $("scores_table");
    scoresTable.innerHTML = "<h2>Scores</h2>";
	
    var headerRow = scoresTable.insertRow(0);
    
    var nameHeader = document.createElement("th");
    nameHeader.textContent = "NAMES";
    nameHeader.style.fontWeight = "bold";
	nameHeader.style.paddingRight = "100px";
    headerRow.appendChild(nameHeader);
    
    var scoreHeader = document.createElement("th");
    scoreHeader.textContent = "SCORE";	
	scoreHeader.style.paddingRight = "100px";
    scoreHeader.style.fontWeight = "bold";
    headerRow.appendChild(scoreHeader);
    
    for (var i = 0; i < names.length; i++) {
        var row = scoresTable.insertRow(i + 1);
        var nameCell = row.insertCell(0);
        var scoreCell = row.insertCell(1);
        
        nameCell.textContent = names[i];
        scoreCell.textContent = scores[i];
    }
}

function addScore() {
    var nameInput = $("name");
    var scoreInput = $("score");
    
    var name = nameInput.value.trim();
    var score = parseInt(scoreInput.value);
    
    if (name === "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score.");
        return;
    }
    
    names.push(name);
    scores.push(score);
    
    nameInput.value = ""; // Clear the input fields
    scoreInput.value = "";
    nameInput.focus(); // Set focus back to the Name field
}