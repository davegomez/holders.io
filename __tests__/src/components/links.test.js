import React from 'react'
import Links from '../../../src/components/links'
import renderer from 'react-test-renderer'

test('Links component', () => {
  const component = renderer.create(
    <Links url={{ pathname: '/' }}>Facebook</Links>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
