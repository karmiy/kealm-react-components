import React, { useRef, useMemo } from 'react';
import ReactDom from 'react-dom';
import { Transition } from 'react-transition-group';
import addEventListener from 'add-dom-event-listener';
import { useDidMount } from 'hooks';
import {addClass, getStyle, removeClass} from 'utils/dom';
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

/*const $Transition = {
    onEnter(el) {
        addClass(el, 'collapse-transition');
        if (!el.dataset) el.dataset = {};

        if(!el.dataset.oldPaddingTop) {
            el.dataset.oldPaddingTop = getStyle(el, 'padding-top');
        }
        if(!el.dataset.oldPaddingBottom) {
            el.dataset.oldPaddingBottom = getStyle(el, 'padding-bottom');
        }
        if(!el.dataset.oldBorderTopWidth) {
            el.dataset.oldBorderTopWidth = getStyle(el, 'border-top-width');
        }
        if(!el.dataset.oldBorderBottomWidth) {
            el.dataset.oldBorderBottomWidth = getStyle(el, 'border-bottom-width');
        }
        if(!el.dataset.boxSizing) {
            el.dataset.boxSizing = getStyle(el, 'box-sizing');
        }

        el.style.height = '0';
        el.style.paddingTop = '0';
        el.style.paddingBottom = '0';
        el.style.borderTopWidth = '0';
        el.style.borderBottomWidth = '0';
        el.style.display = el.dataset.display || '';
    },
    onEntering(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
            const height = el.dataset.boxSizing === 'border-box' ?
                el.scrollHeight
                + parseFloat(el.dataset.oldPaddingTop)
                + parseFloat(el.dataset.oldPaddingBottom)
                + parseFloat(el.dataset.oldBorderTopWidth)
                + parseFloat(el.dataset.oldBorderBottomWidth)
                :
                el.scrollHeight;
            el.style.height = height + 'px';
        } else {
            el.style.height = '';
        }
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
        el.style.borderTopWidth = el.dataset.oldBorderTopWidth;
        el.style.borderBottomWidth = el.dataset.oldBorderBottomWidth;
        el.style.overflow = 'hidden';
    },
    onEntered(el) {
        removeClass(el, 'collapse-transition');
        el.style.height = '';
        el.style.paddingTop = '';
        el.style.paddingBottom = '';
        el.style.borderTopWidth = '';
        el.style.borderBottomWidth = '';
        el.style.overflow = el.dataset.oldOverflow;
    },
    onExit(el) {
        if (!el.dataset) el.dataset = {};

        if(!el.dataset.oldPaddingTop) {
            el.dataset.oldPaddingTop = getStyle(el, 'padding-top');
        }
        if(!el.dataset.oldPaddingBottom) {
            el.dataset.oldPaddingBottom = getStyle(el, 'padding-bottom');
        }
        if(!el.dataset.oldBorderTopWidth) {
            el.dataset.oldBorderTopWidth = getStyle(el, 'border-top-width');
        }
        if(!el.dataset.oldBorderBottomWidth) {
            el.dataset.oldBorderBottomWidth = getStyle(el, 'border-bottom-width');
        }
        if(!el.dataset.boxSizing) {
            el.dataset.boxSizing = getStyle(el, 'box-sizing');
        }
        el.dataset.oldOverflow = el.style.overflow;
        el.dataset.display = el.style.display;

        const height = el.dataset.boxSizing === 'border-box' ?
            el.scrollHeight
            + parseFloat(el.dataset.oldBorderTopWidth)
            + parseFloat(el.dataset.oldBorderBottomWidth)
            :
            el.scrollHeight
            - parseFloat(el.dataset.oldPaddingTop)
            - parseFloat(el.dataset.oldPaddingBottom)
        el.style.height = height + 'px';
        el.style.overflow = 'hidden';
    },
    onExiting(el) {
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
        removeClass(el, 'collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
        el.style.borderTopWidth = el.dataset.oldBorderTopWidth;
        el.style.borderBottomWidth = el.dataset.oldBorderBottomWidth;
        el.style.display = 'none';
    },
}*/

const $$Transition = {
    onInit(el, visible = true) {
        // 初始化dataset对象
        if (!el.dataset) el.dataset = {};
        // 存储display
        el.dataset.display = el.style.display;
        // 特殊存储实际的paddingTop、paddingBottom、borderTopWidth、border
        // 初始不可见 => display: none
        if(!visible) {
            el.style.display = 'none';
        }
    },
    onEnter(el) {
        addClass(el, 'collapse-transition');
        if (!el.dataset) el.dataset = {};

        if(!el.dataset.oldPaddingTop) {
            el.dataset.oldPaddingTop = getStyle(el, 'padding-top');
        }
        if(!el.dataset.oldPaddingBottom) {
            el.dataset.oldPaddingBottom = getStyle(el, 'padding-bottom');
        }
        if(!el.dataset.oldBorderTopWidth) {
            el.dataset.oldBorderTopWidth = getStyle(el, 'border-top-width');
        }
        if(!el.dataset.oldBorderBottomWidth) {
            el.dataset.oldBorderBottomWidth = getStyle(el, 'border-bottom-width');
        }
        if(!el.dataset.boxSizing) {
            el.dataset.boxSizing = getStyle(el, 'box-sizing');
        }

        el.style.height = '0';
        el.style.paddingTop = '0';
        el.style.paddingBottom = '0';
        el.style.borderTopWidth = '0';
        el.style.borderBottomWidth = '0';
        el.style.display = el.dataset.display || '';
    },
    onEntering(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
            const height = el.dataset.boxSizing === 'border-box' ?
                el.scrollHeight
                + parseFloat(el.dataset.oldPaddingTop)
                + parseFloat(el.dataset.oldPaddingBottom)
                + parseFloat(el.dataset.oldBorderTopWidth)
                + parseFloat(el.dataset.oldBorderBottomWidth)
                :
                el.scrollHeight;
            el.style.height = height + 'px';
        } else {
            el.style.height = '';
        }
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
        el.style.borderTopWidth = el.dataset.oldBorderTopWidth;
        el.style.borderBottomWidth = el.dataset.oldBorderBottomWidth;
        el.style.overflow = 'hidden';
    },
    onEntered(el) {
        removeClass(el, 'collapse-transition');
        el.style.height = '';
        el.style.paddingTop = '';
        el.style.paddingBottom = '';
        el.style.borderTopWidth = '';
        el.style.borderBottomWidth = '';
        el.style.overflow = el.dataset.oldOverflow;
    },
    onExit(el) {
        if (!el.dataset) el.dataset = {};

        if(!el.dataset.oldPaddingTop) {
            el.dataset.oldPaddingTop = getStyle(el, 'padding-top');
        }
        if(!el.dataset.oldPaddingBottom) {
            el.dataset.oldPaddingBottom = getStyle(el, 'padding-bottom');
        }
        if(!el.dataset.oldBorderTopWidth) {
            el.dataset.oldBorderTopWidth = getStyle(el, 'border-top-width');
        }
        if(!el.dataset.oldBorderBottomWidth) {
            el.dataset.oldBorderBottomWidth = getStyle(el, 'border-bottom-width');
        }
        if(!el.dataset.boxSizing) {
            el.dataset.boxSizing = getStyle(el, 'box-sizing');
        }
        el.dataset.oldOverflow = el.style.overflow;
        el.dataset.display = el.style.display;

        const height = el.dataset.boxSizing === 'border-box' ?
            el.scrollHeight
            + parseFloat(el.dataset.oldBorderTopWidth)
            + parseFloat(el.dataset.oldBorderBottomWidth)
            :
            el.scrollHeight
            - parseFloat(el.dataset.oldPaddingTop)
            - parseFloat(el.dataset.oldPaddingBottom)
        el.style.height = height + 'px';
        el.style.overflow = 'hidden';
    },
    onExiting(el) {
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
        removeClass(el, 'collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
        el.style.borderTopWidth = el.dataset.oldBorderTopWidth;
        el.style.borderBottomWidth = el.dataset.oldBorderBottomWidth;
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
    } = $$Transition;

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