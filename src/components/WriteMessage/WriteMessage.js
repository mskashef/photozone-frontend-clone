import React, { useState } from 'react';
import send from '../../assets/WriteMessage/send.svg';
import * as PropTypes from 'prop-types';
import classes from './WriteMessage.module.scss';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { IconButton } from '@material-ui/core';

const WriteMessage = (props) => {
  return (
    <div className={classes.writeMessage}>
      <textarea
        placeholder={'Enter your message...'}
        className={classes.textarea}
        style={{ color: '#000000', fontFamily: 'Arial', color: 'white' }}
        value={props.value}
        onChange={(e) => props.onChangeText(e.target.value)}
      />
      <div
        style={{
          color: 'steelblue',
          fontWeight: 'bolder',
          marginRight: 5,
        }}
        onClick={() => {
          props.onTextMessageSubmit(props.value);
        }}
      >
        Send
      </div>
    </div>
  );
};

export default WriteMessage;

WriteMessage.propTypes = {
  onTextMessageSubmit: PropTypes.func,
};
