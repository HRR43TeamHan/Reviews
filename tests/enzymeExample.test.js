import { shallow } from 'enzyme';
import React from 'react';
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

function Stateless({ name }) {
	return <div>{name}</div>;
}

class Statefull extends React.Component {
	render() {
		return <div>{this.props.name}</div>;
	}
}

describe('enzyme 3 with React 16', () => {
	const props = {
		name: 'Test',
	};

	describe('Stateless component', () => {
		test('shallow wrapper instance should not be null', () => {
			const wrapper = shallow(<Stateless {...props} />);
			const instance = wrapper.props();

		    expect(instance).not.toBe(null);
		});
	});

	describe('Statefull component', () => {
		test('shallow wrapper instance should not be null', () => {
			const wrapper = shallow(<Statefull {...props} />);
			const instance = wrapper.instance();

		    expect(instance).not.toBe(null);
		});
	});
});
