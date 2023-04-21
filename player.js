let source = document.getElementById("source");
let sourceone = document.getElementById("sourceone");
let sourcetwo = document.getElementById("sourcetwo");
let playbutton = document.getElementById("playbutton");
let playbuttonone = document.getElementById("playbuttonone");
let playbuttontwo = document.getElementById("playbuttontwo");
let audio = document.getElementById("audio");

playbutton.addEventListener("click", function(){
    nextSong();
}, false);
playbuttonone.addEventListener("click", function(){
    secondSong();
}, false);
playbuttontwo.addEventListener("click", function(){
    thirdSong();
}, false);

function nextSong() {
            audio.setAttribute("src", "Blackbird Blackbird - Hawaii.mp3");
            audio.load();
            audio.play();
}
function secondSong() {
    audio.setAttribute("src", "Com Truise - Cyanide Sisters.mp3");
    audio.load();
    audio.play();
}
function thirdSong() {
    audio.setAttribute("src", "Best Coast - The Only Place.mp3");
    audio.load();
    audio.play();
}