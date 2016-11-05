# macos-screencapture

wrapper around `screencapture`.

## usage

```javascript
import screencapture from 'macos-screencapture'

const configuration = {
  path: `/path/to/file.png`,
  options: [ screencapture.options.noSound ]
}

screencapture(configuration)
  .then(path => console.log(`file location: ${path}`))
  .catch(err => console.log(`error: ${err}`))
```

### defaults

```javascript
{
  path: path.join(os.tmpdir(), filename),
  // filename = screencapture-${unixtimestamp}-${2randomBytes}.${extension}
  options: [ options.noSound, options.format.default ]
}
```

### options

array of options i.e. `['-x']`.

#### helpers

##### `options.clipboard -> -c`
capture goes to clipboard

##### `options.cursor -> -C`
include cursor in capture (non-interactive mode)

##### `options.interactive -> -i`
capture interactively

##### `options.mainMonitor -> -m`
only capture the main monitor

##### `options.openMail -> -M`
open a new mail message with the capture

##### `options.noShadow -> -o`
when capturing in window mode, do not include the shadow of the window in the capture

##### `options.openPreview -> -P`
open the capture in Preview

##### `options.mouseSelection -> -s`
only allow mouse selection mode

##### `options.windowModeCaptureScreen -> -S`
when capturing in window mode, capture whatever is within the window view

##### `options.format -> -t imageFormat`
choose image format

```javascript
format() // [`-t`, `png`]
format(`imageFormat`) // [`-t`, `imageFormat`]
format.default // [`-t`, `png`]
format.pdf
format.jpg
format.tiff
```

##### `options.delay -> -T seconds`
delay capture by # of seconds

```javascript
delay() // [`-T`, 5]
delay(10) // [`-T`, 10]
delay.default // [`-T`, 5]
```

##### `options.onlyWindowMode -> -w`
only allow window selection mode

##### `options.interactiveWindowMode -> -W`
windows mode pre-selected in interaction mode

##### `options.noSound -> -x`
no capture sound

##### `options.noAttachedWindows -> -a`
attached windows are not captures

##### `options.noDpiData -> -r`
exclude dpi data from caputured file
