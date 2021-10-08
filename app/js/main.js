const navbarMenu = document.querySelector('[data-navbar-menu]')
const hero1 = document.querySelectorAll('[data-hero-1]')
const hero2 = document.querySelectorAll('[data-hero-2]')
const hero3 = document.querySelectorAll('[data-hero-3]')
let counter = 1

display()

document.addEventListener('click', e => {
  const isToggleButton = e.target.matches('[data-toggle-button]')
  const isLeftButton = e.target.matches('[data-prev-button]')
  const isRightButton = e.target.matches('[data-next-button]')

  if (isToggleButton)
    navbarMenu.classList.toggle('active')

  if (e.target.closest('[data-navbar]') == null)
    navbarMenu.classList.remove('active')

  if (isRightButton || e.target.closest('[data-next-button]') != null) {
    counter++
    if (counter > 3) counter = 1
    display()
    console.log(counter)
  }

  if (isLeftButton || e.target.closest('[data-prev-button]') != null) {
    counter--
    if (counter < 1) counter = 3
    display()
    console.log(counter)
  }
})

function display() {
  if (counter === 1) {
    hero1.forEach(hero => {
      hero.classList.add('display')
      hero.classList.remove('no-display')
    })
    hero2.forEach(hero => {
      hero.classList.add('no-display')
    })
    hero3.forEach(hero => {
      hero.classList.add('no-display')
    })
  } else if (counter === 2) {
    hero2.forEach(hero => {
      hero.classList.add('display')
      hero.classList.remove('no-display')
    })
    hero1.forEach(hero => {
      hero.classList.add('no-display')
    })
    hero3.forEach(hero => {
      hero.classList.add('no-display')
    })
  } else {
    hero3.forEach(hero => {
      hero.classList.add('display')
      hero.classList.remove('no-display')
    })
    hero1.forEach(hero => {
      hero.classList.add('no-display')
    })
    hero2.forEach(hero => {
      hero.classList.add('no-display')
    })
  }
}