import validate from '../../src/validate'

test('Is a valid Size', () => {
  expect(validate('800', 'size')).toBe(true)
  expect(validate('1280', 'size')).toBe(true)
  expect(validate('800x600', 'size')).toBe(true)
  expect(validate('1280x800', 'size')).toBe(true)
  expect(validate('1920', 'size')).toBe(true)
  expect(validate('1920x1080', 'size')).toBe(true)
})

test('Is not a valid Size', () => {
  expect(validate('800x', 'size')).toBe(false)
  expect(validate('x1280', 'size')).toBe(false)
  expect(validate('800x600y', 'size')).toBe(false)
  expect(validate('y1280x800', 'size')).toBe(false)
  expect(validate('z1920z', 'size')).toBe(false)
  expect(validate('1920xx1080', 'size')).toBe(false)
  expect(validate('800x1280x1920', 'size')).toBe(false)
})

test('Is a valid HEX color value (shorthand)', () => {
  expect(validate('eee', 'color')).toBe(true)
  expect(validate('e48', 'color')).toBe(true)
  expect(validate('cde', 'color')).toBe(true)
})

test('Is not a valid HEX color value (shorthand)', () => {
  expect(validate('ee', 'color')).toBe(false)
  expect(validate('e48d', 'color')).toBe(false)
  expect(validate('cge', 'color')).toBe(false)
})

test('Is a valid HEX color value', () => {
  expect(validate('efefef', 'color')).toBe(true)
  expect(validate('aeb4c8', 'color')).toBe(true)
  expect(validate('c4d4e4', 'color')).toBe(true)
})

test('Is not a valid HEX color value', () => {
  expect(validate('efef', 'color')).toBe(false)
  expect(validate('aeb4c', 'color')).toBe(false)
  expect(validate('c4d4e4f', 'color')).toBe(false)
  expect(validate('c4g4e4', 'color')).toBe(false)
})

test('Is a valid text input', () => {
  expect(validate('foo bar', 'text')).toBe(true)
  expect(validate(' foo _-+=.,:;?@!$&\'"()*+=. bar', 'text')).toBe(true)
  expect(validate("foo _-+=.,:;?@!$&'\"()*+=. bar ", 'text')).toBe(true)
})

test('Is not a valid text input', () => {
  expect(validate('foo bar /', 'text')).toBe(false)
  expect(validate('#hex', 'text')).toBe(false)
  expect(validate('[foo] (bar)', 'text')).toBe(false)
  expect(validate('foo _-+=.,:;?@!$&\'"()*+=. bar baz', 'text')).toBe(false)
})
