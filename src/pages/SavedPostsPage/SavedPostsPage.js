import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classes from './SavedPostsPage.module.scss';
import PageBody from '../../containers/PageBody/PageBody';
import Page from '../../containers/Page/Page';
import TitledPic from '../../components/TitledPic/TitledPic';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import EmptyThumbnail from '../../components/EmptyThumbnail/EmptyThumbnail';
import store from 'store';
import axios from 'axios';
import PageDetails from '../../components/PageDetails/PageDetails';
import OrangeButton from '../../components/OrangeButton/OrangeButton';
import back from '../../assets/back.svg';
import TitleBar from '../../components/TitleBar/TitleBar';
import moreButton from '../../assets/more.svg';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { backendBaseUrl } from '../../constants/js/constants';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';

const SavedPostsPage = (props) => {
  useEffect(() => {
    if (props.componentDidMount) props.componentDidMount();
    axios
      .post('/getSavedPosts', {}, { withCredentials: true })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {});
  }, []);
  const [posts, setPosts] = useState([]);
  let me = store.get('username');
  let isMe = props.isMe || props.match.params.id === me;

  const backButtonHandler = () => props.history.goBack();

  return (
    <Page>
      <TitleBar>
        {isMe && <b>My Profile</b>}
        <b style={{ color: 'white', width: '100%', paddingLeft: 40 }}>
          Saved Posts
        </b>
        {props.isMe || (
          <div
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              left: 5,
              cursor: 'pointer',
            }}
          >
            <IconButton
              style={{ color: 'white', margin: -10 }}
              onClick={backButtonHandler}
            >
              <KeyboardBackspace />
            </IconButton>
          </div>
        )}
      </TitleBar>
      <PageBody uid="SavedPosts">
        <div className={classes.postsContainer}>
          {posts.map((post) => (
            <Thumbnail
              key={post.post_id}
              src={backendBaseUrl + post.photo}
              hoverTitle={post.title}
              onClick={() => {
                props.history.push('/posts/' + post.post_id);
              }}
            />
          ))}
          {['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'].map(
            (post) => (
              <EmptyThumbnail key={Math.random() + ':' + Math.random()} />
            )
          )}
        </div>
      </PageBody>
    </Page>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setHomePagePosts: (val) =>
      dispatch({ type: 'setHomePagePosts', value: val }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SavedPostsPage));

SavedPostsPage.propTypes = {
  componentDidMount: PropTypes.func,
  isMe: PropTypes.bool,
};
SavedPostsPage.defaultProps = {};
