function is_prime(number) {
    if (number === 1) {
        return false
    }
    for (let d = 2; d < Math.round(number ** 0.5) + 1; d++) {
        if (number % d === 0) {
            return false
        }
    }
    return true
}

function Nth_prime_number(number) {
    let i = 0
    let count = 0
    while (true) {
        i += 1
        if (is_prime(i)) {
            count += 1
        }
        if (count === number) {
            return i
        }
    }
}

console.log(Nth_prime_number(10001))