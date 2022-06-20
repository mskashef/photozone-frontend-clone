import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './Tags.module.scss';
import Tag from "../../components/Tag/Tag";

const Tags = props => {
    return (
        <div className={classes.Tags}>
            {props.items.map(tag => <Tag key={tag + ":" + Math.random()} value={tag}/>)}
        </div>
    );
};

export default Tags;

Tags.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
};
