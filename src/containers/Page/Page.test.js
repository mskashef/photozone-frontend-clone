import React from 'react';
import { shallow } from 'enzyme';
import Page from "./Page";

it('NewPostSvgIcon Test', () => {
    const body1 = <h1>Hello World</h1>;
    const body2 = <h2>Hello World</h2>;
    const wrapper = shallow(
        <Page>{body1}</Page>
    );

    expect(wrapper.contains(body1)).toEqual(true);

    wrapper.setProps({
        children: body2
    });

    expect(wrapper.contains(body2)).toEqual(true);

});
