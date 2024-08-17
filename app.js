let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper1", "scissors"];
  const randIdx = Math.floor(Math.random() * 3); // this function will generate random values and we multiply it by three to get it from 0-2
  return options[randIdx]; // this will set the index of the option array as randIdx and return the value
};

const drawGame = () => {
  console.log("the game was a draw.");
  msg.innerText= "The game was draw!";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win");
    msg.innerText= "You win!";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you loose");
    msg.innerText= "You losse!";
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log(`User choice:- ${userChoice}`);
  //this will print the user choice
  compChoice = genCompChoice();
  console.log(`Computer choice:- ${compChoice}`);
  // this will print the computer choice
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // comp must have chose scissors or paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // comp must have chose scissors or stone
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // comp must have chose rock or paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
