import React from 'react'
import ColorPicker from '../../../src/components/color-picker'
import renderer from 'react-test-renderer'
import { indetity } from '../test-utils'

test('ColorPicker component', () => {
  const component = renderer.create(
    <ColorPicker
      label='foo'
      color='#abc'
      onChangeComplete={ indetity }
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
