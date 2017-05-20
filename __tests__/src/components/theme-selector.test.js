import React from 'react'
import { shallow } from 'enzyme'
import ThemeSelector from '../../../src/components/theme-selector'
import renderer from 'react-test-renderer'
import { indetity } from '../utils'

test('ThemeSelector component', () => {
  const component = renderer.create(
    <ThemeSelector onClick={ indetity } />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

describe('ThemeSelector event handlers', () => {
  test('handleClick', () => {
    const fakeEvent = { target: { dataset: { theme: 'puppy' } } }
    const component = shallow(
      <ThemeSelector onClick={ indetity } />
    )

    component.find('[theme="puppy"]').simulate('click', fakeEvent)
    expect(component).toMatchSnapshot()
  })
})
