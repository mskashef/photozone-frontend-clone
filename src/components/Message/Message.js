import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './Message.module.scss';

const Message = props => {
    return (
        <div className={props.me ? [classes.MessageWrapper, classes.me].join(' ') : classes.MessageWrapper} onClick={props.onClick}>
            <div className={classes.Message}>
                {props.content.split("&lt%end_Of_Line%&gt").map((line, idx) => <div key={idx}>{line}</div>)}
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    );
};

export default Message;

Message.propTypes = {
    me: PropTypes.bool,
    time: PropTypes.string,
    content: PropTypes.string,
};
