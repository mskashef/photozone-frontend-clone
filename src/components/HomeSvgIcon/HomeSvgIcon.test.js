import React from 'react';
import { shallow } from 'enzyme';
import HomeSvgIcon from "./HomeSvgIcon";
import sinon from 'sinon';
import ChatsSvgIcon from "../ChatsSvgIcon/ChatsSvgIcon";

it('NewPostSvgIcon Test', () => {

    const func = sinon.spy();
    const activeColor = "#000";
    const color = "#999";
    const wrapper = shallow(
        <HomeSvgIcon
            active={false}
            color={color}
            activeColor={activeColor}
            onClick={func}
        />
    );

    expect(wrapper.find('#Path_21').first().props().fill).toEqual(color);

    wrapper.setProps({active: true});

    expect(wrapper.find('#Path_21').first().props().fill).toEqual(activeColor);

    wrapper.simulate('click');
    expect(func).toHaveProperty('callCount', 1);
});
