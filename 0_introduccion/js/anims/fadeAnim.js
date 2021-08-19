async function animFade(element, options) {
  const duration = 300 //ms

  element.animate(
    options.animation,
    {
      fill: 'forwards',
      easing: 'linear',
      duration
    }
  )

  return sleep(duration)
}

async function animFadeIn(element) {

  const animOptions = {
    animation: [
      { opacity: 0 },
      { opacity: 1 }
    ]
  }
  return animFade(element, animOptions)
}

async function animFadeOut(element) {

  const animOptions = {
    animation: [
      { opacity: 1 },
      { opacity: 0 }
    ]
  }
  return animFade(element, animOptions)
}
