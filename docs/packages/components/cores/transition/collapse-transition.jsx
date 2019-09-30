import React, { useRef } from 'react';
import ReactDom from 'react-dom';
import { Transition } from 'react-transition-group';
import addDomEventListener from 'add-dom-event-listener';
import { useDidMount, useDidUpdate } from 'hooks';
import { addClass, getStyle, removeClass } from 'utils/base/dom';
import { CollapseTransitionProps, CollapseTransitionDefaultProps } from './interface';

// ---------------------------------- transition action ----------------------------------
const _Transition = {
    init(el, visible = true, unmountOnExit = false) {
        // if unmount on exit, don't init
        if(unmountOnExit) return;

        // init data store
        _Transition.validateStore(el);

        // visible => display: none
        if(!visible) {
            el.style.display = 'none';
        }
    },
    validateStore(el) { // validate store for preventing the lack of data in unmountOnExit
        return (!el.dataset || !el._paddingTop) && _Transition.initStore(el);
    },
    initStore(el) {
        // init dataset object
        if (!el.dataset) el.dataset = {};

        // store data
        _Transition.invariableStore(el);
        _Transition.variableStore(el);

        return true;
    },
    invariableStore(el) {
        // store display、overflow
        el.dataset.display = el.style.display;
        el.dataset.oldOverflow = el.style.overflow;
    },
    variableStore(el) {
        // store paddingTop、paddingBottom、borderTopWidth、borderBottomWidth、overflow of style
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldBorderTop = el.style.borderTopWidth;
        el.dataset.oldBorderBottom = el.style.borderBottomWidth;

        // spec store: real paddingTop、paddingBottom、borderTopWidth、borderBottomWidth、box-sizing
        el._paddingTop = getStyle(el, 'padding-top');
        el._paddingBottom = getStyle(el, 'padding-bottom');
        el._borderTop = getStyle(el, 'border-top-width');
        el._borderBottom = getStyle(el, 'border-bottom-width');
        el._isBorderBox = getStyle(el, 'box-sizing') === 'border-box';
    },
    onEnter(el) {
        // prevent props of unmountOnExit
        // isAppear includes props.appear is true or unmountOnExit is true
        const isAppear = _Transition.validateStore(el);

        // console.log('onEnter');
        el.style.height = '0';
        el.style.paddingTop = '0';
        el.style.paddingBottom = '0';
        el.style.borderTopWidth = '0';
        el.style.borderBottomWidth = '0';
        el.style.display = el.dataset.display || '';

        // Important
        // When appear comes in, force browser to render before adding transition style, otherwise scroll Height in Entering phase will be affected by transition
        isAppear && el.scrollHeight;
        addClass(el, 'collapse-transition');
    },
    onEntering(el) {
        // console.log('onEntering');
        if (el.scrollHeight !== 0) {
            const height = el._isBorderBox ?
                el.scrollHeight
                + parseFloat(el._paddingTop)
                + parseFloat(el._paddingBottom)
                + parseFloat(el._borderTop)
                + parseFloat(el._borderBottom)
                :
                el.scrollHeight;
            el.style.height = `${height}px`;
        } else {
            el.style.height = '';
        }
        el.style.paddingTop = el._paddingTop;
        el.style.paddingBottom = el._paddingBottom;
        el.style.borderTopWidth = el._borderTop;
        el.style.borderBottomWidth = el._borderBottom;
        el.style.overflow = 'hidden';
    },
    onEntered(el) {
        // console.log('onEntered');
        removeClass(el, 'collapse-transition');
        el.style.height = '';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
        el.style.borderTopWidth = el.dataset.oldBorderTop;
        el.style.borderBottomWidth = el.dataset.oldBorderBottom;
        el.style.overflow = el.dataset.oldOverflow;
    },
    onExit(el) {
        // prevent props of unmountOnExit
        _Transition.validateStore(el);

        // console.log('onExit');
        const height = el._isBorderBox ?
            el.scrollHeight
            + parseFloat(el._borderTop)
            + parseFloat(el._borderBottom)
            :
            el.scrollHeight
            - parseFloat(el._paddingTop)
            - parseFloat(el._paddingBottom)
        el.style.height = `${height}px`;
        el.style.overflow = 'hidden';
    },
    onExiting(el) {
        // console.log('onExiting');
        if (el.scrollHeight !== 0) {
            addClass(el, 'collapse-transition');
            el.style.height = '0';
            el.style.paddingTop = '0';
            el.style.paddingBottom = '0';
            el.style.borderTopWidth = '0';
            el.style.borderBottomWidth = '0';
        }
    },
    onExited(el) {
        // console.log('onExited');
        removeClass(el, 'collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
        el.style.borderTopWidth = el.dataset.oldBorderTop;
        el.style.borderBottomWidth = el.dataset.oldBorderBottom;
        el.style.display = 'none';
    },
}

const addEndListener = (node, done) => {
    addDomEventListener(node, 'transitionend', done, false);
}

function CollapseTransition(props) {
    const transitionRef = useRef(null);
    const elementRef = useRef(null);
    const { children, visible, appear, unmountOnExit } = props;
    const {
        init,
        // variableStore,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited
    } = _Transition;

    // ---------------------------------- logic code ----------------------------------
    useDidMount(() => {
        // visible => to do nothing
        // !visible => to do display none
        const el = ReactDom.findDOMNode(transitionRef.current);
        elementRef.current = el;
        init(el, visible, unmountOnExit);
    })

    // warning: To delete, because between onEnter and onEntering
    // prevent height changes in DOM
    /*useDidUpdate(() => {
        const el = elementRef.current;
        el && variableStore(el);
    }, children);*/

    // ---------------------------------- render ----------------------------------
    return (
        <Transition
            ref={transitionRef}
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
CollapseTransition.propTypes = CollapseTransitionProps;
CollapseTransition.defaultProps = CollapseTransitionDefaultProps;

export default CollapseTransition;