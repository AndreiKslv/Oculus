const tabs = document.querySelectorAll('[data-tab]')
const tabsContent = document.querySelectorAll('.features__tab-content')

tabs.forEach(function(tab) {
	tab.addEventListener('click', function() {
		tabs.forEach(function(tab) {
			tab.classList.remove('features__button--active')
		})
		tab.classList.add('features__button--active')

		tabsContent.forEach(function(tabContent) {
			tabContent.classList.add('hidden')
		})

		const tabContent = document.querySelector(`#${tab.dataset.tab}`)
		tabContent.classList.remove('hidden')

	})
})