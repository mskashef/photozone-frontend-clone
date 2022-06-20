import React from 'react';
import { shallow } from 'enzyme';
import TitleBar from "./TitleBar";

it('NewPostSvgIcon Test', () => {
    const children1 = <h1>Hello</h1>;
    const children2 = <h2>Hello</h2>;
    const wrapper = shallow(
        <TitleBar>{children1}</TitleBar>
    );

    expect(wrapper.contains(children1)).toEqual(true);

    wrapper.setProps({children: children2});

    expect(wrapper.contains(children2)).toEqual(true);
});
