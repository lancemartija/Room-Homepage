const navbarMenu = document.querySelector('[data-navbar-menu]')

document.addEventListener('click', e => {
  const isToggleButton = e.target.matches('[data-toggle-button]')

  if (isToggleButton)
    navbarMenu.classList.toggle('active')

  if (e.target.closest('[data-navbar]') === null)
    navbarMenu.classList.remove('active')
})