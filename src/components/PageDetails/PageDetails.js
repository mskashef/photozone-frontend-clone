import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './PageDetails.module.scss';

const PageDetails = (props) => {
  return (
    <div className={classes.PageDetails} onClick={props.onClick}>
      <div className={classes.col}>
        <div id="photosCount">
          <b>{props.photos}</b>
        </div>
        <div>Posts</div>
      </div>
      <div className={classes.col}>
        <div id="followersCount">
          <b>{props.followers}</b>
        </div>
        <div>Followers</div>
      </div>
      <div className={classes.col}>
        <div id="followingsCount">
          <b>{props.followings}</b>
        </div>
        <div>Followings</div>
      </div>
    </div>
  );
};

export default PageDetails;

PageDetails.propTypes = {
  photos: PropTypes.number,
  followers: PropTypes.number,
  followings: PropTypes.number,
};
