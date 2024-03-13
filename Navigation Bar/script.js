const toggleButton=document.getElementsByClassName(`toggle-button`)[0]
const text=document.getElementsByClassName(`text`)[0]


toggleButton.addEventListener(`click`,() => {
    text.classList.toggle(`active`)
})