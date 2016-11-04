import capture from './lib/screencapture'
import options from './lib/options'

const screencapture = Object.assign(capture, { options: options })

export default screencapture
