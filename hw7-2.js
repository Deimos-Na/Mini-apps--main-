function filterByStart(arr, str) {
  return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()))
}
const strings = ['apple', 'banana', 'apricot', 'cherry', 'avocado']
const result = filterByStart(strings, 'ap')
console.log(result)
