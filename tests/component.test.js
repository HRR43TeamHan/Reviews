import React from 'react';
import { render, shallow } from 'enzyme';

import App from '../src/components/App.jsx';
import ReviewsContainer from '../src/components/ReviewsContainer.jsx';
import ReviewsList from '../src/components/ReviewsList.jsx';
import ReviewsItem from '../src/components/ReviewsItem.jsx';

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });
// import { shallow } from 'enzyme';
// import React from 'react';

// function Stateless({ name }) {
// 	return <div>{name}</div>;
// }

// class Statefull extends React.Component {
// 	render() {
// 		return <div>{this.props.name}</div>;
// 	}
// }

// describe('enzyme 3 with React 16', () => {
// 	const props = {
// 		name: 'Test',
// 	};

// 	describe('this should be a Stateless component', () => {
// 		test('shallow wrapper instance should not be null', () => {
// 			const wrapper = shallow(<this {...props} />);
// 			const instance = wrapper.instance();

// 		    expect(instance).not.toBe(null);
// 		});
// 	});

// 	describe('Statefull component', () => {
// 		test('shallow wrapper instance should not be null', () => {
// 			const wrapper = shallow(<Statefull {...props} />);
// 			const instance = wrapper.instance();

// 		    expect(props).not.toBe(null);
// 		});
// 	});
// });

const props = {
  rating: 666,
  view: 1,
  reviewsAmt: 666666,
  page: 1,
  handleTabClick: function () {
    return null;
  },
  setPage: function () {

  },
  handleToggleFilter: function () {

  },
};

import Tabs from '../src/components/Tabs.jsx';

describe('Tabs should be a Stateless component', () => {
  test('shallow wrapper props should not be null', () => {

    const wrapper = shallow(<Tabs {...props} />);
    const proper = wrapper.props();

    expect(proper).not.toBe(null);
  });
});


import Search from '../src/components/Search.jsx';

describe('Search should be a Stateless component', () => {
  test('shallow wrapper props should not be null', () => {
    const wrapper = shallow(<Search {...props} />);
    const props = wrapper.props();

    expect(props).not.toBe(null);
  });
});


import RatingCircles from '../src/components/RatingCircles.jsx';

describe('RatingCircles should be a Stateless component', () => {
  test('shallow wrapper props should not be null', () => {

    const wrapper = shallow(<RatingCircles {...props} />);
    const proper = wrapper.props();

    expect(proper).not.toBe(null);
		});
	});


  import Photos from '../src/components/Photos.jsx';

	describe('Photos should be a Stateless component', () => {
    test('shallow wrapper props should not be null', () => {
      const wrapper = shallow(<Photos {...props} />);
			const props = wrapper.props();

      expect(props).not.toBe(null);
		});
	});


  import Paginator from '../src/components/Paginator.jsx';

	describe('Paginator should be a Stateless component', () => {
    test('shallow wrapper props should not be null', () => {
      const wrapper = shallow(<Paginator {...props} />);
			const proper = wrapper.props();

      expect(proper).not.toBe(null);
		});
	});


import FilterTravelerType from '../src/components/FilterTravelerType.jsx';

	describe('FilterTravelerType should be a Stateless component', () => {
		test('shallow wrapper props should not be null', () => {
			const wrapper = shallow(<FilterTravelerType {...props} />);
			const proper = wrapper.props();

		    expect(proper).not.toBe(null);
		});
	});


import FilterTime from '../src/components/FilterTime.jsx';

	describe('FilterTime should be a Stateless component', () => {
		test('shallow wrapper props should not be null', () => {
			const wrapper = shallow(<FilterTime {...props} />);
			const proper = wrapper.props();

		    expect(proper).not.toBe(null);
		});
	});


import FilterRatings from '../src/components/FilterRatings.jsx';

	describe('FilterRatings should be a Stateless component', () => {
		test('shallow wrapper props should not be null', () => {
			const wrapper = shallow(<FilterRatings {...props} />);
			const proper = wrapper.props();

		    expect(proper).not.toBe(null);
		});
	});


import FilterPopularMentions from '../src/components/FilterPopularMentions.jsx';

	describe('FilterPopularMentions should be a Stateless component', () => {
		test('shallow wrapper props should not be null', () => {
			const wrapper = shallow(<FilterPopularMentions {...props} />);
			const proper = wrapper.props();

		    expect(proper).not.toBe(null);
		});
	});


import FilterLanguage from '../src/components/FilterLanguage.jsx';

	describe('FilterLanguage should be a Stateless component', () => {
		test('shallow wrapper props should not be null', () => {
			const wrapper = shallow(<FilterLanguage {...props} />);
			const proper = wrapper.props();

		    expect(proper).not.toBe(null);
		});
	});

import AllFilters from '../src/components/AllFilters.jsx';

	describe('AllFilters should be a Stateless component', () => {
		test('shallow wrapper props should not be null', () => {
			const wrapper = shallow(<AllFilters {...props} />);
			const proper = wrapper.props();

		    expect(proper).not.toBe(null);
		});
	});

describe('App.jsx', () => {

  test('it should exist', () => {
    expect(new App()).toBeDefined();
  });
  test('it should be an instance of a class', () => {
    expect(new App()).toBeInstanceOf(App);
  });
});

describe('App should be Statefull component', () => {
  test('shallow wrapper instance should not be null', () => {

    const wrapper = shallow(<App {...props} />);
    const instance = wrapper.instance();

    expect(instance).not.toBe(null);
  });
});

describe('ReviewsContainer.jsx', () => {

  test('it should exist', () => {
    expect(new ReviewsContainer()).toBeDefined();
  });
  test('it should be an instance of a class', () => {
    expect(new ReviewsContainer()).toBeInstanceOf(ReviewsContainer);
  });
});

describe('ReviewsList.jsx', () => {

  test('it should exist', () => {
    expect(new ReviewsList()).toBeDefined();
  });
  test('it should be an instance of a class', () => {
    expect(new ReviewsList()).toBeInstanceOf(ReviewsList);
  });
});

describe('ReviewsItem.jsx', () => {

  test('it should exist', () => {
    expect(new ReviewsItem()).toBeDefined();
  });
  test('it should be an instance of a class', () => {
    expect(new ReviewsItem()).toBeInstanceOf(ReviewsItem);
  });
});

