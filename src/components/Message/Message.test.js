import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Message from "./Message";

it('sums numbers', () => {
    const func = sinon.spy();
    const wrapper = shallow(
        <Message
            text={'text'}
            onClick={func}
        />
    );
    expect(wrapper.contains('text')).toEqual(true);
    wrapper.simulate('click');
    expect(func).toHaveProperty('callCount', 1);
});
