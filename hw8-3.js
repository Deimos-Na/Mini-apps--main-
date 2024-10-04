function showCurrentTime() {
  const intervalTime = setInterval(() => {
    console.log(new Date())
  }, 3000)

  setTimeout(() => {
    clearInterval(intervalTime)
    console.log('30 сек прошло')
  }, 30000)
}

showCurrentTime()
