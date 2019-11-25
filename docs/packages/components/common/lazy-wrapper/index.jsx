import React, { memo, useRef } from 'react';
import { LazyWrapperProps, LazyWrapperDefaultProps } from './interface';
import RenderWrapper from '../render-wrapper';

/**
 * If visible is false initially, no rendering will be done
 * It will render component when its visible is true for the first time
 */
function LazyWrapper(props) {
    const {
        children,
        visible
    } = props;

    const lazyRef = useRef(visible);

    if(visible && !lazyRef.current) {
        lazyRef.current = true;
    }

    return <RenderWrapper visible={visible} unmountOnExit={!lazyRef.current}>{children}</RenderWrapper>
}

LazyWrapper.propTypes = LazyWrapperProps;
LazyWrapper.defaultProps = LazyWrapperDefaultProps;

export default memo(LazyWrapper);