fib = [1, 2]
count = 0

while (fib.at(-1) < 4000000) {
    if (fib.at(-1) % 2 == 0) {
        count += fib.at(-1)
    }
    fib.push(fib.at(-1) + fib.at(-2))
}

console.log(count)
