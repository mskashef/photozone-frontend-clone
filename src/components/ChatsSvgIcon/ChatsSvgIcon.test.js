import React from 'react';
import { shallow } from 'enzyme';
import ChatsSvgIcon from "./ChatsSvgIcon";
import sinon from 'sinon';

it('NewPostSvgIcon Test', () => {
    const func = sinon.spy();
    const activeColor = "#000";
    const color = "#999";
    const wrapper = shallow(
        <ChatsSvgIcon
            active={false}
            color={color}
            activeColor={activeColor}
            onClick={func}
        />
    );

    expect(wrapper.find('#_1370907').first().props().fill).toEqual(color);

    wrapper.setProps({active: true});

    expect(wrapper.find('#_1370907').first().props().fill).toEqual(activeColor);

    wrapper.simulate('click');
    expect(func).toHaveProperty('callCount', 1);
});
