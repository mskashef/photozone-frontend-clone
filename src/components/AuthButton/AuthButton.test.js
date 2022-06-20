import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import AuthButton from "./AuthButton";

it('sums numbers', () => {
    const func = sinon.spy();
    const wrapper = shallow(
        <AuthButton
            text={'text'}
            onClick={func}
        />
    );
    expect(wrapper.contains('text')).toEqual(true);
    wrapper.simulate('click');
    expect(func).toHaveProperty('callCount', 1);
});
