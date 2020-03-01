import ChronoTrigger from './chrono-trigger.jpg'

function addImage() {
	const img = document.createElement('img')
	img.alt = 'chrono trigger'
	img.width = '300'
	img.src = ChronoTrigger

	const body = document.querySelector('body')
	body.appendChild(img)
}

export default addImage
