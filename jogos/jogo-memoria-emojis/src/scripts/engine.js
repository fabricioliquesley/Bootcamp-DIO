import { emotes } from "../scripts/emotes.js";
import { currentTimeValues, timer } from "./timer.js";

let cardsContainer = document.querySelector('.game')

let openCards = [];

let victoryAlert = {
    alert: document.querySelector('.victoryAlert'),
    totalTime: document.querySelector('#totalTime'),

    open: function () {
        this.alert.showModal();
        this.totalTime.textContent = `Tempo total gasto: ${String(currentTimeValues.currentTimeMinutes).padStart(2, '0')}:${String(currentTimeValues.currentTimeSeconds).padStart(2, '0')}`
    },

    close: function () {
        this.alert.close();
    }
}

let shuffleEmojis = emotes.sort(() => (Math.random() > 0.5) ? 2 : -1);

shuffleEmojis.forEach((emote) => {
    let card = document.createElement('div');

    card.classList.add(['card'], ['flex']);
    card.innerHTML = emote;
    card.onclick = handleClick;

    cardsContainer.append(card);
})

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("open");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

let timerId = setInterval(() => timer(currentTimeValues.currentTimeSeconds, currentTimeValues.currentTimeMinutes), 1000)

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards.forEach((card) => card.classList.add('cardMatch'));
    } else {
        openCards.forEach((card) => card.classList.remove('open'))
    }

    openCards = [];

    if (document.querySelectorAll(".cardMatch").length === emotes.length) {
        clearInterval(timerId);
        victoryAlert.open()
    }
}

document.querySelector('#resetButton').addEventListener('click', () => {
    window.location.reload()

    victoryAlert.close();
})