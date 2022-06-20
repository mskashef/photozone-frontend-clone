import React from 'react';
import * as PropTypes from 'prop-types';

const HomeSvgIcon = props => {
    let iconColor = props.active ? props.activeColor : props.color;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" style={{cursor: 'pointer'}} onClick={props.onClick}>
            <g id="Group_24" data-name="Group 24" transform="translate(-10 -856)">
                <rect id="Rectangle_7" data-name="Rectangle 7" width="30" height="30" transform="translate(10 856)" fill="none"/>
                <g id="_846449" data-name="846449" transform="translate(10 844.392)">
                    <g id="Group_38" data-name="Group 38" transform="translate(0 12.676)">
                        <path id="Path_21" data-name="Path 21" d="M29.5,25.344l-2.534-2.309V15.377a.882.882,0,0,0-.882-.882h-6.1a.882.882,0,0,0-.882.882v.491l-3.061-2.789a1.531,1.531,0,0,0-2.072,0L.5,25.344A1.538,1.538,0,0,0,1.54,28.019H3.69V40.308a.882.882,0,0,0,.882.882H11.95a.882.882,0,0,0,.882-.882V32.847h4.336v7.461a.882.882,0,0,0,.882.882h7.377a.882.882,0,0,0,.882-.882V28.019h2.15A1.538,1.538,0,0,0,29.5,25.344Zm-4.068.911a.882.882,0,0,0-.882.882V39.425H18.933V31.964a.882.882,0,0,0-.882-.882h-6.1a.882.882,0,0,0-.882.882v7.461H5.454V27.137a.882.882,0,0,0-.882-.882H2.124L15,14.522l4.385,4a.882.882,0,0,0,1.476-.652V16.26H25.2v7.165a.882.882,0,0,0,.288.652l2.391,2.178Z" transform="translate(0 -12.676)" fill={iconColor}/>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default HomeSvgIcon;

HomeSvgIcon.propTypes = {
    active: PropTypes.bool,
    color: PropTypes.string,
    activeColor: PropTypes.string,
    onClick: PropTypes.func
};
