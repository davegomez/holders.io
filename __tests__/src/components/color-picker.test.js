import React from 'react'
import { shallow } from 'enzyme'
import { SketchPicker } from 'react-color'
import ColorPicker from '../../../src/components/color-picker'
import renderer from 'react-test-renderer'
import { indetity } from '../utils'

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

describe('ColorPicker event handlers', () => {
  test('handleClick', () => {
    const component = shallow(
      <ColorPicker
        label='foo'
        color='#abc'
        onChangeComplete={ indetity }
      />
    )

    component.find('.picker').simulate('click')
    expect(component).toMatchSnapshot()
  })

  test('handleClose', () => {
    const component = shallow(
      <ColorPicker
        label='foo'
        color='#abc'
        onChangeComplete={ indetity }
      />
    )

    component.find('.picker').simulate('click')
    component.find('.cover').simulate('click')
    expect(component).toMatchSnapshot()
  })

  test('handleChangeComplete', () => {
    const component = shallow(
      <ColorPicker
        label='foo'
        color='#abc'
        onChangeComplete={ indetity }
      />
    )

    component.find('.picker').simulate('click')
    component.find(SketchPicker).prop('onChangeComplete')({ hex: '#abc' })
    expect(component).toMatchSnapshot()
  })
})
