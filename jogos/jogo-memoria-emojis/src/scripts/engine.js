import { emotes } from "../scripts/emotes.js"

let cardsContainer = document.querySelector('.game')

let openCards = [];

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

function checkMatch() {
    
}