import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Thumbnail from "./Thumbnail";

it('EmptyThumbnail Test', () => {
    const func = sinon.spy();
    const wrapper = shallow(
        <Thumbnail
            src={'imageUrl'}
            hoverTitle={'title'}
            onClick={func}
        />
    );
    expect(wrapper.find('div').get(0).props.title).toEqual('title');
    wrapper.simulate('click');
    expect(func).toHaveProperty('callCount', 1);
});
