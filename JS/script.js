function guessNumberGame() {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    const correctNumber = 7;
    let randomNumber = Number(prompt("Guess a number between 1 & 10"));
    
    while (randomNumber !== correctNumber) {
        if (randomNumber < correctNumber)
            alert("Too low, try again.")

        else (randomNumber > correctNumber)
            alert("Too high, try again.")
        
    }    
    
    
    else (randomNumber === correctNumber)
        alert("You guessed it")
}
guessNumberGame();