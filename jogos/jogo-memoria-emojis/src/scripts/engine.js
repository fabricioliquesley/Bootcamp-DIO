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
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards.forEach((card) => card.classList.add('cardMatch'));
    } else {
        openCards.forEach((card) => card.classList.remove('open'))
    }

    openCards = [];

    if (document.querySelectorAll(".cardMatch").length === emotes.length) {
        alert("Você venceu !")
    }
}