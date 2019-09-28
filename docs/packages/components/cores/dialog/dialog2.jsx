import React from 'react';
import { DialogProps, DialogDefaultProps } from './interface';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../../common';
import { useContextConf, useClassName } from 'hooks';

function Dialog2(props) {
    const {
        className,
        children,
        visible,
        ...others
    } = props;
    const { componentCls } = useContextConf(`dialog`);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- render ----------------------------------
    /*return (
        <Portal visible={visible}>{children}</Portal>
    );*/
    const onEnter = (el) => {
        el.style.display = '';
        console.log(el.className);
    }
    const onEntering = (el) => {
        console.log(el.className);
    }
    const onEntered = (el) => {
        console.log(el.className);
    }
    const onExit = (el) => {
        console.log(el.className);
    }
    const onExiting = (el) => {
        console.log(el.className);
    }
    const onExited = (el) => {
        console.log(el.className);
        el.style.display = 'none';
    }
    const addEndListener = (node, done) => {
        node.addEventListener('transitionend', done, false);
    }
    return (
        <Portal visible={visible}>
            <CSSTransition
                in={visible}
                addEndListener={addEndListener}
                classNames="my-node"
                onEnter={onEnter}
                onEntering={onEntering}
                onEntered={onEntered}
                onExit={onExit}
                onExiting={onExiting}
                onExited={onExited}
            >
                <div>123</div>
            </CSSTransition>
        </Portal>
    )
}

Dialog2.propTypes = DialogProps;
Dialog2.defaultProps = DialogDefaultProps;

export default Dialog2;