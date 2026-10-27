function generateRandomArray() {
    const Numbers = [];

    for (let i = 1; i < 100; i++) {
        Numbers.push(Math.floor(Math.random() * 100));
        console.log(i)
    }

    return Numbers;

}
console.log(generateRandomArray());