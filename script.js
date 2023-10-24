const cards = document.querySelectorAll('.card')
let currentIndex = 0
function nextFun() {
	if (currentIndex == cards.length - 1) {
		currentIndex = 0
		cardsForEach()
		giveClassList(currentIndex)
	} else {
		currentIndex++
		cardsForEach()
		giveClassList(currentIndex)
	}

}
function prevFun() {
	if (currentIndex === 0) {
		currentIndex = cards.length
	}
	currentIndex--
	cardsForEach()
	giveClassList(currentIndex)
}
function giveClassList(index) {
	cards[index].classList.add('active')
}

function cardsForEach() {
	cards.forEach(card => {
		card.classList.remove('active')
	})
}
function randomFun() {
	cardsForEach()
	currentIndex = Math.floor(Math.random() * cards.length)
	giveClassList(currentIndex)
}
document.body.addEventListener('click', (e) => {
	if (e.target.dataset.oper == 'prev') prevFun()
	if (e.target.dataset.oper == 'next') nextFun()
	if (e.target.dataset.oper == 'random') randomFun()
})