// Create gameBoard array
let gameBoard = ['X', 'X', 'O', 'X', 'X', 'X','X', 'X', 'X'];

// Declare grid cell variables
const cell0 = document.getElementById('cell0');
const cell1 = document.getElementById('cell1');
const cell2 = document.getElementById('cell2');
const cell3 = document.getElementById('cell3');
const cell4 = document.getElementById('cell4');
const cell5 = document.getElementById('cell5');
const cell6 = document.getElementById('cell6');
const cell7 = document.getElementById('cell7');
const cell8 = document.getElementById('cell8');


const displayController = (function () {
    const genBoard = () => {
        cell0.textContent = gameBoard[0];
        cell1.textContent = gameBoard[1];
        cell2.textContent = gameBoard[2];
        cell3.textContent = gameBoard[3];
        cell4.textContent = gameBoard[4];
        cell5.textContent = gameBoard[5];
        cell6.textContent = gameBoard[6];
        cell7.textContent = gameBoard[7];
        cell8.textContent = gameBoard[8];
    }

    const choiceX = () => {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        genBoard();
    }

    const choiceO = () => {
        let randomChoice = Math.floor(Math.random() * 9);
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameBoard[randomChoice] = 'O';
        genBoard();
    }

    return {genBoard, choiceX, choiceO};
}) ();

displayController.genBoard();