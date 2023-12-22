import "./changeSounds.js";
import { state } from "./state.js";

const pianoKeys = document.querySelectorAll("#pianoKeys .key");
const keysCheck = document.querySelector("#keysCheck");
const VolumeSlider = document.querySelector(".volumeSlider");

let mappedKeys = [];
let volume;

const playTune = (folder, key) => {
    let audio = new Audio(`./src/audios/${folder}/${key}.wav`);
    
    audio.play();
    audio.volume = volume ?? .5;
}

pianoKeys.forEach((key) => {
    let keyData = key.dataset.key;

    key.addEventListener("click", () => playTune(state.folderSoundName, keyData));
    mappedKeys.push(keyData);
});

document.addEventListener("keydown", (event) => {
    let keyPress = event.key;

    if (!mappedKeys.includes(keyPress)) return;

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

keysCheck.addEventListener("change", () => {
    let letter = document.querySelectorAll(".letter");

    letter.forEach(letter => letter.classList.toggle("hide"));
});

VolumeSlider.addEventListener("input", () => {
    volume = (VolumeSlider.value) / 100;
});