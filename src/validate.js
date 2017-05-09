const isValidSize = input => {
  const widthRe = /^\d+$/
  const fullSizeRe = /^\d+x\d+$/
  return widthRe.test(input) || fullSizeRe.test(input)
}

const isValidColor = input => {
  const colorRe = /^(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/
  return colorRe.test(input)
}

const validationMap = {
  size: isValidSize,
  color: isValidColor
}

export default (value, type) => {
  return validationMap[type](value)
}
