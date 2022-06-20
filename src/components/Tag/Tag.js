import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './Tag.module.scss';

const Tag = props => {
    return (
        <div className={classes.Tag}>
            {props.value}
        </div>
    );
};

export default Tag;

Tag.propTypes = {
    value: PropTypes.string
};
