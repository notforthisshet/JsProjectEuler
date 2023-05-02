nums = []

for (let i = 0; i < 1000; i++){
    if (i % 3 === 0 || i % 5 === 0) {
        nums.push(i)
    }
}

console.log(nums.reduce(function (a, b) {
    return a + b
}))