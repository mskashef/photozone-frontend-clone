import React, {Fragment} from 'react';
import * as PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classes from './Chats.module.scss';
import TitledPic from "../../components/TitledPic/TitledPic";
import {backendBaseUrl} from '../../constants/js/constants';

const Chats = props => {

    const minimizeContent = content => {
        content = content.split('&lt%end_Of_Line%&gt').join(' ');
        return (content.length > 32) ? content.slice(0, 32) + '...' : content;
    };

    return (
        <div className={classes.usersContainer}>
            {
                props.items && props.items.length > 0 ? props.items.map(chat => (
                    <Fragment key={Math.random()}>
                        <TitledPic
                            showBadge={chat.hasNewMessage}
                            title={chat.contactUsername}
                            caption={minimizeContent(chat.content)}
                            img={backendBaseUrl + chat.profPic}
                            userId={chat.contactUsername} onClick={() => {
                            props.history.push("/chats/" + chat.contactUsername);
                            props.onChatSelect(chat);
                        }}
                        />
                        <div className={classes.line}/>
                    </Fragment>
                )) : (
                    <div className={classes.noPosts}>No chats.</div>
                )
            }
        </div>
    );
};

export default withRouter(Chats);

Chats.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            hasNewMessage: PropTypes.bool,
            contactName: PropTypes.string,
            contactUsername: PropTypes.string,
            profPic: PropTypes.string
        })
    ),
    onChatSelect: PropTypes.func,
};
Chats.defaultProps = {};
