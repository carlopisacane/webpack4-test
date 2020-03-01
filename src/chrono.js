import Heading from './components/heading/heading'
import ChronoImage from './components/chrono-image/chrono-image'
import _ from 'lodash'

const heading = new Heading()
heading.render(_.upperFirst('chrono'))
const chronoImage = new ChronoImage()
chronoImage.render()
