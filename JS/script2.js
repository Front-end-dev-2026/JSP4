function generateRandomArray(length) { // 100
    const Numbers = [];

    for (let i = 0; i < length; i++) {
        Numbers.push(Math.floor(Math.random() * 100));
        console.log(i)
    }

    return Numbers;

}
console.log(generateRandomArray(100));