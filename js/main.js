const choices = [...document.querySelectorAll(".image")];
const playerScore = document.querySelector(".playerScore");
const aiScore = document.querySelector(".aiScore");
const start = document.querySelector(".start");
const result = document.querySelector(".result");

let score = 0
let scoreAi = 0

const game = {
    playerHand: "",
    aiHand: "",
}

function playerChoice() {
    if ((score === 3) || (scoreAi === 3)) {
        score = 0
        scoreAi = 0
        playerScore.textContent = score;
        aiScore.textContent = scoreAi;
    }
    // result.textContent = "";
    game.playerHand = this.dataset.name
    console.log(game.playerHand);
    choices.forEach((choice) => {
        choice.style.backgroundColor = '';
        this.style.backgroundColor = 'goldenrod';
        choice.style.color = '';
        this.style.color = 'black';

    })
}

aiChoice = () => {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index].dataset.name;

}

win = () => {
    if (score < 2) {
        ++score;
        playerScore.textContent = score;
        aiScore.textContent = scoreAi;
        result.textContent = `${game.playerHand} beats ${game.aiHand}! You won a round!`;
    } else if (score === 2) {
        ++score;
        playerScore.textContent = score;
        aiScore.textContent = scoreAi;
        result.textContent = `${game.playerHand} beats ${game.aiHand}! You won the match!`;
    }
}

lose = () => {
    if (scoreAi < 2) {
        ++scoreAi;
        playerScore.textContent = score;
        aiScore.textContent = scoreAi;
        result.textContent = `${game.playerHand} loses to ${game.aiHand}! You lost a round!`;
    } else if (scoreAi === 2) {
        ++scoreAi;
        playerScore.textContent = score;
        aiScore.textContent = scoreAi;
        result.textContent = `${game.playerHand} loses to ${game.aiHand}! You lost the match!`;
    }
}

draw = () => {
    playerScore.textContent = score;
    aiScore.textContent = scoreAi;
    result.textContent = "It's a draw";
}

check = (playerChoice, aiChoice) => {
    if ((playerChoice === "rock" && aiChoice === "scissors") || (playerChoice === "paper" && aiChoice === "rock") || (playerChoice === "scissors" && aiChoice === "paper")) {
        win();
    } else if (playerChoice === aiChoice) {
        draw();
    } else {
        lose();
    }
}

function endGame() {
    document.querySelector(`[data-name="${game.playerHand}"]`).style.backgroundColor = "";
    document.querySelector(`[data-name="${game.playerHand}"]`).style.color = "";
    game.playerHand = "";
    game.aiHand = "";


}



playGame = () => {
    if (game.playerHand == "") {
        return alert("Make your Choice");
    }
    game.aiHand = aiChoice();
    check(game.playerHand, game.aiHand);
    endGame();

}



choices.forEach((choice) => {
    choice.addEventListener('click', playerChoice);
})

start.addEventListener('click', playGame);