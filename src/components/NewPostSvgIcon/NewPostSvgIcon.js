import React from 'react';
import * as PropTypes from 'prop-types';

const NewPostSvgIcon = props => {
    let iconColor = props.active ? props.activeColor : props.color;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" style={{cursor: 'pointer'}} onClick={props.onClick}>
            <g id="Group_30" data-name="Group 30" transform="translate(-192 -856)">
                <path id="Path_15" data-name="Path 15" d="M0,0H30V30H0Z" transform="translate(192 856)" fill="none"/>
                <g id="_992651" data-name="992651" transform="translate(192 856)">
                    <g id="Group_27" data-name="Group 27">
                        <g id="Group_26" data-name="Group 26">
                            <path id="Path_13" data-name="Path 13" d="M15,0A15,15,0,1,0,30,15,15.016,15.016,0,0,0,15,0Zm0,27.676A12.676,12.676,0,1,1,27.676,15,12.691,12.691,0,0,1,15,27.676Z" fill={iconColor}/>
                        </g>
                    </g>
                    <g id="Group_29" data-name="Group 29" transform="translate(8.029 7.924)">
                        <g id="Group_28" data-name="Group 28">
                            <path id="Path_14" data-name="Path 14" d="M149.8,141.047h-4.648V136.4a1.162,1.162,0,1,0-2.324,0v4.648h-4.648a1.162,1.162,0,0,0,0,2.324h4.648v4.648a1.162,1.162,0,1,0,2.324,0v-4.648H149.8a1.162,1.162,0,1,0,0-2.324Z" transform="translate(-137.022 -135.238)" fill={iconColor}/>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

    );
};

export default NewPostSvgIcon;

NewPostSvgIcon.propTypes = {
    active: PropTypes.bool,
    color: PropTypes.string,
    activeColor: PropTypes.string,
    onClick: PropTypes.func
};
