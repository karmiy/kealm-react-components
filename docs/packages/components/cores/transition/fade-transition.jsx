import React, { Children, useRef, useCallback, useMemo } from 'react';
import Motion from '../../common/motion';
import { FadeTransitionProps, FadeTransitionDefaultProps } from './interface';
import RenderWrapper from '../../common/renderWrapper';


function FadeTransition(props) {
    const {
        children,
        visible,
        appear,
        unmountOnExit,
        transitionName
    } = props;

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
        >
            {renderChildren}
        </Motion>
    )
}
FadeTransition.propTypes = FadeTransitionProps;
FadeTransition.defaultProps = FadeTransitionDefaultProps;

export default FadeTransition;