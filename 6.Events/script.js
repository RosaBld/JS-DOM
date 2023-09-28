const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
    console.log(e.target.classList[1])
    console.log(getElapsedTime())
    // Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
    const displayedsquare_wrapper=document.querySelector('.displayedsquare-wrapper')
    const displayedsquare=document.createElement('div') //
    displayedsquare.classList.add('displayedsquare')
    displayedsquare_wrapper.appendChild(displayedsquare)
    displayedsquare.classList.add(e.target.classList[1]) 
    const list=document.querySelector('ul')
    const li=document.createElement('li')
    list.appendChild(li)
    li.textContent=('[' + getElapsedTime() + '] Created a new ' + e.target.classList[1] + ' square')
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

const body=document.querySelector('body');
const changeBackground=(e)=>{
    if (e.keyCode===32) {
        body.style.background=`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
        const list=document.querySelector('ul')
        const li=document.createElement('li')
        li.textContent="Spacebar pressent in " + getElapsedTime()
        list.appendChild(li)
    }
}
body.addEventListener('keydown', changeBackground);

const list=document.querySelector('ul')
const li=document.querySelector('li')
const deleteActionLog=(e)=>{
    if (e.keyCode===76) {
        list.removeChild(list.lastChild)
    }
}
body.addEventListener('keydown', deleteActionLog);

const deleteAllSquare = (e) => {
  if (e.keyCode===83) {
    const displayedsquares=document.querySelectorAll('.displayedsquare')
    for (let displayedsquare of displayedsquares) {
      displayedsquare.remove()
    }
  }
}
body.addEventListener('keydown', deleteAllSquare);