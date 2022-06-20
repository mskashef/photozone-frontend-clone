import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classes from './SearchPage.module.scss';
import PageBody from '../../containers/PageBody/PageBody';
import Posts from '../../containers/Posts/Posts';
import Page from '../../containers/Page/Page';
import TitledPic from '../../components/TitledPic/TitledPic';
import SearchBox from '../../components/SearchBox/SearchBox';
import TabSelection from '../../components/TabSelection/TabSelection';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import EmptyThumbnail from '../../components/EmptyThumbnail/EmptyThumbnail';
import store from 'store';
import axios from 'axios';
import { backendBaseUrl } from '../../constants/js/constants';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';

let emptyThumbnails = [];
for (let i = 0; i < 100; i++) {
  emptyThumbnails.push(i);
}

const SearchPage = (props) => {
  useEffect(() => {
    if (props.componentDidMount) props.componentDidMount();
    const activeTab = store.get('activeSelectionTab');
    setActiveTab(activeTab ? activeTab : 'Posts');
  }, []);

  const extractHashtags = (str) => {
    return str
      .split(' ')
      .filter(
        (value, index, self) =>
          value.trim().length > 0 && self.indexOf(value) === index
      );
  };

  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('Posts');
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const searchHandler = (text, tab = activeTab) => {
    if (!text || text.trim().length === 0) {
      setUsers([]);
      setPosts([]);
      return;
    }
    if (tab === 'Posts') {
      const tags = extractHashtags(text);
      if (tags) {
        axios
          .post(
            '/searchInPosts',
            { tags: extractHashtags(text) },
            { withCredentials: true }
          )
          .then((res) => {
            setPosts(res.data.map ? res.data : []);
          })
          .catch((err) => {});
      }
    } else {
      axios
        .post('/searchInUsers', { searchText: text }, { withCredentials: true })
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {});
    }
  };

  return (
    <Page>
      <SearchBox
        style={{ margin: 5, width: 'calc(100% - 10px)' }}
        value={searchText}
        onChangeText={(val) => {
          setSearchText(val);
          searchHandler(val);
        }}
        placeholder={'Search...'}
      />
      <TabSelection
        tabs={['Users', 'Posts']}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          store.set('activeSelectionTab', tab);
          searchHandler(searchText, tab);
        }}
      />
      <PageBody uid="SearchPage">
        {activeTab === 'Posts' ? (
          <div className={classes.postsContainer}>
            {posts ? (
              posts.map((post) => (
                <Thumbnail
                  key={JSON.stringify(post)}
                  src={backendBaseUrl + post.photo}
                  hoverTitle={post.title}
                  onClick={() => {
                    props.history.push('/posts/' + post.postId);
                  }}
                />
              ))
            ) : (
              <div className={classes.noPosts}>No Posts yet.</div>
            )}
            {posts &&
              ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'].map(
                (post) => (
                  <EmptyThumbnail key={Math.random() + ':' + Math.random()} />
                )
              )}
          </div>
        ) : (
          <div className={classes.usersContainer}>
            {users.map((user) => (
              <TitledPic
                key={user.username}
                title={user.name}
                caption={user.username}
                img={backendBaseUrl + user.profpic}
                userId={user.username}
                onClick={() => {
                  props.history.push('/users/' + user.username);
                }}
              />
            ))}
          </div>
        )}
      </PageBody>
    </Page>
  );
};

export default withRouter(SearchPage);

SearchPage.propTypes = {
  componentDidMount: PropTypes.func,
};
