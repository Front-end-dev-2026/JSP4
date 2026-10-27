function guessNumberGame() {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    const correctNumber = 7;
    while (randomNumber !== correctNumber) {
        randomNumber = Number(prompt("Guess a number between 1 & 10"));
        
    }
    if (randomNumber === correctNumber)
        console.log("correct")
}
guessNumberGame();