function mute() {
    document.getElementsByTagName("audio").muted = true;
    document.getElementById("unmute").hidden = false;
    document.getElementById("mute").hidden = true;
}
function unmute() {
    document.getElementsByTagName("audio").muted = false;
    document.getElementById("unmute").hidden = true;
    document.getElementById("mute").hidden = false;
}