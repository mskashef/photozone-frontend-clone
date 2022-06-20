import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './Thumbnail.module.scss';

const Thumbnail = props => {
    return (
        <div
            title={props.hoverTitle}
            className={classes.Thumbnail}
            onClick={props.onClick}
            style={{
                backgroundImage: `url(${props.src})`
            }}
        />
    );
};

export default Thumbnail;

Thumbnail.propTypes = {
    src: PropTypes.string,
    hoverTitle: PropTypes.string,
    onClick: PropTypes.func
};
