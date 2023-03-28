const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const box = document.querySelector(".play-pause");

box.addEventListener("click", function() {
    if(play.style.display == "none") {
        play.style.display = "block";
        pause.style.display = "none";
    } else {
        play.style.display = "none";
        pause.style.display = "block";
    }
});