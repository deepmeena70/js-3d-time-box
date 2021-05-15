const action = document.getElementById("action");
const cube = document.getElementById("cube");
const unbox = document.getElementById("unbox");
const innerLeft = document.getElementById("innerleft");
const innerBack = document.getElementById("innerback");
const innerright = document.getElementById("innerright");
var status = 0;
var unboxing = 0;

action.addEventListener("click", () => {
    if (status == 0) {
        action.innerHTML = 'Pause';
        status = 1;
        cube.style.animationPlayState = "running";

    } else {
        action.innerHTML = 'Play';
        cube.style.animation = "";
        status = 0;
    }
});

unbox.addEventListener('click', () => {
    if (unboxing == 0) {
        unbox.innerHTML = 'Close';
        unboxing = 1;
        document.getElementById("outercubetop").style.animation = "b_top 1s linear forwards";
        document.getElementById("inner_cube").style.animation = "innercube 1s linear forwards";
    } else {
        unbox.innerHTML = 'Open';
        unboxing = 0;
        document.getElementById("outercubetop").style.animation = "b_toprev 1s linear normal";
        document.getElementById("inner_cube").style.animation = "innercuberev 1s linear normal";
    }
});

function showTime() {
    let time = new Date();
    let year = time.getFullYear();
    let weeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let day = time.getDay();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    innerLeft.innerHTML = year;
    innerBack.innerHTML = weeks[day - 1];

    innerright.innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(showTime, 1000);