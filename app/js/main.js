const navMobileContainer = document.querySelector('.nav__link-container')

document.addEventListener('click', e => {
  const isHamburgerButton = e.target.matches('[data-hamburger-button]')
  const isCloseButton = e.target.matches('[data-close-button]')

  if (isHamburgerButton) navMobileContainer.classList.toggle('active')
  if (isCloseButton) navMobileContainer.classList.toggle('active')

})