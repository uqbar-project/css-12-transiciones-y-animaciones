async function animFade(element, options) {
  element.animate(
    options.animation,
    {
      fill: 'forwards',
      easing: 'linear',
      duration: options.duration
    }
  )

  return sleep(options.duration)
}

async function animFadeIn(element, duration = 300) {

  const animOptions = {
    animation: [
      { opacity: 0 },
      { opacity: 1 }
    ],
    duration //ms
  }
  return animFade(element, animOptions)
}

async function animFadeOut(element, duration = 300) {

  const animOptions = {
    animation: [
      { opacity: 1 },
      { opacity: 0 }
    ],
    duration //ms
  }
  return animFade(element, animOptions)
}
