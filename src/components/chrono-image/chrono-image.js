import ChronoTrigger from './chrono-trigger.jpg'
import './chrono-image.scss'

class ChronoImage {
	render() {
		const img = document.createElement('img')
		img.src = ChronoTrigger
		img.alt = 'ChronoTrigger'
		img.classList.add('chrono-image')

		const bodyDomElement = document.querySelector('body')
		bodyDomElement.appendChild(img)
	}
}

export default ChronoImage
