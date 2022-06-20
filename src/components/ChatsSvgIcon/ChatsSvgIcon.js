import React from 'react';
import * as PropTypes from 'prop-types';

const ChatsSvgIcon = props => {
    let iconColor = props.active ? props.activeColor : props.color;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" style={{cursor: 'pointer'}} onClick={props.onClick}>
            <g id="Group_31" data-name="Group 31" transform="translate(-283 -856)">
                <path id="Path_16" data-name="Path 16" d="M0,0H30V30H0Z" transform="translate(283 856)" fill="none"/>
                <path id="_1370907" data-name="1370907" d="M14.994,0A15,15,0,0,0,1.988,22.458l-1.932,6a1.171,1.171,0,0,0,1.474,1.474L7.53,28A14.994,14.994,0,1,0,14.994,0Zm0,27.645a12.614,12.614,0,0,1-6.7-1.917,1.172,1.172,0,0,0-.98-.122L2.987,27,4.381,22.67a1.172,1.172,0,0,0-.122-.98,12.652,12.652,0,1,1,10.734,5.955Zm1.464-12.651a1.464,1.464,0,1,1-1.464-1.464A1.464,1.464,0,0,1,16.458,14.994Zm5.857,0a1.464,1.464,0,1,1-1.464-1.464A1.464,1.464,0,0,1,22.315,14.994Zm-11.714,0a1.464,1.464,0,1,1-1.464-1.464A1.464,1.464,0,0,1,10.6,14.994Zm0,0" transform="translate(283.001 856.013)" fill={iconColor}/>
            </g>
        </svg>
    );
};

export default ChatsSvgIcon;

ChatsSvgIcon.propTypes = {
    active: PropTypes.bool,
    color: PropTypes.string,
    activeColor: PropTypes.string,
    onClick: PropTypes.func
};
