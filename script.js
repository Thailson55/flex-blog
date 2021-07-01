//Navegação interna
function NavegaçãoSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  if (linksInternos.length) {
    function sectionAtiva(event) {
      event.preventDefault()
      const href = event.currentTarget.getAttribute('href')
      const section = document.querySelector(href)

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

    linksInternos.forEach((item) => {
      item.addEventListener('click', sectionAtiva)
    })
  }
}
NavegaçãoSuave()

//Animação ao Scroll
function initialAnimaçãoScroll() {
  const sections = document.querySelectorAll('.js-scroll')

  if (sections.length) {

    const tamanhoTela = innerHeight * 0.60

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const visible = sectionTop - tamanhoTela < 0
        if (visible) {
          section.classList.add('ativo')
        } else {
          section.classList.remove('ativo')
        }
      })
    }
    animaScroll()

    window.addEventListener('scroll', animaScroll)
  }
}
initialAnimaçãoScroll()
