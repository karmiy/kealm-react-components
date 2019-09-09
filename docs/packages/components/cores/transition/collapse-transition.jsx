import React, { useRef } from 'react';
import ReactDom from 'react-dom';
import { Transition } from 'react-transition-group';
import addEventListener from 'add-dom-event-listener';
import { useDidMount } from 'hooks';
import { addClass, removeClass } from 'utils/dom';
import { CollapseTransitionProps, CollapseTransitionDefaultProps } from './interface';

const _Transition = {
    onEnter(el) {
        addClass(el, 'collapse-transition');
        if (!el.dataset) el.dataset = {};

        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;

        el.style.height = '0';
        el.style.paddingTop = '0';
        el.style.paddingBottom = '0';
        el.style.display = el.dataset.display || '';
    },
    onEntering(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
            el.style.height = el.scrollHeight + 'px';
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        } else {
            el.style.height = '';
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }
        el.style.overflow = 'hidden';
    },
    onEntered(el) {
        removeClass(el, 'collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
    },
    onExit(el) {
        if (!el.dataset) el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;
        el.dataset.display = el.style.display;

        el.style.height = el.scrollHeight + 'px';
        el.style.overflow = 'hidden';
    },
    onExiting(el) {
        if (el.scrollHeight !== 0) {
            addClass(el, 'collapse-transition');
            el.style.height = '0';
            el.style.paddingTop = '0';
            el.style.paddingBottom = '0';
        }
    },
    onExited(el) {
        removeClass(el, 'collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
        el.style.display = 'none';
    },
}

const addEndListener = (node, done) => {
    addEventListener(node, 'transitionend', done, false);
}

function CollapseTransition(props) {
    const ref = useRef();
    const { children, visible } = props;
    const {
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited
    } = _Transition;

    useDidMount(() => {
        // visible => to do nothing
        // !visible => to do display none
        const el = ReactDom.findDOMNode(ref.current);
        if(!visible && el) {
            if (!el.dataset) el.dataset = {};
            el.dataset.display = el.style.display;
            el.style.display = 'none';
        }
    })
    return (
        <Transition
            ref={ref}
            in={visible}
            addEndListener={addEndListener}
            onEnter={onEnter}
            onEntering={onEntering}
            onEntered={onEntered}
            onExit={onExit}
            onExiting={onExiting}
            onExited={onExited}
        >
            {children}
        </Transition>
    )
}
CollapseTransition.propTypes = CollapseTransitionProps;
CollapseTransition.defaultProps = CollapseTransitionDefaultProps;

export default CollapseTransition;