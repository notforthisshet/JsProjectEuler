let p = 1000
for (let a = 1; a < p; a++) {
    for (let b = 1; b < p - a; b++) {
        let c = p - a - b
        if (c ** 2 === a ** 2 + b ** 2) {
            console.log(a * b * c)
            break
        }
    }
}