import React from 'react'
import Selection from '../../../src/components/selection'
import renderer from 'react-test-renderer'

test('Selection component', () => {
  const component = renderer.create(
    <Selection
      label='foo'
      value='bar'
      options={[ { value: 'foo', label: 'bar'} ]}
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
