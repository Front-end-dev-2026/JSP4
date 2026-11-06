function guessNumberGame() {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    const correctNumber = 7;
    
    while (randomNumber !== correctNumber) {
        
        randomNumber = Number(prompt("Guess a number between 1 & 10"));

        if (randomNumber < correctNumber)
            alert("Too low, try again.")

        else if (randomNumber > correctNumber)
            alert("Too high, try again.")

        else 
            alert("Correct")
            
    }    
    
}
guessNumberGame();