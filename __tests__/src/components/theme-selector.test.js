import React from 'react'
import ThemeSelector from '../../../src/components/theme-selector'
import renderer from 'react-test-renderer'
import { indetity } from '../test-utils'

test('ThemeSelector component', () => {
  const component = renderer.create(
    <ThemeSelector onClick={ indetity } />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
