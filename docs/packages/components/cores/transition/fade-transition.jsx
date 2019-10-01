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
        visible,
        children,
    } = props;
    const _children = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            style: {
                display: visible ? '' : 'none',
                ...child.props.style,
            }
        })
    });
    return _children
}

class Test3 extends React.Component {
    componentDidMount() {
        console.log(ReactDom.findDOMNode(this));
    }
    render() {

        return this.props.children;
    }
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
    const animation2 = {
        enter() {
            console.log(123);
        }
    }
    return (
        <Motion showProp={'visible'} animation={animation} exclusive transitionName={'km-fade-k'}  onEnd={() => {}}>
            {React.Children.map(children, (child, index) => {
                return <RenderWrapper key={index} visible={visible}>{child}</RenderWrapper>
            })}
            <RenderWrapper key={3} visible={!visible}>
                <p>3333</p>
            </RenderWrapper>
        </Motion>
    )
    /*return (
        <Test2 showProp={visible} />
    )*/
    /*return (
        <Test name={props.name}>1</Test>
    )*/
    /*return (
        <RenderWrapper visible={visible} unmountOnExit>{children}</RenderWrapper>
    )*/
}
FadeTransition.propTypes = FadeTransitionProps;
FadeTransition.defaultProps = FadeTransitionDefaultProps;

export default FadeTransition;