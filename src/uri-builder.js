const protocol = 'https://'
const baseUrl = 'holders.io'

const getTheme = theme => theme && theme !== 'empty' ? `${theme}.` : ''
const getType = type => type ? `.${type}` : ''
const getOption = option => option ? `/${option}` : ''
const getColor = (bg, fg) => `${bg ? `/${bg}` : ''}${bg && fg ? `-${fg}` : ''}`

export default state => {
  const sizeValue = state.size
  const theme = getTheme(sizeValue && state.theme)
  const size = getOption(sizeValue)
  const text = getOption(sizeValue && state.text)
  const filter = getOption(sizeValue && state.filter)
  const type = getType(sizeValue && state.type)
  const color = getColor(
    sizeValue && state.background,
    sizeValue && state.foreground
  )

  return `${protocol}${theme}${baseUrl}${size}${color}${text}${filter}${type}`
}
