document.addEventListener("DOMContentLoaded", function() {
    const audio = new Audio("assets/background.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();
});