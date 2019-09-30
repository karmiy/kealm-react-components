import React from 'react';
import ReactDom from 'react-dom';
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

    const container = getContainer ? (isFunction(getContainer) ? getContainer() : getContainer) : document.body;

    return visible ? ReactDom.createPortal(children, container) : null;
}

Portal.propTypes = PortalProps;
Portal.defaultProps = PortalDefaultProps;

export default Portal;