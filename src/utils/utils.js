export function capitalise(text) {
    const words = text.split(' ')
    const wordsCapitalised = words.map(word => word[0].toUpperCase() + word.substring(1))
    return wordsCapitalised.join(' ')
}

export function animateLogo() {
    const logo = document.getElementsByClassName('header__logo')[0]
    const logo__T = document.getElementsByClassName('logo__T')[0]
    const logo__G = document.getElementsByClassName('logo__G')[0]
    const logo__ene = document.getElementsByClassName('logo__ene')[0]
    const logo__ech = document.getElementsByClassName('logo__ech')[0]

    logo.style.transform = 'translateX(0)'
    logo.style.filter = 'blur(0)'

    setTimeout(() => {
        logo__G.style.fontSize = '40px'
        logo__G.style.color = 'lime'
        logo__T.style.transform = 'translateX(-58px)'
        logo__T.style.fontSize = '40px'
        logo__ene.style.opacity = 0
        logo__ech.style.opacity = 0
    }, 1000)
}
