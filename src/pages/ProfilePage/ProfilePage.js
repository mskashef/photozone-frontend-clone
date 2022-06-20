import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classes from './ProfilePage.module.scss';
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
import { Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { backendBaseUrl } from '../../constants/js/constants';
import ImageUploader from 'react-images-upload';
import Avatar from '@material-ui/core/Avatar';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import MoreVert from '@material-ui/icons/MoreVert';

const ProfilePage = (props) => {
  useEffect(() => {
    if (props.componentDidMount) props.componentDidMount();
    axios
      .post(
        '/getUserInfo',
        {
          myUsername: store.get('username'),
          username: props.isMe ? store.get('username') : props.match.params.id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        const data = res.data;
        setUsername(data.username);
        setName(data.name);
        setPhoto(data.profPic);
        setBio(data.bio);
        setFollowersCount(data.followersCount);
        setFollowingsCount(data.followingsCount);
        setPostsCount(data.postsCount);
        setAmIFollowing(data.amIFollowing);
      })
      .catch((err) => {});
    axios
      .post(
        '/getPostsOfUser',
        {
          username: props.isMe ? store.get('username') : props.match.params.id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {});
  }, []);
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [bio, setBio] = useState('');
  const [amIFollowing, setAmIFollowing] = useState(false);
  let me = store.get('username');
  let isMe = props.isMe || props.match.params.id === me;

  const [followersCount, setFollowersCount] = useState(1);
  const [followingsCount, setFollowingsCount] = useState(1);
  const [postsCount, setPostsCount] = useState(0);
  const [showUpload, setShowUpload] = useState(false);

  const backButtonHandler = () => props.history.goBack();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMessage = () => {
    props.history.push('/chats/' + props.match.params.id);
  };

  const handleFollowOrUnfollow = () => {
    axios
      .post('/followOrUnfollow', {
        follow: !amIFollowing,
        userId: props.match.params.id,
      })
      .then((res) => {
        setFollowersCount(followersCount - (amIFollowing ? 1 : -1));
        setAmIFollowing(!amIFollowing);
      })
      .catch((err) => {});
  };

  const onDrop = (pictureFiles, pictureDataURLs) => {
    let data = new FormData();
    data.append('photo', pictureFiles[0]);
    axios
      .post('/updateProfilePicture', data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {});
  };

  return (
    <Page>
      <TitleBar noShadow>
        <div
          style={{
            color: 'white',
            width: '100%',
            marginLeft: 40,
            fontSize: 25,
          }}
        >
          {username}
        </div>
        <div
          style={{
            width: 30,
            height: 30,
            position: 'absolute',
            top: 14,
            right: 10,
            cursor: 'pointer',
            textAlign: 'center',
          }}
        >
          <IconButton
            style={{ color: 'white', margin: -12 }}
            onClick={handleClick}
          >
            <MoreVert />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            {isMe ? (
              <div>
                <MenuItem
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Edit name
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Edit username
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Edit bio
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Change profile image
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    localStorage.removeItem('token');
                    props.history.replace('/auth');
                    handleClose();
                  }}
                >
                  Sign out
                </MenuItem>
              </div>
            ) : (
              <div>
                <MenuItem
                  onClick={() => {
                    alert(
                      'Sorry. This option is not available in this version.'
                    );
                    handleClose();
                  }}
                >
                  Block user
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Message
                </MenuItem>
              </div>
            )}
          </Menu>
        </div>
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
            {/* <img
              alt=""
              style={{ cursor: 'pointer' }}
              src={back}
              onClick={backButtonHandler}
            /> */}
            <IconButton
              onClick={backButtonHandler}
              style={{ color: 'white', height: 30, width: 30 }}
            >
              <KeyboardBackspaceIcon />
            </IconButton>
          </div>
        )}
      </TitleBar>
      <PageBody uid="ProfilePage">
        <div style={{ display: 'flex', backgroundColor: 'black' }}>
          <Avatar
            style={{ width: 100, height: 100, margin: 10 }}
            src={backendBaseUrl + photo}
            onClick={
              isMe
                ? () => {
                    setShowUpload(!showUpload);
                  }
                : () => {}
            }
          />
          <PageDetails
            followers={Number(followersCount) - 1}
            followings={Number(followingsCount) - 1}
            photos={Number(postsCount)}
          />
        </div>
        {isMe && showUpload && (
          <ImageUploader
            singleImage={true}
            withIcon={true}
            withLabel={false}
            buttonText="Choose image"
            onChange={onDrop}
            // style={{ backgroundColor: '#444' }}
            fileContainerStyle={{ backgroundColor: 'black' }}
            iconStyle={{ color: 'red' }}
            imgExtension={['.jpg', '.gif', '.png']}
            maxFileSize={5242880 * 2}
          />
        )}
        <div className={classes.about}>{bio}</div>
        {isMe || (
          <>
            <div className={classes.buttons}>
              <Button
                onClick={handleFollowOrUnfollow}
                style={{
                  margin: 10,
                  height: 30,
                  width: 'calc(50% - 10px)',
                  color: 'white',
                  border: '1px solid #444',
                }}
              >
                {amIFollowing ? 'Unfollow' : 'Follow'}
              </Button>
              <Button
                onClick={handleMessage}
                style={{
                  margin: 10,
                  height: 30,
                  width: 'calc(50% - 10px)',
                  color: 'white',
                  border: '1px solid #444',
                }}
              >
                Message
              </Button>
            </div>
          </>
        )}

        <div className={classes.postsContainer}>
          {posts.map((post) => (
            <Thumbnail
              key={post.postId}
              src={backendBaseUrl + post.photo}
              hoverTitle={post.title}
              onClick={() => {
                props.history.push('/posts/' + post.postId);
              }}
            />
          ))}
          {Array(11)
            .fill('1')
            .map((post) => (
              <EmptyThumbnail key={Math.random() + ':' + Math.random()} />
            ))}
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
)(withRouter(ProfilePage));

ProfilePage.propTypes = {
  componentDidMount: PropTypes.func,
  isMe: PropTypes.bool,
};
ProfilePage.defaultProps = {};
