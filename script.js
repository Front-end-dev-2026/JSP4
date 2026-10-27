function guessNumberGame() {
    let count = Math.floor(Math.random() * 10 + 1);
    const correctNumber = 7;
    if (count === correctNumber)
        console.log("correct")
    while (count !== correctNumber) {
        count = Number(prompt("Guess a number between 1 & 10"))
        console.log("Wrong");
        
    }
}