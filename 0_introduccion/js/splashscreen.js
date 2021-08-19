const splashscreen = document.getElementsByTagName('splashscreen')[0]
const logoAndText = document.getElementsByClassName('logo-and-text')[0]
const main = document.getElementById('main')

logoAndText.addEventListener('animationend', async ({ animationName }) => {
  if (animationName === "scale-out") {
    await sleep(300) //ms
    await animFadeOut(splashscreen)
    splashscreen.remove()
    main.style.display = 'inherit'
    await animFadeIn(main, 500) //ms
  }
})
