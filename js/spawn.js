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
  for (let i = 1; i <= 25; i++) {
    let ranN = Math.floor(Math.random() * btnArr.length)
    document.querySelector(`.board`).append(btnArr[ranN])
    btnArr.splice(ranN, 1)
  }
}

fnBtnHandler = () => {
  document.querySelectorAll(`.board button`).forEach(btn => {
    btn.addEventListener(`click`, (e) => {
      if (parseInt(e.currentTarget.value) === nextNum) {
        e.currentTarget.disabled = true
      } else {
        time -= 10*10
        document.querySelector(`section`).classList.add(`active`)
      }
    })
  })
}