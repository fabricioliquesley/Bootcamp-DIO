import { state } from "./state.js";
import { Router } from "./router.js";

let router = new Router();

router.add('/start', "/src/pages/game.html");

let shuffledSquares = [];

function shuffleSquares() {
    shuffledSquares = [...state.view.squares].sort(() => Math.random() - 0.5);
}

function chooseRandomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    })

    if (shuffledSquares.length === 0){
        shuffleSquares();
    }

    const nextSquare = shuffledSquares.pop();
    nextSquare.classList.add("enemy");
    state.values.hitPosition = nextSquare.id;
}

function resetStateValues() {
    state.values.gameVelocity = 500
    state.values.hitPosition = 0
    state.values.score = 0
    state.values.lives = 3
    state.values.currentTime = 60
    state.values.durationCountDow = 3
    state.actions.timerId = null
    state.actions.countDownTimerId = null
    state.actions.countDownToStartId = null
    state.actions.moveEnemyTimer = null
}

function gameOver() {
    const gameOverModal = {
        modal: document.querySelector('#gameOverModal'),
        finalScore: document.querySelector('#finalScore'),
        backMenuBtn: document.querySelector('#backMenu'),
        restartBtn: document.querySelector('#restart'),

        open: function () {
            this.finalScore.textContent = state.values.score;

            this.modal.showModal();
        },

        close: function () {
            this.modal.close();
        }
    }

    clearInterval(state.actions.countDownTimerId);
    clearInterval(state.actions.timerId);

    gameOverModal.open()

    gameOverModal.backMenuBtn.addEventListener('click', () => {
        router.handle();

        resetStateValues();
        document.body.classList.toggle('isRunning');

        gameOverModal.close();
    })

    gameOverModal.restartBtn.addEventListener('click', () => {
        router.route();

        resetStateValues();
        document.body.classList.toggle('isRunning');

        state.actions.countDownToStartId = setInterval(countDownToStar, 1000);
    })
}

function countdown() {
    if (state.values.currentTime > 0) {
        state.values.currentTime--;
    }

    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0) {
        gameOver();
    }
}

function playSound() {
    let hitAudio = new Audio("./src/audios/soco.mp3");

    hitAudio.volume = 0.1;
    hitAudio.play();
}

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
            } else {
                let lives = state.values.lives -= 1;

                state.view.lives.textContent = lives;

                if (lives == 0) {
                    gameOver();
                }
            }
        })
    })
}

export function countDownToStar() {
    let number = document.querySelector('#number')

    if (state.values.durationCountDow > 0) {
        state.values.durationCountDow -= 1;

        number.textContent = state.values.durationCountDow;
    } else {
        clearInterval(state.actions.countDownToStartId);
        document.querySelector('.game').style.display = 'block';
        document.querySelector('.countDown').style.display = 'none'

        main();
    }
}

// Função inicial
function main() {
    document.body.classList.toggle('isRunning');

    state.view.squares = document.querySelectorAll(".square"),
        state.view.enemy = document.querySelector(".enemy"),
        state.view.score = document.querySelector("#score"),
        state.view.timeLeft = document.querySelector("#time"),
        state.view.lives = document.querySelector("#lives"),

        state.actions.countDownTimerId = setInterval(countdown, 1000);

    moveEnemy();
    addListenerBox();
}