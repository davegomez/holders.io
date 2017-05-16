import validate from '../../src/validate'

const size = 'size'
const color = 'color'
const text = 'text'

test('Is a valid Size', () => {
  expect(validate(size, '')).toBe(true)
  expect(validate(size, '800')).toBe(true)
  expect(validate(size, '1280')).toBe(true)
  expect(validate(size, '800x600')).toBe(true)
  expect(validate(size, '1280x800')).toBe(true)
  expect(validate(size, '1920')).toBe(true)
  expect(validate(size, '1920x1080')).toBe(true)
})

test('Is not a valid Size', () => {
  expect(validate(size, '800x')).toBe(false)
  expect(validate(size, 'x1280')).toBe(false)
  expect(validate(size, '800x600y')).toBe(false)
  expect(validate(size, 'y1280x800')).toBe(false)
  expect(validate(size, 'z1920z')).toBe(false)
  expect(validate(size, '1920xx1080')).toBe(false)
  expect(validate(size, '800x1280x1920')).toBe(false)
})

test('Is a valid HEX color value (shorthand)', () => {
  expect(validate(color, 'eee')).toBe(true)
  expect(validate(color, 'e48')).toBe(true)
  expect(validate(color, 'cde')).toBe(true)
})

test('Is not a valid HEX color value (shorthand)', () => {
  expect(validate(color, 'ee')).toBe(false)
  expect(validate(color, 'e48d')).toBe(false)
  expect(validate(color, 'cge')).toBe(false)
})

test('Is a valid HEX color value', () => {
  expect(validate(color, 'efefef')).toBe(true)
  expect(validate(color, 'aeb4c8')).toBe(true)
  expect(validate(color, 'c4d4e4')).toBe(true)
})

test('Is not a valid HEX color value', () => {
  expect(validate(color, 'efef')).toBe(false)
  expect(validate(color, 'aeb4c')).toBe(false)
  expect(validate(color, 'c4d4e4f')).toBe(false)
  expect(validate(color, 'c4g4e4')).toBe(false)
})

test('Is a valid text input', () => {
  expect(validate(text, '')).toBe(true)
  expect(validate(text, 'foo bar')).toBe(true)
  expect(validate(text, ' foo _-+=.,:;?@!$&\'"()*+=. bar')).toBe(true)
  expect(validate(text, "foo _-+=.,:;?@!$&'\"()*+=. bar ")).toBe(true)
})

test('Is not a valid text input', () => {
  expect(validate(text, 'foo bar /')).toBe(false)
  expect(validate(text, '#hex')).toBe(false)
  expect(validate(text, '[foo] (bar)')).toBe(false)
  expect(validate(text, 'foo _-+=.,:;?@!$&\'"()*+=. bar baz')).toBe(false)
})
