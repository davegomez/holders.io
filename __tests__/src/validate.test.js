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
