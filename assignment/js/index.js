function mute() {
    var audio = document.getElementById("backplay");
    audio.muted = true;
    var muteButton = document.getElementById("mute");
    muteButton.src = "unmute.png";
    muteButton.onclick = unmute;
}
function unmute() {
    var audio = document.getElementById("backplay");
    audio.muted = false;
    var muteButton = document.getElementById("mute");
    muteButton.src = "mute.png";
    muteButton.onclick = mute;
}