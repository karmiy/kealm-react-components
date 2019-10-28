import React, { useEffect } from 'react';
import { RenderOnceProps, RenderOnceDefaultProps } from './interface';
import { useFuncOnce, useCorrectOnce } from 'hooks';

/**
 * If visible is false initially, it will render fallback content
 * It will render component when its visible is true for the first time and always show after
 */
function RenderOnce(props) {
    const {
        children,
        fallback,
        onCreate,
        visible
    } = props;

    const _visible = useCorrectOnce(visible);

    const create = useFuncOnce(() => {
        onCreate();
    });

    useEffect(() => {
        visible && create();
    }, [visible]);

    if(!_visible) return fallback || null;

    return children;
}

RenderOnce.propTypes = RenderOnceProps;
RenderOnce.defaultProps = RenderOnceDefaultProps;

export default RenderOnce;