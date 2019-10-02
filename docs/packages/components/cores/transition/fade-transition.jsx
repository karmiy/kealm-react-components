import React, { useRef, useCallback } from 'react';
import ReactDom from 'react-dom';
import Animate from 'rc-animate';
import Motion from '../../common/motion';
import cssAnimation from 'css-animation';
import addDomEventListener from 'add-dom-event-listener';
import { useDidMount, useDidUpdate, usePrevProps } from 'hooks';
import { addClass, getStyle, removeClass } from 'utils/common/dom';
import { FadeTransitionProps, FadeTransitionDefaultProps } from './interface';
import RenderWrapper from '../../common/renderWrapper';

// ---------------------------------- transition action ----------------------------------

function FadeTransition(props) {
    const { children, visible, appear, unmountOnExit } = props;

    // ---------------------------------- logic code ----------------------------------
    const animation = {
        enter(node, done) {
            console.log(node);
            return cssAnimation(node, 'k1', {
                start() {
                    node.className = 'km-fade-in-enter'
                    console.log(1);
                },
                active() {
                    console.log(2);
                },
                end() {
                    console.log(3);
                    done();
                },
            })
            // return animate(node, true, `${prefixCls}-anim`, done);
        },
        leave(node, done) {
            console.log(node, done);
            return cssAnimation(node, 'k2', {
                start() {
                    console.log(-1);
                },
                active() {
                    console.log(-2);
                },
                end() {
                    console.log(-3);
                    done();
                },
            })
            // return animate(node, false, `${prefixCls}-anim`, done);
        },
    }

    // ---------------------------------- render ----------------------------------
    return (
        <Motion
            showProp={'visible'}
            exclusive
            transitionName={'km-fade-in'}
            transitionAppear={appear}
        >
            {React.Children.map(children, (child, index) => {
                return <RenderWrapper
                            key={index}
                            visible={visible}
                            unmountOnExit={unmountOnExit}
                        >
                            {child}
                        </RenderWrapper>
            })}
        </Motion>
    )
}
FadeTransition.propTypes = FadeTransitionProps;
FadeTransition.defaultProps = FadeTransitionDefaultProps;

export default FadeTransition;