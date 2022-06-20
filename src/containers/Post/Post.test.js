import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Post from "./Post";

it('NewPostSvgIcon Test', () => {
    const func = sinon.spy();
    const wrapper = shallow(
        <Post
            tabs={['PostPage','Users']}
            activeTab={'Users'}
            onTabChange={func}
        />
    );

    wrapper.find('div#PostPage').simulate('click');
    wrapper.find('div#Users').simulate('click');
    expect(func).toHaveProperty('callCount', 2);

    wrapper.setProps({
        activeTab: 'PostPage'
    });
    expect(wrapper.find("div.TabSelectionActiveTab").first().text()).toEqual('PostPage');

    wrapper.setProps({
        activeTab: 'Users'
    });
    expect(wrapper.find("div.TabSelectionActiveTab").first().text()).toEqual('Users');

});
