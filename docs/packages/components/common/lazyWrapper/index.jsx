import React, { useRef } from 'react';
import { LazyWrapperProps, LazyWrapperDefaultProps } from './interface';
import RenderWrapper from '../renderWrapper';


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

export default LazyWrapper;