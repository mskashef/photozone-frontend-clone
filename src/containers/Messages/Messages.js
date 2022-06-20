import React from 'react';
import * as PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classes from './Messages.module.scss';
import Message from "../../components/Message/Message";
import store from 'store';
const Messages = props => {
    return (
        <div className={classes.usersContainer}>
            {
                props.items.length > 0 ? props.items.map(message => (
                    <Message
                        key={message.message_id}
                        me={message.sender_id === store.get('username')}
                        content={message.content}
                        time={message.sent_time.slice(message.sent_time.indexOf('T') + 1, message.sent_time.indexOf('T') + 6)}
                    />
                )) : (
                    <div className={classes.noPosts}>No Messages yet.</div>
                )
            }
        </div>
    );
};

export default withRouter(Messages);

Messages.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            hasNewMessage: PropTypes.bool,
            contactName: PropTypes.string,
            contactUsername: PropTypes.string,
            profPic: PropTypes.string
        })
    )
};
Messages.defaultProps = {};
