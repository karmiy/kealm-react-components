import React, { useRef, useCallback } from 'react';
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

class Test extends React.Component {
    componentWillReceiveProps(nextProps) {
        console.log(this.props.name, nextProps.name);
    }
    componentDidMount() {
        setTimeout(() => {
            this.test();
        }, 2000);
    }
    test() {
        console.log(this.props.name);
    }
    render() {
        return <span>123</span>
    }
}
function Test2(props) {
    const {
        showProp
    } = props;
    const test = useCallback(() => {
        console.log(showProp, 222);
    }, [showProp])

    setTimeout(() => {
        console.log(showProp, 111);
        test();
    }, 1000);
    return null;
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
    }, 200);*/

    // ---------------------------------- render ----------------------------------
    /*return (
        <Animate transitionName={'km-fade-k'}>
            {children}
        </Animate>
    )*/
    /*return (
        <Motion transitionName={'km-fade-k'} >
            {children}
        </Motion>
    )*/
    return (
        <Test2 showProp={visible} />
    )
    /*return (
        <Test name={props.name}>1</Test>
    )*/
}
FadeTransition.propTypes = FadeTransitionProps;
FadeTransition.defaultProps = FadeTransitionDefaultProps;

export default FadeTransition;