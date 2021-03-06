import React, { Children, useCallback, useMemo } from 'react';
import { ZoomTransitionProps, ZoomTransitionDefaultProps } from './interface';
import { Motion, RenderWrapper } from '../../common';
import { useContextConf } from 'hooks';


function ZoomTransition(props) {
    const { componentCls } = useContextConf('zoom');
    const {
        children,
        visible,
        appear,
        unmountOnExit,
        exclusive,
        visibleChange,
        transitionName,
        position
    } = props;

    // If there is a transitionName, the transitionName is given as a parameter, otherwise built-in is used
    const _transitionName = transitionName || `${componentCls}-${position}`;

    // ---------------------------------- event ----------------------------------
    const onEnd = useCallback(() => {
        visibleChange(visible);
    }, [visible, visibleChange]);

    // ---------------------------------- render chunk ----------------------------------
    const renderChildren = useMemo(() => {
        return Children.map(children, (child, index) => {
            return <RenderWrapper
                key={index}
                visible={visible}
                unmountOnExit={unmountOnExit}
            >
                {child}
            </RenderWrapper>
        })
    }, [children, visible, unmountOnExit]);

    // ---------------------------------- render ----------------------------------
    return (
        <Motion
            showProp={'visible'}
            exclusive={exclusive}
            transitionName={_transitionName}
            transitionAppear={appear}
            onEnd={onEnd}
        >
            {renderChildren}
        </Motion>
    )
}
ZoomTransition.propTypes = ZoomTransitionProps;
ZoomTransition.defaultProps = ZoomTransitionDefaultProps;

export default ZoomTransition;