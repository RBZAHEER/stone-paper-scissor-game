const btnEle = document.querySelectorAll("button");
const userScoreEle = document.querySelector(".userScore");
const compScoreEle = document.querySelector(".compScore");
const resultEle = document.querySelector(".resultBox h1");
const resultBg = document.querySelector(".resultgif");

let userScore = 0;
let computerScore = 0;

btnEle.forEach((btn) => {
  btn.addEventListener("click", () => {
    const userChoice = btn.id;
    const computerChoice = compChoice();
    // console.log(computerChoice, "Computer choice");
    // console.log(userChoice, "User choice");
    const result = checkresult(computerChoice, userChoice);
    // console.log(result, "Result");
    resultEle.innerHTML = result;
    userScoreEle.innerHTML = userScore;
    compScoreEle.innerHTML = computerScore;
    // console.log(computerScore);
    // console.log(userScore);

    if (userScore == 5) {
      alert("You win the game");
      resultBg.style.backgroundImage =
        "url(https://media.tenor.com/DtT8VMpkGe4AAAAi/gold-winner.gif)";
      setTimeout(resetGame, 3000);
    }
    if (computerScore == 5) {
      alert("Computer wins the game");
      resultBg.style.backgroundImage =
        "url(https://media1.tenor.com/m/DDpsU-1MdNgAAAAC/trashy-pepe.gif)";
      setTimeout(resetGame, 3000);
    }
  });
});

function compChoice() {
  const compChoices = ["rock", "paper", "scissor"];
  const comprandomchoice = Math.floor(Math.random() * compChoices.length);
  //   console.log(comprandomchoice);
  return compChoices[comprandomchoice];
}

function checkresult(computerChoice, userChoice) {
  if (computerChoice === userChoice) {
    // console.log("It's a tie!");
    // resultBgEle.style.backgroundColor = " #021322";
    return `Its a tie!`;
  } else if (
    (computerChoice === "rock" && userChoice === "scissor") ||
    (computerChoice === "scissor" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "rock")
  ) {
    // console.log("comp win");
    computerScore++;
    // resultBgEle.style.backgroundColor = "FFEBD4";
    return `Computer Won, ${computerChoice} beats ${userChoice}`;
  } else {
    // console.log("user Win");
    userScore++;
    // resultBgEle.style.backgroundColor = "#6108FB";
    return `You Won, ${userChoice} beats ${computerChoice}`;
  }
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  resultBg.style.backgroundImage = "";
  resultEle.innerHTML = "Game reset , Lets play again :)";
}
