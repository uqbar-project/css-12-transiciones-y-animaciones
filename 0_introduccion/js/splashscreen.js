const splashscreen = document.getElementsByTagName('splashscreen')[0]
const logoAndText = document.getElementsByClassName('logo-and-text')[0]

logoAndText.addEventListener('animationend', ({ animationName }) => {
  const timeMs = 300
  animationName === "scale-out" && sleep(timeMs).then(() => animFadeOut(splashscreen))
})
