import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import App from './App'
import styles from './styles.module.css'

describe('<App />', () => {
	// define our tests in here
	let wrapper; // "dom" node wrapper elment
	beforeEach(() => {
		wrapper = shallow(<App />);
	})

	it('has a Router component', () => {
		expect(wrapper.find('Router')).to.have.length(1);
	})
})