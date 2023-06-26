nextNum = 1
startTime = 10 * 60
time = startTime
intervalId = null
timeOutId = null

fnInit = ()=>{
  fnInitVar()
  fnPrintNextNum()
  fnSetTimer()
  fnSetArr(1,25)
  fnSpawnBtn()
  fnBtnHandler()
}

fnInitVar = ()=>{
  nextNum = 1
  time = startTime
  btnArr = []
}

fnPrintNextNum = ()=>{
  document.querySelector(`.next-num`).innerHTML = nextNum
}

fnSetTimer = ()=>{
  intervalId =setInterval(()=>{
    time --
    document.querySelector(`.sec`).innerHTML = time / 10
    fnCheckGameOver()
  },100)
}

fnCheckGameOver = ()=>{
  if(time <= 0){
    clearInterval(intervalId)
    document.querySelector(`.game-over`).style.display='flex'
    document.querySelectorAll(`.board button`).forEach(btn=>{
      btn.remove()
    })
  }
}