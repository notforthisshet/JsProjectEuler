function divisors_count(number) {
    let divisors = new Set([1, number])
    for (let d = 1; d < Math.round(number ** 0.5) + 1; d++) {
        if (number % d === 0) {
            divisors.add(d)
            divisors.add(number / d)
        }
    }
    return divisors.size
}

const triangular_number = (element) => (1 + element) * element / 2

let num = 0
while (true) {
    num += 1
    if (divisors_count(triangular_number(num)) > 500) {
        console.log(triangular_number(num))
        break
    }
}