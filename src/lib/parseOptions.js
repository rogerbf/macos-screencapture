export default function parseOptions (options) {
  return options.reduce((args, option) => {
    return args.concat(option)
  }, [])
}
