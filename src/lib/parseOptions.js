export default function parseOptions (options) {
  return options.reduce((args, option) => args.concat(option), [])
}
