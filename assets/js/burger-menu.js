const nav = document.querySelector('.nav')
const burgerMenu = document.querySelector('.burger-menu')
const body = document.querySelector('body')
burgerMenu.addEventListener('click', function() {
	nav.classList.toggle('burger-menu--active')
	body.classList.toggle('lock')
})