import React from 'react'
import Input from '../../../src/components/input'
import renderer from 'react-test-renderer'

test('Input required component', () => {
  const component = renderer.create(
    <Input
      label='foo'
      required
      isValid={ true }
      type='bar'
      placeholder='baz'
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Input not required component', () => {
  const component = renderer.create(
    <Input
      label='foo'
      required={ false }
      isValid={ false }
      type='bar'
      placeholder='baz'
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

