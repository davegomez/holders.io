import React from 'react'
import NavBar from '../../../src/components/navbar'
import renderer from 'react-test-renderer'

test('NavBar component', () => {
  const component = renderer.create(
    <NavBar url={{ pathname: '/' }} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
