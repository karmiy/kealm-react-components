import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import { PortalProps, PortalDefaultProps } from './interface';
import { isFunction } from "utils/common/base";

/**
 * @return {null}
 */
function Portal(props) {
    const {
        children,
        visible,
        getContainer
    } = props;

    const container = getContainer !== undefined ? (isFunction(getContainer) ? getContainer() : getContainer) : document.body;

    if(!container)
        return visible ? children : null;

    return visible ? ReactDOM.createPortal(children, container) : null;
}

Portal.propTypes = PortalProps;
Portal.defaultProps = PortalDefaultProps;

export default memo(Portal);