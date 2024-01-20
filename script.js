let turn = "X";
/*let board = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false
}*/
let counter = 0;

const mark = (btn_num) => {
    if (turn == "X" && document.getElementById(btn_num).innerHTML == "") {
        document.getElementById(btn_num).innerHTML = turn;
        turn = "O";
        updateButtonValues();
        gameWin();
        //board[btn_num] = true;
        counter += 1;
    }
    else if (turn == "O" && document.getElementById(btn_num).innerHTML == "") {
        document.getElementById(btn_num).innerHTML = turn;
        turn = "X";
        updateButtonValues();
        gameWin();
        //board[btn_num] = true;
        counter += 1;
    }
}

let b1, b2, b3, b4, b5, b6, b7, b8, b9;

const gameWin = () => {
    if (b1 == "X" && b2 == "X" && b3 == "X") {
        alert("Player X won the game!");
    } 
    else if (b4 == "X" && b5 == "X" && b6 == "X") {
        alert("Player X won the game!");
    } 
    else if (b7 == "X" && b8 == "X" && b9 == "X") {
        alert("Player X won the game!");
    } 
    else if (b1 == "X" && b4 == "X" && b7 == "X") {
        alert("Player X won the game!");
    } 
    else if (b2 == "X" && b5 == "X" && b8 == "X") {
        alert("Player X won the game!");
    } 
    else if (b3 == "X" && b6 == "X" && b9 == "X") {
        alert("Player X won the game!");
    } 
    else if (b1 == "X" && b5 == "X" && b9 == "X") {
        alert("Player X won the game!");
    } 
    else if (b3 == "X" && b5 == "X" && b7 == "X") {
        alert("Player X won the game!");
    }


    else if (b1 == "O" && b2 == "O" && b3 == "O") {
        alert("Player O won the game!");
    } 
    else if (b4 == "O" && b5 == "O" && b6 == "O") {
        alert("Player O won the game!");
    } 
    else if (b7 == "O" && b8 == "O" && b9 == "O") {
        alert("Player O won the game!");
    } 
    else if (b1 == "O" && b4 == "O" && b7 == "O") {
        alert("Player O won the game!");
    } 
    else if (b2 == "O" && b5 == "O" && b8 == "O") {
        alert("Player O won the game!");
    } 
    else if (b3 == "O" && b6 == "O" && b9 == "O") {
        alert("Player O won the game!");
    } 
    else if (b1 == "O" && b5 == "O" && b9 == "O") {
        alert("Player O won the game!");
    } 
    else if (b3 == "O" && b5 == "O" && b7 == "O") {
        alert("Player O won the game!");
    }

    /*else if (board == {1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true}) {
        alert("This game was a tie!");
    }*/
    else if (counter == 9) {
        alert("This game was a tie!");
    }
}

const updateButtonValues = () => {
    b1 = document.getElementById("1").innerHTML;
    b2 = document.getElementById("2").innerHTML;
    b3 = document.getElementById("3").innerHTML;
    b4 = document.getElementById("4").innerHTML;
    b5 = document.getElementById("5").innerHTML;
    b6 = document.getElementById("6").innerHTML;
    b7 = document.getElementById("7").innerHTML;
    b8 = document.getElementById("8").innerHTML;
    b9 = document.getElementById("9").innerHTML;
}