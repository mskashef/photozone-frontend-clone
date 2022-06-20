import React from 'react';
import { shallow } from 'enzyme';
import Tag from "./Tag";

it('sums numbers', () => {
    const wrapper = shallow(
        <Tag value={'text'} />
    );
    expect(wrapper.contains('text')).toEqual(true);
});
