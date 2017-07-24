import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Heading1 from './Heading1'

test('Header component should render', () => {
  const component = shallow(<Heading1 />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
