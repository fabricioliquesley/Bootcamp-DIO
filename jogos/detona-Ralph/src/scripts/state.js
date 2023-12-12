export const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        score: document.querySelector("#score"),
        timeLeft: document.querySelector("#time"),
        lives: document.querySelector("#lives"),
    },
    values: {
        gameVelocity: 1000,
        hitPosition: 0,
        score: 0,
        lives: 3,
        currentTime: 60
    },
    actions: {
        timerId: null,
        countDownTimerId: null,
    }
}