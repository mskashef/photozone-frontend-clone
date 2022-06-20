import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './OrangeButton.module.scss';

const OrangeButton = props => {
    return (
        <button style={props.style} className={classes.OrangeButton} onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default OrangeButton;

OrangeButton.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    onClick: PropTypes.func,
    style: PropTypes.object
};
