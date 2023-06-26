//window 전역 변수 설정

nextNum = 1
startTime = 10 * 60
time = startTime
intervalID = null
timeoutID = null

fnInit = () => {
  fnInitVar()
  fnSetTimer()
  fnPrintNextNum()
  fnSetArr(1, 25)
  fnSpawnBtn()
  fnBtnHandler()
}

fnInitVar = () => {
  nextNum = 1
  time = startTime
}

fnPrintNextNum = () => {
  document.querySelector(`.next-num`).innerHTML = nextNum
}

fnSetTimer = () => {
  intervalID = setInterval(() => {
    time--
    document.querySelector(`.sec`).innerHTML = time / 10
    fnCheckGameOver()
  }, 100)
}

fnCheckGameOver = () => {
  if (time <= 0) {
    clearInterval(intervalID)
    document.querySelector(`.game-over`).style.display = 'flex'
  }
}