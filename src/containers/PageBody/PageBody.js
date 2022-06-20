import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import classes from './PageBody.module.scss';
import store from 'store';


const PageBody = props => {
    const scrollTopPointer = React.useRef(null);
    const id = props.uid + "_scrollTopPosition";
    useEffect(() => {
        if (props.uid) {
            window.addEventListener('load', () => store.set(id, 0));
            let scrollTop = store.get(id);
            if (scrollTop) scrollTopPointer.current.scrollTop = scrollTop;
            else scrollTopPointer.current.scrollTop = 0;
        } else if (props.scrollDown) {
            setTimeout(() => {
                scrollTopPointer.current.scrollTop = scrollTopPointer.current.scrollHeight;
            }, 100);
        }
    }, []);
    return (
        <div
            className={classes.PageBody}
            style={props.style}
            ref={scrollTopPointer}
            onScroll={() => {
                if (props.uid) store.set(id, scrollTopPointer.current.scrollTop)
            }}>
            {props.children}
        </div>
    );
};

export default PageBody;

PageBody.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    uid: PropTypes.string,
    scrollDown: PropTypes.bool,
};
PageBody.defaultProps = {
    children: null,
};
