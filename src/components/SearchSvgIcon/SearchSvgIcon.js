import React from 'react';
import * as PropTypes from 'prop-types';

const SearchSvgIcon = props => {
    let iconColor = props.active ? props.activeColor : props.color;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" style={{cursor: 'pointer'}} onClick={props.onClick}>
            <g id="Group_25" data-name="Group 25" transform="translate(-101 -856)">
                <rect id="Rectangle_7" data-name="Rectangle 7" width="30" height="30" transform="translate(101 856)" fill="none"/>
                <g id="_709592" data-name="709592" transform="translate(101.1 856.1)">
                    <g id="Group_35" data-name="Group 35">
                        <g id="Group_34" data-name="Group 34">
                            <path id="Path_19" data-name="Path 19" d="M13.167,0A13.167,13.167,0,1,0,26.335,13.167,13.183,13.183,0,0,0,13.167,0Zm0,23.9A10.737,10.737,0,1,1,23.9,13.167,10.749,10.749,0,0,1,13.167,23.9Z" fill={iconColor}/>
                        </g>
                    </g>
                    <g id="Group_37" data-name="Group 37" transform="translate(20.501 20.501)">
                        <g id="Group_36" data-name="Group 36">
                            <path id="Path_20" data-name="Path 20" d="M360.089,358.37,353.12,351.4a1.215,1.215,0,0,0-1.719,1.719l6.969,6.969a1.215,1.215,0,0,0,1.719-1.719Z" transform="translate(-351.046 -351.046)" fill={iconColor}/>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default SearchSvgIcon;

SearchSvgIcon.propTypes = {
    active: PropTypes.bool,
    color: PropTypes.string,
    activeColor: PropTypes.string,
    onClick: PropTypes.func
};
