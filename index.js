let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');
let updatedHomeScore = 0;
let updatedGuestScore = 0;

function add1Point() {
    let updatedScore = updatedHomeScore += 1;
    homeScore.textContent = updatedScore;
}


function add2Points() {
    let updatedScore = updatedHomeScore += 2;
    homeScore.textContent = updatedScore;
}

function add3Points() {
    let updatedScore = updatedHomeScore += 3;
    homeScore.textContent = updatedScore;

}


function GuestAdd1Point() {
    let updatedScore = updatedGuestScore += 1;
    guestScore.textContent = updatedScore;
}


function GuestAdd2Points() {
    let updatedScore = updatedGuestScore += 2;
    guestScore.textContent = updatedScore;
}

function GuestAdd3Points() {
    let updatedScore = updatedGuestScore += 3;
    guestScore.textContent = updatedScore;

}