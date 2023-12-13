export let state = {
    view: {
        squares: null,
        enemy: null,
        score: null,
        timeLeft: null,
        lives: null,
    },
    values: {
        gameVelocity: 500,
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
        moveEnemyTimer: null,
    }
}