let homeScoreEl = document.getElementsByClassName("score")[0];
let guestScoreEl = document.getElementsByClassName("score")[1];
let leaderEl = document.getElementById("leader");
let hScore = 0;
let gScore = 0;

function updateLeader() {
    if (hScore > gScore) {
        leaderEl.textContent = "Lead:Home";
    }
    else if (hScore < gScore) {
        leaderEl.textContent = "Lead:Guest";
    }
    else {
        leaderEl.textContent = "Draw";
    }
}

function addScore(team, points) {
    if (team == "home") {
        hScore += points;
        homeScoreEl.textContent = hScore;
    }
    else {
        gScore += points;
        guestScoreEl.textContent = gScore;
    }
    updateLeader();
}

function newgame() {
    hScore = 0;
    gScore = 0;
    homeScoreEl.textContent = hScore;
    guestScoreEl.textContent = gScore;
    updateLeader();
}


function homeAdd1() {
    addScore("home", 1);
}

function homeAdd2() {
    addScore("home", 2);
}

function homeAdd3() {
    addScore("home", 3);
}

function guestAdd1() {
    addScore("guest", 1);
}

function guestAdd2() {
    addScore("guest", 2);
}

function guestAdd3() {
    addScore("guest", 3);
}

