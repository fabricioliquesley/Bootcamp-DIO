export const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        score: document.querySelector("#score"),
        timeLeft: document.querySelector("#time"),
        lives: document.querySelector("#lives"),
        countDownContainer: document.querySelector('.countDown')
    },
    values: {
        gameVelocity: 1000,
        hitPosition: 0,
        score: 0,
        lives: 3,
        currentTime: 60,
        durationCountDow: 3
    },
    actions: {
        timerId: null,
        countDownTimerId: null,
        countDownToStartId: null,
    }
}