import React from 'react'
import { shallow } from 'enzyme'
import Form from '../../../src/components/form'
import ThemeSelector from '../../../src/components/theme-selector'
import renderer from 'react-test-renderer'
import { indetity } from '../utils'

test('Form component', () => {
  const component = renderer.create(
    <Form />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

describe('Form event handlers', () => {
  test('handleThemeSelection', () => {
    const component = shallow(
      <Form />
    )

    component.find(ThemeSelector).simulate('click', { theme: 'foo' })
    expect(component).toMatchSnapshot()
  })

  test('handleInputBlur valid value', () => {
    const fakeEvent = { target: { id: 'size', value: '800' } }
    const component = shallow(
      <Form />
    )

    component.find('[type="text"]').first().simulate('blur', fakeEvent)
    expect(component).toMatchSnapshot()
  })

  test('handleInputBlur invalid value', () => {
    const fakeEvent = { target: { id: 'size', value: 'bar' } }
    const component = shallow(
      <Form />
    )

    component.find('[type="text"]').first().simulate('blur', fakeEvent)
    expect(component).toMatchSnapshot()
  })

  test('handleTypeSelection', () => {
    const component = shallow(
      <Form />
    )

    component.find('[label="Type"]').simulate('change')
    expect(component).toMatchSnapshot()
  })

  test('handleFilterSelection', () => {
    const component = shallow(
      <Form />
    )

    component.find('[label="Filter"]').simulate('change')
    expect(component).toMatchSnapshot()
  })

  test('handleChangeComplete', () => {
    const component = shallow(
      <Form />
    )

    component.find('[label="Background"]').prop('onChangeComplete')('foo', '000')
    expect(component).toMatchSnapshot()
  })

  test('handleOnClick', () => {
    window.getSelection = () => ({ selectAllChildren: indetity })
    const component = shallow(
      <Form />
    )

    component.find('.url-display').simulate('click', { target: 'foo' })
    expect(component).toMatchSnapshot()
  })
})
