let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertWords(letter) {
  if (letter === "r") {
    return "Rock";
  }

  if (letter === "p") {
    return "Paper";
  }
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  let winn = "You win!";
  let winnr = winn.fontcolor("green");
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result.innerHTML = `${convertWords(userChoice)} 
     beats 
    ${convertWords(computerChoice)} 
    . ${winnr}`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  let lost = "You Lost!";
  let lostr = lost.fontcolor("red");
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result.innerHTML = `${convertWords(userChoice)} 
       loses to
      ${convertWords(computerChoice)} 
      . ${lostr}`;
}

function draw(userChoice, computerChoice) {
  let drawr = "It's a draw!";
  let drawrr = drawr.fontcolor("yellow");
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result.innerHTML = `${convertWords(userChoice)} 
         doesn't beat 
        ${convertWords(computerChoice)} 
        . ${drawrr}`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock.addEventListener("click", function() {
    game("r");
  });

  paper.addEventListener("click", function() {
    game("p");
  });

  scissors.addEventListener("click", function() {
    game("s");
  });
}

main();
