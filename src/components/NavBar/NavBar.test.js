import React from 'react';
import { shallow } from 'enzyme';
import NavBar from "./NavBar";
import sinon from 'sinon';
import HomeSvgIcon from "../HomeSvgIcon/HomeSvgIcon";
import SearchSvgIcon from "../SearchSvgIcon/SearchSvgIcon";
import ProfileSvgIcon from "../ProfileSvgIcon/ProfileSvgIcon";
import NewPostSvgIcon from "../NewPostSvgIcon/NewPostSvgIcon";
import ChatsSvgIcon from "../ChatsSvgIcon/ChatsSvgIcon";

it('NewPostSvgIcon Test', () => {
    const func = sinon.spy();
    const wrapper = shallow(
        <NavBar onChangeTab={func} />
    );

    wrapper.find(HomeSvgIcon).simulate('click');
    wrapper.find(ProfileSvgIcon).simulate('click');
    wrapper.find(NewPostSvgIcon).simulate('click');
    wrapper.find(ChatsSvgIcon).simulate('click');
    wrapper.find(SearchSvgIcon).simulate('click');

    wrapper.simulate('click');
    expect(func).toHaveProperty('callCount', 5);
});
