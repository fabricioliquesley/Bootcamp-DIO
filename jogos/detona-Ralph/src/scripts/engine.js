import { state } from "./state.js";


function chooseRandomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    })

    // gera um numero entre 1 e 9
    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];

    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function countdown() {
    if (state.values.currentTime > 0) {
        state.values.currentTime--;
    }
    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0) {
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        alert("game over pontuação: " + state.values.score);
    }
}

function playSound() {
    let hitAudio = new Audio("./src/audios/hit.m4a");

    hitAudio.volume = 0.02;
    hitAudio.play();
}

state.actions.countDownTimerId = setInterval(countdown, 1000);

function moveEnemy() {
    state.actions.timerId = setInterval(chooseRandomSquare, state.values.gameVelocity);
}

function addListenerBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.score++;

                state.view.score.textContent = state.values.score;
                state.values.hitPosition = null;
                playSound();
            }
        })
    })
}

// Função inicial
function main() {
    moveEnemy();
    addListenerBox();
}

main();