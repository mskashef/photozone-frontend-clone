import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import PageBody from '../../containers/PageBody/PageBody';
import Page from '../../containers/Page/Page';
import axios from 'axios';
import saved from '../../assets/saved.svg';
import TitleBar from '../../components/TitleBar/TitleBar';
import Chats from '../../containers/Chats/Chats';
import { connect } from 'react-redux';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';
import { IconButton } from '@material-ui/core';

let aslkdaiusdh;
const ChatsPage = (props) => {
  const getMessages = () => {
    if (props.componentDidMount) props.componentDidMount();
    axios
      .post('/getChats', {}, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setChats(res.data);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getMessages();
    aslkdaiusdh = setInterval(getMessages, 1000);
    return () => clearInterval(aslkdaiusdh);
  }, []);

  const savedClickHandler = () => props.history.push('/savedPosts');

  const [chats, setChats] = useState([]);

  return (
    <Page>
      <TitleBar>
        <b
          style={{
            color: 'white',
            width: '100%',
            paddingLeft: 10,
          }}
        >
          Chats
        </b>
        <div
          style={{
            width: 30,
            height: 30,
            position: 'absolute',
            right: 15,
            cursor: 'pointer',
          }}
        >
          <IconButton
            style={{ color: 'white', margin: -10 }}
            onClick={savedClickHandler}
          >
            <BookmarkBorder />
          </IconButton>
          {/* <img
            alt=""
            style={{ cursor: 'pointer' }}
            src={saved}
            onClick={() => {
              savedClickHandler();
            }}
          /> */}
        </div>
      </TitleBar>
      <PageBody uid="ChatsPage">
        <Chats
          onChatSelect={(chat) => props.setOpenedChat(chat)}
          items={chats}
        />
      </PageBody>
    </Page>
  );
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  setOpenedChat: (val) => dispatch({ type: 'setOpenedChat', value: val }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ChatsPage));

ChatsPage.propTypes = {
  componentDidMount: PropTypes.func,
};
ChatsPage.defaultProps = {};
