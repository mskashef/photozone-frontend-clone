import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import classes from './ChatPage.module.scss';
import TitleBar from '../../components/TitleBar/TitleBar';
import PageBody from '../../containers/PageBody/PageBody';
import Posts from '../../containers/Posts/Posts';
import Page from '../../containers/Page/Page';
import axios from 'axios';
import store from 'store';
import saved from '../../assets/saved.svg';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ScrollMemory from 'react-router-scroll-memory';
import back from '../../assets/back.svg';
import TitledPic from '../../components/TitledPic/TitledPic';
import { backendBaseUrl } from '../../constants/js/constants';
import Message from '../../components/Message/Message';
import Messages from '../../containers/Messages/Messages';
import WriteMessage from '../../components/WriteMessage/WriteMessage';
import { IconButton } from '@material-ui/core';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';

let getMessagesInterval;
const ChatPage = (props) => {
  const [messages, setMessages] = useState([]);
  const [profPic, setProfPic] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const backButtonHandler = () => props.history.goBack();

  const getMessages = () => {
    axios
      .post(
        '/getMessages',
        { contactId: props.match.params.id },
        { withCredentials: true }
      )
      .then((res) => {
        setMessages(res.data.messages);
        console.log(res.data.contact);
        setProfPic(res.data.contact.profPic);
        setName(res.data.contact.name);
        setUsername(res.data.contact.username);
      })
      .catch(() => {});
  };

  useEffect(() => {
    if (props.componentDidMount) props.componentDidMount();
    if (props.match.params.id) {
      getMessages();
      getMessagesInterval = setInterval(getMessages, 1000);
    }
    return () => clearInterval(getMessagesInterval);
  }, []);
  const sendMessageHandler = (msg) => {
    setMessage('');
    axios
      .post(
        '/sendMessage',
        { content: msg, to: username },
        { withCredentials: true }
      )
      .then((res) => {
        getMessages();
      })
      .catch(() => {});
  };
  const profileClickHandler = () => {
    props.history.push('/users/' + username);
  };
  return (
    <Page>
      <TitleBar>
        <IconButton style={{ color: 'white' }} onClick={backButtonHandler}>
          <KeyboardBackspace />
        </IconButton>
        <div style={{ flex: 1, paddingLeft: 10 }}>
          <TitledPic
            caption={''}
            title={name}
            img={backendBaseUrl + profPic}
            imageStyle={{ width: 35, height: 35 }}
            titleStyle={{ margin: 0, fontSize: 14, marginTop: 20 }}
            captionStyle={{ margin: 0, fontSize: 12 }}
            onClick={(userId) => {
              profileClickHandler(userId);
            }}
          />
        </div>
      </TitleBar>
      <PageBody scrollDown>
        <Messages items={messages} />
      </PageBody>
      <WriteMessage
        value={message}
        onChangeText={(text) => setMessage(text)}
        onTextMessageSubmit={(msg) => sendMessageHandler(msg)}
      />
    </Page>
  );
};

const mapStateToProps = (state) => {
  return {
    openedChat: state.openedChat,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ChatPage));

ChatPage.propTypes = {
  componentDidMount: PropTypes.func,
};
ChatPage.defaultProps = {};
