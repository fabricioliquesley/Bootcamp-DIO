export const state = {
    folderSoundName: 'piano',
    mappedKeys: [],
    volume: .5,
    actions: {
        pianoKeys: document.querySelectorAll("#pianoKeys .key"),
        keysCheck: document.querySelector("#keysCheck"),
        VolumeSlider: document.querySelector(".volumeSlider"),
    }
}