import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './TabSelection.module.scss';

const TabSelection = props => {
    return (
        <div className={classes.TabSelection}>
            {
                props.tabs.map(tab => {
                    return (
                        <div
                            id={tab}
                            key={tab}
                            className={props.activeTab === tab ? [classes.tab, classes.active, 'TabSelectionActiveTab'].join(' ') : classes.tab}
                            onClick={props.onTabChange.bind(this, tab)}
                        >
                            {tab}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default TabSelection;

TabSelection.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string),
    activeTab: PropTypes.string,
    onTabChange: PropTypes.func
};
