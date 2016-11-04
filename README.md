# macos-screencapture

wrapper around `screencapture` that is included with macOS.

## usage

```javascript
import screencapture from 'macos-screencapture'

const configuration = {
  path: `/path/to/file.png`,
  options: [
    screencapture.options.interactive,
    screencapture.options.noSound
  ]
}

screencapture(configuration)
  .then(path => console.log(`image location: ${path}`))
  .catch(err => console.log(`error: ${err}`))
```
