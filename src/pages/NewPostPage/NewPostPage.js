import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classes from './NewPostPage.module.scss';
import PageBody from '../../containers/PageBody/PageBody';
import Page from '../../containers/Page/Page';
import axios from 'axios';
import store from 'store';
import saved from '../../assets/saved.svg';
import TitleBar from '../../components/TitleBar/TitleBar';
import { Button, TextField } from '@material-ui/core';
import Tags from '../../containers/Tags/Tags';
import OrangeButton from '../../components/OrangeButton/OrangeButton';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import PublishIcon from '@material-ui/icons/Publish';

const NewPostPage = (props) => {
  const extractHashtags = (str) => {
    let tags = str
      .split(' ')
      .filter(
        (value, index, self) =>
          value.trim().length > 0 && self.indexOf(value) === index
      );
    setTags(tags);
  };

  const publishPostHandler = () => {
    let data = new FormData();
    data.append('title', title);
    data.append('username', store.get('username'));
    data.append('caption', caption.split('\n').join('&lt%end_Of_Line%&gt'));
    data.append('tags', JSON.stringify(tags));
    data.append('photo', photo);

    axios
      .post('/publishNewPost', data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        props.history.replace('/');
      })
      .catch((err) => {});
  };

  const [tags, setTags] = useState([]);
  const [tagsValue, setTagsValue] = useState('');
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [photo, setPhoto] = useState(null);

  const inputStyle = {
    margin: 10,
    marginTop: 0,
    width: 'calc(100% - 20px)',
    // borderRadius: 5,
    height: 50,
    padding: 10,
    color: 'white',
    backgroundColor: 'black',
    fontSize: 18,
    border: 'none',
    borderBottom: '1px solid #333',
  };

  return (
    <Page>
      <TitleBar>
        <b style={{ color: 'white', width: '100%', marginLeft: 10 }}>
          New Post
        </b>
      </TitleBar>
      <PageBody uid="NewPostPage" style={{ margin: 'auto' }}>
        <div className={classes.bodyWrapper}>
          <div className={classes.ImageUploaderWrapper}>
            <ImageUpload
              onImageAdded={(e) => setPhoto(e.target.files[0])}
              inputId="postImageUpload"
              text={'Upload post image...'}
              style={{ width: 'calc(100% - 20px)', marginLeft: 10 }}
            />
          </div>
          <div className={classes.restWrapper}>
            <input
              type="text"
              style={inputStyle}
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              type="text"
              style={{
                ...inputStyle,
                resize: 'vertical',
                height: 100,
                maxHeight: 200,
                minHeight: 40,
              }}
              placeholder="Caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <input
              type="text"
              style={inputStyle}
              placeholder="Hashtags"
              value={tagsValue}
              onChange={(e) => {
                setTagsValue(e.target.value);
                extractHashtags(e.target.value);
              }}
            />
            <div style={{ padding: '0 10px' }}>
              <Tags items={tags} />
            </div>
            <Button
              onClick={publishPostHandler}
              style={{
                width: 'calc(100% - 20px)',
                margin: 10,
                color: 'white',
                backgroundColor: '#444',
              }}
            >
              <PublishIcon />
              &nbsp;&nbsp;&nbsp;Publish
            </Button>
          </div>
        </div>
      </PageBody>
    </Page>
  );
};

export default withRouter(NewPostPage);

NewPostPage.propTypes = {
  componentDidMount: PropTypes.func,
};
NewPostPage.defaultProps = {};
