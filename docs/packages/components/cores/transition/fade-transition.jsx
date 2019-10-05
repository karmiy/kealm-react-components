import React, { Children, useCallback, useMemo } from 'react';
import { FadeTransitionProps, FadeTransitionDefaultProps } from './interface';
import { Motion, RenderWrapper } from '../../common';


function FadeTransition(props) {
    const {
        children,
        visible,
        appear,
        unmountOnExit,
        visibleChange,
        transitionName
    } = props;

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
            exclusive
            transitionName={transitionName}
            transitionAppear={appear}
            onEnd={onEnd}
        >
            {renderChildren}
        </Motion>
    )
}
FadeTransition.propTypes = FadeTransitionProps;
FadeTransition.defaultProps = FadeTransitionDefaultProps;

export default FadeTransition;