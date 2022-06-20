import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import TitleBar from '../../components/TitleBar/TitleBar';
import PageBody from '../../containers/PageBody/PageBody';
import Posts from '../../containers/Posts/Posts';
import Page from '../../containers/Page/Page';
import axios from 'axios';
import saved from '../../assets/saved.svg';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import textLogo from '../../assets/textLogo.svg';
import SendIcon from '@material-ui/icons/Send';
import { Avatar, IconButton } from '@material-ui/core';

let interval;
const HomePage = (props) => {
  const getPosts = () => {
    if (props.componentDidMount) props.componentDidMount();
    if (!props.posts || props.posts.length === 0) {
      axios
        .post('/getPosts', {}, { withCredentials: true })
        .then((res) => {
          props.setHomePagePosts(res.data);
        })
        .catch(() => {});
    }
  };
  useEffect(() => {
    getPosts();
    interval = setInterval(getPosts, 1000);
    return () => clearInterval(interval);
  }, []);
  const handleSavedPostsClick = () => props.history.push('/savedPosts');
  return (
    <Page>
      <TitleBar>
        <div
          style={{
            textAlign: 'left',
            width: '100%',
            marginLeft: 10,
          }}
        >
          <img
            src={textLogo}
            style={{ height: 60, marginTop: 10 }}
            alt="Instagram"
          />
        </div>
        <div style={{}} onClick={() => props.history.push('/chats')}>
          <IconButton style={{ color: 'white' }}>
            <SendIcon />
          </IconButton>
          {/* <img alt="" style={{ cursor: 'pointer' }} src={saved} /> */}
        </div>
      </TitleBar>

      <PageBody uid={'HomePage'}>
        <div style={{ display: 'flex', overflowX: 'auto', padding: '0 10px' }}>
          {Array(10)
            .fill()
            .map((a) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: 5,
                  }}
                >
                  <Avatar
                    style={{ width: 60, height: 60 }}
                    // src={`https://picsum.photos/70`}
                  />
                  <div style={{ color: 'white' }}>Jake</div>
                </div>
              );
            })}
        </div>
        <Posts items={props.posts ? props.posts : []} />
      </PageBody>
    </Page>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.homePagePosts,
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
)(withRouter(HomePage));

HomePage.propTypes = {
  componentDidMount: PropTypes.func,
};
HomePage.defaultProps = {};
