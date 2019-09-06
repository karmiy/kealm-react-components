import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Transition, CSSTransition } from 'react-transition-group';
import { CollapseProps, CollapseDefaultProps } from "./interface";
import { useContextConf, useClassName } from 'hooks';

function Collapse(props) {
    const [show, setShow] = useState(true);
    const { componentCls } = useContextConf('collapse');
    const {
        children,
        className,
        ...others
    } = props;

    const classNames = useClassName({
        [className]: className,
        [componentCls]: true,
    });

    /*const onEnter = (node, isAppearing) => {
        node.style.display = 'block';
        node.style.height = 0;
        node.classList.add('collapse-transition')
        // node.style.transition = '0.3s height ease-in-out';
    }
    const onEntering = (node, isAppearing) => {
        node.style.height = node.scrollHeight + 'px';
    }
    const onEntered = (node, isAppearing) => {
        node.style.height = '';
        node.classList.remove('collapse-transition')
        // node.style.transition = '';
    }

    // 三个退出的状态的事件
    const onExit = (node, isAppearing) => {
        node.style.height = node.scrollHeight + 'px';
    }
    const onExiting = (node, isAppearing) => {
        node.classList.add('collapse-transition')
        // node.style.transition = '0.3s height ease-in-out';
        node.style.height = 0;
    }
    const onExited = (node, isAppearing) => {
        node.style.height = '';
        // node.style.transition = '';
        node.classList.remove('collapse-transition')
        node.style.display = 'none';
    }
    const addEndListener = (node, done) => {
        node.addEventListener('transitionend', done, false);
    }
    return (
        <div className={classNames}>
            <button onClick={() => setShow(show => !show)}>切换状态,{show?1:0}</button>
            {/!*<Transition
                onEnter={onEnter}
                onEntering={onEntering}
                onEntered={onEntered}

                onExit={onExit}
                onExiting={onExiting}
                onExited={onExited}
                in={show}
                unmountOnExit={false} // 为true 代表退出的时候移除dom
                appear={false} // 为true  渲染的时候就直接执行动画，默认false
                timeout={2000}
            >
                {
                    state => {
                        return (
                            <div style={{overflow: 'hidden'}}>
                                {children}
                            </div>
                        )
                    }
                }
            </Transition>*!/}
            <CSSTransition
                in={show}
                addEndListener={addEndListener}
                onEnter={onEnter}
                onEntering={onEntering}
                onEntered={onEntered}

                onExit={onExit}
                onExiting={onExiting}
                onExited={onExited}
            >
                <div style={{overflow: 'hidden'}}>
                    {children}
                </div>
            </CSSTransition>
        </div>
    )*/

    return (
        <div role='tablist' className={classNames}>
            {children}
        </div>
    )
}

Collapse.propTypes = CollapseProps;
Collapse.defaultProps = CollapseDefaultProps;

export default Collapse