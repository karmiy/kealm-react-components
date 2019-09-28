import React, { useRef } from 'react';
import ReactDom from 'react-dom';
import { Transition } from 'react-transition-group';
import addDomEventListener from 'add-dom-event-listener';
import { useDidMount, useDidUpdate } from 'hooks';
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

    // ---------------------------------- render ----------------------------------
    return (
        <Transition
            in={visible}
            appear={appear}
            addEndListener={addEndListener}
            onEnter={onEnter}
            onEntering={onEntering}
            onEntered={onEntered}
            onExit={onExit}
            onExiting={onExiting}
            onExited={onExited}
            unmountOnExit={unmountOnExit}
        >
            {children}
        </Transition>
    )
}
FadeTransition.propTypes = FadeTransitionProps;
FadeTransition.defaultProps = FadeTransitionDefaultProps;

export default FadeTransition;