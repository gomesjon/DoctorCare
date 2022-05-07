window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
   showNavOnScroll()
   showBackToTopButtonOnScroll()

   activateMenuCurrentSection(home)
   activateMenuCurrentSection(services)
   activateMenuCurrentSection(about)
   activateMenuCurrentSection(contact)
}

function activateMenuCurrentSection(section) {
    //linha alvo
    const targetLine = scrollY + innerHeight / 2
    
    //verificar se a seção passou da linha
    //quais dados vou precisar
    //o topo da seção
    const sectionTop = section.offsetTop
    //altura da seção
    const sectionHeight = section.offsetHeight
    //o topo da seção chegou ou ultrapassou a linha alto
    const sectionTopRachOrPassedTargetline = targetLine >= sectionTop
    
    //informações dos dados e da logica
  //  console.log('o topo da seção chegou ou passou da linha?', sectionTopRachOrPassedTargetline)

    //verificar se a base está abixo da linha alvo
    //quais dados vou precisar?
    //a seção termina onde?
     const sectionEndsAt = sectionTop + sectionHeight
    //o final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
 //  console.log('o fundo da seção passou da linha: ', sectionEndPassedTargetLine)

    //limites da seção
    const sectionBondaries = sectionTopRachOrPassedTargetline && !sectionEndPassedTargetLine

 // console.log(sectionBondaries)

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBondaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#contact,
#contact header,
#contact .content`);
