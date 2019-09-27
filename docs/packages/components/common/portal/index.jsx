import React from 'react';
import ReactDom from 'react-dom';
import { PortalProps, PortalDefaultProps } from './interface';

function Portal(props) {
    const {
        children,
        visible,
    } = props;

    const portal =  ReactDom.createPortal(
        children,
        document.body
    );
    return visible ? portal : null;
}

Portal.propTypes = PortalProps;
Portal.defaultProps = PortalDefaultProps;

export default Portal;