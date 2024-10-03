const nums = Array.from({ length: 10 }, () => Math.random() * 10)
const evens = nums.filter(num => Math.round(num) % 2 === 0)

console.log('Исходный массив:', nums)
console.log('Массив четных значений:', evens)
