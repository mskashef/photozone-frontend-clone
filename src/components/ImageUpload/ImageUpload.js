import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import classes from './ImageUpload.module.scss';
import imageUpload from '../../assets/ImageUpload/imageUpload.svg';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const ImageUpload = (props) => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  return (
    <label htmlFor={props.inputId}>
      <div
        style={{ ...props.style, backgroundImage: `url(${image})` }}
        className={classes.container}
        onClick={props.onClick}
      >
        <CloudUploadIcon style={{ color: '#AAA' }} />
        <div className={classes.text}>{imageName ? imageName : props.text}</div>
        <input
          style={{ display: 'none' }}
          onInput={(e) => {
            props.onImageAdded(e);
            setImage(e.target.files[0].name);
            var reader = new FileReader();
            reader.onload = (e) => {
              setImage(e.target.result);
            };
            setImageName(e.target.files[0].name);
            reader.readAsDataURL(e.target.files[0]);
          }}
          accept="image/*"
          type="file"
          id={props.inputId}
        />
      </div>
    </label>
  );
};

export default ImageUpload;

ImageUpload.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  inputId: PropTypes.string,
  onImageAdded: PropTypes.func,
};
