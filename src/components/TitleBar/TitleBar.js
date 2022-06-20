import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './TitleBar.module.scss';

const TitleBar = (props) => {
  return (
    <div
      className={
        props.noShadow
          ? [classes.TitleBar, classes.noShadow].join(' ')
          : classes.TitleBar
      }
      style={{ backgroundColor: 'black' }}
    >
      {props.children}
    </div>
  );
};

export default TitleBar;

TitleBar.propTypes = {
  children: PropTypes.any,
  noShadow: PropTypes.bool,
};
