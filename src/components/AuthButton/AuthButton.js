import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './AuthButton.module.scss';

const AuthButton = props => {
    const className = props.filled ? [classes.AuthButton, classes.filled].join(' ') : classes.AuthButton;
    return (
        <button style={props.style} className={className} onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default AuthButton;

AuthButton.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    onClick: PropTypes.func,
    style: PropTypes.object
};
