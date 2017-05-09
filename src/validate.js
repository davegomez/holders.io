export const isValidSize = input => {
  const widthRe = /^\d+$/
  const fullSizeRe = /^\d+x\d+$/
  return widthRe.test(input) || fullSizeRe.test(input)
}

const validationMap = {
  size: isValidSize
}

export default (value, type) => {
  return validationMap[type](value)
}
