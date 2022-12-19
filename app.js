// Create gameBoard array
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const allCells = document.querySelectorAll('.gameboard-container > button');

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

// Display Board Module
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

    const resetBoard = () => {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        genBoard();
    }

    const choiceX = () => {
        let playerOne = Player('X');
        let playerTwo = Player('O');
        
        // Create Board
        genBoard();
        playerOne.makePlayerMove();
    }

    const choiceO = () => {
        let playerOne = Player('O');
        let playerTwo = Player('X');

        // Create Board
        genBoard();
        playerTwo.makeComputerMove();
    }

    return {genBoard, resetBoard, choiceX, choiceO};
}) ();


const Player = (choice) => {
    const playerChoice = choice;

    const checkWin = () => {
        if ((gameBoard[0] == choice && gameBoard[1] == choice && gameBoard[2] == choice) ||
            (gameBoard[3] == choice && gameBoard[4] == choice && gameBoard[5] == choice) ||
            (gameBoard[6] == choice && gameBoard[7] == choice && gameBoard[8] == choice) ||
            (gameBoard[0] == choice && gameBoard[3] == choice && gameBoard[6] == choice) ||
            (gameBoard[1] == choice && gameBoard[4] == choice && gameBoard[7] == choice) ||
            (gameBoard[2] == choice && gameBoard[5] == choice && gameBoard[8] == choice) ||
            (gameBoard[1] == choice && gameBoard[4] == choice && gameBoard[8] == choice) ||
            (gameBoard[2] == choice && gameBoard[4] == choice && gameBoard[6] == choice)) {
                displayController.resetBoard();
                return true;
            } else {
                return false;
            }
    }

    const checkEndGame = (arr) => {
        for (var i=0; i<arr.length; i++) {
            if (arr[i] === '') {
                return false;
            }
            displayController.resetBoard();
            return true;
        }
    }

    const makePlayerMove = () => {
        allCells.forEach(button => {
            button.addEventListener('click', () => {
                let buttonID = button.id;
                let buttonIndex = parseInt(buttonID.slice(-1));
                if (gameBoard[buttonIndex] === '') {
                    gameBoard[buttonIndex] = choice;
                    displayController.genBoard();
                    checkWin();
                    checkEndGame(gameBoard);
                    makeComputerMove();
                } else {
                    makePlayerMove();
                }
            })
        })
    }

    const makeComputerMove = () => {
        let randomChoice = Math.floor(Math.random() * 9);
        while (gameBoard[randomChoice] != '') {
            randomChoice = Math.floor(Math.random() * 9);
        }

        let computerChoice = choice;
        
        gameBoard[randomChoice] = computerChoice;
        displayController.genBoard();
        checkWin();
        checkEndGame(gameBoard);
        makePlayerMove();
    }
    

    return {playerChoice, checkWin, checkEndGame, makePlayerMove, makeComputerMove};
}

