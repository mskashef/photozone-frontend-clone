import React from 'react';
import { shallow } from 'enzyme';
import PostPage from "./ProfilePage";

it('NewPostSvgIcon Test', () => {
    const body1 = <h1>Hello World</h1>;
    const body2 = <h2>Hello World</h2>;
    const wrapper = shallow(
        <PostPage>{body1}</PostPage>
    );

    expect(wrapper.contains(body1)).toEqual(true);

    wrapper.setProps({
        children: body2
    });

    expect(wrapper.contains(body2)).toEqual(true);

});
