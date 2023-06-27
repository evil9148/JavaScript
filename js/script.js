document.querySelector(`.btn-start`).addEventListener(`click`,()=>{
  document.querySelector(`.init`).remove()
  fnInit()
})

document.querySelector(`.game-over .btn-again`).addEventListener(`click`,()=>{
  document.querySelector(`.game-over`).style.display='none'
  fnInit()
})

document.querySelector(`.game-completed .btn-again`).addEventListener(`click`,()=>{
  document.querySelector(`.game-completed`).style.display='none'
  fnInit()
})

document.querySelector(`.btn-restart`).addEventListener(`click`,()=>{
  fnInitVar()
})

document.querySelector(`section`).addEventListener(`animationend`,()=>{
  document.querySelector(`section`).classList.remove(`active`)
})


