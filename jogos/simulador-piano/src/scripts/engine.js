import "./changeSounds.js";
import { state } from "./state.js";

const playTune = (folder, key) => {
    let audio = new Audio(`./src/audios/${folder}/${key}.wav`);
    
    audio.play();
    audio.volume = state.volume;
}

state.actions.pianoKeys.forEach((key) => {
    let keyData = key.dataset.key;

    key.addEventListener("click", () => playTune(state.folderSoundName, keyData));
    state.mappedKeys.push(keyData);
});

document.addEventListener("keydown", (event) => {
    let keyPress = event.key;

    if (!state.mappedKeys.includes(keyPress)) return;

    playTune(state.folderSoundName, keyPress);

    let clickedKey = document.querySelector(`[data-key="${keyPress}"]`);

    if (clickedKey.classList.contains("whiteKey")) {
        clickedKey.classList.add("active");

        setTimeout(() => {
            clickedKey.classList.remove("active");
        }, 150);
    } else {
        clickedKey.classList.add("active");

        setTimeout(() => {
            clickedKey.classList.remove("active");
        }, 150);
    }
});

state.actions.keysCheck.addEventListener("change", () => {
    let letter = document.querySelectorAll(".letter");

    letter.forEach(letter => letter.classList.toggle("hide"));
});

state.actions.VolumeSlider.addEventListener("input", () => {
    state.volume = (state.actions.VolumeSlider.value) / 100;
});