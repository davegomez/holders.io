import React from 'react'
import ThemeButton from '../../../src/components/theme-button'
import renderer from 'react-test-renderer'
import { indetity } from '../test-utils'

test('ThemeButton component active and no theme', () => {
  const component = renderer.create(
    <ThemeButton
      key='foo'
      active={ true }
      onClick={ indetity }
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onClick()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('ThemeButton component active', () => {
  const component = renderer.create(
    <ThemeButton
      key='foo'
      theme='foo'
      active={ true }
      onClick={ indetity }
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onClick()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('ThemeButton component inactive', () => {
  const component = renderer.create(
    <ThemeButton
      key='empty'
      theme='empty'
      active={ false }
      onClick={ indetity }
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onClick()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
