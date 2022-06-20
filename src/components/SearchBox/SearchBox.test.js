import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SearchBox from "./SearchBox";

it('sums numbers', () => {
    const func = sinon.spy();
    const wrapper = shallow(
        <SearchBox
            text={'text'}
            onClick={func}
        />
    );
    expect(wrapper.contains('text')).toEqual(true);
    wrapper.simulate('click');
    expect(func).toHaveProperty('callCount', 1);
});
