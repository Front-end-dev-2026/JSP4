function generateRandomArray() {
    const Numbers = [];

    for (let i = 1; i < 100; i++) {
        Numbers.push(Math.random() * 100);
        console.log(i)
    }

}
console.log(generateRandomArray());