import React from 'react';
import { shallow } from 'enzyme';
import Tags from "./Tags";
import Tag from "../../components/Tag/Tag";

it('Tags Test', () => {
    let tags = [];
    for (let i = 0; i < 10; i++) tags.push("tag" + i);
    let children = tags.map(tag => <Tag key={tag} value={tag} />);
    const wrapper = shallow(<Tags items={tags} />);
    expect(wrapper.contains(children)).toEqual(true);
});
