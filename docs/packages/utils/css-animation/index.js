import Event from './Event';
import { getStyle, addClass, removeClass } from 'utils/common/dom';
import raf from "utils/common/raf";

const isCssAnimationSupported = Event.endEvents.length !== 0;
const capitalPrefixes = ['Webkit',
    'Moz',
    'O',
    // ms is special .... !
    'ms'];

function fixBrowserByTimeout(node) {
    if (isCssAnimationSupported) {
        const transitionDelay = parseFloat(getStyle(node, 'transition-delay')) || 0;
        const transitionDuration = parseFloat(getStyle(node, 'transition-duration')) || 0;
        const animationDelay = parseFloat(getStyle(node, 'animation-delay')) || 0;
        const animationDuration = parseFloat(getStyle(node, 'animation-duration')) || 0;
        const time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
        // sometimes, browser bug
        node.kmEndAnimTimeout = setTimeout(() => {
            node.kmEndAnimTimeout = null;
            if (node.kmEndListener) {
                node.kmEndListener();
            }
        }, (time) * 1000 + 200);
    }
}

function clearBrowserBugTimeout(node) {
    if (node.kmEndAnimTimeout) {
        clearTimeout(node.kmEndAnimTimeout);
        node.kmEndAnimTimeout = null;
    }
}

/*const nextFrame = function(callback) {
    return raf(() => {
        raf(callback)
    });
}*/
const nextFrame = function(callback) {
    const fps = {
        prev: raf(() => {
            fps.next = raf(callback);
        }),
        next: null,
    }
    return fps;
}

const cancelFrame = function(fps) {
    raf.cancel(fps.prev);
    raf.cancel(fps.next);
    fps = null;
}

/**
 * CSS-Animation
 * @param node: DOM
 * @param transitionName: string like 'km-fade-in' or object like {name: 'km-fade-in', active: 'km-fade-in-active', to: 'km-fade-in-to'}
 * @param endCallback: If it's function, execute at the end of the animation; else it's object like {start:func, active: func, end: func}
 * @returns {{stop(): void}}
 */
const cssAnimation = (node, transitionName, endCallback) => {
    const nameIsObj = typeof transitionName === 'object';
    const className = nameIsObj ? transitionName.name : transitionName;
    const activeClassName = nameIsObj ? transitionName.active : `${transitionName}-active`;
    const toClassName = nameIsObj ? transitionName.to : `${transitionName}-to`;
    let end = endCallback;
    let start;
    let active;

    if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
        start = endCallback.start;
        active = endCallback.active;
        end = endCallback.end;
    }

    // If there was an animation in progress, end it
    if (node.kmEndListener) {
        node.kmEndListener();
    }
    node.kmEndListener = (e) => {
        // if (e && e.target !== node || node.kmAnimTimeout !== null) return;
        // Three quick clicks in a row can trigger faster than the next frame
        if (e && (e.target !== node || node.kmAnimTimeout !== null)) return;

        if (node.kmAnimTimeout) {
            cancelFrame(node.kmAnimTimeout);
            node.kmAnimTimeout = null;
        }

        clearBrowserBugTimeout(node);

        removeClass(node, className);
        removeClass(node, activeClassName);
        removeClass(node, toClassName);

        Event.removeEndEventListener(node, node.kmEndListener);
        node.kmEndListener = null;

        // The end callback is executed only at the end of the transition
        if (e && end) {
            end(node);
        }
    };

    // Add listen, animation end execution
    Event.addEndEventListener(node, node.kmEndListener);

    // Start Hook
    if (start) {
        start(node);
    }

    addClass(node, className); // fade-in
    addClass(node, activeClassName); // fade-in-active

    node.kmAnimTimeout = nextFrame(() => {
        node.kmAnimTimeout = null;

        removeClass(node, className);
        addClass(node, toClassName); // fade-in-to

        if (active) {
            // setTimeout(active, 0);
            active(node);
        }
        fixBrowserByTimeout(node);
        // 30ms for firefox
    });

    return {
        stop() {
            if (node.kmEndListener) {
                node.kmEndListener();
            }
        },
    };
};

const motionAnimation = (node, endCallback) => {
    let end = endCallback;
    let start;
    let active;

    if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
        start = endCallback.start;
        active = endCallback.active;
        end = endCallback.end;
    }

    // If there was an animation in progress, end it
    if (node.kmEndListener) {
        node.kmEndListener();
    }
    node.kmEndListener = (e) => {
        // if (e && e.target !== node || node.kmAnimTimeout !== null) return;
        // Three quick clicks in a row can trigger faster than the next frame
        if (e && (e.target !== node || node.kmAnimTimeout !== null)) return;

        if (node.kmAnimTimeout) {
            cancelFrame(node.kmAnimTimeout);
            node.kmAnimTimeout = null;
        }

        clearBrowserBugTimeout(node);

        Event.removeEndEventListener(node, node.kmEndListener);
        node.kmEndListener = null;

        // The end callback is executed only at the end of the transition
        if (e && end) {
            end(node);
        }
    };

    // Add listen, animation end execution
    Event.addEndEventListener(node, node.kmEndListener);

    // Start Hook
    if (start) {
        start(node);
    }

    node.kmAnimTimeout = nextFrame(() => {
        node.kmAnimTimeout = null;

        if (active) {
            // setTimeout(active, 0);
            active(node);
        }
        fixBrowserByTimeout(node);
        // 30ms for firefox
    });

    return {
        stop() {
            if (node.kmEndListener) {
                node.kmEndListener();
            }
        },
    };
};

const styleAnimation = (node, style, callback) => {
    if (node.kmEndListener) {
        node.kmEndListener();
    }

    node.kmEndListener = (e) => {
        if (e && e.target !== node || node.kmAnimTimeout !== null) return;

        if (node.kmAnimTimeout) {
            raf.cancel(node.kmAnimTimeout);
            node.kmAnimTimeout = null;
        }

        clearBrowserBugTimeout(node);

        Event.removeEndEventListener(node, node.kmEndListener);
        node.kmEndListener = null;

        // Usually this optional callback is used for informing an owner of
        // a leave animation and telling it to remove the child.
        if (callback) {
            callback(node);
        }
    };

    Event.addEndEventListener(node, node.kmEndListener);

    node.kmAnimTimeout = nextFrame(() => {
        for (const s in style) {
            if (style.hasOwnProperty(s)) {
                node.style[s] = style[s];
            }
        }
        node.kmAnimTimeout = null;
        fixBrowserByTimeout(node);
    });
};

cssAnimation.setTransition = (node, p, value) => {
    let property = p;
    let v = value;
    if (value === undefined) {
        v = property;
        property = '';
    }
    property = property || '';
    capitalPrefixes.forEach((prefix) => {
        node.style[`${prefix}Transition${property}`] = v;
    });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

export {
    isCssAnimationSupported,
    motionAnimation,
    styleAnimation,
};

export default cssAnimation;
