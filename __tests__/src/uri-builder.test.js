import buildUrl from '../../src/uri-builder'

const protocol = 'https://'
const domain = 'holders.io'
const baseUrl = `${protocol}${domain}`

test('Initial URL', () => {
  expect(buildUrl({})).toBe(baseUrl)
})

test('URL with size', () => {
  expect(buildUrl({ size: '800x600' })).toBe(`${baseUrl}/800x600`)
  expect(buildUrl({ size: '1280' })).toBe(`${baseUrl}/1280`)
})

test('URL with size and text', () => {
  const size = '800'
  expect(buildUrl({ size, text: 'foo' })).toBe(`${baseUrl}/800/foo`)
  expect(buildUrl({ size, text: 'bar' })).toBe(`${baseUrl}/800/bar`)
})

test('URL with no size and text', () => {
  expect(buildUrl({ text: 'foo' })).toBe(baseUrl)
  expect(buildUrl({ text: 'bar' })).toBe(baseUrl)
})

test('URL with size and theme', () => {
  const size = '800'
  expect(buildUrl({ size, theme: 'foo' })).toBe(`${protocol}foo.${domain}/800`)
  expect(buildUrl({ size, theme: 'bar' })).toBe(`${protocol}bar.${domain}/800`)
})

test('URL with no size and theme', () => {
  expect(buildUrl({ theme: 'foo' })).toBe(baseUrl)
  expect(buildUrl({ theme: 'bar' })).toBe(baseUrl)
})

test('URL with size and background color', () => {
  const size = '800'
  expect(buildUrl({ size, background: 'abc' })).toBe(`${baseUrl}/800/abc`)
  expect(buildUrl({ size, background: 'fff' })).toBe(`${baseUrl}/800/fff`)
})

test('URL with no size and background color', () => {
  expect(buildUrl({ background: 'abc' })).toBe(baseUrl)
  expect(buildUrl({ background: 'fff' })).toBe(baseUrl)
})

test('URL with size, background, and foreground color', () => {
  const size = '800'
  expect(buildUrl({ size, background: 'cba', foreground: 'abc' })).toBe(`${baseUrl}/800/cba-abc`)
  expect(buildUrl({ size, background: '000', foreground: 'fff' })).toBe(`${baseUrl}/800/000-fff`)
})

test('URL with size, no background, and foreground color', () => {
  const size = '800'
  expect(buildUrl({ size, foreground: 'abc' })).toBe(`${baseUrl}/800`)
  expect(buildUrl({ size, foreground: 'fff' })).toBe(`${baseUrl}/800`)
})

test('URL with no size, background, and foreground color', () => {
  expect(buildUrl({ background: 'cba', foreground: 'abc' })).toBe(baseUrl)
  expect(buildUrl({ background: '000', foreground: 'fff' })).toBe(baseUrl)
})

test('Filter with size', () => {
  const size = '800'
  expect(buildUrl({ size, filter: 'foo' })).toBe(`${baseUrl}/800/foo`)
  expect(buildUrl({ size, filter: 'bar' })).toBe(`${baseUrl}/800/bar`)
})

test('Filter with no size', () => {
  expect(buildUrl({ filter: 'foo' })).toBe(baseUrl)
  expect(buildUrl({ filter: 'bar' })).toBe(baseUrl)
})

test('Type with size', () => {
  const size = '800'
  expect(buildUrl({ size, type: 'foo' })).toBe(`${baseUrl}/800.foo`)
  expect(buildUrl({ size, type: 'bar' })).toBe(`${baseUrl}/800.bar`)
})

test('Type with no size', () => {
  expect(buildUrl({ type: 'foo' })).toBe(baseUrl)
  expect(buildUrl({ type: 'bar' })).toBe(baseUrl)
})
