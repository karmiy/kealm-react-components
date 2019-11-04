import React, { memo, Children, useMemo, useCallback, useRef } from 'react';
import { addClass, getStyle, removeClass } from 'utils/common/dom';
import { CollapseTransitionProps, CollapseTransitionDefaultProps } from './interface';
import { Motion, RenderWrapper } from '../../common';
import { motionAnimation } from 'utils/css-animation';
import { useDidMount } from 'hooks';

function calActualScrollHeight(el) {
    const invisible = getStyle(el, 'display') === 'none';
    if(!invisible) return el.scrollHeight;
    const _el = el.cloneNode(true);
    _el.style.display = '';
    document.body.appendChild(_el);
    const scrollHeight = _el.scrollHeight;
    document.body.removeChild(_el);
    return scrollHeight;
}

const _MotionTail = (el) => {
    if(el._motionTail) return el._motionTail;

    return el._motionTail = {
        get isEntering() {
            return el._inEnter;
        },
        get isExiting() {
            return el._inExit;
        },
        toEnter: () => el._inEnter = true,
        toExit: () => el._inExit = true,
        stop: () => {el._inEnter = false; el._inExit = false},
    }
}

// ---------------------------------- transition action ----------------------------------
const _Transition = {
    onInit(el) {
        // if unmount on exit, don't init
        // if(unmountOnExit) return;

        // init data store
        _Transition.validateStore(el);

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
        // store overflow
        el.dataset.oldOverflow = el.style.overflow;
    },
    variableStore(el) {
        // store paddingTop、paddingBottom、borderTopWidth、borderBottomWidth、overflow of style
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldBorderTop = el.style.borderTopWidth;
        el.dataset.oldBorderBottom = el.style.borderBottomWidth;

        // spec store: real paddingTop、paddingBottom、borderTopWidth、borderBottomWidth、box-sizing
        // Prevent getting the wrong value when it's display: none
        // The actual scrollHeight is stored to prevent quick switching during the rolling process, resulting in the wrong instant of scrollHeight obtained at enter
        el._scrollHeight = calActualScrollHeight(el);
        el._paddingTop = getStyle(el, 'padding-top');
        el._paddingBottom = getStyle(el, 'padding-bottom');
        el._borderTop = getStyle(el, 'border-top-width');
        el._borderBottom = getStyle(el, 'border-bottom-width');
        el._isBorderBox = getStyle(el, 'box-sizing') === 'border-box';
    },
    onEnter(el) {
        // prevent props of unmountOnExit
        // isAppear includes props.appear is true or unmountOnExit is true
        _Transition.validateStore(el);

        // console.log('onEnter');
        _MotionTail(el).toEnter();

        el.style.height = '0';
        el.style.paddingTop = '0';
        el.style.paddingBottom = '0';
        el.style.borderTopWidth = '0';
        el.style.borderBottomWidth = '0';
        el.style.overflow = 'hidden';

        // Important
        // When appear comes in, force browser to render before adding transition style, otherwise scroll Height in Entering phase will be affected by transition
        // isAppear && el.scrollHeight;
    },
    onEntering(el) {
        // console.log('onEntering');
        if (el.scrollHeight !== 0) {
            let height = 0;
            // If it's exiting, the scrollHeight is wrong, because it's instant height
            // Preventing changes in content height before deployment should not be limited to _scrollHeight
            if(_MotionTail(el).isExiting) {
                height = el._isBorderBox ?
                    el._scrollHeight
                    + parseFloat(el._borderTop)
                    + parseFloat(el._borderBottom)
                    :
                    el._scrollHeight
                    - parseFloat(el._paddingTop)
                    - parseFloat(el._paddingBottom);
                el.style.height = `${height}px`;
            }else {
                height = el._isBorderBox ?
                    el.scrollHeight
                    + parseFloat(el._paddingTop)
                    + parseFloat(el._paddingBottom)
                    + parseFloat(el._borderTop)
                    + parseFloat(el._borderBottom)
                    :
                    el.scrollHeight;
            }
            /*const height = el._isBorderBox ?
                el.scrollHeight
                + parseFloat(el._paddingTop)
                + parseFloat(el._paddingBottom)
                + parseFloat(el._borderTop)
                + parseFloat(el._borderBottom)
                :
                el.scrollHeight;*/
            /*const height = el._isBorderBox ?
                el._scrollHeight
                + parseFloat(el._borderTop)
                + parseFloat(el._borderBottom)
                :
                el._scrollHeight
                - parseFloat(el._paddingTop)
                - parseFloat(el._paddingBottom);*/
            el.style.height = `${height}px`;
        } else {
            el.style.height = '';
        }
        el.style.paddingTop = el._paddingTop;
        el.style.paddingBottom = el._paddingBottom;
        el.style.borderTopWidth = el._borderTop;
        el.style.borderBottomWidth = el._borderBottom;
        addClass(el, 'km-collapse-transition');
    },
    onEntered(el) {
        // console.log('onEntered');
        removeClass(el, 'km-collapse-transition');
        el.style.height = '';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
        el.style.borderTopWidth = el.dataset.oldBorderTop;
        el.style.borderBottomWidth = el.dataset.oldBorderBottom;
        el.style.overflow = el.dataset.oldOverflow;

        _MotionTail(el).stop();
    },
    onExit(el) {
        // prevent props of unmountOnExit
        _Transition.validateStore(el);

        // console.log('onExit');

        // Before each complete exit, record the current scrollHeight to prevent child element height from changing
        if(!_MotionTail(el).isEntering) el._scrollHeight = el.scrollHeight;

        _MotionTail(el).toExit();

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
            addClass(el, 'km-collapse-transition');
            el.style.height = '0';
            el.style.paddingTop = '0';
            el.style.paddingBottom = '0';
            el.style.borderTopWidth = '0';
            el.style.borderBottomWidth = '0';
        }
    },
    onExited(el) {
        // console.log('onExited');
        removeClass(el, 'km-collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
        el.style.borderTopWidth = el.dataset.oldBorderTop;
        el.style.borderBottomWidth = el.dataset.oldBorderBottom;

        _MotionTail(el).stop();
    },
}

function CollapseTransition(props) {
    const {
        children,
        visible,
        appear: isAppear,
        unmountOnExit,
        exclusive,
        visibleChange,
        handler
    } = props;

    const {
        onInit,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
        initStore
    } = _Transition;

    // ---------------------------------- logic code ----------------------------------
    const elRef = useRef(null);

    useDidMount(() => {
        handler && (handler.current = {
            getEle() {
              return elRef.current;
            },
            refreshEle() {
                initStore(this.getEle());
            }
        });
    });

    // ---------------------------------- event ----------------------------------
    const init = useCallback(el => {
        // store nativeElement
        elRef.current = el;
        onInit(el, unmountOnExit);
    }, [unmountOnExit]);

    const enter = useCallback((el, done) => {
        return motionAnimation(el, {
            start: onEnter,
            active: onEntering,
            end(el) {
                onEntered(el);
                done();
            },
        })
    }, [onEnter, onEntering, onEntered]);

    const leave = useCallback((el, done) => {
        return motionAnimation(el, {
            start: onExit,
            active: onExiting,
            end(el) {
                onExited(el);
                done();
            },
        })
    }, [onExit, onExiting, onExited]);

    const appear = isAppear ? enter : null;

    const onEnd = useCallback(() => {
        visibleChange(visible);
    }, [visible, visibleChange]);

    // ---------------------------------- logic code ----------------------------------
    const animation = useMemo(() => {
        return {
            init,
            appear,
            enter,
            leave,
        }
    }, [init, enter, leave, appear]);

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
            animation={animation}
            transitionAppear={isAppear}
            onEnd={onEnd}
            exclusive={exclusive}
        >
            {renderChildren}
        </Motion>
    )
}
CollapseTransition.propTypes = CollapseTransitionProps;
CollapseTransition.defaultProps = CollapseTransitionDefaultProps;

export default memo(CollapseTransition);