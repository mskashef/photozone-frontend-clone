import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import EmptyThumbnail from "./EmptyThumbnail";

it('EmptyThumbnail Test', () => {
    const func = sinon.spy();
    const wrapper = shallow(
        <EmptyThumbnail
            src={'imageUrl'}
            hoverTitle={'title'}
            onClick={func}
        />
    );
    expect(wrapper.find('div').get(0).props.title).toEqual('title');
    wrapper.simulate('click');
    expect(func).toHaveProperty('callCount', 1);
});
