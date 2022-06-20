import React from 'react';
import { shallow } from 'enzyme';
import NewPostSvgIcon from "./NewPostSvgIcon";
import sinon from "sinon";

it('NewPostSvgIcon Test', () => {
    const func = sinon.spy();
    const activeColor = "#000";
    const color = "#999";
    const wrapper = shallow(
        <NewPostSvgIcon
            active={false}
            color={color}
            activeColor={activeColor}
            onClick={func}
        />
    );

    expect(wrapper.find('#Path_13').first().props().fill).toEqual(color);
    expect(wrapper.find('#Path_14').first().props().fill).toEqual(color);

    wrapper.setProps({active: true});

    expect(wrapper.find('#Path_13').first().props().fill).toEqual(activeColor);
    expect(wrapper.find('#Path_14').first().props().fill).toEqual(activeColor);

    wrapper.simulate('click');
    expect(func).toHaveProperty('callCount', 1);
});
