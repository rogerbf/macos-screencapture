export default {
  clipboard: [`-c`],
  cursor: [`-C`],
  interactive: [`-i`],
  mainMonitor: [`-m`],
  openMail: [`-M`],
  noShadow: [`-o`],
  openPreview: [`-P`],
  mouseSelection: [`-s`],
  windowModeCaptureScreen: [`-S`],
  format: Object.assign(
    (imageFormat = `png`) => {
      if (typeof (imageFormat) !== `string`) {
        throw new TypeError(`expected a string`)
      }
      return [`-t`, imageFormat]
    },
    {
      default: [`-t`, `png`],
      pdf: [`-t`, `pdf`],
      jpg: [`-t`, `jpg`],
      tiff: [`-t`, `tiff`]
    }
  ),
  delay: Object.assign(
    (time = 5) => {
      const parsed = parseInt(time, 10)
      if (!parsed) throw new TypeError(`expected a positive integer`)
      if (parsed < 0) throw new Error(`expected a positive integer`)
      return [`-T`, parsed]
    },
    { default: [`-T`, 5] }
  ),
  onlyWindowMode: [`-w`],
  interactiveWindowMode: [`-W`],
  noSound: [`-x`],
  noAttachedWindows: [`-a`],
  noDpiData: [`-r`]
}
