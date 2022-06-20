import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import TitledPic from "./TitledPic";
import classes from "./TitledPic.module.scss";

it('sums numbers', () => {
    const func = sinon.spy();
    const wrapper = shallow(
        <TitledPic
            img={'imageUrl'}
            title={'title'}
            caption={'caption'}
            onClick={func}
        />
    );
    expect(wrapper.contains(<div className={classes.title}>title</div>)).toEqual(true);
    expect(wrapper.contains(<div className={classes.caption}>caption</div>)).toEqual(true);
    wrapper.simulate('click');
    expect(func).toHaveProperty('callCount', 1);
    // expect(wrapper.contains(<div className={classes.img} style='background-image: url("imageUrl");' />)).toEqual(true);
});
