let start = document.querySelector('.btn');
let boxes = document.querySelectorAll('.box');
let marks = document.querySelectorAll('.mark');
let player = document.querySelector('.player');
let win = document.querySelector('.win');
let step = 1;
//step 1 is X, step 0 is O

start.addEventListener('click', () => {
    step = 1;
    player.innerHTML = "крест";

    for (let a of marks) {
        a.innerHTML = "";
    }

    let figures = document.querySelectorAll('.figure');
    for(let a of figures){
        a.remove();
    }


    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', stepPlayers);
        boxes[i].classList.add('move');
    }
    win.innerHTML = "";
})








// boxes[0].append(circle);
// boxes[1].append(cross);

function createCross(){
    let cross = document.createElement('img');
    cross.classList.add("cross","figure");
   
    cross.src = "img/cross.png";
    return cross;
}

function createCircle(){
    let circle = document.createElement('img');
    circle.classList.add("circle","figure");
    circle.src = "img/circle.png";
    return circle;
}

function stepPlayers() {

    if (step) {
        this.append(createCross());
        marks[this.id].innerHTML = "X";
        step = 0;
        player.innerHTML = "ноль";
    }
    else {
        this.append(createCircle());
        marks[this.id].innerHTML = "O";
        step = 1;
        player.innerHTML = "крест";
    }
    this.removeEventListener('click', stepPlayers);
    this.classList.remove('move');
    if (iswin(fromonetwoarr())) {
        offbuttons();
    }
}

function offbuttons() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener('click', stepPlayers);
    }
}

function fromonetwoarr() {
    let twoarr = [];
    let arr = [];
    let mark = 0;
    for (let i = 0; i < marks.length; i++) {
        arr.push(marks[i].innerHTML);
        mark++;
        if (mark % 3 == 0) {
            twoarr.push(arr);
            arr = [];
        }
    }
    return twoarr;
}


function iswin(twoarr) {
    for (let i = 0; i < 3; i++) { //горизонтальные линии
        if ((twoarr[i][0] === twoarr[i][1]) && (twoarr[i][1] === twoarr[i][2])) {
            if (twoarr[i][0] == "X") {
                win.innerHTML = "Победили крестики";
                return true;
            }
            else {
                if (twoarr[i][0] == "O") {
                    win.innerHTML = "Победили нолики";
                    return true;
                }
            }
        }
    }
    for (let i = 0; i < 3; i++) { //вертикальные линии
        if ((twoarr[0][i] === twoarr[1][i]) && (twoarr[1][i] === twoarr[2][i])) {
            if (twoarr[0][i] == "X") {
                win.innerHTML = "Победили крестики";
                return true;
            }
            else {
                if (twoarr[0][i] == "O") {
                    win.innerHTML = "Победили нолики";
                    return true;
                }
            }
        }
    }

    if ((twoarr[0][0] === twoarr[1][1]) && (twoarr[1][1] === twoarr[2][2])) {
        if (twoarr[0][0] == "X") {
            win.innerHTML = "Победили крестики";
            return true;
        }
        else {
            if (twoarr[0][0] == "O") {
                win.innerHTML = "Победили нолики";
                return true;
            }
        }
    }

    if ((twoarr[0][2] === twoarr[1][1]) && (twoarr[1][1] === twoarr[2][0])) {
        if (twoarr[0][2] == "X") {
            win.innerHTML = "Победили крестики";
            return true;
        }
        else {
            if (twoarr[0][2] == "O") {
                win.innerHTML = "Победили нолики";
                return true;
            }
        }
    }
}



