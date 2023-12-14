import { emotes } from "../scripts/emotes.js"

let cardsContainer = document.querySelector('.game')

let openCards = [];

let shuffleEmojis = emotes.sort(() => (Math.random() > 0.5) ? 2 : -1);

shuffleEmojis.forEach((emote) => {
    let card = document.createElement('div');

    card.classList.add(['card'],['flex']);
    card.innerHTML = emote;

    cardsContainer.append(card);
})