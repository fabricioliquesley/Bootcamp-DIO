import { state } from "./state.js";

const instrumentsBtns = document.querySelectorAll(".instrumentBtn");

function changeSound(soundFolder) {
    state.folderSoundName = soundFolder;
}

function removeAddClassActive(btn) {
    btn.classList.add("active");

    for (let i = 0; i < instrumentsBtns.length; i++) {
        if (instrumentsBtns[i] !== btn) {
            instrumentsBtns[i].classList.remove("active");
        }
    }
}

instrumentsBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        changeSound(btn.dataset.sound)

        removeAddClassActive(btn);
    });
})