document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("game-board");
    const squares = [];
    const battleshipIndex = Math.floor(Math.random() * 9); 

    for (let i = 0; i < 9; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.dataset.index = i;
        square.addEventListener("click", () => checkGuess(square, battleshipIndex));
        board.appendChild(square);
        squares.push(square);
    }
});

function checkGuess(square, battleshipIndex) {
    const index = parseInt(square.dataset.index);
    
    if (index === battleshipIndex) {
        square.classList.add("correct");
        alert("Congratulations,You sunk the battleship! 🎉🎊🍾");
    } else {
        square.classList.add("incorrect");
        alert("Let's try that again!");
    }
}