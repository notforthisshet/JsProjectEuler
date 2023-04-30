n = 100
let square_sum = (((1 + n) * n) / 2) ** 2
let sum_of_squares = 0
for (let i = 1; i < n + 1; i++) {
    sum_of_squares += i ** 2
}
console.log(square_sum - sum_of_squares)