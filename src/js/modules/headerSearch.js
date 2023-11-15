const jsonData = [
	'Moscow',
	'London',
	'New York',
	'Tokyo',
	'Paris',
	'Berlin',
	'Sydney',
	'Rome',
	'Madrid',
]

document.addEventListener('DOMContentLoaded', () => {
	const input = document.getElementById('search-input') || ''
	const autocomplete = document.getElementById('search-autocomplete') || ''

	if (input && autocomplete) {
		input.addEventListener('input', function () {
			if (input.value.length < 3) {
				autocomplete.innerHTML = ''
				return
			}

			const inputValue = input.value.toLowerCase()
			autocomplete.innerHTML = ''

			const filteredData = jsonData.filter(function (option) {
				return option.toLowerCase().startsWith(inputValue)
			})

			filteredData.forEach(function (option) {
				const optionElement = document.createElement('div')
				optionElement.classList.add('search-autocomplete__option')
				optionElement.textContent = option
				autocomplete.appendChild(optionElement)
			})
		})

		autocomplete.addEventListener('click', function (event) {
			if (event.target.classList.contains('search-autocomplete__option')) {
				input.value = event.target.textContent
				autocomplete.innerHTML = ''
			}
		})
	}
})
