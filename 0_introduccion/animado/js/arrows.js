const arrows = document.getElementsByTagName('arrows')[0]

window.addEventListener('scroll', async () => {
    await animFadeOut(arrows, 650)
    arrows.remove()
}, {once: true})
