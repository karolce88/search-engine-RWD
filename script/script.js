const input = document.querySelector('.search')
const tableItems1 = document.querySelectorAll('.table-bg-hover')

const searchEngine = () => {
	tableItems1.forEach(item => {
		const match = new RegExp(input.value, 'i').test(item.textContent)

		if (!match) {
			item.style.display = 'none'
		} else {
			item.style.display = 'flex'
		}
	})
}

input.addEventListener('keyup', searchEngine)