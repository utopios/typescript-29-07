async function* generator() {
    let count = 0;
    while (count < 3) {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        yield count++
    }
    return count
}
// let gen = generator()
// console.log(gen.next())
// console.log(gen.next())
// gen = null

    (async () => {
        for await (const num of generator()) {
            console.log(num)
        }
    })()


function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}
let generatorR = generateSequence()

console.log(generatorR.next())
console.log(generatorR.next())
console.log(generatorR.next())