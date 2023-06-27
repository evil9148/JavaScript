btnArr = []

fnSetArr = (start, end) => {
  btnArr = []
  for (let i = start; i <= end; i++) {
    let button = document.createElement(`button`)
    button.value = i
    button.innerHTML = `<span>${i}</span>`
    btnArr.push(button)
  }
}

fnSpawnBtn = () => {
  document.querySelector(`.board`).innerHTML = ''
  for (let i = startNum; i <= finishNum / 2; i++) {
    let ranN = Math.floor(Math.random() * btnArr.length)
    document.querySelector(`.board`).append(btnArr[ranN])
    btnArr.splice(ranN, 1)
  }
}

fnBtnHandler = () => {
  document.querySelectorAll(`.board button`).forEach(btn => {
    btn.addEventListener(`click`, (e) => {
      if (parseInt(e.currentTarget.value) === nextNum) {
        fnPositive(e.currentTarget)
      } else {
        fnNagative()
      }
    })
  })
}

fnPositive = (el) => {
  el.disabled = true
  nextNum++
  document.querySelector(`.next-num`).innerHTML = nextNum
  if (nextNum === finishNum / 2 + 1) {
    fnSetArr(finishNum / 2 + 1, finishNum)
    fnSpawnBtn()
    fnBtnHandler()
  }
  if (nextNum === finishNum + 1) {
    clearInterval(intervalId)
    document.querySelector(`.game-completed`).style.display = 'flex'
  }
}

fnNagative = () => {
  time -= 10 * 10
  document.querySelector(`section`).classList.add(`active`)
}