const nums = Array.from({ length: 6 }, () => Math.random() * 9 + 1)
const average = nums.reduce((a, b) => a + b) / nums.length

console.log('Массив:', nums)
console.log('Среднее арифметическое:', average)
