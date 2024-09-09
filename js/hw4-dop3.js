let book = {
  название: 'qqq',
  автор: 'www',
  год: 2020,
  жанр: 'eee',
}

for (const key in book) {
  console.log(key, book[key])
}
