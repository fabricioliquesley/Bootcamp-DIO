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

function moveEnemy(){
    state.values.timerId = setInterval(chooseRandomSquare, state.values.gameVelocity);
}

function addListenerBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition){
                state.values.score++;

                state.view.score.textContent = state.values.score;
                state.values.hitPosition = null;
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