import React from 'react';
import * as PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classes from './AuthTextField.module.scss';
import {TextField} from "@material-ui/core";

const AuthTextField = props => {

    return (
        <div className={classes.container} style={props.containerStyle} onClick={props.onClick}>
            <TextField
                className={classes.TextField}
                value={props.value}
                label={props.label}
                variant="outlined"
                placeholder={props.placeholder}
                style={{width: 'calc(100% - 150px)', minWidth: 300, maxWidth: 400}}
                onChange={props.onChange}
            />
        </div>
    );
};

export default withRouter(AuthTextField);

AuthTextField.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    containerStyle: PropTypes.object,
    filled: PropTypes.bool,
};
AuthTextField.defaultProps = {};
