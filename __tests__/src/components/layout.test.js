import React from 'react'
import Layout from '../../../src/components/layout'
import renderer from 'react-test-renderer'

test('ThemeSelector component', () => {
  const component = renderer.create(
    <Layout url='foo' />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
