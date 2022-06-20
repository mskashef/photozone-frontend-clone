import React from 'react';
import { shallow } from 'enzyme';
import PageDetails from "./PageDetails";

it('PageDetails test', () => {
    const photos = 10;
    const followers = 11;
    const followings = 12;

    const wrapper = shallow(
        <PageDetails
            followers={followers}
            photos={photos}
            followings={followings}
        />
    );
    expect(wrapper.find("div").find("#photosCount").text()).toEqual(photos + "");
    expect(wrapper.find("div").find("#followersCount").text()).toEqual(followers + "");
    expect(wrapper.find("div").find("#followingsCount").text()).toEqual(followings + "");

    wrapper.setProps({
        followers: 13,
        photos: 14,
        followings: 15,
    });

    expect(wrapper.find("div").find("#followersCount").text()).toEqual("13");
    expect(wrapper.find("div").find("#photosCount").text()).toEqual("14");
    expect(wrapper.find("div").find("#followingsCount").text()).toEqual("15");
});
