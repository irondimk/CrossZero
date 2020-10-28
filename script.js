let start = document.querySelector('.btn');

let boxes = document.querySelectorAll('.parent');
let marks = document.querySelectorAll('.mark');
let player = document.querySelector('.player');
let win = document.querySelector('.win');
let step = 1;
//step 1 is X, step 0 is O


start.addEventListener('click', ()=>{
    step = 1;
    player.innerHTML = "крест";

    for(let a of marks){
        a.innerHTML = "";
    }

    for(let i = 0; i < boxes.length; i++){
        // boxes[i].addEventListener('click', () => stepPlayers(i));
        boxes[i].addEventListener('click', stepPlayers);
}
})

function stepPlayers(){

    if(step){
        marks[this.id].innerHTML = "X";
        step = 0;
        player.innerHTML = "ноль";
    }
    else{
        marks[this.id].innerHTML = "O";
        step = 1;
        player.innerHTML = "крест";
    }
    this.removeEventListener('click', stepPlayers);
    if(iswin(fromonetwoarr())){
        offbuttons();
    }
}

// function stepPlayers(i){

//         if(step){
//             marks[i].innerHTML = "X";
//             step = 0;
//             player.innerHTML = "ноль";
//         }
//         else{
//             marks[i].innerHTML = "O";
//             step = 1;
//             player.innerHTML = "крест";
//         }
//         this.removeEventListener('click', () => stepPlayers(i));
//         if(iswin(fromonetwoarr())){
            
//             offbuttons();
//         }
// }




function offbuttons(){
    console.log(999);
    for(let i = 0; i < boxes.length; i++){
        boxes[i].removeEventListener('click', stepPlayers);
}
}

 function fromonetwoarr(){
    let twoarr = [];
    let arr = [];
    let mark = 0;
    for(let i = 0; i < marks.length; i++){
        arr.push(marks[i].innerHTML);
        mark++;
        if(mark % 3 == 0){
            twoarr.push(arr);
            arr = [];
        }
    }
    
    return twoarr;
}


function iswin(twoarr){
    for(let i = 0; i < 3; i++){ //горизонтальные линии
        if((twoarr[i][0] === twoarr[i][1]) && (twoarr[i][1] === twoarr[i][2])){
            if(twoarr[i][0] == "X"){
                win.innerHTML = "Победили крестики";
                return true;
            }
            else{
                if(twoarr[i][0] == "O"){
                    win.innerHTML = "Победили нолики";
                    return true;
                }
            }
        }   
    }
    for(let i = 0; i < 3; i++){ //вертикальные линии
        if((twoarr[0][i] === twoarr[1][i]) && (twoarr[1][i] === twoarr[2][i])){
            if(twoarr[0][i] == "X"){
                win.innerHTML = "Победили крестики";
                return true;
            }
            else{
                if(twoarr[0][i] == "O"){
                    win.innerHTML = "Победили нолики";
                    return true;
                }
            }
        }   
    }
    if((twoarr[0][0] === twoarr[1][1]) && (twoarr[1][1] === twoarr[2][2])){
        if(twoarr[0][0] == "X"){
            win.innerHTML = "Победили крестики";
            return true;
        }
        else{
            if(twoarr[0][0] == "O"){
                win.innerHTML = "Победили нолики";
                return true;
            }
        }
    }

    if((twoarr[0][2] === twoarr[1][1]) && (twoarr[1][1] === twoarr[2][0])){
        if(twoarr[0][2] == "X"){
            win.innerHTML = "Победили крестики";
            return true;
        }
        else{
            if(twoarr[0][2] == "O"){
                win.innerHTML = "Победили нолики";
                return true;
            }
        }
    }
}



















let been = document.querySelector('.been');
been.addEventListener('click', addtext);


function addtext(){
    
    this.removeEventListener('click', addtext);
}