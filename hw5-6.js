function num() {
  let playerNumber = +prompt('Введи число')

  if (isNaN(playerNumber)) {
    alert('Переданный параметр не является числом!')
  }

  let cub = playerNumber ** 2

  if (cub) {
    alert(`${playerNumber} в кубе равняется ${cub}`)
  }
}

num()
