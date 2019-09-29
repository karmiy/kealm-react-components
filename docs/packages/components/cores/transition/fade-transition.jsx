import React, { useRef } from 'react';
import ReactDom from 'react-dom';
import Animate from 'rc-animate';
import Motion from '../../common/motion';
import cssAnimation from 'css-animation';
import addDomEventListener from 'add-dom-event-listener';
import { useDidMount, useDidUpdate, usePrevProps } from 'hooks';
import { addClass, getStyle, removeClass } from 'utils/dom';
import { FadeTransitionProps, FadeTransitionDefaultProps } from './interface';

// ---------------------------------- transition action ----------------------------------
const _Transition = {
    onEnter(el) {

    },
    onEntering(el) {

    },
    onEntered(el) {

    },
    onExit(el) {

    },
    onExiting(el) {

    },
    onExited(el) {

    },
}

const addEndListener = (node, done) => {
    addDomEventListener(node, 'transitionend', done, false);
}

function FadeTransition(props) {
    const { children, visible, appear, unmountOnExit } = props;
    const {
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited
    } = _Transition;

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

    /*const ref = useRef(null);
    setTimeout(() => {
        console.log(ref);
    }, 200);

    // ---------------------------------- render ----------------------------------
    return (
        <Animate ref={node => ref.current = node}>
            {visible ? children : null}
        </Animate>
    )*/
    return (
        <Motion transitionName={'km-fade-in'}>
            {children}
        </Motion>
    )
}
FadeTransition.propTypes = FadeTransitionProps;
FadeTransition.defaultProps = FadeTransitionDefaultProps;

export default FadeTransition;