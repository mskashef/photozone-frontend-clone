import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import classes from './Post.module.scss';
import TitledPic from '../../components/TitledPic/TitledPic';
import moreButton from '../../assets/more.svg';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendIcon from '@material-ui/icons/Send';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import LinkIcon from '@material-ui/icons/Link';
import axios from 'axios';

const Post = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [more, setMore] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSave = () => {
    axios
      .post('/savePost', { postId: props.postId })
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={classes.Post}>
      <div className={classes.details}>
        <div className={classes.userContainer}>
          <TitledPic
            userId={props.publisherId}
            title={props.title}
            caption={props.publisherName}
            img={props.publisherProfPic}
            onClick={(e) => {}}
          />
        </div>
        {/* <img
          className={classes.moreButton}
          src={moreButton}
          onClick={handleClick}
        /> */}
        <IconButton
          style={{ color: 'white', marginRight: -20 }}
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
        >
          {props.moreOptions.map((option) => (
            <MenuItem
              key={option.title}
              selected={option === 'Pyxis'}
              onClick={() => {
                option.onSelect(props.postId);
                handleClose();
              }}
            >
              {option.title}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div
        className={classes.photo}
        onClick={props.onClick}
        style={{ backgroundImage: `url(${props.photo})` }}
      />
      <div style={{ display: 'flex' }}>
        <IconButton style={{ color: 'white' }}>
          <FavoriteBorderIcon />
        </IconButton>

        <IconButton style={{ color: 'white' }}>
          <ChatBubbleOutlineIcon />
        </IconButton>

        <IconButton style={{ color: 'white' }}>
          <SendIcon />
        </IconButton>
        <div style={{ flex: 1 }} />

        <IconButton style={{ color: 'white' }} onClick={handleSave}>
          <BookmarkBorderIcon />
        </IconButton>
      </div>
      <div style={{ color: 'white', padding: '0 5px' }}>
        {!more && props.caption.split('&lt%end_Of_Line%&gt').length > 1 ? (
          <>
            {props.caption.split('&lt%end_Of_Line%&gt')[0]}
            <div
              style={{ color: '#AAA', cursor: 'pointer' }}
              onClick={() => setMore(true)}
            >
              more...
            </div>
          </>
        ) : (
          props.caption.split('&lt%end_Of_Line%&gt').map((a) => (
            <>
              {a}
              <br />
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default Post;

Post.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  publisherName: PropTypes.string.isRequired,
  publisherProfPic: PropTypes.string,
  onClick: PropTypes.func,
  moreOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      onSelect: PropTypes.func,
    })
  ),
  postId: PropTypes.string,
  publisherId: PropTypes.string,
};
