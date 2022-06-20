import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './TitledPic.module.scss';

const TitledPic = props => {
    const titleWrapperClassName = props.title ? classes.title : [classes.title, classes.gray].join(' ');
    const captionWrapperClassName = props.title ? classes.caption : [classes.caption, classes.gray].join(' ');
    return (
        <div className={classes.TitledPic} onClick={(e) => {props.onClick(e, props.userId)}} style={props.onClick ? {cursor: 'pointer'} : {}}>
            <div className={classes.img} style={{backgroundImage: `url(${props.img})`, ...props.imageStyle}} />
            <div className={classes.TitleContainer}>
                <div className={titleWrapperClassName} style={props.titleStyle ? props.titleStyle : {}}>{props.title}</div>
                <div className={captionWrapperClassName} style={props.captionStyle}>{props.caption}</div>
            </div>
            {
                props.showBadge && (
                    <div className={classes.badgeWrapper}>
                        <div className={classes.badge} />
                    </div>
                )
            }
        </div>
    );
};

export default TitledPic;

TitledPic.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    caption: PropTypes.string,
    onClick: PropTypes.func,
    userId: PropTypes.string,
    imageStyle: PropTypes.object,
    titleStyle: PropTypes.object,
    captionStyle: PropTypes.object,
};
TitledPic.defaultProps = {
    imageStyle: {}
};
