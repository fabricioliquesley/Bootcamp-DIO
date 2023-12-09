export const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        score: document.querySelector("#score"),
        timeLeft: document.querySelector("#time"),
        lives: document.querySelector("#lives"),
    },
    values: {
        timerId: null,
        gameVelocity: 1000,
        hitPosition: 0,
        score: 0
    }
}