function gcd(a, b) {
    let divisors_a = []
    let divisors_b = []
    for (let d1 = 0; d1 < Math.round(a ** 0.5) + 1; d1++) {
        if (a % d1 === 0) {
            divisors_a.push(d1)
            divisors_a.push(a / d1)
        }
    }
    for (let d2 = 0; d2 < Math.round(b ** 0.5) + 1; d2++) {
        if (b % d2 === 0) {
            divisors_b.push(d2)
            divisors_b.push(b / d2)
        }
    }
    divisors_a.sort(function (a, b) {
        return a - b
    }).reverse()
    divisors_b.sort(function (a, b) {
        return a - b
    }).reverse()
    for (let f in divisors_a) {
        if (divisors_b.includes(divisors_a[f])) {
            return divisors_a[f]
        }
    }
}

let num = 1
for (let i = 1; i < 21; i++) {
    num *= i / gcd(i, num)
}
console.log(num)