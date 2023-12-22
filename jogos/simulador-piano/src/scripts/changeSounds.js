import { state } from "./state.js";

const instrumentsBtns = document.querySelectorAll(".instrumentBtn");

function changeSound(soundFolder) {
    state.folderSoundName = soundFolder;
}

instrumentsBtns.forEach(btn => {
    btn.addEventListener("click", () => changeSound(btn.dataset.sound));
})