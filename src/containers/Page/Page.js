import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './Page.module.scss';

const Page = props => {
    return (
        <div className={classes.Page}>
            {props.children}
        </div>
    );
};

export default Page;

Page.propTypes = {
    children: PropTypes.any,
};
Page.defaultProps = {
    children: null,
};
