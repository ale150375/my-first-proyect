const button = document.querySelector('#switch')
const body = document.querySelector('body')

button.addEventListener('click', ()=> {
  body.classList.toggle('white')
})
button.onclick = ()=> {
  button.classList.toggle('active')
}
const cards = document.querySelector('.main-card-container__basic')
cards.onmouseover = ()=> {
  cards.onmouseover = ('card-hover')
}